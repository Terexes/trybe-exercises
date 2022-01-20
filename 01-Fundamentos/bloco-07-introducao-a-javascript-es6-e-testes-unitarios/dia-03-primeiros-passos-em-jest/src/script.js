function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(encode) {
  let result = encode.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');

  return result;
}

function decode(decode) {
  let result = decode.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return result;
}

function techList(arrTechs, name) {
  if (arrTechs.length === 0) {
    return 'Vazio!';
  }
  const sortedTechs = arrTechs.sort();
  const listOfObj = [];
  for (const technology of sortedTechs) {
    listOfObj.push({
      tech: technology,
      name: name,
    });
  }
  return listOfObj;
}

function hydrate(str) {
  const regex = /\d+/g;
  const numbers = str.match(regex);
  let soma = 0;
  for (let valor of numbers) {
    soma += parseInt(valor);
  }
  if (soma === 1) {
    return '1 copo de água';
  } else {
    return `${soma} copos de água`;
  }
}

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
};
