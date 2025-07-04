import { Box } from "@/src/ui/components/Box";
import { Text } from "@/src/ui/components/Text";
import { ThemeColors } from "@/src/ui/theme/theme";
import RNToast, { ToastConfig } from "react-native-toast-message";
import { Feedback, FeedbackType } from "../../IFeedbackService";

const toastColors: Record<
  FeedbackType,
  {
    backgroundColor: ThemeColors;
    textColor: ThemeColors;
  }
> = {
  success: {
    backgroundColor: "fbSuccessBg",
    textColor: "fbSuccessSurface",
  },
  error: {
    backgroundColor: "fbErrorBg",
    textColor: "fbErrorSurface",
  },
  warning: {
    backgroundColor: "fbWarningBg",
    textColor: "fbWarningSurface",
  },
  info: {
    backgroundColor: "fbInfoBg",
    textColor: "fbInfoSurface",
  },
};

function ToastComponent({ type, description, message }: Feedback) {
  const { backgroundColor, textColor } = toastColors[type || "success"];

  return (
    <Box
      backgroundColor={backgroundColor}
      paddingHorizontal="s24"
      paddingVertical="s12"
      borderRadius="default"
    >
      <Text variant="title16" color={textColor}>
        {message}
      </Text>
      {description && (
        <Text mt="s4" color={textColor}>
          {description}
        </Text>
      )}
    </Box>
  );
}

const toastConfig: ToastConfig = {
  success: ({ props }) => <ToastComponent {...props} />,
  error: ({ props }) => <ToastComponent {...props} />,
  warning: ({ props }) => <ToastComponent {...props} />,
  info: ({ props }) => <ToastComponent {...props} />,
};

export function Toast() {
  return (
    <RNToast
      autoHide
      topOffset={80}
      visibilityTime={5000}
      config={toastConfig}
    />
  );
}
