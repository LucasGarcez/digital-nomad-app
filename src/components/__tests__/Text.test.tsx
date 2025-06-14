import { renderComponent } from "@/src/test-utils/renderComponent";
import { screen } from "@testing-library/react-native";
import { Text } from "../Text";

test("<Text />", () => {
  renderComponent(<Text>Ola mundo</Text>);
  expect(screen.getByText("Ola mundo")).toBeOnTheScreen();
});
