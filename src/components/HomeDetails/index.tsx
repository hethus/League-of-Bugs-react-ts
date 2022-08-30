import { DateTime } from 'luxon';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { PurchaseChampion } from '../../assets/types';
import { useChampions } from '../../contexts/champions';
import { usePurchasedChampions } from '../../contexts/purchasedChampions';
import { useUsers } from '../../contexts/users';
import ButtonHome from '../ButtonHome';
import ModalRefoundChampion from '../ModalRefoundChampion';
import * as Styled from './styles';

const HomeDetails = () => {
  const date = new Date();
  const dateFormated = date.setMonth(date.getMonth() - 3);

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const { purchasedChampions } = usePurchasedChampions();

  const { champions } = useChampions();

  const { user } = useUsers();

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  }

  const [refound, setRefound] = useState<PurchaseChampion>();

  const UserSort = purchasedChampions.sort((a, b) => {
    return DateTime.fromISO(`${b.purchasedAt}`).toMillis() - DateTime.fromISO(`${a.purchasedAt}`).toMillis();
  });

  return (
    <Styled.PurchaseDetailsContainer>
      {user?.isAdmin ? (
      <Styled.PurchaseDetailsHeaderAdmin className='User-name-details'>
        <h3>{user?.name}</h3>
        <h4>Admin</h4>
      </Styled.PurchaseDetailsHeaderAdmin>
        ) : (
      <Styled.PurchaseDetailsHeader className='User-name-details'>
        <h3>{user?.name}</h3>
      </Styled.PurchaseDetailsHeader>
      )}
    <Styled.CheckoutDetailsContainer>
      <Styled.CheckoutDetailsHeader className='Home-details-info'>
        <h3>List of purchased champions</h3>
      </Styled.CheckoutDetailsHeader>
      <Styled.HomeDetailsContainer>
        <Styled.homeDetailsCard>
          <div>
            <p>Image</p>
            <h3>name</h3>
            <span>purchase date</span>
          </div>
        </Styled.homeDetailsCard>
          {UserSort!.map((element) => (
            <Styled.homeDetailsCardContainer key={element.id}>
              <div>
              <img src={champions.find((champion) => champion.name === element.championName)?.imageUrl} alt={element.championName} />
              <h3>{element.championName}</h3>
              <p>{`${DateTime.fromISO(`${element.purchasedAt}`).toLocaleString()}`}</p>
              </div>
              <section className='Home-details-refund'>
              {DateTime.fromISO(`${element.purchasedAt}`).toMillis() >= dateFormated ? (
                  <ButtonHome text="refund" onClick={() => {
                    handleOpenDeleteModal()
                    setRefound(element)
                  }} variant="home"/>
              ) : (
                <ButtonHome text='refund' onClick={() =>toast.error("You cannot ask for refunds on champions purchased more than 3 months ago")} variant="disabled" >
                </ButtonHome>
              )}
              </section>
            </Styled.homeDetailsCardContainer>
          ))}
      </Styled.HomeDetailsContainer>
    </Styled.CheckoutDetailsContainer>
    {openDeleteModal && (
        <ModalRefoundChampion
          champion={refound}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}
  </Styled.PurchaseDetailsContainer>
  );
}

export default HomeDetails;