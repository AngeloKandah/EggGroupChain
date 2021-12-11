import { getChain } from './chain-logic.js';

function EggChain({ startEggGroup, finalEggGroup, genGraphs }) {
  const chain = getChain(startEggGroup, finalEggGroup, genGraphs);
  console.log(chain)

  return (
    <div>
      {/* <ul>
        {eggGroup1List.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
      <ul>
        {eggGroup2List.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
export default EggChain;
