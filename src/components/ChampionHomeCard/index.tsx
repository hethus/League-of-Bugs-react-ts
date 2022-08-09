import { Champion } from "../../assets/types";
import ModalChampionCard from "../ModalChampionCard";
import * as Styled from "./styles";

interface ChampionHomeCardProps {
  champion: Champion;
}

const ChampionHomeCard = ({ champion }: ChampionHomeCardProps) => {
  return (
    <Styled.CardContainer>
      <img src={champion.imageUrl} alt={`${champion.name}`} />
      <h3>{champion.name}</h3>
      <p>{champion.description}</p>
      <Styled.ChampionDetailClasse color={champion.difficulty}>
        <span></span>
        {champion.difficulty}
      </Styled.ChampionDetailClasse>
      <ModalChampionCard champion={champion} key={champion.id}/>
    </Styled.CardContainer>
  );
}

export default ChampionHomeCard;