function gcd(a, b) {
  while (b !== 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}

console.log(gcd(12, 18)); 
console.log(gcd(100, 35)); 
