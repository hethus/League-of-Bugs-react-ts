import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { Champion } from "../../assets/types";
import { api } from "../../services";
import { useAuth } from "../auth";

interface ChampionsContextProps {
  children: ReactNode;
}

interface ChampionsProviderData {
  champions: Champion[];
  handleGetChampions: () => void;
}

const ChampionsContext = createContext<ChampionsProviderData>(
  {} as ChampionsProviderData
);

export const ChampionsProvider = ({ children }: ChampionsContextProps) => {
  const { logged } = useAuth();

  const [champions, setChampions] = useState<Champion[]>([]);

  const handleGetChampions = () => {
    const token = localStorage.getItem("token") || "";

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    api.get("/champions", headers)
    .then((res) => setChampions(res.data));
  }

  useEffect(() => {
    if(logged) handleGetChampions();
  }, [logged])
  return (
    <ChampionsContext.Provider value={{ champions, handleGetChampions }}>{children}</ChampionsContext.Provider>
  )
}

export const useChampions = () => useContext(ChampionsContext);