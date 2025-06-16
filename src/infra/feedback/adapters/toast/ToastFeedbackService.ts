import Toast from "react-native-toast-message";
import { FeedbackParams, IFeedbackService } from "../../IFeedbackService";

export const ToastFeedbackService: IFeedbackService = {
  show: (params: FeedbackParams) => Toast.show({ props: params }),
};
