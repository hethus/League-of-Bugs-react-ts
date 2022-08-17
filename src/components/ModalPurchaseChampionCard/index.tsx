import Modal from 'react-modal';
import { useState } from 'react';
import * as Styled from './styles';
import { Champion } from '../../assets/types';
import { IconExit } from '../../assets/icons';
import Button from '../Button';
import toast from 'react-hot-toast';
import { useClasses } from '../../contexts/classes';

Modal.setAppElement('#root');

interface ModalPurchaseChampionCardProps {
  champion: Champion;
}

const ModalPurchaseChampionCard = ({ champion }: ModalPurchaseChampionCardProps) => {
  const { classes } = useClasses();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Button text={'Details'} onClick={handleOpenModal} size="small"className='PurchaseChampion-champion-detail' title='Details of the champion'/>
      <Modal
        isOpen={modalIsOpen}
        className="_"
        overlayClassName="_"
        onRequestClose={handleCloseModal}
        contentElement={(props, children) => <Styled.ModalStyle {...props}>{children}</Styled.ModalStyle>}
        overlayElement={(props, contentElement) => <Styled.OverlayStyle {...props}>{contentElement}</Styled.OverlayStyle>}
      >
        <Styled.ModalStyleButton onClick={handleCloseModal}>
          <IconExit />
        </Styled.ModalStyleButton>
        <Styled.ModalDisplayContainer>

          <Styled.ModalBodyContainer>
          <Styled.ModalContentStyle>
          <Styled.ModalIframeStyle src={champion.youTubeUrl} title='Video of the champion'/>
          <Styled.ModalDescriptionContainer>
            <p title='Description of the champion'>
              Description:
            </p>
            {champion.description}
          </Styled.ModalDescriptionContainer>
        </Styled.ModalContentStyle>
          </Styled.ModalBodyContainer>
          <Styled.ModalTableContainer>
            <Styled.ModalTableRow>
              <h2 title='Name of the champion'>{champion.name}</h2>
              <h3 title='Title of the champion'>{champion.title}</h3>
            </Styled.ModalTableRow>
            <Styled.ModalImageTable src={champion.imageUrl} alt={champion.name} title='Image of the champion'/>
            <Styled.ModalDetailTable>
              <Styled.ModalChampionTableContainer>
                <Styled.ModalChampionDetailClasse color={champion.difficulty} title='Difficulty of the champion'>
                  <p>
                    Difficulty:
                  </p>
                  <span></span>
                  
                  {champion.difficulty}
                </Styled.ModalChampionDetailClasse>
                <Styled.ModalChampionClasseName title='Classe of the champion'>
                  {classes.map((element) => {
                    if(element.id === champion.classeId) {
                      return element.name
                    }
                  })}
                </Styled.ModalChampionClasseName>
              </Styled.ModalChampionTableContainer>
              <Styled.ModalFooter>
                <p>
                {`Launched in ${new Date(`${champion.createdAt}`).toLocaleDateString()}`}
                </p>
                <Styled.ModalFooterButton>
                  <Button text={'Buy'} onClick={() => toast.error("section under development")} title='Buy champion'/>
                </Styled.ModalFooterButton>
              </Styled.ModalFooter>

            </Styled.ModalDetailTable>
          </Styled.ModalTableContainer>
        </Styled.ModalDisplayContainer>
      </Modal>
    </div>
  )
}

export default ModalPurchaseChampionCard;