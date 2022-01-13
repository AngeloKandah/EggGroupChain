import { useEffect, useState } from 'react';
import { getPokemonFromGroup } from '../../lib/chainLogic';
import { v4 as uuidv4 } from 'uuid';
import { PokeImg, SoloListItem } from '../../styles';

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

  return (
    <>
      {pokemon.map((poke) => (
        <SoloListItem key={uuidv4()}>
          <PokeImg
            src={`sprites/${poke.name}.png`}
            alt={`${poke.name}`}
          ></PokeImg>
          {`${poke.name.charAt(0).toUpperCase()}${poke.name.slice(1)}`}
        </SoloListItem>
      ))}
    </>
  );
}

export default SoloBox;
