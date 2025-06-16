import theme from "@/src/ui/theme/theme";
import { ThemeProvider } from "@shopify/restyle";
import { render, screen } from "@testing-library/react-native";
import { Text } from "../ui/components/Text";

function renderComponent() {
  render(
    <ThemeProvider theme={theme}>
      <Text>Ola mundo</Text>
    </ThemeProvider>
  );
}

test("<Text />", () => {
  renderComponent();
  expect(screen.getByText("Ola mundo")).toBeOnTheScreen();
});
