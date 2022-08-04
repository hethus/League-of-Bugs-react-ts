import { Champion } from "../../assets/types";
import * as Styled from "./styles";

interface ChampionProps {
  champion: Champion;
}

const BugPointCard = ({ champion }: ChampionProps) => {
  return (
    <Styled.CardContainer>
      <img src={champion.imageUrl} alt={`${champion.name}`} />
      <h3>{champion.name}</h3>
      <p>{champion.description}</p>
      <p>{champion.difficulty}</p>
    </Styled.CardContainer>
  );
}

export default BugPointCard;