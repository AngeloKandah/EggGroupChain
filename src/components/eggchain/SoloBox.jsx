import { useEffect, useState } from 'react';
import { getPokemonFromGroup } from './chainLogic';

function SoloBox({ groupIndex, generationIndex }) {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function getPoke() {
      const pokemonList = await getPokemonFromGroup(
        groupIndex,
        generationIndex
      );
      setPokemon(pokemonList);
    }
    getPoke();
  }, [groupIndex, generationIndex]);
  
  return <>{pokemon.map((poke) => `${poke.name}\n`)}</>;
}

export default SoloBox;
