

declare module 'email-templates' {
		declare interface EmailTemplateResults {
		html: string,
		text: string,
		subject: string
	}

	declare interface EmailTemplateCallback {
		(err: Object, results: EmailTemplateResults): void
	}

	declare interface EmailTemplateOptions {
		sassOptions?: any,
		juiceOptions?: any
	}

		declare export class EmailTemplate  {
		constructor(templateDir: string, options?: EmailTemplateOptions): this;
		render(locals: EmailTemplateCallback | Object, callback?: EmailTemplateCallback): void
	}

	
}