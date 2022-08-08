import Modal from 'react-modal';
import { useState } from 'react';
import * as Styled from './styles';
import { Champion } from '../../assets/types';
import { IconExit } from '../../assets/icons';
import Button from '../Button';

Modal.setAppElement('#root');

interface ChampionHomeCardProps {
  champion: Champion;
}

const ModalChampionCard = ({ champion }: ChampionHomeCardProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Button text={'abrir'} onClick={handleOpenModal}/>
      <Modal
        isOpen={modalIsOpen}
        className="_"
        overlayClassName="_"
        onRequestClose={handleCloseModal}
        contentElement={(props, children) => <Styled.ModalStyle {...props}>{children}</Styled.ModalStyle>}
        overlayElement={(props, contentElement) => <Styled.OverlayStyle {...props}>{contentElement}</Styled.OverlayStyle>}
      >
        <button onClick={handleCloseModal}>
          <IconExit />
        </button>
        <Styled.ModalContentStyle>
          <Styled.ModalIframeStyle src={champion.youTubeUrl}/>
          <h2>oi tudo bem?</h2>
        
        <div>{champion.name}</div>
        
        </Styled.ModalContentStyle>

      </Modal>
    </div>
  )
}

export default ModalChampionCard;