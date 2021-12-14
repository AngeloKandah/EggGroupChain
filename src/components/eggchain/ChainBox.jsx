import { getPokemonFromBothEggGroups } from './chain-logic';

function ChainBox({ group1Index, group2Index, generationIndex }) {
  const pokemon = getPokemonFromBothEggGroups(group1Index, group2Index, generationIndex);
  return <div>{pokemon.map((poke) => `${poke}\n`)}</div>;
}

export default ChainBox;
