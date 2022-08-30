import { Dispatch, useState } from "react";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import {  EditIcon, TrashIcon } from "../../assets/icons";
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import { BugPoint } from "../../assets/types";
import SettingsMenu from "../../components/SettingsMenu";
import { useBugpoints } from "../../contexts/bugpoints";
import ModalBugPointSettings from "../../components/ModalBugPointSettings";
import ModalBugpointDelete from "../../components/ModalBugpointDelete";

interface SettingsProps {
  setStepsIsOpen: Dispatch<React.SetStateAction<boolean>>;
  stepsIsOpen: boolean;
}

const SettingsBugPoints = ({ setStepsIsOpen, stepsIsOpen }: SettingsProps) => {
  let enabledSteps

  const { bugpoints } = useBugpoints();

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
      element: '.Settings-entities-new-bugpoint-edit',
      intro: `<p>Here you can add a new Bugpoint</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
    {
      element: '.Settings-entities-bugpoint-edit',
      intro: `<p>Here you can see the Bugpoint, you can also edit and delete it</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
  ];

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const [bugpoint, setBugpoint] = useState<BugPoint | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  }

  const handleOpenUpdateModal = (bugpoint: BugPoint) => {
    setBugpoint(bugpoint);
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
      <SettingsMenu path="bugpoints"/>
      <Styled.EntitiesEditContainer className="Settings-entity-edit-container">
        <h2>Customize the Bugpoints</h2>  

        <Styled.EntitiesEditList>
        <Styled.AddEntityCard onClick={handleOpenModal} className="Settings-entities-new-bugpoint-edit">
          <h2>+</h2>
          <p>Add item</p>
        </Styled.AddEntityCard>

        {bugpoints.map((element: BugPoint) => {
          return (
            <Styled.EntityCard key={element.id} className="Settings-entities-bugpoint-edit">
              <h2>- {element.value} BP -</h2>

              <img src={element.imageUrl} alt={`${element.value}`} />

              <p>R${element.money.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>

              <div>
                <Styled.SettingsBugpointDeleteCardButton onClick={() => {
                  setBugpoint(element);
                  handleOpenDeleteModal();
                }}>
                  <TrashIcon />  Delete
                </Styled.SettingsBugpointDeleteCardButton>
                <Styled.SettingsBugpointEditCardButton onClick={() => handleOpenUpdateModal(element)}>
                  <EditIcon />  Edit
                </Styled.SettingsBugpointEditCardButton>
              </div>
            </Styled.EntityCard>
          )
        })}
        </Styled.EntitiesEditList>
      </Styled.EntitiesEditContainer>
      {openModal && <ModalBugPointSettings
        bugpoint={bugpoint}
        setBugpoint={setBugpoint}
        handleOpenModal={handleOpenModal}
      />}

      {openDeleteModal && <ModalBugpointDelete
        bugpointId={bugpoint?.id}
        setBugpoint={setBugpoint}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />}
    </Styled.SettingsContainer>
  );
};

export default SettingsBugPoints;