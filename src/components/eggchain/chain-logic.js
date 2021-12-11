import { eggGroups } from '../../lib/eggGroups.js';
const jsgraphs = require('js-graph-algorithms');

function getChain(startEggGroup, finalEggGroup, genGraphs) {
  if (startEggGroup === -1 || finalEggGroup === -1) {
    return 'Both Groups Not Selected';
  }
  const routes = new jsgraphs.Dijkstra(genGraphs, startEggGroup);
  if (routes.hasPathTo(finalEggGroup)) {
    const path = routes.pathTo(finalEggGroup);
    const visitedEggGroups = [eggGroups[startEggGroup]];
    for (let i = 0; i < path.length; ++i) {
      const e = path[i];
      if (!visitedEggGroups.includes(e.to())) {
        visitedEggGroups.push(eggGroups[e.to()]);
      }
    }
    return visitedEggGroups;
  }

  return 'No Path';
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

export { getChain, createGraph };
