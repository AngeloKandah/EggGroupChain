import { eggGroups, generations, matrices } from '../../lib/common.js';
const jsgraphs = require('js-graph-algorithms');

function getChain(startEggGroup, finalEggGroup, genGraphs) {
  const routes = new jsgraphs.Dijkstra(genGraphs, startEggGroup);
  if (routes.hasPathTo(finalEggGroup)) {
    const path = routes.pathTo(finalEggGroup);
    const visitedEggGroups = [startEggGroup];
    for (let i = 0; i < path.length; ++i) {
      const e = path[i];
      if (!visitedEggGroups.includes(e.to())) {
        visitedEggGroups.push(e.to());
      }
    }
    return visitedEggGroups;
  }
  return [];
}

function createGraph(version) {
  const data = require(`../../data/${version}.json`);
  const graph = new jsgraphs.WeightedDiGraph(Object.keys(data).length);
  Object.keys(data).forEach((eggGroup) => {
    Object.keys(data[eggGroup]).forEach((subGroup) => {
      graph.addEdge(
        new jsgraphs.Edge(
          eggGroups.indexOf(eggGroup),
          eggGroups.indexOf(subGroup),
          1
        )
      );
    });
  });
  return graph;
}

function getPokemonFromGroup(groupIndex, generationIndex) {
  const eggGroup = eggGroups[groupIndex];
  const gen = generations[generationIndex];
  const {
    pokemon_species: pokemonList,
  } = require(`../../data/${eggGroup}.json`);
  if (gen !== 'GenIV') {
    return pokemonList;
  }
  const noLongerGenIVIndex = pokemonList.findIndex(
    (pokemon) => pokemon.id > 493
  );
  const genIVList = pokemonList.slice(0, noLongerGenIVIndex);
  return genIVList;
}

//Output: array of arrays of routes;
//Index 0 being route 1, 1 being route 2...
//Rename to getPaths
//Rename routes -> group1Paths...
function getPokemonFromBothEggGroups(
  group1Index,
  group2Index,
  generationIndex
) {
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
    //Possible to refactor this? make it not mutate an array with push
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

console.log(getPokemonFromBothEggGroups(0, 14, 0));
console.log(getPokemonFromBothEggGroups(0, 1, 0));
console.log(getPokemonFromBothEggGroups(2, 4, 0));
console.log(getPokemonFromBothEggGroups(9, 13, 0));

export {
  getChain,
  createGraph,
  getPokemonFromGroup,
  getPokemonFromBothEggGroups,
};
