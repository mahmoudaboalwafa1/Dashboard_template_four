import React from "react";
import { ContextNavbarProvider } from "./NavbarContext";
import { ContextSocialProvider } from "./SocialContext";
import { DashboardProvider } from "./DashboardContext";
import { SigninProvider } from "./SigninContext";

const MainContext = ({ children }) => {
  return (
    <ContextNavbarProvider>
      <ContextSocialProvider>
        <SigninProvider>
          <DashboardProvider>{children}</DashboardProvider>
        </SigninProvider>
      </ContextSocialProvider>
    </ContextNavbarProvider>
  );
};

export default MainContext;
