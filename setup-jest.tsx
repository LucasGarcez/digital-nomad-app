jest.mock("@expo/vector-icons/createIconSetFromIcoMoon", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { View } = require("react-native");
  function FakeIcon(props: any) {
    return <View testID={props.name} />;
  }

  return () => FakeIcon;
});
