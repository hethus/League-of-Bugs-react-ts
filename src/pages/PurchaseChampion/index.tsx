import { DateTime } from "luxon";
import { PersonSad, PurchaseBugPoint, SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import {  mockedClasse, mockedChampions, mockedUser, mockedFavorites } from "../../assets/mocks";
import ChampionList from "../../components/ChampionList";
import { Dispatch, SetStateAction, useState } from "react";
import { Champion, Classe } from "../../assets/types";
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import '../../Tooltip.css';

interface PurchaseChampionPageProps {
  setStepsIsOpen: Dispatch<React.SetStateAction<boolean>>;
  stepsIsOpen: boolean;
}

const PurchaseChampionPage = ({ setStepsIsOpen, stepsIsOpen }: PurchaseChampionPageProps) => {

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
      element: '.PurchaseChampion-input-search',
      intro: `<p>Here you can browse the champions to buy by name</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'bottom'
    },
    {
      element: '.PurchaseChampion-navigationBar',
      intro: `<p>Here you can see all viewing options</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'bottom'
    },
    {
      element: '.PurchaseChampion-navigationBar',
      intro: `<p>Here you can see all viewing options</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'bottom'
    },
    {
      element: '.PurchaseChampion-header-container',
      intro: `<p>Below this title you can see all champions available for purchase</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'bottom'
    },
    {
      element: '.PurchaseChampion-champion-card',
      intro: `<p>This is the champion card!</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'right'
    },
    {
      element: '.PurchaseChampion-champion-difficulty',
      intro: `<p>Here is the champion difficulty</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'right',
    },
    {
      element: '.PurchaseChampion-champion-detail',
      intro: `<p>You can click here to see all the champion details</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'right',
    },
  ];

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
            <Steps
  enabled={enabledSteps}
  steps={steps}
  initialStep={0}
  onExit={() => setStepsIsOpen(false)}
  />
      <Menu path="purchaseChampion" setStepsIsOpen={setStepsIsOpen}/>
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>League of Bugs</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.BugPointUserContainer title="Total BugPoint available" className="Home-user-bugpoint">
            <PurchaseBugPoint />
            <p >{mockedUser.bugPoint} BP</p>
          </Styled.BugPointUserContainer>
          <Styled.SearchInputContainer className="PurchaseChampion-input-search">
            <SearchIcon />
            <input placeholder="Search by name"/>
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar className="PurchaseChampion-navigationBar">
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
          <Styled.ProductsHeaderContainer className="PurchaseChampion-header-container">
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