import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { Classe } from "../../assets/types";
import { useClasses } from "../../contexts/classes";
import { api } from "../../services";
import Button from "../Button";
import { DeleteModalContainer } from "./styles";

interface ModalClasseDeleteProps {
  classeId: string | undefined;
  handleOpenDeleteModal: () => void;
  setClasse: Dispatch<SetStateAction<Classe | undefined>>
}

const ModalClasseDelete = ({
  classeId,
  handleOpenDeleteModal,
  setClasse,
}: ModalClasseDeleteProps) => {

  const { handleGetClasses } = useClasses();

  const handleDeleteClasse = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    api.delete(`/classes/${classeId}`, headers).then(() => {
      toast.success("Classe deleted successfully");
      handleGetClasses();
      setClasse(undefined);
      handleOpenDeleteModal();   
    })
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Delete the Classe?</h2>
        <div>
          <Button onClick={() => {
            setClasse(undefined);
            handleOpenDeleteModal();
          }} text="Cancel" variant="cancel"/>
          <Button onClick={handleDeleteClasse} text="Delete!"/>
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default ModalClasseDelete;