import Modal from 'react-modal';
import { useState } from 'react';
import * as Styled from './styles';
import { Champion, User } from '../../assets/types';
import { IconExit } from '../../assets/icons';
import Button from '../Button';
import toast from 'react-hot-toast';
import { useClasses } from '../../contexts/classes';
import { api } from '../../services';
import { useFavorites } from '../../contexts/favorites';

Modal.setAppElement('#root');

interface ChampionHomeCardProps {
  champion: Champion;
}

const ModalChampionCard = ({ champion }: ChampionHomeCardProps) => {
  const { favorites, handleGetFavorites } = useFavorites();

  const token = localStorage.getItem('token');

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }

  const user: User = JSON.parse(localStorage.getItem('user') || '');

  const handleSetFavorite = () => {

    const data = {
      userId: user.id,
      championName: champion.name,
    };

    api.post('/favorites', data, headers).then(() => {
      toast.success('Champion added to favorites');
      handleGetFavorites();
    }).catch(() => {
      toast.error('Error adding champion to favorites');
    });
  };

  const handleRemoveFavorite = () => {
    const favorite = favorites.find((favorite) => favorite.championName === champion.name);

    api.delete(`/favorites/${favorite?.id}`, headers).then(() => {
      toast.success('Champion removed from favorites');
      handleGetFavorites();
    }).catch(() => {
      toast.error('Error removing champion from favorites');
    });
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { classes } = useClasses();

  const handleOpenModal = () => {
    setModalIsOpen(true);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Button text={'Details'} onClick={handleOpenModal} size="small" className='Home-champion-detail' title='Details of the champion'/>
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
                  <Button variant={
                    (favorites.some((element) => {
                      return element.championName === champion.name
                    })) === true ? 'cancel' : undefined
                  } text={`${
                    (favorites.some((element) => {
                      return element.championName === champion.name
                    })) === true ? 'Unfavorite' : 'Favorite'
                  }`} onClick={() => {
                    if((favorites.some((element) => {
                      return element.championName === champion.name
                    })) === true) {
                      handleRemoveFavorite();
                    } else {
                      handleSetFavorite();
                    }
                  }} title='Favorite/Unfavorite champion'/>
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