

declare module 'react-calendar-timeline' {
		declare interface ReactCalendarTimeline {
		groups: {
		id: number,
		title: any
	}[],
		items: {
		id: number,
		group: number,
		title?: any,
		start_time: any,
		end_time: any,
		canMove?: boolean,
		canResize?: boolean,
		canChangeGroup?: boolean,
		className?: string
	}[],
		keys?: {
		groupIdKey: string,
		groupTitleKey: string,
		itemIdKey: string,
		itemTitleKey: string,
		itemGroupKey: string,
		itemTimeStartKey: string,
		itemTimeEndKey: string
	},
		sidebarWidth?: number,
		dragSnap?: number,
		minResizeWidth?: number,
		fixedHeader?: "fixed" | "none",
		zIndexStart?: number,
		lineHeight?: number,
		headerLabelGroupHeight?: number,
		headerLabelHeight?: number,
		itemHeightRatio?: number,
		minZoom?: number,
		maxZoom?: number,
		canMove?: boolean,
		canChangeGroup?: boolean,
		canResize?: boolean,
		useResizeHandle?: boolean,
		stackItems?: boolean,
		traditionalZoom?: boolean,
		itemTouchSendsClick?: boolean,
		onItemMove(itemId: any, dragTime: any, newGroupOrder: any): any,
		onItemResize(itemId: any, newResizeEnd: any): any,
		onItemSelect(itemId: any): any,
		onItemClick(itemId: any): any,
		onCanvasClick(groupId: any, time: any, e: any): any,
		onItemDoubleClick(itemId: any): any,
		moveResizeValidator(action: any, itemId: any, time: any): any,
		defaultTimeStart?: any,
		defaultTimeEnd?: any,
		visibleTimeStart?: number,
		visibleTimeEnd?: number,
		onTimeChange(visibleTimeStart: any, visibleTimeEnd: any): any,
		onTimeInit(visibleTimeStart: any, visibleTimeEnd: any): any,
		onBoundsChange(canvasTimeStart: any, canvasTimeEnd: any): any,
		children?: any
	}

			declare module.exports: ClassicComponentClass


}