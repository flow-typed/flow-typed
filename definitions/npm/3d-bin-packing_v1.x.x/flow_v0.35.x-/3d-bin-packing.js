

declare module '3d-bin-packing' {
					


}

declare module 'npm$namespace$boxologic' {
				declare class Instance  {
		width: number;
		height: number;
		length: number;
		layout_width: number;
		layout_height: number;
		layout_length: number;
		volume: number;
		constructor(width: number, height: number, length: number): this
	}

	declare class Box extends Instance {
		cox: number;
		coy: number;
		coz: number;
		is_packed: boolean;
		overlapped_boxes: std.HashSet<Box>;
		constructor(instance: bws.packer.Instance): this;
		hit_test(obj: Box): boolean
	}

	declare class Boxologic  {
		constructor(wrapper: bws.packer.Wrapper, instanceArray: bws.packer.InstanceArray): this;
		pack(): std.Pair<bws.packer.Wrapper, bws.packer.InstanceArray>
	}

	declare class Pallet extends Instance {
		constructor(wrapper: bws.packer.Wrapper): this;
		set_orientation(orientation: number): void
	}

	declare class Scrap  {
		cumx: number;
		cumz: number;
		constructor(): this;
		constructor(cumx: number, cumz: number): this
	}

	
}

declare module 'packer' {
		declare interface Instance {
		getName(): string,
		getWidth(): number,
		getHeight(): number,
		getLength(): number,
		getVolume(): number,
		setName(val: string): void,
		setWidth(val: number): void,
		setHeight(val: number): void,
		setLength(val: number): void,
		TYPE(): string
	}

	declare interface ItemEditorProps {
		application: PackerApplication,
		instances: InstanceFormArray,
		wrappers: WrapperArray
	}

	declare interface WrapperViewerProps {
		application: PackerApplication,
		wrappers: WrapperArray
	}

		declare class Packer extends undefined$Entity {
		wrapperArray: WrapperArray;
		instanceArray: InstanceArray;
		constructor(): this;
		constructor(wrapperArray: WrapperArray, instanceArray: InstanceArray): this;
		construct(xml: samchon.library.XML): void;
		getWrapperArray(): WrapperArray;
		getInstanceArray(): InstanceArray;
		optimize(): WrapperArray;
		initGenes(): GAWrapperArray;
		repack($wrappers: WrapperArray): WrapperArray;
		TAG(): string;
		toXML(): samchon.library.XML
	}

	declare class PackerForm extends undefined$Entity {
		constructor(): this;
		constructor(instanceFormArray: InstanceFormArray, wrapperArray: WrapperArray): this;
		construct(xml: samchon.library.XML): void;
		optimize(): WrapperArray;
		getInstanceFormArray(): InstanceFormArray;
		getWrapperArray(): WrapperArray;
		TAG(): string;
		toXML(): samchon.library.XML;
		toPacker(): Packer
	}

	declare class InstanceFormArray extends undefined$EntityArrayCollection<InstanceForm> {
		constructor(): this;
		createChild(xml: samchon.library.XML): InstanceForm;
		TAG(): string;
		CHILD_TAG(): string;
		toInstanceArray(): InstanceArray
	}

	declare class InstanceForm extends undefined$Entity {
		constructor(instance?: Instance, count?: number): this;
		construct(xml: samchon.library.XML): void;
		key(): any;
		getInstance(): Instance;
		getCount(): number;
		setCount(val: number): void;
		$name: string;
		$width: string;
		$height: string;
		$length: string;
		$count: string;
		TAG(): string;
		toXML(): samchon.library.XML;
		toInstanceArray(): InstanceArray
	}

	declare class WrapperArray extends undefined$EntityArrayCollection<Wrapper> {
		constructor(): this;
		createChild(xml: samchon.library.XML): Wrapper;
		getPrice(): number;
		getUtilization(): number;
		TAG(): string;
		CHILD_TAG(): string
	}

	declare class GAWrapperArray extends WrapperArray {
		instanceArray: InstanceArray;
		result: std.HashMap<string, WrapperGroup>;
		constructor(instanceArray: InstanceArray): this;
		constructor(genes: GAWrapperArray): this;
		getResult(): std.HashMap<string, WrapperGroup>;
		less(obj: GAWrapperArray): boolean
	}

	declare class InstanceArray extends undefined$EntityArray<Instance> {
		constructor(): this;
		createChild(xml: samchon.library.XML): Instance;
		TAG(): string;
		CHILD_TAG(): string
	}

	declare class Product extends undefined$Entity, Instance {
		name: string;
		width: number;
		height: number;
		length: number;
		constructor(): this;
		constructor(name: string, width: number, height: number, length: number): this;
		key(): any;
		getName(): string;
		getWidth(): number;
		getHeight(): number;
		getLength(): number;
		getVolume(): number;
		setName(val: string): void;
		setWidth(val: number): void;
		setHeight(val: number): void;
		setLength(val: number): void;
		TYPE(): string;
		TAG(): string;
		toXML(): samchon.library.XML
	}

	declare class Wrap extends undefined$Entity {
		wrapper: Wrapper;
		instance: Instance;
		x: number;
		y: number;
		z: number;
		orientation: number;
		color: number;
		constructor(wrapper: Wrapper): this;
		constructor(wrapper: Wrapper, instance: Instance, x: number, y: number, z: number): this;
		constructor(wrapper: Wrapper, instance: Instance, x: number, y: number, z: number, orientation: number): this;
		construct(xml: samchon.library.XML): void;
		createInstance(type: string): Instance;
		setOrientation(orientation: number): void;
		setPosition(x: number, y: number, z: number): void;
		estimateOrientation(width: number, height: number, length: number): void;
		changeWrapperOrientation(orientation: number): void;
		getWrapper(): Wrapper;
		getInstance(): Instance;
		getX(): number;
		getY(): number;
		getZ(): number;
		getOrientation(): number;
		getWidth(): number;
		getHeight(): number;
		getLength(): number;
		getVolume(): number;
		$instanceName: string;
		$layoutScale: string;
		$position: string;
		TAG(): string;
		toXML(): samchon.library.XML;
		toDisplayObjects(geometry: THREE.Geometry): std.Vector<THREE.Object3D>
	}

	declare class Wrapper extends undefined$EntityDeque<Wrap>, Instance {
		name: string;
		price: number;
		width: number;
		height: number;
		length: number;
		thickness: number;
		constructor(): this;
		constructor(wrapper: Wrapper): this;
		constructor(name: string, price: number, width: number, height: number, length: number, thickness: number): this;
		construct(xml: samchon.library.XML): void;
		createChild(xml: samchon.library.XML): Wrap;
		key(): any;
		getName(): string;
		getPrice(): number;
		getWidth(): number;
		getHeight(): number;
		getLength(): number;
		getThickness(): number;
		getContainableWidth(): number;
		getContainableHeight(): number;
		getContainableLength(): number;
		getVolume(): number;
		getContainableVolume(): number;
		getUtilization(): number;
		equal_to(obj: Wrapper): boolean;
		containable(instance: Instance): boolean;
		setName(val: string): void;
		setPrice(val: number): void;
		setWidth(val: number): void;
		setHeight(val: number): void;
		setLength(val: number): void;
		setThickness(val: number): void;
		$name: string;
		$price: string;
		$width: string;
		$height: string;
		$length: string;
		$thickness: string;
		$scale: string;
		$spaceUtilization: string;
		TYPE(): string;
		TAG(): string;
		CHILD_TAG(): string;
		toXML(): samchon.library.XML;
		toCanvas(endIndex?: number): HTMLCanvasElement
	}

	declare class WrapperGroup extends WrapperArray {
		sample: Wrapper;
		allocatedInstanceArray: InstanceArray;
		constructor(): this;
		constructor(wrapperGroup: WrapperGroup): this;
		constructor(sample: Wrapper): this;
		constructor(name: string, price: number, width: number, height: number, length: number, thickness: number): this;
		key(): any;
		getSample(): Wrapper;
		getAllocatedInstanceArray(): InstanceArray;
		getPrice(): number;
		getUtilization(): number;
		allocate(instance: Instance, n?: number): boolean;
		optimize(): void;
		TAG(): string
	}

	declare class Editor<T> extends React$Component<{
		dataProvider: samchon.protocol.EntityArrayCollection<T>
	}, {
		
	}> {
		constructor(): this;
		createColumns(): AdazzleReactDataGrid.Column[];
		render(): JSX.Element
	}

	declare class ItemEditor extends React$Component<ItemEditorProps, {
		
	}> {
		render(): JSX.Element
	}

	declare class InstanceEditor extends Editor<InstanceForm> {
		createColumns(): AdazzleReactDataGrid.Column[]
	}

	declare class WrapperEditor extends Editor<Wrapper> {
		createColumns(): AdazzleReactDataGrid.Column[]
	}

	declare class PackerApplication extends React$Component<{
		
	}, {
		
	}> {
		constructor(): this;
		pack(): void;
		drawWrapper(wrapper: Wrapper, index?: number): void;
		render(): JSX.Element;
		main(): void
	}

	declare class ResultViewer extends React$Component<WrapperViewerProps, {
		
	}> {
		drawWrapper(wrapper: Wrapper, index?: number): void;
		refresh(): void;
		render(): JSX.Element
	}

	
}

declare module 'npm$namespace$flex' {
		declare interface TabNavigatorProps {
		selectedIndex?: number,
		style?: React.CSSProperties
	}

	declare interface NavigatorContentProps {
		label: string
	}

		declare class TabNavigator extends React$Component<TabNavigatorProps, TabNavigatorProps> {
		render(): JSX.Element
	}

	declare class NavigatorContent extends React$Component<NavigatorContentProps, NavigatorContentProps> {
		render(): JSX.Element
	}

	
}