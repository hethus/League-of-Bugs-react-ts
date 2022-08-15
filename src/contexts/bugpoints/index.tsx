import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { BugPoint } from "../../assets/types";
import { api } from "../../services";
import { useAuth } from "../auth";

interface BugpointsContextProps {
  children: ReactNode;
}

interface BugpointsProviderData {
  bugpoints: BugPoint[];
}

const BugpointsContext = createContext<BugpointsProviderData>(
  {} as BugpointsProviderData
);

export const BugpointsProvider = ({ children }: BugpointsContextProps) => {
  const { logged } = useAuth();

  const [bugpoints, setBugpoints] = useState<BugPoint[]>([]);

  const handleGetBugpoints = () => {
    const token = localStorage.getItem("token") || "";

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    api.get("/bugpoints", headers)
    .then((res) => setBugpoints(res.data));
  }

  useEffect(() => {
    if(logged) handleGetBugpoints();
  }, [logged])
  return (
    <BugpointsContext.Provider value={{ bugpoints }}>{children}</BugpointsContext.Provider>
  )
}

export const useBugpoints = () => useContext(BugpointsContext);