// Diabetic-friendly recipes database for weight loss
const recipes = [
    // Breakfast Recipes
    {
        id: 1,
        name: { ja: "豆腐スクランブル", it: "Tofu Scramble" },
        icon: "🍳",
        description: { ja: "高タンパク質で低炭水化物の豆腐スクランブル", it: "Tofu scramble ricco di proteine e basso in carboidrati" },
        type: "breakfast",
        prepTime: 10,
        cookTime: 5,
        servings: 2,
        difficulty: "easy",
        calories: 180,
        carbs: 8,
        protein: 18,
        fat: 11,
        fiber: 3,
        sodium: 320,
        ingredients: {
            ja: ["絹ごし豆腐 300g", "卵 2個", "ねぎ 2本", "しょうが 1片", "醤油 大さじ1", "ごま油 小さじ1", "塩こしょう 少々"],
            it: ["Tofu silken 300g", "Uova 2", "Cipollotti 2", "Zenzero 1 pezzo", "Salsa di soia 1 cucchiaio", "Olio di sesamo 1 cucchiaino", "Sale e pepe q.b."]
        },
        instructions: {
            ja: ["豆腐を水切りし、手でほぐす", "ねぎを小口切り、しょうがをみじん切りにする", "フライパンにごま油を熱し、しょうがを炒める", "豆腐を加えて炒める", "溶き卵を加えて混ぜ合わせる", "醤油と塩こしょうで味を調える"],
            it: ["Scolare il tofu e sbriciolarlo a mano", "Tagliare i cipollotti e tritare lo zenzero", "Scaldare l'olio di sesamo in padella e soffriggere lo zenzero", "Aggiungere il tofu e cuocere", "Versare le uova sbattute e mescolare", "Condire con salsa di soia, sale e pepe"]
        },
        tags: ["diabetic-friendly", "high-protein", "low-carb", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='16' fill='%23666'%3E豆腐スクランブル%3C/text%3E%3C/svg%3E"
    },
    {
        id: 2,
        name: { ja: "こんにゃく麺の味噌汁", it: "Zuppa di Miso con Shirataki" },
        icon: "🥣",
        description: { ja: "低カロリーで満腹感のある朝食", it: "Colazione saziante e ipocalorica" },
        type: "breakfast",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        difficulty: "easy",
        calories: 95,
        carbs: 6,
        protein: 8,
        fat: 4,
        fiber: 5,
        sodium: 850,
        ingredients: {
            ja: ["こんにゃく麺 100g", "わかめ 5g", "豆腐 50g", "ねぎ 1本", "味噌 大さじ1", "だし汁 300ml"],
            it: ["Shirataki 100g", "Wakame 5g", "Tofu 50g", "Cipollotto 1", "Miso 1 cucchiaio", "Brodo dashi 300ml"]
        },
        instructions: {
            ja: ["こんにゃく麺を水洗いする", "だし汁を温める", "味噌を溶かす", "豆腐とわかめを加える", "最後にねぎを散らす"],
            it: ["Sciacquare gli shirataki", "Scaldare il brodo dashi", "Sciogliere il miso", "Aggiungere tofu e wakame", "Guarnire con cipollotto"]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f4f8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3E味噌汁%3C/text%3E%3C/svg%3E"
    },
    {
        id: 3,
        name: { ja: "アボカド納豆丼", it: "Donburi di Avocado e Natto" },
        icon: "🥑",
        description: { ja: "健康的な脂質とタンパク質豊富な丼", it: "Donburi ricco di grassi sani e proteine" },
        type: "breakfast",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        difficulty: "easy",
        calories: 320,
        carbs: 18,
        protein: 16,
        fat: 22,
        fiber: 12,
        sodium: 420,
        ingredients: {
            ja: ["アボカド 1/2個", "納豆 1パック", "玄米 50g（炊いたもの）", "のり 1枚", "醤油 小さじ1", "わさび 少々"],
            it: ["Avocado 1/2", "Natto 1 confezione", "Riso integrale cotto 50g", "Nori 1 foglio", "Salsa di soia 1 cucchiaino", "Wasabi q.b."]
        },
        instructions: {
            ja: ["アボカドを角切りにする", "納豆をよく混ぜる", "玄米を器に盛る", "アボカドと納豆をのせる", "のりを手でちぎってのせる", "醤油とわさびを添える"],
            it: ["Tagliare l'avocado a cubetti", "Mescolare bene il natto", "Mettere il riso nella ciotola", "Aggiungere avocado e natto", "Spezzettare il nori sopra", "Servire con salsa di soia e wasabi"]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5f5dc'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3E納豆丼%3C/text%3E%3C/svg%3E"
    },

    // Lunch Recipes
    {
        id: 4,
        name: { ja: "鶏胸肉のサラダ", it: "Insalata di Petto di Pollo" },
        icon: "🥗",
        description: { ja: "高タンパク質で低脂肪のヘルシーサラダ", it: "Insalata sana ricca di proteine e povera di grassi" },
        type: "lunch",
        prepTime: 15,
        cookTime: 20,
        servings: 2,
        difficulty: "easy",
        calories: 285,
        carbs: 12,
        protein: 38,
        fat: 9,
        fiber: 8,
        sodium: 340,
        ingredients: {
            ja: ["鶏胸肉 200g", "レタス 4枚", "きゅうり 1本", "トマト 1個", "人参 1/2本", "玉ねぎ 1/4個", "ポン酢 大さじ2", "ごま油 小さじ1"],
            it: ["Petto di pollo 200g", "Lattuga 4 foglie", "Cetriolo 1", "Pomodoro 1", "Carota 1/2", "Cipolla 1/4", "Ponzu 2 cucchiai", "Olio di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: ["鶏胸肉を茹でて冷ます", "野菜を食べやすい大きさに切る", "鶏肉を手で裂く", "すべての材料を混ぜる", "ポン酢とごま油で和える"],
            it: ["Bollire il petto di pollo e farlo raffreddare", "Tagliare le verdure", "Sfilacciare il pollo", "Mescolare tutti gli ingredienti", "Condire con ponzu e olio di sesamo"]
        },
        tags: ["diabetic-friendly", "high-protein", "low-calorie"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f5e8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3Eサラダ%3C/text%3E%3C/svg%3E"
    },
    {
        id: 5,
        name: { ja: "きのこの炒め物", it: "Funghi Saltati" },
        icon: "🍄",
        description: { ja: "低カロリーで食物繊維豊富", it: "Ipocalorico e ricco di fibre" },
        type: "lunch",
        prepTime: 10,
        cookTime: 8,
        servings: 2,
        difficulty: "easy",
        calories: 120,
        carbs: 8,
        protein: 6,
        fat: 8,
        fiber: 4,
        sodium: 480,
        ingredients: {
            ja: ["しいたけ 6個", "えのき 1袋", "しめじ 1パック", "にんにく 1片", "醤油 大さじ1", "みりん 小さじ1", "オリーブオイル 大さじ1"],
            it: ["Shiitake 6", "Enoki 1 confezione", "Shimeji 1 confezione", "Aglio 1 spicchio", "Salsa di soia 1 cucchiaio", "Mirin 1 cucchiaino", "Olio d'oliva 1 cucchiaio"]
        },
        instructions: {
            ja: ["きのこを食べやすい大きさに切る", "にんにくをみじん切りにする", "フライパンでにんにくを炒める", "きのこを加えて炒める", "醤油とみりんで味付けする"],
            it: ["Tagliare i funghi", "Tritare l'aglio", "Soffriggere l'aglio in padella", "Aggiungere i funghi e saltare", "Condire con salsa di soia e mirin"]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0e6d2'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3Eきのこ炒め%3C/text%3E%3C/svg%3E"
    },
    // More lunch recipes
    {
        id: 6,
        name: { ja: "白身魚の蒸し物", it: "Pesce Bianco al Vapore" },
        icon: "🐠",
        description: { ja: "低脂肪で消化に良い魚料理", it: "Pesce povero di grassi e facile da digerire" },
        type: "lunch",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: "medium",
        calories: 160,
        carbs: 2,
        protein: 30,
        fat: 4,
        fiber: 1,
        sodium: 420,
        ingredients: {
            ja: ["白身魚 200g", "生姜 1片", "ねぎ 2本", "醤油 大さじ1", "酒 大さじ1", "ごま油 小さじ1"],
            it: ["Pesce bianco 200g", "Zenzero 1 pezzo", "Cipollotti 2", "Salsa di soia 1 cucchiaio", "Sake 1 cucchiaio", "Olio di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: ["魚に塩をふって10分置く", "生姜とねぎを細切りにする", "魚の上に野菜をのせる", "蒸し器で15分蒸す", "醤油、酒、ごま油を混ぜてかける"],
            it: ["Salare il pesce e lasciare 10 minuti", "Tagliare zenzero e cipollotti a julienne", "Mettere le verdure sul pesce", "Cuocere a vapore per 15 minuti", "Mescolare salsa di soia, sake e olio, versare sopra"]
        },
        tags: ["diabetic-friendly", "low-fat", "high-protein"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e6f3ff'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3E蒸し魚%3C/text%3E%3C/svg%3E"
    },
    {
        id: 7,
        name: { ja: "大根とイカの煮物", it: "Daikon e Calamari Brasati" },
        icon: "🦑",
        description: { ja: "食物繊維豊富で低カロリー", it: "Ricco di fibre e ipocalorico" },
        type: "lunch",
        prepTime: 15,
        cookTime: 25,
        servings: 3,
        difficulty: "medium",
        calories: 140,
        carbs: 8,
        protein: 18,
        fat: 3,
        fiber: 3,
        sodium: 520,
        ingredients: {
            ja: ["大根 300g", "イカ 150g", "だし汁 400ml", "醤油 大さじ2", "みりん 大さじ1", "砂糖 小さじ1"],
            it: ["Daikon 300g", "Calamari 150g", "Brodo dashi 400ml", "Salsa di soia 2 cucchiai", "Mirin 1 cucchiaio", "Zucchero 1 cucchiaino"]
        },
        instructions: {
            ja: ["大根を厚めに切る", "イカを食べやすく切る", "だし汁で大根を煮る", "イカを加えて煮る", "調味料で味を調える"],
            it: ["Tagliare il daikon a fette spesse", "Tagliare i calamari", "Cuocere il daikon nel brodo dashi", "Aggiungere i calamari", "Condire con i condimenti"]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f8f8f8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3E大根煮物%3C/text%3E%3C/svg%3E"
    },

    // Dinner Recipes
    {
        id: 8,
        name: { ja: "豆腐ハンバーグ", it: "Hamburger di Tofu" },
        icon: "🍔",
        description: { ja: "肉の代わりに豆腐を使った低カロリーハンバーグ", it: "Hamburger ipocalorico con tofu al posto della carne" },
        type: "dinner",
        prepTime: 20,
        cookTime: 15,
        servings: 2,
        difficulty: "medium",
        calories: 220,
        carbs: 12,
        protein: 20,
        fat: 11,
        fiber: 4,
        sodium: 480,
        ingredients: {
            ja: ["木綿豆腐 300g", "玉ねぎ 1/2個", "卵 1個", "パン粉 大さじ2", "醤油 大さじ1", "塩こしょう 少々", "オリーブオイル 大さじ1"],
            it: ["Tofu sodo 300g", "Cipolla 1/2", "Uovo 1", "Pangrattato 2 cucchiai", "Salsa di soia 1 cucchiaio", "Sale e pepe q.b.", "Olio d'oliva 1 cucchiaio"]
        },
        instructions: {
            ja: ["豆腐をよく水切りしてつぶす", "玉ねぎをみじん切りにして炒める", "すべての材料を混ぜる", "形を整えて焼く", "両面をこんがり焼く"],
            it: ["Scolare bene il tofu e schiacciarlo", "Tritare la cipolla e rosolarla", "Mescolare tutti gli ingredienti", "Formare gli hamburger", "Cuocere su entrambi i lati"]
        },
        tags: ["diabetic-friendly", "high-protein", "low-calorie"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5deb3'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E豆腐ハンバーグ%3C/text%3E%3C/svg%3E"
    },
    {
        id: 9,
        name: { ja: "野菜たっぷり味噌汁", it: "Zuppa di Miso con Verdure" },
        icon: "🥣",
        description: { ja: "野菜たっぷりで栄養バランス抜群", it: "Ricca di verdure e nutrienti bilanciati" },
        type: "dinner",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: "easy",
        calories: 85,
        carbs: 12,
        protein: 6,
        fat: 2,
        fiber: 4,
        sodium: 720,
        ingredients: {
            ja: ["キャベツ 100g", "人参 50g", "もやし 50g", "豆腐 50g", "味噌 大さじ2", "だし汁 400ml"],
            it: ["Cavolo 100g", "Carota 50g", "Germogli di soia 50g", "Tofu 50g", "Miso 2 cucchiai", "Brodo dashi 400ml"]
        },
        instructions: {
            ja: ["野菜を食べやすく切る", "だし汁を沸かす", "硬い野菜から順に入れる", "豆腐を加える", "味噌を溶かし入れる"],
            it: ["Tagliare le verdure", "Portare a ebollizione il brodo dashi", "Aggiungere le verdure più dure per prime", "Aggiungere il tofu", "Sciogliere il miso"]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f4f8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E野菜味噌汁%3C/text%3E%3C/svg%3E"
    },
    {
        id: 10,
        name: { ja: "こんにゃくステーキ", it: "Bistecca di Konjac" },
        icon: "🥢",
        description: { ja: "超低カロリーでボリューム満点", it: "Ipocalorico e molto saziante" },
        type: "dinner",
        prepTime: 5,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",
        calories: 45,
        carbs: 8,
        protein: 1,
        fat: 1,
        fiber: 6,
        sodium: 680,
        ingredients: {
            ja: ["こんにゃく 200g", "醤油 大さじ2", "みりん 大さじ1", "砂糖 小さじ1", "ごま油 小さじ1", "七味唐辛子 少々"],
            it: ["Konjac 200g", "Salsa di soia 2 cucchiai", "Mirin 1 cucchiaio", "Zucchero 1 cucchiaino", "Olio di sesamo 1 cucchiaino", "Shichimi q.b."]
        },
        instructions: {
            ja: ["こんにゃくに格子状に切り込みを入れる", "熱湯で下茹でする", "フライパンで焼く", "調味料を加えて煮詰める", "七味唐辛子をふる"],
            it: ["Fare incisioni a griglia sul konjac", "Sbollentare in acqua bollente", "Cuocere in padella", "Aggiungere i condimenti e far ridurre", "Spolverare con shichimi"]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3Eこんにゃく%3C/text%3E%3C/svg%3E"
    },
    // Snack Recipes
    {
        id: 11,
        name: { ja: "きゅうりの塩昆布和え", it: "Cetrioli con Kombu Salato" },
        icon: "🥒",
        description: { ja: "さっぱりとした低カロリースナック", it: "Snack rinfrescante e ipocalorico" },
        type: "snack",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        difficulty: "easy",
        calories: 25,
        carbs: 4,
        protein: 2,
        fat: 0,
        fiber: 1,
        sodium: 340,
        ingredients: {
            ja: ["きゅうり 1本", "塩昆布 5g", "ごま油 少々"],
            it: ["Cetriolo 1", "Kombu salato 5g", "Olio di sesamo q.b."]
        },
        instructions: {
            ja: ["きゅうりを薄切りにする", "塩をふって10分置く", "水気を絞る", "塩昆布とごま油で和える"],
            it: ["Tagliare il cetriolo a fette sottili", "Salare e lasciare 10 minuti", "Strizzare l'acqua", "Condire con kombu salato e olio di sesamo"]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f5e8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3Eきゅうり%3C/text%3E%3C/svg%3E"
    },
    {
        id: 12,
        name: { ja: "枝豆の塩ゆで", it: "Edamame Bolliti" },
        icon: "🫛",
        description: { ja: "高タンパク質で食物繊維豊富なスナック", it: "Snack ricco di proteine e fibre" },
        type: "snack",
        prepTime: 2,
        cookTime: 8,
        servings: 2,
        difficulty: "easy",
        calories: 120,
        carbs: 8,
        protein: 12,
        fat: 5,
        fiber: 6,
        sodium: 280,
        ingredients: {
            ja: ["枝豆 200g", "塩 大さじ1", "水 適量"],
            it: ["Edamame 200g", "Sale 1 cucchiaio", "Acqua q.b."]
        },
        instructions: {
            ja: ["枝豆を水洗いする", "鍋に水と塩を入れて沸かす", "枝豆を入れて8分茹でる", "冷水で冷やして完成"],
            it: ["Sciacquare gli edamame", "Portare a ebollizione acqua e sale", "Cuocere gli edamame per 8 minuti", "Raffreddare in acqua fredda"]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f5e8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E枝豆%3C/text%3E%3C/svg%3E"
    },
    {
        id: 13,
        name: { ja: "焼き芋", it: "Patate Dolci Arrostite" },
        icon: "🍠",
        description: { ja: "自然な甘さで満腹感のあるスナック", it: "Snack saziante con dolcezza naturale" },
        type: "snack",
        prepTime: 5,
        cookTime: 45,
        servings: 2,
        difficulty: "easy",
        calories: 180,
        carbs: 35,
        protein: 3,
        fat: 0,
        fiber: 5,
        sodium: 40,
        ingredients: {
            ja: ["さつまいも 2本", "アルミホイル"],
            it: ["Patate dolci 2", "Carta stagnola"]
        },
        instructions: {
            ja: ["さつまいもを洗う", "アルミホイルで包む", "オーブンで45分焼く", "竹串で刺して柔らかさを確認"],
            it: ["Lavare le patate dolci", "Avvolgere nella carta stagnola", "Cuocere in forno per 45 minuti", "Controllare la morbidezza con uno stecchino"]
        },
        tags: ["diabetic-friendly", "low-fat", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f4a460'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E焼き芋%3C/text%3E%3C/svg%3E"
    },
    {
        id: 14,
        name: { ja: "豆腐の胡麻和え", it: "Tofu con Salsa di Sesamo" },
        icon: "🥜",
        description: { ja: "高タンパク質で低カロリーのヘルシースナック", it: "Snack sano ricco di proteine e ipocalorico" },
        type: "snack",
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        difficulty: "easy",
        calories: 95,
        carbs: 4,
        protein: 8,
        fat: 6,
        fiber: 2,
        sodium: 120,
        ingredients: {
            ja: ["絹ごし豆腐 150g", "白ごま 大さじ2", "醤油 小さじ1", "みりん 小さじ1", "砂糖 小さじ1"],
            it: ["Tofu silken 150g", "Semi di sesamo bianchi 2 cucchiai", "Salsa di soia 1 cucchiaino", "Mirin 1 cucchiaino", "Zucchero 1 cucchiaino"]
        },
        instructions: {
            ja: ["豆腐を水切りする", "ごまをすりつぶす", "調味料と混ぜる", "豆腐と和える"],
            it: ["Scolare il tofu", "Tritare i semi di sesamo", "Mescolare con i condimenti", "Condire il tofu"]
        },
        tags: ["diabetic-friendly", "high-protein", "low-calorie"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5f5dc'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E胡麻豆腐%3C/text%3E%3C/svg%3E"
    },
    {
        id: 15,
        name: { ja: "海苔巻き", it: "Roll di Nori" },
        icon: "🍣",
        description: { ja: "低カロリーで食物繊維豊富な巻き寿司", it: "Roll di sushi ipocalorico e ricco di fibre" },
        type: "snack",
        prepTime: 15,
        cookTime: 0,
        servings: 2,
        difficulty: "medium",
        calories: 85,
        carbs: 12,
        protein: 4,
        fat: 2,
        fiber: 3,
        sodium: 420,
        ingredients: {
            ja: ["のり 2枚", "玄米 100g", "きゅうり 1本", "アボカド 1/4個", "醤油 小さじ1"],
            it: ["Nori 2 fogli", "Riso integrale 100g", "Cetriolo 1", "Avocado 1/4", "Salsa di soia 1 cucchiaino"]
        },
        instructions: {
            ja: ["玄米を炊く", "きゅうりとアボカドを細切りにする", "のりにご飯を広げる", "具材をのせて巻く", "食べやすい大きさに切る"],
            it: ["Cuocere il riso integrale", "Tagliare cetriolo e avocado a julienne", "Stendere il riso sul nori", "Aggiungere gli ingredienti e arrotolare", "Tagliare a pezzi"]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0e68c'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E海苔巻き%3C/text%3E%3C/svg%3E"
    },
    {
        id: 16,
        name: { ja: "鶏ささみの蒸し物", it: "Filetto di Pollo al Vapore" },
        icon: "🍗",
        description: { ja: "高タンパク質で低脂肪の蒸し料理", it: "Piatto al vapore ricco di proteine e povero di grassi" },
        type: "lunch",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: "easy",
        calories: 165,
        carbs: 2,
        protein: 32,
        fat: 3,
        fiber: 1,
        sodium: 380,
        ingredients: {
            ja: ["鶏ささみ 200g", "生姜 1片", "ねぎ 2本", "醤油 大さじ1", "酒 大さじ1", "ごま油 小さじ1"],
            it: ["Filetto di pollo 200g", "Zenzero 1 pezzo", "Cipollotti 2", "Salsa di soia 1 cucchiaio", "Sake 1 cucchiaio", "Olio di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: ["鶏ささみに塩をふる", "生姜とねぎを細切りにする", "蒸し器で15分蒸す", "調味料を混ぜてかける"],
            it: ["Salare il filetto di pollo", "Tagliare zenzero e cipollotti", "Cuocere a vapore per 15 minuti", "Condire con la salsa"]
        },
        tags: ["diabetic-friendly", "high-protein", "low-fat"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0e6d2'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='10' fill='%23666'%3E鶏ささみ蒸し%3C/text%3E%3C/svg%3E"
    },
    {
        id: 17,
        name: { ja: "鯖の塩焼き", it: "Sgombro alla Griglia" },
        icon: "🐟",
        description: { ja: "オメガ3脂肪酸豊富で健康的な魚料理", it: "Piatto di pesce sano ricco di omega-3" },
        type: "dinner",
        prepTime: 5,
        cookTime: 12,
        servings: 2,
        difficulty: "medium",
        calories: 202,
        carbs: 1,
        protein: 20,
        fat: 12,
        fiber: 0,
        sodium: 450,
        ingredients: {
            ja: ["鯖 2尾", "塩 少々", "レモン 1/2個", "大根おろし 適量"],
            it: ["Sgombro 2", "Sale q.b.", "Limone 1/2", "Daikon grattugiato q.b."]
        },
        instructions: {
            ja: ["鯖に塩をふる", "グリルで12分焼く", "レモンと大根おろしを添える"],
            it: ["Salare lo sgombro", "Grigliare per 12 minuti", "Servire con limone e daikon grattugiato"]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e6f3ff'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E鯖焼き%3C/text%3E%3C/svg%3E"
    },
    {
        id: 18,
        name: { ja: "鮭の味噌焼き", it: "Salmone alla Griglia con Miso" },
        icon: "🍣",
        description: { ja: "味噌の旨味で美味しい鮭料理", it: "Salmone delizioso con il sapore del miso" },
        type: "dinner",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: "medium",
        calories: 154,
        carbs: 3,
        protein: 22,
        fat: 6,
        fiber: 1,
        sodium: 680,
        ingredients: {
            ja: ["鮭 2切れ", "味噌 大さじ2", "みりん 大さじ1", "酒 大さじ1", "砂糖 小さじ1"],
            it: ["Salmone 2 fette", "Miso 2 cucchiai", "Mirin 1 cucchiaio", "Sake 1 cucchiaio", "Zucchero 1 cucchiaino"]
        },
        instructions: {
            ja: ["味噌、みりん、酒、砂糖を混ぜる", "鮭に塗って30分置く", "グリルで15分焼く"],
            it: ["Mescolare miso, mirin, sake e zucchero", "Spalmare sul salmone e lasciare 30 minuti", "Grigliare per 15 minuti"]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23ffb6c1'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E鮭味噌焼き%3C/text%3E%3C/svg%3E"
    },
    {
        id: 19,
        name: { ja: "豚ヒレ肉の生姜焼き", it: "Filetto di Maiale con Zenzero" },
        icon: "🍖",
        description: { ja: "生姜の香りで食欲増進の豚肉料理", it: "Piatto di maiale appetitoso con zenzero" },
        type: "dinner",
        prepTime: 15,
        cookTime: 10,
        servings: 2,
        difficulty: "medium",
        calories: 130,
        carbs: 4,
        protein: 22,
        fat: 4,
        fiber: 1,
        sodium: 520,
        ingredients: {
            ja: ["豚ヒレ肉 200g", "生姜 2片", "醤油 大さじ2", "みりん 大さじ1", "酒 大さじ1", "ごま油 大さじ1"],
            it: ["Filetto di maiale 200g", "Zenzero 2 pezzi", "Salsa di soia 2 cucchiai", "Mirin 1 cucchiaio", "Sake 1 cucchiaio", "Olio di sesamo 1 cucchiaio"]
        },
        instructions: {
            ja: ["豚肉を薄切りにする", "生姜をすりおろす", "調味料を混ぜる", "フライパンで焼く", "生姜を加えて炒める"],
            it: ["Tagliare il maiale a fette sottili", "Grattugiare lo zenzero", "Mescolare i condimenti", "Cuocere in padella", "Aggiungere lo zenzero"]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0e6d2'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='10' fill='%23666'%3E豚生姜焼き%3C/text%3E%3C/svg%3E"
    },
    {
        id: 20,
        name: { ja: "卵焼き", it: "Frittata Giapponese" },
        icon: "🍳",
        description: { ja: "シンプルで栄養価の高い卵料理", it: "Piatto di uova semplice e nutriente" },
        type: "breakfast",
        prepTime: 5,
        cookTime: 8,
        servings: 2,
        difficulty: "easy",
        calories: 155,
        carbs: 2,
        protein: 13,
        fat: 11,
        fiber: 0,
        sodium: 280,
        ingredients: {
            ja: ["卵 4個", "だし汁 大さじ2", "醤油 小さじ1", "砂糖 小さじ1", "塩 少々"],
            it: ["Uova 4", "Brodo dashi 2 cucchiai", "Salsa di soia 1 cucchiaino", "Zucchero 1 cucchiaino", "Sale q.b."]
        },
        instructions: {
            ja: ["卵を溶く", "調味料を加える", "フライパンで焼く", "巻きながら焼く"],
            it: ["Sbattere le uova", "Aggiungere i condimenti", "Cuocere in padella", "Arrotolare mentre si cuoce"]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23fffacd'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E卵焼き%3C/text%3E%3C/svg%3E"
    },
    {
        id: 21,
        name: { ja: "納豆ご飯", it: "Riso con Natto" },
        icon: "🍚",
        description: { ja: "高タンパク質で食物繊維豊富な朝食", it: "Colazione ricca di proteine e fibre" },
        type: "breakfast",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        difficulty: "easy",
        calories: 280,
        carbs: 45,
        protein: 12,
        fat: 4,
        fiber: 6,
        sodium: 320,
        ingredients: {
            ja: ["玄米 100g（炊いたもの）", "納豆 1パック", "ねぎ 1本", "醤油 小さじ1", "わさび 少々"],
            it: ["Riso integrale cotto 100g", "Natto 1 confezione", "Cipollotto 1", "Salsa di soia 1 cucchiaino", "Wasabi q.b."]
        },
        instructions: {
            ja: ["納豆をよく混ぜる", "玄米を器に盛る", "納豆をのせる", "ねぎを散らす", "醤油とわさびを添える"],
            it: ["Mescolare bene il natto", "Mettere il riso nella ciotola", "Aggiungere il natto", "Guarnire con cipollotto", "Servire con salsa di soia e wasabi"]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5f5dc'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E納豆ご飯%3C/text%3E%3C/svg%3E"
    },
    {
        id: 22,
        name: { ja: "おかゆ", it: "Porridge di Riso" },
        icon: "🍲",
        description: { ja: "消化に良くて胃に優しい朝食", it: "Colazione leggera e facile da digerire" },
        type: "breakfast",
        prepTime: 5,
        cookTime: 20,
        servings: 2,
        difficulty: "easy",
        calories: 120,
        carbs: 25,
        protein: 3,
        fat: 1,
        fiber: 1,
        sodium: 80,
        ingredients: {
            ja: ["米 100g", "水 600ml", "塩 少々", "梅干し 1個"],
            it: ["Riso 100g", "Acqua 600ml", "Sale q.b.", "Umeboshi 1"]
        },
        instructions: {
            ja: ["米を洗う", "鍋に米と水を入れる", "弱火で20分煮る", "塩で味を調える", "梅干しを添える"],
            it: ["Lavare il riso", "Mettere riso e acqua in pentola", "Cuocere a fuoco basso per 20 minuti", "Condire con sale", "Servire con umeboshi"]
        },
        tags: ["diabetic-friendly", "low-fat", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5f5dc'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3Eおかゆ%3C/text%3E%3C/svg%3E"
    },
    {
        id: 23,
        name: { ja: "野菜スープ", it: "Zuppa di Verdure" },
        icon: "🥗",
        description: { ja: "野菜たっぷりで栄養満点のスープ", it: "Zuppa nutriente ricca di verdure" },
        type: "lunch",
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        difficulty: "easy",
        calories: 65,
        carbs: 10,
        protein: 4,
        fat: 2,
        fiber: 4,
        sodium: 480,
        ingredients: {
            ja: ["キャベツ 200g", "人参 100g", "玉ねぎ 1個", "きのこ 100g", "だし汁 800ml", "醤油 大さじ1", "塩 少々"],
            it: ["Cavolo 200g", "Carota 100g", "Cipolla 1", "Funghi 100g", "Brodo dashi 800ml", "Salsa di soia 1 cucchiaio", "Sale q.b."]
        },
        instructions: {
            ja: ["野菜を食べやすく切る", "だし汁を沸かす", "硬い野菜から順に入れる", "きのこを加える", "調味料で味を調える"],
            it: ["Tagliare le verdure", "Portare a ebollizione il brodo dashi", "Aggiungere le verdure più dure per prime", "Aggiungere i funghi", "Condire a piacere"]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f4f8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E野菜スープ%3C/text%3E%3C/svg%3E"
    },
    {
        id: 24,
        name: { ja: "豆腐の味噌汁", it: "Zuppa di Miso con Tofu" },
        icon: "🥣",
        description: { ja: "定番の味噌汁で栄養バランス抜群", it: "Zuppa di miso classica con nutrienti bilanciati" },
        type: "breakfast",
        prepTime: 5,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",
        calories: 75,
        carbs: 6,
        protein: 8,
        fat: 3,
        fiber: 2,
        sodium: 680,
        ingredients: {
            ja: ["豆腐 100g", "わかめ 5g", "ねぎ 1本", "味噌 大さじ2", "だし汁 400ml"],
            it: ["Tofu 100g", "Wakame 5g", "Cipollotto 1", "Miso 2 cucchiai", "Brodo dashi 400ml"]
        },
        instructions: {
            ja: ["だし汁を温める", "豆腐を切る", "味噌を溶かす", "豆腐とわかめを加える", "ねぎを散らす"],
            it: ["Scaldare il brodo dashi", "Tagliare il tofu", "Sciogliere il miso", "Aggiungere tofu e wakame", "Guarnire con cipollotto"]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f4f8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E味噌汁%3C/text%3E%3C/svg%3E"
    },
    {
        id: 25,
        name: { ja: "こんにゃくサラダ", it: "Insalata di Konjac" },
        icon: "🥗",
        description: { ja: "超低カロリーでボリューム満点のサラダ", it: "Insalata ipocalorica e molto saziante" },
        type: "lunch",
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        difficulty: "easy",
        calories: 35,
        carbs: 6,
        protein: 1,
        fat: 1,
        fiber: 4,
        sodium: 420,
        ingredients: {
            ja: ["こんにゃく 200g", "きゅうり 1本", "人参 1/2本", "ポン酢 大さじ2", "ごま油 小さじ1"],
            it: ["Konjac 200g", "Cetriolo 1", "Carota 1/2", "Ponzu 2 cucchiai", "Olio di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: ["こんにゃくを水洗いして切る", "野菜を細切りにする", "すべてを混ぜる", "ポン酢とごま油で和える"],
            it: ["Sciacquare e tagliare il konjac", "Tagliare le verdure a julienne", "Mescolare tutto", "Condire con ponzu e olio di sesamo"]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f5e8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3Eこんにゃくサラダ%3C/text%3E%3C/svg%3E"
    },
    {
        id: 26,
        name: { ja: "しらたきのパエリア", it: "Paella di Shirataki" },
        icon: "🥘",
        description: { ja: "ご飯の代わりにしらたきを使った、低糖質なパエリア。", it: "Paella a basso contenuto di carboidrati con shirataki al posto del riso." },
        type: "dinner",
        prepTime: 20,
        cookTime: 25,
        servings: 2,
        difficulty: "medium",
        calories: 320,
        carbs: 15,
        protein: 25,
        fat: 18,
        fiber: 10,
        sodium: 600,
        ingredients: {
            ja: ["しらたき 400g", "鶏もも肉 100g", "パプリカ 1/2個", "玉ねぎ 1/4個", "にんにく 1片", "オリーブオイル 大さじ1", "トマト缶 100g", "サフラン 少々", "レモン 1/4個"],
            it: ["Shirataki 400g", "Coscia di pollo 100g", "Peperone 1/2", "Cipolla 1/4", "Aglio 1 spicchio", "Olio d'oliva 1 cucchiaio", "Pomodori in scatola 100g", "Zafferano q.b.", "Limone 1/4"]
        },
        instructions: {
            ja: ["しらたきを乾煎りして水分を飛ばす。", "鶏肉と野菜を炒める。", "トマト缶とサフランを加えて煮る。", "しらたきを加えて混ぜ、蒸し焼きにする。", "レモンを添える。"],
            it: ["Tostare gli shirataki per rimuovere l'acqua.", "Soffriggere pollo e verdure.", "Aggiungere pomodori e zafferano e cuocere.", "Aggiungere gli shirataki, mescolare e cuocere al vapore.", "Servire con limone."]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein"],
        image: ""
    },
    {
        id: 27,
        name: { ja: "おからニョッキ", it: "Gnocchi di Okara" },
        icon: "🍝",
        description: { ja: "じゃがいもの代わりにおからを使った、ヘルシーなニョッキ。", it: "Gnocchi sani con okara al posto delle patate." },
        type: "lunch",
        prepTime: 25,
        cookTime: 10,
        servings: 2,
        difficulty: "hard",
        calories: 280,
        carbs: 20,
        protein: 15,
        fat: 15,
        fiber: 8,
        sodium: 300,
        ingredients: {
            ja: ["おからパウダー 100g", "卵 1個", "粉チーズ 大さじ2", "塩こしょう 少々", "お好みのソース（トマトソースなど）"],
            it: ["Okara in polvere 100g", "Uovo 1", "Parmigiano grattugiato 2 cucchiai", "Sale e pepe q.b.", "Salsa a piacere (es. pomodoro)"]
        },
        instructions: {
            ja: ["おからパウダー、卵、粉チーズ、塩こしょうを混ぜて生地を作る。", "生地を棒状に伸ばし、小さく切る。", "フォークで模様をつける。", "塩を加えたお湯で茹でる。", "浮き上がってきたら取り出し、ソースと絡める。"],
            it: ["Mescolare okara, uovo, formaggio, sale e pepe per fare l'impasto.", "Stendere l'impasto e tagliarlo a pezzetti.", "Rigare con una forchetta.", "Cuocere in acqua salata bollente.", "Quando vengono a galla, scolarli e condirli."]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein", "japanese-ingredients"],
        image: ""
    },
    {
        id: 28,
        name: { ja: "高野豆腐の唐揚げ", it: "Koyadofu Fritto (Karaage)" },
        icon: "🧊",
        description: { ja: "鶏肉のような食感で、満足感のある高野豆腐の唐揚げ。", it: "Karaage di koyadofu con una consistenza simile al pollo." },
        type: "dinner",
        prepTime: 15,
        cookTime: 10,
        servings: 2,
        difficulty: "medium",
        calories: 250,
        carbs: 10,
        protein: 20,
        fat: 15,
        fiber: 5,
        sodium: 500,
        ingredients: {
            ja: ["高野豆腐 4個", "醤油 大さじ2", "みりん 大さじ1", "にんにくチューブ 小さじ1", "片栗粉 大さじ3", "揚げ油 適量"],
            it: ["Koyadofu 4 pezzi", "Salsa di soia 2 cucchiai", "Mirin 1 cucchiaio", "Aglio in tubetto 1 cucchiaino", "Fecola di patate 3 cucchiai", "Olio per friggere q.b."]
        },
        instructions: {
            ja: ["高野豆腐を水で戻し、水気をしっかり絞る。", "一口大に切り、調味料に漬け込む。", "片栗粉をまぶして揚げる。", "きつね色になったら取り出す。"],
            it: ["Reidratare il koyadofu e strizzarlo bene.", "Tagliarlo a pezzi e marinarlo.", "Infarinare con la fecola e friggere.", "Togliere quando è dorato."]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: ""
    },
    {
        id: 29,
        name: { ja: "アボカドとエビのわさびマヨ和え", it: "Insalata di Avocado e Gamberi con Maionese al Wasabi" },
        icon: "🥑",
        description: { ja: "ピリッとしたわさびがアクセントの、簡単デリ風サラダ。", it: "Insalata facile stile gastronomia con un tocco di wasabi." },
        type: "lunch",
        prepTime: 10,
        cookTime: 5,
        servings: 2,
        difficulty: "easy",
        calories: 290,
        carbs: 8,
        protein: 15,
        fat: 22,
        fiber: 6,
        sodium: 350,
        ingredients: {
            ja: ["アボカド 1個", "茹でエビ 100g", "マヨネーズ 大さじ2", "わさびチューブ 小さじ1/2", "醤油 小さじ1", "レモン汁 少々"],
            it: ["Avocado 1", "Gamberi bolliti 100g", "Maionese 2 cucchiai", "Wasabi in tubetto 1/2 cucchiaino", "Salsa di soia 1 cucchiaino", "Succo di limone q.b."]
        },
        instructions: {
            ja: ["アボカドを角切りにし、レモン汁をかける。", "エビと調味料をすべて混ぜ合わせる。"],
            it: ["Tagliare l'avocado a cubetti e irrorarlo di limone.", "Mescolare tutti gli ingredienti con i gamberi."]
        },
        tags: ["diabetic-friendly", "low-carb"],
        image: ""
    },
    {
        id: 30,
        name: { ja: "切り干し大根のペペロンチーノ", it: "Peperoncino di Daikon Essiccato" },
        icon: "🥕",
        description: { ja: "切り干し大根の食感が面白い、和風ペペロンチーノ。", it: "Peperoncino in stile giapponese con l'interessante consistenza del daikon essiccato." },
        type: "lunch",
        prepTime: 15,
        cookTime: 10,
        servings: 1,
        difficulty: "easy",
        calories: 200,
        carbs: 15,
        protein: 5,
        fat: 13,
        fiber: 7,
        sodium: 400,
        ingredients: {
            ja: ["切り干し大根 30g", "にんにく 1片", "鷹の爪 1本", "オリーブオイル 大さじ1", "醤油 小さじ1/2"],
            it: ["Daikon essiccato 30g", "Aglio 1 spicchio", "Peperoncino 1", "Olio d'oliva 1 cucchiaio", "Salsa di soia 1/2 cucchiaino"]
        },
        instructions: {
            ja: ["切り干し大根を水で戻し、水気を絞る。", "にんにくと鷹の爪をオリーブオイルで炒める。", "切り干し大根を加えて炒め合わせる。", "醤油で風味をつける。"],
            it: ["Reidratare il daikon e strizzarlo.", "Soffriggere aglio e peperoncino nell'olio.", "Aggiungere il daikon e saltare.", "Insaporire con la salsa di soia."]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: ""
    },
    {
        id: 31,
        name: { ja: "きのこのマリネ", it: "Funghi Marinati" },
        icon: "🍄",
        description: { ja: "作り置きに便利な、さっぱりとしたきのこのマリネ。", it: "Marinatura di funghi rinfrescante, comoda da preparare in anticipo." },
        type: "snack",
        prepTime: 10,
        cookTime: 10,
        servings: 4,
        difficulty: "easy",
        calories: 90,
        carbs: 7,
        protein: 3,
        fat: 6,
        fiber: 3,
        sodium: 250,
        ingredients: {
            ja: ["しめじ 1パック", "エリンギ 1パック", "酢 大さじ3", "オリーブオイル 大さじ2", "塩 小さじ1/2", "黒胡椒 少々"],
            it: ["Shimeji 1 confezione", "Eringi 1 confezione", "Aceto 3 cucchiai", "Olio d'oliva 2 cucchiai", "Sale 1/2 cucchiaino", "Pepe nero q.b."]
        },
        instructions: {
            ja: ["きのこを食べやすくほぐし、フライパンで乾煎りする。", "ボウルに調味料を混ぜ合わせる。", "熱いうちにきのこを加えて和える。", "冷蔵庫で冷やす。"],
            it: ["Separare i funghi e tostarli in padella.", "Mescolare i condimenti in una ciotola.", "Aggiungere i funghi caldi e mescolare.", "Raffreddare in frigorifero."]
        },
        tags: ["diabetic-friendly", "low-calorie"],
        image: ""
    },
    {
        id: 32,
        name: { ja: "鶏むね肉のピカタ", it: "Piccata di Petto di Pollo" },
        icon: "🐔",
        description: { ja: "卵の衣でふんわりと仕上げた、鶏むね肉のピカタ。", it: "Piccata di petto di pollo tenera, avvolta in una pastella all'uovo." },
        type: "dinner",
        prepTime: 15,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",
        calories: 300,
        carbs: 5,
        protein: 40,
        fat: 13,
        fiber: 0,
        sodium: 400,
        ingredients: {
            ja: ["鶏むね肉 1枚(250g)", "卵 1個", "粉チーズ 大さじ2", "塩こしょう 少々", "オリーブオイル 大さじ1"],
            it: ["Petto di pollo 1 (250g)", "Uovo 1", "Parmigiano grattugiato 2 cucchiai", "Sale e pepe q.b.", "Olio d'oliva 1 cucchiaio"]
        },
        instructions: {
            ja: ["鶏むね肉を薄切りにし、塩こしょうを振る。", "卵と粉チーズを混ぜ合わせる。", "鶏肉に卵液を絡めて焼く。", "両面に焼き色がついたら完成。"],
            it: ["Tagliare il pollo a fette sottili, salare e pepare.", "Mescolare uovo e formaggio.", "Passare il pollo nella pastella e cuocere.", "Cuocere fino a doratura su entrambi i lati."]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein"],
        image: ""
    },
    {
        id: 33,
        name: { ja: "キャベツとツナのサラダ", it: "Insalata di Cavolo e Tonno" },
        icon: "🥗",
        description: { ja: "無限に食べられる、定番のツナキャベツサラダ。", it: "La classica insalata di tonno e cavolo di cui non ci si stanca mai." },
        type: "lunch",
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        difficulty: "easy",
        calories: 180,
        carbs: 8,
        protein: 15,
        fat: 10,
        fiber: 4,
        sodium: 300,
        ingredients: {
            ja: ["キャベツ 1/4個", "ツナ缶 1個", "マヨネーズ 大さじ2", "醤油 小さじ1/2", "塩こしょう 少々"],
            it: ["Cavolo 1/4", "Tonno in scatola 1", "Maionese 2 cucchiai", "Salsa di soia 1/2 cucchiaino", "Sale e pepe q.b."]
        },
        instructions: {
            ja: ["キャベツを千切りにする。", "ツナ缶の油を軽く切る。", "すべての材料を混ぜ合わせる。"],
            it: ["Tagliare il cavolo a julienne.", "Scolare leggermente l'olio dal tonno.", "Mescolare tutti gli ingredienti."]
        },
        tags: ["diabetic-friendly", "low-carb"],
        image: ""
    },
    {
        id: 34,
        name: { ja: "もやしと豚肉のレンジ蒸し", it: "Germogli di Soia e Maiale al Vapore nel Microonde" },
        icon: "🐷",
        description: { ja: "レンジで簡単に作れる、ヘルシーな蒸し料理。", it: "Piatto sano al vapore, facile da preparare nel microonde." },
        type: "dinner",
        prepTime: 5,
        cookTime: 8,
        servings: 2,
        difficulty: "easy",
        calories: 280,
        carbs: 6,
        protein: 25,
        fat: 18,
        fiber: 3,
        sodium: 450,
        ingredients: {
            ja: ["もやし 1袋", "豚バラ薄切り肉 150g", "ポン酢 大さじ3", "ごま油 小さじ1", "刻みねぎ 適量"],
            it: ["Germogli di soia 1 sacchetto", "Pancetta di maiale a fette sottili 150g", "Salsa ponzu 3 cucchiai", "Olio di sesamo 1 cucchiaino", "Cipollotto tritato q.b."]
        },
        instructions: {
            ja: ["耐熱皿にもやしと豚肉を交互に重ねる。", "ふんわりとラップをし、レンジで6〜8分加熱する。", "ポン酢とごま油をかけ、ねぎを散らす。"],
            it: ["Alternare strati di germogli e maiale in una pirofila.", "Coprire e cuocere al microonde per 6-8 minuti.", "Condire con ponzu, olio di sesamo e cipollotto."]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein"],
        image: ""
    },
    {
        id: 35,
        name: { ja: "ほうれん草の白和え", it: "Spinaci con Salsa di Tofu (Shiraae)" },
        icon: "🥬",
        description: { ja: "豆腐を使った、優しい甘さの伝統的な和え物。", it: "Condimento tradizionale dal sapore dolce e delicato, a base di tofu." },
        type: "snack",
        prepTime: 15,
        cookTime: 5,
        servings: 2,
        difficulty: "medium",
        calories: 120,
        carbs: 8,
        protein: 10,
        fat: 6,
        fiber: 4,
        sodium: 200,
        ingredients: {
            ja: ["ほうれん草 1/2束", "木綿豆腐 100g", "白すりごま 大さじ2", "砂糖 小さじ1", "醤油 小さじ1"],
            it: ["Spinaci 1/2 mazzo", "Tofu sodo 100g", "Sesamo bianco macinato 2 cucchiai", "Zucchero 1 cucchiaino", "Salsa di soia 1 cucchiaino"]
        },
        instructions: {
            ja: ["ほうれん草を茹でて水気を絞り、食べやすく切る。", "豆腐を水切りし、すり鉢で滑らかにする。", "調味料を加えて混ぜ、ほうれん草と和える。"],
            it: ["Bollire gli spinaci, strizzarli e tagliarli.", "Scolare il tofu e frullarlo fino a renderlo liscio.", "Aggiungere i condimenti, mescolare e unire gli spinaci."]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: ""
    },
    {
        id: 36,
        name: { ja: "サバ缶のトマト煮", it: "Sgombro in Scatola in Umido al Pomodoro" },
        icon: "🐟",
        description: { ja: "サバ缶とトマト缶で手軽に作れる、栄養満点の煮込み料理。", it: "Piatto in umido nutriente, facile da preparare con sgombro e pomodori in scatola." },
        type: "dinner",
        prepTime: 5,
        cookTime: 15,
        servings: 2,
        difficulty: "easy",
        calories: 280,
        carbs: 10,
        protein: 22,
        fat: 16,
        fiber: 3,
        sodium: 550,
        ingredients: {
            ja: ["サバ水煮缶 1個", "トマト缶 1/2個(200g)", "玉ねぎ 1/4個", "にんにく 1片", "オリーブオイル 大さじ1", "コンソメ 小さじ1"],
            it: ["Sgombro in scatola al naturale 1", "Pomodori in scatola 1/2 (200g)", "Cipolla 1/4", "Aglio 1 spicchio", "Olio d'oliva 1 cucchiaio", "Dado da brodo 1 cucchiaino"]
        },
        instructions: {
            ja: ["玉ねぎとにんにくをみじん切りにし、オリーブオイルで炒める。", "トマト缶とコンソメ、サバ缶を汁ごと加えて煮る。", "10分ほど煮込んだら完成。"],
            it: ["Tritare cipolla e aglio e soffriggerli nell'olio.", "Aggiungere pomodori, dado e sgombro con il suo liquido e cuocere.", "Cuocere per circa 10 minuti."]
        },
        tags: ["diabetic-friendly", "high-protein"],
        image: ""
    },
    {
        id: 37,
        name: { ja: "無限ピーマン", it: "Peperoni Infiniti" },
        icon: "🫑",
        description: { ja: "ピーマンが無限に食べられると話題の、簡単常備菜。", it: "Contorno facile e popolare che ti farà mangiare peperoni all'infinito." },
        type: "snack",
        prepTime: 5,
        cookTime: 5,
        servings: 2,
        difficulty: "easy",
        calories: 100,
        carbs: 6,
        protein: 8,
        fat: 5,
        fiber: 3,
        sodium: 300,
        ingredients: {
            ja: ["ピーマン 4個", "ツナ缶 1個", "鶏ガラスープの素 小さじ1", "ごま油 小さじ1", "塩こしょう 少々"],
            it: ["Peperoni 4", "Tonno in scatola 1", "Dado di pollo granulare 1 cucchiaino", "Olio di sesamo 1 cucchiaino", "Sale e pepe q.b."]
        },
        instructions: {
            ja: ["ピーマンを細切りにする。", "耐熱容器にすべての材料を入れて混ぜる。", "ラップをしてレンジで3分加熱する。"],
            it: ["Tagliare i peperoni a julienne.", "Mettere tutti gli ingredienti in un contenitore per microonde e mescolare.", "Coprire e cuocere al microonde per 3 minuti."]
        },
        tags: ["diabetic-friendly", "low-calorie"],
        image: ""
    },
    {
        id: 38,
        name: { ja: "豚キムチ豆腐", it: "Tofu con Maiale e Kimchi" },
        icon: "🌶️",
        description: { ja: "発酵食品のキムチを使った、体温まる一品。", it: "Piatto che riscalda il corpo, con il kimchi, un alimento fermentato." },
        type: "dinner",
        prepTime: 10,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",
        calories: 350,
        carbs: 10,
        protein: 28,
        fat: 22,
        fiber: 4,
        sodium: 700,
        ingredients: {
            ja: ["豚バラ肉 150g", "キムチ 100g", "木綿豆腐 1/2丁(150g)", "ごま油 大さじ1", "醤油 小さじ1"],
            it: ["Pancetta di maiale 150g", "Kimchi 100g", "Tofu sodo 1/2 (150g)", "Olio di sesamo 1 cucchiaio", "Salsa di soia 1 cucchiaino"]
        },
        instructions: {
            ja: ["豆腐を水切りし、食べやすく切る。", "ごま油で豚肉を炒める。", "キムチを加えて炒め合わせる。", "豆腐を加えて軽く崩しながら炒め、醤油で味を調える。"],
            it: ["Scolare il tofu e tagliarlo.", "Soffriggere il maiale nell'olio di sesamo.", "Aggiungere il kimchi e saltare.", "Aggiungere il tofu, sbriciolarlo leggermente e condire con salsa di soia."]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein"],
        image: ""
    },
    {
        id: 39,
        name: { ja: "オクラのネバネバ和え", it: "Insalata Viscosa di Okra" },
        icon: "🟢",
        description: { ja: "オクラ、納豆、めかぶを使った、ネバネバ健康副菜。", it: "Contorno sano e viscoso con okra, natto e mekabu." },
        type: "snack",
        prepTime: 10,
        cookTime: 2,
        servings: 2,
        difficulty: "easy",
        calories: 80,
        carbs: 8,
        protein: 6,
        fat: 3,
        fiber: 5,
        sodium: 250,
        ingredients: {
            ja: ["オクラ 8本", "納豆 1パック", "めかぶ 1パック", "ポン酢 大さじ1"],
            it: ["Okra 8", "Natto 1 confezione", "Mekabu 1 confezione", "Salsa ponzu 1 cucchiaio"]
        },
        instructions: {
            ja: ["オクラを塩ずりし、茹でて小口切りにする。", "すべての材料を混ぜ合わせる。"],
            it: ["Strofinare l'okra con il sale, bollirla e tagliarla a rondelle.", "Mescolare tutti gli ingredienti."]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: ""
    },
    {
        id: 40,
        name: { ja: "豆苗と卵の炒め物", it: "Germogli di Pisello e Uova Saltati" },
        icon: "🌱",
        description: { ja: "安くて栄養価の高い豆苗を使った、彩りの良い炒め物。", it: "Piatto saltato colorato, economico e nutriente, con germogli di pisello." },
        type: "lunch",
        prepTime: 5,
        cookTime: 5,
        servings: 2,
        difficulty: "easy",
        calories: 180,
        carbs: 5,
        protein: 14,
        fat: 11,
        fiber: 3,
        sodium: 350,
        ingredients: {
            ja: ["豆苗 1パック", "卵 2個", "鶏ガラスープの素 小さじ1", "ごま油 大さじ1"],
            it: ["Germogli di pisello 1 confezione", "Uova 2", "Dado di pollo granulare 1 cucchiaino", "Olio di sesamo 1 cucchiaio"]
        },
        instructions: {
            ja: ["豆苗を食べやすく切る。", "卵を溶きほぐす。", "ごま油で豆苗をさっと炒める。", "卵を加えて大きく混ぜ、鶏ガラスープの素で味を調える。"],
            it: ["Tagliare i germogli di pisello.", "Sbattere le uova.", "Saltare brevemente i germogli nell'olio di sesamo.", "Aggiungere le uova, mescolare grossolanamente e condire con il dado."]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein"],
        image: ""
    },
    {
        id: 41,
        name: { ja: "わかめスープ", it: "Zuppa di Wakame" },
        icon: "🥣",
        description: { ja: "シンプルで美味しい、韓国風のわかめスープ。", it: "Zuppa di wakame semplice e deliziosa in stile coreano." },
        type: "breakfast",
        prepTime: 5,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",
        calories: 60,
        carbs: 4,
        protein: 3,
        fat: 4,
        fiber: 2,
        sodium: 500,
        ingredients: {
            ja: ["乾燥わかめ 5g", "牛肉（切り落とし） 50g", "ごま油 小さじ1", "醤油 大さじ1/2", "にんにくチューブ 小さじ1/2", "水 400ml"],
            it: ["Wakame essiccata 5g", "Manzo a fette sottili 50g", "Olio di sesamo 1 cucchiaino", "Salsa di soia 1/2 cucchiaio", "Aglio in tubetto 1/2 cucchiaino", "Acqua 400ml"]
        },
        instructions: {
            ja: ["わかめを水で戻す。", "鍋にごま油を熱し、牛肉を炒める。", "水とわかめ、調味料を加えて煮る。"],
            it: ["Reidratare la wakame.", "Scaldare l'olio di sesamo in una pentola e soffriggere il manzo.", "Aggiungere acqua, wakame e condimenti e cuocere."]
        },
        tags: ["diabetic-friendly", "low-calorie"],
        image: ""
    },
    {
        id: 42,
        name: { ja: "カニカマ玉", it: "Frittata con Surimi (Kanikama-tama)" },
        icon: "🦀",
        description: { ja: "カニカマを使った、彩り豊かで簡単な卵料理。", it: "Piatto di uova facile e colorato con surimi." },
        type: "dinner",
        prepTime: 10,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",
        calories: 220,
        carbs: 8,
        protein: 18,
        fat: 13,
        fiber: 1,
        sodium: 600,
        ingredients: {
            ja: ["カニカマ 6本", "卵 3個", "グリーンピース 大さじ2", "鶏ガラスープの素 小さじ1", "醤油 小さじ1", "水 100ml", "片栗粉 小さじ1"],
            it: ["Surimi 6 bastoncini", "Uova 3", "Piselli 2 cucchiai", "Dado di pollo granulare 1 cucchiaino", "Salsa di soia 1 cucchiaino", "Acqua 100ml", "Fecola di patate 1 cucchiaino"]
        },
        instructions: {
            ja: ["卵を溶きほぐし、ほぐしたカニカマとグリーンピースを混ぜる。", "フライパンで半熟状に焼いて皿に盛る。", "鍋にあんの材料をすべて入れて火にかけ、とろみがついたら卵の上にかける。"],
            it: ["Sbattere le uova e mescolare con surimi sfilacciato e piselli.", "Cuocere in padella fino a cottura desiderata e trasferire su un piatto.", "Mettere tutti gli ingredienti per la salsa in una pentola, scaldare e addensare, quindi versare sulle uova."]
        },
        tags: ["diabetic-friendly", "high-protein"],
        image: ""
    },
    {
        id: 43,
        name: { ja: "油揚げのピザ", it: "Pizza di Tofu Fritto (Aburaage)" },
        icon: "🍕",
        description: { ja: "パン生地の代わりに油揚げを使った、低糖質な和風ピザ。", it: "Pizza in stile giapponese a basso contenuto di carboidrati, con tofu fritto al posto dell'impasto." },
        type: "snack",
        prepTime: 5,
        cookTime: 7,
        servings: 1,
        difficulty: "easy",
        calories: 200,
        carbs: 5,
        protein: 12,
        fat: 15,
        fiber: 2,
        sodium: 400,
        ingredients: {
            ja: ["油揚げ 1枚", "ピザソース 大さじ1", "ピーマン 1/4個", "玉ねぎ 1/8個", "とろけるチーズ 20g"],
            it: ["Aburaage (tofu fritto) 1", "Salsa per pizza 1 cucchiaio", "Peperone 1/4", "Cipolla 1/8", "Formaggio filante 20g"]
        },
        instructions: {
            ja: ["油揚げを開いて、ピザソースを塗る。", "薄切りにした野菜とチーズを乗せる。", "トースターでチーズが溶けるまで焼く。"],
            it: ["Aprire l'aburaage e spalmare la salsa.", "Guarnire con verdure a fette e formaggio.", "Infornare nel tostapane finché il formaggio non si scioglie."]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein", "japanese-ingredients"],
        image: ""
    },
    {
        id: 44,
        name: { ja: "きのこと豆腐のあんかけ", it: "Tofu con Salsa Addensata di Funghi" },
        icon: "🍲",
        description: { ja: "きのこの旨味たっぷりのあんが、豆腐に絡む優しい味わいの一品。", it: "Piatto dal sapore delicato con una salsa densa ai funghi che avvolge il tofu." },
        type: "dinner",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: "easy",
        calories: 150,
        carbs: 10,
        protein: 12,
        fat: 7,
        fiber: 4,
        sodium: 500,
        ingredients: {
            ja: ["木綿豆腐 1丁", "しめじ 1/2パック", "えのき 1/2袋", "だし汁 200ml", "醤油 大さじ1.5", "みりん 大さじ1", "片栗粉 小さじ1"],
            it: ["Tofu sodo 1", "Shimeji 1/2 confezione", "Enoki 1/2 confezione", "Brodo dashi 200ml", "Salsa di soia 1.5 cucchiai", "Mirin 1 cucchiaio", "Fecola di patate 1 cucchiaino"]
        },
        instructions: {
            ja: ["豆腐を水切りし、食べやすく切る。", "きのこをほぐす。", "鍋にだし汁と調味料、きのこを入れて煮る。", "水溶き片栗粉でとろみをつける。", "豆腐にかける。"],
            it: ["Scolare il tofu e tagliarlo.", "Separare i funghi.", "Cuocere in una pentola brodo, condimenti e funghi.", "Addensare con la fecola sciolta in acqua.", "Versare sul tofu."]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: ""
    },
    {
        id: 45,
        name: { ja: "切り昆布の煮物", it: "Stufato di Kombu a Strisce (Kiri Kombu)" },
        icon: "🌿",
        description: { ja: "食物繊維とミネラルが豊富な、日本の家庭的な煮物。", it: "Stufato casalingo giapponese, ricco di fibre e minerali." },
        type: "snack",
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        difficulty: "easy",
        calories: 70,
        carbs: 12,
        protein: 3,
        fat: 1,
        fiber: 6,
        sodium: 450,
        ingredients: {
            ja: ["切り昆布 50g", "人参 1/4本", "油揚げ 1/2枚", "だし汁 300ml", "醤油 大さじ2", "みりん 大さじ1"],
            it: ["Kiri Kombu (kombu a strisce) 50g", "Carota 1/4", "Aburaage (tofu fritto) 1/2", "Brodo dashi 300ml", "Salsa di soia 2 cucchiai", "Mirin 1 cucchiaio"]
        },
        instructions: {
            ja: ["切り昆布をさっと洗う。", "人参と油揚げを細切りにする。", "鍋にすべての材料を入れて、煮汁が少なくなるまで煮る。"],
            it: ["Lavare brevemente il kombu.", "Tagliare carota e aburaage a julienne.", "Mettere tutti gli ingredienti in una pentola e cuocere finché il liquido non si riduce."]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: ""
    }
];

// Generate additional recipes programmatically to reach 100+
function generateRecipes() {
    const generatedRecipes = [];
    
    // Recipe templates for generating variations
    const vegetables = [
        {ja: "ブロッコリー", it: "Broccoli"},
        {ja: "カリフラワー", it: "Cavolfiore"},
        {ja: "キャベツ", it: "Cavolo"},
        {ja: "白菜", it: "Cavolo cinese"},
        {ja: "もやし", it: "Germogli"},
        {ja: "小松菜", it: "Komatsuna"},
        {ja: "ほうれん草", it: "Spinaci"},
        {ja: "チンゲン菜", it: "Bok choy"}
    ];
    
    const proteins = [
        {ja: "鶏ささみ", it: "Filetto di pollo", calories: 165, protein: 23},
        {ja: "鯖", it: "Sgombro", calories: 202, protein: 20},
        {ja: "鮭", it: "Salmone", calories: 154, protein: 22},
        {ja: "豚ヒレ肉", it: "Filetto di maiale", calories: 130, protein: 22},
        {ja: "卵", it: "Uova", calories: 155, protein: 13},
        {ja: "納豆", it: "Natto", calories: 200, protein: 16}
    ];
    
    let currentId = 50;
    
    // Generate steamed vegetable variations
    vegetables.forEach((veg, index) => {
        const mealTypes = ["breakfast", "lunch", "dinner", "snack"];
        const mealType = mealTypes[index % mealTypes.length];
        
        generatedRecipes.push({
            id: currentId++,
            name: { 
                ja: `${veg.ja}の蒸し物`, 
                it: `${veg.it} al Vapore` 
            },
            description: { 
                ja: `${veg.ja}を使った健康的な蒸し料理`, 
                it: `Piatto sano al vapore con ${veg.it}` 
            },
            type: mealType,
            prepTime: 5,
            cookTime: 10,
            servings: 2,
            difficulty: "easy",
            calories: 35 + (index * 10),
            carbs: 6 + index,
            protein: 3 + index,
            fat: 1,
            fiber: 3 + index,
            sodium: 120,
            ingredients: {
                ja: [`${veg.ja} 200g`, "塩 少々", "ポン酢 大さじ1"],
                it: [`${veg.it} 200g`, "Sale q.b.", "Ponzu 1 cucchiaio"]
            },
            instructions: {
                ja: [`${veg.ja}を食べやすく切る`, "蒸し器で10分蒸す", "ポン酢をかけて完成"],
                it: [`Tagliare ${veg.it}`, "Cuocere a vapore per 10 minuti", "Servire con ponzu"]
            },
            tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
            image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f5e8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E${veg.ja}%3C/text%3E%3C/svg%3E`
        });
    });
    
    // Generate protein variations
    proteins.forEach((protein, index) => {
        const mealTypes = ["breakfast", "lunch", "dinner"];
        const cookingMethods = [
            {ja: "グリル", it: "Grigliato", time: 15},
            {ja: "蒸し", it: "Al vapore", time: 20},
            {ja: "煮込み", it: "Brasato", time: 25}
        ];
        
        cookingMethods.forEach((method, methodIndex) => {
            const mealType = mealTypes[methodIndex % mealTypes.length];
            
            generatedRecipes.push({
                id: currentId++,
                name: { 
                    ja: `${protein.ja}の${method.ja}`, 
                    it: `${protein.it} ${method.it}` 
                },
                description: { 
                    ja: `${protein.ja}を使った${method.ja}料理`, 
                    it: `${protein.it} ${method.it.toLowerCase()} salutare` 
                },
                type: mealType,
                prepTime: 10,
                cookTime: method.time,
                servings: 2,
                difficulty: methodIndex === 2 ? "medium" : "easy",
                calories: protein.calories,
                carbs: 5,
                protein: protein.protein,
                fat: 8,
                fiber: 2,
                sodium: 380,
                ingredients: {
                    ja: [`${protein.ja} 150g`, "醤油 大さじ1", "みりん 小さじ1", "生姜 1片"],
                    it: [`${protein.it} 150g`, "Salsa di soia 1 cucchiaio", "Mirin 1 cucchiaino", "Zenzero 1 pezzo"]
                },
                instructions: {
                    ja: [
                        `${protein.ja}に下味をつける`,
                        `${method.ja}で調理する`,
                        "味を調えて完成"
                    ],
                    it: [
                        `Marinare ${protein.it}`,
                        `Cuocere ${method.it.toLowerCase()}`,
                        "Aggiustare di sapore"
                    ]
                },
                tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
                image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0e6d2'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='10' fill='%23666'%3E${protein.ja}${method.ja}%3C/text%3E%3C/svg%3E`
            });
        });
    });
    
    return [...recipes, ...generatedRecipes];
}

// Additional diabetic-friendly recipes
const additionalRecipes = [
    {
        id: 200,
        name: { ja: "おからサラダ", it: "Insalata di Okara" },
        description: { ja: "高タンパク質で低糖質のおからサラダ", it: "Insalata di okara ricca di proteine e povera di zuccheri" },
        type: "lunch",
        prepTime: 15,
        cookTime: 0,
        servings: 3,
        difficulty: "easy",
        calories: 140,
        carbs: 8,
        protein: 12,
        fat: 8,
        fiber: 8,
        sodium: 420,
        ingredients: {
            ja: ["おから 100g", "きゅうり 1本", "人参 1/2本", "ハム 3枚", "マヨネーズ 大さじ2", "酢 小さじ1", "塩こしょう 少々"],
            it: ["Okara 100g", "Cetriolo 1", "Carota 1/2", "Prosciutto 3 fette", "Maionese 2 cucchiai", "Aceto 1 cucchiaino", "Sale e pepe q.b."]
        },
        instructions: {
            ja: ["野菜を細かく切る", "ハムを細切りにする", "すべてを混ぜ合わせる", "調味料で味を調える"],
            it: ["Tagliare finemente le verdure", "Tagliare il prosciutto a striscioline", "Mescolare tutto", "Condire a piacere"]
        },
        tags: ["diabetic-friendly", "high-protein", "low-carb"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5f5dc'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3Eおからサラダ%3C/text%3E%3C/svg%3E"
    }
];

// Export all recipes - Combine base recipes with generated ones
const allRecipes = generateRecipes();

// Final combined recipes database
window.recipesDatabase = [...allRecipes, ...additionalRecipes].slice(0, 120); 