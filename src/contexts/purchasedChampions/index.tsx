import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { PurchaseChampion } from "../../assets/types";
import { api } from "../../services";
import { useAuth } from "../auth";
import { useChampions } from "../champions";
import { useClasses } from "../classes";

interface PurchasedChampionsContextProps {
  children: ReactNode;
}

interface PurchasedChampionsProviderData {
  purchasedChampions: PurchaseChampion[];
  handleGetPurchasedChampions: () => void;
}

const PurchasedChampionsContext = createContext<PurchasedChampionsProviderData>(
  {} as PurchasedChampionsProviderData
);

export const PurchasedChampionsProvider = ({ children }: PurchasedChampionsContextProps) => {
  const { logged } = useAuth();

  const [purchasedChampions, setPurchasedChampions] = useState<PurchaseChampion[]>([]);

  const { champions } = useChampions();

  const { classes } = useClasses();

  const handleGetPurchasedChampions = () => {
    const token = localStorage.getItem("token") || "";
    const user = JSON.parse(localStorage.getItem("user") || "");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    api.get(`/purchase/champions/user/${user.id}`, headers)
    .then((res) => {
      const purchasedChampions = res.data.map((purchasedChampion: PurchaseChampion) => {
        const champion = champions.find(champion => champion.name === purchasedChampion.championName);
        const classe = classes.find(classe => classe.id === champion?.classeId);

        return {
          ...purchasedChampion,
          classe: classe?.name,
        }
      })
      return setPurchasedChampions(purchasedChampions)
    });
  }

  useEffect(() => {
    if(logged) handleGetPurchasedChampions();
  }, [logged])
  return (
    <PurchasedChampionsContext.Provider value={{ purchasedChampions, handleGetPurchasedChampions }}>{children}</PurchasedChampionsContext.Provider>
  )
}

export const usePurchasedChampions = () => useContext(PurchasedChampionsContext);