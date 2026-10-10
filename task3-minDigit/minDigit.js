function minDigit(x) {
  let min = 9;
  do {
    const digit = x % 10;
    if (digit < min) min = digit;
    x = (x - digit) / 10;
  } while (x > 0);
  return min;
}

console.log(minDigit(2017)); 
console.log(minDigit(999)); 
