let n = 5;

/* 1-) Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let sequencia = '';

for (let i = 1; i < n; i++) {
  let sequencia = '';
  for (let j = 0; j < n; j++) {
    sequencia += '*';
  }
  console.log(sequencia);
}

2-) Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
Por exemplo:
*
**
***
****
*****

let n = 5;
let sequencia = '';
for (let i = 0; i < n; i++) {
  sequencia += '*';
  console.log(sequencia);
}


3-) Agora inverta o lado do triângulo. Por exemplo:
    *
   **
  ***
 ****
*****

let sequencia = '';
let aux = n;

for (let i = 1; i <= n; i++) {
  sequencia = '';
  for (let j = 0; j < aux; j++) {
    sequencia += ' ';
  }
  for (let k = 0; k < i; k++) {
    sequencia += '*';
  }

  console.log(sequencia);
  aux--;
}

*/

n = 5;

for (let i = 1; i <= n; i += 2) {
  let line = '';
  for (let s = 0; s < Math.ceil((n - i) / 2); s++) {
    line += ' ';
  }
  for (let c = 0; c < i; c++) {
    line += '*';
  }
  console.log(line);
}
