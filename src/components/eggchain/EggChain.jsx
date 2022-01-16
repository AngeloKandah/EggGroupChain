import { getPaths } from '../../lib/chainLogic.js';
import { v4 as uuidv4 } from 'uuid';
import { Routes } from '../routes';
import { StyledEggRoutes } from './EggChain.style.js';

function EggChain({ startEggGroup, finalEggGroup, generation }) {
  const allPaths = getPaths(startEggGroup, finalEggGroup, generation);
  return (
    <StyledEggRoutes id='eggRoutes'>
      {allPaths.map((route, routeNumber) => {
        return (
          <Routes
            routeNumber={routeNumber}
            route={route}
            generation={generation}
            key={uuidv4()}
          />
        );
      })}
    </StyledEggRoutes>
  );
}

export default EggChain;
