import { Dispatch, SetStateAction, useState } from "react";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { MarketIcon, InfoIcon, PromotionIcon, DashboardIcon } from "../../assets/icons";
import Button from "../../components/Button";
import SettingsChampionCard from "../../components/SettingsChampionCard";
import toast from "react-hot-toast";
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import ModalChampionSettings from "../../components/ModalChampionSettings";
import { Champion } from "../../assets/types";
import ModalChampionDelete from "../../components/ModalChampionDelete";
import { useChampions } from "../../contexts/champions";

interface SettingsProps {
  setStepsIsOpen: Dispatch<React.SetStateAction<boolean>>;
  stepsIsOpen: boolean;
}

const Settings = ({ setStepsIsOpen, stepsIsOpen }: SettingsProps) => {
  let enabledSteps

  const { champions } = useChampions();

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
      element: '.Settings-navigation-buttons',
      intro: `<p>Here you can select the setting you want to change</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'right'
    },
    {
      element: '.Settings-entity-edit-container',
      intro: `<p>Here you will see what can be changed</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
    {
      element: '.Settings-entities-Categories-edit',
      intro: `<p>Here you can see all viewing options</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
    {
      element: '.Settings-confirmation-container',
      intro: `<p>Here you can confirm or cancel the changes</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
  ];

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [champion, setChampion] = useState<Champion | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  }

  return (
    <Styled.SettingsContainer>
      <Steps
  enabled={enabledSteps}
  steps={steps}
  initialStep={0}
  onExit={() => setStepsIsOpen(false)}
  />
      <Menu path="settings" setStepsIsOpen={setStepsIsOpen}/>
      <Styled.SettingsNavigationContainer>
        <h2>Settings</h2>
        <Styled.SettingsNavigationButtonList className="Settings-navigation-buttons">
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
      <Styled.EntitiesEditContainer className="Settings-entity-edit-container">
        <h2>Customize the Bug Points</h2>
        <Styled.EntitiesEditCategories className="Settings-entities-Categories-edit">
          <Styled.EntitiesEditCategoriesButton active>All</Styled.EntitiesEditCategoriesButton>
          <Styled.EntitiesEditCategoriesButton >Mage</Styled.EntitiesEditCategoriesButton>
          <Styled.EntitiesEditCategoriesButton >Warrior</Styled.EntitiesEditCategoriesButton>
        </Styled.EntitiesEditCategories>
        <Styled.EntitiesEditList>
          <Styled.AddEntityCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p>Add item</p>
          </Styled.AddEntityCard>
          {champions.map((element) => (
            <SettingsChampionCard handleOpenModal={handleOpenModal} handleOpenDeleteModal={handleOpenDeleteModal} setChampion={setChampion} champion={element} key={element.id}/>
          ))}
        </Styled.EntitiesEditList>
        <Styled.ConfirmationContainer className="Settings-confirmation-container">
          <Button text="Cancel" variant="cancel" onClick={() => toast.error('section under development')}/>
          <Button text="Confirm" onClick={() => toast.error('section under development')} />
        </Styled.ConfirmationContainer>      
      </Styled.EntitiesEditContainer>
      {openModal && <ModalChampionSettings handleOpenModal={handleOpenModal} champion={champion} setChampion={setChampion}/>}

      {openDeleteModal && (
        <ModalChampionDelete
          setChampion={setChampion}
          championId={champion?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}
    </Styled.SettingsContainer>
  );
};

export default Settings;