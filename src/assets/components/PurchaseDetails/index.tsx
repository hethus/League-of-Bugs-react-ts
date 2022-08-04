import Button from '../Button';
import * as Styled from './styles';

const PurchaseDetails = () => {
  return (
    <Styled.PurchaseDetailsContainer>
    <Styled.PurchaseDetailsHeader>
      <h3>Shopping cart</h3>
    </Styled.PurchaseDetailsHeader>
    <Styled.CheckoutDetailsContainer>
      <Styled.CheckoutDetailsHeader>
        <h3>Item</h3>
        <h3>Qty</h3>
        <h3>Price</h3>
      </Styled.CheckoutDetailsHeader>
      <div>
        <div>Card checkout</div>
        <div>Card checkout</div>
        <div>Card checkout</div>
      </div>
    </Styled.CheckoutDetailsContainer>
    <Styled.PurchaseDetailsFooter>
      <div>
        <p>Discount</p>
        <h3>R$0.00</h3>
      </div>
      <div>
        <p>Subtotal</p>
        <h3>R$0.00</h3>
      </div>
      <Button text="Continue to payment" onClick={() => {}} size="large"/>
    </Styled.PurchaseDetailsFooter>
  </Styled.PurchaseDetailsContainer>
  );
}

export default PurchaseDetails;