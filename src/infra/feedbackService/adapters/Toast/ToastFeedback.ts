import Toast from "react-native-toast-message";
import { IFeedbackService } from "../../IFeedbackService";

export const ToastFeedback: IFeedbackService = {
  send: (feedback) => {
    Toast.show({ props: feedback });
  },
};
