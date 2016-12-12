

declare module 'angular-ui-tree' {
					
}

declare module 'npm$namespace$AngularUITree' {
		declare interface IEventSourceInfo {
		cloneModel: any,
		index: number,
		nodeScope: ITreeNodeScope,
		nodesScope: ITreeNodeScope
	}

	declare interface IPosition {
		dirAx: number,
		dirX: number,
		dirY: number,
		distAxX: number,
		distAxY: number,
		distX: number,
		distY: number,
		lastDirX: number,
		lastDirY: number,
		lastX: number,
		lastY: number,
		moving: boolean,
		nowX: number,
		nowY: number,
		offsetX: number,
		offsetY: number,
		startX: number,
		startY: number
	}

	declare interface IEventInfo {
		dest: {
		index: number,
		nodesScope: IParentTreeNodeScope
	},
		elements: any,
		pos: IPosition,
		source: IEventSourceInfo
	}

	declare interface IAcceptCallback {
		(source: ITreeNodeScope, destination: ITreeNodeScope, destinationIndex: number): boolean
	}

	declare interface IDroppedCallback {
		(eventInfo: IEventInfo): void
	}

	declare interface ICallbacks {
		accept: IAcceptCallback,
		dragStart: IDroppedCallback,
		dropped: IDroppedCallback
	}

	declare interface ITreeNodeScope {
		node: ITreeNode
	}

	declare interface IParentTreeNodeScope {
		isParent(nodeScope: ITreeNodeScope): boolean
	}

	declare interface ITreeNode {
		id: number | string,
		nodes: ITreeNode[],
		title: string
	}

			
}