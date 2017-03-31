declare type Klasses<CSS> = {
	[classname: $Keys<CSS>]: string,
};

declare type Injector = {
	<Props, State, DefaultProps, CSS>(component: ClassComponent<DefaultProps, Props, State>): ClassComponent<DefaultProps, $Diff<Props, JSSProps<CSS>>, void>;
	<Props, CSS>(component: FunctionComponent<Props>): FunctionComponent<$Diff<Props, JSSProps<CSS>>>;
};

declare module 'react-jss' {
	declare export type FunctionComponent<P> = (props: P) => ?React$Element<any>;
	declare export type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;
	declare export type JSSProps<CSS> = {
		classes: Klasses<CSS>,
		sheet: {
			attached: boolean,
			classes: Klasses<CSS>,
			deployed: boolean,
			linked: boolean,
			options: Object,
			renderer: mixed,
			rules: mixed,
		},
	};
	declare export default function injectSheet<Props, State, DefaultProps, CSS>(
		CSS: CSS,
	): Injector
}