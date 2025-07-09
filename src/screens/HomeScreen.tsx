import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import RecipeCard from '../components/RecipeCard';
import { japaneseRecipes } from '../recipes';
import { italianRecipes } from '../recipes.it';
import { translations } from '../translations';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
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

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentLanguage, setCurrentLanguage] = useState('ja');
  const [currentCountry, setCurrentCountry] = useState('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Combine all recipes
    const allRecipes = [...japaneseRecipes, ...italianRecipes];
    setRecipes(allRecipes);
    setFilteredRecipes(allRecipes);
    setLoading(false);
  }, []);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, currentFilter, currentCountry]);

  const filterRecipes = () => {
    let filtered = recipes.filter(recipe => {
      // Filter by country
      const countryMatch = currentCountry === 'ALL' || recipe.country === currentCountry;
      
      // Filter by meal type
      const typeMatch = currentFilter === 'all' || recipe.type === currentFilter;
      
      // Filter by search term
      const searchMatch = !searchTerm || 
        recipe.name[currentLanguage as keyof typeof recipe.name].toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients[currentLanguage as keyof typeof recipe.ingredients].some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return countryMatch && typeMatch && searchMatch;
    });

    setFilteredRecipes(filtered);
  };

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  const renderFilterButton = (filter: string, label: string) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        currentFilter === filter && styles.filterButtonActive
      ]}
      onPress={() => setCurrentFilter(filter)}
    >
      <Text style={[
        styles.filterButtonText,
        currentFilter === filter && styles.filterButtonTextActive
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderRecipeItem = ({ item }: { item: Recipe }) => (
    <RecipeCard
      recipe={item}
      language={currentLanguage}
      onPress={() => handleRecipePress(item)}
    />
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2c7a7b" />
          <Text style={styles.loadingText}>Loading recipes...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.title}>BentoBii</Text>
            <Text style={styles.subtitle}>糖尿病ダイエットレシピ</Text>
          </View>
          <TouchableOpacity
            style={styles.favoritesButton}
            onPress={() => navigation.navigate('Favorites')}
          >
            <Text style={styles.favoritesIcon}>❤️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search ingredients..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholderTextColor="#666"
        />
      </View>

      {/* Language and Country Selectors */}
      <View style={styles.selectorContainer}>
        <TouchableOpacity
          style={styles.selectorButton}
          onPress={() => setCurrentLanguage(currentLanguage === 'ja' ? 'it' : 'ja')}
        >
          <Text style={styles.selectorText}>
            {currentLanguage === 'ja' ? '日本語' : 'Italiano'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.selectorButton}
          onPress={() => setCurrentCountry(currentCountry === 'ALL' ? 'JP' : currentCountry === 'JP' ? 'IT' : 'ALL')}
        >
          <Text style={styles.selectorText}>
            {currentCountry === 'ALL' ? 'World' : currentCountry === 'JP' ? 'Japan' : 'Italy'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Filter Buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {renderFilterButton('all', 'All')}
        {renderFilterButton('breakfast', 'Breakfast')}
        {renderFilterButton('lunch', 'Lunch')}
        {renderFilterButton('dinner', 'Dinner')}
        {renderFilterButton('snack', 'Snack')}
      </ScrollView>

      {/* Recipe List */}
      <FlatList
        data={filteredRecipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.recipeList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No recipes found</Text>
          </View>
        }
      />
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
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  selectorContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  selectorButton: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flex: 1,
  },
  selectorText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#4a5568',
  },
  filterContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  filterContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#fff',
  },
  filterButtonActive: {
    backgroundColor: '#2c7a7b',
    borderColor: '#2c7a7b',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#4a5568',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  recipeList: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#4a5568',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#4a5568',
  },
  favoritesButton: {
    padding: 8,
  },
  favoritesIcon: {
    fontSize: 24,
    color: '#fff',
  },
});

export default HomeScreen; 