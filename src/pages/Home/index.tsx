import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import Menu from "../../assets/components/Menu";
import * as Styled from "./style";
import { mockedBugPoints, mockedClasse, mockedChampions } from "../../assets/mocks";
import BugPointList from "../../assets/components/BugPointList";
import ChampionList from "../../assets/components/ChampionList";
import { useState } from "react";
import { Champion, Classe } from "../../types";

const Home = () => {

  {/* colocar isso daqui no purchaseChampion depois: */}
  const [selectedClasse, setSelectedClasse] = useState<Classe>(mockedClasse[0]);

  const filteredChampions: Champion[] = mockedChampions.filter(
    (element) => element.classeId === selectedClasse.id
  );
  {/* // */}

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

            {/* colocar isso daqui no purchaseBugpoint e arrumar style depois: */}
            {/*<Styled.CategoriesNavigationButton active>Bug points</Styled.CategoriesNavigationButton>*/}
            {/* // */}

            {/* colocar isso daqui no purchaseChampion depois: */}
            {mockedClasse.map((element) => {
              return (
                <Styled.CategoriesNavigationButton
                active={element.name === selectedClasse.name}
                onClick={() => setSelectedClasse(element)}>
                  {element.name}
                </Styled.CategoriesNavigationButton>
              )
              })}
            {/* // */}
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h2>Choose the Bug point</h2>
          </Styled.ProductsHeaderContainer>
          <BugPointList list={mockedBugPoints}/>
          <Styled.test>
            <ChampionList list={filteredChampions}/>
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