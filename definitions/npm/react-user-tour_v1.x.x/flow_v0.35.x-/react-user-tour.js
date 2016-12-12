

declare module 'react-user-tour' {
		declare interface TourStep {
		step: number,
		selector: string,
		title: string,
		body: string,
		horizontalOffset?: number,
		verticalOffset?: number,
		position?: "left" | "right" | "top" | "topLeft" | "bottom" | "bottomLeft"
	}

	declare interface TourProps {
		active: boolean,
		step: number,
		onNext: Function,
		onBack: Function,
		onCancel: Function,
		steps: TourStep[],
		style?: any,
		buttonStyle?: any,
		buttonContainerStyle?: any,
		arrow?: any,
		arrowSize?: number,
		arrowColor?: string,
		nextButtonText?: string,
		backButtonText?: string,
		doneButtonText?: string,
		closeButtonText?: string,
		hideButtons?: boolean,
		hideClose?: boolean
	}

			declare module.exports: ComponentClass


}