const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'PRIMEIRO':
      return {
        ...state,
        nome: 'Maria',
        sobrenome: 'de Jesus',
      };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'SEGUNDO':
      return {
        ...state,
        nome: 'teste',
        sobrenome: '123',
      };
    default:
      return state;
  }
};

const alterarPrimeiroNome = () =>
  store.dispatch({
    type: 'PRIMEIRO',
  });

const alterarSegundoNome = () =>
  store.dispatch({
    type: 'SEGUNDO',
  });

// Combinar os reducers existentes.
const reducers = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer });

// Criar store com os reducers combinados
const store = Redux.createStore(reducers);

window.onload = () => {
  setTimeout(() => {
    alterarPrimeiroNome(), alterarSegundoNome();
  }, 3000);
};

store.subscribe(() => {
  const primeiroNome = document.getElementById('nome-1');
  const primeiroSobrenome = document.getElementById('sobrenome-1');
  const segundoNome = document.getElementById('nome-2');
  const segundoSobrenome = document.getElementById('sobrenome-2');
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
  primeiroNome.innerHTML = meuPrimeiroReducer.nome;
  primeiroSobrenome.innerHTML = meuPrimeiroReducer.sobrenome;
  segundoNome.innerHTML = meuSegundoReducer.nome;
  segundoSobrenome.innerHTML = meuSegundoReducer.sobrenome;
});
