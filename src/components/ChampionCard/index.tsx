import toast from "react-hot-toast";
import { Champion } from "../../assets/types";
import Button from "../Button";
import ModalPurchaseChampionCard from "../ModalPurchaseChampionCard";
import * as Styled from "./styles";

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Styled.CardContainer>
      <img src={champion.imageUrl} alt={`${champion.name}`} />
      <h3>{champion.name}</h3>
      <p>{champion.description}</p>
      <Styled.ChampionDetailClasse color={champion.difficulty}>
        <span></span>
        {champion.difficulty}
      </Styled.ChampionDetailClasse>
      <ModalPurchaseChampionCard champion={champion} key={champion.id}/>
    </Styled.CardContainer>
  );
}

export default ChampionCard;