import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { Favorite, User } from "../../assets/types";
import { api } from "../../services";
import { useAuth } from "../auth";

interface FavoritesContextProps {
  children: ReactNode;
}

interface FavoritesProviderData {
  favorites: Favorite[];
  handleGetFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesProviderData>(
  {} as FavoritesProviderData
);

export const FavoritesProvider = ({ children }: FavoritesContextProps) => {
  const { logged } = useAuth();

  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const handleGetFavorites = () => {
    const token = localStorage.getItem("token") || "";
    const user: User = JSON.parse(localStorage.getItem('user') || '');

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    api.get(`/favorites/user/${user.id}`, headers)
    .then((res) => setFavorites(res.data));
  }

  useEffect(() => {
    if(logged) handleGetFavorites();
  }, [logged])
  return (
    <FavoritesContext.Provider value={{ favorites, handleGetFavorites }}>{children}</FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext);