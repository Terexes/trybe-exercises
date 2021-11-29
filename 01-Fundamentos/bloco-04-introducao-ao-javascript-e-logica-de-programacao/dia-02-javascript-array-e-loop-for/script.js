let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1-) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
/*
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2-) Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let valores of numbers) {
  soma += valores;
}
console.log(soma)

// 3-)Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let soma = 0;
let media = 0;
for (let valores of numbers) {
  soma += valores;
}

media = soma / numbers.length;
console.log(media);

//4-) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log(media > 20 ? 'Valor maior que 20' : 'Valor menor ou igual a 20');


//5-) Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = 0;

for (let valor of numbers) {
  if (maior < valor) {
    maior = valor;
  }
}
console.log(`O maior valor é: ${maior}`);

//6-)Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
let contador = 0;

for (let valor of numbers) {
  if (valor % 2 !== 0) {
    contador++;
  }
}
console.log(`Há ${contador} número(s) ímpar(es)`);


// 7-) Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = 99999999;

for (let valor of numbers) {
  if (valor < menor) {
    menor = valor;
  }
}

console.log(`O menor valor é ${menor}`);

//8-) Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let arr = [];
for (let i = 1; i <= 25; i++) {
  arr.push(i);
}
console.log(arr);

// 9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let div of arr) {
  console.log(div / 2);
}
*/
