import { Dispatch, useState } from "react";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import {  PersonSad } from "../../assets/icons";
import Button from "../../components/Button";
import SettingsChampionCard from "../../components/SettingsChampionCard";
import toast from "react-hot-toast";
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import ModalChampionSettings from "../../components/ModalChampionSettings";
import { Champion, Classe } from "../../assets/types";
import ModalChampionDelete from "../../components/ModalChampionDelete";
import { useChampions } from "../../contexts/champions";
import { useClasses } from "../../contexts/classes";
import SettingsMenu from "../../components/SettingsMenu";

interface SettingsProps {
  setStepsIsOpen: Dispatch<React.SetStateAction<boolean>>;
  stepsIsOpen: boolean;
}

const SettingsChampions = ({ setStepsIsOpen, stepsIsOpen }: SettingsProps) => {
  let enabledSteps

  const { champions } = useChampions();
  const { classes } = useClasses();

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
      intro: `<p>'Settings':</p> <p>Here you can change the settings</p> <p class="face">????</p>`,
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
      intro: `<p>Here you can see all champions of a certain class</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
    {
      element: '.Settings-entities-new-Champion-edit',
      intro: `<p>Here you can add a new champion</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
    {
      element: '.Settings-entities-Champion-edit',
      intro: `<p>Here you can see the champion, you can also edit and delete it</p>`,
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
      <SettingsMenu path="champions"/>
      <Styled.EntitiesEditContainer className="Settings-entity-edit-container">
        <h2>Customize the Champions</h2>
        <Styled.EntitiesEditCategories className="Settings-entities-Categories-edit">

          <Styled.EntitiesEditCategoriesButton
            active={All.name === selectedClasse.name}
            onClick={() => setSelectedClasse(All)}>
              {All.name}
            </Styled.EntitiesEditCategoriesButton>

          {classes.map((element) => {
            return (
              <Styled.EntitiesEditCategoriesButton
                key={element.id}
                active={element.name === selectedClasse.name}
                onClick={() => setSelectedClasse(element)}>
                {element.name}
              </Styled.EntitiesEditCategoriesButton>
            )
          })}

        </Styled.EntitiesEditCategories>
        <Styled.EntitiesEditList>
          <Styled.AddEntityCard onClick={handleOpenModal} className="Settings-entities-new-Champion-edit">
            <h2>+</h2>
            <p>Add item</p>
          </Styled.AddEntityCard>
          {filteredChampions.map((element) => (
            <SettingsChampionCard handleOpenModal={handleOpenModal} handleOpenDeleteModal={handleOpenDeleteModal} setChampion={setChampion} champion={element} key={element.id}/>
          ))}
          {filteredChampions.length === 0 &&
            <Styled.NoItemContainer>
              <PersonSad />
              <p>No champions found</p>
            </Styled.NoItemContainer>
            }
        </Styled.EntitiesEditList>     
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

export default SettingsChampions;