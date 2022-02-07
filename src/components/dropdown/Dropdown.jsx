import { StyledSelect } from './Dropdown.style.js';

function Dropdown({ state, dropdownEntries }) {
  const dropDownType = dropdownEntries.length > 14 ? 'EggGroup' : 'Generation';
  return (
    <StyledSelect
      data-cy={`dropdown${dropDownType}`}
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
