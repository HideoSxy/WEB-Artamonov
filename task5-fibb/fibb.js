// возвращает n-ое число Фибоначчи (n <= 1000), BigInt из-за больших значений
function fibb(n) {
  let a = 0n;
  let b = 1n;
  for (let i = 0; i < n; i++) {
    const t = a + b;
    a = b;
    b = t;
  }
  return a;
}

// примеры
console.log(fibb(0).toString()); // 0
console.log(fibb(10).toString()); // 55
console.log(fibb(1000).toString());
