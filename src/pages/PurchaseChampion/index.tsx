import { DateTime } from "luxon";
import { PersonSad, PurchaseBugPoint, SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import ChampionList from "../../components/ChampionList";
import { Dispatch, useState } from "react";
import { Champion, Classe } from "../../assets/types";
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import '../../Tooltip.css';
import { useChampions } from "../../contexts/champions";
import { useClasses } from "../../contexts/classes";
import { usePurchasedChampions } from "../../contexts/purchasedChampions";
import { useUsers } from "../../contexts/users";

interface PurchaseChampionPageProps {
  setStepsIsOpen: Dispatch<React.SetStateAction<boolean>>;
  stepsIsOpen: boolean;
}

const PurchaseChampionPage = ({ setStepsIsOpen, stepsIsOpen }: PurchaseChampionPageProps) => {
  let enabledSteps

  const { champions } = useChampions();
  const { classes } = useClasses();
  const { purchasedChampions } = usePurchasedChampions();
  const { user } = useUsers();


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

  const filteredChampions: Champion[] = champions.filter((element) => {
    if (selectedClasse.name === All.name) {
      return champions
    }

    return element.classeId === selectedClasse.id
  });

  const filteredChampionsUserNotPurchased: Champion[] = filteredChampions.filter((element) => {
    return purchasedChampions.findIndex((champion) => champion.championName === element.name) === -1
  });

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  const [search, setSearch] = useState<string>('');

  const filteredChampionsByName = filteredChampionsUserNotPurchased.filter((champion) => {
    return champion.name.toLowerCase().includes(search.toLowerCase());
  });

  const filteredChampionsByAlphabetical = filteredChampionsByName.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

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
          {user?.isAdmin ? (
          <Styled.BugPointAdminContainer title="Total BugPoint available" className="PurchaseBP-user-bugpoint">
            <PurchaseBugPoint />
            <p className="dev-bugpoint-purchase">Admin</p>
            <p>{user?.bugPoint} BP</p>
          </Styled.BugPointAdminContainer>
            ) : (
          <Styled.BugPointUserContainer title="Total BugPoint available" className="PurchaseBP-user-bugpoint">
            <PurchaseBugPoint />
            <p>{user?.bugPoint} BP</p>
          </Styled.BugPointUserContainer>
          )}
          <Styled.SearchInputContainer className="PurchaseChampion-input-search">
            <SearchIcon />
            <input placeholder="Search by name" onChange={(e) => setSearch(e.target.value)} />
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar className="PurchaseChampion-navigationBar">
            <Styled.CategoriesNavigationButton
                active={All.name === selectedClasse.name}
                onClick={() => setSelectedClasse(All)}>
                  {All.name}
                </Styled.CategoriesNavigationButton>
            {classes.map((element) => {
              return (
                <Styled.CategoriesNavigationButton
                key={element.id}
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
            <ChampionList list={filteredChampionsByAlphabetical}/>
            {filteredChampionsByAlphabetical.length === 0 &&
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