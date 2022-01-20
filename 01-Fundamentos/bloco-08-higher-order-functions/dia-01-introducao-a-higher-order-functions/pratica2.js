const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const sorteio = (aposta) => {
  const rdnNmbr = randomInterval(1, 5);
  console.log(aposta, rdnNmbr);
  return rdnNmbr === aposta ? 'Você ganhou!' : 'Tente novamente';
};
