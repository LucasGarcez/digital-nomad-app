import { Box } from "@/src/ui/components/Box";
import { Text } from "@/src/ui/components/Text";
import { ThemeColors } from "@/src/ui/theme/theme";
import RNToast, { ToastConfig } from "react-native-toast-message";

type ToastType = "success" | "error" | "warning" | "info";

export type ToastComponentProps = {
  type?: ToastType;
  title: string;
  message?: string;
};

const toastColors: Record<
  ToastType,
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

function ToastComponent({ type, title, message }: ToastComponentProps) {
  const { backgroundColor, textColor } = toastColors[type || "success"];

  return (
    <Box
      backgroundColor={backgroundColor}
      paddingHorizontal="s24"
      paddingVertical="s12"
      borderRadius="default"
    >
      <Text variant="title16" color={textColor}>
        {title}
      </Text>
      {message && (
        <Text mt="s4" color={textColor}>
          {message}
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
