

declare module 'react-fontawesome' {
	declare type FontAwesomeSize = "lg" | "2x" | "3x" | "4x" | "5x";

	declare interface FontAwesomeProps {
		border?: boolean,
		className?: string,
		fixedWidth?: boolean,
		flip?: boolean,
		inverse?: boolean,
		name: string,
		pulse?: boolean,
		rotate?: number,
		size?: FontAwesomeSize,
		spin?: boolean,
		stack?: string,
		style?: React.CSSProperties
	}

		declare class FontAwesome extends React$Component<FontAwesomeProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}