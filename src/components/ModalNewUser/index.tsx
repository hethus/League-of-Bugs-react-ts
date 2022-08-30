import { ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import * as Styled from "./styles"
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../assets/styles/globalStyles";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import { InfinitySpin } from "react-loader-spinner";

interface ModalNewUserProps {
  handleOpenModal: () => void;
}

interface ModalNewUserData {
  name: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword?: string;
  isAdmin: boolean;
  bugPoint: number;
}

const newUserSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Name must be at least 4 characters")
    .max(20, "Name must be at most 20 characters")
    .required("Name is required"),

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  cpf: yup
    .string()
    .test(
      "cpf",
      "Invalid CPF, example: 00000000000 without dots or dashes",
      (value) => {
        if (value != undefined) {
          const pattern = /^\d{11}$/;

          return pattern.test(value);
        }
        return true;
      }
    )
    .required("CPF is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .test(
      "password",
      "Password must contain at least one uppercase letter, one lowercase letter and one number",
      (value) => {
        if (value != undefined) {
          const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

          return pattern.test(value);
        }
        return true;
      })
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),

});

const ModalNewUser = ({ handleOpenModal}: ModalNewUserProps) => {
  const { requisition, setRequisition } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ModalNewUserData>({ resolver: yupResolver(newUserSchema) });

  const handleNewUser = (data: ModalNewUserData) => {
    setRequisition(true);
    delete data.confirmPassword;

    const emailSplit = data.email.split("@");

    if (emailSplit[1] === import.meta.env.VITE_ADMIN_EMAIL) {
      
      data.isAdmin = true;
    } else {
      data.isAdmin = false;
    }

    data.bugPoint = 0;
    
    api.post("/users", data).then((res) => {
      toast.success("User created!");
      setRequisition(false);
      handleOpenModal();
    }).catch((err) => {
      toast.error("Error creating user");
      setRequisition(false);
    });
  };

  return (
    <ModalOverlay>
      <Styled.ModalContainer onSubmit={handleSubmit(handleNewUser)}>
        <h2>{"Register"}</h2>
        <StyledInput
          placeholder="Name"
          {...register("name")}
        />
        <StyledInput
          placeholder="Email"
          {...register("email")}
        />
        <StyledInput
          placeholder="CPF"
          {...register("cpf")}
        />
        <StyledInput
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        <StyledInput
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword")}
        />
        <ErrorMessage>
          {errors.name?.message || errors.email?.message || errors.cpf?.message || errors.password?.message || errors.confirmPassword?.message || ""}
        </ErrorMessage>

        <div>
          {requisition ? (
            <p>
              <InfinitySpin width='100' color="#000000" />
            </p>
          ) : (
            <>
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
            </>
          )
          }

        </div>
      </Styled.ModalContainer>
    </ModalOverlay>
  )
}

export default ModalNewUser;