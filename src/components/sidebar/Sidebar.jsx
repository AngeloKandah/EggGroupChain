import { UL } from '../../styles';
import { SoloBox } from '../eggchain';

//FIx this shit to not return empty string
function Sidebar({ group, generation }) {
  if (group > -1) {
    return (
      <UL>
        <SoloBox groupIndex={group} generationIndex={generation} />
      </UL>
    );
  }
  return '';
}

export default Sidebar;
