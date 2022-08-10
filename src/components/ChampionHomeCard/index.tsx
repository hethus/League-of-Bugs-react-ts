import { Champion } from "../../assets/types";
import ModalChampionCard from "../ModalChampionCard";
import * as Styled from "./styles";

interface ChampionHomeCardProps {
  champion: Champion;
}

const ChampionHomeCard = ({ champion }: ChampionHomeCardProps) => {
  return (
    <Styled.CardContainer className="Home-champion-card">
      <img src={champion.imageUrl} alt={`${champion.name}`} title='Image of the champion'/>
      <h3 title='Name of the champion'>{champion.name}</h3>
      <p title='Description of the champion'>{champion.description}</p>
      <Styled.ChampionDetailClasse color={champion.difficulty} className="Home-champion-difficulty" title='Difficulty of the champion'>
        <span></span>
        {champion.difficulty}
      </Styled.ChampionDetailClasse>
      <ModalChampionCard champion={champion} key={champion.id}/>
    </Styled.CardContainer>
  );
}

export default ChampionHomeCard;