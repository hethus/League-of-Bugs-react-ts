import * as Styled from './styles';
import { BugPoint } from '../../assets/types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { TrashIcon} from '../../assets/icons';

interface CheckoutCardProps {
  bugPoint: BugPoint;
}

const CheckoutCard = ({ bugPoint }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Styled.CheckoutCardContainer >
      <Styled.CheckoutCardHeader className='PurchaseBP-bugpoint-detail-container'>
        <div>
          <h3 title={`${bugPoint.value} BP's`}>
          {bugPoint.value} BP's
          </h3>
          <p>R${bugPoint.money.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
        </div>
        <Styled.BugPointsQuantityInput
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <span>R${(quantity * bugPoint.money).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
      </Styled.CheckoutCardHeader>
      <Styled.CheckoutCardFooter>
      <img src={bugPoint.imageUrl} alt={`${bugPoint.value}`}/>
        <Styled.RemoveBugPointButton onClick={() => toast.error("section under development")} className='PurchaseBP-bugpoint-detail-removebutton'>
          <TrashIcon />
        </Styled.RemoveBugPointButton>
      </Styled.CheckoutCardFooter>
    </Styled.CheckoutCardContainer>
  );
};

export default CheckoutCard;