import { PokeImg, StyledFigure } from './PokeFigure.style.js';

function PokeFigure({ name }) {
  return (
    <StyledFigure>
      <PokeImg src={`sprites/${name}.png`} alt={name}></PokeImg>
      <figcaption>{name}</figcaption>
    </StyledFigure>
  );
}

export default PokeFigure;
