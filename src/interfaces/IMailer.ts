export interface IMailer {
  SendEmail(ro: string, product: unknown): Promise<any>;
}
