import React from 'react';

class DadJokes extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }

  async fetchJoke() {
    // Lógica fetch
    this.setState(
      { loading: true }, // primeiro parâmetro da setState
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } };
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
        const requestObj = await requestReturn.json();
        this.setState({
          jokeObj: requestObj,
          loading: false,
        });
      }
    );
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    // salvar as piadas em um array
    /*
      this.setState(({storedJokes,jokeObj}) => ({
        storedJokes: [...storedJokes, jokeObj]
      }))
    */
    this.setState((prevState) => ({
      storedJokes: [...prevState.storedJokes, prevState.jokeObj],
    }));
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (
            <p key={id}>{joke}</p>
          ))}
        </span>

        <span>{loading ? loadingElement : this.renderJokeElement()}</span>
      </div>
    );
  }
}

export default DadJokes;
