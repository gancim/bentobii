# Recipes Folder

This folder contains all recipe data files for the BentoBiiApp React Native project.

## Structure
- `recipes.js`: Main recipe data file (e.g., Japanese recipes)
- `recipes.it.js`: Italian recipes data file
- (Add more files here for other cuisines or languages as needed)

## File Format
Each recipe file exports one or more recipe arrays/objects. Example:

```js
export const japaneseRecipes = [
  {
    id: 1,
    name: { en: 'Sushi', ja: '寿司', ... },
    description: { en: '...', ja: '...', ... },
    ingredients: { en: [...], ja: [...], ... },
    instructions: { en: [...], ja: [...], ... },
    type: 'Lunch',
    country: 'JP',
    tags: [...],
    nutrition: { calories: 200, protein: 10, carbs: 30, fat: 5 },
    icon: '🍣',
  },
  // ...more recipes
];
```

- **Multilingual:** All text fields (name, description, ingredients, instructions) are objects with keys for each supported language code.
- **Nutrition:** Each recipe should include a `nutrition` object with calories, protein, carbs, and fat.
- **Tags:** Use the `tags` array for dietary or category tags.
- **Country:** Use the ISO country code (e.g., 'JP', 'IT').

## Adding New Recipes
1. Add your new recipe object(s) to the appropriate file, or create a new file for a new cuisine/language.
2. Export your recipe array/object from the file.
3. Import and use the recipes in your screens/components as needed.

## Example Import
```js
import { japaneseRecipes } from './recipes/recipes.js';
import { italianRecipes } from './recipes/recipes.it.js';
```

## Notes
- Keep all recipe data files in this folder for better organization.
- Ensure all fields are properly internationalized for all supported languages. 