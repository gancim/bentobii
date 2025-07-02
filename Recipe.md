# Recipe Data Structure & Prompt Guide

This document explains how to generate and add new recipes for different countries to the Bentobii project.

## 📝 Recipe Prompt for AI Generation

**Prompt Example:**
> Generate a diabetic-friendly, weight-loss recipe using ingredients commonly available in [COUNTRY]. The recipe should include:
> - A cute/kawaii emoji icon
> - Name (in both Japanese and the local language)
> - Short description (in both Japanese and the local language)
> - Meal type (breakfast, lunch, dinner, snack)
> - Prep time (minutes)
> - Cook time (minutes)
> - Servings
> - Difficulty (easy, medium, hard)
> - Nutrition: calories, carbs, protein, fat, fiber, sodium
> - Ingredients (array, in both Japanese and the local language)
> - Instructions (array, in both Japanese and the local language)
> - Tags (array, e.g. 'diabetic-friendly', 'low-carb', etc.)
> - Country code (e.g. 'JP', 'IT', etc.)

**Example Prompt:**
```
Generate a diabetic-friendly, weight-loss recipe for Spain. Include all fields: emoji icon, name (ja/es), description (ja/es), type, prepTime, cookTime, servings, difficulty, calories, carbs, protein, fat, fiber, sodium, ingredients (ja/es), instructions (ja/es), tags, country: 'ES'.
```

## 🗂️ Recipe Object Structure

Each recipe should be a JavaScript object with the following structure:

```js
{
  id: <number>,
  name: { ja: "...", <local>: "..." },
  icon: "🍳",
  description: { ja: "...", <local>: "..." },
  type: "breakfast" | "lunch" | "dinner" | "snack",
  prepTime: <number>,
  cookTime: <number>,
  servings: <number>,
  difficulty: "easy" | "medium" | "hard",
  calories: <number>,
  carbs: <number>,
  protein: <number>,
  fat: <number>,
  fiber: <number>,
  sodium: <number>,
  ingredients: {
    ja: ["..."],
    <local>: ["..."]
  },
  instructions: {
    ja: ["..."],
    <local>: ["..."]
  },
  tags: ["diabetic-friendly", ...],
  country: '<COUNTRY_CODE>'
}
```

- `<local>` is the language code for the country (e.g. `it` for Italian, `es` for Spanish).
- `country` should be the ISO 2-letter country code.

## 🌍 Adding Recipes for New Countries
- Create a new file: `recipes.<country_code>.js` (e.g. `recipes.es.js` for Spain).
- Export an array of recipes as `<country>Recipes` (e.g. `export const spanishRecipes = [...]`).
- Import and merge these in `app.js` as needed.

## 🏷️ Translation Guidelines
- Always provide both Japanese and the local language for `name`, `description`, `ingredients`, and `instructions`.
- Use clear, simple language for both translations.

---

For questions or contributions, open an issue or pull request on GitHub! 