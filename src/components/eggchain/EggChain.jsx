import ChainBox from './ChainBox.jsx';
import {
  LI,
  UL,
  RouteContainer,
  RouteNumber,
} from './styles.js';
import { getPaths } from './chainLogic.js';
import { v4 as uuidv4 } from 'uuid';

//Turn the solobox into sticky sidebars when chosen
//

function EggChain({ startEggGroup, finalEggGroup, generation }) {
  if (startEggGroup > -1 && finalEggGroup > -1) {
    const allPaths = getPaths(startEggGroup, finalEggGroup, generation);
    return (
      <>
        {allPaths.map((route, routeNumber) => {
          return (
            <RouteContainer key={uuidv4()} id='routeContainer'>
              <RouteNumber>
                <h1>{`Route ${routeNumber + 1}`}</h1>
              </RouteNumber>
              <UL>
                {route.map((eggGroup, index) =>
                  index === route.length - 1 ? (
                    ''
                  ) : (
                    <LI key={uuidv4()}>
                      <ChainBox
                        group1Index={eggGroup}
                        D
                        group2Index={route[index + 1]}
                        generationIndex={generation}
                      />
                    </LI>
                  )
                )}
              </UL>
            </RouteContainer>
          );
        })}
      </>
    );
  }
  return '';
}

export default EggChain;
