import './App.css';
import { useState, useEffect } from 'react';
import { Dropdown } from './components/dropdown';
import { EggChain, createGraph } from './components/eggchain';
import { Header } from './components/header';
import { EggGroupContainer, GenerationContainer } from './styles.js';
import { eggGroups } from './lib/eggGroups.js';

function App() {
  const [startEggGroup, setEggGroup1] = useState(-1);
  const [finalEggGroup, setEggGroup2] = useState(-1);
  const [genToGraph, setGenToGraph] = useState(0);
  const [genGraphs, setGenGraphs] = useState([]);

  useEffect(() => {
    setGenGraphs([createGraph('GenVIII'), createGraph('GenIV')]);
  }, []);

  return (
    <div className='App'>
      <Header />
      <GenerationContainer>
        <Dropdown state={setGenToGraph} listOfValues={['GenVIII', 'GenIV']}/>
      </GenerationContainer>
      <EggGroupContainer id='dropdownContainer'>
        <Dropdown state={setEggGroup1} listOfValues={eggGroups} />
        <Dropdown state={setEggGroup2} listOfValues={eggGroups} />
      </EggGroupContainer>
      <EggChain
        startEggGroup={startEggGroup}
        finalEggGroup={finalEggGroup}
        genGraphs={genGraphs[genToGraph]}
      />
    </div>
  );
}

export default App;
