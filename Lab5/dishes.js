// массив объектов с блюдами (6 на категорию, у каждого есть kind для фильтра)
const dishes = [
  // СУПЫ (kind: fish/meat/veg)
  { keyword: 'ukha',        name: 'Уха',                    price: 180, category: 'soup',   kind: 'fish', count: '250 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg-QphJSRKwqtDDByoq7cNHwXiV8JzM1kY4SOZYQocQ&s=10' },
  { keyword: 'shchi',       name: 'Щи',                     price: 160, category: 'soup',   kind: 'meat', count: '250 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvBUDy_3czh2nvgr5c0brqlh7Bjqi68RTnem6idv9YQ&s=10' },
  { keyword: 'borsch',      name: 'Борщ со сметаной',        price: 150, category: 'soup',   kind: 'meat', count: '250 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF7x2OAMejIQX8zskJBemPdCWLrkgS4u4irRzptZsGw&s=10' },
  { keyword: 'gazpacho',    name: 'Гаспачо',                 price: 140, category: 'soup',   kind: 'veg',  count: '200 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF7x2OAMejIQX8zskJBemPdCWLrkgS4u4irRzptZsGw&s=10' },
  { keyword: 'asparagus',   name: 'Суп из спаржи',            price: 170, category: 'soup',   kind: 'veg',  count: '220 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF7x2OAMejIQX8zskJBemPdCWLrkgS4u4irRzptZsGw&s=10' },
  { keyword: 'mushroom',    name: 'Грибной крем-суп',        price: 155, category: 'soup',   kind: 'veg',  count: '200 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF7x2OAMejIQX8zskJBemPdCWLrkgS4u4irRzptZsGw&s=10' },

  // ГЛАВНЫЕ БЛЮДА (kind: fish/meat/veg)
  { keyword: 'fish-cutlets', name: 'Рыбные котлеты',         price: 270, category: 'main',  kind: 'fish', count: '180 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQEGThDYE694R9vd4zZr-yGtDWgsCJLGmjNmhZA_G2w&s=10' },
  { keyword: 'salmon',      name: 'Лосось на пару',           price: 320, category: 'main',  kind: 'fish', count: '200 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQEGThDYE694R9vd4zZr-yGtDWgsCJLGmjNmhZA_G2w&s=10' },
  { keyword: 'beef-strog',  name: 'Бефстроганов',             price: 290, category: 'main',  kind: 'meat', count: '220 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'chicken-kiev', name: 'Котлеты по-киевски',     price: 260, category: 'main',  kind: 'meat', count: '200 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'veggie-reveal', name: 'Овощное рагу',          price: 200, category: 'main',  kind: 'veg',  count: '250 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'greench-pasta', name: 'Паста с овощами',       price: 220, category: 'main',  kind: 'veg',  count: '230 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },

  // САЛАТЫ И СТАРТЕРЫ (kind: fish/meat/veg)
  { keyword: 'olivie',     name: 'Салат Оливье',             price: 180, category: 'salad', kind: 'meat', count: '200 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'caesar',     name: 'Салат Цезарь',             price: 250, category: 'salad', kind: 'meat', count: '200 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQEGThDYE694R9vd4zZr-yGtDWgsCJLGmjNmhZA_G2w&s=10' },
  { keyword: 'mimosa',     name: 'Салат Мимоза',             price: 190, category: 'salad', kind: 'fish', count: '180 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQEGThDYE694R9vd4zZr-yGtDWgsCJLGmjNmhZA_G2w&s=10' },
  { keyword: 'greek',      name: 'Греческий салат',          price: 200, category: 'salad', kind: 'veg',  count: '220 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'caprese',    name: 'Салат Капрезе',             price: 210, category: 'salad', kind: 'veg',  count: '190 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'vinegret',   name: 'Винегрет',                 price: 150, category: 'salad', kind: 'veg',  count: '200 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },

  // НАПИТКИ (kind: cold/hot)
  { keyword: 'lemonade',   name: 'Домашний лимонад',         price: 120, category: 'drink', kind: 'cold', count: '300 мл', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbvvLQf-51QCBoUwYCfdhvGuPGo9Wj9MrHpkNeQjuKw&s=10' },
  { keyword: 'mors',       name: 'Клюквенный морс',           price: 90,  category: 'drink', kind: 'cold', count: '300 мл', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbvvLQf-51QCBoUwYCfdhvGuPGo9Wj9MrHpkNeQjuKw&s=10' },
  { keyword: 'iced-tea',  name: 'Холодный чай',             price: 100, category: 'drink', kind: 'cold', count: '250 мл', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbvvLQf-51QCBoUwYCfdhvGuPGo9Wj9MrHpkNeQjuKw&s=10' },
  { keyword: 'tea',        name: 'Чёрный чай с лимоном',    price: 60,  category: 'drink', kind: 'hot',  count: '250 мл', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHGf-5XiNXy_AhIUNi5DnW5P3lqEZE8eYgAtkYOg7qw&s=10' },
  { keyword: 'coffee',     name: 'Кофе капучино',             price: 150, category: 'drink', kind: 'hot',  count: '200 мл', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHGf-5XiNXy_AhIUNi5DnW5P3lqEZE8eYgAtkYOg7qw&s=10' },
  { keyword: 'cocoa',      name: 'Какао с корицей',           price: 130, category: 'drink', kind: 'hot',  count: '250 мл', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHGf-5XiNXy_AhIUNi5DnW5P3lqEZE8eYgAtkYOg7qw&s=10' },

  // ДЕСЕРТЫ (kind: small/medium/big)
  { keyword: 'cheesecake', name: 'Чизкейк',                 price: 180, category: 'dessert', kind: 'small', count: '100 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'pancakes',   name: 'Блинчики с ягодами',       price: 160, category: 'dessert', kind: 'small', count: '120 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'fruit-plate', name: 'Фруктовая тарелка',      price: 200, category: 'dessert', kind: 'small', count: '200 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'tiramisu',   name: 'Тирамису',                 price: 220, category: 'dessert', kind: 'medium', count: '150 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'honey-cake', name: 'Торт Медовик',             price: 240, category: 'dessert', kind: 'medium', count: '180 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
  { keyword: 'napoleon',   name: 'Наполеон',                 price: 260, category: 'dessert', kind: 'big',   count: '250 г', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCuZ3hqNwolBMklt5I3FDH07SUNNotHv1wgymbD6E3CA&s=10' },
];
