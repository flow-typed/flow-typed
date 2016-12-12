

declare module 'ExtJS' {
					
}

declare module 'npm$namespace$Ext' {
		declare export interface IAbstractComponent {
		autoEl?: any,
		autoLoad?: any,
		autoRender?: any,
		autoShow?: boolean,
		baseCls?: string,
		border?: any,
		childEls?: any[],
		cls?: string,
		componentCls?: string,
		componentLayout?: any,
		contentEl?: string,
		data?: any,
		disabled?: boolean,
		disabledCls?: string,
		draggable?: boolean,
		floating?: boolean,
		frame?: boolean,
		height?: number,
		hidden?: boolean,
		hideMode?: string,
		html?: any,
		id?: string,
		itemId?: string,
		loader?: any,
		margin?: any,
		maxHeight?: number,
		maxWidth?: number,
		minHeight?: number,
		minWidth?: number,
		overCls?: string,
		padding?: any,
		plugins?: any,
		renderData?: any,
		renderSelectors?: any,
		renderTo?: any,
		renderTpl?: any,
		rtl?: boolean,
		shrinkWrap?: any,
		style?: any,
		tpl?: any,
		tplWriteMode?: string,
		ui?: string,
		width?: number,
		xtype?: Ext.enums.IWidget,
		_isLayoutRoot?: boolean,
		contentPaddingProperty?: string,
		frameSize?: any,
		isComponent?: boolean,
		maskOnDisable?: boolean,
		ownerCt?: Ext.IContainer,
		rendered?: boolean,
		addChildEls(): void,
		addClass(cls?: any): Ext.IComponent,
		addCls(cls?: any): Ext.IComponent,
		addClsWithUI(classes?: any, skip?: any): void,
		addEvents(eventNames?: any): void,
		addListener(element?: any, listeners?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		addPropertyToState(state?: any, propName?: string, value?: string): boolean,
		addStateEvents(events?: any): void,
		addUIClsToElement(ui?: string): void,
		afterComponentLayout(width?: number, height?: number, oldWidth?: any, oldHeight?: any): void,
		afterRender(): void,
		afterSetPosition(x?: number, y?: number): void,
		alignTo(
		element?: any, position?: string, offsets?: number[], animate?: any
	): Ext.util.IPositionable,
		anchorTo(
		element?: any, position?: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: any
	): Ext.util.IPositionable,
		animate?: any,
		applyState(state?: any): void,
		beforeBlur(e?: Ext.IEventObject): void,
		beforeComponentLayout(adjWidth?: number, adjHeight?: number): void,
		beforeDestroy(): void,
		beforeFocus(e?: Ext.IEventObject): void,
		beforeLayout(): void,
		calculateConstrainedPosition(
		constrainTo?: any, proposedPosition?: number[], local?: boolean, proposedSize?: number[]
	): number[],
		clearListeners(): void,
		clearManagedListeners(): void,
		destroy(): void,
		disable(silent?: boolean): void,
		doAutoRender(): void,
		doComponentLayout(): Ext.container.IContainer,
		enable(silent?: boolean): void,
		enableBubble(eventNames?: any): void,
		ensureAttachedToBody(runLayout?: boolean): void,
		findPlugin(ptype?: string): Ext.IAbstractPlugin,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		forceComponentLayout(): void,
		getActiveAnimation(): any,
		getAlignToXY(element?: any, position?: string, offsets?: number[]): number[],
		getAnchorXY(anchor?: string, local?: boolean, size?: any): number[],
		getBox(contentBox?: boolean, local?: boolean): any,
		getBubbleTarget(): Ext.container.IContainer,
		getConstrainVector(constrainTo?: any, proposedPosition?: number[], proposedSize?: number[]): any,
		getEl(): Ext.dom.IElement,
		getHeight(): number,
		getId(): string,
		getInsertPosition(position?: any): HTMLElement,
		getItemId(): string,
		getLoader(): Ext.IComponentLoader,
		getLocalX(): number,
		getLocalXY(): number[],
		getLocalY(): number,
		getOffsetsTo(offsetsTo?: any): number[],
		getPlugin(pluginId?: string): Ext.IAbstractPlugin,
		getRegion(): Ext.util.IRegion,
		getSize(): any,
		getSizeModel(ownerCtSizeModel?: any): any,
		getState(): any,
		getViewRegion(): Ext.util.IRegion,
		getWidth(): number,
		getX(): number,
		getXTypes(): string,
		getXY(): number[],
		getY(): number,
		hasActiveFx(): any,
		hasCls(className?: string): boolean,
		hasListener(eventName?: string): boolean,
		hasUICls(cls?: string): void,
		initEvents(): void,
		initRenderData(): any,
		is(selector?: string): boolean,
		isDescendantOf(container?: Ext.IContainer): boolean,
		isDisabled(): boolean,
		isDraggable(): boolean,
		isDroppable(): boolean,
		isFloating(): boolean,
		isHidden(): boolean,
		isLayoutRoot(): void,
		isLayoutSuspended(): boolean,
		isVisible(deep?: boolean): boolean,
		isXType(xtype?: string, shallow?: boolean): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		move(direction?: string, distance?: number, animate?: any): void,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		nextNode(selector?: string): Ext.IComponent,
		nextSibling(selector?: string): Ext.IComponent,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		onAdded(container?: Ext.container.IContainer, pos?: number): void,
		onDisable(): void,
		onEnable(): void,
		onPosition(x?: number, y?: number): void,
		onRemoved(destroying?: boolean): void,
		onRender(parentNode?: Ext.core.IElement, containerIdx?: number): void,
		onResize(width?: any, height?: any, oldWidth?: any, oldHeight?: any): void,
		postBlur(e?: Ext.IEventObject): void,
		previousNode(selector?: string): Ext.IComponent,
		previousSibling(selector?: string): Ext.IComponent,
		registerFloatingItem(cmp?: any): void,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeAnchor(): Ext.util.IPositionable,
		removeChildEls(testFn?: any): void,
		removeCls(cls?: any): Ext.IComponent,
		removeClsWithUI(cls?: any): void,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		removeUIClsFromElement(ui?: string): void,
		render(container?: any, position?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		savePropToState(propName?: string, state?: any, stateName?: string): boolean,
		savePropsToState(propNames?: any, state?: any): any,
		saveState(): void,
		sequenceFx(): any,
		setBorder(border?: any): void,
		setBox(box?: any, animate?: any): Ext.util.IPositionable,
		setDisabled(disabled?: boolean): void,
		setDocked(dock?: any, layoutParent?: boolean): Ext.IComponent,
		setHeight(height?: number): Ext.IComponent,
		setLocalX(x?: any): Ext.util.IPositionable,
		setLocalXY(x?: any, y?: any): Ext.util.IPositionable,
		setLocalY(y?: any): Ext.util.IPositionable,
		setMargin(margin?: any): void,
		setRegion(region?: Ext.util.IRegion, animate?: any): Ext.util.IPositionable,
		setSize(width?: any, height?: any): Ext.IComponent,
		setUI(ui?: string): void,
		setVisible(visible?: boolean): Ext.IComponent,
		setWidth(width?: number): Ext.IComponent,
		setX(x?: any, animate?: any): Ext.util.IPositionable,
		setXY(xy?: any, animate?: any): Ext.util.IPositionable,
		setY(y?: any, animate?: any): Ext.util.IPositionable,
		stopAnimation(): Ext.IElement,
		stopFx(): Ext.IElement,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		syncFx(): any,
		translatePoints(x?: any, y?: number): any,
		un(eventName?: string, fn?: any, scope?: any): void,
		up(selector?: any, limit?: any): Ext.container.IContainer,
		update(htmlOrData?: any, loadScripts?: boolean, callback?: any): void,
		updateLayout(options?: any): void
	}

	declare export interface IAbstractManager {
		all?: Ext.util.IHashMap,
		create(config?: any, defaultType?: string): any,
		each(fn?: any, scope?: any): void,
		get(id?: string): any,
		getCount(): number,
		isRegistered(type?: string): boolean,
		onAvailable(id?: string, fn?: any, scope?: any): void,
		register(item?: any): void,
		registerType(type?: string, cls?: any): void,
		unregister(item?: any): void
	}

	declare export interface IAbstractPlugin {
		pluginId?: string,
		isPlugin?: boolean,
		clonePlugin(overrideCfg?: any): void,
		destroy(): void,
		disable(): void,
		enable(): void,
		getCmp(): Ext.IComponent,
		init(client?: Ext.IComponent): void,
		setCmp(cmp?: Ext.IComponent): void
	}

	declare export interface IAction {
		disabled?: boolean,
		handler?: any,
		hidden?: boolean,
		iconCls?: string,
		itemId?: string,
		scope?: any,
		text?: string,
		disable(): void,
		each(fn?: any, scope?: any): void,
		enable(): void,
		execute(...args: any[]): void,
		getIconCls(): void,
		getText(): void,
		hide(): void,
		isDisabled(): void,
		isHidden(): void,
		setDisabled(disabled?: boolean): void,
		setHandler(fn?: any, scope?: any): void,
		setHidden(hidden?: boolean): void,
		setIconCls(cls?: string): void,
		setText(text?: string): void,
		show(): void
	}

	declare export interface IAjax {
		
	}

	declare export interface IArray {
		
	}

	declare export interface IBase {
		self?: Ext.IClass,
		callOverridden(args?: any): any,
		callParent(args?: any): any,
		callSuper(args?: any): any,
		getInitialConfig(name?: string): any,
		initConfig(config?: any): Ext.IBase
	}

	declare export interface IButton {
		allowDepress?: boolean,
		arrowAlign?: string,
		arrowCls?: string,
		baseCls?: string,
		baseParams?: any,
		clickEvent?: string,
		cls?: string,
		componentLayout?: any,
		destroyMenu?: boolean,
		disabled?: boolean,
		enableToggle?: boolean,
		focusCls?: string,
		frame?: boolean,
		glyph?: any,
		handleMouseEvents?: boolean,
		handler?: any,
		hidden?: boolean,
		href?: string,
		hrefTarget?: string,
		icon?: string,
		iconAlign?: string,
		iconCls?: string,
		menu?: any,
		menuActiveCls?: string,
		menuAlign?: string,
		minWidth?: number,
		overCls?: string,
		overflowText?: string,
		params?: any,
		pressed?: boolean,
		pressedCls?: string,
		preventDefault?: boolean,
		renderTpl?: any,
		repeat?: any,
		scale?: any,
		scope?: any,
		showEmptyMenu?: boolean,
		shrinkWrap?: any,
		tabIndex?: number,
		text?: string,
		textAlign?: string,
		toggleGroup?: string,
		toggleHandler?: any,
		tooltip?: any,
		tooltipType?: string,
		isAction?: boolean,
		template?: Ext.ITemplate,
		child(selector?: any): any,
		disable(silent?: any): void,
		down(selector?: any): any,
		enable(silent?: any): void,
		getTemplateArgs(): any,
		getText(): string,
		hasVisibleMenu(): boolean,
		hideMenu(): Ext.button.IButton,
		initComponent(): void,
		onDisable(): void,
		query(selector?: string): Ext.IComponent[],
		queryBy(fn?: any, scope?: any): Ext.IComponent[],
		queryById(id?: string): Ext.IComponent,
		setGlyph(glyph?: any): Ext.button.IButton,
		setHandler(handler?: any, scope?: any): Ext.button.IButton,
		setHref(href?: string): void,
		setIcon(icon?: string): Ext.button.IButton,
		setIconCls(cls?: string): Ext.button.IButton,
		setParams(params?: any): void,
		setScale(scale?: string): void,
		setText(text?: string): Ext.button.IButton,
		setTextAlign(align?: string): void,
		setTooltip(tooltip?: any): Ext.button.IButton,
		setUI(ui?: any): void,
		showMenu(fromEvent?: any): void,
		toggle(state?: boolean, suppressEvent?: boolean): Ext.button.IButton
	}

	declare export interface ICycleButton {
		changeHandler?: any,
		forceGlyph?: any,
		forceIcon?: string,
		items?: any[],
		prependText?: string,
		showText?: boolean,
		menu?: Ext.menu.IMenu,
		getActiveItem(): Ext.menu.ICheckItem,
		setActiveItem(item?: Ext.menu.ICheckItem, suppressEvent?: boolean): void,
		toggleSelected(): void
	}

	declare export interface IButtonToggleManager {
		
	}

	declare export interface ISplitButton {
		arrowHandler?: any,
		arrowTooltip?: string,
		setArrowHandler(handler?: any, scope?: any): void
	}

	declare export interface IClass {
		alias?: string[],
		alternateClassName?: any,
		config?: any,
		extend?: string,
		inheritableStatics?: any,
		mixins?: any,
		requires?: string[],
		singleton?: boolean,
		statics?: any,
		uses?: string[]
	}

	declare export interface IClassManager {
		
	}

	declare export interface IComponent {
		autoScroll?: boolean,
		columnWidth?: any,
		constrainTo?: any,
		constraintInsets?: any,
		defaultAlign?: string,
		floating?: boolean,
		formBind?: boolean,
		overflowX?: string,
		overflowY?: string,
		region?: any,
		resizable?: any,
		resizeHandles?: string,
		toFrontOnShow?: boolean,
		floatParent?: Ext.IContainer,
		scrollFlags?: any,
		zIndexManager?: Ext.IZIndexManager,
		zIndexParent?: Ext.IContainer,
		afterComponentLayout(): void,
		afterHide(callback?: any, scope?: any): void,
		afterRender(): void,
		afterSetPosition(ax?: any, ay?: any): void,
		afterShow(animateTarget?: any, callback?: any, scope?: any): void,
		beforeLayout(): void,
		beforeShow(): void,
		bubble(fn?: any, scope?: any, args?: any[]): Ext.IComponent,
		cancelFocus(): void,
		center(): Ext.IComponent,
		cloneConfig(overrides?: any): Ext.IComponent,
		doConstrain(constrainTo?: any): void,
		findParentBy(fn?: any): Ext.container.IContainer,
		findParentByType(xtype?: any): Ext.container.IContainer,
		focus(selectText?: boolean, delay?: any, callback?: any, scope?: any): Ext.IComponent,
		getEl(): Ext.dom.IElement,
		getId(): string,
		getPosition(local?: boolean): number[],
		getXType(): string,
		hide(animateTarget?: any, callback?: any, scope?: any): Ext.IComponent,
		initComponent(): void,
		onAdded(): void,
		onDestroy(): void,
		onHide(animateTarget?: any, callback?: any, scope?: any): void,
		onShow(animateTarget?: any, callback?: any, scope?: any): void,
		onShowComplete(callback?: any, scope?: any): void,
		scrollBy(deltaX?: any, deltaY?: any, animate?: any): void,
		setActive(active?: boolean, newActive?: Ext.IComponent): void,
		setAutoScroll(scroll?: boolean): Ext.IComponent,
		setBorderRegion(region?: string): string,
		setLoading(load?: any, targetEl?: boolean): Ext.ILoadMask,
		setOverflowXY(overflowX?: string, overflowY?: string): Ext.IComponent,
		setPagePosition(x?: any, y?: number, animate?: any): Ext.IComponent,
		setPosition(x?: any, y?: number, animate?: any): Ext.IComponent,
		setRegionWeight(weight?: number): number,
		show(animateTarget?: any, callback?: any, scope?: any): Ext.IComponent,
		showAt(x?: any, y?: number, animate?: any): Ext.IComponent,
		showBy(component?: any, position?: string, offsets?: number[]): Ext.IComponent,
		toBack(): Ext.IComponent,
		toFront(preventFocus?: boolean): Ext.IComponent,
		updateBox(box?: any): Ext.IComponent
	}

	declare export interface IComponentLoader {
		loadMask?: any,
		scripts?: boolean,
		target?: any,
		setTarget(target?: any): void
	}

	declare export interface IComponentManager {
		
	}

	declare export interface IComponentMgr {
		
	}

	declare export interface IComponentQuery {
		
	}

	declare export interface IButtonGroup {
		baseCls?: string,
		columns?: number,
		defaultButtonUI?: string,
		defaultType?: string,
		frame?: boolean,
		layout?: any,
		titleAlign?: string,
		onBeforeAdd(component?: any): void
	}

	declare export interface IContainer {
		anchorSize?: any,
		getChildByElement(el?: any, deep?: boolean): Ext.IComponent
	}

	declare export interface IViewport {
		isViewport?: boolean,
		onRender(): void
	}

	declare export interface IStoreMgr {
		
	}

	declare export interface IStoreManager {
		
	}

	declare export interface IDate {
		
	}

	declare export interface IDirect {
		
	}

	declare export interface ICompositeElement {
		
	}

	declare export interface ICompositeElementLite {
		elements?: HTMLElement[],
		isComposite?: boolean,
		add(els?: any): Ext.dom.ICompositeElement,
		clear(removeDom?: boolean): void,
		contains(el?: any): boolean,
		each(fn?: any, scope?: any): Ext.dom.ICompositeElement,
		fill(els?: any): Ext.dom.ICompositeElement,
		filter(selector?: any): Ext.dom.ICompositeElement,
		first(): Ext.dom.IElement,
		getCount(): number,
		indexOf(el?: any): number,
		item(index?: number): Ext.dom.IElement,
		last(): Ext.dom.IElement,
		removeElement(el?: any, removeDom?: boolean): Ext.dom.ICompositeElement,
		replaceElement(el?: any, replacement?: any, domReplace?: boolean): Ext.dom.ICompositeElement,
		slice(start?: number, end?: number): HTMLElement[]
	}

	declare export interface IElement {
		autoBoxAdjust?: boolean,
		originalDisplay?: string,
		addClsOnClick(className?: string, testFn?: any, scope?: any): Ext.dom.IElement,
		addClsOnFocus(className?: string, testFn?: any, scope?: any): Ext.dom.IElement,
		addClsOnOver(className?: string, testFn?: any, scope?: any): Ext.dom.IElement,
		addKeyListener(key?: any, fn?: any, scope?: any): Ext.util.IKeyMap,
		addKeyMap(config?: any): Ext.util.IKeyMap,
		addListener(eventName?: string, fn?: any, scope?: any, options?: any): Ext.dom.IElement,
		animate(config?: any): Ext.dom.IElement,
		blur(): Ext.dom.IElement,
		boxWrap(clazz?: string): Ext.dom.IElement,
		cacheScrollValues(): any,
		center(centerIn?: any): void,
		clean(forceReclean?: boolean): void,
		clearListeners(): Ext.dom.IElement,
		clearOpacity(): Ext.dom.IElement,
		clearPositioning(value?: string): Ext.dom.IElement,
		clip(): Ext.dom.IElement,
		createProxy(config?: any, renderTo?: any, matchBox?: boolean): Ext.dom.IElement,
		createShim(): Ext.dom.IElement,
		enableDisplayMode(display?: string): Ext.dom.IElement,
		fadeIn(options?: any): Ext.IElement,
		fadeOut(options?: any): Ext.IElement,
		focus(defer?: number): Ext.dom.IElement,
		focusable(): boolean,
		frame(color?: string, count?: number, options?: any): Ext.dom.IElement,
		getAttributeNS(namespace?: string, name?: string): string,
		getBottom(local?: boolean): number,
		getCenterXY(): number[],
		getColor(attr?: string, defaultValue?: string, prefix?: string): void,
		getComputedHeight(): number,
		getComputedWidth(): number,
		getFrameWidth(sides?: string): number,
		getLeft(local?: boolean): number,
		getLoader(): Ext.IElementLoader,
		getLocalX(): number,
		getLocalXY(): any[],
		getLocalY(): number,
		getPageBox(asRegion?: boolean): any,
		getPositioning(autoPx?: boolean): any,
		getRight(local?: boolean): number,
		getScroll(): any,
		getScrollLeft(): number,
		getScrollTop(): number,
		getStyleSize(): any,
		getTextWidth(text?: string, min?: number, max?: number): number,
		getTop(local?: boolean): number,
		getX(): number,
		getXY(): any[],
		getY(): number,
		ghost(anchor?: string, options?: any): Ext.dom.IElement,
		hide(animate?: any): Ext.dom.IElement,
		highlight(color?: string, options?: any): Ext.dom.IElement,
		hover(overFn?: any, outFn?: any, scope?: any, options?: any): Ext.dom.IElement,
		initDD(group?: string, config?: any, overrides?: any): Ext.dd.IDD,
		initDDProxy(group?: string, config?: any, overrides?: any): Ext.dd.IDDProxy,
		initDDTarget(group?: string, config?: any, overrides?: any): Ext.dd.IDDTarget,
		isBorderBox(): boolean,
		isDisplayed(): boolean,
		isFocusable(asFocusEl?: any): boolean,
		isMasked(): boolean,
		isScrollable(): boolean,
		isVisible(deep?: boolean): boolean,
		load(options?: any): Ext.dom.IElement,
		mask(msg?: string, msgCls?: string): Ext.dom.IElement,
		monitorMouseLeave(delay?: number, handler?: any, scope?: any): any,
		moveTo(x?: number, y?: number, animate?: any): Ext.dom.IElement,
		needsTabIndex(): void,
		on(eventName?: string, fn?: any, scope?: any, options?: any): Ext.dom.IElement,
		pause(seconds?: number): Ext.IElement,
		position(pos?: string, zIndex?: number, x?: number, y?: number): void,
		puff(options?: any): Ext.dom.IElement,
		purgeAllListeners(): Ext.dom.IElement,
		relayEvent(eventName?: string, observable?: any): void,
		removeAllListeners(): Ext.dom.IElement,
		removeListener(eventName?: string, fn?: any, scope?: any): Ext.dom.IElement,
		scale(width?: number, height?: number, options?: any): Ext.IElement,
		scroll(direction?: string, distance?: number, animate?: any): boolean,
		scrollBy(deltaX?: any, deltaY?: any, animate?: any): Ext.IElement,
		scrollIntoView(
		container?: any, hscroll?: boolean, animate?: any, highlight?: boolean
	): Ext.dom.IElement,
		scrollTo(side?: string, value?: number, animate?: any): Ext.IElement,
		selectable(): Ext.IElement,
		setBottom(bottom?: any): Ext.dom.IElement,
		setBounds(
		x?: number, y?: number, width?: any, height?: any, animate?: any
	): Ext.dom.IElement,
		setDisplayed(value?: any): Ext.dom.IElement,
		setLeft(left?: any): Ext.dom.IElement,
		setLeftTop(left?: any, top?: any): Ext.dom.IElement,
		setLocation(x?: number, y?: number, animate?: any): Ext.dom.IElement,
		setOpacity(opacity?: number, animate?: any): Ext.dom.IElement,
		setPositioning(posCfg?: any): Ext.dom.IElement,
		setRight(right?: any): Ext.dom.IElement,
		setScrollLeft(left?: number): Ext.dom.IElement,
		setScrollTop(top?: number): Ext.dom.IElement,
		setTop(top?: any): Ext.dom.IElement,
		setVisible(visible?: boolean, animate?: any): Ext.dom.IElement,
		shift(options?: any): Ext.IElement,
		show(animate?: any): Ext.dom.IElement,
		slideIn(anchor?: string, options?: any): Ext.dom.IElement,
		slideOut(anchor?: string, options?: any): Ext.dom.IElement,
		swallowEvent(eventName?: any, preventDefault?: boolean): Ext.dom.IElement,
		switchOff(options?: any): Ext.dom.IElement,
		toggle(animate?: any): Ext.dom.IElement,
		un(eventName?: string, fn?: any, scope?: any): Ext.dom.IElement,
		unclip(): Ext.dom.IElement,
		unmask(): void,
		unselectable(): Ext.dom.IElement,
		update(html?: string, loadScripts?: boolean, callback?: any): Ext.dom.IElement
	}

	declare export interface ILayer {
		cls?: string,
		constrain?: boolean,
		dh?: any,
		hideMode?: string,
		shadow?: any,
		shadowOffset?: number,
		shim?: boolean,
		useDisplay?: boolean,
		visibilityCls?: string,
		zindex?: number,
		remove(): void,
		setBounds(
		x?: any, y?: any, width?: any, height?: any, animate?: any, duration?: any, callback?: any, easing?: any
	): Ext.dom.IElement,
		setHeight(
		h?: any, animate?: any, duration?: any, callback?: any, easing?: any
	): Ext.dom.IElement,
		setLeft(left?: any): Ext.dom.IElement,
		setLeftTop(left?: any, top?: any): Ext.dom.IElement,
		setSize(
		w?: any, h?: any, animate?: any, duration?: any, callback?: any, easing?: any
	): Ext.dom.IElement,
		setTop(top?: any): Ext.dom.IElement,
		setVisible(
		visible?: any, animate?: any, duration?: any, callback?: any, easing?: any
	): Ext.dom.IElement,
		setWidth(
		w?: any, animate?: any, duration?: any, callback?: any, easing?: any
	): Ext.dom.IElement,
		setZIndex(zindex?: number): Ext.ILayer
	}

	declare export interface IDomQuery {
		
	}

	declare export interface IDomHelper {
		
	}

	declare export interface IEditor {
		alignment?: string,
		allowBlur?: boolean,
		autoSize?: any,
		baseCls?: string,
		cancelOnEsc?: boolean,
		completeOnEnter?: boolean,
		constrain?: boolean,
		field?: Ext.form.field.IField,
		focusOnToFront?: boolean,
		hidden?: boolean,
		hideEl?: boolean,
		ignoreNoChange?: boolean,
		layout?: any,
		offsets?: number[],
		parentEl?: any,
		revertInvalid?: boolean,
		shadow?: any,
		swallowKeys?: boolean,
		updateEl?: boolean,
		value?: any,
		afterRender(ct?: any, position?: any): void,
		cancelEdit(remainVisible?: boolean): void,
		completeEdit(remainVisible?: boolean): void,
		getValue(): any,
		onHide(): void,
		onShow(): void,
		realign(autoSize?: boolean): void,
		setValue(value?: any): void,
		startEdit(el?: any, value?: string): void
	}

	declare export interface IElementLoader {
		ajaxOptions?: any,
		autoLoad?: any,
		baseParams?: any,
		callback?: any,
		failure?: any,
		loadMask?: any,
		params?: any,
		renderer?: any,
		scope?: any,
		scripts?: boolean,
		success?: any,
		target?: any,
		url?: string,
		isLoader?: boolean,
		abort(): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		destroy(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getTarget(): Ext.IComponent,
		hasListener(eventName?: string): boolean,
		isAutoRefreshing(): boolean,
		load(options?: any): void,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		setTarget(target?: any): void,
		startAutoRefresh(interval?: number, options?: any): void,
		stopAutoRefresh(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IError {
		ignore?: boolean,
		notify?: boolean,
		toString(): string
	}

	declare export interface IEventManager {
		
	}

	declare export interface IEventObject {
		
	}

	declare export interface IFlashComponent {
		backgroundColor?: string,
		expressInstall?: boolean,
		flashAttributes?: any,
		flashParams?: any,
		flashVars?: any,
		flashVersion?: string,
		renderTpl?: any,
		swfHeight?: any,
		swfWidth?: any,
		url?: string,
		wmode?: string,
		swf?: Ext.IElement,
		EXPRESS_INSTALL_URL?: string,
		afterRender(): void,
		beforeDestroy(): void,
		getSwfId(): void,
		initComponent(): void
	}

	declare export interface IFocusManager {
		
	}

	declare export interface IFocusMgr {
		
	}

	declare export interface IFormPanel {
		layout?: any,
		pollForChanges?: boolean,
		pollInterval?: number,
		checkChange(): void,
		getForm(): Ext.form.IBasic,
		getRecord(): Ext.data.IModel,
		getValues(
		asString?: boolean, dirtyOnly?: boolean, includeEmptyText?: boolean, useDataValues?: boolean
	): any,
		hasInvalidField(): void,
		initFieldAncestor(): void,
		isDirty(): boolean,
		isValid(): boolean,
		load(options?: any): void,
		loadRecord(record?: Ext.data.IModel): Ext.form.IBasic,
		onFieldErrorChange(field?: Ext.form.ILabelable, error?: string): void,
		onFieldValidityChange(field?: Ext.form.field.IField, valid?: boolean): void,
		startPolling(interval?: number): void,
		stopPolling(): void,
		submit(options?: any): void,
		updateRecord(record?: Ext.data.IModel): Ext.form.IBasic
	}

	declare export interface IFunction {
		
	}

	declare export interface IListView {
		columns?: any,
		rowLines?: boolean,
		viewType?: string,
		reconfigure(store?: Ext.data.IStore, columns?: any[]): void
	}

	declare export interface IPropGridProperty {
		idProperty?: any,
		fields?: Ext.util.IMixedCollection
	}

	declare export interface IImg {
		alt?: string,
		autoEl?: any,
		baseCls?: string,
		glyph?: any,
		imgCls?: string,
		src?: string,
		title?: string,
		onDestroy(): void,
		onRender(): void,
		setSrc(src?: string): void
	}

	declare export interface IIs {
		
	}

	declare export interface IJSON {
		
	}

	declare export interface ILoader {
		
	}

	declare export interface ILoadMask {
		baseCls?: string,
		maskCls?: string,
		msg?: string,
		msgCls?: string,
		renderTpl?: any,
		store?: Ext.data.IStore,
		target?: Ext.IComponent,
		useMsg?: boolean,
		useTargetEl?: boolean,
		afterRender(): void,
		afterShow(): void,
		bindStore(store?: Ext.data.IStore): void,
		bindStoreListeners(store?: Ext.data.IAbstractStore): void,
		center(): Ext.IComponent,
		doConstrain(constrainTo?: any): void,
		getStore(): Ext.data.IAbstractStore,
		getStoreListeners(store?: any): any,
		hide(): Ext.IComponent,
		onBindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		onDestroy(): void,
		onDisable(): void,
		onHide(): void,
		onShow(): void,
		onUnbindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		setActive(active?: boolean, newActive?: Ext.IComponent): void,
		show(): Ext.IComponent,
		toBack(): Ext.IComponent,
		toFront(preventFocus?: boolean): Ext.IComponent,
		unbindStoreListeners(store?: Ext.data.IAbstractStore): void
	}

	declare export interface IMessageBox {
		
	}

	declare export interface IMsg {
		
	}

	declare export interface IModelManager {
		
	}

	declare export interface IModelMgr {
		
	}

	declare export interface INumber {
		
	}

	declare export interface IObject {
		
	}

	declare export interface IPanel {
		animCollapse?: boolean,
		bbar?: any,
		buttonAlign?: string,
		buttons?: any,
		closable?: boolean,
		closeAction?: string,
		collapseDirection?: string,
		collapseFirst?: boolean,
		collapseMode?: string,
		collapsed?: boolean,
		collapsedCls?: string,
		collapsible?: boolean,
		constrain?: boolean,
		constrainHeader?: boolean,
		dockedItems?: any,
		fbar?: any,
		floatable?: boolean,
		frame?: boolean,
		frameHeader?: boolean,
		glyph?: any,
		header?: any,
		headerOverCls?: string,
		headerPosition?: string,
		hideCollapseTool?: boolean,
		icon?: string,
		iconCls?: string,
		lbar?: any,
		manageHeight?: boolean,
		minButtonWidth?: number,
		overlapHeader?: boolean,
		placeholder?: any,
		placeholderCollapseHideMode?: number,
		preventHeader?: boolean,
		rbar?: any,
		simpleDrag?: boolean,
		tbar?: any,
		title?: string,
		titleAlign?: string,
		titleCollapse?: boolean,
		tools?: any,
		dd?: any,
		addTool(tools?: any): void,
		afterCollapse(animated?: boolean): void,
		afterExpand(animated?: boolean): void,
		close(): void,
		collapse(direction?: string, animate?: boolean): Ext.panel.IPanel,
		convertCollapseDir(collapseDir?: any): void,
		expand(animate?: boolean): Ext.panel.IPanel,
		getCollapsed(): any,
		getHeader(): void,
		getState(): any,
		isLayoutRoot(): void,
		isVisible(deep?: any): boolean,
		onHide(): void,
		onRemoved(destroying?: any): void,
		onShow(): void,
		setBorder(border?: any, targetEl?: any): void,
		setGlyph(newGlyph?: any): void,
		setIcon(newIcon?: string): void,
		setIconCls(newIconCls?: string): void,
		setTitle(newTitle?: string): void,
		setUI(ui?: any): void,
		toggleCollapse(): Ext.panel.IPanel
	}

	declare export interface IPerf {
		
	}

	declare export interface IColorPalette {
		allowReselect?: boolean,
		clickEvent?: string,
		componentCls?: string,
		handler?: any,
		itemCls?: string,
		renderTpl?: any,
		scope?: any,
		selectedCls?: string,
		value?: string,
		colors?: string[],
		clear(): void,
		getValue(): string,
		onRender(): void,
		select(color?: string, suppressEvent?: boolean): void
	}

	declare export interface IDatePicker {
		ariaTitle?: string,
		ariaTitleDateFormat?: string,
		baseCls?: string,
		border?: any,
		dayNames?: string[],
		disableAnim?: boolean,
		disabledCellCls?: string,
		disabledDates?: string[],
		disabledDatesRE?: RegExp,
		disabledDatesText?: string,
		disabledDays?: number[],
		disabledDaysText?: string,
		focusOnShow?: boolean,
		format?: string,
		handler?: any,
		keyNavConfig?: any,
		longDayFormat?: string,
		maxDate?: any,
		maxText?: string,
		minDate?: any,
		minText?: string,
		monthNames?: string[],
		monthYearFormat?: string,
		monthYearText?: string,
		nextText?: string,
		prevText?: string,
		renderTpl?: any,
		scope?: any,
		selectedCls?: string,
		showToday?: boolean,
		startDay?: number,
		todayText?: string,
		todayTip?: string,
		getDayInitial(value?: any): string,
		getValue(): any,
		hideMonthPicker(animate?: boolean): Ext.picker.IDate,
		initComponent(): void,
		selectToday(): Ext.picker.IDate,
		setDisabledDates(disabledDates?: any): Ext.picker.IDate,
		setDisabledDays(disabledDays?: number[]): Ext.picker.IDate,
		setMaxDate(value?: any): Ext.picker.IDate,
		setMinDate(value?: any): Ext.picker.IDate,
		setValue(value?: any): Ext.picker.IDate,
		showMonthPicker(animate?: boolean): Ext.picker.IDate,
		showNextMonth(e?: any): Ext.picker.IDate,
		showNextYear(): Ext.picker.IDate,
		showPrevMonth(e?: any): Ext.picker.IDate,
		showPrevYear(): Ext.picker.IDate
	}

	declare export interface IMonthPicker {
		baseCls?: string,
		cancelText?: string,
		okText?: string,
		renderTpl?: any,
		selectedCls?: string,
		showButtons?: boolean,
		value?: any,
		adjustYear(offset?: number): void,
		getValue(): number[],
		hasSelection(): boolean,
		onDestroy(): void,
		setValue(value?: any): Ext.picker.IMonth
	}

	declare export interface IPluginManager {
		
	}

	declare export interface IPluginMgr {
		
	}

	declare export interface IProgressBar {
		animate?: any,
		baseCls?: string,
		componentLayout?: any,
		id?: string,
		renderTpl?: any,
		text?: string,
		textEl?: any,
		value?: number,
		initComponent(): void,
		initRenderData(): any,
		isWaiting(): boolean,
		onDestroy(): void,
		onRender(): void,
		reset(hide?: boolean): Ext.IProgressBar,
		updateProgress(value?: number, text?: string, animate?: boolean): Ext.IProgressBar,
		updateText(text?: string): Ext.IProgressBar,
		wait(config?: any): Ext.IProgressBar
	}

	declare export interface IQueryable {
		child(selector?: any): any,
		down(selector?: any): any,
		query(selector?: string): Ext.IComponent[],
		queryBy(fn?: any, scope?: any): Ext.IComponent[],
		queryById(id?: string): Ext.IComponent
	}

	declare export interface IResizable {
		constrainTo?: any,
		dynamic?: boolean,
		handles?: string,
		height?: number,
		heightIncrement?: number,
		maxHeight?: number,
		maxWidth?: number,
		minHeight?: number,
		minWidth?: number,
		pinned?: boolean,
		preserveRatio?: boolean,
		target?: any,
		transparent?: boolean,
		width?: number,
		widthIncrement?: number,
		el?: Ext.IElement,
		originalTarget?: any,
		resizeTracker?: Ext.resizer.IResizeTracker,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getEl(): Ext.IElement,
		getTarget(): any,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resizeTo(width?: number, height?: number): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IAbstractSelectionModel {
		allowDeselect?: boolean,
		mode?: any,
		pruneRemoved?: boolean,
		toggleOnClick?: boolean,
		selected?: Ext.util.IMixedCollection,
		bindStore(store?: any, initial?: any): void,
		bindStoreListeners(store?: Ext.data.IAbstractStore): void,
		deselect(records?: any, suppressEvent?: boolean): void,
		deselectAll(suppressEvent?: boolean): void,
		deselectRange(startRow?: any, endRow?: any): void,
		getCount(): number,
		getLastSelected(): Ext.data.IModel,
		getSelection(): Ext.data.IModel[],
		getSelectionMode(): string,
		getStore(): Ext.data.IAbstractStore,
		getStoreListeners(): any,
		hasSelection(): boolean,
		isFocused(record?: Ext.data.IModel): void,
		isLocked(): boolean,
		isRangeSelected(from?: any, to?: any): boolean,
		isSelected(record?: any): boolean,
		onBindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		onUnbindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		select(records?: any, keepExisting?: boolean, suppressEvent?: boolean): void,
		selectAll(suppressEvent?: boolean): void,
		selectRange(startRow?: any, endRow?: any, keepExisting?: boolean): void,
		setLastFocused(record?: Ext.data.IModel): void,
		setLocked(locked?: boolean): void,
		setSelectionMode(selMode?: string): void,
		unbindStoreListeners(store?: Ext.data.IAbstractStore): void
	}

	declare export interface IShadow {
		mode?: string,
		offset?: number,
		hide(): void,
		isVisible(): void,
		realign(left?: number, top?: number, width?: number, height?: number): void,
		setOpacity(opacity?: number): void,
		setZIndex(zindex?: number): void,
		show(targetEl?: any): void
	}

	declare export interface IShadowPool {
		
	}

	declare export interface ISlider {
		getValue(): any,
		setValue(value?: number, animate?: boolean): void
	}

	declare export interface IString {
		
	}

	declare export interface ISupports {
		
	}

	declare export interface ITabPanel {
		activeItem?: any,
		activeTab?: any,
		deferredRender?: boolean,
		itemCls?: string,
		layout?: any,
		maxTabWidth?: number,
		minTabWidth?: number,
		plain?: boolean,
		removePanelHeader?: boolean,
		tabBar?: any,
		tabPosition?: any,
		getActiveTab(): Ext.IComponent,
		getTabBar(): Ext.tab.IBar,
		onAdd(item?: any, index?: any): void,
		setActiveTab(card?: any): Ext.IComponent
	}

	declare export interface ITemplate {
		compiled?: boolean,
		disableFormats?: boolean,
		isTemplate?: boolean,
		append(el?: any, values?: any, returnElement?: boolean): any,
		apply(values?: any): string,
		applyOut(values?: any, out?: any[]): any[],
		applyTemplate(values?: any): string,
		compile(): Ext.ITemplate,
		insertAfter(el?: any, values?: any, returnElement?: boolean): any,
		insertBefore(el?: any, values?: any, returnElement?: boolean): any,
		insertFirst(el?: any, values?: any, returnElement?: boolean): any,
		overwrite(el?: any, values?: any, returnElement?: boolean): any,
		set(html?: string, compile?: boolean): Ext.ITemplate
	}

	declare export interface IQuickTip {
		interceptTitles?: boolean,
		target?: any,
		title?: string,
		cancelShow(el?: any): void,
		register(config?: any): void,
		unregister(el?: any): void
	}

	declare export interface IQuickTips {
		
	}

	declare export interface ITip {
		autoRender?: any,
		baseCls?: string,
		closable?: boolean,
		closeAction?: string,
		constrainPosition?: boolean,
		defaultAlign?: string,
		floating?: boolean,
		focusOnToFront?: boolean,
		frameHeader?: boolean,
		hidden?: boolean,
		maxWidth?: number,
		minWidth?: number,
		shadow?: any,
		width?: number
	}

	declare export interface IToolTip {
		anchor?: string,
		anchorOffset?: number,
		anchorToTarget?: boolean,
		autoHide?: boolean,
		delegate?: string,
		dismissDelay?: number,
		hideDelay?: number,
		mouseOffset?: number[],
		showDelay?: number,
		target?: any,
		trackMouse?: boolean,
		triggerElement?: HTMLElement,
		setTarget(t?: any): void
	}

	declare export interface IPagingToolbar {
		afterPageText?: string,
		beforePageText?: string,
		displayInfo?: boolean,
		displayMsg?: string,
		emptyMsg?: string,
		firstText?: string,
		inputItemWidth?: number,
		lastText?: string,
		nextText?: string,
		prependButtons?: boolean,
		prevText?: string,
		refreshText?: string,
		store?: Ext.data.IStore,
		bind(store?: Ext.data.IStore): void,
		bindStore(store?: any): void,
		bindStoreListeners(store?: Ext.data.IAbstractStore): void,
		doRefresh(): void,
		getStore(): Ext.data.IAbstractStore,
		getStoreListeners(): any,
		moveFirst(): void,
		moveLast(): void,
		moveNext(): void,
		movePrevious(): void,
		onBindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		onUnbindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		unbind(store?: Ext.data.IStore): void,
		unbindStoreListeners(store?: Ext.data.IAbstractStore): void
	}

	declare export interface IToolbar {
		baseCls?: string,
		defaultButtonUI?: string,
		defaultType?: string,
		enableOverflow?: boolean,
		layout?: any,
		menuTriggerCls?: string,
		vertical?: boolean,
		isToolbar?: boolean,
		add(args?: any): any,
		getRefItems(deep?: any): void,
		insert(index?: number, component?: any): Ext.IComponent
	}

	declare export interface ITreePanel {
		animate?: boolean,
		deferRowRender?: boolean,
		displayField?: string,
		folderSort?: boolean,
		hideHeaders?: boolean,
		lines?: boolean,
		root?: any,
		rootVisible?: boolean,
		rowLines?: boolean,
		selType?: string,
		singleExpand?: boolean,
		store?: Ext.data.ITreeStore,
		useArrows?: boolean,
		viewType?: string,
		collapseAll(callback?: any, scope?: any): void,
		collapseNode(record?: Ext.data.IModel, deep?: boolean, callback?: any, scope?: any): void,
		expandAll(callback?: any, scope?: any): void,
		expandNode(record?: Ext.data.IModel, deep?: boolean, callback?: any, scope?: any): void,
		expandPath(
		path?: string, field?: string, separator?: string, callback?: any, scope?: any
	): void,
		getChecked(): Ext.data.INodeInterface[],
		getRootNode(): Ext.data.INodeInterface,
		selectPath(
		path?: string, field?: string, separator?: string, callback?: any, scope?: any
	): void,
		setRootNode(root?: any): Ext.data.INodeInterface
	}

	declare export interface IHistory {
		
	}

	declare export interface IKeyMap {
		binding?: any,
		eventName?: string,
		ignoreInputFields?: boolean,
		processEvent?: any,
		processEventScope?: any,
		target?: any,
		addBinding(binding?: any): void,
		destroy(removeTarget?: boolean): void,
		disable(): void,
		enable(): void,
		isEnabled(): boolean,
		on(key?: any, fn?: any, scope?: any): void,
		removeBinding(binding?: any): void,
		setDisabled(disabled?: boolean): void,
		un(key?: any, fn?: any, scope?: any): void
	}

	declare export interface IKeyNav {
		defaultEventAction?: string,
		disabled?: boolean,
		eventName?: string,
		forceKeyDown?: boolean,
		ignoreInputFields?: boolean,
		keyMap?: Ext.util.IKeyMap,
		processEvent?: any,
		processEventScope?: any,
		target?: any,
		destroy(removeEl?: boolean): void,
		disable(): void,
		enable(): void,
		setDisabled(disabled?: boolean): void
	}

	declare export interface ITaskManager {
		
	}

	declare export interface IVersion {
		equals(target?: any): boolean,
		getBuild(): number,
		getMajor(): number,
		getMinor(): number,
		getPatch(): number,
		getRelease(): number,
		getShortVersion(): string,
		gt(target?: any): boolean,
		gtEq(target?: any): boolean,
		isGreaterThan(target?: any): boolean,
		isGreaterThanOrEqual(target?: any): boolean,
		isLessThan(target?: any): boolean,
		isLessThanOrEqual(target?: any): boolean,
		lt(target?: any): boolean,
		ltEq(target?: any): boolean,
		match(target?: any): boolean,
		toArray(): number[]
	}

	declare export interface IBoundList {
		baseCls?: string,
		componentLayout?: any,
		deferInitialRefresh?: boolean,
		displayField?: string,
		itemCls?: string,
		pageSize?: number,
		renderTpl?: any,
		shadow?: any,
		tpl?: any,
		trackOver?: boolean,
		pagingToolbar?: Ext.toolbar.IPaging,
		bindStore(store?: any, initial?: any): void,
		child(selector?: any): any,
		down(selector?: any): any,
		getInnerTpl(displayField?: string): string,
		onDestroy(): void,
		query(selector?: string): Ext.IComponent[],
		queryBy(fn?: any, scope?: any): Ext.IComponent[],
		queryById(id?: string): Ext.IComponent,
		refresh(): void
	}

	declare export interface IDataView {
		mouseOverOutBuffer?: number,
		clearHighlight(): void,
		focusNode(rec?: Ext.data.IModel): void,
		highlightItem(item?: HTMLElement): void,
		initComponent(): void,
		refresh(): void
	}

	declare export interface IWindow {
		animateTarget?: any,
		autoRender?: boolean,
		baseCls?: string,
		closable?: boolean,
		collapsed?: boolean,
		collapsible?: boolean,
		constrain?: boolean,
		constrainHeader?: boolean,
		defaultFocus?: any,
		draggable?: boolean,
		expandOnShow?: boolean,
		ghost?: any,
		hidden?: boolean,
		hideMode?: string,
		hideShadowOnDeactivate?: boolean,
		maximizable?: boolean,
		maximized?: boolean,
		minHeight?: number,
		minWidth?: number,
		minimizable?: boolean,
		modal?: boolean,
		onEsc?: any,
		overlapHeader?: boolean,
		plain?: boolean,
		resizable?: any,
		x?: number,
		y?: number,
		dd?: Ext.util.IComponentDragger,
		isWindow?: boolean,
		afterCollapse(): void,
		afterExpand(): void,
		applyState(state?: any): void,
		getDefaultFocus(): void,
		maximize(animate?: boolean): Ext.window.IWindow,
		minimize(): Ext.window.IWindow,
		onShow(): void,
		restore(animate?: any): Ext.window.IWindow,
		toggleMaximize(): Ext.window.IWindow
	}

	declare export interface IWindowManager {
		
	}

	declare export interface IXTemplate {
		definitions?: any,
		applyOut(values?: any, out?: any, parent?: any): any[]
	}

	declare export interface IXTemplateCompiler {
		doCase(action?: any): void,
		doDefault(): void,
		doElse(): void,
		doElseIf(action?: any, actions?: any): void,
		doEnd(type?: any, actions?: any): void,
		doEval(text?: any): void,
		doExec(action?: any, actions?: any): void,
		doExpr(expr?: any): void,
		doFor(action?: any, actions?: any): void,
		doForEach(action?: any, actions?: any): void,
		doIf(action?: any, actions?: any): void,
		doSwitch(action?: any): void,
		doTag(tag?: any): void,
		doText(text?: any): void
	}

	declare export interface IXTemplateParser {
		level?: number,
		doCase(action?: string, actions?: any): void,
		doDefault(): void,
		doElse(): void,
		doElseIf(action?: string, actions?: any): void,
		doEnd(type?: string, actions?: any): void,
		doEval(text?: string): void,
		doExec(action?: string, actions?: any): void,
		doExpr(expr?: string): void,
		doFor(action?: string, actions?: any): void,
		doForEach(action?: string, actions?: any): void,
		doIf(action?: string, actions?: any): void,
		doSwitch(action?: string, actions?: any): void,
		doTag(): void,
		doText(text?: string): void,
		doTpl(): void
	}

	declare export interface IZIndexManager {
		bringToFront(comp?: any): boolean,
		each(fn?: any, scope?: any): void,
		eachBottomUp(fn?: any, scope?: any): void,
		eachTopDown(fn?: any, scope?: any): void,
		get(id?: any): Ext.IComponent,
		getActive(): Ext.IComponent,
		getBy(fn?: any, scope?: any): any[],
		hideAll(): void,
		register(comp?: Ext.IComponent): void,
		sendToBack(comp?: any): Ext.IComponent,
		unregister(comp?: Ext.IComponent): void
	}

	declare export interface IWindowGroup {
		bringToFront(comp?: any): boolean,
		each(fn?: any, scope?: any): void,
		eachBottomUp(fn?: any, scope?: any): void,
		eachTopDown(fn?: any, scope?: any): void,
		get(id?: any): Ext.IComponent,
		getActive(): Ext.IComponent,
		getBy(fn?: any, scope?: any): any[],
		hideAll(): void,
		register(comp?: Ext.IComponent): void,
		sendToBack(comp?: any): Ext.IComponent,
		unregister(comp?: Ext.IComponent): void
	}

	declare export function addBehaviors(obj?: any): void

	declare export function addNamespaces(namespace?: any): void

	declare export function application(config?: any): void

	declare export function apply(object?: any, config?: any, defaults?: any): any

	declare export function applyIf(object?: any, config?: any): any

	declare export function batchLayouts(fn?: any, scope?: any): void

	declare export function bind(fn?: any, scope?: any, args?: any[], appendArgs?: any): any

	declare export function callback(callback?: any, scope?: any, args?: any[], delay?: number): any

	declare export function clean(array?: any[]): any[]

	declare export function clone(item?: any): any

	declare export function coerce(from?: any, to?: any): any

	declare export function copyTo(dest?: any, source?: any, names?: any, usePrototypeKeys?: boolean): any

	declare export function create(name: string, ...args: any[]): any

	declare export function createByAlias(alias: string, ...args: any[]): any

	declare export function createWidget(): void

	declare export function decode(json?: string, safe?: boolean): any

	declare export function defer(fn?: any, millis?: number, scope?: any, args?: any[], appendArgs?: any): number

	declare export function define(className?: string, data?: any, createdFn?: any): Ext.IBase

	declare export function deprecate(packageName?: string, since?: string, closure?: any, scope?: any): void

	declare export function destroy(args?: any): void

	declare export function destroyMembers(o: any, ...args: any[]): void

	declare export function each(iterable?: any, fn?: any, scope?: any, reverse?: boolean): boolean

	declare export function encode(o?: any): string

	declare export function escapeRe(str?: string): string

	declare export function exclude(excludes?: any[]): any

	declare export function extend(superclass?: any, overrides?: any): any

	declare export function flatten(array?: any[]): any[]

	declare export function fly(dom?: any, named?: string): Ext.dom.element.IFly

	declare export function get(el?: any): Ext.dom.IElement

	declare export function getBody(): Ext.IElement

	declare export function getClass(object?: any): Ext.IClass

	declare export function getClassName(object?: any): string

	declare export function getCmp(id?: string): any

	declare export function getDoc(): Ext.IElement

	declare export function getDom(el?: any): any

	declare export function getHead(): Ext.IElement

	declare export function getNamespace(className?: string): string

	declare export function getOrientation(): string

	declare export function getScrollBarWidth(force?: boolean): number

	declare export function getScrollbarSize(force?: boolean): any

	declare export function getStore(store?: any): Ext.data.IStore

	declare export function getVersion(packageName?: string): Ext.IVersion

	declare export function htmlDecode(value?: string): string

	declare export function htmlEncode(value?: string): string

	declare export function id(el?: any, prefix?: string): string

	declare export function identityFn(o?: any): void

	declare export function invoke(arr: any, methodName: string, ...args: any[]): any[]

	declare export function isArray(target?: any): boolean

	declare export function isBoolean(value?: any): boolean

	declare export function isDate(object?: any): boolean

	declare export function isDefined(value?: any): boolean

	declare export function isElement(value?: any): boolean

	declare export function isEmpty(value?: any, allowEmptyString?: boolean): boolean

	declare export function isFunction(value?: any): boolean

	declare export function isIterable(value?: any): boolean

	declare export function isNumber(value?: any): boolean

	declare export function isNumeric(value?: any): boolean

	declare export function isObject(value?: any): boolean

	declare export function isPrimitive(value?: any): boolean

	declare export function isString(value?: any): boolean

	declare export function isTextNode(value?: any): boolean

	declare export function iterate(object?: any, fn?: any, scope?: any): void

	declare export function log(options: any, ...message: any[]): void

	declare export function max(array?: any, comparisonFn?: any): any

	declare export function mean(array?: any[]): number

	declare export function merge(destination: any, ...object: any[]): any

	declare export function min(array?: any, comparisonFn?: any): any

	declare export function namespace(...namespaces: any[]): any

	declare export function ns(...namespaces: any[]): any

	declare export function num(value?: any, defaultValue?: number): number

	declare export function on(eventName?: any, fn?: any, scope?: any, options?: any): any

	declare export function onDocumentReady(fn?: any, scope?: any, options?: any): void

	declare export function onReady(fn?: any, scope?: any, options?: any): void

	declare export function override(target?: any, overrides?: any): void

	declare export function partition(arr?: any, truth?: any): any[]

	declare export function pass(fn?: any, args?: any[], scope?: any): any

	declare export function pluck(array?: any, propertyName?: string): any[]

	declare export function preg(ptype?: string, cls?: any): void

	declare export function query(
		path?: string, root?: HTMLElement, type?: string, single?: boolean
	): HTMLElement[]

	declare export function regModel(name?: string, config?: any): Ext.data.IModel

	declare export function regStore(id?: string, config?: any): void

	declare export function removeNode(node?: HTMLElement): void

	declare export function require(expressions?: any, fn?: any, scope?: any, excludes?: any): void

	declare export function resumeLayouts(flush?: any): void

	declare export function select(selector?: string, unique?: boolean): Ext.ICompositeElement

	declare export function setGlyphFontFamily(fontFamily?: string): void

	declare export function setVersion(packageName?: string, version?: any): any

	declare export function sum(array?: any[]): number

	declare export function suspendLayouts(): void

	declare export function syncRequire(expressions?: any, fn?: any, scope?: any, excludes?: any): void

	declare export function toArray(iterable?: any, start?: number, end?: number): any[]

	declare export function toSentence(items?: string[], connector?: string): string

	declare export function type(value?: any): string

	declare export function typeOf(value?: any): string

	declare export function un(eventName?: string, fn?: any, scope?: any): void

	declare export function unique(array?: any[]): any[]

	declare export function urlAppend(url?: string, string?: string): string

	declare export function urlDecode(queryString?: string, recursive?: boolean): any

	declare export function urlEncode(object?: any, recursive?: boolean): string

	declare export function value(value?: any, defaultValue?: any, allowBlank?: boolean): any

	declare export function valueFrom(value?: any, defaultValue?: any, allowBlank?: boolean): any

	declare export function widget(name?: string, config?: any): any

	declare export function zip(arr?: any, zipper?: any): any[]

	declare export class AbstractComponent  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		cancelLayout(comp?: Ext.IComponent): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		flushLayouts(): void;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase;
		resumeLayouts(flush?: boolean): void;
		suspendLayouts(): void;
		updateLayout(comp?: Ext.IComponent, defer?: boolean): void
	}

	declare export class Ajax  {
		autoAbort: boolean;
		defaultHeaders: any;
		disableCaching: boolean;
		extraParams: any;
		hasListeners: any;
		isObservable: boolean;
		method: string;
		self: Ext.IClass;
		timeout: number;
		url: string;
		abort(request?: any): void;
		abortAll(): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		clearManagedListeners(): void;
		enableBubble(eventNames?: any): void;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		getInitialConfig(name?: string): any;
		hasListener(eventName?: string): boolean;
		initConfig(config?: any): Ext.IBase;
		isLoading(request?: any): boolean;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		parseStatus(status?: number): any;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		request(options?: any): any;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		setOptions(options?: any, scope?: any): any;
		statics(): Ext.IClass;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void;
		upload(form?: any, url?: string, params?: string, options?: any): void
	}

	declare export class Array  {
		clean(array?: any[]): any[];
		clone(array?: any[]): any[];
		contains(array?: any[], item?: any): boolean;
		difference(arrayA?: any[], arrayB?: any[]): any[];
		each(iterable?: any, fn?: any, scope?: any, reverse?: boolean): boolean;
		equals(array1?: any[], array2?: any[]): boolean;
		erase(array?: any[], index?: number, removeCount?: number): any[];
		every(array?: any[], fn?: any, scope?: any): boolean;
		filter(array?: any[], fn?: any, scope?: any): any[];
		findBy(array?: any[], fn?: any, scope?: any): any;
		flatten(array?: any[]): any[];
		forEach(array?: any[], fn?: any, scope?: any): void;
		from(value?: any, newReference?: boolean): any[];
		include(array?: any[], item?: any): void;
		indexOf(array?: any[], item?: any, from?: number): number;
		insert(array?: any[], index?: number, items?: any[]): any[];
		intersect(array1?: any[], array2?: any[], etc?: any[]): any[];
		map(array?: any[], fn?: any, scope?: any): any[];
		max(array?: any, comparisonFn?: any): any;
		mean(array?: any[]): number;
		merge(array1?: any[], array2?: any[], etc?: any[]): any[];
		min(array?: any, comparisonFn?: any): any;
		pluck(array?: any, propertyName?: string): any[];
		push(target: any[], ...elements: any[]): any[];
		remove(array?: any[], item?: any): any[];
		replace(array?: any[], index?: number, removeCount?: number, insert?: any[]): any[];
		slice(array?: any[], begin?: number, end?: number): any[];
		some(array?: any[], fn?: any, scope?: any): boolean;
		sort(array?: any[], sortFn?: any): any[];
		splice(array: any[], index: number, removeCount: number, ...elements: any[]): any[];
		sum(array?: any[]): number;
		toArray(iterable?: any, start?: number, end?: number): any[];
		toMap(array?: any[], getKey?: any, scope?: any): any;
		toValueMap(array?: any[], getKey?: any, scope?: any): any;
		union(array1?: any[], array2?: any[], etc?: any[]): any[];
		unique(array?: any[]): any[]
	}

	declare export class Base  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase
	}

	declare export class ButtonToggleManager  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	declare export class ClassManager  {
		addNameAliasMappings(aliases?: any): Ext.IClassManager;
		addNameAlternateMappings(alternates?: any): Ext.IClassManager;
		create(className?: any, data?: any, createdFn?: any): void;
		get(name?: string): Ext.IClass;
		getAliasesByName(name?: string): any[];
		getByAlias(alias?: string): Ext.IClass;
		getClass(object?: any): Ext.IClass;
		getDisplayName(object?: any): string;
		getName(object?: any): string;
		getNameByAlias(alias?: string): string;
		getNameByAlternate(alternate?: string): string;
		getNamesByExpression(expression?: string): string[];
		instantiateByAlias(alias: string, ...args: any[]): any;
		isCreated(className?: string): boolean;
		set(name?: string, value?: any): Ext.IClassManager;
		setAlias(cls?: any, alias?: string): Ext.IClassManager;
		setNamespace(name?: string, value?: any): void
	}

	declare export class ComponentManager  {
		all: Ext.util.IHashMap;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(config?: any, defaultType?: string): Ext.IComponent;
		each(fn?: any, scope?: any): void;
		get(id?: string): any;
		getCount(): number;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		isRegistered(type?: string): boolean;
		onAvailable(id?: string, fn?: any, scope?: any): void;
		register(item?: any): void;
		registerType(type?: any, cls?: any): void;
		statics(): Ext.IClass;
		unregister(item?: any): void
	}

	declare export class ComponentMgr  {
		all: Ext.util.IHashMap;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(config?: any, defaultType?: string): Ext.IComponent;
		each(fn?: any, scope?: any): void;
		get(id?: string): any;
		getCount(): number;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		isRegistered(type?: string): boolean;
		onAvailable(id?: string, fn?: any, scope?: any): void;
		register(item?: any): void;
		registerType(type?: any, cls?: any): void;
		statics(): Ext.IClass;
		unregister(item?: any): void
	}

	declare export class ComponentQuery  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		is(component?: Ext.IComponent, selector?: string): boolean;
		query(selector?: string, root?: Ext.container.IContainer): Ext.IComponent[];
		statics(): Ext.IClass
	}

	declare export class StoreMgr  {
		hasListeners: any;
		isMixedCollection: boolean;
		isObservable: boolean;
		isSortable: boolean;
		self: Ext.IClass;
		sorters: Ext.util.IMixedCollection;
		add(key?: any, obj?: any): any;
		addAll(objs?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(): void;
		clearListeners(): void;
		clearManagedListeners(): void;
		clone(): Ext.util.IMixedCollection;
		collect(property?: string, root?: string, allowBlank?: boolean): any[];
		contains(o?: any): boolean;
		containsKey(key?: string): boolean;
		each(fn?: any, scope?: any): void;
		eachKey(fn?: any, scope?: any): void;
		enableBubble(eventNames?: any): void;
		filter(
		property?: any, value?: any, anyMatch?: boolean, caseSensitive?: boolean
	): Ext.util.IMixedCollection;
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection;
		find(): void;
		findBy(fn?: any, scope?: any): any;
		findIndex(
		property?: string, value?: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean
	): number;
		findIndexBy(fn?: any, scope?: any, start?: number): number;
		findInsertionIndex(newItem?: any, sorterFn?: any): number;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		first(): any;
		generateComparator(): void;
		get(key?: any): any;
		getAt(index?: number): any;
		getByKey(key?: any): any;
		getCount(): number;
		getFirstSorter(): Ext.util.ISorter;
		getInitialConfig(name?: string): any;
		getKey(o?: any): any;
		getRange(startIndex?: number, endIndex?: number): any[];
		hasListener(eventName?: string): boolean;
		indexOf(o?: any): number;
		indexOfKey(key?: string): number;
		initConfig(config?: any): Ext.IBase;
		initSortable(): void;
		insert(index?: number, key?: any, o?: any): any;
		last(): any;
		lookup(store?: any): Ext.data.IStore;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		register(stores: Ext.data.IStore): void;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		remove(o?: any): any;
		removeAll(items?: any[]): Ext.util.IMixedCollection;
		removeAt(index?: number): any;
		removeAtKey(key?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeRange(index?: number, removeCount?: number): any;
		reorder(mapping?: any): void;
		replace(key?: string, o?: any): any;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		sort(sorters?: any, direction?: string): Ext.util.ISorter[];
		sortBy(sorterFn?: any): void;
		sortByKey(direction?: string, fn?: any): void;
		statics(): Ext.IClass;
		sum(property?: string, root?: string, start?: number, end?: number): number;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void;
		unregister(stores?: any): void;
		updateKey(oldKey?: any, newKey?: any): void
	}

	declare export class StoreManager  {
		hasListeners: any;
		isMixedCollection: boolean;
		isObservable: boolean;
		isSortable: boolean;
		self: Ext.IClass;
		sorters: Ext.util.IMixedCollection;
		add(key?: any, obj?: any): any;
		addAll(objs?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(): void;
		clearListeners(): void;
		clearManagedListeners(): void;
		clone(): Ext.util.IMixedCollection;
		collect(property?: string, root?: string, allowBlank?: boolean): any[];
		contains(o?: any): boolean;
		containsKey(key?: string): boolean;
		each(fn?: any, scope?: any): void;
		eachKey(fn?: any, scope?: any): void;
		enableBubble(eventNames?: any): void;
		filter(
		property?: any, value?: any, anyMatch?: boolean, caseSensitive?: boolean
	): Ext.util.IMixedCollection;
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection;
		find(): void;
		findBy(fn?: any, scope?: any): any;
		findIndex(
		property?: string, value?: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean
	): number;
		findIndexBy(fn?: any, scope?: any, start?: number): number;
		findInsertionIndex(newItem?: any, sorterFn?: any): number;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		first(): any;
		generateComparator(): void;
		get(key?: any): any;
		getAt(index?: number): any;
		getByKey(key?: any): any;
		getCount(): number;
		getFirstSorter(): Ext.util.ISorter;
		getInitialConfig(name?: string): any;
		getKey(o?: any): any;
		getRange(startIndex?: number, endIndex?: number): any[];
		hasListener(eventName?: string): boolean;
		indexOf(o?: any): number;
		indexOfKey(key?: string): number;
		initConfig(config?: any): Ext.IBase;
		initSortable(): void;
		insert(index?: number, key?: any, o?: any): any;
		last(): any;
		lookup(store?: any): Ext.data.IStore;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		register(stores: Ext.data.IStore): void;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		remove(o?: any): any;
		removeAll(items?: any[]): Ext.util.IMixedCollection;
		removeAt(index?: number): any;
		removeAtKey(key?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeRange(index?: number, removeCount?: number): any;
		reorder(mapping?: any): void;
		replace(key?: string, o?: any): any;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		sort(sorters?: any, direction?: string): Ext.util.ISorter[];
		sortBy(sorterFn?: any): void;
		sortByKey(direction?: string, fn?: any): void;
		statics(): Ext.IClass;
		sum(property?: string, root?: string, start?: number, end?: number): number;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void;
		unregister(stores?: any): void;
		updateKey(oldKey?: any, newKey?: any): void
	}

	declare export class Date  {
		DAY: string;
		HOUR: string;
		MILLI: string;
		MINUTE: string;
		MONTH: string;
		SECOND: string;
		YEAR: string;
		dayNames: string[];
		defaultFormat: string;
		defaults: any;
		formatCodes: any;
		formatFunctions: any;
		monthNames: string[];
		monthNumbers: any;
		parseFunctions: any;
		useStrict: boolean;
		add(date?: any, interval?: string, value?: number): any;
		between(date?: any, start?: any, end?: any): boolean;
		clearTime(date?: any, clone?: boolean): any;
		clone(date?: any): any;
		format(date?: any, format?: string): string;
		formatContainsDateInfo(format?: string): boolean;
		formatContainsHourInfo(format?: string): boolean;
		getDayOfYear(date?: any): number;
		getDaysInMonth(date?: any): number;
		getElapsed(dateA?: any, dateB?: any): number;
		getFirstDateOfMonth(date?: any): any;
		getFirstDayOfMonth(date?: any): number;
		getGMTOffset(date?: any, colon?: boolean): string;
		getLastDateOfMonth(date?: any): any;
		getLastDayOfMonth(date?: any): number;
		getMonthNumber(name?: string): number;
		getShortDayName(day?: number): string;
		getShortMonthName(month?: number): string;
		getSuffix(date?: any): string;
		getTimezone(date?: any): string;
		getWeekOfYear(date?: any): number;
		isDST(date?: any): boolean;
		isEqual(date1?: any, date2?: any): boolean;
		isLeapYear(date?: any): boolean;
		isValid(
		year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number
	): boolean;
		now(): number;
		parse(input?: string, format?: string, strict?: boolean): any;
		subtract(date?: any, interval?: string, value?: number): any;
		unescapeFormat(format?: string): string
	}

	declare export class Direct  {
		exceptions: any;
		hasListeners: any;
		isObservable: boolean;
		self: Ext.IClass;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		addProvider(provider?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		clearManagedListeners(): void;
		enableBubble(eventNames?: any): void;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		getInitialConfig(name?: string): any;
		getProvider(id?: any): void;
		hasListener(eventName?: string): boolean;
		initConfig(config?: any): Ext.IBase;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		parseMethod(fn?: any): any;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeProvider(provider?: any): Ext.direct.IProvider;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		statics(): Ext.IClass;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export class Element  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		fromPoint(x?: number, y?: number): string;
		get(el?: any): Ext.dom.IElement;
		getDocumentHeight(): number;
		getDocumentWidth(): number;
		getName(): string;
		getOrientation(): string;
		getViewSize(): any;
		getViewportHeight(): number;
		getViewportWidth(): number;
		implement(): void;
		mergeClsList(clsList1?: any, clsList2?: any): any[];
		normalize(prop?: string): string;
		override(members?: any): Ext.IBase;
		parseBox(box?: any): any;
		parseStyles(styles?: string): any;
		removeCls(existingClsList?: any, removeClsList?: any): any[];
		select(selector?: any, unique?: boolean, root?: any): any;
		unitizeBox(box?: any, units?: string): string
	}

	declare export class DomQuery  {
		matchers: any;
		operators: any;
		pseudos: any;
		compile(selector?: string, type?: string): any;
		filter(el?: HTMLElement[], selector?: string, nonMatches?: boolean): HTMLElement[];
		is(el?: any, selector?: string): boolean;
		jsSelect(selector?: string, root?: any): HTMLElement[];
		select(
		path?: string, root?: HTMLElement, type?: string, single?: boolean
	): HTMLElement[];
		selectNode(selector?: string, root?: HTMLElement): HTMLElement;
		selectNumber(selector?: string, root?: HTMLElement, defaultValue?: number): number;
		selectValue(selector?: string, root?: HTMLElement, defaultValue?: string): string
	}

	declare export class DomHelper  {
		self: Ext.IClass;
		useDom: boolean;
		append(el?: any, o?: any, returnElement?: boolean): any;
		applyStyles(el?: any, styles?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		createDom(o?: any): HTMLElement;
		createHtml(spec?: any): string;
		createTemplate(o?: any): Ext.ITemplate;
		generateStyles(styles?: any, buffer?: string[]): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		insertAfter(el?: any, o?: any, returnElement?: boolean): any;
		insertBefore(el?: any, o?: any, returnElement?: boolean): any;
		insertFirst(el?: any, o?: any, returnElement?: boolean): any;
		insertHtml(where?: string, el?: any, html?: string): HTMLElement;
		markup(spec?: any): string;
		overwrite(el?: any, o?: any, returnElement?: boolean): any;
		statics(): Ext.IClass
	}

	declare export class Error  {
		handle(err?: Ext.IError): void;
		raise(err?: any): void
	}

	declare export class EventManager  {
		idleEvent: any;
		addListener(el?: any, eventName?: string, handler?: any, scope?: any, options?: any): void;
		getId(element?: any): string;
		getKeyEvent(): string;
		getPageX(event?: any): number;
		getPageXY(event?: any): number[];
		getPageY(event?: any): number;
		getRelatedTarget(event?: any): HTMLElement;
		getTarget(event?: any): HTMLElement;
		on(el?: any, eventName?: string, handler?: any, scope?: any, options?: any): void;
		onDocumentReady(fn?: any, scope?: any, options?: any): void;
		onWindowResize(fn?: any, scope?: any, options?: boolean): void;
		onWindowUnload(fn?: any, scope?: any, options?: boolean): void;
		pollScroll(): void;
		preventDefault(event?: Event): void;
		purgeElement(el?: any, eventName?: string): void;
		removeAll(el?: any): void;
		removeListener(el?: any, eventName?: string, fn?: any, scope?: any): void;
		removeResizeListener(fn?: any, scope?: any): void;
		removeUnloadListener(fn?: any, scope?: any): void;
		stopEvent(event?: Event): void;
		stopPropagation(event?: Event): void;
		un(el?: any, eventName?: string, fn?: any, scope?: any): void
	}

	declare export class EventObject  {
		A: number;
		ALT: number;
		B: number;
		BACKSPACE: number;
		C: number;
		CAPS_LOCK: number;
		CONTEXT_MENU: number;
		CTRL: number;
		D: number;
		DELETE: number;
		DOWN: number;
		E: number;
		EIGHT: number;
		END: number;
		ENTER: number;
		ESC: number;
		F: number;
		F1: number;
		F10: number;
		F11: number;
		F12: number;
		F2: number;
		F3: number;
		F4: number;
		F5: number;
		F6: number;
		F7: number;
		F8: number;
		F9: number;
		FIVE: number;
		FOUR: number;
		G: number;
		H: number;
		HOME: number;
		I: number;
		INSERT: number;
		J: number;
		K: number;
		L: number;
		LEFT: number;
		M: number;
		N: number;
		NINE: number;
		NUM_CENTER: number;
		NUM_DIVISION: number;
		NUM_EIGHT: number;
		NUM_FIVE: number;
		NUM_FOUR: number;
		NUM_MINUS: number;
		NUM_MULTIPLY: number;
		NUM_NINE: number;
		NUM_ONE: number;
		NUM_PERIOD: number;
		NUM_PLUS: number;
		NUM_SEVEN: number;
		NUM_SIX: number;
		NUM_THREE: number;
		NUM_TWO: number;
		NUM_ZERO: number;
		O: number;
		ONE: number;
		P: number;
		PAGE_DOWN: number;
		PAGE_UP: number;
		PAUSE: number;
		PRINT_SCREEN: number;
		Q: number;
		R: number;
		RETURN: number;
		RIGHT: number;
		S: number;
		SEVEN: number;
		SHIFT: number;
		SIX: number;
		SPACE: number;
		T: number;
		TAB: number;
		THREE: number;
		TWO: number;
		U: number;
		UP: number;
		V: number;
		W: number;
		WHEEL_SCALE: number;
		X: number;
		Y: number;
		Z: number;
		ZERO: number;
		altKey: boolean;
		ctrlKey: boolean;
		shiftKey: boolean;
		correctWheelDelta(delta?: number): void;
		getCharCode(): number;
		getKey(): number;
		getPageX(): number;
		getPageY(): number;
		getPoint(): Ext.util.IPoint;
		getRelatedTarget(selector?: string, maxDepth?: any, returnEl?: boolean): HTMLElement;
		getTarget(selector?: string, maxDepth?: any, returnEl?: boolean): HTMLElement;
		getWheelDelta(): number;
		getWheelDeltas(): any;
		getX(): number;
		getXY(): number[];
		getY(): number;
		hasModifier(): boolean;
		injectEvent(target?: any): void;
		isNavKeyPress(): boolean;
		isSpecialKey(): boolean;
		preventDefault(): void;
		stopEvent(): void;
		stopPropagation(): void;
		within(el?: any, related?: boolean, allowEl?: boolean): boolean
	}

	declare export class FocusManager  {
		enabled: boolean;
		focusedCmp: Ext.IComponent;
		hasListeners: any;
		isObservable: boolean;
		self: Ext.IClass;
		whitelist: string[];
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		addXTypeToWhitelist(xtype?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		clearManagedListeners(): void;
		disable(): void;
		enable(options?: any): void;
		enableBubble(eventNames?: any): void;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		getInitialConfig(name?: string): any;
		hasListener(eventName?: string): boolean;
		initConfig(config?: any): Ext.IBase;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeXTypeFromWhitelist(xtype?: any): void;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		statics(): Ext.IClass;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export class FocusMgr  {
		enabled: boolean;
		focusedCmp: Ext.IComponent;
		hasListeners: any;
		isObservable: boolean;
		self: Ext.IClass;
		whitelist: string[];
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		addXTypeToWhitelist(xtype?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		clearManagedListeners(): void;
		disable(): void;
		enable(options?: any): void;
		enableBubble(eventNames?: any): void;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		getInitialConfig(name?: string): any;
		hasListener(eventName?: string): boolean;
		initConfig(config?: any): Ext.IBase;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeXTypeFromWhitelist(xtype?: any): void;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		statics(): Ext.IClass;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export class Function  {
		alias(object?: any, methodName?: string): any;
		bind(fn?: any, scope?: any, args?: any[], appendArgs?: any): any;
		clone(method?: any): any;
		createBuffered(fn?: any, buffer?: number, scope?: any, args?: any[]): any;
		createDelayed(fn?: any, delay?: number, scope?: any, args?: any[], appendArgs?: any): any;
		createInterceptor(origFn?: any, newFn?: any, scope?: any, returnValue?: any): any;
		createSequence(originalFn?: any, newFn?: any, scope?: any): any;
		createThrottled(fn?: any, interval?: number, scope?: any): any;
		defer(fn?: any, millis?: number, scope?: any, args?: any[], appendArgs?: any): number;
		flexSetter(setter?: any): any;
		interceptAfter(object?: any, methodName?: string, fn?: any, scope?: any): any;
		interceptBefore(object?: any, methodName?: string, fn?: any, scope?: any): any;
		pass(fn?: any, args?: any[], scope?: any): any
	}

	declare export class Is  {
		Android: boolean;
		Blackberry: boolean;
		Desktop: boolean;
		Linux: boolean;
		Mac: boolean;
		Phone: boolean;
		Standalone: boolean;
		Tablet: any;
		Windows: boolean;
		iOS: boolean;
		iPad: boolean;
		iPhone: boolean;
		iPod: boolean
	}

	declare export class JSON  {
		decode(json?: string, safe?: boolean): any;
		encode(o?: any): string;
		encodeDate(d?: any): string;
		encodeString(s?: string): string;
		encodeValue(o?: any): string
	}

	declare export class Loader  {
		disableCaching: boolean;
		disableCachingParam: string;
		enabled: boolean;
		garbageCollect: boolean;
		paths: any;
		preserveScripts: boolean;
		scriptChainDelay: boolean;
		scriptCharset: string;
		history: any[];
		addClassPathMappings(paths?: Object): Ext.ILoader;
		exclude(excludes?: any[]): any;
		getConfig(name?: string): any;
		getPath(className?: string): string;
		loadScript(options?: any): void;
		onReady(fn?: any, scope?: any, withDomReady?: boolean): void;
		require(expressions?: any, fn?: any, scope?: any, excludes?: any): void;
		setConfig(config?: any): Ext.ILoader;
		setPath(name?: any, path?: string): Ext.ILoader;
		syncRequire(expressions?: any, fn?: any, scope?: any, excludes?: any): void
	}

	declare export class MessageBox  {
		CANCEL: number;
		ERROR: string;
		INFO: string;
		NO: number;
		OK: number;
		OKCANCEL: number;
		QUESTION: string;
		WARNING: string;
		YES: number;
		YESNO: number;
		YESNOCANCEL: number;
		_isLayoutRoot: boolean;
		body: Ext.dom.IElement;
		buttonText: any;
		contentPaddingProperty: string;
		dd: Ext.util.IComponentDragger;
		defaultTextHeight: number;
		draggable: boolean;
		floatParent: Ext.IContainer;
		frameSize: any;
		hasListeners: any;
		isComponent: boolean;
		isObservable: boolean;
		isPanel: boolean;
		isWindow: boolean;
		items: Ext.util.IAbstractMixedCollection;
		maskOnDisable: boolean;
		minProgressWidth: number;
		minPromptWidth: number;
		ownerCt: Ext.IContainer;
		rendered: boolean;
		scrollFlags: any;
		self: Ext.IClass;
		zIndexManager: Ext.IZIndexManager;
		zIndexParent: Ext.IContainer;
		add(component?: any): any;
		addBodyCls(cls?: string): Ext.panel.IPanel;
		addChildEls(): void;
		addClass(cls?: any): Ext.IComponent;
		addCls(cls?: any): Ext.IComponent;
		addClsWithUI(classes?: any, skip?: any): void;
		addDocked(component?: any, pos?: number): Ext.IComponent[];
		addEvents(eventNames?: any): void;
		addListener(element?: any, listeners?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		addPropertyToState(state?: any, propName?: string, value?: string): boolean;
		addStateEvents(events?: any): void;
		addTool(tools?: any): void;
		addUIClsToElement(cls?: any): void;
		afterCollapse(): void;
		afterComponentLayout(): void;
		afterExpand(): void;
		afterLayout(layout?: Ext.layout.container.IContainer): void;
		afterSetPosition(ax?: any, ay?: any): void;
		afterShow(animateTarget?: any, callback?: any, scope?: any): void;
		alert(title?: string, msg?: string, fn?: any, scope?: any): Ext.window.IMessageBox;
		alignTo(
		element?: any, position?: string, offsets?: number[], animate?: any
	): Ext.util.IPositionable;
		anchorTo(
		element?: any, position?: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: any
	): Ext.util.IPositionable;
		animate(animObj?: any): any;
		applyState(state?: any): void;
		beforeBlur(e?: Ext.IEventObject): void;
		beforeComponentLayout(adjWidth?: number, adjHeight?: number): void;
		beforeFocus(e?: Ext.IEventObject): void;
		beforeLayout(): void;
		beforeShow(): void;
		bubble(fn?: any, scope?: any, args?: any[]): Ext.IComponent;
		calculateConstrainedPosition(
		constrainTo?: any, proposedPosition?: number[], local?: boolean, proposedSize?: number[]
	): number[];
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		cancelFocus(): void;
		cascade(fn?: any, scope?: any, args?: any[]): Ext.IContainer;
		center(): Ext.IComponent;
		child(selector?: any): any;
		clearListeners(): void;
		clearManagedListeners(): void;
		cloneConfig(overrides?: any): Ext.IComponent;
		close(): void;
		collapse(direction?: string, animate?: boolean): Ext.panel.IPanel;
		confirm(title?: string, msg?: string, fn?: any, scope?: any): Ext.window.IMessageBox;
		contains(comp?: Ext.IComponent, deep?: boolean): boolean;
		convertCollapseDir(collapseDir?: any): void;
		disable(): Ext.container.IAbstractContainer;
		doAutoRender(): void;
		doComponentLayout(): Ext.container.IContainer;
		doConstrain(constrainTo?: any): void;
		doLayout(): Ext.container.IContainer;
		down(selector?: any): any;
		enableBubble(eventNames?: any): void;
		ensureAttachedToBody(runLayout?: boolean): void;
		expand(animate?: boolean): Ext.panel.IPanel;
		findParentBy(fn?: any): Ext.container.IContainer;
		findParentByType(xtype?: any): Ext.container.IContainer;
		findPlugin(ptype?: string): Ext.IAbstractPlugin;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		focus(selectText?: boolean, delay?: any, callback?: any, scope?: any): Ext.IComponent;
		forceComponentLayout(): void;
		getActiveAnimation(): any;
		getAlignToXY(element?: any, position?: string, offsets?: number[]): number[];
		getAnchorXY(anchor?: string, local?: boolean, size?: any): number[];
		getBox(contentBox?: boolean, local?: boolean): any;
		getBubbleTarget(): void;
		getChildByElement(el?: any, deep?: boolean): Ext.IComponent;
		getCollapsed(): any;
		getComponent(comp?: any): Ext.IComponent;
		getConstrainVector(constrainTo?: any, proposedPosition?: number[], proposedSize?: number[]): any;
		getDefaultFocus(): void;
		getDockedComponent(comp?: any): Ext.IComponent;
		getDockedItems(selector?: string, beforeBody?: boolean): Ext.IComponent[];
		getEl(): Ext.dom.IElement;
		getHeader(): void;
		getHeight(): number;
		getId(): string;
		getInitialConfig(name?: string): any;
		getInsertPosition(position?: any): HTMLElement;
		getItemId(): string;
		getLayout(): Ext.layout.container.IContainer;
		getLoader(): Ext.IComponentLoader;
		getLocalX(): number;
		getLocalXY(): number[];
		getLocalY(): number;
		getOffsetsTo(offsetsTo?: any): number[];
		getPlugin(pluginId?: string): Ext.IAbstractPlugin;
		getPosition(local?: boolean): number[];
		getRefItems(deep?: any): void;
		getRegion(): Ext.util.IRegion;
		getSize(): any;
		getSizeModel(ownerCtSizeModel?: any): any;
		getViewRegion(): Ext.util.IRegion;
		getWidth(): number;
		getX(): number;
		getXType(): string;
		getXTypes(): string;
		getXY(): number[];
		getY(): number;
		hasActiveFx(): any;
		hasCls(className?: string): boolean;
		hasListener(eventName?: string): boolean;
		hasUICls(cls?: string): void;
		hide(): Ext.IComponent;
		initConfig(config?: any): Ext.IBase;
		initEvents(): void;
		insert(index?: number, component?: any): Ext.IComponent;
		insertDocked(pos?: number, component?: any): void;
		is(selector?: string): boolean;
		isAncestor(possibleDescendant?: Ext.IComponent): void;
		isDescendantOf(container?: Ext.IContainer): boolean;
		isDisabled(): boolean;
		isDraggable(): boolean;
		isDroppable(): boolean;
		isFloating(): boolean;
		isHidden(): boolean;
		isLayoutRoot(): void;
		isLayoutSuspended(): boolean;
		isVisible(deep?: any): boolean;
		isXType(xtype?: string, shallow?: boolean): boolean;
		maximize(animate?: boolean): Ext.window.IWindow;
		minimize(): Ext.window.IWindow;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		move(fromIdx?: any, toIdx?: number): Ext.IComponent;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		nextNode(selector?: string): Ext.IComponent;
		nextSibling(selector?: string): Ext.IComponent;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		onAdd(component?: Ext.IComponent, position?: number): void;
		onAdded(): void;
		onBeforeAdd(item?: Ext.IComponent): void;
		onDestroy(): void;
		onDisable(): void;
		onDockedAdd(component?: Ext.IComponent): void;
		onDockedRemove(component?: Ext.IComponent): void;
		onEnable(): void;
		onHide(): void;
		onPosition(): void;
		onRemove(component?: Ext.IComponent, autoDestroy?: boolean): void;
		onRemoved(destroying?: any): void;
		onResize(): void;
		onShow(): void;
		onShowComplete(callback?: any, scope?: any): void;
		postBlur(e?: Ext.IEventObject): void;
		previousNode(selector?: string): Ext.IComponent;
		previousSibling(selector?: string): Ext.IComponent;
		progress(title?: string, msg?: string, progressText?: string): Ext.window.IMessageBox;
		prompt(
		title?: string, msg?: string, fn?: any, scope?: any, multiline?: any, value?: string
	): Ext.window.IMessageBox;
		query(selector?: string): Ext.IComponent[];
		queryBy(fn?: any, scope?: any): Ext.IComponent[];
		queryById(id?: string): Ext.IComponent;
		registerFloatingItem(cmp?: any): void;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		remove(component?: any, autoDestroy?: boolean): Ext.IComponent;
		removeAll(autoDestroy?: boolean): Ext.IComponent[];
		removeAnchor(): Ext.util.IPositionable;
		removeBodyCls(cls?: string): Ext.panel.IPanel;
		removeChildEls(testFn?: any): void;
		removeCls(cls?: any): Ext.IComponent;
		removeClsWithUI(cls?: any): void;
		removeDocked(item?: Ext.IComponent, autoDestroy?: boolean): void;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeUIClsFromElement(cls?: any): void;
		render(container?: any, position?: any): void;
		restore(animate?: any): Ext.window.IWindow;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		savePropToState(propName?: string, state?: any, stateName?: string): boolean;
		savePropsToState(propNames?: any, state?: any): any;
		saveState(): void;
		scrollBy(deltaX?: any, deltaY?: any, animate?: any): void;
		sequenceFx(): any;
		setActive(active?: boolean, newActive?: Ext.IComponent): void;
		setAutoScroll(scroll?: boolean): Ext.IComponent;
		setBodyStyle(style?: any, value?: string): Ext.panel.IPanel;
		setBorder(border?: any, targetEl?: any): void;
		setBorderRegion(region?: string): string;
		setBox(box?: any, animate?: any): Ext.util.IPositionable;
		setDisabled(disabled?: boolean): void;
		setDocked(dock?: any, layoutParent?: boolean): Ext.IComponent;
		setGlyph(newGlyph?: any): void;
		setHeight(height?: number): Ext.IComponent;
		setIcon(icon?: string, width?: number, height?: number): Ext.window.IMessageBox;
		setIconCls(newIconCls?: string): void;
		setLoading(load?: any, targetEl?: boolean): Ext.ILoadMask;
		setLocalX(x?: any): Ext.util.IPositionable;
		setLocalXY(x?: any, y?: any): Ext.util.IPositionable;
		setLocalY(y?: any): Ext.util.IPositionable;
		setMargin(margin?: any): void;
		setOverflowXY(overflowX?: string, overflowY?: string): Ext.IComponent;
		setPagePosition(x?: any, y?: number, animate?: any): Ext.IComponent;
		setPosition(x?: any, y?: number, animate?: any): Ext.IComponent;
		setRegion(region?: Ext.util.IRegion, animate?: any): Ext.util.IPositionable;
		setRegionWeight(weight?: number): number;
		setSize(width?: any, height?: any): Ext.IComponent;
		setTitle(newTitle?: string): void;
		setUI(ui?: any): void;
		setVisible(visible?: boolean): Ext.IComponent;
		setWidth(width?: number): Ext.IComponent;
		setX(x?: any, animate?: any): Ext.util.IPositionable;
		setXY(xy?: any, animate?: any): Ext.util.IPositionable;
		setY(y?: any, animate?: any): Ext.util.IPositionable;
		show(config?: any): Ext.window.IMessageBox;
		showAt(x?: any, y?: number, animate?: any): Ext.IComponent;
		showBy(component?: any, position?: string, offsets?: number[]): Ext.IComponent;
		statics(): Ext.IClass;
		stopAnimation(): Ext.IElement;
		stopFx(): Ext.IElement;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		syncFx(): any;
		toBack(): Ext.IComponent;
		toFront(preventFocus?: boolean): Ext.IComponent;
		toggleCollapse(): Ext.panel.IPanel;
		toggleMaximize(): Ext.window.IWindow;
		translatePoints(x?: any, y?: number): any;
		un(eventName?: string, fn?: any, scope?: any): void;
		up(selector?: any, limit?: any): Ext.container.IContainer;
		update(htmlOrData?: any, loadScripts?: boolean, callback?: any): void;
		updateBox(box?: any): Ext.IComponent;
		updateLayout(options?: any): void;
		updateProgress(value?: number, progressText?: string, msg?: string): Ext.window.IMessageBox;
		wait(msg?: string, title?: string, config?: any): Ext.window.IMessageBox
	}

	declare export class Msg  {
		CANCEL: number;
		ERROR: string;
		INFO: string;
		NO: number;
		OK: number;
		OKCANCEL: number;
		QUESTION: string;
		WARNING: string;
		YES: number;
		YESNO: number;
		YESNOCANCEL: number;
		_isLayoutRoot: boolean;
		body: Ext.dom.IElement;
		buttonText: any;
		contentPaddingProperty: string;
		dd: Ext.util.IComponentDragger;
		defaultTextHeight: number;
		draggable: boolean;
		floatParent: Ext.IContainer;
		frameSize: any;
		hasListeners: any;
		isComponent: boolean;
		isObservable: boolean;
		isPanel: boolean;
		isWindow: boolean;
		items: Ext.util.IAbstractMixedCollection;
		maskOnDisable: boolean;
		minProgressWidth: number;
		minPromptWidth: number;
		ownerCt: Ext.IContainer;
		rendered: boolean;
		scrollFlags: any;
		self: Ext.IClass;
		zIndexManager: Ext.IZIndexManager;
		zIndexParent: Ext.IContainer;
		add(component?: any): any;
		addBodyCls(cls?: string): Ext.panel.IPanel;
		addChildEls(): void;
		addClass(cls?: any): Ext.IComponent;
		addCls(cls?: any): Ext.IComponent;
		addClsWithUI(classes?: any, skip?: any): void;
		addDocked(component?: any, pos?: number): Ext.IComponent[];
		addEvents(eventNames?: any): void;
		addListener(element?: any, listeners?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		addPropertyToState(state?: any, propName?: string, value?: string): boolean;
		addStateEvents(events?: any): void;
		addTool(tools?: any): void;
		addUIClsToElement(cls?: any): void;
		afterCollapse(): void;
		afterComponentLayout(): void;
		afterExpand(): void;
		afterLayout(layout?: Ext.layout.container.IContainer): void;
		afterSetPosition(ax?: any, ay?: any): void;
		afterShow(animateTarget?: any, callback?: any, scope?: any): void;
		alert(title?: string, msg?: string, fn?: any, scope?: any): Ext.window.IMessageBox;
		alignTo(
		element?: any, position?: string, offsets?: number[], animate?: any
	): Ext.util.IPositionable;
		anchorTo(
		element?: any, position?: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: any
	): Ext.util.IPositionable;
		animate(animObj?: any): any;
		applyState(state?: any): void;
		beforeBlur(e?: Ext.IEventObject): void;
		beforeComponentLayout(adjWidth?: number, adjHeight?: number): void;
		beforeFocus(e?: Ext.IEventObject): void;
		beforeLayout(): void;
		beforeShow(): void;
		bubble(fn?: any, scope?: any, args?: any[]): Ext.IComponent;
		calculateConstrainedPosition(
		constrainTo?: any, proposedPosition?: number[], local?: boolean, proposedSize?: number[]
	): number[];
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		cancelFocus(): void;
		cascade(fn?: any, scope?: any, args?: any[]): Ext.IContainer;
		center(): Ext.IComponent;
		child(selector?: any): any;
		clearListeners(): void;
		clearManagedListeners(): void;
		cloneConfig(overrides?: any): Ext.IComponent;
		close(): void;
		collapse(direction?: string, animate?: boolean): Ext.panel.IPanel;
		confirm(title?: string, msg?: string, fn?: any, scope?: any): Ext.window.IMessageBox;
		contains(comp?: Ext.IComponent, deep?: boolean): boolean;
		convertCollapseDir(collapseDir?: any): void;
		disable(): Ext.container.IAbstractContainer;
		doAutoRender(): void;
		doComponentLayout(): Ext.container.IContainer;
		doConstrain(constrainTo?: any): void;
		doLayout(): Ext.container.IContainer;
		down(selector?: any): any;
		enableBubble(eventNames?: any): void;
		ensureAttachedToBody(runLayout?: boolean): void;
		expand(animate?: boolean): Ext.panel.IPanel;
		findParentBy(fn?: any): Ext.container.IContainer;
		findParentByType(xtype?: any): Ext.container.IContainer;
		findPlugin(ptype?: string): Ext.IAbstractPlugin;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		focus(selectText?: boolean, delay?: any, callback?: any, scope?: any): Ext.IComponent;
		forceComponentLayout(): void;
		getActiveAnimation(): any;
		getAlignToXY(element?: any, position?: string, offsets?: number[]): number[];
		getAnchorXY(anchor?: string, local?: boolean, size?: any): number[];
		getBox(contentBox?: boolean, local?: boolean): any;
		getBubbleTarget(): void;
		getChildByElement(el?: any, deep?: boolean): Ext.IComponent;
		getCollapsed(): any;
		getComponent(comp?: any): Ext.IComponent;
		getConstrainVector(constrainTo?: any, proposedPosition?: number[], proposedSize?: number[]): any;
		getDefaultFocus(): void;
		getDockedComponent(comp?: any): Ext.IComponent;
		getDockedItems(selector?: string, beforeBody?: boolean): Ext.IComponent[];
		getEl(): Ext.dom.IElement;
		getHeader(): void;
		getHeight(): number;
		getId(): string;
		getInitialConfig(name?: string): any;
		getInsertPosition(position?: any): HTMLElement;
		getItemId(): string;
		getLayout(): Ext.layout.container.IContainer;
		getLoader(): Ext.IComponentLoader;
		getLocalX(): number;
		getLocalXY(): number[];
		getLocalY(): number;
		getOffsetsTo(offsetsTo?: any): number[];
		getPlugin(pluginId?: string): Ext.IAbstractPlugin;
		getPosition(local?: boolean): number[];
		getRefItems(deep?: any): void;
		getRegion(): Ext.util.IRegion;
		getSize(): any;
		getSizeModel(ownerCtSizeModel?: any): any;
		getViewRegion(): Ext.util.IRegion;
		getWidth(): number;
		getX(): number;
		getXType(): string;
		getXTypes(): string;
		getXY(): number[];
		getY(): number;
		hasActiveFx(): any;
		hasCls(className?: string): boolean;
		hasListener(eventName?: string): boolean;
		hasUICls(cls?: string): void;
		hide(): Ext.IComponent;
		initConfig(config?: any): Ext.IBase;
		initEvents(): void;
		insert(index?: number, component?: any): Ext.IComponent;
		insertDocked(pos?: number, component?: any): void;
		is(selector?: string): boolean;
		isAncestor(possibleDescendant?: Ext.IComponent): void;
		isDescendantOf(container?: Ext.IContainer): boolean;
		isDisabled(): boolean;
		isDraggable(): boolean;
		isDroppable(): boolean;
		isFloating(): boolean;
		isHidden(): boolean;
		isLayoutRoot(): void;
		isLayoutSuspended(): boolean;
		isVisible(deep?: any): boolean;
		isXType(xtype?: string, shallow?: boolean): boolean;
		maximize(animate?: boolean): Ext.window.IWindow;
		minimize(): Ext.window.IWindow;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		move(fromIdx?: any, toIdx?: number): Ext.IComponent;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		nextNode(selector?: string): Ext.IComponent;
		nextSibling(selector?: string): Ext.IComponent;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		onAdd(component?: Ext.IComponent, position?: number): void;
		onAdded(): void;
		onBeforeAdd(item?: Ext.IComponent): void;
		onDestroy(): void;
		onDisable(): void;
		onDockedAdd(component?: Ext.IComponent): void;
		onDockedRemove(component?: Ext.IComponent): void;
		onEnable(): void;
		onHide(): void;
		onPosition(): void;
		onRemove(component?: Ext.IComponent, autoDestroy?: boolean): void;
		onRemoved(destroying?: any): void;
		onResize(): void;
		onShow(): void;
		onShowComplete(callback?: any, scope?: any): void;
		postBlur(e?: Ext.IEventObject): void;
		previousNode(selector?: string): Ext.IComponent;
		previousSibling(selector?: string): Ext.IComponent;
		progress(title?: string, msg?: string, progressText?: string): Ext.window.IMessageBox;
		prompt(
		title?: string, msg?: string, fn?: any, scope?: any, multiline?: any, value?: string
	): Ext.window.IMessageBox;
		query(selector?: string): Ext.IComponent[];
		queryBy(fn?: any, scope?: any): Ext.IComponent[];
		queryById(id?: string): Ext.IComponent;
		registerFloatingItem(cmp?: any): void;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		remove(component?: any, autoDestroy?: boolean): Ext.IComponent;
		removeAll(autoDestroy?: boolean): Ext.IComponent[];
		removeAnchor(): Ext.util.IPositionable;
		removeBodyCls(cls?: string): Ext.panel.IPanel;
		removeChildEls(testFn?: any): void;
		removeCls(cls?: any): Ext.IComponent;
		removeClsWithUI(cls?: any): void;
		removeDocked(item?: Ext.IComponent, autoDestroy?: boolean): void;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeUIClsFromElement(cls?: any): void;
		render(container?: any, position?: any): void;
		restore(animate?: any): Ext.window.IWindow;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		savePropToState(propName?: string, state?: any, stateName?: string): boolean;
		savePropsToState(propNames?: any, state?: any): any;
		saveState(): void;
		scrollBy(deltaX?: any, deltaY?: any, animate?: any): void;
		sequenceFx(): any;
		setActive(active?: boolean, newActive?: Ext.IComponent): void;
		setAutoScroll(scroll?: boolean): Ext.IComponent;
		setBodyStyle(style?: any, value?: string): Ext.panel.IPanel;
		setBorder(border?: any, targetEl?: any): void;
		setBorderRegion(region?: string): string;
		setBox(box?: any, animate?: any): Ext.util.IPositionable;
		setDisabled(disabled?: boolean): void;
		setDocked(dock?: any, layoutParent?: boolean): Ext.IComponent;
		setGlyph(newGlyph?: any): void;
		setHeight(height?: number): Ext.IComponent;
		setIcon(icon?: string, width?: number, height?: number): Ext.window.IMessageBox;
		setIconCls(newIconCls?: string): void;
		setLoading(load?: any, targetEl?: boolean): Ext.ILoadMask;
		setLocalX(x?: any): Ext.util.IPositionable;
		setLocalXY(x?: any, y?: any): Ext.util.IPositionable;
		setLocalY(y?: any): Ext.util.IPositionable;
		setMargin(margin?: any): void;
		setOverflowXY(overflowX?: string, overflowY?: string): Ext.IComponent;
		setPagePosition(x?: any, y?: number, animate?: any): Ext.IComponent;
		setPosition(x?: any, y?: number, animate?: any): Ext.IComponent;
		setRegion(region?: Ext.util.IRegion, animate?: any): Ext.util.IPositionable;
		setRegionWeight(weight?: number): number;
		setSize(width?: any, height?: any): Ext.IComponent;
		setTitle(newTitle?: string): void;
		setUI(ui?: any): void;
		setVisible(visible?: boolean): Ext.IComponent;
		setWidth(width?: number): Ext.IComponent;
		setX(x?: any, animate?: any): Ext.util.IPositionable;
		setXY(xy?: any, animate?: any): Ext.util.IPositionable;
		setY(y?: any, animate?: any): Ext.util.IPositionable;
		show(config?: any): Ext.window.IMessageBox;
		showAt(x?: any, y?: number, animate?: any): Ext.IComponent;
		showBy(component?: any, position?: string, offsets?: number[]): Ext.IComponent;
		statics(): Ext.IClass;
		stopAnimation(): Ext.IElement;
		stopFx(): Ext.IElement;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		syncFx(): any;
		toBack(): Ext.IComponent;
		toFront(preventFocus?: boolean): Ext.IComponent;
		toggleCollapse(): Ext.panel.IPanel;
		toggleMaximize(): Ext.window.IWindow;
		translatePoints(x?: any, y?: number): any;
		un(eventName?: string, fn?: any, scope?: any): void;
		up(selector?: any, limit?: any): Ext.container.IContainer;
		update(htmlOrData?: any, loadScripts?: boolean, callback?: any): void;
		updateBox(box?: any): Ext.IComponent;
		updateLayout(options?: any): void;
		updateProgress(value?: number, progressText?: string, msg?: string): Ext.window.IMessageBox;
		wait(msg?: string, title?: string, config?: any): Ext.window.IMessageBox
	}

	declare export class ModelManager  {
		all: Ext.util.IHashMap;
		associationStack: Ext.data.association.IAssociation[];
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(data?: any, name?: string, id?: number): void;
		each(fn?: any, scope?: any): void;
		get(id?: string): any;
		getCount(): number;
		getInitialConfig(name?: string): any;
		getModel(id?: any): Ext.data.IModel;
		initConfig(config?: any): Ext.IBase;
		isRegistered(type?: string): boolean;
		onAvailable(id?: string, fn?: any, scope?: any): void;
		register(item?: any): void;
		statics(): Ext.IClass;
		unregister(item?: any): void
	}

	declare export class ModelMgr  {
		all: Ext.util.IHashMap;
		associationStack: Ext.data.association.IAssociation[];
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(data?: any, name?: string, id?: number): void;
		each(fn?: any, scope?: any): void;
		get(id?: string): any;
		getCount(): number;
		getInitialConfig(name?: string): any;
		getModel(id?: any): Ext.data.IModel;
		initConfig(config?: any): Ext.IBase;
		isRegistered(type?: string): boolean;
		onAvailable(id?: string, fn?: any, scope?: any): void;
		register(item?: any): void;
		statics(): Ext.IClass;
		unregister(item?: any): void
	}

	declare export class Number  {
		constrain(number?: number, min?: number, max?: number): number;
		correctFloat(The?: number): number;
		from(value?: any, defaultValue?: number): number;
		randomInt(from?: number, to?: number): number;
		snap(
		value?: number, increment?: number, minValue?: number, maxValue?: number
	): number;
		snapInRange(
		value?: number, increment?: number, minValue?: number, maxValue?: number
	): number;
		toFixed(value?: number, precision?: number): void
	}

	declare export class Object  {
		chain(object?: any): void;
		each(object?: any, fn?: any, scope?: any): void;
		equals(object1?: any, object2?: any): boolean;
		fromQueryString(queryString?: string, recursive?: boolean): any;
		getKey(object?: any, value?: any): void;
		getKeys(object?: any): string[];
		getSize(object?: any): number;
		getValues(object?: any): any[];
		isEmpty(object?: any): boolean;
		merge(destination: any, ...object: any[]): any;
		toQueryObjects(name?: string, value?: any, recursive?: boolean): any[];
		toQueryString(object?: any, recursive?: boolean): string
	}

	declare export class Perf  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	declare export class PluginManager  {
		all: Ext.util.IHashMap;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(config?: any, defaultType?: any): Ext.IComponent;
		each(fn?: any, scope?: any): void;
		findByType(type?: string, defaultsOnly?: boolean): Ext.IAbstractPlugin[];
		get(id?: string): any;
		getCount(): number;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		isRegistered(type?: string): boolean;
		onAvailable(id?: string, fn?: any, scope?: any): void;
		register(item?: any): void;
		registerType(type?: string, cls?: any): void;
		statics(): Ext.IClass;
		unregister(item?: any): void
	}

	declare export class PluginMgr  {
		all: Ext.util.IHashMap;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(config?: any, defaultType?: any): Ext.IComponent;
		each(fn?: any, scope?: any): void;
		findByType(type?: string, defaultsOnly?: boolean): Ext.IAbstractPlugin[];
		get(id?: string): any;
		getCount(): number;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		isRegistered(type?: string): boolean;
		onAvailable(id?: string, fn?: any, scope?: any): void;
		register(item?: any): void;
		registerType(type?: string, cls?: any): void;
		statics(): Ext.IClass;
		unregister(item?: any): void
	}

	declare export class ShadowPool  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	declare export class String  {
		addCharacterEntities(entities?: any): void;
		capitalize(string?: string): string;
		createVarName(s?: string): string;
		ellipsis(value?: string, length?: number, word?: boolean): string;
		endsWith(s?: string, start?: string, ignoreCase?: boolean): void;
		escape(string?: string): string;
		escapeRegex(string?: string): string;
		format(string: string, ...values: any[]): string;
		htmlDecode(value?: string): string;
		htmlEncode(value?: string): string;
		insert(s?: string, value?: string, index?: number): string;
		leftPad(string?: string, size?: number, character?: string): string;
		repeat(pattern?: string, count?: number, sep?: string): void;
		resetCharacterEntities(): void;
		splitWords(words?: any): void;
		startsWith(s?: string, start?: string, ignoreCase?: boolean): void;
		toggle(string?: string, value?: string, other?: string): string;
		trim(string?: string): string;
		uncapitalize(string?: string): string;
		urlAppend(url?: string, string?: string): string
	}

	declare export class Supports  {
		ArraySort: boolean;
		AudioTag: boolean;
		BoundingClientRect: boolean;
		CSS3BorderRadius: boolean;
		CSS3BoxShadow: boolean;
		CSS3DTransform: boolean;
		CSS3LinearGradient: boolean;
		Canvas: boolean;
		ClassList: boolean;
		ComputedStyle: boolean;
		CreateContextualFragment: boolean;
		DeviceMotion: boolean;
		Direct2DBug: boolean;
		DisplayChangeInputSelectionBug: any;
		DisplayChangeTextAreaSelectionBug: any;
		Float: boolean;
		GeoLocation: boolean;
		GetPositionPercentage: boolean;
		History: boolean;
		LocalStorage: any;
		MouseEnterLeave: boolean;
		MouseWheel: boolean;
		Opacity: boolean;
		OrientationChange: boolean;
		Placeholder: boolean;
		PointerEvents: boolean;
		Range: boolean;
		RightMargin: boolean;
		RotatedBoundingClientRect: boolean;
		ScrollWidthInlinePaddingBug: boolean;
		Svg: boolean;
		TextAreaMaxLength: boolean;
		TimeoutActualLateness: boolean;
		Touch: boolean;
		Transitions: boolean;
		TransparentColor: boolean;
		Vml: boolean;
		WindowOnError: boolean
	}

	declare export class Template  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		from(el?: any, config?: any): Ext.ITemplate;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase
	}

	declare export class QuickTips  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		disable(): void;
		enable(): void;
		getInitialConfig(name?: string): any;
		getQuickTip(): Ext.tip.IQuickTip;
		init(autoRender?: boolean, config?: any): void;
		initConfig(config?: any): Ext.IBase;
		isEnabled(): boolean;
		register(config?: any): void;
		statics(): Ext.IClass;
		tips(config?: any): void;
		unregister(el?: any): void
	}

	declare export class History  {
		fieldId: string;
		hasListeners: any;
		iframeId: string;
		isObservable: boolean;
		self: Ext.IClass;
		useTopWindow: boolean;
		add(token?: string, preventDuplicates?: boolean): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		back(): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		clearManagedListeners(): void;
		enableBubble(eventNames?: any): void;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		forward(): void;
		getInitialConfig(name?: string): any;
		getToken(): string;
		hasListener(eventName?: string): boolean;
		init(onReady?: any, scope?: any): void;
		initConfig(config?: any): Ext.IBase;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		statics(): Ext.IClass;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export class TaskManager  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		newTask(config?: any): void;
		start(task?: any): any;
		statics(): Ext.IClass;
		stop(task?: any): any;
		stopAll(): void
	}

	declare export class Version  {
		compare(current?: string, target?: string): number;
		getComponentValue(value?: any): any
	}

	declare export class WindowManager  {
		self: Ext.IClass;
		bringToFront(comp?: any): boolean;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		each(fn?: any, scope?: any): void;
		eachBottomUp(fn?: any, scope?: any): void;
		eachTopDown(fn?: any, scope?: any): void;
		get(id?: any): Ext.IComponent;
		getActive(): Ext.IComponent;
		getBy(fn?: any, scope?: any): any[];
		getInitialConfig(name?: string): any;
		hideAll(): void;
		initConfig(config?: any): Ext.IBase;
		register(comp?: Ext.IComponent): void;
		sendToBack(comp?: any): Ext.IComponent;
		statics(): Ext.IClass;
		unregister(comp?: Ext.IComponent): void
	}

	declare export class XTemplate  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		from(el?: any, config?: any): Ext.ITemplate;
		getName(): string;
		getTpl(instance?: any, name?: string): Ext.IXTemplate;
		implement(): void;
		override(members?: any): Ext.IBase
	}

	
}

declare module 'app' {
		declare export interface IApplication {
		appFolder?: string,
		appProperty?: string,
		autoCreateViewport?: boolean,
		controllers?: any,
		enableQuickTips?: boolean,
		name?: string,
		namespaces?: any,
		paths?: any,
		scope?: any,
		getApplication(): Ext.app.IApplication,
		getController(name?: any): Ext.app.IController,
		launch(profile?: string): boolean
	}

	declare export interface IController {
		id?: string,
		models?: any,
		refs?: any[],
		stores?: any,
		views?: any,
		application?: Ext.app.IApplication,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		addRef(refs?: any): void,
		clearListeners(): void,
		clearManagedListeners(): void,
		control(selectors?: any, listeners?: any): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getApplication(): Ext.app.IApplication,
		getController(id?: string): Ext.app.IController,
		getModel(name?: string): Ext.data.IModel,
		getStore(name?: string): Ext.data.IStore,
		getView(name?: string): Ext.IBase,
		hasListener(eventName?: string): boolean,
		hasRef(ref?: any): boolean,
		init(application?: Ext.app.IApplication): void,
		listen(to?: any): void,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		onLaunch(application?: Ext.app.IApplication): void,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IEventBus {
		
	}

	declare export interface IEventDomain {
		idProperty?: string,
		instances?: any,
		match(target?: any, selector?: string): boolean,
		monitor(observable?: Ext.IClass): void
	}

		declare export class EventBus  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		control(selectors?: any, controller?: Ext.app.IController): void;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		listen(to?: any, controller?: Ext.app.IController): void;
		statics(): Ext.IClass;
		unlisten(controllerId?: string): void
	}

	
}

declare module 'domain' {
		declare export interface IComponent {
		
	}

	declare export interface IController {
		
	}

	declare export interface IDirect {
		
	}

	declare export interface IGlobal {
		
	}

	declare export interface IStore {
		
	}

		declare export class Component  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		match(target?: any, selector?: any): boolean;
		monitor(observable?: Ext.IClass): void;
		statics(): Ext.IClass
	}

	declare export class Controller  {
		idProperty: string;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		match(target?: any, selector?: string): boolean;
		monitor(observable?: Ext.IClass): void;
		statics(): Ext.IClass
	}

	declare export class Direct  {
		idProperty: string;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		match(target?: any, selector?: string): boolean;
		monitor(observable?: Ext.IClass): void;
		statics(): Ext.IClass
	}

	declare export class Global  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		match(): boolean;
		monitor(observable?: Ext.IClass): void;
		statics(): Ext.IClass
	}

	declare export class Store  {
		idProperty: string;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		match(target?: any, selector?: string): boolean;
		monitor(observable?: Ext.IClass): void;
		statics(): Ext.IClass
	}

	
}

declare module 'button' {
		declare export interface IButton {
		allowDepress?: boolean,
		arrowAlign?: string,
		arrowCls?: string,
		baseCls?: string,
		baseParams?: any,
		clickEvent?: string,
		cls?: string,
		componentLayout?: any,
		destroyMenu?: boolean,
		disabled?: boolean,
		enableToggle?: boolean,
		focusCls?: string,
		frame?: boolean,
		glyph?: any,
		handleMouseEvents?: boolean,
		handler?: any,
		hidden?: boolean,
		href?: string,
		hrefTarget?: string,
		icon?: string,
		iconAlign?: string,
		iconCls?: string,
		menu?: any,
		menuActiveCls?: string,
		menuAlign?: string,
		minWidth?: number,
		overCls?: string,
		overflowText?: string,
		params?: any,
		pressed?: boolean,
		pressedCls?: string,
		preventDefault?: boolean,
		renderTpl?: any,
		repeat?: any,
		scale?: any,
		scope?: any,
		showEmptyMenu?: boolean,
		shrinkWrap?: any,
		tabIndex?: number,
		text?: string,
		textAlign?: string,
		toggleGroup?: string,
		toggleHandler?: any,
		tooltip?: any,
		tooltipType?: string,
		isAction?: boolean,
		template?: Ext.ITemplate,
		child(selector?: any): any,
		disable(silent?: any): void,
		down(selector?: any): any,
		enable(silent?: any): void,
		getTemplateArgs(): any,
		getText(): string,
		hasVisibleMenu(): boolean,
		hideMenu(): Ext.button.IButton,
		initComponent(): void,
		onDisable(): void,
		query(selector?: string): Ext.IComponent[],
		queryBy(fn?: any, scope?: any): Ext.IComponent[],
		queryById(id?: string): Ext.IComponent,
		setGlyph(glyph?: any): Ext.button.IButton,
		setHandler(handler?: any, scope?: any): Ext.button.IButton,
		setHref(href?: string): void,
		setIcon(icon?: string): Ext.button.IButton,
		setIconCls(cls?: string): Ext.button.IButton,
		setParams(params?: any): void,
		setScale(scale?: string): void,
		setText(text?: string): Ext.button.IButton,
		setTextAlign(align?: string): void,
		setTooltip(tooltip?: any): Ext.button.IButton,
		setUI(ui?: any): void,
		showMenu(fromEvent?: any): void,
		toggle(state?: boolean, suppressEvent?: boolean): Ext.button.IButton
	}

	declare export interface ICycle {
		changeHandler?: any,
		forceGlyph?: any,
		forceIcon?: string,
		items?: any[],
		prependText?: string,
		showText?: boolean,
		menu?: Ext.menu.IMenu,
		getActiveItem(): Ext.menu.ICheckItem,
		setActiveItem(item?: Ext.menu.ICheckItem, suppressEvent?: boolean): void,
		toggleSelected(): void
	}

	declare export interface IManager {
		
	}

	declare export interface ISplit {
		arrowHandler?: any,
		arrowTooltip?: string,
		setArrowHandler(handler?: any, scope?: any): void
	}

		declare export class Manager  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	
}

declare module 'axis' {
		declare export interface IAbstract {
		fields?: string[],
		label?: Ext.chart.ILabel
	}

	declare export interface IAxis {
		adjustEnd?: boolean,
		dashSize?: number,
		grid?: any,
		hidden?: boolean,
		length?: number,
		majorTickSteps?: number,
		minorTickSteps?: number,
		position?: string,
		title?: string,
		width?: number,
		drawAxis(init?: any): void,
		drawGrid(): void,
		drawLabel(): void,
		setTitle(title?: string): void
	}

	declare export interface ICategory {
		calculateCategoryCount?: boolean,
		categoryNames?: string
	}

	declare export interface IGauge {
		margin?: number,
		maximum?: number,
		minimum?: number,
		steps?: number,
		title?: string,
		setTitle(title?: string): void
	}

	declare export interface INumeric {
		adjustMaximumByMajorUnit?: boolean,
		adjustMinimumByMajorUnit?: boolean,
		constrain?: boolean,
		decimals?: number,
		maximum?: number,
		minimum?: number,
		position?: string
	}

	declare export interface IRadial {
		maximum?: number,
		position?: string,
		steps?: number,
		drawLabel(): void
	}

	declare export interface ITime {
		constrain?: boolean,
		dateFormat?: any,
		fromDate?: any,
		step?: any[],
		toDate?: any
	}

			
}

declare module 'chart' {
		declare export interface IAxis {
		adjustEnd?: boolean,
		dashSize?: number,
		grid?: any,
		hidden?: boolean,
		length?: number,
		majorTickSteps?: number,
		minorTickSteps?: number,
		position?: string,
		title?: string,
		width?: number,
		drawAxis(init?: any): void,
		drawGrid(): void,
		drawLabel(): void,
		setTitle(title?: string): void
	}

	declare export interface ICategoryAxis {
		calculateCategoryCount?: boolean,
		categoryNames?: string
	}

	declare export interface INumericAxis {
		adjustMaximumByMajorUnit?: boolean,
		adjustMinimumByMajorUnit?: boolean,
		constrain?: boolean,
		decimals?: number,
		maximum?: number,
		minimum?: number,
		position?: string
	}

	declare export interface ITimeAxis {
		constrain?: boolean,
		dateFormat?: any,
		fromDate?: any,
		step?: any[],
		toDate?: any
	}

	declare export interface ICallout {
		
	}

	declare export interface IChart {
		animate?: any,
		axes?: Ext.chart.axis.IAxis[],
		background?: any,
		gradients?: any[],
		insetPadding?: number,
		legend?: any,
		series?: Ext.chart.series.ISeries[],
		store?: Ext.data.IStore,
		theme?: string,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		bindStore(store?: any, initial?: any): void,
		bindStoreListeners(store?: Ext.data.IAbstractStore): void,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getStore(): Ext.data.IAbstractStore,
		getStoreListeners(): any,
		hasListener(eventName?: string): boolean,
		initComponent(): void,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		onBindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		onShow(): void,
		onUnbindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		redraw(resize?: boolean): void,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		restoreZoom(): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		save(config?: any): any,
		setZoom(zoomConfig?: any): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void,
		unbindStoreListeners(store?: Ext.data.IAbstractStore): void
	}

	declare export interface IHighlight {
		highlight?: any,
		highlightCfg?: any,
		highlightItem(item?: any): void,
		unHighlightItem(): void
	}

	declare export interface ILabel {
		label?: any,
		onCreateLabel(
		storeItem?: Ext.data.IModel, item?: any, i?: number, display?: string
	): Ext.draw.ISprite,
		onPlaceLabel(
		label?: Ext.draw.ISprite, storeItem?: Ext.data.IModel, item?: any, i?: number, display?: string, animate?: boolean, index?: number
	): void
	}

	declare export interface ILegend {
		boxFill?: string,
		boxStroke?: string,
		boxStrokeWidth?: string,
		boxZIndex?: number,
		itemSpacing?: number,
		labelColor?: string,
		labelFont?: string,
		padding?: number,
		position?: string,
		update?: boolean,
		visible?: boolean,
		x?: number,
		y?: number,
		isVertical?: boolean,
		toggle(show?: boolean): void
	}

	declare export interface ILegendItem {
		createLegend(config?: any): void,
		updatePosition(relativeTo?: any): void
	}

	declare export interface IMask {
		mask?: any
	}

	declare export interface IMaskLayer {
		initComponent(): void
	}

	declare export interface INavigation {
		restoreZoom(): void,
		setZoom(zoomConfig?: any): void
	}

	declare export interface IBarSeries {
		column?: boolean,
		groupGutter?: number,
		gutter?: number,
		stacked?: boolean,
		style?: any,
		type?: string,
		xPadding?: any,
		yPadding?: any,
		drawSeries(): void,
		getLegendColor(index?: any): void,
		highlightItem(item?: any): void,
		unHighlightItem(): void
	}

	declare export interface IBarChart {
		column?: boolean,
		groupGutter?: number,
		gutter?: number,
		stacked?: boolean,
		style?: any,
		type?: string,
		xPadding?: any,
		yPadding?: any,
		drawSeries(): void,
		getLegendColor(index?: any): void,
		highlightItem(item?: any): void,
		unHighlightItem(): void
	}

	declare export interface IStackedBarChart {
		column?: boolean,
		groupGutter?: number,
		gutter?: number,
		stacked?: boolean,
		style?: any,
		type?: string,
		xPadding?: any,
		yPadding?: any,
		drawSeries(): void,
		getLegendColor(index?: any): void,
		highlightItem(item?: any): void,
		unHighlightItem(): void
	}

	declare export interface ICartesianSeries {
		axis?: any,
		xField?: string,
		yField?: any,
		eachYValue(record?: Ext.data.IModel, fn?: any, scope?: any): void,
		getMinMaxXValues(): any[],
		getMinMaxYValues(): any[],
		getYValueAccessors(): any[],
		getYValueCount(): number
	}

	declare export interface ICartesianChart {
		axis?: any,
		xField?: string,
		yField?: any,
		eachYValue(record?: Ext.data.IModel, fn?: any, scope?: any): void,
		getMinMaxXValues(): any[],
		getMinMaxYValues(): any[],
		getYValueAccessors(): any[],
		getYValueCount(): number
	}

	declare export interface IColumnSeries {
		axis?: string,
		column?: boolean,
		type?: string,
		xPadding?: any,
		yPadding?: any
	}

	declare export interface IColumnChart {
		axis?: string,
		column?: boolean,
		type?: string,
		xPadding?: any,
		yPadding?: any
	}

	declare export interface IStackedColumnChart {
		axis?: string,
		column?: boolean,
		type?: string,
		xPadding?: any,
		yPadding?: any
	}

	declare export interface ILineSeries {
		fill?: boolean,
		markerConfig?: any,
		selectionTolerance?: number,
		showMarkers?: boolean,
		smooth?: any,
		style?: any,
		type?: string,
		drawSeries(): void
	}

	declare export interface ILineChart {
		fill?: boolean,
		markerConfig?: any,
		selectionTolerance?: number,
		showMarkers?: boolean,
		smooth?: any,
		style?: any,
		type?: string,
		drawSeries(): void
	}

	declare export interface IPieSeries {
		angleField?: string,
		colorSet?: any[],
		donut?: any,
		field?: string,
		highlightDuration?: number,
		lengthField?: string,
		showInLegend?: boolean,
		style?: any,
		type?: string,
		xField?: string,
		drawSeries(): void,
		getLegendColor(item?: any): void,
		highlightItem(item?: any): void,
		unHighlightItem(item?: any): void
	}

	declare export interface IPieChart {
		angleField?: string,
		colorSet?: any[],
		donut?: any,
		field?: string,
		highlightDuration?: number,
		lengthField?: string,
		showInLegend?: boolean,
		style?: any,
		type?: string,
		xField?: string,
		drawSeries(): void,
		getLegendColor(item?: any): void,
		highlightItem(item?: any): void,
		unHighlightItem(item?: any): void
	}

	declare export interface IShape {
		
	}

	declare export interface ITip {
		
	}

	declare export interface ITipSurface {
		
	}

		declare export class Shape  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	
}

declare module 'series' {
		declare export interface IArea {
		style?: any,
		type?: string,
		drawSeries(): void,
		getLegendColor(item?: any): void,
		highlightItem(item?: any): void,
		highlightSeries(item?: any): void,
		unHighlightItem(item?: any): void,
		unHighlightSeries(item?: any): void
	}

	declare export interface IBar {
		column?: boolean,
		groupGutter?: number,
		gutter?: number,
		stacked?: boolean,
		style?: any,
		type?: string,
		xPadding?: any,
		yPadding?: any,
		drawSeries(): void,
		getLegendColor(index?: any): void,
		highlightItem(item?: any): void,
		unHighlightItem(): void
	}

	declare export interface ICartesian {
		axis?: any,
		xField?: string,
		yField?: any,
		eachYValue(record?: Ext.data.IModel, fn?: any, scope?: any): void,
		getMinMaxXValues(): any[],
		getMinMaxYValues(): any[],
		getYValueAccessors(): any[],
		getYValueCount(): number
	}

	declare export interface IColumn {
		axis?: string,
		column?: boolean,
		type?: string,
		xPadding?: any,
		yPadding?: any
	}

	declare export interface IGauge {
		angleField?: string,
		donut?: any,
		highlightDuration?: number,
		needle?: boolean,
		showInLegend?: boolean,
		style?: any,
		type?: string,
		drawSeries(): void,
		getLegendColor(item?: any): void,
		setValue(value?: any): void
	}

	declare export interface ILine {
		fill?: boolean,
		markerConfig?: any,
		selectionTolerance?: number,
		showMarkers?: boolean,
		smooth?: any,
		style?: any,
		type?: string,
		drawSeries(): void
	}

	declare export interface IPie {
		angleField?: string,
		colorSet?: any[],
		donut?: any,
		field?: string,
		highlightDuration?: number,
		lengthField?: string,
		showInLegend?: boolean,
		style?: any,
		type?: string,
		xField?: string,
		drawSeries(): void,
		getLegendColor(item?: any): void,
		highlightItem(item?: any): void,
		unHighlightItem(item?: any): void
	}

	declare export interface IRadar {
		markerConfig?: any,
		showInLegend?: boolean,
		showMarkers?: boolean,
		style?: any,
		type?: string,
		xField?: string,
		yField?: string,
		drawSeries(): void
	}

	declare export interface IScatter {
		markerConfig?: any,
		style?: any,
		type?: string,
		drawSeries(): void
	}

	declare export interface ISeries {
		highlight?: any,
		listeners?: any,
		renderer?: any,
		shadowAttributes?: any[],
		showInLegend?: boolean,
		tips?: any,
		title?: string,
		type?: string,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		eachRecord(fn?: any, scope?: any): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getItemForPoint(x?: number, y?: number): any,
		getLegendColor(index?: any): void,
		getRecordCount(): void,
		hasListener(eventName?: string): boolean,
		hideAll(): void,
		highlightItem(item?: any): void,
		isExcluded(index?: any): void,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		onCreateLabel(
		storeItem?: Ext.data.IModel, item?: any, i?: number, display?: string
	): Ext.draw.ISprite,
		onPlaceLabel(
		label?: Ext.draw.ISprite, storeItem?: Ext.data.IModel, item?: any, i?: number, display?: string, animate?: boolean, index?: number
	): void,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		setTitle(index?: number, title?: string): void,
		showAll(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void,
		unHighlightItem(): void
	}

			
}

declare module 'theme' {
		declare export interface IBase {
		
	}

	declare export interface ITheme {
		
	}

			
}

declare module 'container' {
		declare export interface IAbstractContainer {
		activeItem?: any,
		autoDestroy?: boolean,
		baseCls?: string,
		bubbleEvents?: string[],
		defaultType?: string,
		defaults?: any,
		detachOnRemove?: boolean,
		items?: any,
		layout?: any,
		renderTpl?: any,
		suspendLayout?: boolean,
		add(component?: any): any,
		afterComponentLayout(): void,
		afterLayout(layout?: Ext.layout.container.IContainer): void,
		cascade(fn?: any, scope?: any, args?: any[]): Ext.IContainer,
		child(selector?: any): any,
		contains(comp?: Ext.IComponent, deep?: boolean): boolean,
		disable(): Ext.container.IAbstractContainer,
		doLayout(): Ext.container.IContainer,
		down(selector?: any): any,
		getComponent(comp?: any): Ext.IComponent,
		getLayout(): Ext.layout.container.IContainer,
		getRefItems(deep?: any): void,
		insert(index?: number, component?: any): Ext.IComponent,
		isAncestor(possibleDescendant?: Ext.IComponent): void,
		move(fromIdx?: any, toIdx?: number): Ext.IComponent,
		onAdd(component?: Ext.IComponent, position?: number): void,
		onBeforeAdd(item?: Ext.IComponent): void,
		onPosition(): void,
		onRemove(component?: Ext.IComponent, autoDestroy?: boolean): void,
		onResize(): void,
		query(selector?: string): Ext.IComponent[],
		queryBy(fn?: any, scope?: any): Ext.IComponent[],
		queryById(id?: string): Ext.IComponent,
		remove(component?: any, autoDestroy?: boolean): Ext.IComponent,
		removeAll(autoDestroy?: boolean): Ext.IComponent[]
	}

	declare export interface IButtonGroup {
		baseCls?: string,
		columns?: number,
		defaultButtonUI?: string,
		defaultType?: string,
		frame?: boolean,
		layout?: any,
		titleAlign?: string,
		onBeforeAdd(component?: any): void
	}

	declare export interface IContainer {
		anchorSize?: any,
		getChildByElement(el?: any, deep?: boolean): Ext.IComponent
	}

	declare export interface IDockingContainer {
		defaultDockWeights?: any,
		addDocked(component?: any, pos?: number): Ext.IComponent[],
		getDockedComponent(comp?: any): Ext.IComponent,
		getDockedItems(selector?: string, beforeBody?: boolean): Ext.IComponent[],
		insertDocked(pos?: number, component?: any): void,
		onDockedAdd(component?: Ext.IComponent): void,
		onDockedRemove(component?: Ext.IComponent): void,
		removeDocked(item?: Ext.IComponent, autoDestroy?: boolean): void
	}

	declare export interface IMonitor {
		
	}

	declare export interface IViewport {
		isViewport?: boolean,
		onRender(): void
	}

	declare export interface IAbsolute {
		ignoreOnContentChange?: boolean,
		itemCls?: string,
		beginLayout(ownerContext?: any): void,
		onContentChange(): boolean
	}

	declare export interface IAccordion {
		activeOnTop?: boolean,
		align?: string,
		animate?: boolean,
		autoWidth?: boolean,
		collapseFirst?: boolean,
		fill?: boolean,
		hideCollapseTool?: boolean,
		itemCls?: string,
		multi?: boolean,
		titleCollapse?: boolean,
		beginLayout(ownerContext?: any): void,
		configureItem(item?: any): void,
		renderItems(items?: any, target?: any): void
	}

	declare export interface IAnchor {
		anchor?: string,
		defaultAnchor?: string,
		manageOverflow?: boolean,
		beginLayoutCycle(ownerContext?: any): void,
		configureItem(item?: any): void,
		getItemSizePolicy(item?: any): Ext.layout.ISizePolicy
	}

	declare export interface IAuto {
		reserveScrollbar?: boolean,
		manageOverflow?: boolean,
		managePadding?: boolean,
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any): void,
		calculate(ownerContext?: any): void,
		calculateOverflow(ownerContext?: Ext.layout.IContextItem): void,
		completeLayout(ownerContext?: any): void,
		finishedLayout(ownerContext?: any): void,
		getContainerSize(ownerContext?: Ext.layout.IContextItem, inDom?: boolean): any,
		getElementTarget(): Ext.IElement,
		getOverflowXStyle(ownerContext?: Ext.layout.IContextItem): string,
		getOverflowYStyle(ownerContext?: Ext.layout.IContextItem): string,
		getRenderTarget(): Ext.IElement,
		initLayout(): void,
		setCtSizeIfNeeded(ownerContext?: Ext.layout.IContextItem, containerSize?: any): void
	}

	declare export interface IBorder {
		itemCls?: string,
		padding?: any,
		regionWeights?: any,
		split?: boolean,
		splitterResize?: boolean,
		beginLayout(ownerContext?: any): void,
		calculate(ownerContext?: any): void,
		getItemSizePolicy(item?: any): Ext.layout.ISizePolicy,
		getLayoutItems(): Ext.IComponent[]
	}

	declare export interface IBox {
		defaultMargins?: any,
		flex?: number,
		itemCls?: string,
		pack?: string,
		padding?: string,
		stretchMaxPartner?: any,
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void,
		cacheFlexes(ownerContext?: any): void,
		calculate(ownerContext?: any): void,
		completeLayout(ownerContext?: any): void,
		finishedLayout(ownerContext?: any): void,
		getElementTarget(): Ext.IElement,
		getItemSizePolicy(item?: any, ownerSizeModel?: any): Ext.layout.ISizePolicy,
		getRenderTarget(): Ext.IElement
	}

	declare export interface ICard {
		deferredRender?: boolean,
		getActiveItem(): Ext.IComponent,
		getNext(): Ext.IComponent,
		getPrev(): Ext.IComponent,
		isValidParent(item?: any, target?: any, position?: any): void,
		next(): Ext.IComponent,
		prev(): Ext.IComponent,
		setActiveItem(newCard?: any): Ext.IComponent
	}

	declare export interface ICheckboxGroup {
		autoFlex?: boolean,
		beginLayout(ownerContext?: any): void,
		calculate(ownerContext?: any): void,
		getItemSizePolicy(item?: any): Ext.layout.ISizePolicy,
		initLayout(): void,
		isValidParent(): void,
		renderItems(items?: any): void
	}

	declare export interface IColumn {
		itemCls?: string,
		manageOverflow?: boolean,
		getItemSizePolicy(item?: any, ownerSizeModel?: any): Ext.layout.ISizePolicy,
		setCtSizeIfNeeded(ownerContext?: any, containerSize?: any): void
	}

	declare export interface IContainer {
		itemCls?: string,
		overflowPadderEl?: Ext.IElement,
		addChildEls(): void,
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void,
		configureItem(item?: any): void,
		getContainerSize(ownerContext?: Ext.layout.IContextItem, inDom?: boolean): any,
		getElementTarget(): Ext.IElement,
		getLayoutItems(): Ext.IComponent[],
		getRenderTarget(): Ext.IElement,
		getRenderedItems(): any[],
		getTarget(): Ext.IElement,
		getVisibleItems(): any[],
		removeChildEls(testFn?: any): void
	}

	declare export interface IEditor {
		calculate(ownerContext?: any): void,
		getItemSizePolicy(item?: any): Ext.layout.ISizePolicy
	}

	declare export interface IFit {
		defaultMargins?: any,
		itemCls?: string,
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void,
		calculate(ownerContext?: any): void,
		getItemSizePolicy(item?: any, ownerSizeModel?: any): Ext.layout.ISizePolicy
	}

	declare export interface IForm {
		getScrollRangeFlags?: any,
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void,
		calculate(ownerContext?: any): void,
		calculateOverflow(
		ownerContext?: Ext.layout.IContextItem, containerSize?: any, dimensions?: number
	): void,
		completeLayout(ownerContext?: any): void,
		doRenderPadder(out?: any, renderData?: any): void,
		getContainerSize(
		ownerContext?: Ext.layout.IContextItem, inDom?: boolean, ignoreOverflow?: boolean
	): any,
		getItemSizePolicy(item?: any): Ext.layout.ISizePolicy,
		getOverflowXStyle(ownerContext?: Ext.layout.IContextItem): string,
		getOverflowYStyle(ownerContext?: Ext.layout.IContextItem): string,
		getRenderTarget(): Ext.IElement,
		initLayout(): void,
		isValidParent(item?: any, target?: any, position?: any): void
	}

	declare export interface IHBox {
		align?: string,
		alignRoundingMethod?: any,
		constrainAlign?: boolean
	}

	declare export interface ITable {
		columns?: number,
		tableAttrs?: any,
		tdAttrs?: any,
		trAttrs?: any,
		calculate(ownerContext?: any): void,
		finalizeLayout(): void,
		getLayoutItems(): Ext.IComponent[],
		isValidParent(item?: any, target?: any, rowIdx?: any, cellIdx?: any): void
	}

	declare export interface IVBox {
		align?: string,
		alignRoundingMethod?: any,
		constrainAlign?: boolean
	}

			
}

declare module 'data' {
		declare export interface IAbstractStore {
		autoLoad?: any,
		autoSync?: boolean,
		batchUpdateMode?: string,
		fields?: any[],
		filterOnLoad?: boolean,
		filters?: any,
		model?: string,
		proxy?: any,
		remoteFilter?: boolean,
		remoteSort?: boolean,
		sortOnLoad?: boolean,
		statefulFilters?: boolean,
		storeId?: string,
		defaultProxyType?: string,
		isDestroyed?: boolean,
		isStore?: boolean,
		removed?: Ext.data.IModel[],
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		generateComparator(): void,
		getFirstSorter(): Ext.util.ISorter,
		getModifiedRecords(): Ext.data.IModel[],
		getNewRecords(): Ext.data.IModel[],
		getProxy(): Ext.data.proxy.IProxy,
		getRemovedRecords(): Ext.data.IModel[],
		getUpdatedRecords(): Ext.data.IModel[],
		hasListener(eventName?: string): boolean,
		initSortable(): void,
		isLoading(): boolean,
		load(options?: any): void,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		reload(options?: any): void,
		removeAll(): void,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeAutoSync(): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		save(): void,
		setProxy(proxy?: any): Ext.data.proxy.IProxy,
		sort(sorters?: any, direction?: string): Ext.util.ISorter[],
		suspendAutoSync(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		sync(options?: any): Ext.data.IStore,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IArrayStore {
		loadData(data?: any, append?: any): void
	}

	declare export interface IAssociation {
		associatedModel?: string,
		associationKey?: string,
		model?: string,
		ownerModel?: string,
		primaryKey?: string,
		reader?: Ext.data.reader.IReader,
		associatedName?: string,
		ownerName?: string,
		getReader(): Ext.data.reader.IReader
	}

	declare export interface IBelongsToAssociation {
		foreignKey?: string,
		getterName?: string,
		setterName?: string,
		type?: string
	}

	declare export interface IHasManyAssociation {
		autoLoad?: boolean,
		filterProperty?: string,
		foreignKey?: string,
		name?: string,
		storeConfig?: any,
		type?: string
	}

	declare export interface IHasOneAssociation {
		foreignKey?: string,
		getterName?: string,
		setterName?: string,
		type?: string
	}

	declare export interface IBatch {
		autoStart?: boolean,
		pauseOnException?: boolean,
		current?: number,
		exceptions?: Ext.data.IOperation[],
		hasException?: boolean,
		isComplete?: boolean,
		isRunning?: boolean,
		operations?: Ext.data.IOperation[],
		total?: number,
		add(operation?: any): Ext.data.IBatch,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		pause(): Ext.data.IBatch,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		retry(): Ext.data.IBatch,
		runOperation(index?: number): Ext.data.IBatch,
		start(index?: any): Ext.data.IBatch,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IBufferStore {
		filterOnLoad?: boolean,
		sortOnLoad?: boolean
	}

	declare export interface IConnection {
		autoAbort?: boolean,
		binary?: boolean,
		cors?: boolean,
		defaultHeaders?: any,
		disableCaching?: boolean,
		disableCachingParam?: string,
		extraParams?: any,
		method?: string,
		timeout?: number,
		withCredentials?: boolean,
		abort(request?: any): void,
		abortAll(): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		hasListener(eventName?: string): boolean,
		isLoading(request?: any): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		parseStatus(status?: number): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		request(options?: any): any,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		setOptions(options?: any, scope?: any): any,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void,
		upload(form?: any, url?: string, params?: string, options?: any): void
	}

	declare export interface IDirectStore {
		
	}

	declare export interface IErrors {
		getByField(fieldName?: string): any[],
		isValid(): boolean
	}

	declare export interface IField {
		convert?: any,
		dateFormat?: string,
		dateReadFormat?: string,
		dateWriteFormat?: string,
		defaultValue?: any,
		mapping?: any,
		name?: string,
		persist?: boolean,
		serialize?: any,
		sortDir?: string,
		sortType?: any,
		type?: any,
		useNull?: boolean
	}

	declare export interface IGroup {
		
	}

	declare export interface IIdGenerator {
		id?: string,
		isGenerator?: boolean,
		generate(): string
	}

	declare export interface IJsonP {
		
	}

	declare export interface IJsonPStore {
		
	}

	declare export interface IJsonStore {
		
	}

	declare export interface IModel {
		associations?: any[],
		belongsTo?: any,
		clientIdProperty?: string,
		defaultProxyType?: string,
		fields?: any,
		hasMany?: any,
		idProperty?: any,
		idgen?: any,
		persistenceProperty?: string,
		proxy?: any,
		validations?: any[],
		dirty?: boolean,
		editing?: boolean,
		isModel?: boolean,
		modified?: any,
		phantom?: boolean,
		raw?: any,
		store?: Ext.data.IStore,
		stores?: Ext.data.IStore[],
		COMMIT?: string,
		EDIT?: string,
		REJECT?: string,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		beginEdit(): void,
		cancelEdit(): void,
		clearListeners(): void,
		clearManagedListeners(): void,
		commit(silent?: boolean, modifiedFieldNames?: string[]): void,
		copy(id?: string): Ext.data.IModel,
		destroy(options?: any): Ext.data.IModel,
		enableBubble(eventNames?: any): void,
		endEdit(silent?: boolean, modifiedFieldNames?: string[]): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		get(fieldName?: string): any,
		getAssociatedData(): any,
		getChanges(): any,
		getData(includeAssociated?: boolean): any,
		getId(): any,
		getProxy(): Ext.data.proxy.IProxy,
		hasListener(eventName?: string): boolean,
		isModified(fieldName?: string): boolean,
		isValid(): boolean,
		join(store?: Ext.data.IStore): void,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		reject(silent?: boolean): void,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		save(options?: any): Ext.data.IModel,
		set(fieldName?: any, newValue?: any): string[],
		setDirty(): void,
		setId(id?: any): void,
		setProxy(proxy?: any): Ext.data.proxy.IProxy,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void,
		unjoin(store?: Ext.data.IStore): void,
		validate(): Ext.data.IErrors
	}

	declare export interface IRecord {
		associations?: any[],
		belongsTo?: any,
		clientIdProperty?: string,
		defaultProxyType?: string,
		fields?: any,
		hasMany?: any,
		idProperty?: any,
		idgen?: any,
		persistenceProperty?: string,
		proxy?: any,
		validations?: any[],
		dirty?: boolean,
		editing?: boolean,
		isModel?: boolean,
		modified?: any,
		phantom?: boolean,
		raw?: any,
		store?: Ext.data.IStore,
		stores?: Ext.data.IStore[],
		COMMIT?: string,
		EDIT?: string,
		REJECT?: string,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		beginEdit(): void,
		cancelEdit(): void,
		clearListeners(): void,
		clearManagedListeners(): void,
		commit(silent?: boolean, modifiedFieldNames?: string[]): void,
		copy(id?: string): Ext.data.IModel,
		destroy(options?: any): Ext.data.IModel,
		enableBubble(eventNames?: any): void,
		endEdit(silent?: boolean, modifiedFieldNames?: string[]): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		get(fieldName?: string): any,
		getAssociatedData(): any,
		getChanges(): any,
		getData(includeAssociated?: boolean): any,
		getId(): any,
		getProxy(): Ext.data.proxy.IProxy,
		hasListener(eventName?: string): boolean,
		isModified(fieldName?: string): boolean,
		isValid(): boolean,
		join(store?: Ext.data.IStore): void,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		reject(silent?: boolean): void,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		save(options?: any): Ext.data.IModel,
		set(fieldName?: any, newValue?: any): string[],
		setDirty(): void,
		setId(id?: any): void,
		setProxy(proxy?: any): Ext.data.proxy.IProxy,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void,
		unjoin(store?: Ext.data.IStore): void,
		validate(): Ext.data.IErrors
	}

	declare export interface INodeInterface {
		allowDrag?: boolean,
		allowDrop?: boolean,
		checked?: boolean,
		children?: Ext.data.INodeInterface[],
		cls?: string,
		depth?: number,
		expandable?: boolean,
		expanded?: boolean,
		href?: string,
		hrefTarget?: string,
		icon?: string,
		iconCls?: string,
		index?: number,
		isFirst?: boolean,
		isLast?: boolean,
		leaf?: boolean,
		loaded?: boolean,
		loading?: boolean,
		parentId?: string,
		qshowDelay?: number,
		qtip?: string,
		qtitle?: string,
		root?: boolean,
		text?: string,
		childNodes?: Ext.data.INodeInterface[],
		firstChild?: Ext.data.INodeInterface,
		isNode?: boolean,
		lastChild?: Ext.data.INodeInterface,
		nextSibling?: Ext.data.INodeInterface,
		parentNode?: Ext.data.INodeInterface,
		previousSibling?: Ext.data.INodeInterface,
		appendChild(
		node?: any, suppressEvents?: boolean, commit?: boolean
	): Ext.data.INodeInterface,
		bubble(fn?: any, scope?: any, args?: any[]): void,
		cascadeBy(fn?: any, scope?: any, args?: any[]): void,
		collapse(recursive?: boolean, callback?: any, scope?: any): void,
		collapseChildren(recursive?: any, callback?: any, scope?: any): void,
		contains(node?: Ext.data.INodeInterface): boolean,
		copy(id?: string, deep?: boolean): Ext.data.INodeInterface,
		createNode(node?: any): Ext.data.INodeInterface,
		destroy(silent?: any): void,
		eachChild(fn?: any, scope?: any, args?: any[]): void,
		expand(recursive?: boolean, callback?: any, scope?: any): void,
		expandChildren(recursive?: boolean, callback?: any, scope?: any): void,
		findChild(attribute?: string, value?: any, deep?: boolean): Ext.data.INodeInterface,
		findChildBy(fn?: any, scope?: any, deep?: boolean): Ext.data.INodeInterface,
		getChildAt(index?: number): Ext.data.INodeInterface,
		getDepth(): number,
		getOwnerTree(): Ext.tree.IPanel,
		getPath(field?: string, separator?: string): string,
		hasChildNodes(): boolean,
		indexOf(node?: Ext.data.INodeInterface): number,
		indexOfId(id?: string): number,
		insertBefore(
		node?: Ext.data.INodeInterface, refNode?: Ext.data.INodeInterface
	): Ext.data.INodeInterface,
		insertChild(index?: number, node?: Ext.data.INodeInterface): Ext.data.INodeInterface,
		isAncestor(node?: Ext.data.INodeInterface): boolean,
		isExpandable(): boolean,
		isExpanded(): boolean,
		isLeaf(): boolean,
		isLoaded(): boolean,
		isLoading(): boolean,
		isRoot(): boolean,
		isVisible(): boolean,
		remove(destroy?: boolean): Ext.data.INodeInterface,
		removeAll(destroy?: boolean): Ext.data.INodeInterface,
		removeChild(node?: Ext.data.INodeInterface, destroy?: boolean): Ext.data.INodeInterface,
		replaceChild(
		newChild?: Ext.data.INodeInterface, oldChild?: Ext.data.INodeInterface
	): Ext.data.INodeInterface,
		serialize(): void,
		sort(fn?: any, recursive?: boolean, suppressEvent?: boolean): void,
		updateInfo(commit?: boolean, info?: any): void
	}

	declare export interface INodeStore {
		node?: Ext.data.IModel,
		recursive?: boolean,
		rootVisible?: boolean,
		treeStore?: Ext.data.ITreeStore,
		isExpandingOrCollapsing?: number,
		isNodeStore?: boolean,
		getTotalCount(): number
	}

	declare export interface IOperation {
		action?: string,
		batch?: Ext.data.IBatch,
		callback?: any,
		filters?: Ext.util.IFilter[],
		groupers?: Ext.util.IGrouper[],
		limit?: number,
		params?: any,
		scope?: any,
		sorters?: Ext.util.ISorter[],
		start?: number,
		synchronous?: boolean,
		actionCommitRecordsRe?: RegExp,
		actionSkipSyncRe?: RegExp,
		allowWrite(): boolean,
		commitRecords(serverRecords?: Ext.data.IModel[]): void,
		getError(): any,
		getRecords(): Ext.data.IModel[],
		getResultSet(): Ext.data.IResultSet,
		hasException(): boolean,
		isComplete(): boolean,
		isRunning(): boolean,
		isStarted(): boolean,
		setCompleted(): void,
		setException(error?: any): void,
		setStarted(): void,
		setSuccessful(): void,
		wasSuccessful(): boolean
	}

	declare export interface IPageMap {
		clear(initial?: any): Ext.util.IHashMap,
		findBy(fn?: any, scope?: any): any,
		findIndexBy(fn?: any, scope?: any): number,
		getCount(): number,
		remove(): boolean
	}

	declare export interface IHttpProxy {
		binary?: boolean,
		headers?: any,
		actionMethods?: any,
		getMethod(request?: Ext.data.IRequest): string
	}

	declare export interface IAjaxProxy {
		binary?: boolean,
		headers?: any,
		actionMethods?: any,
		getMethod(request?: Ext.data.IRequest): string
	}

	declare export interface IClientProxy {
		isSynchronous?: boolean,
		clear(): void
	}

	declare export interface IDirectProxy {
		api?: any,
		directFn?: any,
		extraParams?: any,
		paramOrder?: any,
		paramsAsHash?: boolean,
		buildUrl(): string,
		doRequest(operation?: any, callback?: any, scope?: any): void
	}

	declare export interface IScriptTagProxy {
		autoAppendParams?: boolean,
		callbackKey?: string,
		recordParam?: string,
		abort(): void,
		buildUrl(request?: Ext.data.IRequest): string,
		encodeRecords(records?: Ext.data.IModel[]): any[]
	}

	declare export interface ILocalStorageProxy {
		
	}

	declare export interface IMemoryProxy {
		data?: any,
		enablePaging?: boolean,
		clear(): void,
		create(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		destroy(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		read(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		update(operation?: Ext.data.IOperation, callback?: any, scope?: any): void
	}

	declare export interface IDataProxy {
		batchActions?: boolean,
		batchOrder?: string,
		model?: any,
		reader?: any,
		writer?: any,
		isProxy?: boolean,
		isSynchronous?: boolean,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		batch(options?: any): Ext.data.IBatch,
		clearListeners(): void,
		clearManagedListeners(): void,
		create(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		destroy(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getModel(): Ext.data.IModel,
		getReader(): Ext.data.reader.IReader,
		getWriter(): Ext.data.writer.IWriter,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		read(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		setModel(model?: any, setOnStore?: boolean): void,
		setReader(reader?: any): Ext.data.reader.IReader,
		setWriter(writer?: any): Ext.data.writer.IWriter,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void,
		update(operation?: Ext.data.IOperation, callback?: any, scope?: any): void
	}

	declare export interface IProxy {
		batchActions?: boolean,
		batchOrder?: string,
		model?: any,
		reader?: any,
		writer?: any,
		isProxy?: boolean,
		isSynchronous?: boolean,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		batch(options?: any): Ext.data.IBatch,
		clearListeners(): void,
		clearManagedListeners(): void,
		create(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		destroy(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getModel(): Ext.data.IModel,
		getReader(): Ext.data.reader.IReader,
		getWriter(): Ext.data.writer.IWriter,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		read(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		setModel(model?: any, setOnStore?: boolean): void,
		setReader(reader?: any): Ext.data.reader.IReader,
		setWriter(writer?: any): Ext.data.writer.IWriter,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void,
		update(operation?: Ext.data.IOperation, callback?: any, scope?: any): void
	}

	declare export interface IRestProxy {
		appendId?: boolean,
		batchActions?: boolean,
		format?: string,
		actionMethods?: any
	}

	declare export interface IServerProxy {
		api?: any,
		cacheString?: string,
		directionParam?: string,
		extraParams?: any,
		filterParam?: string,
		groupDirectionParam?: string,
		groupParam?: string,
		idParam?: string,
		limitParam?: string,
		noCache?: boolean,
		pageParam?: string,
		simpleGroupMode?: boolean,
		simpleSortMode?: boolean,
		sortParam?: string,
		startParam?: string,
		timeout?: number,
		url?: string,
		afterRequest(request?: Ext.data.IRequest, success?: boolean): void,
		buildRequest(operation?: Ext.data.IOperation): Ext.data.IRequest,
		buildUrl(request?: Ext.data.IRequest): string,
		create(): void,
		destroy(): void,
		doRequest(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		encodeFilters(filters?: Ext.util.IFilter[]): string,
		encodeSorters(sorters?: Ext.util.ISorter[]): string,
		read(): void,
		setExtraParam(name?: string, value?: any): void,
		update(): void
	}

	declare export interface ISessionStorageProxy {
		
	}

	declare export interface IWebStorageProxy {
		id?: string,
		cache?: any,
		clear(): void,
		create(operation?: any, callback?: any, scope?: any): void,
		destroy(operation?: any, callback?: any, scope?: any): void,
		read(operation?: any, callback?: any, scope?: any): void,
		setRecord(record?: Ext.data.IModel, id?: string): void,
		update(operation?: any, callback?: any, scope?: any): void
	}

	declare export interface IArrayReader {
		successProperty?: string,
		totalProperty?: string
	}

	declare export interface IJsonReader {
		metaProperty?: string,
		record?: string,
		root?: string,
		useSimpleAccessors?: boolean,
		jsonData?: any,
		getResponseData(response?: any): Ext.data.IResultSet,
		readRecords(data?: any): Ext.data.IResultSet
	}

	declare export interface IReader {
		idProperty?: string,
		implicitIncludes?: boolean,
		messageProperty?: string,
		readRecordsOnFailure?: boolean,
		root?: string,
		successProperty?: string,
		totalProperty?: string,
		metaData?: any,
		rawData?: any,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getResponseData(response?: any): Ext.data.IResultSet,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		read(response?: any): Ext.data.IResultSet,
		readRecords(data?: any): Ext.data.IResultSet,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IDataReader {
		idProperty?: string,
		implicitIncludes?: boolean,
		messageProperty?: string,
		readRecordsOnFailure?: boolean,
		root?: string,
		successProperty?: string,
		totalProperty?: string,
		metaData?: any,
		rawData?: any,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getResponseData(response?: any): Ext.data.IResultSet,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		read(response?: any): Ext.data.IResultSet,
		readRecords(data?: any): Ext.data.IResultSet,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IXmlReader {
		namespace?: string,
		record?: string,
		xmlData?: any,
		getData(data?: any): any,
		getResponseData(response?: any): Ext.data.IResultSet,
		readRecords(doc?: any): Ext.data.IResultSet
	}

	declare export interface IRequest {
		action?: string,
		method?: string,
		params?: any,
		url?: string
	}

	declare export interface IResultSet {
		count?: number,
		loaded?: boolean,
		records?: Ext.data.IModel[],
		success?: boolean,
		total?: number,
		totalRecords?: number
	}

	declare export interface ISequentialIdGenerator {
		prefix?: string,
		seed?: number,
		generate(): string
	}

	declare export interface ISortTypes {
		
	}

	declare export interface IStore {
		autoDestroy?: boolean,
		buffered?: boolean,
		clearOnPageLoad?: boolean,
		clearRemovedOnLoad?: boolean,
		data?: any,
		groupDir?: string,
		groupField?: string,
		groupers?: Ext.util.IMixedCollection,
		leadingBufferZone?: number,
		pageSize?: number,
		proxy?: any,
		purgePageCount?: number,
		remoteFilter?: boolean,
		remoteGroup?: boolean,
		remoteSort?: boolean,
		sortOnFilter?: boolean,
		trailingBufferZone?: number,
		currentPage?: number,
		snapshot?: Ext.util.IMixedCollection,
		add(model?: any): Ext.data.IModel[],
		addFilter(filters?: any, applyFilters?: boolean): void,
		addSorted(record?: Ext.data.IRecord): void,
		aggregate(fn?: any, scope?: any, grouped?: boolean, args?: any[]): any,
		average(field?: string, grouped?: boolean): any,
		clearFilter(suppressEvent?: boolean): void,
		clearGrouping(): void,
		collect(dataIndex?: string, allowNull?: boolean, bypassFilter?: boolean): any[],
		commitChanges(): void,
		count(grouped?: boolean): number,
		each(fn?: any, scope?: any): void,
		filter(filters?: any, value?: string): void,
		filterBy(fn?: any, scope?: any): void,
		find(
		fieldName?: string, value?: any, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean
	): number,
		findBy(fn?: any, scope?: any, startIndex?: number): number,
		findExact(fieldName?: string, value?: any, startIndex?: number): number,
		findRecord(
		fieldName?: string, value?: any, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean
	): Ext.data.IModel,
		first(grouped?: boolean): any,
		getAt(index?: number): Ext.data.IModel,
		getById(id?: any): Ext.data.IModel,
		getCount(): number,
		getGroupString(instance?: Ext.data.IModel): string,
		getGroups(groupName?: string): any,
		getNewRecords(): Ext.data.IModel[],
		getPageFromRecordIndex(index?: number): number,
		getRange(start?: number, end?: number, options?: any): Ext.data.IModel[],
		getTotalCount(): number,
		getUpdatedRecords(): Ext.data.IModel[],
		group(groupers?: any, direction?: string): void,
		guaranteeRange(start?: any, end?: any, callback?: any, scope?: any, options?: any): void,
		indexOf(record?: Ext.data.IModel): number,
		indexOfId(id?: string): number,
		indexOfTotal(record?: Ext.data.IModel): number,
		insert(index?: number, records?: Ext.data.IModel[]): Ext.data.IModel[],
		isFiltered(): boolean,
		isGrouped(): boolean,
		last(grouped?: boolean): any,
		load(options?: any): void,
		loadData(data?: any, append?: boolean): void,
		loadPage(page?: number, options?: any): void,
		loadRawData(data?: any[], append?: boolean): void,
		loadRecords(records?: Ext.data.IModel[], options?: any): void,
		max(field?: string, grouped?: boolean): any,
		min(field?: string, grouped?: boolean): any,
		nextPage(options?: any): void,
		prefetch(options?: any): void,
		prefetchPage(page?: number, options?: any): void,
		prefetchRange(start?: any, end?: any): void,
		previousPage(options?: any): void,
		query(
		property?: string, value?: any, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean
	): Ext.util.IMixedCollection,
		queryBy(fn?: any, scope?: any): Ext.util.IMixedCollection,
		rejectChanges(): void,
		reload(options?: any): void,
		remove(records?: any): void,
		removeAll(silent?: boolean): void,
		removeAt(index?: number, count?: number): void,
		removeFilter(toRemove?: any, applyFilters?: boolean): void,
		sort(): Ext.util.ISorter[],
		sum(field?: string, grouped?: boolean): number
	}

	declare export interface IStoreManager {
		
	}

	declare export interface IStoreMgr {
		
	}

	declare export interface ITree {
		root?: Ext.data.INodeInterface,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getNodeById(id?: string): Ext.data.INodeInterface,
		getRootNode(): Ext.data.INodeInterface,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		removeRootNode(): Ext.data.INodeInterface,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		setRootNode(node?: Ext.data.INodeInterface): Ext.data.INodeInterface,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface ITreeModel {
		
	}

	declare export interface ITreeStore {
		clearOnLoad?: boolean,
		clearRemovedOnLoad?: boolean,
		defaultRootId?: string,
		defaultRootProperty?: string,
		defaultRootText?: string,
		folderSort?: boolean,
		nodeParam?: string,
		root?: any,
		getNewRecords(): Ext.data.IModel[],
		getNodeById(id?: any): Ext.data.INodeInterface,
		getRootNode(): Ext.data.INodeInterface,
		getUpdatedRecords(): Ext.data.IModel[],
		load(options?: any): void,
		removeAll(): void,
		setProxy(proxy?: any): Ext.data.proxy.IProxy,
		setRootNode(root?: any): Ext.data.INodeInterface
	}

	declare export interface ITypes {
		
	}

	declare export interface IUuidGenerator {
		version?: number,
		salt?: any,
		timestamp?: any,
		reconfigure(config?: any): void
	}

	declare export interface IValidations {
		
	}

	declare export interface IJsonWriter {
		allowSingle?: boolean,
		encode?: boolean,
		expandData?: boolean,
		root?: string,
		getExpandedData(data?: any): void
	}

	declare export interface IDataWriter {
		dateFormat?: string,
		nameProperty?: string,
		writeAllFields?: boolean,
		writeRecordId?: boolean,
		getRecordData(record?: Ext.data.IModel, operation?: Ext.data.IOperation): any,
		write(request?: Ext.data.IRequest): Ext.data.IRequest
	}

	declare export interface IWriter {
		dateFormat?: string,
		nameProperty?: string,
		writeAllFields?: boolean,
		writeRecordId?: boolean,
		getRecordData(record?: Ext.data.IModel, operation?: Ext.data.IOperation): any,
		write(request?: Ext.data.IRequest): Ext.data.IRequest
	}

	declare export interface IXmlWriter {
		defaultDocumentRoot?: string,
		documentRoot?: string,
		header?: string,
		record?: string
	}

	declare export interface IXmlStore {
		
	}

		declare export class AbstractStore  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(store?: any): Ext.data.IAbstractStore;
		createAlias(alias?: any, origin?: any): void;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase
	}

	declare export class IdGenerator  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		get(config?: any): void;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase
	}

	declare export class JsonP  {
		callbackKey: string;
		disableCaching: boolean;
		disableCachingParam: string;
		self: Ext.IClass;
		timeout: number;
		abort(request?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		request(options?: any): any;
		statics(): Ext.IClass
	}

	declare export class Model  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		getFields(): Ext.data.IField[];
		getName(): string;
		getProxy(): Ext.data.proxy.IProxy;
		id(rec?: Ext.data.IModel): string;
		implement(): void;
		load(id?: any, config?: any): void;
		override(members?: any): Ext.IBase;
		setFields(fields?: any, idProperty?: any, clientIdProperty?: any): void;
		setProxy(proxy?: any): Ext.data.proxy.IProxy
	}

	declare export class Record  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		getFields(): Ext.data.IField[];
		getName(): string;
		getProxy(): Ext.data.proxy.IProxy;
		id(rec?: Ext.data.IModel): string;
		implement(): void;
		load(id?: any, config?: any): void;
		override(members?: any): Ext.IBase;
		setFields(fields?: any, idProperty?: any, clientIdProperty?: any): void;
		setProxy(proxy?: any): Ext.data.proxy.IProxy
	}

	declare export class NodeInterface  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		decorate(modelClass?: any): void;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase
	}

	declare export class SortTypes  {
		self: Ext.IClass;
		stripTagsRE: RegExp;
		asDate(s?: any): number;
		asFloat(s?: any): number;
		asInt(s?: any): number;
		asText(s?: any): string;
		asUCString(s?: any): string;
		asUCText(s?: any): string;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		none(s?: any): any;
		statics(): Ext.IClass
	}

	declare export class StoreManager  {
		hasListeners: any;
		isMixedCollection: boolean;
		isObservable: boolean;
		isSortable: boolean;
		self: Ext.IClass;
		sorters: Ext.util.IMixedCollection;
		add(key?: any, obj?: any): any;
		addAll(objs?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(): void;
		clearListeners(): void;
		clearManagedListeners(): void;
		clone(): Ext.util.IMixedCollection;
		collect(property?: string, root?: string, allowBlank?: boolean): any[];
		contains(o?: any): boolean;
		containsKey(key?: string): boolean;
		each(fn?: any, scope?: any): void;
		eachKey(fn?: any, scope?: any): void;
		enableBubble(eventNames?: any): void;
		filter(
		property?: any, value?: any, anyMatch?: boolean, caseSensitive?: boolean
	): Ext.util.IMixedCollection;
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection;
		find(): void;
		findBy(fn?: any, scope?: any): any;
		findIndex(
		property?: string, value?: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean
	): number;
		findIndexBy(fn?: any, scope?: any, start?: number): number;
		findInsertionIndex(newItem?: any, sorterFn?: any): number;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		first(): any;
		generateComparator(): void;
		get(key?: any): any;
		getAt(index?: number): any;
		getByKey(key?: any): any;
		getCount(): number;
		getFirstSorter(): Ext.util.ISorter;
		getInitialConfig(name?: string): any;
		getKey(o?: any): any;
		getRange(startIndex?: number, endIndex?: number): any[];
		hasListener(eventName?: string): boolean;
		indexOf(o?: any): number;
		indexOfKey(key?: string): number;
		initConfig(config?: any): Ext.IBase;
		initSortable(): void;
		insert(index?: number, key?: any, o?: any): any;
		last(): any;
		lookup(store?: any): Ext.data.IStore;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		register(stores: Ext.data.IStore): void;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		remove(o?: any): any;
		removeAll(items?: any[]): Ext.util.IMixedCollection;
		removeAt(index?: number): any;
		removeAtKey(key?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeRange(index?: number, removeCount?: number): any;
		reorder(mapping?: any): void;
		replace(key?: string, o?: any): any;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		sort(sorters?: any, direction?: string): Ext.util.ISorter[];
		sortBy(sorterFn?: any): void;
		sortByKey(direction?: string, fn?: any): void;
		statics(): Ext.IClass;
		sum(property?: string, root?: string, start?: number, end?: number): number;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void;
		unregister(stores?: any): void;
		updateKey(oldKey?: any, newKey?: any): void
	}

	declare export class StoreMgr  {
		hasListeners: any;
		isMixedCollection: boolean;
		isObservable: boolean;
		isSortable: boolean;
		self: Ext.IClass;
		sorters: Ext.util.IMixedCollection;
		add(key?: any, obj?: any): any;
		addAll(objs?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(): void;
		clearListeners(): void;
		clearManagedListeners(): void;
		clone(): Ext.util.IMixedCollection;
		collect(property?: string, root?: string, allowBlank?: boolean): any[];
		contains(o?: any): boolean;
		containsKey(key?: string): boolean;
		each(fn?: any, scope?: any): void;
		eachKey(fn?: any, scope?: any): void;
		enableBubble(eventNames?: any): void;
		filter(
		property?: any, value?: any, anyMatch?: boolean, caseSensitive?: boolean
	): Ext.util.IMixedCollection;
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection;
		find(): void;
		findBy(fn?: any, scope?: any): any;
		findIndex(
		property?: string, value?: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean
	): number;
		findIndexBy(fn?: any, scope?: any, start?: number): number;
		findInsertionIndex(newItem?: any, sorterFn?: any): number;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		first(): any;
		generateComparator(): void;
		get(key?: any): any;
		getAt(index?: number): any;
		getByKey(key?: any): any;
		getCount(): number;
		getFirstSorter(): Ext.util.ISorter;
		getInitialConfig(name?: string): any;
		getKey(o?: any): any;
		getRange(startIndex?: number, endIndex?: number): any[];
		hasListener(eventName?: string): boolean;
		indexOf(o?: any): number;
		indexOfKey(key?: string): number;
		initConfig(config?: any): Ext.IBase;
		initSortable(): void;
		insert(index?: number, key?: any, o?: any): any;
		last(): any;
		lookup(store?: any): Ext.data.IStore;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		register(stores: Ext.data.IStore): void;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		remove(o?: any): any;
		removeAll(items?: any[]): Ext.util.IMixedCollection;
		removeAt(index?: number): any;
		removeAtKey(key?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeRange(index?: number, removeCount?: number): any;
		reorder(mapping?: any): void;
		replace(key?: string, o?: any): any;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		sort(sorters?: any, direction?: string): Ext.util.ISorter[];
		sortBy(sorterFn?: any): void;
		sortByKey(direction?: string, fn?: any): void;
		statics(): Ext.IClass;
		sum(property?: string, root?: string, start?: number, end?: number): number;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void;
		unregister(stores?: any): void;
		updateKey(oldKey?: any, newKey?: any): void
	}

	declare export class Types  {
		AUTO: any;
		BOOL: any;
		BOOLEAN: any;
		DATE: any;
		FLOAT: any;
		INT: any;
		INTEGER: any;
		NUMBER: any;
		STRING: any;
		self: Ext.IClass;
		stripRe: RegExp;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	declare export class Validations  {
		emailMessage: string;
		emailRe: RegExp;
		exclusionMessage: string;
		formatMessage: string;
		inclusionMessage: string;
		lengthMessage: string;
		presenceMessage: string;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		email(config?: any, email?: string): boolean;
		exclusion(config?: any, value?: string): boolean;
		format(config?: any, value?: string): boolean;
		getInitialConfig(name?: string): any;
		inclusion(config?: any, value?: string): boolean;
		initConfig(config?: any): Ext.IBase;
		length(config?: any, value?: string): boolean;
		presence(config?: any, value?: any): boolean;
		statics(): Ext.IClass
	}

	
}

declare module 'association' {
		declare export interface IAssociation {
		associatedModel?: string,
		associationKey?: string,
		model?: string,
		ownerModel?: string,
		primaryKey?: string,
		reader?: Ext.data.reader.IReader,
		associatedName?: string,
		ownerName?: string,
		getReader(): Ext.data.reader.IReader
	}

	declare export interface IBelongsTo {
		foreignKey?: string,
		getterName?: string,
		setterName?: string,
		type?: string
	}

	declare export interface IHasMany {
		autoLoad?: boolean,
		filterProperty?: string,
		foreignKey?: string,
		name?: string,
		storeConfig?: any,
		type?: string
	}

	declare export interface IHasOne {
		foreignKey?: string,
		getterName?: string,
		setterName?: string,
		type?: string
	}

			
}

declare module 'flash' {
		declare export interface IBinaryXhr {
		readyState?: number,
		responseBytes?: any[],
		status?: number,
		statusText?: string,
		abort(): void,
		getAllResponseHeaders(): void,
		getResponseHeader(header?: any): void,
		onreadystatechange(): void,
		open(method?: any, url?: any, async?: any, user?: any, password?: any): void,
		overrideMimeType(mimeType?: any): void,
		send(body?: any[]): void,
		setRequestHeader(header?: any, value?: any): void
	}

	declare export interface IComponent {
		backgroundColor?: string,
		expressInstall?: boolean,
		flashAttributes?: any,
		flashParams?: any,
		flashVars?: any,
		flashVersion?: string,
		renderTpl?: any,
		swfHeight?: any,
		swfWidth?: any,
		url?: string,
		wmode?: string,
		swf?: Ext.IElement,
		EXPRESS_INSTALL_URL?: string,
		afterRender(): void,
		beforeDestroy(): void,
		getSwfId(): void,
		initComponent(): void
	}

			
}

declare module 'proxy' {
		declare export interface IAjax {
		binary?: boolean,
		headers?: any,
		actionMethods?: any,
		getMethod(request?: Ext.data.IRequest): string
	}

	declare export interface IClient {
		isSynchronous?: boolean,
		clear(): void
	}

	declare export interface IDirect {
		api?: any,
		directFn?: any,
		extraParams?: any,
		paramOrder?: any,
		paramsAsHash?: boolean,
		buildUrl(): string,
		doRequest(operation?: any, callback?: any, scope?: any): void
	}

	declare export interface IJsonP {
		autoAppendParams?: boolean,
		callbackKey?: string,
		recordParam?: string,
		abort(): void,
		buildUrl(request?: Ext.data.IRequest): string,
		encodeRecords(records?: Ext.data.IModel[]): any[]
	}

	declare export interface ILocalStorage {
		
	}

	declare export interface IMemory {
		data?: any,
		enablePaging?: boolean,
		clear(): void,
		create(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		destroy(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		read(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		update(operation?: Ext.data.IOperation, callback?: any, scope?: any): void
	}

	declare export interface IProxy {
		batchActions?: boolean,
		batchOrder?: string,
		model?: any,
		reader?: any,
		writer?: any,
		isProxy?: boolean,
		isSynchronous?: boolean,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		batch(options?: any): Ext.data.IBatch,
		clearListeners(): void,
		clearManagedListeners(): void,
		create(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		destroy(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getModel(): Ext.data.IModel,
		getReader(): Ext.data.reader.IReader,
		getWriter(): Ext.data.writer.IWriter,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		read(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		setModel(model?: any, setOnStore?: boolean): void,
		setReader(reader?: any): Ext.data.reader.IReader,
		setWriter(writer?: any): Ext.data.writer.IWriter,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void,
		update(operation?: Ext.data.IOperation, callback?: any, scope?: any): void
	}

	declare export interface IRest {
		appendId?: boolean,
		batchActions?: boolean,
		format?: string,
		actionMethods?: any
	}

	declare export interface IServer {
		api?: any,
		cacheString?: string,
		directionParam?: string,
		extraParams?: any,
		filterParam?: string,
		groupDirectionParam?: string,
		groupParam?: string,
		idParam?: string,
		limitParam?: string,
		noCache?: boolean,
		pageParam?: string,
		simpleGroupMode?: boolean,
		simpleSortMode?: boolean,
		sortParam?: string,
		startParam?: string,
		timeout?: number,
		url?: string,
		afterRequest(request?: Ext.data.IRequest, success?: boolean): void,
		buildRequest(operation?: Ext.data.IOperation): Ext.data.IRequest,
		buildUrl(request?: Ext.data.IRequest): string,
		create(): void,
		destroy(): void,
		doRequest(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		encodeFilters(filters?: Ext.util.IFilter[]): string,
		encodeSorters(sorters?: Ext.util.ISorter[]): string,
		read(): void,
		setExtraParam(name?: string, value?: any): void,
		update(): void
	}

	declare export interface ISessionStorage {
		
	}

	declare export interface IWebStorage {
		id?: string,
		cache?: any,
		clear(): void,
		create(operation?: any, callback?: any, scope?: any): void,
		destroy(operation?: any, callback?: any, scope?: any): void,
		read(operation?: any, callback?: any, scope?: any): void,
		setRecord(record?: Ext.data.IModel, id?: string): void,
		update(operation?: any, callback?: any, scope?: any): void
	}

			
}

declare module 'reader' {
		declare export interface IArray {
		successProperty?: string,
		totalProperty?: string
	}

	declare export interface IJson {
		metaProperty?: string,
		record?: string,
		root?: string,
		useSimpleAccessors?: boolean,
		jsonData?: any,
		getResponseData(response?: any): Ext.data.IResultSet,
		readRecords(data?: any): Ext.data.IResultSet
	}

	declare export interface IReader {
		idProperty?: string,
		implicitIncludes?: boolean,
		messageProperty?: string,
		readRecordsOnFailure?: boolean,
		root?: string,
		successProperty?: string,
		totalProperty?: string,
		metaData?: any,
		rawData?: any,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getResponseData(response?: any): Ext.data.IResultSet,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		read(response?: any): Ext.data.IResultSet,
		readRecords(data?: any): Ext.data.IResultSet,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IXml {
		namespace?: string,
		record?: string,
		xmlData?: any,
		getData(data?: any): any,
		getResponseData(response?: any): Ext.data.IResultSet,
		readRecords(doc?: any): Ext.data.IResultSet
	}

			
}

declare module 'writer' {
		declare export interface IJson {
		allowSingle?: boolean,
		encode?: boolean,
		expandData?: boolean,
		root?: string,
		getExpandedData(data?: any): void
	}

	declare export interface IWriter {
		dateFormat?: string,
		nameProperty?: string,
		writeAllFields?: boolean,
		writeRecordId?: boolean,
		getRecordData(record?: Ext.data.IModel, operation?: Ext.data.IOperation): any,
		write(request?: Ext.data.IRequest): Ext.data.IRequest
	}

	declare export interface IXml {
		defaultDocumentRoot?: string,
		documentRoot?: string,
		header?: string,
		record?: string
	}

			
}

declare module 'dd' {
		declare export interface IDD {
		scroll?: boolean,
		alignElWithMouse(el?: HTMLElement, iPageX?: number, iPageY?: number): void,
		applyConfig(): void,
		autoOffset(iPageX?: number, iPageY?: number): void,
		b4Drag(e?: any): void,
		b4MouseDown(e?: any): void,
		cachePosition(iPageX?: number, iPageY?: number): void,
		setDelta(iDeltaX?: number, iDeltaY?: number): void,
		setDragElPos(iPageX?: number, iPageY?: number): void,
		toString(): string
	}

	declare export interface IDDProxy {
		centerFrame?: boolean,
		resizeFrame?: boolean,
		dragElId?: string,
		applyConfig(): void,
		b4MouseDown(e?: any): void,
		createFrame(): void,
		endDrag(e?: any): void,
		initFrame(): void,
		toString(): string
	}

	declare export interface IDDTarget {
		toString(): string
	}

	declare export interface IDragDrop {
		available?: boolean,
		config?: any,
		defaultPadding?: any,
		groups?: any,
		hasOuterHandles?: boolean,
		id?: string,
		ignoreSelf?: boolean,
		invalidHandleClasses?: string[],
		invalidHandleIds?: any,
		invalidHandleTypes?: any,
		isTarget?: boolean,
		maintainOffset?: boolean,
		moveOnly?: boolean,
		padding?: number[],
		primaryButtonOnly?: boolean,
		xTicks?: number[],
		yTicks?: number[],
		addInvalidHandleClass(cssClass?: string): void,
		addInvalidHandleId(id?: string): void,
		addInvalidHandleType(tagName?: string): void,
		addToGroup(sGroup?: string): void,
		applyConfig(): void,
		clearConstraints(): void,
		clearTicks(): void,
		constrainTo(constrainTo?: any, pad?: any, inContent?: boolean): void,
		destroy(): void,
		endDrag(e?: Event): void,
		getDragEl(): HTMLElement,
		getEl(): HTMLElement,
		init(id?: string, sGroup?: string, config?: any): void,
		initTarget(id?: string, sGroup?: string, config?: any): void,
		isLocked(): boolean,
		isValidHandleChild(node?: HTMLElement): boolean,
		lock(): void,
		onAvailable(): void,
		onDrag(e?: Event): void,
		onDragDrop(e?: Event, id?: any): void,
		onDragEnter(e?: Event, id?: any): void,
		onDragOut(e?: Event, id?: any): void,
		onDragOver(e?: Event, id?: any): void,
		onInvalidDrop(e?: Event): void,
		onMouseDown(e?: Event): void,
		onMouseUp(e?: Event): void,
		removeFromGroup(sGroup?: string): void,
		removeInvalidHandleClass(cssClass?: string): void,
		removeInvalidHandleId(id?: string): void,
		removeInvalidHandleType(tagName?: string): void,
		resetConstraints(maintainOffset?: boolean): void,
		setDragElId(id?: string): void,
		setHandleElId(id?: string): void,
		setInitPosition(diffX?: number, diffY?: number): void,
		setOuterHandleElId(id?: string): void,
		setPadding(iTop?: number, iRight?: number, iBot?: number, iLeft?: number): void,
		setXConstraint(iLeft?: number, iRight?: number, iTickSize?: number): void,
		setYConstraint(iUp?: number, iDown?: number, iTickSize?: number): void,
		startDrag(x?: number, y?: number): void,
		toString(): string,
		unlock(): void,
		unreg(): void
	}

	declare export interface IDragDropElement {
		getPosX(el?: HTMLElement): number,
		getPosY(el?: HTMLElement): number,
		getScrollLeft(): number,
		getScrollTop(): number,
		getStyle(el?: HTMLElement, styleProp?: string): string,
		handleWasClicked(node?: HTMLElement): void,
		moveToEl(moveEl?: HTMLElement, targetEl?: HTMLElement): void,
		numericSort(a?: number, b?: number): number,
		swapNode(n1?: HTMLElement, n2?: HTMLElement): void
	}

	declare export interface IDragDropManager {
		
	}

	declare export interface IDragDropMgr {
		
	}

	declare export interface IDDM {
		
	}

	declare export interface IDragSource {
		animRepair?: boolean,
		ddGroup?: string,
		dropAllowed?: string,
		dropNotAllowed?: string,
		repairHighlightColor?: string,
		dragData?: any,
		afterDragDrop(target?: Ext.dd.IDragDrop, e?: Event, id?: string): void,
		afterDragEnter(target?: Ext.dd.IDragDrop, e?: Event, id?: string): void,
		afterDragOut(target?: Ext.dd.IDragDrop, e?: Event, id?: string): void,
		afterDragOver(target?: Ext.dd.IDragDrop, e?: Event, id?: string): void,
		afterInvalidDrop(e?: Event, id?: string): void,
		afterValidDrop(target?: any, e?: Event, id?: string): void,
		alignElWithMouse(): void,
		beforeDragDrop(target?: Ext.dd.IDragDrop, e?: Event, id?: string): boolean,
		beforeDragEnter(target?: Ext.dd.IDragDrop, e?: Event, id?: string): boolean,
		beforeDragOut(target?: Ext.dd.IDragDrop, e?: Event, id?: string): boolean,
		beforeDragOver(target?: Ext.dd.IDragDrop, e?: Event, id?: string): boolean,
		beforeInvalidDrop(target?: Ext.dd.IDragDrop, e?: Event, id?: string): boolean,
		destroy(): void,
		getDragData(e?: any): any,
		getProxy(): Ext.dd.IStatusProxy,
		hideProxy(): void,
		onBeforeDrag(data?: any, e?: Event): boolean,
		onStartDrag(x?: number, y?: number): void
	}

	declare export interface IDragTracker {
		autoStart?: any,
		constrainTo?: any,
		delegate?: string,
		overCls?: string,
		preventDefault?: boolean,
		stopEvent?: boolean,
		tolerance?: number,
		trackOver?: boolean,
		active?: boolean,
		dragTarget?: HTMLElement,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getDragTarget(): Ext.IElement,
		getOffset(constrainMode?: string): number[],
		hasListener(eventName?: string): boolean,
		initEl(el?: any): void,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		onBeforeStart(e?: Ext.IEventObject): void,
		onDrag(e?: Ext.IEventObject): void,
		onEnd(e?: Ext.IEventObject): void,
		onStart(e?: Ext.IEventObject): void,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IDragZone {
		containerScroll?: any,
		scrollEl?: any,
		destroy(): void,
		getDragData(e?: Event): any,
		getRepairXY(e?: Event): number[],
		onInitDrag(x?: number, y?: number): boolean
	}

	declare export interface IDropTarget {
		ddGroup?: string,
		dropAllowed?: string,
		dropNotAllowed?: string,
		overClass?: string,
		isTarget?: boolean,
		destroy(): void,
		notifyDrop(source?: Ext.dd.IDragSource, e?: Event, data?: any): boolean,
		notifyEnter(source?: Ext.dd.IDragSource, e?: Event, data?: any): string,
		notifyOut(source?: Ext.dd.IDragSource, e?: Event, data?: any): void,
		notifyOver(source?: Ext.dd.IDragSource, e?: Event, data?: any): string
	}

	declare export interface IDropZone {
		getTargetFromEvent(e?: Event): any,
		notifyDrop(source?: Ext.dd.IDragSource, e?: Event, data?: any): boolean,
		notifyEnter(source?: Ext.dd.IDragSource, e?: Event, data?: any): string,
		notifyOut(source?: Ext.dd.IDragSource, e?: Event, data?: any): void,
		notifyOver(source?: Ext.dd.IDragSource, e?: Event, data?: any): string,
		onContainerDrop(source?: Ext.dd.IDragSource, e?: Event, data?: any): boolean,
		onContainerOver(source?: Ext.dd.IDragSource, e?: Event, data?: any): string,
		onNodeDrop(nodeData?: any, source?: Ext.dd.IDragSource, e?: Event, data?: any): boolean,
		onNodeEnter(nodeData?: any, source?: Ext.dd.IDragSource, e?: Event, data?: any): void,
		onNodeOut(nodeData?: any, source?: Ext.dd.IDragSource, e?: Event, data?: any): void,
		onNodeOver(nodeData?: any, source?: Ext.dd.IDragSource, e?: Event, data?: any): string
	}

	declare export interface IRegistry {
		
	}

	declare export interface IScrollManager {
		
	}

	declare export interface IStatusProxy {
		dropAllowed?: string,
		dropNotAllowed?: string,
		renderTpl?: any,
		getGhost(): Ext.IElement,
		repair(xy?: number[], callback?: any, scope?: any): void,
		reset(clearGhost?: boolean): void,
		setStatus(cssClass?: string): void,
		stop(): void,
		sync(): void,
		update(html?: any): void
	}

	declare export interface IPanelProxy {
		insertProxy?: boolean,
		moveOnDrag?: boolean,
		panel?: Ext.panel.IPanel,
		getEl(): Ext.IElement,
		getGhost(): Ext.panel.IPanel,
		getProxy(): Ext.IElement,
		hide(): void,
		moveProxy(parentNode?: HTMLElement, before?: HTMLElement): void,
		show(): void
	}

		declare export class DragDropManager  {
		INTERSECT: number;
		POINT: number;
		clickPixelThresh: number;
		clickTimeThresh: number;
		dragCls: string;
		mode: number;
		notifyOccluded: boolean;
		preventDefault: boolean;
		self: Ext.IClass;
		stopPropagation: boolean;
		useCache: boolean;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getBestMatch(dds?: Ext.dd.IDragDrop[]): Ext.dd.IDragDrop;
		getCss(id?: string): any;
		getDDById(id?: string): Ext.dd.IDragDrop;
		getElement(id?: string): any;
		getInitialConfig(name?: string): any;
		getLocation(oDD?: Ext.dd.IDragDrop): Ext.util.IRegion;
		getRelated(p_oDD?: Ext.dd.IDragDrop, bTargetsOnly?: boolean): Ext.dd.IDragDrop[];
		initConfig(config?: any): Ext.IBase;
		isDragDrop(id?: string): boolean;
		isHandle(id?: string): boolean;
		isLegalTarget(oDD?: Ext.dd.IDragDrop, oTargetDD?: Ext.dd.IDragDrop): boolean;
		isLocked(): boolean;
		isTypeOfDD(the?: any): boolean;
		lock(): void;
		refreshCache(groups?: any): void;
		regDragDrop(oDD?: Ext.dd.IDragDrop, sGroup?: string): void;
		regHandle(sDDId?: string, sHandleId?: string): void;
		startDrag(x?: number, y?: number): void;
		statics(): Ext.IClass;
		stopEvent(e?: Event): void;
		unlock(): void;
		verifyEl(el?: HTMLElement): boolean
	}

	declare export class DragDropMgr  {
		INTERSECT: number;
		POINT: number;
		clickPixelThresh: number;
		clickTimeThresh: number;
		dragCls: string;
		mode: number;
		notifyOccluded: boolean;
		preventDefault: boolean;
		self: Ext.IClass;
		stopPropagation: boolean;
		useCache: boolean;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getBestMatch(dds?: Ext.dd.IDragDrop[]): Ext.dd.IDragDrop;
		getCss(id?: string): any;
		getDDById(id?: string): Ext.dd.IDragDrop;
		getElement(id?: string): any;
		getInitialConfig(name?: string): any;
		getLocation(oDD?: Ext.dd.IDragDrop): Ext.util.IRegion;
		getRelated(p_oDD?: Ext.dd.IDragDrop, bTargetsOnly?: boolean): Ext.dd.IDragDrop[];
		initConfig(config?: any): Ext.IBase;
		isDragDrop(id?: string): boolean;
		isHandle(id?: string): boolean;
		isLegalTarget(oDD?: Ext.dd.IDragDrop, oTargetDD?: Ext.dd.IDragDrop): boolean;
		isLocked(): boolean;
		isTypeOfDD(the?: any): boolean;
		lock(): void;
		refreshCache(groups?: any): void;
		regDragDrop(oDD?: Ext.dd.IDragDrop, sGroup?: string): void;
		regHandle(sDDId?: string, sHandleId?: string): void;
		startDrag(x?: number, y?: number): void;
		statics(): Ext.IClass;
		stopEvent(e?: Event): void;
		unlock(): void;
		verifyEl(el?: HTMLElement): boolean
	}

	declare export class DDM  {
		INTERSECT: number;
		POINT: number;
		clickPixelThresh: number;
		clickTimeThresh: number;
		dragCls: string;
		mode: number;
		notifyOccluded: boolean;
		preventDefault: boolean;
		self: Ext.IClass;
		stopPropagation: boolean;
		useCache: boolean;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getBestMatch(dds?: Ext.dd.IDragDrop[]): Ext.dd.IDragDrop;
		getCss(id?: string): any;
		getDDById(id?: string): Ext.dd.IDragDrop;
		getElement(id?: string): any;
		getInitialConfig(name?: string): any;
		getLocation(oDD?: Ext.dd.IDragDrop): Ext.util.IRegion;
		getRelated(p_oDD?: Ext.dd.IDragDrop, bTargetsOnly?: boolean): Ext.dd.IDragDrop[];
		initConfig(config?: any): Ext.IBase;
		isDragDrop(id?: string): boolean;
		isHandle(id?: string): boolean;
		isLegalTarget(oDD?: Ext.dd.IDragDrop, oTargetDD?: Ext.dd.IDragDrop): boolean;
		isLocked(): boolean;
		isTypeOfDD(the?: any): boolean;
		lock(): void;
		refreshCache(groups?: any): void;
		regDragDrop(oDD?: Ext.dd.IDragDrop, sGroup?: string): void;
		regHandle(sDDId?: string, sHandleId?: string): void;
		startDrag(x?: number, y?: number): void;
		statics(): Ext.IClass;
		stopEvent(e?: Event): void;
		unlock(): void;
		verifyEl(el?: HTMLElement): boolean
	}

	declare export class Registry  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getHandle(id?: any): any;
		getHandleFromEvent(e?: Event): any;
		getInitialConfig(name?: string): any;
		getTarget(id?: any): any;
		getTargetFromEvent(e?: Event): any;
		initConfig(config?: any): Ext.IBase;
		register(element?: any, data?: any): void;
		statics(): Ext.IClass;
		unregister(element?: any): void
	}

	declare export class ScrollManager  {
		animDuration: number;
		animate: boolean;
		ddGroup: string;
		frequency: number;
		hthresh: number;
		increment: number;
		self: Ext.IClass;
		vthresh: number;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		refreshCache(): void;
		register(el?: any): void;
		statics(): Ext.IClass;
		unregister(el?: any): void
	}

	
}

declare module 'dragdropmanager' {
		declare export interface IElementWrapper {
		css?: any,
		el?: any,
		id?: any
	}

			
}

declare module 'direct' {
		declare export interface IEvent {
		getData(): any,
		getName(): string
	}

	declare export interface IExceptionEvent {
		
	}

	declare export interface IJsonProvider {
		createEvent(response?: any): Ext.direct.IEvent,
		createEvents(response?: any): Ext.direct.IEvent[]
	}

	declare export interface IManager {
		
	}

	declare export interface IPollingProvider {
		baseParams?: any,
		interval?: number,
		url?: any,
		connect(): void,
		disconnect(): void,
		isConnected(): void
	}

	declare export interface IProvider {
		id?: string,
		relayedEvents?: string[],
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		connect(): void,
		disconnect(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		hasListener(eventName?: string): boolean,
		isConnected(): void,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IRemotingEvent {
		getTransaction(): Ext.direct.ITransaction
	}

	declare export interface IRemotingMethod {
		getCallData(args?: any[]): any
	}

	declare export interface IRemotingProvider {
		actions?: any,
		disableNestedActions?: boolean,
		enableBuffer?: any,
		enableUrlEncode?: string,
		maxRetries?: number,
		namespace?: any,
		timeout?: number,
		url?: string,
		connect(): void,
		disconnect(): void,
		isConnected(): void
	}

	declare export interface ITransaction {
		provider?: Ext.direct.IProvider
	}

		declare export class Manager  {
		exceptions: any;
		hasListeners: any;
		isObservable: boolean;
		self: Ext.IClass;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		addProvider(provider?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		clearManagedListeners(): void;
		enableBubble(eventNames?: any): void;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		getInitialConfig(name?: string): any;
		getProvider(id?: any): void;
		hasListener(eventName?: string): boolean;
		initConfig(config?: any): Ext.IBase;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		parseMethod(fn?: any): any;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeProvider(provider?: any): Ext.direct.IProvider;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		statics(): Ext.IClass;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void
	}

	
}

declare module 'dom' {
		declare export interface IAbstractElement {
		defaultUnit?: string,
		dom?: HTMLElement,
		id?: string,
		ASCLASS?: number,
		DISPLAY?: number,
		OFFSETS?: number,
		VISIBILITY?: number,
		addCls(className?: any): Ext.dom.IElement,
		appendChild(el?: any, returnDom?: boolean): Ext.dom.IAbstractElement,
		appendTo(el?: any): Ext.dom.IAbstractElement,
		applyStyles(styles?: any): Ext.dom.IElement,
		child(selector?: string, returnDom?: boolean): any,
		contains(el?: any): boolean,
		createChild(
		config?: any, insertBefore?: HTMLElement, returnDom?: boolean
	): Ext.dom.IAbstractElement,
		destroy(): void,
		down(selector?: string, returnDom?: boolean): any,
		findParent(selector?: string, limit?: any, returnEl?: boolean): HTMLElement,
		findParentNode(selector?: string, limit?: any, returnEl?: boolean): HTMLElement,
		first(selector?: string, returnDom?: boolean): any,
		getActiveElement(): HTMLElement,
		getAttribute(name?: string, namespace?: string): string,
		getBorderWidth(side?: string): number,
		getById(id?: string, asDom?: boolean): void,
		getHTML(): void,
		getHeight(contentHeight?: boolean): number,
		getMargin(sides?: string): any,
		getPadding(side?: string): number,
		getSize(contentSize?: boolean): any,
		getStyle(property?: any, inline?: boolean): any,
		getValue(asNumber?: boolean): any,
		getViewSize(): any,
		getWidth(contentWidth?: boolean): number,
		hasCls(className?: string): boolean,
		hide(animate?: any): Ext.dom.IElement,
		insertAfter(el?: any): Ext.dom.IAbstractElement,
		insertBefore(el?: any): Ext.dom.IAbstractElement,
		insertFirst(el?: any): Ext.dom.IAbstractElement,
		insertHtml(where?: string, html?: string, returnEl?: boolean): any,
		insertSibling(el?: any, where?: string, returnDom?: boolean): Ext.dom.IAbstractElement,
		is(selector?: string): boolean,
		isStyle(style?: string, value?: string): boolean,
		isTransparent(prop?: string): boolean,
		last(selector?: string, returnDom?: boolean): any,
		mask(msg?: string, msgCls?: string): void,
		next(selector?: string, returnDom?: boolean): any,
		parent(selector?: string, returnDom?: boolean): any,
		prev(selector?: string, returnDom?: boolean): any,
		query(selector?: string): HTMLElement[],
		radioCls(className?: any): Ext.dom.IElement,
		remove(): void,
		removeCls(className?: any): Ext.dom.IElement,
		repaint(): Ext.dom.IElement,
		replace(el?: any): Ext.dom.IAbstractElement,
		replaceCls(oldClassName?: string, newClassName?: string): Ext.dom.IElement,
		replaceWith(el?: any): Ext.dom.IAbstractElement,
		select(selector?: string, unique?: boolean): Ext.ICompositeElement,
		serializeForm(form?: any): string,
		set(o?: any, useSet?: boolean): Ext.dom.IElement,
		setHTML(html?: string): Ext.IElement,
		setHeight(height?: any): Ext.dom.IElement,
		setSize(width?: any, height?: any): Ext.dom.IElement,
		setStyle(property?: any, value?: string): Ext.dom.IElement,
		setVisibilityMode(mode?: any): Ext.dom.IAbstractElement,
		setVisible(visible?: boolean, animate?: any): Ext.dom.IElement,
		setWidth(width?: any): Ext.dom.IElement,
		show(animate?: any): Ext.dom.IElement,
		toggleCls(className?: string): Ext.dom.IElement,
		unmask(): void,
		up(selector?: string, limit?: any, returnDom?: boolean): Ext.IElement,
		update(html?: string): Ext.dom.IElement,
		wrap(config?: any, returnDom?: boolean, selector?: string): any
	}

	declare export interface IAbstractHelper {
		append(el?: any, o?: any, returnElement?: boolean): any,
		applyStyles(el?: any, styles?: any): void,
		generateStyles(styles?: any, buffer?: string[]): any,
		insertAfter(el?: any, o?: any, returnElement?: boolean): any,
		insertBefore(el?: any, o?: any, returnElement?: boolean): any,
		insertFirst(el?: any, o?: any, returnElement?: boolean): any,
		insertHtml(where?: string, el?: any, html?: string): HTMLElement,
		markup(spec?: any): string,
		overwrite(el?: any, o?: any, returnElement?: boolean): any
	}

	declare export interface IAbstractQuery {
		is(el?: any, selector?: string): boolean,
		select(selector?: string, root?: any): HTMLElement[],
		selectNode(selector?: string, root?: any): HTMLElement
	}

	declare export interface ICompositeElement {
		
	}

	declare export interface ICompositeElementLite {
		elements?: HTMLElement[],
		isComposite?: boolean,
		add(els?: any): Ext.dom.ICompositeElement,
		clear(removeDom?: boolean): void,
		contains(el?: any): boolean,
		each(fn?: any, scope?: any): Ext.dom.ICompositeElement,
		fill(els?: any): Ext.dom.ICompositeElement,
		filter(selector?: any): Ext.dom.ICompositeElement,
		first(): Ext.dom.IElement,
		getCount(): number,
		indexOf(el?: any): number,
		item(index?: number): Ext.dom.IElement,
		last(): Ext.dom.IElement,
		removeElement(el?: any, removeDom?: boolean): Ext.dom.ICompositeElement,
		replaceElement(el?: any, replacement?: any, domReplace?: boolean): Ext.dom.ICompositeElement,
		slice(start?: number, end?: number): HTMLElement[]
	}

	declare export interface IElement {
		autoBoxAdjust?: boolean,
		originalDisplay?: string,
		addClsOnClick(className?: string, testFn?: any, scope?: any): Ext.dom.IElement,
		addClsOnFocus(className?: string, testFn?: any, scope?: any): Ext.dom.IElement,
		addClsOnOver(className?: string, testFn?: any, scope?: any): Ext.dom.IElement,
		addKeyListener(key?: any, fn?: any, scope?: any): Ext.util.IKeyMap,
		addKeyMap(config?: any): Ext.util.IKeyMap,
		addListener(eventName?: string, fn?: any, scope?: any, options?: any): Ext.dom.IElement,
		animate(config?: any): Ext.dom.IElement,
		blur(): Ext.dom.IElement,
		boxWrap(clazz?: string): Ext.dom.IElement,
		cacheScrollValues(): any,
		center(centerIn?: any): void,
		clean(forceReclean?: boolean): void,
		clearListeners(): Ext.dom.IElement,
		clearOpacity(): Ext.dom.IElement,
		clearPositioning(value?: string): Ext.dom.IElement,
		clip(): Ext.dom.IElement,
		createProxy(config?: any, renderTo?: any, matchBox?: boolean): Ext.dom.IElement,
		createShim(): Ext.dom.IElement,
		enableDisplayMode(display?: string): Ext.dom.IElement,
		fadeIn(options?: any): Ext.IElement,
		fadeOut(options?: any): Ext.IElement,
		focus(defer?: number): Ext.dom.IElement,
		focusable(): boolean,
		frame(color?: string, count?: number, options?: any): Ext.dom.IElement,
		getAttributeNS(namespace?: string, name?: string): string,
		getBottom(local?: boolean): number,
		getCenterXY(): number[],
		getColor(attr?: string, defaultValue?: string, prefix?: string): void,
		getComputedHeight(): number,
		getComputedWidth(): number,
		getFrameWidth(sides?: string): number,
		getLeft(local?: boolean): number,
		getLoader(): Ext.IElementLoader,
		getLocalX(): number,
		getLocalXY(): any[],
		getLocalY(): number,
		getPageBox(asRegion?: boolean): any,
		getPositioning(autoPx?: boolean): any,
		getRight(local?: boolean): number,
		getScroll(): any,
		getScrollLeft(): number,
		getScrollTop(): number,
		getStyleSize(): any,
		getTextWidth(text?: string, min?: number, max?: number): number,
		getTop(local?: boolean): number,
		getX(): number,
		getXY(): any[],
		getY(): number,
		ghost(anchor?: string, options?: any): Ext.dom.IElement,
		hide(animate?: any): Ext.dom.IElement,
		highlight(color?: string, options?: any): Ext.dom.IElement,
		hover(overFn?: any, outFn?: any, scope?: any, options?: any): Ext.dom.IElement,
		initDD(group?: string, config?: any, overrides?: any): Ext.dd.IDD,
		initDDProxy(group?: string, config?: any, overrides?: any): Ext.dd.IDDProxy,
		initDDTarget(group?: string, config?: any, overrides?: any): Ext.dd.IDDTarget,
		isBorderBox(): boolean,
		isDisplayed(): boolean,
		isFocusable(asFocusEl?: any): boolean,
		isMasked(): boolean,
		isScrollable(): boolean,
		isVisible(deep?: boolean): boolean,
		load(options?: any): Ext.dom.IElement,
		mask(msg?: string, msgCls?: string): Ext.dom.IElement,
		monitorMouseLeave(delay?: number, handler?: any, scope?: any): any,
		moveTo(x?: number, y?: number, animate?: any): Ext.dom.IElement,
		needsTabIndex(): void,
		on(eventName?: string, fn?: any, scope?: any, options?: any): Ext.dom.IElement,
		pause(seconds?: number): Ext.IElement,
		position(pos?: string, zIndex?: number, x?: number, y?: number): void,
		puff(options?: any): Ext.dom.IElement,
		purgeAllListeners(): Ext.dom.IElement,
		relayEvent(eventName?: string, observable?: any): void,
		removeAllListeners(): Ext.dom.IElement,
		removeListener(eventName?: string, fn?: any, scope?: any): Ext.dom.IElement,
		scale(width?: number, height?: number, options?: any): Ext.IElement,
		scroll(direction?: string, distance?: number, animate?: any): boolean,
		scrollBy(deltaX?: any, deltaY?: any, animate?: any): Ext.IElement,
		scrollIntoView(
		container?: any, hscroll?: boolean, animate?: any, highlight?: boolean
	): Ext.dom.IElement,
		scrollTo(side?: string, value?: number, animate?: any): Ext.IElement,
		selectable(): Ext.IElement,
		setBottom(bottom?: any): Ext.dom.IElement,
		setBounds(
		x?: number, y?: number, width?: any, height?: any, animate?: any
	): Ext.dom.IElement,
		setDisplayed(value?: any): Ext.dom.IElement,
		setLeft(left?: any): Ext.dom.IElement,
		setLeftTop(left?: any, top?: any): Ext.dom.IElement,
		setLocation(x?: number, y?: number, animate?: any): Ext.dom.IElement,
		setOpacity(opacity?: number, animate?: any): Ext.dom.IElement,
		setPositioning(posCfg?: any): Ext.dom.IElement,
		setRight(right?: any): Ext.dom.IElement,
		setScrollLeft(left?: number): Ext.dom.IElement,
		setScrollTop(top?: number): Ext.dom.IElement,
		setTop(top?: any): Ext.dom.IElement,
		setVisible(visible?: boolean, animate?: any): Ext.dom.IElement,
		shift(options?: any): Ext.IElement,
		show(animate?: any): Ext.dom.IElement,
		slideIn(anchor?: string, options?: any): Ext.dom.IElement,
		slideOut(anchor?: string, options?: any): Ext.dom.IElement,
		swallowEvent(eventName?: any, preventDefault?: boolean): Ext.dom.IElement,
		switchOff(options?: any): Ext.dom.IElement,
		toggle(animate?: any): Ext.dom.IElement,
		un(eventName?: string, fn?: any, scope?: any): Ext.dom.IElement,
		unclip(): Ext.dom.IElement,
		unmask(): void,
		unselectable(): Ext.dom.IElement,
		update(html?: string, loadScripts?: boolean, callback?: any): Ext.dom.IElement
	}

	declare export interface IHelper {
		useDom?: boolean,
		createDom(o?: any): HTMLElement,
		createHtml(spec?: any): string,
		createTemplate(o?: any): Ext.ITemplate,
		overwrite(el?: any, o?: any, returnElement?: boolean): any
	}

	declare export interface ILayer {
		cls?: string,
		constrain?: boolean,
		dh?: any,
		hideMode?: string,
		shadow?: any,
		shadowOffset?: number,
		shim?: boolean,
		useDisplay?: boolean,
		visibilityCls?: string,
		zindex?: number,
		remove(): void,
		setBounds(
		x?: any, y?: any, width?: any, height?: any, animate?: any, duration?: any, callback?: any, easing?: any
	): Ext.dom.IElement,
		setHeight(
		h?: any, animate?: any, duration?: any, callback?: any, easing?: any
	): Ext.dom.IElement,
		setLeft(left?: any): Ext.dom.IElement,
		setLeftTop(left?: any, top?: any): Ext.dom.IElement,
		setSize(
		w?: any, h?: any, animate?: any, duration?: any, callback?: any, easing?: any
	): Ext.dom.IElement,
		setTop(top?: any): Ext.dom.IElement,
		setVisible(
		visible?: any, animate?: any, duration?: any, callback?: any, easing?: any
	): Ext.dom.IElement,
		setWidth(
		w?: any, animate?: any, duration?: any, callback?: any, easing?: any
	): Ext.dom.IElement,
		setZIndex(zindex?: number): Ext.ILayer
	}

	declare export interface IQuery {
		
	}

		declare export class AbstractElement  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		fly(dom?: any, named?: string): Ext.dom.element.IFly;
		fromPoint(x?: number, y?: number): string;
		get(el?: any): Ext.dom.IElement;
		getDocumentHeight(): number;
		getDocumentWidth(): number;
		getName(): string;
		getOrientation(): string;
		getViewSize(): any;
		getViewportHeight(): number;
		getViewportWidth(): number;
		implement(): void;
		mergeClsList(clsList1?: any, clsList2?: any): any[];
		normalize(prop?: string): string;
		override(members?: any): Ext.IBase;
		parseBox(box?: any): any;
		parseStyles(styles?: string): any;
		removeCls(existingClsList?: any, removeClsList?: any): any[];
		unitizeBox(box?: any, units?: string): string
	}

	declare export class Element  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		fromPoint(x?: number, y?: number): string;
		get(el?: any): Ext.dom.IElement;
		getDocumentHeight(): number;
		getDocumentWidth(): number;
		getName(): string;
		getOrientation(): string;
		getViewSize(): any;
		getViewportHeight(): number;
		getViewportWidth(): number;
		implement(): void;
		mergeClsList(clsList1?: any, clsList2?: any): any[];
		normalize(prop?: string): string;
		override(members?: any): Ext.IBase;
		parseBox(box?: any): any;
		parseStyles(styles?: string): any;
		removeCls(existingClsList?: any, removeClsList?: any): any[];
		select(selector?: any, unique?: boolean, root?: any): any;
		unitizeBox(box?: any, units?: string): string
	}

	declare export class Query  {
		matchers: any;
		operators: any;
		pseudos: any;
		compile(selector?: string, type?: string): any;
		filter(el?: HTMLElement[], selector?: string, nonMatches?: boolean): HTMLElement[];
		is(el?: any, selector?: string): boolean;
		jsSelect(selector?: string, root?: any): HTMLElement[];
		select(
		path?: string, root?: HTMLElement, type?: string, single?: boolean
	): HTMLElement[];
		selectNode(selector?: string, root?: HTMLElement): HTMLElement;
		selectNumber(selector?: string, root?: HTMLElement, defaultValue?: number): number;
		selectValue(selector?: string, root?: HTMLElement, defaultValue?: string): string
	}

	
}

declare module 'element' {
		declare export interface IFly {
		isFly?: boolean
	}

			
}

declare module 'abstractelement' {
		declare export interface IFly {
		isFly?: boolean
	}

			
}

declare module 'core' {
		declare export interface IElement {
		autoBoxAdjust?: boolean,
		originalDisplay?: string,
		addClsOnClick(className?: string, testFn?: any, scope?: any): Ext.dom.IElement,
		addClsOnFocus(className?: string, testFn?: any, scope?: any): Ext.dom.IElement,
		addClsOnOver(className?: string, testFn?: any, scope?: any): Ext.dom.IElement,
		addKeyListener(key?: any, fn?: any, scope?: any): Ext.util.IKeyMap,
		addKeyMap(config?: any): Ext.util.IKeyMap,
		addListener(eventName?: string, fn?: any, scope?: any, options?: any): Ext.dom.IElement,
		animate(config?: any): Ext.dom.IElement,
		blur(): Ext.dom.IElement,
		boxWrap(clazz?: string): Ext.dom.IElement,
		cacheScrollValues(): any,
		center(centerIn?: any): void,
		clean(forceReclean?: boolean): void,
		clearListeners(): Ext.dom.IElement,
		clearOpacity(): Ext.dom.IElement,
		clearPositioning(value?: string): Ext.dom.IElement,
		clip(): Ext.dom.IElement,
		createProxy(config?: any, renderTo?: any, matchBox?: boolean): Ext.dom.IElement,
		createShim(): Ext.dom.IElement,
		enableDisplayMode(display?: string): Ext.dom.IElement,
		fadeIn(options?: any): Ext.IElement,
		fadeOut(options?: any): Ext.IElement,
		focus(defer?: number): Ext.dom.IElement,
		focusable(): boolean,
		frame(color?: string, count?: number, options?: any): Ext.dom.IElement,
		getAttributeNS(namespace?: string, name?: string): string,
		getBottom(local?: boolean): number,
		getCenterXY(): number[],
		getColor(attr?: string, defaultValue?: string, prefix?: string): void,
		getComputedHeight(): number,
		getComputedWidth(): number,
		getFrameWidth(sides?: string): number,
		getLeft(local?: boolean): number,
		getLoader(): Ext.IElementLoader,
		getLocalX(): number,
		getLocalXY(): any[],
		getLocalY(): number,
		getPageBox(asRegion?: boolean): any,
		getPositioning(autoPx?: boolean): any,
		getRight(local?: boolean): number,
		getScroll(): any,
		getScrollLeft(): number,
		getScrollTop(): number,
		getStyleSize(): any,
		getTextWidth(text?: string, min?: number, max?: number): number,
		getTop(local?: boolean): number,
		getX(): number,
		getXY(): any[],
		getY(): number,
		ghost(anchor?: string, options?: any): Ext.dom.IElement,
		hide(animate?: any): Ext.dom.IElement,
		highlight(color?: string, options?: any): Ext.dom.IElement,
		hover(overFn?: any, outFn?: any, scope?: any, options?: any): Ext.dom.IElement,
		initDD(group?: string, config?: any, overrides?: any): Ext.dd.IDD,
		initDDProxy(group?: string, config?: any, overrides?: any): Ext.dd.IDDProxy,
		initDDTarget(group?: string, config?: any, overrides?: any): Ext.dd.IDDTarget,
		isBorderBox(): boolean,
		isDisplayed(): boolean,
		isFocusable(asFocusEl?: any): boolean,
		isMasked(): boolean,
		isScrollable(): boolean,
		isVisible(deep?: boolean): boolean,
		load(options?: any): Ext.dom.IElement,
		mask(msg?: string, msgCls?: string): Ext.dom.IElement,
		monitorMouseLeave(delay?: number, handler?: any, scope?: any): any,
		moveTo(x?: number, y?: number, animate?: any): Ext.dom.IElement,
		needsTabIndex(): void,
		on(eventName?: string, fn?: any, scope?: any, options?: any): Ext.dom.IElement,
		pause(seconds?: number): Ext.IElement,
		position(pos?: string, zIndex?: number, x?: number, y?: number): void,
		puff(options?: any): Ext.dom.IElement,
		purgeAllListeners(): Ext.dom.IElement,
		relayEvent(eventName?: string, observable?: any): void,
		removeAllListeners(): Ext.dom.IElement,
		removeListener(eventName?: string, fn?: any, scope?: any): Ext.dom.IElement,
		scale(width?: number, height?: number, options?: any): Ext.IElement,
		scroll(direction?: string, distance?: number, animate?: any): boolean,
		scrollBy(deltaX?: any, deltaY?: any, animate?: any): Ext.IElement,
		scrollIntoView(
		container?: any, hscroll?: boolean, animate?: any, highlight?: boolean
	): Ext.dom.IElement,
		scrollTo(side?: string, value?: number, animate?: any): Ext.IElement,
		selectable(): Ext.IElement,
		setBottom(bottom?: any): Ext.dom.IElement,
		setBounds(
		x?: number, y?: number, width?: any, height?: any, animate?: any
	): Ext.dom.IElement,
		setDisplayed(value?: any): Ext.dom.IElement,
		setLeft(left?: any): Ext.dom.IElement,
		setLeftTop(left?: any, top?: any): Ext.dom.IElement,
		setLocation(x?: number, y?: number, animate?: any): Ext.dom.IElement,
		setOpacity(opacity?: number, animate?: any): Ext.dom.IElement,
		setPositioning(posCfg?: any): Ext.dom.IElement,
		setRight(right?: any): Ext.dom.IElement,
		setScrollLeft(left?: number): Ext.dom.IElement,
		setScrollTop(top?: number): Ext.dom.IElement,
		setTop(top?: any): Ext.dom.IElement,
		setVisible(visible?: boolean, animate?: any): Ext.dom.IElement,
		shift(options?: any): Ext.IElement,
		show(animate?: any): Ext.dom.IElement,
		slideIn(anchor?: string, options?: any): Ext.dom.IElement,
		slideOut(anchor?: string, options?: any): Ext.dom.IElement,
		swallowEvent(eventName?: any, preventDefault?: boolean): Ext.dom.IElement,
		switchOff(options?: any): Ext.dom.IElement,
		toggle(animate?: any): Ext.dom.IElement,
		un(eventName?: string, fn?: any, scope?: any): Ext.dom.IElement,
		unclip(): Ext.dom.IElement,
		unmask(): void,
		unselectable(): Ext.dom.IElement,
		update(html?: string, loadScripts?: boolean, callback?: any): Ext.dom.IElement
	}

	declare export interface IDomQuery {
		
	}

	declare export interface IDomHelper {
		
	}

		declare export class Element  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		fromPoint(x?: number, y?: number): string;
		get(el?: any): Ext.dom.IElement;
		getDocumentHeight(): number;
		getDocumentWidth(): number;
		getName(): string;
		getOrientation(): string;
		getViewSize(): any;
		getViewportHeight(): number;
		getViewportWidth(): number;
		implement(): void;
		mergeClsList(clsList1?: any, clsList2?: any): any[];
		normalize(prop?: string): string;
		override(members?: any): Ext.IBase;
		parseBox(box?: any): any;
		parseStyles(styles?: string): any;
		removeCls(existingClsList?: any, removeClsList?: any): any[];
		select(selector?: any, unique?: boolean, root?: any): any;
		unitizeBox(box?: any, units?: string): string
	}

	declare export class DomQuery  {
		matchers: any;
		operators: any;
		pseudos: any;
		compile(selector?: string, type?: string): any;
		filter(el?: HTMLElement[], selector?: string, nonMatches?: boolean): HTMLElement[];
		is(el?: any, selector?: string): boolean;
		jsSelect(selector?: string, root?: any): HTMLElement[];
		select(
		path?: string, root?: HTMLElement, type?: string, single?: boolean
	): HTMLElement[];
		selectNode(selector?: string, root?: HTMLElement): HTMLElement;
		selectNumber(selector?: string, root?: HTMLElement, defaultValue?: number): number;
		selectValue(selector?: string, root?: HTMLElement, defaultValue?: string): string
	}

	declare export class DomHelper  {
		self: Ext.IClass;
		useDom: boolean;
		append(el?: any, o?: any, returnElement?: boolean): any;
		applyStyles(el?: any, styles?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		createDom(o?: any): HTMLElement;
		createHtml(spec?: any): string;
		createTemplate(o?: any): Ext.ITemplate;
		generateStyles(styles?: any, buffer?: string[]): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		insertAfter(el?: any, o?: any, returnElement?: boolean): any;
		insertBefore(el?: any, o?: any, returnElement?: boolean): any;
		insertFirst(el?: any, o?: any, returnElement?: boolean): any;
		insertHtml(where?: string, el?: any, html?: string): HTMLElement;
		markup(spec?: any): string;
		overwrite(el?: any, o?: any, returnElement?: boolean): any;
		statics(): Ext.IClass
	}

	
}

declare module 'draw' {
		declare export interface IColor {
		lightnessFactor?: number,
		getBlue(): number,
		getDarker(factor?: number): any,
		getGrayscale(): number,
		getGreen(): number,
		getHSL(): number[],
		getLighter(factor?: number): any,
		getRGB(): number[],
		getRed(): number,
		toString(): string
	}

	declare export interface IComponent {
		autoSize?: boolean,
		baseCls?: string,
		componentLayout?: any,
		enginePriority?: string[],
		gradients?: any[],
		items?: Ext.draw.ISprite[],
		shrinkWrap?: any,
		viewBox?: boolean,
		surface?: Ext.draw.ISurface
	}

	declare export interface ICompositeSprite {
		add(key?: any, o?: any): any,
		addCls(cls?: string): void,
		animate(config?: any): any,
		destroy(): void,
		getActiveAnimation(): any,
		getBBox(): any,
		hasActiveFx(): any,
		hide(redraw?: boolean): Ext.draw.ICompositeSprite,
		insert(index?: any, key?: any, o?: any): any,
		redraw(): void,
		remove(o?: any): any,
		removeCls(cls?: string): void,
		sequenceFx(): any,
		setAttributes(attrs?: any, redraw?: boolean): Ext.draw.ICompositeSprite,
		setStyle(style?: string): void,
		show(redraw?: boolean): Ext.draw.ICompositeSprite,
		stopAnimation(): Ext.IElement,
		stopFx(): Ext.IElement,
		syncFx(): any
	}

	declare export interface IDraw {
		
	}

	declare export interface IMatrix {
		
	}

	declare export interface ISprite {
		draggable?: boolean,
		fill?: string,
		font?: string,
		group?: any,
		height?: number,
		opacity?: number,
		path?: string,
		radius?: number,
		radiusX?: number,
		radiusY?: number,
		src?: string,
		stroke?: string,
		strokewidth?: number,
		text?: string,
		type?: string,
		width?: number,
		x?: number,
		y?: number,
		dd?: Ext.dd.IDragSource,
		isSprite?: boolean,
		addCls(className?: any): Ext.draw.ISprite,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		animate(config?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		destroy(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getActiveAnimation(): any,
		getBBox(): any,
		hasActiveFx(): any,
		hasListener(eventName?: string): boolean,
		hide(redraw?: boolean): Ext.draw.ISprite,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		redraw(): Ext.draw.ISprite,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		remove(): boolean,
		removeCls(className?: any): Ext.draw.ISprite,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		sequenceFx(): any,
		setAttributes(attrs?: any, redraw?: boolean): Ext.draw.ISprite,
		setStyle(property?: any, value?: string): Ext.draw.ISprite,
		show(redraw?: boolean): Ext.draw.ISprite,
		stopAnimation(): Ext.IElement,
		stopFx(): Ext.IElement,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		syncFx(): any,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface ISpriteDD {
		createFrame(): void,
		getDragEl(e?: any): HTMLElement,
		onDrag(e?: any): void,
		setDragElPos(): void
	}

	declare export interface ISurface {
		height?: number,
		items?: Ext.draw.ISprite[],
		width?: number,
		add(args?: any): any,
		addCls(sprite?: any, className?: any): void,
		addEvents(eventNames?: any): void,
		addGradient(gradient?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		destroy(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getGroup(id?: string): any,
		getId(): void,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		remove(sprite?: Ext.draw.ISprite, destroySprite?: boolean): void,
		removeAll(destroySprites?: boolean): void,
		removeCls(sprite?: any, className?: any): void,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		setSize(w?: number, h?: number): void,
		setStyle(sprite?: any, styles?: any): void,
		setText(sprite?: any, text?: string): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IText {
		autoSize?: boolean,
		baseCls?: string,
		degrees?: number,
		styleSelector?: string,
		text?: string,
		viewBox?: boolean,
		initComponent(): void,
		setAngle(degrees?: number): void,
		setText(t?: string): void
	}

		declare export class Color  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		fromHSL(h?: number, s?: number, l?: number): any;
		fromString(str?: string): any;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase;
		toHex(color?: any): string
	}

	declare export class Draw  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		snapEndsByDate(from?: any, to?: any, stepsMax?: number, lockEnds?: boolean): any;
		snapEndsByDateAndStep(from?: any, to?: any, step?: any[], lockEnds?: boolean): any;
		statics(): Ext.IClass
	}

	declare export class Surface  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(config?: any, enginePriority?: string[]): any;
		createAlias(alias?: any, origin?: any): void;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase;
		save(surface?: Ext.draw.ISurface, config?: any): any
	}

	
}

declare module 'engine' {
		declare export interface IImageExporter {
		
	}

	declare export interface ISvg {
		addCls(sprite?: any, className?: any): void,
		addGradient(gradient?: any): void,
		applyZIndex(sprite?: Ext.draw.ISprite): void,
		destroy(): void,
		getRegion(): Ext.util.IRegion,
		hasCls(sprite?: Ext.draw.ISprite, className?: string): boolean,
		removeCls(sprite?: any, className?: any): void,
		setSize(width?: any, height?: any): void,
		setText(sprite?: any, textString?: any): void
	}

	declare export interface ISvgExporter {
		
	}

	declare export interface IVml {
		addCls(sprite?: any, className?: any): void,
		addGradient(gradient?: any): void,
		destroy(): void,
		removeCls(sprite?: any, className?: any): void,
		setSize(width?: any, height?: any): void,
		setText(sprite?: any, text?: any): void
	}

		declare export class ImageExporter  {
		defaultUrl: string;
		heightParam: string;
		self: Ext.IClass;
		supportedTypes: any[];
		svgParam: string;
		typeParam: string;
		widthParam: string;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		generate(surface?: Ext.draw.ISurface, config?: any): boolean;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	declare export class SvgExporter  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		generate(surface?: Ext.draw.ISurface, config?: any): string;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	
}

declare module 'enums' {
		declare export interface IFeature {
		abstractsummary?: string,
		feature?: string,
		grouping?: string,
		groupingsummary?: string,
		rowbody?: string,
		summary?: string
	}

	declare export interface ILayout {
		absolute?: string,
		accordion?: string,
		anchor?: string,
		auto?: string,
		autocomponent?: string,
		autocontainer?: string,
		border?: string,
		box?: string,
		card?: string,
		checkboxgroup?: string,
		column?: string,
		container?: string,
		fit?: string,
		form?: string,
		hbox?: string,
		table?: string,
		vbox?: string
	}

	declare export interface IPlugin {
		bufferedrenderer?: string,
		cellediting?: string,
		gridheaderresizer?: string,
		gridviewdragdrop?: string,
		rowediting?: string,
		rowexpander?: string,
		treeviewdragdrop?: string
	}

	declare export interface IWidget {
		actioncolumn?: string,
		booleancolumn?: string,
		boundlist?: string,
		box?: string,
		button?: string,
		buttongroup?: string,
		chart?: string,
		checkbox?: string,
		checkboxfield?: string,
		checkboxgroup?: string,
		checkcolumn?: string,
		colormenu?: string,
		colorpicker?: string,
		combo?: string,
		combobox?: string,
		component?: string,
		container?: string,
		cycle?: string,
		dataview?: string,
		datecolumn?: string,
		datefield?: string,
		datemenu?: string,
		datepicker?: string,
		displayfield?: string,
		draw?: string,
		editor?: string,
		field?: string,
		fieldcontainer?: string,
		fieldset?: string,
		filebutton?: string,
		filefield?: string,
		fileuploadfield?: string,
		flash?: string,
		form?: string,
		grid?: string,
		gridcolumn?: string,
		gridpanel?: string,
		gridview?: string,
		header?: string,
		headercontainer?: string,
		hidden?: string,
		hiddenfield?: string,
		htmleditor?: string,
		image?: string,
		imagecomponent?: string,
		jsonpstore?: string,
		label?: string,
		loadmask?: string,
		menu?: string,
		menucheckitem?: string,
		menuitem?: string,
		menuseparator?: string,
		messagebox?: string,
		multislider?: string,
		numbercolumn?: string,
		numberfield?: string,
		pagingtoolbar?: string,
		panel?: string,
		pickerfield?: string,
		progressbar?: string,
		propertygrid?: string,
		quicktip?: string,
		radio?: string,
		radiofield?: string,
		radiogroup?: string,
		rownumberer?: string,
		slider?: string,
		sliderfield?: string,
		slidertip?: string,
		spinnerfield?: string,
		splitbutton?: string,
		splitter?: string,
		tab?: string,
		tabbar?: string,
		tablepanel?: string,
		tableview?: string,
		tabpanel?: string,
		tbfill?: string,
		tbitem?: string,
		tbseparator?: string,
		tbspacer?: string,
		tbtext?: string,
		templatecolumn?: string,
		text?: string,
		textarea?: string,
		textareafield?: string,
		textfield?: string,
		timefield?: string,
		timepicker?: string,
		tip?: string,
		tool?: string,
		toolbar?: string,
		tooltip?: string,
		treepanel?: string,
		treeview?: string,
		trigger?: string,
		triggerfield?: string,
		viewport?: string,
		window?: string
	}

			
}

declare module 'action' {
		declare export interface IAction {
		failure?: any,
		form?: Ext.form.IBasic,
		headers?: any,
		method?: string,
		params?: any,
		reset?: boolean,
		scope?: any,
		submitEmptyText?: boolean,
		success?: any,
		timeout?: number,
		url?: string,
		waitMsg?: string,
		waitTitle?: string,
		failureType?: string,
		response?: any,
		result?: any,
		type?: string,
		CLIENT_INVALID?: string,
		CONNECT_FAILURE?: string,
		LOAD_FAILURE?: string,
		SERVER_INVALID?: string,
		run(): void
	}

	declare export interface IDirectLoad {
		type?: string
	}

	declare export interface IDirectSubmit {
		type?: string
	}

	declare export interface ILoad {
		type?: string
	}

	declare export interface IStandardSubmit {
		target?: string
	}

	declare export interface ISubmit {
		clientValidation?: boolean,
		type?: string,
		run(): void
	}

			
}

declare module 'form' {
		declare export interface IAction {
		failure?: any,
		form?: Ext.form.IBasic,
		headers?: any,
		method?: string,
		params?: any,
		reset?: boolean,
		scope?: any,
		submitEmptyText?: boolean,
		success?: any,
		timeout?: number,
		url?: string,
		waitMsg?: string,
		waitTitle?: string,
		failureType?: string,
		response?: any,
		result?: any,
		type?: string,
		CLIENT_INVALID?: string,
		CONNECT_FAILURE?: string,
		LOAD_FAILURE?: string,
		SERVER_INVALID?: string,
		run(): void
	}

	declare export interface IBasic {
		api?: any,
		baseParams?: any,
		errorReader?: any,
		jsonSubmit?: boolean,
		method?: string,
		paramOrder?: any,
		paramsAsHash?: boolean,
		reader?: any,
		standardSubmit?: boolean,
		timeout?: number,
		trackResetOnLoad?: boolean,
		url?: string,
		waitMsgTarget?: any,
		waitTitle?: string,
		owner?: Ext.container.IContainer,
		applyIfToFields(obj?: any): Ext.form.IBasic,
		applyToFields(obj?: any): Ext.form.IBasic,
		checkDirty(): void,
		checkValidity(): void,
		clearInvalid(): Ext.form.IBasic,
		destroy(): void,
		doAction(action?: any, options?: any): Ext.form.IBasic,
		findField(id?: string): any,
		getFieldValues(dirtyOnly?: boolean): any,
		getFields(): Ext.util.IMixedCollection,
		getRecord(): Ext.data.IModel,
		getValues(
		asString?: boolean, dirtyOnly?: boolean, includeEmptyText?: boolean, useDataValues?: boolean
	): any,
		hasInvalidField(): void,
		hasUpload(): boolean,
		isDirty(): boolean,
		isValid(): boolean,
		load(options?: any): Ext.form.IBasic,
		loadRecord(record?: Ext.data.IModel): Ext.form.IBasic,
		markInvalid(errors?: any): Ext.form.IBasic,
		reset(resetRecord?: boolean): Ext.form.IBasic,
		setValues(values?: any): Ext.form.IBasic,
		submit(options?: any): Ext.form.IBasic,
		updateRecord(record?: Ext.data.IModel): Ext.form.IBasic
	}

	declare export interface IBasicForm {
		api?: any,
		baseParams?: any,
		errorReader?: any,
		jsonSubmit?: boolean,
		method?: string,
		paramOrder?: any,
		paramsAsHash?: boolean,
		reader?: any,
		standardSubmit?: boolean,
		timeout?: number,
		trackResetOnLoad?: boolean,
		url?: string,
		waitMsgTarget?: any,
		waitTitle?: string,
		owner?: Ext.container.IContainer,
		applyIfToFields(obj?: any): Ext.form.IBasic,
		applyToFields(obj?: any): Ext.form.IBasic,
		checkDirty(): void,
		checkValidity(): void,
		clearInvalid(): Ext.form.IBasic,
		destroy(): void,
		doAction(action?: any, options?: any): Ext.form.IBasic,
		findField(id?: string): any,
		getFieldValues(dirtyOnly?: boolean): any,
		getFields(): Ext.util.IMixedCollection,
		getRecord(): Ext.data.IModel,
		getValues(
		asString?: boolean, dirtyOnly?: boolean, includeEmptyText?: boolean, useDataValues?: boolean
	): any,
		hasInvalidField(): void,
		hasUpload(): boolean,
		isDirty(): boolean,
		isValid(): boolean,
		load(options?: any): Ext.form.IBasic,
		loadRecord(record?: Ext.data.IModel): Ext.form.IBasic,
		markInvalid(errors?: any): Ext.form.IBasic,
		reset(resetRecord?: boolean): Ext.form.IBasic,
		setValues(values?: any): Ext.form.IBasic,
		submit(options?: any): Ext.form.IBasic,
		updateRecord(record?: Ext.data.IModel): Ext.form.IBasic
	}

	declare export interface ICheckboxGroup {
		allowBlank?: boolean,
		blankText?: string,
		columns?: any,
		componentCls?: string,
		defaultType?: string,
		items?: any,
		layout?: any,
		vertical?: boolean,
		batchChanges(fn?: any): void,
		beforeReset(): void,
		checkChange(): void,
		checkDirty(): void,
		clearInvalid(): void,
		extractFileInput(): HTMLElement,
		getChecked(): Ext.form.field.ICheckbox[],
		getErrors(): string[],
		getModelData(): any,
		getName(): string,
		getSubmitData(): any,
		getValue(): void,
		initField(): void,
		initValue(): void,
		isDirty(): boolean,
		isEqual(value1?: any, value2?: any): boolean,
		isFileUpload(): boolean,
		isValid(): boolean,
		markInvalid(errors?: any): void,
		onAdd(field?: any): void,
		onRemove(item?: any): void,
		reset(): void,
		resetOriginalValue(): void,
		setValue(value?: any): Ext.form.ICheckboxGroup,
		transformOriginalValue(value?: any): any,
		validate(): boolean
	}

	declare export interface ICheckboxManager {
		
	}

	declare export interface IField {
		baseCls?: string,
		checkChangeBuffer?: number,
		checkChangeEvents?: string[],
		componentLayout?: any,
		dirtyCls?: string,
		fieldCls?: string,
		fieldStyle?: string,
		focusCls?: string,
		inputAttrTpl?: any,
		inputId?: string,
		inputType?: string,
		invalidText?: string,
		name?: string,
		readOnly?: boolean,
		readOnlyCls?: string,
		tabIndex?: number,
		validateOnBlur?: boolean,
		inputEl?: Ext.IElement,
		maskOnDisable?: boolean,
		batchChanges(fn?: any): void,
		beforeReset(): void,
		checkChange(): void,
		checkDirty(): void,
		clearInvalid(): void,
		doComponentLayout(): Ext.container.IContainer,
		extractFileInput(): HTMLElement,
		getActiveError(): string,
		getActiveErrors(): string[],
		getErrors(value?: any): string[],
		getFieldLabel(): string,
		getLabelWidth(): number,
		getLabelableRenderData(): any,
		getModelData(): any,
		getName(): string,
		getRawValue(): any,
		getSubTplData(): any,
		getSubmitData(): any,
		getSubmitValue(): any,
		getValue(): any,
		hasActiveError(): boolean,
		hasVisibleLabel(): boolean,
		initComponent(): void,
		initEvents(): void,
		initField(): void,
		initLabelable(): void,
		initRenderData(): any,
		initValue(): void,
		isDirty(): boolean,
		isEqual(value1?: any, value2?: any): boolean,
		isFileUpload(): boolean,
		isValid(): boolean,
		markInvalid(errors?: any): void,
		onDisable(): void,
		onEnable(): void,
		onRender(): void,
		processRawValue(value?: any): any,
		rawToValue(rawValue?: any): any,
		reset(): void,
		resetOriginalValue(): void,
		setActiveError(msg?: string): void,
		setActiveErrors(errors?: string[]): void,
		setFieldDefaults(defaults?: any): void,
		setFieldLabel(label?: string): void,
		setFieldStyle(style?: any): void,
		setRawValue(value?: any): any,
		setReadOnly(readOnly?: boolean): void,
		setValue(value?: any): any,
		transformOriginalValue(value?: any): any,
		transformRawValue(value?: any): any,
		trimLabelSeparator(): string,
		unsetActiveError(): void,
		validate(): boolean,
		validateValue(value?: any): boolean,
		valueToRaw(value?: any): any
	}

	declare export interface IBaseField {
		baseCls?: string,
		checkChangeBuffer?: number,
		checkChangeEvents?: string[],
		componentLayout?: any,
		dirtyCls?: string,
		fieldCls?: string,
		fieldStyle?: string,
		focusCls?: string,
		inputAttrTpl?: any,
		inputId?: string,
		inputType?: string,
		invalidText?: string,
		name?: string,
		readOnly?: boolean,
		readOnlyCls?: string,
		tabIndex?: number,
		validateOnBlur?: boolean,
		inputEl?: Ext.IElement,
		maskOnDisable?: boolean,
		batchChanges(fn?: any): void,
		beforeReset(): void,
		checkChange(): void,
		checkDirty(): void,
		clearInvalid(): void,
		doComponentLayout(): Ext.container.IContainer,
		extractFileInput(): HTMLElement,
		getActiveError(): string,
		getActiveErrors(): string[],
		getErrors(value?: any): string[],
		getFieldLabel(): string,
		getLabelWidth(): number,
		getLabelableRenderData(): any,
		getModelData(): any,
		getName(): string,
		getRawValue(): any,
		getSubTplData(): any,
		getSubmitData(): any,
		getSubmitValue(): any,
		getValue(): any,
		hasActiveError(): boolean,
		hasVisibleLabel(): boolean,
		initComponent(): void,
		initEvents(): void,
		initField(): void,
		initLabelable(): void,
		initRenderData(): any,
		initValue(): void,
		isDirty(): boolean,
		isEqual(value1?: any, value2?: any): boolean,
		isFileUpload(): boolean,
		isValid(): boolean,
		markInvalid(errors?: any): void,
		onDisable(): void,
		onEnable(): void,
		onRender(): void,
		processRawValue(value?: any): any,
		rawToValue(rawValue?: any): any,
		reset(): void,
		resetOriginalValue(): void,
		setActiveError(msg?: string): void,
		setActiveErrors(errors?: string[]): void,
		setFieldDefaults(defaults?: any): void,
		setFieldLabel(label?: string): void,
		setFieldStyle(style?: any): void,
		setRawValue(value?: any): any,
		setReadOnly(readOnly?: boolean): void,
		setValue(value?: any): any,
		transformOriginalValue(value?: any): any,
		transformRawValue(value?: any): any,
		trimLabelSeparator(): string,
		unsetActiveError(): void,
		validate(): boolean,
		validateValue(value?: any): boolean,
		valueToRaw(value?: any): any
	}

	declare export interface ICheckbox {
		afterBoxLabelTextTpl?: any,
		afterBoxLabelTpl?: any,
		beforeBoxLabelTextTpl?: any,
		beforeBoxLabelTpl?: any,
		boxLabel?: string,
		boxLabelAlign?: string,
		boxLabelAttrTpl?: any,
		boxLabelCls?: string,
		checkChangeEvents?: string[],
		checked?: boolean,
		checkedCls?: string,
		componentLayout?: any,
		fieldCls?: string,
		focusCls?: string,
		handler?: any,
		inputType?: string,
		inputValue?: string,
		scope?: any,
		uncheckedValue?: string,
		boxLabelEl?: Ext.IElement,
		originalValue?: any,
		beforeDestroy(): void,
		getRawValue(): boolean,
		getSubTplData(): any,
		getSubmitValue(): any,
		getValue(): boolean,
		initComponent(): void,
		initEvents(): void,
		initValue(): void,
		onEnable(): void,
		resetOriginalValue(fromBoxInGroup?: any): void,
		setBoxLabel(boxLabel?: string): void,
		setRawValue(value?: any): boolean,
		setReadOnly(readOnly?: any): void,
		setValue(checked?: any): Ext.form.field.ICheckbox,
		valueToRaw(value?: any): any
	}

	declare export interface IComboBox {
		allQuery?: string,
		anyMatch?: boolean,
		autoSelect?: boolean,
		caseSensitive?: boolean,
		componentLayout?: any,
		defaultListConfig?: any,
		delimiter?: string,
		displayField?: string,
		enableRegEx?: boolean,
		fieldSubTpl?: Ext.IXTemplate,
		forceSelection?: boolean,
		growToLongestValue?: boolean,
		hiddenName?: string,
		listConfig?: any,
		minChars?: number,
		multiSelect?: boolean,
		pageSize?: number,
		queryCaching?: boolean,
		queryDelay?: number,
		queryMode?: string,
		queryParam?: string,
		selectOnTab?: boolean,
		store?: any,
		transform?: any,
		triggerAction?: string,
		triggerCls?: string,
		typeAhead?: boolean,
		typeAheadDelay?: number,
		valueField?: string,
		valueNotFoundText?: string,
		lastQuery?: string,
		afterQuery(queryPlan?: any): void,
		afterRender(): void,
		alignPicker(): void,
		beforeBlur(): void,
		beforeQuery(queryPlan?: any): void,
		beforeReset(): void,
		bindStore(store?: any): void,
		bindStoreListeners(store?: Ext.data.IAbstractStore): void,
		clearValue(): void,
		createPicker(): void,
		doQuery(queryString?: string, forceAll?: boolean, rawQuery?: boolean): boolean,
		findRecord(field?: string, value?: any): Ext.data.IModel,
		findRecordByDisplay(value?: any): Ext.data.IModel,
		findRecordByValue(value?: any): Ext.data.IModel,
		getStore(): Ext.data.IStore,
		getStoreListeners(): any,
		getSubTplData(): any,
		getSubmitValue(): string,
		getValue(): any,
		initComponent(): void,
		initEvents(): void,
		onAdded(): void,
		onBindStore(store?: any, initial?: any): void,
		onTriggerClick(): void,
		onUnbindStore(store?: any): void,
		select(r?: any): void,
		setValue(value?: any): any,
		unbindStoreListeners(store?: Ext.data.IAbstractStore): void
	}

	declare export interface IDateField {
		altFormats?: string,
		disabledDates?: string[],
		disabledDatesText?: string,
		disabledDays?: number[],
		disabledDaysText?: string,
		format?: string,
		invalidText?: string,
		matchFieldWidth?: boolean,
		maxText?: string,
		maxValue?: any,
		minText?: string,
		minValue?: any,
		showToday?: boolean,
		startDay?: number,
		submitFormat?: string,
		triggerCls?: string,
		useStrict?: boolean,
		beforeBlur(): void,
		createPicker(): void,
		getErrors(value?: any): string[],
		initComponent(): void,
		initValue(): void,
		rawToValue(rawValue?: any): any,
		safeParse?: any,
		setDisabledDates(disabledDates?: string[]): void,
		setDisabledDays(disabledDays?: number[]): void,
		setMaxValue(value?: any): void,
		setMinValue(value?: any): void,
		setValue(date?: any): Ext.form.field.IDate,
		valueToRaw(value?: any): any
	}

	declare export interface IDate {
		altFormats?: string,
		disabledDates?: string[],
		disabledDatesText?: string,
		disabledDays?: number[],
		disabledDaysText?: string,
		format?: string,
		invalidText?: string,
		matchFieldWidth?: boolean,
		maxText?: string,
		maxValue?: any,
		minText?: string,
		minValue?: any,
		showToday?: boolean,
		startDay?: number,
		submitFormat?: string,
		triggerCls?: string,
		useStrict?: boolean,
		beforeBlur(): void,
		createPicker(): void,
		getErrors(value?: any): string[],
		initComponent(): void,
		initValue(): void,
		rawToValue(rawValue?: any): any,
		safeParse?: any,
		setDisabledDates(disabledDates?: string[]): void,
		setDisabledDays(disabledDays?: number[]): void,
		setMaxValue(value?: any): void,
		setMinValue(value?: any): void,
		setValue(date?: any): Ext.form.field.IDate,
		valueToRaw(value?: any): any
	}

	declare export interface IDisplayField {
		fieldBodyCls?: string,
		fieldCls?: string,
		htmlEncode?: boolean,
		renderer?: any,
		scope?: any,
		submitValue?: boolean,
		getRawValue(): string,
		getSubTplData(): any,
		initEvents(): void,
		isDirty(): boolean,
		isValid(): boolean,
		setRawValue(value?: any): any,
		validate(): boolean
	}

	declare export interface IDisplay {
		fieldBodyCls?: string,
		fieldCls?: string,
		htmlEncode?: boolean,
		renderer?: any,
		scope?: any,
		submitValue?: boolean,
		getRawValue(): string,
		getSubTplData(): any,
		initEvents(): void,
		isDirty(): boolean,
		isValid(): boolean,
		setRawValue(value?: any): any,
		validate(): boolean
	}

	declare export interface IFileUploadField {
		buttonConfig?: any,
		buttonMargin?: number,
		buttonOnly?: boolean,
		buttonText?: string,
		clearOnSubmit?: boolean,
		componentLayout?: any,
		readOnly?: boolean,
		button?: Ext.button.IButton,
		fileInputEl?: Ext.IElement,
		extractFileInput(): HTMLElement,
		getTriggerMarkup(): void,
		isFileUpload(): boolean,
		onDisable(): void,
		onEnable(): void,
		onRender(): void,
		onShow(): void,
		reset(): void,
		setValue(): void
	}

	declare export interface IFileUploadField {
		buttonConfig?: any,
		buttonMargin?: number,
		buttonOnly?: boolean,
		buttonText?: string,
		clearOnSubmit?: boolean,
		componentLayout?: any,
		readOnly?: boolean,
		button?: Ext.button.IButton,
		fileInputEl?: Ext.IElement,
		extractFileInput(): HTMLElement,
		getTriggerMarkup(): void,
		isFileUpload(): boolean,
		onDisable(): void,
		onEnable(): void,
		onRender(): void,
		onShow(): void,
		reset(): void,
		setValue(): void
	}

	declare export interface IFile {
		buttonConfig?: any,
		buttonMargin?: number,
		buttonOnly?: boolean,
		buttonText?: string,
		clearOnSubmit?: boolean,
		componentLayout?: any,
		readOnly?: boolean,
		button?: Ext.button.IButton,
		fileInputEl?: Ext.IElement,
		extractFileInput(): HTMLElement,
		getTriggerMarkup(): void,
		isFileUpload(): boolean,
		onDisable(): void,
		onEnable(): void,
		onRender(): void,
		onShow(): void,
		reset(): void,
		setValue(): void
	}

	declare export interface IHidden {
		hidden?: boolean,
		hideLabel?: boolean,
		inputType?: string,
		clearInvalid(): void,
		initComponent(): void,
		initEvents(): void,
		markInvalid(): void,
		setHeight(): Ext.IComponent,
		setPagePosition(): Ext.IComponent,
		setPosition(): Ext.IComponent,
		setSize(): Ext.IComponent,
		setWidth(): Ext.IComponent
	}

	declare export interface IHtmlEditor {
		afterIFrameTpl?: any,
		afterTextAreaTpl?: any,
		beforeIFrameTpl?: any,
		beforeTextAreaTpl?: any,
		componentLayout?: any,
		createLinkText?: string,
		defaultButtonUI?: string,
		defaultLinkValue?: string,
		defaultValue?: string,
		enableAlignments?: boolean,
		enableColors?: boolean,
		enableFont?: boolean,
		enableFontSize?: boolean,
		enableFormat?: boolean,
		enableLinks?: boolean,
		enableLists?: boolean,
		enableSourceEdit?: boolean,
		fontFamilies?: string[],
		iframeAttrTpl?: any,
		buttonTips?: any,
		maskOnDisable?: boolean,
		batchChanges(fn?: any): void,
		beforeReset(): void,
		checkChange(): void,
		checkDirty(): void,
		cleanHtml(html?: string): string,
		clearInvalid(): void,
		execCmd(cmd?: string, value?: any): void,
		extractFileInput(): HTMLElement,
		focus(selectText?: any, delay?: any): Ext.IComponent,
		getDocMarkup(): void,
		getErrors(value?: any): string[],
		getModelData(): any,
		getName(): string,
		getSubmitData(): any,
		getToolbar(): Ext.toolbar.IToolbar,
		getValue(): any,
		initField(): void,
		initValue(): void,
		insertAtCursor(text?: string): void,
		isDirty(): boolean,
		isEqual(value1?: any, value2?: any): boolean,
		isFileUpload(): boolean,
		isValid(): boolean,
		markInvalid(errors?: any): void,
		pushValue(): void,
		relayCmd(cmd?: string, value?: any): void,
		reset(): void,
		resetOriginalValue(): void,
		setReadOnly(readOnly?: boolean): void,
		setValue(value?: any): any,
		syncValue(): void,
		toggleSourceEdit(sourceEditMode?: boolean): void,
		transformOriginalValue(value?: any): any,
		updateToolbar(): void
	}

	declare export interface INumberField {
		allowDecimals?: boolean,
		allowExponential?: boolean,
		autoStripChars?: boolean,
		baseChars?: string,
		decimalPrecision?: number,
		decimalSeparator?: string,
		maxText?: string,
		maxValue?: number,
		minText?: string,
		minValue?: number,
		nanText?: string,
		negativeText?: string,
		step?: number,
		submitLocaleSeparator?: boolean,
		beforeBlur(): void,
		getErrors(value?: any): string[],
		getSubmitValue(): string,
		initComponent(): void,
		onSpinDown(): void,
		onSpinUp(): void,
		rawToValue(rawValue?: any): any,
		setMaxValue(value?: number): void,
		setMinValue(value?: number): void,
		setSpinDownEnabled(enabled?: any, internal?: any): void,
		setSpinUpEnabled(enabled?: any, internal?: any): void,
		valueToRaw(value?: any): any
	}

	declare export interface INumber {
		allowDecimals?: boolean,
		allowExponential?: boolean,
		autoStripChars?: boolean,
		baseChars?: string,
		decimalPrecision?: number,
		decimalSeparator?: string,
		maxText?: string,
		maxValue?: number,
		minText?: string,
		minValue?: number,
		nanText?: string,
		negativeText?: string,
		step?: number,
		submitLocaleSeparator?: boolean,
		beforeBlur(): void,
		getErrors(value?: any): string[],
		getSubmitValue(): string,
		initComponent(): void,
		onSpinDown(): void,
		onSpinUp(): void,
		rawToValue(rawValue?: any): any,
		setMaxValue(value?: number): void,
		setMinValue(value?: number): void,
		setSpinDownEnabled(enabled?: any, internal?: any): void,
		setSpinUpEnabled(enabled?: any, internal?: any): void,
		valueToRaw(value?: any): any
	}

	declare export interface IPicker {
		editable?: boolean,
		matchFieldWidth?: boolean,
		openCls?: string,
		pickerAlign?: string,
		pickerOffset?: number[],
		isExpanded?: boolean,
		alignPicker(): void,
		collapse(): void,
		createPicker(): void,
		expand(): void,
		getPicker(): Ext.IComponent,
		initComponent(): void,
		initEvents(): void,
		onTriggerClick(): void
	}

	declare export interface IRadio {
		focusCls?: string,
		inputType?: string,
		isRadio?: boolean,
		getGroupValue(): string,
		getModelData(): any,
		getSubmitValue(): any,
		onRemoved(): void,
		setValue(value?: any): Ext.form.field.IRadio
	}

	declare export interface ISpinner {
		keyNavEnabled?: boolean,
		mouseWheelEnabled?: boolean,
		repeatTriggerClick?: boolean,
		spinDownEnabled?: boolean,
		spinUpEnabled?: boolean,
		spinDownEl?: Ext.IElement,
		spinUpEl?: Ext.IElement,
		getTriggerWidth(): number,
		initComponent(): void,
		onSpinDown(): void,
		onSpinUp(): void,
		setSpinDownEnabled(enabled?: boolean): void,
		setSpinUpEnabled(enabled?: boolean): void,
		spinDown(): void,
		spinUp(): void
	}

	declare export interface ITextField {
		allowBlank?: boolean,
		allowOnlyWhitespace?: boolean,
		blankText?: string,
		disableKeyFilter?: boolean,
		emptyCls?: string,
		emptyText?: string,
		enableKeyEvents?: boolean,
		enforceMaxLength?: boolean,
		grow?: boolean,
		growAppend?: string,
		growMax?: number,
		growMin?: number,
		maskRe?: RegExp,
		maxLength?: number,
		maxLengthText?: string,
		minLength?: number,
		minLengthText?: string,
		regex?: RegExp,
		regexText?: string,
		requiredCls?: string,
		selectOnFocus?: boolean,
		size?: number,
		stripCharsRe?: RegExp,
		validateBlank?: boolean,
		validator?: any,
		vtype?: string,
		vtypeText?: string,
		afterComponentLayout(): void,
		afterRender(): void,
		applyState(state?: any): void,
		autoSize(): void,
		beforeFocus(): void,
		getErrors(value?: any): string[],
		getRawValue(): string,
		getState(): any,
		getSubTplData(): any,
		initComponent(): void,
		initEvents(): void,
		onDestroy(): void,
		onDisable(): void,
		onEnable(): void,
		postBlur(): void,
		processRawValue(value?: string): string,
		reset(): void,
		selectText(start?: number, end?: number): void,
		setValue(value?: any): any
	}

	declare export interface IText {
		allowBlank?: boolean,
		allowOnlyWhitespace?: boolean,
		blankText?: string,
		disableKeyFilter?: boolean,
		emptyCls?: string,
		emptyText?: string,
		enableKeyEvents?: boolean,
		enforceMaxLength?: boolean,
		grow?: boolean,
		growAppend?: string,
		growMax?: number,
		growMin?: number,
		maskRe?: RegExp,
		maxLength?: number,
		maxLengthText?: string,
		minLength?: number,
		minLengthText?: string,
		regex?: RegExp,
		regexText?: string,
		requiredCls?: string,
		selectOnFocus?: boolean,
		size?: number,
		stripCharsRe?: RegExp,
		validateBlank?: boolean,
		validator?: any,
		vtype?: string,
		vtypeText?: string,
		afterComponentLayout(): void,
		afterRender(): void,
		applyState(state?: any): void,
		autoSize(): void,
		beforeFocus(): void,
		getErrors(value?: any): string[],
		getRawValue(): string,
		getState(): any,
		getSubTplData(): any,
		initComponent(): void,
		initEvents(): void,
		onDestroy(): void,
		onDisable(): void,
		onEnable(): void,
		postBlur(): void,
		processRawValue(value?: string): string,
		reset(): void,
		selectText(start?: number, end?: number): void,
		setValue(value?: any): any
	}

	declare export interface ITextArea {
		cols?: number,
		componentLayout?: any,
		enterIsSpecial?: boolean,
		growAppend?: string,
		growMax?: number,
		growMin?: number,
		preventScrollbars?: boolean,
		rows?: number,
		afterRender(): void,
		autoSize(): void,
		beforeDestroy(): void,
		getSubTplData(): any,
		getValue(): any,
		transformOriginalValue(value?: any): any,
		transformRawValue(value?: any): any,
		valueToRaw(value?: any): any
	}

	declare export interface ITimeField {
		altFormats?: string,
		displayField?: string,
		format?: string,
		increment?: number,
		invalidText?: string,
		maxText?: string,
		maxValue?: any,
		minText?: string,
		minValue?: any,
		pickerMaxHeight?: number,
		queryMode?: string,
		selectOnTab?: boolean,
		snapToIncrement?: boolean,
		submitFormat?: string,
		triggerCls?: string,
		valueField?: string,
		getErrors(value?: any): string[],
		getValue(): any,
		initComponent(): void,
		postBlur(): void,
		rawToValue(rawValue?: any): any,
		setMaxValue(value?: any): void,
		setMinValue(value?: any): void,
		setValue(): any,
		valueToRaw(value?: any): any
	}

	declare export interface ITime {
		altFormats?: string,
		displayField?: string,
		format?: string,
		increment?: number,
		invalidText?: string,
		maxText?: string,
		maxValue?: any,
		minText?: string,
		minValue?: any,
		pickerMaxHeight?: number,
		queryMode?: string,
		selectOnTab?: boolean,
		snapToIncrement?: boolean,
		submitFormat?: string,
		triggerCls?: string,
		valueField?: string,
		getErrors(value?: any): string[],
		getValue(): any,
		initComponent(): void,
		postBlur(): void,
		rawToValue(rawValue?: any): any,
		setMaxValue(value?: any): void,
		setMinValue(value?: any): void,
		setValue(): any,
		valueToRaw(value?: any): any
	}

	declare export interface ITriggerField {
		componentLayout?: any,
		editable?: boolean,
		hideTrigger?: boolean,
		readOnly?: boolean,
		repeatTriggerClick?: boolean,
		selectOnFocus?: boolean,
		triggerBaseCls?: string,
		triggerCls?: string,
		triggerNoEditCls?: string,
		triggerWrapCls?: string,
		inputCell?: Ext.IElement,
		triggerEl?: Ext.ICompositeElement,
		triggerWrap?: Ext.IElement,
		getLabelableRenderData(): any,
		getSubTplData(): any,
		getTriggerWidth(): number,
		initComponent(): void,
		onRender(): void,
		onTriggerClick(e?: Ext.IEventObject): void,
		setEditable(editable?: boolean): void,
		setReadOnly(readOnly?: boolean): void
	}

	declare export interface ITwinTriggerField {
		componentLayout?: any,
		editable?: boolean,
		hideTrigger?: boolean,
		readOnly?: boolean,
		repeatTriggerClick?: boolean,
		selectOnFocus?: boolean,
		triggerBaseCls?: string,
		triggerCls?: string,
		triggerNoEditCls?: string,
		triggerWrapCls?: string,
		inputCell?: Ext.IElement,
		triggerEl?: Ext.ICompositeElement,
		triggerWrap?: Ext.IElement,
		getLabelableRenderData(): any,
		getSubTplData(): any,
		getTriggerWidth(): number,
		initComponent(): void,
		onRender(): void,
		onTriggerClick(e?: Ext.IEventObject): void,
		setEditable(editable?: boolean): void,
		setReadOnly(readOnly?: boolean): void
	}

	declare export interface ITrigger {
		componentLayout?: any,
		editable?: boolean,
		hideTrigger?: boolean,
		readOnly?: boolean,
		repeatTriggerClick?: boolean,
		selectOnFocus?: boolean,
		triggerBaseCls?: string,
		triggerCls?: string,
		triggerNoEditCls?: string,
		triggerWrapCls?: string,
		inputCell?: Ext.IElement,
		triggerEl?: Ext.ICompositeElement,
		triggerWrap?: Ext.IElement,
		getLabelableRenderData(): any,
		getSubTplData(): any,
		getTriggerWidth(): number,
		initComponent(): void,
		onRender(): void,
		onTriggerClick(e?: Ext.IEventObject): void,
		setEditable(editable?: boolean): void,
		setReadOnly(readOnly?: boolean): void
	}

	declare export interface IVTypes {
		
	}

	declare export interface IFieldAncestor {
		fieldDefaults?: any,
		initFieldAncestor(): void,
		onFieldErrorChange(field?: Ext.form.ILabelable, error?: string): void,
		onFieldValidityChange(field?: Ext.form.field.IField, valid?: boolean): void
	}

	declare export interface IFieldContainer {
		combineErrors?: boolean,
		combineLabels?: boolean,
		componentCls?: string,
		componentLayout?: any,
		invalidCls?: string,
		labelConnector?: string,
		maskOnDisable?: boolean,
		getActiveError(): string,
		getActiveErrors(): string[],
		getCombinedErrors(invalidFields?: Ext.form.field.IField[]): string[],
		getFieldLabel(): string,
		getInputId(): string,
		getLabelWidth(): number,
		getLabelableRenderData(): any,
		getSubTplMarkup(): string,
		hasActiveError(): boolean,
		hasVisibleLabel(): boolean,
		initFieldAncestor(): void,
		initLabelable(): void,
		initRenderData(): any,
		onAdd(labelable?: Ext.form.ILabelable): void,
		onFieldValidityChange(field?: Ext.form.field.IField, valid?: boolean): void,
		onRemove(labelable?: Ext.form.ILabelable): void,
		setActiveError(msg?: string): void,
		setActiveErrors(errors?: string[]): void,
		setFieldDefaults(defaults?: any): void,
		setFieldLabel(label?: string): void,
		trimLabelSeparator(): string,
		unsetActiveError(): void
	}

	declare export interface IFieldSet {
		autoEl?: any,
		baseCls?: string,
		checkboxName?: string,
		checkboxToggle?: boolean,
		collapsed?: boolean,
		collapsible?: boolean,
		componentLayout?: any,
		layout?: any,
		renderTpl?: any,
		stateEvents?: string[],
		title?: string,
		toggleOnTitleClick?: boolean,
		checkboxCmp?: Ext.form.field.ICheckbox,
		legend?: Ext.IComponent,
		maskOnDisable?: boolean,
		toggleCmp?: Ext.panel.ITool,
		collapse(): Ext.form.IFieldSet,
		createCheckboxCmp(): Ext.IComponent,
		createTitleCmp(): Ext.IComponent,
		createToggleCmp(): Ext.IComponent,
		expand(): Ext.form.IFieldSet,
		getRefItems(deep?: any): void,
		getState(): any,
		initFieldAncestor(): void,
		onFieldErrorChange(field?: Ext.form.ILabelable, error?: string): void,
		onFieldValidityChange(field?: Ext.form.field.IField, valid?: boolean): void,
		setTitle(title?: string): Ext.form.IFieldSet,
		toggle(): void
	}

	declare export interface ILabel {
		autoEl?: any,
		forId?: string,
		html?: string,
		text?: string,
		setText(text?: string, encode?: boolean): Ext.form.ILabel
	}

	declare export interface ILabelable {
		activeError?: string,
		activeErrorsTpl?: any,
		afterBodyEl?: any,
		afterLabelTextTpl?: any,
		afterLabelTpl?: any,
		afterSubTpl?: any,
		autoFitErrors?: boolean,
		baseBodyCls?: string,
		beforeBodyEl?: any,
		beforeLabelTextTpl?: any,
		beforeLabelTpl?: any,
		beforeSubTpl?: any,
		clearCls?: string,
		errorMsgCls?: string,
		fieldBodyCls?: string,
		fieldLabel?: string,
		formItemCls?: string,
		hideEmptyLabel?: boolean,
		hideLabel?: boolean,
		invalidCls?: string,
		labelAlign?: string,
		labelAttrTpl?: any,
		labelCls?: string,
		labelClsExtra?: string,
		labelPad?: number,
		labelSeparator?: string,
		labelStyle?: string,
		labelWidth?: number,
		msgTarget?: string,
		preventMark?: boolean,
		bodyEl?: Ext.IElement,
		errorEl?: Ext.IElement,
		isFieldLabelable?: boolean,
		labelCell?: Ext.IElement,
		labelEl?: Ext.IElement,
		getActiveError(): string,
		getActiveErrors(): string[],
		getFieldLabel(): string,
		getInputId(): string,
		getLabelWidth(): number,
		getLabelableRenderData(): any,
		getSubTplMarkup(): string,
		hasActiveError(): boolean,
		hasVisibleLabel(): boolean,
		initLabelable(): void,
		setActiveError(msg?: string): void,
		setActiveErrors(errors?: string[]): void,
		setFieldDefaults(defaults?: any): void,
		setFieldLabel(label?: string): void,
		trimLabelSeparator(): string,
		unsetActiveError(): void
	}

	declare export interface IPanel {
		layout?: any,
		pollForChanges?: boolean,
		pollInterval?: number,
		checkChange(): void,
		getForm(): Ext.form.IBasic,
		getRecord(): Ext.data.IModel,
		getValues(
		asString?: boolean, dirtyOnly?: boolean, includeEmptyText?: boolean, useDataValues?: boolean
	): any,
		hasInvalidField(): void,
		initFieldAncestor(): void,
		isDirty(): boolean,
		isValid(): boolean,
		load(options?: any): void,
		loadRecord(record?: Ext.data.IModel): Ext.form.IBasic,
		onFieldErrorChange(field?: Ext.form.ILabelable, error?: string): void,
		onFieldValidityChange(field?: Ext.form.field.IField, valid?: boolean): void,
		startPolling(interval?: number): void,
		stopPolling(): void,
		submit(options?: any): void,
		updateRecord(record?: Ext.data.IModel): Ext.form.IBasic
	}

	declare export interface IFormPanel {
		layout?: any,
		pollForChanges?: boolean,
		pollInterval?: number,
		checkChange(): void,
		getForm(): Ext.form.IBasic,
		getRecord(): Ext.data.IModel,
		getValues(
		asString?: boolean, dirtyOnly?: boolean, includeEmptyText?: boolean, useDataValues?: boolean
	): any,
		hasInvalidField(): void,
		initFieldAncestor(): void,
		isDirty(): boolean,
		isValid(): boolean,
		load(options?: any): void,
		loadRecord(record?: Ext.data.IModel): Ext.form.IBasic,
		onFieldErrorChange(field?: Ext.form.ILabelable, error?: string): void,
		onFieldValidityChange(field?: Ext.form.field.IField, valid?: boolean): void,
		startPolling(interval?: number): void,
		stopPolling(): void,
		submit(options?: any): void,
		updateRecord(record?: Ext.data.IModel): Ext.form.IBasic
	}

	declare export interface IRadioGroup {
		allowBlank?: boolean,
		blankText?: string,
		defaultType?: string,
		items?: any,
		checkChange(): void,
		setValue(value?: any): Ext.form.ICheckboxGroup
	}

	declare export interface IRadioManager {
		
	}

	declare export interface ISliderField {
		getValue(): any,
		setValue(value?: number, animate?: boolean): void
	}

		declare export class CheckboxManager  {
		hasListeners: any;
		isMixedCollection: boolean;
		isObservable: boolean;
		isSortable: boolean;
		self: Ext.IClass;
		sorters: Ext.util.IMixedCollection;
		add(key?: any, obj?: any): any;
		addAll(objs?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(): void;
		clearListeners(): void;
		clearManagedListeners(): void;
		clone(): Ext.util.IMixedCollection;
		collect(property?: string, root?: string, allowBlank?: boolean): any[];
		contains(o?: any): boolean;
		containsKey(key?: string): boolean;
		each(fn?: any, scope?: any): void;
		eachKey(fn?: any, scope?: any): void;
		enableBubble(eventNames?: any): void;
		filter(
		property?: any, value?: any, anyMatch?: boolean, caseSensitive?: boolean
	): Ext.util.IMixedCollection;
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection;
		find(): void;
		findBy(fn?: any, scope?: any): any;
		findIndex(
		property?: string, value?: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean
	): number;
		findIndexBy(fn?: any, scope?: any, start?: number): number;
		findInsertionIndex(newItem?: any, sorterFn?: any): number;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		first(): any;
		generateComparator(): void;
		get(key?: any): any;
		getAt(index?: number): any;
		getByKey(key?: any): any;
		getCount(): number;
		getFirstSorter(): Ext.util.ISorter;
		getInitialConfig(name?: string): any;
		getKey(item?: any): any;
		getRange(startIndex?: number, endIndex?: number): any[];
		hasListener(eventName?: string): boolean;
		indexOf(o?: any): number;
		indexOfKey(key?: string): number;
		initConfig(config?: any): Ext.IBase;
		initSortable(): void;
		insert(index?: number, key?: any, o?: any): any;
		last(): any;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		remove(o?: any): any;
		removeAll(items?: any[]): Ext.util.IMixedCollection;
		removeAt(index?: number): any;
		removeAtKey(key?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeRange(index?: number, removeCount?: number): any;
		reorder(mapping?: any): void;
		replace(key?: string, o?: any): any;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		sort(sorters?: any, direction?: string): Ext.util.ISorter[];
		sortBy(sorterFn?: any): void;
		sortByKey(direction?: string, fn?: any): void;
		statics(): Ext.IClass;
		sum(property?: string, root?: string, start?: number, end?: number): number;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void;
		updateKey(oldKey?: any, newKey?: any): void
	}

	declare export class VTypes  {
		alphaMask: RegExp;
		alphaText: string;
		alphanumMask: RegExp;
		alphanumText: string;
		emailMask: RegExp;
		emailText: string;
		self: Ext.IClass;
		urlText: string;
		alpha(value?: string): boolean;
		alphanum(value?: string): boolean;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		email(value?: string): boolean;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass;
		url(value?: string): boolean
	}

	declare export class RadioManager  {
		hasListeners: any;
		isMixedCollection: boolean;
		isObservable: boolean;
		isSortable: boolean;
		self: Ext.IClass;
		sorters: Ext.util.IMixedCollection;
		add(key?: any, obj?: any): any;
		addAll(objs?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(): void;
		clearListeners(): void;
		clearManagedListeners(): void;
		clone(): Ext.util.IMixedCollection;
		collect(property?: string, root?: string, allowBlank?: boolean): any[];
		contains(o?: any): boolean;
		containsKey(key?: string): boolean;
		each(fn?: any, scope?: any): void;
		eachKey(fn?: any, scope?: any): void;
		enableBubble(eventNames?: any): void;
		filter(
		property?: any, value?: any, anyMatch?: boolean, caseSensitive?: boolean
	): Ext.util.IMixedCollection;
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection;
		find(): void;
		findBy(fn?: any, scope?: any): any;
		findIndex(
		property?: string, value?: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean
	): number;
		findIndexBy(fn?: any, scope?: any, start?: number): number;
		findInsertionIndex(newItem?: any, sorterFn?: any): number;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		first(): any;
		generateComparator(): void;
		get(key?: any): any;
		getAt(index?: number): any;
		getByKey(key?: any): any;
		getCount(): number;
		getFirstSorter(): Ext.util.ISorter;
		getInitialConfig(name?: string): any;
		getKey(item?: any): any;
		getRange(startIndex?: number, endIndex?: number): any[];
		hasListener(eventName?: string): boolean;
		indexOf(o?: any): number;
		indexOfKey(key?: string): number;
		initConfig(config?: any): Ext.IBase;
		initSortable(): void;
		insert(index?: number, key?: any, o?: any): any;
		last(): any;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		remove(o?: any): any;
		removeAll(items?: any[]): Ext.util.IMixedCollection;
		removeAt(index?: number): any;
		removeAtKey(key?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		removeRange(index?: number, removeCount?: number): any;
		reorder(mapping?: any): void;
		replace(key?: string, o?: any): any;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		sort(sorters?: any, direction?: string): Ext.util.ISorter[];
		sortBy(sorterFn?: any): void;
		sortByKey(direction?: string, fn?: any): void;
		statics(): Ext.IClass;
		sum(property?: string, root?: string, start?: number, end?: number): number;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void;
		updateKey(oldKey?: any, newKey?: any): void
	}

	
}

declare module 'field' {
		declare export interface IBase {
		baseCls?: string,
		checkChangeBuffer?: number,
		checkChangeEvents?: string[],
		componentLayout?: any,
		dirtyCls?: string,
		fieldCls?: string,
		fieldStyle?: string,
		focusCls?: string,
		inputAttrTpl?: any,
		inputId?: string,
		inputType?: string,
		invalidText?: string,
		name?: string,
		readOnly?: boolean,
		readOnlyCls?: string,
		tabIndex?: number,
		validateOnBlur?: boolean,
		inputEl?: Ext.IElement,
		maskOnDisable?: boolean,
		batchChanges(fn?: any): void,
		beforeReset(): void,
		checkChange(): void,
		checkDirty(): void,
		clearInvalid(): void,
		doComponentLayout(): Ext.container.IContainer,
		extractFileInput(): HTMLElement,
		getActiveError(): string,
		getActiveErrors(): string[],
		getErrors(value?: any): string[],
		getFieldLabel(): string,
		getLabelWidth(): number,
		getLabelableRenderData(): any,
		getModelData(): any,
		getName(): string,
		getRawValue(): any,
		getSubTplData(): any,
		getSubmitData(): any,
		getSubmitValue(): any,
		getValue(): any,
		hasActiveError(): boolean,
		hasVisibleLabel(): boolean,
		initComponent(): void,
		initEvents(): void,
		initField(): void,
		initLabelable(): void,
		initRenderData(): any,
		initValue(): void,
		isDirty(): boolean,
		isEqual(value1?: any, value2?: any): boolean,
		isFileUpload(): boolean,
		isValid(): boolean,
		markInvalid(errors?: any): void,
		onDisable(): void,
		onEnable(): void,
		onRender(): void,
		processRawValue(value?: any): any,
		rawToValue(rawValue?: any): any,
		reset(): void,
		resetOriginalValue(): void,
		setActiveError(msg?: string): void,
		setActiveErrors(errors?: string[]): void,
		setFieldDefaults(defaults?: any): void,
		setFieldLabel(label?: string): void,
		setFieldStyle(style?: any): void,
		setRawValue(value?: any): any,
		setReadOnly(readOnly?: boolean): void,
		setValue(value?: any): any,
		transformOriginalValue(value?: any): any,
		transformRawValue(value?: any): any,
		trimLabelSeparator(): string,
		unsetActiveError(): void,
		validate(): boolean,
		validateValue(value?: any): boolean,
		valueToRaw(value?: any): any
	}

	declare export interface ICheckbox {
		afterBoxLabelTextTpl?: any,
		afterBoxLabelTpl?: any,
		beforeBoxLabelTextTpl?: any,
		beforeBoxLabelTpl?: any,
		boxLabel?: string,
		boxLabelAlign?: string,
		boxLabelAttrTpl?: any,
		boxLabelCls?: string,
		checkChangeEvents?: string[],
		checked?: boolean,
		checkedCls?: string,
		componentLayout?: any,
		fieldCls?: string,
		focusCls?: string,
		handler?: any,
		inputType?: string,
		inputValue?: string,
		scope?: any,
		uncheckedValue?: string,
		boxLabelEl?: Ext.IElement,
		originalValue?: any,
		beforeDestroy(): void,
		getRawValue(): boolean,
		getSubTplData(): any,
		getSubmitValue(): any,
		getValue(): boolean,
		initComponent(): void,
		initEvents(): void,
		initValue(): void,
		onEnable(): void,
		resetOriginalValue(fromBoxInGroup?: any): void,
		setBoxLabel(boxLabel?: string): void,
		setRawValue(value?: any): boolean,
		setReadOnly(readOnly?: any): void,
		setValue(checked?: any): Ext.form.field.ICheckbox,
		valueToRaw(value?: any): any
	}

	declare export interface IComboBox {
		allQuery?: string,
		anyMatch?: boolean,
		autoSelect?: boolean,
		caseSensitive?: boolean,
		componentLayout?: any,
		defaultListConfig?: any,
		delimiter?: string,
		displayField?: string,
		enableRegEx?: boolean,
		fieldSubTpl?: Ext.IXTemplate,
		forceSelection?: boolean,
		growToLongestValue?: boolean,
		hiddenName?: string,
		listConfig?: any,
		minChars?: number,
		multiSelect?: boolean,
		pageSize?: number,
		queryCaching?: boolean,
		queryDelay?: number,
		queryMode?: string,
		queryParam?: string,
		selectOnTab?: boolean,
		store?: any,
		transform?: any,
		triggerAction?: string,
		triggerCls?: string,
		typeAhead?: boolean,
		typeAheadDelay?: number,
		valueField?: string,
		valueNotFoundText?: string,
		lastQuery?: string,
		afterQuery(queryPlan?: any): void,
		afterRender(): void,
		alignPicker(): void,
		beforeBlur(): void,
		beforeQuery(queryPlan?: any): void,
		beforeReset(): void,
		bindStore(store?: any): void,
		bindStoreListeners(store?: Ext.data.IAbstractStore): void,
		clearValue(): void,
		createPicker(): void,
		doQuery(queryString?: string, forceAll?: boolean, rawQuery?: boolean): boolean,
		findRecord(field?: string, value?: any): Ext.data.IModel,
		findRecordByDisplay(value?: any): Ext.data.IModel,
		findRecordByValue(value?: any): Ext.data.IModel,
		getStore(): Ext.data.IStore,
		getStoreListeners(): any,
		getSubTplData(): any,
		getSubmitValue(): string,
		getValue(): any,
		initComponent(): void,
		initEvents(): void,
		onAdded(): void,
		onBindStore(store?: any, initial?: any): void,
		onTriggerClick(): void,
		onUnbindStore(store?: any): void,
		select(r?: any): void,
		setValue(value?: any): any,
		unbindStoreListeners(store?: Ext.data.IAbstractStore): void
	}

	declare export interface IDate {
		altFormats?: string,
		disabledDates?: string[],
		disabledDatesText?: string,
		disabledDays?: number[],
		disabledDaysText?: string,
		format?: string,
		invalidText?: string,
		matchFieldWidth?: boolean,
		maxText?: string,
		maxValue?: any,
		minText?: string,
		minValue?: any,
		showToday?: boolean,
		startDay?: number,
		submitFormat?: string,
		triggerCls?: string,
		useStrict?: boolean,
		beforeBlur(): void,
		createPicker(): void,
		getErrors(value?: any): string[],
		initComponent(): void,
		initValue(): void,
		rawToValue(rawValue?: any): any,
		safeParse?: any,
		setDisabledDates(disabledDates?: string[]): void,
		setDisabledDays(disabledDays?: number[]): void,
		setMaxValue(value?: any): void,
		setMinValue(value?: any): void,
		setValue(date?: any): Ext.form.field.IDate,
		valueToRaw(value?: any): any
	}

	declare export interface IDisplay {
		fieldBodyCls?: string,
		fieldCls?: string,
		htmlEncode?: boolean,
		renderer?: any,
		scope?: any,
		submitValue?: boolean,
		getRawValue(): string,
		getSubTplData(): any,
		initEvents(): void,
		isDirty(): boolean,
		isValid(): boolean,
		setRawValue(value?: any): any,
		validate(): boolean
	}

	declare export interface IField {
		disabled?: boolean,
		name?: string,
		submitValue?: boolean,
		validateOnChange?: boolean,
		value?: any,
		isFormField?: boolean,
		originalValue?: any,
		batchChanges(fn?: any): void,
		beforeReset(): void,
		checkChange(): void,
		checkDirty(): void,
		clearInvalid(): void,
		extractFileInput(): any,
		getErrors(value?: any): any,
		getModelData(): any,
		getName(): string,
		getSubmitData(): any,
		getValue(): any,
		initField(): void,
		initValue(): void,
		isDirty(): any,
		isEqual(value1?: any, value2?: any): any,
		isFileUpload(): any,
		isValid(): any,
		markInvalid(errors?: any): void,
		reset(): void,
		resetOriginalValue(): void,
		setValue(value?: any): any,
		transformOriginalValue(value?: any): any,
		validate(): any
	}

	declare export interface IFile {
		buttonConfig?: any,
		buttonMargin?: number,
		buttonOnly?: boolean,
		buttonText?: string,
		clearOnSubmit?: boolean,
		componentLayout?: any,
		readOnly?: boolean,
		button?: Ext.button.IButton,
		fileInputEl?: Ext.IElement,
		extractFileInput(): HTMLElement,
		getTriggerMarkup(): void,
		isFileUpload(): boolean,
		onDisable(): void,
		onEnable(): void,
		onRender(): void,
		onShow(): void,
		reset(): void,
		setValue(): void
	}

	declare export interface IFileButton {
		cls?: string,
		preventDefault?: boolean,
		renderTpl?: any,
		afterRender(): void,
		getTemplateArgs(): any,
		onDisable(): void,
		onEnable(): void
	}

	declare export interface IHidden {
		hidden?: boolean,
		hideLabel?: boolean,
		inputType?: string,
		clearInvalid(): void,
		initComponent(): void,
		initEvents(): void,
		markInvalid(): void,
		setHeight(): Ext.IComponent,
		setPagePosition(): Ext.IComponent,
		setPosition(): Ext.IComponent,
		setSize(): Ext.IComponent,
		setWidth(): Ext.IComponent
	}

	declare export interface IHtmlEditor {
		afterIFrameTpl?: any,
		afterTextAreaTpl?: any,
		beforeIFrameTpl?: any,
		beforeTextAreaTpl?: any,
		componentLayout?: any,
		createLinkText?: string,
		defaultButtonUI?: string,
		defaultLinkValue?: string,
		defaultValue?: string,
		enableAlignments?: boolean,
		enableColors?: boolean,
		enableFont?: boolean,
		enableFontSize?: boolean,
		enableFormat?: boolean,
		enableLinks?: boolean,
		enableLists?: boolean,
		enableSourceEdit?: boolean,
		fontFamilies?: string[],
		iframeAttrTpl?: any,
		buttonTips?: any,
		maskOnDisable?: boolean,
		batchChanges(fn?: any): void,
		beforeReset(): void,
		checkChange(): void,
		checkDirty(): void,
		cleanHtml(html?: string): string,
		clearInvalid(): void,
		execCmd(cmd?: string, value?: any): void,
		extractFileInput(): HTMLElement,
		focus(selectText?: any, delay?: any): Ext.IComponent,
		getDocMarkup(): void,
		getErrors(value?: any): string[],
		getModelData(): any,
		getName(): string,
		getSubmitData(): any,
		getToolbar(): Ext.toolbar.IToolbar,
		getValue(): any,
		initField(): void,
		initValue(): void,
		insertAtCursor(text?: string): void,
		isDirty(): boolean,
		isEqual(value1?: any, value2?: any): boolean,
		isFileUpload(): boolean,
		isValid(): boolean,
		markInvalid(errors?: any): void,
		pushValue(): void,
		relayCmd(cmd?: string, value?: any): void,
		reset(): void,
		resetOriginalValue(): void,
		setReadOnly(readOnly?: boolean): void,
		setValue(value?: any): any,
		syncValue(): void,
		toggleSourceEdit(sourceEditMode?: boolean): void,
		transformOriginalValue(value?: any): any,
		updateToolbar(): void
	}

	declare export interface INumber {
		allowDecimals?: boolean,
		allowExponential?: boolean,
		autoStripChars?: boolean,
		baseChars?: string,
		decimalPrecision?: number,
		decimalSeparator?: string,
		maxText?: string,
		maxValue?: number,
		minText?: string,
		minValue?: number,
		nanText?: string,
		negativeText?: string,
		step?: number,
		submitLocaleSeparator?: boolean,
		beforeBlur(): void,
		getErrors(value?: any): string[],
		getSubmitValue(): string,
		initComponent(): void,
		onSpinDown(): void,
		onSpinUp(): void,
		rawToValue(rawValue?: any): any,
		setMaxValue(value?: number): void,
		setMinValue(value?: number): void,
		setSpinDownEnabled(enabled?: any, internal?: any): void,
		setSpinUpEnabled(enabled?: any, internal?: any): void,
		valueToRaw(value?: any): any
	}

	declare export interface IPicker {
		editable?: boolean,
		matchFieldWidth?: boolean,
		openCls?: string,
		pickerAlign?: string,
		pickerOffset?: number[],
		isExpanded?: boolean,
		alignPicker(): void,
		collapse(): void,
		createPicker(): void,
		expand(): void,
		getPicker(): Ext.IComponent,
		initComponent(): void,
		initEvents(): void,
		onTriggerClick(): void
	}

	declare export interface IRadio {
		focusCls?: string,
		inputType?: string,
		isRadio?: boolean,
		getGroupValue(): string,
		getModelData(): any,
		getSubmitValue(): any,
		onRemoved(): void,
		setValue(value?: any): Ext.form.field.IRadio
	}

	declare export interface ISpinner {
		keyNavEnabled?: boolean,
		mouseWheelEnabled?: boolean,
		repeatTriggerClick?: boolean,
		spinDownEnabled?: boolean,
		spinUpEnabled?: boolean,
		spinDownEl?: Ext.IElement,
		spinUpEl?: Ext.IElement,
		getTriggerWidth(): number,
		initComponent(): void,
		onSpinDown(): void,
		onSpinUp(): void,
		setSpinDownEnabled(enabled?: boolean): void,
		setSpinUpEnabled(enabled?: boolean): void,
		spinDown(): void,
		spinUp(): void
	}

	declare export interface IText {
		allowBlank?: boolean,
		allowOnlyWhitespace?: boolean,
		blankText?: string,
		disableKeyFilter?: boolean,
		emptyCls?: string,
		emptyText?: string,
		enableKeyEvents?: boolean,
		enforceMaxLength?: boolean,
		grow?: boolean,
		growAppend?: string,
		growMax?: number,
		growMin?: number,
		maskRe?: RegExp,
		maxLength?: number,
		maxLengthText?: string,
		minLength?: number,
		minLengthText?: string,
		regex?: RegExp,
		regexText?: string,
		requiredCls?: string,
		selectOnFocus?: boolean,
		size?: number,
		stripCharsRe?: RegExp,
		validateBlank?: boolean,
		validator?: any,
		vtype?: string,
		vtypeText?: string,
		afterComponentLayout(): void,
		afterRender(): void,
		applyState(state?: any): void,
		autoSize(): void,
		beforeFocus(): void,
		getErrors(value?: any): string[],
		getRawValue(): string,
		getState(): any,
		getSubTplData(): any,
		initComponent(): void,
		initEvents(): void,
		onDestroy(): void,
		onDisable(): void,
		onEnable(): void,
		postBlur(): void,
		processRawValue(value?: string): string,
		reset(): void,
		selectText(start?: number, end?: number): void,
		setValue(value?: any): any
	}

	declare export interface ITextArea {
		cols?: number,
		componentLayout?: any,
		enterIsSpecial?: boolean,
		growAppend?: string,
		growMax?: number,
		growMin?: number,
		preventScrollbars?: boolean,
		rows?: number,
		afterRender(): void,
		autoSize(): void,
		beforeDestroy(): void,
		getSubTplData(): any,
		getValue(): any,
		transformOriginalValue(value?: any): any,
		transformRawValue(value?: any): any,
		valueToRaw(value?: any): any
	}

	declare export interface ITime {
		altFormats?: string,
		displayField?: string,
		format?: string,
		increment?: number,
		invalidText?: string,
		maxText?: string,
		maxValue?: any,
		minText?: string,
		minValue?: any,
		pickerMaxHeight?: number,
		queryMode?: string,
		selectOnTab?: boolean,
		snapToIncrement?: boolean,
		submitFormat?: string,
		triggerCls?: string,
		valueField?: string,
		getErrors(value?: any): string[],
		getValue(): any,
		initComponent(): void,
		postBlur(): void,
		rawToValue(rawValue?: any): any,
		setMaxValue(value?: any): void,
		setMinValue(value?: any): void,
		setValue(): any,
		valueToRaw(value?: any): any
	}

	declare export interface ITrigger {
		componentLayout?: any,
		editable?: boolean,
		hideTrigger?: boolean,
		readOnly?: boolean,
		repeatTriggerClick?: boolean,
		selectOnFocus?: boolean,
		triggerBaseCls?: string,
		triggerCls?: string,
		triggerNoEditCls?: string,
		triggerWrapCls?: string,
		inputCell?: Ext.IElement,
		triggerEl?: Ext.ICompositeElement,
		triggerWrap?: Ext.IElement,
		getLabelableRenderData(): any,
		getSubTplData(): any,
		getTriggerWidth(): number,
		initComponent(): void,
		onRender(): void,
		onTriggerClick(e?: Ext.IEventObject): void,
		setEditable(editable?: boolean): void,
		setReadOnly(readOnly?: boolean): void
	}

	declare export interface IVTypes {
		
	}

	declare export interface IComboBox {
		
	}

	declare export interface IField {
		elementId?: any,
		errorStrategies?: any,
		labelStrategies?: any,
		left?: any,
		qtip?: any,
		right?: any,
		side?: any,
		title?: any,
		top?: any,
		under?: any,
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any): void,
		finishedLayout(ownerContext?: any): void,
		getErrorStrategy(): void,
		getLabelStrategy(): void
	}

	declare export interface IFieldContainer {
		beginLayout(ownerContext?: any): void
	}

	declare export interface IHtmlEditor {
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any): void,
		finishedLayout(): void
	}

	declare export interface ISlider {
		beginLayout(ownerContext?: any): void
	}

	declare export interface IText {
		beginLayoutCycle(ownerContext?: any): void
	}

	declare export interface ITextArea {
		beginLayout(ownerContext?: any): void
	}

	declare export interface ITrigger {
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any): void
	}

		declare export class VTypes  {
		alphaMask: RegExp;
		alphaText: string;
		alphanumMask: RegExp;
		alphanumText: string;
		emailMask: RegExp;
		emailText: string;
		self: Ext.IClass;
		urlText: string;
		alpha(value?: string): boolean;
		alphanum(value?: string): boolean;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		email(value?: string): boolean;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass;
		url(value?: string): boolean
	}

	declare export class Field  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		createAlias(alias?: any, origin?: any): void;
		destroyTip(): void;
		getName(): string;
		implement(): void;
		initTip(): void;
		override(members?: any): Ext.IBase
	}

	
}

declare module 'util' {
		declare export interface IFunctions {
		
	}

	declare export interface IAbstractMixedCollection {
		allowFunctions?: boolean,
		isMixedCollection?: boolean,
		add(key?: any, obj?: any): any,
		addAll(objs?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clear(): void,
		clearListeners(): void,
		clearManagedListeners(): void,
		clone(): Ext.util.IMixedCollection,
		collect(property?: string, root?: string, allowBlank?: boolean): any[],
		contains(o?: any): boolean,
		containsKey(key?: string): boolean,
		each(fn?: any, scope?: any): void,
		eachKey(fn?: any, scope?: any): void,
		enableBubble(eventNames?: any): void,
		filter(
		property?: any, value?: any, anyMatch?: boolean, caseSensitive?: boolean
	): Ext.util.IMixedCollection,
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection,
		find(): void,
		findBy(fn?: any, scope?: any): any,
		findIndex(
		property?: string, value?: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean
	): number,
		findIndexBy(fn?: any, scope?: any, start?: number): number,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		first(): any,
		get(key?: any): any,
		getAt(index?: number): any,
		getByKey(key?: any): any,
		getCount(): number,
		getKey(item?: any): any,
		getRange(startIndex?: number, endIndex?: number): any[],
		hasListener(eventName?: string): boolean,
		indexOf(o?: any): number,
		indexOfKey(key?: string): number,
		insert(index?: number, key?: any, o?: any): any,
		last(): any,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		remove(o?: any): any,
		removeAll(items?: any[]): Ext.util.IMixedCollection,
		removeAt(index?: number): any,
		removeAtKey(key?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		removeRange(index?: number, removeCount?: number): any,
		replace(key?: string, o?: any): any,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		sum(property?: string, root?: string, start?: number, end?: number): number,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void,
		updateKey(oldKey?: any, newKey?: any): void
	}

	declare export interface IAnimate {
		animate?: any,
		getActiveAnimation(): any,
		hasActiveFx(): any,
		sequenceFx(): any,
		stopAnimation(): Ext.IElement,
		stopFx(): Ext.IElement,
		syncFx(): any
	}

	declare export interface IBindable {
		bindStore(store?: any): void,
		bindStoreListeners(store?: Ext.data.IAbstractStore): void,
		getStore(): Ext.data.IAbstractStore,
		getStoreListeners(store?: Ext.data.IStore): any,
		onBindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		onUnbindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		unbindStoreListeners(store?: Ext.data.IAbstractStore): void
	}

	declare export interface IClickRepeater {
		accelerate?: boolean,
		delay?: number,
		el?: any,
		interval?: number,
		pressedCls?: string,
		preventDefault?: boolean,
		stopDefault?: boolean,
		disable(force?: any): void,
		enable(): void,
		setDisabled(disabled?: boolean): void
	}

	declare export interface IComponentDragger {
		constrain?: boolean,
		constrainDelegate?: boolean,
		onDrag(e?: any): void,
		onEnd(e?: any): void,
		onStart(e?: any): void
	}

	declare export interface ICookies {
		
	}

	declare export interface ICSS {
		
	}

	declare export interface IDelayedTask {
		id?: number,
		cancel(): void,
		delay(newDelay?: number, newFn?: any, newScope?: any, newArgs?: any[]): void
	}

	declare export interface IElementContainer {
		addChildEls(): void,
		removeChildEls(testFn?: any): void
	}

	declare export interface IEvent {
		isEvent?: boolean
	}

	declare export interface IFilter {
		anyMatch?: boolean,
		caseSensitive?: boolean,
		exactMatch?: boolean,
		filterFn?: any,
		id?: string,
		operator?: string,
		property?: string,
		root?: string,
		value?: any,
		disabled?: boolean,
		setFilterFn(filterFn?: any): void,
		setValue(value?: any): void
	}

	declare export interface IFloating {
		constrain?: boolean,
		fixed?: boolean,
		focusOnToFront?: boolean,
		shadow?: any,
		shadowOffset?: number,
		center(): Ext.IComponent,
		doConstrain(constrainTo?: any): void,
		setActive(active?: boolean, newActive?: Ext.IComponent): void,
		toBack(): Ext.IComponent,
		toFront(preventFocus?: boolean): Ext.IComponent
	}

	declare export interface IFormat {
		
	}

	declare export interface IGrouper {
		getGroupString(instance?: Ext.data.IModel): string
	}

	declare export interface IHashMap {
		keyFn?: any,
		add(key?: any, o?: any): any,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clear(initial?: any): Ext.util.IHashMap,
		clearListeners(): void,
		clearManagedListeners(): void,
		clone(): Ext.util.IHashMap,
		contains(value?: any): boolean,
		containsKey(key?: string): boolean,
		each(fn?: any, scope?: any): Ext.util.IHashMap,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		get(key?: string): any,
		getCount(): number,
		getKey(o?: any): string,
		getKeys(): any[],
		getValues(): any[],
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		remove(o?: any): boolean,
		removeAtKey(key?: string): boolean,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		replace(key?: string, value?: any): any,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IHistory {
		
	}

	declare export interface IInflector {
		
	}

	declare export interface IKeyMap {
		binding?: any,
		eventName?: string,
		ignoreInputFields?: boolean,
		processEvent?: any,
		processEventScope?: any,
		target?: any,
		addBinding(binding?: any): void,
		destroy(removeTarget?: boolean): void,
		disable(): void,
		enable(): void,
		isEnabled(): boolean,
		on(key?: any, fn?: any, scope?: any): void,
		removeBinding(binding?: any): void,
		setDisabled(disabled?: boolean): void,
		un(key?: any, fn?: any, scope?: any): void
	}

	declare export interface IKeyNav {
		defaultEventAction?: string,
		disabled?: boolean,
		eventName?: string,
		forceKeyDown?: boolean,
		ignoreInputFields?: boolean,
		keyMap?: Ext.util.IKeyMap,
		processEvent?: any,
		processEventScope?: any,
		target?: any,
		destroy(removeEl?: boolean): void,
		disable(): void,
		enable(): void,
		setDisabled(disabled?: boolean): void
	}

	declare export interface ILruCache {
		maxSize?: number,
		add(key?: any, newValue?: any): any,
		clear(initial?: any): Ext.util.IHashMap,
		clone(): Ext.util.IHashMap,
		each(fn?: any, scope?: any, reverse?: boolean): Ext.util.ILruCache,
		get(key?: any): any,
		prune(): void
	}

	declare export interface IMemento {
		target?: any,
		capture(props?: any, target?: any): void,
		remove(props?: any): void,
		restore(props?: any, clear?: boolean, target?: any): void,
		restoreAll(clear?: boolean, target?: any): void
	}

	declare export interface IMixedCollection {
		allowFunctions?: boolean,
		findInsertionIndex(newItem?: any, sorterFn?: any): number,
		generateComparator(): void,
		getFirstSorter(): Ext.util.ISorter,
		initSortable(): void,
		reorder(mapping?: any): void,
		sort(sorters?: any, direction?: string): Ext.util.ISorter[],
		sortBy(sorterFn?: any): void,
		sortByKey(direction?: string, fn?: any): void
	}

	declare export interface IObservable {
		listeners?: any,
		hasListeners?: any,
		isObservable?: boolean,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IOffset {
		
	}

	declare export interface IPoint {
		equals(p?: any): boolean,
		isContainedBy(region?: any): boolean,
		isWithin(p?: any, threshold?: any): boolean,
		roundedEquals(p?: any): boolean,
		toString(): string,
		translate(x?: any, y?: number): Ext.util.IRegion
	}

	declare export interface IPositionable {
		alignTo(
		element?: any, position?: string, offsets?: number[], animate?: any
	): Ext.util.IPositionable,
		anchorTo(
		element?: any, position?: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: any
	): Ext.util.IPositionable,
		calculateConstrainedPosition(
		constrainTo?: any, proposedPosition?: number[], local?: boolean, proposedSize?: number[]
	): number[],
		getAlignToXY(element?: any, position?: string, offsets?: number[]): number[],
		getAnchorXY(anchor?: string, local?: boolean, size?: any): number[],
		getBox(contentBox?: boolean, local?: boolean): any,
		getConstrainVector(constrainTo?: any, proposedPosition?: number[], proposedSize?: number[]): any,
		getLocalX(): number,
		getLocalXY(): number[],
		getLocalY(): number,
		getOffsetsTo(offsetsTo?: any): number[],
		getRegion(): Ext.util.IRegion,
		getViewRegion(): Ext.util.IRegion,
		getX(): number,
		getXY(): number[],
		getY(): number,
		move(direction?: string, distance?: number, animate?: any): void,
		removeAnchor(): Ext.util.IPositionable,
		setBox(box?: any, animate?: any): Ext.util.IPositionable,
		setLocalX(x?: number): Ext.util.IPositionable,
		setLocalXY(x?: any, y?: number): Ext.util.IPositionable,
		setLocalY(y?: number): Ext.util.IPositionable,
		setRegion(region?: Ext.util.IRegion, animate?: any): Ext.util.IPositionable,
		setX(The?: number, animate?: any): Ext.util.IPositionable,
		setXY(pos?: number[], animate?: any): Ext.util.IPositionable,
		setY(The?: number, animate?: any): Ext.util.IPositionable,
		translatePoints(x?: any, y?: number): any
	}

	declare export interface IProtoElement {
		clsProp?: string,
		removedProp?: string,
		styleIsText?: boolean,
		styleProp?: string,
		addCls(cls?: string): Ext.util.IProtoElement,
		flush(): void,
		hasCls(cls?: string): boolean,
		removeCls(cls?: string): Ext.util.IProtoElement,
		setStyle(prop?: any, value?: string): Ext.util.IProtoElement,
		writeTo(to?: any): any
	}

	declare export interface IQueue {
		clear(): void,
		getCount(): number,
		remove(obj?: any): any
	}

	declare export interface IRegion {
		adjust(top?: number, right?: number, bottom?: number, left?: number): Ext.util.IRegion,
		constrainTo(targetRegion?: Ext.util.IRegion): Ext.util.IRegion,
		contains(region?: Ext.util.IRegion): boolean,
		copy(): Ext.util.IRegion,
		copyFrom(p?: Ext.util.IRegion): Ext.util.IRegion,
		equals(region?: Ext.util.IRegion): boolean,
		getOutOfBoundOffset(axis?: string, p?: Ext.util.IPoint): Ext.util.IOffset,
		getOutOfBoundOffsetX(p?: number): number,
		getOutOfBoundOffsetY(p?: number): number,
		intersect(region?: Ext.util.IRegion): any,
		isOutOfBound(axis?: string, p?: any): boolean,
		isOutOfBoundX(p?: number): boolean,
		isOutOfBoundY(p?: number): boolean,
		round(): Ext.util.IRegion,
		translateBy(x?: any, y?: number): Ext.util.IRegion,
		union(region?: Ext.util.IRegion): Ext.util.IRegion
	}

	declare export interface IRenderable {
		afterRender(): void,
		doAutoRender(): void,
		ensureAttachedToBody(runLayout?: boolean): void,
		getInsertPosition(position?: any): HTMLElement,
		initRenderData(): any,
		onRender(parentNode?: Ext.core.IElement, containerIdx?: number): void,
		render(container?: any, position?: any): void
	}

	declare export interface ISortable {
		defaultSortDirection?: string,
		sortRoot?: string,
		sorters?: any,
		isSortable?: boolean,
		generateComparator(): void,
		getFirstSorter(): Ext.util.ISorter,
		initSortable(): void,
		sort(sorters?: any, direction?: string): Ext.util.ISorter[]
	}

	declare export interface ISorter {
		direction?: string,
		property?: string,
		root?: string,
		sorterFn?: any,
		transform?: any,
		setDirection(direction?: string): void,
		toggle(): void,
		updateSortFunction(fn?: any): void
	}

	declare export interface ITaskManager {
		
	}

	declare export interface ITaskRunner {
		fireIdleEvent?: boolean,
		interval?: number,
		destroy(): void,
		newTask(config?: any): void,
		start(task?: any): any,
		stop(task?: any): any,
		stopAll(): void
	}

	declare export interface ITextMetrics {
		bind(el?: any): void,
		destroy(): void,
		getHeight(text?: string): number,
		getSize(text?: string): any,
		getWidth(text?: string): number,
		setFixedWidth(width?: number): void
	}

		declare export class Functions  {
		alias(object?: any, methodName?: string): any;
		bind(fn?: any, scope?: any, args?: any[], appendArgs?: any): any;
		clone(method?: any): any;
		createBuffered(fn?: any, buffer?: number, scope?: any, args?: any[]): any;
		createDelayed(fn?: any, delay?: number, scope?: any, args?: any[], appendArgs?: any): any;
		createInterceptor(origFn?: any, newFn?: any, scope?: any, returnValue?: any): any;
		createSequence(originalFn?: any, newFn?: any, scope?: any): any;
		createThrottled(fn?: any, interval?: number, scope?: any): any;
		defer(fn?: any, millis?: number, scope?: any, args?: any[], appendArgs?: any): number;
		flexSetter(setter?: any): any;
		interceptAfter(object?: any, methodName?: string, fn?: any, scope?: any): any;
		interceptBefore(object?: any, methodName?: string, fn?: any, scope?: any): any;
		pass(fn?: any, args?: any[], scope?: any): any
	}

	declare export class Cookies  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(name?: string, path?: string): void;
		get(name?: string): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		set(
		name?: string, value?: any, expires?: any, path?: string, domain?: string, secure?: boolean
	): void;
		statics(): Ext.IClass
	}

	declare export class CSS  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		createRule(styleSheet?: CSSStyleSheet, selector?: string, property?: string): CSSStyleRule;
		createStyleSheet(cssText?: string, id?: string): CSSStyleSheet;
		getInitialConfig(name?: string): any;
		getRule(selector?: any, refreshCache?: boolean): CSSStyleRule;
		getRules(refreshCache?: boolean): any;
		initConfig(config?: any): Ext.IBase;
		refreshCache(): any;
		removeStyleSheet(id?: string): void;
		statics(): Ext.IClass;
		swapStyleSheet(id?: string, url?: string): void;
		updateRule(selector?: any, property?: string, value?: string): boolean
	}

	declare export class Filter  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		createFilterFn(filters?: Ext.util.IFilter[]): any;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase
	}

	declare export class Format  {
		currencyAtEnd: boolean;
		currencyPrecision: number;
		currencySign: string;
		decimalSeparator: string;
		thousandSeparator: string;
		attributes(attributes?: any): void;
		capitalize(string?: string): string;
		currency(value?: any, sign?: string, decimals?: number, end?: boolean): string;
		date(value?: any, format?: string): string;
		dateRenderer(format?: string): any;
		defaultValue(value?: any, defaultValue?: string): string;
		ellipsis(value?: string, length?: number, word?: boolean): string;
		escapeRegex(str?: string): string;
		fileSize(size?: any): string;
		format(string: string, ...values: any[]): string;
		htmlDecode(value?: string): string;
		htmlEncode(value?: string): string;
		leftPad(string?: string, size?: number, character?: string): string;
		lowercase(value?: string): string;
		math(): any;
		nl2br(v?: string): string;
		number(v?: number, format?: string): string;
		numberRenderer(format?: string): any;
		parseBox(v?: any): any;
		plural(value?: number, singular?: string, plural?: string): void;
		round(value?: any, precision?: number): number;
		stripScripts(value?: any): string;
		stripTags(value?: any): string;
		substr(value?: string, start?: number, length?: number): string;
		trim(string?: string): string;
		undef(value?: any): any;
		uppercase(value?: string): string;
		usMoney(value?: any): string
	}

	declare export class History  {
		fieldId: string;
		hasListeners: any;
		iframeId: string;
		isObservable: boolean;
		self: Ext.IClass;
		useTopWindow: boolean;
		add(token?: string, preventDuplicates?: boolean): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any;
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		back(): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		clearManagedListeners(): void;
		enableBubble(eventNames?: any): void;
		fireEvent(eventName: string, ...args: any[]): boolean;
		fireEventArgs(eventName?: string, args?: any[]): boolean;
		forward(): void;
		getInitialConfig(name?: string): any;
		getToken(): string;
		hasListener(eventName?: string): boolean;
		init(onReady?: any, scope?: any): void;
		initConfig(config?: any): Ext.IBase;
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any;
		mun(item?: any, ename?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any): any;
		relayEvents(origin?: any, events?: string[], prefix?: string): any;
		removeListener(eventName?: string, fn?: any, scope?: any): void;
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void;
		resumeEvent(...eventName: any[]): void;
		resumeEvents(): void;
		statics(): Ext.IClass;
		suspendEvent(...eventName: any[]): void;
		suspendEvents(queueSuspended?: boolean): void;
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export class Inflector  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		classify(word?: string): string;
		clearPlurals(): void;
		clearSingulars(): void;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		isTransnumeral(word?: string): boolean;
		ordinalize(number?: number): string;
		plural(matcher?: RegExp, replacer?: string): void;
		pluralize(word?: string): string;
		singular(matcher?: RegExp, replacer?: string): void;
		singularize(word?: string): string;
		statics(): Ext.IClass
	}

	declare export class Observable  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		capture(o?: Ext.util.IObservable, fn?: any, scope?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		getName(): string;
		implement(): void;
		observe(c?: any, listeners?: any): void;
		override(members?: any): Ext.IBase;
		releaseCapture(o?: Ext.util.IObservable): void
	}

	declare export class Point  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		fromEvent(e?: any): Ext.util.IPoint;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase
	}

	declare export class Region  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		from(o?: any): Ext.util.IRegion;
		getName(): string;
		getRegion(el?: any): Ext.util.IRegion;
		implement(): void;
		override(members?: any): Ext.IBase
	}

	declare export class Sortable  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		createComparator(sorters?: Ext.util.ISorter[]): any;
		getName(): string;
		implement(): void;
		override(members?: any): Ext.IBase
	}

	declare export class TaskManager  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		newTask(config?: any): void;
		start(task?: any): any;
		statics(): Ext.IClass;
		stop(task?: any): any;
		stopAll(): void
	}

	declare export class TextMetrics  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		destroy(): void;
		getName(): string;
		implement(): void;
		measure(el?: any, text?: string, fixedWidth?: number): any;
		override(members?: any): Ext.IBase
	}

	
}

declare module 'fx' {
		declare export interface IAnim {
		alternate?: boolean,
		callback?: any,
		delay?: number,
		duration?: number,
		dynamic?: boolean,
		easing?: string,
		from?: any,
		iterations?: number,
		keyframes?: any,
		reverse?: boolean,
		scope?: any,
		target?: any,
		to?: any,
		currentIteration?: number,
		isAnimation?: boolean,
		paused?: boolean,
		running?: boolean,
		startTime?: any,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		end(): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IAnimator {
		delay?: number,
		duration?: number,
		dynamic?: boolean,
		easing?: string,
		iterations?: number,
		keyframes?: any,
		target?: Ext.fx.target.ITarget,
		currentIteration?: number,
		isAnimator?: boolean,
		keyframeStep?: number,
		paused?: boolean,
		running?: boolean,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		end(): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface ICubicBezier {
		
	}

	declare export interface IEasing {
		
	}

	declare export interface IManager {
		
	}

	declare export interface IPropertyHandler {
		
	}

	declare export interface IQueue {
		
	}

		declare export class CubicBezier  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	declare export class Easing  {
		
	}

	declare export class Manager  {
		forceJS: boolean;
		interval: number;
		self: Ext.IClass;
		addAnim(anim?: Ext.fx.IAnim): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		removeAnim(anim?: Ext.fx.IAnim): void;
		statics(): Ext.IClass
	}

	
}

declare module 'target' {
		declare export interface IComponent {
		
	}

	declare export interface ICompositeElement {
		isComposite?: boolean
	}

	declare export interface ICompositeElementCSS {
		
	}

	declare export interface ICompositeSprite {
		
	}

	declare export interface IElement {
		
	}

	declare export interface IElementCSS {
		
	}

	declare export interface ISprite {
		
	}

	declare export interface ITarget {
		
	}

			
}

declare module 'grid' {
		declare export interface ICellContext {
		isCellContext?: boolean
	}

	declare export interface ICellEditor {
		alignment?: string,
		cls?: string,
		hideEl?: boolean,
		shadow?: any
	}

	declare export interface IActionColumn {
		altText?: string,
		disabled?: boolean,
		getClass?: any,
		getTip?: any,
		handler?: any,
		icon?: string,
		iconCls?: string,
		items?: any[],
		menuText?: string,
		scope?: any,
		sortable?: boolean,
		stopSelection?: boolean,
		tooltip?: string,
		cascade(fn?: any, scope?: any): Ext.IContainer,
		defaultRenderer(
		v?: any, meta?: any, record?: any, rowIdx?: any, colIdx?: any, store?: any, view?: any
	): void,
		disableAction(index?: any, silent?: boolean): void,
		enableAction(index?: any, silent?: boolean): void,
		getRefItems(): void
	}

	declare export interface IBooleanColumn {
		falseText?: string,
		trueText?: string,
		undefinedText?: string
	}

	declare export interface IColumn {
		align?: string,
		baseCls?: string,
		columns?: any[],
		componentLayout?: any,
		dataIndex?: string,
		detachOnRemove?: boolean,
		draggable?: boolean,
		editRenderer?: any,
		editor?: any,
		emptyCellText?: string,
		field?: any,
		fixed?: boolean,
		groupable?: boolean,
		header?: string,
		hideable?: boolean,
		lockable?: boolean,
		locked?: boolean,
		menuDisabled?: boolean,
		menuText?: string,
		renderTpl?: any,
		renderer?: any,
		resizable?: boolean,
		scope?: any,
		sortable?: boolean,
		stateId?: string,
		tdCls?: string,
		text?: string,
		tooltip?: string,
		tooltipType?: string,
		isColumn?: boolean,
		isHeader?: boolean,
		textEl?: Ext.IElement,
		triggerEl?: Ext.IElement,
		afterComponentLayout(width?: any, height?: any, oldWidth?: any, oldHeight?: any): void,
		afterRender(): void,
		autoSize(The?: any): void,
		defaultRenderer(): void,
		getEditor(record?: any, defaultField?: any): any,
		getIndex(): number,
		getSortParam(): string,
		getVisibleIndex(): number,
		hide(fromOwner?: any): Ext.IComponent,
		initRenderData(): any,
		isHideable(): void,
		isLockable(): void,
		onAdd(child?: any): void,
		onDestroy(): void,
		onRemove(child?: any): void,
		setEditor(field?: any): void,
		setText(text?: string): void,
		show(fromOwner?: any, fromChild?: any): Ext.IComponent
	}

	declare export interface IDateColumn {
		format?: string,
		defaultRenderer(value?: any): void
	}

	declare export interface INumberColumn {
		format?: string
	}

	declare export interface IRowNumberer {
		align?: string,
		cls?: string,
		dataIndex?: string,
		draggable?: boolean,
		hideable?: boolean,
		lockable?: boolean,
		menuDisabled?: boolean,
		resizable?: boolean,
		tdCls?: string,
		text?: string,
		width?: number
	}

	declare export interface ITemplateColumn {
		tpl?: any,
		defaultRenderer(value?: any, meta?: any, record?: any): void
	}

	declare export interface IColumnComponentLayout {
		setWidthInDom?: boolean,
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any): void
	}

	declare export interface IColumnLayout {
		beginLayout(ownerContext?: any): void,
		calculate(ownerContext?: any): void,
		completeLayout(ownerContext?: any): void,
		initLayout(): void
	}

	declare export interface IColumnManager {
		getHeaderAtIndex(index?: number): Ext.grid.column.IColumn,
		getHeaderById(id?: string): Ext.grid.column.IColumn,
		getHeaderIndex(header?: Ext.grid.column.IColumn): number,
		getVisibleHeaderClosestToIndex(index?: number): void
	}

	declare export interface IColumnModel {
		getHeaderAtIndex(index?: number): Ext.grid.column.IColumn,
		getHeaderById(id?: string): Ext.grid.column.IColumn,
		getHeaderIndex(header?: Ext.grid.column.IColumn): number,
		getVisibleHeaderClosestToIndex(index?: number): void
	}

	declare export interface ILockable {
		lockedGridConfig?: any,
		lockedViewConfig?: any,
		normalGridConfig?: any,
		normalViewConfig?: any,
		scrollDelta?: number,
		subGridXType?: string,
		syncRowHeight?: boolean,
		syncRowHeights(): void
	}

	declare export interface ILockingView {
		isLockingView?: boolean,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IPanel {
		columns?: any,
		rowLines?: boolean,
		viewType?: string,
		reconfigure(store?: Ext.data.IStore, columns?: any[]): void
	}

	declare export interface IGridPanel {
		columns?: any,
		rowLines?: boolean,
		viewType?: string,
		reconfigure(store?: Ext.data.IStore, columns?: any[]): void
	}

	declare export interface IPropertyGrid {
		columnLines?: boolean,
		customEditors?: any,
		customRenderers?: any,
		enableColumnMove?: boolean,
		inferTypes?: boolean,
		nameColumnWidth?: any,
		nameField?: string,
		propertyNames?: any,
		source?: any,
		sourceConfig?: any,
		valueField?: string,
		getSource(): any,
		removeProperty(prop?: string): void,
		setProperty(prop?: string, value?: any, create?: boolean): void,
		setSource(source?: any, sourceConfig?: any): void
	}

	declare export interface IPropertyColumnModel {
		
	}

	declare export interface IPropertyStore {
		sortOnLoad?: boolean,
		getProxy(): Ext.data.proxy.IProxy
	}

	declare export interface IRowEditor {
		border?: any,
		hideMode?: string,
		afterRender(): void,
		getRefItems(): void,
		isDirty(): boolean,
		loadRecord(record?: any): Ext.form.IBasic,
		onHide(): void,
		onShow(): void,
		startEdit(record?: Ext.data.IModel, columnHeader?: Ext.data.IModel): void
	}

	declare export interface IRowEditorButtons {
		frame?: boolean,
		shrinkWrap?: any
	}

	declare export interface IView {
		autoScroll?: boolean,
		stripeRows?: boolean
	}

	declare export interface IViewDropZone {
		
	}

			
}

declare module 'column' {
		declare export interface IAction {
		altText?: string,
		disabled?: boolean,
		getClass?: any,
		getTip?: any,
		handler?: any,
		icon?: string,
		iconCls?: string,
		items?: any[],
		menuText?: string,
		scope?: any,
		sortable?: boolean,
		stopSelection?: boolean,
		tooltip?: string,
		cascade(fn?: any, scope?: any): Ext.IContainer,
		defaultRenderer(
		v?: any, meta?: any, record?: any, rowIdx?: any, colIdx?: any, store?: any, view?: any
	): void,
		disableAction(index?: any, silent?: boolean): void,
		enableAction(index?: any, silent?: boolean): void,
		getRefItems(): void
	}

	declare export interface IBoolean {
		falseText?: string,
		trueText?: string,
		undefinedText?: string
	}

	declare export interface ICheckColumn {
		stopSelection?: boolean,
		tdCls?: string,
		onDisable(silent?: boolean): void,
		onEnable(silent?: boolean): void
	}

	declare export interface IColumn {
		align?: string,
		baseCls?: string,
		columns?: any[],
		componentLayout?: any,
		dataIndex?: string,
		detachOnRemove?: boolean,
		draggable?: boolean,
		editRenderer?: any,
		editor?: any,
		emptyCellText?: string,
		field?: any,
		fixed?: boolean,
		groupable?: boolean,
		header?: string,
		hideable?: boolean,
		lockable?: boolean,
		locked?: boolean,
		menuDisabled?: boolean,
		menuText?: string,
		renderTpl?: any,
		renderer?: any,
		resizable?: boolean,
		scope?: any,
		sortable?: boolean,
		stateId?: string,
		tdCls?: string,
		text?: string,
		tooltip?: string,
		tooltipType?: string,
		isColumn?: boolean,
		isHeader?: boolean,
		textEl?: Ext.IElement,
		triggerEl?: Ext.IElement,
		afterComponentLayout(width?: any, height?: any, oldWidth?: any, oldHeight?: any): void,
		afterRender(): void,
		autoSize(The?: any): void,
		defaultRenderer(): void,
		getEditor(record?: any, defaultField?: any): any,
		getIndex(): number,
		getSortParam(): string,
		getVisibleIndex(): number,
		hide(fromOwner?: any): Ext.IComponent,
		initRenderData(): any,
		isHideable(): void,
		isLockable(): void,
		onAdd(child?: any): void,
		onDestroy(): void,
		onRemove(child?: any): void,
		setEditor(field?: any): void,
		setText(text?: string): void,
		show(fromOwner?: any, fromChild?: any): Ext.IComponent
	}

	declare export interface IDate {
		format?: string,
		defaultRenderer(value?: any): void
	}

	declare export interface INumber {
		format?: string
	}

	declare export interface IRowNumberer {
		align?: string,
		cls?: string,
		dataIndex?: string,
		draggable?: boolean,
		hideable?: boolean,
		lockable?: boolean,
		menuDisabled?: boolean,
		resizable?: boolean,
		tdCls?: string,
		text?: string,
		width?: number
	}

	declare export interface ITemplate {
		tpl?: any,
		defaultRenderer(value?: any, meta?: any, record?: any): void
	}

			
}

declare module 'ux' {
		declare export interface ICheckColumn {
		stopSelection?: boolean,
		tdCls?: string,
		onDisable(silent?: boolean): void,
		onEnable(silent?: boolean): void
	}

			
}

declare module 'feature' {
		declare export interface IAbstractSummary {
		remoteRoot?: string,
		showSummaryRow?: boolean,
		toggleSummaryRow(visible?: boolean): void
	}

	declare export interface IFeature {
		disabled?: boolean,
		eventPrefix?: string,
		eventSelector?: string,
		grid?: Ext.grid.IPanel,
		hasFeatureEvent?: boolean,
		view?: Ext.view.ITable,
		disable(): void,
		enable(): void,
		getFireEventArgs(eventName?: any, view?: any, featureTarget?: any, e?: any): void
	}

	declare export interface IGrouping {
		collapsible?: boolean,
		depthToIndent?: number,
		enableGroupingMenu?: boolean,
		enableNoGroups?: boolean,
		groupByText?: string,
		groupHeaderTpl?: any,
		hideGroupedHeader?: boolean,
		showGroupsText?: string,
		showSummaryRow?: boolean,
		startCollapsed?: boolean,
		eventPrefix?: string,
		eventSelector?: string,
		collapse(groupName?: string, focus?: boolean): void,
		collapseAll(): void,
		disable(): void,
		enable(): void,
		expand(groupName?: string, focus?: boolean): void,
		expandAll(): void,
		getFireEventArgs(type?: any, view?: any, targetEl?: any, e?: any): void,
		getRecordGroup(record?: Ext.data.IModel): any,
		isExpanded(groupName?: string): boolean,
		toggleSummaryRow(visible?: boolean): void
	}

	declare export interface IGroupingSummary {
		showSummaryRow?: boolean
	}

	declare export interface IGroupStore {
		indexOfTotal(record?: Ext.data.IModel): number
	}

	declare export interface IRowBody {
		eventPrefix?: string,
		eventSelector?: string,
		getAdditionalData(data?: any, idx?: number, record?: Ext.data.IModel, orig?: any): void
	}

	declare export interface IRowWrap {
		hasFeatureEvent?: boolean
	}

	declare export interface ISummary {
		dock?: string
	}

			
}

declare module 'header' {
		declare export interface IContainer {
		baseCls?: string,
		border?: any,
		defaultType?: string,
		defaultWidth?: number,
		detachOnRemove?: boolean,
		enableColumnHide?: boolean,
		sealed?: boolean,
		sortable?: boolean,
		weight?: number,
		isGroupHeader?: boolean,
		getColumnCount(): void,
		getColumnMenu(headerContainer?: any): void,
		getFullWidth(): void,
		getGridColumns(inResult?: any, hiddenAncestor?: any): any[],
		getHeaderAtIndex(index?: number): void,
		getHeaderIndex(header?: Ext.grid.column.IColumn): number,
		getMenuItems(): any[],
		getVisibleGridColumns(): any[],
		getVisibleHeaderClosestToIndex(index?: number): void,
		isLayoutRoot(): void,
		onAdd(c?: any): void,
		onDestroy(): void,
		onRemove(c?: any): void,
		onShow(): void
	}

	declare export interface IDragZone {
		getDragData(e?: any): any,
		getRepairXY(): number[],
		onBeforeDrag(): boolean,
		onInitDrag(): boolean
	}

	declare export interface IDropZone {
		getTargetFromEvent(e?: any): any,
		onNodeDrop(node?: any, dragZone?: any, e?: any, data?: any): boolean,
		onNodeOut(): void,
		onNodeOver(node?: any, dragZone?: any, e?: any, data?: any): string
	}

			
}

declare module 'locking' {
		declare export interface IHeaderContainer {
		getGridColumns(): any[],
		getRefItems(): void
	}

	declare export interface ILockable {
		lockedGridConfig?: any,
		lockedViewConfig?: any,
		normalGridConfig?: any,
		normalViewConfig?: any,
		scrollDelta?: number,
		subGridXType?: string,
		syncRowHeight?: boolean,
		syncRowHeights(): void
	}

	declare export interface IView {
		isLockingView?: boolean,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

			
}

declare module 'list' {
		declare export interface IListView {
		columns?: any,
		rowLines?: boolean,
		viewType?: string,
		reconfigure(store?: Ext.data.IStore, columns?: any[]): void
	}

			
}

declare module 'plugin' {
		declare export interface IBufferedRenderer {
		leadingBufferZone?: number,
		numFromEdge?: number,
		percentageFromEdge?: number,
		scrollToLoadBuffer?: number,
		synchronousRender?: boolean,
		trailingBufferZone?: number,
		variableRowHeight?: boolean,
		position?: number,
		destroy(): void,
		init(grid?: any): void,
		scrollTo(recordIdx?: number, doSelect?: boolean, callback?: any, scope?: any): void
	}

	declare export interface ICellEditing {
		cancelEdit(): void,
		completeEdit(): void,
		startEdit(record?: any, columnHeader?: any): boolean,
		startEditByPosition(position?: any): void
	}

	declare export interface IDragDrop {
		containerScroll?: any,
		ddGroup?: string,
		dragGroup?: string,
		dragText?: string,
		dropGroup?: string,
		enableDrag?: boolean,
		enableDrop?: boolean,
		disable(): void,
		enable(): void,
		init(view?: any): void
	}

	declare export interface IEditing {
		clicksToEdit?: number,
		triggerEvent?: string,
		editing?: boolean,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		cancelEdit(): void,
		clearListeners(): void,
		clearManagedListeners(): void,
		completeEdit(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		startEdit(record?: any, columnHeader?: any): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IHeaderReorderer {
		disable(): void,
		enable(): void,
		init(headerCt?: any): void
	}

	declare export interface IHeaderResizer {
		dynamic?: boolean,
		disable(): void,
		enable(): void,
		getDynamic(): boolean,
		init(headerCt?: any): void,
		setDynamic(dynamic?: boolean): void
	}

	declare export interface IRowEditing {
		autoCancel?: boolean,
		clicksToMoveEditor?: number,
		errorSummary?: boolean,
		startEdit(record?: Ext.data.IModel, columnHeader?: Ext.data.IModel): boolean
	}

	declare export interface IRowExpander {
		expandOnDblClick?: boolean,
		expandOnEnter?: boolean,
		selectRowOnExpand?: boolean,
		init(grid?: any): void
	}

	declare export interface ITreeViewDragDrop {
		allowContainerDrops?: boolean,
		allowParentInserts?: boolean,
		appendOnly?: boolean,
		containerScroll?: any,
		ddGroup?: string,
		displayField?: string,
		dragGroup?: string,
		dragText?: string,
		dropGroup?: string,
		enableDrag?: boolean,
		enableDrop?: boolean,
		expandDelay?: number,
		nodeHighlightColor?: string,
		nodeHighlightOnDrop?: boolean,
		nodeHighlightOnRepair?: boolean,
		sortOnDrop?: boolean,
		init(view?: any): void
	}

			
}

declare module 'property' {
		declare export interface IGrid {
		columnLines?: boolean,
		customEditors?: any,
		customRenderers?: any,
		enableColumnMove?: boolean,
		inferTypes?: boolean,
		nameColumnWidth?: any,
		nameField?: string,
		propertyNames?: any,
		source?: any,
		sourceConfig?: any,
		valueField?: string,
		getSource(): any,
		removeProperty(prop?: string): void,
		setProperty(prop?: string, value?: any, create?: boolean): void,
		setSource(source?: any, sourceConfig?: any): void
	}

	declare export interface IHeaderContainer {
		
	}

	declare export interface IProperty {
		idProperty?: any,
		fields?: Ext.util.IMixedCollection
	}

	declare export interface IStore {
		sortOnLoad?: boolean,
		getProxy(): Ext.data.proxy.IProxy
	}

			
}

declare module 'layout' {
		declare export interface IClassList {
		add(cls?: any): void,
		addMany(classes?: any): void,
		remove(cls?: any): void,
		removeMany(classes?: any): void
	}

	declare export interface IAbsoluteLayout {
		ignoreOnContentChange?: boolean,
		itemCls?: string,
		beginLayout(ownerContext?: any): void,
		onContentChange(): boolean
	}

	declare export interface IAccordionLayout {
		activeOnTop?: boolean,
		align?: string,
		animate?: boolean,
		autoWidth?: boolean,
		collapseFirst?: boolean,
		fill?: boolean,
		hideCollapseTool?: boolean,
		itemCls?: string,
		multi?: boolean,
		titleCollapse?: boolean,
		beginLayout(ownerContext?: any): void,
		configureItem(item?: any): void,
		renderItems(items?: any, target?: any): void
	}

	declare export interface IAnchorLayout {
		anchor?: string,
		defaultAnchor?: string,
		manageOverflow?: boolean,
		beginLayoutCycle(ownerContext?: any): void,
		configureItem(item?: any): void,
		getItemSizePolicy(item?: any): Ext.layout.ISizePolicy
	}

	declare export interface IBorderLayout {
		itemCls?: string,
		padding?: any,
		regionWeights?: any,
		split?: boolean,
		splitterResize?: boolean,
		beginLayout(ownerContext?: any): void,
		calculate(ownerContext?: any): void,
		getItemSizePolicy(item?: any): Ext.layout.ISizePolicy,
		getLayoutItems(): Ext.IComponent[]
	}

	declare export interface IBoxLayout {
		defaultMargins?: any,
		flex?: number,
		itemCls?: string,
		pack?: string,
		padding?: string,
		stretchMaxPartner?: any,
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void,
		cacheFlexes(ownerContext?: any): void,
		calculate(ownerContext?: any): void,
		completeLayout(ownerContext?: any): void,
		finishedLayout(ownerContext?: any): void,
		getElementTarget(): Ext.IElement,
		getItemSizePolicy(item?: any, ownerSizeModel?: any): Ext.layout.ISizePolicy,
		getRenderTarget(): Ext.IElement
	}

	declare export interface ICardLayout {
		deferredRender?: boolean,
		getActiveItem(): Ext.IComponent,
		getNext(): Ext.IComponent,
		getPrev(): Ext.IComponent,
		isValidParent(item?: any, target?: any, position?: any): void,
		next(): Ext.IComponent,
		prev(): Ext.IComponent,
		setActiveItem(newCard?: any): Ext.IComponent
	}

	declare export interface IColumnLayout {
		itemCls?: string,
		manageOverflow?: boolean,
		getItemSizePolicy(item?: any, ownerSizeModel?: any): Ext.layout.ISizePolicy,
		setCtSizeIfNeeded(ownerContext?: any, containerSize?: any): void
	}

	declare export interface IContainerLayout {
		itemCls?: string,
		overflowPadderEl?: Ext.IElement,
		addChildEls(): void,
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void,
		configureItem(item?: any): void,
		getContainerSize(ownerContext?: Ext.layout.IContextItem, inDom?: boolean): any,
		getElementTarget(): Ext.IElement,
		getLayoutItems(): Ext.IComponent[],
		getRenderTarget(): Ext.IElement,
		getRenderedItems(): any[],
		getTarget(): Ext.IElement,
		getVisibleItems(): any[],
		removeChildEls(testFn?: any): void
	}

	declare export interface IFitLayout {
		defaultMargins?: any,
		itemCls?: string,
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void,
		calculate(ownerContext?: any): void,
		getItemSizePolicy(item?: any, ownerSizeModel?: any): Ext.layout.ISizePolicy
	}

	declare export interface IFormLayout {
		getScrollRangeFlags?: any,
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void,
		calculate(ownerContext?: any): void,
		calculateOverflow(
		ownerContext?: Ext.layout.IContextItem, containerSize?: any, dimensions?: number
	): void,
		completeLayout(ownerContext?: any): void,
		doRenderPadder(out?: any, renderData?: any): void,
		getContainerSize(
		ownerContext?: Ext.layout.IContextItem, inDom?: boolean, ignoreOverflow?: boolean
	): any,
		getItemSizePolicy(item?: any): Ext.layout.ISizePolicy,
		getOverflowXStyle(ownerContext?: Ext.layout.IContextItem): string,
		getOverflowYStyle(ownerContext?: Ext.layout.IContextItem): string,
		getRenderTarget(): Ext.IElement,
		initLayout(): void,
		isValidParent(item?: any, target?: any, position?: any): void
	}

	declare export interface IHBoxLayout {
		align?: string,
		alignRoundingMethod?: any,
		constrainAlign?: boolean
	}

	declare export interface ITableLayout {
		columns?: number,
		tableAttrs?: any,
		tdAttrs?: any,
		trAttrs?: any,
		calculate(ownerContext?: any): void,
		finalizeLayout(): void,
		getLayoutItems(): Ext.IComponent[],
		isValidParent(item?: any, target?: any, rowIdx?: any, cellIdx?: any): void
	}

	declare export interface IVBoxLayout {
		align?: string,
		alignRoundingMethod?: any,
		constrainAlign?: boolean
	}

	declare export interface IContext {
		layoutQueue?: Ext.util.IQueue,
		state?: number,
		flush(): void,
		getCmp(cmp?: Ext.IComponent): void,
		getEl(parent?: Ext.layout.IContextItem, el?: Ext.dom.IElement): void,
		invalidate(components?: any, full?: boolean): void,
		removeEl(parent?: Ext.layout.IContextItem, el?: Ext.dom.IElement): void,
		resetLayout(layout?: any, ownerContext?: any, firstTime?: any): void,
		run(): boolean,
		runCycle(): boolean,
		setItemSize(items?: any, width?: number, height?: number): void
	}

	declare export interface IContextItem {
		state?: any,
		wrapsComponent?: boolean,
		addCls(newCls?: any): void,
		block(layout?: Ext.layout.ILayout, propName?: string): void,
		clearMarginCache(): void,
		domBlock(layout?: Ext.layout.ILayout, propName?: string): void,
		flush(): void,
		getBorderInfo(): any,
		getClassList(): void,
		getDomProp(propName?: string): any,
		getEl(nameOrEl?: any, owner?: any): Ext.layout.IContextItem,
		getFrameInfo(): any,
		getMarginInfo(): any,
		getPaddingInfo(): any,
		getProp(propName?: string): any,
		getStyle(styleName?: string): any,
		getStyles(styleNames?: string[], altNames?: string[]): any,
		hasDomProp(propName?: string): boolean,
		hasProp(propName?: string): boolean,
		invalidate(options?: any): void,
		recoverProp(propName?: string, oldProps?: any, oldDirty?: any): void,
		removeCls(removeCls?: any): void,
		removeEl(nameOrEl?: any, owner?: any): void,
		setAttribute(name?: any, value?: any): void,
		setContentHeight(height?: any, measured?: any): void,
		setContentSize(width?: any, height?: any, measured?: any): void,
		setContentWidth(width?: any, measured?: any): void,
		setHeight(height?: number, dirty?: boolean): number,
		setProp(propName?: string, value?: any, dirty?: boolean): number,
		setWidth(width?: number, dirty?: boolean): number
	}

	declare export interface ILayout {
		done?: boolean,
		isLayout?: boolean,
		afterRemove(item?: any): void,
		beginLayout(ownerContext?: Ext.layout.IContextItem): void,
		beginLayoutCycle(ownerContext?: Ext.layout.IContextItem): void,
		calculate(ownerContext?: Ext.layout.IContextItem): void,
		completeLayout(ownerContext?: Ext.layout.IContextItem): void,
		configureItem(item?: Ext.IComponent): void,
		destroy(): void,
		finalizeLayout(ownerContext?: Ext.layout.IContextItem): void,
		finishedLayout(ownerContext?: Ext.layout.IContextItem): void,
		getItemSizePolicy(item?: Ext.IComponent): Ext.layout.ISizePolicy,
		getLayoutItems(): void,
		initLayout(): void,
		isValidParent(item?: any, target?: any, position?: any): void,
		notifyOwner(ownerContext?: Ext.layout.IContextItem): void,
		onContentChange(child?: Ext.IComponent): boolean,
		renderItems(items?: any, target?: any): void
	}

	declare export interface ISizeModel {
		auto?: boolean,
		calculated?: boolean,
		calculatedFromConfigured?: boolean,
		calculatedFromNatural?: boolean,
		calculatedFromShrinkWrap?: boolean,
		configured?: boolean,
		constrainedMax?: boolean,
		constrainedMin?: boolean,
		fixed?: boolean,
		name?: string,
		names?: any,
		natural?: boolean,
		ordinal?: number,
		pairsByHeightOrdinal?: any[],
		shrinkWrap?: boolean
	}

	declare export interface ISizePolicy {
		readsHeight?: boolean,
		readsWidth?: boolean,
		setsHeight?: boolean,
		setsWidth?: boolean
	}

			
}

declare module 'component' {
		declare export interface IAuto {
		setHeightInDom?: boolean,
		setWidthInDom?: boolean,
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void,
		calculate(ownerContext?: any): void
	}

	declare export interface IBody {
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void
	}

	declare export interface IBoundList {
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any): void,
		finishedLayout(ownerContext?: any): void,
		getLayoutItems(): void,
		isValidParent(): void
	}

	declare export interface IButton {
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any): void,
		calculate(ownerContext?: any): void
	}

	declare export interface IComponent {
		beginLayoutCycle(ownerContext?: any, firstCycle?: any): void,
		finishedLayout(ownerContext?: any): void,
		getRenderTarget(): Ext.IElement,
		getTarget(): Ext.IElement,
		notifyOwner(ownerContext?: any): void
	}

	declare export interface IDock {
		afterRemove(item?: any): void,
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any): void,
		calculate(ownerContext?: any): void,
		configureItem(item?: Ext.IComponent): void,
		finishedLayout(ownerContext?: any): void,
		getDockedItems(order?: string, beforeBody?: boolean): Ext.IComponent[],
		getItemSizePolicy(item?: any, ownerSizeModel?: any): Ext.layout.ISizePolicy,
		getLayoutItems(): any[],
		invalidateAxes(ownerContext?: any, horz?: any, vert?: any): void,
		renderItems(items?: any, target?: any): void
	}

	declare export interface IAbstractDock {
		afterRemove(item?: any): void,
		beginLayout(ownerContext?: any): void,
		beginLayoutCycle(ownerContext?: any): void,
		calculate(ownerContext?: any): void,
		configureItem(item?: Ext.IComponent): void,
		finishedLayout(ownerContext?: any): void,
		getDockedItems(order?: string, beforeBody?: boolean): Ext.IComponent[],
		getItemSizePolicy(item?: any, ownerSizeModel?: any): Ext.layout.ISizePolicy,
		getLayoutItems(): any[],
		invalidateAxes(ownerContext?: any, horz?: any, vert?: any): void,
		renderItems(items?: any, target?: any): void
	}

	declare export interface IDraw {
		setHeightInDom?: boolean,
		setWidthInDom?: boolean,
		finishedLayout(ownerContext?: any): void
	}

	declare export interface IFieldSet {
		beginLayoutCycle(ownerContext?: any): void,
		finishedLayout(ownerContext?: any): void,
		getLayoutItems(): void
	}

	declare export interface IProgressBar {
		beginLayout(ownerContext?: any): void,
		calculate(ownerContext?: any): void
	}

			
}

declare module 'boxoverflow' {
		declare export interface IMenu {
		triggerButtonCls?: string,
		menuItems?: any[],
		noItemsMenuText?: string
	}

	declare export interface IMenu {
		triggerButtonCls?: string,
		menuItems?: any[],
		noItemsMenuText?: string
	}

	declare export interface INone {
		
	}

	declare export interface INone {
		
	}

	declare export interface IScroller {
		afterCtCls?: string,
		afterScrollerCls?: string,
		animateScroll?: boolean,
		beforeCtCls?: string,
		beforeScrollerCls?: string,
		scrollDuration?: number,
		scrollIncrement?: number,
		scrollRepeatInterval?: number,
		scrollerCls?: string,
		wheelIncrement?: number,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getScrollPosition(): number,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		scrollToItem(item?: any, animate?: boolean): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IScroller {
		afterCtCls?: string,
		afterScrollerCls?: string,
		animateScroll?: boolean,
		beforeCtCls?: string,
		beforeScrollerCls?: string,
		scrollDuration?: number,
		scrollIncrement?: number,
		scrollRepeatInterval?: number,
		scrollerCls?: string,
		wheelIncrement?: number,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getScrollPosition(): number,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		scrollToItem(item?: any, animate?: boolean): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

			
}

declare module 'menu' {
		declare export interface ICheckItem {
		checkChangeDisabled?: boolean,
		checkHandler?: any,
		checked?: boolean,
		checkedCls?: string,
		group?: string,
		groupCls?: string,
		hideOnClick?: boolean,
		renderTpl?: any,
		scope?: any,
		uncheckedCls?: string,
		afterRender(): void,
		disableCheckChange(): void,
		enableCheckChange(): void,
		initComponent(): void,
		onDestroy(): void,
		setChecked(checked?: boolean, suppressEvents?: boolean): void
	}

	declare export interface IColorPicker {
		hideOnClick?: boolean,
		pickerId?: string,
		picker?: Ext.picker.IColor
	}

	declare export interface IDatePicker {
		hideOnClick?: boolean,
		pickerId?: string,
		picker?: Ext.picker.IDate
	}

	declare export interface IItem {
		activeCls?: string,
		canActivate?: boolean,
		clickHideDelay?: number,
		destroyMenu?: boolean,
		disabledCls?: string,
		glyph?: any,
		handler?: any,
		hideOnClick?: boolean,
		href?: string,
		hrefTarget?: string,
		icon?: string,
		iconCls?: string,
		menu?: any,
		menuAlign?: string,
		menuExpandDelay?: number,
		menuHideDelay?: number,
		plain?: boolean,
		renderTpl?: any,
		text?: string,
		tooltip?: any,
		tooltipType?: string,
		activated?: boolean,
		maskOnDisable?: boolean,
		parentMenu?: Ext.menu.IMenu,
		child(selector?: any): any,
		down(selector?: any): any,
		initComponent(): void,
		onDestroy(): void,
		onRemoved(): void,
		onRender(): void,
		query(selector?: string): Ext.IComponent[],
		queryBy(fn?: any, scope?: any): Ext.IComponent[],
		queryById(id?: string): Ext.IComponent,
		setHandler(fn?: any, scope?: any): void,
		setIcon(icon?: string): void,
		setIconCls(iconCls?: string): void,
		setMenu(menu?: any, destroyMenu?: boolean): void,
		setText(text?: string): void,
		setTooltip(tooltip?: any): Ext.menu.IItem
	}

	declare export interface ITextItem {
		activeCls?: string,
		canActivate?: boolean,
		clickHideDelay?: number,
		destroyMenu?: boolean,
		disabledCls?: string,
		glyph?: any,
		handler?: any,
		hideOnClick?: boolean,
		href?: string,
		hrefTarget?: string,
		icon?: string,
		iconCls?: string,
		menu?: any,
		menuAlign?: string,
		menuExpandDelay?: number,
		menuHideDelay?: number,
		plain?: boolean,
		renderTpl?: any,
		text?: string,
		tooltip?: any,
		tooltipType?: string,
		activated?: boolean,
		maskOnDisable?: boolean,
		parentMenu?: Ext.menu.IMenu,
		child(selector?: any): any,
		down(selector?: any): any,
		initComponent(): void,
		onDestroy(): void,
		onRemoved(): void,
		onRender(): void,
		query(selector?: string): Ext.IComponent[],
		queryBy(fn?: any, scope?: any): Ext.IComponent[],
		queryById(id?: string): Ext.IComponent,
		setHandler(fn?: any, scope?: any): void,
		setIcon(icon?: string): void,
		setIconCls(iconCls?: string): void,
		setMenu(menu?: any, destroyMenu?: boolean): void,
		setText(text?: string): void,
		setTooltip(tooltip?: any): Ext.menu.IItem
	}

	declare export interface IKeyNav {
		
	}

	declare export interface IManager {
		
	}

	declare export interface IMenuMgr {
		
	}

	declare export interface IMenu {
		allowOtherMenus?: boolean,
		enableKeyNav?: boolean,
		floating?: boolean,
		hidden?: boolean,
		hideMode?: string,
		ignoreParentClicks?: boolean,
		minWidth?: number,
		plain?: boolean,
		showSeparator?: boolean,
		isMenu?: boolean,
		parentMenu?: Ext.menu.IMenu,
		afterShow(): void,
		beforeShow(): void,
		canActivateItem(item?: any): boolean,
		deactivateActiveItem(andBlurFocusedItem?: any): void,
		hide(): Ext.IComponent,
		isVisible(): boolean,
		onDestroy(): void,
		showBy(cmp?: any, pos?: any, off?: any): Ext.IComponent
	}

	declare export interface ISeparator {
		separatorCls?: string
	}

		declare export class Manager  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		get(menu?: any): Ext.menu.IMenu;
		getInitialConfig(name?: string): any;
		hideAll(): boolean;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	declare export class MenuMgr  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		get(menu?: any): Ext.menu.IMenu;
		getInitialConfig(name?: string): any;
		hideAll(): boolean;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	
}

declare module 'panel' {
		declare export interface IAbstractPanel {
		baseCls?: string,
		bodyBorder?: boolean,
		bodyCls?: any,
		bodyPadding?: any,
		bodyStyle?: any,
		border?: any,
		componentLayout?: any,
		dockedItems?: any,
		renderTpl?: any,
		shrinkWrapDock?: any,
		body?: Ext.dom.IElement,
		contentPaddingProperty?: string,
		isPanel?: boolean,
		addBodyCls(cls?: string): Ext.panel.IPanel,
		addDocked(component?: any, pos?: number): Ext.IComponent[],
		addUIClsToElement(cls?: any): void,
		getComponent(comp?: any): Ext.IComponent,
		getDockedComponent(comp?: any): Ext.IComponent,
		getDockedItems(selector?: string, beforeBody?: boolean): Ext.IComponent[],
		getRefItems(deep?: any): void,
		insertDocked(pos?: number, component?: any): void,
		onDockedAdd(component?: Ext.IComponent): void,
		onDockedRemove(component?: Ext.IComponent): void,
		removeBodyCls(cls?: string): Ext.panel.IPanel,
		removeDocked(item?: Ext.IComponent, autoDestroy?: boolean): void,
		removeUIClsFromElement(cls?: any): void,
		setBodyStyle(style?: any, value?: string): Ext.panel.IPanel
	}

	declare export interface IDD {
		afterInvalidDrop(e?: Event, id?: string): void,
		b4MouseDown(e?: any): void,
		createFrame(): void,
		getDragEl(e?: any): HTMLElement
	}

	declare export interface IHeader {
		componentLayout?: any,
		defaultType?: string,
		glyph?: any,
		icon?: string,
		iconCls?: string,
		renderTpl?: any,
		shrinkWrap?: any,
		title?: string,
		titleAlign?: string,
		titlePosition?: number,
		isHeader?: boolean,
		addTool(tool?: any): void,
		addUIClsToElement(cls?: any): void,
		afterLayout(): void,
		beforeLayout(): void,
		getTools(): Ext.panel.ITool[],
		onAdd(component?: any, index?: any): void,
		removeUIClsFromElement(cls?: any): void,
		setGlyph(glyph?: any): void,
		setIcon(icon?: string): void,
		setIconCls(cls?: string): void,
		setTitle(title?: string): void
	}

	declare export interface IPanel {
		animCollapse?: boolean,
		bbar?: any,
		buttonAlign?: string,
		buttons?: any,
		closable?: boolean,
		closeAction?: string,
		collapseDirection?: string,
		collapseFirst?: boolean,
		collapseMode?: string,
		collapsed?: boolean,
		collapsedCls?: string,
		collapsible?: boolean,
		constrain?: boolean,
		constrainHeader?: boolean,
		dockedItems?: any,
		fbar?: any,
		floatable?: boolean,
		frame?: boolean,
		frameHeader?: boolean,
		glyph?: any,
		header?: any,
		headerOverCls?: string,
		headerPosition?: string,
		hideCollapseTool?: boolean,
		icon?: string,
		iconCls?: string,
		lbar?: any,
		manageHeight?: boolean,
		minButtonWidth?: number,
		overlapHeader?: boolean,
		placeholder?: any,
		placeholderCollapseHideMode?: number,
		preventHeader?: boolean,
		rbar?: any,
		simpleDrag?: boolean,
		tbar?: any,
		title?: string,
		titleAlign?: string,
		titleCollapse?: boolean,
		tools?: any,
		dd?: any,
		addTool(tools?: any): void,
		afterCollapse(animated?: boolean): void,
		afterExpand(animated?: boolean): void,
		close(): void,
		collapse(direction?: string, animate?: boolean): Ext.panel.IPanel,
		convertCollapseDir(collapseDir?: any): void,
		expand(animate?: boolean): Ext.panel.IPanel,
		getCollapsed(): any,
		getHeader(): void,
		getState(): any,
		isLayoutRoot(): void,
		isVisible(deep?: any): boolean,
		onHide(): void,
		onRemoved(destroying?: any): void,
		onShow(): void,
		setBorder(border?: any, targetEl?: any): void,
		setGlyph(newGlyph?: any): void,
		setIcon(newIcon?: string): void,
		setIconCls(newIconCls?: string): void,
		setTitle(newTitle?: string): void,
		setUI(ui?: any): void,
		toggleCollapse(): Ext.panel.IPanel
	}

	declare export interface IProxy {
		insertProxy?: boolean,
		moveOnDrag?: boolean,
		panel?: Ext.panel.IPanel,
		getEl(): Ext.IElement,
		getGhost(): Ext.panel.IPanel,
		getProxy(): Ext.IElement,
		hide(): void,
		moveProxy(parentNode?: HTMLElement, before?: HTMLElement): void,
		show(): void
	}

	declare export interface ITable {
		allowDeselect?: boolean,
		columnLines?: boolean,
		columns?: any,
		deferRowRender?: boolean,
		disableSelection?: boolean,
		emptyText?: string,
		enableColumnHide?: boolean,
		enableColumnMove?: boolean,
		enableColumnResize?: boolean,
		enableLocking?: boolean,
		features?: any,
		forceFit?: boolean,
		hideHeaders?: boolean,
		layout?: any,
		multiSelect?: boolean,
		rowLines?: boolean,
		scroll?: any,
		sealedColumns?: boolean,
		selModel?: any,
		selType?: string,
		simpleSelect?: boolean,
		sortableColumns?: boolean,
		store?: Ext.data.IStore,
		verticalScroller?: any,
		view?: Ext.view.ITable,
		viewConfig?: any,
		viewType?: string,
		hasView?: boolean,
		optimizedColumnMove?: boolean,
		afterCollapse(): void,
		afterExpand(): void,
		applyState(state?: any): void,
		determineScrollbars(): void,
		getSelectionModel(): Ext.selection.IModel,
		getState(): any,
		getStore(): Ext.data.IStore,
		getView(): Ext.view.ITable,
		invalidateScroller(): void,
		onDestroy(): void,
		syncRowHeights(): void
	}

	declare export interface ITool {
		baseCls?: string,
		callback?: any,
		disabledCls?: string,
		handler?: any,
		height?: number,
		renderTpl?: any,
		scope?: any,
		stopEvent?: boolean,
		toolOwner?: Ext.IComponent,
		tooltip?: any,
		tooltipType?: string,
		type?: string,
		width?: number,
		isTool?: boolean,
		afterRender(): void,
		initComponent(): void,
		onDestroy(): void,
		setType(type?: string): Ext.panel.ITool
	}

			
}

declare module 'perf' {
		declare export interface IAccumulator {
		
	}

	declare export interface IMonitor {
		
	}

		declare export class Monitor  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		getInitialConfig(name?: string): any;
		initConfig(config?: any): Ext.IBase;
		statics(): Ext.IClass
	}

	
}

declare module 'picker' {
		declare export interface IColor {
		allowReselect?: boolean,
		clickEvent?: string,
		componentCls?: string,
		handler?: any,
		itemCls?: string,
		renderTpl?: any,
		scope?: any,
		selectedCls?: string,
		value?: string,
		colors?: string[],
		clear(): void,
		getValue(): string,
		onRender(): void,
		select(color?: string, suppressEvent?: boolean): void
	}

	declare export interface IDate {
		ariaTitle?: string,
		ariaTitleDateFormat?: string,
		baseCls?: string,
		border?: any,
		dayNames?: string[],
		disableAnim?: boolean,
		disabledCellCls?: string,
		disabledDates?: string[],
		disabledDatesRE?: RegExp,
		disabledDatesText?: string,
		disabledDays?: number[],
		disabledDaysText?: string,
		focusOnShow?: boolean,
		format?: string,
		handler?: any,
		keyNavConfig?: any,
		longDayFormat?: string,
		maxDate?: any,
		maxText?: string,
		minDate?: any,
		minText?: string,
		monthNames?: string[],
		monthYearFormat?: string,
		monthYearText?: string,
		nextText?: string,
		prevText?: string,
		renderTpl?: any,
		scope?: any,
		selectedCls?: string,
		showToday?: boolean,
		startDay?: number,
		todayText?: string,
		todayTip?: string,
		getDayInitial(value?: any): string,
		getValue(): any,
		hideMonthPicker(animate?: boolean): Ext.picker.IDate,
		initComponent(): void,
		selectToday(): Ext.picker.IDate,
		setDisabledDates(disabledDates?: any): Ext.picker.IDate,
		setDisabledDays(disabledDays?: number[]): Ext.picker.IDate,
		setMaxDate(value?: any): Ext.picker.IDate,
		setMinDate(value?: any): Ext.picker.IDate,
		setValue(value?: any): Ext.picker.IDate,
		showMonthPicker(animate?: boolean): Ext.picker.IDate,
		showNextMonth(e?: any): Ext.picker.IDate,
		showNextYear(): Ext.picker.IDate,
		showPrevMonth(e?: any): Ext.picker.IDate,
		showPrevYear(): Ext.picker.IDate
	}

	declare export interface IMonth {
		baseCls?: string,
		cancelText?: string,
		okText?: string,
		renderTpl?: any,
		selectedCls?: string,
		showButtons?: boolean,
		value?: any,
		adjustYear(offset?: number): void,
		getValue(): number[],
		hasSelection(): boolean,
		onDestroy(): void,
		setValue(value?: any): Ext.picker.IMonth
	}

	declare export interface ITime {
		componentCls?: string,
		format?: string,
		increment?: number,
		maxValue?: any,
		minValue?: any,
		focusNode(rec?: any): void,
		initComponent(): void,
		setMaxValue(value?: any): void,
		setMinValue(value?: any): void,
		updateList(): void
	}

			
}

declare module 'resizer' {
		declare export interface IBorderSplitter {
		collapseTarget?: any,
		getTrackerConfig(): void
	}

	declare export interface IBorderSplitterTracker {
		onBeforeStart(e?: any): void
	}

	declare export interface IHandle {
		region?: any
	}

	declare export interface IResizer {
		constrainTo?: any,
		dynamic?: boolean,
		handles?: string,
		height?: number,
		heightIncrement?: number,
		maxHeight?: number,
		maxWidth?: number,
		minHeight?: number,
		minWidth?: number,
		pinned?: boolean,
		preserveRatio?: boolean,
		target?: any,
		transparent?: boolean,
		width?: number,
		widthIncrement?: number,
		el?: Ext.IElement,
		originalTarget?: any,
		resizeTracker?: Ext.resizer.IResizeTracker,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clearListeners(): void,
		clearManagedListeners(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getEl(): Ext.IElement,
		getTarget(): any,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resizeTo(width?: number, height?: number): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IResizeTracker {
		constrainTo?: any,
		createProxy(target?: any): Ext.IElement,
		onBeforeStart(e?: any): void,
		onDrag(e?: any): void,
		onEnd(e?: any): void,
		onStart(e?: any): void
	}

	declare export interface ISplitter {
		baseCls?: string,
		collapseOnDblClick?: boolean,
		collapseTarget?: any,
		collapsedCls?: string,
		collapsible?: boolean,
		defaultSplitMax?: number,
		defaultSplitMin?: number,
		performCollapse?: boolean,
		renderTpl?: any,
		size?: number,
		orientation?: string,
		beforeDestroy(): void,
		getTrackerConfig(): void,
		onRender(): void,
		setSize(): Ext.IComponent
	}

	declare export interface ISplitterTracker {
		onBeforeStart(e?: any): void,
		onDrag(e?: any): void,
		onEnd(e?: any): void,
		onStart(e?: any): void
	}

			
}

declare module 'selection' {
		declare export interface ICellModel {
		enableKeyNav?: boolean,
		mode?: string,
		preventWrap?: boolean,
		deselect(record?: any, suppressEvent?: any): void,
		getCurrentPosition(): void,
		select(pos?: any, keepExisting?: any, suppressEvent?: any): void,
		setCurrentPosition(position?: any, suppressEvent?: boolean): void
	}

	declare export interface ICheckboxModel {
		checkOnly?: boolean,
		checkSelector?: string,
		injectCheckbox?: any,
		mode?: any,
		showHeaderCheckbox?: boolean,
		getHeaderConfig(): void,
		onHeaderClick(headerCt?: any, header?: any, e?: any): void,
		renderer(
		value?: any, metaData?: any, record?: any, rowIndex?: any, colIndex?: any, store?: any, view?: any
	): void
	}

	declare export interface IDataViewModel {
		enableKeyNav?: boolean
	}

	declare export interface IModel {
		allowDeselect?: boolean,
		mode?: any,
		pruneRemoved?: boolean,
		toggleOnClick?: boolean,
		selected?: Ext.util.IMixedCollection,
		bindStore(store?: any, initial?: any): void,
		bindStoreListeners(store?: Ext.data.IAbstractStore): void,
		deselect(records?: any, suppressEvent?: boolean): void,
		deselectAll(suppressEvent?: boolean): void,
		deselectRange(startRow?: any, endRow?: any): void,
		getCount(): number,
		getLastSelected(): Ext.data.IModel,
		getSelection(): Ext.data.IModel[],
		getSelectionMode(): string,
		getStore(): Ext.data.IAbstractStore,
		getStoreListeners(): any,
		hasSelection(): boolean,
		isFocused(record?: Ext.data.IModel): void,
		isLocked(): boolean,
		isRangeSelected(from?: any, to?: any): boolean,
		isSelected(record?: any): boolean,
		onBindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		onUnbindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		select(records?: any, keepExisting?: boolean, suppressEvent?: boolean): void,
		selectAll(suppressEvent?: boolean): void,
		selectRange(startRow?: any, endRow?: any, keepExisting?: boolean): void,
		setLastFocused(record?: Ext.data.IModel): void,
		setLocked(locked?: boolean): void,
		setSelectionMode(selMode?: string): void,
		unbindStoreListeners(store?: Ext.data.IAbstractStore): void
	}

	declare export interface IRowModel {
		enableKeyNav?: boolean,
		ignoreRightMouseSelection?: boolean,
		getCurrentPosition(): void,
		selectNext(keepExisting?: boolean, suppressEvent?: boolean): boolean,
		selectPrevious(keepExisting?: boolean, suppressEvent?: boolean): boolean
	}

	declare export interface ITreeModel {
		bindStore(store?: any, initial?: any): void
	}

			
}

declare module 'slider' {
		declare export interface IMulti {
		animate?: boolean,
		clickToChange?: boolean,
		componentLayout?: any,
		constrainThumbs?: boolean,
		decimalPrecision?: any,
		increment?: number,
		keyIncrement?: number,
		maxValue?: number,
		minValue?: number,
		tipText?: any,
		useTips?: any,
		value?: number,
		values?: number[],
		vertical?: boolean,
		zeroBasedSnapping?: boolean,
		dragging?: boolean,
		thumbs?: any[],
		addThumb(value?: number): any,
		beforeDestroy(): void,
		getSubTplData(): any,
		getSubmitValue(): any,
		getValue(index?: number): any,
		getValues(): any,
		initComponent(): void,
		initValue(): void,
		onDisable(): void,
		onEnable(): void,
		onRender(): void,
		reset(): void,
		setMaxValue(val?: number): void,
		setMinValue(val?: number): void,
		setReadOnly(readOnly?: any): void,
		syncThumbs(): void
	}

	declare export interface IMultiSlider {
		animate?: boolean,
		clickToChange?: boolean,
		componentLayout?: any,
		constrainThumbs?: boolean,
		decimalPrecision?: any,
		increment?: number,
		keyIncrement?: number,
		maxValue?: number,
		minValue?: number,
		tipText?: any,
		useTips?: any,
		value?: number,
		values?: number[],
		vertical?: boolean,
		zeroBasedSnapping?: boolean,
		dragging?: boolean,
		thumbs?: any[],
		addThumb(value?: number): any,
		beforeDestroy(): void,
		getSubTplData(): any,
		getSubmitValue(): any,
		getValue(index?: number): any,
		getValues(): any,
		initComponent(): void,
		initValue(): void,
		onDisable(): void,
		onEnable(): void,
		onRender(): void,
		reset(): void,
		setMaxValue(val?: number): void,
		setMinValue(val?: number): void,
		setReadOnly(readOnly?: any): void,
		syncThumbs(): void
	}

	declare export interface ISingle {
		getValue(): any,
		setValue(value?: number, animate?: boolean): void
	}

	declare export interface ISingleSlider {
		getValue(): any,
		setValue(value?: number, animate?: boolean): void
	}

	declare export interface ISlider {
		getValue(): any,
		setValue(value?: number, animate?: boolean): void
	}

	declare export interface IThumb {
		constrain?: boolean,
		slider?: Ext.slider.IMultiSlider,
		disable(): void,
		enable(): void,
		initEvents(): void,
		render(): void
	}

	declare export interface ITip {
		align?: string,
		minWidth?: number,
		offsets?: any[],
		position?: string,
		getText(thumb?: Ext.slider.IThumb): string
	}

			
}

declare module 'state' {
		declare export interface ICookieProvider {
		domain?: string,
		expires?: any,
		path?: string,
		secure?: boolean,
		clear(name?: any): void,
		set(name?: any, value?: any): void
	}

	declare export interface ILocalStorageProvider {
		clear(name?: any): void,
		set(name?: any, value?: any): void
	}

	declare export interface IManager {
		
	}

	declare export interface IProvider {
		prefix?: string,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		clear(name?: string): void,
		clearListeners(): void,
		clearManagedListeners(): void,
		decodeValue(value?: string): any,
		enableBubble(eventNames?: any): void,
		encodeValue(value?: any): string,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		get(name?: string, defaultValue?: any): any,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		set(name?: string, value?: any): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

	declare export interface IStateful {
		saveDelay?: number,
		stateEvents?: string[],
		stateId?: string,
		stateful?: boolean,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any): any,
		addManagedListener(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		addStateEvents(events?: any): void,
		applyState(state?: any): void,
		clearListeners(): void,
		clearManagedListeners(): void,
		destroy(): void,
		enableBubble(eventNames?: any): void,
		fireEvent(eventName: string, ...args: any[]): boolean,
		fireEventArgs(eventName?: string, args?: any[]): boolean,
		getState(): any,
		hasListener(eventName?: string): boolean,
		mon(item?: any, ename?: any, fn?: any, scope?: any, options?: any): any,
		mun(item?: any, ename?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any): any,
		relayEvents(origin?: any, events?: string[], prefix?: string): any,
		removeListener(eventName?: string, fn?: any, scope?: any): void,
		removeManagedListener(item?: any, ename?: any, fn?: any, scope?: any): void,
		resumeEvent(...eventName: any[]): void,
		resumeEvents(): void,
		savePropToState(propName?: string, state?: any, stateName?: string): boolean,
		savePropsToState(propNames?: any, state?: any): any,
		saveState(): void,
		suspendEvent(...eventName: any[]): void,
		suspendEvents(queueSuspended?: boolean): void,
		un(eventName?: string, fn?: any, scope?: any): void
	}

		declare export class Manager  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(name?: string): void;
		get(name?: string, defaultValue?: any): any;
		getInitialConfig(name?: string): any;
		getProvider(): Ext.state.IProvider;
		initConfig(config?: any): Ext.IBase;
		set(name?: string, value?: any): void;
		setProvider(stateProvider?: Ext.state.IProvider): void;
		statics(): Ext.IClass
	}

	
}

declare module 'tab' {
		declare export interface IBar {
		baseCls?: string,
		maxTabWidth?: number,
		minTabWidth?: number,
		plain?: boolean,
		isTabBar?: boolean,
		afterComponentLayout(width?: any): void,
		afterLayout(): void,
		afterRender(): void,
		getLayout(): Ext.layout.container.IContainer,
		onRemove(tab?: any): void,
		onRender(): void
	}

	declare export interface IPanel {
		activeItem?: any,
		activeTab?: any,
		deferredRender?: boolean,
		itemCls?: string,
		layout?: any,
		maxTabWidth?: number,
		minTabWidth?: number,
		plain?: boolean,
		removePanelHeader?: boolean,
		tabBar?: any,
		tabPosition?: any,
		getActiveTab(): Ext.IComponent,
		getTabBar(): Ext.tab.IBar,
		onAdd(item?: any, index?: any): void,
		setActiveTab(card?: any): Ext.IComponent
	}

	declare export interface ITab {
		activeCls?: string,
		baseCls?: string,
		closable?: boolean,
		closableCls?: string,
		closeText?: string,
		disabledCls?: string,
		scale?: any,
		active?: boolean,
		isTab?: boolean,
		disable(silent?: any): void,
		enable(silent?: any): void,
		getTemplateArgs(): any,
		initComponent(): void,
		setCard(card?: Ext.IComponent): void,
		setClosable(closable?: boolean): void
	}

			
}

declare module 'tip' {
		declare export interface IQuickTip {
		interceptTitles?: boolean,
		target?: any,
		title?: string,
		cancelShow(el?: any): void,
		register(config?: any): void,
		unregister(el?: any): void
	}

	declare export interface IQuickTipManager {
		
	}

	declare export interface ITip {
		autoRender?: any,
		baseCls?: string,
		closable?: boolean,
		closeAction?: string,
		constrainPosition?: boolean,
		defaultAlign?: string,
		floating?: boolean,
		focusOnToFront?: boolean,
		frameHeader?: boolean,
		hidden?: boolean,
		maxWidth?: number,
		minWidth?: number,
		shadow?: any,
		width?: number
	}

	declare export interface IToolTip {
		anchor?: string,
		anchorOffset?: number,
		anchorToTarget?: boolean,
		autoHide?: boolean,
		delegate?: string,
		dismissDelay?: number,
		hideDelay?: number,
		mouseOffset?: number[],
		showDelay?: number,
		target?: any,
		trackMouse?: boolean,
		triggerElement?: HTMLElement,
		setTarget(t?: any): void
	}

		declare export class QuickTipManager  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		disable(): void;
		enable(): void;
		getInitialConfig(name?: string): any;
		getQuickTip(): Ext.tip.IQuickTip;
		init(autoRender?: boolean, config?: any): void;
		initConfig(config?: any): Ext.IBase;
		isEnabled(): boolean;
		register(config?: any): void;
		statics(): Ext.IClass;
		tips(config?: any): void;
		unregister(el?: any): void
	}

	
}

declare module 'toolbar' {
		declare export interface IFill {
		isFill?: boolean
	}

	declare export interface IItem {
		overflowText?: string,
		disable(): void,
		enable(): void,
		focus(): Ext.IComponent
	}

	declare export interface IPaging {
		afterPageText?: string,
		beforePageText?: string,
		displayInfo?: boolean,
		displayMsg?: string,
		emptyMsg?: string,
		firstText?: string,
		inputItemWidth?: number,
		lastText?: string,
		nextText?: string,
		prependButtons?: boolean,
		prevText?: string,
		refreshText?: string,
		store?: Ext.data.IStore,
		bind(store?: Ext.data.IStore): void,
		bindStore(store?: any): void,
		bindStoreListeners(store?: Ext.data.IAbstractStore): void,
		doRefresh(): void,
		getStore(): Ext.data.IAbstractStore,
		getStoreListeners(): any,
		moveFirst(): void,
		moveLast(): void,
		moveNext(): void,
		movePrevious(): void,
		onBindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		onUnbindStore(store?: Ext.data.IAbstractStore, initial?: boolean): void,
		unbind(store?: Ext.data.IStore): void,
		unbindStoreListeners(store?: Ext.data.IAbstractStore): void
	}

	declare export interface ISeparator {
		baseCls?: string
	}

	declare export interface ISpacer {
		baseCls?: string
	}

	declare export interface ITextItem {
		baseCls?: string,
		renderTpl?: any,
		text?: string,
		setText(text?: string): void
	}

	declare export interface IToolbar {
		baseCls?: string,
		defaultButtonUI?: string,
		defaultType?: string,
		enableOverflow?: boolean,
		layout?: any,
		menuTriggerCls?: string,
		vertical?: boolean,
		isToolbar?: boolean,
		add(args?: any): any,
		getRefItems(deep?: any): void,
		insert(index?: number, component?: any): Ext.IComponent
	}

			
}

declare module 'tree' {
		declare export interface IColumn {
		hideable?: boolean,
		lockable?: boolean,
		tdCls?: string,
		draggable?: boolean
	}

	declare export interface IPanel {
		animate?: boolean,
		deferRowRender?: boolean,
		displayField?: string,
		folderSort?: boolean,
		hideHeaders?: boolean,
		lines?: boolean,
		root?: any,
		rootVisible?: boolean,
		rowLines?: boolean,
		selType?: string,
		singleExpand?: boolean,
		store?: Ext.data.ITreeStore,
		useArrows?: boolean,
		viewType?: string,
		collapseAll(callback?: any, scope?: any): void,
		collapseNode(record?: Ext.data.IModel, deep?: boolean, callback?: any, scope?: any): void,
		expandAll(callback?: any, scope?: any): void,
		expandNode(record?: Ext.data.IModel, deep?: boolean, callback?: any, scope?: any): void,
		expandPath(
		path?: string, field?: string, separator?: string, callback?: any, scope?: any
	): void,
		getChecked(): Ext.data.INodeInterface[],
		getRootNode(): Ext.data.INodeInterface,
		selectPath(
		path?: string, field?: string, separator?: string, callback?: any, scope?: any
	): void,
		setRootNode(root?: any): Ext.data.INodeInterface
	}

	declare export interface ITreePanel {
		animate?: boolean,
		deferRowRender?: boolean,
		displayField?: string,
		folderSort?: boolean,
		hideHeaders?: boolean,
		lines?: boolean,
		root?: any,
		rootVisible?: boolean,
		rowLines?: boolean,
		selType?: string,
		singleExpand?: boolean,
		store?: Ext.data.ITreeStore,
		useArrows?: boolean,
		viewType?: string,
		collapseAll(callback?: any, scope?: any): void,
		collapseNode(record?: Ext.data.IModel, deep?: boolean, callback?: any, scope?: any): void,
		expandAll(callback?: any, scope?: any): void,
		expandNode(record?: Ext.data.IModel, deep?: boolean, callback?: any, scope?: any): void,
		expandPath(
		path?: string, field?: string, separator?: string, callback?: any, scope?: any
	): void,
		getChecked(): Ext.data.INodeInterface[],
		getRootNode(): Ext.data.INodeInterface,
		selectPath(
		path?: string, field?: string, separator?: string, callback?: any, scope?: any
	): void,
		setRootNode(root?: any): Ext.data.INodeInterface
	}

	declare export interface IView {
		animate?: boolean,
		blockRefresh?: boolean,
		deferInitialRefresh?: boolean,
		loadMask?: boolean,
		loadingCls?: string,
		rootVisible?: boolean,
		stripeRows?: boolean,
		isTreeView?: boolean,
		afterComponentLayout(): void,
		collapse(record?: Ext.data.IModel, deep?: boolean, callback?: any, scope?: any): void,
		expand(record?: Ext.data.IModel, deep?: boolean, callback?: any, scope?: any): void,
		getStoreListeners(): any,
		getTreeStore(): void,
		initComponent(): void,
		onBindStore(): void,
		onUnbindStore(): void,
		toggle(record?: Ext.data.IModel, deep?: boolean, callback?: any, scope?: any): void
	}

	declare export interface IViewDragZone {
		
	}

	declare export interface IViewDropZone {
		allowContainerDrop?: boolean,
		allowParentInserts?: boolean,
		appendOnly?: boolean,
		expandDelay?: number,
		notifyOut(): void,
		onContainerOver(dd?: any, e?: any, data?: any): string,
		onNodeOut(n?: any, dd?: any, e?: any, data?: any): void,
		onNodeOver(node?: any, dragZone?: any, e?: any, data?: any): string
	}

			
}

declare module 'taskrunner' {
		declare export interface ITask {
		fireOnStart?: boolean,
		destroy(): void,
		restart(interval?: number): void,
		start(interval?: number): void,
		stop(): void
	}

			
}

declare module 'view' {
		declare export interface IAbstractView {
		blockRefresh?: boolean,
		deferEmptyText?: boolean,
		deferInitialRefresh?: boolean,
		disableSelection?: boolean,
		emptyText?: string,
		itemCls?: string,
		itemSelector?: string,
		itemTpl?: any,
		loadMask?: any,
		loadingCls?: string,
		loadingHeight?: number,
		loadingText?: string,
		multiSelect?: boolean,
		overItemCls?: string,
		preserveScrollOnRefresh?: boolean,
		selectedItemCls?: string,
		simpleSelect?: boolean,
		singleSelect?: boolean,
		store?: Ext.data.IStore,
		tpl?: any,
		trackOver?: boolean,
		afterRender(): void,
		bindStore(store?: Ext.data.IStore): void,
		bindStoreListeners(store?: Ext.data.IAbstractStore): void,
		clearSelections(): void,
		collectData(records?: Ext.data.IModel[], startIndex?: number): any[],
		deselect(records?: any, suppressEvent?: boolean): void,
		findItemByChild(node?: HTMLElement): HTMLElement,
		findTargetByEvent(e?: Ext.IEventObject): void,
		getNode(nodeInfo?: any): HTMLElement,
		getNodes(start?: number, end?: number): HTMLElement[],
		getRecord(node?: any): Ext.data.IModel,
		getRecords(nodes?: HTMLElement[]): Ext.data.IModel[],
		getSelectedNodes(): HTMLElement[],
		getSelectedRecords(): Ext.data.IModel[],
		getSelectionCount(): number,
		getSelectionModel(): Ext.selection.IModel,
		getStore(): Ext.data.IStore,
		getStoreListeners(): any,
		indexOf(nodeInfo?: any): number,
		initComponent(): void,
		isSelected(node?: any): boolean,
		onBindStore(store?: any, initial?: any, propName?: any): void,
		onDestroy(): void,
		onRender(): void,
		onUnbindStore(store?: any): void,
		prepareData(data?: any, recordIndex?: number, record?: Ext.data.IModel): any,
		refresh(): void,
		refreshNode(index?: number): void,
		select(records?: any, keepExisting?: boolean, suppressEvent?: boolean): void,
		unbindStoreListeners(store?: Ext.data.IAbstractStore): void
	}

	declare export interface IBoundList {
		baseCls?: string,
		componentLayout?: any,
		deferInitialRefresh?: boolean,
		displayField?: string,
		itemCls?: string,
		pageSize?: number,
		renderTpl?: any,
		shadow?: any,
		tpl?: any,
		trackOver?: boolean,
		pagingToolbar?: Ext.toolbar.IPaging,
		bindStore(store?: any, initial?: any): void,
		child(selector?: any): any,
		down(selector?: any): any,
		getInnerTpl(displayField?: string): string,
		onDestroy(): void,
		query(selector?: string): Ext.IComponent[],
		queryBy(fn?: any, scope?: any): Ext.IComponent[],
		queryById(id?: string): Ext.IComponent,
		refresh(): void
	}

	declare export interface IBoundListKeyNav {
		boundList?: Ext.view.IBoundList,
		highlightAt(index?: number): void,
		selectHighlighted(e?: any): void
	}

	declare export interface IDragZone {
		containerScroll?: any,
		getDragData(e?: any): any,
		getRepairXY(e?: any, data?: any): number[],
		init(id?: any, sGroup?: any, config?: any): void,
		onInitDrag(x?: any, y?: any): boolean
	}

	declare export interface IDropZone {
		destroy(): void,
		getTargetFromEvent(e?: any): any,
		notifyOut(node?: any, dragZone?: any, e?: any, data?: any): void,
		onContainerDrop(dd?: any, e?: any, data?: any): boolean,
		onContainerOver(dd?: any, e?: any, data?: any): string,
		onNodeDrop(targetNode?: any, dragZone?: any, e?: any, data?: any): boolean,
		onNodeOver(node?: any, dragZone?: any, e?: any, data?: any): string
	}

	declare export interface INodeCache {
		clear(removeDom?: boolean): void,
		fill(els?: HTMLElement[]): Ext.view.INodeCache,
		indexOf(el?: any): number,
		removeElement(el?: any, removeDom?: boolean): void,
		replaceElement(el?: any, replacement?: any, domReplace?: boolean): Ext.view.INodeCache,
		scroll(newRecords?: Ext.data.IModel[], direction?: number, removeCount?: number): void
	}

	declare export interface ITable {
		baseCls?: string,
		componentLayout?: any,
		enableTextSelection?: boolean,
		firstCls?: string,
		itemSelector?: string,
		lastCls?: string,
		markDirty?: boolean,
		overItemCls?: string,
		selectedItemCls?: string,
		stripeRows?: boolean,
		trackOver?: boolean,
		addRowCls(rowInfo?: any, cls?: string): void,
		autoSizeColumn(header?: any): void,
		beforeDestroy(): void,
		collectData(records?: any, startIndex?: any): any[],
		expandToFit(header?: any): void,
		focus(selectText?: any, delay?: any): Ext.IComponent,
		focusRow(row?: any, delay?: any): void,
		getBodySelector(): void,
		getCellSelector(header?: Ext.grid.column.IColumn): void,
		getColumnSizerSelector(header?: any): void,
		getDataRowSelector(): void,
		getFeature(id?: string): Ext.grid.feature.IFeature,
		getItemSelector(): void,
		getNode(nodeInfo?: any, dataRow?: boolean): HTMLElement,
		getNodeContainerSelector(): void,
		getPosition(record?: any, header?: any): number[],
		getRecord(node?: any): Ext.data.IModel,
		getRowClass(
		record?: Ext.data.IModel, index?: number, rowParams?: any, store?: Ext.data.IStore
	): string,
		indexOf(node?: any): number,
		initComponent(): void,
		onDestroy(): void,
		refresh(): void,
		removeRowCls(rowInfo?: any, cls?: string): void,
		walkRecs(startRec?: Ext.data.IModel, distance?: number): void,
		walkRows(startRow?: number, distance?: number): void
	}

	declare export interface ITableLayout {
		beginLayout(ownerContext?: any): void,
		calculate(ownerContext?: any): void,
		finishedLayout(): void
	}

	declare export interface IView {
		mouseOverOutBuffer?: number,
		clearHighlight(): void,
		focusNode(rec?: Ext.data.IModel): void,
		highlightItem(item?: HTMLElement): void,
		initComponent(): void,
		refresh(): void
	}

			
}

declare module 'window' {
		declare export interface IMessageBox {
		closeAction?: string,
		cls?: string,
		constrain?: boolean,
		hideMode?: string,
		layout?: any,
		maxHeight?: number,
		maxWidth?: number,
		minHeight?: number,
		minWidth?: number,
		resizable?: any,
		shrinkWrapDock?: any,
		title?: string,
		CANCEL?: number,
		ERROR?: string,
		INFO?: string,
		NO?: number,
		OK?: number,
		OKCANCEL?: number,
		QUESTION?: string,
		WARNING?: string,
		YES?: number,
		YESNO?: number,
		YESNOCANCEL?: number,
		buttonText?: any,
		defaultTextHeight?: number,
		minProgressWidth?: number,
		minPromptWidth?: number,
		alert(title?: string, msg?: string, fn?: any, scope?: any): Ext.window.IMessageBox,
		confirm(title?: string, msg?: string, fn?: any, scope?: any): Ext.window.IMessageBox,
		hide(): Ext.IComponent,
		onShow(): void,
		progress(title?: string, msg?: string, progressText?: string): Ext.window.IMessageBox,
		prompt(
		title?: string, msg?: string, fn?: any, scope?: any, multiline?: any, value?: string
	): Ext.window.IMessageBox,
		setIcon(icon?: string, width?: number, height?: number): Ext.window.IMessageBox,
		show(config?: any): Ext.window.IMessageBox,
		updateProgress(value?: number, progressText?: string, msg?: string): Ext.window.IMessageBox,
		wait(msg?: string, title?: string, config?: any): Ext.window.IMessageBox
	}

	declare export interface IWindow {
		animateTarget?: any,
		autoRender?: boolean,
		baseCls?: string,
		closable?: boolean,
		collapsed?: boolean,
		collapsible?: boolean,
		constrain?: boolean,
		constrainHeader?: boolean,
		defaultFocus?: any,
		draggable?: boolean,
		expandOnShow?: boolean,
		ghost?: any,
		hidden?: boolean,
		hideMode?: string,
		hideShadowOnDeactivate?: boolean,
		maximizable?: boolean,
		maximized?: boolean,
		minHeight?: number,
		minWidth?: number,
		minimizable?: boolean,
		modal?: boolean,
		onEsc?: any,
		overlapHeader?: boolean,
		plain?: boolean,
		resizable?: any,
		x?: number,
		y?: number,
		dd?: Ext.util.IComponentDragger,
		isWindow?: boolean,
		afterCollapse(): void,
		afterExpand(): void,
		applyState(state?: any): void,
		getDefaultFocus(): void,
		maximize(animate?: boolean): Ext.window.IWindow,
		minimize(): Ext.window.IWindow,
		onShow(): void,
		restore(animate?: any): Ext.window.IWindow,
		toggleMaximize(): Ext.window.IWindow
	}

			
}