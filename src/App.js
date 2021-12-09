import './App.css';
import { useState } from 'react';
import { Dropdown } from './components/dropdown';
import { EggChain } from './components/eggchain';
import { Header } from './components/header';
import { DropdownContainer } from './styles.js';

function App() {
  const [eggGroup1, setEggGroup1] = useState('Select Group');
  const [eggGroup2, setEggGroup2] = useState('Select Group');

  return (
    <div className='App'>
      <Header />
      <DropdownContainer id='dropdownContainer'>
        <Dropdown setEggGroup={setEggGroup1} />
        <Dropdown setEggGroup={setEggGroup2} />
      </DropdownContainer>
      <EggChain eggGroup1={eggGroup1} eggGroup2={eggGroup2} />
    </div>
  );
}

export default App;
