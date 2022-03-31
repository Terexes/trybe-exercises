const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const randomBtn = document.getElementById('random');
const colorText = document.getElementById('value');
const container = document.getElementById('container');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const nextColor = () =>
  store.dispatch({
    type: 'NEXT',
  });

const previousColor = () => {
  store.dispatch({
    type: 'PREVIOUS',
  });
};

const criarCor = () => {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
};

const randomColor = () => {
  store.dispatch({
    type: 'RANDOM',
  });
};

// Reducer da aplicação:
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case 'RANDOM':
      const color = criarCor();
      state.colors.push(color);
      return {
        ...state,
        index: state.colors.indexOf(color),
      };
    default:
      return state;
  }
};

// 1 - Criar o store da aplicação:
const store = Redux.createStore(reducer);

nextBtn.addEventListener('click', nextColor);
previousBtn.addEventListener('click', previousColor);
randomBtn.addEventListener('click', randomColor);

store.subscribe(() => {
  const { colors, index } = store.getState();
  colorText.innerHTML = colors[index];
  // container.style.backgroundColor = colors[index];
});
