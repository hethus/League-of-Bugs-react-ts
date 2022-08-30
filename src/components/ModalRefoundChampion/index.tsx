import toast from "react-hot-toast";
import {  PurchaseChampion } from "../../assets/types";
import { useFavorites } from "../../contexts/favorites";
import { usePurchasedChampions } from "../../contexts/purchasedChampions";
import { api } from "../../services";
import Button from "../Button";
import * as Styled from "./styles";

interface ModalRefoundChampionProps {
  champion: PurchaseChampion | undefined;
  handleOpenDeleteModal: () => void;
}

const ModalRefoundChampion = ({
  champion,
  handleOpenDeleteModal,
}: ModalRefoundChampionProps) => {

  const { handleGetPurchasedChampions } = usePurchasedChampions();
  const { favorites } = useFavorites();

  const handleRefundChampion = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    if(favorites.find((favorite) => favorite.championName === champion?.championName)) {
      toast.error('You cannot refund a champion that is in your favorites');
      return;
    }

    api.delete(`/purchase/champions/${champion?.id}`, headers).then(() => {
      toast.success("Champion refunded with success!");
      handleGetPurchasedChampions();
      handleOpenDeleteModal();   
    }).catch(() => {
      toast.error("Error to refund champion!");
    });
  };

  return (
    <Styled.ModalOverlay>
      <Styled.DeleteModalContainer>
        <h2>
          Are you sure you want to refound {champion?.championName}?
        </h2>
        <div>
          <Button onClick={() => {
            handleOpenDeleteModal();
          }} text="No, cancel!" variant="cancel"/>
          <Button onClick={handleRefundChampion} text="Yes!"/>
        </div>
      </Styled.DeleteModalContainer>
    </Styled.ModalOverlay>
  );
};

export default ModalRefoundChampion;