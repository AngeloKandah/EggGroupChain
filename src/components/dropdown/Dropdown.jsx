import { eggGroups } from '../../lib/eggGroups.js';
import { Select } from './styles.js'

function Dropdown({ setEggGroup }) {
  return (
    <Select
      onChange={(e) => setEggGroup(e.target.value)}
      name='selectEggGroup'
      id='selectEggGroup'
    >
      <option value={"Select Group"} key={"Select Group"}>
        Select Group
      </option>
      {eggGroups.map((group) => (
        <option value={group} key={group}>
          {group}
        </option>
      ))}
    </Select>
  );
}

export default Dropdown;
