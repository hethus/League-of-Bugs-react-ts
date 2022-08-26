import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { BugPoint } from "../../assets/types";
import { useBugpoints } from "../../contexts/bugpoints";
import { api } from "../../services";
import Button from "../Button";
import { DeleteModalContainer } from "./styles";

interface ModalBugpointDeleteProps {
  bugpointId: string | undefined;
  handleOpenDeleteModal: () => void;
  setBugpoint: Dispatch<SetStateAction<BugPoint | undefined>>
}

const ModalBugpointDelete = ({
  bugpointId,
  handleOpenDeleteModal,
  setBugpoint,
}: ModalBugpointDeleteProps) => {

  const { handleGetBugpoints } = useBugpoints();

  const handleDeleteBugpooint = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    api.delete(`/bugpoints/${bugpointId}`, headers).then(() => {
      toast.success("Bugpoint deleted successfully");
      handleDeleteBugpooint();
      setBugpoint(undefined);
      handleOpenDeleteModal();   
    })
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Delete the Bugpoint?</h2>
        <div>
          <Button onClick={() => {
            setBugpoint(undefined);
            handleOpenDeleteModal();
          }} text="Cancel" variant="cancel"/>
          <Button onClick={handleDeleteBugpooint} text="Delete!"/>
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default ModalBugpointDelete;