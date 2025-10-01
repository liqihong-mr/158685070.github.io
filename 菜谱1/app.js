// 菜谱数据库
const recipes = [
    {
        id: 1,
        title: "宫保鸡丁",
        cuisine: "chinese",
        image: "img/kungpao.jpg",
        time: "30分钟",
        difficulty: "中等",
        ingredients: [
            "鸡胸肉 300克",
            "花生米 50克",
            "干辣椒 适量",
            "葱姜蒜 适量",
            "黄瓜 半根",
            "胡萝卜 半根",
            "料酒 1汤匙",
            "生抽 1汤匙",
            "老抽 半勺",
            "糖 1茶匙",
            "盐 少许",
            "淀粉 适量"
        ],
        steps: [
            "鸡胸肉切成1厘米见方的小丁，用料酒、盐、淀粉腌制15分钟。",
            "黄瓜、胡萝卜切丁，花生米提前用油炸熟备用。",
            "调制酱汁：生抽、老抽、糖、盐、淀粉和少量水混合均匀。",
            "热锅冷油，放入花椒、干辣椒炒出香味。",
            "加入鸡丁快速翻炒至变色。",
            "加入葱姜蒜炒香，再加入胡萝卜丁翻炒。",
            "倒入调好的酱汁，快速翻炒均匀。",
            "最后加入黄瓜丁和花生米，翻炒几下即可出锅。"
        ]
    },
    {
        id: 2,
        title: "意大利面",
        cuisine: "western",
        image: "img/pasta.jpg",
        time: "25分钟",
        difficulty: "简单",
        ingredients: [
            "意大利面 200克",
            "番茄 2个",
            "洋葱 半个",
            "大蒜 3瓣",
            "肉末 100克",
            "番茄酱 2汤匙",
            "橄榄油 适量",
            "盐 少许",
            "黑胡椒 少许",
            "芝士粉 适量",
            "罗勒叶 少许"
        ],
        steps: [
            "锅中加水煮沸，加少许盐，放入意大利面，按照包装说明煮至八分熟。",
            "洋葱、大蒜切末，番茄切丁备用。",
            "热锅倒入橄榄油，放入蒜末和洋葱末炒香。",
            "加入肉末炒至变色。",
            "放入番茄丁翻炒至出汁，加入番茄酱继续翻炒。",
            "加入适量盐和黑胡椒调味，小火煮5分钟使酱汁浓稠。",
            "将煮好的意大利面捞出，沥干水分后加入酱汁中拌匀。",
            "装盘后撒上芝士粉和罗勒叶即可。"
        ]
    },
    {
        id: 3,
        title: "寿司卷",
        cuisine: "japanese",
        image: "img/sushi.jpg",
        time: "40分钟",
        difficulty: "中等",
        ingredients: [
            "寿司米 300克",
            "海苔片 4张",
            "黄瓜 1根",
            "胡萝卜 1根",
            "牛油果 1个",
            "三文鱼 100克",
            "寿司醋 3汤匙",
            "糖 1茶匙",
            "盐 少许",
            "芥末 适量",
            "酱油 适量"
        ],
        steps: [
            "寿司米洗净后浸泡30分钟，然后按照1:1.2的比例加水煮熟。",
            "煮好的米饭放凉至40℃左右，加入寿司醋、糖和盐拌匀。",
            "黄瓜、胡萝卜切条，牛油果去皮切片，三文鱼切条备用。",
            "在竹帘上铺一张海苔，光滑面朝下。",
            "在海苔上均匀铺上一层米饭，留出边缘。",
            "在米饭中间放上各种食材条。",
            "用竹帘将海苔卷紧，确保卷得紧实。",
            "用锋利的刀将寿司卷切成小段，蘸酱油和芥末食用。"
        ]
    },
    {
        id: 4,
        title: "部队火锅",
        cuisine: "korean",
        image: "img/armyhotpot.jpg",
        time: "45分钟",
        difficulty: "中等",
        ingredients: [
            "拉面 1包",
            "午餐肉 1罐",
            "香肠 2根",
            "泡菜 100克",
            "年糕 100克",
            "豆腐 1块",
            "洋葱 半个",
            "大蒜 3瓣",
            "辣椒酱 2汤匙",
            "辣椒粉 1茶匙",
            "生抽 1汤匙",
            "糖 1茶匙",
            "芝士片 2片",
            "方便面调料包 1个"
        ],
        steps: [
            "所有食材准备好，午餐肉、香肠切片，豆腐切块，洋葱切丝，大蒜切末。",
            "锅中加热，放入大蒜和洋葱炒香。",
            "加入泡菜翻炒片刻，然后加入辣椒酱和辣椒粉炒香。",
            "加入适量清水，放入方便面调料包、生抽和糖调味。",
            "依次放入年糕、午餐肉、香肠和豆腐。",
            "煮10分钟后，在中间放入拉面。",
            "拉面快熟时，在上面放上芝士片。",
            "盖上锅盖焖2分钟，待芝士融化即可食用。"
        ]
    },
    {
        id: 5,
        title: "麻婆豆腐",
        cuisine: "chinese",
        image: "img/mapo.jpg",
        time: "20分钟",
        difficulty: "简单",
        ingredients: [
            "嫩豆腐 1盒",
            "猪肉末 100克",
            "郫县豆瓣酱 1汤匙",
            "花椒粉 1茶匙",
            "辣椒粉 1茶匙",
            "葱姜蒜 适量",
            "生抽 1汤匙",
            "老抽 半勺",
            "糖 少许",
            "淀粉 适量",
            "食用油 适量"
        ],
        steps: [
            "豆腐切成2厘米见方的小块，放入淡盐水中浸泡备用。",
            "葱姜蒜切末，淀粉加冷水调成水淀粉。",
            "热锅冷油，放入肉末炒至变色。",
            "加入葱姜蒜和郫县豆瓣酱炒出香味。",
            "加入适量清水，放入生抽、老抽和糖调味。",
            "豆腐捞出沥干，轻轻放入锅中，小火煮3分钟。",
            "慢慢倒入水淀粉勾芡，轻轻推动锅铲使汤汁均匀。",
            "出锅前撒上花椒粉和辣椒粉即可。"
        ]
    }
];

// DOM元素
const recipeGrid = document.getElementById('recipeGrid');
const recipeDetail = document.getElementById('recipeDetail');
const recipeTitle = document.getElementById('recipeTitle');
const recipeImage = document.getElementById('recipeImage');
const recipeCuisine = document.getElementById('recipeCuisine');
const recipeTime = document.getElementById('recipeTime');
const recipeDifficulty = document.getElementById('recipeDifficulty');
const ingredientsList = document.getElementById('ingredientsList');
const stepsList = document.getElementById('stepsList');
const closeBtn = document.getElementById('closeBtn');
const cuisineBtns = document.querySelectorAll('.cuisine-btn');

// 初始化页面
function init() {
    renderRecipes(recipes);
    setupEventListeners();
}

// 渲染菜谱卡片
function renderRecipes(recipeList) {
    recipeGrid.innerHTML = '';

    if (recipeList.length === 0) {
        recipeGrid.innerHTML = '<p class="no-recipes">没有找到匹配的菜谱</p>';
        return;
    }

    recipeList.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.dataset.id = recipe.id;

        // 处理菜系名称显示
        let cuisineName = '';
        switch(recipe.cuisine) {
            case 'chinese': cuisineName = '中餐'; break;
            case 'western': cuisineName = '西餐'; break;
            case 'japanese': cuisineName = '日料'; break;
            case 'korean': cuisineName = '韩餐'; break;
            default: cuisineName = '其他';
        }

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-card-content">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>${cuisineName}</span>
                    <span>${recipe.time}</span>
                </div>
            </div>
        `;

        recipeGrid.appendChild(card);
    });
}

// 显示菜谱详情
function showRecipeDetail(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    // 处理菜系名称显示
    let cuisineName = '';
    switch(recipe.cuisine) {
        case 'chinese': cuisineName = '中餐'; break;
        case 'western': cuisineName = '西餐'; break;
        case 'japanese': cuisineName = '日料'; break;
        case 'korean': cuisineName = '韩餐'; break;
        default: cuisineName = '其他';
    }

    recipeTitle.textContent = recipe.title;
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;
    recipeCuisine.textContent = cuisineName;
    recipeTime.textContent = recipe.time;
    recipeDifficulty.textContent = recipe.difficulty;

    // 渲染食材列表
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // 渲染步骤列表
    stepsList.innerHTML = '';
    recipe.steps.forEach((step, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>步骤 ${index + 1}:</strong> ${step}`;
        stepsList.appendChild(li);
    });

    recipeDetail.classList.add('active');
}

// 设置事件监听器
function setupEventListeners() {
    // 菜谱卡片点击事件
    recipeGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.recipe-card');
        if (card) {
            const recipeId = parseInt(card.dataset.id);
            showRecipeDetail(recipeId);
        }
    });

    // 关闭详情按钮
    closeBtn.addEventListener('click', () => {
        recipeDetail.classList.remove('active');
    });

    // 点击详情区域外部关闭
    recipeDetail.addEventListener('click', (e) => {
        if (e.target === recipeDetail) {
            recipeDetail.classList.remove('active');
        }
    });

    // 菜系筛选按钮
    cuisineBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新按钮状态
            cuisineBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 筛选菜谱
            const cuisine = btn.dataset.cuisine;
            if (cuisine === 'all') {
                renderRecipes(recipes);
            } else {
                const filtered = recipes.filter(r => r.cuisine === cuisine);
                renderRecipes(filtered);
            }
        });
    });
}

// 启动应用
document.addEventListener('DOMContentLoaded', init);