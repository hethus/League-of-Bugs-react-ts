import { BugPoint } from "../../../types";

interface BugPointCardProps {
  bugPoint: BugPoint;
}

const BugPointCard = ({ bugPoint }: BugPointCardProps) => {
  return (
    <div>
      <img src={bugPoint.imageUrl} alt={`${bugPoint.price}`} />
      <h3>{bugPoint.price}</h3>
      <p>description {bugPoint.price}</p>
    </div>
  );
}

export default BugPointCard;