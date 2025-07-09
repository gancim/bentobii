import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import RecipeCard from '../components/RecipeCard';
import { japaneseRecipes } from '../recipes';
import { italianRecipes } from '../recipes.it';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FavoritesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Favorites'>;

interface FavoritesScreenProps {
  navigation: FavoritesScreenNavigationProp;
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

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ navigation }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState('ja');

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoriteIds = JSON.parse(favorites);
        const allRecipes = [...japaneseRecipes, ...italianRecipes];
        const favoritesList = allRecipes.filter(recipe => 
          favoriteIds.includes(recipe.id)
        );
        setFavoriteRecipes(favoritesList);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load favorites');
    } finally {
      setLoading(false);
    }
  };

  const removeFromFavorites = async (recipeId: number) => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoriteIds = JSON.parse(favorites);
        const updatedFavorites = favoriteIds.filter((id: number) => id !== recipeId);
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        
        setFavoriteRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
        
        Alert.alert('Removed', 'Recipe removed from favorites');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to remove from favorites');
    }
  };

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  const renderRecipeItem = ({ item }: { item: Recipe }) => (
    <View style={styles.recipeContainer}>
      <RecipeCard
        recipe={item}
        language={currentLanguage}
        onPress={() => handleRecipePress(item)}
      />
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFromFavorites(item.id)}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading favorites...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.subtitle}>
          {favoriteRecipes.length} recipe{favoriteRecipes.length !== 1 ? 's' : ''}
        </Text>
      </View>

      {favoriteRecipes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No favorites yet</Text>
          <Text style={styles.emptyText}>
            Start adding recipes to your favorites to see them here
          </Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Browse Recipes</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={favoriteRecipes}
          renderItem={renderRecipeItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.recipeList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafc',
  },
  header: {
    backgroundColor: '#2c7a7b',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#4a5568',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#4a5568',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: '#2c7a7b',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  recipeList: {
    padding: 16,
  },
  recipeContainer: {
    marginBottom: 16,
  },
  removeButton: {
    backgroundColor: '#e53e3e',
    padding: 8,
    borderRadius: 6,
    marginTop: 8,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default FavoritesScreen; 