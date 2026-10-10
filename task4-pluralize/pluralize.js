// возвращает строку с правильной формой множественного числа слова "записи"
function pluralizeRecords(n) {
  let records;
  if (n % 10 === 1 && n % 100 !== 11) {
    records = 'запись';
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    records = 'записи';
  } else {
    records = 'записей';
  }
  return 'В результате выполнения запроса было найдено ' + n + ' ' + records;
}

// примеры
console.log(pluralizeRecords(1)); // ... 1 запись
console.log(pluralizeRecords(3)); // ... 3 записи
console.log(pluralizeRecords(5)); // ... 5 записей
console.log(pluralizeRecords(11)); // ... 11 записей
