import { BugPoint } from "../../../types";
import BugPointCard from "../BugPointCard";
import * as Styled from "./styles";

interface BugPointListProps {
  list: BugPoint[];
}

const BugPointList = ({ list }: BugPointListProps) => {
  return (
    <Styled.ProductsListContainer>
      {list.map((element) => (
        <BugPointCard bugPoint={element} key={element.id}/>
      ))}
    </Styled.ProductsListContainer>
  );
}

export default BugPointList;