import { ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import * as Styled from "./styles"
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../assets/styles/globalStyles";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useBugpoints } from "../../contexts/bugpoints";
import { BugPoint } from "../../assets/types";

interface ModalBugPointSettingsProps {
  handleOpenModal: () => void;
  bugpoint?: BugPoint;
}

interface ModalBugPointSettingsData {
  value?: number;
  imageUrl?: string;
  money?: number;
}

const newBugPointSchema = yup.object().shape({
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

const updateBugPointSchema = yup.object().shape({
  value: yup
    .number()
    .typeError("Amount must be a number")
    .integer("Amount must be an integer")
    .positive("Amount must be positive"),

  imageUrl: yup
    .string()
    .url("Enter a valid url"),

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
    ),
});

const ModalBugPointSettings = ({ handleOpenModal, bugpoint }: ModalBugPointSettingsProps) => {
  const { handleGetBugpoints } = useBugpoints();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ModalBugPointSettingsData>({ resolver: yupResolver(bugpoint? updateBugPointSchema : newBugPointSchema) });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  }

  const handleNewBugPoint = (data: ModalBugPointSettingsData) => {
    
    api.post("/bugpoints", data, headers).then((res) => {
      toast.success("Bugpoint created!");
      handleGetBugpoints();
      handleOpenModal();
    });
  };

  const handleUpdateBugPoint = (data: ModalBugPointSettingsData) => {
    
    api.patch(`/bugpoints/${bugpoint?.id}`, data, headers).then((res) => {
      toast.success("Bugpoint updated!");
      handleGetBugpoints();
      handleOpenModal();
    });
  }

  return (
    <ModalOverlay>
      <Styled.ModalContainer onSubmit={
        bugpoint
        ? handleSubmit(handleUpdateBugPoint) 
        : handleSubmit(handleNewBugPoint)
      }>
        <h2>{bugpoint? "Edit Bug Point" : "Add Bug Point"}</h2>
        <StyledInput
          value={bugpoint? bugpoint.value : ""}
          placeholder="BugPoint amount" 
          type="number"
          {...register("value")}
        />
        <StyledInput
          value={bugpoint? bugpoint.imageUrl : ""}
          placeholder="image Url"
          type="url"
          {...register("imageUrl")}
        />
        <StyledInput
          value={bugpoint? bugpoint.money : ""}
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

export default ModalBugPointSettings;