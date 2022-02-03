import { useEffect, useState } from 'react';
import { getPokemonFromGroup } from '../../lib/chainLogic';
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
        <SoloListItem key={name}>
          <PokeFigure name={name}></PokeFigure>
        </SoloListItem>
      ))}
    </SoloList>
  );
}

export default SoloBox;
