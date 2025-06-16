export type FeedbackType = "success" | "error" | "warning" | "info";

export type FeedbackParams = {
  type?: FeedbackType;
  title: string;
  message?: string;
};

export interface IFeedbackService {
  show: (params: FeedbackParams) => void;
}
