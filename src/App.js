import './App.css';
import { useState, useEffect } from 'react';
import { Dropdown } from './components/dropdown';
import { EggChain, createGraph } from './components/eggchain';
import { Header } from './components/header';
import { EggGroupContainer, GenerationContainer } from './styles.js';
import { eggGroups, generations } from './lib/common.js';

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
      <GenerationContainer id='generationContainer'>
        <Dropdown state={setGenToGraph} listOfValues={generations} />
      </GenerationContainer>
      <EggGroupContainer id='eggGroupContainer'>
        <Dropdown state={setEggGroup1} listOfValues={eggGroups} />
        <Dropdown state={setEggGroup2} listOfValues={eggGroups} />
      </EggGroupContainer>
      <EggChain
        startEggGroup={startEggGroup}
        finalEggGroup={finalEggGroup}
        genGraphs={genGraphs[genToGraph]}
        generation={genToGraph}
      />
    </div>
  );
}

export default App;
