import { SoloBox } from '../eggchain';
import { StyledSidebar } from './Sidebar.style.js';

function Sidebar({ group, generation, dataVal }) {
  return (
    <StyledSidebar data-cy={`${dataVal}Sidebar`}>
      <SoloBox groupIndex={group} generationIndex={generation} />
    </StyledSidebar>
  );
}

export default Sidebar;
