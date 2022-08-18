import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "../../assets/types";
import { api } from "../../services";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthProviderData {
  logged: boolean;
  login: (params: LoginParams) => void;
  logout: () => void;
}

interface LoginParams {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const navigate = useNavigate();
  
  const [logged, setLogged] = useState<boolean>(false);
  
  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    navigate("/");
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/login");
  };

  const checkTokenExpiration = () => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const token = localStorage.getItem("token") || "";

    const headers = {
      headers : {
        Authorization: `Bearer ${token}`,
      }
    }

    api.get(
      `/users/${user.id}`,
      headers
    ).then((res) => {
      setLogged(true);
      navigate("/");
    }).catch((err) => {
      logout();
      toast.success("Need to login again");
    });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration();

    
  }, [])

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () =>  useContext(AuthContext);