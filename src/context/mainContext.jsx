import React from "react";
import { ContextNavbarProvider } from "./NavbarContext";
import { ContextSocialProvider } from "./SocialContext";
import { DashboardProvider } from "./DashboardContext";
import { SigninProvider } from "./SigninContext";
import { FileProvider } from "../context/FilesContext";
import { FriendsProvider } from "./FriendsContext";

const MainContext = ({ children }) => {
  return (
    <ContextNavbarProvider>
      <ContextSocialProvider>
        <SigninProvider>
          <DashboardProvider>
            <FileProvider>
              <FriendsProvider>{children}</FriendsProvider>
            </FileProvider>
          </DashboardProvider>
        </SigninProvider>
      </ContextSocialProvider>
    </ContextNavbarProvider>
  );
};

export default MainContext;
