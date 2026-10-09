// соответствие секции и категории блюд
const CATEGORIES = [
  { id: 'soup', title: 'Супы' },
  { id: 'main', title: 'Главные блюда' },
  { id: 'drink', title: 'Напитки' },
];

// создаёт карточку блюда
function createCard(dish) {
  const card = document.createElement('div');
  card.className = 'dish';
  card.dataset.dish = dish.keyword;
  card.innerHTML =
    '<img src="' + dish.image + '" alt="' + dish.name + '">' +
    '<p class="price">' + dish.price + ' Р</p>' +
    '<p class="name">' + dish.name + '</p>' +
    '<p class="weight">' + dish.count + '</p>' +
    '<button>Добавить</button>';
  return card;
}

// выводит блюда в свои секции в алфавитном порядке
function renderDishes() {
  for (const cat of CATEGORIES) {
    const list = document.getElementById(cat.id);
    const items = dishes
      .filter(d => d.category === cat.id)
      .sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    for (const item of items) {
      list.appendChild(createCard(item));
    }
  }
}

renderDishes();
