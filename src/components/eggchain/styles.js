import styled from 'styled-components';

const LI = styled.li`
  display: flex;
  flex: 1 1 0;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px;
`;

const UL = styled.ul`
  display: flex;
  justify-content: left;
  padding-left: 0;
`;

const RouteContainer = styled.div`
  margin: 0 5vw;
`;

const RouteNumber = styled.div`
  text-align: center;
`;

const SideBar = styled.div`
  position: sticky;
  margin-top: 50%;
  margin-bottom: 50%;
  height: 100vh;
  top: 0;
  align-self: start;
`;

export { LI, UL, RouteContainer, RouteNumber, SideBar };
