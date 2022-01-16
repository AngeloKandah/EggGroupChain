import { StyledHeader } from './Header.style.js';

function Header({ title }) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  );
}

export default Header;
