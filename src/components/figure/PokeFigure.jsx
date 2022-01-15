import { PokeImg, StyledFigure } from '../../styles';

function PokeFigure({ name }) {
  return (
    <StyledFigure>
      <PokeImg src={`sprites/${name}.png`} alt={name}></PokeImg>
      <figcaption>{name}</figcaption>
    </StyledFigure>
  );
}

export default PokeFigure;
