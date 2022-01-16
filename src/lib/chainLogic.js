import { eggGroups, generations, matrices } from './common.js';

async function getPokemonFromGroup(groupIndex, generationIndex) {
  const eggGroup = eggGroups[groupIndex];
  const gen = generations[generationIndex];
  const {
    pokemon_species: pokemonList,
  } = await import(`../data/${eggGroup}.json`);
  if (gen !== 'GenIV') {
    return pokemonList;
  }
  const noLongerGenIVIndex = pokemonList.findIndex(
    (pokemon) => pokemon.id > 493
  );
  const genIVList = pokemonList.slice(0, noLongerGenIVIndex);
  return genIVList;
}

async function getPokemonFromBothGroups(group1Index, group2Index, generationIndex) {
  const eggGroup1 = eggGroups[group1Index];
  const eggGroup2 = eggGroups[group2Index];
  const gen = generations[generationIndex];
  const {
    [eggGroup1]: { [eggGroup2]: pokemonList },
  } = await import(`../data/${gen}.json`);
  return pokemonList;
}

function getPaths(group1Index, group2Index, generationIndex) {
  const gen = matrices[generationIndex];
  if (gen[group1Index][group2Index] === 1) {
    return [[group1Index, group2Index]];
  } else if (gen[group1Index][group2Index] === 2) {
    const { group1Paths, group2Paths } = getConnectedNodes(
      group1Index,
      group2Index,
      gen
    );
    return group1Paths
      .filter((node) => group2Paths.includes(node))
      .map((node) => [group1Index, node, group2Index]);
  } else if (gen[group1Index][group2Index] === 3) {
    const { group1Paths, group2Paths } = getConnectedNodes(
      group1Index,
      group2Index,
      gen
    );
    const fourNodeRoutes = [];
    group1Paths.forEach((node1) => {
      group2Paths.forEach((node2) => {
        if (gen[node1][node2] === 1) {
          fourNodeRoutes.push([group1Index, node1, node2, group2Index]);
        }
      });
    });
    return fourNodeRoutes;
  }
  return [[]];
}

function getConnectedNodes(group1Index, group2Index, gen) {
  const group1Paths = [];
  const group2Paths = [];
  for (let i = 0; i < eggGroups.length; i++) {
    if (gen[i][group1Index] === 1) {
      group1Paths.push(i);
    }
    if (gen[i][group2Index] === 1) {
      group2Paths.push(i);
    }
  }
  return { group1Paths, group2Paths };
}

export {
  getPokemonFromGroup,
  getPokemonFromBothGroups,
  getPaths,
};
