import { useEffect, useState } from 'react';
import { getPokemonFromBothGroups } from '../../lib/chainLogic.js';
import { v4 as uuidv4 } from 'uuid';
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
    <ChainList id='chainList'
      key={uuidv4()}>
      {pokemon.map((name) => (
        <ChainListItem key={uuidv4()}>
          <PokeFigure name={name} />
        </ChainListItem>
      ))}
    </ChainList>
  );
}

export default ChainBox;
