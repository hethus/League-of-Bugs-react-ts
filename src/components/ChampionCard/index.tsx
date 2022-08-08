import toast from "react-hot-toast";
import { Champion } from "../../assets/types";
import Button from "../Button";
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
      <Button text={"Buy"} size={"small"} onClick={() => toast.error("section under development")}/>
    </Styled.CardContainer>
  );
}

export default BugPointCard;