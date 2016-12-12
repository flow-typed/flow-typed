

declare module 'persona' {
		declare interface Navigator {
		id: Persona.Persona
	}

			
}

declare module 'npm$namespace$Persona' {
		declare export interface WatchOptions {
		loggedInUser: String,
		onlogin: (String: <<UNKNOWN PARAM FORMAT>>) => void,
		onlogout: () => void,
		onready?: () => void
	}

	declare export interface RequestOptions {
		backgroundColor?: String,
		siteName?: String,
		siteLogo?: String,
		termsOfService?: String,
		privacyPolicy?: String,
		returnTo?: String,
		oncancel?: () => void
	}

	declare export interface GetOptions {
		backgroundColor?: String,
		siteName?: String,
		siteLogo?: String,
		termsOfService?: String,
		privacyPolicy?: String
	}

	declare export interface Persona {
		watch(options: WatchOptions): void,
		request(options: RequestOptions): void,
		request(): void,
		logout(): void,
		get(gotAssertion: (String: <<UNKNOWN PARAM FORMAT>>) => void): void,
		get(
		gotAssertion: (String: <<UNKNOWN PARAM FORMAT>>) => void, options: GetOptions
	): void
	}

			
}