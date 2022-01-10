import { SoloBox } from '../eggchain';

function Sidebar({ group, generation }) {
  if (group > -1) {
    return (
      <>
        <SoloBox groupIndex={group} generationIndex={generation} />
      </>
    );
  }
  return '';
}

export default Sidebar;
