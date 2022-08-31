import { Dispatch, useState } from "react";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import {  PersonSad } from "../../assets/icons";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import { Classe, PurchaseBp, PurchaseChampion, User } from "../../assets/types";
import SettingsMenu from "../../components/SettingsMenu";
import { useUsers } from "../../contexts/users";
import SettingsUserCard from "../../components/SettingsUserCard";
import ModalUserSettings from "../../components/ModalUsesrSettings";
import ModalUserDelete from "../../components/ModalUserDelete";

interface SettingsProps {
  setStepsIsOpen: Dispatch<React.SetStateAction<boolean>>;
  stepsIsOpen: boolean;
}

const SettingsUsers = ({ setStepsIsOpen, stepsIsOpen }: SettingsProps) => {
  let enabledSteps

  const { user, users } = useUsers();

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
      element: '.Settings-entities-new-Champion-edit',
      intro: `<p>Here you can edit your account</p>`,
      tooltipClass: 'introjs-container',
      highlightClass: 'highlight-menu',
      position: 'left'
    },
  ];

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [userEdit, setUserEdit] = useState<User | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  }

  const handleLengthPurchases = (array: PurchaseChampion[] | PurchaseBp[] | undefined) => {
    if (array?.length === 0) {
      return 0;
    } else {
      return array?.length! - 1;
    }
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
      <SettingsMenu path="users"/>
      <Styled.EntitiesEditContainer className="Settings-entity-edit-container">
        {user?.isAdmin ? (
          <>
          <h2>Customize the Users</h2>
        <Styled.EntitiesEditList>
          <Styled.EntityCard onClick={() => {
            setUserEdit(user);
            handleOpenModal();
          }} className="Settings-entities-new-Champion-edit">
            <h3>{user?.name}</h3>
            <span>Email: {user?.email}</span>
            <p>{handleLengthPurchases(user?.purchasedChampions)} Champions Purchased</p>
            <p>{handleLengthPurchases(user?.purchasedBPs)} BugPoints Purchased</p>
          </Styled.EntityCard>
          {users?.map((element) => (
            <SettingsUserCard handleOpenDeleteModal={handleOpenDeleteModal} setUser={setUserEdit} user={element} key={element.id}/>
          ))}
          </Styled.EntitiesEditList>
          </>
            ) : (
          <>
          <h2>Customize your account</h2>
          <Styled.EntitiesEditList>
          <Styled.EntityCard onClick={() => {
            setUserEdit(user);
            handleOpenModal();
          }} className="Settings-entities-new-Champion-edit">
            <h3>{user?.name}</h3> 
            <span>Email: {user?.email}</span>
            <p>{handleLengthPurchases(user?.purchasedChampions)} Champions Purchased</p>
            <p>{handleLengthPurchases(user?.purchasedBPs)} BugPoints Purchased</p>
          </Styled.EntityCard>
          </Styled.EntitiesEditList>
          </>
        )}
    
      </Styled.EntitiesEditContainer>
      {openModal && <ModalUserSettings handleOpenModal={handleOpenModal} user={userEdit} setUser={setUserEdit}/>}

      {openDeleteModal && (
        <ModalUserDelete
          setUser={setUserEdit}
          userId={user?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}
    </Styled.SettingsContainer>
  );
};

export default SettingsUsers;