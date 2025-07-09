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
},
{
    id: 10011,
    name: { ja: "ズッキーニのライトファルシ", it: "Zucchine Ripiene Light" },
    icon: "🥒",
    description: { ja: "鶏ひき肉と野菜のヘルシーなズッキーニ詰め", it: "Zucchine ripiene leggere con pollo e verdure" },
    type: "dinner",
    prepTime: 15,
    cookTime: 25,
    servings: 2,
    difficulty: "easy",
    calories: 170,
    carbs: 8,
    protein: 18,
    fat: 6,
    fiber: 3,
    sodium: 220,
    ingredients: {
        ja: ["ズッキーニ 2本", "鶏ひき肉 100g", "玉ねぎ 1/4個", "パプリカ 1/4個", "パン粉 大さじ1", "塩こしょう 少々"],
        it: ["Zucchine 2", "Pollo macinato 100g", "Cipolla 1/4", "Peperone 1/4", "Pangrattato 1 cucchiaio", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["ズッキーニを半分に切り中身をくり抜く", "中身と野菜をみじん切りし鶏ひき肉と混ぜる", "パン粉と塩こしょうを加えズッキーニに詰める", "180℃のオーブンで25分焼く"],
        it: ["Tagliare le zucchine a metà e svuotarle", "Tritare la polpa e le verdure, mescolare con il pollo", "Aggiungere pangrattato, sale e pepe, riempire le zucchine", "Cuocere in forno a 180°C per 25 minuti"]
    },
    tags: ["diabetic-friendly", "low-carb"],
    country: 'IT'
},
{
    id: 10012,
    name: { ja: "タコとセロリのサラダ", it: "Insalata di Polpo e Sedano" },
    icon: "🐙",
    description: { ja: "タコとセロリのさっぱりサラダ", it: "Insalata fresca di polpo e sedano" },
    type: "lunch",
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: "easy",
    calories: 120,
    carbs: 4,
    protein: 16,
    fat: 4,
    fiber: 2,
    sodium: 180,
    ingredients: {
        ja: ["ゆでタコ 100g", "セロリ 1本", "レモン汁 小さじ1", "オリーブオイル 小さじ1", "塩こしょう 少々"],
        it: ["Polpo bollito 100g", "Sedano 1 gambo", "Succo di limone 1 cucchiaino", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["タコとセロリを薄切りにする", "レモン汁・オリーブオイル・塩こしょうで和える"],
        it: ["Affettare polpo e sedano", "Condire con limone, olio, sale e pepe"]
    },
    tags: ["diabetic-friendly", "high-protein"],
    country: 'IT'
},
{
    id: 10013,
    name: { ja: "ひよこ豆のフリッテッレ", it: "Frittelle di Ceci" },
    icon: "🥙",
    description: { ja: "ひよこ豆を使ったヘルシーフリッター", it: "Frittelle leggere di ceci" },
    type: "snack",
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    difficulty: "easy",
    calories: 130,
    carbs: 16,
    protein: 6,
    fat: 4,
    fiber: 4,
    sodium: 160,
    ingredients: {
        ja: ["ひよこ豆水煮 100g", "小麦粉 大さじ1", "パセリ 少々", "塩こしょう 少々", "オリーブオイル 小さじ1"],
        it: ["Ceci cotti 100g", "Farina 1 cucchiaio", "Prezzemolo q.b.", "Sale e pepe q.b.", "Olio d'oliva 1 cucchiaino"]
    },
    instructions: {
        ja: ["ひよこ豆をつぶし材料を混ぜる", "小さく丸めてオイルで焼く"],
        it: ["Schiacciare i ceci e mescolare con gli altri ingredienti", "Formare delle polpette e cuocere in padella con olio"]
    },
    tags: ["diabetic-friendly", "high-fiber"],
    country: 'IT'
},
{
    id: 10014,
    name: { ja: "レモン焼きオーブン鯛", it: "Orata al Forno con Limone" },
    icon: "🐟",
    description: { ja: "レモン香るオーブン焼き鯛", it: "Orata al forno con limone e aromi" },
    type: "dinner",
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    difficulty: "easy",
    calories: 180,
    carbs: 2,
    protein: 22,
    fat: 8,
    fiber: 0,
    sodium: 140,
    ingredients: {
        ja: ["鯛切り身 2切れ", "レモン 1/4個", "ローズマリー 少々", "オリーブオイル 小さじ1", "塩こしょう 少々"],
        it: ["Filetti di orata 2", "Limone 1/4", "Rosmarino q.b.", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["鯛に塩こしょう・ローズマリー・オイルをまぶす", "レモンをのせて180℃のオーブンで20分焼く"],
        it: ["Condire l'orata con sale, pepe, rosmarino e olio", "Aggiungere limone e cuocere in forno a 180°C per 20 minuti"]
    },
    tags: ["diabetic-friendly", "high-protein"],
    country: 'IT'
},
{
    id: 10015,
    name: { ja: "かぼちゃのポタージュ", it: "Vellutata di Zucca" },
    icon: "🎃",
    description: { ja: "かぼちゃの甘みを活かしたスープ", it: "Vellutata di zucca leggera" },
    type: "lunch",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: "easy",
    calories: 90,
    carbs: 16,
    protein: 2,
    fat: 2,
    fiber: 3,
    sodium: 120,
    ingredients: {
        ja: ["かぼちゃ 100g", "玉ねぎ 1/4個", "牛乳 100ml", "塩こしょう 少々"],
        it: ["Zucca 100g", "Cipolla 1/4", "Latte 100ml", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["かぼちゃと玉ねぎを煮て柔らかくする", "ミキサーで撹拌し牛乳と塩こしょうを加える"],
        it: ["Cuocere zucca e cipolla fino a morbidezza", "Frullare, aggiungere latte, sale e pepe"]
    },
    tags: ["diabetic-friendly", "low-calorie"],
    country: 'IT'
},
{
    id: 10016,
    name: { ja: "グリルターキー", it: "Tacchino alla Piastra" },
    icon: "🦃",
    description: { ja: "シンプルなターキーのグリル", it: "Tacchino grigliato semplice" },
    type: "dinner",
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: "easy",
    calories: 120,
    carbs: 1,
    protein: 24,
    fat: 2,
    fiber: 0,
    sodium: 90,
    ingredients: {
        ja: ["ターキー胸肉 200g", "塩こしょう 少々", "レモン汁 少々"],
        it: ["Petto di tacchino 200g", "Sale e pepe q.b.", "Succo di limone q.b."]
    },
    instructions: {
        ja: ["ターキーに塩こしょうをふる", "グリルパンで両面焼く", "レモン汁をかけて完成"],
        it: ["Condire il tacchino con sale e pepe", "Grigliare su entrambi i lati", "Aggiungere succo di limone e servire"]
    },
    tags: ["diabetic-friendly", "high-protein", "low-fat"],
    country: 'IT'
},
{
    id: 10017,
    name: { ja: "フェンネルとオレンジのサラダ", it: "Insalata di Finocchi e Arance" },
    icon: "🍊",
    description: { ja: "爽やかなフェンネルとオレンジのサラダ", it: "Insalata fresca di finocchi e arance" },
    type: "lunch",
    prepTime: 8,
    cookTime: 0,
    servings: 2,
    difficulty: "easy",
    calories: 70,
    carbs: 12,
    protein: 2,
    fat: 1,
    fiber: 3,
    sodium: 10,
    ingredients: {
        ja: ["フェンネル 1/2個", "オレンジ 1個", "オリーブオイル 小さじ1", "塩こしょう 少々"],
        it: ["Finocchio 1/2", "Arancia 1", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["フェンネルとオレンジを薄切りにする", "オリーブオイルと塩こしょうで和える"],
        it: ["Affettare finocchio e arancia", "Condire con olio e sale e pepe"]
    },
    tags: ["diabetic-friendly", "low-calorie"],
    country: 'IT'
},
{
    id: 10018,
    name: { ja: "ナスのポルペッテ", it: "Polpette di Melanzane" },
    icon: "🍡",
    description: { ja: "ナスを使ったヘルシーなポルペッテ", it: "Polpette leggere di melanzane" },
    type: "snack",
    prepTime: 12,
    cookTime: 15,
    servings: 2,
    difficulty: "easy",
    calories: 110,
    carbs: 10,
    protein: 3,
    fat: 5,
    fiber: 3,
    sodium: 120,
    ingredients: {
        ja: ["ナス 1本", "パン粉 大さじ1", "卵 1/2個", "パルメザンチーズ 小さじ1", "塩こしょう 少々"],
        it: ["Melanzana 1", "Pangrattato 1 cucchiaio", "Uovo 1/2", "Parmigiano 1 cucchiaino", "Sale e pepe q.b."]
    },
    instructions: {
        ja: ["ナスを茹でてつぶす", "材料を混ぜて丸める", "オーブンで15分焼く"],
        it: ["Lessare la melanzana e schiacciarla", "Mescolare con gli altri ingredienti e formare polpette", "Cuocere in forno per 15 minuti"]
    },
    tags: ["diabetic-friendly", "low-calorie"],
    country: 'IT'
},
{
    id: 10019,
    name: { ja: "リコッタとイチゴのスナック", it: "Merenda di Ricotta e Fragole" },
    icon: "🍓",
    description: { ja: "リコッタとイチゴの簡単スイーツ", it: "Snack leggero di ricotta e fragole" },
    type: "snack",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: "easy",
    calories: 90,
    carbs: 8,
    protein: 5,
    fat: 4,
    fiber: 1,
    sodium: 30,
    ingredients: {
        ja: ["リコッタチーズ 50g", "イチゴ 3個", "はちみつ 小さじ1"],
        it: ["Ricotta 50g", "Fragole 3", "Miele 1 cucchiaino"]
    },
    instructions: {
        ja: ["イチゴを刻みリコッタと混ぜる", "はちみつをかけて完成"],
        it: ["Tagliare le fragole e mescolare con la ricotta", "Aggiungere miele e servire"]
    },
    tags: ["diabetic-friendly", "low-calorie"],
    country: 'IT'
},
{
    id: 10020,
    name: { ja: "夏のフルーツサラダ", it: "Macedonia Estiva" },
    icon: "🍉",
    description: { ja: "夏の果物を使った爽やかサラダ", it: "Macedonia fresca estiva" },
    type: "snack",
    prepTime: 8,
    cookTime: 0,
    servings: 2,
    difficulty: "easy",
    calories: 70,
    carbs: 16,
    protein: 1,
    fat: 0,
    fiber: 2,
    sodium: 2,
    ingredients: {
        ja: ["スイカ 1切れ", "メロン 1切れ", "キウイ 1個", "ミント 少々"],
        it: ["Anguria 1 fetta", "Melone 1 fetta", "Kiwi 1", "Menta q.b."]
    },
    instructions: {
        ja: ["果物を一口大に切る", "ミントを散らして完成"],
        it: ["Tagliare la frutta a pezzi", "Aggiungere menta e servire"]
    },
    tags: ["diabetic-friendly", "low-calorie", "fruit"],
    country: 'IT'
}
]; 