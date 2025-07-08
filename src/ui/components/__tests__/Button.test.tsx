import { renderComponent } from "@/src/test-utils/renderComponent";
import { fireEvent, screen } from "@testing-library/react-native";
import { Button } from "../Button";

describe("<Button />", () => {
  it("should call the onPress function when it is pressed", () => {
    const onPressFn = jest.fn();
    renderComponent(<Button title="button title" onPress={onPressFn} />);

    fireEvent.press(screen.getByText("button title"));

    expect(onPressFn).toHaveBeenCalled();
  });

  it("should NOT call the onPress function when it is disabled", () => {
    const onPressFn = jest.fn();
    renderComponent(
      <Button title="button title" onPress={onPressFn} disabled={true} />
    );

    fireEvent.press(screen.getByText("button title"));

    expect(onPressFn).not.toHaveBeenCalled();
  });
});
