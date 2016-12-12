

declare module 'jscrollpane' {
		declare interface JScrollPaneSettings {
		showArrows?: boolean,
		maintainPosition?: boolean,
		stickToBottom?: boolean,
		stickToRight?: boolean,
		autoReinitialise?: boolean,
		autoReinitialiseDelay?: number,
		verticalDragMinHeight?: number,
		verticalDragMaxHeight?: number,
		horizontalDragMinWidth?: number,
		horizontalDragMaxWidth?: number,
		contentWidth?: number,
		animateScroll?: boolean,
		animateDuration?: number,
		animateEase?: string,
		hijackInternalLinks?: boolean,
		verticalGutter?: number,
		horizontalGutter?: number,
		mouseWheelSpeed?: number,
		arrowButtonSpeed?: number,
		arrowRepeatFreq?: number,
		arrowScrollOnHover?: boolean,
		verticalArrowPositions?: string,
		horizontalArrowPositions?: string,
		enableKeyboardNavigation?: boolean,
		hideFocus?: boolean,
		clickOnTrack?: boolean,
		trackClickSpeed?: number,
		trackClickRepeatFreq?: number
	}

	declare interface JScrollPaneApi {
		reinitialise(options?: JScrollPaneSettings): void,
		scrollToElement(ele: JQuery, stickToTop?: boolean, animate?: boolean): void,
		scrollToElement(ele: string, stickToTop?: boolean, animate?: boolean): void,
		scrollToElement(ele: HTMLElement, stickToTop?: boolean, animate?: boolean): void,
		scrollTo(destX: number, destY: number, animate?: boolean): void,
		scrollToX(destX: number, animate?: boolean): void,
		scrollToY(destY: number, animate?: boolean): void,
		scrollToPercentX(destPercentX: number, animate?: boolean): void,
		scrollToPercentY(destPercentY: number, animate?: boolean): void,
		scrollBy(deltaX: number, deltaY: number, animate?: boolean): void,
		scrollByX(deltaX: number, animate?: boolean): void,
		scrollByY(deltaY: number, animate?: boolean): void,
		positionDragX(x: number, animate?: boolean): void,
		positionDragY(y: number, animate?: boolean): void,
		animate(
		ele: JQuery, prop: string, value: any, stepCallback: (...args: any[]) => any
	): void,
		getContentPositionX(): number,
		getContentPositionY(): number,
		getContentWidth(): number,
		getContentHeight(): number,
		getIsScrollableH(): boolean,
		getPercentScrolledX(): number,
		getPercentScrolledY(): number,
		getIsScrollableV(): boolean,
		getContentPane(): JQuery,
		scrollToBottom(animate?: boolean): void,
		hijackInternalLinks(): void,
		destroy(): void
	}

	declare interface JQuery {
		jScrollPane(options?: JScrollPaneSettings): JQuery
	}

			
}