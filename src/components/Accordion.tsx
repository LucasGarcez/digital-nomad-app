import { Pressable } from "react-native";
import { Box, BoxProps } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

type AccordionProps = {
  title: string;
  description: string;
};

export function Accordion({ title, description }: AccordionProps) {
  return (
    <Pressable>
      <Box {...headerStyle}>
        <Text variant="title16">{title}</Text>
        <Icon name="Chevron-down" color={"gray2"} />
      </Box>
      <Box {...contentStyle}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb="s16"
        >
          <Text variant="title16">{title}</Text>
          <Icon name="Chevron-up" color={"primary"} />
        </Box>
        <Text variant="text14">{description}</Text>
      </Box>
    </Pressable>
  );
}

const headerStyle: BoxProps = {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "s16",
  borderWidth: 2,
  borderColor: "gray1",
  borderRadius: "default",
  alignItems: "center",
};

const contentStyle: BoxProps = {
  padding: "s16",
  backgroundColor: "gray1",
  borderRadius: "default",
  borderWidth: 2,
  borderColor: "gray1",
};
