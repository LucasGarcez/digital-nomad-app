export type FeedbackType = "success" | "error" | "warning" | "info";

export type Feedback = {
  type: FeedbackType;
  message: string;
  description?: string;
};

export interface IFeedbackService {
  send: (feedback: Feedback) => void;
}
