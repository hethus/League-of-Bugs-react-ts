import { ErrorMessage, ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useClasses } from "../../contexts/classes";
import { Classe } from "../../assets/types";
import { Dispatch, SetStateAction } from "react";

interface ModalClasseSettingsProps {
  handleOpenModal: () => void;
  classe?: Classe;
  setClasse: Dispatch<SetStateAction<Classe | undefined>>;
}

interface ClasseData {
  name: string;
}

const ClasseSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required"),
});

const ModalClasseSettings = ({ handleOpenModal, classe, setClasse }: ModalClasseSettingsProps)  => {
  const { handleGetClasses } = useClasses();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClasseData>({
    resolver: yupResolver(ClasseSchema),
  });

  const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

  const handleNewClasse = (data: ClasseData) => {

    api
      .post("/classes", data, headers)
      .then(() => {
        toast.success("Classe created successfully");
        handleGetClasses();
        handleOpenModal();
      })
      .catch((err) => {
        toast.error(`Error creating classe because: \n\n ${
          err.response.data.message
        }`);
      });
  }

  const handleUpdateClasse = (data: ClasseData) => {
    api.patch(`/classes/${classe?.id}`, data, headers)
      .then(() => {
        toast.success("Classe updated successfully");
        handleGetClasses();
        handleOpenModal();
      })
      .catch((err) => {
        toast.error(`Error updating classe because: \n\n ${
          err.response.data.message
        }`);
      });
  }

  return (
    <ModalOverlay>
      <ModalContainer onSubmit={handleSubmit(
        classe ? handleUpdateClasse : handleNewClasse
        )}
      >
        <h2>{ classe? "Edit the Classe" : "Create new Classe" }</h2>
        <StyledInput
          placeholder="Name of the Classe"
          {...register("name")}
          defaultValue={classe? classe.name : ""}
        />
        <ErrorMessage className="error">{errors.name?.message}</ErrorMessage>
        <div>
          <Button text="Cancel" variant="cancel" onClick={() => {
            setClasse(undefined);
            handleOpenModal();
          }} size="small" />
          <Button text="Submit" type="submit" size="small" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default ModalClasseSettings;