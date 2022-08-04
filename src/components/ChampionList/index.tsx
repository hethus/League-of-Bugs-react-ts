import { BugPoint, Champion } from "../../assets/types";
import ChampionCard from "../ChampionCard";
import * as Styled from "./styles";

interface ChampionListProps {
  list: Champion[];
}

const ChampionList = ({ list }: ChampionListProps) => {
  return (
    <Styled.ChampionListContainer>
      {list.map((element) => (
        <ChampionCard champion={element} key={element.id}/>
      ))}
    </Styled.ChampionListContainer>
  );
}

export default ChampionList;