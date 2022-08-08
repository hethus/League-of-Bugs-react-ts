import { DateTime } from "luxon";
import { PurchaseBugPoint, SearchIcon, PersonSad } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { mockedClasse, mockedChampions, mockedUser, mockedFavorites } from "../../assets/mocks";
import ChampionList from "../../components/ChampionList";
import { Dispatch, SetStateAction, useState } from "react";
import { Champion, Classe } from "../../assets/types";
import HomeDetails from "../../components/HomeDetails";
import ChampionHomeList from "../../components/ChampionHomeList";

interface HomeProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ setLogged }: HomeProps) => {

  const All: Classe = {
    name: "All",
  }

  const Favorite: Classe = {
    name: "Favorite",
  }
  
  const [selectedClasse, setSelectedClasse] = useState<Classe>(All);


  const filteredChampions: Champion[] = mockedChampions.filter((element) => {
    if (selectedClasse.name === All.name) {
      return mockedUser.purchasedChampions!.some((purchased) => {
        if (purchased.championName === element.name) {
          return element
        }
      })
    }

    if (selectedClasse.name === Favorite.name) {
      return mockedFavorites.some((favorite) => {
        if (favorite.championName === element.name) {
          return element
        }
      });
    }

    return mockedUser.purchasedChampions!.some((purchased) => {
      if (purchased.classe === selectedClasse.name && purchased.championName === element.name) {
        return purchased
      }
    })
  });

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="home" setLogged={setLogged}/>
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
                <Styled.CategoriesNavigationButton
                active={Favorite.name === selectedClasse.name}
                onClick={() => setSelectedClasse(Favorite)}>
                  {Favorite.name}
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
            <h2>Champions List</h2>
          </Styled.ProductsHeaderContainer>
            <ChampionHomeList list={filteredChampions}/>
            {filteredChampions.length === 0 &&
            <Styled.NoItemContainer>
              <PersonSad />
              <p>No champions found</p>
            </Styled.NoItemContainer>
            }
        </section>
      </Styled.HomeContentContainer>
      <HomeDetails />
    </Styled.HomeContainer>
  );
}

export default Home;