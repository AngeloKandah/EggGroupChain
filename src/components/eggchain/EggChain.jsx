import { getChain } from './chain-logic.js';

function EggChain({ eggGroup1, eggGroup2 }) {
  const g = getChain(eggGroup1, eggGroup2);

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
