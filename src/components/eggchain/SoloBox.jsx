import { useEffect, useState } from 'react';
import { getPokemonFromGroup } from '../../lib/chainLogic';
import { v4 as uuidv4 } from 'uuid';
import { SoloListItem } from '../../styles';
import { PokeFigure } from '../figure'

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
      {pokemon.map(({ name }) => (
        <SoloListItem key={uuidv4()}>
          <PokeFigure name={name}></PokeFigure>
        </SoloListItem>
      ))}
    </>
  );
}

export default SoloBox;
