// возвращает наибольший общий делитель a и b (алгоритм Евклида)
function gcd(a, b) {
  while (b !== 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}

// примеры
console.log(gcd(12, 18)); // 6
console.log(gcd(100, 35)); // 5
