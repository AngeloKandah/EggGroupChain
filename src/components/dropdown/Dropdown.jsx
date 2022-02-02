import { StyledSelect } from './Dropdown.style.js';

function Dropdown({ state, dropdownEntries }) {
  return (
    <StyledSelect
      onChange={(e) => state(e.target.selectedIndex)}
    >
      {dropdownEntries.map((group) => (
        <option value={group} key={group}>
          {group}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Dropdown;
