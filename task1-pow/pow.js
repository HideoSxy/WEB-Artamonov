function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// примеры
console.log(pow(2, 3)); 
console.log(pow(5, 2)); 
