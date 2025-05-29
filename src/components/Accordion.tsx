import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import theme from "../theme/theme";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

type AccordionProps = {
  title: string;
  description: string;
};

export function Accordion({ title, description }: AccordionProps) {
  const isOpen = useSharedValue(false);

  function handleOpenPress() {
    isOpen.value = !isOpen.value;
  }

  return (
    <Pressable onPress={handleOpenPress}>
      <View>
        <AccordionHeader title={title} />
        <AccordionBody description={description} isOpen={isOpen} />
      </View>
    </Pressable>
  );
}

function AccordionHeader({ title }: { title: string }) {
  return (
    <View style={styles.header}>
      <Box flexShrink={1}>
        <Text variant="title16">{title}</Text>
      </Box>
      <Icon name="Chevron-down" color="gray2" />
    </View>
  );
}

function AccordionBody({
  description,
  isOpen,
}: {
  description: string;
  isOpen: SharedValue<boolean>;
}) {
  const height = useSharedValue(0);

  // const derivedHeight = useDerivedValue(() =>
  //   withTiming(height.value * Number(isOpen.value), {
  //     duration: 500,
  //   })
  // );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      // height: isOpen.value
      //   ? withTiming(height.value, { duration: 500 })
      //   : withTiming(0, { duration: 500 }),
      height: withTiming(height.value * Number(isOpen.value), {
        duration: 500,
      }),
    };
  });

  return (
    <Animated.View style={[animatedStyle, { overflow: "hidden" }]}>
      <View
        style={styles.body}
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
      >
        <Text>{description}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,

    borderWidth: 2,
    borderColor: theme.colors.gray1,
    borderRadius: theme.borderRadii.default,
  },
  body: {
    position: "absolute",
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.gray1,
    borderBottomLeftRadius: theme.borderRadii.default,
    borderBottomRightRadius: theme.borderRadii.default,
  },
});
