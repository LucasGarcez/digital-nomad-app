import Toast from "react-native-toast-message";
import { ToastComponentProps } from "./Toast";

export interface ToastService {
  show: () => void;
}

export const toastService = {
  show: (props: ToastComponentProps) => Toast.show({ props }),
};
