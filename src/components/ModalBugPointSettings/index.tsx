import { StyledInput } from "../../assets/styles/globalStyles";
import * as Styled from "./styles"
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../assets/styles/globalStyles";

interface ModalBugPointSettingsProps {
  handleOpenModal: () => void;
}

interface ModalBugPointSettingsData {
  amount: number;
  url: string;
  price: number;
}

const newBugPointSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .integer("Amount must be an integer")
    .positive("Amount must be positive")
    .required("Amount is required"),

  url: yup
    .string()
    .url("Enter a valid url")
    .required("Image Url is required"),

  price: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Price must be positive")
    .required("Price is required"),

});

const ModalBugPointSettings = ({ handleOpenModal }: ModalBugPointSettingsProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ModalBugPointSettingsData>({ resolver: yupResolver(newBugPointSchema) });

  const handleNewBugPoint = (data: ModalBugPointSettingsData) => {
    console.log(data);
  }

  return (
    <Styled.ModalOverlay>
      <Styled.ModalContainer onSubmit={handleSubmit(handleNewBugPoint)}>
        <h2>Add Bug Point</h2>
        <StyledInput
          placeholder="BugPoint amount" 
          type="number"
          {...register("amount")}
        />
        <StyledInput
          placeholder="image Url"
          type="url"
          {...register("url")}
        />
        <StyledInput
          placeholder="Price"
          type="number" 
          {...register("price")}
        />
        <ErrorMessage>
          {errors.amount?.message || errors.url?.message || errors.price?.message || ""}
        </ErrorMessage>
        <div>
          <Button
            onClick={handleOpenModal}
            text="Cancel"
            size="small"
            variant="cancel"
          />

          <Button
            text="Submit"
            size="small"
            type="submit"
          />

        </div>
      </Styled.ModalContainer>
    </Styled.ModalOverlay>
  )
}

export default ModalBugPointSettings;