import ChainBox from './ChainBox.jsx';
import {
  RouteContainer,
  RouteNumber,
  RouteChain,
  EggRoutesContainer,
} from '../../styles';
import { getPaths } from '../../lib/chainLogic.js';
import { v4 as uuidv4 } from 'uuid';

function EggChain({ startEggGroup, finalEggGroup, generation }) {
  if (startEggGroup > -1 && finalEggGroup > -1) {
    const allPaths = getPaths(startEggGroup, finalEggGroup, generation);
    return (
      <EggRoutesContainer id='eggRoutes'>
        {allPaths.map((route, routeNumber) => {
          return (
            <RouteContainer key={uuidv4()} id='routeContainer'>
              <RouteNumber id='routeNumber'>
                <h1>{`Route ${routeNumber + 1}`}</h1>
              </RouteNumber>
              <RouteChain id='routeChain'>
                {route.map((eggGroup, index) =>
                  index === route.length - 1 ? null : (
                    <ChainBox 
                      group1Index={eggGroup}
                      D
                      group2Index={route[index + 1]}
                      generationIndex={generation}
                      key={uuidv4()}
                    />
                  )
                )}
              </RouteChain>
            </RouteContainer>
          );
        })}
      </EggRoutesContainer>
    );
  }
  return '';
}

export default EggChain;
