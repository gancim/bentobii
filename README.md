# BentoBii - React Native App

A React Native version of the BentoBii diabetes-friendly recipe app, featuring Japanese and Italian recipes with multilingual support.

## Features

- **Multilingual Support**: Japanese and Italian languages
- **Recipe Categories**: Breakfast, Lunch, Dinner, and Snacks
- **Search Functionality**: Search recipes by ingredients
- **Favorites System**: Save and manage favorite recipes
- **Nutrition Information**: Detailed nutrition facts for each recipe
- **Country Filtering**: Filter recipes by country (Japan, Italy, or All)
- **Responsive Design**: Optimized for mobile devices

## Tech Stack

- React Native 0.80.1
- TypeScript
- React Navigation
- AsyncStorage for local data persistence
- React Native Safe Area Context

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd BentoBiiApp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. For iOS development, install CocoaPods:
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### iOS
```bash
npx react-native run-ios
```

#### Android
```bash
npx react-native run-android
```

## Project Structure

```
src/
├── components/
│   └── RecipeCard.tsx          # Recipe card component
├── screens/
│   ├── HomeScreen.tsx          # Main recipe list screen
│   ├── RecipeDetailScreen.tsx  # Recipe detail screen
│   └── FavoritesScreen.tsx     # Favorites management screen
├── recipes.js                  # Japanese recipes data
├── recipes.it.js              # Italian recipes data
└── translations.js            # Translation data
```

## App Features

### Home Screen
- Browse all recipes with search and filtering
- Switch between Japanese and Italian languages
- Filter by country (World, Japan, Italy)
- Filter by meal type (All, Breakfast, Lunch, Dinner, Snack)
- Access favorites from the header

### Recipe Detail Screen
- View complete recipe information
- See nutrition facts
- View ingredients and instructions
- Toggle favorite status
- Switch between languages

### Favorites Screen
- View all favorited recipes
- Remove recipes from favorites
- Navigate to recipe details

## Data Structure

Recipes are stored in JSON format with the following structure:

```typescript
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
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository. 