import './App.css';
import { useState } from 'react';
import { Dropdown } from './components/dropdown';
import { EggChain } from './components/eggchain';
import { Header } from './components/header';
import {
  EggGroupContainer,
  GenerationContainer,
  ChainContainer,
  EggRoutesContainer,
  RightSidebar,
  LeftSidebar,
} from './styles';
import { Sidebar } from './components/sidebar';
import { eggGroups, generations } from './lib/common.js';

function App() {
  const [startEggGroup, setEggGroup1] = useState(-1);
  const [finalEggGroup, setEggGroup2] = useState(-1);
  const [generation, setGenToGraph] = useState(0);

  return (
    <div className='App'>
      <Header title='Egg Chain Calculator' />
      <GenerationContainer id='generationContainer'>
        <Dropdown state={setGenToGraph} listOfValues={generations} />
      </GenerationContainer>
      <EggGroupContainer id='eggGroupContainer'>
        <Dropdown state={setEggGroup1} listOfValues={eggGroups} />
        <Dropdown state={setEggGroup2} listOfValues={eggGroups} />
      </EggGroupContainer>
      <ChainContainer id='chainContainer'>
        <LeftSidebar id='eggGroup1'>
          <Sidebar group={startEggGroup} generation={generation} />
        </LeftSidebar>
        <EggRoutesContainer id='eggRoutes'>
          <EggChain
            startEggGroup={startEggGroup}
            finalEggGroup={finalEggGroup}
            generation={generation}
          />
        </EggRoutesContainer>
        <RightSidebar id='eggGroup2'>
          <Sidebar group={finalEggGroup} generation={generation} />
        </RightSidebar>
      </ChainContainer>
    </div>
  );
}

export default App;
