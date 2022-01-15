import { SidebarContainer, SoloList } from '../../styles';
import { SoloBox } from '../eggchain';

//FIx this shit to not return empty string
function Sidebar({ group, generation }) {
  if (group > -1) {
    return (
      <SidebarContainer>
        <SoloList>
          <SoloBox groupIndex={group} generationIndex={generation} />
        </SoloList>
      </SidebarContainer>
    );
  }
  return null;
}

export default Sidebar;
