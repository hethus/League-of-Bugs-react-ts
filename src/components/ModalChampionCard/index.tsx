import Modal from 'react-modal';
import { useState } from 'react';
import * as Styled from './styles';

Modal.setAppElement('#root');

const ModalChampionCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button onClick={handleOpenModal} >
      abrir
      </button>
      <Modal
        isOpen={modalIsOpen}
        className="_"
        overlayClassName="_"
        onRequestClose={handleCloseModal}
        contentElement={(props, children) => <Styled.ModalStyle {...props}>{children}</Styled.ModalStyle>}
        overlayElement={(props, contentElement) => <Styled.OverlayStyle {...props}>{contentElement}</Styled.OverlayStyle>}
      >
        <h2>oi tudo bem?</h2>
        <button onClick={handleCloseModal}>
          close
        </button>
        <div>modaleusou</div>
      </Modal>
    </div>
  )
}

export default ModalChampionCard;