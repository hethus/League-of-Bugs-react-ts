import { Champion } from "../../assets/types";
import ModalPurchaseChampionCard from "../ModalPurchaseChampionCard";
import * as Styled from "./styles";

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Styled.CardContainer className="PurchaseChampion-champion-card">
      <img src={champion.imageUrl} alt={`${champion.name}`} title='Image of the champion'/>
      <h3 title='Name of the champion'>{champion.name}</h3>
      <p title='Description of the champion'>{champion.description}</p>
      <Styled.ChampionDetailClasse color={champion.difficulty} className="PurchaseChampion-champion-difficulty" title='Difficulty of the champion'>
        <span></span>
        {champion.difficulty}
      </Styled.ChampionDetailClasse>
      <ModalPurchaseChampionCard champion={champion} key={champion.id} />
    </Styled.CardContainer>
  );
}

export default ChampionCard;