

declare module 'react-measure' {
				declare class Measure extends React$Component<Measure.MeasureProps, {
		
	}> {
		
	}

	declare module.exports: undefined


}

declare module 'Measure' {
	declare type MeasurementType = "width" | "height" | "top" | "right" | "bottom" | "left";

	declare type MeasureChildren = React.ReactElement<any> | {
		(dimension: Dimensions): React.ReactElement<any>
	};

	declare interface Dimensions {
		width?: number,
		height?: number,
		top?: number,
		right?: number,
		bottom?: number,
		left?: number
	}

	declare interface MeasureProps {
		accurate?: boolean,
		whitelist?: MeasurementType[],
		blacklist?: MeasurementType[],
		shouldMeasure?: boolean,
		onMeasure?: (dimensions: Dimensions) => void,
		children?: MeasureChildren
	}

			
}