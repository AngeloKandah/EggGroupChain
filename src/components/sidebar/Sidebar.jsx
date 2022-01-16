import { SoloBox } from '../eggchain';
import { StyledSidebar } from './Sidebar.style.js';

function Sidebar({ group, generation }) {
  if (group > -1) {
    return (
      <StyledSidebar>
        <SoloBox groupIndex={group} generationIndex={generation} />
      </StyledSidebar>
    );
  }
  return null;
}

export default Sidebar;
