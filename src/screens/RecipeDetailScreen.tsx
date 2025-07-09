import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RecipeDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetail'>;
type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;

interface RecipeDetailScreenProps {
  navigation: RecipeDetailScreenNavigationProp;
  route: RecipeDetailScreenRouteProp;
}

interface Recipe {
  id: number;
  name: { ja: string; it: string };
  description: { ja: string; it: string };
  ingredients: { ja: string[]; it: string[] };
  instructions: { ja: string[]; it: string[] };
  type: string;
  country: string;
  tags: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({ navigation, route }) => {
  const { recipe } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('ja');

  const getCountryFlag = (country: string) => {
    switch (country) {
      case 'JP':
        return '🇯🇵';
      case 'IT':
        return '🇮🇹';
      default:
        return '🌍';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'breakfast':
        return 'Breakfast';
      case 'lunch':
        return 'Lunch';
      case 'dinner':
        return 'Dinner';
      case 'snack':
        return 'Snack';
      default:
        return type;
    }
  };

  const toggleFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      let favoritesArray = favorites ? JSON.parse(favorites) : [];
      
      if (isFavorite) {
        favoritesArray = favoritesArray.filter((id: number) => id !== recipe.id);
      } else {
        favoritesArray.push(recipe.id);
      }
      
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
      setIsFavorite(!isFavorite);
      
      Alert.alert(
        isFavorite ? 'Removed from Favorites' : 'Added to Favorites',
        isFavorite ? 'Recipe removed from your favorites' : 'Recipe added to your favorites'
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to update favorites');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.flag}>{getCountryFlag(recipe.country)}</Text>
            <View style={styles.titleContent}>
              <Text style={styles.title}>
                {recipe.name[currentLanguage as keyof typeof recipe.name]}
              </Text>
              <Text style={styles.type}>{getTypeLabel(recipe.type)}</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
            <Text style={[styles.favoriteIcon, isFavorite && styles.favoriteActive]}>
              ❤️
            </Text>
          </TouchableOpacity>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.description}>
            {recipe.description[currentLanguage as keyof typeof recipe.description]}
          </Text>
        </View>

        {/* Nutrition Facts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nutrition Facts</Text>
          <View style={styles.nutritionGrid}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.calories}</Text>
              <Text style={styles.nutritionLabel}>Calories</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.protein}g</Text>
              <Text style={styles.nutritionLabel}>Protein</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.carbs}g</Text>
              <Text style={styles.nutritionLabel}>Carbs</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.fat}g</Text>
              <Text style={styles.nutritionLabel}>Fat</Text>
            </View>
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe.ingredients[currentLanguage as keyof typeof recipe.ingredients].map((ingredient, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{ingredient}</Text>
            </View>
          ))}
        </View>

        {/* Instructions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          {recipe.instructions[currentLanguage as keyof typeof recipe.instructions].map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.instructionText}>{instruction}</Text>
            </View>
          ))}
        </View>

        {/* Tags */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tags</Text>
          <View style={styles.tagsContainer}>
            {recipe.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Language Toggle */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.languageButton}
            onPress={() => setCurrentLanguage(currentLanguage === 'ja' ? 'it' : 'ja')}
          >
            <Text style={styles.languageButtonText}>
              Switch to {currentLanguage === 'ja' ? 'Italiano' : '日本語'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafc',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 32,
    marginRight: 16,
  },
  titleContent: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 4,
  },
  type: {
    fontSize: 14,
    color: '#2c7a7b',
    backgroundColor: '#e6fffa',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  favoriteButton: {
    padding: 8,
  },
  favoriteIcon: {
    fontSize: 24,
    opacity: 0.5,
  },
  favoriteActive: {
    opacity: 1,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 8,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4a5568',
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nutritionItem: {
    alignItems: 'center',
    flex: 1,
  },
  nutritionValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 4,
  },
  nutritionLabel: {
    fontSize: 12,
    color: '#718096',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#2c7a7b',
    marginRight: 8,
    marginTop: 2,
  },
  listText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4a5568',
    flex: 1,
  },
  instructionItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2c7a7b',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumberText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  instructionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4a5568',
    flex: 1,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#f7fafc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    color: '#4a5568',
  },
  languageButton: {
    backgroundColor: '#2c7a7b',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  languageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default RecipeDetailScreen; 