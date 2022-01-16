import { StyledChain } from './Chain.style.js';
import { EggChain } from './';
import { Sidebar } from '../sidebar';

function Chain({ startEggGroup, finalEggGroup, generation }) {
  return (
    <StyledChain>
      <Sidebar 
        group={startEggGroup}
        generation={generation} 
      />
      <EggChain
        startEggGroup={startEggGroup}
        finalEggGroup={finalEggGroup}
        generation={generation}
      />
      <Sidebar 
        group={finalEggGroup}
        generation={generation} />
    </StyledChain>
  );
}

export default Chain;
