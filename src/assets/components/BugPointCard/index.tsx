import { BugPoint } from "../../../types";
import * as Styled from "./styles";

interface BugPointCardProps {
  bugPoint: BugPoint;
}

const BugPointCard = ({ bugPoint }: BugPointCardProps) => {
  return (
    <Styled.CardContainer>
      <img src={bugPoint.imageUrl} alt={`${bugPoint.price}`} />
      <h3>- {bugPoint.price} BP -</h3>
    </Styled.CardContainer>
  );
}

export default BugPointCard;