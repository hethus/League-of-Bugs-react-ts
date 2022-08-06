import Button from "../../components/Button";
import Input from "../../components/Input";
import * as Styled from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogged }: LoginProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if(email === "admin" && password === "admin") {
      setLogged(true);
      navigate("/");
      toast.success("Login successful");
      return;
    }

    toast.error("username or password is invalid");
  };
  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <Styled.LoginLogoContainer>
          <h1>League of Bugs</h1>
          <img src={logo} alt="logo" />
        </Styled.LoginLogoContainer>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <span>
          <Button text="login" size="large" onClick={handleLogin}/>
        </span>
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;