import { createContext, PropsWithChildren, useContext } from "react";
import { IFeedbackService } from "./IFeedbackService";

const FeedbackContext = createContext<{
  feedbackService: IFeedbackService;
}>({
  feedbackService: {} as IFeedbackService,
});

export function FeedbackProvider({
  children,
  feedbackService,
}: PropsWithChildren<{ feedbackService: IFeedbackService }>) {
  return (
    <FeedbackContext.Provider value={{ feedbackService }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
}
