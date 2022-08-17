import { Champion } from '../../assets/types';
import * as Styled from './styles';
import { EditIcon, TrashIcon } from '../../assets/icons';
import toast from 'react-hot-toast';
import { Dispatch, SetStateAction } from 'react';

interface SettingsChampionCardProps {
  champion: Champion;
  handleOpenModal: () => void;
  handleOpenDeleteModal: () => void;
  setChampion: Dispatch<SetStateAction<Champion | undefined>>;
};

const SettingsChampionCard = ({
  champion,
  handleOpenModal,
  handleOpenDeleteModal,
  setChampion,
}: SettingsChampionCardProps) => {
  return (
    <Styled.SettingsChampionCardContainer>
      <img src={champion.imageUrl} alt={`${champion.name}`} />
      <h3>{champion.name}</h3>
      <p>{champion.price} BP</p>

      <div>
      <Styled.SettingsChampionDeleteCardButton onClick={() => {
        setChampion(champion);
        handleOpenDeleteModal();
      }}>
        <TrashIcon /> Remove
      </Styled.SettingsChampionDeleteCardButton>
      <Styled.SettingsChampionEditCardButton onClick={() => {
        setChampion(champion);
        handleOpenModal();
      }}>
        <EditIcon /> Edit
      </Styled.SettingsChampionEditCardButton>
      </div>
    </Styled.SettingsChampionCardContainer>
  );
} ;

export default SettingsChampionCard;