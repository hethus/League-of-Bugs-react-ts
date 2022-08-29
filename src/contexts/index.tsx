import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import { AuthProvider } from "./auth";
import { BugpointsProvider } from "./bugpoints";
import { ChampionsProvider } from "./champions";
import { ClassesProvider } from "./classes";
import { FavoritesProvider } from "./favorites";
import { PurchasedChampionsProvider } from "./purchasedChampions";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BugpointsProvider>
            <FavoritesProvider> 
              <ClassesProvider>
                <ChampionsProvider>
                  <PurchasedChampionsProvider>
                    <BugpointsProvider>
                      {children}
                    </BugpointsProvider>
                  </PurchasedChampionsProvider>
                </ChampionsProvider>
              </ClassesProvider>
            </FavoritesProvider>
          </BugpointsProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
};

export default Providers;