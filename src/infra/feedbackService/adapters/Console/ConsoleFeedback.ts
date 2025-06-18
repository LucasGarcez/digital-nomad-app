import { FeedbackType, IFeedbackService } from "../../IFeedbackService";

const colors: Record<FeedbackType, string> = {
  success: "\x1b[32m",
  error: "\x1b[31m",
};

const resetColor = "\x1b[0m";

export const ConsoleFeedback: IFeedbackService = {
  send: (feedback) => {
    console.log(`${colors[feedback.type]}${feedback.message}${resetColor}`);
  },
};
