import { ChainBox } from '../eggchain';
import { StyledRoutes, RouteNumber, RouteChain } from './Routes.style.js';

function Routes({ routeNumber, route, generation }) {
  return (
    <StyledRoutes id='routeContainer' data-cy={`route${routeNumber+1}`}>
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
              key={eggGroup}
            />
          )
        )}
      </RouteChain>
    </StyledRoutes>
  );
}

export default Routes;
