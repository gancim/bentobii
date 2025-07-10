import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { japaneseRecipes } from '../recipes.js';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { t } from '../translations';
import RecipeCard from '../components/RecipeCard';

const LANGUAGES = [
  { label: 'English', code: 'en' },
  { label: 'Español', code: 'es' },
  { label: '日本語', code: 'ja' },
  { label: 'Italiano', code: 'it' },
  { label: '简体中文', code: 'zh' },
  { label: '繁體中文', code: 'zh-TW' },
  { label: 'हिन्दी', code: 'hi' },
  { label: 'العربية', code: 'ar' },
  { label: 'Português', code: 'pt' },
  { label: 'Français', code: 'fr' },
  { label: 'Русский', code: 'ru' },
  { label: 'Deutsch', code: 'de' },
  { label: '한국어', code: 'ko' },
];
const CATEGORIES = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'];

const COUNTRIES = [
  { code: 'All', flag: '🌍', name: { en: 'All Countries', ja: 'すべての国', es: 'Todos los países', it: 'Tutti i paesi', zh: '所有国家', 'zh-TW': '所有國家', hi: 'सभी देश', ar: 'جميع البلدان', pt: 'Todos os países', fr: 'Tous les pays', ru: 'Все страны', de: 'Alle Länder', ko: '모든 국가' } },
  { code: 'JP', flag: '🇯🇵', name: { en: 'Japan', ja: '日本', es: 'Japón', it: 'Giappone', zh: '日本', 'zh-TW': '日本', hi: 'जापान', ar: 'اليابان', pt: 'Japão', fr: 'Japon', ru: 'Япония', de: 'Japan', ko: '일본' } },
  { code: 'IT', flag: '🇮🇹', name: { en: 'Italy', ja: 'イタリア', es: 'Italia', it: 'Italia', zh: '意大利', 'zh-TW': '義大利', hi: 'इटली', ar: 'إيطاليا', pt: 'Itália', fr: 'Italie', ru: 'Италия', de: 'Italien', ko: '이탈리아' } },
  { code: 'IN', flag: '🇮🇳', name: { en: 'India', ja: 'インド', es: 'India', it: 'India', zh: '印度', 'zh-TW': '印度', hi: 'भारत', ar: 'الهند', pt: 'Índia', fr: 'Inde', ru: 'Индия', de: 'Indien', ko: '인도' } },
  { code: 'MX', flag: '🇲🇽', name: { en: 'Mexico', ja: 'メキシコ', es: 'México', it: 'Messico', zh: '墨西哥', 'zh-TW': '墨西哥', hi: 'मेक्सिको', ar: 'المكسيك', pt: 'México', fr: 'Mexique', ru: 'Мексика', de: 'Mexiko', ko: '멕시코' } },
  { code: 'TH', flag: '🇹🇭', name: { en: 'Thailand', ja: 'タイ', es: 'Tailandia', it: 'Thailandia', zh: '泰国', 'zh-TW': '泰國', hi: 'थाईलैंड', ar: 'تايلاند', pt: 'Tailândia', fr: 'Thaïlande', ru: 'Таиланд', de: 'Thailand', ko: '태국' } },
  { code: 'FR', flag: '🇫🇷', name: { en: 'France', ja: 'フランス', es: 'Francia', it: 'Francia', zh: '法国', 'zh-TW': '法國', hi: 'फ्रांस', ar: 'فرنسا', pt: 'França', fr: 'France', ru: 'Франция', de: 'Frankreich', ko: '프랑스' } },
  { code: 'CN', flag: '🇨🇳', name: { en: 'China', ja: '中国', es: 'China', it: 'Cina', zh: '中国', 'zh-TW': '中國', hi: 'चीन', ar: 'الصين', pt: 'China', fr: 'Chine', ru: 'Китай', de: 'China', ko: '중국' } },
  { code: 'ES', flag: '🇪🇸', name: { en: 'Spain', ja: 'スペイン', es: 'España', it: 'Spagna', zh: '西班牙', 'zh-TW': '西班牙', hi: 'स्पेन', ar: 'إسبانيا', pt: 'Espanha', fr: 'Espagne', ru: 'Испания', de: 'Spanien', ko: '스페인' } },
  { code: 'GR', flag: '🇬🇷', name: { en: 'Greece', ja: 'ギリシャ', es: 'Grecia', it: 'Grecia', zh: '希腊', 'zh-TW': '希臘', hi: 'यूनान', ar: 'اليونان', pt: 'Grécia', fr: 'Grèce', ru: 'Греция', de: 'Griechenland', ko: '그리스' } },
  { code: 'MA', flag: '🇲🇦', name: { en: 'Morocco', ja: 'モロッコ', es: 'Marruecos', it: 'Marocco', zh: '摩洛哥', 'zh-TW': '摩洛哥', hi: 'मोरक्को', ar: 'المغرب', pt: 'Marrocos', fr: 'Maroc', ru: 'Марокко', de: 'Marokko', ko: '모로코' } },
];

export default function HomeScreen() {
  const [selectedLang, setSelectedLang] = React.useState('ja');
  const [selectedCat, setSelectedCat] = React.useState('All');
  const [selectedCountry, setSelectedCountry] = React.useState('All');
  const [search, setSearch] = React.useState('');
  const [langModalVisible, setLangModalVisible] = React.useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Load saved language on component mount
  React.useEffect(() => {
    const loadSavedLanguage = async () => {
      try {
        const savedLang = await AsyncStorage.getItem('selectedLanguage');
        if (savedLang && LANGUAGES.some(l => l.code === savedLang)) {
          setSelectedLang(savedLang);
        }
      } catch (error) {
        console.log('Error loading saved language:', error);
      }
    };
    loadSavedLanguage();
  }, []);

  // Save language when it changes
  const handleLanguageChange = async (langCode: string) => {
    setSelectedLang(langCode);
    setLangModalVisible(false);
    try {
      await AsyncStorage.setItem('selectedLanguage', langCode);
    } catch (error) {
      console.log('Error saving language:', error);
    }
  };

  const langKey = selectedLang;

  // Show all recipes for debugging, normalizing nutrition
  const filteredRecipes = japaneseRecipes
    .map((r: any) => ({
      ...r,
      nutrition: r.nutrition || {
        calories: r.calories,
        protein: r.protein,
        carbs: r.carbs,
        fat: r.fat,
      },
    }))
    .filter((r: any) => {
      // Country filter
      if (selectedCountry !== 'All') {
        return r.country === selectedCountry;
      }
      return true;
    })
    .filter((r: any) => {
      if (selectedCat === 'All') return true;
      return r.type.toLowerCase() === selectedCat.toLowerCase();
    })
    .filter((r: any) => {
      if (!search.trim()) return true;
      const lang = langKey;
      const searchLower = search.toLowerCase();
      const name = r.name?.[lang]?.toLowerCase() || '';
      const desc = r.description?.[lang]?.toLowerCase() || '';
      const ingredients = (r.ingredients?.[lang] || []).join(' ').toLowerCase();
      return (
        name.includes(searchLower) ||
        desc.includes(searchLower) ||
        ingredients.includes(searchLower)
      );
    });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Logo, Language, and Heart */}
      <View style={styles.header}>
        <Image source={require('../../logo.png')} style={styles.logo} resizeMode="contain" />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setLangModalVisible(true)} style={styles.langIconBtn}>
            <Text style={{ fontSize: 20, color: '#2c7a7b' }}>〄</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Favorites', { language: langKey })}>
            <Text style={[styles.heart, { color: '#2c7a7b', fontSize: 24 }]}>♥</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Language Picker Modal */}
      <Modal
        visible={langModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setLangModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setLangModalVisible(false)}>
          <View style={styles.modalContent}>
            {LANGUAGES.map(lang => (
              <TouchableOpacity
                key={lang.code}
                style={[styles.modalLangBtn, selectedLang === lang.code && styles.modalLangBtnActive]}
                onPress={() => handleLanguageChange(lang.code)}
              >
                <Text style={[styles.modalLangText, selectedLang === lang.code && styles.modalLangTextActive]}>{lang.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>

      {/* Search Bar */}
      <TextInput
        style={styles.search}
        placeholder={t('search-ingredients-placeholder', langKey)}
        placeholderTextColor="#bbb"
        value={search}
        onChangeText={setSearch}
      />

      {/* Country Filter Chips */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.countryRow}>
        {COUNTRIES.map(country => (
          <TouchableOpacity
            key={country.code}
            style={[
              styles.countryBtn,
              selectedCountry === country.code && styles.countryBtnActive,
            ]}
            onPress={() => setSelectedCountry(country.code)}
          >
            <Text style={styles.countryFlag}>{country.flag}</Text>
            <Text
              style={[
                styles.countryBtnText,
                selectedCountry === country.code && styles.countryBtnTextActive,
              ]}
            >
              {country.name[langKey as keyof typeof country.name] || country.name.en}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Category Buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.catRow}>
        {CATEGORIES.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.catBtn,
              selectedCat === cat && styles.catBtnActive,
            ]}
            onPress={() => setSelectedCat(cat)}
          >
            <Text
              style={[
                styles.catBtnText,
                selectedCat === cat && styles.catBtnTextActive,
              ]}
            >
              {t('category-' + cat.toLowerCase(), langKey)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recipe List or Empty State */}
      {filteredRecipes.length > 0 ? (
        <FlatList
          data={filteredRecipes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <RecipeCard recipe={item} language={langKey} onPress={() => navigation.navigate('RecipeDetail', { recipe: item, language: langKey })} />
          )}
          contentContainerStyle={styles.recipeList}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <Image 
            source={require('../../noresults.png')} 
            style={styles.emptyImage}
            resizeMode="contain"
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const ACCENT = '#2b7a78';
const LIGHT_BG = '#f8f9fa';
const GRAY = '#e9ecef';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
    marginBottom: 14,
    // Remove any horizontal padding here to avoid double spacing
  },
  headerText: {
    fontSize: 22,
    fontWeight: '400',
    color: '#222',
    letterSpacing: 1,
  },
  heart: {
    fontSize: 22,
    marginRight: 10, // Add right margin to match container's horizontal padding
  },
  logo: {
    width: 100, // Adjust as needed
    height: 30, // Adjust as needed
    marginLeft: -20, // Add left margin to match container's horizontal padding
  },
  search: {
    backgroundColor: LIGHT_BG,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 0,
    color: '#222',
  },
  catRow: {
    flexGrow: 0,
    marginBottom: 24,
    height: 25,
  },
  catBtn: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 14,
    minHeight: 25,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 0,
  },
  catBtnActive: {
    backgroundColor: ACCENT,
    borderColor: ACCENT,
  },
  catBtnText: {
    color: '#bbb',
    fontSize: 15,
    fontWeight: '400',
  },
  catBtnTextActive: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 15,
  },
  recipeList: {
    paddingBottom: 32,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 600, // Ensures enough height for vertical centering
  },
  emptyText: {
    color: '#bbb',
    fontSize: 16,
    // marginTop: 24, // Remove if not needed
  },
  emptyImage: {
    width: 200, // Adjust as needed
    height: 200, // Adjust as needed
    opacity: 0.3,
    // marginTop: 24, // Remove if present
  },
  langIconBtn: {
    marginRight: 8,
    padding: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    minWidth: 200,
    alignItems: 'center',
  },
  modalLangBtn: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f8f9fa',
  },
  modalLangBtnActive: {
    backgroundColor: ACCENT,
  },
  modalLangText: {
    fontSize: 16,
    color: '#2c7a7b',
  },
  modalLangTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    paddingHorizontal: 4,
  },
  countryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    borderWidth: 0,
  },
  countryBtnActive: {
    backgroundColor: ACCENT,
    borderColor: ACCENT,
  },
  countryFlag: {
    fontSize: 18,
    marginRight: 8,
  },
  countryBtnText: {
    color: '#bbb',
    fontSize: 14,
    fontWeight: '400',
  },
  countryBtnTextActive: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 14,
  },
}); 