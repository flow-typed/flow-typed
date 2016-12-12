

declare module 'react-intl-1.2.0' {
					
}

declare module 'ReactIntl' {
		declare interface IIntlMixin {
		getIntlMessage(key: string): string
	}

	declare interface IntlComponent {
		getIntlMessage(key: string): string
	}

		declare class FormattedDate extends React$Component<FormattedDate.Props, any> {
		
	}

	declare class FormattedTime extends React$Component<FormattedTime.Props, any> {
		
	}

	declare class FormattedRelative extends React$Component<FormattedRelative.Props, any> {
		
	}

	declare class FormattedMessage extends React$Component<FormattedMessage.Props, any> {
		
	}

	declare class FormattedHTMLMessage extends React$Component<FormattedHTMLMessage.Props, any> {
		
	}

	declare class FormattedNumber extends React$Component<FormattedNumber.Props, any> {
		
	}

	
}

declare module 'IntlComponent' {
		declare interface Props {
		locales?: string[],
		messages?: {
		[key: string]: any
	},
		formats?: string[]
	}

			
}

declare module 'FormattedDate' {
		declare export interface Props {
		value: Date,
		day?: string,
		month?: string,
		year?: string
	}

			
}

declare module 'FormattedTime' {
		declare export interface Props {
		value: Date,
		day?: string,
		month?: string,
		year?: string,
		format?: string
	}

			
}

declare module 'FormattedRelative' {
		declare export interface Props {
		value: number,
		units?: string,
		style?: string,
		format?: string
	}

			
}

declare module 'FormattedMessage' {
		declare export interface Props {
		message: string,
		[prop: string]: any
	}

			
}

declare module 'FormattedHTMLMessage' {
		declare export interface Props {
		message: string,
		[prop: string]: any
	}

			
}

declare module 'FormattedNumber' {
		declare export interface Props {
		value: number,
		style?: string,
		currency?: string,
		format?: string
	}

			
}

declare module 'react-intl' {
					declare module.exports: undefined


}