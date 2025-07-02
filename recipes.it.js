export const italianRecipes = [
{
    id: 10001,
    name: { ja: "野菜のフリッタータ", it: "Frittata di Verdure" },
    icon: "🍳",
    description: { ja: "野菜たっぷりのイタリアンオムレツ", it: "Frittata leggera con tante verdure" },
    type: "breakfast",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: "easy",
    calories: 180,
    carbs: 7,
    protein: 13,
    fat: 10,
    fiber: 3,
    sodium: 220,
    ingredients: {
        ja: ["卵 2個", "ズッキーニ 1/2本", "パプリカ 1/4個", "玉ねぎ 1/4個", "オリーブオイル 小さじ1", "塩こしょう 少々"],
        it: ["Uova 2", "Zucchina 1/2", "Peperone 1/4", "Cipolla 1/4", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["野菜を細かく切る", "フライパンでオリーブオイルを熱し、野菜を炒める", "溶き卵を加え、弱火で蓋をして焼く", "固まったら完成"],
        it: ["Tagliare le verdure a pezzetti", "Soffriggere le verdure in olio d'oliva", "Aggiungere le uova sbattute, cuocere coperto a fuoco basso", "Quando è cotta, servire"]
    },
    tags: ["diabetic-friendly", "low-carb"],
    image: "",
    country: 'IT'
},
{
    id: 10002,
    name: { ja: "カプレーゼサラダ（ライト）", it: "Insalata Caprese Light" },
    icon: "🍅",
    description: { ja: "モッツァレラとトマトのさっぱりサラダ", it: "Caprese leggera con mozzarella light" },
    type: "lunch",
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    difficulty: "easy",
    calories: 120,
    carbs: 5,
    protein: 8,
    fat: 7,
    fiber: 2,
    sodium: 180,
    ingredients: {
        ja: ["トマト 1個", "モッツァレラチーズ（ライト） 60g", "バジル数枚", "オリーブオイル 小さじ1", "塩こしょう 少々"],
        it: ["Pomodoro 1", "Mozzarella light 60g", "Basilico fresco", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["トマトとチーズをスライス", "皿に交互に並べる", "バジルをのせ、オリーブオイルと塩こしょうをかける"],
        it: ["Affettare pomodoro e mozzarella", "Disporre alternati su un piatto", "Aggiungere basilico, olio e sale e pepe"]
    },
    tags: ["diabetic-friendly", "low-calorie"],
    image: "",
    country: 'IT'
},
{
    id: 10003,
    name: { ja: "レンズ豆のスープ", it: "Zuppa di Lenticchie" },
    icon: "🥣",
    description: { ja: "食物繊維豊富なレンズ豆のスープ", it: "Zuppa di lenticchie ricca di fibre" },
    type: "lunch",
    prepTime: 10,
    cookTime: 25,
    servings: 3,
    difficulty: "easy",
    calories: 160,
    carbs: 22,
    protein: 10,
    fat: 2,
    fiber: 7,
    sodium: 320,
    ingredients: {
        ja: ["レンズ豆 100g", "玉ねぎ 1/4個", "人参 1/2本", "セロリ 1/2本", "トマト缶 100g", "オリーブオイル 小さじ1", "塩こしょう 少々"],
        it: ["Lenticchie 100g", "Cipolla 1/4", "Carota 1/2", "Sedano 1/2", "Pomodori pelati 100g", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["野菜を細かく切る", "鍋でオリーブオイルを熱し、野菜を炒める", "レンズ豆とトマト缶、水300mlを加え、20分煮る", "塩こしょうで味を調える"],
        it: ["Tagliare le verdure a pezzetti", "Soffriggere in olio d'oliva", "Aggiungere lenticchie, pomodori e 300ml d'acqua, cuocere 20 minuti", "Aggiustare di sale e pepe"]
    },
    tags: ["diabetic-friendly", "high-fiber"],
    image: "",
    country: 'IT'
},
{
    id: 10004,
    name: { ja: "ハーブチキンのグリル", it: "Pollo alla Griglia con Erbe" },
    icon: "🍗",
    description: { ja: "ハーブ香るグリルチキン", it: "Pollo grigliato alle erbe aromatiche" },
    type: "dinner",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: "easy",
    calories: 210,
    carbs: 2,
    protein: 32,
    fat: 9,
    fiber: 1,
    sodium: 350,
    ingredients: {
        ja: ["鶏胸肉 200g", "ローズマリー 少々", "タイム 少々", "オリーブオイル 小さじ1", "塩こしょう 少々"],
        it: ["Petto di pollo 200g", "Rosmarino q.b.", "Timo q.b.", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["鶏肉にハーブ、塩こしょう、オリーブオイルをまぶす", "グリルパンで両面焼く（中火で7分ずつ）"],
        it: ["Condire il pollo con erbe, sale, pepe e olio", "Grigliare 7 minuti per lato su piastra calda"]
    },
    tags: ["diabetic-friendly", "high-protein"],
    image: "",
    country: 'IT'
},
{
    id: 10005,
    name: { ja: "グリルなす", it: "Melanzane alla Griglia" },
    icon: "🍆",
    description: { ja: "シンプルなグリルなす", it: "Melanzane grigliate leggere" },
    type: "lunch",
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: "easy",
    calories: 70,
    carbs: 7,
    protein: 2,
    fat: 4,
    fiber: 4,
    sodium: 80,
    ingredients: {
        ja: ["なす 1本", "オリーブオイル 小さじ1", "塩こしょう 少々", "パセリ 少々"],
        it: ["Melanzana 1", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b.", "Prezzemolo q.b."]
    },
    instructions: {
        ja: ["なすを輪切りにし、オリーブオイルを塗る", "グリルパンで両面焼く", "塩こしょうとパセリをふる"],
        it: ["Tagliare la melanzana a fette, spennellare con olio", "Grigliare su entrambi i lati", "Condire con sale, pepe e prezzemolo"]
    },
    tags: ["diabetic-friendly", "low-calorie"],
    image: "",
    country: 'IT'
},
{
    id: 10006,
    name: { ja: "夏野菜のミネストローネ", it: "Minestrone Estivo" },
    icon: "🥕",
    description: { ja: "夏野菜たっぷりのミネストローネ", it: "Minestrone estivo leggero" },
    type: "lunch",
    prepTime: 10,
    cookTime: 20,
    servings: 3,
    difficulty: "easy",
    calories: 90,
    carbs: 15,
    protein: 3,
    fat: 2,
    fiber: 5,
    sodium: 200,
    ingredients: {
        ja: ["ズッキーニ 1/2本", "トマト 1個", "人参 1/2本", "玉ねぎ 1/4個", "いんげん 30g", "オリーブオイル 小さじ1", "塩こしょう 少々"],
        it: ["Zucchina 1/2", "Pomodoro 1", "Carota 1/2", "Cipolla 1/4", "Fagiolini 30g", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["野菜を一口大に切る", "鍋でオリーブオイルを熱し、野菜を炒める", "水300mlを加え、15分煮る", "塩こしょうで味を調える"],
        it: ["Tagliare le verdure a pezzi", "Soffriggere in olio d'oliva", "Aggiungere 300ml d'acqua, cuocere 15 minuti", "Aggiustare di sale e pepe"]
    },
    tags: ["diabetic-friendly", "low-calorie"],
    image: "",
    country: 'IT'
},
{
    id: 10007,
    name: { ja: "タラの蒸し物", it: "Merluzzo al Vapore" },
    icon: "🐟",
    description: { ja: "タラのシンプルな蒸し料理", it: "Merluzzo al vapore leggero" },
    type: "dinner",
    prepTime: 5,
    cookTime: 12,
    servings: 2,
    difficulty: "easy",
    calories: 110,
    carbs: 1,
    protein: 22,
    fat: 1,
    fiber: 0,
    sodium: 90,
    ingredients: {
        ja: ["タラ 2切れ", "レモン 1/4個", "オリーブオイル 小さじ1", "塩こしょう 少々"],
        it: ["Filetti di merluzzo 2", "Limone 1/4", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["タラに塩こしょうをふる", "蒸し器で12分蒸す", "レモンとオリーブオイルをかけて完成"],
        it: ["Condire il merluzzo con sale e pepe", "Cuocere a vapore per 12 minuti", "Servire con limone e olio d'oliva"]
    },
    tags: ["diabetic-friendly", "high-protein", "low-fat"],
    image: "",
    country: 'IT'
},
{
    id: 10008,
    name: { ja: "ひよこ豆とツナのサラダ", it: "Insalata di Ceci e Tonno" },
    icon: "🥗",
    description: { ja: "ひよこ豆とツナのヘルシーサラダ", it: "Insalata fresca di ceci e tonno" },
    type: "lunch",
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    difficulty: "easy",
    calories: 180,
    carbs: 16,
    protein: 15,
    fat: 6,
    fiber: 5,
    sodium: 320,
    ingredients: {
        ja: ["ひよこ豆（水煮） 100g", "ツナ（水煮） 1缶", "玉ねぎ 1/8個", "パセリ 少々", "オリーブオイル 小さじ1", "レモン汁 少々", "塩こしょう 少々"],
        it: ["Ceci lessati 100g", "Tonno al naturale 1 scatoletta", "Cipolla 1/8", "Prezzemolo q.b.", "Olio d'oliva 1 cucchiaino", "Succo di limone q.b.", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["材料をすべて混ぜる", "冷やして食べると美味しい"],
        it: ["Mescolare tutti gli ingredienti", "Servire fresca"]
    },
    tags: ["diabetic-friendly", "high-protein", "high-fiber"],
    image: "",
    country: 'IT'
},
{
    id: 10009,
    name: { ja: "レモン風味のターキー", it: "Tacchino al Limone" },
    icon: "🍋",
    description: { ja: "レモン香るヘルシーなターキー", it: "Tacchino leggero al profumo di limone" },
    type: "dinner",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: "easy",
    calories: 160,
    carbs: 2,
    protein: 28,
    fat: 4,
    fiber: 0,
    sodium: 210,
    ingredients: {
        ja: ["ターキー胸肉 200g", "レモン 1/2個", "オリーブオイル 小さじ1", "塩こしょう 少々", "タイム 少々"],
        it: ["Petto di tacchino 200g", "Limone 1/2", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b.", "Timo q.b."]
    },
    instructions: {
        ja: ["ターキーに塩こしょう、タイム、レモン汁をまぶす", "フライパンでオリーブオイルを熱し、両面焼く（7分ずつ）"],
        it: ["Condire il tacchino con sale, pepe, timo e succo di limone", "Cuocere in padella con olio d'oliva 7 minuti per lato"]
    },
    tags: ["diabetic-friendly", "high-protein", "low-fat"],
    image: "",
    country: 'IT'
},
{
    id: 10010,
    name: { ja: "フルーツサラダ", it: "Macedonia di Frutta" },
    icon: "🍎",
    description: { ja: "季節の果物を使ったヘルシーデザート", it: "Macedonia fresca di frutta di stagione" },
    type: "snack",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: "easy",
    calories: 90,
    carbs: 22,
    protein: 1,
    fat: 0,
    fiber: 3,
    sodium: 1,
    ingredients: {
        ja: ["りんご 1/2個", "オレンジ 1/2個", "キウイ 1個", "ブルーベリー 20g", "レモン汁 少々"],
        it: ["Mela 1/2", "Arancia 1/2", "Kiwi 1", "Mirtilli 20g", "Succo di limone q.b."]
    },
    instructions: {
        ja: ["果物を食べやすい大きさに切る", "ボウルに入れてレモン汁をかける", "軽く混ぜて完成"],
        it: ["Tagliare la frutta a pezzi", "Mettere in una ciotola e aggiungere succo di limone", "Mescolare leggermente e servire"]
    },
    tags: ["diabetic-friendly", "low-calorie"],
    image: "",
    country: 'IT'
}
]; 