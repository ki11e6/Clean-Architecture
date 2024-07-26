import {IMailer} from "../interfaces/IMailer";

export class Mailer implements IMailer{
	SendEmail(to: string, product: unknown) {
		//sendgrid implementaions
		console.log('sending mail')
	return true;
	}
}
