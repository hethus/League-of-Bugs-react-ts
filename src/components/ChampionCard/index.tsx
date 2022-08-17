import { useState } from "react";
import { Champion } from "../../assets/types";
import ModalPurchaseChampionCard from "../ModalPurchaseChampionCard";
import * as Styled from "./styles";

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard = ({ champion }: ChampionCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Styled.CardContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="PurchaseChampion-champion-card">
      <img src={champion.imageUrl} alt={`${champion.name}`} title='Image of the champion'/>
      <h3 title='Name of the champion'>{champion.name}</h3>
      <p title='Description of the champion'>{champion.description}</p>
      {!isHovering && (
      <Styled.ChampionDetailClasse color={champion.difficulty} className="PurchaseChampion-champion-difficulty" title='Difficulty of the champion'>
        <span></span>
        {champion.difficulty}
      </Styled.ChampionDetailClasse>)}

      {isHovering && (
        <Styled.ChampionDetailClasse color={champion.difficulty}>
          {champion.price} BP's
        </Styled.ChampionDetailClasse>
      )}
      <ModalPurchaseChampionCard champion={champion} key={champion.id} />
    </Styled.CardContainer>
  );
}

export default ChampionCard;