import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import theme from "../theme/theme";
import { Icon } from "./Icon";
import { Text } from "./Text";

type AccordionProps = {
  title: string;
  description: string;
  duration?: number;
};

export function Accordion({
  title,
  description,
  duration = 500,
}: AccordionProps) {
  const isExpanded = useSharedValue(false);

  const onPress = () => {
    isExpanded.value = !isExpanded.value;
    progress.value = withTiming(isExpanded.value ? 0 : 1, { duration });
  };

  const progress = useSharedValue(0);

  return (
    <Pressable onPress={onPress}>
      <AccordionHeader
        title={title}
        progress={progress}
        isExpanded={isExpanded}
        duration={duration}
      />
      <AccordionBody
        description={description}
        progress={progress}
        isExpanded={isExpanded}
        duration={duration}
      />
    </Pressable>
  );
}

function AccordionHeader({
  title,
  progress,
  isExpanded,
  duration,
}: {
  title: string;
  progress: SharedValue<number>;
  isExpanded: SharedValue<boolean>;
  duration: number;
}) {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: isExpanded.value
          ? withTiming("-180deg", { duration })
          : withTiming("0deg", { duration }),
      },
    ],
  }));

  const animatedHeaderStyled = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [theme.colors.transparent, theme.colors.gray1]
    ),
    borderBottomWidth: interpolate(progress.value, [0, 1], [2, 0]),
    borderColor: theme.colors.gray1,
    borderBottomLeftRadius: interpolate(
      progress.value,
      [0, 1],
      [theme.borderRadii.default, 0]
    ),
    borderBottomRightRadius: interpolate(
      progress.value,
      [0, 1],
      [theme.borderRadii.default, 0]
    ),
  }));

  return (
    <Animated.View style={[animatedHeaderStyled, styles.header]}>
      <Text variant="title16">{title}</Text>

      <Animated.View style={iconStyle}>
        <Icon name="Chevron-down" color={"gray2"} />
      </Animated.View>
    </Animated.View>
  );
}

function AccordionBody({
  description,
  progress,
  isExpanded,
  duration,
}: {
  description: string;
  progress: SharedValue<number>;
  isExpanded: SharedValue<boolean>;
  duration: number;
}) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration,
    })
  );

  const animatedBodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
    opacity: interpolate(progress.value, [0, 1], [0, 1]),
  }));

  return (
    <Animated.View style={[animatedBodyStyle, { overflow: "hidden" }]}>
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={styles.content} // workaround 1
      >
        <Text variant="text14">{description}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing.s16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.gray1,
    borderTopLeftRadius: theme.borderRadii.default,
    borderTopRightRadius: theme.borderRadii.default,
  },
  content: {
    position: "absolute",
    backgroundColor: theme.colors.gray1,
    paddingHorizontal: theme.spacing.s16,
    paddingBottom: theme.spacing.s16,
    borderBottomEndRadius: theme.borderRadii.default,
    borderBottomStartRadius: theme.borderRadii.default,
  },
});
