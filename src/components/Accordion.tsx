import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme/theme";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

type AccordionProps = {
  title: string;
  description: string;
};

export function Accordion({ title, description }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Pressable onPress={() => setIsOpen(!isOpen)}>
      <View>
        <AccordionHeader title={title} />
        {isOpen && <AccordionBody description={description} />}
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

function AccordionBody({ description }: { description: string }) {
  return (
    <View style={styles.body}>
      <Text>{description}</Text>
    </View>
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
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.gray1,
    borderBottomLeftRadius: theme.borderRadii.default,
    borderBottomRightRadius: theme.borderRadii.default,
  },
});
