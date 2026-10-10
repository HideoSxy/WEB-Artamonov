
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

console.log(fibb(0).toString()); 
console.log(fibb(10).toString()); 
console.log(fibb(1000).toString());
