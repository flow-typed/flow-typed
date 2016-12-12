

declare module 'react-fa' {
	declare type IconSize = "lg" | "2x" | "3x" | "4x" | "5x";

	declare interface IconProps {
		name: string,
		className?: string,
		size?: IconSize,
		rotate?: "45" | "90" | "135" | "180" | "225" | "270" | "315",
		flip?: "horizontal" | "vertical",
		fixedWidth?: boolean,
		spin?: boolean,
		pulse?: boolean,
		stack?: "1x" | "2x",
		inverse?: boolean,
		Component?: string | Function
	}

	declare interface IconStackProps {
		className?: string,
		size?: IconSize
	}

		declare export class Icon extends Component<IconProps, {
		
	}> {
		
	}

	declare export class IconStack extends Component<IconStackProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}