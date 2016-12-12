

declare module 'virtual-dom' {
					declare module.exports: undefined


}

declare module 'npm$namespace$VirtualDOM' {
	declare type EventHandler = (...args: any[]) => void;

	declare type VTree = VText | VNode | Widget | Thunk;

	declare type VChild = VTree[] | VTree | string[] | string;

	declare interface VHook {
		hook(node: Element, propertyName: string): void,
		unhook(node: Element, propertyName: string): void
	}

	declare interface VProperties {
		attributes?: {
		[index: string]: string
	},
		style?: any,
		[index: string]: any | string | boolean | number | VHook | EventHandler | {
		[index: string]: string | boolean | number
	}
	}

	declare interface VNode {
		tagName: string,
		properties: VProperties,
		children: VTree[],
		key?: string,
		namespace?: string,
		count: number,
		hasWidgets: boolean,
		hasThunks: boolean,
		hooks: any[],
		descendantHooks: any[],
		version: string,
		type: string
	}

	declare interface VText {
		text: string,
		new (text: any): VText,
		version: string,
		type: string
	}

	declare interface Widget {
		type: string,
		init(): Element,
		update(previous: Widget, domNode: Element): void,
		destroy(node: Element): void
	}

	declare interface Thunk {
		type: string,
		vnode: VTree,
		render(previous: VTree): VTree
	}

	declare interface VPatch {
		vNode: VNode,
		patch: any,
		new (type: number, vNode: VNode, patch: any): VPatch,
		version: string,
		type: number
	}

	declare interface createProperties {
		key?: string,
		namespace?: string
	}

	declare function create(vnode: VText, opts?: {
		document?: Document,
		warn?: boolean
	}): Text

	declare function create(
		vnode: VNode | Widget | Thunk, opts?: {
		document?: Document,
		warn?: boolean
	}
	): Element

	declare function h(
		tagName: string, properties: createProperties, children: string | VChild[]
	): VNode

	declare function h(tagName: string, children: string | VChild[]): VNode

	declare function diff(left: VTree, right: VTree): VPatch[]

	declare function patch<T>(rootNode: T, patches: VPatch[], renderOptions?: any): T

		
}

declare module 'virtual-dom/h' {
					declare module.exports: undefined


}

declare module 'virtual-dom/create-element' {
					declare module.exports: undefined


}

declare module 'virtual-dom/diff' {
					declare module.exports: undefined


}

declare module 'virtual-dom/patch' {
					declare module.exports: undefined


}