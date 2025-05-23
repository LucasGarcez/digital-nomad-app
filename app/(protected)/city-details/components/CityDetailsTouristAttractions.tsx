import { Accordion } from "@/src/components/Accordion";
import { Box, BoxProps } from "@/src/components/Box";
import { Icon } from "@/src/components/Icon";
import { Text } from "@/src/components/Text";
import { useAppTheme } from "@/src/theme/useAppTheme";
import { City } from "@/src/types";
import { Pressable, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export function CityDetailsTouristAttractions({
  touristAttractions,
}: Pick<City, "touristAttractions">) {
  return (
    <Box paddingHorizontal="padding">
      <Text variant="title22" mb="s8">
        Pontos Turísticos
      </Text>

      <Box gap="s16">
        {touristAttractions.map((attraction) => (
          <Box key={attraction.id}>
            <AccordionItem
              title={attraction.name}
              description={attraction.description}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function AccordionItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { colors, borderRadii } = useAppTheme();
  const isExpanded = useSharedValue(false);
  const onPress = () => {
    isExpanded.value = !isExpanded.value;
    progress.value = withTiming(isExpanded.value ? 0 : 1, { duration: 500 });
  };

  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [colors.transparent, colors.gray1]
      ),
      borderWidth: 2,
      borderBottomWidth: interpolate(progress.value, [0, 1], [2, 0]),
      borderColor: colors.gray1,
      borderTopLeftRadius: borderRadii.default,
      borderTopRightRadius: borderRadii.default,
      borderBottomLeftRadius: interpolate(
        progress.value,
        [0, 1],
        [borderRadii.default, 0]
      ),
      borderBottomRightRadius: interpolate(
        progress.value,
        [0, 1],
        [borderRadii.default, 0]
      ),
    };
  });
  return (
    <Pressable onPress={onPress}>
      <Animated.View style={[animatedStyle]}>
        <Box {...headerStyle}>
          <Text variant="title16">{title}</Text>
          <Icon name="Chevron-down" color={"gray2"} />
        </Box>
      </Animated.View>
      <AccordionWrapper isExpanded={isExpanded}>
        <Accordion
          title={title}
          description={description}
          progress={progress}
        />
      </AccordionWrapper>
    </Pressable>
  );
}

function AccordionWrapper({
  children,
  isExpanded,
}: {
  children: React.ReactNode;
  isExpanded: SharedValue<boolean>;
}) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration: 500,
    })
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View style={[bodyStyle, { overflow: "hidden" }]}>
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={{ position: "absolute" }}
      >
        {children}
      </View>
    </Animated.View>
  );
}

const headerStyle: BoxProps = {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "s16",
  // borderWidth: 2,
  // borderColor: "gray1",
  // borderRadius: "default",
  alignItems: "center",
};
