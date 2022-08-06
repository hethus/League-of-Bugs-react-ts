import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { mockedBugPoints, mockedClasse, mockedChampions } from "../../assets/mocks";
import BugPointList from "../../components/BugPointList";
import ChampionList from "../../components/ChampionList";
import { useState } from "react";
import { Champion, Classe } from "../../assets/types";
import PurchaseDetails from "../../components/PurchaseDetails";

const Home = () => {

  {/* colocar isso daqui no purchaseChampion depois: */}
  const All: Classe = {
    name: "All",
  }
  
  const [selectedClasse, setSelectedClasse] = useState<Classe>(All);


  const filteredChampions: Champion[] = mockedChampions.filter((element) => {
    if (selectedClasse.name === All.name) {
      return mockedChampions
    }

    return element.classeId === selectedClasse.id
    });
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
            <Styled.CategoriesNavigationButton
                active={All.name === selectedClasse.name}
                onClick={() => setSelectedClasse(All)}>
                  {All.name}
                </Styled.CategoriesNavigationButton>
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
      <PurchaseDetails />
    </Styled.HomeContainer>
  );
}

export default Home;