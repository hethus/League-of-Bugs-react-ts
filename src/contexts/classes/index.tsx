import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { Classe } from "../../assets/types";
import { api } from "../../services";
import { useAuth } from "../auth";

interface ClassesContextProps {
  children: ReactNode;
}

interface ClassesProviderData {
  classes: Classe[];
  handleGetClasses: () => void;
}

const ClassesContext = createContext<ClassesProviderData>(
  {} as ClassesProviderData
);

export const ClassesProvider = ({ children }: ClassesContextProps) => {
  const { logged } = useAuth();

  const [classes, setClasses] = useState<Classe[]>([]);

  const handleGetClasses = () => {
    const token = localStorage.getItem("token") || "";

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    api.get("/classes", headers)
    .then((res) => setClasses(res.data));
  }

  useEffect(() => {
    if(logged) handleGetClasses();
  }, [logged])
  return (
    <ClassesContext.Provider value={{ classes, handleGetClasses }}>{children}</ClassesContext.Provider>
  )
}

export const useClasses = () => useContext(ClassesContext);