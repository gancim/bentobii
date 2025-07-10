import React, { useState, useEffect, useRef } from 'react';
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
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import RecipeCard from '../components/RecipeCard';
import { japaneseRecipes } from '../recipes.js';
import { italianRecipes } from '../recipes.it.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { t } from '../translations';

type FavoritesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Favorites'>;

interface FavoritesScreenProps {
  navigation: FavoritesScreenNavigationProp;
  route: RouteProp<RootStackParamList, 'Favorites'>;
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

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ navigation, route }) => {
  const language = route?.params?.language || 'ja';
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoriteIds = JSON.parse(favorites);
        const allRecipes = [...japaneseRecipes, ...italianRecipes];
        const favoritesList = allRecipes
          .filter(recipe => favoriteIds.includes(recipe.id))
          .map(recipe => ({
            ...recipe,
            nutrition: recipe.nutrition || {
              calories: recipe.calories || 0,
              protein: recipe.protein || 0,
              carbs: recipe.carbs || 0,
              fat: recipe.fat || 0,
            },
          }));
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
        showToast(t('removed-from-favorites', language));
      }
    } catch (error) {
      showToast(t('error', language));
    }
  };

  const showToast = (message: string) => {
    setToast(message);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast(null), 1500);
  };

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe, language });
  };

  const renderRecipeItem = ({ item }: { item: Recipe }) => (
    <View style={styles.recipeContainer}>
      <RecipeCard
        recipe={item}
        language={language}
        onPress={() => handleRecipePress(item)}
        isFavorite={true}
        onToggleFavorite={() => removeFromFavorites(item.id)}
      />
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>{t('loading-favorites', language)}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIconBtn}>
          <Text style={styles.headerIcon}>{'‹'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {t('favorites', language)}
        </Text>
        <View style={{ width: 32 }} />
      </View>
      <Text style={styles.subtitle}>
        {t('recipes-count', language).replace('{count}', favoriteRecipes.length)}
      </Text>
      {favoriteRecipes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>{t('no-favorites-yet', language)}</Text>
          <Text style={styles.emptyText}>
            {t('start-adding-favorites', language)}
          </Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>{t('browse-recipes', language)}</Text>
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
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c7a7b',
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 8,
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
    minHeight: 400,
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
    paddingBottom: 32,
  },
  recipeContainer: {
    marginBottom: 16,
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingHorizontal: 12,
    height: 56,
    marginBottom: 4,
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

export default FavoritesScreen; 