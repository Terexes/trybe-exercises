

const Redux = require('redux');
// função para realizar alterações no state (action)
const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

// setando o estado inicial + a store do redux
const ESTADO_INICIAL = {
  login: false,
  email: '',
};
const reducer = (state = ESTADO_INICIAL, action) => {
  // análise da action para realizar alterações no state seguindo de acordo com os types.
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};
const store = Redux.createStore(reducer);
store.dispatch(fazerLogin('teste@teste.com'));
// console.log(store.getState()); // { login: true, email: 'teste@teste.com' }
