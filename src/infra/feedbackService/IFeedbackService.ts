export type FeedbackType = "success" | "error";

type Feedback = {
  type: "success" | "error";
  message: string;
  description?: string;
};

export interface IFeedbackService {
  send: (feedback: Feedback) => void;
}
