import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import { AuthProvider } from "./auth";
import { BugpointsProvider } from "./bugpoints";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BugpointsProvider>
            {children}
          </BugpointsProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
};

export default Providers;