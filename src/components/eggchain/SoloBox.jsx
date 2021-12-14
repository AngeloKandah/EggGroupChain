import { getPokemonFromGroup } from './chain-logic';

function SoloBox({ groupIndex, generationIndex }) {
  const pokemon = getPokemonFromGroup(groupIndex, generationIndex);
  return <div>{pokemon.map((poke) => `${poke.name}\n`)}</div>;
}

export default SoloBox;
