import { BugPoint, Champion } from "../../../types";
import BugPointCard from "../BugPointCard";
import * as Styled from "./styles";

interface BugPointListProps {
  list: BugPoint[];
}

const BugPointList = ({ list }: BugPointListProps) => {
  return (
    <Styled.BugPointListContainer>
      {list.map((element) => (
        <BugPointCard bugPoint={element} key={element.id}/>
      ))}
    </Styled.BugPointListContainer>
  );
}

export default BugPointList;