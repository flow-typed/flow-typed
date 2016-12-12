

declare module 'hellosign-embedded' {
					
}

declare module 'HelloSign' {
		declare interface MessageEvent {
		event: string
	}

	declare interface ClientCultures {
		EN_US: string,
		FR_FR: string,
		DE_DE: string,
		SV_SE: string,
		ZH_CN: string,
		DA_DK: string,
		NL_NL: string,
		supportedCultures: string[]
	}

	declare interface OpenParameters {
		url?: string,
		redirectUrl?: string,
		allowCancel?: boolean,
		messageListener?: (eventData: MessageEvent) => void,
		userCulture?: string,
		debug?: boolean,
		skipDomainVerification?: boolean,
		container?: Element,
		height?: number,
		hideHeader?: boolean,
		uxVersion?: number,
		requester?: string,
		whiteLabelingOptions?: Object
	}

	declare interface HelloSignStatic {
		CULTURES: ClientCultures,
		EVENT_SIGNED: string,
		EVENT_DECLINED: string,
		EVENT_CANCELED: string,
		EVENT_ERROR: string,
		init(appClientId: string): void,
		open(params: OpenParameters): void,
		close(): void
	}

			
}