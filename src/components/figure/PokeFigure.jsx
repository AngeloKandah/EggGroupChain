import { PokeImg, StyledFigure } from '../../styles';

function PokeFigure({ name }) {
  return (
    <StyledFigure>
      <PokeImg src={`sprites/${name}.png`} alt={`${name}`}></PokeImg>
      <figcaption>
        {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
      </figcaption>
    </StyledFigure>
  );
}

export default PokeFigure;
