// категории и их фильтры
const CATEGORIES = [
  { id: 'soup',   kinds: ['fish', 'meat', 'veg'] },
  { id: 'main',   kinds: ['fish', 'meat', 'veg'] },
  { id: 'salad',  kinds: ['fish', 'meat', 'veg'] },
  { id: 'drink',  kinds: ['cold', 'hot'] },
  { id: 'dessert', kinds: ['small', 'medium', 'big'] },
];

// активные фильтры по категориям (null = показывать все)
const activeFilter = {};

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

function getFiltered(categoryId) {
  const kind = activeFilter[categoryId];
  return dishes
    .filter(d => d.category === categoryId)
    .filter(d => kind ? d.kind === kind : true);
}

function renderDishes() {
  for (const cat of CATEGORIES) {
    const list = document.getElementById(cat.id);
    if (!list) continue;
    list.innerHTML = '';
    const items = getFiltered(cat.id)
      .sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    for (const item of items) {
      list.appendChild(createCard(item));
    }
  }
}

function renderFilters() {
  for (const cat of CATEGORIES) {
    const container = document.querySelector('.filters[data-category="' + cat.id + '"]');
    if (!container) continue;
    container.addEventListener('click', function (event) {
      const btn = event.target.closest('[data-kind]');
      if (!btn) return;

      const kind = btn.dataset.kind;

      if (activeFilter[cat.id] === kind) {
        // повторный клик снимает фильтр
        delete activeFilter[cat.id];
        btn.classList.remove('active');
      } else {
        // снимаем прежний активный в этой категории
        container.querySelectorAll('[data-kind]').forEach(b => b.classList.remove('active'));
        activeFilter[cat.id] = kind;
        btn.classList.add('active');
      }

      renderDishes();
    });
  }
}

// сброс фильтров при сбросе формы
document.addEventListener('DOMContentLoaded', function () {
  renderFilters();
  renderDishes();

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('reset', function () {
      for (const cat of CATEGORIES) delete activeFilter[cat.id];
      document.querySelectorAll('.filters [data-kind]').forEach(b => b.classList.remove('active'));
      setTimeout(renderDishes, 0);
    });
  }
});
