import toast from 'react-hot-toast';
import { mockedBugPoints } from '../../assets/mocks';
import Button from '../Button';
import CheckoutCard from '../CheckoutCard';
import * as Styled from './styles';

const PurchaseDetails = () => {
  return (
    <Styled.PurchaseDetailsContainer>
    <Styled.PurchaseDetailsHeader>
      <h3>Shopping cart</h3>
    </Styled.PurchaseDetailsHeader>
    <Styled.CheckoutDetailsContainer>
      <Styled.CheckoutDetailsHeader>
        <div>
          <h3>Item</h3>
          <h3>Qty</h3>
        </div>
        <h3>Price</h3>        
      </Styled.CheckoutDetailsHeader>
      <Styled.CheckoutCardsContainer>
        <CheckoutCard bugPoint={mockedBugPoints[0]}/>
      </Styled.CheckoutCardsContainer>
    </Styled.CheckoutDetailsContainer>
    <Styled.PurchaseDetailsFooter>
      <div>
        <p>Discount</p>
        <h3>R$0,00</h3>
      </div>
      <div>
        <p>Subtotal</p>
        <h3>R$0,00</h3>
      </div>
      <Button text="Continue to payment" onClick={() => {toast.error("section under development")}} size="x-large"/>
    </Styled.PurchaseDetailsFooter>
  </Styled.PurchaseDetailsContainer>
  );
}

export default PurchaseDetails;