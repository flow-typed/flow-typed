

declare module 'react-color' {
	declare export type CustomPickerProps<A> = ReactColor.CustomPickerProps<A>;

				
}

declare module 'npm$namespace$ReactColor' {
	declare type Color = string | HSLColor | RGBColor;

	declare type ColorChangeHandler = (color: ColorResult) => void;

	declare interface HSLColor {
		a?: number,
		h: number,
		l: number,
		s: number
	}

	declare interface RGBColor {
		a?: number,
		b: number,
		g: number,
		r: number
	}

	declare interface ColorResult {
		hex: string,
		hsl: HSLColor,
		rgb: RGBColor
	}

	declare interface ColorPickerProps<A> {
		color?: Color,
		onChange?: ColorChangeHandler,
		onChangeComplete?: ColorChangeHandler
	}

	declare interface AlphaPickerProps {
		height?: string,
		width?: string
	}

	declare interface AlphaPicker {
		
	}

	declare interface BlockPickerProps {
		colors?: Array<string>,
		width?: string
	}

	declare interface BlockPicker {
		
	}

	declare interface ChromePickerProps {
		disableAlpha?: boolean
	}

	declare interface ChromePicker {
		
	}

	declare interface CirclePickerProps {
		colors?: Array<string>,
		width?: string
	}

	declare interface CirclePicker {
		
	}

	declare interface CompactPickerProps {
		colors?: Array<string>
	}

	declare interface CompactPicker {
		
	}

	declare interface GithubPickerProps {
		colors?: Array<string>,
		width?: string
	}

	declare interface GithubPicker {
		
	}

	declare interface HuePickerProps {
		height?: string,
		width?: string
	}

	declare interface HuePicker {
		
	}

	declare interface MaterialPickerProps {
		
	}

	declare interface MaterialPicker {
		
	}

	declare interface PhotoshopPickerProps {
		header?: string,
		onAccept?: ColorChangeHandler,
		onCancel?: ColorChangeHandler
	}

	declare interface PhotoshopPicker {
		
	}

	declare interface SketchPickerProps {
		disableAlpha?: boolean,
		presetColors?: Array<string>,
		width?: string
	}

	declare interface SketchPicker {
		
	}

	declare interface SliderPickerProps {
		
	}

	declare interface SliderPicker {
		
	}

	declare interface SwatchesPickerProps {
		colors?: Array<Array<string>>,
		height?: number,
		width?: number
	}

	declare interface SwatchesPicker {
		
	}

	declare interface TwitterPickerProps {
		
	}

	declare interface TwitterPicker {
		
	}

	declare interface InjectedColorProps {
		hex?: string,
		hsl?: HSLColor,
		rgb?: RGBColor,
		onChange?: ColorChangeHandler
	}

	declare interface CustomPickerProps<A> {
		color?: Color,
		pointer?: React.ReactNode,
		onChange?: ColorChangeHandler
	}

	declare interface AlphaProps {
		
	}

	declare interface Alpha {
		
	}

	declare interface EditableInputStyles {
		input?: React.CSSProperties,
		label?: React.CSSProperties,
		wrap?: React.CSSProperties
	}

	declare interface EditableInputProps {
		color?: Color,
		label?: string,
		onChange?: ColorChangeHandler,
		styles?: EditableInputStyles,
		value?: any
	}

	declare interface EditableInput {
		
	}

	declare interface HueProps {
		direction?: "horizontal" | "vertical"
	}

	declare interface Hue {
		
	}

	declare interface SaturationProps {
		
	}

	declare interface Saturation {
		
	}

	declare interface CheckboardProps {
		grey?: string,
		size?: number,
		white?: string
	}

	declare interface Checkboard {
		
	}

	declare function CustomPicker<A>(
		component: React.ComponentClass<A> | React.StatelessComponent<A>
	): React.ComponentClass<A & InjectedColorProps>

		
}

declare module 'react-color/lib/components/common/Alpha' {
					


}

declare module 'react-color/lib/components/common/Checkboard' {
					


}

declare module 'react-color/lib/components/common/EditableInput' {
					


}

declare module 'react-color/lib/components/common/Hue' {
					


}

declare module 'react-color/lib/components/common/Saturation' {
					


}

declare module 'react-color/lib/components/common/ColorWrap' {
					


}

declare module 'react-color/lib/components/alpha/Alpha' {
					


}

declare module 'react-color/lib/components/block/Block' {
					


}

declare module 'react-color/lib/components/chrome/Chrome' {
					


}

declare module 'react-color/lib/components/circle/Circle' {
					


}

declare module 'react-color/lib/components/compact/Compact' {
					


}

declare module 'react-color/lib/components/github/Github' {
					


}

declare module 'react-color/lib/components/hue/Hue' {
					


}

declare module 'react-color/lib/components/meterial/Material' {
					


}

declare module 'react-color/lib/components/photoshop/Photoshop' {
					


}

declare module 'react-color/lib/components/sketch/Sketch' {
					


}

declare module 'react-color/lib/components/slider/Slider' {
					


}

declare module 'react-color/lib/components/swatches/Swatches' {
					


}

declare module 'react-color/lib/components/twitter/Twitter' {
					


}