import { BugPoint } from '../../assets/types';
import * as Styled from './styles';
import { EditIcon } from '../../assets/icons';

interface SettingsBugPointCardProps {
  bugPoint: BugPoint
};

const SettingsBugPointCard = ({ bugPoint }: SettingsBugPointCardProps) => {
  return (
    <Styled.SettingsBugPointCardContainer>
      <img src={bugPoint.imageUrl} alt={`${bugPoint.value}`} />
      <h3>{bugPoint.value}</h3>
      <p>R${(bugPoint.money).toLocaleString()}</p>
      <Styled.SettingsBugPointCardButton>
        <EditIcon /> Edit
      </Styled.SettingsBugPointCardButton>
    </Styled.SettingsBugPointCardContainer>
  );
} ;

export default SettingsBugPointCard;