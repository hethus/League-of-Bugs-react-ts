import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { User } from "../../assets/types";
import { api } from "../../services";
import { useAuth } from "../auth";

interface UsersContextProps {
  children: ReactNode;
}

interface UsersProviderData {
  users?: User[];
  user?: User;
  handleGetUsers: () => void;
}

const UsersContext = createContext<UsersProviderData>(
  {} as UsersProviderData
);

export const UsersProvider = ({ children }: UsersContextProps) => {

  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({} as User);

  const { logged } = useAuth();
  
  const handleGetUsers = () => {
    const token = localStorage.getItem("token") || "";
    const userLocal = JSON.parse(localStorage.getItem("user") || "");
  
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (userLocal.isAdmin) {
      api.get("/users", headers).then((res) => setUsers(res.data));
      api.get(`/users/${userLocal.id}`, headers).then((res) => setUser(res.data));
    } else {
      api.get(`/users/${userLocal.id}`, headers).then((res) => setUser(res.data));
    }
  }

  useEffect(() => {
    if(logged) handleGetUsers();
  }, [logged]);

  if (user.isAdmin) {
    return (
      <UsersContext.Provider value={{ users, user, handleGetUsers }}>
        {children}
      </UsersContext.Provider>
    );
  } else {
  return (
    <UsersContext.Provider value={{ user, handleGetUsers }}>
      {children}
    </UsersContext.Provider>
  );
  }
}

export const useUsers = () => useContext(UsersContext);
