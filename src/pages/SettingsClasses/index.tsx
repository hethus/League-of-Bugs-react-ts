import { Dispatch, useState } from "react";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import {  EditIcon, TrashIcon } from "../../assets/icons";
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import { Classe } from "../../assets/types";
import { useClasses } from "../../contexts/classes";
import SettingsMenu from "../../components/SettingsMenu";
import ModalClasseSettings from "../../components/ModalClasseSettings";

interface SettingsProps {
  setStepsIsOpen: Dispatch<React.SetStateAction<boolean>>;
  stepsIsOpen: boolean;
}

const SettingsClasses = ({ setStepsIsOpen, stepsIsOpen }: SettingsProps) => {
  let enabledSteps

  const { classes } = useClasses();

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
  ];

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const [classe, setClasse] = useState<Classe | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  }

  const handleOpenUpdateModal = (classe: Classe) => {
    setClasse(classe);
    setOpenModal(!openModal);
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
      <SettingsMenu path="classes"/>
      <Styled.EntitiesEditContainer className="Settings-entity-edit-container">
        <h2>Customize the Classes</h2>  

        <Styled.EntitiesEditList>
        <Styled.AddEntityCard onClick={handleOpenModal}>
          <h2>+</h2>
          <p>Add item</p>
        </Styled.AddEntityCard>

        {classes.map((element: Classe) => {
          return (
            <Styled.EntityCard key={element.id}>
              <h2>{element.name}</h2>

              <div>
                <Styled.SettingsClasseDeleteCardButton>
                  <TrashIcon />  Delete
                </Styled.SettingsClasseDeleteCardButton>
                <Styled.SettingsClasseEditCardButton onClick={() => handleOpenUpdateModal(element)}>
                  <EditIcon />  Edit
                </Styled.SettingsClasseEditCardButton>
              </div>
            </Styled.EntityCard>
          )
        })}
        </Styled.EntitiesEditList>
      </Styled.EntitiesEditContainer>
      {openModal && <ModalClasseSettings classe={classe} setClasse={setClasse} handleOpenModal={handleOpenModal}/>}
    </Styled.SettingsContainer>
  );
};

export default SettingsClasses;