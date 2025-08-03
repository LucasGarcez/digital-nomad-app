import { ThemeProvider } from "@shopify/restyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react-native";
import { ReactElement } from "react";
import theme from "../ui/theme/theme";
import { queryClientOptions } from "./queryClientOptions";

export const AllTheProviders = ({ children }: React.PropsWithChildren) => {
  const client = new QueryClient(queryClientOptions);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export const renderComponent = (
  component: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(component, { wrapper: AllTheProviders, ...options });
