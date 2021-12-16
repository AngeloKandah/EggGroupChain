import styled from 'styled-components';

const EggGroupContainer = styled.div`
  margin: 5vh 20vw 5vh 20vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const GenerationContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: center;
`;

const ChainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const EggRoutesContainer = styled.ul`
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const LeftSidebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 30vh;
  align-self: start;
  text-align: left;
  margin-top: 10vh;
`;

const RightSidebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 30vh;
  align-self: start;
  text-align: right;
  margin-top: 10vh;
`;

export {
  EggGroupContainer,
  GenerationContainer,
  ChainContainer,
  EggRoutesContainer,
  LeftSidebar,
  RightSidebar,
};
