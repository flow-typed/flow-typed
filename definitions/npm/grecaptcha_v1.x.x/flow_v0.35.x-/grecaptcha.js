import type { ReCaptcha } from 'npm$namespace$ReCaptchaV2'

declare module 'grecaptcha' {
					
}

declare module 'npm$namespace$ReCaptchaV2' {
	declare type Theme = "light" | "dark";

	declare type Type = "image" | "audio";

	declare type Size = "normal" | "compact";

	declare interface Parameters {
		sitekey: string,
		theme?: Theme,
		type?: Type,
		size?: Size,
		tabindex?: number,
		callback?: (response: string) => void,
		expired-callback?: () => void
	}

		declare class ReCaptcha  {
		render(container: (string | HTMLElement), parameters?: Parameters): number;
		reset(opt_widget_id?: number): void;
		getResponse(opt_widget_id?: number): string
	}

	
}