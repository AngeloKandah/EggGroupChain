import { getChain } from './chain-logic.js';
import ChainBox from './ChainBox.jsx';
import SoloBox from './SoloBox.jsx';

function EggChain({ startEggGroup, finalEggGroup, genGraphs, generation }) {
  if (startEggGroup > -1 && finalEggGroup > -1) {
    const chain = getChain(startEggGroup, finalEggGroup, genGraphs);
    return (
      <ul id='eggChain'>
        <li>
          <SoloBox groupIndex={startEggGroup} generationIndex={generation} />
        </li>
        {chain.map((group, index) =>
          index === (chain.length-1) ? (
            ''
          ) : (
            <li key={group}>
              <ChainBox
                group1Index={group}
                group2Index={chain[index+1]}
                generationIndex={generation}
              />
            </li>
          )
        )}
        <li>
          <SoloBox groupIndex={finalEggGroup} generationIndex={generation} />
        </li>
      </ul>
    );
  }
  return '';
}

export default EggChain;
