// названия и пустые сообщения для раздела «Ваш заказ»
const ORDER_MAP = {
  soup:    { title: 'Суп',              empty: 'Блюдо не выбрано' },
  main:    { title: 'Главное блюдо',    empty: 'Блюдо не выбрано' },
  salad:   { title: 'Салат или стартер', empty: 'Блюдо не выбрано' },
  drink:   { title: 'Напиток',         empty: 'Напиток не выбран' },
  dessert: { title: 'Десерт',           empty: 'Десерт не выбран' },
};

// допустимые комбо
const COMBOS = [
  { id: 1, items: ['soup', 'main', 'salad', 'drink'] },
  { id: 2, items: ['soup', 'main', 'drink'] },
  { id: 3, items: ['soup', 'salad', 'drink'] },
  { id: 4, items: ['main', 'salad', 'drink'] },
  { id: 5, items: ['main', 'drink'] },
];

// выбранные блюда по категориям
const selected = {};

function renderOrder() {
  const order = document.getElementById('order');
  const chosen = Object.keys(selected).length > 0;

  if (!chosen) {
    order.innerHTML = '<p>Ничего не выбрано</p>';
    return;
  }

  let html = '';
  let total = 0;
  for (const cat of CATEGORIES) {
    const meta = ORDER_MAP[cat.id];
    const dish = selected[cat.id];
    if (dish) {
      total += dish.price;
      html += '<div class="order-item"><h4>' + meta.title + '</h4><p>' + dish.name + ' — ' + dish.price + ' Р</p></div>';
    } else {
      html += '<div class="order-item"><h4>' + meta.title + '</h4><p>' + meta.empty + '</p></div>';
    }
  }
  html += '<div class="order-total"><h4>Стоимость заказа</h4><p>' + total + ' Р</p></div>';
  order.innerHTML = html;
}

// проверяет, соответствует ли выбор допустимому комбо
function checkCombo() {
  const chosen = Object.keys(selected);
  for (const combo of COMBOS) {
    const required = combo.items;
    const hasRequired = required.every(item => chosen.includes(item));
    const hasExtra = chosen.some(item => !required.includes(item));
    if (hasRequired && !hasExtra) return true;
  }
  return false;
}

// определяет текст уведомления по текущему выбору
function getNotification() {
  const chosen = Object.keys(selected);
  if (chosen.length === 0) {
    return 'Ничего не выбрано. Выберите блюда для заказа';
  }
  // выбран только суп
  if (chosen.includes('soup') && !chosen.includes('main') && !chosen.includes('salad')) {
    return 'Выберите главное блюдо/салат/стартер';
  }
  // выбран только салат
  if (chosen.includes('salad') && !chosen.includes('soup') && !chosen.includes('main')) {
    return 'Выберите суп или главное блюдо';
  }
  // выбран только напиток (без главного блюда)
  if (chosen.includes('drink') && !chosen.includes('main')) {
    return 'Выберите главное блюдо';
  }
  // во всех остальных случаях — неверный набор
  return 'Выберите напиток';
}

// показывает уведомление
function showNotification(message) {
  const existing = document.getElementById('notification');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.id = 'notification';
  popup.innerHTML =
    '<div class="notification-box">' +
      '<p>' + message + '</p>' +
      '<button id="notification-ok">Окей</button>' +
    '</div>';

  document.body.appendChild(popup);

  document.getElementById('notification-ok').addEventListener('click', function () {
    popup.remove();
  });
}

// валидация при отправке формы
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    if (!checkCombo()) {
      event.preventDefault();
      showNotification(getNotification());
    }
  });

  form.addEventListener('reset', function () {
    for (const cat of CATEGORIES) delete selected[cat.id];
    document.querySelectorAll('.filters [data-kind]').forEach(b => b.classList.remove('active'));
    setTimeout(renderOrder, 0);
  });
});

// клик по карточке: находим блюдо через data-dish и добавляем в заказ
document.addEventListener('click', function (event) {
  const card = event.target.closest('.dish');
  if (!card) return;
  const dish = dishes.find(item => item.keyword === card.dataset.dish);
  if (!dish) return;
  selected[dish.category] = dish;
  renderOrder();
});
