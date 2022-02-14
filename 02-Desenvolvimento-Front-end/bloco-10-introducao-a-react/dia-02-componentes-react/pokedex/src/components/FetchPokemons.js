import pokemons from './data';
import './Pokedex.css';

function FetchPokemons() {
  return pokemons.map((pokemon) => (
    <div className="pokemon">
      <div>
        <p>{`Name: ${pokemon.name}`}</p>
        <p>{`Type: ${pokemon.type}`}</p>
        <p>
          {`Average weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}
        </p>
      </div>
      <div>
        <img src={pokemon.image} alt={`${pokemon.name} flashart`}></img>
      </div>
    </div>
  ));
}

export default FetchPokemons;
