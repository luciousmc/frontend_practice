import React from 'react';
import ReactDOM from 'react-dom';

function ListPokemon(props) {
  let pokemon = props.pokemon;
  let output = pokemon.map(val => {
    return (
      <li key={val['number']}>{val['name']}</li>
    );
  });
  return <ul>{output}</ul>;
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <ListPokemon pokemon={pokedex} />,
  document.getElementById('root')
);
