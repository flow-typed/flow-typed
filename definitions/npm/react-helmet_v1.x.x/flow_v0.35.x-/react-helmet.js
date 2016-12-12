

declare module 'react-helmet' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactHelmet' {
		declare interface HelmetProps {
		base?: any,
		defaultTitle?: string,
		htmlAttributes?: any,
		link?: Array<any>,
		meta?: Array<any>,
		script?: Array<any>,
		title?: string,
		titleTemplate?: string,
		onChangeClientState?: (newState: any) => void
	}

	declare interface HelmetData {
		base: HelmetDatum,
		htmlAttributes: HelmetDatum,
		link: HelmetDatum,
		meta: HelmetDatum,
		script: HelmetDatum,
		title: HelmetDatum
	}

	declare interface HelmetDatum {
		toString(): string,
		toComponent(): React.Component<any, any>
	}

		declare class HelmetComponent extends React$Component<HelmetProps, any> {
		
	}

	
}