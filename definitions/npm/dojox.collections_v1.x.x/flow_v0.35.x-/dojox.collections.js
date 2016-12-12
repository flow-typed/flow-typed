import type { collections } from 'npm$namespace$dojox'

declare module 'dojox.collections' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface collections {
		
	}

			
}

declare module 'collections' {
		declare interface _base {
		Set: Object,
		ArrayList(arr: any[]): void,
		BinaryTree(data: any): void,
		Dictionary(dictionary: dojox.collections.Dictionary): void,
		DictionaryEntry(k: String, v: Object): void,
		DictionaryIterator(obj: Object): void,
		Iterator(a: any[]): void,
		Queue(arr: any[]): void,
		SortedList(dictionary: Object): void,
		Stack(arr: any[]): void
	}

	declare interface ArrayList {
		(arr?: any[]): void
	}

	declare interface BinaryTree {
		(data: any): void
	}

	declare interface Dictionary {
		(dictionary?: dojox.collections.Dictionary): void
	}

	declare interface Queue {
		(arr?: any[]): void
	}

	declare interface SortedList {
		(dictionary?: Object): void
	}

	declare interface Stack {
		(arr?: any[]): void
	}

			
}

declare module 'BinaryTree' {
		declare interface TraversalMethods {
		Inorder: number,
		Postorder: number,
		Preorder: number
	}

			
}

declare module 'dojox/collections' {
					declare module.exports: collections


}

declare module 'dojox/collections/ArrayList' {
					declare module.exports: ArrayList


}

declare module 'dojox/collections/BinaryTree' {
					declare module.exports: BinaryTree


}

declare module 'dojox/collections/BinaryTree.TraversalMethods' {
					declare module.exports: TraversalMethods


}

declare module 'dojox/collections/Dictionary' {
					declare module.exports: Dictionary


}

declare module 'dojox/collections/Queue' {
					declare module.exports: Queue


}

declare module 'dojox/collections/Stack' {
					declare module.exports: Stack


}

declare module 'dojox/collections/SortedList' {
					declare module.exports: SortedList


}

declare module 'dojox/collections/_base' {
					declare module.exports: _base


}