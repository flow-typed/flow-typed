

declare module 'photonui' {
			declare function _(string: string, replacements?: {
		[key: string]: string
	}): string

		
}

declare module 'Helpers' {
			declare function escapeHtml(string: string): void

	declare function uuid4(): string

	declare function cleanNode(node: HTMLElement): void

	declare function getAbsolutePosition(element: HTMLElement | string): {
		x: number,
		y: number
	}

	declare function numberToCssSize(value: number, defaultValue?: number, nullValue?: string): string

		
}

declare module 'npm$namespace$photonui' {
			declare function domInsert(widget: Widget, element?: HTMLElement | string): void

	declare function getWidget(name: string): Widget

	declare class Base  {
		constructor(params?: {
		[key: string]: any
	}): this;
		destroy(): void;
		registerCallback(id: string, wEvent: string, callback: Function, thisArg: any): void;
		removeCallback(id: string): void
	}

	declare class Widget extends Base {
		absolutePosition: {
		x: number,
		y: number
	};
		contextMenu: PopupWindow;
		contextMenuName: string;
		html: HTMLElement;
		layoutOptions: {
		[key: string]: any
	};
		name: string;
		offsetWidth: number;
		offsetHeight: number;
		parent: Widget;
		parentName: string;
		tooltip: string;
		visible: boolean;
		show(): void;
		hide(): void;
		unparent(): void;
		addClass(className: string): void;
		removeClass(className: string): void;
		getWidget(name: string): Widget;
		domInsert(widget: Widget, element?: HTMLElement | string): void
	}

	declare class FileManager extends Base {
		acceptedExts: string[];
		acceptedMimes: string[];
		dropZone: HTMLElement;
		multiselect: boolean;
		open(): void
	}

	declare class Translation extends Base {
		locale: string;
		addCatalogs(catalogs: {
		[key: string]: any
	}): void;
		guessUserLanguage(): string;
		gettext(string: string, replacements?: {
		[key: string]: string
	}): string;
		lazyGettext(string: string, replacements?: {
		[key: string]: string
	}): string;
		enableDomScan(enable: boolean): void;
		updateDomTranslation(): void
	}

	declare class AccelManager extends Base {
		addAccel(id: string, keys: string, callback: Function, safe?: boolean): void;
		removeAccel(id: string): void
	}

	declare class MouseManager extends Base {
		constructor(params?: {
		[key: string]: any
	}): this;
		constructor(element?: Widget | HTMLElement, params?: {
		[key: string]: any
	}): this;
		element: HTMLElement;
		threshold: number;
		action: string;
		btnLeft: boolean;
		btnMiddle: boolean;
		btnRight: boolean;
		button: string;
		pageX: number;
		pageY: number;
		x: number;
		y: number;
		deltaX: number;
		deltaY: number
	}

	declare class BaseIcon extends Widget {
		
	}

	declare class FAIcon extends BaseIcon {
		constructor(params?: {
		[key: string]: any
	}): this;
		constructor(name: string, params?: {
		[key: string]: any
	}): this;
		color: string;
		iconName: string;
		size: string
	}

	declare class SpriteIcon extends BaseIcon {
		constructor(params?: {
		[key: string]: any
	}): this;
		constructor(name: string, params?: {
		[key: string]: any
	}): this;
		icon: string;
		iconName: string;
		spriteSheetName: string
	}

	declare class Image extends Widget {
		width: number;
		height: number;
		url: string
	}

	declare class SpriteSheet extends Base {
		name: string;
		imageUrl: string;
		size: string;
		icons: {
		[iconName: string]: number[]
	};
		addIcon(iconName: string, x: number, y: number): void;
		removeIcon(iconName: string): void;
		getIconPosition(iconName: string): {
		x: number,
		y: number
	};
		getIconCSS(iconName: string): string;
		getSpriteSheet(name: string): SpriteSheet
	}

	declare class Canvas extends Widget {
		canvas: HTMLElement;
		interactiveMode: HTMLElement;
		width: number;
		height: number;
		getContext(contextId: string): any;
		setContext(contextId: string): void;
		supportsContext(contextId: string): boolean;
		toBlod(imageFormat: string): any;
		toBlodHD(imageFormat: string): any;
		toDataUrl(imageFormat: string): string;
		toDataUrlHD(imageFormat: string): string;
		transferControlToProxy(): void
	}

	declare class Label extends Widget {
		constructor(params?: {
		[key: string]: any
	}): this;
		constructor(name: string, params?: {
		[key: string]: any
	}): this;
		forInput: Field | CheckBox;
		forInputName: string;
		text: string;
		textAlign: string
	}

	declare class Text extends Widget {
		rawHtml: string;
		text: string
	}

	declare class ProgressBar extends Widget {
		orientation: string;
		pulsate: boolean;
		textVisible: boolean;
		value: number
	}

	declare class Separator extends Widget {
		orientation: string
	}

	declare class Button extends Widget {
		appearance: string;
		buttonColor: string;
		leftIconName: string;
		leftIcon: BaseIcon;
		leftIconVisible: boolean;
		rightIconName: string;
		rightIcon: BaseIcon;
		rightIconVisible: boolean;
		text: string;
		textVisible: boolean
	}

	declare class ColorButton extends Widget {
		color: Color;
		dialogOnly: boolean;
		value: string
	}

	declare class CheckBox extends Widget {
		value: boolean
	}

	declare class Switch extends CheckBox {
		
	}

	declare class ToggleButton extends CheckBox {
		
	}

	declare class Color extends Base {
		constructor(color: string): this;
		constructor(params?: {
		[key: string]: any
	}): this;
		hexString: string;
		rgbString: string;
		rgbaString: string;
		red: number;
		green: number;
		blue: number;
		alpha: number;
		hue: number;
		saturation: number;
		brightness: number;
		setRGB(red: number, green: number, blue: number): void;
		getRGB(): number[];
		setRGBA(red: number, green: number, blue: number, alpha: number): void;
		getRGBA(): number[];
		setHSB(hue: number, saturation: number, brightness: number): void
	}

	declare class ColorPalette extends Widget {
		color: Color;
		palette: Array<string[]>;
		value: string;
		palette: Array<string[]>
	}

	declare class ColorPicker extends Widget {
		color: Color;
		value: string
	}

	declare class Field extends Widget {
		placeholder: string;
		value: boolean
	}

	declare class NumericField extends Field {
		min: number;
		max: number;
		step: number;
		decimalDigits: number;
		decimalSymbol: string
	}

	declare class Slider extends NumericField {
		fieldVisible: boolean
	}

	declare class TextAreaField extends Field {
		cols: number;
		rows: number
	}

	declare class TextField extends Field {
		type: string
	}

	declare class Select extends Widget {
		children: Widget[];
		childrenNames: string[];
		iconVisible: boolean;
		placeholder: string;
		popupWidth: number;
		popupHeight: number;
		popupMaxWidth: number;
		popupMinWidth: number;
		popupMaxHeight: number;
		popupMinHeight: number;
		popupOffsetWidth: number;
		popupOffsetHeight: number;
		popupPadding: number;
		value: any;
		addChild(widget: Widget, layoutOptions?: any): void
	}

	declare class FontSelect extends Select {
		fonts: string[];
		addFont(fontName: string): void
	}

	declare class Container extends Widget {
		child: Widget;
		childName: string;
		containerNode: HTMLElement;
		horizontalChildExpansion: boolean;
		verticalChildExpansion: boolean;
		removeChild(widget: Widget): void
	}

	declare class Layout extends Container {
		children: Widget[];
		childrenNames: string[];
		addChild(widget: Widget, layoutOptions?: {
		[key: string]: any
	}): void;
		empty(): void
	}

	declare class BoxLayout extends Layout {
		horizontalPadding: number;
		verticalPadding: number;
		orientation: string;
		spacing: number
	}

	declare class FluidLayout extends Layout {
		horizontalPadding: number;
		verticalPadding: number
	}

	declare class GridLayout extends Layout {
		horizontalPadding: number;
		verticalPadding: number;
		horizontalSpacing: number;
		verticalSpacing: number
	}

	declare class Menu extends Layout {
		iconVisible: boolean
	}

	declare class MenuItem extends Menu {
		active: boolean;
		icon: BaseIcon;
		iconName: string;
		text: string;
		value: any
	}

	declare class SubMenuItem extends MenuItem {
		menu: Menu;
		menuName: string
	}

	declare class Viewport extends Container {
		width: number;
		minWidth: number;
		maxWidth: number;
		height: number;
		minHeight: number;
		maxHeight: number;
		padding: number;
		horizontalScrollbar: boolean;
		verticalScrollbar: boolean
	}

	declare class BaseWindow extends Container {
		width: number;
		minWidth: number;
		maxWidth: number;
		height: number;
		minHeight: number;
		maxHeight: number;
		padding: number;
		position: {
		x: number,
		y: number
	};
		x: number;
		y: number;
		center(): void
	}

	declare class PopupWindow extends BaseWindow {
		popupXY(x: number, y: number): void;
		popupWidget(widget: Widget): void
	}

	declare class PopupMenu extends PopupWindow {
		
	}

	declare class Window extends BaseWindow {
		closeButtonVisible: boolean;
		modal: boolean;
		movable: boolean;
		title: string;
		moveToFront(): void;
		moveToBack(): void
	}

	declare class Dialog extends Window {
		buttons: Widget[];
		buttonNames: string[];
		addButton(widget: Widget, layoutOptions: any): void;
		removeButton(widget: Widget): void
	}

	declare class ColorPickerDialog extends Dialog {
		color: Color
	}

	declare class TabItem extends Container {
		tabHtml: HTMLElement;
		title: string
	}

	declare class TabLayout extends Layout {
		activeTab: Widget;
		activeTabName: string;
		padding: number;
		tabsPosition: string
	}

	
}