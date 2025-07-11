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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRef } from 'react';
import { t } from '../translations';

type RecipeDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetail'>;
type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;

interface RecipeDetailScreenProps {
  navigation: RecipeDetailScreenNavigationProp;
  route: RecipeDetailScreenRouteProp;
}

const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({ navigation: _navigation, route }) => {
  const { recipe, language } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const currentLanguage = language || 'ja';
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    return () => {
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
    };
  }, []);

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
        return t('breakfast', currentLanguage);
      case 'lunch':
        return t('lunch', currentLanguage);
      case 'dinner':
        return t('dinner', currentLanguage);
      case 'snack':
        return t('snack', currentLanguage);
      default:
        return type;
    }
  };

  const toggleFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      let favoritesArray = favorites ? JSON.parse(favorites) : [];
      let message = '';
      if (isFavorite) {
        favoritesArray = favoritesArray.filter((id: number) => id !== recipe.id);
        message = t('removed-from-favorites', currentLanguage);
      } else {
        favoritesArray.push(recipe.id);
        message = t('added-to-favorites', currentLanguage);
      }
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
      setIsFavorite(!isFavorite);
      showToast(message);
    } catch (error) {
      showToast(t('failed-to-update-favorites', currentLanguage));
    }
  };

  const showToast = (message: string) => {
    setToast(message);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast(null), 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => _navigation.goBack()} style={styles.headerIconBtn}>
          <Text style={styles.headerIcon}>{'‹'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {recipe.name[currentLanguage as keyof typeof recipe.name]}
        </Text>
        <TouchableOpacity style={styles.headerIconBtn} onPress={toggleFavorite}>
          <Text style={[styles.favoriteIcon, { color: '#2c7a7b', fontSize: 24 }]}> 
            {isFavorite ? '\u2665' : '\u2661'}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.description}>
            {recipe.description[currentLanguage as keyof typeof recipe.description]}
          </Text>
        </View>
        {/* Nutrition Facts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('nutrition-facts', currentLanguage)}</Text>
          <View style={styles.nutritionGrid}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.calories}</Text>
              <Text style={styles.nutritionLabel}>{t('calories', currentLanguage)}</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.protein}g</Text>
              <Text style={styles.nutritionLabel}>{t('protein', currentLanguage)}</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.carbs}g</Text>
              <Text style={styles.nutritionLabel}>{t('carbs', currentLanguage)}</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{recipe.nutrition.fat}g</Text>
              <Text style={styles.nutritionLabel}>{t('fat', currentLanguage)}</Text>
            </View>
          </View>
        </View>
        {/* Ingredients */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('ingredients', currentLanguage)}</Text>
          {recipe.ingredients[currentLanguage as keyof typeof recipe.ingredients].map((ingredient: string, index: number) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{ingredient}</Text>
            </View>
          ))}
        </View>
        {/* Instructions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('instructions', currentLanguage)}</Text>
          {recipe.instructions[currentLanguage as keyof typeof recipe.instructions].map((instruction: string, index: number) => (
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
          <Text style={styles.sectionTitle}>{t('tags', currentLanguage)}</Text>
          <View style={styles.tagsContainer}>
            {recipe.tags.map((tag: string, index: number) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {toast && (
        <View style={styles.toast} pointerEvents="none">
          <Text style={styles.toastText}>{toast}</Text>
        </View>
      )}
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
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingHorizontal: 12,
    height: 56,
  },
  headerIconBtn: {
    padding: 8,
  },
  headerIcon: {
    color: '#2c7a7b',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    flex: 1,
    color: '#2c7a7b',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 8,
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
    color: '#2c7a7b',
  },
  favoriteActive: {
    color: '#2c7a7b',
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
  toast: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40,
    alignItems: 'center',
    zIndex: 100,
  },
  toastText: {
    backgroundColor: '#2c7a7b',
    color: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    fontSize: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
});

export default RecipeDetailScreen; 