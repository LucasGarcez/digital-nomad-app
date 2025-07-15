import { renderComponent } from "@/src/test-utils/renderComponent";
import { screen } from "@testing-library/react-native";
import { Text } from "../Text";

describe("<Text />", () => {
  test("render component", () => {
    renderComponent(<Text>Hello world</Text>);

    expect(screen.getByText("Hello world")).toBeOnTheScreen();
  });
});
