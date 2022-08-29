import Button from "../../components/Button";
import * as Styled from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledInput } from "../../assets/styles/globalStyles";
import { api } from "../../services";
import { ErrorMessage } from "../../assets/styles/globalStyles";
import { InfinitySpin } from "react-loader-spinner";
import { useState } from "react";
import ModalNewUser from "../../components/ModalNewUser";


interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      `Password must contain at least:
        \xa0\xa0\xa0•one uppercase
        \xa0\xa0\xa0•one number
        \xa0\xa0\xa0•one special character
      `
    )
    .required("Password is required"),
});

const Login = () => {
  const { login, requisition, setRequisition } = useAuth();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    setRequisition(true);
    
      api.post(
        "/auth/login",
        data
      ).then((res) => {
        setRequisition(false);
        login({token: res.data.token, user: res.data.user});
      }).catch(() => {
        setRequisition(false);
        return toast.error("username or password is invalid!");
      });
    }
  return (
    <Styled.LoginPageContainer>
      <Styled.LoginContainer>
      <Styled.LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
        <Styled.LoginLogoContainer>
          <h1>League of Bugs</h1>
          <img src={logo} alt="logo" />
        </Styled.LoginLogoContainer>
        <StyledInput
          onKeyUp={
            (e) => {
              if(e.key === "Enter") {
                handleSubmit(handleLogin);
              }
            }
          }
          placeholder="Email"
          {...register("email")}
        />
        <StyledInput
          type="password"
          onKeyUp={
            (e) => {
              if(e.key === "Enter") {
                handleSubmit(handleLogin);
              }
            }
          }
          placeholder="Password"
          {...register("password")}
        />

        <ErrorMessage>
          {errors.email?.message || errors.password?.message || ""}
        </ErrorMessage>

        <span>
          {requisition? (
              <p>
                <InfinitySpin width='140' color="#000000" />
              </p>
            ):(
              <Button text="Login" size="large" type="submit"/>
            )
          }
          
        </span>
      </Styled.LoginFormContainer>
        <Styled.ButtonRegisterContainer>
        <button onClick={handleOpenModal}> Register </button>
      </Styled.ButtonRegisterContainer>
      </Styled.LoginContainer>

      {openModal && <ModalNewUser handleOpenModal={handleOpenModal}/>}
    </Styled.LoginPageContainer>
  );
};

export default Login;
