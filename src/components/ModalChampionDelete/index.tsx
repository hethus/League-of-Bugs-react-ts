import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { Champion } from "../../assets/types";
import { useChampions } from "../../contexts/champions";
import { api } from "../../services";
import Button from "../Button";
import { DeleteModalContainer } from "./styles";

interface ModalChampionDeleteProps {
  championId: string | undefined;
  handleOpenDeleteModal: () => void;
  setChampion: Dispatch<SetStateAction<Champion | undefined>>
}

const ModalChampionDelete = ({
  championId,
  handleOpenDeleteModal,
  setChampion,
}: ModalChampionDeleteProps) => {

  const { handleGetChampions } = useChampions();

  const handleDeleteChampion = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    api.delete(`/champions/${championId}`, headers).then(() => {
      toast.success("Champion deleted successfully");
      handleGetChampions();
      setChampion(undefined);
      handleOpenDeleteModal();   
    })
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Delete Champion?</h2>
        <div>
          <Button onClick={() => {
            setChampion(undefined);
            handleOpenDeleteModal();
          }} text="Cancel" variant="cancel"/>
          <Button onClick={handleDeleteChampion} text="Delete!"/>
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default ModalChampionDelete;