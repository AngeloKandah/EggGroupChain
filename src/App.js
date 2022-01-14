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
  SidebarContainer,
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
        <SidebarContainer id='eggGroup1'>
          <Sidebar group={startEggGroup} generation={generation} />
        </SidebarContainer>
        <EggRoutesContainer id='eggRoutes'>
          <EggChain
            startEggGroup={startEggGroup}
            finalEggGroup={finalEggGroup}
            generation={generation}
          />
        </EggRoutesContainer>
        <SidebarContainer id='eggGroup2'>
          <Sidebar group={finalEggGroup} generation={generation} />
        </SidebarContainer>
      </ChainContainer>
    </div>
  );
}

export default App;
