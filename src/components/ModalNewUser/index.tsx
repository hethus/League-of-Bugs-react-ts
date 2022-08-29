import { ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import * as Styled from "./styles"
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../assets/styles/globalStyles";
import { api } from "../../services";
import toast from "react-hot-toast";

interface ModalNewUserProps {
  handleOpenModal: () => void;
}

interface ModalNewUserData {
  value?: number;
  imageUrl?: string;
  money?: number;
}

const newUserSchema = yup.object().shape({
  value: yup
    .number()
    .typeError("Amount must be a number")
    .integer("Amount must be an integer")
    .positive("Amount must be positive")
    .required("Amount is required"),

  imageUrl: yup
    .string()
    .url("Enter a valid url")
    .required("Image Url is required"),

  money: yup
    .number()
    .transform((_, value) => {
      if (value.includes('.')) {
        return +value;
      }
      return +value.replace(/,/, '.');
    })
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .test(
      "is-decimal",
      "The amount should be a decimal with maximum two digits after comma",
      (value) => {
        if (value != undefined) {
          const patternTwoDigitsAfterComma = /^\d+(\.\d{0,2})?$/;
          const valueString = value.toString();

          return patternTwoDigitsAfterComma.test(valueString);
        }
        return true;
      }
    )
    .required("Price is required"),

});

const ModalNewUser = ({ handleOpenModal}: ModalNewUserProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ModalNewUserData>({ resolver: yupResolver(newUserSchema) });

  const handleNewUser = (data: ModalNewUserData) => {
    
    api.post("/users", data).then((res) => {
      toast.success("Bugpoint created!");

      handleOpenModal();
    });
  };

  return (
    <ModalOverlay>
      <Styled.ModalContainer onSubmit={handleSubmit(handleNewUser)}>
        <h2>{"Register"}</h2>
        <StyledInput
          placeholder="BugPoint amount" 
          type="number"
          {...register("value")}
        />
        <StyledInput
          placeholder="image Url"
          type="url"
          {...register("imageUrl")}
        />
        <StyledInput
          placeholder="Price"
          {...register("money")}
        />
        <ErrorMessage>
          {errors.value?.message || errors.imageUrl?.message || errors.money?.message || ""}
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
    </ModalOverlay>
  )
}

export default ModalNewUser;