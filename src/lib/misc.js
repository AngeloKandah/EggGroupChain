// This was all used to create the GenIV/VIII.json copy paste
/* const visitedEggGroups = {
    Monster: {},
    Water1: {},
    Bug: {},
    Flying: {},
    Field: {},
    Fairy: {},
    Grass: {},
    'Human-like': {},
    Water3: {},
    Mineral: {},
    Amorphous: {},
    Water2: {},
    Ditto: {},
    Dragon: {},
    Undiscovered: {},
  };

  eggGroups.forEach((firstGroup) => {
    //const sharedPokes = [];
    const {
      pokemon_species: firstGroupList,
    } = require(`../../data/${firstGroup}.json`);
    const firstGroupNames = convertJsonToName(firstGroupList);
    eggGroups.forEach((secondGroup) => {
      if (secondGroup === firstGroup) {
        return;
      }
      const {
        pokemon_species: secondGroupList,
      } = require(`../../data/${secondGroup}.json`);
      const secondGroupNames = convertJsonToName(secondGroupList);

      const secondGroupNum = convertJsonToUrl(secondGroupList);

      const sharedPokes = [];
      secondGroupNames.forEach((pokemon, index) => {
        const num = secondGroupNum[index].split(`https://pokeapi.co/api/v2/pokemon-species/`);
        const realNum = num[1].split('/')
        if(parseInt(realNum[0]) > 493){
          return;
        }
        if (firstGroupNames.includes(pokemon)) {
          sharedPokes.push(pokemon);
          visitedEggGroups[firstGroup][secondGroup] = [...sharedPokes];
        }
      });
    });
  });
  console.log(JSON.stringify(visitedEggGroups)); */

/* function convertJsonToName(egg) {
  return egg.map(({ name }) => name);
}

function convertJsonToUrl(egg) {
  return egg.map(({ url }) => url);
} */

/* const GenVIII = [
  //Mon, Wa1, Bug, Fly, Fld, Fay, Grs, Hum, Wa3, Min, Amo, Wa2, Dit, Drg, Und
  [   0,   1,   2,   2,   1,   2,   1,   2,   2,   2,   2,   2,   0,   1,   0], //Mon
  [   1,   0,   1,   1,   1,   1,   1,   2,   1,   2,   1,   1,   0,   1,   0], //Wa1
  [   2,   1,   0,   2,   2,   1,   1,   1,   1,   1,   2,   2,   0,   2,   0], //Bug
  [   2,   1,   2,   0,   1,   1,   2,   2,   1,   2,   2,   2,   0,   1,   0], //Fly
  [   1,   1,   2,   1,   0,   1,   1,   1,   2,   2,   2,   1,   0,   1,   0], //Fld
  [   2,   1,   1,   1,   1,   0,   1,   2,   2,   1,   1,   2,   0,   2,   0], //Fay
  [   1,   1,   1,   2,   1,   1,   0,   1,   2,   1,   1,   2,   0,   2,   0], //Grs
  [   2,   2,   1,   2,   1,   2,   1,   0,   2,   2,   2,   2,   0,   2,   0], //Hum
  [   2,   1,   1,   1,   2,   2,   2,   2,   0,   2,   2,   2,   0,   2,   0], //Wa3
  [   2,   2,   1,   2,   2,   1,   1,   2,   2,   0,   1,   3,   0,   3,   0], //Min
  [   2,   1,   2,   2,   2,   1,   1,   2,   2,   1,   0,   2,   0,   2,   0], //Amo
  [   2,   1,   2,   2,   1,   2,   2,   2,   2,   3,   2,   0,   0,   1,   0], //Wa2
  [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0], //Dit
  [   1,   1,   2,   1,   1,   2,   2,   2,   2,   3,   2,   1,   0,   0,   0], //Drg
  [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0], //Und
]; */

// This was used to create the 2D arrays.
/* function idk(genGraphs) {
  let g = [];
  for (let i = 0; i < eggGroups.length; i++) {
    const routes = new jsgraphs.Dijkstra(genGraphs, i);
    const f = [];
    for (let j = 0; j < eggGroups.length; j++) {
      if (routes.hasPathTo(j)) {
        f.push(routes.distanceTo(j));
      } else {
        f.push(0);
      }
    }
    g[i] = [...f];
  }
  return g;
} */

// GenVIII
/* [0, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 0, 1, 0],
[1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 0, 1, 0],
[2, 1, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 0, 2, 0],
[2, 1, 2, 0, 1, 1, 2, 2, 1, 2, 2, 2, 0, 1, 0],
[1, 1, 2, 1, 0, 1, 1, 1, 2, 2, 2, 1, 0, 1, 0],
[2, 1, 1, 1, 1, 0, 1, 2, 2, 1, 1, 2, 0, 2, 0],
[1, 1, 1, 2, 1, 1, 0, 1, 2, 1, 1, 2, 0, 2, 0],
[2, 2, 1, 2, 1, 2, 1, 0, 2, 2, 2, 2, 0, 2, 0],
[2, 1, 1, 1, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 0],
[2, 2, 1, 2, 2, 1, 1, 2, 2, 0, 1, 3, 0, 3, 0],
[2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 0, 2, 0, 2, 0],
[2, 1, 2, 2, 1, 2, 2, 2, 2, 3, 2, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 2, 1, 1, 2, 2, 2, 2, 3, 2, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] */

// GenIV
/* [0, 1, 2, 2, 1, 2, 1, 2, 2, 3, 2, 2, 0, 1, 0],
[1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 0, 1, 0],
[2, 1, 0, 2, 2, 2, 1, 1, 1, 3, 2, 2, 0, 2, 0],
[2, 1, 2, 0, 1, 1, 2, 2, 2, 2, 2, 2, 0, 1, 0],
[1, 1, 2, 1, 0, 1, 1, 1, 2, 2, 2, 1, 0, 1, 0],
[2, 1, 2, 1, 1, 0, 1, 2, 2, 1, 1, 2, 0, 2, 0],
[1, 1, 1, 2, 1, 1, 0, 1, 2, 2, 2, 2, 0, 2, 0],
[2, 2, 1, 2, 1, 2, 1, 0, 2, 3, 3, 2, 0, 2, 0],
[2, 1, 1, 2, 2, 2, 2, 2, 0, 3, 2, 2, 0, 2, 0],
[3, 2, 3, 2, 2, 1, 2, 3, 3, 0, 2, 3, 0, 3, 0],
[2, 1, 2, 2, 2, 1, 2, 3, 2, 2, 0, 2, 0, 2, 0],
[2, 1, 2, 2, 1, 2, 2, 2, 2, 3, 2, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 2, 1, 1, 2, 2, 2, 2, 3, 2, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] */

// const jsgraphs = require('js-graph-algorithms');

/* function getChain(startEggGroup, finalEggGroup, genGraphs) {
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
} */

/* function createGraph(version) {
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
} */
