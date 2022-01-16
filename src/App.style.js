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

export { EggGroupContainer, GenerationContainer };
