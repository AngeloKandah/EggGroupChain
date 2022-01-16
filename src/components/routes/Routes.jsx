import { ChainBox } from '../eggchain';
import { v4 as uuidv4 } from 'uuid';
import { StyledRoutes, RouteNumber, RouteChain } from './Routes.style.js';

function Routes({ routeNumber, route, generation }) {
  return (
    <StyledRoutes key={uuidv4()} id='routeContainer'>
      <RouteNumber id='routeNumber'>
        <h1>{`Route ${routeNumber + 1}`}</h1>
      </RouteNumber>
      <RouteChain id='routeChain'>
        {route.map((eggGroup, index) =>
          index === route.length - 1 ? null : (
            <ChainBox
              group1Index={eggGroup}
              group2Index={route[index + 1]}
              generationIndex={generation}
              key={uuidv4()}
            />
          )
        )}
      </RouteChain>
    </StyledRoutes>
  );
}

export default Routes;
