import { Champion } from '../../assets/types';
import * as Styled from './styles';
import { EditIcon } from '../../assets/icons';

interface SettingsChampionCardProps {
  champion: Champion
};

const SettingsChampionCard = ({ champion }: SettingsChampionCardProps) => {
  return (
    <Styled.SettingsBugPointCardContainer>
      <img src={champion.imageUrl} alt={`${champion.name}`} />
      <h3>{champion.name}</h3>
      <p>{champion.price} BP</p>
      <Styled.SettingsBugPointCardButton>
        <EditIcon /> Edit
      </Styled.SettingsBugPointCardButton>
    </Styled.SettingsBugPointCardContainer>
  );
} ;

export default SettingsChampionCard;