// массив объектов с блюдами (6 на категорию, у каждого есть kind для фильтра)
const dishes = [
  // СУПЫ (kind: fish/meat/veg)
  { keyword: 'ukha',        name: 'Уха',                    price: 180, category: 'soup',   kind: 'fish', count: '250 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg-QphJSRKwqtDDByoq7cNHwXiV8JzM1kY4SOZYQocQ&s=10' },
  { keyword: 'shchi',       name: 'Щи',                      price: 160, category: 'soup',   kind: 'meat', count: '250 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvBUDy_3czh2nvgr5c0brqlh7Bjqi68RTnem6idv9YQ&s=10' },
  { keyword: 'borsch',      name: 'Борщ со сметаной',        price: 150, category: 'soup',   kind: 'meat', count: '250 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF7x2OAMejIQX8zskJBemPdCWLrkgS4u4irRzptZsGw&s=10' },
  { keyword: 'gazpacho',    name: 'Гаспачо',                 price: 140, category: 'soup',   kind: 'veg',  count: '200 г', image: 'https://images.unsplash.com/photo-1628626141003-7da3e3cef4e8?w=400&q=80' },
  { keyword: 'asparagus',   name: 'Суп из спаржи',           price: 170, category: 'soup',   kind: 'veg',  count: '220 г', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80' },
  { keyword: 'mushroom',    name: 'Грибной крем-суп',        price: 155, category: 'soup',   kind: 'veg',  count: '200 г', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80' },

  // ГЛАВНЫЕ БЛЮДА (kind: fish/meat/veg)
  { keyword: 'fish-cutlets', name: 'Рыбные котлеты',          price: 270, category: 'main',  kind: 'fish', count: '180 г', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80' },
  { keyword: 'salmon',       name: 'Лосось на пару',          price: 320, category: 'main',  kind: 'fish', count: '200 г', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80' },
  { keyword: 'beef-strog',   name: 'Бефстроганов',            price: 290, category: 'main',  kind: 'meat', count: '220 г', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80' },
  { keyword: 'chicken-kiev', name: 'Котлеты по-киевски',     price: 260, category: 'main',  kind: 'meat', count: '200 г', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
  { keyword: 'veggie-reveal', name: 'Овощное рагу',           price: 200, category: 'main',  kind: 'veg',  count: '250 г', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80' },
  { keyword: 'greench-pasta', name: 'Паста с овощами',        price: 220, category: 'main',  kind: 'veg',  count: '230 г', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80' },

  // САЛАТЫ И СТАРТЕРЫ (kind: fish/meat/veg)
  { keyword: 'olivie',     name: 'Салат Оливье',             price: 180, category: 'salad', kind: 'meat', count: '200 г', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80' },
  { keyword: 'caesar',     name: 'Салат Цезарь',             price: 250, category: 'salad', kind: 'meat', count: '200 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQEGThDYE694R9vd4zZr-yGtDWgsCJLGmjNmhZA_G2w&s=10' },
  { keyword: 'mimosa',     name: 'Салат Мимоза',             price: 190, category: 'salad', kind: 'fish', count: '180 г', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80' },
  { keyword: 'Greek',      name: 'Греческий салат',          price: 200, category: 'salad', kind: 'veg',  count: '220 г', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80' },
  { keyword: 'caprese',    name: 'Салат Капрезе',             price: 210, category: 'salad', kind: 'veg',  count: '190 г', image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80' },
  { keyword: 'vinegret',   name: 'Винегрет',                 price: 150, category: 'salad', kind: 'veg',  count: '200 г', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80' },

  // НАПИТКИ (kind: cold/hot)
  { keyword: 'lemonade',   name: 'Домашний лимонад',         price: 120, category: 'drink', kind: 'cold', count: '300 мл', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80' },
  { keyword: 'mors',       name: 'Клюквенный морс',           price: 90,  category: 'drink', kind: 'cold', count: '300 мл', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbvvLQf-51QCBoUwYCfdhvGuPGo9Wj9MrHpkNeQjuKw&s=10' },
  { keyword: 'iced-tea',   name: 'Холодный чай',              price: 100, category: 'drink', kind: 'cold', count: '250 мл', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
  { keyword: 'tea',        name: 'Чёрный чай с лимоном',      price: 60,  category: 'drink', kind: 'hot',  count: '250 мл', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHGf-5XiNXy_AhIUNi5DnW5P3lqEZE8eYgAtkYOg7qw&s=10' },
  { keyword: 'coffee',     name: 'Кофе капучино',             price: 150, category: 'drink', kind: 'hot',  count: '200 мл', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80' },
  { keyword: 'cocoa',      name: 'Какао с корицей',           price: 130, category: 'drink', kind: 'hot',  count: '250 мл', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80' },

  // ДЕСЕРТЫ (kind: small/medium/big)
  { keyword: 'cheesecake', name: 'Чизкейк',                   price: 180, category: 'dessert', kind: 'small', count: '100 г', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80' },
  { keyword: 'pancakes',   name: 'Блинчики с ягодами',        price: 160, category: 'dessert', kind: 'small', count: '120 г', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80' },
  { keyword: 'fruit-plate', name: 'Фруктовая тарелка',       price: 200, category: 'dessert', kind: 'small', count: '200 г', image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=400&q=80' },
  { keyword: 'tiramisu',   name: 'Тирамису',                  price: 220, category: 'dessert', kind: 'medium', count: '150 г', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80' },
  { keyword: 'honey-cake', name: 'Торт Медовик',               price: 240, category: 'dessert', kind: 'medium', count: '180 г', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&q=80' },
  { keyword: 'napoleon',   name: 'Наполеон',                  price: 260, category: 'dessert', kind: 'big',   count: '250 г', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80' },
];
