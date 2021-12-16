import { H1 } from './styles.js';

function Header({ title }) {
  return (
    <header>
      <H1>{title}</H1>
    </header>
  );
}

export default Header;
