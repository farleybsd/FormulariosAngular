export type TErrorMessages = {
  errorMessages: Record<string,(...args:any[]) => string> ;
  pendingMessage: string
}
