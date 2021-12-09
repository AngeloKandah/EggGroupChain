import { eggGroups } from '../../lib/eggGroups.js';

function getChain(eggGroup1, eggGroup2) {
  if (!eggGroups.includes(eggGroup1) || !eggGroups.includes(eggGroup2)) {
    return 'Both Categories Not Selected';
  }
  const {
    pokemon_species: eggGroup1List,
  } = require(`../../data/${eggGroup1}.json`);
  const {
    pokemon_species: eggGroup2List,
  } = require(`../../data/${eggGroup2}.json`);

  const idk = eggGroup1List.map(({name}) => name)
  const idk2 = eggGroup2List.map(({name}) => name)
  console.log(idk, idk2)

  return { eggGroup2List };
}

export { getChain };
