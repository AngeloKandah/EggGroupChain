import { useEffect, useState } from 'react';
import { getPokemonFromGroup } from '../../lib/chainLogic';
import { v4 as uuidv4 } from 'uuid';
import { PokeFigure } from '../figure';
import { SoloListItem, SoloList } from './SoloBox.style';

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
    <SoloList>
      {pokemon.map(({ name }) => (
        <SoloListItem key={uuidv4()}>
          <PokeFigure name={name}></PokeFigure>
        </SoloListItem>
      ))}
    </SoloList>
  );
}

export default SoloBox;
