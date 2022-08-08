import { DateTime } from "luxon";
import { PersonSad, PurchaseBugPoint, SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import {  mockedClasse, mockedChampions, mockedUser, mockedFavorites } from "../../assets/mocks";
import ChampionList from "../../components/ChampionList";
import { Dispatch, SetStateAction, useState } from "react";
import { Champion, Classe } from "../../assets/types";

interface PurchaseChampionPageProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const PurchaseChampionPage = ({ setLogged }: PurchaseChampionPageProps) => {

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

  const filteredChampionsUserNotPurchased: Champion[] = filteredChampions.filter((element) => {
    return mockedUser.purchasedChampions!.findIndex((champion) => champion.championName === element.name) === -1
  });

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="purchaseChampion" setLogged={setLogged}/>
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>League of Bugs</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.BugPointUserContainer title="Total BugPoint available">
            <PurchaseBugPoint />
            <p >{mockedUser.bugPoint} BP</p>
          </Styled.BugPointUserContainer>
          <Styled.SearchInputContainer>
            <SearchIcon />
            <input placeholder="Search by name"/>
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar>
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
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h2>Choose the Champion</h2>
          </Styled.ProductsHeaderContainer>
            <ChampionList list={filteredChampionsUserNotPurchased}/>
            {filteredChampionsUserNotPurchased.length === 0 &&
            <Styled.NoItemContainer>
              <PersonSad />
              <p>No champions found</p>
            </Styled.NoItemContainer>
            }
        </section>
      </Styled.HomeContentContainer>
    </Styled.HomeContainer>
  );
}

export default PurchaseChampionPage;