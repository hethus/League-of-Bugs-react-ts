import { useState } from 'react';
import toast from 'react-hot-toast';
import { mockedChampions, mockedUser } from '../../assets/mocks';
import { PurchaseChampion } from '../../assets/types';
import ButtonHome from '../ButtonHome';
import ModalRefoundChampion from '../ModalRefoundChampion';
import * as Styled from './styles';

const HomeDetails = () => {
  const date = new Date();
  const dateFormated = date.setMonth(date.getMonth() - 3);

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  }

  const [refound, setRefound] = useState<PurchaseChampion>();

  const mockedUserSort = mockedUser.purchasedChampions!.sort((a, b) => {
    return (b.purchasedAt!.getTime()) - (a.purchasedAt!.getTime());
  });

  return (
    <Styled.PurchaseDetailsContainer>
      <Styled.PurchaseDetailsHeader className='User-name-details'>
        <h3>{mockedUser.name}</h3>
      </Styled.PurchaseDetailsHeader>
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
          {mockedUserSort!.map((element) => (
            <Styled.homeDetailsCardContainer key={element.id}>
              <div>
              <img src={mockedChampions.find((champion) => champion.name === element.championName)!.imageUrl} alt={element.championName} />
              <h3>{element.championName}</h3>
              <p>{`${(element.purchasedAt)?.toLocaleDateString()}`}</p>
              </div>
              <section className='Home-details-refund'>
              {element.purchasedAt!.getTime() >= dateFormated ? (
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