import { Champion } from '../../assets/types';
import * as Styled from './styles';
import { EditIcon } from '../../assets/icons';
import toast from 'react-hot-toast';

interface SettingsChampionCardProps {
  champion: Champion
};

const SettingsChampionCard = ({ champion }: SettingsChampionCardProps) => {
  return (
    <Styled.SettingsBugPointCardContainer>
      <img src={champion.imageUrl} alt={`${champion.name}`} />
      <h3>{champion.name}</h3>
      <p>{champion.price} BP</p>
      <Styled.SettingsBugPointCardButton onClick={() => toast.error('section under development')}>
        <EditIcon /> Edit
      </Styled.SettingsBugPointCardButton>
    </Styled.SettingsBugPointCardContainer>
  );
} ;

export default SettingsChampionCard;