import { DateTime } from "luxon";
import { PurchaseBugPoint, SearchIcon, PersonSad } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { mockedClasse, mockedChampions, mockedUser, mockedFavorites } from "../../assets/mocks";
import { Dispatch, useState } from "react";
import { Champion, Classe } from "../../assets/types";
import HomeDetails from "../../components/HomeDetails";
import ChampionHomeList from "../../components/ChampionHomeList";
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import '../../Tooltip.css';


interface HomeProps {
  setStepsIsOpen: Dispatch<React.SetStateAction<boolean>>;
  stepsIsOpen: boolean;
}

const Home = ({ setStepsIsOpen, stepsIsOpen }: HomeProps) => {
  let enabledSteps

  if(stepsIsOpen) {
    enabledSteps = true
  }

  const steps = [
    {
      element: '.menu',
      intro: 'In this menu you can select the options:',
      position: 'right',
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu'
    },
    {
      element: '.home',
      intro: "<p>'Home' (which is where we are now):</p> <p>Here you can see your purchased champions</p>",
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-padrao'
    },
    {
      element: '.purchaseBugpoint',
      intro: "<p>'Buy Bug Points':</p> <p>Here you can buy more Bug Points</p>",
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-padrao'
    },
    {
      element: '.purchaseChampion',
      intro: "<p>'Buy Champions':</p> <p>Here you can buy other champions</p>",
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-padrao'
    },
    {
      element: '.settings',
      intro: `<p>'Settings':</p> <p>Here you can change the settings</p> <p class="face">🤪</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-padrao',
      position: 'right',
    },
    {
      element: '.logout',
      intro: `<p>'logout':</p> <p>Here you can logout the site</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'right'
    },
    {
      element: '.Home-user-bugpoint',
      intro: `<p>Here you can see the Bug Points you have</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'right'
    },
    {
      element: '.Home-input-search',
      intro: `<p>Here you can search for the champions you have</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'bottom'
    },
    {
      element: '.Home-navigationBar',
      intro: `<p>Here you can see all viewing options</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'bottom'
    },
    {
      element: '.Home-champion-list',
      intro: `<p>Below this title you can see all purchased champions</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'bottom'
    },
    {
      element: '.Home-champion-card',
      intro: `<p>This is the champion card!</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'right'
    },
    {
      element: '.Home-champion-difficulty',
      intro: `<p>Here is the champion difficulty</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'right',
    },
    {
      element: '.Home-champion-detail',
      intro: `<p>You can click here to see all the champion details</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'right',
    },
    {
      element: '.User-name-details',
      intro: `<p>Here your name appears as a ✨magic trick✨</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left',
    },
    {
      element: '.Home-details-info',
      intro: `<p>Below this title you will find a list of all purchased champions sorted by purchase date</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left',
    },
    {
      element: '.Home-details-refund',
      intro: `<p>Here you can request a refund of the champion purchased >IF< the purchase time is not longer than 3 months</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left',
    },
  ];

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
      <Steps
  enabled={enabledSteps}
  steps={steps}
  initialStep={0}
  onExit={() => setStepsIsOpen(false)}
  />
      <Menu path="home" setStepsIsOpen={setStepsIsOpen} />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>League of Bugs</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.BugPointUserContainer title="Total BugPoint available" className="Home-user-bugpoint">
            <PurchaseBugPoint />
            <p>{mockedUser.bugPoint} BP</p>
          </Styled.BugPointUserContainer>
          <Styled.SearchInputContainer className="Home-input-search">
            <SearchIcon />
            <input placeholder="Search by name"/>
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar className="Home-navigationBar">
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
                onClick={() => setSelectedClasse(element)} key={element.id}>
                  {element.name}
                </Styled.CategoriesNavigationButton>
              )
              })}
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer className="Home-champion-list">
            <h2>Champions List</h2>
          </Styled.ProductsHeaderContainer>
            <ChampionHomeList list={filteredChampions} />
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