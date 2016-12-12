

declare module 'react-swf' {
					declare module.exports: undefined


}

declare module 'npm$namespace$rswf' {
		declare interface State {
		
	}

	declare interface Props {
		src: string,
		pluginspage?: string,
		width?: number,
		height?: number,
		id?: string,
		play?: boolean,
		loop?: boolean,
		menu?: boolean,
		quality?: string,
		scale?: string,
		align?: string,
		salign?: string,
		wmode?: string,
		bgcolor?: string,
		base?: string,
		allowFullScreen?: boolean,
		fullScreenAspectRatio?: string,
		flashvars?: Object | string
	}

		declare export class ReactSWF extends ___React$Component<Props, State> {
		getFPDOMNode(): Node;
		getFPVersion(): string;
		isFPVersionSupported(versionString: string): boolean
	}

	
}