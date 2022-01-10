import { useEffect, useState } from 'react';
import { getPokemonFromBothGroups } from './chainLogic';

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

  return <>{pokemon.map((name) => `${name}\n`)}</>;
}

export default ChainBox;
