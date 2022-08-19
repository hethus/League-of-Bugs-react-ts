import { ErrorMessage, ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useClasses } from "../../contexts/classes";

interface ModalClasseSettingsProps {
  handleOpenModal: () => void;
}

interface NewClasseData {
  name: string;
}

const newClasseSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required"),
});

const ModalClasseSettings = ({ handleOpenModal }: ModalClasseSettingsProps)  => {
  const { handleGetClasses } = useClasses();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewClasseData>({
    resolver: yupResolver(newClasseSchema),
  });

  const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

  const handleNewClasse = (data: NewClasseData) => {
    console.log(data);

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

  return (
    <ModalOverlay>
      <ModalContainer onSubmit={handleSubmit(handleNewClasse)}>
        <h2>Create new classe</h2>
        <StyledInput placeholder="Name of the Classe" {...register("name")} />
        <ErrorMessage className="error">{errors.name?.message}</ErrorMessage>
        <div>
          <Button text="Cancel" variant="cancel" onClick={handleOpenModal} size="small" />
          <Button text="Submit" type="submit" size="small" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default ModalClasseSettings;