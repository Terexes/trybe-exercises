const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const autorNascidoEm1947 = books.find((book) => book.author.birthYear === 1947).author.name;

// Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || nameBook.length > book.name.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}

// Encontre o primeiro livro cujo nome possui 26 caracteres.
const nomeCom26Chars = books.find((book) => book.name.length === 26);

// Ordene os livros por data de lançamento em ordem decrescente.

const dataPubCrescente = books.sort(function (a, b) {
  return a.releaseYear - b.releaseYear;
});

const dataPubDecrescente = books.sort(function (a, b) {
  return b.releaseYear - a.releaseYear;
});

// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const secXX = books.every(
  (books) => books.author.birthYear > 1901 && books.author.birthYear <= 2000
);

// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const secXVIII = books.some((books) => books.releaseYear > 1701 && books.releaseYear <= 1800);

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const compararNascimento = books.every((book) => {
  //some retornará true, logo, !some, fará o retorno ser false
  !books.some((bookSome) => {
    console.log(bookSome.author.name, book.author.name);
    bookSome.author.birthYear === book.author.birthYear &&
      bookSome.author.name !== book.author.name;
  });
});
console.log(compararNascimento);
