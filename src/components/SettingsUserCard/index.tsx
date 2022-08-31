import { PurchaseBp, PurchaseChampion, User } from '../../assets/types';
import * as Styled from './styles';
import { EditIcon, TrashIcon } from '../../assets/icons';
import toast from 'react-hot-toast';
import { Dispatch, SetStateAction } from 'react';

interface SettingsUserCardProps {
  user: User;
  handleOpenDeleteModal: () => void;
  setUser: Dispatch<SetStateAction<User | undefined>>;
};

const SettingsUserCard = ({
  user,
  handleOpenDeleteModal,
  setUser,
}: SettingsUserCardProps) => {

  const handleLengthPurchases = (array: PurchaseChampion[] | PurchaseBp[] | undefined) => {
    if (array?.length === 0) {
      return 0;
    } else {
      return array?.length! - 1;
    }
  }

  return (
    <Styled.SettingsUserCardContainer className='Settings-entities-Champion-edit'>
      <h3>{user.name}</h3>
      <span>{user.email}</span>
      <p>{handleLengthPurchases(user.purchasedChampions)} Champions Purchased</p>
      <p>{handleLengthPurchases(user.purchasedBPs)} BugPoints Purchased</p>

      <div>
      <Styled.SettingsUserDeleteCardButton onClick={() => {
        setUser(user);
        handleOpenDeleteModal();
      }}>
        <TrashIcon /> Remove
      </Styled.SettingsUserDeleteCardButton>
      </div>
    </Styled.SettingsUserCardContainer>
  );
} ;

export default SettingsUserCard;