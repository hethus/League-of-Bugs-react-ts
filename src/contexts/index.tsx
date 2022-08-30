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
import { UsersProvider } from "./users";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <UsersProvider>
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
          </UsersProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
};

export default Providers;