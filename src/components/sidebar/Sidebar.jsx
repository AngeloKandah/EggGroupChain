import { SoloList } from '../../styles';
import { SoloBox } from '../eggchain';

//FIx this shit to not return empty string
function Sidebar({ group, generation }) {
  if (group > -1) {
    return (
      <SoloList>
        <SoloBox groupIndex={group} generationIndex={generation} />
      </SoloList>
    );
  }
  return '';
}

export default Sidebar;
