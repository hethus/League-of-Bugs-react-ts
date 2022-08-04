import * as Styled from './styles';
import { BugPoint } from '../../types';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface CheckoutCardProps {
  bugPoint: BugPoint;
}

const CheckoutCard = ({ bugPoint }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Styled.CheckoutCardContainer>
      <Styled.CheckoutCardHeader>
        <div>
          <h5>
          {bugPoint.value} BP's
          </h5>
          <p>R${bugPoint.money.toLocaleString()}</p>
        </div>
        <Styled.BugPointsQuantityInput type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>
        <span>R${(quantity * bugPoint.money).toLocaleString()}</span>
      </Styled.CheckoutCardHeader>
      <Styled.CheckoutCardImg>
        <img src={bugPoint.imageUrl} alt={`${bugPoint.value}`}/>
      </Styled.CheckoutCardImg>
      <div>
        <button onClick={() => toast.error("section under development")}>
          oi
        </button>
      </div>
    </Styled.CheckoutCardContainer>
  );
};

export default CheckoutCard;