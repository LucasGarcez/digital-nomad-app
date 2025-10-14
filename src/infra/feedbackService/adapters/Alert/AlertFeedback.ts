import { Alert } from "react-native";
import { IFeedbackService } from "../../IFeedbackService";

// force trigger a build
export const AlertFeedback: IFeedbackService = {
  send: (feedback) => {
    Alert.alert(feedback.message, feedback.description);
  },
};
