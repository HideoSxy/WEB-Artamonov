// названия и пустые сообщения для раздела «Ваш заказ»
const ORDER_MAP = {
  soup: { title: 'Суп', empty: 'Блюдо не выбрано' },
  main: { title: 'Главное блюдо', empty: 'Блюдо не выбрано' },
  drink: { title: 'Напиток', empty: 'Напиток не выбран' },
};

// выбранные блюда по категориям
const selected = {};

// показывает раздел «Ваш заказ» и считает стоимость
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

// клик по карточке: находим блюдо через data-dish и добавляем в заказ
document.addEventListener('click', function (event) {
  const card = event.target.closest('.dish');
  if (!card) return;
  const dish = dishes.find(item => item.keyword === card.dataset.dish);
  selected[dish.category] = dish;
  renderOrder();
});
