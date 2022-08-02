import Menu from "../Menu";
import * as Styled from "./style";

const Home = () => {
  return (
    <Styled.HomeContainer>
      <Menu path="home"/>
      <div>
        <header>
          <div>
            <h1>League of Bugs</h1>
            <p>{new Date(Date.now()).toLocaleDateString()}</p>
          </div>
          <div>
            <img src="search" alt="" />
            <input />
          </div>
        </header>
        <section>
          <div>
            <p>Bug points</p>
          </div>
          <div>
            <h2>Choose the Bug point</h2>
            <select name="" id="">
              <option value="1">1</option>
            </select>
          </div>
          <div>
            <div>Card</div>
          </div>
        </section>
      </div>
      <aside>
        <header>
          <h2>Shopping cart</h2>
        </header>
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
          <button>Continue to payment</button>
        </div>
      </aside>
    </Styled.HomeContainer>
  );
}

export default Home;