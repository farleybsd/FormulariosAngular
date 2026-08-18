export type tErrorMessages = {
  errorMessages: Record<string, (...args: any[]) => string>;
  pendingMessage: string;
};
