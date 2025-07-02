const translations = {
    ja: {
        'site-title': 'bentobii',
        'search-ingredients': '材料で検索...',
        'search': '検索',
        'meal-type': '食事タイプ',
        'all': 'すべて',
        'breakfast': '朝食',
        'lunch': '昼食',
        'dinner': '夕食',
        'snack': '間食',
        'favorites': 'お気に入り',
        'loading': '読み込み中...',
        'no-results': 'レシピが見つかりませんでした',
        'ingredients': '材料',
        'instructions': '作り方',
        'nutrition': '栄養情報',
        'calories': 'カロリー',
        'carbs': '炭水化物',
        'protein': 'タンパク質',
        'fat': '脂質',
        'fiber': '食物繊維',
        'sodium': 'ナトリウム',
        'prep-time': '準備時間',
        'cook-time': '調理時間',
        'servings': '人分',
        'difficulty': '難易度',
        'easy': '簡単',
        'medium': '普通',
        'hard': '難しい',
        'minutes': '分',
        'kcal': 'kcal',
        'grams': 'g',
        'mg': 'mg',
        'add-to-favorites': 'お気に入りに追加',
        'remove-from-favorites': 'お気に入りから削除',
        'view-recipe': 'レシピを見る',
        'close': '閉じる',
        'diabetic-friendly': '糖尿病対応',
        'low-carb': '低炭水化物',
        'high-protein': '高タンパク質',
        'low-calorie': '低カロリー',
        'japanese-ingredients': '日本の食材使用',
        'no-favorites': 'お気に入りがありません',
        'total-recipes': '総レシピ数: {count}',
        'country-jp': '日本',
        'country-it': 'イタリア'
    },
    it: {
        'site-title': 'bentobii',
        'search-ingredients': 'Cerca per ingredienti...',
        'search': 'Cerca',
        'meal-type': 'Tipo di pasto',
        'all': 'Tutti',
        'breakfast': 'Colazione',
        'lunch': 'Pranzo',
        'dinner': 'Cena',
        'snack': 'Spuntino',
        'favorites': 'Preferiti',
        'loading': 'Caricamento...',
        'no-results': 'Nessuna ricetta trovata',
        'ingredients': 'Ingredienti',
        'instructions': 'Istruzioni',
        'nutrition': 'Informazioni nutrizionali',
        'calories': 'Calorie',
        'carbs': 'Carboidrati',
        'protein': 'Proteine',
        'fat': 'Grassi',
        'fiber': 'Fibre',
        'sodium': 'Sodio',
        'prep-time': 'Tempo di preparazione',
        'cook-time': 'Tempo di cottura',
        'servings': 'Porzioni',
        'difficulty': 'Difficoltà',
        'easy': 'Facile',
        'medium': 'Medio',
        'hard': 'Difficile',
        'minutes': 'minuti',
        'kcal': 'kcal',
        'grams': 'g',
        'mg': 'mg',
        'add-to-favorites': 'Aggiungi ai preferiti',
        'remove-from-favorites': 'Rimuovi dai preferiti',
        'view-recipe': 'Vedi ricetta',
        'close': 'Chiudi',
        'diabetic-friendly': 'Adatto ai diabetici',
        'low-carb': 'Basso contenuto di carboidrati',
        'high-protein': 'Alto contenuto proteico',
        'low-calorie': 'Basso contenuto calorico',
        'japanese-ingredients': 'Ingredienti giapponesi',
        'no-favorites': 'Nessun preferito',
        'total-recipes': 'Ricette Totali: {count}',
        'country-jp': 'Giappone',
        'country-it': 'Italia'
    }
};

class TranslationManager {
    constructor() {
        this.currentLanguage = 'ja';
        this.translations = translations;
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        this.updatePageTranslations();
        document.documentElement.lang = lang;
        localStorage.setItem('preferred-language', lang);
    }

    translate(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    updatePageTranslations() {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            // If it's an option element, update textContent
            if (element.tagName === 'OPTION') {
                element.textContent = this.translate(key);
            } else {
                element.textContent = this.translate(key);
            }
        });

        // Update elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.translate(key);
        });

        // Update elements with data-i18n-title attribute
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.translate(key);
        });
    }

    init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLanguage = savedLang;
        }

        // Set initial language
        this.setLanguage(this.currentLanguage);
        
        // Update language selector
        const languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            languageSelector.value = this.currentLanguage;
        }
    }
}

// Initialize translation manager
const translationManager = new TranslationManager();