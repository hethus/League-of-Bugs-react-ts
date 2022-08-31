import {
  ErrorMessage,
  ModalOverlay,
  StyledInput,
} from "../../assets/styles/globalStyles";
import * as Styled from "./styles";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Dispatch, SetStateAction, useState } from "react";
import { api } from "../../services";
import toast from "react-hot-toast";
import { User } from "../../assets/types";
import { useUsers } from "../../contexts/users";
import { useNavigate } from "react-router-dom";

interface ModalUserSettingsProps {
  handleOpenModal: () => void;
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

interface UserData {
  name?: string;
  email?: string;
  cpf?: string;
  password?: string
}

const updateUserSchema = yup.object().shape({
  name: yup.string(),

  email: yup.string().email("Email must be a valid email"),

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
    ),

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
});

const ModalUserSettings = ({
  handleOpenModal,
  user,
  setUser,
}: ModalUserSettingsProps) => {
  const { handleGetUsers } = useUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(updateUserSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleUpdateUser = (data: UserData) => {

    api.patch(`/users/${user?.id}`, data, headers).then(() => {
      toast.success("Account updated!");
      handleGetUsers();
      setUser(undefined);
      handleOpenModal();
    });
  };

  const [deleteAccount, setDeleteAccount] = useState<number>(0);
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    const token = localStorage.getItem("token") || "";

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    if (deleteAccount === 1) {
      api.delete(`/users/${user?.id}`, headers).then((res) => {
        toast.success('Account deleted!');
        setDeleteAccount(0);
        navigate('/login');
      }).catch((err) => {
        toast.error(err.response.data.message);
        setDeleteAccount(0);
      })
    } else {
    setDeleteAccount(deleteAccount + 1);
    }
  }

  return (
    <ModalOverlay>
      <Styled.ModalRelative>
      <Styled.DeleteButton> 
      <Button
            onClick={() => {
              handleDeleteAccount()
            }}
            text={deleteAccount === 1 ? "Are you sure?" : "Delete account"}
            variant="cancel"
          />
      </Styled.DeleteButton>
      <Styled.ModalContainer
        onSubmit={ handleSubmit(handleUpdateUser) }
      >
        <h2>{"Edit Account"}</h2>
        <StyledInput
          defaultValue={user?.name}
          placeholder="Name"
          {...register("name")}
        />
        <StyledInput
          defaultValue={user?.email}
          placeholder="Email"
          {...register("email")}
        />
        <StyledInput
          defaultValue={user?.cpf}
          placeholder="CPF"
          {...register("cpf")}
        />
        <StyledInput
          defaultValue={user?.password}
          placeholder="Password"
          {...register("password")}
        />
        {
          <ErrorMessage className="error">
            {errors.name?.message ||
              errors.email?.message ||
              errors.cpf?.message ||
              errors.password?.message}
          </ErrorMessage>
        }
        <div>
          <Button
            onClick={() => {
              setUser(undefined);
              handleOpenModal();
            }}
            size="small"
            text="Cancel"
            variant="cancel"
          />
          <Button size="small" text="Submit" type="submit" />
        </div>
      </Styled.ModalContainer>
      </Styled.ModalRelative>
    </ModalOverlay>
  );
};

export default ModalUserSettings;
