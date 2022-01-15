import styled from 'styled-components';

const SoloList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  padding: 0;
  margin: 0;
  max-height: 95vh;
  max-width: 25vw;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 0.5rem;
    background: #909090;
  }
  &::-webkit-scrollbar-thumb:horizontal {
    background: grey;
  }
`;

export default SoloList;
