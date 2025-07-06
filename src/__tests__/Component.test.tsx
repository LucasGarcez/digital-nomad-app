import { render, screen } from "@testing-library/react-native";
import { Pressable, Text, View } from "react-native";

function Component({ label, loading }: { label: string; loading: boolean }) {
  if (loading) {
    return <Text>Is loading....</Text>;
  }

  return (
    <View>
      <Pressable>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}

describe("Component", () => {
  test("should display the label when is not loading", () => {
    render(<Component label="Hello World" loading={false} />);

    const element = screen.getByText("Hello World");

    expect(element).toBeOnTheScreen();
  });

  it("should display the loading text when is  loading", () => {
    render(<Component label="Hello World" loading={true} />);

    expect(screen.getByText(/is loading.../i)).toBeOnTheScreen();
  });
});
