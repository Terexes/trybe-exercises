const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(
  arr.sort(function (primeiroValor, segundoValor) {
    return primeiroValor - segundoValor;
  })
);

// saída: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
