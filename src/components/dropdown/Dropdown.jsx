import { Select } from './styles.js';

function Dropdown({ state, listOfValues }) {
  return (
    <Select
      onChange={(e) =>
        e.target.length > 2
          ? state(e.target.selectedIndex - 1)
          : state(e.target.selectedIndex)
      }
      name='selectEggGroup'
      id='selectEggGroup'
    >
      {listOfValues.length === 15 ? (
        <option value={'Select Group'} key={'Select Group'}>
          Select Group
        </option>
      ) : (
        ''
      )}
      {listOfValues.map((group) => (
        <option value={group} key={group}>
          {group}
        </option>
      ))}
    </Select>
  );
}

export default Dropdown;
