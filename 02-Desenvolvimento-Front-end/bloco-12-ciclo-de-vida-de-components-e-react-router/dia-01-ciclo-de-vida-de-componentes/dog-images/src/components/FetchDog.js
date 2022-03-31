import React from 'react';
import './FetchDog.css';
import FavoriteDogs from './FavoriteDogs';

class FetchDog extends React.Component {
  constructor() {
    super();

    this.state = {
      dogPicture: '',
      loading: true,
      breed: '',
      favorites: [],
    };
  }

  fetchDog = () => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        this.setState({
          loading: false,
          dogPicture: data.message,
          breed: data.message.split('/')[4],
        });
        // alert(this.state.breed);
      }
    );
  };

  componentDidMount() {
    this.fetchDog();
  }

  renderImg = () => {
    const { dogPicture } = this.state;
    if (dogPicture.includes('terrier')) {
      return 'Pesquise novamente';
    } else {
      //
      return <img alt="dog" src={`${dogPicture}`}></img>;
    }
  };

  favoriteDog = () => {
    const { dogPicture } = this.state;
    this.setState((prevState) => ({
      favorites: [...prevState.favorites, dogPicture]
    }), () => console.log(this.state.favorites))
    
  };

  render() {
    const { loading, favorites } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div className="container">
        <div>{loading ? loadingElement : this.renderImg()}</div>
        <button type="button" onClick={this.fetchDog}>
          Outro doguinho
        </button>
        <FavoriteDogs favorites={favorites} handler={this.favoriteDog}/>
      </div>
    );
  }
}

export default FetchDog;
