function pulloutArray(array) {
  return array.reduce((acc, current) => acc.concat(current), []).filter(Number);
}

// пример использования функции
pulloutArray([1, 2, 3]); // return [1, 2, 3]
pulloutArray([]); // return []
pulloutArray([1, [2, 3, 4], 5]); // return [1, 2, 3, 4, 5]
pulloutArray([1, [2, 3, 4], 5, [1]]); // return [1, 2, 3, 4, 5, 1]
pulloutArray([1, [1], null, NaN, ['test']]); // return [1, 1]

// test console
console.log(pulloutArray([1, [1], null, NaN, ['test']])); // console show [1, 1]
