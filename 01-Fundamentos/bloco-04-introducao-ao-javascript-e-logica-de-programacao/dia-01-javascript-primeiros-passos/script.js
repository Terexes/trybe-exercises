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

6-) Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

7 -) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

8-) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

9-) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

10-) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)

11-) Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

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
function checaTriangulo(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    return `Valor inválido informado`;
  }
  return a + b + c == 180 ? true : false;
}

// 6

function movXadrez(peca) {
  switch (peca) {
    case 'rei':
      return 'O rei  pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.';
    case 'rainha':
      return 'A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.';
    case 'bispo':
      return 'O bispo move-se ao longo da diagonal. Não pode pular outras peças.';
    case 'cavalo':
      return 'É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.';
    case 'torre':
      return 'A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.';
    case 'peao':
      return 'O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.';
    default:
      return 'Informe uma peça válida.';
      break;
  }
}

// 7
function checaNota(nota) {
  if (nota > 100 || nota < 0) {
    return 'Informe um valor válido.';
  }
  if (nota >= 90) {
    return 'A';
  } else if (nota >= 80) {
    return 'B';
  } else if (nota >= 70) {
    return 'C';
  } else if (nota >= 60) {
    return 'D';
  } else if (nota >= 50) {
    return 'E';
  } else if (nota < 50) {
    return 'F';
  }
}

// 8
function checaPar(a, b, c) {
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 9
function checaImpar(a, b, c) {
  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

//10
function calcLucro(custo, valorDeVenda) {
  if (custo < 0 || valorDeVenda < 0) {
    return 'Informe valores válidos.';
  }
  let valorCustoTotal = custo + custo * 0.2;
  let lucro = valorDeVenda - valorCustoTotal;
  // Cálculo para 1000 un.
  valorCustoTotal *= 1000;
  lucro *= 1000;
  if (lucro < valorCustoTotal) {
    return 'Prejuízo';
  } else {
    return 'Lucro';
  }
}

function calcSalarioLiquido(salarioBruto) {
  let aliquotaInss = 0;
  let aliquotaIR = 0;
  let salarioBase = 0;

  //INSS:

  if ((salarioBruto > 5189, 82)) {
    aliquotaInss = 570.88;
  } else if (salarioBruto <= 5189.82 && salarioBruto >= 2594.93) {
    aliquotaInss = salarioBruto * 0.11;
  } else if (salarioBruto <= 2594.92 && salarioBruto >= 1556.95) {
    aliquotaInss = salarioBruto * 0.09;
  } else {
    aliquotaInss = salarioBruto * 0.08;
  }
  salarioBase = salarioBruto - aliquotaInss;

  //IR

  if (salarioBase > 4664.68) {
    aliquotaIR = salarioBase * 0.275 - 869.36;
  } else if (salarioBase <= 4664.68 && salarioBase >= 3751.06) {
    aliquotaIR = salarioBase * 0.225 - 636.13;
  } else if (salarioBase <= 3751.05 && salarioBase >= 2826.66) {
    aliquotaIR = salarioBase * 0.15 - 354.8;
  } else if (salarioBase <= 2826.65 && salarioBase >= 1903.99) {
    aliquotaIR = salarioBase * 0.075 - 142.8;
  } else {
    aliquotaIR = 0;
  }

  return (salarioBase - aliquotaIR).toFixed(2);
}
