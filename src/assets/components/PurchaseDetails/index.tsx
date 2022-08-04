import Button from '../Button';
import * as Styled from './styles';

const PurchaseDetails = () => {
  return (
    <Styled.PurchaseDetailsContainer>
    <Styled.PurchaseDetailsHeader>
      <h2>Shopping cart</h2>
    </Styled.PurchaseDetailsHeader>
    <div>
      <div>
        <h3>Item</h3>
        <h3>Qty</h3>
        <h3>Price</h3>
      </div>
      <div>
        <div>Card checkout</div>
        <div>Card checkout</div>
        <div>Card checkout</div>
      </div>
    </div>
    <div>
      <div>
        <p>Discount</p>
        <p>R$0.00</p>
      </div>
      <div>
        <p>Subtotal</p>
        <p>R$0.00</p>
      </div>
      <Button text="Continue to payment" onClick={() => {}} size="large"/>
    </div>
  </Styled.PurchaseDetailsContainer>
  );
}

export default PurchaseDetails;