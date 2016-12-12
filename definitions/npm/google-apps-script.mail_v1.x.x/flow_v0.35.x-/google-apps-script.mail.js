

declare module 'google-apps-script.mail' {
					
}

declare module 'Mail' {
		declare export interface MailApp {
		getRemainingDailyQuota(): Integer,
		sendEmail(message: Object): void,
		sendEmail(recipient: string, subject: string, body: string): void,
		sendEmail(recipient: string, subject: string, body: string, options: Object): void,
		sendEmail(to: string, replyTo: string, subject: string, body: string): void
	}

			
}