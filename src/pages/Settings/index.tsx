import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { MarketIcon, InfoIcon, PromotionIcon, DashboardIcon } from "../../assets/icons";
import Button from "../../components/Button";
import { mockedChampions } from "../../assets/mocks";
import SettingsChampionCard from "../../components/SettingsChampionCard";
import toast from "react-hot-toast";

interface SettingsProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Settings = ({ setLogged }: SettingsProps) => {
  return (
    <Styled.SettingsContainer>
      <Menu path="settings" setLogged={setLogged}/>
      <Styled.SettingsNavigationContainer>
        <h2>Settings</h2>
        <Styled.SettingsNavigationButtonList>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <InfoIcon />
              <h2>Customize your users</h2>
              <p>Manage system access</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <MarketIcon />
              <h2>Customize the Bug Points</h2>
              <p>Edit and add new values</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer active >
            <Styled.SettingsNavigationButtonSelected  active>
              <PromotionIcon />
              <h2>Customize the champions</h2>
              <p>edit and add new champions</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <DashboardIcon />
              <h2>Modify the Champions Classes</h2>
              <p>edit and add new classes</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
        </Styled.SettingsNavigationButtonList>
      </Styled.SettingsNavigationContainer>
      <Styled.EntitiesEditContainer>
        <h2>Customize the Bug Points</h2>
        <Styled.EntitiesEditCategories>
          <Styled.EntitiesEditCategoriesButton active>All</Styled.EntitiesEditCategoriesButton>
          <Styled.EntitiesEditCategoriesButton >Mage</Styled.EntitiesEditCategoriesButton>
          <Styled.EntitiesEditCategoriesButton >Warrior</Styled.EntitiesEditCategoriesButton>
        </Styled.EntitiesEditCategories>
        <Styled.EntitiesEditList>
          <Styled.AddEntityCard>
            <h2>+</h2>
            <p>Add item</p>
          </Styled.AddEntityCard>
          {mockedChampions.map((element) => (
            <SettingsChampionCard champion={element} key={element.id}/>
          ))}
        </Styled.EntitiesEditList>
        <Styled.ConfirmationContainer>
          <Button text="Cancel" variant="cancel" onClick={() => toast.error('section under development')}/>
          <Button text="Confirm" onClick={() => toast.error('section under development')} />
        </Styled.ConfirmationContainer>      
      </Styled.EntitiesEditContainer>
    </Styled.SettingsContainer>
  );
};

export default Settings;