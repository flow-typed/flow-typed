

declare module 'satnav' {
	declare type Callback = () => void;

	declare interface ISatnavOptions {
		html5?: boolean,
		force?: boolean,
		poll?: number,
		matchAll?: boolean
	}

	declare interface INavigationOptions {
		path?: string,
		directions?: (params: any) => any,
		title?: string | Callback
	}

	declare interface ISatnav {
		navigate(navigationOptions: INavigationOptions): ISatnav,
		otherwise(route: string): ISatnav,
		change(onChange: (hash: string, params: any, old: any) => any): ISatnav,
		go(): ISatnav
	}

	declare function Satnav(options?: ISatnavOptions): ISatnav

		
}