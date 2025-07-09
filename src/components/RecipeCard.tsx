import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

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

interface RecipeCardProps {
  recipe: Recipe;
  language: string;
  onPress: () => void;
}

const { width } = Dimensions.get('window');

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, language, onPress }) => {
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

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.flagContainer}>
        <Text style={styles.flag}>{getCountryFlag(recipe.country)}</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {recipe.name[language as keyof typeof recipe.name]}
          </Text>
          <Text style={styles.type}>
            {getTypeLabel(recipe.type)}
          </Text>
        </View>
        
        <Text style={styles.description} numberOfLines={2}>
          {recipe.description[language as keyof typeof recipe.description]}
        </Text>
        
        <View style={styles.meta}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Calories</Text>
            <Text style={styles.metaValue}>{recipe.nutrition.calories}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Protein</Text>
            <Text style={styles.metaValue}>{recipe.nutrition.protein}g</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Carbs</Text>
            <Text style={styles.metaValue}>{recipe.nutrition.carbs}g</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Fat</Text>
            <Text style={styles.metaValue}>{recipe.nutrition.fat}g</Text>
          </View>
        </View>
        
        <View style={styles.tags}>
          {recipe.tags.slice(0, 3).map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
  },
  flagContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  flag: {
    fontSize: 20,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a202c',
    flex: 1,
    marginRight: 8,
  },
  type: {
    fontSize: 12,
    color: '#2c7a7b',
    backgroundColor: '#e6fffa',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: '#4a5568',
    lineHeight: 20,
    marginBottom: 12,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  metaItem: {
    alignItems: 'center',
    flex: 1,
  },
  metaLabel: {
    fontSize: 10,
    color: '#718096',
    marginBottom: 2,
  },
  metaValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a202c',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: '#f7fafc',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 11,
    color: '#4a5568',
  },
});

export default RecipeCard; 