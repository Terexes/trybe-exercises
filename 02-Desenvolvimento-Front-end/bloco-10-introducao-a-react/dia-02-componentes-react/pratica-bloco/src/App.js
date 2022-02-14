// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './components/Order';

class App extends React.Component {
  render() {
    const products = [
      {
        id: 102,
        user: 'cena@gmail.com',
        product: 'Razer Headphone',
        price: {
          value: 99.99,
          currency: 'dollars',
        },
      },
      {
        id: 77,
        user: 'cena@gmail.com',
        product: 'Monster 500mL',
        price: {
          value: 9.99,
          currency: 'dollars',
        },
      },
    ];

    return products.map((product) => (
      <>
        <Order order={product}></Order>
      </>
    ));

    /*
      <div className="App">
        <h1> Orders recently created </h1>
        <Order order={headphone}></Order>
        <Order order={energyDrink}></Order>
      </div>
      */
  }
}

export default App;
/*
import './App.css';
import RenderImage from './components/Image';

function App() {
  return (
    <>
      <RenderImage
        source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
        alt="Cute cat staring"></RenderImage>
    </>
  );
}

export default App;
*/
