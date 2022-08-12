import Button from "../../components/Button";
import Input from "../../components/Input";
import * as Styled from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../contexts/auth";

const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if(email !== "" && password !== "") {
      const data = {
        email,
        password
      }

      return axios.post(
        "http://localhost:8000/auth/login",
        data
      ).then((res) => {
        login({token: res.data.token, user: res.data.user});

      }).catch(() => {
        return toast.error("username or password is invalid!");
      });
    }

    toast.error("fill in the fields to login");
  };
  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <Styled.LoginLogoContainer>
          <h1>League of Bugs</h1>
          <img src={logo} alt="logo" />
        </Styled.LoginLogoContainer>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} onKeyUp={
          (e) => {
            if(e.key === "Enter") {
              handleLogin();
            }
          }
        } placeholder="Email"/>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={
          (e) => {
            if(e.key === "Enter") {
              handleLogin();
            }
          }
        } placeholder="Password" />
        <span>
          <Button text="login" size="large" onClick={handleLogin}/>
        </span>
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
