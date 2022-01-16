import styled from 'styled-components';

const ChainList = styled.ul`
  font-family: monospace;
  display: flex;
  flex-direction: row;
  padding-left: 0;
  padding-top: 0;
  flex-wrap: wrap;
  align-items: center;
  border-style: double;
  border-color: black;
  border-radius: 1rem;
  margin: 0 0.25rem;
`;

const ChainListItem = styled.li`
  display: flex;
  flex: 1 1 0;
  justify-content: center;
  flex-direction: rows;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 0.5rem;
`;

export { ChainList, ChainListItem };
