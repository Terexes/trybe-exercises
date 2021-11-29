let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arr = [];
let tamanhoArr = numbers.length;
/*
// sorting crescente
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

// sorting decrescente
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
*/
//Novo array onde cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte
for (let i = 0; i < numbers.length; i++) {
  if (i == tamanhoArr - 1) {
    arr.push(numbers[i] * 2);
  } else {
    arr.push(numbers[i] * numbers[i + 1]);
  }
}
