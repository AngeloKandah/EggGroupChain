import './App.css';
import { useState } from 'react';
import { Dropdown } from './components/dropdown';
import { Chain } from './components/eggchain';
import { Header } from './components/header';
import { EggGroupContainer, GenerationContainer } from './App.style.js';
import { eggGroups, generations } from './lib/common.js';

function App() {
  const [startEggGroup, setStartEggGroup] = useState(0);
  const [finalEggGroup, setFinalEggGroup] = useState(0);
  const [generation, setGeneration] = useState(0);

  return (
    <div className='App'>
      <Header title='Egg Chain Calculator' />
      <GenerationContainer id='generationContainer'>
        <Dropdown state={setGeneration} dropdownEntries={generations} />
      </GenerationContainer>
      <EggGroupContainer id='eggGroupContainer'>
        <Dropdown state={setStartEggGroup} dropdownEntries={eggGroups} />
        <Dropdown state={setFinalEggGroup} dropdownEntries={eggGroups} />
      </EggGroupContainer>
      <Chain
        startEggGroup={startEggGroup}
        finalEggGroup={finalEggGroup}
        generation={generation}
        id='chain'
      />
    </div>
  );
}

export default App;
