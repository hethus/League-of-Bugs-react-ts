import { BugPoint } from "../../assets/types";
import * as Styled from "./styles";

interface BugPointCardProps {
  bugPoint: BugPoint;
}

const BugPointCard = ({ bugPoint }: BugPointCardProps) => {
  return (
    <Styled.CardContainer>
      <img src={bugPoint.imageUrl} alt={`${bugPoint.value}`} />
      <h3>- {bugPoint.value} BP -</h3>
    </Styled.CardContainer>
  );
}

export default BugPointCard;