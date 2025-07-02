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
            ja: [
                "豆腐をキッチンペーパーで包み、重しをのせて30分水切りする",
                "ねぎを小口切り、しょうがをみじん切りにする",
                "フライパンを中火で熱し、ごま油を入れる",
                "しょうがを香りが出るまで炒める（30秒）",
                "豆腐を手でほぐしながら加え、2分炒める",
                "溶き卵を加えて、豆腐と混ぜ合わせながら炒める",
                "醤油と塩こしょうで味を調え、卵が固まったら完成"
            ],
            it: [
                "Avvolgere il tofu in carta da cucina e mettere un peso per 30 minuti per scolarlo",
                "Tagliare i cipollotti e tritare finemente lo zenzero",
                "Scaldare una padella a fuoco medio e aggiungere l'olio di sesamo",
                "Soffriggere lo zenzero fino a quando sprigiona aroma (30 secondi)",
                "Aggiungere il tofu sbriciolato a mano e cuocere per 2 minuti",
                "Versare le uova sbattute e mescolare con il tofu",
                "Condire con salsa di soia, sale e pepe, cuocere fino a quando le uova sono solidificate"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "low-carb", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='16' fill='%23666'%3E豆腐スクランブル%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "こんにゃく麺をザルに入れ、流水で2分間よく洗い、ぬめりを取る",
                "鍋にだし汁300mlを入れ、中火で温める",
                "だし汁が温まったら、味噌を溶かし入れる（沸騰させない）",
                "豆腐を一口大に切り、わかめと一緒に加える",
                "弱火で2分煮て、最後にねぎを散らす",
                "温かいうちにいただく"
            ],
            it: [
                "Mettere gli shirataki in un colino e sciacquarli sotto acqua corrente per 2 minuti per rimuovere la viscosità",
                "Scaldare 300ml di brodo dashi in una pentola a fuoco medio",
                "Quando il brodo è caldo, sciogliere il miso (non far bollire)",
                "Tagliare il tofu a pezzi e aggiungere con il wakame",
                "Cuocere a fuoco basso per 2 minuti e guarnire con cipollotto",
                "Servire caldo"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f4f8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3E味噌汁%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "アボカドを縦半分に切り、皮と種を除いて1cm角のサイコロ状に切る",
                "納豆をパックから取り出し、付属のタレとからしを加えてよく混ぜる（粘りが出るまで）",
                "玄米を茶碗に盛りつける（温かいもの）",
                "アボカドと納豆を玄米の上にきれいに並べる",
                "のりを手で細かくちぎって、具材の上に散らす",
                "醤油とわさびを小皿に取り分けて、好みでかけて食べる"
            ],
            it: [
                "Tagliare l'avocado a metà, rimuovere buccia e nocciolo, tagliare a cubetti di 1cm",
                "Prendere il natto dalla confezione, aggiungere la salsa e la senape inclusi e mescolare bene fino a formare filamenti",
                "Mettere il riso integrale caldo in una ciotola",
                "Disporre ordinatamente avocado e natto sul riso",
                "Spezzettare il nori a mano e spargerlo sopra gli ingredienti",
                "Servire salsa di soia e wasabi a parte per condire a piacere"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5f5dc'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3E納豆丼%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "鶏胸肉に塩こしょうをふり、10分置く",
                "鍋に水を沸かし、鶏胸肉を入れて中火で20分茹でる",
                "茹で上がった鶏肉を冷水で冷やし、手で細かく裂く",
                "レタスは一口大、きゅうりは薄切り、トマトはくし切りにする",
                "人参と玉ねぎは細切りにする",
                "すべての材料を大きめのボウルに入れて混ぜる",
                "ポン酢とごま油を加えて、軽く和える"
            ],
            it: [
                "Salare e pepare il petto di pollo e lasciare 10 minuti",
                "Portare l'acqua a ebollizione, aggiungere il pollo e cuocere a fuoco medio per 20 minuti",
                "Raffreddare il pollo in acqua fredda e sfilacciarlo a mano",
                "Tagliare la lattuga a pezzi, il cetriolo a fette sottili, il pomodoro a spicchi",
                "Tagliare carota e cipolla a julienne",
                "Mescolare tutti gli ingredienti in una ciotola grande",
                "Aggiungere ponzu e olio di sesamo e mescolare leggermente"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "low-calorie"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f5e8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3Eサラダ%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "しいたけは石づきを除いて薄切り、えのきは根元を切り落としてほぐす",
                "しめじは根元を切り落としてほぐす",
                "にんにくをみじん切りにする",
                "フライパンを中火で熱し、オリーブオイルを入れる",
                "にんにくを香りが出るまで炒める（30秒）",
                "きのこを加えて、水分が出てくるまで3分炒める",
                "醤油とみりんを加えて、さらに2分炒めて味をなじませる"
            ],
            it: [
                "Rimuovere il gambo degli shiitake e tagliarli a fette sottili, tagliare la base degli enoki e separarli",
                "Tagliare la base degli shimeji e separarli",
                "Tritare finemente l'aglio",
                "Scaldare una padella a fuoco medio e aggiungere l'olio d'oliva",
                "Soffriggere l'aglio fino a quando sprigiona aroma (30 secondi)",
                "Aggiungere i funghi e cuocere per 3 minuti fino a quando rilasciano acqua",
                "Aggiungere salsa di soia e mirin e cuocere altri 2 minuti per insaporire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0e6d2'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3Eきのこ炒め%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "白身魚に塩をふり、10分間置いて水分を出す",
                "生姜とねぎを細切り（千切り）にする",
                "蒸し器の水を沸かす",
                "魚の上に生姜とねぎをきれいに並べる",
                "蒸し器に入れ、中火で15分蒸す",
                "竹串で刺して、身がほぐれるようになったら火を止める",
                "醤油、酒、ごま油を混ぜたタレをかけて完成"
            ],
            it: [
                "Salare il pesce bianco e lasciare 10 minuti per far uscire l'acqua",
                "Tagliare zenzero e cipollotti a julienne",
                "Portare l'acqua del cestello a ebollizione",
                "Disporre ordinatamente zenzero e cipollotti sul pesce",
                "Mettere nel cestello e cuocere a vapore a fuoco medio per 15 minuti",
                "Controllare con uno stuzzicadenti, quando la carne si sfalda spegnere il fuoco",
                "Versare sopra la salsa mescolata di salsa di soia, sake e olio di sesamo"
            ]
        },
        tags: ["diabetic-friendly", "low-fat", "high-protein"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e6f3ff'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3E蒸し魚%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "大根を2cm厚さの半月切りにする",
                "イカを食べやすい大きさに切る（輪切りまたは細切り）",
                "鍋にだし汁400mlを入れ、中火で沸かす",
                "大根を入れて、弱火で15分煮る",
                "イカを加えて、さらに10分煮る",
                "醤油、みりん、砂糖を加えて、味を調える",
                "煮汁が少なくなるまで煮詰めて完成"
            ],
            it: [
                "Tagliare il daikon a fette semicircolari di 2cm di spessore",
                "Tagliare i calamari a pezzi (anelli o strisce)",
                "Portare 400ml di brodo dashi a ebollizione a fuoco medio",
                "Aggiungere il daikon e cuocere a fuoco basso per 15 minuti",
                "Aggiungere i calamari e cuocere altri 10 minuti",
                "Aggiungere salsa di soia, mirin e zucchero per insaporire",
                "Far ridurre il liquido fino a quando si addensa"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f8f8f8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3E大根煮物%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "豆腐をよく水切りしてつぶす（重しをのせて30分）",
                "玉ねぎをみじん切りにして、フライパンで透明になるまで炒める",
                "豆腐、玉ねぎ、卵、パン粉、醤油、塩こしょうを混ぜる",
                "小判型に成形する（厚さ1.5cm）",
                "フライパンにオリーブオイルを熱し、中火で片面5分焼く",
                "裏返して5分焼き、両面こんがりしたら完成"
            ],
            it: [
                "Scolare bene il tofu e schiacciarlo (mettere un peso per 30 minuti)",
                "Tritare la cipolla e rosolarla in padella fino a renderla trasparente",
                "Mescolare tofu, cipolla, uovo, pangrattato, salsa di soia, sale e pepe",
                "Formare hamburger ovali (spessore 1.5cm)",
                "Scaldare l'olio d'oliva in padella e cuocere a fuoco medio 5 minuti per lato",
                "Girare e cuocere altri 5 minuti fino a doratura"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "low-calorie"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5deb3'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E豆腐ハンバーグ%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "キャベツは一口大、人参は薄切り、もやしは洗っておく",
                "鍋にだし汁400mlを入れ、中火で沸かす",
                "人参を入れて3分煮る",
                "キャベツを加えて2分煮る",
                "もやしと豆腐を加えて1分煮る",
                "火を弱めて味噌を溶かし入れる（沸騰させない）",
                "味噌が溶けたら火を止めて完成"
            ],
            it: [
                "Tagliare il cavolo a pezzi, la carota a fette sottili, sciacquare i germogli",
                "Portare 400ml di brodo dashi a ebollizione a fuoco medio",
                "Aggiungere la carota e cuocere per 3 minuti",
                "Aggiungere il cavolo e cuocere per 2 minuti",
                "Aggiungere germogli e tofu e cuocere per 1 minuto",
                "Abbassare il fuoco e sciogliere il miso (non far bollire)",
                "Spegnere il fuoco quando il miso è sciolto"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f4f8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E野菜味噌汁%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "こんにゃくに格子状の切り込みを入れる（表面に1cm間隔で十字に切れ目）",
                "鍋に水を沸かし、こんにゃくを2分間下茹でする",
                "ザルに上げて水気を切る",
                "フライパンを中火で熱し、ごま油を入れる",
                "こんにゃくを片面3分ずつ焼く",
                "醤油、みりん、砂糖を加えて、煮汁が少なくなるまで煮詰める",
                "七味唐辛子をふって完成"
            ],
            it: [
                "Fare incisioni a griglia sul konjac (tagli incrociati ogni 1cm sulla superficie)",
                "Portare l'acqua a ebollizione e sbollentare il konjac per 2 minuti",
                "Scolare in un colino",
                "Scaldare una padella a fuoco medio e aggiungere l'olio di sesamo",
                "Cuocere il konjac 3 minuti per lato",
                "Aggiungere salsa di soia, mirin e zucchero e far ridurre il liquido",
                "Spolverare con shichimi e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3Eこんにゃく%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "きゅうりを薄切りにする（2mm厚さ）",
                "きゅうりに塩をふり、10分間置いて水分を出す",
                "きゅうりを手で軽く絞って水気を切る",
                "塩昆布を細かく刻む",
                "きゅうりと塩昆布を混ぜ合わせる",
                "ごま油を数滴加えて、軽く和える"
            ],
            it: [
                "Tagliare il cetriolo a fette sottili (2mm di spessore)",
                "Salare il cetriolo e lasciare 10 minuti per far uscire l'acqua",
                "Strizzare leggermente il cetriolo con le mani per rimuovere l'acqua",
                "Tritare finemente il kombu salato",
                "Mescolare cetriolo e kombu salato",
                "Aggiungere alcune gocce di olio di sesamo e mescolare leggermente"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f5e8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3Eきゅうり%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "枝豆を流水でよく洗い、汚れを落とす",
                "鍋に水を入れ、塩大さじ1を加えて沸かす",
                "沸騰したら枝豆を入れ、中火で8分間茹でる",
                "茹で上がったらザルに上げ、冷水で冷やす",
                "水気を切って、温かいうちに食べる",
                "塩をふって好みの味に調える"
            ],
            it: [
                "Sciacquare bene gli edamame sotto acqua corrente per rimuovere lo sporco",
                "Portare l'acqua a ebollizione in una pentola e aggiungere 1 cucchiaio di sale",
                "Quando bolle, aggiungere gli edamame e cuocere a fuoco medio per 8 minuti",
                "Scolare in un colino e raffreddare in acqua fredda",
                "Scolare l'acqua e servire caldo",
                "Salare a piacere"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f5e8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E枝豆%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f4a460'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E焼き芋%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "豆腐をキッチンペーパーで包み、10分間重しをのせて水切りする",
                "白ごまをすり鉢ですりつぶす（またはフードプロセッサーで細かくする）",
                "すりごまに醤油、みりん、砂糖を加えてよく混ぜる",
                "豆腐を一口大に切り、ボウルに入れる",
                "ごまダレを加えて、全体をやさしく和える"
            ],
            it: [
                "Avvolgere il tofu in carta da cucina e mettere un peso per 10 minuti per scolarlo",
                "Tritare i semi di sesamo in un mortaio o con un mixer",
                "Mescolare i semi di sesamo tritati con salsa di soia, mirin e zucchero",
                "Tagliare il tofu a pezzi e metterlo in una ciotola",
                "Aggiungere la salsa di sesamo e mescolare delicatamente"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "low-calorie"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5f5dc'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E胡麻豆腐%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "玄米を炊飯器で炊き、粗熱を取る",
                "きゅうりとアボカドを細切り（5mm幅の棒状）にする",
                "巻きすの上にのりを置き、のりの上にご飯を薄く広げる（端1cm残す）",
                "ご飯の中央にきゅうりとアボカドを並べる",
                "手前から巻きすごと巻き、軽く押さえて形を整える",
                "包丁で食べやすい大きさに切る（濡らした包丁を使うと切りやすい）",
                "醤油を添えていただく"
            ],
            it: [
                "Cuocere il riso integrale nella cuociriso e lasciar raffreddare",
                "Tagliare cetriolo e avocado a bastoncini di 5mm di spessore",
                "Mettere il foglio di nori su una stuoia da sushi e stendere il riso lasciando 1cm libero su un bordo",
                "Disporre cetriolo e avocado al centro del riso",
                "Arrotolare il tutto aiutandosi con la stuoia, premendo leggermente per dare forma",
                "Tagliare a pezzi con un coltello bagnato per evitare che si attacchi",
                "Servire con salsa di soia"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0e68c'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E海苔巻き%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "鶏ささみに塩をふり、10分間置いて水分を出す",
                "生姜とねぎを細切り（千切り）にする",
                "蒸し器の水を沸かす",
                "鶏ささみの上に生姜とねぎをきれいに並べる",
                "蒸し器に入れ、中火で15分蒸す",
                "竹串で刺して、身がほぐれるようになったら火を止める",
                "醤油、酒、ごま油を混ぜたタレをかけて完成"
            ],
            it: [
                "Salare il filetto di pollo e lasciare 10 minuti per far uscire l'acqua",
                "Tagliare zenzero e cipollotti a julienne",
                "Portare l'acqua del cestello a ebollizione",
                "Disporre ordinatamente zenzero e cipollotti sul pollo",
                "Mettere nel cestello e cuocere a vapore a fuoco medio per 15 minuti",
                "Controllare con uno stuzzicadenti, quando la carne si sfalda spegnere il fuoco",
                "Versare sopra la salsa mescolata di salsa di soia, sake e olio di sesamo"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "low-fat"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0e6d2'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='10' fill='%23666'%3E鶏ささみ蒸し%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "鯖の表面に塩をふり、10分間置いて水分を出す",
                "グリルパンを中火で熱する",
                "鯖を片面6分ずつ焼く（皮目から焼く）",
                "竹串で刺して、身がほぐれるようになったら完成",
                "レモンをくし切り、大根をおろす",
                "鯖にレモンと大根おろしを添えて完成"
            ],
            it: [
                "Salare la superficie dello sgombro e lasciare 10 minuti per far uscire l'acqua",
                "Scaldare la griglia a fuoco medio",
                "Cuocere lo sgombro 6 minuti per lato (iniziare dalla parte della pelle)",
                "Controllare con uno stuzzicadenti, quando la carne si sfalda è pronto",
                "Tagliare il limone a spicchi e grattugiare il daikon",
                "Servire lo sgombro con limone e daikon grattugiato"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e6f3ff'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E鯖焼き%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "味噌、みりん、酒、砂糖をボウルに入れてよく混ぜる",
                "鮭の両面に味噌ダレを塗り、30分間置いて味をなじませる",
                "グリルパンを中火で熱する",
                "鮭を片面7-8分ずつ焼く（皮目から焼く）",
                "竹串で刺して、身がほぐれるようになったら完成",
                "温かいうちにいただく"
            ],
            it: [
                "Mescolare bene miso, mirin, sake e zucchero in una ciotola",
                "Spalmare la salsa di miso su entrambi i lati del salmone e lasciare 30 minuti per insaporire",
                "Scaldare la griglia a fuoco medio",
                "Cuocere il salmone 7-8 minuti per lato (iniziare dalla parte della pelle)",
                "Controllare con uno stuzzicadenti, quando la carne si sfalda è pronto",
                "Servire caldo"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23ffb6c1'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E鮭味噌焼き%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "豚ヒレ肉を薄切り（3mm厚さ）にする",
                "生姜をすりおろす",
                "醤油、みりん、酒、ごま油をボウルに入れて混ぜる",
                "豚肉を調味料に30分間漬け込む",
                "フライパンを中火で熱し、ごま油を入れる",
                "豚肉を片面2分ずつ焼く",
                "すりおろした生姜を加えて、さらに1分炒めて完成"
            ],
            it: [
                "Tagliare il filetto di maiale a fette sottili (3mm di spessore)",
                "Grattugiare lo zenzero",
                "Mescolare salsa di soia, mirin, sake e olio di sesamo in una ciotola",
                "Marinare il maiale nei condimenti per 30 minuti",
                "Scaldare una padella a fuoco medio e aggiungere l'olio di sesamo",
                "Cuocere il maiale 2 minuti per lato",
                "Aggiungere lo zenzero grattugiato e cuocere altri 1 minuto"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0e6d2'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='10' fill='%23666'%3E豚生姜焼き%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "卵をボウルに割り入れ、だし汁、醤油、砂糖、塩を加えてよく混ぜる",
                "フライパンを中火で熱し、薄く油を塗る",
                "卵液の1/3を流し入れ、半熟になったら手前から巻く",
                "巻いた卵を奥に寄せ、残りの卵液の1/2を流し入れる",
                "半熟になったら、巻いた卵ごと手前から巻く",
                "最後の卵液を流し入れ、同様に巻いて完成",
                "粗熱を取ってから食べやすい大きさに切る"
            ],
            it: [
                "Rompere le uova in una ciotola e aggiungere brodo dashi, salsa di soia, zucchero e sale, mescolare bene",
                "Scaldare una padella a fuoco medio e ungere leggermente con olio",
                "Versare 1/3 del composto di uova e arrotolare quando è semi-cotto",
                "Spostare l'uovo arrotolato verso il retro e versare metà del composto rimanente",
                "Arrotolare di nuovo quando è semi-cotto",
                "Versare l'ultima parte del composto e arrotolare allo stesso modo",
                "Lasciar raffreddare e tagliare a pezzi"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23fffacd'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E卵焼き%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "納豆をパックから取り出し、付属のタレとからしを加えてよく混ぜる（粘りが出るまで）",
                "玄米を茶碗に温かいうちに盛りつける",
                "納豆を玄米の上にきれいに並べる",
                "ねぎを小口切りにして散らす",
                "醤油とわさびを小皿に取り分けて、好みでかけて食べる"
            ],
            it: [
                "Prendere il natto dalla confezione, aggiungere la salsa e la senape inclusi e mescolare bene fino a formare filamenti",
                "Mettere il riso integrale caldo in una ciotola",
                "Disporre ordinatamente il natto sul riso",
                "Tagliare il cipollotto e spargerlo sopra",
                "Servire salsa di soia e wasabi a parte per condire a piacere"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5f5dc'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E納豆ご飯%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "米を流水で3回洗い、水気を切る",
                "鍋に米と水600mlを入れる",
                "中火で沸かし、沸騰したら弱火にする",
                "蓋をして20分間煮る（時々かき混ぜる）",
                "塩で味を調える",
                "梅干しを添えて温かいうちにいただく"
            ],
            it: [
                "Lavare il riso 3 volte sotto acqua corrente e scolare",
                "Mettere riso e 600ml di acqua in una pentola",
                "Portare a ebollizione a fuoco medio, poi abbassare il fuoco",
                "Coprire e cuocere per 20 minuti (mescolare di tanto in tanto)",
                "Condire con sale",
                "Servire caldo con umeboshi"
            ]
        },
        tags: ["diabetic-friendly", "low-fat", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5f5dc'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3Eおかゆ%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "キャベツは一口大、人参は薄切り、玉ねぎはくし切り、きのこはほぐす",
                "鍋にだし汁800mlを入れ、中火で沸かす",
                "玉ねぎを入れて5分煮る",
                "人参を加えて3分煮る",
                "キャベツときのこを加えて2分煮る",
                "醤油と塩で味を調える",
                "温かいうちにいただく"
            ],
            it: [
                "Tagliare il cavolo a pezzi, la carota a fette sottili, la cipolla a spicchi, separare i funghi",
                "Portare 800ml di brodo dashi a ebollizione a fuoco medio",
                "Aggiungere la cipolla e cuocere per 5 minuti",
                "Aggiungere la carota e cuocere per 3 minuti",
                "Aggiungere cavolo e funghi e cuocere per 2 minuti",
                "Condire con salsa di soia e sale",
                "Servire caldo"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f4f8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E野菜スープ%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "鍋にだし汁400mlを入れ、中火で温める",
                "豆腐を一口大に切る",
                "だし汁が温まったら、味噌を溶かし入れる（沸騰させない）",
                "豆腐とわかめを加える",
                "弱火で2分煮て、最後にねぎを散らす",
                "温かいうちにいただく"
            ],
            it: [
                "Scaldare 400ml di brodo dashi in una pentola a fuoco medio",
                "Tagliare il tofu a pezzi",
                "Quando il brodo è caldo, sciogliere il miso (non far bollire)",
                "Aggiungere tofu e wakame",
                "Cuocere a fuoco basso per 2 minuti e guarnire con cipollotto",
                "Servire caldo"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f4f8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E味噌汁%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "こんにゃくをザルに入れ、流水で2分間よく洗い、ぬめりを取る",
                "こんにゃくを食べやすい大きさに切る",
                "きゅうりと人参を細切り（千切り）にする",
                "すべての材料をボウルに入れて混ぜる",
                "ポン酢とごま油を加えて、軽く和える",
                "冷蔵庫で30分冷やしてからいただく"
            ],
            it: [
                "Mettere il konjac in un colino e sciacquarlo sotto acqua corrente per 2 minuti per rimuovere la viscosità",
                "Tagliare il konjac a pezzi",
                "Tagliare cetriolo e carota a julienne",
                "Mescolare tutti gli ingredienti in una ciotola",
                "Aggiungere ponzu e olio di sesamo e mescolare leggermente",
                "Raffreddare in frigorifero per 30 minuti prima di servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f5e8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3Eこんにゃくサラダ%3C/text%3E%3C/svg%3E",
        country: 'JP'
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
            ja: [
                "しらたきをザルに入れ、流水で2分間洗い、ぬめりを取る",
                "フライパンを中火で熱し、しらたきを乾煎りして水分を飛ばす（5分）",
                "鶏肉を一口大に切り、玉ねぎとにんにくをみじん切りにする",
                "パプリカを細切りにする",
                "オリーブオイルで鶏肉を炒め、玉ねぎとにんにくを加える",
                "パプリカ、トマト缶、サフランを加えて5分煮る",
                "しらたきを加えて混ぜ、蓋をして10分蒸し焼きにする",
                "レモンを添えて完成"
            ],
            it: [
                "Mettere gli shirataki in un colino e sciacquarli sotto acqua corrente per 2 minuti per rimuovere la viscosità",
                "Scaldare una padella a fuoco medio e tostare gli shirataki per rimuovere l'acqua (5 minuti)",
                "Tagliare il pollo a pezzi, tritare cipolla e aglio",
                "Tagliare il peperone a julienne",
                "Soffriggere il pollo nell'olio d'oliva, aggiungere cipolla e aglio",
                "Aggiungere peperone, pomodori e zafferano e cuocere per 5 minuti",
                "Aggiungere gli shirataki, mescolare, coprire e cuocere al vapore per 10 minuti",
                "Servire con limone"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein"],
        image: "",
        country: 'JP'
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
            ja: [
                "おからパウダー、卵、粉チーズ、塩こしょうをボウルに入れてよく混ぜる",
                "生地を棒状に伸ばし、2cm幅に切る",
                "フォークの背で模様をつける（表面に軽く押し付ける）",
                "鍋に水を沸かし、塩を加える",
                "ニョッキを入れて、浮き上がってきたら2分茹でる",
                "ザルに上げて水気を切り、お好みのソースと絡める"
            ],
            it: [
                "Mescolare bene okara, uovo, formaggio, sale e pepe in una ciotola",
                "Stendere l'impasto e tagliarlo a pezzi di 2cm di larghezza",
                "Rigare con il dorso di una forchetta (premere leggermente sulla superficie)",
                "Portare l'acqua a ebollizione in una pentola e aggiungere sale",
                "Aggiungere gli gnocchi e cuocere per 2 minuti dopo che vengono a galla",
                "Scolare in un colino e condire con la salsa preferita"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein", "japanese-ingredients"],
        image: "",
        country: 'JP'
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
            ja: [
                "高野豆腐をたっぷりの水に10分浸して戻す",
                "両手でやさしく押して水気をしっかり絞る",
                "一口大に切る",
                "ボウルに醤油、みりん、にんにくを混ぜ、豆腐を10分漬ける",
                "キッチンペーパーで軽く水気を取る",
                "片栗粉を全体にまぶす",
                "フライパンに油を1cmほど入れて中火で熱し、豆腐を両面3分ずつ揚げ焼きする",
                "きつね色になったら取り出し、油を切って完成"
            ],
            it: [
                "Immergere il koyadofu in abbondante acqua per 10 minuti per reidratarlo",
                "Strizzare delicatamente con le mani per eliminare l'acqua",
                "Tagliare a pezzi",
                "Mescolare salsa di soia, mirin e aglio in una ciotola e marinare il tofu per 10 minuti",
                "Tamponare leggermente con carta da cucina per asciugare",
                "Infarinare con fecola di patate su tutta la superficie",
                "Scaldare 1cm di olio in padella a fuoco medio e friggere il tofu 3 minuti per lato",
                "Quando è dorato, scolare su carta assorbente e servire"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        image: "",
        country: 'JP'
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
            ja: [
                "アボカドは縦半分に切り、種と皮を除いて1.5cm角に切る",
                "切ったアボカドにレモン汁をかけて変色を防ぐ",
                "ボウルにマヨネーズ、わさび、醤油を入れてよく混ぜる",
                "茹でエビとアボカドを加え、全体をやさしく和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Tagliare l'avocado a metà, eliminare il nocciolo e la buccia, poi tagliare a cubetti di 1,5cm",
                "Irrorare l'avocado con succo di limone per evitare che annerisca",
                "Mescolare maionese, wasabi e salsa di soia in una ciotola",
                "Aggiungere gamberi bolliti e avocado, mescolare delicatamente il tutto",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-carb"],
        image: "",
        country: 'JP'
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
            ja: [
                "切り干し大根をたっぷりの水に5分浸して戻し、水気をしっかり絞る",
                "にんにくは薄切り、鷹の爪は種を除いて輪切りにする",
                "フライパンにオリーブオイルを入れ、にんにくと鷹の爪を弱火で香りが出るまで炒める",
                "切り干し大根を加えて中火で2分炒める",
                "醤油を回しかけて全体を混ぜ、火を止める",
                "器に盛り付けて完成"
            ],
            it: [
                "Mettere il daikon essiccato in abbondante acqua per 5 minuti per reidratarlo, poi strizzare bene",
                "Tagliare l'aglio a fettine sottili, il peperoncino a rondelle eliminando i semi",
                "Scaldare l'olio d'oliva in padella, soffriggere aglio e peperoncino a fuoco basso finché sono profumati",
                "Aggiungere il daikon e saltare a fuoco medio per 2 minuti",
                "Aggiungere la salsa di soia, mescolare bene e spegnere il fuoco",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "",
        country: 'JP'
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
            ja: [
                "しめじとエリンギは石づきを取り、食べやすい大きさにほぐす・切る",
                "フライパンを中火で熱し、きのこを入れて水分が飛ぶまで5分乾煎りする",
                "ボウルに酢、オリーブオイル、塩、黒胡椒を入れてよく混ぜる",
                "熱いうちにきのこをボウルに加え、全体を和える",
                "粗熱が取れたら冷蔵庫で30分以上冷やして完成"
            ],
            it: [
                "Eliminare la base dei funghi e tagliarli a pezzi",
                "Scaldare una padella a fuoco medio e tostare i funghi per 5 minuti finché perdono l'acqua",
                "Mescolare aceto, olio d'oliva, sale e pepe in una ciotola",
                "Aggiungere i funghi caldi nella ciotola e mescolare bene",
                "Lasciar raffreddare, poi mettere in frigorifero per almeno 30 minuti prima di servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie"],
        image: "",
        country: 'JP'
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
            ja: [
                "鶏むね肉は1cm厚さのそぎ切りにし、両面に塩こしょうをふる",
                "ボウルに卵を割り入れ、粉チーズを加えてよく混ぜる",
                "鶏肉を卵液にくぐらせる",
                "フライパンにオリーブオイルを中火で熱し、鶏肉を並べる",
                "両面を2分ずつ焼き、焼き色がついたら完成"
            ],
            it: [
                "Tagliare il petto di pollo a fette di 1cm di spessore e salare e pepare su entrambi i lati",
                "Sbattere l'uovo in una ciotola e aggiungere il parmigiano, mescolare bene",
                "Passare il pollo nella pastella di uovo e formaggio",
                "Scaldare l'olio d'oliva in padella a fuoco medio e disporre il pollo",
                "Cuocere 2 minuti per lato finché è dorato"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein"],
        image: "",
        country: 'JP'
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
            ja: [
                "キャベツは芯を除き、千切りにする",
                "沸騰したお湯でキャベツを30秒茹で、ザルに上げて冷ます（生でも可）",
                "ツナ缶の油を軽く切る",
                "ボウルにキャベツ、ツナ、マヨネーズ、醤油、塩こしょうを入れてよく混ぜる",
                "器に盛り付けて完成"
            ],
            it: [
                "Eliminare il torsolo dal cavolo e tagliarlo a julienne",
                "Sbollentare il cavolo in acqua bollente per 30 secondi, scolare e raffreddare (opzionale, si può usare anche crudo)",
                "Scolare leggermente l'olio dal tonno in scatola",
                "Mettere cavolo, tonno, maionese, salsa di soia, sale e pepe in una ciotola e mescolare bene",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-carb"],
        image: "",
        country: 'JP'
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
            ja: [
                "もやしは洗って水気を切る",
                "耐熱皿にもやしを広げ、その上に豚肉を重ならないように並べる",
                "塩こしょうを全体にふる",
                "ラップをふんわりかけ、電子レンジ600Wで5分加熱する",
                "加熱後、ラップを外して水分を捨てる",
                "ポン酢やごま油をかけて完成"
            ],
            it: [
                "Lavare i germogli di soia e scolarli",
                "Disporre i germogli su un piatto adatto al microonde e adagiare sopra le fette di maiale senza sovrapporle",
                "Salare e pepare su tutta la superficie",
                "Coprire con pellicola e cuocere in microonde a 600W per 5 minuti",
                "Togliere la pellicola e scolare l'acqua in eccesso",
                "Condire con ponzu o olio di sesamo e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein"],
        image: "",
        country: 'JP'
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
            ja: [
                "ほうれん草は根元を切り落とし、沸騰したお湯で1分茹でる",
                "冷水にさらして色止めし、水気をしっかり絞る",
                "ほうれん草を3cm長さに切る",
                "豆腐はキッチンペーパーで包み、重しをのせて10分水切りする",
                "すり鉢に豆腐を入れ、滑らかになるまでよくすりつぶす",
                "白すりごま、砂糖、醤油を加えて混ぜる",
                "ほうれん草を加えて和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Eliminare le radici degli spinaci e sbollentarli in acqua bollente per 1 minuto",
                "Raffreddare in acqua fredda per mantenere il colore e strizzare bene",
                "Tagliare gli spinaci a pezzi di 3cm",
                "Avvolgere il tofu in carta da cucina e pressare con un peso per 10 minuti per scolare",
                "Mettere il tofu in un mortaio e pestarlo fino a renderlo liscio",
                "Aggiungere sesamo macinato, zucchero e salsa di soia e mescolare",
                "Unire gli spinaci e mescolare bene",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "",
        country: 'JP'
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
            ja: [
                "玉ねぎはみじん切り、にんにくは薄切りにする",
                "フライパンにオリーブオイルを中火で熱し、玉ねぎとにんにくを炒める",
                "玉ねぎが透き通ってきたら、トマト缶を加える",
                "コンソメを加えて混ぜる",
                "サバ缶を汁ごと加え、中火で10分煮込む",
                "汁が少しとろみがついたら完成",
                "温かいうちにいただく"
            ],
            it: [
                "Tritare cipolla e aglio e soffriggerli nell'olio.", "Aggiungere pomodori, dado e sgombro con il suo liquido e cuocere.", "Cuocere per circa 10 minuti."]
        },
        tags: ["diabetic-friendly", "high-protein"],
        image: "",
        country: 'JP'
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
            ja: [
                "ピーマンは縦半分に切り、種とワタを除く",
                "ピーマンを細切り（千切り）にする",
                "耐熱容器にピーマン、ツナ、鶏ガラスープの素、ごま油、塩こしょうを入れる",
                "全体をよく混ぜる",
                "ラップをふんわりかけ、電子レンジ600Wで3分加熱する",
                "粗熱が取れたらいただく"
            ],
            it: [
                "Tagliare i peperoni a metà e eliminare semi e filamenti",
                "Tagliare i peperoni a julienne",
                "Mettere peperoni, tonno, dado di pollo, olio di sesamo, sale e pepe in un contenitore per microonde",
                "Mescolare bene tutto",
                "Coprire con pellicola e cuocere in microonde a 600W per 3 minuti",
                "Lasciar raffreddare prima di servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie"],
        image: "",
        country: 'JP'
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
            ja: [
                "豆腐はキッチンペーパーで包み、重しをのせて10分水切りする",
                "豆腐を一口大に切る",
                "フライパンにごま油を中火で熱し、豚肉を炒める",
                "豚肉の色が変わったら、キムチを加えて2分炒める",
                "豆腐を加え、やさしく崩しながら炒める",
                "醤油を加えて味を調える",
                "温かいうちにいただく"
            ],
            it: [
                "Avvolgere il tofu in carta da cucina e pressare con un peso per 10 minuti per scolare",
                "Tagliare il tofu a pezzi",
                "Scaldare l'olio di sesamo in padella a fuoco medio e soffriggere il maiale",
                "Quando il maiale cambia colore, aggiungere il kimchi e cuocere per 2 minuti",
                "Aggiungere il tofu e sbriciolarlo leggermente mentre si cuoce",
                "Aggiungere la salsa di soia per insaporire",
                "Servire caldo"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein"],
        image: "",
        country: 'JP'
    },
    {
        id: 39,
        name: { ja: "オクラのネバネバ和え", it: "Insalata di Avocado e Gamberi con Maionese al Wasabi" },
        icon: "🥑",
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
            ja: [
                "オクラは塩をふって表面の産毛を取る（塩ずり）",
                "沸騰したお湯でオクラを2分茹でる",
                "冷水にさらして色止めし、水気を切る",
                "オクラを小口切り（5mm幅）にする",
                "納豆をパックから取り出し、付属のタレを加えてよく混ぜる",
                "めかぶをほぐす",
                "ボウルにオクラ、納豆、めかぶ、ポン酢を入れて和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Strofinare l'okra con sale per rimuovere la peluria superficiale",
                "Sbollentare l'okra in acqua bollente per 2 minuti",
                "Raffreddare in acqua fredda per mantenere il colore e scolare",
                "Tagliare l'okra a rondelle di 5mm di spessore",
                "Prendere il natto dalla confezione, aggiungere la salsa inclusa e mescolare bene",
                "Separare il mekabu",
                "Mettere okra, natto, mekabu e ponzu in una ciotola e mescolare",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "",
        country: 'JP'
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
            ja: [
                "豆苗は根元を切り落とし、食べやすい長さに切る",
                "卵をボウルに割り入れ、軽く溶きほぐす",
                "フライパンにごま油を中火で熱する",
                "豆苗を入れて1分炒める",
                "溶き卵を加え、大きく混ぜながら炒める",
                "鶏ガラスープの素を加えて味を調える",
                "卵が半熟になったら火を止めて完成"
            ],
            it: [
                "Eliminare la base dei germogli di pisello e tagliarli a pezzi",
                "Rompere le uova in una ciotola e sbatterle leggermente",
                "Scaldare l'olio di sesamo in padella a fuoco medio",
                "Aggiungere i germogli e cuocere per 1 minuto",
                "Aggiungere le uova e mescolare grossolanamente mentre si cuocono",
                "Aggiungere il dado di pollo per insaporire",
                "Quando le uova sono semi-cotte, spegnere il fuoco"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein"],
        image: "",
        country: 'JP'
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
            ja: [
                "乾燥わかめを水で戻し、水気を切る",
                "牛肉は一口大に切る",
                "鍋に水400mlを入れ、中火で沸かす",
                "牛肉を入れて3分煮る",
                "わかめを加えて2分煮る",
                "ごま油、醤油、にんにくを加えて味を調える",
                "温かいうちにいただく"
            ],
            it: [
                "Reidratare la wakame essiccata in acqua e scolare",
                "Tagliare il manzo a pezzi",
                "Portare 400ml di acqua a ebollizione a fuoco medio",
                "Aggiungere il manzo e cuocere per 3 minuti",
                "Aggiungere la wakame e cuocere per 2 minuti",
                "Aggiungere olio di sesamo, salsa di soia e aglio per insaporire",
                "Servire caldo"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie"],
        image: "",
        country: 'JP'
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
            ja: [
                "カニカマは手でほぐす",
                "卵をボウルに割り入れ、カニカマ、グリーンピース、鶏ガラスープの素、醤油を加えてよく混ぜる",
                "フライパンに油を薄く塗り、中火で熱する",
                "卵液を流し入れ、蓋をして3分蒸し焼きにする",
                "片面が焼けたら裏返し、さらに2分焼く",
                "皿に盛り付ける",
                "鍋に水100ml、醤油、鶏ガラスープの素を入れ、沸騰したら水溶き片栗粉でとろみをつける",
                "卵の上にあんをかけて完成"
            ],
            it: [
                "Sfilacciare il surimi con le mani",
                "Rompere le uova in una ciotola, aggiungere surimi, piselli, dado di pollo e salsa di soia e mescolare bene",
                "Ungere leggermente una padella con olio e scaldare a fuoco medio",
                "Versare il composto di uova, coprire e cuocere al vapore per 3 minuti",
                "Quando un lato è cotto, girare e cuocere altri 2 minuti",
                "Trasferire su un piatto",
                "Mettere 100ml di acqua, salsa di soia e dado di pollo in una pentola, portare a ebollizione e addensare con fecola sciolta in acqua",
                "Versare la salsa sulle uova e servire"
            ]
        },
        tags: ["diabetic-friendly", "high-protein"],
        image: "",
        country: 'JP'
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
            ja: [
                "油揚げは縦半分に切り、開いて袋状にする",
                "油揚げの内側にピザソースを薄く塗る",
                "ピーマンと玉ねぎは薄切りにする",
                "油揚げの上に野菜をきれいに並べる",
                "とろけるチーズを野菜の上に散らす",
                "トースターでチーズが溶けて少し焦げ目がつくまで焼く（約5分）",
                "食べやすい大きさに切って完成"
            ],
            it: [
                "Tagliare l'aburaage a metà e aprirlo per formare una tasca",
                "Spalmare leggermente la salsa per pizza all'interno dell'aburaage",
                "Tagliare peperone e cipolla a fette sottili",
                "Disporre ordinatamente le verdure sull'aburaage",
                "Spargere il formaggio filante sopra le verdure",
                "Cuocere nel tostapane finché il formaggio si scioglie e si forma una leggera crosticina (circa 5 minuti)",
                "Tagliare a pezzi e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein", "japanese-ingredients"],
        image: "",
        country: 'JP'
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
            ja: [
                "豆腐はキッチンペーパーで包み、重しをのせて10分水切りする",
                "豆腐を一口大に切る",
                "しめじとえのきは石づきを取り、ほぐす",
                "鍋にだし汁200mlを入れ、中火で沸かす",
                "きのこを加えて3分煮る",
                "醤油、みりんを加えて2分煮る",
                "水溶き片栗粉を加えてとろみをつける",
                "豆腐の上にあんをかけて完成"
            ],
            it: [
                "Avvolgere il tofu in carta da cucina e pressare con un peso per 10 minuti per scolare",
                "Tagliare il tofu a pezzi",
                "Eliminare la base dei funghi e separarli",
                "Portare 200ml di brodo dashi a ebollizione a fuoco medio",
                "Aggiungere i funghi e cuocere per 3 minuti",
                "Aggiungere salsa di soia e mirin e cuocere per 2 minuti",
                "Aggiungere fecola sciolta in acqua per addensare",
                "Versare la salsa sul tofu e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "",
        country: 'JP'
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
            ja: [
                "切り昆布は水でさっと洗い、水気を切る",
                "人参は細切り（千切り）にする",
                "油揚げは細切りにする",
                "鍋にだし汁300mlを入れ、中火で沸かす",
                "切り昆布を入れて5分煮る",
                "人参と油揚げを加えて3分煮る",
                "醤油、みりんを加えて2分煮る",
                "汁が少なくなるまで煮込んで完成"
            ],
            it: [
                "Lavare brevemente il kombu in acqua e scolare",
                "Tagliare la carota a julienne",
                "Tagliare l'aburaage a julienne",
                "Portare 300ml di brodo dashi a ebollizione a fuoco medio",
                "Aggiungere il kombu e cuocere per 5 minuti",
                "Aggiungere carota e aburaage e cuocere per 3 minuti",
                "Aggiungere salsa di soia e mirin e cuocere per 2 minuti",
                "Cuocere finché il liquido si riduce e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        image: "",
        country: 'JP'
    },
    {
        id: 201,
        name: { ja: "鶏むね肉と大根の煮物", it: "Stufato di Pollo e Daikon" },
        description: { ja: "鶏むね肉と大根を使ったヘルシーな煮物", it: "Stufato sano con pollo e daikon" },
        type: "dinner",
        prepTime: 10,
        cookTime: 25,
        servings: 2,
        difficulty: "easy",
        calories: 180,
        carbs: 10,
        protein: 24,
        fat: 4,
        fiber: 3,
        sodium: 500,
        ingredients: {
            ja: ["鶏むね肉 150g", "大根 200g", "だし汁 300ml", "醤油 大さじ1", "みりん 大さじ1", "生姜 1片"],
            it: ["Petto di pollo 150g", "Daikon 200g", "Brodo dashi 300ml", "Salsa di soia 1 cucchiaio", "Mirin 1 cucchiaio", "Zenzero 1 pezzo"]
        },
        instructions: {
            ja: [
                "鶏むね肉は一口大に切る",
                "大根は皮をむいて1cm厚さの半月切りにする",
                "鍋にだし汁を入れて中火で沸かす",
                "大根を加えて10分煮る",
                "鶏肉と生姜を加えてさらに10分煮る",
                "醤油とみりんを加えて5分煮る",
                "器に盛り付けて完成"
            ],
            it: [
                "Tagliare il petto di pollo a pezzi",
                "Sbucciare il daikon e tagliarlo a mezzaluna di 1cm di spessore",
                "Portare il brodo dashi a ebollizione a fuoco medio",
                "Aggiungere il daikon e cuocere per 10 minuti",
                "Aggiungere pollo e zenzero e cuocere altri 10 minuti",
                "Aggiungere salsa di soia e mirin e cuocere per 5 minuti",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-fat", "high-protein", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 202,
        name: { ja: "小松菜としらすのおひたし", it: "Komatsuna e Shirasu in Brodo" },
        description: { ja: "小松菜としらすを使った簡単副菜", it: "Contorno semplice con komatsuna e shirasu" },
        type: "snack",
        prepTime: 5,
        cookTime: 3,
        servings: 2,
        difficulty: "easy",
        calories: 60,
        carbs: 3,
        protein: 6,
        fat: 2,
        fiber: 2,
        sodium: 300,
        ingredients: {
            ja: ["小松菜 1束", "しらす 30g", "だし汁 100ml", "醤油 小さじ1"],
            it: ["Komatsuna 1 mazzo", "Shirasu 30g", "Brodo dashi 100ml", "Salsa di soia 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "小松菜は4cm長さに切る",
                "沸騰したお湯で1分茹でて水気を切る",
                "器に小松菜としらすを盛り付ける",
                "だし汁と醤油をかけて完成"
            ],
            it: [
                "Tagliare il komatsuna a pezzi di 4cm",
                "Sbollentare per 1 minuto e scolare",
                "Disporre komatsuna e shirasu in una ciotola",
                "Versare brodo dashi e salsa di soia sopra e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 203,
        name: { ja: "なすの味噌炒め", it: "Melanzane Saltate al Miso" },
        description: { ja: "なすを味噌で炒めたご飯に合う一品", it: "Melanzane saltate al miso, perfette con il riso" },
        type: "lunch",
        prepTime: 10,
        cookTime: 8,
        servings: 2,
        difficulty: "easy",
        calories: 110,
        carbs: 10,
        protein: 3,
        fat: 7,
        fiber: 4,
        sodium: 420,
        ingredients: {
            ja: ["なす 2本", "味噌 大さじ1", "みりん 大さじ1", "ごま油 小さじ1", "ねぎ 1本"],
            it: ["Melanzane 2", "Miso 1 cucchiaio", "Mirin 1 cucchiaio", "Olio di sesamo 1 cucchiaino", "Cipollotto 1"]
        },
        instructions: {
            ja: [
                "なすは乱切りにし、水に5分さらしてアクを抜く",
                "フライパンにごま油を熱し、なすを中火で3分炒める",
                "味噌とみりんを加えてさらに3分炒める",
                "器に盛り、ねぎを散らして完成"
            ],
            it: [
                "Tagliare le melanzane a pezzi irregolari e metterle in acqua per 5 minuti",
                "Scaldare l'olio di sesamo in padella e saltare le melanzane a fuoco medio per 3 minuti",
                "Aggiungere miso e mirin e cuocere altri 3 minuti",
                "Impiattare e guarnire con cipollotto"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 204,
        name: { ja: "鮭ときのこのホイル焼き", it: "Salmone e Funghi al Cartoccio" },
        description: { ja: "鮭ときのこをホイルで包んで焼いた一品", it: "Salmone e funghi cotti al cartoccio" },
        type: "dinner",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: "easy",
        calories: 210,
        carbs: 6,
        protein: 22,
        fat: 11,
        fiber: 3,
        sodium: 380,
        ingredients: {
            ja: ["鮭 2切れ", "しめじ 1/2パック", "えのき 1/2袋", "玉ねぎ 1/4個", "酒 大さじ1", "醤油 小さじ2"],
            it: ["Salmone 2 tranci", "Shimeji 1/2 confezione", "Enoki 1/2 confezione", "Cipolla 1/4", "Sake 1 cucchiaio", "Salsa di soia 2 cucchiaini"]
        },
        instructions: {
            ja: [
                "鮭は軽く塩をふる",
                "玉ねぎは薄切り、きのこはほぐす",
                "アルミホイルに鮭、玉ねぎ、きのこをのせ、酒と醤油をかけて包む",
                "オーブントースターで15分焼く",
                "器に盛り付けて完成"
            ],
            it: [
                "Salare leggermente il salmone",
                "Tagliare la cipolla a fette sottili, separare i funghi",
                "Disporre salmone, cipolla e funghi su un foglio di alluminio, versare sake e salsa di soia e chiudere il cartoccio",
                "Cuocere in forno tostapane per 15 minuti",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 205,
        name: { ja: "豆腐とトマトのサラダ", it: "Insalata di Tofu e Pomodoro" },
        description: { ja: "豆腐とトマトを使ったさっぱりサラダ", it: "Insalata fresca con tofu e pomodoro" },
        type: "lunch",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        difficulty: "easy",
        calories: 90,
        carbs: 6,
        protein: 7,
        fat: 4,
        fiber: 2,
        sodium: 180,
        ingredients: {
            ja: ["絹ごし豆腐 150g", "トマト 1個", "大葉 2枚", "オリーブオイル 小さじ1", "塩こしょう 少々"],
            it: ["Tofu silken 150g", "Pomodoro 1", "Shiso 2 foglie", "Olio d'oliva 1 cucchiaino", "Sale e pepe q.b."]
        },
        instructions: {
            ja: [
                "豆腐はキッチンペーパーで包み、10分水切りする",
                "トマトは一口大に切る",
                "大葉は千切りにする",
                "ボウルに豆腐、トマト、大葉を入れ、オリーブオイルと塩こしょうで和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Avvolgere il tofu in carta da cucina e scolarlo per 10 minuti",
                "Tagliare il pomodoro a pezzi",
                "Tagliare lo shiso a julienne",
                "Mettere tofu, pomodoro e shiso in una ciotola, condire con olio e sale e mescolare",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 206,
        name: { ja: "ささみときゅうりの梅和え", it: "Pollo e Cetriolo con Ume" },
        description: { ja: "ささみときゅうりを梅肉で和えたさっぱり副菜", it: "Contorno fresco con pollo e cetriolo all'ume" },
        type: "snack",
        prepTime: 10,
        cookTime: 5,
        servings: 2,
        difficulty: "easy",
        calories: 80,
        carbs: 4,
        protein: 12,
        fat: 2,
        fiber: 1,
        sodium: 320,
        ingredients: {
            ja: ["鶏ささみ 2本", "きゅうり 1本", "梅干し 1個", "醤油 小さじ1"],
            it: ["Filetto di pollo 2", "Cetriolo 1", "Umeboshi 1", "Salsa di soia 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "ささみは茹でて手で裂く",
                "きゅうりは細切りにする",
                "梅干しは種を除いて包丁で叩く",
                "ボウルにすべての材料を入れて和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Bollire il pollo e sfilacciarlo a mano",
                "Tagliare il cetriolo a julienne",
                "Eliminare il nocciolo dall'umeboshi e tritarlo",
                "Mettere tutti gli ingredienti in una ciotola e mescolare",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 207,
        name: { ja: "ひじきと大豆の煮物", it: "Stufato di Hijiki e Soia" },
        description: { ja: "ひじきと大豆を使った食物繊維豊富な煮物", it: "Stufato ricco di fibre con hijiki e soia" },
        type: "dinner",
        prepTime: 10,
        cookTime: 20,
        servings: 3,
        difficulty: "easy",
        calories: 120,
        carbs: 14,
        protein: 8,
        fat: 3,
        fiber: 7,
        sodium: 400,
        ingredients: {
            ja: ["乾燥ひじき 10g", "大豆水煮 100g", "人参 1/3本", "だし汁 200ml", "醤油 大さじ1", "みりん 大さじ1"],
            it: ["Hijiki secco 10g", "Soia lessata 100g", "Carota 1/3", "Brodo dashi 200ml", "Salsa di soia 1 cucchiaio", "Mirin 1 cucchiaio"]
        },
        instructions: {
            ja: [
                "ひじきは水で戻して水気を切る",
                "人参は細切りにする",
                "鍋にだし汁を入れて沸かし、ひじきと人参を加えて5分煮る",
                "大豆、醤油、みりんを加えて15分煮る",
                "器に盛り付けて完成"
            ],
            it: [
                "Reidratare l'hijiki in acqua e scolare",
                "Tagliare la carota a julienne",
                "Portare il brodo dashi a ebollizione, aggiungere hijiki e carota e cuocere per 5 minuti",
                "Aggiungere la soia, salsa di soia e mirin e cuocere per 15 minuti",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "high-fiber", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 208,
        name: { ja: "ブロッコリーのごま和え", it: "Broccoli al Sesamo" },
        description: { ja: "ブロッコリーをすりごまで和えた副菜", it: "Contorno di broccoli con sesamo macinato" },
        type: "snack",
        prepTime: 5,
        cookTime: 3,
        servings: 2,
        difficulty: "easy",
        calories: 60,
        carbs: 5,
        protein: 4,
        fat: 3,
        fiber: 3,
        sodium: 180,
        ingredients: {
            ja: ["ブロッコリー 100g", "白すりごま 大さじ1", "醤油 小さじ1", "砂糖 小さじ1/2"],
            it: ["Broccoli 100g", "Sesamo bianco macinato 1 cucchiaio", "Salsa di soia 1 cucchiaino", "Zucchero 1/2 cucchiaino"]
        },
        instructions: {
            ja: [
                "ブロッコリーは小房に分け、沸騰したお湯で2分茹でる",
                "水気を切ってボウルに入れる",
                "白すりごま、醤油、砂糖を加えて和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Dividere i broccoli in cimette e sbollentarli per 2 minuti",
                "Scolare e mettere in una ciotola",
                "Aggiungere sesamo, salsa di soia e zucchero e mescolare",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 209,
        name: { ja: "たたききゅうりの梅和え", it: "Cetriolo Schiacciato all'Ume" },
        description: { ja: "きゅうりを梅肉で和えたさっぱり副菜", it: "Contorno fresco di cetriolo e umeboshi" },
        type: "snack",
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        difficulty: "easy",
        calories: 30,
        carbs: 4,
        protein: 1,
        fat: 0,
        fiber: 1,
        sodium: 200,
        ingredients: {
            ja: ["きゅうり 1本", "梅干し 1個", "醤油 小さじ1/2"],
            it: ["Cetriolo 1", "Umeboshi 1", "Salsa di soia 1/2 cucchiaino"]
        },
        instructions: {
            ja: [
                "きゅうりは麺棒などで軽くたたいて割る",
                "一口大に手でちぎる",
                "梅干しは種を除いて包丁で叩く",
                "ボウルにすべての材料を入れて和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Schiacciare il cetriolo con un mattarello",
                "Spezzettare a mano in pezzi di una bocconata",
                "Eliminare il nocciolo dall'umeboshi e tritarlo",
                "Mettere tutti gli ingredienti in una ciotola e mescolare",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 210,
        name: { ja: "しらたきの明太子和え", it: "Shirataki con Mentaiko" },
        description: { ja: "しらたきを明太子で和えた低糖質副菜", it: "Contorno a basso contenuto di carboidrati con shirataki e mentaiko" },
        type: "snack",
        prepTime: 5,
        cookTime: 2,
        servings: 2,
        difficulty: "easy",
        calories: 40,
        carbs: 2,
        protein: 3,
        fat: 1,
        fiber: 2,
        sodium: 300,
        ingredients: {
            ja: ["しらたき 100g", "明太子 20g", "醤油 小さじ1/2"],
            it: ["Shirataki 100g", "Mentaiko 20g", "Salsa di soia 1/2 cucchiaino"]
        },
        instructions: {
            ja: [
                "しらたきをザルに入れ、流水で2分間洗う",
                "熱湯で1分茹でて水気を切る",
                "明太子は薄皮を除いてほぐす",
                "ボウルにしらたき、明太子、醤油を入れて和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Sciacquare gli shirataki sotto acqua corrente per 2 minuti",
                "Sbollentare per 1 minuto e scolare",
                "Rimuovere la pellicina dal mentaiko e sgranarlo",
                "Mettere shirataki, mentaiko e salsa di soia in una ciotola e mescolare",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 211,
        name: { ja: "白菜と豚肉の蒸し物", it: "Cavolo Cinese e Maiale al Vapore" },
        description: { ja: "白菜と豚肉を蒸したヘルシーな一品", it: "Piatto sano al vapore con cavolo cinese e maiale" },
        type: "dinner",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: "easy",
        calories: 160,
        carbs: 8,
        protein: 18,
        fat: 6,
        fiber: 3,
        sodium: 450,
        ingredients: {
            ja: ["白菜 1/4個", "豚バラ薄切り肉 100g", "酒 大さじ1", "醤油 大さじ1", "生姜 1片"],
            it: ["Cavolo cinese 1/4", "Pancetta di maiale a fette sottili 100g", "Sake 1 cucchiaio", "Salsa di soia 1 cucchiaio", "Zenzero 1 pezzo"]
        },
        instructions: {
            ja: [
                "白菜は4cm長さに切る",
                "豚肉は一口大に切る",
                "蒸し器の水を沸かす",
                "白菜と豚肉を交互に重ねて蒸し器に入れる",
                "酒、醤油、生姜をかける",
                "中火で15分蒸す",
                "器に盛り付けて完成"
            ],
            it: [
                "Tagliare il cavolo cinese a pezzi di 4cm",
                "Tagliare il maiale a pezzi",
                "Portare l'acqua del cestello a ebollizione",
                "Alternare strati di cavolo e maiale nel cestello",
                "Versare sake, salsa di soia e zenzero sopra",
                "Cuocere a vapore a fuoco medio per 15 minuti",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-fat", "high-protein", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 212,
        name: { ja: "かぼちゃの煮物", it: "Zucca in Umido" },
        description: { ja: "かぼちゃを甘く煮た伝統的な副菜", it: "Contorno tradizionale di zucca dolce" },
        type: "snack",
        prepTime: 10,
        cookTime: 20,
        servings: 3,
        difficulty: "easy",
        calories: 80,
        carbs: 12,
        protein: 2,
        fat: 2,
        fiber: 3,
        sodium: 200,
        ingredients: {
            ja: ["かぼちゃ 300g", "だし汁 200ml", "醤油 大さじ1", "みりん 大さじ1", "砂糖 小さじ1"],
            it: ["Zucca 300g", "Brodo dashi 200ml", "Salsa di soia 1 cucchiaio", "Mirin 1 cucchiaio", "Zucchero 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "かぼちゃは皮をむいて一口大に切る",
                "鍋にだし汁を入れて沸かす",
                "かぼちゃを加えて10分煮る",
                "醤油、みりん、砂糖を加えて10分煮る",
                "器に盛り付けて完成"
            ],
            it: [
                "Sbucciare la zucca e tagliarla a pezzi",
                "Portare il brodo dashi a ebollizione",
                "Aggiungere la zucca e cuocere per 10 minuti",
                "Aggiungere salsa di soia, mirin e zucchero e cuocere per 10 minuti",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 213,
        name: { ja: "鶏ささみの梅しそ巻き", it: "Involtini di Pollo con Ume e Shiso" },
        description: { ja: "鶏ささみを梅としそで巻いたさっぱり一品", it: "Involtini di pollo freschi con ume e shiso" },
        type: "dinner",
        prepTime: 15,
        cookTime: 10,
        servings: 2,
        difficulty: "medium",
        calories: 140,
        carbs: 2,
        protein: 24,
        fat: 3,
        fiber: 1,
        sodium: 380,
        ingredients: {
            ja: ["鶏ささみ 2本", "梅干し 2個", "大葉 4枚", "酒 大さじ1", "醤油 小さじ1"],
            it: ["Filetto di pollo 2", "Umeboshi 2", "Shiso 4 foglie", "Sake 1 cucchiaio", "Salsa di soia 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "ささみは縦に切り開いて薄くする",
                "梅干しは種を除いて包丁で叩く",
                "ささみに梅肉を塗り、大葉をのせて巻く",
                "酒と醤油をかけて10分置く",
                "蒸し器で10分蒸す",
                "器に盛り付けて完成"
            ],
            it: [
                "Aprire i filetti di pollo e appiattirli",
                "Eliminare i noccioli dall'umeboshi e tritarli",
                "Spalmare la polpa di ume sul pollo, adagiare lo shiso e arrotolare",
                "Versare sake e salsa di soia e lasciare 10 minuti",
                "Cuocere a vapore per 10 minuti",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 214,
        name: { ja: "もやしとツナの和え物", it: "Germogli di Soia e Tonno" },
        description: { ja: "もやしとツナを使った簡単副菜", it: "Contorno semplice con germogli di soia e tonno" },
        type: "snack",
        prepTime: 5,
        cookTime: 2,
        servings: 2,
        difficulty: "easy",
        calories: 70,
        carbs: 4,
        protein: 8,
        fat: 2,
        fiber: 2,
        sodium: 280,
        ingredients: {
            ja: ["もやし 200g", "ツナ缶 1個", "ポン酢 大さじ1", "ごま油 小さじ1"],
            it: ["Germogli di soia 200g", "Tonno in scatola 1", "Ponzu 1 cucchiaio", "Olio di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "もやしは洗って水気を切る",
                "沸騰したお湯で30秒茹でて水気を切る",
                "ツナ缶の油を軽く切る",
                "ボウルにもやし、ツナ、ポン酢、ごま油を入れて和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Lavare i germogli di soia e scolarli",
                "Sbollentare per 30 secondi e scolare",
                "Scolare leggermente l'olio dal tonno",
                "Mettere germogli, tonno, ponzu e olio di sesamo in una ciotola e mescolare",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 215,
        name: { ja: "豆腐の味噌焼き", it: "Tofu alla Griglia al Miso" },
        description: { ja: "豆腐を味噌で焼いた香ばしい一品", it: "Tofu alla griglia aromatico al miso" },
        type: "dinner",
        prepTime: 10,
        cookTime: 8,
        servings: 2,
        difficulty: "easy",
        calories: 120,
        carbs: 6,
        protein: 10,
        fat: 6,
        fiber: 2,
        sodium: 420,
        ingredients: {
            ja: ["木綿豆腐 1丁", "味噌 大さじ1", "みりん 大さじ1", "ごま油 小さじ1"],
            it: ["Tofu sodo 1", "Miso 1 cucchiaio", "Mirin 1 cucchiaio", "Olio di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "豆腐はキッチンペーパーで包み、重しをのせて30分水切りする",
                "豆腐を2cm厚さに切る",
                "味噌とみりんを混ぜる",
                "豆腐に味噌ダレを塗る",
                "フライパンにごま油を熱し、豆腐を片面4分ずつ焼く",
                "器に盛り付けて完成"
            ],
            it: [
                "Avvolgere il tofu in carta da cucina e pressare con un peso per 30 minuti",
                "Tagliare il tofu a fette di 2cm di spessore",
                "Mescolare miso e mirin",
                "Spalmare la salsa di miso sul tofu",
                "Scaldare l'olio di sesamo in padella e cuocere il tofu 4 minuti per lato",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 216,
        name: { ja: "キャベツと鶏肉のスープ", it: "Zuppa di Cavolo e Pollo" },
        description: { ja: "キャベツと鶏肉を使ったヘルシーなスープ", it: "Zuppa sana con cavolo e pollo" },
        type: "lunch",
        prepTime: 10,
        cookTime: 20,
        servings: 3,
        difficulty: "easy",
        calories: 100,
        carbs: 8,
        protein: 12,
        fat: 3,
        fiber: 3,
        sodium: 350,
        ingredients: {
            ja: ["キャベツ 1/4個", "鶏むね肉 100g", "だし汁 600ml", "醤油 大さじ1", "塩 少々"],
            it: ["Cavolo 1/4", "Petto di pollo 100g", "Brodo dashi 600ml", "Salsa di soia 1 cucchiaio", "Sale q.b."]
        },
        instructions: {
            ja: [
                "キャベツは一口大に切る",
                "鶏肉は一口大に切る",
                "鍋にだし汁を入れて沸かす",
                "鶏肉を加えて10分煮る",
                "キャベツを加えて10分煮る",
                "醤油と塩で味を調える",
                "器に盛り付けて完成"
            ],
            it: [
                "Tagliare il cavolo a pezzi",
                "Tagliare il pollo a pezzi",
                "Portare il brodo dashi a ebollizione",
                "Aggiungere il pollo e cuocere per 10 minuti",
                "Aggiungere il cavolo e cuocere per 10 minuti",
                "Condire con salsa di soia e sale",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 217,
        name: { ja: "なすとピーマンの炒め物", it: "Melanzane e Peperoni Saltati" },
        description: { ja: "なすとピーマンを炒めた彩りの良い副菜", it: "Contorno colorato di melanzane e peperoni saltati" },
        type: "lunch",
        prepTime: 10,
        cookTime: 8,
        servings: 2,
        difficulty: "easy",
        calories: 90,
        carbs: 8,
        protein: 2,
        fat: 5,
        fiber: 3,
        sodium: 280,
        ingredients: {
            ja: ["なす 1本", "ピーマン 2個", "にんにく 1片", "醤油 大さじ1", "ごま油 小さじ1"],
            it: ["Melanzana 1", "Peperoni 2", "Aglio 1 spicchio", "Salsa di soia 1 cucchiaio", "Olio di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "なすは乱切り、ピーマンは細切りにする",
                "なすは水に5分さらしてアクを抜く",
                "にんにくはみじん切りにする",
                "フライパンにごま油を熱し、にんにくを香りが出るまで炒める",
                "なすとピーマンを加えて5分炒める",
                "醤油を加えて3分炒める",
                "器に盛り付けて完成"
            ],
            it: [
                "Tagliare la melanzana a pezzi irregolari, i peperoni a julienne",
                "Mettere la melanzana in acqua per 5 minuti",
                "Tritare l'aglio",
                "Scaldare l'olio di sesamo in padella e soffriggere l'aglio fino a quando sprigiona aroma",
                "Aggiungere melanzana e peperoni e cuocere per 5 minuti",
                "Aggiungere la salsa di soia e cuocere per 3 minuti",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 218,
        name: { ja: "しらたきのキムチ炒め", it: "Shirataki Saltati al Kimchi" },
        description: { ja: "しらたきをキムチで炒めた低糖質副菜", it: "Contorno a basso contenuto di carboidrati con shirataki e kimchi" },
        type: "dinner",
        prepTime: 5,
        cookTime: 5,
        servings: 2,
        difficulty: "easy",
        calories: 50,
        carbs: 3,
        protein: 2,
        fat: 2,
        fiber: 2,
        sodium: 400,
        ingredients: {
            ja: ["しらたき 200g", "キムチ 50g", "ごま油 小さじ1", "醤油 小さじ1"],
            it: ["Shirataki 200g", "Kimchi 50g", "Olio di sesamo 1 cucchiaino", "Salsa di soia 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "しらたきをザルに入れ、流水で2分間洗う",
                "フライパンにごま油を熱し、しらたきを2分炒める",
                "キムチを加えて2分炒める",
                "醤油を加えて1分炒める",
                "器に盛り付けて完成"
            ],
            it: [
                "Sciacquare gli shirataki sotto acqua corrente per 2 minuti",
                "Scaldare l'olio di sesamo in padella e saltare gli shirataki per 2 minuti",
                "Aggiungere il kimchi e cuocere per 2 minuti",
                "Aggiungere la salsa di soia e cuocere per 1 minuto",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 219,
        name: { ja: "豆腐とわかめの味噌汁", it: "Zuppa di Miso con Tofu e Wakame" },
        description: { ja: "豆腐とわかめを使った定番の味噌汁", it: "Zuppa di miso classica con tofu e wakame" },
        type: "breakfast",
        prepTime: 5,
        cookTime: 8,
        servings: 2,
        difficulty: "easy",
        calories: 85,
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
            ja: [
                "豆腐は一口大に切る",
                "鍋にだし汁を入れて中火で温める",
                "だし汁が温まったら、味噌を溶かし入れる",
                "豆腐とわかめを加える",
                "弱火で2分煮て、ねぎを散らす",
                "温かいうちにいただく"
            ],
            it: [
                "Tagliare il tofu a pezzi",
                "Scaldare il brodo dashi in una pentola a fuoco medio",
                "Quando il brodo è caldo, sciogliere il miso",
                "Aggiungere tofu e wakame",
                "Cuocere a fuoco basso per 2 minuti e guarnire con cipollotto",
                "Servire caldo"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 220,
        name: { ja: "鶏ささみの梅しそ和え", it: "Pollo con Ume e Shiso" },
        description: { ja: "鶏ささみを梅としそで和えたさっぱり副菜", it: "Contorno fresco di pollo con ume e shiso" },
        type: "snack",
        prepTime: 10,
        cookTime: 5,
        servings: 2,
        difficulty: "easy",
        calories: 100,
        carbs: 2,
        protein: 18,
        fat: 2,
        fiber: 1,
        sodium: 320,
        ingredients: {
            ja: ["鶏ささみ 2本", "梅干し 1個", "大葉 2枚", "醤油 小さじ1"],
            it: ["Filetto di pollo 2", "Umeboshi 1", "Shiso 2 foglie", "Salsa di soia 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "ささみは茹でて手で裂く",
                "梅干しは種を除いて包丁で叩く",
                "大葉は千切りにする",
                "ボウルにささみ、梅肉、大葉、醤油を入れて和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Bollire il pollo e sfilacciarlo a mano",
                "Eliminare il nocciolo dall'umeboshi e tritarlo",
                "Tagliare lo shiso a julienne",
                "Mettere pollo, polpa di ume, shiso e salsa di soia in una ciotola e mescolare",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 221,
        name: { ja: "ブロッコリーと鶏肉の蒸し物", it: "Broccoli e Pollo al Vapore" },
        description: { ja: "ブロッコリーと鶏肉を蒸したヘルシーな一品", it: "Piatto sano al vapore con broccoli e pollo" },
        type: "dinner",
        prepTime: 10,
        cookTime: 12,
        servings: 2,
        difficulty: "easy",
        calories: 130,
        carbs: 6,
        protein: 20,
        fat: 3,
        fiber: 4,
        sodium: 380,
        ingredients: {
            ja: ["ブロッコリー 1/2個", "鶏むね肉 100g", "酒 大さじ1", "醤油 大さじ1", "塩 少々"],
            it: ["Broccoli 1/2", "Petto di pollo 100g", "Sake 1 cucchiaio", "Salsa di soia 1 cucchiaio", "Sale q.b."]
        },
        instructions: {
            ja: [
                "ブロッコリーは小房に分ける",
                "鶏肉は一口大に切る",
                "蒸し器の水を沸かす",
                "鶏肉を蒸し器に入れて8分蒸す",
                "ブロッコリーを加えて4分蒸す",
                "酒、醤油、塩をかける",
                "器に盛り付けて完成"
            ],
            it: [
                "Dividere i broccoli in cimette",
                "Tagliare il pollo a pezzi",
                "Portare l'acqua del cestello a ebollizione",
                "Mettere il pollo nel cestello e cuocere per 8 minuti",
                "Aggiungere i broccoli e cuocere per 4 minuti",
                "Versare sake, salsa di soia e sale sopra",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-fat", "high-protein", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 222,
        name: { ja: "大根とツナのサラダ", it: "Insalata di Daikon e Tonno" },
        description: { ja: "大根とツナを使ったさっぱりサラダ", it: "Insalata fresca con daikon e tonno" },
        type: "snack",
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        difficulty: "easy",
        calories: 60,
        carbs: 4,
        protein: 8,
        fat: 1,
        fiber: 2,
        sodium: 320,
        ingredients: {
            ja: ["大根 200g", "ツナ缶 1個", "ポン酢 大さじ1", "ごま 小さじ1"],
            it: ["Daikon 200g", "Tonno in scatola 1", "Ponzu 1 cucchiaio", "Semi di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "大根は千切りにする",
                "大根に塩をふって5分置き、水気を絞る",
                "ツナ缶の油を軽く切る",
                "ボウルに大根、ツナ、ポン酢を入れて和える",
                "ごまを散らして器に盛り付ける"
            ],
            it: [
                "Tagliare il daikon a julienne",
                "Salare il daikon e lasciare 5 minuti, poi strizzare",
                "Scolare leggermente l'olio dal tonno",
                "Mettere daikon, tonno e ponzu in una ciotola e mescolare",
                "Cospargere con semi di sesamo e impiattare"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 223,
        name: { ja: "しめじと豆腐の味噌汁", it: "Zuppa di Miso con Shimeji e Tofu" },
        description: { ja: "しめじと豆腐を使った具沢山の味噌汁", it: "Zuppa di miso ricca con shimeji e tofu" },
        type: "breakfast",
        prepTime: 8,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",
        calories: 95,
        carbs: 7,
        protein: 9,
        fat: 3,
        fiber: 2,
        sodium: 650,
        ingredients: {
            ja: ["しめじ 50g", "豆腐 100g", "ねぎ 1本", "味噌 大さじ2", "だし汁 400ml"],
            it: ["Shimeji 50g", "Tofu 100g", "Cipollotto 1", "Miso 2 cucchiai", "Brodo dashi 400ml"]
        },
        instructions: {
            ja: [
                "しめじは石づきを取ってほぐす",
                "豆腐は一口大に切る",
                "ねぎは小口切りにする",
                "鍋にだし汁を入れて中火で温める",
                "しめじを加えて5分煮る",
                "味噌を溶かし入れて豆腐を加える",
                "弱火で2分煮て、ねぎを散らす"
            ],
            it: [
                "Rimuovere la base degli shimeji e separarli",
                "Tagliare il tofu a pezzi",
                "Tagliare il cipollotto a rondelle",
                "Scaldare il brodo dashi in una pentola a fuoco medio",
                "Aggiungere gli shimeji e cuocere per 5 minuti",
                "Sciogliere il miso e aggiungere il tofu",
                "Cuocere a fuoco basso per 2 minuti e guarnire con cipollotto"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 224,
        name: { ja: "鶏ささみの梅しそ焼き", it: "Pollo alla Griglia con Ume e Shiso" },
        description: { ja: "鶏ささみを梅としそで焼いた香ばしい一品", it: "Pollo alla griglia aromatico con ume e shiso" },
        type: "dinner",
        prepTime: 15,
        cookTime: 8,
        servings: 2,
        difficulty: "medium",
        calories: 120,
        carbs: 2,
        protein: 22,
        fat: 2,
        fiber: 1,
        sodium: 350,
        ingredients: {
            ja: ["鶏ささみ 2本", "梅干し 1個", "大葉 2枚", "酒 大さじ1", "醤油 小さじ1"],
            it: ["Filetto di pollo 2", "Umeboshi 1", "Shiso 2 foglie", "Sake 1 cucchiaio", "Salsa di soia 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "ささみは縦に切り開いて薄くする",
                "梅干しは種を除いて包丁で叩く",
                "ささみに梅肉を塗り、大葉をのせる",
                "酒と醤油をかけて10分置く",
                "フライパンに油を熱し、ささみを片面4分ずつ焼く",
                "器に盛り付けて完成"
            ],
            it: [
                "Aprire i filetti di pollo e appiattirli",
                "Eliminare il nocciolo dall'umeboshi e tritarlo",
                "Spalmare la polpa di ume sul pollo e adagiare lo shiso",
                "Versare sake e salsa di soia e lasciare 10 minuti",
                "Scaldare l'olio in padella e cuocere il pollo 4 minuti per lato",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-carb", "high-protein", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 225,
        name: { ja: "キャベツとツナの和え物", it: "Cavolo e Tonno" },
        description: { ja: "キャベツとツナを使った簡単副菜", it: "Contorno semplice con cavolo e tonno" },
        type: "snack",
        prepTime: 8,
        cookTime: 2,
        servings: 2,
        difficulty: "easy",
        calories: 65,
        carbs: 5,
        protein: 8,
        fat: 1,
        fiber: 2,
        sodium: 300,
        ingredients: {
            ja: ["キャベツ 200g", "ツナ缶 1個", "ポン酢 大さじ1", "ごま油 小さじ1"],
            it: ["Cavolo 200g", "Tonno in scatola 1", "Ponzu 1 cucchiaio", "Olio di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "キャベツは細切りにする",
                "沸騰したお湯で30秒茹でて水気を切る",
                "ツナ缶の油を軽く切る",
                "ボウルにキャベツ、ツナ、ポン酢、ごま油を入れて和える",
                "器に盛り付けて完成"
            ],
            it: [
                "Tagliare il cavolo a julienne",
                "Sbollentare per 30 secondi e scolare",
                "Scolare leggermente l'olio dal tonno",
                "Mettere cavolo, tonno, ponzu e olio di sesamo in una ciotola e mescolare",
                "Impiattare e servire"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 226,
        name: { ja: "豆腐とわかめのサラダ", it: "Insalata di Tofu e Wakame" },
        description: { ja: "豆腐とわかめを使ったヘルシーなサラダ", it: "Insalata sana con tofu e wakame" },
        type: "snack",
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        difficulty: "easy",
        calories: 80,
        carbs: 4,
        protein: 8,
        fat: 3,
        fiber: 2,
        sodium: 280,
        ingredients: {
            ja: ["豆腐 150g", "わかめ 10g", "きゅうり 1/2本", "ポン酢 大さじ1", "ごま 小さじ1"],
            it: ["Tofu 150g", "Wakame 10g", "Cetriolo 1/2", "Ponzu 1 cucchiaio", "Semi di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "豆腐は一口大に切る",
                "わかめは水で戻して水気を切る",
                "きゅうりは薄切りにする",
                "ボウルに豆腐、わかめ、きゅうり、ポン酢を入れて和える",
                "ごまを散らして器に盛り付ける"
            ],
            it: [
                "Tagliare il tofu a pezzi",
                "Reidratare il wakame in acqua e scolare",
                "Tagliare il cetriolo a fette sottili",
                "Mettere tofu, wakame, cetriolo e ponzu in una ciotola e mescolare",
                "Cospargere con semi di sesamo e impiattare"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 227,
        name: { ja: "鶏肉と野菜の蒸し物", it: "Pollo e Verdure al Vapore" },
        description: { ja: "鶏肉と野菜を蒸したヘルシーな一品", it: "Piatto sano al vapore con pollo e verdure" },
        type: "dinner",
        prepTime: 12,
        cookTime: 15,
        servings: 2,
        difficulty: "easy",
        calories: 140,
        carbs: 8,
        protein: 20,
        fat: 3,
        fiber: 4,
        sodium: 400,
        ingredients: {
            ja: ["鶏むね肉 100g", "ブロッコリー 1/2個", "にんじん 1/2本", "酒 大さじ1", "醤油 大さじ1"],
            it: ["Petto di pollo 100g", "Broccoli 1/2", "Carota 1/2", "Sake 1 cucchiaio", "Salsa di soia 1 cucchiaio"]
        },
        instructions: {
            ja: [
                "鶏肉は一口大に切る",
                "ブロッコリーは小房に分ける",
                "にんじんは薄切りにする",
                "蒸し器の水を沸かす",
                "鶏肉を蒸し器に入れて10分蒸す",
                "野菜を加えて5分蒸す",
                "酒と醤油をかけて器に盛り付ける"
            ],
            it: [
                "Tagliare il pollo a pezzi",
                "Dividere i broccoli in cimette",
                "Tagliare la carota a fette sottili",
                "Portare l'acqua del cestello a ebollizione",
                "Mettere il pollo nel cestello e cuocere per 10 minuti",
                "Aggiungere le verdure e cuocere per 5 minuti",
                "Versare sake e salsa di soia sopra e impiattare"
            ]
        },
        tags: ["diabetic-friendly", "low-fat", "high-protein", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 228,
        name: { ja: "大根とツナの味噌汁", it: "Zuppa di Miso con Daikon e Tonno" },
        description: { ja: "大根とツナを使った具沢山の味噌汁", it: "Zuppa di miso ricca con daikon e tonno" },
        type: "breakfast",
        prepTime: 8,
        cookTime: 12,
        servings: 2,
        difficulty: "easy",
        calories: 90,
        carbs: 6,
        protein: 10,
        fat: 2,
        fiber: 2,
        sodium: 620,
        ingredients: {
            ja: ["大根 100g", "ツナ缶 1個", "ねぎ 1本", "味噌 大さじ2", "だし汁 400ml"],
            it: ["Daikon 100g", "Tonno in scatola 1", "Cipollotto 1", "Miso 2 cucchiai", "Brodo dashi 400ml"]
        },
        instructions: {
            ja: [
                "大根は薄切りにする",
                "ねぎは小口切りにする",
                "鍋にだし汁を入れて中火で温める",
                "大根を加えて8分煮る",
                "味噌を溶かし入れてツナを加える",
                "弱火で2分煮て、ねぎを散らす"
            ],
            it: [
                "Tagliare il daikon a fette sottili",
                "Tagliare il cipollotto a rondelle",
                "Scaldare il brodo dashi in una pentola a fuoco medio",
                "Aggiungere il daikon e cuocere per 8 minuti",
                "Sciogliere il miso e aggiungere il tonno",
                "Cuocere a fuoco basso per 2 minuti e guarnire con cipollotto"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 229,
        name: { ja: "豆腐と野菜の蒸し物", it: "Tofu e Verdure al Vapore" },
        description: { ja: "豆腐と野菜を蒸したヘルシーな一品", it: "Piatto sano al vapore con tofu e verdure" },
        type: "dinner",
        prepTime: 10,
        cookTime: 10,
        servings: 2,
        difficulty: "easy",
        calories: 100,
        carbs: 6,
        protein: 8,
        fat: 4,
        fiber: 3,
        sodium: 350,
        ingredients: {
            ja: ["木綿豆腐 1丁", "ブロッコリー 1/2個", "にんじん 1/2本", "醤油 大さじ1", "ごま油 小さじ1"],
            it: ["Tofu sodo 1", "Broccoli 1/2", "Carota 1/2", "Salsa di soia 1 cucchiaio", "Olio di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "豆腐は一口大に切る",
                "ブロッコリーは小房に分ける",
                "にんじんは薄切りにする",
                "蒸し器の水を沸かす",
                "豆腐と野菜を蒸し器に入れる",
                "中火で10分蒸す",
                "醤油とごま油をかけて器に盛り付ける"
            ],
            it: [
                "Tagliare il tofu a pezzi",
                "Dividere i broccoli in cimette",
                "Tagliare la carota a fette sottili",
                "Portare l'acqua del cestello a ebollizione",
                "Mettere tofu e verdure nel cestello",
                "Cuocere a fuoco medio per 10 minuti",
                "Versare salsa di soia e olio di sesamo sopra e impiattare"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
    },
    {
        id: 230,
        name: { ja: "鶏ささみと野菜のサラダ", it: "Insalata di Pollo e Verdure" },
        description: { ja: "鶏ささみと野菜を使ったヘルシーなサラダ", it: "Insalata sana con pollo e verdure" },
        type: "lunch",
        prepTime: 15,
        cookTime: 5,
        servings: 2,
        difficulty: "easy",
        calories: 110,
        carbs: 6,
        protein: 18,
        fat: 2,
        fiber: 3,
        sodium: 320,
        ingredients: {
            ja: ["鶏ささみ 2本", "きゅうり 1本", "トマト 1個", "ポン酢 大さじ1", "ごま 小さじ1"],
            it: ["Filetto di pollo 2", "Cetriolo 1", "Pomodoro 1", "Ponzu 1 cucchiaio", "Semi di sesamo 1 cucchiaino"]
        },
        instructions: {
            ja: [
                "ささみは茹でて手で裂く",
                "きゅうりは薄切りにする",
                "トマトは一口大に切る",
                "ボウルにささみ、きゅうり、トマト、ポン酢を入れて和える",
                "ごまを散らして器に盛り付ける"
            ],
            it: [
                "Bollire il pollo e sfilacciarlo a mano",
                "Tagliare il cetriolo a fette sottili",
                "Tagliare il pomodoro a pezzi",
                "Mettere pollo, cetriolo, pomodoro e ponzu in una ciotola e mescolare",
                "Cospargere con semi di sesamo e impiattare"
            ]
        },
        tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
        country: 'JP'
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
                ja: [
                    `${veg.ja}を食べやすい大きさに切る（一口大）`,
                    "蒸し器の水を沸かす",
                    `${veg.ja}を蒸し器に入れ、中火で10分蒸す`,
                    "竹串で刺して柔らかくなったら火を止める",
                    "ポン酢をかけて温かいうちに食べる"
                ],
                it: [
                    `Tagliare ${veg.it} a pezzi di una bocconata`,
                    "Portare l'acqua del cestello a ebollizione",
                    `Mettere ${veg.it} nel cestello e cuocere a vapore per 10 minuti a fuoco medio`,
                    "Controllare la cottura con uno stuzzicadenti",
                    "Servire caldo con ponzu"
                ]
            },
            tags: ["diabetic-friendly", "low-calorie", "japanese-ingredients"],
            image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e8f5e8'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3E${veg.ja}%3C/text%3E%3C/svg%3E`,
            country: 'JP'
        });
    });
    
    // Generate protein variations
    proteins.forEach((protein, index) => {
        const mealTypes = ["breakfast", "lunch", "dinner"];
        const cookingMethods = [
            {ja: "グリル", it: "Grigliato", time: 15, ja_instructions: ["醤油、みりん、生姜で下味をつける", "グリルパンを中火で熱する", "片面7-8分焼く", "裏返して7-8分焼く", "火が通ったら完成"], it_instructions: ["Marinare con salsa di soia, mirin e zenzero", "Scaldare la griglia a fuoco medio", "Cuocere 7-8 minuti per lato", "Girare e cuocere altri 7-8 minuti", "Servire quando ben cotto"]},
            {ja: "蒸し", it: "Al vapore", time: 20, ja_instructions: ["醤油、みりん、生姜で下味をつける", "蒸し器の水を沸かす", "中火で20分蒸す", "竹串で刺して火が通ったら完成"], it_instructions: ["Marinare con salsa di soia, mirin e zenzero", "Portare l'acqua del cestello a ebollizione", "Cuocere a vapore per 20 minuti a fuoco medio", "Controllare la cottura con uno stuzzicadenti"]},
            {ja: "煮込み", it: "Brasato", time: 25, ja_instructions: ["醤油、みりん、生姜で下味をつける", "鍋にだし汁300mlを入れて沸かす", "弱火で25分煮込む", "煮汁が少なくなったら完成"], it_instructions: ["Marinare con salsa di soia, mirin e zenzero", "Portare 300ml di brodo dashi a ebollizione", "Cuocere a fuoco basso per 25 minuti", "Servire quando il liquido si è ridotto"]}
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
                    ja: method.ja_instructions,
                    it: method.it_instructions
                },
                tags: ["diabetic-friendly", "high-protein", "japanese-ingredients"],
                image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0e6d2'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='10' fill='%23666'%3E${protein.ja}${method.ja}%3C/text%3E%3C/svg%3E`,
                country: 'JP'
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
            ja: [
                "きゅうりは薄切り、人参は細切り（千切り）にする",
                "ハムは細切りにする",
                "おからをボウルに入れる",
                "野菜とハムを加えて混ぜる",
                "マヨネーズ、酢、塩こしょうを加えて和える",
                "冷蔵庫で30分冷やしてからいただく"
            ],
            it: [
                "Tagliare il cetriolo a fette sottili, la carota a julienne",
                "Tagliare il prosciutto a striscioline",
                "Mettere l'okara in una ciotola",
                "Aggiungere verdure e prosciutto e mescolare",
                "Aggiungere maionese, aceto, sale e pepe e mescolare",
                "Raffreddare in frigorifero per 30 minuti prima di servire"
            ]
        },
        tags: ["diabetic-friendly", "high-protein", "low-carb"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f5f5dc'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='12' fill='%23666'%3Eおからサラダ%3C/text%3E%3C/svg%3E",
        country: 'JP'
    }
];

// Export all recipes - Combine base recipes with generated ones
const allRecipes = generateRecipes();

// Final combined recipes database
window.recipes = [...allRecipes, ...additionalRecipes]; 

// At the end of the file, export the array as 'japaneseRecipes'
export const japaneseRecipes = recipes;