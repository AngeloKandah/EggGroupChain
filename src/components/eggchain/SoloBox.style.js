import styled from 'styled-components';

const SoloList = styled.ul`
  font-family: monospace;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  padding: 0;
  margin: 0;
  max-height: 95vh;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 0.5rem;
    background: #909090;
  }
  &::-webkit-scrollbar-thumb:horizontal {
    background: grey;
  }
`;

const SoloListItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export { SoloList, SoloListItem };
