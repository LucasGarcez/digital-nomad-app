import theme from "@/src/theme/theme";
import { ThemeProvider } from "@shopify/restyle";
import { render, screen } from "@testing-library/react-native";
import { Text } from "../components/Text";

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
