import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import { AuthProvider } from "./auth";
import { BugpointsProvider } from "./bugpoints";
import { ChampionsProvider } from "./champions";
import { ClassesProvider } from "./classes";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BugpointsProvider>
            <ClassesProvider>
              <ChampionsProvider>
                {children}
              </ChampionsProvider>
            </ClassesProvider>
          </BugpointsProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
};

export default Providers;