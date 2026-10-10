// возвращает x в степени n (n - натуральное число)
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// примеры
console.log(pow(2, 3)); // 8
console.log(pow(5, 2)); // 25
