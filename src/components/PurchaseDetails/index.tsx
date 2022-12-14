import toast from 'react-hot-toast';
import { useBugpoints } from '../../contexts/bugpoints';
import Button from '../Button';
import CheckoutCard from '../CheckoutCard';
import * as Styled from './styles';

const PurchaseDetails = () => {
  const { bugpoints } = useBugpoints();
  
  return (
    <Styled.PurchaseDetailsContainer>
    <Styled.PurchaseDetailsHeader className='PurchaseBP-bugpoint-detail-header'>
      <h3>Shopping cart</h3>
    </Styled.PurchaseDetailsHeader>
    <Styled.CheckoutDetailsContainer >
      <Styled.CheckoutDetailsHeader >
        <div>
          <h3>Item</h3>
          <h3>Qty</h3>
        </div>
        <h3>Price</h3>        
      </Styled.CheckoutDetailsHeader>
      <Styled.CheckoutCardsContainer>
        <CheckoutCard bugPoint={bugpoints[0]}/>
      </Styled.CheckoutCardsContainer>
    </Styled.CheckoutDetailsContainer>
    <Styled.PurchaseDetailsFooter className="PurchaseBP-bugpoint-details-footer">
      <div>
        <p>Discount</p>
        <h3>R$0,00</h3>
      </div>
      <div>
        <p>Total</p>
        <h3>R$0,00</h3>
      </div>
      <Button text="Continue to payment" onClick={() => {toast.error("section under development")}} size="x-large" className="PurchaseBP-bugpoint-buttonpayment"/>
    </Styled.PurchaseDetailsFooter>
  </Styled.PurchaseDetailsContainer>
  );
}

export default PurchaseDetails;