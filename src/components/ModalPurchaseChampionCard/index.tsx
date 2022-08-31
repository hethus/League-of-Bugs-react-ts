import Modal from 'react-modal';
import { useState } from 'react';
import * as Styled from './styles';
import { Champion, User } from '../../assets/types';
import { IconExit } from '../../assets/icons';
import Button from '../Button';
import toast from 'react-hot-toast';
import { useClasses } from '../../contexts/classes';
import { api } from '../../services';
import { usePurchasedChampions } from '../../contexts/purchasedChampions';
import { useUsers } from '../../contexts/users';

Modal.setAppElement('#root');

interface ModalPurchaseChampionCardProps {
  champion: Champion;
}

const ModalPurchaseChampionCard = ({ champion }: ModalPurchaseChampionCardProps) => {
  const { classes } = useClasses();
  const { handleGetUsers } = useUsers();

  const { handleGetPurchasedChampions } = usePurchasedChampions();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  const [changePurchase, setChangePurchase] = useState<number>(0);

  const handlePurchase = () => {
    const token = localStorage.getItem("token") || "";
    const user: User = JSON.parse(localStorage.getItem('user') || '');

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    if (changePurchase === 1) {
      api.post('/purchase/champions', {
        userId: user.id,
        championName: champion.name
      }, headers).then((res) => {
        toast.success('Champion purchased successfully!');
        setChangePurchase(0);
        handleGetPurchasedChampions();
        handleGetUsers();
        handleCloseModal();
      }).catch((err) => {
        toast.error(err.response.data.message);
        setChangePurchase(0);
      })
    } else {
    setChangePurchase(changePurchase + 1);
    }
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
        <Styled.ModalStyleButton onClick={() => {
          setChangePurchase(0);
          handleCloseModal();
        }}>
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
                  <p>
                    {champion.price} BP's
                  </p>
                </Styled.ModalChampionClasseName>
              </Styled.ModalChampionTableContainer>
              <Styled.ModalFooter>
                <p>
                {`Launched in ${new Date(`${champion.createdAt}`).toLocaleDateString()}`}
                </p>
                <Styled.ModalFooterButton>
                  {changePurchase === 0 ? (
                    <Button text='Buy' onClick={() => handlePurchase()} title='Buy champion'/>
                  ) : (
                    <Button text={'Confirm?'} variant='cancel' onClick={() => handlePurchase()} title='Confirm purchase'/>
                  )}
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