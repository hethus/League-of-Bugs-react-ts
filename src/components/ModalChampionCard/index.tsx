import Modal from 'react-modal';
import { useState } from 'react';
import * as Styled from './styles';
import { Champion } from '../../assets/types';
import { IconExit } from '../../assets/icons';
import Button from '../Button';
import { mockedClasse, mockedFavorites, mockedPurchaseChampions, mockedUser } from '../../assets/mocks';
import toast from 'react-hot-toast';

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
      <Button text={'Details'} onClick={handleOpenModal} size="small"/>
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
          <Styled.ModalIframeStyle src={champion.youTubeUrl}/>
          <Styled.ModalDescriptionContainer>
            <p>
              Description:
            </p>
            {champion.description}
          </Styled.ModalDescriptionContainer>
        </Styled.ModalContentStyle>
          </Styled.ModalBodyContainer>
          <Styled.ModalTableContainer>
            <Styled.ModalTableRow>
              <h2>{champion.name}</h2>
              <h3>{champion.title}</h3>
            </Styled.ModalTableRow>
            <Styled.ModalImageTable src={champion.imageUrl} alt={champion.name} />
            <Styled.ModalDetailTable>
              <Styled.ModalChampionTableContainer>
                <Styled.ModalChampionDetailClasse color={champion.difficulty}>
                  <p>
                    Difficulty:
                  </p>
                  <span></span>
                  
                  {champion.difficulty}
                </Styled.ModalChampionDetailClasse>
                <Styled.ModalChampionClasseName>
                  {mockedClasse.map((element) => {
                    if(element.id === champion.classeId) {
                      return element.name
                    }
                  })}
                </Styled.ModalChampionClasseName>
              </Styled.ModalChampionTableContainer>
              <Styled.ModalFooter>
                <p>
                {`Launched in ${(champion.createdAt)?.toLocaleDateString()}`}
                </p>
                <Styled.ModalFooterButton>
                  <Button variant={
                    (mockedFavorites.some((element) => {
                      return element.championName === champion.name
                    })) === true ? 'cancel' : undefined
                  } text={`${
                    (mockedFavorites.some((element) => {
                      return element.championName === champion.name
                    })) === true ? 'Unfavorite' : 'Favorite'
                  }`} onClick={() => toast.error("section under development")}/>
                </Styled.ModalFooterButton>
              </Styled.ModalFooter>

            </Styled.ModalDetailTable>
          </Styled.ModalTableContainer>
        </Styled.ModalDisplayContainer>
      </Modal>
    </div>
  )
}

export default ModalChampionCard;