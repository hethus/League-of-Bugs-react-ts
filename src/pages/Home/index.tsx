import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import Menu from "../../assets/components/Menu";
import * as Styled from "./style";
import { mockedBugPoints, mockedClasse, mockedChampions } from "../../assets/mocks";
import BugPointList from "../../assets/components/BugPointList";
import ChampionList from "../../assets/components/ChampionList";

const Home = () => {
  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="home"/>
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>League of Bugs</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.SearchInputContainer>
            <SearchIcon />
            <input placeholder="Search by value"/>
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar>
            <Styled.CategoriesNavigationButton active>Bug points</Styled.CategoriesNavigationButton>
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h2>Choose the Bug point</h2>
          </Styled.ProductsHeaderContainer>
          <BugPointList list={mockedBugPoints}/>
          <Styled.test>
            <ChampionList list={mockedChampions}/>
          </Styled.test>
        </section>
      </Styled.HomeContentContainer>
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