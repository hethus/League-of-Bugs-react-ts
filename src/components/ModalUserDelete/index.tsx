import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { User } from "../../assets/types";
import { useUsers } from "../../contexts/users";
import { api } from "../../services";
import Button from "../Button";
import { DeleteModalContainer } from "./styles";

interface ModalUserDeleteProps {
  userId: string | undefined;
  handleOpenDeleteModal: () => void;
  setUser: Dispatch<SetStateAction<User | undefined>>
}

const ModalUserDelete = ({
  userId,
  handleOpenDeleteModal,
  setUser,
}: ModalUserDeleteProps) => {

  const { handleGetUsers } = useUsers();

  const handleDeleteUser = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    api.delete(`/users/${userId}`, headers).then(() => {
      toast.success("User deleted successfully");
      handleGetUsers();
      setUser(undefined);
      handleOpenDeleteModal();   
    })
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Delete User?</h2>
        <div>
          <Button onClick={() => {
            setUser(undefined);
            handleOpenDeleteModal();
          }} text="Cancel" variant="cancel"/>
          <Button onClick={handleDeleteUser} text="Delete!"/>
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default ModalUserDelete;