import React from "react";
import { ContextNavbarProvider } from "./NavbarContext";
import { ContextSocialProvider } from "./SocialContext";
import { DashboardProvider } from "./DashboardContext";
import { SigninProvider } from "./SigninContext";
import { FileProvider } from "../context/FilesContext";

const MainContext = ({ children }) => {
  return (
    <ContextNavbarProvider>
      <ContextSocialProvider>
        <SigninProvider>
          <DashboardProvider>
            <FileProvider>{children}</FileProvider>
          </DashboardProvider>
        </SigninProvider>
      </ContextSocialProvider>
    </ContextNavbarProvider>
  );
};

export default MainContext;
