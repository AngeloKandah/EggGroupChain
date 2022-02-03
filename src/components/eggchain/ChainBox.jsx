import { useEffect, useState } from 'react';
import { getPokemonFromBothGroups } from '../../lib/chainLogic.js';
import { PokeFigure } from '../figure';
import { ChainList, ChainListItem } from './ChainBox.style.js';

function ChainBox({ group1Index, group2Index, generationIndex }) {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function getPoke() {
      const pokemonList = await getPokemonFromBothGroups(
        group1Index,
        group2Index,
        generationIndex
      );
      setPokemon(pokemonList);
    }
    getPoke();
  }, [group1Index, group2Index, generationIndex]);
  return (
    <ChainList id='chainList'>
      {pokemon.map((name) => (
        <ChainListItem key={name}>
          <PokeFigure name={name} />
        </ChainListItem>
      ))}
    </ChainList>
  );
}

export default ChainBox;
