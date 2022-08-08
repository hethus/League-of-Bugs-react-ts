import { DateTime } from "luxon";
import { PurchaseBugPoint, SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { mockedBugPoints, mockedUser } from "../../assets/mocks";
import BugPointList from "../../components/BugPointList";
import { Dispatch, SetStateAction } from "react";
import PurchaseDetails from "../../components/PurchaseDetails";

interface PurchaseBugPointPageProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const PurchaseBugPointPage = ({ setLogged }: PurchaseBugPointPageProps) => {
  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="purchaseBugPoint" setLogged={setLogged}/>
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
            <input placeholder="Search by value"/>
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar>
            <Styled.CategoriesNavigationButton active>Bug Points</Styled.CategoriesNavigationButton>
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h2>Choose the Bug point</h2>
          </Styled.ProductsHeaderContainer>
          <BugPointList list={mockedBugPoints}/>
        </section>
      </Styled.HomeContentContainer>
      <PurchaseDetails />
    </Styled.HomeContainer>
  );
}

export default PurchaseBugPointPage;