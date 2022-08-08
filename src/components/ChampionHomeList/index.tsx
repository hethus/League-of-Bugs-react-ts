import { Champion } from "../../assets/types";
import ChampionHomeCard from "../ChampionHomeCard";
import * as Styled from "./styles";

interface ChampionHomeListProps {
  list: Champion[];
}

const ChampionHomeList = ({ list }: ChampionHomeListProps) => {
  return (
    <Styled.ChampionListContainer>
      {list.map((element) => (
        <ChampionHomeCard champion={element} key={element.id}/>
      ))}
    </Styled.ChampionListContainer>
  );
}

export default ChampionHomeList;