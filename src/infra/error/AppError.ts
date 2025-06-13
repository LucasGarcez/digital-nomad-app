export enum AppErrorCode {
  NETWORKING = "NETWORKING",
  UNKNOWN = "UNKNOWN",
}

export type AppError = {
  code: AppErrorCode;
  message: string;
  description?: string;
};
