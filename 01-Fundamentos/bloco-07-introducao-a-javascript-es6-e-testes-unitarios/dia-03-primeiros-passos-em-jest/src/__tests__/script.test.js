const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require('../script.js');

//sum
describe('function sum() tests', () => {
  it('sum(4, 5) must be equal to 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('sum(0, 0) must be equal to 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Both parameters must have the type of Number', () => {
    expect(() => sum(4, '5')).toThrow();
    expect(() => sum(4, '5').toThrow('parameters must be numbers'));
  });
});

//myRemove
describe('function myRemove() tests', () => {
  it('retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

//myFizzBuzz
describe('function myFizzBuzz() tests', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () =>
    expect(myFizzBuzz(15)).toBe('fizzbuzz'));

  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });

  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('uma string')).toBe(false);
  });
});

// encode / decode
describe('Encode & decode functions tests', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('ana')).toBe('1n1');
    expect(encode('ele')).toBe('2l2');
    expect(encode('it')).toBe('3t');
    expect(encode('ovo')).toBe('4v4');
    expect(encode('uva')).toBe('5v1');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1n1')).toBe('ana');
    expect(decode('2l2')).toBe('ele');
    expect(decode('3t')).toBe('it');
    expect(decode('4v4')).toBe('ovo');
    expect(decode('5v1')).toBe('uva');
  });

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('trybe')).toBe('tryb2');
    expect(decode('b2Tryb2')).toBe('beTrybe');
    expect(encode('99 Problems')).toBe('99 Pr4bl2ms');
    expect(decode('99 Pr4bl2ms')).toBe('99 Problems');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('99 Problems').length).toEqual('99 Problems'.length);
    expect(decode('99 Pr4bl2ms').length).toEqual('99 Pr4bl2ms'.length);
  });
});

// Escrever a função de acordo com os testes:

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

// Escrever a função com base no teste:

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
