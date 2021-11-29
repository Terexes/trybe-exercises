/*
1-) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)

2-) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

3-) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

4-) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

5-)Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

*/
//1
function operadores(operador, a, b) {
  switch (operador) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    default:
      return 'Informe uma operação válida';
  }
}

//2
function maiorEntreDois(a, b) {
  if (a > b) {
    return `${a} é o maior número`;
  } else {
    return `${b} é o maior número`;
  }
}

// 3
function maiorEntreTres(a, b, c) {
  if (a > b && a > c) {
    return `${a} é o maior número`;
  } else if (b > a && b > c) {
    return `${b} é o maior número`;
  } else {
    return `${c} é o maior número`;
  }
}

// 4
function checaValor(a) {
  if (a > 0) {
    return 'positive';
  } else if (a < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

//5
function checaTriangulo(a,b,c) {
  if (a < 0 || b < 0 || c < 0) {
    return `O angulo ${}`
  }
}