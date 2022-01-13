import { useEffect, useState } from 'react';
import { getPokemonFromBothGroups } from '../../lib/chainLogic.js';
import { v4 as uuidv4 } from 'uuid';
import { ChainListItem, PokeImg } from '../../styles';

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
    <>
      {pokemon.map((name, index) => (
        <ChainListItem key={uuidv4()}>
          <PokeImg src={`sprites/${name}.png`} alt={`${name}`}></PokeImg>
          {`${name}\n`}
        </ChainListItem>
      ))}
    </>
  );
}

export default ChainBox;
