import { DateTime } from "luxon";
import { PersonSad, PurchaseBugPoint, SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { mockedUser } from "../../assets/mocks";
import BugPointList from "../../components/BugPointList";
import { Dispatch, SetStateAction, useState } from "react";
import PurchaseDetails from "../../components/PurchaseDetails";
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import '../../Tooltip.css';
import { useBugpoints } from "../../contexts/bugpoints";

interface PurchaseBugPointPageProps {
  setStepsIsOpen: Dispatch<React.SetStateAction<boolean>>;
  stepsIsOpen: boolean;
}

const PurchaseBugPointPage = ({ setStepsIsOpen, stepsIsOpen  }: PurchaseBugPointPageProps) => {
  const { bugpoints } = useBugpoints();

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

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
      element: '.PurchaseBP-user-bugpoint',
      intro: `<p>Here you can see the Bug Points you have</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'right'
    },
    {
      element: '.PurchaseBP-input-search',
      intro: `<p>Here you can search for the quantity</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'bottom'
    },
    {
      element: '.PurchaseBP-bugpoint-list',
      intro: `<p>Below this title you can see all the Bug Points available for purchase</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'bottom'
    },
    {
      element: '.PurchaseBP-bugpoint-detail-header',
      intro: `<p>Here is the shopping cart</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
    {
      element: '.PurchaseBP-bugpoint-detail-container',
      intro: `<p>Here is information about the Bug Point to be purchased</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
    {
      element: '.PurchaseBP-bugpoint-detail-removebutton',
      intro: `<p>If you want to deselect the Bug Point click here</p> <p class="face">😢</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
    {
      element: '.PurchaseBP-bugpoint-details-footer',
      intro: `<p>Here you can check the discount amount and the total purchase amount</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
    {
      element: '.PurchaseBP-bugpoint-buttonpayment',
      intro: `<p>By clicking here, a side menu will open and your purchase will continue</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
  ];

  const [search, setSearch] = useState<string>('');

  const filteredBugpoints = bugpoints.filter((bugpoint) => {
    return bugpoint.value.toString().includes(search.toLowerCase());
  });

  return (
    <Styled.HomeContainer>
            <Steps
  enabled={enabledSteps}
  steps={steps}
  initialStep={0}
  onExit={() => setStepsIsOpen(false)}
  />
      <Menu path="purchaseBugPoint" setStepsIsOpen={setStepsIsOpen}/>
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>League of Bugs</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.BugPointUserContainer title="Total BugPoint available" className="PurchaseBP-user-bugpoint">
            <PurchaseBugPoint />
            <p>{mockedUser.bugPoint} BP</p>
          </Styled.BugPointUserContainer>
          <Styled.SearchInputContainer className="PurchaseBP-input-search">
            <SearchIcon />
            <input placeholder="Search by quantity" onChange={(e) => setSearch(e.target.value)}/>
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar>
            <Styled.CategoriesNavigationButton active>Bug Points</Styled.CategoriesNavigationButton>
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer className="PurchaseBP-bugpoint-list">
            <h2>Choose the Bug point</h2>
          </Styled.ProductsHeaderContainer>
          <BugPointList list={filteredBugpoints}/>
          {filteredBugpoints.length === 0 &&
            <Styled.NoItemContainer>
              <PersonSad />
              <p>No Bug Points found</p>
            </Styled.NoItemContainer>
            }
        </section>
      </Styled.HomeContentContainer>
      <PurchaseDetails />
    </Styled.HomeContainer>
  );
}

export default PurchaseBugPointPage;