import { StyledChain } from './Chain.style.js';
import { EggRoutes } from '.';
import { Sidebar } from '../sidebar';

function Chain({ startEggGroup, finalEggGroup, generation }) {
  return (
    <StyledChain>
      <Sidebar group={startEggGroup} generation={generation} dataVal={'left'}/>
      <EggRoutes
        startEggGroup={startEggGroup}
        finalEggGroup={finalEggGroup}
        generation={generation}
      />
      <Sidebar group={finalEggGroup} generation={generation} dataVal={'right'}/>
    </StyledChain>
  );
}

export default Chain;
