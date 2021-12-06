let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
/*
1-)Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo
 seu nome.

 console.log(`Bem vinda, ${info.personagem}`);

 
2-) Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 
'Sim' e, em seguida, imprima o objeto no console.

info['recorrente'] = 'Sim';
console.log(info);

3-) Faça um for/in que mostre todas as chaves do objeto

for (let chaves in info) {
  console.log(chaves);
}

4-) Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for (let chaves in info) {
  console.log(info[chaves]);
}

5-)Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então,
 imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

 let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

*/

// 2
info['recorrente'] = 'Sim';

// 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let valor of (info, info2)) {
  if (info[valor] === info2[valor]) {
    console.log('ambos são recorrentes');
  } else {
    console.log(`${info[valor]} e ${info2[valor2]}`);
  }
}
