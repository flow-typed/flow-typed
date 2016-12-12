

declare module 'valdr-message' {
					
}

declare module 'message' {
		declare interface ValdrMessage {
		templateUrl: string,
		translateAvailable: boolean,
		angularMessagesEnabled: boolean,
		setTemplate(template: string): void,
		addMessages(messages: {
		[key: string]: string
	}): void,
		getMessage(typeName: string, fieldName: string, validatorName: string): string
	}

	declare interface ValdrMessageProvider {
		setTemplate(template: string): void,
		setTemplateUrl(url: string): void,
		addMessages(messages: {
		[key: string]: string
	}): void,
		getMessage(typeName: string, fieldName: string, validatorName: string): string
	}

			
}