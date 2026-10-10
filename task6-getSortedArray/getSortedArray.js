
function getSortedArray(array, key) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = array[i];
  }
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[j][key] < result[i][key]) {
        const tmp = result[i];
        result[i] = result[j];
        result[j] = tmp;
      }
    }
  }
  return result;
}


const data = [
  { name: 'banana', price: 3 },
  { name: 'apple', price: 1 },
  { name: 'cherry', price: 2 },
];
console.log(getSortedArray(data, 'price'));
