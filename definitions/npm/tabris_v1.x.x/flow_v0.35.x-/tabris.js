

declare module 'tabris' {
					declare module.exports: undefined


}

declare module 'npm$namespace$tabris' {
		declare interface Bounds {
		left: number,
		top: number,
		width: number,
		height: number
	}

	declare interface Transformation {
		rotation: number,
		scaleX: number,
		scaleY: number,
		translationX: number,
		translationY: number
	}

	declare interface Image {
		src?: string,
		width?: number,
		height?: number,
		scale?: number
	}

	declare interface CanvasContext {
		
	}

	declare interface EventSupport<T> {
		on(event: string, listener: (target: T, ...args: any[]) => any): T,
		once(event: string, listener: (target: T, ...args: any[]) => any): T,
		off(): T,
		off(event: string): T,
		off(event: string, listener: (target: T, ...args: any[]) => any): T,
		trigger(event: string, ...args: any[]): T
	}

	declare interface AnimationOptions {
		delay?: number,
		duration: number,
		easing: string,
		repeat: number,
		reverse: boolean,
		name: string
	}

	declare interface Widget<T> {
		get(property: string): any,
		set(property: string, value: any, options?: Object): T,
		set(properties: WidgetProperties, options?: Object): T,
		animate(properties: WidgetProperties, options: AnimationOptions): void,
		appendTo(parent: Composite): T,
		apply(properties: Object): T,
		children(): WidgetCollection,
		children(selector: string): WidgetCollection,
		dispose(): void,
		find(): WidgetCollection,
		find(selector: string): WidgetCollection,
		isDisposed(): boolean,
		parent(): T,
		cid: string,
		id: string,
		type: string
	}

	declare interface WidgetProperties {
		background?: string,
		backgroundImage?: Image,
		baseline?: any,
		bottom?: any,
		bounds?: Bounds,
		centerX?: number,
		centerY?: number,
		enabled?: boolean,
		font?: string,
		height?: number,
		highlightOnTouch?: boolean,
		id?: string,
		layoutData?: Object,
		left?: any,
		opacity?: number,
		right?: any,
		textColor?: string,
		top?: any,
		transform?: Transformation,
		visible?: boolean,
		width?: number
	}

	declare interface Action {
		set(property: string, value: any, options?: Object): Action,
		set(properties: ActionProperties, options?: Object): Action
	}

	declare interface ActionProperties {
		image?: Image,
		placementPriority?: string,
		title?: string
	}

	declare interface Button {
		set(property: string, value: any, options?: Object): Button,
		set(properties: ButtonProperties, options?: Object): Button
	}

	declare interface ButtonProperties {
		alignment?: string,
		image?: Image,
		text?: string
	}

	declare interface Canvas {
		getContext(contextType: string, width: number, height: number): CanvasContext
	}

	declare interface Cell {
		set(property: string, value: any, options?: Object): Cell,
		set(properties: CellProperties, options?: Object): Cell
	}

	declare interface CellProperties {
		item?: any,
		itemIndex?: number
	}

	declare interface CheckBox {
		set(property: string, value: any, options?: Object): CheckBox,
		set(properties: CheckBoxProperties, options?: Object): CheckBox
	}

	declare interface CheckBoxProperties {
		selection?: boolean,
		text?: string
	}

	declare interface CollectionView {
		set(property: string, value: any, options?: Object): CollectionView,
		set(properties: CollectionViewProperties, options?: Object): CollectionView,
		insert(items: any[]): void,
		insert(items: any[], index: number): void,
		refresh(): void,
		refresh(index: number): void,
		remove(index: number): void,
		remove(index: number, count: number): void,
		reveal(index: number): void
	}

	declare interface CollectionViewProperties {
		cellType?: (item: any) => string | string,
		initializeCell?: (cell: Cell, type: string) => any,
		itemHeight?: (item: any, type: string) => number | number,
		items?: any[],
		refreshEnabled?: boolean,
		refreshIndicator?: boolean,
		refreshMessage?: string
	}

	declare interface Parent<T> {
		append(...children: Widget<any>[]): T,
		append(collection: WidgetCollection): T
	}

	declare interface Composite {
		
	}

	declare interface Drawer {
		close(): Drawer,
		open(): Drawer
	}

	declare interface ImageView {
		set(property: string, value: any, options?: Object): ImageView,
		set(properties: ImageViewProperties, options?: Object): ImageView
	}

	declare interface ImageViewProperties {
		image?: Image,
		scaleMode?: string
	}

	declare interface Page {
		set(property: string, value: any, options?: Object): Page,
		set(properties: PageProperties, options?: Object): Page,
		open(): Page,
		close(): void
	}

	declare interface PageProperties {
		image?: Image,
		title?: string,
		topLevel?: boolean
	}

	declare interface PageSelector {
		
	}

	declare interface Picker {
		set(property: string, value: any, options?: Object): Picker,
		set(properties: PickerProperties, options?: Object): Picker
	}

	declare interface PickerProperties {
		items?: string[],
		selection?: string,
		selectionIndex?: number
	}

	declare interface ProgressBar {
		set(property: string, value: any, options?: Object): ProgressBar,
		set(properties: ProgressBarProperties, options?: Object): ProgressBar
	}

	declare interface ProgressBarProperties {
		maximum?: number,
		minimum?: number,
		selection?: number,
		state?: string
	}

	declare interface RadioButton {
		set(property: string, value: any, options?: Object): RadioButton,
		set(properties: RadioButtonProperties, options?: Object): RadioButton
	}

	declare interface RadioButtonProperties {
		selection?: boolean,
		text?: string
	}

	declare interface ScrollView {
		set(property: string, value: any, options?: Object): ScrollView,
		set(properties: ScrollViewProperties, options?: Object): ScrollView
	}

	declare interface ScrollViewProperties {
		direction?: string
	}

	declare interface SearchAction {
		set(property: string, value: any, options?: Object): SearchAction,
		set(properties: SearchActionProperties, options?: Object): SearchAction
	}

	declare interface SearchActionProperties {
		message?: string,
		proposals?: string[],
		text?: string
	}

	declare interface Slider {
		set(property: string, value: any, options?: Object): Slider,
		set(properties: SliderProperties, options?: Object): Slider
	}

	declare interface SliderProperties {
		maximum?: number,
		minimum?: number,
		selection?: number
	}

	declare interface Switch {
		set(property: string, value: any, options?: Object): Switch,
		set(properties: SwitchProperties, options?: Object): Switch
	}

	declare interface SwitchProperties {
		selection?: boolean
	}

	declare interface Tab {
		set(property: string, value: any, options?: Object): Tab,
		set(properties: TabProperties, options?: Object): Tab
	}

	declare interface TabProperties {
		badge?: string,
		image?: Image,
		title?: string
	}

	declare interface TabFolder {
		set(property: string, value: any, options?: Object): TabFolder,
		set(properties: TabFolderProperties, options?: Object): TabFolder,
		append(...children: Tab[]): TabFolder
	}

	declare interface TabFolderProperties {
		paging?: boolean,
		selection?: Tab,
		tabBarLocation?: string
	}

	declare interface TextInput {
		set(property: string, value: any, options?: Object): TextInput,
		set(properties: TextInputProperties, options?: Object): TextInput
	}

	declare interface TextInputProperties {
		alignment?: string,
		autoCapitalize?: boolean,
		autoCorrect?: boolean,
		editable?: boolean,
		keyboard?: string,
		message?: string,
		text?: string,
		type?: string
	}

	declare interface TextView {
		set(property: string, value: any, options?: Object): TextView,
		set(properties: TextViewProperties, options?: Object): TextView
	}

	declare interface TextViewProperties {
		alignment?: string,
		markupEnabled?: boolean,
		maxLines?: number,
		text?: string
	}

	declare interface ToggleButton {
		set(property: string, value: any, options?: Object): ToggleButton,
		set(properties: ToggleButtonProperties, options?: Object): ToggleButton
	}

	declare interface ToggleButtonProperties {
		alignment?: string,
		image?: Image,
		selection?: boolean,
		text?: string
	}

	declare interface Video {
		set(property: string, value: any, options?: Object): Video,
		set(properties: VideoProperties, options?: Object): Video
	}

	declare interface VideoProperties {
		url?: string
	}

	declare interface WebView {
		set(property: string, value: any, options?: Object): Video,
		set(properties: WebViewProperties, options?: Object): Video
	}

	declare interface WebViewProperties {
		html?: string,
		url?: string
	}

	declare interface WidgetCollection {
		animate(properties: WidgetProperties, options: AnimationOptions): void,
		appendTo(parent: Composite): WidgetCollection,
		children(): WidgetCollection,
		children(selector: string): WidgetCollection,
		dispose(): void,
		find(): WidgetCollection,
		find(selector: string): WidgetCollection,
		parent(): WidgetCollection,
		length: number
	}

	declare interface App {
		installPatch(url: string, callback: (error: Error, patch: Object) => any): void,
		reload(): void
	}

	declare interface Device {
		get(property: string): void,
		get(property: "language"): string,
		get(property: "model"): string,
		get(property: "orientation"): string,
		get(property: "platform"): string,
		get(property: "scaleFactor"): number,
		get(property: "screenHeight"): number,
		get(property: "screenWidth"): number,
		get(property: "version"): string
	}

	declare interface UI {
		get(property: string): void,
		get(property: "activePage"): Page,
		get(property: "background"): string,
		get(property: "textColor"): string,
		get(property: "toolbarVisible"): boolean
	}

	declare function create(type: string, properties: WidgetProperties): Widget<any>

	declare function create(type: "Action", properties: ActionProperties): Action

	declare function create(type: "Button", properties: ButtonProperties): Button

	declare function create(type: "Canvas", properties: WidgetProperties): Canvas

	declare function create(type: "Cell", properties: CellProperties): Cell

	declare function create(type: "CheckBox", properties: CheckBoxProperties): CheckBox

	declare function create(type: "CollectionView", properties: CollectionViewProperties): CollectionView

	declare function create(type: "Composite", properties: WidgetProperties): Composite

	declare function create(type: "Drawer", properties: WidgetProperties): Drawer

	declare function create(type: "ImageView", properties: ImageViewProperties): ImageView

	declare function create(type: "Page", properties: PageProperties): Page

	declare function create(type: "PageSelector", properties: WidgetProperties): PageSelector

	declare function create(type: "Picker", properties: PickerProperties): Picker

	declare function create(type: "ProgressBar", properties: ProgressBarProperties): ProgressBar

	declare function create(type: "RadioButton", properties: RadioButtonProperties): RadioButton

	declare function create(type: "ScrollView", properties: ScrollViewProperties): ScrollView

	declare function create(type: "SearchAction", properties: SearchActionProperties): SearchAction

	declare function create(type: "Slider", properties: SliderProperties): Slider

	declare function create(type: "Switch", properties: SwitchProperties): Switch

	declare function create(type: "Tab", properties: TabProperties): Tab

	declare function create(type: "TabFolder", properties: TabFolderProperties): TabFolder

	declare function create(type: "TextInput", properties: TextInputProperties): TextInput

	declare function create(type: "TextView", properties: TextViewProperties): TextView

	declare function create(type: "ToggleButton", properties: ToggleButtonProperties): ToggleButton

	declare function create(type: "Video", properties: VideoProperties): Video

	declare function create(type: "WebView", properties: WebViewProperties): WebView

		
}