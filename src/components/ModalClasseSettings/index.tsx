import { ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styles";

interface ModalClasseSettingsProps {
  handleOpenModal: () => void;
}

const ModalClasseSettings = ({ handleOpenModal }: ModalClasseSettingsProps)  => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Create new classe</h2>
        <StyledInput placeholder="Name of the Classe"/>
        <div>
          <Button text="Cancel" variant="cancel" onClick={handleOpenModal}/>
          <Button text="Submit"/>
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default ModalClasseSettings;