const adicionaChave = (obj, nomeChave, valorChave) => {
  obj[nomeChave] = valorChave;
};

const pessoa = {
  profissao: 'Estudante',
  idade: 28
};

console.log(pessoa);

adicionaChave(pessoa, 'nome', 'John');

console.log(pessoa);
