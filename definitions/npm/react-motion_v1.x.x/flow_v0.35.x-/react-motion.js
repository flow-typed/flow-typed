

declare module 'react-motion' {
	declare export type Style = {
		[key: string]: number | OpaqueConfig
	};

	declare export type PlainStyle = {
		[key: string]: number
	};

	declare export type Velocity = {
		[key: string]: number
	};

	declare type InterpolateFunction = (
		previousInterpolatedStyles?: Array<TransitionPlainStyle>
	) => Array<TransitionStyle>;

	declare interface SpringHelperConfig {
		stiffness?: number,
		damping?: number,
		precision?: number
	}

	declare export interface OpaqueConfig {
		val: number,
		stiffness: number,
		damping: number,
		precision: number
	}

	declare interface MotionProps {
		defaultStyle?: PlainStyle,
		style: Style,
		children?: (interpolatedStyle: PlainStyle) => ReactElement<any>,
		onRest?: () => void
	}

	declare interface TransitionStyle {
		key: string,
		data?: any,
		style: Style
	}

	declare interface TransitionPlainStyle {
		key: any,
		data?: any,
		style: PlainStyle
	}

	declare interface TransitionProps {
		defaultStyles?: Array<TransitionPlainStyle>,
		styles: Array<TransitionStyle> | InterpolateFunction,
		children?: (interpolatedStyles: Array<TransitionPlainStyle>) => ReactElement<any>,
		willEnter?: (styleThatEntered: TransitionStyle) => PlainStyle,
		willLeave?: (styleThatLeft: TransitionStyle) => Style | void
	}

	declare interface StaggeredMotionProps {
		defaultStyles?: Array<PlainStyle>,
		styles: (previousInterpolatedStyles?: Array<PlainStyle>) => Array<Style>
	}

	declare export function spring(val: number, config?: SpringHelperConfig): OpaqueConfig

	declare export class Motion extends Component<MotionProps, any> {
		
	}

	declare export class TransitionMotion extends Component<TransitionProps, any> {
		
	}

	declare export class StaggeredMotion extends Component<StaggeredMotionProps, any> {
		
	}

	declare export class Presets  {
		noWobble: OpaqueConfig;
		gentle: OpaqueConfig;
		wobbly: OpaqueConfig;
		stiff: OpaqueConfig
	}

	
}