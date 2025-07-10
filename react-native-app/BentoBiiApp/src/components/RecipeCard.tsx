import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { t } from '../translations';

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
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, language, onPress, isFavorite, onToggleFavorite }) => {
  useEffect(() => {
    // translations.setLanguage(language); // Removed as per edit hint
  }, [language]);
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
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.95}>
      {/* Show heart icon if onToggleFavorite is provided, else show flag */}
      {onToggleFavorite ? (
        <TouchableOpacity
          style={styles.heartIconBtn}
          onPress={e => {
            e.stopPropagation();
            onToggleFavorite && onToggleFavorite();
          }}
          activeOpacity={0.7}
        >
          <Text style={[styles.heartIcon, { color: isFavorite ? '#2c7a7b' : '#bbb' }] }>
            {isFavorite ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={[styles.flag, styles.flagTopRight]}>{getCountryFlag(recipe.country)}</Text>
      )}
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {recipe.name[language as keyof typeof recipe.name]}
          </Text>
        </View>
        <Text style={styles.description}>
          {recipe.description[language as keyof typeof recipe.description]}
        </Text>
        <View style={styles.meta}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>{t('calories', language)}</Text>
            <Text style={styles.metaValue}>{recipe.nutrition.calories}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>{t('protein', language)}</Text>
            <Text style={styles.metaValue}>{recipe.nutrition.protein}g</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>{t('carbs', language)}</Text>
            <Text style={styles.metaValue}>{recipe.nutrition.carbs}g</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>{t('fat', language)}</Text>
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
  flag: {
    fontSize: 20,
  },
  flagTopRight: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,
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
  heartIconBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 2,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 16,
    padding: 4,
  },
  heartIcon: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default RecipeCard; 