import { Alert } from "react-native";
import { IFeedbackService } from "../../IFeedbackService";

// is default branch now
export const AlertFeedback: IFeedbackService = {
  send: (feedback) => {
    Alert.alert(feedback.message, feedback.description);
  },
};
