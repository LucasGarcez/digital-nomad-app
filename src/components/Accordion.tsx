import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { useAppTheme } from "../theme/useAppTheme";
import { Text } from "./Text";

type AccordionProps = {
  title: string;
  description: string;
  progress: SharedValue<number>;
};

export function Accordion({ description, progress }: AccordionProps) {
  const { colors, spacing, borderRadii } = useAppTheme();

  const animatedStyle = useAnimatedStyle(() => ({
    paddingHorizontal: spacing.s16,
    paddingBottom: spacing.s16,
    backgroundColor: colors.gray1,
    borderBottomEndRadius: borderRadii.default,
    borderBottomStartRadius: borderRadii.default,
    borderTopLeftRadius: interpolate(
      progress.value,
      [0, 1],
      [borderRadii.default, 0]
    ),
    borderTopRightRadius: interpolate(
      progress.value,
      [0, 1],
      [borderRadii.default, 0]
    ),
    borderWidth: 2,
    borderColor: colors.gray1,
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Text variant="text14">{description}</Text>
    </Animated.View>
  );
}
