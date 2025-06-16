import { ThemeProvider } from "@shopify/restyle";
import { render, RenderOptions } from "@testing-library/react-native";
import React, { ReactElement } from "react";
import { theme } from "../ui/theme/theme";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const renderComponent = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });
