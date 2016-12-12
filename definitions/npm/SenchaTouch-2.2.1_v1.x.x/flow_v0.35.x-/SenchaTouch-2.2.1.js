

declare module 'SenchaTouch-2.2.1' {
					
}

declare module 'npm$namespace$Ext' {
		declare export interface IAbstractComponent {
		
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

	declare export interface IActionSheet {
		baseCls?: string,
		bottom?: any,
		defaultType?: string,
		height?: any,
		left?: any,
		right?: any,
		getBaseCls(): string,
		getBottom(): number,
		getDefaultType(): string,
		getHeight(): string,
		getLeft(): number,
		getRight(): number,
		setBaseCls(baseCls?: string): void,
		setBottom(bottom?: number): void,
		setDefaultType(defaultType?: string): void,
		setHeight(height?: string): void,
		setLeft(left?: number): void,
		setRight(right?: number): void
	}

	declare export interface IAjax {
		
	}

	declare export interface IAnim {
		
	}

	declare export interface IAnimationQueue {
		
	}

	declare export interface IAnims {
		
	}

	declare export interface IArray {
		
	}

	declare export interface IAudio {
		cls?: any,
		url?: string,
		getCls(): string,
		getUrl(): string,
		setCls(cls?: string): void,
		setUrl(url?: string): void
	}

	declare export interface IBase {
		self?: Ext.IClass,
		callOverridden(args?: any): any,
		callParent(args?: any): any,
		callSuper(args?: any): any,
		destroy(): void,
		getInitialConfig(name?: string): any,
		initConfig(instanceConfig?: any): any
	}

	declare export interface IBrowser {
		
	}

	declare export interface IButton {
		autoEvent?: string,
		badge?: string,
		badgeCls?: string,
		badgeText?: string,
		baseCls?: string,
		handler?: any,
		html?: string,
		icon?: string,
		iconAlign?: string,
		iconCls?: string,
		labelCls?: string,
		pressedCls?: string,
		pressedDelay?: any,
		scope?: any,
		text?: string,
		ui?: string,
		getAutoEvent(): string,
		getBadgeCls(): string,
		getBadgeText(): string,
		getBaseCls(): string,
		getHandler(): any,
		getIcon(): string,
		getIconAlign(): string,
		getIconCls(): string,
		getLabelCls(): string,
		getPressedCls(): string,
		getPressedDelay(): any,
		getScope(): any,
		getText(): string,
		getUi(): string,
		initialize(): void,
		setAutoEvent(autoEvent?: string): void,
		setBadge(text?: string): void,
		setBadgeCls(badgeCls?: string): void,
		setBadgeText(badgeText?: string): void,
		setBaseCls(baseCls?: string): void,
		setHandler(handler?: any): void,
		setIcon(icon?: string): void,
		setIconAlign(iconAlign?: string): void,
		setIconClass(iconClass?: string): void,
		setIconCls(iconCls?: string): void,
		setLabelCls(labelCls?: string): void,
		setPressedCls(pressedCls?: string): void,
		setPressedDelay(pressedDelay?: any): void,
		setScope(scope?: any): void,
		setText(text?: string): void,
		setUi(ui?: string): void
	}

	declare export interface ICarousel {
		baseCls?: string,
		direction?: string,
		indicator?: boolean,
		ui?: string,
		destroy(): void,
		getActiveIndex(): number,
		getAnimation(): any,
		getBaseCls(): string,
		getBufferSize(): number,
		getDirection(): string,
		getDirectionLock(): boolean,
		getIndicator(): any,
		getItemConfig(): any,
		getItemLength(): any,
		getUi(): string,
		isHorizontal(): boolean,
		isVertical(): boolean,
		next(): Ext.carousel.ICarousel,
		prev(): Ext.carousel.ICarousel,
		previous(): Ext.carousel.ICarousel,
		setAnimation(animation?: any): void,
		setBaseCls(baseCls?: string): void,
		setBufferSize(bufferSize?: number): void,
		setDirection(direction?: string): void,
		setDirectionLock(directionLock?: boolean): void,
		setIndicator(indicator?: boolean): void,
		setItemConfig(itemConfig?: any): void,
		setItemLength(itemLength?: any): void,
		setUi(ui?: string): void
	}

	declare export interface IClass {
		alias?: string[],
		alternateClassName?: any,
		config?: any,
		extend?: string,
		inheritableStatics?: any,
		mixins?: any,
		platformConfig?: any,
		singleton?: boolean,
		statics?: any,
		uses?: string[]
	}

	declare export interface IClassManager {
		
	}

	declare export interface IComponent {
		baseCls?: string,
		border?: any,
		bottom?: any,
		centered?: boolean,
		cls?: any,
		componentCls?: string,
		contentEl?: any,
		data?: any,
		disabled?: boolean,
		disabledCls?: string,
		dock?: string,
		docked?: string,
		enterAnimation?: any,
		exitAnimation?: any,
		flex?: number,
		floating?: boolean,
		floatingCls?: string,
		fullscreen?: boolean,
		height?: any,
		hidden?: boolean,
		hiddenCls?: string,
		hideAnimation?: any,
		hideOnMaskTap?: boolean,
		html?: any,
		id?: string,
		itemId?: string,
		layoutOnOrientationChange?: boolean,
		left?: any,
		margin?: any,
		maxHeight?: any,
		maxWidth?: any,
		minHeight?: any,
		minWidth?: any,
		modal?: boolean,
		monitorOrientation?: boolean,
		padding?: any,
		plugins?: any,
		record?: Ext.data.IModel,
		renderTo?: Ext.IElement,
		right?: any,
		scroll?: any,
		showAnimation?: any,
		stopMaskTapEvent?: boolean,
		style?: any,
		styleHtmlCls?: string,
		styleHtmlContent?: boolean,
		top?: any,
		tpl?: any,
		tplWriteMode?: string,
		ui?: string,
		width?: any,
		xtype?: string,
		zIndex?: number,
		addCls(cls?: string, prefix?: string, suffix?: string): void,
		destroy(): void,
		disable(): void,
		enable(): void,
		getBaseCls(): string,
		getBorder(): any,
		getBottom(): any,
		getCentered(): boolean,
		getCls(): any,
		getContentEl(): any,
		getData(): any,
		getDisabled(): boolean,
		getDisabledCls(): string,
		getDocked(): string,
		getEl(): Ext.dom.IElement,
		getEnterAnimation(): any,
		getExitAnimation(): any,
		getFlex(): number,
		getFloatingCls(): string,
		getHeight(): any,
		getHidden(): boolean,
		getHiddenCls(): string,
		getHideAnimation(): any,
		getHtml(): any,
		getItemId(): string,
		getLeft(): any,
		getMargin(): any,
		getMaxHeight(): any,
		getMaxWidth(): any,
		getMinHeight(): any,
		getMinWidth(): any,
		getPadding(): any,
		getParent(): Ext.IComponent,
		getPlugins(): any,
		getRecord(): Ext.data.IModel,
		getRenderTo(): Ext.IElement,
		getRight(): any,
		getShowAnimation(): any,
		getSize(): any,
		getStyle(): any,
		getStyleHtmlCls(): string,
		getStyleHtmlContent(): boolean,
		getTop(): any,
		getTpl(): any,
		getTplWriteMode(): string,
		getUi(): string,
		getWidth(): any,
		getXTypes(): string,
		getZIndex(): number,
		hasParent(): boolean,
		hide(animation?: any): Ext.IComponent,
		initialize(): void,
		isDisabled(): boolean,
		isHidden(): boolean,
		isXType(xtype?: string, shallow?: boolean): boolean,
		removeCls(cls?: string, prefix?: string, suffix?: string): void,
		replaceCls(oldCls?: string, newCls?: string, prefix?: string, suffix?: string): void,
		resetFloating(): void,
		setBaseCls(baseCls?: string): void,
		setBorder(border?: any): void,
		setBottom(bottom?: any): void,
		setCentered(centered?: boolean): void,
		setCls(cls?: any): void,
		setContentEl(contentEl?: any): void,
		setData(data?: any): void,
		setDisabled(disabled?: boolean): void,
		setDisabledCls(disabledCls?: string): void,
		setDocked(docked?: string): void,
		setDraggable(draggable?: any): void,
		setEnterAnimation(enterAnimation?: any): void,
		setExitAnimation(exitAnimation?: any): void,
		setFlex(flex?: number): void,
		setFloating(floating?: boolean): void,
		setFloatingCls(floatingCls?: string): void,
		setHeight(height?: any): void,
		setHidden(hidden?: boolean): void,
		setHiddenCls(hiddenCls?: string): void,
		setHideAnimation(hideAnimation?: any): void,
		setHtml(html?: any): void,
		setItemId(itemId?: string): void,
		setLeft(left?: any): void,
		setMargin(margin?: any): void,
		setMaxHeight(maxHeight?: any): void,
		setMaxWidth(maxWidth?: any): void,
		setMinHeight(minHeight?: any): void,
		setMinWidth(minWidth?: any): void,
		setPadding(padding?: any): void,
		setPlugins(plugins?: any): void,
		setRecord(record?: Ext.data.IModel): void,
		setRenderTo(renderTo?: Ext.IElement): void,
		setRight(right?: any): void,
		setScrollable(): void,
		setShowAnimation(showAnimation?: any): void,
		setSize(width?: number, height?: number): void,
		setStyle(style?: any): void,
		setStyleHtmlCls(styleHtmlCls?: string): void,
		setStyleHtmlContent(styleHtmlContent?: boolean): void,
		setTop(top?: any): void,
		setTpl(tpl?: any): void,
		setTplWriteMode(tplWriteMode?: string): void,
		setUi(ui?: string): void,
		setWidth(width?: any): void,
		setZIndex(zIndex?: number): void,
		show(animation?: any): Ext.IComponent,
		showBy(component?: Ext.IComponent, alignment?: string): void,
		up(selector?: string): Ext.IContainer,
		update(): void,
		updateStyleHtmlCls(newHtmlCls?: any, oldHtmlCls?: any): void
	}

	declare export interface IComponentManager {
		
	}

	declare export interface IComponentMgr {
		
	}

	declare export interface IComponentQuery {
		
	}

	declare export interface IContainer {
		activeItem?: any,
		autoDestroy?: boolean,
		cardSwitchAnimation?: any,
		control?: any,
		defaultType?: string,
		defaults?: any,
		hideOnMaskTap?: boolean,
		items?: any,
		layout?: any,
		masked?: any,
		modal?: boolean,
		scroll?: any,
		scrollable?: any,
		add(newItems?: any): Ext.IComponent,
		addAll(items?: any[]): any[],
		animateActiveItem(activeItem?: any, animation?: any): void,
		applyMasked(masked?: any): any,
		child(selector?: string): Ext.IComponent,
		destroy(): void,
		down(selector?: string): Ext.IComponent,
		getActiveItem(): any,
		getAt(index?: number): Ext.IComponent,
		getAutoDestroy(): boolean,
		getComponent(component?: any): Ext.IComponent,
		getControl(): any,
		getDefaultType(): string,
		getDefaults(): any,
		getDockedComponent(component?: any): any,
		getDockedItems(): any[],
		getHideOnMaskTap(): boolean,
		getInnerItems(): any[],
		getItems(): any,
		getMasked(): any,
		getModal(): boolean,
		getScrollable(): Ext.scroll.IView,
		insert(index?: number, item?: any): void,
		mask(mask?: any): void,
		query(selector?: string): any[],
		remove(item?: any, destroy?: boolean): Ext.IComponent,
		removeAll(destroy?: boolean, everything?: boolean): Ext.IComponent,
		removeAt(index?: number): Ext.IContainer,
		removeDocked(item?: any, destroy?: boolean): Ext.IComponent,
		removeInnerAt(index?: number): Ext.IContainer,
		setActiveItem(activeItem?: any): void,
		setAutoDestroy(autoDestroy?: boolean): void,
		setControl(control?: any): void,
		setDefaultType(defaultType?: string): void,
		setDefaults(defaults?: any): void,
		setHideOnMaskTap(hideOnMaskTap?: boolean): void,
		setItems(items?: any): void,
		setLayout(layout?: any): void,
		setMasked(masked?: any): void,
		setModal(modal?: boolean): void,
		setScrollable(scrollable?: any): void,
		unmask(): void
	}

	declare export interface IModelMgr {
		
	}

	declare export interface IModelManager {
		
	}

	declare export interface IStoreMgr {
		
	}

	declare export interface IStoreManager {
		
	}

	declare export interface IDataView {
		baseCls?: string,
		blockRefresh?: boolean,
		data?: any[],
		defaultType?: string,
		deferEmptyText?: boolean,
		deselectOnContainerClick?: boolean,
		emptyText?: string,
		inline?: any,
		itemCls?: string,
		itemConfig?: any,
		itemSelector?: boolean,
		itemTpl?: any,
		loadingText?: string,
		maxItemCache?: number,
		multiSelect?: boolean,
		overItemCls?: boolean,
		pressedCls?: string,
		pressedDelay?: number,
		scrollToTopOnRefresh?: boolean,
		scrollable?: any,
		selectedCls?: string,
		selectedItemCls?: boolean,
		simpleSelect?: boolean,
		singleSelect?: boolean,
		store?: any,
		trackOver?: boolean,
		triggerCtEvent?: string,
		triggerEvent?: string,
		useComponents?: boolean,
		bindStore(): void,
		clearSelections(): void,
		collectData(): void,
		deselect(records?: any, suppressEvent?: boolean): void,
		deselectAll(supress?: any): void,
		destroy(): void,
		doDeselect(records?: any, suppressEvent?: boolean): void,
		doSelect(records?: any, keepExisting?: boolean, suppressEvent?: boolean): void,
		findItemByChild(): void,
		findTargetByEvent(): void,
		getAllowDeselect(): boolean,
		getBaseCls(): string,
		getCount(): number,
		getData(): any[],
		getDefaultType(): string,
		getDeferEmptyText(): boolean,
		getDeselectOnContainerClick(): boolean,
		getDisableSelection(): boolean,
		getEmptyText(): string,
		getInline(): any,
		getItemAt(index?: number): any,
		getItemCls(): string,
		getItemConfig(): any,
		getItemIndex(item?: number): number,
		getItemTpl(): any,
		getLastSelected(): any[],
		getLoadingText(): string,
		getMaxItemCache(): number,
		getMode(): string,
		getNode(): void,
		getNodes(): void,
		getPressedCls(): string,
		getPressedDelay(): number,
		getRecords(): void,
		getScrollToTopOnRefresh(): boolean,
		getScrollable(): boolean,
		getSelectedCls(): string,
		getSelectedNodes(): void,
		getSelectedRecords(): void,
		getSelection(): any[],
		getSelectionCount(): number,
		getSelectionMode(): string,
		getStore(): any,
		getTriggerCtEvent(): string,
		getTriggerEvent(): string,
		getUseComponents(): boolean,
		getViewItems(): any,
		handleException(): void,
		hasSelection(): boolean,
		indexOf(): void,
		initialize(): void,
		isLocked(): boolean,
		isSelected(record?: any): boolean,
		prepareData(data?: any, index?: number, record?: Ext.data.IModel): any,
		refresh(): void,
		refreshNode(): void,
		select(records?: any, keepExisting?: boolean, suppressEvent?: boolean): void,
		selectAll(silent?: boolean): void,
		selectRange(startRecord?: number, endRecord?: number, keepExisting?: boolean): void,
		setAllowDeselect(allowDeselect?: boolean): void,
		setBaseCls(baseCls?: string): void,
		setData(data?: any[]): void,
		setDefaultType(defaultType?: string): void,
		setDeferEmptyText(deferEmptyText?: boolean): void,
		setDeselectOnContainerClick(deselectOnContainerClick?: boolean): void,
		setDisableSelection(disableSelection?: boolean): void,
		setEmptyText(emptyText?: string): void,
		setInline(inline?: any): void,
		setItemCls(itemCls?: string): void,
		setItemConfig(itemConfig?: any): void,
		setItemTpl(itemTpl?: any): void,
		setLastFocused(): void,
		setLoadingText(loadingText?: string): void,
		setMaxItemCache(maxItemCache?: number): void,
		setMode(mode?: string): void,
		setPressedCls(pressedCls?: string): void,
		setPressedDelay(pressedDelay?: number): void,
		setScrollToTopOnRefresh(scrollToTopOnRefresh?: boolean): void,
		setScrollable(scrollable?: boolean): void,
		setSelectedCls(selectedCls?: string): void,
		setStore(store?: any): void,
		setTriggerCtEvent(triggerCtEvent?: string): void,
		setTriggerEvent(triggerEvent?: string): void,
		setUseComponents(useComponents?: boolean): void,
		updateLastFocused(newRecord?: Ext.data.IRecord, oldRecord?: Ext.data.IRecord): void
	}

	declare export interface IIndexBar {
		alphabet?: boolean,
		baseCls?: string,
		direction?: string,
		itemSelector?: boolean,
		letters?: any[],
		listPrefix?: string,
		store?: boolean,
		ui?: string,
		destroy(): void,
		getBaseCls(): string,
		getDirection(): string,
		getLetters(): any[],
		getListPrefix(): string,
		getUi(): string,
		isHorizontal(): void,
		isVertical(): void,
		refresh(): void,
		setBaseCls(baseCls?: string): void,
		setDirection(direction?: string): void,
		setLetters(letters?: any[]): void,
		setListPrefix(listPrefix?: string): void,
		setUi(ui?: string): void
	}

	declare export interface IList {
		baseCls?: string,
		defaultType?: string,
		disclosureProperty?: string,
		grouped?: boolean,
		indexBar?: any,
		infinite?: boolean,
		itemHeight?: number,
		onItemDisclosure?: any,
		pinHeaders?: boolean,
		preventSelectionOnDisclose?: boolean,
		refreshHeightOnUpdate?: boolean,
		scrollable?: any,
		striped?: boolean,
		ui?: string,
		useSimpleItems?: boolean,
		variableHeights?: boolean,
		getBaseCls(): string,
		getDefaultType(): string,
		getDisclosureProperty(): string,
		getGrouped(): boolean,
		getIcon(): any,
		getIndexBar(): any,
		getInfinite(): boolean,
		getItemAt(index?: number): any,
		getItemHeight(): number,
		getItemIndex(item?: number): number,
		getOnItemDisclosure(): any,
		getPinHeaders(): boolean,
		getPreventSelectionOnDisclose(): boolean,
		getRefreshHeightOnUpdate(): boolean,
		getScrollDockedItems(): any[],
		getStriped(): boolean,
		getUi(): string,
		getUseSimpleItems(): boolean,
		getVariableHeights(): boolean,
		getViewItems(): any,
		initialize(): void,
		setBaseCls(baseCls?: string): void,
		setDefaultType(defaultType?: string): void,
		setDisclosureProperty(disclosureProperty?: string): void,
		setGrouped(grouped?: boolean): void,
		setIcon(icon?: any): void,
		setIndexBar(indexBar?: any): void,
		setInfinite(infinite?: boolean): void,
		setItemHeight(itemHeight?: number): void,
		setOnItemDisclosure(onItemDisclosure?: any): void,
		setPinHeaders(pinHeaders?: boolean): void,
		setPreventSelectionOnDisclose(preventSelectionOnDisclose?: boolean): void,
		setRefreshHeightOnUpdate(refreshHeightOnUpdate?: boolean): void,
		setScrollable(scrollable?: any): void,
		setStriped(striped?: boolean): void,
		setUi(ui?: string): void,
		setUseSimpleItems(useSimpleItems?: boolean): void,
		setVariableHeights(variableHeights?: boolean): void
	}

	declare export interface INestedList {
		allowDeselect?: boolean,
		backButton?: any,
		backText?: string,
		baseCls?: string,
		cardSwitchAnimation?: any,
		clearSelectionDelay?: number,
		detailCard?: Ext.IComponent,
		detailContainer?: Ext.IContainer,
		displayField?: string,
		emptyText?: string,
		itemHeight?: number,
		listConfig?: any,
		loadingText?: string,
		onItemDisclosure?: any,
		store?: any,
		title?: string,
		toolbar?: any,
		ui?: string,
		updateTitleText?: boolean,
		useSimpleItems?: boolean,
		useTitleAsBackText?: boolean,
		useToolbar?: boolean,
		variableHeights?: boolean,
		getAllowDeselect(): boolean,
		getBackButton(): any,
		getBackText(): string,
		getBaseCls(): string,
		getDetailCard(): Ext.IComponent,
		getDetailContainer(): Ext.IContainer,
		getDisplayField(): string,
		getEmptyText(): string,
		getItemHeight(): number,
		getItemTextTpl(node?: Ext.data.IRecord): string,
		getListConfig(): any,
		getLoadingText(): string,
		getOnItemDisclosure(): any,
		getStore(): any,
		getSubList(): void,
		getTitle(): string,
		getTitleTextTpl(node?: Ext.data.IRecord): string,
		getToolbar(): any,
		getUpdateTitleText(): boolean,
		getUseSimpleItems(): boolean,
		getUseTitleAsBackText(): boolean,
		getUseToolbar(): boolean,
		getVariableHeights(): boolean,
		goToLeaf(node?: Ext.data.INodeInterface): void,
		goToNode(node?: Ext.data.INodeInterface): void,
		onBackTap(): void,
		onItemTap(
		list?: Ext.IList, index?: number, target?: Ext.IElement, record?: Ext.data.IRecord, e?: Ext.event.IEvent
	): void,
		setAllowDeselect(allowDeselect?: boolean): void,
		setBackButton(backButton?: any): void,
		setBackText(backText?: string): void,
		setBaseCls(baseCls?: string): void,
		setDetailCard(detailCard?: Ext.IComponent): void,
		setDetailContainer(detailContainer?: Ext.IContainer): void,
		setDisplayField(displayField?: string): void,
		setEmptyText(emptyText?: string): void,
		setItemHeight(itemHeight?: number): void,
		setListConfig(listConfig?: any): void,
		setLoadingText(loadingText?: string): void,
		setOnItemDisclosure(onItemDisclosure?: any): void,
		setStore(store?: any): void,
		setTitle(title?: string): void,
		setToolbar(toolbar?: any): void,
		setUi(ui?: any): void,
		setUpdateTitleText(updateTitleText?: boolean): void,
		setUseSimpleItems(useSimpleItems?: boolean): void,
		setUseTitleAsBackText(useTitleAsBackText?: boolean): void,
		setUseToolbar(useToolbar?: boolean): void,
		setVariableHeights(variableHeights?: boolean): void
	}

	declare export interface IDate {
		
	}

	declare export interface IDateExtras {
		
	}

	declare export interface IDecorator {
		component?: any,
		destroy(): void,
		getComponent(): any,
		setComponent(component?: any): void
	}

	declare export interface IDirect {
		
	}

	declare export interface ICompositeElement {
		
	}

	declare export interface ICompositeElementLite {
		elements?: HTMLElement[],
		add(els?: any, root?: any): Ext.dom.ICompositeElementLite,
		addCls(names?: string, prefix?: string, suffix?: string): Ext.dom.IElement,
		addListener(
		eventName?: any, handler?: any, scope?: any, opt?: any
	): Ext.dom.ICompositeElementLite,
		appendChild(element?: any): Ext.dom.IElement,
		appendTo(el?: any): Ext.dom.IElement,
		applyStyles(styles?: any): Ext.dom.IElement,
		child(selector?: string, returnDom?: boolean): any,
		clear(): void,
		contains(el?: any): boolean,
		createChild(
		config?: any, insertBefore?: HTMLElement, returnDom?: boolean
	): Ext.dom.IElement,
		cssTranslate(): void,
		destroy(): void,
		down(selector?: string, returnDom?: boolean): any,
		each(fn?: any, scope?: any): Ext.dom.ICompositeElementLite,
		fill(els?: any): Ext.dom.ICompositeElementLite,
		filter(selector?: any): Ext.dom.ICompositeElementLite,
		findParent(simpleSelector?: string, maxDepth?: any, returnEl?: boolean): any,
		findParentNode(simpleSelector?: string, maxDepth?: any, returnEl?: boolean): any,
		getAlignToXY(element?: any, position?: string, offsets?: any[]): any[],
		getAnchorXY(anchor?: string, local?: boolean, size?: any): any[],
		getAttribute(name?: string, namespace?: string): string,
		getBorderWidth(side?: string): number,
		getBottom(): number,
		getBox(contentBox?: boolean, local?: boolean): any,
		getCount(): number,
		getHTML(): string,
		getHeight(contentHeight?: boolean): number,
		getHtml(): string,
		getLeft(): number,
		getMargin(sides?: string): any,
		getOffsetsTo(element?: any): any[],
		getOuterHeight(): void,
		getOuterWidth(): void,
		getPadding(side?: string): number,
		getPageBox(asRegion?: boolean): any,
		getRight(): number,
		getScrollParent(): void,
		getSize(contentSize?: boolean): any,
		getStyle(prop?: string): string,
		getTop(): number,
		getValue(asNumber?: boolean): any,
		getViewSize(): any,
		getWidth(contentWidth?: boolean): number,
		getX(el?: any): number,
		getXY(): any[],
		getY(el?: any): number,
		hasCls(name?: string): boolean,
		hide(): void,
		indexOf(el?: any): number,
		insertAfter(el?: any): Ext.dom.IElement,
		insertBefore(el?: any): Ext.dom.IElement,
		insertFirst(element?: any): Ext.dom.IElement,
		insertHtml(where?: string, html?: string, returnEl?: boolean): any,
		insertSibling(el?: any, where?: string, returnDom?: boolean): Ext.dom.IElement,
		is(selector?: string): boolean,
		isDescendent(): void,
		isStyle(style?: string, value?: string): boolean,
		isTransparent(prop?: string): boolean,
		item(index?: number): Ext.dom.IElement,
		mask(): void,
		next(selector?: string, returnDom?: boolean): any,
		parent(selector?: string, returnDom?: boolean): any,
		prev(selector?: string, returnDom?: boolean): any,
		purgeAllListeners(): void,
		query(selector?: string): HTMLElement[],
		radioCls(className?: any): Ext.dom.IElement,
		remove(): void,
		removeAllListeners(): void,
		removeCls(names?: string, prefix?: string, suffix?: string): Ext.dom.IElement,
		removeElement(el?: any, removeDom?: boolean): Ext.dom.ICompositeElementLite,
		repaint(): Ext.dom.IElement,
		replace(element?: any): Ext.dom.IElement,
		replaceCls(
		oldName?: string, newName?: string, prefix?: string, suffix?: string
	): Ext.dom.IElement,
		replaceElement(
		el?: any, replacement?: any, domReplace?: boolean
	): Ext.dom.ICompositeElementLite,
		replaceWith(el?: any): Ext.dom.IElement,
		select(selector?: any, composite?: boolean): Ext.dom.ICompositeElementLite,
		serializeForm(form?: any): string,
		set(attributes?: any, useSet?: boolean): Ext.dom.IElement,
		setBottom(bottom?: string): Ext.dom.IElement,
		setBox(box?: any): Ext.dom.IElement,
		setCls(className?: any): void,
		setHTML(html?: string): void,
		setHeight(height?: any): Ext.dom.IElement,
		setHtml(html?: string): void,
		setLeft(left?: string): Ext.dom.IElement,
		setMaxHeight(height?: any): Ext.dom.IElement,
		setMaxWidth(width?: any): Ext.dom.IElement,
		setMinHeight(height?: any): Ext.dom.IElement,
		setMinWidth(width?: any): Ext.dom.IElement,
		setRight(right?: string): Ext.dom.IElement,
		setSize(width?: any, height?: any): Ext.dom.IElement,
		setStyle(property?: any, value?: string): Ext.dom.IElement,
		setTop(top?: string): Ext.dom.IElement,
		setTopLeft(): void,
		setVisibilityMode(mode?: any): Ext.dom.IElement,
		setVisible(visible?: boolean): Ext.IElement,
		setWidth(width?: any): Ext.dom.IElement,
		setX(x?: number): Ext.dom.IElement,
		setXY(pos?: number[]): Ext.dom.IElement,
		setY(y?: number): Ext.dom.IElement,
		show(): void,
		toggleCls(className?: string): Ext.dom.IElement,
		translatePoints(x?: any, y?: number): any,
		unmask(): void,
		up(simpleSelector?: string, maxDepth?: any): any,
		update(html?: string): void,
		wrap(config?: any, domNode?: boolean): any
	}

	declare export interface ICompositeElement {
		elements?: HTMLElement[],
		add(els?: any, root?: any): Ext.dom.ICompositeElementLite,
		addCls(names?: string, prefix?: string, suffix?: string): Ext.dom.IElement,
		addListener(
		eventName?: any, handler?: any, scope?: any, opt?: any
	): Ext.dom.ICompositeElementLite,
		appendChild(element?: any): Ext.dom.IElement,
		appendTo(el?: any): Ext.dom.IElement,
		applyStyles(styles?: any): Ext.dom.IElement,
		child(selector?: string, returnDom?: boolean): any,
		clear(): void,
		contains(el?: any): boolean,
		createChild(
		config?: any, insertBefore?: HTMLElement, returnDom?: boolean
	): Ext.dom.IElement,
		cssTranslate(): void,
		destroy(): void,
		down(selector?: string, returnDom?: boolean): any,
		each(fn?: any, scope?: any): Ext.dom.ICompositeElementLite,
		fill(els?: any): Ext.dom.ICompositeElementLite,
		filter(selector?: any): Ext.dom.ICompositeElementLite,
		findParent(simpleSelector?: string, maxDepth?: any, returnEl?: boolean): any,
		findParentNode(simpleSelector?: string, maxDepth?: any, returnEl?: boolean): any,
		getAlignToXY(element?: any, position?: string, offsets?: any[]): any[],
		getAnchorXY(anchor?: string, local?: boolean, size?: any): any[],
		getAttribute(name?: string, namespace?: string): string,
		getBorderWidth(side?: string): number,
		getBottom(): number,
		getBox(contentBox?: boolean, local?: boolean): any,
		getCount(): number,
		getHTML(): string,
		getHeight(contentHeight?: boolean): number,
		getHtml(): string,
		getLeft(): number,
		getMargin(sides?: string): any,
		getOffsetsTo(element?: any): any[],
		getOuterHeight(): void,
		getOuterWidth(): void,
		getPadding(side?: string): number,
		getPageBox(asRegion?: boolean): any,
		getRight(): number,
		getScrollParent(): void,
		getSize(contentSize?: boolean): any,
		getStyle(prop?: string): string,
		getTop(): number,
		getValue(asNumber?: boolean): any,
		getViewSize(): any,
		getWidth(contentWidth?: boolean): number,
		getX(el?: any): number,
		getXY(): any[],
		getY(el?: any): number,
		hasCls(name?: string): boolean,
		hide(): void,
		indexOf(el?: any): number,
		insertAfter(el?: any): Ext.dom.IElement,
		insertBefore(el?: any): Ext.dom.IElement,
		insertFirst(element?: any): Ext.dom.IElement,
		insertHtml(where?: string, html?: string, returnEl?: boolean): any,
		insertSibling(el?: any, where?: string, returnDom?: boolean): Ext.dom.IElement,
		is(selector?: string): boolean,
		isDescendent(): void,
		isStyle(style?: string, value?: string): boolean,
		isTransparent(prop?: string): boolean,
		item(index?: number): Ext.dom.IElement,
		mask(): void,
		next(selector?: string, returnDom?: boolean): any,
		parent(selector?: string, returnDom?: boolean): any,
		prev(selector?: string, returnDom?: boolean): any,
		purgeAllListeners(): void,
		query(selector?: string): HTMLElement[],
		radioCls(className?: any): Ext.dom.IElement,
		remove(): void,
		removeAllListeners(): void,
		removeCls(names?: string, prefix?: string, suffix?: string): Ext.dom.IElement,
		removeElement(el?: any, removeDom?: boolean): Ext.dom.ICompositeElementLite,
		repaint(): Ext.dom.IElement,
		replace(element?: any): Ext.dom.IElement,
		replaceCls(
		oldName?: string, newName?: string, prefix?: string, suffix?: string
	): Ext.dom.IElement,
		replaceElement(
		el?: any, replacement?: any, domReplace?: boolean
	): Ext.dom.ICompositeElementLite,
		replaceWith(el?: any): Ext.dom.IElement,
		select(selector?: any, composite?: boolean): Ext.dom.ICompositeElementLite,
		serializeForm(form?: any): string,
		set(attributes?: any, useSet?: boolean): Ext.dom.IElement,
		setBottom(bottom?: string): Ext.dom.IElement,
		setBox(box?: any): Ext.dom.IElement,
		setCls(className?: any): void,
		setHTML(html?: string): void,
		setHeight(height?: any): Ext.dom.IElement,
		setHtml(html?: string): void,
		setLeft(left?: string): Ext.dom.IElement,
		setMaxHeight(height?: any): Ext.dom.IElement,
		setMaxWidth(width?: any): Ext.dom.IElement,
		setMinHeight(height?: any): Ext.dom.IElement,
		setMinWidth(width?: any): Ext.dom.IElement,
		setRight(right?: string): Ext.dom.IElement,
		setSize(width?: any, height?: any): Ext.dom.IElement,
		setStyle(property?: any, value?: string): Ext.dom.IElement,
		setTop(top?: string): Ext.dom.IElement,
		setTopLeft(): void,
		setVisibilityMode(mode?: any): Ext.dom.IElement,
		setVisible(visible?: boolean): Ext.IElement,
		setWidth(width?: any): Ext.dom.IElement,
		setX(x?: number): Ext.dom.IElement,
		setXY(pos?: number[]): Ext.dom.IElement,
		setY(y?: number): Ext.dom.IElement,
		show(): void,
		toggleCls(className?: string): Ext.dom.IElement,
		translatePoints(x?: any, y?: number): any,
		unmask(): void,
		up(simpleSelector?: string, maxDepth?: any): any,
		update(html?: string): void,
		wrap(config?: any, domNode?: boolean): any
	}

	declare export interface IElement {
		DISPLAY?: number,
		OFFSETS?: number,
		VISIBILITY?: number,
		defaultUnit?: string,
		dom?: HTMLElement,
		id?: string,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addCls(names?: string, prefix?: string, suffix?: string): Ext.dom.IElement,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		appendChild(element?: any): Ext.dom.IElement,
		appendTo(el?: any): Ext.dom.IElement,
		applyStyles(styles?: any): Ext.dom.IElement,
		child(selector?: string, returnDom?: boolean): any,
		clearListeners(): void,
		contains(element?: any): boolean,
		createChild(
		config?: any, insertBefore?: HTMLElement, returnDom?: boolean
	): Ext.dom.IElement,
		cssTranslate(): void,
		destroy(): void,
		down(selector?: string, returnDom?: boolean): any,
		enableBubble(events?: any): void,
		findParent(simpleSelector?: string, maxDepth?: any, returnEl?: boolean): any,
		findParentNode(simpleSelector?: string, maxDepth?: any, returnEl?: boolean): any,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		first(selector?: string, returnDom?: boolean): any,
		getAlignToXY(element?: any, position?: string, offsets?: any[]): any[],
		getAnchorXY(anchor?: string, local?: boolean, size?: any): any[],
		getAttribute(name?: string, namespace?: string): string,
		getBorderWidth(side?: string): number,
		getBottom(): number,
		getBox(contentBox?: boolean, local?: boolean): any,
		getBubbleEvents(): any,
		getHTML(): string,
		getHeight(contentHeight?: boolean): number,
		getHtml(): string,
		getLeft(): number,
		getListeners(): any,
		getMargin(sides?: string): any,
		getOffsetsTo(element?: any): any[],
		getOuterHeight(): void,
		getOuterWidth(): void,
		getPadding(side?: string): number,
		getPageBox(asRegion?: boolean): any,
		getRight(): number,
		getScrollParent(): void,
		getSize(contentSize?: boolean): any,
		getStyle(prop?: string): string,
		getTop(): number,
		getValue(asNumber?: boolean): any,
		getViewSize(): any,
		getWidth(contentWidth?: boolean): number,
		getX(el?: any): number,
		getXY(): any[],
		getY(el?: any): number,
		hasCls(name?: string): boolean,
		hasListener(eventName?: string): boolean,
		hide(): void,
		insertAfter(el?: any): Ext.dom.IElement,
		insertBefore(el?: any): Ext.dom.IElement,
		insertFirst(element?: any): Ext.dom.IElement,
		insertHtml(where?: string, html?: string, returnEl?: boolean): any,
		insertSibling(el?: any, where?: string, returnDom?: boolean): Ext.dom.IElement,
		is(selector?: string): boolean,
		isDescendent(): void,
		isStyle(style?: string, value?: string): boolean,
		isTransparent(prop?: string): boolean,
		last(selector?: string, returnDom?: boolean): any,
		mask(): void,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		next(selector?: string, returnDom?: boolean): any,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		parent(selector?: string, returnDom?: boolean): any,
		prev(selector?: string, returnDom?: boolean): any,
		purgeAllListeners(): void,
		query(selector?: string): HTMLElement[],
		radioCls(className?: any): Ext.dom.IElement,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		remove(): void,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeAllListeners(): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeCls(names?: string, prefix?: string, suffix?: string): Ext.dom.IElement,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		repaint(): Ext.dom.IElement,
		replace(element?: any): Ext.dom.IElement,
		replaceCls(
		oldName?: string, newName?: string, prefix?: string, suffix?: string
	): Ext.dom.IElement,
		replaceWith(el?: any): Ext.dom.IElement,
		resumeEvents(discardQueuedEvents?: boolean): void,
		serializeForm(form?: any): string,
		set(attributes?: any, useSet?: boolean): Ext.dom.IElement,
		setBottom(bottom?: string): Ext.dom.IElement,
		setBox(box?: any): Ext.dom.IElement,
		setBubbleEvents(bubbleEvents?: any): void,
		setCls(className?: any): void,
		setHTML(html?: string): void,
		setHeight(height?: any): Ext.dom.IElement,
		setHtml(html?: string): void,
		setLeft(left?: string): Ext.dom.IElement,
		setListeners(listeners?: any): void,
		setMaxHeight(height?: any): Ext.dom.IElement,
		setMaxWidth(width?: any): Ext.dom.IElement,
		setMinHeight(height?: any): Ext.dom.IElement,
		setMinWidth(width?: any): Ext.dom.IElement,
		setRight(right?: string): Ext.dom.IElement,
		setSize(width?: any, height?: any): Ext.dom.IElement,
		setStyle(property?: any, value?: string): Ext.dom.IElement,
		setTop(top?: string): Ext.dom.IElement,
		setTopLeft(): void,
		setVisibilityMode(mode?: any): Ext.dom.IElement,
		setVisible(visible?: boolean): Ext.IElement,
		setWidth(width?: any): Ext.dom.IElement,
		setX(x?: number): Ext.dom.IElement,
		setXY(pos?: number[]): Ext.dom.IElement,
		setY(y?: number): Ext.dom.IElement,
		show(): void,
		suspendEvents(): void,
		toggleCls(className?: string): Ext.dom.IElement,
		translatePoints(x?: any, y?: number): any,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unmask(): void,
		up(simpleSelector?: string, maxDepth?: any): any,
		update(html?: string): void,
		wrap(config?: any, domNode?: boolean): any
	}

	declare export interface IDomHelper {
		append(el?: any, o?: any, returnElement?: boolean): any,
		applyStyles(el?: any, styles?: any): void,
		createTemplate(o?: any): Ext.ITemplate,
		generateStyles(styles?: any, buffer?: string[]): any,
		insertAfter(el?: any, o?: any, returnElement?: boolean): any,
		insertBefore(el?: any, o?: any, returnElement?: boolean): any,
		insertFirst(el?: any, o?: any, returnElement?: boolean): any,
		insertHtml(where?: string, el?: any, html?: string): HTMLElement,
		markup(spec?: any): string,
		overwrite(el?: any, o?: any, returnElement?: boolean): any
	}

	declare export interface IDomQuery {
		
	}

	declare export interface IEventObject {
		angle?: number,
		direction?: number,
		duration?: number,
		rotation?: number,
		scale?: number,
		stopEvent(): Ext.event.IEvent,
		stopPropagation(): Ext.event.IEvent
	}

	declare export interface IEvented {
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IEventedBase {
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IEventManager {
		
	}

	declare export interface IFeature {
		
	}

	declare export interface IFunction {
		
	}

	declare export interface IImg {
		backgroundCls?: string,
		baseCls?: string,
		imageCls?: string,
		mode?: string,
		src?: string,
		destroy(): void,
		getBackgroundCls(): string,
		getBaseCls(): string,
		getImageCls(): string,
		getMode(): string,
		getSrc(): string,
		hide(): Ext.IComponent,
		initialize(): void,
		setBackgroundCls(backgroundCls?: string): void,
		setBaseCls(baseCls?: string): void,
		setImageCls(imageCls?: string): void,
		setMode(mode?: string): void,
		setSrc(src?: string): void,
		show(): Ext.IComponent
	}

	declare export interface IIs {
		
	}

	declare export interface IItemCollection {
		getKey(item?: any): any
	}

	declare export interface IJSON {
		
	}

	declare export interface ILabel {
		baseCls?: string,
		html?: string,
		getBaseCls(): string,
		setBaseCls(baseCls?: string): void
	}

	declare export interface ILoader {
		
	}

	declare export interface ILoadMask {
		indicator?: boolean,
		message?: string,
		messageCls?: string,
		msg?: string,
		msgCls?: string,
		store?: Ext.data.IStore,
		bindStore(store?: Ext.data.IStore): void,
		getIndicator(): boolean,
		getMessage(): string,
		getMessageCls(): string,
		setIndicator(indicator?: boolean): void,
		setMessage(message?: string): void,
		setMessageCls(messageCls?: string): void
	}

	declare export interface ILogger {
		
	}

	declare export interface IMap {
		baseCls?: string,
		geo?: Ext.util.IGeolocation,
		map?: any,
		mapOptions?: any,
		maskMap?: boolean,
		maskMapCls?: string,
		useCurrentLocation?: any,
		getBaseCls(): string,
		getGeo(): Ext.util.IGeolocation,
		getMap(): any,
		getState(): any,
		getUseCurrentLocation(): any,
		initialize(): void,
		setBaseCls(baseCls?: string): void,
		setGeo(geo?: Ext.util.IGeolocation): void,
		setMap(map?: any): void,
		setMapCenter(coordinates?: any): void,
		setMapOptions(mapOptions?: any): void,
		setUseCurrentLocation(useCurrentLocation?: any): void,
		update(coordinates?: any): void
	}

	declare export interface IMask {
		baseCls?: string,
		transparent?: boolean,
		getBaseCls(): string,
		getTransparent(): boolean,
		setBaseCls(baseCls?: string): void,
		setTransparent(transparent?: boolean): void
	}

	declare export interface IMedia {
		autoPause?: boolean,
		autoResume?: boolean,
		enableControls?: boolean,
		loop?: boolean,
		media?: Ext.IElement,
		muted?: boolean,
		preload?: boolean,
		url?: string,
		volume?: number,
		destroy(): void,
		getAutoPause(): boolean,
		getAutoResume(): boolean,
		getCurrentTime(): number,
		getDuration(): number,
		getEnableControls(): boolean,
		getLoop(): boolean,
		getMedia(): Ext.IElement,
		getMuted(): boolean,
		getPreload(): boolean,
		getUrl(): string,
		getVolume(): number,
		initialize(): void,
		isPlaying(): boolean,
		pause(): void,
		play(): void,
		setAutoPause(autoPause?: boolean): void,
		setAutoResume(autoResume?: boolean): void,
		setEnableControls(enableControls?: boolean): void,
		setLoop(loop?: boolean): void,
		setMedia(media?: Ext.IElement): void,
		setMuted(muted?: boolean): void,
		setPreload(preload?: boolean): void,
		setUrl(url?: string): void,
		setVolume(volume?: number): void,
		stop(): void,
		toggle(): void,
		updateEnableControls(enableControls?: any): void,
		updateLoop(loop?: any): void,
		updateUrl(newUrl?: any): void
	}

	declare export interface IMessageBox {
		baseCls?: string,
		buttons?: any,
		defaultTextHeight?: number,
		hideAnimation?: any,
		icon?: string,
		iconCls?: string,
		layout?: any,
		message?: string,
		msg?: string,
		prompt?: any,
		showAnimation?: any,
		title?: string,
		ui?: string,
		zIndex?: number,
		alert(title?: string, message?: string, fn?: any, scope?: any): Ext.IMessageBox,
		confirm(title?: string, message?: string, fn?: any, scope?: any): Ext.IMessageBox,
		getBaseCls(): string,
		getButtons(): any,
		getDefaultTextHeight(): number,
		getLayout(): any,
		getPrompt(): any,
		getTitle(): string,
		getUi(): string,
		getZIndex(): number,
		setBaseCls(baseCls?: string): void,
		setButtons(buttons?: any): void,
		setDefaultTextHeight(defaultTextHeight?: number): void,
		setHideAnimation(hideAnimation?: any): void,
		setIcon(iconCls?: string): Ext.IMessageBox,
		setIconCls(iconCls?: string): void,
		setLayout(layout?: any): void,
		setMessage(message?: string): void,
		setPrompt(prompt?: any): void,
		setShowAnimation(showAnimation?: any): void,
		setTitle(title?: string): void,
		setUi(ui?: string): void,
		setZIndex(zIndex?: number): void,
		show(config?: any): Ext.IMessageBox,
		updateText(message?: string): Ext.IMessageBox
	}

	declare export interface IMsg {
		
	}

	declare export interface INavigationView {
		baseCls?: string,
		defaultBackButtonText?: string,
		items?: any,
		navigationBar?: any,
		useTitleForBackButtonText?: boolean,
		getBaseCls(): string,
		getDefaultBackButtonText(): string,
		getItems(): any,
		getNavigationBar(): any,
		getPreviousItem(): any,
		getUseTitleForBackButtonText(): boolean,
		pop(count?: number): Ext.IComponent,
		push(view?: any): Ext.IComponent,
		reset(): Ext.IComponent,
		setBaseCls(baseCls?: string): void,
		setDefaultBackButtonText(defaultBackButtonText?: string): void,
		setItems(items?: any): void,
		setNavigationBar(navigationBar?: any): void,
		setUseTitleForBackButtonText(useTitleForBackButtonText?: boolean): void
	}

	declare export interface INumber {
		
	}

	declare export interface IObject {
		
	}

	declare export interface IOs {
		
	}

	declare export interface IPanel {
		baseCls?: string,
		bodyBorder?: any,
		bodyMargin?: any,
		bodyPadding?: any,
		getBaseCls(): string,
		getBodyBorder(): any,
		getBodyMargin(): any,
		getBodyPadding(): any,
		setBaseCls(baseCls?: string): void,
		setBodyBorder(bodyBorder?: any): void,
		setBodyMargin(bodyMargin?: any): void,
		setBodyPadding(bodyPadding?: any): void
	}

	declare export interface IDatePicker {
		dayText?: string,
		doneButton?: any,
		monthText?: string,
		slotOrder?: any[],
		value?: any,
		yearFrom?: number,
		yearText?: string,
		yearTo?: number,
		getDayText(): string,
		getDoneButton(): any,
		getMonthText(): string,
		getSlotOrder(): any[],
		getValue(useDom?: any): any,
		getYearFrom(): number,
		getYearText(): string,
		getYearTo(): number,
		initialize(): void,
		setDayText(dayText?: string): void,
		setDoneButton(doneButton?: any): void,
		setMonthText(monthText?: string): void,
		setSlotOrder(slotOrder?: any[]): void,
		setValue(value?: any, animated?: any): Ext.IPicker,
		setYearFrom(yearFrom?: number): void,
		setYearText(yearText?: string): void,
		setYearTo(yearTo?: number): void,
		updateDayText(newDayText?: any, oldDayText?: any): void,
		updateMonthText(newMonthText?: any, oldMonthText?: any): void,
		updateYearFrom(): void,
		updateYearText(yearText?: any): void,
		updateYearTo(): void
	}

	declare export interface IPicker {
		activeCls?: string,
		baseCls?: string,
		bottom?: any,
		cancelButton?: any,
		doneButton?: any,
		height?: number,
		layout?: any,
		left?: any,
		right?: any,
		slots?: any[],
		toolbar?: any,
		useTitles?: boolean,
		value?: any,
		applyCancelButton(config?: any): any,
		applyDoneButton(config?: any): any,
		destroy(): void,
		getBaseCls(): string,
		getBottom(): number,
		getCancelButton(): any,
		getCard(): any,
		getDoneButton(): any,
		getLayout(): any,
		getSlots(): any[],
		getToolbar(): any,
		getToolbarPosition(): string,
		getUseTitles(): boolean,
		getValue(useDom?: any): any,
		getValues(): any,
		initialize(): void,
		setBaseCls(baseCls?: string): void,
		setBottom(bottom?: number): void,
		setCancelButton(cancelButton?: any): void,
		setCard(activeItem?: any): void,
		setDoneButton(doneButton?: any): void,
		setHeight(height?: number): void,
		setLayout(layout?: any): void,
		setLeft(left?: number): void,
		setRight(right?: number): void,
		setSlots(slots?: any[]): void,
		setToolbar(toolbar?: any): void,
		setToolbarPosition(toolbarPosition?: string): void,
		setUseTitles(useTitles?: boolean): void,
		setValue(values?: any, animated?: boolean): Ext.IPicker,
		show(): Ext.IComponent
	}

	declare export interface IRouter {
		
	}

	declare export interface ISegmentedButton {
		allowDepress?: boolean,
		allowMultiple?: boolean,
		allowToggle?: boolean,
		baseCls?: string,
		defaultType?: string,
		layout?: any,
		pressedButtons?: any[],
		pressedCls?: string,
		applyItems(): void,
		getAllowDepress(): boolean,
		getAllowMultiple(): boolean,
		getAllowToggle(): boolean,
		getBaseCls(): string,
		getDefaultType(): string,
		getLayout(): any,
		getPressed(): void,
		getPressedButtons(): any[],
		getPressedCls(): string,
		isPressed(button?: Ext.IButton): boolean,
		setAllowDepress(allowDepress?: boolean): void,
		setAllowMultiple(allowMultiple?: boolean): void,
		setAllowToggle(allowToggle?: boolean): void,
		setBaseCls(baseCls?: string): void,
		setDefaultType(defaultType?: string): void,
		setLayout(layout?: any): void,
		setPressed(button?: any, pressed?: boolean, suppressEvents?: boolean): void,
		setPressedButtons(pressedButtons?: any[]): void,
		setPressedCls(pressedCls?: string): void
	}

	declare export interface ISheet {
		baseCls?: string,
		centered?: boolean,
		enter?: string,
		exit?: string,
		hideAnimation?: any,
		modal?: boolean,
		showAnimation?: any,
		stretchX?: boolean,
		stretchY?: boolean,
		getBaseCls(): string,
		getCentered(): boolean,
		getEnter(): string,
		getExit(): string,
		getModal(): boolean,
		getStretchX(): boolean,
		getStretchY(): boolean,
		setBaseCls(baseCls?: string): void,
		setCentered(centered?: boolean): void,
		setEnter(enter?: string): void,
		setExit(exit?: string): void,
		setHideAnimation(hideAnimation?: any): void,
		setModal(modal?: boolean): void,
		setShowAnimation(showAnimation?: any): void,
		setStretchX(stretchX?: boolean): void,
		setStretchY(stretchY?: boolean): void
	}

	declare export interface ISpacer {
		flex?: number,
		width?: number,
		getFlex(): number,
		setFlex(flex?: number): void,
		setWidth(width?: number): void
	}

	declare export interface IString {
		
	}

	declare export interface ISupports {
		AudioTag?: any,
		GeoLocation?: any,
		SVG?: any,
		Transitions?: any,
		VML?: any
	}

	declare export interface ITabBar {
		activeTab?: any,
		baseCls?: string,
		getActiveTab(): any,
		getBaseCls(): string,
		initialize(): void,
		setActiveTab(activeTab?: any): void,
		setBaseCls(baseCls?: string): void
	}

	declare export interface ITabPanel {
		cls?: any,
		layout?: any,
		tabBar?: any,
		tabBarDock?: boolean,
		tabBarPosition?: string,
		ui?: string,
		doTabChange(tabBar?: any, newTab?: any): boolean,
		getCls(): string,
		getLayout(): any,
		getTabBar(): any,
		getTabBarPosition(): string,
		getUi(): string,
		initialize(): void,
		setCls(cls?: string): void,
		setLayout(layout?: any): void,
		setTabBar(tabBar?: any): void,
		setTabBarPosition(tabBarPosition?: string): void,
		setUi(ui?: string): void,
		updateUi(newUi?: any, oldUi?: any): void
	}

	declare export interface ITab {
		active?: boolean,
		activeCls?: string,
		baseCls?: string,
		pressedCls?: string,
		title?: string,
		getActive(): boolean,
		getActiveCls(): string,
		getBaseCls(): string,
		getPressedCls(): string,
		getTitle(): string,
		setActive(active?: boolean): void,
		setActiveCls(activeCls?: string): void,
		setBaseCls(baseCls?: string): void,
		setPressedCls(pressedCls?: string): void,
		setTitle(title?: string): void
	}

	declare export interface ITaskQueue {
		
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

	declare export interface ITitle {
		baseCls?: string,
		title?: string,
		getBaseCls(): string,
		getTitle(): string,
		setBaseCls(baseCls?: string): void,
		setTitle(title?: string): void
	}

	declare export interface ITitleBar {
		baseCls?: string,
		cls?: any,
		defaultType?: string,
		items?: any,
		minHeight?: string,
		title?: string,
		ui?: string,
		getBaseCls(): string,
		getCls(): string,
		getDefaultType(): string,
		getItems(): any,
		getTitle(): string,
		getUi(): string,
		initialize(): void,
		setBaseCls(baseCls?: string): void,
		setCls(cls?: string): void,
		setDefaultType(defaultType?: string): void,
		setItems(items?: any): void,
		setMinHeight(minHeight?: string): void,
		setTitle(title?: string): void,
		setUi(ui?: string): void
	}

	declare export interface IToolbar {
		baseCls?: string,
		defaultType?: string,
		docked?: string,
		layout?: any,
		minHeight?: string,
		title?: any,
		titleCls?: boolean,
		ui?: string,
		getBaseCls(): string,
		getDefaultType(): string,
		getDocked(): string,
		getLayout(): any,
		getTitle(): Ext.ITitle,
		getUi(): string,
		hideTitle(): void,
		setBaseCls(baseCls?: string): void,
		setDefaultType(defaultType?: string): void,
		setDocked(docked?: string): void,
		setLayout(layout?: any): void,
		setMinHeight(minHeight?: string): void,
		setTitle(title?: any): void,
		setUi(ui?: string): void,
		showTitle(): void
	}

	declare export interface IVersion {
		deprecate(packageName?: string, since?: string, closure?: any, scope?: any): void,
		equals(target?: any): boolean,
		getBuild(): number,
		getMajor(): number,
		getMinor(): number,
		getPatch(): number,
		getRelease(): number,
		getShortVersion(): string,
		getVersion(packageName?: string): Ext.IVersion,
		gt(target?: any): boolean,
		gtEq(target?: any): boolean,
		isGreaterThan(target?: any): boolean,
		isGreaterThanOrEqual(target?: any): boolean,
		isLessThan(target?: any): boolean,
		isLessThanOrEqual(target?: any): boolean,
		lt(target?: any): boolean,
		ltEq(target?: any): boolean,
		match(target?: any): boolean,
		setVersion(packageName?: string, version?: any): any,
		toArray(): number[],
		toNumber(value?: any): number
	}

	declare export interface IVideo {
		cls?: any,
		posterUrl?: string,
		getCls(): string,
		getPosterUrl(): string,
		getUrl(): string,
		initialize(): void,
		setCls(cls?: string): void,
		setPosterUrl(posterUrl?: string): void,
		setUrl(url?: any): void,
		updatePosterUrl(newUrl?: any): void,
		updateUrl(newUrl?: any): void
	}

	declare export interface IViewport {
		
	}

	declare export interface IXTemplate {
		applyOut(values?: any, out?: any[], parent?: any): any[]
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
		doIf(action?: string, actions?: any): void,
		doSwitch(action?: string, actions?: any): void,
		doTag(tag?: string): void,
		doText(text?: string): void,
		doTpl(): void
	}

	declare export function application(config?: any): void

	declare export function apply(object?: any, config?: any, defaults?: any): any

	declare export function applyIf(object?: any, config?: any): any

	declare export function bind(fn?: any, scope?: any, args?: any[], appendArgs?: any): any

	declare export function callback(callback?: any, scope?: any, args?: any[], delay?: number): void

	declare export function clean(array?: any[]): any[]

	declare export function clone(item?: any): any

	declare export function copyTo(dest?: any, source?: any, names?: any, usePrototypeKeys?: boolean): any

	declare export function create(name?: string, args?: any): any

	declare export function createByAlias(alias: string, ...args: any[]): any

	declare export function createInterceptor(origFn?: any, newFn?: any, scope?: any, returnValue?: any): any

	declare export function createWidget(): void

	declare export function decode(json?: string, safe?: boolean): any

	declare export function defer(fn?: any, millis?: number, scope?: any, args?: any[], appendArgs?: any): number

	declare export function define(className?: string, data?: any, createdFn?: any): Ext.IBase

	declare export function destroy(...args: any[]): void

	declare export function dispatch(): void

	declare export function each(iterable?: any, fn?: any, scope?: any, reverse?: boolean): boolean

	declare export function encode(o?: any): string

	declare export function exclude(excludes?: any[]): any

	declare export function extend(superclass?: any, overrides?: any): any

	declare export function factory(
		config?: any, classReference?: string, instance?: any, aliasNamespace?: any
	): void

	declare export function flatten(array?: any[]): any[]

	declare export function fly(element?: any, named?: string): Ext.dom.IElement

	declare export function get(element?: any): Ext.dom.IElement

	declare export function getBody(): Ext.IElement

	declare export function getClass(): void

	declare export function getClassName(object?: any): string

	declare export function getCmp(id?: string): Ext.IComponent

	declare export function getDisplayName(object?: any): string

	declare export function getDoc(): Ext.IElement

	declare export function getDom(el?: any): HTMLElement

	declare export function getHead(): Ext.IElement

	declare export function getOrientation(): void

	declare export function getStore(store?: any): Ext.data.IStore

	declare export function htmlDecode(value?: string): string

	declare export function htmlEncode(value?: string): string

	declare export function id(el?: any, prefix?: string): string

	declare export function isArray(target?: any): boolean

	declare export function isBoolean(value?: any): boolean

	declare export function isDate(object?: any): boolean

	declare export function isDefined(value?: any): boolean

	declare export function isElement(value?: any): boolean

	declare export function isEmpty(value?: any, allowEmptyString?: boolean): boolean

	declare export function isFunction(value?: any): boolean

	declare export function isIterable(value?: any): boolean

	declare export function isMSDate(value?: any): boolean

	declare export function isNumber(value?: any): boolean

	declare export function isNumeric(value?: any): boolean

	declare export function isObject(value?: any): boolean

	declare export function isPrimitive(value?: any): boolean

	declare export function isString(value?: any): boolean

	declare export function isTextNode(value?: any): boolean

	declare export function iterate(object?: any, fn?: any, scope?: any): void

	declare export function max(array?: any, comparisonFn?: any): any

	declare export function mean(array?: any[]): number

	declare export function merge(): void

	declare export function min(array?: any, comparisonFn?: any): any

	declare export function namespace(namespace1?: string, namespace2?: string, etc?: string): any

	declare export function ns(): void

	declare export function num(): void

	declare export function onReady(fn?: any, scope?: any, options?: boolean): void

	declare export function override(cls?: any, overrides?: any): void

	declare export function pass(fn?: any, args?: any[], scope?: any): any

	declare export function pluck(array?: any, propertyName?: string): any[]

	declare export function preg(): void

	declare export function query(selector?: string, root?: any): HTMLElement[]

	declare export function redirect(): void

	declare export function reg(): void

	declare export function regApplication(): void

	declare export function regController(): void

	declare export function regLayout(): void

	declare export function regModel(name?: string, config?: any): Ext.data.IModel

	declare export function regStore(id?: string, config?: any): void

	declare export function removeNode(node?: HTMLElement): void

	declare export function repaint(): void

	declare export function require(expressions?: any, fn?: any, scope?: any, excludes?: any): void

	declare export function select(selector?: any, composite?: boolean): Ext.dom.ICompositeElementLite

	declare export function setup(config?: any): void

	declare export function sum(array?: any[]): number

	declare export function syncRequire(expressions?: any, fn?: any, scope?: any, excludes?: any): void

	declare export function toArray(iterable?: any, start?: number, end?: number): any[]

	declare export function type(value?: any): string

	declare export function typeOf(value?: any): string

	declare export function unique(array?: any[]): any[]

	declare export function urlAppend(url?: string, string?: string): string

	declare export function urlDecode(): void

	declare export function urlEncode(): void

	declare export function valueFrom(value?: any, defaultValue?: any, allowBlank?: boolean): any

	declare export function widget(name?: string): any

	declare export class Ajax  {
		autoAbort: boolean;
		self: Ext.IClass;
		abort(request?: any): void;
		abortAll(): void;
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		destroy(): void;
		enableBubble(events?: any): void;
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any;
		fireEvent(eventName: string, ...args: any[]): boolean;
		getAsync(): boolean;
		getAutoAbort(): boolean;
		getBubbleEvents(): any;
		getDefaultHeaders(): any;
		getDefaultPostHeader(): string;
		getDefaultXhrHeader(): string;
		getDisableCaching(): boolean;
		getDisableCachingParam(): string;
		getExtraParams(): any;
		getId(): string;
		getInitialConfig(name?: string): any;
		getListeners(): any;
		getMethod(): string;
		getPassword(): string;
		getTimeout(): number;
		getUrl(): string;
		getUseDefaultHeader(): boolean;
		getUseDefaultXhrHeader(): boolean;
		getUsername(): string;
		hasListener(eventName?: string): boolean;
		initConfig(instanceConfig?: any): any;
		isLoading(request?: any): boolean;
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		parseStatus(status?: number, xhr?: any): any;
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable;
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void;
		request(options?: any): any;
		resumeEvents(discardQueuedEvents?: boolean): void;
		setAsync(async?: boolean): void;
		setAutoAbort(autoAbort?: boolean): void;
		setBubbleEvents(bubbleEvents?: any): void;
		setDefaultHeaders(defaultHeaders?: any): void;
		setDefaultPostHeader(defaultPostHeader?: string): void;
		setDefaultXhrHeader(defaultXhrHeader?: string): void;
		setDisableCaching(disableCaching?: boolean): void;
		setDisableCachingParam(disableCachingParam?: string): void;
		setExtraParams(extraParams?: any): void;
		setListeners(listeners?: any): void;
		setMethod(method?: string): void;
		setOptions(options?: any, scope?: any): any;
		setPassword(password?: string): void;
		setTimeout(timeout?: number): void;
		setUrl(url?: string): void;
		setUseDefaultHeader(useDefaultHeader?: boolean): void;
		setUseDefaultXhrHeader(useDefaultXhrHeader?: boolean): void;
		setUsername(username?: string): void;
		statics(): Ext.IClass;
		suspendEvents(): void;
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		upload(form?: any, url?: string, params?: string, options?: any): void
	}

	declare export class Anim  {
		after: any;
		autoClear: boolean;
		before: any;
		delay: number;
		direction: string;
		disableAnimations: boolean;
		duration: number;
		easing: string;
		from: any;
		out: boolean;
		reverse: boolean;
		scope: any;
		to: any;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(el?: any, runConfig?: any): any;
		run(el?: any, anim?: string, config?: any): void;
		statics(): Ext.IClass
	}

	declare export class AnimationQueue  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		start(fn?: any, scope?: any, args?: any): void;
		statics(): Ext.IClass;
		stop(fn?: any, scope?: any, args?: any): void
	}

	declare export class Anims  {
		cube: any;
		fade: any;
		flip: any;
		pop: any;
		slide: any;
		wipe: any
	}

	declare export class Array  {
		clean(array?: any[]): any[];
		clone(array?: any[]): any[];
		contains(array?: any[], item?: any): boolean;
		difference(arrayA?: any[], arrayB?: any[]): any[];
		each(iterable?: any, fn?: any, scope?: any, reverse?: boolean): boolean;
		erase(array?: any[], index?: number, removeCount?: number): any[];
		every(array?: any[], fn?: any, scope?: any): boolean;
		filter(array?: any[], fn?: any, scope?: any): any[];
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
		remove(array?: any[], item?: any): any[];
		replace(array?: any[], index?: number, removeCount?: number, insert?: any[]): any[];
		slice(array?: any[], begin?: number, end?: number): any[];
		some(array?: any[], fn?: any, scope?: any): boolean;
		sort(array?: any[], sortFn?: any): any[];
		splice(array?: any[], index?: number, removeCount?: number): any[];
		sum(array?: any[]): number;
		toArray(iterable?: any, start?: number, end?: number): any[];
		union(array1?: any[], array2?: any[], etc?: any[]): any[];
		unique(array?: any[]): any[]
	}

	declare export class Base  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		getName(): any;
		override(members?: any): Ext.IBase
	}

	declare export class Browser  {
		engineName: string;
		engineVersion: Ext.IVersion;
		isSecure: boolean;
		isStrict: boolean;
		name: string;
		self: Ext.IClass;
		userAgent: string;
		version: Ext.IVersion;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		is(value?: string): boolean;
		statics(): Ext.IClass
	}

	declare export class ClassManager  {
		addNameAliasMappings(aliases?: any): Ext.IClassManager;
		addNameAlternateMappings(alternates?: any): Ext.IClassManager;
		get(name?: string): Ext.IClass;
		getAliasesByName(name?: string): any[];
		getByAlias(alias?: string): Ext.IClass;
		getClass(object?: any): Ext.IClass;
		getName(object?: any): string;
		getNameByAlias(alias?: string): string;
		getNameByAlternate(alternate?: string): string;
		getNamesByExpression(expression?: string): any[];
		instantiate(name?: string, args?: any): any;
		instantiateByAlias(alias: string, ...args: any[]): any;
		isCreated(className?: string): boolean;
		set(name?: string, value?: any): Ext.IClassManager;
		setAlias(cls?: any, alias?: string): Ext.IClassManager;
		setNamespace(name?: string, value?: any): void
	}

	declare export class ComponentManager  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(component?: any, defaultType?: any): Ext.IComponent;
		destroy(): void;
		get(id?: string): any;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		isRegistered(component?: string): boolean;
		register(component?: any): void;
		statics(): Ext.IClass;
		unregister(component?: any): void
	}

	declare export class ComponentMgr  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(component?: any, defaultType?: any): Ext.IComponent;
		destroy(): void;
		get(id?: string): any;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		isRegistered(component?: string): boolean;
		register(component?: any): void;
		statics(): Ext.IClass;
		unregister(component?: any): void
	}

	declare export class ComponentQuery  {
		is(component?: Ext.IComponent, selector?: string): boolean;
		query(selector?: string, root?: Ext.IContainer): Ext.IComponent[]
	}

	declare export class ModelMgr  {
		all: Ext.util.IHashMap;
		associationStack: any;
		defaultProxyType: any;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(data?: any, name?: string, id?: number): any;
		destroy(): void;
		each(fn?: any, scope?: any): void;
		get(id?: string): any;
		getCount(): number;
		getInitialConfig(name?: string): any;
		getModel(id?: any): Ext.data.IModel;
		initConfig(instanceConfig?: any): any;
		isRegistered(type?: string): boolean;
		onAvailable(id?: string, fn?: any, scope?: any): void;
		register(item?: any): void;
		registerType(name?: any, config?: any): any;
		statics(): Ext.IClass;
		unregister(item?: any): void
	}

	declare export class ModelManager  {
		all: Ext.util.IHashMap;
		associationStack: any;
		defaultProxyType: any;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(data?: any, name?: string, id?: number): any;
		destroy(): void;
		each(fn?: any, scope?: any): void;
		get(id?: string): any;
		getCount(): number;
		getInitialConfig(name?: string): any;
		getModel(id?: any): Ext.data.IModel;
		initConfig(instanceConfig?: any): any;
		isRegistered(type?: string): boolean;
		onAvailable(id?: string, fn?: any, scope?: any): void;
		register(item?: any): void;
		registerType(name?: any, config?: any): any;
		statics(): Ext.IClass;
		unregister(item?: any): void
	}

	declare export class StoreMgr  {
		all: any[];
		currentSortFn: any;
		dirtyFilterFn: boolean;
		dirtySortFn: boolean;
		filtered: boolean;
		indices: any;
		items: any[];
		keys: any[];
		length: number;
		map: any;
		self: Ext.IClass;
		sorted: boolean;
		add(key?: string, item?: any): any;
		addAll(addItems?: any): void;
		addFilter(filter?: any): void;
		addFilters(filters?: any): any;
		addSorter(sorter?: any, defaultDirection?: string): void;
		addSorters(sorters?: any[], defaultDirection?: string): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(): void;
		clone(): Ext.util.IMixedCollection;
		contains(item?: any): boolean;
		containsKey(key?: string): boolean;
		destroy(): void;
		each(fn?: any, scope?: any): void;
		eachKey(fn?: any, scope?: any): void;
		filter(property?: any, value?: any, anyMatch?: any, caseSensitive?: any): any[];
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection;
		findBy(fn?: any, scope?: any): any;
		findIndexBy(fn?: any, scope?: any, start?: number): number;
		findInsertionIndex(items?: any[], item?: any): number;
		first(): any;
		get(key?: any): any;
		getAt(index?: number): any;
		getAutoFilter(): boolean;
		getAutoSort(): boolean;
		getByKey(key?: any): any;
		getCount(): number;
		getDefaultSortDirection(): string;
		getFilterFn(): any;
		getFilterRoot(): string;
		getFilters(): any[];
		getInitialConfig(name?: string): any;
		getKey(o?: any): any;
		getRange(start?: number, end?: number): any[];
		getSortFn(): any;
		getSortRoot(): string;
		getSorters(): any[];
		indexOf(item?: any): number;
		indexOfKey(key?: string): number;
		initConfig(instanceConfig?: any): any;
		insert(index?: number, key?: string, item?: any): any;
		insertFilter(index?: number, filter?: any): any;
		insertFilters(index?: number, filters?: any[]): any[];
		insertSorter(index?: number, sorter?: any, defaultDirection?: string): void;
		insertSorters(): Ext.util.ICollection;
		last(): any;
		lookup(store?: any): Ext.data.IStore;
		register(stores: Ext.data.IStore): void;
		remove(item?: any): any;
		removeAll(items?: any[]): Ext.util.IMixedCollection;
		removeAt(index?: number): any;
		removeAtKey(key?: string): any;
		removeFilters(filters?: any): Ext.util.ICollection;
		removeSorter(sorter?: any): void;
		removeSorters(sorters?: any): Ext.util.ICollection;
		replace(oldKey?: string, item?: any): any;
		setAutoFilter(autoFilter?: boolean): void;
		setAutoSort(autoSort?: boolean): void;
		setDefaultSortDirection(defaultSortDirection?: string): void;
		setFilterRoot(filterRoot?: string): void;
		setFilters(filters?: any[]): void;
		setSortRoot(sortRoot?: string): void;
		setSorters(sorters?: any[]): void;
		sort(sorters?: any, defaultDirection?: any): any[];
		statics(): Ext.IClass;
		unregister(stores?: any): void
	}

	declare export class StoreManager  {
		all: any[];
		currentSortFn: any;
		dirtyFilterFn: boolean;
		dirtySortFn: boolean;
		filtered: boolean;
		indices: any;
		items: any[];
		keys: any[];
		length: number;
		map: any;
		self: Ext.IClass;
		sorted: boolean;
		add(key?: string, item?: any): any;
		addAll(addItems?: any): void;
		addFilter(filter?: any): void;
		addFilters(filters?: any): any;
		addSorter(sorter?: any, defaultDirection?: string): void;
		addSorters(sorters?: any[], defaultDirection?: string): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(): void;
		clone(): Ext.util.IMixedCollection;
		contains(item?: any): boolean;
		containsKey(key?: string): boolean;
		destroy(): void;
		each(fn?: any, scope?: any): void;
		eachKey(fn?: any, scope?: any): void;
		filter(property?: any, value?: any, anyMatch?: any, caseSensitive?: any): any[];
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection;
		findBy(fn?: any, scope?: any): any;
		findIndexBy(fn?: any, scope?: any, start?: number): number;
		findInsertionIndex(items?: any[], item?: any): number;
		first(): any;
		get(key?: any): any;
		getAt(index?: number): any;
		getAutoFilter(): boolean;
		getAutoSort(): boolean;
		getByKey(key?: any): any;
		getCount(): number;
		getDefaultSortDirection(): string;
		getFilterFn(): any;
		getFilterRoot(): string;
		getFilters(): any[];
		getInitialConfig(name?: string): any;
		getKey(o?: any): any;
		getRange(start?: number, end?: number): any[];
		getSortFn(): any;
		getSortRoot(): string;
		getSorters(): any[];
		indexOf(item?: any): number;
		indexOfKey(key?: string): number;
		initConfig(instanceConfig?: any): any;
		insert(index?: number, key?: string, item?: any): any;
		insertFilter(index?: number, filter?: any): any;
		insertFilters(index?: number, filters?: any[]): any[];
		insertSorter(index?: number, sorter?: any, defaultDirection?: string): void;
		insertSorters(): Ext.util.ICollection;
		last(): any;
		lookup(store?: any): Ext.data.IStore;
		register(stores: Ext.data.IStore): void;
		remove(item?: any): any;
		removeAll(items?: any[]): Ext.util.IMixedCollection;
		removeAt(index?: number): any;
		removeAtKey(key?: string): any;
		removeFilters(filters?: any): Ext.util.ICollection;
		removeSorter(sorter?: any): void;
		removeSorters(sorters?: any): Ext.util.ICollection;
		replace(oldKey?: string, item?: any): any;
		setAutoFilter(autoFilter?: boolean): void;
		setAutoSort(autoSort?: boolean): void;
		setDefaultSortDirection(defaultSortDirection?: string): void;
		setFilterRoot(filterRoot?: string): void;
		setFilters(filters?: any[]): void;
		setSortRoot(sortRoot?: string): void;
		setSorters(sorters?: any[]): void;
		sort(sorters?: any, defaultDirection?: any): any[];
		statics(): Ext.IClass;
		unregister(stores?: any): void
	}

	declare export class Date  {
		DAY: string;
		HOUR: string;
		MILLI: string;
		MINUTE: string;
		MONTH: string;
		SECOND: string;
		YEAR: string;
		dayNames: any[];
		defaultFormat: string;
		defaults: any;
		formatCodes: any;
		formatFunctions: any;
		monthNames: any[];
		monthNumbers: any;
		parseFunctions: any;
		useStrict: boolean;
		add(date?: any, interval?: string, value?: number): any;
		align(date?: any, unit?: string): any;
		between(date?: any, start?: any, end?: any): boolean;
		clearTime(date?: any, clone?: boolean): any;
		clone(date?: any): any;
		diff(min?: any, max?: any, unit?: string): number;
		format(date?: any, format?: string): string;
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
		isLeapYear(date?: any): boolean;
		isValid(
		year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number
	): boolean;
		now(): number;
		parse(input?: string, format?: string, strict?: boolean): any
	}

	declare export class DateExtras  {
		DAY: string;
		HOUR: string;
		MILLI: string;
		MINUTE: string;
		MONTH: string;
		SECOND: string;
		YEAR: string;
		dayNames: any[];
		defaultFormat: string;
		defaults: any;
		formatCodes: any;
		formatFunctions: any;
		monthNames: any[];
		monthNumbers: any;
		parseFunctions: any;
		useStrict: boolean;
		add(date?: any, interval?: string, value?: number): any;
		align(date?: any, unit?: string): any;
		between(date?: any, start?: any, end?: any): boolean;
		clearTime(date?: any, clone?: boolean): any;
		clone(date?: any): any;
		diff(min?: any, max?: any, unit?: string): number;
		format(date?: any, format?: string): string;
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
		isLeapYear(date?: any): boolean;
		isValid(
		year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number
	): boolean;
		now(): number;
		parse(input?: string, format?: string, strict?: boolean): any
	}

	declare export class Direct  {
		self: Ext.IClass;
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		addProvider(provider?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		destroy(): void;
		enableBubble(events?: any): void;
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any;
		fireEvent(eventName: string, ...args: any[]): boolean;
		getBubbleEvents(): any;
		getId(): string;
		getInitialConfig(name?: string): any;
		getListeners(): any;
		getProvider(id?: any): any;
		hasListener(eventName?: string): boolean;
		initConfig(instanceConfig?: any): any;
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		parseMethod(fn?: any): any;
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable;
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void;
		removeProvider(provider?: any): any;
		resumeEvents(discardQueuedEvents?: boolean): void;
		setBubbleEvents(bubbleEvents?: any): void;
		setListeners(listeners?: any): void;
		statics(): Ext.IClass;
		suspendEvents(): void;
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export class Element  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		createAlias(alias?: any, origin?: any): void;
		fly(element?: any, named?: string): Ext.dom.IElement;
		fromPoint(x?: number, y?: number): string;
		get(element?: any): Ext.dom.IElement;
		getDocumentHeight(): number;
		getDocumentWidth(): number;
		getName(): string;
		getOrientation(): string;
		getViewSize(): any;
		getViewportHeight(): number;
		getViewportWidth(): number;
		normalize(prop?: string): string;
		override(members?: any): Ext.IBase;
		parseBox(box?: any): any;
		parseStyles(styles?: string): any;
		select(selector?: any, composite?: boolean, root?: any): Ext.dom.ICompositeElementLite;
		unitizeBox(box?: any, units?: string): string
	}

	declare export class DomQuery  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		is(el?: any, selector?: string): boolean;
		select(selector?: string, root?: any): HTMLElement[];
		selectNode(selector?: string, root?: any): HTMLElement;
		statics(): Ext.IClass
	}

	declare export class EventManager  {
		addListener(el?: any, eventName?: string, handler?: any, scope?: any, options?: any): void;
		on(el?: any, eventName?: string, handler?: any, scope?: any, options?: any): void;
		onDocumentReady(): void;
		onWindowResize(fn?: any, scope?: any, options?: boolean): void;
		removeAll(el?: any): void;
		removeListener(el?: any, eventName?: string, fn?: any, scope?: any): void;
		un(el?: any, eventName?: string, fn?: any, scope?: any): void
	}

	declare export class Feature  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		has(value?: string): boolean;
		initConfig(instanceConfig?: any): any;
		statics(): Ext.IClass
	}

	declare export class Function  {
		alias(object?: any, methodName?: string): any;
		bind(fn?: any, scope?: any, args?: any[], appendArgs?: any): any;
		clone(method?: any): any;
		createBuffered(fn?: any, buffer?: number, scope?: any, args?: any[]): any;
		createDelayed(fn?: any, delay?: number, scope?: any, args?: any[], appendArgs?: any): any;
		createDelegate(fn?: any, scope?: any, args?: any[], appendArgs?: any): any;
		createInterceptor(origFn?: any, newFn?: any, scope?: any, returnValue?: any): any;
		createSequence(originalFn?: any, newFn?: any, scope?: any): any;
		createThrottled(fn?: any, interval?: number, scope?: any): any;
		defer(fn?: any, millis?: number, scope?: any, args?: any[], appendArgs?: any): number;
		flexSetter(fn?: any): any;
		pass(fn?: any, args?: any[], scope?: any): any
	}

	declare export class JSON  {
		decode(json?: string, safe?: boolean): any;
		encode(o?: any): string;
		encodeDate(d?: any): string
	}

	declare export class Loader  {
		disableCaching: boolean;
		disableCachingParam: string;
		enabled: boolean;
		paths: any;
		history: any[];
		addClassPathMappings(paths?: Object): Ext.ILoader;
		exclude(excludes?: any[]): any;
		getConfig(name?: string): any;
		getPath(className?: string): string;
		onReady(fn?: any, scope?: any, withDomReady?: boolean): void;
		require(expressions?: any, fn?: any, scope?: any, excludes?: any): void;
		setConfig(name?: any, value?: any): Ext.ILoader;
		setPath(name?: any, path?: string): Ext.ILoader;
		syncRequire(expressions?: any, fn?: any, scope?: any, excludes?: any): void
	}

	declare export class Logger  {
		deprecate(): void;
		error(): void;
		info(): void;
		log(message?: string, priority?: number): Ext.ILogger;
		verbose(): void;
		warn(): void
	}

	declare export class Msg  {
		items: Ext.util.IMixedCollection;
		self: Ext.IClass;
		add(newItems?: any): Ext.IComponent;
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addAll(items?: any[]): any[];
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addCls(cls?: string, prefix?: string, suffix?: string): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		alert(title?: string, message?: string, fn?: any, scope?: any): Ext.IMessageBox;
		animateActiveItem(activeItem?: any, animation?: any): void;
		applyMasked(masked?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		child(selector?: string): Ext.IComponent;
		clearListeners(): void;
		confirm(title?: string, message?: string, fn?: any, scope?: any): Ext.IMessageBox;
		destroy(): void;
		disable(): void;
		down(selector?: string): Ext.IComponent;
		enable(): void;
		enableBubble(events?: any): void;
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any;
		fireEvent(eventName: string, ...args: any[]): boolean;
		getActiveItem(): any;
		getAt(index?: number): Ext.IComponent;
		getAutoDestroy(): boolean;
		getBaseCls(): string;
		getBodyBorder(): any;
		getBodyMargin(): any;
		getBodyPadding(): any;
		getBorder(): any;
		getBottom(): any;
		getBubbleEvents(): any;
		getButtons(): any;
		getCentered(): boolean;
		getCls(): any;
		getComponent(component?: any): Ext.IComponent;
		getContentEl(): any;
		getControl(): any;
		getData(): any;
		getDefaultTextHeight(): number;
		getDefaultType(): string;
		getDefaults(): any;
		getDisabled(): boolean;
		getDisabledCls(): string;
		getDocked(): string;
		getDockedComponent(component?: any): any;
		getDockedItems(): any[];
		getEl(): Ext.dom.IElement;
		getEnter(): string;
		getEnterAnimation(): any;
		getExit(): string;
		getExitAnimation(): any;
		getFlex(): number;
		getFloatingCls(): string;
		getHeight(): any;
		getHidden(): boolean;
		getHiddenCls(): string;
		getHideAnimation(): any;
		getHideOnMaskTap(): boolean;
		getHtml(): any;
		getId(): string;
		getInitialConfig(name?: string): any;
		getInnerItems(): any[];
		getItemId(): string;
		getItems(): any;
		getLayout(): any;
		getLeft(): any;
		getListeners(): any;
		getMargin(): any;
		getMasked(): any;
		getMaxHeight(): any;
		getMaxWidth(): any;
		getMinHeight(): any;
		getMinWidth(): any;
		getPadding(): any;
		getParent(): Ext.IComponent;
		getPlugins(): any;
		getPrompt(): any;
		getRecord(): Ext.data.IModel;
		getRenderTo(): Ext.IElement;
		getRight(): any;
		getScrollable(): Ext.scroll.IView;
		getShowAnimation(): any;
		getSize(): any;
		getStretchX(): boolean;
		getStretchY(): boolean;
		getStyle(): any;
		getStyleHtmlCls(): string;
		getStyleHtmlContent(): boolean;
		getTitle(): string;
		getTop(): any;
		getTpl(): any;
		getTplWriteMode(): string;
		getUi(): string;
		getWidth(): any;
		getXTypes(): string;
		getZIndex(): number;
		hasListener(eventName?: string): boolean;
		hasParent(): boolean;
		hide(animation?: any): Ext.IComponent;
		initConfig(instanceConfig?: any): any;
		initialize(): void;
		insert(index?: number, item?: any): void;
		isDisabled(): boolean;
		isHidden(): boolean;
		isXType(xtype?: string, shallow?: boolean): boolean;
		mask(mask?: any): void;
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		prompt(
		title?: string, message?: string, fn?: any, scope?: any, multiLine?: any, value?: string, prompt?: any
	): Ext.IMessageBox;
		query(selector?: string): any[];
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable;
		remove(item?: any, destroy?: boolean): Ext.IComponent;
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeAll(destroy?: boolean, everything?: boolean): Ext.IComponent;
		removeAt(index?: number): Ext.IContainer;
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeCls(cls?: string, prefix?: string, suffix?: string): void;
		removeDocked(item?: any, destroy?: boolean): Ext.IComponent;
		removeInnerAt(index?: number): Ext.IContainer;
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void;
		replaceCls(oldCls?: string, newCls?: string, prefix?: string, suffix?: string): void;
		resetFloating(): void;
		resumeEvents(discardQueuedEvents?: boolean): void;
		setActiveItem(activeItem?: any): void;
		setAutoDestroy(autoDestroy?: boolean): void;
		setBaseCls(baseCls?: string): void;
		setBodyBorder(bodyBorder?: any): void;
		setBodyMargin(bodyMargin?: any): void;
		setBodyPadding(bodyPadding?: any): void;
		setBorder(border?: any): void;
		setBottom(bottom?: any): void;
		setBubbleEvents(bubbleEvents?: any): void;
		setButtons(buttons?: any): void;
		setCentered(centered?: boolean): void;
		setCls(cls?: any): void;
		setContentEl(contentEl?: any): void;
		setControl(control?: any): void;
		setData(data?: any): void;
		setDefaultTextHeight(defaultTextHeight?: number): void;
		setDefaultType(defaultType?: string): void;
		setDefaults(defaults?: any): void;
		setDisabled(disabled?: boolean): void;
		setDisabledCls(disabledCls?: string): void;
		setDocked(docked?: string): void;
		setDraggable(draggable?: any): void;
		setEnter(enter?: string): void;
		setEnterAnimation(enterAnimation?: any): void;
		setExit(exit?: string): void;
		setExitAnimation(exitAnimation?: any): void;
		setFlex(flex?: number): void;
		setFloating(floating?: boolean): void;
		setFloatingCls(floatingCls?: string): void;
		setHeight(height?: any): void;
		setHidden(hidden?: boolean): void;
		setHiddenCls(hiddenCls?: string): void;
		setHideAnimation(hideAnimation?: any): void;
		setHideOnMaskTap(hideOnMaskTap?: boolean): void;
		setHtml(html?: any): void;
		setIcon(iconCls?: string): Ext.IMessageBox;
		setIconCls(iconCls?: string): void;
		setItemId(itemId?: string): void;
		setItems(items?: any): void;
		setLayout(layout?: any): void;
		setLeft(left?: any): void;
		setListeners(listeners?: any): void;
		setMargin(margin?: any): void;
		setMasked(masked?: any): void;
		setMaxHeight(maxHeight?: any): void;
		setMaxWidth(maxWidth?: any): void;
		setMessage(message?: string): void;
		setMinHeight(minHeight?: any): void;
		setMinWidth(minWidth?: any): void;
		setPadding(padding?: any): void;
		setPlugins(plugins?: any): void;
		setPrompt(prompt?: any): void;
		setRecord(record?: Ext.data.IModel): void;
		setRenderTo(renderTo?: Ext.IElement): void;
		setRight(right?: any): void;
		setScrollable(scrollable?: any): void;
		setShowAnimation(showAnimation?: any): void;
		setSize(width?: number, height?: number): void;
		setStretchX(stretchX?: boolean): void;
		setStretchY(stretchY?: boolean): void;
		setStyle(style?: any): void;
		setStyleHtmlCls(styleHtmlCls?: string): void;
		setStyleHtmlContent(styleHtmlContent?: boolean): void;
		setTitle(title?: string): void;
		setTop(top?: any): void;
		setTpl(tpl?: any): void;
		setTplWriteMode(tplWriteMode?: string): void;
		setUi(ui?: string): void;
		setWidth(width?: any): void;
		setZIndex(zIndex?: number): void;
		show(config?: any): Ext.IMessageBox;
		showBy(component?: Ext.IComponent, alignment?: string): void;
		statics(): Ext.IClass;
		suspendEvents(): void;
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unmask(): void;
		up(selector?: string): Ext.IContainer;
		update(): void;
		updateStyleHtmlCls(newHtmlCls?: any, oldHtmlCls?: any): void;
		updateText(message?: string): Ext.IMessageBox
	}

	declare export class Number  {
		constrain(number?: number, min?: number, max?: number): number;
		from(value?: any, defaultValue?: number): number;
		snap(
		value?: number, increment?: number, minValue?: number, maxValue?: number
	): number;
		toFixed(value?: number, precision?: number): void
	}

	declare export class Object  {
		chain(object?: any): void;
		each(object?: any, fn?: any, scope?: any): void;
		fromQueryString(queryString?: string, recursive?: boolean): any;
		getKey(object?: any, value?: any): void;
		getKeys(object?: any): string[];
		getSize(object?: any): number;
		getValues(object?: any): any[];
		merge(source: any, ...objs: any[]): any;
		toQueryObjects(name?: string, value?: any, recursive?: boolean): any[];
		toQueryString(object?: any, recursive?: boolean): string
	}

	declare export class Os  {
		deviceType: string;
		name: string;
		self: Ext.IClass;
		version: Ext.IVersion;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		is(value?: string): boolean;
		statics(): Ext.IClass
	}

	declare export class Router  {
		setAppInstance(app?: any): void
	}

	declare export class String  {
		capitalize(string?: string): string;
		ellipsis(value?: string, length?: number, word?: boolean): string;
		escape(string?: string): string;
		escapeRegex(string?: string): string;
		format(string: string, ...values: any[]): string;
		htmlDecode(value?: string): string;
		htmlEncode(value?: string): string;
		leftPad(string?: string, size?: number, character?: string): string;
		repeat(pattern?: string, count?: number, sep?: string): void;
		toggle(string?: string, value?: string, other?: string): string;
		trim(string?: string): string;
		urlAppend(url?: string, string?: string): string
	}

	declare export class TaskQueue  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		statics(): Ext.IClass
	}

	declare export class Template  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		from(el?: any, config?: any): Ext.ITemplate;
		getName(): string;
		override(members?: any): Ext.IBase
	}

	declare export class Version  {
		compare(current?: string, target?: string): number;
		getComponentValue(value?: any): any
	}

	declare export class Viewport  {
		isReady: boolean;
		items: Ext.util.IMixedCollection;
		self: Ext.IClass;
		add(newItems?: any): Ext.IComponent;
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addAll(items?: any[]): any[];
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addCls(cls?: string, prefix?: string, suffix?: string): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		animateActiveItem(activeItem?: any, animation?: any): void;
		applyMasked(masked?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		child(selector?: string): Ext.IComponent;
		clearListeners(): void;
		destroy(): void;
		disable(): void;
		down(selector?: string): Ext.IComponent;
		enable(): void;
		enableBubble(events?: any): void;
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any;
		fireEvent(eventName: string, ...args: any[]): boolean;
		getActiveItem(): any;
		getAt(index?: number): Ext.IComponent;
		getAutoDestroy(): boolean;
		getAutoMaximize(): boolean;
		getBaseCls(): string;
		getBorder(): any;
		getBottom(): any;
		getBubbleEvents(): any;
		getCentered(): boolean;
		getCls(): any;
		getComponent(component?: any): Ext.IComponent;
		getContentEl(): any;
		getControl(): any;
		getData(): any;
		getDefaultType(): string;
		getDefaults(): any;
		getDisabled(): boolean;
		getDisabledCls(): string;
		getDocked(): string;
		getDockedComponent(component?: any): any;
		getDockedItems(): any[];
		getEl(): Ext.dom.IElement;
		getEnterAnimation(): any;
		getExitAnimation(): any;
		getFlex(): number;
		getFloatingCls(): string;
		getHidden(): boolean;
		getHiddenCls(): string;
		getHideAnimation(): any;
		getHideOnMaskTap(): boolean;
		getHtml(): any;
		getId(): string;
		getInitialConfig(name?: string): any;
		getInnerItems(): any[];
		getItemId(): string;
		getItems(): any;
		getLayout(): any;
		getLeft(): any;
		getListeners(): any;
		getMargin(): any;
		getMasked(): any;
		getMaxHeight(): any;
		getMaxWidth(): any;
		getMinHeight(): any;
		getMinWidth(): any;
		getModal(): boolean;
		getOrientation(): string;
		getPadding(): any;
		getParent(): Ext.IComponent;
		getPlugins(): any;
		getPreventPanning(): boolean;
		getPreventZooming(): boolean;
		getRecord(): Ext.data.IModel;
		getRenderTo(): Ext.IElement;
		getRight(): any;
		getScrollable(): Ext.scroll.IView;
		getShowAnimation(): any;
		getSize(): any;
		getStyle(): any;
		getStyleHtmlCls(): string;
		getStyleHtmlContent(): boolean;
		getTop(): any;
		getTpl(): any;
		getTplWriteMode(): string;
		getUi(): string;
		getUseBodyElement(): boolean;
		getWindowHeight(): number;
		getWindowWidth(): number;
		getXTypes(): string;
		getZIndex(): number;
		hasListener(eventName?: string): boolean;
		hasParent(): boolean;
		hide(animation?: any): Ext.IComponent;
		initConfig(instanceConfig?: any): any;
		initialize(): void;
		insert(index?: number, item?: any): void;
		isDisabled(): boolean;
		isHidden(): boolean;
		isXType(xtype?: string, shallow?: boolean): boolean;
		mask(mask?: any): void;
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		query(selector?: string): any[];
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable;
		remove(item?: any, destroy?: boolean): Ext.IComponent;
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeAll(destroy?: boolean, everything?: boolean): Ext.IComponent;
		removeAt(index?: number): Ext.IContainer;
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeCls(cls?: string, prefix?: string, suffix?: string): void;
		removeDocked(item?: any, destroy?: boolean): Ext.IComponent;
		removeInnerAt(index?: number): Ext.IContainer;
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void;
		replaceCls(oldCls?: string, newCls?: string, prefix?: string, suffix?: string): void;
		resetFloating(): void;
		resumeEvents(discardQueuedEvents?: boolean): void;
		setActiveItem(activeItem?: any): void;
		setAutoDestroy(autoDestroy?: boolean): void;
		setAutoMaximize(autoMaximize?: boolean): void;
		setBaseCls(baseCls?: string): void;
		setBorder(border?: any): void;
		setBottom(bottom?: any): void;
		setBubbleEvents(bubbleEvents?: any): void;
		setCentered(centered?: boolean): void;
		setCls(cls?: any): void;
		setContentEl(contentEl?: any): void;
		setControl(control?: any): void;
		setData(data?: any): void;
		setDefaultType(defaultType?: string): void;
		setDefaults(defaults?: any): void;
		setDisabled(disabled?: boolean): void;
		setDisabledCls(disabledCls?: string): void;
		setDocked(docked?: string): void;
		setDraggable(draggable?: any): void;
		setEnterAnimation(enterAnimation?: any): void;
		setExitAnimation(exitAnimation?: any): void;
		setFlex(flex?: number): void;
		setFloating(floating?: boolean): void;
		setFloatingCls(floatingCls?: string): void;
		setHidden(hidden?: boolean): void;
		setHiddenCls(hiddenCls?: string): void;
		setHideAnimation(hideAnimation?: any): void;
		setHideOnMaskTap(hideOnMaskTap?: boolean): void;
		setHtml(html?: any): void;
		setItemId(itemId?: string): void;
		setItems(items?: any): void;
		setLayout(layout?: any): void;
		setLeft(left?: any): void;
		setListeners(listeners?: any): void;
		setMargin(margin?: any): void;
		setMasked(masked?: any): void;
		setMaxHeight(maxHeight?: any): void;
		setMaxWidth(maxWidth?: any): void;
		setMinHeight(minHeight?: any): void;
		setMinWidth(minWidth?: any): void;
		setModal(modal?: boolean): void;
		setPadding(padding?: any): void;
		setPlugins(plugins?: any): void;
		setPreventPanning(preventPanning?: boolean): void;
		setPreventZooming(preventZooming?: boolean): void;
		setRecord(record?: Ext.data.IModel): void;
		setRenderTo(renderTo?: Ext.IElement): void;
		setRight(right?: any): void;
		setScrollable(scrollable?: any): void;
		setShowAnimation(showAnimation?: any): void;
		setSize(width?: number, height?: number): void;
		setStyle(style?: any): void;
		setStyleHtmlCls(styleHtmlCls?: string): void;
		setStyleHtmlContent(styleHtmlContent?: boolean): void;
		setTop(top?: any): void;
		setTpl(tpl?: any): void;
		setTplWriteMode(tplWriteMode?: string): void;
		setUi(ui?: string): void;
		setUseBodyElement(useBodyElement?: boolean): void;
		setZIndex(zIndex?: number): void;
		show(animation?: any): Ext.IComponent;
		showBy(component?: Ext.IComponent, alignment?: string): void;
		statics(): Ext.IClass;
		suspendEvents(): void;
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unmask(): void;
		up(selector?: string): Ext.IContainer;
		update(): void;
		updateStyleHtmlCls(newHtmlCls?: any, oldHtmlCls?: any): void
	}

	declare export class XTemplate  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		from(el?: any, config?: any): Ext.ITemplate;
		getName(): string;
		getTpl(instance?: any, name?: string): Ext.IXTemplate;
		override(members?: any): Ext.IBase
	}

	
}

declare module 'app' {
		declare export interface IAction {
		action?: string,
		application?: Ext.app.IApplication,
		args?: any[],
		beforeFilters?: any[],
		controller?: Ext.app.IController,
		scope?: any,
		url?: string,
		execute(): void,
		getAction(): string,
		getApplication(): Ext.app.IApplication,
		getArgs(): any[],
		getBeforeFilters(): any[],
		getController(): Ext.app.IController,
		getData(): any,
		getScope(): any,
		getTitle(): any,
		getUrl(): string,
		resume(): void,
		setAction(action?: string): void,
		setApplication(application?: Ext.app.IApplication): void,
		setArgs(args?: any[]): void,
		setBeforeFilters(beforeFilters?: any[]): void,
		setController(controller?: Ext.app.IController): void,
		setData(data?: any): void,
		setScope(scope?: any): void,
		setTitle(title?: any): void,
		setUrl(url?: string): void
	}

	declare export interface IApplication {
		appFolder?: string,
		controllers?: any[],
		currentProfile?: Ext.app.IProfile,
		glossOnIcon?: boolean,
		history?: Ext.app.IHistory,
		icon?: any,
		isIconPrecomposed?: boolean,
		launch?: any,
		name?: string,
		phoneIcon?: string,
		phoneStartupScreen?: string,
		profiles?: any[],
		router?: Ext.app.IRouter,
		startupImage?: any,
		statusBarStyle?: string,
		tabletIcon?: string,
		tabletStartupScreen?: string,
		dispatch(action?: Ext.app.IAction, addToHistory?: boolean): void,
		getAppFolder(): string,
		getController(name?: string, profileName?: string): Ext.app.IController,
		getControllers(): any[],
		getCurrentProfile(): Ext.app.IProfile,
		getHistory(): Ext.app.IHistory,
		getLaunch(): any,
		getName(): string,
		getProfiles(): any[],
		getRouter(): Ext.app.IRouter,
		redirectTo(url?: any): void,
		setAppFolder(appFolder?: string): void,
		setControllers(controllers?: any[]): void,
		setCurrentProfile(currentProfile?: Ext.app.IProfile): void,
		setHistory(history?: Ext.app.IHistory): void,
		setLaunch(launch?: any): void,
		setName(name?: string): void,
		setProfiles(profiles?: any[]): void,
		setRouter(router?: Ext.app.IRouter): void
	}

	declare export interface IController {
		application?: Ext.app.IApplication,
		before?: any,
		control?: any,
		init?: any,
		launch?: any,
		models?: string[],
		refs?: any,
		routes?: any,
		stores?: string[],
		views?: any[],
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getApplication(): Ext.app.IApplication,
		getBefore(): any,
		getBubbleEvents(): any,
		getControl(): any,
		getController(controllerName?: any, profile?: any): any,
		getListeners(): any,
		getModel(modelName?: any): any,
		getModels(): string[],
		getRefs(): any,
		getRoutes(): any,
		getStores(): string[],
		getViews(): any[],
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		redirectTo(place?: any): any,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setApplication(application?: Ext.app.IApplication): void,
		setBefore(before?: any): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setControl(control?: any): void,
		setListeners(listeners?: any): void,
		setModels(models?: string[]): void,
		setRefs(refs?: any): void,
		setRoutes(routes?: any): void,
		setStores(stores?: string[]): void,
		setViews(views?: any[]): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IHistory {
		actions?: any[],
		token?: string,
		updateUrl?: boolean,
		add(action?: Ext.app.IAction, silent?: boolean): void,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		back(): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getActions(): any[],
		getBubbleEvents(): any,
		getListeners(): any,
		getToken(): string,
		getUpdateUrl(): boolean,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setActions(actions?: any[]): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		setToken(token?: string): void,
		setUpdateUrl(updateUrl?: boolean): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IProfile {
		application?: Ext.app.IApplication,
		controllers?: any[],
		models?: any[],
		name?: string,
		namespace?: string,
		stores?: any[],
		views?: any[],
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getApplication(): Ext.app.IApplication,
		getBubbleEvents(): any,
		getControllers(): any[],
		getListeners(): any,
		getModels(): any[],
		getName(): string,
		getNamespace(): string,
		getStores(): any[],
		getViews(): any[],
		hasListener(eventName?: string): boolean,
		isActive(): boolean,
		launch(): void,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setApplication(application?: Ext.app.IApplication): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setControllers(controllers?: any[]): void,
		setListeners(listeners?: any): void,
		setModels(models?: any[]): void,
		setName(name?: string): void,
		setNamespace(namespace?: string): void,
		setStores(stores?: any[]): void,
		setViews(views?: any[]): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IRoute {
		action?: string,
		conditions?: any,
		controller?: string,
		url?: string,
		paramsInMatchString?: any,
		getAction(): string,
		getConditions(): any,
		getController(): string,
		getUrl(): string,
		recognize(url?: string): any,
		setAction(action?: string): void,
		setConditions(conditions?: any): void,
		setController(controller?: string): void,
		setUrl(url?: string): void
	}

	declare export interface IRouter {
		defaults?: any,
		routes?: any[],
		connect(url?: string, params?: any): void,
		draw(fn?: any): void,
		getDefaults(): any,
		getRoutes(): any[],
		recognize(url?: string): any,
		setDefaults(defaults?: any): void,
		setRoutes(routes?: any[]): void
	}

			
}

declare module 'behavior' {
		declare export interface IBehavior {
		
	}

	declare export interface IDraggable {
		
	}

	declare export interface IScrollable {
		
	}

	declare export interface ITranslatable {
		
	}

			
}

declare module 'carousel' {
		declare export interface ICarousel {
		baseCls?: string,
		direction?: string,
		indicator?: boolean,
		ui?: string,
		destroy(): void,
		getActiveIndex(): number,
		getAnimation(): any,
		getBaseCls(): string,
		getBufferSize(): number,
		getDirection(): string,
		getDirectionLock(): boolean,
		getIndicator(): any,
		getItemConfig(): any,
		getItemLength(): any,
		getUi(): string,
		isHorizontal(): boolean,
		isVertical(): boolean,
		next(): Ext.carousel.ICarousel,
		prev(): Ext.carousel.ICarousel,
		previous(): Ext.carousel.ICarousel,
		setAnimation(animation?: any): void,
		setBaseCls(baseCls?: string): void,
		setBufferSize(bufferSize?: number): void,
		setDirection(direction?: string): void,
		setDirectionLock(directionLock?: boolean): void,
		setIndicator(indicator?: boolean): void,
		setItemConfig(itemConfig?: any): void,
		setItemLength(itemLength?: any): void,
		setUi(ui?: string): void
	}

	declare export interface IIndicator {
		baseCls?: string,
		destroy(): void,
		getBaseCls(): string,
		getDirection(): string,
		setBaseCls(baseCls?: string): void,
		setDirection(direction?: string): void
	}

	declare export interface IInfinite {
		indicator?: boolean,
		getIndicator(): any,
		getInnerItemConfig(): any,
		getMaxItemIndex(): any,
		setIndicator(indicator?: any): void,
		setInnerItemConfig(innerItemConfig?: any): void,
		setMaxItemIndex(maxItemIndex?: any): void
	}

	declare export interface IItem {
		baseCls?: string,
		component?: any,
		getBaseCls(): string,
		getComponent(): any,
		getTranslatable(): boolean,
		setBaseCls(baseCls?: string): void,
		setComponent(component?: any): void,
		setTranslatable(translatable?: boolean): void
	}

			
}

declare module 'chart' {
		declare export interface IAbstractChart {
		animate?: any,
		axes?: any,
		background?: any,
		colors?: any,
		highlightItem?: any,
		innerPadding?: any,
		insetPadding?: any,
		interactions?: any[],
		legend?: any,
		series?: any,
		shadow?: any,
		store?: Ext.data.IStore,
		version?: string,
		bindStore(store?: Ext.data.IStore): void,
		cancelLayout(): void,
		getAxes(): any,
		getBackground(): any,
		getColors(): any,
		getHighlightItem(): any,
		getInnerPadding(): any,
		getInsetPadding(): any,
		getInteractions(): any[],
		getItemForPoint(x?: number, y?: number): any,
		getItemsForPoint(x?: number, y?: number): any[],
		getLegend(): any,
		getLegendStore(): Ext.data.IStore,
		getSeries(): any,
		getShadow(): any,
		getStore(): Ext.data.IStore,
		getSurface(name?: any, type?: any): Ext.draw.ISurface,
		initialize(): void,
		redraw(): void,
		resumeThicknessChanged(): void,
		scheduleLayout(): void,
		setAnimate(animate?: any): void,
		setAxes(axes?: any): void,
		setBackground(background?: any): void,
		setColors(colors?: any): void,
		setHighlightItem(highlightItem?: any): void,
		setInnerPadding(innerPadding?: any): void,
		setInsetPadding(insetPadding?: any): void,
		setInteractions(interactions?: any[]): void,
		setLegend(legend?: any): void,
		setSeries(series?: any): void,
		setShadow(shadow?: any): void,
		setStore(store?: Ext.data.IStore): void,
		suspendThicknessChanged(): void
	}

	declare export interface ICartesianChart {
		flipXY?: boolean,
		getFlipXY(): boolean,
		getInnerRegion(): any[],
		onPlaceWatermark(): void,
		performLayout(): void,
		redraw(): void,
		setFlipXY(flipXY?: boolean): void,
		setInnerRegion(innerRegion?: any[]): void
	}

	declare export interface IChart {
		flipXY?: boolean,
		getFlipXY(): boolean,
		getInnerRegion(): any[],
		onPlaceWatermark(): void,
		performLayout(): void,
		redraw(): void,
		setFlipXY(flipXY?: boolean): void,
		setInnerRegion(innerRegion?: any[]): void
	}

	declare export interface ILegend {
		baseCls?: string,
		disableSelection?: boolean,
		docked?: string,
		inline?: any,
		itemTpl?: any,
		padding?: any,
		position?: string,
		toggleable?: boolean,
		getBaseCls(): string,
		getDisableSelection(): boolean,
		getDocked(): string,
		getHorizontalHeight(): number,
		getInline(): boolean,
		getItemTpl(): any[],
		getPadding(): number,
		getToggleable(): boolean,
		getVerticalWidth(): number,
		setBaseCls(baseCls?: string): void,
		setDisableSelection(disableSelection?: boolean): void,
		setDocked(docked?: string): void,
		setHorizontalHeight(horizontalHeight?: number): void,
		setInline(inline?: boolean): void,
		setItemTpl(itemTpl?: any[]): void,
		setPadding(padding?: number): void,
		setScrollable(scrollable?: any): void,
		setToggleable(toggleable?: boolean): void,
		setVerticalWidth(verticalWidth?: number): void
	}

	declare export interface IMarkerHolder {
		bindMarker(name?: any, marker?: any): void
	}

	declare export interface IMarkers {
		clear(category?: string): void,
		getBBox(): any,
		getMarkerBBoxFor(category?: string, index?: any, isWithoutTransform?: boolean): void,
		putMarkerFor(
		category?: string, markerAttr?: any, index?: any, canonical?: boolean, keepRevision?: boolean
	): void,
		render(surface?: any, ctx?: any, clipRegion?: any): any
	}

	declare export interface IPolarChart {
		center?: any[],
		radius?: number,
		getCenter(): any[],
		getRadius(): number,
		redraw(): void,
		setCenter(center?: any[]): void,
		setRadius(radius?: number): void
	}

	declare export interface ISpaceFillingChart {
		redraw(): void
	}

			
}

declare module 'axis' {
		declare export interface IAxis {
		background?: any,
		chart?: Ext.chart.IAbstractChart,
		fields?: any[],
		grid?: any,
		hidden?: boolean,
		increment?: number,
		label?: any,
		labelInSpan?: boolean,
		layout?: any,
		maxZoom?: number,
		maximum?: number,
		minZoom?: number,
		minimum?: number,
		needHighPrecision?: boolean,
		position?: string,
		renderer?: any,
		segmenter?: any,
		style?: any,
		title?: any,
		titleMargin?: number,
		visibleRange?: any[],
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBackground(): any,
		getBubbleEvents(): any,
		getChart(): Ext.chart.IAbstractChart,
		getCoordFor(
		value?: any, field?: string, idx?: number, items?: Ext.util.IMixedCollection
	): number,
		getFields(): any[],
		getGrid(): any,
		getHidden(): boolean,
		getIncrement(): number,
		getLabel(): any,
		getLabelInSpan(): boolean,
		getLayout(): any,
		getListeners(): any,
		getMaxZoom(): number,
		getMaximum(): number,
		getMinZoom(): number,
		getMinimum(): number,
		getNeedHighPrecision(): boolean,
		getPosition(): string,
		getRange(): any[],
		getRenderer(): any,
		getSegmenter(): any,
		getStyle(): any,
		getTitle(): any,
		getTitleMargin(): number,
		getVisibleRange(): any[],
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		processData(): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		renderFrame(): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBackground(background?: any): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setChart(chart?: Ext.chart.IAbstractChart): void,
		setFields(fields?: any[]): void,
		setGrid(grid?: any): void,
		setHidden(hidden?: boolean): void,
		setIncrement(increment?: number): void,
		setLabel(label?: any): void,
		setLabelInSpan(labelInSpan?: boolean): void,
		setLayout(layout?: any): void,
		setListeners(listeners?: any): void,
		setMaxZoom(maxZoom?: number): void,
		setMaximum(maximum?: number): void,
		setMinZoom(minZoom?: number): void,
		setMinimum(minimum?: number): void,
		setNeedHighPrecision(needHighPrecision?: boolean): void,
		setPosition(position?: string): void,
		setRenderer(renderer?: any): string,
		setSegmenter(segmenter?: any): void,
		setStyle(style?: any): void,
		setTitle(title?: any): void,
		setTitleMargin(titleMargin?: number): void,
		setVisibleRange(visibleRange?: any[]): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface ICategory {
		layout?: any,
		segmenter?: any,
		getLayout(): string,
		getSegmenter(): string,
		setLayout(layout?: string): void,
		setSegmenter(segmenter?: string): void
	}

	declare export interface INumeric {
		layout?: any,
		segmenter?: any,
		getAggregator(): string,
		getLayout(): string,
		getSegmenter(): string,
		setAggregator(aggregator?: string): void,
		setLayout(layout?: string): void,
		setSegmenter(segmenter?: string): void
	}

	declare export interface ITime {
		calculateByLabelSize?: boolean,
		dateFormat?: any,
		fromDate?: any,
		layout?: any,
		segmenter?: any,
		step?: any[],
		toDate?: any,
		getAggregator(): string,
		getCalculateByLabelSize(): boolean,
		getCoordFor(value?: any): number,
		getDateFormat(): any,
		getFromDate(): any,
		getLayout(): string,
		getSegmenter(): string,
		getStep(): any[],
		getToDate(): any,
		setAggregator(aggregator?: string): void,
		setCalculateByLabelSize(calculateByLabelSize?: boolean): void,
		setDateFormat(dateFormat?: any): void,
		setFromDate(fromDate?: any): void,
		setLayout(layout?: string): void,
		setSegmenter(segmenter?: string): void,
		setStep(step?: any[]): void,
		setToDate(toDate?: any): void
	}

			
}

declare module 'layout' {
		declare export interface ICombineDuplicate {
		
	}

	declare export interface IContinuous {
		getAdjustMaximumByMajorUnit(): boolean,
		getAdjustMinimumByMajorUnit(): boolean,
		setAdjustMaximumByMajorUnit(adjustMaximumByMajorUnit?: boolean): void,
		setAdjustMinimumByMajorUnit(adjustMinimumByMajorUnit?: boolean): void,
		snapEnds(context?: any, min?: any, max?: any, estStepSize?: any): void
	}

	declare export interface IDiscrete {
		calculateLayout(context?: any): any,
		calculateMajorTicks(context?: any): void,
		processData(): void,
		snapEnds(context?: any, min?: any, max?: any, estStepSize?: any): void,
		trimByRange(context?: any, out?: any, trimMin?: any, trimMax?: any): void
	}

	declare export interface ILayout {
		axis?: Ext.chart.axis.IAxis,
		calculateLayout(context?: any): any,
		calculateMajorTicks(context?: any): void,
		calculateMinorTicks(context?: any): void,
		getAxis(): Ext.chart.axis.IAxis,
		processData(series?: any): void,
		setAxis(axis?: Ext.chart.axis.IAxis): void,
		snapEnds(context?: any, min?: any, max?: any, estStepSize?: any): void,
		trimByRange(context?: any, out?: any, trimMin?: any, trimMax?: any): void
	}

	declare export interface ICard {
		
	}

	declare export interface IAbstract {
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IBox {
		align?: string,
		pack?: string,
		getAlign(): string,
		getOrient(): string,
		getPack(): string,
		onItemInnerStateChange(item?: any, isInner?: any): void,
		setAlign(align?: string): void,
		setOrient(orient?: string): void,
		setPack(pack?: string): void
	}

	declare export interface ICard {
		destroy(): void,
		onItemInnerStateChange(item?: any, isInner?: any, destroying?: any): void
	}

	declare export interface IDefault {
		animation?: Ext.fx.layout.ICard,
		destroy(): void,
		getAnimation(): Ext.fx.layout.ICard,
		onItemInnerStateChange(item?: any, isInner?: any, destroying?: any): void,
		setAnimation(animation?: Ext.fx.layout.ICard): void
	}

	declare export interface IFit {
		onItemInnerStateChange(item?: any, isInner?: any): void
	}

	declare export interface IFlexBox {
		align?: string,
		getAlign(): string,
		onItemInnerStateChange(item?: any, isInner?: any): void,
		setAlign(align?: string): void,
		setItemFlex(item?: Ext.IComponent, flex?: number): void
	}

	declare export interface IFloat {
		getDirection(): string,
		onItemInnerStateChange(item?: any, isInner?: any): void,
		setDirection(direction?: string): void
	}

	declare export interface IHBox {
		
	}

	declare export interface IVBox {
		getOrient(): string,
		setOrient(orient?: string): void
	}

			
}

declare module 'segmenter' {
		declare export interface INames {
		add(value?: any, step?: any, unit?: any): void,
		align(value?: any, step?: any, unit?: any): any,
		diff(min?: any, max?: any, unit?: any): number,
		preferredStep(min?: any, estStepSize?: any, minIdx?: any, data?: any): any,
		renderer(value?: any, context?: any): string
	}

	declare export interface INumeric {
		add(value?: any, step?: any, unit?: any): void,
		align(value?: any, step?: any, unit?: any): any,
		diff(min?: any, max?: any, unit?: any): number,
		preferredStep(min?: any, estStepSize?: any): any,
		renderer(value?: any, context?: any): string
	}

	declare export interface ISegmenter {
		axis?: Ext.chart.axis.IAxis,
		add(value?: any, step?: number, unit?: any): void,
		align(value?: any, step?: number, unit?: any): any,
		diff(min?: any, max?: any, unit?: any): number,
		from(value?: any): any,
		getAxis(): Ext.chart.axis.IAxis,
		preferredStep(start?: any, estStepSize?: any): any,
		renderer(value?: any, context?: any): string,
		setAxis(axis?: Ext.chart.axis.IAxis): void
	}

	declare export interface ITime {
		step?: any,
		add(value?: any, step?: any, unit?: any): void,
		align(date?: any, step?: any, unit?: any): any,
		diff(min?: any, max?: any, unit?: any): number,
		from(value?: any): any,
		getStep(): any,
		preferredStep(min?: any, estStepSize?: any): any,
		renderer(value?: any, context?: any): string,
		setStep(step?: any): void
	}

			
}

declare module 'sprite' {
		declare export interface IAxis {
		The?: number,
		axis?: Ext.chart.axis.IAxis,
		axisLine?: boolean,
		centerX?: number,
		centerY?: number,
		dataMax?: number,
		dataMin?: number,
		enlargeEstStepSizeByText?: boolean,
		grid?: boolean,
		label?: any,
		layout?: any,
		length?: number,
		majorTickSize?: number,
		majorTicks?: boolean,
		max?: number,
		min?: number,
		minStepSize?: number,
		minorTickSize?: number,
		minorTricks?: boolean,
		position?: string,
		renderer?: any,
		segmenter?: any,
		textPadding?: number,
		visibleMax?: number,
		visibleMin?: number,
		bindMarker(name?: any, marker?: any): void,
		getAxis(): Ext.chart.axis.IAxis,
		getBBox(): void,
		getLabel(): any,
		getLayout(): any,
		getRenderer(): any,
		getSegmenter(): any,
		render(surface?: any, ctx?: any, clipRegion?: any): any,
		setAxis(axis?: Ext.chart.axis.IAxis): void,
		setLabel(label?: any): void,
		setLayout(layout?: any): void,
		setRenderer(renderer?: any): void,
		setSegmenter(segmenter?: any): void
	}

	declare export interface IAggregative {
		dataClose?: any,
		dataHigh?: any,
		dataLow?: any,
		dataOpen?: any,
		getAggregator(): any,
		renderClipped(surface?: any, ctx?: any, clip?: any, region?: any): void,
		setAggregator(aggregator?: any): void
	}

	declare export interface IArea {
		step?: boolean,
		renderClipped(surface?: any, ctx?: any, clip?: any, clipRegion?: any): void
	}

	declare export interface IBar {
		inGroupGapWidth?: number,
		maxBarWidth?: number,
		minBarWidth?: number,
		minGapWidth?: number,
		radius?: number,
		getIndexNearPoint(x?: any, y?: any): number,
		renderClipped(surface?: any, ctx?: any, clip?: any): void
	}

	declare export interface ICandleStick {
		barWidth?: number,
		ohlcType?: string,
		padding?: number
	}

	declare export interface ICartesian {
		dataMaxX?: number,
		dataMaxY?: number,
		dataMinX?: number,
		dataMinY?: number,
		dataX?: any,
		dataY?: any,
		field?: string,
		flipXY?: boolean,
		labelOverflowPadding?: number,
		labels?: any,
		selectionTolerance?: number,
		binarySearch(key?: any): any,
		bindMarker(name?: any, marker?: any): void,
		getField(): string,
		getFlipXY(): boolean,
		getIndexNearPoint(x?: number, y?: number): number,
		render(surface?: any, ctx?: any, region?: any): any,
		renderClipped(surface?: any, ctx?: any, clip?: any, region?: any): void,
		setField(field?: string): void,
		setFlipXY(flipXY?: boolean): void,
		updatePlainBBox(plain?: any): void
	}

	declare export interface ILine {
		fillArea?: boolean,
		preciseStroke?: boolean,
		smooth?: boolean,
		step?: boolean,
		updatePlainBBox(plain?: any): void
	}

	declare export interface IPie3DPart {
		baseColor?: any,
		baseRotation?: number,
		centerX?: number,
		centerY?: number,
		distortion?: number,
		endAngle?: number,
		endRho?: number,
		margin?: number,
		part?: string,
		startAngle?: number,
		startRho?: number,
		thickness?: number,
		bindMarker(name?: any, marker?: any): void,
		updatePath(path?: any): void,
		updatePlainBBox(plain?: any): void,
		updateTransformedBBox(transform?: any): void
	}

	declare export interface IPieSlice {
		doCallout?: boolean,
		label?: string,
		labelOverflowPadding?: number,
		rotateLabels?: boolean,
		bindMarker(name?: any, marker?: any): void,
		getRendererIndex(): number,
		render(ctx?: any, surface?: any, clipRegion?: any): any,
		setRendererIndex(rendererIndex?: number): void
	}

	declare export interface IPolar {
		baseRotation?: number,
		centerX?: number,
		centerY?: number,
		dataMaxX?: number,
		dataMaxY?: number,
		dataMinX?: number,
		dataMinY?: number,
		dataX?: any,
		dataY?: any,
		endAngle?: number,
		endRho?: number,
		labelOverflowPadding?: number,
		labels?: any,
		startAngle?: number,
		startRho?: number,
		bindMarker(name?: any, marker?: any): void,
		getField(): any,
		setField(field?: any): void,
		updatePlainBBox(plain?: any): void
	}

	declare export interface IRadar {
		render(surface?: any, ctx?: any): any
	}

	declare export interface IScatter {
		renderClipped(surface?: any, ctx?: any, clip?: any, clipRegion?: any): void
	}

	declare export interface IStackedCartesian {
		getIndexNearPoint(x?: any, y?: any): number
	}

	declare export interface IAnimationParser {
		
	}

	declare export interface IArc {
		anticlockwise?: boolean,
		endAngle?: number,
		startAngle?: number,
		updatePath(path?: any, attr?: any): void
	}

	declare export interface IAttributeDefinition {
		aliases?: any,
		animationProcessors?: any,
		defaults?: any,
		dirty?: any,
		processors?: any,
		updaters?: any,
		getAliases(): any,
		getAnimationProcessors(): any,
		getDefaults(): any,
		getProcessors(): any,
		getUpdaters(): any,
		normalize(changes?: any): any,
		setAliases(aliases?: any): void,
		setAnimationProcessors(animationProcessors?: any): void,
		setDefaults(defaults?: any): void,
		setProcessors(processors?: any): void,
		setUpdaters(updaters?: any): void
	}

	declare export interface IAttributeParser {
		
	}

	declare export interface ICircle {
		cx?: number,
		cy?: number,
		r?: number,
		updatePath(path?: any, attr?: any): void,
		updatePlainBBox(plain?: any): void,
		updateTransformedBBox(transform?: any): void
	}

	declare export interface IComposite {
		add(sprite?: any): void,
		render(surface?: any, ctx?: any, region?: any): void,
		updatePlainBBox(plain?: any): void
	}

	declare export interface IEllipse {
		axisRotation?: number,
		cx?: number,
		cy?: number,
		rx?: number,
		ry?: number,
		updatePath(path?: any, attr?: any): void,
		updatePlainBBox(plain?: any): void,
		updateTransformedBBox(transform?: any): void
	}

	declare export interface IEllipticalArc {
		anticlockwise?: boolean,
		endAngle?: number,
		startAngle?: number,
		updatePath(path?: any, attr?: any): void
	}

	declare export interface IImage {
		src?: string,
		render(surface?: any, ctx?: any): any
	}

	declare export interface IInstancing {
		template?: any,
		createInstance(
		config?: any, data?: any, bypassNormalization?: boolean, avoidCopy?: boolean
	): any,
		destroy(): void,
		getBBox(): any,
		getBBoxFor(index?: number, isWithoutTransform?: boolean): any,
		getTemplate(): any,
		render(surface?: any, ctx?: any, clipRegion?: any, region?: any): any,
		setAttributesFor(index?: number, changes?: any, bypassNormalization?: boolean): void,
		setTemplate(template?: any): void
	}

	declare export interface IPath {
		path?: string,
		render(surface?: any, ctx?: any): any,
		updatePath(path?: Ext.draw.IPath, attr?: any): void,
		updatePlainBBox(plain?: any): void,
		updateTransformedBBox(transform?: any): void
	}

	declare export interface IRect {
		height?: number,
		radius?: number,
		width?: number,
		x?: number,
		y?: number,
		updatePath(path?: any, attr?: any): void,
		updatePlainBBox(plain?: any): void,
		updateTransformedBBox(transform?: any, plain?: any): void
	}

	declare export interface ISector {
		centerX?: number,
		centerY?: number,
		endAngle?: number,
		endRho?: number,
		margin?: number,
		startAngle?: number,
		startRho?: number,
		updatePath(path?: any, attr?: any): void
	}

	declare export interface ISprite {
		fillOpacity?: number,
		fillStyle?: string,
		globalAlpha?: number,
		hidden?: boolean,
		lineCap?: string,
		lineJoin?: string,
		lineWidth?: number,
		miterLimit?: number,
		rotationCenterX?: number,
		rotationCenterY?: number,
		rotationRads?: number,
		scalingCenterX?: number,
		scalingCenterY?: number,
		scalingX?: number,
		scalingY?: number,
		shadowBlur?: number,
		shadowColor?: string,
		shadowOffsetX?: number,
		shadowOffsetY?: number,
		strokeOpacity?: number,
		strokeStyle?: string,
		transformFillStroke?: boolean,
		translationX?: number,
		translationY?: number,
		zIndex?: number,
		attr?: any,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBBox(isWithoutTransform?: boolean): void,
		getBBoxCenter(isWithoutTransform?: boolean): any[],
		getBubbleEvents(): any,
		getListeners(): any,
		getParent(): any,
		hasListener(eventName?: string): boolean,
		hide(): Ext.draw.sprite.ISprite,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		preRender(): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		render(surface?: Ext.draw.ISurface, ctx?: any, region?: any[]): any,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setAttributes(changes?: any, bypassNormalization?: boolean, avoidCopy?: boolean): void,
		setAttributesBypassingNormalization(changes?: any, avoidCopy?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		setParent(parent?: any): void,
		show(): Ext.draw.sprite.ISprite,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		updatePlainBBox(plain?: any): void,
		updateTransformedBBox(transform?: any, plain?: any): void
	}

	declare export interface IText {
		font?: string,
		fontFamily?: string,
		fontSize?: any,
		fontStyle?: string,
		fontVariant?: string,
		fontWeight?: string,
		text?: string,
		textAlign?: string,
		textBaseline?: string,
		x?: number,
		y?: number,
		render(surface?: any, ctx?: any): any,
		updatePlainBBox(plain?: any): void
	}

		declare export class AnimationParser  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		statics(): Ext.IClass
	}

	declare export class AttributeParser  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		statics(): Ext.IClass
	}

	
}

declare module 'grid' {
		declare export interface ICircularGrid {
		
	}

	declare export interface IHorizontalGrid {
		render(surface?: any, ctx?: any, clipRegion?: any): any
	}

	declare export interface IRadialGrid {
		render(): any,
		updatePath(path?: any, attr?: any): void
	}

	declare export interface IVerticalGrid {
		render(surface?: any, ctx?: any, clipRegion?: any): any
	}

			
}

declare module 'interactions' {
		declare export interface IAbstract {
		chart?: Ext.chart.IAbstractChart,
		enabled?: boolean,
		gesture?: string,
		throttleGap?: number,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getChart(): Ext.chart.IAbstractChart,
		getEnabled(): boolean,
		getGesture(): string,
		getItemForEvent(e?: Event): any,
		getItemsForEvent(e?: Event): any[],
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		initialize(): void,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onGesture(): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setChart(chart?: Ext.chart.IAbstractChart): void,
		setEnabled(enabled?: boolean): void,
		setGesture(gesture?: string): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface ICrossZoom {
		axes?: any,
		gesture?: string,
		getAxes(): any,
		getGesture(): string,
		getUndoButton(): any,
		onGesture(e?: any): void,
		setAxes(axes?: any): void,
		setGesture(gesture?: string): void,
		setUndoButton(undoButton?: any): void
	}

	declare export interface IItemHighlight {
		gesture?: string,
		getGesture(): string,
		onGesture(series?: any, item?: any, e?: any): void,
		setGesture(gesture?: string): void
	}

	declare export interface IItemInfo {
		gesture?: string,
		panel?: any,
		getGesture(): string,
		getPanel(): any,
		onGesture(series?: any, item?: any): void,
		setGesture(gesture?: string): void,
		setPanel(panel?: any): void
	}

	declare export interface IPanZoom {
		axes?: any,
		overflowArrowOptions?: any,
		showOverflowArrows?: boolean,
		destroy(): void,
		getAxes(): any,
		getHideLabelInGesture(): boolean,
		getMaxZoom(): any,
		getMinZoom(): any,
		getModeToggleButton(): any,
		getPanGesture(): string,
		getShowOverflowArrows(): boolean,
		getZoomOnPanGesture(): boolean,
		onGesture(e?: any): void,
		setAxes(axes?: any): void,
		setHideLabelInGesture(hideLabelInGesture?: boolean): void,
		setMaxZoom(maxZoom?: any): void,
		setMinZoom(minZoom?: any): void,
		setModeToggleButton(modeToggleButton?: any): void,
		setPanGesture(panGesture?: string): void,
		setShowOverflowArrows(showOverflowArrows?: boolean): void,
		setZoomOnPanGesture(zoomOnPanGesture?: boolean): void
	}

	declare export interface IRotate {
		gesture?: string,
		getGesture(): string,
		onGesture(e?: any): void,
		setGesture(gesture?: string): void
	}

	declare export interface IRotatePie3D {
		
	}

			
}

declare module 'label' {
		declare export interface ICallout {
		popUp(attr?: any, changes?: any): void,
		prepareAttributes(attr?: any): void,
		pushDown(attr?: any, changes?: any): any
	}

	declare export interface ILabel {
		fx?: any,
		getFx(): any,
		render(surface?: any, ctx?: any, clipRegion?: any): any,
		setFx(fx?: any): void
	}

			
}

declare module 'series' {
		declare export interface IArea {
		seriesType?: string,
		type?: string
	}

	declare export interface IBar {
		seriesType?: string,
		type?: string,
		getItemForPoint(x?: any, y?: any): any
	}

	declare export interface ICandleStick {
		closeField?: string,
		highField?: string,
		lowField?: string,
		openField?: string,
		seriesType?: string,
		type?: string,
		getCloseField(): string,
		getHighField(): string,
		getLowField(): string,
		getOpenField(): string,
		setCloseField(closeField?: string): void,
		setHighField(highField?: string): void,
		setLowField(lowField?: string): void,
		setOpenField(openField?: string): void
	}

	declare export interface ICartesian {
		xAxis?: Ext.chart.axis.IAxis,
		xField?: string,
		yAxis?: Ext.chart.axis.IAxis,
		yField?: string,
		getItemForPoint(x?: any, y?: any): any,
		getSprites(): void,
		getXAxis(): Ext.chart.axis.IAxis,
		getXField(): string,
		getYAxis(): Ext.chart.axis.IAxis,
		getYField(): string,
		provideLegendInfo(target?: any): void,
		setXAxis(xAxis?: Ext.chart.axis.IAxis): void,
		setXField(xField?: string): void,
		setYAxis(yAxis?: Ext.chart.axis.IAxis): void,
		setYField(yField?: string): void
	}

	declare export interface IGauge {
		angleField?: string,
		colors?: any[],
		donut?: number,
		field?: string,
		maximum?: number,
		minimum?: number,
		needle?: boolean,
		needleLength?: number,
		needleLengthRatio?: number,
		needleWidth?: number,
		sectors?: any[],
		showInLegend?: boolean,
		value?: number,
		wholeDisk?: boolean,
		seriesType?: string,
		type?: string,
		getAngleField(): string,
		getCenter(): any[],
		getColors(): any[],
		getDonut(): number,
		getField(): string,
		getMaximum(): number,
		getMinimum(): number,
		getNeedle(): boolean,
		getNeedleLength(): number,
		getNeedleLengthRatio(): number,
		getNeedleWidth(): number,
		getRadius(): number,
		getRegion(): any[],
		getRotation(): number,
		getSectors(): any[],
		getShowInLegend(): boolean,
		getSprites(): void,
		getTotalAngle(): any,
		getValue(): number,
		getWholeDisk(): boolean,
		setAngleField(angleField?: string): void,
		setCenter(center?: any[]): void,
		setColors(colors?: any[]): void,
		setDonut(donut?: number): void,
		setField(field?: string): void,
		setMaximum(maximum?: number): void,
		setMinimum(minimum?: number): void,
		setNeedle(needle?: boolean): void,
		setNeedleLength(needleLength?: number): void,
		setNeedleLengthRatio(needleLengthRatio?: number): void,
		setNeedleWidth(needleWidth?: number): void,
		setRadius(radius?: number): void,
		setRegion(region?: any[]): void,
		setRotation(rotation?: number): void,
		setSectors(sectors?: any[]): void,
		setShowInLegend(showInLegend?: boolean): void,
		setTotalAngle(totalAngle?: any): void,
		setValue(value?: number): void,
		setWholeDisk(wholeDisk?: boolean): void
	}

	declare export interface IItemPublisher {
		
	}

	declare export interface ILine {
		fill?: boolean,
		selectionTolerance?: number,
		smooth?: any,
		step?: boolean,
		style?: any,
		seriesType?: string,
		type?: string,
		getAggregator(): any,
		getFill(): boolean,
		getSelectionTolerance(): number,
		getSmooth(): any,
		getStep(): boolean,
		setAggregator(aggregator?: any): void,
		setFill(fill?: boolean): void,
		setSelectionTolerance(selectionTolerance?: number): void,
		setSmooth(smooth?: any): void,
		setStep(step?: boolean): void
	}

	declare export interface IPie {
		donut?: any,
		field?: string,
		hidden?: any[],
		labelField?: string,
		rotation?: number,
		style?: any,
		totalAngle?: number,
		seriesType?: string,
		type?: string,
		getDonut(): any,
		getItemForPoint(x?: any, y?: any): any,
		getLabelField(): string,
		getRotation(): number,
		getSprites(): void,
		getStyle(): any,
		getTotalAngle(): number,
		provideLegendInfo(target?: any): void,
		setDonut(donut?: any): void,
		setHidden(hidden?: any[]): void,
		setLabelField(labelField?: string): void,
		setRotation(rotation?: number): void,
		setStyle(style?: any): void,
		setTotalAngle(totalAngle?: number): void
	}

	declare export interface IPie3D {
		donut?: any,
		field?: string,
		rotation?: number,
		seriesType?: string,
		type?: string,
		getDistortion(): number,
		getDonut(): any,
		getField(): string,
		getRegion(): any[],
		getRotation(): number,
		getSprites(): void,
		getThickness(): number,
		setDistortion(distortion?: number): void,
		setDonut(donut?: any): void,
		setField(field?: string): void,
		setRegion(region?: any[]): void,
		setRotation(rotation?: number): void,
		setThickness(thickness?: number): void
	}

	declare export interface IPolar {
		center?: any[],
		offsetX?: number,
		offsetY?: number,
		radius?: number,
		rotation?: number,
		showInLegend?: boolean,
		xField?: string,
		yField?: string,
		getCenter(): any[],
		getOffsetX(): number,
		getOffsetY(): number,
		getRadius(): number,
		getRotation(): number,
		getShowInLegend(): boolean,
		getXAxis(): any,
		getXField(): string,
		getYAxis(): any,
		getYField(): string,
		setCenter(center?: any[]): void,
		setOffsetX(offsetX?: number): void,
		setOffsetY(offsetY?: number): void,
		setRadius(radius?: number): void,
		setRotation(rotation?: number): void,
		setShowInLegend(showInLegend?: boolean): void,
		setXAxis(xAxis?: any): void,
		setXField(xField?: string): void,
		setYAxis(yAxis?: any): void,
		setYField(yField?: string): void
	}

	declare export interface IRadar {
		style?: any,
		seriesType?: string,
		type?: string,
		getItemForPoint(x?: any, y?: any): any
	}

	declare export interface IScatter {
		itemInstancing?: any,
		seriesType?: string,
		type?: string,
		getItemInstancing(): any,
		provideLegendInfo(target?: any): void,
		setItemInstancing(itemInstancing?: any): void
	}

	declare export interface ISeries {
		animate?: any,
		background?: any,
		colors?: any[],
		hidden?: any,
		highlightCfg?: any,
		highlightItem?: any,
		itemInstancing?: any,
		label?: any,
		labelField?: string,
		labelOverflowPadding?: number,
		marker?: any,
		markerSubStyle?: any,
		overlaySurface?: any,
		renderer?: any,
		showInLegend?: boolean,
		store?: any,
		style?: any,
		subStyle?: any,
		surface?: any,
		title?: string,
		seriesType?: string,
		type?: string,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getAnimate(): any,
		getBackground(): any,
		getBubbleEvents(): any,
		getColors(): any[],
		getHidden(): any,
		getHighlightCfg(): any,
		getHighlightItem(): any,
		getItemForPoint(x?: number, y?: number, target?: any): any,
		getItemInstancing(): any,
		getLabel(): any,
		getLabelField(): string,
		getLabelOverflowPadding(): number,
		getListeners(): any,
		getMarker(): any,
		getMarkerSubStyle(): any,
		getOverlaySurface(): any,
		getRenderer(): any,
		getShowInLegend(): boolean,
		getSprites(): void,
		getStyle(): any,
		getSubStyle(): any,
		getSurface(): any,
		getTitle(): string,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		provideLegendInfo(target?: any[]): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setAnimate(animate?: any): void,
		setBackground(background?: any): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setColors(colors?: any[]): void,
		setHidden(hidden?: any): void,
		setHiddenByIndex(index?: number, value?: boolean): void,
		setHighlightCfg(highlightCfg?: any): void,
		setHighlightItem(highlightItem?: any): void,
		setItemInstancing(itemInstancing?: any): void,
		setLabel(label?: any): void,
		setLabelField(labelField?: string): void,
		setLabelOverflowPadding(labelOverflowPadding?: number): void,
		setListeners(listeners?: any): void,
		setMarker(marker?: any): void,
		setMarkerSubStyle(markerSubStyle?: any): void,
		setOverlaySurface(overlaySurface?: any): void,
		setRenderer(renderer?: any): any,
		setShowInLegend(showInLegend?: boolean): void,
		setStore(store?: any): void,
		setStyle(style?: any): void,
		setSubStyle(subStyle?: any): void,
		setSurface(surface?: any): void,
		setTitle(title?: string): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IStackedCartesian {
		hidden?: any[],
		stacked?: boolean,
		getItemForPoint(x?: any, y?: any): any,
		getSprites(): void,
		getStacked(): boolean,
		provideLegendInfo(target?: any): void,
		setHidden(hidden?: any[]): void,
		setStacked(stacked?: boolean): void
	}

			
}

declare module 'lib' {
		declare export interface IComponent {
		baseCls?: string,
		border?: any,
		bottom?: any,
		centered?: boolean,
		cls?: any,
		componentCls?: string,
		contentEl?: any,
		data?: any,
		disabled?: boolean,
		disabledCls?: string,
		dock?: string,
		docked?: string,
		enterAnimation?: any,
		exitAnimation?: any,
		flex?: number,
		floating?: boolean,
		floatingCls?: string,
		fullscreen?: boolean,
		height?: any,
		hidden?: boolean,
		hiddenCls?: string,
		hideAnimation?: any,
		hideOnMaskTap?: boolean,
		html?: any,
		id?: string,
		itemId?: string,
		layoutOnOrientationChange?: boolean,
		left?: any,
		margin?: any,
		maxHeight?: any,
		maxWidth?: any,
		minHeight?: any,
		minWidth?: any,
		modal?: boolean,
		monitorOrientation?: boolean,
		padding?: any,
		plugins?: any,
		record?: Ext.data.IModel,
		renderTo?: Ext.IElement,
		right?: any,
		scroll?: any,
		showAnimation?: any,
		stopMaskTapEvent?: boolean,
		style?: any,
		styleHtmlCls?: string,
		styleHtmlContent?: boolean,
		top?: any,
		tpl?: any,
		tplWriteMode?: string,
		ui?: string,
		width?: any,
		xtype?: string,
		zIndex?: number,
		addCls(cls?: string, prefix?: string, suffix?: string): void,
		destroy(): void,
		disable(): void,
		enable(): void,
		getBaseCls(): string,
		getBorder(): any,
		getBottom(): any,
		getCentered(): boolean,
		getCls(): any,
		getContentEl(): any,
		getData(): any,
		getDisabled(): boolean,
		getDisabledCls(): string,
		getDocked(): string,
		getEl(): Ext.dom.IElement,
		getEnterAnimation(): any,
		getExitAnimation(): any,
		getFlex(): number,
		getFloatingCls(): string,
		getHeight(): any,
		getHidden(): boolean,
		getHiddenCls(): string,
		getHideAnimation(): any,
		getHtml(): any,
		getItemId(): string,
		getLeft(): any,
		getMargin(): any,
		getMaxHeight(): any,
		getMaxWidth(): any,
		getMinHeight(): any,
		getMinWidth(): any,
		getPadding(): any,
		getParent(): Ext.IComponent,
		getPlugins(): any,
		getRecord(): Ext.data.IModel,
		getRenderTo(): Ext.IElement,
		getRight(): any,
		getShowAnimation(): any,
		getSize(): any,
		getStyle(): any,
		getStyleHtmlCls(): string,
		getStyleHtmlContent(): boolean,
		getTop(): any,
		getTpl(): any,
		getTplWriteMode(): string,
		getUi(): string,
		getWidth(): any,
		getXTypes(): string,
		getZIndex(): number,
		hasParent(): boolean,
		hide(animation?: any): Ext.IComponent,
		initialize(): void,
		isDisabled(): boolean,
		isHidden(): boolean,
		isXType(xtype?: string, shallow?: boolean): boolean,
		removeCls(cls?: string, prefix?: string, suffix?: string): void,
		replaceCls(oldCls?: string, newCls?: string, prefix?: string, suffix?: string): void,
		resetFloating(): void,
		setBaseCls(baseCls?: string): void,
		setBorder(border?: any): void,
		setBottom(bottom?: any): void,
		setCentered(centered?: boolean): void,
		setCls(cls?: any): void,
		setContentEl(contentEl?: any): void,
		setData(data?: any): void,
		setDisabled(disabled?: boolean): void,
		setDisabledCls(disabledCls?: string): void,
		setDocked(docked?: string): void,
		setDraggable(draggable?: any): void,
		setEnterAnimation(enterAnimation?: any): void,
		setExitAnimation(exitAnimation?: any): void,
		setFlex(flex?: number): void,
		setFloating(floating?: boolean): void,
		setFloatingCls(floatingCls?: string): void,
		setHeight(height?: any): void,
		setHidden(hidden?: boolean): void,
		setHiddenCls(hiddenCls?: string): void,
		setHideAnimation(hideAnimation?: any): void,
		setHtml(html?: any): void,
		setItemId(itemId?: string): void,
		setLeft(left?: any): void,
		setMargin(margin?: any): void,
		setMaxHeight(maxHeight?: any): void,
		setMaxWidth(maxWidth?: any): void,
		setMinHeight(minHeight?: any): void,
		setMinWidth(minWidth?: any): void,
		setPadding(padding?: any): void,
		setPlugins(plugins?: any): void,
		setRecord(record?: Ext.data.IModel): void,
		setRenderTo(renderTo?: Ext.IElement): void,
		setRight(right?: any): void,
		setScrollable(): void,
		setShowAnimation(showAnimation?: any): void,
		setSize(width?: number, height?: number): void,
		setStyle(style?: any): void,
		setStyleHtmlCls(styleHtmlCls?: string): void,
		setStyleHtmlContent(styleHtmlContent?: boolean): void,
		setTop(top?: any): void,
		setTpl(tpl?: any): void,
		setTplWriteMode(tplWriteMode?: string): void,
		setUi(ui?: string): void,
		setWidth(width?: any): void,
		setZIndex(zIndex?: number): void,
		show(animation?: any): Ext.IComponent,
		showBy(component?: Ext.IComponent, alignment?: string): void,
		up(selector?: string): Ext.IContainer,
		update(): void,
		updateStyleHtmlCls(newHtmlCls?: any, oldHtmlCls?: any): void
	}

	declare export interface IContainer {
		activeItem?: any,
		autoDestroy?: boolean,
		cardSwitchAnimation?: any,
		control?: any,
		defaultType?: string,
		defaults?: any,
		hideOnMaskTap?: boolean,
		items?: any,
		layout?: any,
		masked?: any,
		modal?: boolean,
		scroll?: any,
		scrollable?: any,
		add(newItems?: any): Ext.IComponent,
		addAll(items?: any[]): any[],
		animateActiveItem(activeItem?: any, animation?: any): void,
		applyMasked(masked?: any): any,
		child(selector?: string): Ext.IComponent,
		destroy(): void,
		down(selector?: string): Ext.IComponent,
		getActiveItem(): any,
		getAt(index?: number): Ext.IComponent,
		getAutoDestroy(): boolean,
		getComponent(component?: any): Ext.IComponent,
		getControl(): any,
		getDefaultType(): string,
		getDefaults(): any,
		getDockedComponent(component?: any): any,
		getDockedItems(): any[],
		getHideOnMaskTap(): boolean,
		getInnerItems(): any[],
		getItems(): any,
		getMasked(): any,
		getModal(): boolean,
		getScrollable(): Ext.scroll.IView,
		insert(index?: number, item?: any): void,
		mask(mask?: any): void,
		query(selector?: string): any[],
		remove(item?: any, destroy?: boolean): Ext.IComponent,
		removeAll(destroy?: boolean, everything?: boolean): Ext.IComponent,
		removeAt(index?: number): Ext.IContainer,
		removeDocked(item?: any, destroy?: boolean): Ext.IComponent,
		removeInnerAt(index?: number): Ext.IContainer,
		setActiveItem(activeItem?: any): void,
		setAutoDestroy(autoDestroy?: boolean): void,
		setControl(control?: any): void,
		setDefaultType(defaultType?: string): void,
		setDefaults(defaults?: any): void,
		setHideOnMaskTap(hideOnMaskTap?: boolean): void,
		setItems(items?: any): void,
		setLayout(layout?: any): void,
		setMasked(masked?: any): void,
		setModal(modal?: boolean): void,
		setScrollable(scrollable?: any): void,
		unmask(): void
	}

	declare export interface IPanel {
		baseCls?: string,
		bodyBorder?: any,
		bodyMargin?: any,
		bodyPadding?: any,
		getBaseCls(): string,
		getBodyBorder(): any,
		getBodyMargin(): any,
		getBodyPadding(): any,
		setBaseCls(baseCls?: string): void,
		setBodyBorder(bodyBorder?: any): void,
		setBodyMargin(bodyMargin?: any): void,
		setBodyPadding(bodyPadding?: any): void
	}

			
}

declare module 'data' {
		declare export interface IArrayStore {
		proxy?: any,
		getProxy(): any,
		loadData(data?: any, append?: any): void,
		setProxy(proxy?: any): void
	}

	declare export interface IAssociation {
		associatedModel?: string,
		associatedName?: string,
		associationKey?: string,
		ownerModel?: any,
		primaryKey?: string,
		reader?: Ext.data.reader.IReader,
		type?: string,
		getAssociatedModel(): string,
		getAssociatedName(): string,
		getAssociationKey(): string,
		getName(): any,
		getOwnerModel(): any,
		getOwnerName(): string,
		getPrimaryKey(): string,
		getReader(): Ext.data.reader.IReader,
		getType(): string,
		setAssociatedModel(associatedModel?: string): void,
		setAssociatedName(associatedName?: string): void,
		setAssociationKey(associationKey?: string): void,
		setName(name?: any): void,
		setOwnerModel(ownerModel?: any): void,
		setOwnerName(ownerName?: string): void,
		setPrimaryKey(primaryKey?: string): void,
		setReader(reader?: Ext.data.reader.IReader): void,
		setType(type?: string): void
	}

	declare export interface IBelongsToAssociation {
		foreignKey?: string,
		getterName?: string,
		setterName?: string,
		getForeignKey(): string,
		getGetterName(): string,
		getInstanceName(): any,
		getSetterName(): string,
		setForeignKey(foreignKey?: string): void,
		setGetterName(getterName?: string): void,
		setInstanceName(instanceName?: any): void,
		setSetterName(setterName?: string): void
	}

	declare export interface IHasManyAssociation {
		autoLoad?: boolean,
		autoSync?: boolean,
		filterProperty?: string,
		foreignKey?: string,
		name?: string,
		store?: any,
		storeConfig?: any,
		storeName?: string,
		getAutoLoad(): boolean,
		getAutoSync(): boolean,
		getFilterProperty(): string,
		getForeignKey(): string,
		getStore(): any,
		getStoreName(): string,
		setAutoLoad(autoLoad?: boolean): void,
		setAutoSync(autoSync?: boolean): void,
		setFilterProperty(filterProperty?: string): void,
		setForeignKey(foreignKey?: string): void,
		setStore(store?: any): void,
		setStoreName(storeName?: string): void
	}

	declare export interface IHasOneAssociation {
		foreignKey?: string,
		getterName?: string,
		setterName?: string,
		getForeignKey(): string,
		getGetterName(): string,
		getInstanceName(): any,
		getSetterName(): string,
		setForeignKey(foreignKey?: string): void,
		setGetterName(getterName?: string): void,
		setInstanceName(instanceName?: any): void,
		setSetterName(setterName?: string): void
	}

	declare export interface IBatch {
		autoStart?: boolean,
		pauseOnException?: boolean,
		proxy?: Ext.data.IProxy,
		current?: number,
		hasException?: boolean,
		isComplete?: boolean,
		isRunning?: boolean,
		operations?: Ext.data.IOperation[],
		total?: number,
		add(operation?: any): void,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getAutoStart(): boolean,
		getBubbleEvents(): any,
		getListeners(): any,
		getPauseOnException(): boolean,
		getProxy(): Ext.data.IProxy,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		pause(): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		runOperation(index?: number): void,
		setAutoStart(autoStart?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		setPauseOnException(pauseOnException?: boolean): void,
		setProxy(proxy?: Ext.data.IProxy): void,
		start(): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IConnection {
		defaultHeaders?: any,
		defaultXhrHeader?: string,
		disableCaching?: boolean,
		disableCachingParam?: string,
		extraParams?: any,
		method?: string,
		timeout?: number,
		url?: string,
		useDefaultXhrHeader?: boolean,
		abort(request?: any): void,
		abortAll(): void,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getAsync(): boolean,
		getAutoAbort(): boolean,
		getBubbleEvents(): any,
		getDefaultHeaders(): any,
		getDefaultPostHeader(): string,
		getDefaultXhrHeader(): string,
		getDisableCaching(): boolean,
		getDisableCachingParam(): string,
		getExtraParams(): any,
		getListeners(): any,
		getMethod(): string,
		getPassword(): string,
		getTimeout(): number,
		getUrl(): string,
		getUseDefaultHeader(): boolean,
		getUseDefaultXhrHeader(): boolean,
		getUsername(): string,
		hasListener(eventName?: string): boolean,
		isLoading(request?: any): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		parseStatus(status?: number, xhr?: any): any,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		request(options?: any): any,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setAsync(async?: boolean): void,
		setAutoAbort(autoAbort?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setDefaultHeaders(defaultHeaders?: any): void,
		setDefaultPostHeader(defaultPostHeader?: string): void,
		setDefaultXhrHeader(defaultXhrHeader?: string): void,
		setDisableCaching(disableCaching?: boolean): void,
		setDisableCachingParam(disableCachingParam?: string): void,
		setExtraParams(extraParams?: any): void,
		setListeners(listeners?: any): void,
		setMethod(method?: string): void,
		setOptions(options?: any, scope?: any): any,
		setPassword(password?: string): void,
		setTimeout(timeout?: number): void,
		setUrl(url?: string): void,
		setUseDefaultHeader(useDefaultHeader?: boolean): void,
		setUseDefaultXhrHeader(useDefaultXhrHeader?: boolean): void,
		setUsername(username?: string): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		upload(form?: any, url?: string, params?: string, options?: any): void
	}

	declare export interface IDirectStore {
		proxy?: any,
		getProxy(): any,
		setProxy(proxy?: any): void
	}

	declare export interface IError {
		field?: string,
		message?: string,
		getField(): string,
		getMessage(): string,
		setField(field?: string): void,
		setMessage(message?: string): void
	}

	declare export interface IErrors {
		add(): any,
		getByField(fieldName?: string): any[],
		isValid(): boolean
	}

	declare export interface IField {
		allowNull?: boolean,
		convert?: any,
		dateFormat?: string,
		defaultValue?: any,
		mapping?: any,
		name?: string,
		persist?: boolean,
		sortDir?: string,
		sortType?: any,
		type?: any,
		useNull?: boolean,
		getAllowNull(): boolean,
		getBubbleEvents(): string,
		getConvert(): any,
		getDateFormat(): string,
		getDecode(): any,
		getDefaultValue(): any,
		getEncode(): any,
		getMapping(): any,
		getName(): string,
		getPersist(): boolean,
		getSortDir(): string,
		getSortType(): any,
		getType(): any,
		setAllowNull(allowNull?: boolean): void,
		setBubbleEvents(bubbleEvents?: string): void,
		setConvert(convert?: any): void,
		setDateFormat(dateFormat?: string): void,
		setDecode(decode?: any): void,
		setDefaultValue(defaultValue?: any): void,
		setEncode(encode?: any): void,
		setMapping(mapping?: any): void,
		setName(name?: string): void,
		setPersist(persist?: boolean): void,
		setSortDir(sortDir?: string): void,
		setSortType(sortType?: any): void,
		setType(type?: any): void
	}

	declare export interface IJsonP {
		
	}

	declare export interface IJsonStore {
		proxy?: any,
		getProxy(): any,
		setProxy(proxy?: any): void
	}

	declare export interface IModel {
		associations?: any[],
		belongsTo?: any,
		clientIdProperty?: string,
		fields?: any,
		hasMany?: any,
		hasOne?: any,
		idProperty?: string,
		identifier?: any,
		proxy?: any,
		useCache?: boolean,
		validations?: any[],
		dirty?: boolean,
		editing?: boolean,
		modified?: any,
		phantom?: boolean,
		raw?: any,
		stores?: any[],
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		beginEdit(): void,
		cancelEdit(): void,
		clearListeners(): void,
		commit(silent?: boolean): void,
		copy(id?: string): Ext.data.IModel,
		destroy(): void,
		enableBubble(events?: any): void,
		endEdit(silent?: boolean, modifiedFieldNames?: string[]): void,
		erase(options?: any, scope?: any): Ext.data.IModel,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		get(fieldName?: string): any,
		getAssociatedData(): any,
		getAssociations(): any[],
		getBelongsTo(): any,
		getBubbleEvents(): any,
		getChanges(): any,
		getClientIdProperty(): string,
		getData(includeAssociated?: boolean): any,
		getFields(): any,
		getHasMany(): any,
		getHasOne(): any,
		getId(): any,
		getIdProperty(): string,
		getIdentifier(): any,
		getIsErased(): void,
		getListeners(): any,
		getProxy(): any,
		getUseCache(): boolean,
		getValidations(): any[],
		hasListener(eventName?: string): boolean,
		isModified(fieldName?: string): boolean,
		isValid(): boolean,
		join(store?: Ext.data.IStore): void,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		reject(silent?: boolean): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		save(options?: any, scope?: any): Ext.data.IModel,
		set(fieldName?: any, value?: any): void,
		setAssociations(associations?: any[]): void,
		setBelongsTo(belongsTo?: any): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setClientIdProperty(clientIdProperty?: string): void,
		setConvertedData(data?: any): Ext.data.IModel,
		setData(rawData?: any): Ext.data.IModel,
		setDirty(): void,
		setFields(fields?: any[]): any,
		setHasMany(hasMany?: any): void,
		setHasOne(hasOne?: any): void,
		setId(id?: any): void,
		setIdProperty(idProperty?: string): void,
		setIdentifier(identifier?: any): void,
		setListeners(listeners?: any): void,
		setProxy(proxy?: any): void,
		setUseCache(useCache?: boolean): void,
		setValidations(validations?: any[]): void,
		suspendEvents(): void,
		toUrl(): string,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unjoin(store?: Ext.data.IStore): void,
		validate(): Ext.data.IErrors
	}

	declare export interface IRecord {
		associations?: any[],
		belongsTo?: any,
		clientIdProperty?: string,
		fields?: any,
		hasMany?: any,
		hasOne?: any,
		idProperty?: string,
		identifier?: any,
		proxy?: any,
		useCache?: boolean,
		validations?: any[],
		dirty?: boolean,
		editing?: boolean,
		modified?: any,
		phantom?: boolean,
		raw?: any,
		stores?: any[],
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		beginEdit(): void,
		cancelEdit(): void,
		clearListeners(): void,
		commit(silent?: boolean): void,
		copy(id?: string): Ext.data.IModel,
		destroy(): void,
		enableBubble(events?: any): void,
		endEdit(silent?: boolean, modifiedFieldNames?: string[]): void,
		erase(options?: any, scope?: any): Ext.data.IModel,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		get(fieldName?: string): any,
		getAssociatedData(): any,
		getAssociations(): any[],
		getBelongsTo(): any,
		getBubbleEvents(): any,
		getChanges(): any,
		getClientIdProperty(): string,
		getData(includeAssociated?: boolean): any,
		getFields(): any,
		getHasMany(): any,
		getHasOne(): any,
		getId(): any,
		getIdProperty(): string,
		getIdentifier(): any,
		getIsErased(): void,
		getListeners(): any,
		getProxy(): any,
		getUseCache(): boolean,
		getValidations(): any[],
		hasListener(eventName?: string): boolean,
		isModified(fieldName?: string): boolean,
		isValid(): boolean,
		join(store?: Ext.data.IStore): void,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		reject(silent?: boolean): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		save(options?: any, scope?: any): Ext.data.IModel,
		set(fieldName?: any, value?: any): void,
		setAssociations(associations?: any[]): void,
		setBelongsTo(belongsTo?: any): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setClientIdProperty(clientIdProperty?: string): void,
		setConvertedData(data?: any): Ext.data.IModel,
		setData(rawData?: any): Ext.data.IModel,
		setDirty(): void,
		setFields(fields?: any[]): any,
		setHasMany(hasMany?: any): void,
		setHasOne(hasOne?: any): void,
		setId(id?: any): void,
		setIdProperty(idProperty?: string): void,
		setIdentifier(identifier?: any): void,
		setListeners(listeners?: any): void,
		setProxy(proxy?: any): void,
		setUseCache(useCache?: boolean): void,
		setValidations(validations?: any[]): void,
		suspendEvents(): void,
		toUrl(): string,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unjoin(store?: Ext.data.IStore): void,
		validate(): Ext.data.IErrors
	}

	declare export interface IModelManager {
		
	}

	declare export interface INodeInterface {
		childNodes?: any,
		firstChild?: any,
		lastChild?: any,
		nextSibling?: any,
		parentNode?: any,
		previousSibling?: any,
		appendChild(node?: any): Ext.data.INodeInterface,
		bubble(fn?: any, scope?: any, args?: any[]): void,
		cascadeBy(fn?: any, scope?: any, args?: any[]): void,
		collapse(recursive?: any, callback?: any, scope?: any): void,
		contains(node?: Ext.data.INodeInterface): boolean,
		copy(newId?: string, deep?: boolean): Ext.data.INodeInterface,
		destroy(silent?: any): void,
		eachChild(fn?: any, scope?: any, args?: any[]): void,
		expand(recursive?: any, callback?: any, scope?: any): void,
		findChild(attribute?: string, value?: any, deep?: boolean): Ext.data.INodeInterface,
		findChildBy(fn?: any, scope?: any, deep?: boolean): Ext.data.INodeInterface,
		getChildAt(index?: number): Ext.data.INodeInterface,
		getDepth(): number,
		getPath(field?: string, separator?: string): string,
		hasChildNodes(): boolean,
		indexOf(child?: Ext.data.INodeInterface): number,
		insertBefore(
		node?: Ext.data.INodeInterface, refNode?: Ext.data.INodeInterface
	): Ext.data.INodeInterface,
		insertChild(index?: number, node?: Ext.data.IModel): Ext.data.IModel,
		isAncestor(node?: Ext.data.INodeInterface): boolean,
		isExpandable(): boolean,
		isExpanded(): boolean,
		isFirst(): boolean,
		isLast(): boolean,
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
		sort(sortFn?: any, recursive?: boolean, suppressEvent?: boolean): void,
		updateInfo(silent?: any): boolean
	}

	declare export interface INode {
		childNodes?: any,
		firstChild?: any,
		lastChild?: any,
		nextSibling?: any,
		parentNode?: any,
		previousSibling?: any,
		appendChild(node?: any): Ext.data.INodeInterface,
		bubble(fn?: any, scope?: any, args?: any[]): void,
		cascadeBy(fn?: any, scope?: any, args?: any[]): void,
		collapse(recursive?: any, callback?: any, scope?: any): void,
		contains(node?: Ext.data.INodeInterface): boolean,
		copy(newId?: string, deep?: boolean): Ext.data.INodeInterface,
		destroy(silent?: any): void,
		eachChild(fn?: any, scope?: any, args?: any[]): void,
		expand(recursive?: any, callback?: any, scope?: any): void,
		findChild(attribute?: string, value?: any, deep?: boolean): Ext.data.INodeInterface,
		findChildBy(fn?: any, scope?: any, deep?: boolean): Ext.data.INodeInterface,
		getChildAt(index?: number): Ext.data.INodeInterface,
		getDepth(): number,
		getPath(field?: string, separator?: string): string,
		hasChildNodes(): boolean,
		indexOf(child?: Ext.data.INodeInterface): number,
		insertBefore(
		node?: Ext.data.INodeInterface, refNode?: Ext.data.INodeInterface
	): Ext.data.INodeInterface,
		insertChild(index?: number, node?: Ext.data.IModel): Ext.data.IModel,
		isAncestor(node?: Ext.data.INodeInterface): boolean,
		isExpandable(): boolean,
		isExpanded(): boolean,
		isFirst(): boolean,
		isLast(): boolean,
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
		sort(sortFn?: any, recursive?: boolean, suppressEvent?: boolean): void,
		updateInfo(silent?: any): boolean
	}

	declare export interface INodeStore {
		filters?: any[],
		folderSort?: boolean,
		node?: Ext.data.IModel,
		recursive?: boolean,
		rootVisible?: boolean,
		sorters?: any[],
		getFilters(): any,
		getFolderSort(): boolean,
		getNode(): Ext.data.IModel,
		getRecursive(): boolean,
		getRootVisible(): boolean,
		getSorters(): any,
		isVisible(node?: any): boolean,
		setFilters(filters?: any): void,
		setFolderSort(folderSort?: boolean): void,
		setNode(node?: Ext.data.IModel): void,
		setRecursive(recursive?: boolean): void,
		setRootVisible(rootVisible?: boolean): void,
		setSorters(sorters?: any): void
	}

	declare export interface IOperation {
		action?: string,
		batch?: Ext.data.IBatch,
		callback?: any,
		filters?: Ext.util.IFilter[],
		group?: boolean,
		grouper?: Ext.util.IGrouper,
		limit?: number,
		model?: Ext.data.IModel,
		params?: any,
		records?: any[],
		request?: Ext.data.IRequest,
		response?: any,
		resultSet?: Ext.data.IResultSet,
		scope?: any,
		sorters?: Ext.util.ISorter[],
		start?: number,
		synchronous?: boolean,
		withCredentials?: boolean,
		allowWrite(): boolean,
		getAction(): string,
		getAddRecords(): boolean,
		getBatch(): Ext.data.IBatch,
		getCallback(): any,
		getError(): any,
		getFilters(): Ext.util.IFilter[],
		getGrouper(): Ext.util.IGrouper,
		getLimit(): number,
		getModel(): Ext.data.IModel,
		getNode(): any,
		getPage(): any,
		getParams(): any,
		getRequest(): Ext.data.IRequest,
		getResponse(): any,
		getResultSet(): Ext.data.IResultSet,
		getScope(): any,
		getSorters(): Ext.util.ISorter[],
		getStart(): number,
		getSynchronous(): boolean,
		getUrl(): any,
		getWithCredentials(): boolean,
		hasException(): boolean,
		isComplete(): boolean,
		isRunning(): boolean,
		isStarted(): boolean,
		setAction(action?: string): void,
		setAddRecords(addRecords?: boolean): void,
		setBatch(batch?: Ext.data.IBatch): void,
		setCallback(callback?: any): void,
		setCompleted(): void,
		setException(error?: any): void,
		setFilters(filters?: Ext.util.IFilter[]): void,
		setGrouper(grouper?: Ext.util.IGrouper): void,
		setLimit(limit?: number): void,
		setModel(model?: Ext.data.IModel): void,
		setNode(node?: any): void,
		setPage(page?: any): void,
		setParams(params?: any): void,
		setRecords(records?: any[]): void,
		setRequest(request?: Ext.data.IRequest): void,
		setResponse(response?: any): void,
		setResultSet(resultSet?: Ext.data.IResultSet): void,
		setScope(scope?: any): void,
		setSorters(sorters?: Ext.util.ISorter[]): void,
		setStart(start?: number): void,
		setStarted(): void,
		setSuccessful(): void,
		setSynchronous(synchronous?: boolean): void,
		setUrl(url?: any): void,
		setWithCredentials(withCredentials?: boolean): void,
		wasSuccessful(): boolean
	}

	declare export interface IHttpProxy {
		headers?: any,
		password?: string,
		useDefaultXhrHeader?: boolean,
		username?: string,
		withCredentials?: boolean,
		actionMethods?: any,
		doRequest(operation?: any, callback?: any, scope?: any): any,
		getHeaders(): any,
		getMethod(request?: Ext.data.IRequest): string,
		getPassword(): string,
		getUseDefaultXhrHeader(): boolean,
		getUsername(): string,
		getWithCredentials(): boolean,
		setHeaders(headers?: any): void,
		setPassword(password?: string): void,
		setUseDefaultXhrHeader(useDefaultXhrHeader?: boolean): void,
		setUsername(username?: string): void,
		setWithCredentials(withCredentials?: boolean): void
	}

	declare export interface IAjaxProxy {
		headers?: any,
		password?: string,
		useDefaultXhrHeader?: boolean,
		username?: string,
		withCredentials?: boolean,
		actionMethods?: any,
		doRequest(operation?: any, callback?: any, scope?: any): any,
		getHeaders(): any,
		getMethod(request?: Ext.data.IRequest): string,
		getPassword(): string,
		getUseDefaultXhrHeader(): boolean,
		getUsername(): string,
		getWithCredentials(): boolean,
		setHeaders(headers?: any): void,
		setPassword(password?: string): void,
		setUseDefaultXhrHeader(useDefaultXhrHeader?: boolean): void,
		setUsername(username?: string): void,
		setWithCredentials(withCredentials?: boolean): void
	}

	declare export interface IDirectProxy {
		api?: any,
		directFn?: any,
		extraParams?: any,
		paramOrder?: any,
		paramsAsHash?: boolean,
		buildUrl(): string,
		doRequest(operation?: any, callback?: any, scope?: any): void,
		getApi(): any,
		getDirectFn(): any,
		getExtraParams(): any,
		getParamOrder(): any,
		getParamsAsHash(): boolean,
		setApi(api?: any): void,
		setDirectFn(directFn?: any): void,
		setExtraParams(extraParams?: any): void,
		setParamOrder(paramOrder?: any): void,
		setParamsAsHash(paramsAsHash?: boolean): void
	}

	declare export interface IScriptTagProxy {
		autoAppendParams?: boolean,
		callbackKey?: string,
		recordParam?: string,
		abort(): void,
		buildUrl(request?: Ext.data.IRequest): string,
		destroy(): void,
		doRequest(operation?: Ext.data.IOperation, callback?: any, scope?: any): any,
		getAutoAppendParams(): boolean,
		getCallbackKey(): string,
		getDefaultWriterType(): string,
		getRecordParam(): string,
		setAutoAppendParams(autoAppendParams?: boolean): void,
		setCallbackKey(callbackKey?: string): void,
		setDefaultWriterType(defaultWriterType?: string): void,
		setRecordParam(recordParam?: string): void
	}

	declare export interface ILocalStorageProxy {
		
	}

	declare export interface IMemoryProxy {
		data?: any,
		clear(): void,
		create(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		destroy(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		getData(): any,
		read(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		setData(data?: any): void,
		update(operation?: Ext.data.IOperation, callback?: any, scope?: any): void
	}

	declare export interface IDataProxy {
		batchActions?: boolean,
		batchOrder?: string,
		model?: any,
		reader?: any,
		writer?: any,
		batch(options?: any): Ext.data.IBatch,
		create(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		destroy(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		getBatchActions(): boolean,
		getBatchOrder(): string,
		getModel(): any,
		getReader(): any,
		getWriter(): any,
		read(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		setBatchActions(batchActions?: boolean): void,
		setBatchOrder(batchOrder?: string): void,
		setModel(model?: any): void,
		setReader(reader?: any): void,
		setWriter(writer?: any): void,
		update(operation?: Ext.data.IOperation, callback?: any, scope?: any): void
	}

	declare export interface IProxy {
		batchActions?: boolean,
		batchOrder?: string,
		model?: any,
		reader?: any,
		writer?: any,
		batch(options?: any): Ext.data.IBatch,
		create(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		destroy(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		getBatchActions(): boolean,
		getBatchOrder(): string,
		getModel(): any,
		getReader(): any,
		getWriter(): any,
		read(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		setBatchActions(batchActions?: boolean): void,
		setBatchOrder(batchOrder?: string): void,
		setModel(model?: any): void,
		setReader(reader?: any): void,
		setWriter(writer?: any): void,
		update(operation?: Ext.data.IOperation, callback?: any, scope?: any): void
	}

	declare export interface IRestProxy {
		appendId?: boolean,
		batchActions?: boolean,
		format?: string,
		getActionMethods(): any,
		getAppendId(): boolean,
		getBatchActions(): boolean,
		getFormat(): string,
		setActionMethods(actionMethods?: any): void,
		setAppendId(appendId?: boolean): void,
		setBatchActions(batchActions?: boolean): void,
		setFormat(format?: string): void
	}

	declare export interface IServerProxy {
		api?: any,
		cacheString?: string,
		directionParam?: string,
		enablePagingParams?: boolean,
		extraParams?: any,
		filterParam?: string,
		groupParam?: string,
		limitParam?: string,
		noCache?: boolean,
		pageParam?: string,
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
		getApi(): any,
		getCacheString(): string,
		getDirectionParam(): string,
		getEnablePagingParams(): boolean,
		getExtraParams(): any,
		getFilterParam(): string,
		getGroupParam(): string,
		getLimitParam(): string,
		getNoCache(): boolean,
		getPageParam(): string,
		getSimpleSortMode(): boolean,
		getSortParam(): string,
		getStartParam(): string,
		getTimeout(): number,
		processResponse(
		success?: boolean, operation?: Ext.data.IOperation, request?: Ext.data.IRequest, response?: any, callback?: any, scope?: any
	): void,
		read(): void,
		setApi(api?: any): void,
		setCacheString(cacheString?: string): void,
		setDirectionParam(directionParam?: string): void,
		setEnablePagingParams(enablePagingParams?: boolean): void,
		setExtraParam(name?: string, value?: any): void,
		setExtraParams(extraParams?: any): void,
		setFilterParam(filterParam?: string): void,
		setGroupParam(groupParam?: string): void,
		setLimitParam(limitParam?: string): void,
		setNoCache(noCache?: boolean): void,
		setPageParam(pageParam?: string): void,
		setSimpleSortMode(simpleSortMode?: boolean): void,
		setSortParam(sortParam?: string): void,
		setStartParam(startParam?: string): void,
		setTimeout(timeout?: number): void,
		setUrl(url?: string): void,
		update(): void
	}

	declare export interface ISessionStorageProxy {
		
	}

	declare export interface IWebStorageProxy {
		enablePagingParams?: boolean,
		id?: string,
		cache?: any,
		clear(): void,
		create(operation?: any, callback?: any, scope?: any): void,
		destroy(operation?: any, callback?: any, scope?: any): void,
		getDefaultDateFormat(): string,
		getEnablePagingParams(): boolean,
		getId(): string,
		read(operation?: any, callback?: any, scope?: any): void,
		setDefaultDateFormat(defaultDateFormat?: string): void,
		setEnablePagingParams(enablePagingParams?: boolean): void,
		setId(id?: string): void,
		setRecord(record?: Ext.data.IModel, id?: string): void,
		update(operation?: any, callback?: any, scope?: any): void
	}

	declare export interface IArrayReader {
		successProperty?: string,
		totalProperty?: string,
		getSuccessProperty(): any,
		getTotalProperty(): any,
		setSuccessProperty(successProperty?: any): void,
		setTotalProperty(totalProperty?: any): void
	}

	declare export interface IJsonReader {
		record?: string,
		useSimpleAccessors?: boolean,
		getRecord(): string,
		getResponseData(response?: any): any,
		getUseSimpleAccessors(): boolean,
		setRecord(record?: string): void,
		setUseSimpleAccessors(useSimpleAccessors?: boolean): void
	}

	declare export interface IReader {
		clientIdProperty?: string,
		idProperty?: string,
		implicitIncludes?: boolean,
		messageProperty?: string,
		root?: string,
		rootProperty?: string,
		successProperty?: string,
		totalProperty?: string,
		metaData?: any,
		rawData?: any,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getClientIdProperty(): string,
		getIdProperty(): string,
		getImplicitIncludes(): boolean,
		getListeners(): any,
		getMessageProperty(): string,
		getModel(): any,
		getResponseData(response?: any): any,
		getRootProperty(): string,
		getSuccessProperty(): any,
		getTotalProperty(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		read(response?: any): Ext.data.IResultSet,
		readRecords(data?: any): Ext.data.IResultSet,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setClientIdProperty(clientIdProperty?: string): void,
		setIdProperty(idProperty?: string): void,
		setImplicitIncludes(implicitIncludes?: boolean): void,
		setListeners(listeners?: any): void,
		setMessageProperty(messageProperty?: string): void,
		setModel(model?: any): void,
		setRootProperty(rootProperty?: string): void,
		setSuccessProperty(successProperty?: string): void,
		setTotalProperty(totalProperty?: string): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IDataReader {
		clientIdProperty?: string,
		idProperty?: string,
		implicitIncludes?: boolean,
		messageProperty?: string,
		root?: string,
		rootProperty?: string,
		successProperty?: string,
		totalProperty?: string,
		metaData?: any,
		rawData?: any,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getClientIdProperty(): string,
		getIdProperty(): string,
		getImplicitIncludes(): boolean,
		getListeners(): any,
		getMessageProperty(): string,
		getModel(): any,
		getResponseData(response?: any): any,
		getRootProperty(): string,
		getSuccessProperty(): any,
		getTotalProperty(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		read(response?: any): Ext.data.IResultSet,
		readRecords(data?: any): Ext.data.IResultSet,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setClientIdProperty(clientIdProperty?: string): void,
		setIdProperty(idProperty?: string): void,
		setImplicitIncludes(implicitIncludes?: boolean): void,
		setListeners(listeners?: any): void,
		setMessageProperty(messageProperty?: string): void,
		setModel(model?: any): void,
		setRootProperty(rootProperty?: string): void,
		setSuccessProperty(successProperty?: string): void,
		setTotalProperty(totalProperty?: string): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IXmlReader {
		record?: string,
		getData(data?: any): any,
		getRecord(): string,
		getResponseData(response?: any): any,
		readRecords(doc?: any): Ext.data.IResultSet,
		setRecord(record?: string): void
	}

	declare export interface IRequest {
		action?: string,
		callbackKey?: string,
		disableCaching?: boolean,
		headers?: any,
		jsonData?: any,
		jsonp?: Ext.data.IJsonP,
		method?: string,
		operation?: Ext.data.IOperation,
		params?: any,
		password?: string,
		proxy?: Ext.data.proxy.IProxy,
		url?: string,
		username?: string,
		withCredentials?: boolean,
		xmlData?: any,
		getAction(): string,
		getArgs(): any,
		getCallback(): any,
		getCallbackKey(): string,
		getDirectFn(): any,
		getDisableCaching(): boolean,
		getHeaders(): any,
		getJsonData(): any,
		getMethod(): string,
		getOperation(): Ext.data.IOperation,
		getParams(): any,
		getPassword(): string,
		getProxy(): Ext.data.proxy.IProxy,
		getRecords(): any,
		getScope(): any,
		getTimeout(): number,
		getUrl(): string,
		getUsername(): string,
		getWithCredentials(): boolean,
		getXmlData(): any,
		setAction(action?: string): void,
		setArgs(args?: any): void,
		setCallback(callback?: any): void,
		setCallbackKey(callbackKey?: string): void,
		setDirectFn(directFn?: any): void,
		setDisableCaching(disableCaching?: boolean): void,
		setHeaders(headers?: any): void,
		setJsonData(jsonData?: any): void,
		setMethod(method?: string): void,
		setOperation(operation?: Ext.data.IOperation): void,
		setParams(params?: any): void,
		setPassword(password?: string): void,
		setProxy(proxy?: Ext.data.proxy.IProxy): void,
		setRecords(records?: any): void,
		setScope(scope?: any): void,
		setTimeout(timeout?: number): void,
		setUrl(url?: string): void,
		setUsername(username?: string): void,
		setWithCredentials(withCredentials?: boolean): void,
		setXmlData(xmlData?: any): void
	}

	declare export interface IResultSet {
		count?: number,
		loaded?: boolean,
		message?: string,
		records?: Ext.data.IModel[],
		success?: boolean,
		total?: number,
		getCount(): number,
		getLoaded(): boolean,
		getMessage(): string,
		getRecords(): Ext.data.IModel[],
		getSuccess(): boolean,
		getTotal(): number,
		setCount(count?: number): void,
		setLoaded(loaded?: boolean): void,
		setMessage(message?: string): void,
		setRecords(records?: Ext.data.IModel[]): void,
		setSuccess(success?: boolean): void,
		setTotal(total?: number): void
	}

	declare export interface ISortTypes {
		
	}

	declare export interface IStore {
		autoLoad?: any,
		autoSync?: boolean,
		clearOnPageLoad?: boolean,
		data?: any,
		destroyRemovedRecords?: boolean,
		fields?: any[],
		filters?: any[],
		getGroupString?: any,
		groupDir?: string,
		groupField?: string,
		grouper?: any,
		model?: string,
		pageSize?: number,
		proxy?: any,
		remoteFilter?: boolean,
		remoteGroup?: boolean,
		remoteSort?: boolean,
		sorters?: any[],
		storeId?: string,
		syncRemovedRecords?: boolean,
		totalCount?: number,
		currentPage?: number,
		add(model?: any): Ext.data.IModel[],
		applyData(data?: any): void,
		average(field?: string): number,
		clearFilter(suppressEvent?: boolean): void,
		destroy(): void,
		each(fn?: any, scope?: any): void,
		filter(
		filters?: any, value?: string, anyMatch?: boolean, caseSensitive?: boolean
	): void,
		filterBy(fn?: any, scope?: any): void,
		find(
		fieldName?: string, value?: any, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean
	): number,
		findBy(fn?: any, scope?: any, startIndex?: number): number,
		findExact(fieldName?: string, value?: any, startIndex?: number): number,
		findRecord(
		fieldName?: string, value?: any, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean
	): Ext.data.IModel,
		first(): any,
		getAllCount(): number,
		getAt(index?: number): any,
		getAutoLoad(): any,
		getAutoSync(): boolean,
		getById(id?: string): any,
		getClearOnPageLoad(): boolean,
		getCount(): number,
		getData(): any,
		getDestroyRemovedRecords(): boolean,
		getFields(): any[],
		getGetGroupString(): any,
		getGroupDir(): string,
		getGroupField(): string,
		getGrouper(): any,
		getGroups(groupName?: string): any,
		getModel(): string,
		getModelDefaults(): any,
		getNewRecords(): Ext.data.IModel[],
		getPageSize(): number,
		getProxy(): any,
		getRange(startIndex?: number, endIndex?: number): Ext.data.IModel[],
		getRemoteFilter(): boolean,
		getRemoteGroup(): boolean,
		getRemoteSort(): boolean,
		getRemovedRecords(): Ext.data.IModel[],
		getStoreId(): string,
		getSyncRemovedRecords(): boolean,
		getTotalCount(): number,
		getUpdatedRecords(): Ext.data.IModel[],
		indexOf(record?: Ext.data.IModel): number,
		indexOfId(id?: string): number,
		insert(index?: number, records?: Ext.data.IModel[]): any,
		isAutoLoading(): boolean,
		isFiltered(): boolean,
		isGrouped(): boolean,
		isLoaded(): boolean,
		isLoading(): boolean,
		isSorted(): boolean,
		last(): any,
		load(options?: any, scope?: any): any,
		loadData(data?: any, append?: boolean): void,
		loadPage(page?: number, options?: any, scope?: any): void,
		loadRecords(model?: any): Ext.data.IModel[],
		max(field?: string): any,
		min(field?: string): any,
		nextPage(options?: any): void,
		previousPage(options?: any): void,
		queryBy(fn?: any, scope?: any): Ext.util.IMixedCollection,
		remove(records?: any): void,
		removeAll(silent?: boolean): void,
		removeAt(index?: number): void,
		setAutoLoad(autoLoad?: any): void,
		setAutoSync(autoSync?: boolean): void,
		setClearOnPageLoad(clearOnPageLoad?: boolean): void,
		setData(data?: any): void,
		setDestroyRemovedRecords(destroyRemovedRecords?: boolean): void,
		setFields(fields?: any[]): void,
		setFilters(filters?: any[]): void,
		setGetGroupString(getGroupString?: any): void,
		setGroupDir(groupDir?: string): void,
		setGroupField(groupField?: string): void,
		setGrouper(grouper?: any): void,
		setModel(model?: string): void,
		setModelDefaults(modelDefaults?: any): void,
		setPageSize(pageSize?: number): void,
		setProxy(proxy?: any): void,
		setRemoteFilter(remoteFilter?: boolean): void,
		setRemoteGroup(remoteGroup?: boolean): void,
		setRemoteSort(remoteSort?: boolean): void,
		setSorters(sorters?: any[]): void,
		setStoreId(storeId?: string): void,
		setSyncRemovedRecords(syncRemovedRecords?: boolean): void,
		setTotalCount(totalCount?: number): void,
		sort(sorters?: any, defaultDirection?: string, where?: string): void,
		sum(field?: string): number,
		sync(): any
	}

	declare export interface IStoreManager {
		
	}

	declare export interface IStoreMgr {
		
	}

	declare export interface ITreeStore {
		clearOnLoad?: boolean,
		defaultRootId?: string,
		defaultRootProperty?: string,
		nodeParam?: string,
		root?: any,
		getClearOnLoad(): boolean,
		getDefaultRootId(): string,
		getDefaultRootProperty(): string,
		getNodeById(id?: any): Ext.data.INodeInterface,
		getNodeParam(): string,
		getRoot(): any,
		getRootNode(node?: any): Ext.data.IModel,
		load(options?: any): any,
		onProxyLoad(operation?: any): void,
		removeAll(silent?: boolean): void,
		setClearOnLoad(clearOnLoad?: boolean): void,
		setDefaultRootId(defaultRootId?: string): void,
		setDefaultRootProperty(defaultRootProperty?: string): void,
		setNodeParam(nodeParam?: string): void,
		setRoot(root?: any): void,
		setRootNode(node?: Ext.data.IModel): Ext.data.IModel
	}

	declare export interface ITypes {
		
	}

	declare export interface IValidations {
		
	}

	declare export interface IJsonWriter {
		allowSingle?: boolean,
		encode?: boolean,
		root?: string,
		rootProperty?: string,
		getAllowSingle(): boolean,
		getEncode(): boolean,
		getEncodeRequest(): boolean,
		getRootProperty(): string,
		setAllowSingle(allowSingle?: boolean): void,
		setEncode(encode?: boolean): void,
		setEncodeRequest(encodeRequest?: boolean): void,
		setRootProperty(rootProperty?: string): void
	}

	declare export interface IDataWriter {
		nameProperty?: string,
		writeAllFields?: boolean,
		getNameProperty(): string,
		getRecordData(record?: any): any,
		getWriteAllFields(): boolean,
		setNameProperty(nameProperty?: string): void,
		setWriteAllFields(writeAllFields?: boolean): void,
		write(request?: Ext.data.IRequest): Ext.data.IRequest
	}

	declare export interface IWriter {
		nameProperty?: string,
		writeAllFields?: boolean,
		getNameProperty(): string,
		getRecordData(record?: any): any,
		getWriteAllFields(): boolean,
		setNameProperty(nameProperty?: string): void,
		setWriteAllFields(writeAllFields?: boolean): void,
		write(request?: Ext.data.IRequest): Ext.data.IRequest
	}

	declare export interface IXmlWriter {
		defaultDocumentRoot?: string,
		documentRoot?: string,
		header?: string,
		record?: string,
		getDefaultDocumentRoot(): string,
		getDocumentRoot(): string,
		getHeader(): string,
		getRecord(): string,
		setDefaultDocumentRoot(defaultDocumentRoot?: string): void,
		setDocumentRoot(documentRoot?: string): void,
		setHeader(header?: string): void,
		setRecord(record?: string): void,
		writeRecords(request?: any, data?: any): any
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
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		request(options?: any): any;
		statics(): Ext.IClass
	}

	declare export class Model  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		getName(): string;
		load(id?: number, config?: any, scope?: any): void;
		override(members?: any): Ext.IBase
	}

	declare export class Record  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		getName(): string;
		load(id?: number, config?: any, scope?: any): void;
		override(members?: any): Ext.IBase
	}

	declare export class ModelManager  {
		all: Ext.util.IHashMap;
		associationStack: any;
		defaultProxyType: any;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		create(data?: any, name?: string, id?: number): any;
		destroy(): void;
		each(fn?: any, scope?: any): void;
		get(id?: string): any;
		getCount(): number;
		getInitialConfig(name?: string): any;
		getModel(id?: any): Ext.data.IModel;
		initConfig(instanceConfig?: any): any;
		isRegistered(type?: string): boolean;
		onAvailable(id?: string, fn?: any, scope?: any): void;
		register(item?: any): void;
		registerType(name?: any, config?: any): any;
		statics(): Ext.IClass;
		unregister(item?: any): void
	}

	declare export class NodeInterface  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		decorate(record?: Ext.data.IModel): void;
		getName(): string;
		override(members?: any): Ext.IBase
	}

	declare export class Node  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		decorate(record?: Ext.data.IModel): void;
		getName(): string;
		override(members?: any): Ext.IBase
	}

	declare export class SortTypes  {
		self: Ext.IClass;
		stripTagsRE: RegExp;
		asDate(value?: any): number;
		asFloat(value?: any): number;
		asInt(value?: any): number;
		asText(value?: any): string;
		asUCString(value?: any): string;
		asUCText(value?: any): string;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		none(value?: any): any;
		statics(): Ext.IClass
	}

	declare export class StoreManager  {
		all: any[];
		currentSortFn: any;
		dirtyFilterFn: boolean;
		dirtySortFn: boolean;
		filtered: boolean;
		indices: any;
		items: any[];
		keys: any[];
		length: number;
		map: any;
		self: Ext.IClass;
		sorted: boolean;
		add(key?: string, item?: any): any;
		addAll(addItems?: any): void;
		addFilter(filter?: any): void;
		addFilters(filters?: any): any;
		addSorter(sorter?: any, defaultDirection?: string): void;
		addSorters(sorters?: any[], defaultDirection?: string): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(): void;
		clone(): Ext.util.IMixedCollection;
		contains(item?: any): boolean;
		containsKey(key?: string): boolean;
		destroy(): void;
		each(fn?: any, scope?: any): void;
		eachKey(fn?: any, scope?: any): void;
		filter(property?: any, value?: any, anyMatch?: any, caseSensitive?: any): any[];
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection;
		findBy(fn?: any, scope?: any): any;
		findIndexBy(fn?: any, scope?: any, start?: number): number;
		findInsertionIndex(items?: any[], item?: any): number;
		first(): any;
		get(key?: any): any;
		getAt(index?: number): any;
		getAutoFilter(): boolean;
		getAutoSort(): boolean;
		getByKey(key?: any): any;
		getCount(): number;
		getDefaultSortDirection(): string;
		getFilterFn(): any;
		getFilterRoot(): string;
		getFilters(): any[];
		getInitialConfig(name?: string): any;
		getKey(o?: any): any;
		getRange(start?: number, end?: number): any[];
		getSortFn(): any;
		getSortRoot(): string;
		getSorters(): any[];
		indexOf(item?: any): number;
		indexOfKey(key?: string): number;
		initConfig(instanceConfig?: any): any;
		insert(index?: number, key?: string, item?: any): any;
		insertFilter(index?: number, filter?: any): any;
		insertFilters(index?: number, filters?: any[]): any[];
		insertSorter(index?: number, sorter?: any, defaultDirection?: string): void;
		insertSorters(): Ext.util.ICollection;
		last(): any;
		lookup(store?: any): Ext.data.IStore;
		register(stores: Ext.data.IStore): void;
		remove(item?: any): any;
		removeAll(items?: any[]): Ext.util.IMixedCollection;
		removeAt(index?: number): any;
		removeAtKey(key?: string): any;
		removeFilters(filters?: any): Ext.util.ICollection;
		removeSorter(sorter?: any): void;
		removeSorters(sorters?: any): Ext.util.ICollection;
		replace(oldKey?: string, item?: any): any;
		setAutoFilter(autoFilter?: boolean): void;
		setAutoSort(autoSort?: boolean): void;
		setDefaultSortDirection(defaultSortDirection?: string): void;
		setFilterRoot(filterRoot?: string): void;
		setFilters(filters?: any[]): void;
		setSortRoot(sortRoot?: string): void;
		setSorters(sorters?: any[]): void;
		sort(sorters?: any, defaultDirection?: any): any[];
		statics(): Ext.IClass;
		unregister(stores?: any): void
	}

	declare export class StoreMgr  {
		all: any[];
		currentSortFn: any;
		dirtyFilterFn: boolean;
		dirtySortFn: boolean;
		filtered: boolean;
		indices: any;
		items: any[];
		keys: any[];
		length: number;
		map: any;
		self: Ext.IClass;
		sorted: boolean;
		add(key?: string, item?: any): any;
		addAll(addItems?: any): void;
		addFilter(filter?: any): void;
		addFilters(filters?: any): any;
		addSorter(sorter?: any, defaultDirection?: string): void;
		addSorters(sorters?: any[], defaultDirection?: string): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clear(): void;
		clone(): Ext.util.IMixedCollection;
		contains(item?: any): boolean;
		containsKey(key?: string): boolean;
		destroy(): void;
		each(fn?: any, scope?: any): void;
		eachKey(fn?: any, scope?: any): void;
		filter(property?: any, value?: any, anyMatch?: any, caseSensitive?: any): any[];
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection;
		findBy(fn?: any, scope?: any): any;
		findIndexBy(fn?: any, scope?: any, start?: number): number;
		findInsertionIndex(items?: any[], item?: any): number;
		first(): any;
		get(key?: any): any;
		getAt(index?: number): any;
		getAutoFilter(): boolean;
		getAutoSort(): boolean;
		getByKey(key?: any): any;
		getCount(): number;
		getDefaultSortDirection(): string;
		getFilterFn(): any;
		getFilterRoot(): string;
		getFilters(): any[];
		getInitialConfig(name?: string): any;
		getKey(o?: any): any;
		getRange(start?: number, end?: number): any[];
		getSortFn(): any;
		getSortRoot(): string;
		getSorters(): any[];
		indexOf(item?: any): number;
		indexOfKey(key?: string): number;
		initConfig(instanceConfig?: any): any;
		insert(index?: number, key?: string, item?: any): any;
		insertFilter(index?: number, filter?: any): any;
		insertFilters(index?: number, filters?: any[]): any[];
		insertSorter(index?: number, sorter?: any, defaultDirection?: string): void;
		insertSorters(): Ext.util.ICollection;
		last(): any;
		lookup(store?: any): Ext.data.IStore;
		register(stores: Ext.data.IStore): void;
		remove(item?: any): any;
		removeAll(items?: any[]): Ext.util.IMixedCollection;
		removeAt(index?: number): any;
		removeAtKey(key?: string): any;
		removeFilters(filters?: any): Ext.util.ICollection;
		removeSorter(sorter?: any): void;
		removeSorters(sorters?: any): Ext.util.ICollection;
		replace(oldKey?: string, item?: any): any;
		setAutoFilter(autoFilter?: boolean): void;
		setAutoSort(autoSort?: boolean): void;
		setDefaultSortDirection(defaultSortDirection?: string): void;
		setFilterRoot(filterRoot?: string): void;
		setFilters(filters?: any[]): void;
		setSortRoot(sortRoot?: string): void;
		setSorters(sorters?: any[]): void;
		sort(sorters?: any, defaultDirection?: any): any[];
		statics(): Ext.IClass;
		unregister(stores?: any): void
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
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		statics(): Ext.IClass
	}

	declare export class Validations  {
		emailMessage: string;
		emailRe: RegExp;
		exclusionMessage: string;
		formatMessage: boolean;
		inclusionMessage: string;
		lengthMessage: string;
		presenceMessage: string;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		email(config?: any, email?: string): boolean;
		exclusion(config?: any, value?: string): boolean;
		format(config?: any, value?: string): boolean;
		getInitialConfig(name?: string): any;
		getMessage(type?: string): any;
		inclusion(config?: any, value?: string): boolean;
		initConfig(instanceConfig?: any): any;
		length(config?: any, value?: string): boolean;
		presence(config?: any, value?: any): boolean;
		statics(): Ext.IClass
	}

	
}

declare module 'association' {
		declare export interface IAssociation {
		associatedModel?: string,
		associatedName?: string,
		associationKey?: string,
		ownerModel?: any,
		primaryKey?: string,
		reader?: Ext.data.reader.IReader,
		type?: string,
		getAssociatedModel(): string,
		getAssociatedName(): string,
		getAssociationKey(): string,
		getName(): any,
		getOwnerModel(): any,
		getOwnerName(): string,
		getPrimaryKey(): string,
		getReader(): Ext.data.reader.IReader,
		getType(): string,
		setAssociatedModel(associatedModel?: string): void,
		setAssociatedName(associatedName?: string): void,
		setAssociationKey(associationKey?: string): void,
		setName(name?: any): void,
		setOwnerModel(ownerModel?: any): void,
		setOwnerName(ownerName?: string): void,
		setPrimaryKey(primaryKey?: string): void,
		setReader(reader?: Ext.data.reader.IReader): void,
		setType(type?: string): void
	}

	declare export interface IBelongsTo {
		foreignKey?: string,
		getterName?: string,
		setterName?: string,
		getForeignKey(): string,
		getGetterName(): string,
		getInstanceName(): any,
		getSetterName(): string,
		setForeignKey(foreignKey?: string): void,
		setGetterName(getterName?: string): void,
		setInstanceName(instanceName?: any): void,
		setSetterName(setterName?: string): void
	}

	declare export interface IHasMany {
		autoLoad?: boolean,
		autoSync?: boolean,
		filterProperty?: string,
		foreignKey?: string,
		name?: string,
		store?: any,
		storeConfig?: any,
		storeName?: string,
		getAutoLoad(): boolean,
		getAutoSync(): boolean,
		getFilterProperty(): string,
		getForeignKey(): string,
		getStore(): any,
		getStoreName(): string,
		setAutoLoad(autoLoad?: boolean): void,
		setAutoSync(autoSync?: boolean): void,
		setFilterProperty(filterProperty?: string): void,
		setForeignKey(foreignKey?: string): void,
		setStore(store?: any): void,
		setStoreName(storeName?: string): void
	}

	declare export interface IHasOne {
		foreignKey?: string,
		getterName?: string,
		setterName?: string,
		getForeignKey(): string,
		getGetterName(): string,
		getInstanceName(): any,
		getSetterName(): string,
		setForeignKey(foreignKey?: string): void,
		setGetterName(getterName?: string): void,
		setInstanceName(instanceName?: any): void,
		setSetterName(setterName?: string): void
	}

			
}

declare module 'identifier' {
		declare export interface ISequential {
		prefix?: string,
		seed?: number,
		getPrefix(): string,
		getSeed(): number,
		setPrefix(prefix?: string): void,
		setSeed(seed?: number): void
	}

	declare export interface ISimple {
		getPrefix(): string,
		setPrefix(prefix?: string): void
	}

	declare export interface IUuid {
		id?: any,
		version?: number,
		salt?: any,
		timestamp?: any,
		getId(): any,
		getVersion(): number,
		reconfigure(config?: any): void,
		setId(id?: any): void,
		setVersion(version?: number): void
	}

			
}

declare module 'util' {
		declare export interface IJSONP {
		
	}

	declare export interface IFunctions {
		
	}

	declare export interface IObservable {
		bubbleEvents?: any,
		listeners?: any,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getId(): any,
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IIndicator {
		
	}

	declare export interface IScrollView {
		indicatorsUi?: string,
		destroy(): void,
		getCls(): string,
		getElement(): any,
		getIndicators(): any,
		getIndicatorsHidingDelay(): number,
		getIndicatorsUi(): string,
		getScroller(): Ext.scroll.IView,
		setCls(cls?: string): void,
		setElement(element?: any): void,
		setIndicators(indicators?: any): void,
		setIndicatorsHidingDelay(indicatorsHidingDelay?: number): void,
		setIndicatorsUi(indicatorsUi?: string): void,
		setScroller(scroller?: any): void
	}

	declare export interface IAbstractMixedCollection {
		allowFunctions?: boolean,
		add(key?: string, obj?: any): any,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addAll(objs?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clear(): void,
		clearListeners(): void,
		clone(): Ext.util.IMixedCollection,
		collect(property?: string, root?: string, allowNull?: boolean): any[],
		contains(o?: any): boolean,
		containsKey(key?: string): boolean,
		destroy(): void,
		each(fn?: any, scope?: any): void,
		eachKey(fn?: any, scope?: any): void,
		enableBubble(events?: any): void,
		filter(
		property?: any, value?: any, anyMatch?: boolean, caseSensitive?: boolean
	): Ext.util.IMixedCollection,
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection,
		findBy(fn?: any, scope?: any): any,
		findIndex(
		property?: string, value?: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean
	): number,
		findIndexBy(fn?: any, scope?: any, start?: number): number,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		first(): any,
		get(key?: any): any,
		getAt(index?: number): any,
		getBubbleEvents(): any,
		getByKey(key?: any): any,
		getCount(): number,
		getKey(item?: any): any,
		getListeners(): any,
		getRange(start?: number, end?: number): any[],
		hasListener(eventName?: string): boolean,
		indexOf(o?: any): number,
		indexOfKey(key?: string): number,
		insert(index?: number, key?: string, obj?: any): any,
		last(): any,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		remove(o?: any): any,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeAll(items?: any[]): Ext.util.IMixedCollection,
		removeAt(index?: number): any,
		removeAtKey(key?: string): any,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		replace(key?: string, o?: any): any,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		sum(property?: string, root?: string, start?: number, end?: number): number,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface ICollection {
		filters?: any[],
		sorters?: any[],
		all?: any[],
		indices?: any,
		items?: any[],
		keys?: any[],
		length?: number,
		map?: any,
		add(key?: string, item?: any): any,
		addAll(addItems?: any): void,
		addFilter(filter?: any): void,
		addFilters(filters?: any): any,
		addSorter(sorter?: any, defaultDirection?: string): void,
		addSorters(sorters?: any[], defaultDirection?: string): void,
		clear(): void,
		clone(): Ext.util.IMixedCollection,
		contains(item?: any): boolean,
		containsKey(key?: string): boolean,
		destroy(): void,
		each(fn?: any, scope?: any): void,
		eachKey(fn?: any, scope?: any): void,
		filter(property?: any, value?: any, anyMatch?: any, caseSensitive?: any): any[],
		filterBy(fn?: any, scope?: any): Ext.util.IMixedCollection,
		findBy(fn?: any, scope?: any): any,
		findIndexBy(fn?: any, scope?: any, start?: number): number,
		findInsertionIndex(items?: any[], item?: any): number,
		first(): any,
		get(key?: any): any,
		getAt(index?: number): any,
		getAutoFilter(): boolean,
		getAutoSort(): boolean,
		getByKey(key?: any): any,
		getCount(): number,
		getDefaultSortDirection(): string,
		getFilterFn(): any,
		getFilterRoot(): string,
		getFilters(): any[],
		getKey(item?: any): any,
		getRange(start?: number, end?: number): any[],
		getSortFn(): any,
		getSortRoot(): string,
		getSorters(): any[],
		indexOf(item?: any): number,
		indexOfKey(key?: string): number,
		insert(index?: number, key?: string, item?: any): any,
		insertFilter(index?: number, filter?: any): any,
		insertFilters(index?: number, filters?: any[]): any[],
		insertSorter(index?: number, sorter?: any, defaultDirection?: string): void,
		insertSorters(): Ext.util.ICollection,
		last(): any,
		remove(item?: any): any,
		removeAll(items?: any[]): Ext.util.IMixedCollection,
		removeAt(index?: number): any,
		removeAtKey(key?: string): any,
		removeFilters(filters?: any): Ext.util.ICollection,
		removeSorter(sorter?: any): void,
		removeSorters(sorters?: any): Ext.util.ICollection,
		replace(oldKey?: string, item?: any): any,
		setAutoFilter(autoFilter?: boolean): void,
		setAutoSort(autoSort?: boolean): void,
		setDefaultSortDirection(defaultSortDirection?: string): void,
		setFilterRoot(filterRoot?: string): void,
		setFilters(filters?: any[]): void,
		setSortRoot(sortRoot?: string): void,
		setSorters(sorters?: any[]): void,
		sort(sorters?: any, defaultDirection?: any): any[]
	}

	declare export interface IDelayedTask {
		cancel(): void,
		delay(delay?: number, newFn?: any, newScope?: any, newArgs?: any[]): void,
		getArgs(): any,
		getDelay(): any,
		getFn(): any,
		getInterval(): any,
		getScope(): any,
		setArgs(args?: any): void,
		setDelay(delay?: any): void,
		setFn(fn?: any): void,
		setInterval(interval?: any): void,
		setScope(scope?: any): void
	}

	declare export interface IDraggable {
		direction?: string,
		initialOffset?: any,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		disable(): Ext.util.IDraggable,
		enable(): Ext.util.IDraggable,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getCls(): string,
		getConstraint(): string,
		getDirection(): string,
		getDisabled(): any,
		getDraggingCls(): string,
		getElement(): any,
		getInitialOffset(): any,
		getListeners(): any,
		getTranslatable(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setCls(cls?: string): void,
		setConstraint(constraint?: string): void,
		setDirection(direction?: string): void,
		setDisabled(disabled?: any): void,
		setDraggingCls(draggingCls?: string): void,
		setElement(element?: any): void,
		setInitialOffset(initialOffset?: any): void,
		setListeners(listeners?: any): void,
		setTranslatable(translatable?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IDroppable {
		activeCls?: string,
		baseCls?: string,
		disabled?: boolean,
		group?: string,
		hoverCls?: string,
		invalidCls?: string,
		validDropMode?: string,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		disable(): void,
		enable(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBaseCls(): string,
		getBubbleEvents(): any,
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		isDisabled(): boolean,
		isMonitoring(): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBaseCls(baseCls?: string): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IFilter {
		anyMatch?: boolean,
		caseSensitive?: boolean,
		exactMatch?: boolean,
		filterFn?: any,
		id?: string,
		property?: string,
		root?: string,
		scope?: any,
		value?: any,
		getAnyMatch(): boolean,
		getCaseSensitive(): boolean,
		getExactMatch(): boolean,
		getFilterFn(): any,
		getId(): string,
		getProperty(): string,
		getRoot(): string,
		getScope(): any,
		getValue(): any,
		setAnyMatch(anyMatch?: boolean): void,
		setCaseSensitive(caseSensitive?: boolean): void,
		setExactMatch(exactMatch?: boolean): void,
		setFilterFn(filterFn?: any): void,
		setId(id?: string): void,
		setProperty(property?: string): void,
		setRoot(root?: string): void,
		setScope(scope?: any): void,
		setValue(value?: any): void
	}

	declare export interface IFormat {
		
	}

	declare export interface IGeolocation {
		allowHighAccuracy?: boolean,
		autoUpdate?: boolean,
		frequency?: number,
		maximumAge?: number,
		timeout?: number,
		accuracy?: number,
		altitude?: number,
		altitudeAccuracy?: number,
		heading?: number,
		latitude?: number,
		longitude?: number,
		speed?: number,
		timestamp?: any,
		destroy(): void,
		getAllowHighAccuracy(): boolean,
		getAutoUpdate(): boolean,
		getFrequency(): number,
		getMaximumAge(): number,
		getTimeout(): number,
		setAllowHighAccuracy(allowHighAccuracy?: boolean): void,
		setAutoUpdate(autoUpdate?: boolean): void,
		setFrequency(frequency?: number): void,
		setMaximumAge(maximumAge?: number): void,
		setTimeout(timeout?: number): void,
		updateLocation(callback?: any, scope?: any): void
	}

	declare export interface IGrouper {
		groupFn?: any,
		sortProperty?: string,
		sorterFn?: any,
		getGroupFn(): any,
		getSortProperty(): string,
		getSorterFn(): any,
		setGroupFn(groupFn?: any): void,
		setSortProperty(sortProperty?: string): void,
		setSorterFn(sorterFn?: any): void
	}

	declare export interface IHashMap {
		keyFn?: any,
		add(key?: string, value?: any): any,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clear(initial?: any): Ext.util.IHashMap,
		clearListeners(): void,
		clone(): Ext.util.IHashMap,
		contains(value?: any): boolean,
		containsKey(key?: string): boolean,
		destroy(): void,
		each(fn?: any, scope?: any): Ext.util.IHashMap,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		get(key?: string): any,
		getBubbleEvents(): any,
		getCount(): number,
		getKeys(): any[],
		getListeners(): any,
		getValues(): any[],
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		remove(o?: any): boolean,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeByKey(key?: string): boolean,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		replace(key?: string, value?: any): any,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IInflector {
		
	}

	declare export interface IInputBlocker {
		
	}

	declare export interface ILineSegment {
		intersects(lineSegment?: Ext.util.ILineSegment): Ext.util.IPoint,
		toString(): string
	}

	declare export interface IMixedCollection {
		destroy(): void,
		initSortable(): void,
		reorder(mapping?: any): void,
		sort(
		sorters?: any, direction?: string, where?: string, doSort?: boolean
	): Ext.util.ISorter[],
		sortBy(sorterFn?: any): void,
		sortByKey(dir?: string, fn?: any): void
	}

	declare export interface IOffset {
		
	}

	declare export interface IPaintMonitor {
		
	}

	declare export interface IPoint {
		clone(): Ext.util.IPoint,
		copy(): Ext.util.IPoint,
		copyFrom(point?: any): Ext.util.IPoint,
		equals(point?: any): boolean,
		isCloseTo(point?: any, threshold?: any): boolean,
		isWithin(): boolean,
		roundedEquals(point?: any): boolean,
		toString(): string,
		translate(x?: number, y?: number): boolean
	}

	declare export interface IPositionMap {
		getMinimumHeight(): number,
		setMinimumHeight(minimumHeight?: number): void
	}

	declare export interface IRegion {
		adjust(top?: number, right?: number, bottom?: number, left?: number): Ext.util.IRegion,
		constrainTo(targetRegion?: Ext.util.IRegion): Ext.util.IRegion,
		contains(region?: Ext.util.IRegion): boolean,
		copy(): Ext.util.IRegion,
		equals(region?: Ext.util.IRegion): boolean,
		getOutOfBoundOffset(axis?: any, p?: Ext.util.IPoint): Ext.util.IRegion,
		getOutOfBoundOffsetX(p?: number): number,
		getOutOfBoundOffsetY(p?: number): number,
		intersect(region?: Ext.util.IRegion): any,
		isOutOfBound(axis?: string, p?: any): boolean,
		isOutOfBoundX(p?: number): boolean,
		isOutOfBoundY(p?: number): boolean,
		round(): Ext.util.IRegion,
		toString(): string,
		translateBy(offset?: any): Ext.util.IRegion,
		union(region?: Ext.util.IRegion): Ext.util.IRegion
	}

	declare export interface ISizeMonitor {
		
	}

	declare export interface ISortable {
		defaultSortDirection?: string,
		isSortable?: boolean,
		sortRoot?: string,
		sorters?: Ext.util.IMixedCollection,
		destroy(): void,
		initSortable(): void,
		sort(
		sorters?: any, direction?: string, where?: string, doSort?: boolean
	): Ext.util.ISorter[]
	}

	declare export interface ISorter {
		direction?: string,
		id?: any,
		property?: string,
		root?: string,
		sorterFn?: any,
		transform?: any,
		getDirection(): string,
		getId(): any,
		getProperty(): string,
		getRoot(): string,
		getSorterFn(): any,
		getTransform(): any,
		setDirection(direction?: string): void,
		setId(id?: any): void,
		setProperty(property?: string): void,
		setRoot(root?: string): void,
		setSorterFn(sorterFn?: any): void,
		setTransform(transform?: any): void,
		toggle(): void
	}

	declare export interface ITapRepeater {
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getAccelerate(): boolean,
		getBubbleEvents(): any,
		getDelay(): number,
		getEl(): any,
		getInterval(): number,
		getListeners(): any,
		getPressCls(): any,
		getPreventDefault(): boolean,
		getStopDefault(): boolean,
		getTimer(): number,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setAccelerate(accelerate?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setDelay(delay?: number): void,
		setEl(el?: any): void,
		setInterval(interval?: number): void,
		setListeners(listeners?: any): void,
		setPressCls(pressCls?: any): void,
		setPreventDefault(preventDefault?: boolean): void,
		setStopDefault(stopDefault?: boolean): void,
		setTimer(timer?: number): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface ITranslatable {
		
	}

	declare export interface ITranslatableGroup {
		getActiveIndex(): number,
		getItemLength(): any,
		getItems(): any[],
		setActiveIndex(activeIndex?: number): void,
		setItemLength(itemLength?: any): void,
		setItems(items?: any[]): void
	}

	declare export interface ITranslatableList {
		getItems(): any[],
		setItems(items?: any[]): void
	}

	declare export interface IWrapper {
		destroy(): void
	}

		declare export class JSONP  {
		callbackKey: string;
		disableCaching: boolean;
		disableCachingParam: string;
		self: Ext.IClass;
		timeout: number;
		abort(request?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		request(options?: any): any;
		statics(): Ext.IClass
	}

	declare export class Functions  {
		alias(object?: any, methodName?: string): any;
		bind(fn?: any, scope?: any, args?: any[], appendArgs?: any): any;
		clone(method?: any): any;
		createBuffered(fn?: any, buffer?: number, scope?: any, args?: any[]): any;
		createDelayed(fn?: any, delay?: number, scope?: any, args?: any[], appendArgs?: any): any;
		createDelegate(fn?: any, scope?: any, args?: any[], appendArgs?: any): any;
		createInterceptor(origFn?: any, newFn?: any, scope?: any, returnValue?: any): any;
		createSequence(originalFn?: any, newFn?: any, scope?: any): any;
		createThrottled(fn?: any, interval?: number, scope?: any): any;
		defer(fn?: any, millis?: number, scope?: any, args?: any[], appendArgs?: any): number;
		flexSetter(fn?: any): any;
		pass(fn?: any, args?: any[], scope?: any): any
	}

	declare export class Format  {
		defaultDateFormat: string;
		potentialUndefinedKeys: any[];
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		date(value?: any, format?: string): string;
		destroy(): void;
		ellipsis(value?: string, length?: number, word?: boolean): string;
		escape(string?: string): string;
		escapeRegex(str?: string): string;
		format(string: string, ...values: any[]): string;
		getInitialConfig(name?: string): any;
		htmlDecode(value?: string): string;
		htmlEncode(value?: string): string;
		initConfig(instanceConfig?: any): any;
		leftPad(string?: string, size?: number, char?: string): string;
		statics(): Ext.IClass;
		toggle(string?: string, value?: string, other?: string): string;
		trim(string?: string): string
	}

	declare export class Inflector  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		classify(word?: string): string;
		clearPlurals(): void;
		clearSingulars(): void;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		isTransnumeral(word?: string): boolean;
		ordinalize(number?: number): string;
		plural(matcher?: RegExp, replacer?: string): void;
		pluralize(word?: string): string;
		singular(matcher?: RegExp, replacer?: string): void;
		singularize(word?: string): string;
		statics(): Ext.IClass
	}

	declare export class Point  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		from(object?: any): Ext.util.IPoint;
		fromEvent(e?: Event): Ext.util.IPoint;
		fromTouch(touch?: Event): Ext.util.IPoint;
		getName(): string;
		override(members?: any): Ext.IBase
	}

	declare export class Region  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		from(o?: any): Ext.util.IRegion;
		getName(): string;
		getRegion(el?: any): Ext.util.IRegion;
		override(members?: any): Ext.IBase
	}

	
}

declare module 'proxy' {
		declare export interface IAjax {
		headers?: any,
		password?: string,
		useDefaultXhrHeader?: boolean,
		username?: string,
		withCredentials?: boolean,
		actionMethods?: any,
		doRequest(operation?: any, callback?: any, scope?: any): any,
		getHeaders(): any,
		getMethod(request?: Ext.data.IRequest): string,
		getPassword(): string,
		getUseDefaultXhrHeader(): boolean,
		getUsername(): string,
		getWithCredentials(): boolean,
		setHeaders(headers?: any): void,
		setPassword(password?: string): void,
		setUseDefaultXhrHeader(useDefaultXhrHeader?: boolean): void,
		setUsername(username?: string): void,
		setWithCredentials(withCredentials?: boolean): void
	}

	declare export interface IClient {
		clear(): void
	}

	declare export interface IClientProxy {
		clear(): void
	}

	declare export interface IDirect {
		api?: any,
		directFn?: any,
		extraParams?: any,
		paramOrder?: any,
		paramsAsHash?: boolean,
		buildUrl(): string,
		doRequest(operation?: any, callback?: any, scope?: any): void,
		getApi(): any,
		getDirectFn(): any,
		getExtraParams(): any,
		getParamOrder(): any,
		getParamsAsHash(): boolean,
		setApi(api?: any): void,
		setDirectFn(directFn?: any): void,
		setExtraParams(extraParams?: any): void,
		setParamOrder(paramOrder?: any): void,
		setParamsAsHash(paramsAsHash?: boolean): void
	}

	declare export interface IJsonP {
		autoAppendParams?: boolean,
		callbackKey?: string,
		recordParam?: string,
		abort(): void,
		buildUrl(request?: Ext.data.IRequest): string,
		destroy(): void,
		doRequest(operation?: Ext.data.IOperation, callback?: any, scope?: any): any,
		getAutoAppendParams(): boolean,
		getCallbackKey(): string,
		getDefaultWriterType(): string,
		getRecordParam(): string,
		setAutoAppendParams(autoAppendParams?: boolean): void,
		setCallbackKey(callbackKey?: string): void,
		setDefaultWriterType(defaultWriterType?: string): void,
		setRecordParam(recordParam?: string): void
	}

	declare export interface ILocalStorage {
		
	}

	declare export interface IMemory {
		data?: any,
		clear(): void,
		create(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		destroy(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		getData(): any,
		read(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		setData(data?: any): void,
		update(operation?: Ext.data.IOperation, callback?: any, scope?: any): void
	}

	declare export interface IProxy {
		batchActions?: boolean,
		batchOrder?: string,
		model?: any,
		reader?: any,
		writer?: any,
		batch(options?: any): Ext.data.IBatch,
		create(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		destroy(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		getBatchActions(): boolean,
		getBatchOrder(): string,
		getModel(): any,
		getReader(): any,
		getWriter(): any,
		read(operation?: Ext.data.IOperation, callback?: any, scope?: any): void,
		setBatchActions(batchActions?: boolean): void,
		setBatchOrder(batchOrder?: string): void,
		setModel(model?: any): void,
		setReader(reader?: any): void,
		setWriter(writer?: any): void,
		update(operation?: Ext.data.IOperation, callback?: any, scope?: any): void
	}

	declare export interface IRest {
		appendId?: boolean,
		batchActions?: boolean,
		format?: string,
		getActionMethods(): any,
		getAppendId(): boolean,
		getBatchActions(): boolean,
		getFormat(): string,
		setActionMethods(actionMethods?: any): void,
		setAppendId(appendId?: boolean): void,
		setBatchActions(batchActions?: boolean): void,
		setFormat(format?: string): void
	}

	declare export interface IServer {
		api?: any,
		cacheString?: string,
		directionParam?: string,
		enablePagingParams?: boolean,
		extraParams?: any,
		filterParam?: string,
		groupParam?: string,
		limitParam?: string,
		noCache?: boolean,
		pageParam?: string,
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
		getApi(): any,
		getCacheString(): string,
		getDirectionParam(): string,
		getEnablePagingParams(): boolean,
		getExtraParams(): any,
		getFilterParam(): string,
		getGroupParam(): string,
		getLimitParam(): string,
		getNoCache(): boolean,
		getPageParam(): string,
		getSimpleSortMode(): boolean,
		getSortParam(): string,
		getStartParam(): string,
		getTimeout(): number,
		processResponse(
		success?: boolean, operation?: Ext.data.IOperation, request?: Ext.data.IRequest, response?: any, callback?: any, scope?: any
	): void,
		read(): void,
		setApi(api?: any): void,
		setCacheString(cacheString?: string): void,
		setDirectionParam(directionParam?: string): void,
		setEnablePagingParams(enablePagingParams?: boolean): void,
		setExtraParam(name?: string, value?: any): void,
		setExtraParams(extraParams?: any): void,
		setFilterParam(filterParam?: string): void,
		setGroupParam(groupParam?: string): void,
		setLimitParam(limitParam?: string): void,
		setNoCache(noCache?: boolean): void,
		setPageParam(pageParam?: string): void,
		setSimpleSortMode(simpleSortMode?: boolean): void,
		setSortParam(sortParam?: string): void,
		setStartParam(startParam?: string): void,
		setTimeout(timeout?: number): void,
		setUrl(url?: string): void,
		update(): void
	}

	declare export interface ISessionStorage {
		
	}

	declare export interface ISql {
		database?: string,
		table?: string,
		create(operation?: any, callback?: any, scope?: any): void,
		destroy(operation?: any, callback?: any, scope?: any): void,
		getColumns(): string,
		getDatabase(): string,
		getDefaultDateFormat(): string,
		getRecordData(record?: any): any,
		getTable(): string,
		getTableExists(): boolean,
		getUniqueIdStrategy(): boolean,
		read(operation?: any, callback?: any, scope?: any): void,
		setColumns(columns?: string): void,
		setDatabase(database?: string): void,
		setDefaultDateFormat(defaultDateFormat?: string): void,
		setTable(table?: string): void,
		setTableExists(tableExists?: boolean): void,
		setUniqueIdStrategy(uniqueIdStrategy?: boolean): void,
		update(operation?: any, callback?: any, scope?: any): void
	}

	declare export interface IWebStorage {
		enablePagingParams?: boolean,
		id?: string,
		cache?: any,
		clear(): void,
		create(operation?: any, callback?: any, scope?: any): void,
		destroy(operation?: any, callback?: any, scope?: any): void,
		getDefaultDateFormat(): string,
		getEnablePagingParams(): boolean,
		getId(): string,
		read(operation?: any, callback?: any, scope?: any): void,
		setDefaultDateFormat(defaultDateFormat?: string): void,
		setEnablePagingParams(enablePagingParams?: boolean): void,
		setId(id?: string): void,
		setRecord(record?: Ext.data.IModel, id?: string): void,
		update(operation?: any, callback?: any, scope?: any): void
	}

			
}

declare module 'reader' {
		declare export interface IArray {
		successProperty?: string,
		totalProperty?: string,
		getSuccessProperty(): any,
		getTotalProperty(): any,
		setSuccessProperty(successProperty?: any): void,
		setTotalProperty(totalProperty?: any): void
	}

	declare export interface IJson {
		record?: string,
		useSimpleAccessors?: boolean,
		getRecord(): string,
		getResponseData(response?: any): any,
		getUseSimpleAccessors(): boolean,
		setRecord(record?: string): void,
		setUseSimpleAccessors(useSimpleAccessors?: boolean): void
	}

	declare export interface IReader {
		clientIdProperty?: string,
		idProperty?: string,
		implicitIncludes?: boolean,
		messageProperty?: string,
		root?: string,
		rootProperty?: string,
		successProperty?: string,
		totalProperty?: string,
		metaData?: any,
		rawData?: any,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getClientIdProperty(): string,
		getIdProperty(): string,
		getImplicitIncludes(): boolean,
		getListeners(): any,
		getMessageProperty(): string,
		getModel(): any,
		getResponseData(response?: any): any,
		getRootProperty(): string,
		getSuccessProperty(): any,
		getTotalProperty(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		read(response?: any): Ext.data.IResultSet,
		readRecords(data?: any): Ext.data.IResultSet,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setClientIdProperty(clientIdProperty?: string): void,
		setIdProperty(idProperty?: string): void,
		setImplicitIncludes(implicitIncludes?: boolean): void,
		setListeners(listeners?: any): void,
		setMessageProperty(messageProperty?: string): void,
		setModel(model?: any): void,
		setRootProperty(rootProperty?: string): void,
		setSuccessProperty(successProperty?: string): void,
		setTotalProperty(totalProperty?: string): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IXml {
		record?: string,
		getData(data?: any): any,
		getRecord(): string,
		getResponseData(response?: any): any,
		readRecords(doc?: any): Ext.data.IResultSet,
		setRecord(record?: string): void
	}

			
}

declare module 'writer' {
		declare export interface IJson {
		allowSingle?: boolean,
		encode?: boolean,
		root?: string,
		rootProperty?: string,
		getAllowSingle(): boolean,
		getEncode(): boolean,
		getEncodeRequest(): boolean,
		getRootProperty(): string,
		setAllowSingle(allowSingle?: boolean): void,
		setEncode(encode?: boolean): void,
		setEncodeRequest(encodeRequest?: boolean): void,
		setRootProperty(rootProperty?: string): void
	}

	declare export interface IWriter {
		nameProperty?: string,
		writeAllFields?: boolean,
		getNameProperty(): string,
		getRecordData(record?: any): any,
		getWriteAllFields(): boolean,
		setNameProperty(nameProperty?: string): void,
		setWriteAllFields(writeAllFields?: boolean): void,
		write(request?: Ext.data.IRequest): Ext.data.IRequest
	}

	declare export interface IXml {
		defaultDocumentRoot?: string,
		documentRoot?: string,
		header?: string,
		record?: string,
		getDefaultDocumentRoot(): string,
		getDocumentRoot(): string,
		getHeader(): string,
		getRecord(): string,
		setDefaultDocumentRoot(defaultDocumentRoot?: string): void,
		setDocumentRoot(documentRoot?: string): void,
		setHeader(header?: string): void,
		setRecord(record?: string): void,
		writeRecords(request?: any, data?: any): any
	}

			
}

declare module 'component' {
		declare export interface IContainer {
		destroy(): void
	}

	declare export interface IDataItem {
		baseCls?: string,
		dataMap?: any,
		defaultType?: string,
		itemCls?: string,
		items?: any,
		record?: Ext.data.IModel,
		width?: any,
		getBaseCls(): string,
		getDataMap(): any,
		getDefaultType(): string,
		getItemCls(): string,
		getItems(): any[],
		getRecord(): Ext.data.IModel,
		setBaseCls(baseCls?: string): void,
		setDataMap(dataMap?: any): void,
		setDefaultType(defaultType?: string): void,
		setItemCls(itemCls?: string): void,
		setItems(items?: any[]): void,
		setRecord(record?: Ext.data.IModel): void,
		setWidth(width?: string): void
	}

	declare export interface IListItem {
		baseCls?: string,
		dataMap?: any,
		items?: any,
		tpl?: any,
		destroy(): void,
		getBaseCls(): string,
		getBody(): any,
		getDataMap(): any,
		getDisclosure(): any,
		getHeader(): any,
		setBaseCls(baseCls?: string): void,
		setBody(body?: any): void,
		setDataMap(dataMap?: any): void,
		setDisclosure(disclosure?: any): void,
		setHeader(header?: any): void,
		setItems(items?: any): void,
		setTpl(tpl?: any): void
	}

	declare export interface ISimpleListItem {
		baseCls?: string,
		record?: Ext.data.IModel,
		destroy(): void,
		getBaseCls(): string,
		getDisclosure(): any,
		getHeader(): any,
		getRecord(): Ext.data.IModel,
		initialize(): void,
		setBaseCls(baseCls?: string): void,
		setDisclosure(disclosure?: any): void,
		setHeader(header?: any): void,
		setRecord(record?: Ext.data.IModel): void
	}

			
}

declare module 'dataview' {
		declare export interface IDataView {
		baseCls?: string,
		blockRefresh?: boolean,
		data?: any[],
		defaultType?: string,
		deferEmptyText?: boolean,
		deselectOnContainerClick?: boolean,
		emptyText?: string,
		inline?: any,
		itemCls?: string,
		itemConfig?: any,
		itemSelector?: boolean,
		itemTpl?: any,
		loadingText?: string,
		maxItemCache?: number,
		multiSelect?: boolean,
		overItemCls?: boolean,
		pressedCls?: string,
		pressedDelay?: number,
		scrollToTopOnRefresh?: boolean,
		scrollable?: any,
		selectedCls?: string,
		selectedItemCls?: boolean,
		simpleSelect?: boolean,
		singleSelect?: boolean,
		store?: any,
		trackOver?: boolean,
		triggerCtEvent?: string,
		triggerEvent?: string,
		useComponents?: boolean,
		bindStore(): void,
		clearSelections(): void,
		collectData(): void,
		deselect(records?: any, suppressEvent?: boolean): void,
		deselectAll(supress?: any): void,
		destroy(): void,
		doDeselect(records?: any, suppressEvent?: boolean): void,
		doSelect(records?: any, keepExisting?: boolean, suppressEvent?: boolean): void,
		findItemByChild(): void,
		findTargetByEvent(): void,
		getAllowDeselect(): boolean,
		getBaseCls(): string,
		getCount(): number,
		getData(): any[],
		getDefaultType(): string,
		getDeferEmptyText(): boolean,
		getDeselectOnContainerClick(): boolean,
		getDisableSelection(): boolean,
		getEmptyText(): string,
		getInline(): any,
		getItemAt(index?: number): any,
		getItemCls(): string,
		getItemConfig(): any,
		getItemIndex(item?: number): number,
		getItemTpl(): any,
		getLastSelected(): any[],
		getLoadingText(): string,
		getMaxItemCache(): number,
		getMode(): string,
		getNode(): void,
		getNodes(): void,
		getPressedCls(): string,
		getPressedDelay(): number,
		getRecords(): void,
		getScrollToTopOnRefresh(): boolean,
		getScrollable(): boolean,
		getSelectedCls(): string,
		getSelectedNodes(): void,
		getSelectedRecords(): void,
		getSelection(): any[],
		getSelectionCount(): number,
		getSelectionMode(): string,
		getStore(): any,
		getTriggerCtEvent(): string,
		getTriggerEvent(): string,
		getUseComponents(): boolean,
		getViewItems(): any,
		handleException(): void,
		hasSelection(): boolean,
		indexOf(): void,
		initialize(): void,
		isLocked(): boolean,
		isSelected(record?: any): boolean,
		prepareData(data?: any, index?: number, record?: Ext.data.IModel): any,
		refresh(): void,
		refreshNode(): void,
		select(records?: any, keepExisting?: boolean, suppressEvent?: boolean): void,
		selectAll(silent?: boolean): void,
		selectRange(startRecord?: number, endRecord?: number, keepExisting?: boolean): void,
		setAllowDeselect(allowDeselect?: boolean): void,
		setBaseCls(baseCls?: string): void,
		setData(data?: any[]): void,
		setDefaultType(defaultType?: string): void,
		setDeferEmptyText(deferEmptyText?: boolean): void,
		setDeselectOnContainerClick(deselectOnContainerClick?: boolean): void,
		setDisableSelection(disableSelection?: boolean): void,
		setEmptyText(emptyText?: string): void,
		setInline(inline?: any): void,
		setItemCls(itemCls?: string): void,
		setItemConfig(itemConfig?: any): void,
		setItemTpl(itemTpl?: any): void,
		setLastFocused(): void,
		setLoadingText(loadingText?: string): void,
		setMaxItemCache(maxItemCache?: number): void,
		setMode(mode?: string): void,
		setPressedCls(pressedCls?: string): void,
		setPressedDelay(pressedDelay?: number): void,
		setScrollToTopOnRefresh(scrollToTopOnRefresh?: boolean): void,
		setScrollable(scrollable?: boolean): void,
		setSelectedCls(selectedCls?: string): void,
		setStore(store?: any): void,
		setTriggerCtEvent(triggerCtEvent?: string): void,
		setTriggerEvent(triggerEvent?: string): void,
		setUseComponents(useComponents?: boolean): void,
		updateLastFocused(newRecord?: Ext.data.IRecord, oldRecord?: Ext.data.IRecord): void
	}

	declare export interface IIndexBar {
		alphabet?: boolean,
		baseCls?: string,
		direction?: string,
		itemSelector?: boolean,
		letters?: any[],
		listPrefix?: string,
		store?: boolean,
		ui?: string,
		destroy(): void,
		getBaseCls(): string,
		getDirection(): string,
		getLetters(): any[],
		getListPrefix(): string,
		getUi(): string,
		isHorizontal(): void,
		isVertical(): void,
		refresh(): void,
		setBaseCls(baseCls?: string): void,
		setDirection(direction?: string): void,
		setLetters(letters?: any[]): void,
		setListPrefix(listPrefix?: string): void,
		setUi(ui?: string): void
	}

	declare export interface IList {
		baseCls?: string,
		defaultType?: string,
		disclosureProperty?: string,
		grouped?: boolean,
		indexBar?: any,
		infinite?: boolean,
		itemHeight?: number,
		onItemDisclosure?: any,
		pinHeaders?: boolean,
		preventSelectionOnDisclose?: boolean,
		refreshHeightOnUpdate?: boolean,
		scrollable?: any,
		striped?: boolean,
		ui?: string,
		useSimpleItems?: boolean,
		variableHeights?: boolean,
		getBaseCls(): string,
		getDefaultType(): string,
		getDisclosureProperty(): string,
		getGrouped(): boolean,
		getIcon(): any,
		getIndexBar(): any,
		getInfinite(): boolean,
		getItemAt(index?: number): any,
		getItemHeight(): number,
		getItemIndex(item?: number): number,
		getOnItemDisclosure(): any,
		getPinHeaders(): boolean,
		getPreventSelectionOnDisclose(): boolean,
		getRefreshHeightOnUpdate(): boolean,
		getScrollDockedItems(): any[],
		getStriped(): boolean,
		getUi(): string,
		getUseSimpleItems(): boolean,
		getVariableHeights(): boolean,
		getViewItems(): any,
		initialize(): void,
		setBaseCls(baseCls?: string): void,
		setDefaultType(defaultType?: string): void,
		setDisclosureProperty(disclosureProperty?: string): void,
		setGrouped(grouped?: boolean): void,
		setIcon(icon?: any): void,
		setIndexBar(indexBar?: any): void,
		setInfinite(infinite?: boolean): void,
		setItemHeight(itemHeight?: number): void,
		setOnItemDisclosure(onItemDisclosure?: any): void,
		setPinHeaders(pinHeaders?: boolean): void,
		setPreventSelectionOnDisclose(preventSelectionOnDisclose?: boolean): void,
		setRefreshHeightOnUpdate(refreshHeightOnUpdate?: boolean): void,
		setScrollable(scrollable?: any): void,
		setStriped(striped?: boolean): void,
		setUi(ui?: string): void,
		setUseSimpleItems(useSimpleItems?: boolean): void,
		setVariableHeights(variableHeights?: boolean): void
	}

	declare export interface IListItemHeader {
		baseCls?: string,
		docked?: string,
		getBaseCls(): string,
		getDocked(): string,
		setBaseCls(baseCls?: string): void,
		setDocked(docked?: string): void
	}

	declare export interface INestedList {
		allowDeselect?: boolean,
		backButton?: any,
		backText?: string,
		baseCls?: string,
		cardSwitchAnimation?: any,
		clearSelectionDelay?: number,
		detailCard?: Ext.IComponent,
		detailContainer?: Ext.IContainer,
		displayField?: string,
		emptyText?: string,
		itemHeight?: number,
		listConfig?: any,
		loadingText?: string,
		onItemDisclosure?: any,
		store?: any,
		title?: string,
		toolbar?: any,
		ui?: string,
		updateTitleText?: boolean,
		useSimpleItems?: boolean,
		useTitleAsBackText?: boolean,
		useToolbar?: boolean,
		variableHeights?: boolean,
		getAllowDeselect(): boolean,
		getBackButton(): any,
		getBackText(): string,
		getBaseCls(): string,
		getDetailCard(): Ext.IComponent,
		getDetailContainer(): Ext.IContainer,
		getDisplayField(): string,
		getEmptyText(): string,
		getItemHeight(): number,
		getItemTextTpl(node?: Ext.data.IRecord): string,
		getListConfig(): any,
		getLoadingText(): string,
		getOnItemDisclosure(): any,
		getStore(): any,
		getSubList(): void,
		getTitle(): string,
		getTitleTextTpl(node?: Ext.data.IRecord): string,
		getToolbar(): any,
		getUpdateTitleText(): boolean,
		getUseSimpleItems(): boolean,
		getUseTitleAsBackText(): boolean,
		getUseToolbar(): boolean,
		getVariableHeights(): boolean,
		goToLeaf(node?: Ext.data.INodeInterface): void,
		goToNode(node?: Ext.data.INodeInterface): void,
		onBackTap(): void,
		onItemTap(
		list?: Ext.IList, index?: number, target?: Ext.IElement, record?: Ext.data.IRecord, e?: Ext.event.IEvent
	): void,
		setAllowDeselect(allowDeselect?: boolean): void,
		setBackButton(backButton?: any): void,
		setBackText(backText?: string): void,
		setBaseCls(baseCls?: string): void,
		setDetailCard(detailCard?: Ext.IComponent): void,
		setDetailContainer(detailContainer?: Ext.IContainer): void,
		setDisplayField(displayField?: string): void,
		setEmptyText(emptyText?: string): void,
		setItemHeight(itemHeight?: number): void,
		setListConfig(listConfig?: any): void,
		setLoadingText(loadingText?: string): void,
		setOnItemDisclosure(onItemDisclosure?: any): void,
		setStore(store?: any): void,
		setTitle(title?: string): void,
		setToolbar(toolbar?: any): void,
		setUi(ui?: any): void,
		setUpdateTitleText(updateTitleText?: boolean): void,
		setUseSimpleItems(useSimpleItems?: boolean): void,
		setUseTitleAsBackText(useTitleAsBackText?: boolean): void,
		setUseToolbar(useToolbar?: boolean): void,
		setVariableHeights(variableHeights?: boolean): void
	}

			
}

declare module 'element' {
		declare export interface IContainer {
		destroy(): void
	}

	declare export interface IList {
		destroy(): void
	}

			
}

declare module 'camera' {
		declare export interface IAbstract {
		capture(
		options?: any, scope?: any, destination?: string, encoding?: string, width?: number, height?: number
	): void
	}

	declare export interface IPhoneGap {
		capture(args?: any): void
	}

	declare export interface ISencha {
		capture(options?: any): void
	}

	declare export interface ISimulator {
		capture(options?: any): void,
		getSamples(): any[],
		setSamples(samples?: any[]): void
	}

			
}

declare module 'device' {
		declare export interface ICamera {
		
	}

	declare export interface ICommunicator {
		
	}

	declare export interface IConnection {
		
	}

	declare export interface IContacts {
		
	}

	declare export interface IAbstract {
		name?: string,
		platform?: string,
		scheme?: any,
		uuid?: string,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		openURL(url?: string): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IDevice {
		
	}

	declare export interface IPhoneGap {
		
	}

	declare export interface ISencha {
		openURL(url?: any): void
	}

	declare export interface ISimulator {
		
	}

	declare export interface IGeolocation {
		
	}

	declare export interface INotification {
		
	}

	declare export interface IOrientation {
		
	}

	declare export interface IPurchases {
		
	}

	declare export interface IPush {
		
	}

	declare export interface ISQLite {
		
	}

		declare export class Camera  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		capture(
		options?: any, scope?: any, destination?: string, encoding?: string, width?: number, height?: number
	): void;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		statics(): Ext.IClass
	}

	declare export class Communicator  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		statics(): Ext.IClass
	}

	declare export class Connection  {
		CELL_2G: string;
		CELL_3G: string;
		CELL_4G: string;
		ETHERNET: string;
		NONE: string;
		UNKNOWN: string;
		WIFI: string;
		self: Ext.IClass;
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		destroy(): void;
		enableBubble(events?: any): void;
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any;
		fireEvent(eventName: string, ...args: any[]): boolean;
		getBubbleEvents(): any;
		getId(): string;
		getInitialConfig(name?: string): any;
		getListeners(): any;
		getOnline(): boolean;
		getType(): string;
		hasListener(eventName?: string): boolean;
		initConfig(instanceConfig?: any): any;
		isOnline(): boolean;
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable;
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void;
		resumeEvents(discardQueuedEvents?: boolean): void;
		setBubbleEvents(bubbleEvents?: any): void;
		setListeners(listeners?: any): void;
		setOnline(online?: boolean): void;
		setType(type?: any): void;
		statics(): Ext.IClass;
		suspendEvents(): void;
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export class Contacts  {
		self: Ext.IClass;
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		destroy(): void;
		enableBubble(events?: any): void;
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any;
		fireEvent(eventName: string, ...args: any[]): boolean;
		getBubbleEvents(): any;
		getContacts(config?: any): any[];
		getId(): string;
		getIncludeImages(): boolean;
		getInitialConfig(name?: string): any;
		getListeners(): any;
		getLocalizedLabel(config?: any): string;
		getThumbnail(config?: any): string;
		hasListener(eventName?: string): boolean;
		initConfig(instanceConfig?: any): any;
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable;
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void;
		resumeEvents(discardQueuedEvents?: boolean): void;
		setBubbleEvents(bubbleEvents?: any): void;
		setIncludeImages(includeImages?: boolean): void;
		setListeners(listeners?: any): void;
		statics(): Ext.IClass;
		suspendEvents(): void;
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export class Device  {
		name: string;
		platform: string;
		scheme: any;
		self: Ext.IClass;
		uuid: string;
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		destroy(): void;
		enableBubble(events?: any): void;
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any;
		fireEvent(eventName: string, ...args: any[]): boolean;
		getBubbleEvents(): any;
		getId(): string;
		getInitialConfig(name?: string): any;
		getListeners(): any;
		hasListener(eventName?: string): boolean;
		initConfig(instanceConfig?: any): any;
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		openURL(url?: string): void;
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable;
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void;
		resumeEvents(discardQueuedEvents?: boolean): void;
		setBubbleEvents(bubbleEvents?: any): void;
		setListeners(listeners?: any): void;
		statics(): Ext.IClass;
		suspendEvents(): void;
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export class Geolocation  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearWatch(): void;
		destroy(): void;
		getAllowHighAccuracy(): boolean;
		getCurrentPosition(config?: any): void;
		getFrequency(): number;
		getInitialConfig(name?: string): any;
		getMaximumAge(): number;
		getTimeout(): number;
		initConfig(instanceConfig?: any): any;
		setAllowHighAccuracy(allowHighAccuracy?: boolean): void;
		setFrequency(frequency?: number): void;
		setMaximumAge(maximumAge?: number): void;
		setTimeout(timeout?: number): void;
		statics(): Ext.IClass;
		watchPosition(config?: any): void
	}

	declare export class Notification  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		show(config?: any): void;
		statics(): Ext.IClass;
		vibrate(): void
	}

	declare export class Orientation  {
		self: Ext.IClass;
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		destroy(): void;
		enableBubble(events?: any): void;
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any;
		fireEvent(eventName: string, ...args: any[]): boolean;
		getBubbleEvents(): any;
		getId(): string;
		getInitialConfig(name?: string): any;
		getListeners(): any;
		hasListener(eventName?: string): boolean;
		initConfig(instanceConfig?: any): any;
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable;
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void;
		resumeEvents(discardQueuedEvents?: boolean): void;
		setBubbleEvents(bubbleEvents?: any): void;
		setListeners(listeners?: any): void;
		statics(): Ext.IClass;
		suspendEvents(): void;
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export class Purchases  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		canMakePayments(config?: any): void;
		destroy(): void;
		getCompletedPurchases(config?: any): void;
		getInitialConfig(name?: string): any;
		getProducts(config?: any): void;
		getPurchases(config?: any): void;
		initConfig(instanceConfig?: any): any;
		statics(): Ext.IClass
	}

	declare export class Push  {
		ALERT: number;
		BADGE: number;
		SOUND: number;
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		register(config?: any): void;
		statics(): Ext.IClass
	}

	declare export class SQLite  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		openDatabase(config?: any): Ext.device.sqlite.IDatabase;
		statics(): Ext.IClass
	}

	
}

declare module 'communicator' {
		declare export interface IAndroid {
		
	}

	declare export interface IDefault {
		
	}

			
}

declare module 'connection' {
		declare export interface IAbstract {
		CELL_2G?: string,
		CELL_3G?: string,
		CELL_4G?: string,
		ETHERNET?: string,
		NONE?: string,
		UNKNOWN?: string,
		WIFI?: string,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getListeners(): any,
		getOnline(): boolean,
		getType(): string,
		hasListener(eventName?: string): boolean,
		isOnline(): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		setOnline(online?: boolean): void,
		setType(type?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IPhoneGap {
		getOnline(): boolean,
		getType(): string
	}

	declare export interface ISencha {
		
	}

	declare export interface ISimulator {
		getOnline(): boolean
	}

			
}

declare module 'contacts' {
		declare export interface IAbstract {
		includeImages?: boolean,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getContacts(config?: any): any[],
		getIncludeImages(): boolean,
		getListeners(): any,
		getLocalizedLabel(config?: any): string,
		getThumbnail(config?: any): string,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setIncludeImages(includeImages?: boolean): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface ISencha {
		getContacts(config?: any): any[],
		getLocalizedLabel(config?: any): string,
		getThumbnail(config?: any): string
	}

			
}

declare module 'geolocation' {
		declare export interface IAbstract {
		allowHighAccuracy?: boolean,
		frequency?: number,
		maximumAge?: number,
		timeout?: number,
		clearWatch(): void,
		getAllowHighAccuracy(): boolean,
		getCurrentPosition(config?: any): void,
		getFrequency(): number,
		getMaximumAge(): number,
		getTimeout(): number,
		setAllowHighAccuracy(allowHighAccuracy?: boolean): void,
		setFrequency(frequency?: number): void,
		setMaximumAge(maximumAge?: number): void,
		setTimeout(timeout?: number): void,
		watchPosition(config?: any): void
	}

	declare export interface ISencha {
		clearWatch(): void,
		getCurrentPosition(config?: any): void,
		watchPosition(config?: any): void
	}

	declare export interface ISimulator {
		clearWatch(): void,
		getCurrentPosition(config?: any): void,
		watchPosition(config?: any): void
	}

			
}

declare module 'notification' {
		declare export interface IAbstract {
		show(config?: any): void,
		vibrate(): void
	}

	declare export interface IPhoneGap {
		show(): void,
		vibrate(): void
	}

	declare export interface ISencha {
		show(): void,
		vibrate(): void
	}

	declare export interface ISimulator {
		show(): void,
		vibrate(): void
	}

			
}

declare module 'orientation' {
		declare export interface IAbstract {
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IHTML5 {
		
	}

	declare export interface ISencha {
		
	}

			
}

declare module 'purchases' {
		declare export interface IProduct {
		fields?: any,
		getFields(): any[],
		purchase(config?: any): void,
		setFields(fields?: any[]): void
	}

	declare export interface IPurchase {
		fields?: any,
		complete(config?: any): void,
		getFields(): any[],
		setFields(fields?: any[]): void
	}

	declare export interface ISencha {
		canMakePayments(config?: any): void,
		getCompletedPurchases(config?: any): void,
		getProducts(config?: any): void,
		getPurchases(config?: any): void
	}

			
}

declare module 'push' {
		declare export interface IAbstract {
		ALERT?: number,
		BADGE?: number,
		SOUND?: number,
		register(config?: any): void
	}

	declare export interface ISencha {
		register(): void
	}

			
}

declare module 'sqlite' {
		declare export interface IDatabase {
		changeVersion(config?: any): void,
		getVersion(): string,
		readTransaction(config?: any): void,
		transaction(config?: any): void
	}

	declare export interface ISencha {
		openDatabase(config?: any): Ext.device.sqlite.IDatabase
	}

	declare export interface ISQLResultSet {
		getInsertId(): number,
		getRows(): Ext.device.sqlite.ISQLResultSetRowList,
		getRowsAffected(): number
	}

	declare export interface ISQLResultSetRowList {
		getLength(): number,
		item(index?: number): any
	}

	declare export interface ISQLTransaction {
		executeSql(config?: any): void
	}

			
}

declare module 'direct' {
		declare export interface IEvent {
		data?: any,
		name?: string,
		getCode(): any,
		getData(): any,
		getMessage(): string,
		getName(): string,
		getResult(): any,
		getStatus(): boolean,
		getTransaction(): any,
		getXhr(): any,
		setCode(code?: any): void,
		setData(data?: any): void,
		setMessage(message?: string): void,
		setName(name?: string): void,
		setResult(result?: any): void,
		setStatus(status?: boolean): void,
		setTransaction(transaction?: any): void,
		setXhr(xhr?: any): void
	}

	declare export interface IExceptionEvent {
		name?: string,
		getError(): any,
		getName(): string,
		getStatus(): boolean,
		setError(error?: any): void,
		setName(name?: string): void,
		setStatus(status?: boolean): void
	}

	declare export interface IJsonProvider {
		createEvent(response?: any): Ext.direct.IEvent
	}

	declare export interface IManager {
		
	}

	declare export interface IPollingProvider {
		baseParams?: any,
		interval?: number,
		url?: any,
		connect(): void,
		disconnect(): void,
		getBaseParams(): any,
		getInterval(): number,
		getUrl(): any,
		isConnected(): boolean,
		setBaseParams(baseParams?: any): void,
		setInterval(interval?: number): void,
		setUrl(url?: any): void
	}

	declare export interface IProvider {
		id?: string,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		connect(): void,
		destroy(): void,
		disconnect(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getId(): string,
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		isConnected(): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setId(id?: string): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IRemotingEvent {
		name?: string,
		getName(): string,
		getTid(): any,
		getTransaction(): Ext.direct.ITransaction,
		setName(name?: string): void,
		setTid(tid?: any): void,
		setTransaction(transaction?: any): void
	}

	declare export interface IRemotingMethod {
		getCallData(args?: any[]): any,
		getFormHandler(): any,
		getLen(): any,
		getName(): any,
		getOrdered(): boolean,
		getParams(): any,
		setFormHandler(formHandler?: any): void,
		setLen(len?: any): void,
		setName(name?: any): void,
		setOrdered(ordered?: boolean): void,
		setParams(params?: any): void
	}

	declare export interface IRemotingProvider {
		actions?: any,
		enableBuffer?: any,
		enableUrlEncode?: string,
		maxRetries?: number,
		namespace?: any,
		timeout?: number,
		url?: string,
		connect(): void,
		disconnect(): void,
		getActions(): any,
		getEnableBuffer(): any,
		getEnableUrlEncode(): string,
		getMaxRetries(): number,
		getNamespace(): any,
		getTimeout(): number,
		getUrl(): string,
		isConnected(): boolean,
		setActions(actions?: any): void,
		setEnableBuffer(enableBuffer?: any): void,
		setEnableUrlEncode(enableUrlEncode?: string): void,
		setMaxRetries(maxRetries?: number): void,
		setNamespace(namespace?: any): void,
		setTimeout(timeout?: number): void,
		setUrl(url?: string): void
	}

	declare export interface ITransaction {
		getAction(): any,
		getArgs(): any,
		getCallback(): any,
		getData(): any,
		getForm(): any,
		getId(): any,
		getMethod(): any,
		getProvider(): any,
		getRetryCount(): number,
		setAction(action?: any): void,
		setArgs(args?: any): void,
		setCallback(callback?: any): void,
		setData(data?: any): void,
		setForm(form?: any): void,
		setId(id?: any): void,
		setMethod(method?: any): void,
		setProvider(provider?: any): void,
		setRetryCount(retryCount?: number): void
	}

		declare export class Manager  {
		self: Ext.IClass;
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		addEvents(eventNames?: any): void;
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		addProvider(provider?: any): any;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		clearListeners(): void;
		destroy(): void;
		enableBubble(events?: any): void;
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any;
		fireEvent(eventName: string, ...args: any[]): boolean;
		getBubbleEvents(): any;
		getId(): string;
		getInitialConfig(name?: string): any;
		getListeners(): any;
		getProvider(id?: any): any;
		hasListener(eventName?: string): boolean;
		initConfig(instanceConfig?: any): any;
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void;
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void;
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void;
		parseMethod(fn?: any): any;
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable;
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void;
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void;
		removeProvider(provider?: any): any;
		resumeEvents(discardQueuedEvents?: boolean): void;
		setBubbleEvents(bubbleEvents?: any): void;
		setListeners(listeners?: any): void;
		statics(): Ext.IClass;
		suspendEvents(): void;
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void;
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void;
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	
}

declare module 'dom' {
		declare export interface ICompositeElement {
		
	}

	declare export interface ICompositeElementLite {
		elements?: HTMLElement[],
		add(els?: any, root?: any): Ext.dom.ICompositeElementLite,
		addCls(names?: string, prefix?: string, suffix?: string): Ext.dom.IElement,
		addListener(
		eventName?: any, handler?: any, scope?: any, opt?: any
	): Ext.dom.ICompositeElementLite,
		appendChild(element?: any): Ext.dom.IElement,
		appendTo(el?: any): Ext.dom.IElement,
		applyStyles(styles?: any): Ext.dom.IElement,
		child(selector?: string, returnDom?: boolean): any,
		clear(): void,
		contains(el?: any): boolean,
		createChild(
		config?: any, insertBefore?: HTMLElement, returnDom?: boolean
	): Ext.dom.IElement,
		cssTranslate(): void,
		destroy(): void,
		down(selector?: string, returnDom?: boolean): any,
		each(fn?: any, scope?: any): Ext.dom.ICompositeElementLite,
		fill(els?: any): Ext.dom.ICompositeElementLite,
		filter(selector?: any): Ext.dom.ICompositeElementLite,
		findParent(simpleSelector?: string, maxDepth?: any, returnEl?: boolean): any,
		findParentNode(simpleSelector?: string, maxDepth?: any, returnEl?: boolean): any,
		getAlignToXY(element?: any, position?: string, offsets?: any[]): any[],
		getAnchorXY(anchor?: string, local?: boolean, size?: any): any[],
		getAttribute(name?: string, namespace?: string): string,
		getBorderWidth(side?: string): number,
		getBottom(): number,
		getBox(contentBox?: boolean, local?: boolean): any,
		getCount(): number,
		getHTML(): string,
		getHeight(contentHeight?: boolean): number,
		getHtml(): string,
		getLeft(): number,
		getMargin(sides?: string): any,
		getOffsetsTo(element?: any): any[],
		getOuterHeight(): void,
		getOuterWidth(): void,
		getPadding(side?: string): number,
		getPageBox(asRegion?: boolean): any,
		getRight(): number,
		getScrollParent(): void,
		getSize(contentSize?: boolean): any,
		getStyle(prop?: string): string,
		getTop(): number,
		getValue(asNumber?: boolean): any,
		getViewSize(): any,
		getWidth(contentWidth?: boolean): number,
		getX(el?: any): number,
		getXY(): any[],
		getY(el?: any): number,
		hasCls(name?: string): boolean,
		hide(): void,
		indexOf(el?: any): number,
		insertAfter(el?: any): Ext.dom.IElement,
		insertBefore(el?: any): Ext.dom.IElement,
		insertFirst(element?: any): Ext.dom.IElement,
		insertHtml(where?: string, html?: string, returnEl?: boolean): any,
		insertSibling(el?: any, where?: string, returnDom?: boolean): Ext.dom.IElement,
		is(selector?: string): boolean,
		isDescendent(): void,
		isStyle(style?: string, value?: string): boolean,
		isTransparent(prop?: string): boolean,
		item(index?: number): Ext.dom.IElement,
		mask(): void,
		next(selector?: string, returnDom?: boolean): any,
		parent(selector?: string, returnDom?: boolean): any,
		prev(selector?: string, returnDom?: boolean): any,
		purgeAllListeners(): void,
		query(selector?: string): HTMLElement[],
		radioCls(className?: any): Ext.dom.IElement,
		remove(): void,
		removeAllListeners(): void,
		removeCls(names?: string, prefix?: string, suffix?: string): Ext.dom.IElement,
		removeElement(el?: any, removeDom?: boolean): Ext.dom.ICompositeElementLite,
		repaint(): Ext.dom.IElement,
		replace(element?: any): Ext.dom.IElement,
		replaceCls(
		oldName?: string, newName?: string, prefix?: string, suffix?: string
	): Ext.dom.IElement,
		replaceElement(
		el?: any, replacement?: any, domReplace?: boolean
	): Ext.dom.ICompositeElementLite,
		replaceWith(el?: any): Ext.dom.IElement,
		select(selector?: any, composite?: boolean): Ext.dom.ICompositeElementLite,
		serializeForm(form?: any): string,
		set(attributes?: any, useSet?: boolean): Ext.dom.IElement,
		setBottom(bottom?: string): Ext.dom.IElement,
		setBox(box?: any): Ext.dom.IElement,
		setCls(className?: any): void,
		setHTML(html?: string): void,
		setHeight(height?: any): Ext.dom.IElement,
		setHtml(html?: string): void,
		setLeft(left?: string): Ext.dom.IElement,
		setMaxHeight(height?: any): Ext.dom.IElement,
		setMaxWidth(width?: any): Ext.dom.IElement,
		setMinHeight(height?: any): Ext.dom.IElement,
		setMinWidth(width?: any): Ext.dom.IElement,
		setRight(right?: string): Ext.dom.IElement,
		setSize(width?: any, height?: any): Ext.dom.IElement,
		setStyle(property?: any, value?: string): Ext.dom.IElement,
		setTop(top?: string): Ext.dom.IElement,
		setTopLeft(): void,
		setVisibilityMode(mode?: any): Ext.dom.IElement,
		setVisible(visible?: boolean): Ext.IElement,
		setWidth(width?: any): Ext.dom.IElement,
		setX(x?: number): Ext.dom.IElement,
		setXY(pos?: number[]): Ext.dom.IElement,
		setY(y?: number): Ext.dom.IElement,
		show(): void,
		toggleCls(className?: string): Ext.dom.IElement,
		translatePoints(x?: any, y?: number): any,
		unmask(): void,
		up(simpleSelector?: string, maxDepth?: any): any,
		update(html?: string): void,
		wrap(config?: any, domNode?: boolean): any
	}

	declare export interface IElement {
		DISPLAY?: number,
		OFFSETS?: number,
		VISIBILITY?: number,
		defaultUnit?: string,
		dom?: HTMLElement,
		id?: string,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addCls(names?: string, prefix?: string, suffix?: string): Ext.dom.IElement,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		appendChild(element?: any): Ext.dom.IElement,
		appendTo(el?: any): Ext.dom.IElement,
		applyStyles(styles?: any): Ext.dom.IElement,
		child(selector?: string, returnDom?: boolean): any,
		clearListeners(): void,
		contains(element?: any): boolean,
		createChild(
		config?: any, insertBefore?: HTMLElement, returnDom?: boolean
	): Ext.dom.IElement,
		cssTranslate(): void,
		destroy(): void,
		down(selector?: string, returnDom?: boolean): any,
		enableBubble(events?: any): void,
		findParent(simpleSelector?: string, maxDepth?: any, returnEl?: boolean): any,
		findParentNode(simpleSelector?: string, maxDepth?: any, returnEl?: boolean): any,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		first(selector?: string, returnDom?: boolean): any,
		getAlignToXY(element?: any, position?: string, offsets?: any[]): any[],
		getAnchorXY(anchor?: string, local?: boolean, size?: any): any[],
		getAttribute(name?: string, namespace?: string): string,
		getBorderWidth(side?: string): number,
		getBottom(): number,
		getBox(contentBox?: boolean, local?: boolean): any,
		getBubbleEvents(): any,
		getHTML(): string,
		getHeight(contentHeight?: boolean): number,
		getHtml(): string,
		getLeft(): number,
		getListeners(): any,
		getMargin(sides?: string): any,
		getOffsetsTo(element?: any): any[],
		getOuterHeight(): void,
		getOuterWidth(): void,
		getPadding(side?: string): number,
		getPageBox(asRegion?: boolean): any,
		getRight(): number,
		getScrollParent(): void,
		getSize(contentSize?: boolean): any,
		getStyle(prop?: string): string,
		getTop(): number,
		getValue(asNumber?: boolean): any,
		getViewSize(): any,
		getWidth(contentWidth?: boolean): number,
		getX(el?: any): number,
		getXY(): any[],
		getY(el?: any): number,
		hasCls(name?: string): boolean,
		hasListener(eventName?: string): boolean,
		hide(): void,
		insertAfter(el?: any): Ext.dom.IElement,
		insertBefore(el?: any): Ext.dom.IElement,
		insertFirst(element?: any): Ext.dom.IElement,
		insertHtml(where?: string, html?: string, returnEl?: boolean): any,
		insertSibling(el?: any, where?: string, returnDom?: boolean): Ext.dom.IElement,
		is(selector?: string): boolean,
		isDescendent(): void,
		isStyle(style?: string, value?: string): boolean,
		isTransparent(prop?: string): boolean,
		last(selector?: string, returnDom?: boolean): any,
		mask(): void,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		next(selector?: string, returnDom?: boolean): any,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		parent(selector?: string, returnDom?: boolean): any,
		prev(selector?: string, returnDom?: boolean): any,
		purgeAllListeners(): void,
		query(selector?: string): HTMLElement[],
		radioCls(className?: any): Ext.dom.IElement,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		remove(): void,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeAllListeners(): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeCls(names?: string, prefix?: string, suffix?: string): Ext.dom.IElement,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		repaint(): Ext.dom.IElement,
		replace(element?: any): Ext.dom.IElement,
		replaceCls(
		oldName?: string, newName?: string, prefix?: string, suffix?: string
	): Ext.dom.IElement,
		replaceWith(el?: any): Ext.dom.IElement,
		resumeEvents(discardQueuedEvents?: boolean): void,
		serializeForm(form?: any): string,
		set(attributes?: any, useSet?: boolean): Ext.dom.IElement,
		setBottom(bottom?: string): Ext.dom.IElement,
		setBox(box?: any): Ext.dom.IElement,
		setBubbleEvents(bubbleEvents?: any): void,
		setCls(className?: any): void,
		setHTML(html?: string): void,
		setHeight(height?: any): Ext.dom.IElement,
		setHtml(html?: string): void,
		setLeft(left?: string): Ext.dom.IElement,
		setListeners(listeners?: any): void,
		setMaxHeight(height?: any): Ext.dom.IElement,
		setMaxWidth(width?: any): Ext.dom.IElement,
		setMinHeight(height?: any): Ext.dom.IElement,
		setMinWidth(width?: any): Ext.dom.IElement,
		setRight(right?: string): Ext.dom.IElement,
		setSize(width?: any, height?: any): Ext.dom.IElement,
		setStyle(property?: any, value?: string): Ext.dom.IElement,
		setTop(top?: string): Ext.dom.IElement,
		setTopLeft(): void,
		setVisibilityMode(mode?: any): Ext.dom.IElement,
		setVisible(visible?: boolean): Ext.IElement,
		setWidth(width?: any): Ext.dom.IElement,
		setX(x?: number): Ext.dom.IElement,
		setXY(pos?: number[]): Ext.dom.IElement,
		setY(y?: number): Ext.dom.IElement,
		show(): void,
		suspendEvents(): void,
		toggleCls(className?: string): Ext.dom.IElement,
		translatePoints(x?: any, y?: number): any,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unmask(): void,
		up(simpleSelector?: string, maxDepth?: any): any,
		update(html?: string): void,
		wrap(config?: any, domNode?: boolean): any
	}

	declare export interface IQuery {
		is(el?: any, selector?: string): boolean,
		select(selector?: string, root?: any): HTMLElement[],
		selectNode(selector?: string, root?: any): HTMLElement
	}

	declare export interface IHelper {
		append(el?: any, o?: any, returnElement?: boolean): any,
		applyStyles(el?: any, styles?: any): void,
		createTemplate(o?: any): Ext.ITemplate,
		generateStyles(styles?: any, buffer?: string[]): any,
		insertAfter(el?: any, o?: any, returnElement?: boolean): any,
		insertBefore(el?: any, o?: any, returnElement?: boolean): any,
		insertFirst(el?: any, o?: any, returnElement?: boolean): any,
		insertHtml(where?: string, el?: any, html?: string): HTMLElement,
		markup(spec?: any): string,
		overwrite(el?: any, o?: any, returnElement?: boolean): any
	}

		declare export class Element  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		createAlias(alias?: any, origin?: any): void;
		fly(element?: any, named?: string): Ext.dom.IElement;
		fromPoint(x?: number, y?: number): string;
		get(element?: any): Ext.dom.IElement;
		getDocumentHeight(): number;
		getDocumentWidth(): number;
		getName(): string;
		getOrientation(): string;
		getViewSize(): any;
		getViewportHeight(): number;
		getViewportWidth(): number;
		normalize(prop?: string): string;
		override(members?: any): Ext.IBase;
		parseBox(box?: any): any;
		parseStyles(styles?: string): any;
		select(selector?: any, composite?: boolean, root?: any): Ext.dom.ICompositeElementLite;
		unitizeBox(box?: any, units?: string): string
	}

	
}

declare module 'core' {
		declare export interface IDomQuery {
		
	}

		declare export class DomQuery  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		is(el?: any, selector?: string): boolean;
		select(selector?: string, root?: any): HTMLElement[];
		selectNode(selector?: string, root?: any): HTMLElement;
		statics(): Ext.IClass
	}

	
}

declare module 'draw' {
		declare export interface IAnimator {
		
	}

	declare export interface IColor {
		lightnessFactor?: number,
		createDarker(factor?: number): Ext.draw.IColor,
		createLighter(factor?: number): Ext.draw.IColor,
		getGrayscale(): number,
		getHSL(target?: any[]): any[],
		setFromString(str?: string): any,
		setHSL(h?: number, s?: number, l?: number): any,
		toHex(color?: any): string,
		toString(): string
	}

	declare export interface IComponent {
		autoSize?: boolean,
		cls?: any,
		defaultType?: string,
		fitSurface?: boolean,
		resizeHandler?: any,
		viewBox?: boolean,
		destroy(): void,
		getAutoSize(): boolean,
		getBackground(): any,
		getCls(): string,
		getFitSurface(): boolean,
		getResizeHandler(): any,
		getSprites(): any,
		getSurface(id?: string): Ext.draw.ISurface,
		getViewBox(): boolean,
		initialize(): void,
		onPlaceWatermark(): void,
		renderFrame(): void,
		setAutoSize(autoSize?: boolean): void,
		setBackground(background?: any): void,
		setCls(cls?: string): void,
		setFitSurface(fitSurface?: boolean): void,
		setResizeHandler(resizeHandler?: any): void,
		setSprites(sprites?: any): void,
		setViewBox(viewBox?: boolean): void
	}

	declare export interface IDraw {
		
	}

	declare export interface IGroup {
		add(sprite?: Ext.draw.sprite.ISprite): void,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addAll(sprites?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clear(destroySprite?: boolean): void,
		clearListeners(): void,
		destroy(): void,
		each(fn?: any): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		get(id?: any): Ext.draw.sprite.ISprite,
		getAt(index?: number): Ext.draw.sprite.ISprite,
		getBBox(isWithTransform?: any): void,
		getBubbleEvents(): any,
		getListeners(): any,
		getSurface(): any,
		hasListener(eventName?: string): boolean,
		hide(o?: boolean): void,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		remove(sprite?: Ext.draw.sprite.ISprite, destroySprite?: boolean): void,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setAttributes(o?: any): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setDirty(): void,
		setListeners(listeners?: any): void,
		setSurface(surface?: any): void,
		show(o?: boolean): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface ILimitedCache {
		feeder?: any,
		limit?: number,
		scope?: any,
		clear(): void,
		get(id: string, ...args: any[]): any,
		getFeeder(): any,
		getLimit(): number,
		getScope(): any,
		setFeeder(feeder?: any): number,
		setLimit(limit?: number): void,
		setScope(scope?: any): void
	}

	declare export interface IMatrix {
		a?: number,
		append(xx?: any, xy?: any, yx?: any, yy?: any, dx?: any, dy?: any): Ext.draw.IMatrix,
		appendMatrix(matrix?: Ext.draw.IMatrix): Ext.draw.IMatrix,
		clone(): Ext.draw.IMatrix,
		equals(matrix?: Ext.draw.IMatrix): boolean,
		flipX(): Ext.draw.IMatrix,
		flipY(): Ext.draw.IMatrix,
		getDX(): number,
		getDY(): number,
		getScaleX(): number,
		getScaleY(): number,
		getXX(): number,
		getXY(): number,
		getYX(): number,
		getYY(): number,
		inverse(target?: Ext.draw.IMatrix): Ext.draw.IMatrix,
		isIdentity(): boolean,
		multiply(matrix?: Ext.draw.IMatrix): Ext.draw.IMatrix,
		prepend(xx?: any, xy?: any, yx?: any, yy?: any, dx?: any, dy?: any): Ext.draw.IMatrix,
		prependMatrix(matrix?: Ext.draw.IMatrix): Ext.draw.IMatrix,
		reset(): Ext.draw.IMatrix,
		rotate(angle?: number, rcx?: any, rcy?: any, prepend?: boolean): Ext.draw.IMatrix,
		rotateFromVector(x?: number, y?: number, prepend?: boolean): Ext.draw.IMatrix,
		scale(
		sx?: number, sy?: number, scx?: number, scy?: number, prepend?: boolean
	): Ext.draw.IMatrix,
		set(
		xx?: number, xy?: number, yx?: number, yy?: number, dx?: number, dy?: number
	): Ext.draw.IMatrix,
		skewX(angle?: number): Ext.draw.IMatrix,
		skewY(angle?: number): Ext.draw.IMatrix,
		split(): any,
		toArray(): any[],
		toContext(ctx?: any): Ext.draw.IMatrix,
		toString(): any[],
		toSvg(): string,
		toVerticalArray(): any,
		transformBBox(bbox?: any, radius?: number, target?: any): any,
		transformList(list?: any[]): any[],
		transformPoint(point?: any[]): any[],
		translate(x?: number, y?: number, prepend?: boolean): Ext.draw.IMatrix,
		x(x?: number, y?: number): number,
		y(x?: number, y?: number): number
	}

	declare export interface IPath {
		arc(
		x?: any, y?: any, radius?: any, startAngle?: any, endAngle?: any, anticlockwise?: any
	): void,
		arcSvg(
		rx?: any, ry?: any, rotation?: any, fA?: any, fS?: any, x2?: any, y2?: any
	): void,
		arcTo(
		x1?: number, y1?: number, x2?: number, y2?: number, rx?: number, ry?: number, rotation?: number
	): void,
		bezierCurveTo(
		cx1?: number, cy1?: number, cx2?: number, cy2?: number, x?: number, y?: number
	): void,
		clear(): void,
		clone(): Ext.draw.IPath,
		closePath(): void,
		ellipse(
		cx?: any, cy?: any, radiusX?: any, radiusY?: any, rotation?: any, startAngle?: any, endAngle?: any, anticlockwise?: any
	): void,
		fromStripes(stripes?: any[]): void,
		fromSvgString(pathString?: any): void,
		getDimension(target?: any): any,
		getDimensionWithTransform(matrix?: Ext.draw.IMatrix, target?: any): any,
		isPointInPath(x?: any, y?: any): boolean,
		lineTo(x?: number, y?: number): void,
		moveTo(x?: number, y?: number): void,
		quadraticCurveTo(cx?: number, cy?: number, x?: number, y?: number): void,
		rect(x?: any, y?: any, width?: any, height?: any): void,
		toString(): string,
		toStripes(target?: any[]): any[],
		transform(matrix?: Ext.draw.IMatrix): void
	}

	declare export interface ISegmentTree {
		getAggregation(min?: number, max?: number, estStep?: number): any,
		getStrategy(): string,
		setData(
		dataX?: any, dataOpen?: any, dataHigh?: any, dataLow?: any, dataClose?: any
	): void,
		setStrategy(strategy?: string): void
	}

	declare export interface ISolver {
		
	}

	declare export interface ISurface {
		background?: any,
		dirty?: boolean,
		groups?: any[],
		items?: Ext.draw.IGroup,
		region?: any[],
		devicePixelRatio?: any,
		add(): void,
		clear(): void,
		destroy(): void,
		getBBox(sprite?: any, isWithoutTransform?: any): any,
		getBackground(): any,
		getDirty(): boolean,
		getGroup(id?: string): Ext.draw.IGroup,
		getGroups(): any[],
		getItems(): Ext.draw.IGroup,
		getRegion(): any[],
		onAdd(sprite?: Ext.draw.sprite.ISprite): void,
		remove(sprite?: Ext.draw.sprite.ISprite, destroySprite?: boolean): void,
		removeAll(): void,
		renderFrame(): void,
		repaint(): void,
		resetTransform(): void,
		roundPixel(num?: any): number,
		setBackground(background?: any): void,
		setGroups(groups?: any[]): void,
		setItems(items?: Ext.draw.IGroup): void,
		setRegion(region?: any[]): void,
		waitFor(surface?: any): void
	}

	declare export interface ITextMeasurer {
		
	}

	declare export interface ITimingFunctions {
		
	}

		declare export class Animator  {
		self: Ext.IClass;
		add(animation?: any): void;
		addFrameCallback(callback?: any, scope?: any): string;
		animationTime(): number;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		cancel(id?: any): void;
		contains(animation?: any): boolean;
		destroy(): void;
		empty(): boolean;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		remove(animation?: any): void;
		removeFrameCallback(id?: any): void;
		schedule(callback?: any, scope?: any): string;
		statics(): Ext.IClass;
		step(frameTime?: number): void
	}

	declare export class Color  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(red?: any, green?: number, blue?: number, alpha?: number): Ext.draw.IColor;
		createAlias(alias?: any, origin?: any): void;
		fly(red?: any, green?: number, blue?: number, alpha?: number): Ext.draw.IColor;
		fromHSL(h?: number, s?: number, l?: number): Ext.draw.IColor;
		fromString(string?: string): Ext.draw.IColor;
		getName(): string;
		override(members?: any): Ext.IBase
	}

	declare export class Draw  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		degrees(radian?: number): number;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		isBBoxIntersect(bbox1?: any, bbox2?: any, padding?: any): boolean;
		rad(degrees?: number): number;
		reflectFn(a?: any): any;
		spline(points?: any[]): void;
		statics(): Ext.IClass
	}

	declare export class Matrix  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(mat?: any): Ext.draw.IMatrix;
		createAffineMatrixFromTwoPair(
		x0?: any, y0?: any, x1?: any, y1?: any, x0p?: any, y0p?: any, x1p?: any, y1p?: any
	): void;
		createAlias(alias?: any, origin?: any): void;
		createPanZoomFromTwoPair(
		x0?: any, y0?: any, x1?: any, y1?: any, x0p?: any, y0p?: any, x1p?: any, y1p?: any
	): void;
		fly(elements?: any[]): Ext.draw.IMatrix;
		getName(): string;
		override(members?: any): Ext.IBase
	}

	declare export class Solver  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		cubicFunction(a?: any, b?: any, c?: any, d?: any): void;
		cubicRoot(number?: any): void;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		linearFunction(a?: any, b?: any): void;
		quadraticFunction(a?: any, b?: any, c?: any): void;
		statics(): Ext.IClass
	}

	declare export class Surface  {
		addMembers(members?: any): void;
		addStatics(members?: any): Ext.IBase;
		callParent(args?: any): void;
		create(): any;
		createAlias(alias?: any, origin?: any): void;
		getName(): string;
		override(members?: any): Ext.IBase;
		stableSort(list?: any): void
	}

	declare export class TextMeasurer  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		measureText(text?: string, font?: string): any;
		measureTextSingleLine(text?: string, font?: string): any;
		statics(): Ext.IClass
	}

	declare export class TimingFunctions  {
		self: Ext.IClass;
		callOverridden(args?: any): any;
		callParent(args?: any): any;
		callSuper(args?: any): any;
		destroy(): void;
		getInitialConfig(name?: string): any;
		initConfig(instanceConfig?: any): any;
		statics(): Ext.IClass
	}

	
}

declare module 'engine' {
		declare export interface ICanvas {
		highPrecision?: boolean,
		clear(): void,
		clearTransform(): void,
		destroy(): void,
		getHighPrecision(): boolean,
		initElement(): void,
		setHighPrecision(highPrecision?: boolean): void
	}

	declare export interface ISvg {
		highPrecision?: boolean,
		clear(): void,
		clearTransform(): void,
		createSvgNode(type?: any): any,
		destroy(path?: any, matrix?: any, band?: any): void,
		getHighPrecision(): boolean,
		remove(sprite?: any, destroySprite?: any): void,
		renderSprite(sprite?: Ext.draw.sprite.ISprite): boolean,
		setHighPrecision(highPrecision?: boolean): void
	}

	declare export interface ISvgContext {
		arc(
		x?: any, y?: any, radius?: any, startAngle?: any, endAngle?: any, anticlockwise?: any
	): void,
		arcSvg(
		r1?: any, r2?: any, rotation?: any, large?: any, swipe?: any, x2?: any, y2?: any
	): void,
		arcTo(
		x1?: any, y1?: any, x2?: any, y2?: any, radiusX?: any, radiusY?: any, rotation?: any
	): void,
		beginPath(): void,
		bezierCurveTo(x1?: any, y1?: any, x2?: any, y2?: any, x3?: any, y3?: any): void,
		clear(): void,
		closePath(): void,
		createLinearGradient(x0?: any, y0?: any, x1?: any, y1?: any): Ext.draw.engine.svgcontext.IGradient,
		createRadialGradient(
		x0?: any, y0?: any, r0?: any, x1?: any, y1?: any, r1?: any
	): Ext.draw.engine.svgcontext.IGradient,
		drawImage(
		image?: any, sx?: any, sy?: any, sw?: any, sh?: any, dx?: any, dy?: any, dw?: any, dh?: any
	): void,
		ellipse(
		x?: any, y?: any, radiusX?: any, radiusY?: any, rotation?: any, startAngle?: any, endAngle?: any, anticlockwise?: any
	): void,
		fill(): void,
		fillRect(x?: any, y?: any, width?: any, height?: any): void,
		fillStroke(attr?: any, transformFillStroke?: boolean): void,
		fillText(text?: any, x?: any, y?: any): void,
		lineTo(x?: any, y?: any): void,
		moveTo(x?: any, y?: any): void,
		rect(x?: any, y?: any, width?: any, height?: any): void,
		restore(): void,
		save(): void,
		setTransform(xx?: any, yx?: any, xy?: any, yy?: any, dx?: any, dy?: any): void,
		stroke(): void,
		strokeRect(x?: any, y?: any, width?: any, height?: any): void,
		strokeText(text?: any, x?: any, y?: any): void,
		transform(xx?: any, yx?: any, xy?: any, yy?: any, dx?: any, dy?: any): void
	}

			
}

declare module 'svgcontext' {
		declare export interface IGradient {
		addColorStop(offset?: any, color?: any): void
	}

			
}

declare module 'gradient' {
		declare export interface IGradient {
		Defines?: any,
		generateGradient(ctx?: any, bbox?: any): any,
		getId(): string
	}

	declare export interface ILinear {
		The?: number,
		generateGradient(ctx?: any, bbox?: any): any
	}

	declare export interface IRadial {
		end?: any,
		start?: any,
		generateGradient(ctx?: any, bbox?: any): any,
		getEnd(): any,
		getStart(): any,
		setEnd(end?: any): void,
		setStart(start?: any): void
	}

			
}

declare module 'modifier' {
		declare export interface IAnimation {
		customDuration?: any,
		customEasings?: any,
		duration?: number,
		easing?: any,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearDurationOn(attrs?: any): void,
		clearEasingOn(attrs?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getCustomDuration(): any,
		getCustomEasings(): any,
		getDuration(): number,
		getEasing(): any,
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		popUp(attributes?: any, changes?: any): void,
		prepareAttributes(attr?: any): void,
		pushDown(attr?: any, changes?: any): any,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setCustomDuration(customDuration?: any): void,
		setCustomEasings(customEasings?: any): void,
		setDuration(duration?: number): void,
		setDurationOn(attrs?: any, duration?: any): void,
		setEasing(easing?: any): void,
		setEasingOn(attrs?: any, easing?: any): void,
		setListeners(listeners?: any): void,
		stop(): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface IHighlight {
		enabled?: boolean,
		highlightStyle?: any,
		filterChanges(attr?: any, changes?: any): any,
		getEnabled(): boolean,
		getHighlightStyle(): any,
		popUp(attributes?: any, changes?: any): void,
		prepareAttributes(attr?: any): void,
		pushDown(attr?: any, changes?: any): any,
		setEnabled(enabled?: boolean): void,
		setHighlightStyle(highlightStyle?: any): void
	}

	declare export interface IModifier {
		next?: Ext.draw.modifier.IModifier,
		previous?: Ext.draw.modifier.IModifier,
		sprite?: Ext.draw.sprite.ISprite,
		getNext(): Ext.draw.modifier.IModifier,
		getPrevious(): Ext.draw.modifier.IModifier,
		getSprite(): Ext.draw.sprite.ISprite,
		popUp(attributes?: any, changes?: any): void,
		prepareAttributes(attr?: any): void,
		pushDown(attr?: any, changes?: any): any,
		setNext(next?: Ext.draw.modifier.IModifier): void,
		setPrevious(previous?: Ext.draw.modifier.IModifier): void,
		setSprite(sprite?: Ext.draw.sprite.ISprite): void
	}

	declare export interface ITarget {
		popUp(attributes?: any, changes?: any): void,
		prepareAttributes(attr?: any): void,
		pushDown(attr?: any, changes?: any): any
	}

			
}

declare module 'env' {
		declare export interface IBrowser {
		engineName?: string,
		engineVersion?: Ext.IVersion,
		isSecure?: boolean,
		isStrict?: boolean,
		name?: string,
		userAgent?: string,
		version?: Ext.IVersion,
		is(value?: string): boolean
	}

	declare export interface IFeature {
		
	}

	declare export interface IOS {
		name?: string,
		version?: Ext.IVersion,
		is(value?: string): boolean
	}

			
}

declare module 'event' {
		declare export interface IController {
		
	}

	declare export interface IDispatcher {
		getPublishers(): any,
		setPublishers(publishers?: any): void
	}

	declare export interface IDom {
		distance?: number,
		pageX?: number,
		pageY?: number,
		target?: HTMLElement,
		getPageX(): number,
		getPageY(): number,
		getTarget(selector?: string, maxDepth?: any, returnEl?: boolean): HTMLElement,
		getTime(): any,
		getXY(): any[],
		preventDefault(): void
	}

	declare export interface IEvent {
		angle?: number,
		direction?: number,
		duration?: number,
		rotation?: number,
		scale?: number,
		stopEvent(): Ext.event.IEvent,
		stopPropagation(): Ext.event.IEvent
	}

	declare export interface IListenerStack {
		
	}

	declare export interface ITouch {
		
	}

			
}

declare module 'publisher' {
		declare export interface IComponentDelegation {
		
	}

	declare export interface IComponentPaint {
		
	}

	declare export interface IComponentSize {
		
	}

	declare export interface IDom {
		
	}

	declare export interface IElementPaint {
		
	}

	declare export interface IElementSize {
		
	}

	declare export interface IPublisher {
		
	}

	declare export interface ITouchGesture {
		getMoveThrottle(): number,
		getRecognizers(): any,
		setMoveThrottle(moveThrottle?: number): void,
		setRecognizers(recognizers?: any): void
	}

			
}

declare module 'recognizer' {
		declare export interface IDoubleTap {
		getMaxDuration(): number,
		setMaxDuration(maxDuration?: number): void
	}

	declare export interface IDrag {
		minDistance?: number,
		getMinDistance(): number,
		setMinDistance(minDistance?: number): void
	}

	declare export interface IHorizontalSwipe {
		
	}

	declare export interface ILongPress {
		getMinDuration(): number,
		setMinDuration(minDuration?: number): void
	}

	declare export interface IMultiTouch {
		
	}

	declare export interface IPinch {
		
	}

	declare export interface IRecognizer {
		getCallbackScope(): any,
		getId(): string,
		getOnFailed(): any,
		getOnRecognized(): any,
		setCallbackScope(callbackScope?: any): void,
		setOnFailed(onFailed?: any): void,
		setOnRecognized(onRecognized?: any): void
	}

	declare export interface IRotate {
		
	}

	declare export interface ISingleTouch {
		
	}

	declare export interface ISwipe {
		getMaxDuration(): number,
		getMaxOffset(): number,
		getMinDistance(): number,
		setMaxDuration(maxDuration?: number): void,
		setMaxOffset(maxOffset?: number): void,
		setMinDistance(minDistance?: number): void
	}

	declare export interface ITap {
		moveDistance?: number,
		getMoveDistance(): number,
		setMoveDistance(moveDistance?: number): void
	}

	declare export interface ITouch {
		
	}

	declare export interface IVerticalSwipe {
		
	}

			
}

declare module 'field' {
		declare export interface ICheckbox {
		checked?: boolean,
		component?: any,
		ui?: string,
		value?: string,
		check(): Ext.field.ICheckbox,
		doChecked(): void,
		doUnChecked(): void,
		getChecked(): any,
		getComponent(): any,
		getGroupValues(): any[],
		getSubmitValue(): any,
		getUi(): string,
		getValue(): string,
		isChecked(): boolean,
		reset(): Ext.field.IField,
		resetGroupValues(): Ext.field.ICheckbox,
		setComponent(component?: any): void,
		setGroupValues(values?: any[]): Ext.field.ICheckbox,
		setUi(ui?: string): void,
		setValue(value?: string): void,
		uncheck(): Ext.field.ICheckbox
	}

	declare export interface IDatePicker {
		dateFormat?: string,
		destroyPickerOnHide?: boolean,
		picker?: any,
		ui?: string,
		value?: any,
		getDateFormat(): string,
		getDatePicker(): void,
		getDestroyPickerOnHide(): boolean,
		getFormattedValue(format?: string): string,
		getUi(): string,
		getValue(): any,
		onChange(): void,
		reset(): Ext.field.IField,
		setDateFormat(dateFormat?: string): void,
		setDestroyPickerOnHide(destroyPickerOnHide?: boolean): void,
		setPicker(picker?: any): void,
		setUi(ui?: string): void,
		setValue(value?: any): void
	}

	declare export interface IEmail {
		autoCapitalize?: boolean,
		component?: any,
		getAutoCapitalize(): boolean,
		getComponent(): any,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setComponent(component?: any): void
	}

	declare export interface IField {
		baseCls?: string,
		clearIcon?: boolean,
		component?: any,
		fieldCls?: string,
		fieldLabel?: string,
		inputCls?: string,
		inputType?: string,
		label?: string,
		labelAlign?: string,
		labelCls?: string,
		labelWidth?: any,
		labelWrap?: boolean,
		name?: string,
		required?: boolean,
		requiredCls?: string,
		tabIndex?: number,
		useClearIcon?: string,
		value?: any,
		isField?: boolean,
		labelEl?: Ext.IElement,
		originalValue?: any,
		getBaseCls(): string,
		getClearIcon(): boolean,
		getInputCls(): string,
		getInputType(): string,
		getLabel(): string,
		getLabelAlign(): string,
		getLabelCls(): string,
		getLabelWidth(): any,
		getLabelWrap(): boolean,
		getName(): string,
		getRequired(): boolean,
		getRequiredCls(): string,
		getTabIndex(): number,
		getValue(): any,
		isDirty(): boolean,
		reset(): Ext.field.IField,
		resetOriginalValue(): void,
		setBaseCls(baseCls?: string): void,
		setClearIcon(clearIcon?: boolean): void,
		setInputCls(inputCls?: string): void,
		setInputType(inputType?: string): void,
		setLabel(label?: string): void,
		setLabelAlign(labelAlign?: string): void,
		setLabelCls(labelCls?: string): void,
		setLabelWidth(labelWidth?: any): void,
		setLabelWrap(labelWrap?: boolean): void,
		setName(name?: string): void,
		setRequired(required?: boolean): void,
		setRequiredCls(requiredCls?: string): void,
		setTabIndex(tabIndex?: number): void,
		setValue(value?: any): void
	}

	declare export interface IFile {
		type?: string,
		getType(): string,
		setType(type?: string): void
	}

	declare export interface IHidden {
		component?: any,
		ui?: string,
		getComponent(): any,
		getUi(): string,
		setComponent(component?: any): void,
		setUi(ui?: string): void
	}

	declare export interface IInput {
		autoCapitalize?: boolean,
		autoComplete?: boolean,
		autoCorrect?: boolean,
		baseCls?: string,
		checked?: boolean,
		cls?: string,
		disabled?: boolean,
		focusCls?: string,
		maxLength?: number,
		maxRows?: number,
		maxValue?: number,
		minValue?: number,
		name?: string,
		pattern?: string,
		placeHolder?: string,
		readOnly?: boolean,
		startValue?: any,
		stepValue?: number,
		tabIndex?: number,
		type?: string,
		value?: any,
		isFocused?: boolean,
		blur(): Ext.field.IInput,
		focus(): Ext.field.IInput,
		getAutoCapitalize(): boolean,
		getAutoComplete(): boolean,
		getAutoCorrect(): boolean,
		getBaseCls(): string,
		getChecked(): any,
		getCls(): string,
		getDisabled(): boolean,
		getFocusCls(): string,
		getMaxLength(): number,
		getMaxRows(): number,
		getMaxValue(): number,
		getMinValue(): number,
		getName(): string,
		getPattern(): string,
		getPlaceHolder(): string,
		getReadOnly(): boolean,
		getStartValue(): any,
		getStepValue(): number,
		getTabIndex(): number,
		getType(): string,
		getValue(): any,
		isDirty(): boolean,
		reset(): void,
		select(): Ext.field.IInput,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setAutoComplete(autoComplete?: boolean): void,
		setAutoCorrect(autoCorrect?: boolean): void,
		setBaseCls(baseCls?: string): void,
		setCls(cls?: string): void,
		setDisabled(disabled?: boolean): void,
		setFocusCls(focusCls?: string): void,
		setMaxLength(maxLength?: number): void,
		setMaxRows(maxRows?: number): void,
		setMaxValue(maxValue?: number): void,
		setMinValue(minValue?: number): void,
		setName(name?: string): void,
		setPattern(pattern?: string): void,
		setPlaceHolder(placeHolder?: string): void,
		setReadOnly(readOnly?: boolean): void,
		setStartValue(startValue?: any): void,
		setStepValue(stepValue?: number): void,
		setTabIndex(tabIndex?: number): void,
		setType(type?: string): void,
		updateCls(newCls?: any, oldCls?: any): void,
		updateUseMask(newUseMask?: any): void
	}

	declare export interface INumber {
		component?: any,
		maxValue?: number,
		minValue?: number,
		stepValue?: number,
		ui?: string,
		getComponent(): any,
		getMaxValue(): number,
		getMinValue(): number,
		getStepValue(): number,
		getUi(): string,
		getValue(): any,
		setComponent(component?: any): void,
		setMaxValue(maxValue?: number): void,
		setMinValue(minValue?: number): void,
		setStepValue(stepValue?: number): void,
		setUi(ui?: string): void
	}

	declare export interface IPassword {
		autoCapitalize?: boolean,
		component?: any,
		getAutoCapitalize(): boolean,
		getComponent(): any,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setComponent(component?: any): void
	}

	declare export interface IRadio {
		component?: any,
		ui?: string,
		getComponent(): any,
		getGroupValue(): string,
		getSubmitValue(): any,
		getUi(): string,
		getValue(): string,
		setComponent(component?: any): void,
		setGroupValue(value?: string): Ext.field.IRadio,
		setUi(ui?: string): void,
		setValue(value?: any): Ext.field.IRadio
	}

	declare export interface ISearch {
		component?: any,
		ui?: string,
		getComponent(): any,
		getUi(): string,
		setComponent(component?: any): void,
		setUi(ui?: string): void
	}

	declare export interface ISelect {
		autoSelect?: boolean,
		defaultPhonePickerConfig?: any,
		defaultTabletPickerConfig?: any,
		displayField?: any,
		hiddenName?: string,
		name?: string,
		options?: any[],
		store?: any,
		ui?: string,
		usePicker?: any,
		valueField?: any,
		destroy(): void,
		getAutoSelect(): boolean,
		getDefaultPhonePickerConfig(): any,
		getDefaultTabletPickerConfig(): any,
		getDisplayField(): any,
		getHiddenName(): string,
		getName(): string,
		getOptions(): any[],
		getRecord(): Ext.data.IModel,
		getStore(): any,
		getUi(): string,
		getUsePicker(): any,
		getValue(): any,
		getValueField(): any,
		onStoreDataChanged(store?: any): void,
		reset(): Ext.field.ISelect,
		setAutoSelect(autoSelect?: boolean): void,
		setDefaultPhonePickerConfig(defaultPhonePickerConfig?: any): void,
		setDefaultTabletPickerConfig(defaultTabletPickerConfig?: any): void,
		setDisplayField(displayField?: any): void,
		setHiddenName(hiddenName?: string): void,
		setName(name?: string): void,
		setOptions(options?: any[]): void,
		setStore(store?: any): void,
		setUi(ui?: string): void,
		setUsePicker(usePicker?: any): void,
		setValueField(valueField?: any): void,
		showPicker(): void,
		updateOptions(newOptions?: any[]): Ext.field.ISelect
	}

	declare export interface ISlider {
		cls?: any,
		increment?: number,
		maxValue?: number,
		minValue?: number,
		readOnly?: boolean,
		tabIndex?: number,
		value?: any,
		values?: any,
		getCls(): string,
		getIncrement(): number,
		getMaxValue(): number,
		getMinValue(): number,
		getReadOnly(): boolean,
		getValue(): any,
		getValues(): any,
		isDirty(): boolean,
		reset(): Ext.field.IField,
		setCls(cls?: string): void,
		setIncrement(increment?: number): void,
		setMaxValue(maxValue?: number): void,
		setMinValue(minValue?: number): void,
		setReadOnly(readOnly?: boolean): void,
		setTabIndex(tabIndex?: any): void,
		setValue(value?: any): void,
		setValues(value?: any): void
	}

	declare export interface ISpinner {
		accelerateOnTapHold?: boolean,
		cls?: any,
		component?: any,
		cycle?: boolean,
		defaultValue?: number,
		groupButtons?: boolean,
		increment?: string,
		incrementValue?: string,
		maxValue?: number,
		minValue?: number,
		stepValue?: number,
		getAccelerateOnTapHold(): boolean,
		getCls(): string,
		getComponent(): any,
		getCycle(): boolean,
		getDefaultValue(): number,
		getGroupButtons(): boolean,
		getMaxValue(): number,
		getMinValue(): number,
		getStepValue(): number,
		reset(): Ext.field.IField,
		setAccelerateOnTapHold(accelerateOnTapHold?: boolean): void,
		setCls(cls?: string): void,
		setComponent(component?: any): void,
		setCycle(cycle?: boolean): void,
		setDefaultValue(defaultValue?: number): void,
		setGroupButtons(groupButtons?: boolean): void,
		setMaxValue(maxValue?: number): void,
		setMinValue(minValue?: number): void,
		setStepValue(stepValue?: number): void,
		updateComponent(newComponent?: any): void
	}

	declare export interface IText {
		autoCapitalize?: boolean,
		autoComplete?: boolean,
		autoCorrect?: boolean,
		bubbleEvents?: any,
		clearIcon?: boolean,
		component?: any,
		maxLength?: number,
		placeHolder?: string,
		readOnly?: boolean,
		ui?: string,
		startValue?: any,
		blur(): Ext.field.IText,
		focus(): Ext.field.IText,
		getAutoCapitalize(): boolean,
		getAutoComplete(): boolean,
		getAutoCorrect(): boolean,
		getClearIcon(): boolean,
		getComponent(): any,
		getMaxLength(): number,
		getPlaceHolder(): string,
		getReadOnly(): boolean,
		getUi(): string,
		getValue(): any,
		isDirty(): boolean,
		reset(): Ext.field.IField,
		resetOriginalValue(): void,
		select(): Ext.field.IText,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setAutoComplete(autoComplete?: boolean): void,
		setAutoCorrect(autoCorrect?: boolean): void,
		setBubbleEvents(bubbleEvents?: any[]): void,
		setClearIcon(clearIcon?: boolean): void,
		setComponent(component?: any): void,
		setMaxLength(maxLength?: number): void,
		setPlaceHolder(placeHolder?: string): void,
		setReadOnly(readOnly?: boolean): void,
		setUi(ui?: string): void
	}

	declare export interface ITextArea {
		autoCapitalize?: boolean,
		component?: any,
		maxRows?: number,
		ui?: string,
		getAutoCapitalize(): boolean,
		getComponent(): any,
		getMaxRows(): number,
		getUi(): string,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setComponent(component?: any): void,
		setMaxRows(maxRows?: number): void,
		setUi(ui?: string): void
	}

	declare export interface ITextAreaInput {
		
	}

	declare export interface IToggle {
		cls?: string,
		labelAlign?: string,
		maxValueCls?: string,
		minValueCls?: string,
		toggleOffLabel?: string,
		toggleOnLabel?: string,
		getCls(): string,
		getLabelAlign(): string,
		getMaxValueCls(): string,
		getMinValueCls(): string,
		getValue(): any,
		setCls(cls?: string): void,
		setLabelAlign(labelAlign?: string): void,
		setMaxValueCls(maxValueCls?: string): void,
		setMinValueCls(minValueCls?: string): void,
		setValue(newValue?: number): any,
		toggle(): any
	}

	declare export interface IUrl {
		autoCapitalize?: boolean,
		component?: any,
		getAutoCapitalize(): boolean,
		getComponent(): any,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setComponent(component?: any): void
	}

			
}

declare module 'form' {
		declare export interface ICheckbox {
		checked?: boolean,
		component?: any,
		ui?: string,
		value?: string,
		check(): Ext.field.ICheckbox,
		doChecked(): void,
		doUnChecked(): void,
		getChecked(): any,
		getComponent(): any,
		getGroupValues(): any[],
		getSubmitValue(): any,
		getUi(): string,
		getValue(): string,
		isChecked(): boolean,
		reset(): Ext.field.IField,
		resetGroupValues(): Ext.field.ICheckbox,
		setComponent(component?: any): void,
		setGroupValues(values?: any[]): Ext.field.ICheckbox,
		setUi(ui?: string): void,
		setValue(value?: string): void,
		uncheck(): Ext.field.ICheckbox
	}

	declare export interface IDatePicker {
		dateFormat?: string,
		destroyPickerOnHide?: boolean,
		picker?: any,
		ui?: string,
		value?: any,
		getDateFormat(): string,
		getDatePicker(): void,
		getDestroyPickerOnHide(): boolean,
		getFormattedValue(format?: string): string,
		getUi(): string,
		getValue(): any,
		onChange(): void,
		reset(): Ext.field.IField,
		setDateFormat(dateFormat?: string): void,
		setDestroyPickerOnHide(destroyPickerOnHide?: boolean): void,
		setPicker(picker?: any): void,
		setUi(ui?: string): void,
		setValue(value?: any): void
	}

	declare export interface IEmail {
		autoCapitalize?: boolean,
		component?: any,
		getAutoCapitalize(): boolean,
		getComponent(): any,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setComponent(component?: any): void
	}

	declare export interface IField {
		baseCls?: string,
		clearIcon?: boolean,
		component?: any,
		fieldCls?: string,
		fieldLabel?: string,
		inputCls?: string,
		inputType?: string,
		label?: string,
		labelAlign?: string,
		labelCls?: string,
		labelWidth?: any,
		labelWrap?: boolean,
		name?: string,
		required?: boolean,
		requiredCls?: string,
		tabIndex?: number,
		useClearIcon?: string,
		value?: any,
		isField?: boolean,
		labelEl?: Ext.IElement,
		originalValue?: any,
		getBaseCls(): string,
		getClearIcon(): boolean,
		getInputCls(): string,
		getInputType(): string,
		getLabel(): string,
		getLabelAlign(): string,
		getLabelCls(): string,
		getLabelWidth(): any,
		getLabelWrap(): boolean,
		getName(): string,
		getRequired(): boolean,
		getRequiredCls(): string,
		getTabIndex(): number,
		getValue(): any,
		isDirty(): boolean,
		reset(): Ext.field.IField,
		resetOriginalValue(): void,
		setBaseCls(baseCls?: string): void,
		setClearIcon(clearIcon?: boolean): void,
		setInputCls(inputCls?: string): void,
		setInputType(inputType?: string): void,
		setLabel(label?: string): void,
		setLabelAlign(labelAlign?: string): void,
		setLabelCls(labelCls?: string): void,
		setLabelWidth(labelWidth?: any): void,
		setLabelWrap(labelWrap?: boolean): void,
		setName(name?: string): void,
		setRequired(required?: boolean): void,
		setRequiredCls(requiredCls?: string): void,
		setTabIndex(tabIndex?: number): void,
		setValue(value?: any): void
	}

	declare export interface IHidden {
		component?: any,
		ui?: string,
		getComponent(): any,
		getUi(): string,
		setComponent(component?: any): void,
		setUi(ui?: string): void
	}

	declare export interface INumber {
		component?: any,
		maxValue?: number,
		minValue?: number,
		stepValue?: number,
		ui?: string,
		getComponent(): any,
		getMaxValue(): number,
		getMinValue(): number,
		getStepValue(): number,
		getUi(): string,
		getValue(): any,
		setComponent(component?: any): void,
		setMaxValue(maxValue?: number): void,
		setMinValue(minValue?: number): void,
		setStepValue(stepValue?: number): void,
		setUi(ui?: string): void
	}

	declare export interface IPassword {
		autoCapitalize?: boolean,
		component?: any,
		getAutoCapitalize(): boolean,
		getComponent(): any,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setComponent(component?: any): void
	}

	declare export interface IRadio {
		component?: any,
		ui?: string,
		getComponent(): any,
		getGroupValue(): string,
		getSubmitValue(): any,
		getUi(): string,
		getValue(): string,
		setComponent(component?: any): void,
		setGroupValue(value?: string): Ext.field.IRadio,
		setUi(ui?: string): void,
		setValue(value?: any): Ext.field.IRadio
	}

	declare export interface ISearch {
		component?: any,
		ui?: string,
		getComponent(): any,
		getUi(): string,
		setComponent(component?: any): void,
		setUi(ui?: string): void
	}

	declare export interface ISelect {
		autoSelect?: boolean,
		defaultPhonePickerConfig?: any,
		defaultTabletPickerConfig?: any,
		displayField?: any,
		hiddenName?: string,
		name?: string,
		options?: any[],
		store?: any,
		ui?: string,
		usePicker?: any,
		valueField?: any,
		destroy(): void,
		getAutoSelect(): boolean,
		getDefaultPhonePickerConfig(): any,
		getDefaultTabletPickerConfig(): any,
		getDisplayField(): any,
		getHiddenName(): string,
		getName(): string,
		getOptions(): any[],
		getRecord(): Ext.data.IModel,
		getStore(): any,
		getUi(): string,
		getUsePicker(): any,
		getValue(): any,
		getValueField(): any,
		onStoreDataChanged(store?: any): void,
		reset(): Ext.field.ISelect,
		setAutoSelect(autoSelect?: boolean): void,
		setDefaultPhonePickerConfig(defaultPhonePickerConfig?: any): void,
		setDefaultTabletPickerConfig(defaultTabletPickerConfig?: any): void,
		setDisplayField(displayField?: any): void,
		setHiddenName(hiddenName?: string): void,
		setName(name?: string): void,
		setOptions(options?: any[]): void,
		setStore(store?: any): void,
		setUi(ui?: string): void,
		setUsePicker(usePicker?: any): void,
		setValueField(valueField?: any): void,
		showPicker(): void,
		updateOptions(newOptions?: any[]): Ext.field.ISelect
	}

	declare export interface ISlider {
		cls?: any,
		increment?: number,
		maxValue?: number,
		minValue?: number,
		readOnly?: boolean,
		tabIndex?: number,
		value?: any,
		values?: any,
		getCls(): string,
		getIncrement(): number,
		getMaxValue(): number,
		getMinValue(): number,
		getReadOnly(): boolean,
		getValue(): any,
		getValues(): any,
		isDirty(): boolean,
		reset(): Ext.field.IField,
		setCls(cls?: string): void,
		setIncrement(increment?: number): void,
		setMaxValue(maxValue?: number): void,
		setMinValue(minValue?: number): void,
		setReadOnly(readOnly?: boolean): void,
		setTabIndex(tabIndex?: any): void,
		setValue(value?: any): void,
		setValues(value?: any): void
	}

	declare export interface ISpinner {
		accelerateOnTapHold?: boolean,
		cls?: any,
		component?: any,
		cycle?: boolean,
		defaultValue?: number,
		groupButtons?: boolean,
		increment?: string,
		incrementValue?: string,
		maxValue?: number,
		minValue?: number,
		stepValue?: number,
		getAccelerateOnTapHold(): boolean,
		getCls(): string,
		getComponent(): any,
		getCycle(): boolean,
		getDefaultValue(): number,
		getGroupButtons(): boolean,
		getMaxValue(): number,
		getMinValue(): number,
		getStepValue(): number,
		reset(): Ext.field.IField,
		setAccelerateOnTapHold(accelerateOnTapHold?: boolean): void,
		setCls(cls?: string): void,
		setComponent(component?: any): void,
		setCycle(cycle?: boolean): void,
		setDefaultValue(defaultValue?: number): void,
		setGroupButtons(groupButtons?: boolean): void,
		setMaxValue(maxValue?: number): void,
		setMinValue(minValue?: number): void,
		setStepValue(stepValue?: number): void,
		updateComponent(newComponent?: any): void
	}

	declare export interface IText {
		autoCapitalize?: boolean,
		autoComplete?: boolean,
		autoCorrect?: boolean,
		bubbleEvents?: any,
		clearIcon?: boolean,
		component?: any,
		maxLength?: number,
		placeHolder?: string,
		readOnly?: boolean,
		ui?: string,
		startValue?: any,
		blur(): Ext.field.IText,
		focus(): Ext.field.IText,
		getAutoCapitalize(): boolean,
		getAutoComplete(): boolean,
		getAutoCorrect(): boolean,
		getClearIcon(): boolean,
		getComponent(): any,
		getMaxLength(): number,
		getPlaceHolder(): string,
		getReadOnly(): boolean,
		getUi(): string,
		getValue(): any,
		isDirty(): boolean,
		reset(): Ext.field.IField,
		resetOriginalValue(): void,
		select(): Ext.field.IText,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setAutoComplete(autoComplete?: boolean): void,
		setAutoCorrect(autoCorrect?: boolean): void,
		setBubbleEvents(bubbleEvents?: any[]): void,
		setClearIcon(clearIcon?: boolean): void,
		setComponent(component?: any): void,
		setMaxLength(maxLength?: number): void,
		setPlaceHolder(placeHolder?: string): void,
		setReadOnly(readOnly?: boolean): void,
		setUi(ui?: string): void
	}

	declare export interface ITextArea {
		autoCapitalize?: boolean,
		component?: any,
		maxRows?: number,
		ui?: string,
		getAutoCapitalize(): boolean,
		getComponent(): any,
		getMaxRows(): number,
		getUi(): string,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setComponent(component?: any): void,
		setMaxRows(maxRows?: number): void,
		setUi(ui?: string): void
	}

	declare export interface IToggle {
		cls?: string,
		labelAlign?: string,
		maxValueCls?: string,
		minValueCls?: string,
		toggleOffLabel?: string,
		toggleOnLabel?: string,
		getCls(): string,
		getLabelAlign(): string,
		getMaxValueCls(): string,
		getMinValueCls(): string,
		getValue(): any,
		setCls(cls?: string): void,
		setLabelAlign(labelAlign?: string): void,
		setMaxValueCls(maxValueCls?: string): void,
		setMinValueCls(minValueCls?: string): void,
		setValue(newValue?: number): any,
		toggle(): any
	}

	declare export interface IUrl {
		autoCapitalize?: boolean,
		component?: any,
		getAutoCapitalize(): boolean,
		getComponent(): any,
		setAutoCapitalize(autoCapitalize?: boolean): void,
		setComponent(component?: any): void
	}

	declare export interface IFieldSet {
		baseCls?: string,
		instructions?: string,
		title?: string,
		doSetDisabled(newDisabled?: any): Ext.form.IFieldSet,
		getBaseCls(): string,
		setBaseCls(baseCls?: string): void,
		setInstructions(instructions?: string): void,
		setTitle(title?: string): void
	}

	declare export interface IPanel {
		baseCls?: string,
		baseParams?: any,
		method?: string,
		record?: Ext.data.IModel,
		scrollable?: any,
		standardSubmit?: boolean,
		submitOnAction?: any,
		trackResetOnLoad?: boolean,
		url?: string,
		waitMsgTarget?: Ext.dom.IElement,
		waitTpl?: any,
		doSetDisabled(newDisabled?: any): Ext.form.IPanel,
		getBaseCls(): string,
		getBaseParams(): any,
		getMethod(): string,
		getRecord(): Ext.data.IModel,
		getStandardSubmit(): boolean,
		getSubmitOnAction(): any,
		getTrackResetOnLoad(): boolean,
		getUrl(): string,
		getValues(enabled?: boolean, all?: boolean): any,
		hideMask(): Ext.form.IPanel,
		load(record?: Ext.data.IModel): Ext.form.IPanel,
		loadModel(record?: Ext.data.IModel): Ext.form.IPanel,
		loadRecord(record?: Ext.data.IModel): Ext.form.IPanel,
		reset(): Ext.form.IPanel,
		setBaseCls(baseCls?: string): void,
		setBaseParams(baseParams?: any): void,
		setMethod(method?: string): void,
		setRecord(record?: Ext.data.IModel): Ext.form.IPanel,
		setScrollable(scrollable?: any): void,
		setStandardSubmit(standardSubmit?: boolean): void,
		setSubmitOnAction(submitOnAction?: any): void,
		setTrackResetOnLoad(trackResetOnLoad?: boolean): void,
		setUrl(url?: string): void,
		setValues(values?: any): Ext.form.IPanel,
		showMask(cfg?: any, target?: any): Ext.form.IPanel,
		submit(options?: any): Ext.data.IConnection
	}

	declare export interface IFormPanel {
		baseCls?: string,
		baseParams?: any,
		method?: string,
		record?: Ext.data.IModel,
		scrollable?: any,
		standardSubmit?: boolean,
		submitOnAction?: any,
		trackResetOnLoad?: boolean,
		url?: string,
		waitMsgTarget?: Ext.dom.IElement,
		waitTpl?: any,
		doSetDisabled(newDisabled?: any): Ext.form.IPanel,
		getBaseCls(): string,
		getBaseParams(): any,
		getMethod(): string,
		getRecord(): Ext.data.IModel,
		getStandardSubmit(): boolean,
		getSubmitOnAction(): any,
		getTrackResetOnLoad(): boolean,
		getUrl(): string,
		getValues(enabled?: boolean, all?: boolean): any,
		hideMask(): Ext.form.IPanel,
		load(record?: Ext.data.IModel): Ext.form.IPanel,
		loadModel(record?: Ext.data.IModel): Ext.form.IPanel,
		loadRecord(record?: Ext.data.IModel): Ext.form.IPanel,
		reset(): Ext.form.IPanel,
		setBaseCls(baseCls?: string): void,
		setBaseParams(baseParams?: any): void,
		setMethod(method?: string): void,
		setRecord(record?: Ext.data.IModel): Ext.form.IPanel,
		setScrollable(scrollable?: any): void,
		setStandardSubmit(standardSubmit?: boolean): void,
		setSubmitOnAction(submitOnAction?: any): void,
		setTrackResetOnLoad(trackResetOnLoad?: boolean): void,
		setUrl(url?: string): void,
		setValues(values?: any): Ext.form.IPanel,
		showMask(cfg?: any, target?: any): Ext.form.IPanel,
		submit(options?: any): Ext.data.IConnection
	}

			
}

declare module 'animation' {
		declare export interface IAbstract {
		before?: any,
		easing?: string,
		destroy(): void,
		getAfter(): any,
		getBefore(): any,
		getDelay(): number,
		getDirection(): string,
		getDuration(): number,
		getEasing(): string,
		getElement(): any,
		getIteration(): number,
		getName(): string,
		getOnBeforeEnd(): any,
		getOnBeforeStart(): any,
		getOnEnd(): any,
		getPreserveEndState(): boolean,
		getReplacePrevious(): boolean,
		getReverse(): any,
		getScope(): any,
		setAfter(after?: any): void,
		setBefore(before?: any): void,
		setDelay(delay?: number): void,
		setDirection(direction?: string): void,
		setDuration(duration?: number): void,
		setEasing(easing?: string): void,
		setElement(element?: any): void,
		setIteration(iteration?: number): void,
		setName(name?: string): void,
		setOnBeforeEnd(onBeforeEnd?: any): void,
		setOnBeforeStart(onBeforeStart?: any): void,
		setOnEnd(onEnd?: any): void,
		setPreserveEndState(preserveEndState?: boolean): void,
		setReplacePrevious(replacePrevious?: boolean): void,
		setReverse(reverse?: any): void,
		setScope(scope?: any): void
	}

	declare export interface ICube {
		before?: any,
		direction?: string,
		getAfter(): any,
		getBefore(): any,
		getDirection(): string,
		getOut(): boolean,
		setAfter(after?: any): void,
		setBefore(before?: any): void,
		setDirection(direction?: string): void,
		setOut(out?: boolean): void
	}

	declare export interface IFade {
		before?: any,
		out?: boolean,
		getAfter(): any,
		getBefore(): any,
		getOut(): boolean,
		getReverse(): any,
		setAfter(after?: any): void,
		setBefore(before?: any): void,
		setOut(out?: boolean): void,
		setReverse(reverse?: any): void
	}

	declare export interface IFadeIn {
		before?: any,
		out?: boolean,
		getAfter(): any,
		getBefore(): any,
		getOut(): boolean,
		getReverse(): any,
		setAfter(after?: any): void,
		setBefore(before?: any): void,
		setOut(out?: boolean): void,
		setReverse(reverse?: any): void
	}

	declare export interface IFadeOut {
		before?: any,
		getBefore(): any,
		setBefore(before?: any): void
	}

	declare export interface IFlip {
		direction?: string,
		easing?: string,
		getDirection(): string,
		getEasing(): string,
		getHalf(): boolean,
		getOut(): any,
		setDirection(direction?: string): void,
		setEasing(easing?: string): void,
		setHalf(half?: boolean): void,
		setOut(out?: any): void
	}

	declare export interface IPop {
		before?: any,
		out?: boolean,
		getAfter(): any,
		getBefore(): any,
		getOut(): boolean,
		setAfter(after?: any): void,
		setBefore(before?: any): void,
		setOut(out?: boolean): void
	}

	declare export interface IPopIn {
		before?: any,
		out?: boolean,
		getAfter(): any,
		getBefore(): any,
		getOut(): boolean,
		setAfter(after?: any): void,
		setBefore(before?: any): void,
		setOut(out?: boolean): void
	}

	declare export interface IPopOut {
		before?: any,
		getBefore(): any,
		setBefore(before?: any): void
	}

	declare export interface ISlide {
		direction?: string,
		easing?: string,
		offset?: number,
		out?: boolean,
		getDirection(): string,
		getEasing(): string,
		getIsElementBoxFit(): boolean,
		getOffset(): number,
		getOut(): boolean,
		getUseCssTransform(): boolean,
		setContainerBox(containerBox?: string): void,
		setDirection(direction?: string): void,
		setEasing(easing?: string): void,
		setElementBox(elementBox?: string): void,
		setIsElementBoxFit(isElementBoxFit?: boolean): void,
		setOffset(offset?: number): void,
		setOut(out?: boolean): void,
		setUseCssTransform(useCssTransform?: boolean): void
	}

	declare export interface ISlideIn {
		direction?: string,
		easing?: string,
		offset?: number,
		out?: boolean,
		getDirection(): string,
		getEasing(): string,
		getIsElementBoxFit(): boolean,
		getOffset(): number,
		getOut(): boolean,
		getUseCssTransform(): boolean,
		setContainerBox(containerBox?: string): void,
		setDirection(direction?: string): void,
		setEasing(easing?: string): void,
		setElementBox(elementBox?: string): void,
		setIsElementBoxFit(isElementBoxFit?: boolean): void,
		setOffset(offset?: number): void,
		setOut(out?: boolean): void,
		setUseCssTransform(useCssTransform?: boolean): void
	}

	declare export interface ISlideOut {
		
	}

	declare export interface IWipe {
		direction?: string,
		easing?: string,
		out?: boolean,
		getDirection(): string,
		getEasing(): string,
		getOut(): boolean,
		setDirection(direction?: string): void,
		setEasing(easing?: string): void,
		setOut(out?: boolean): void
	}

	declare export interface IWipeIn {
		direction?: string,
		easing?: string,
		out?: boolean,
		getDirection(): string,
		getEasing(): string,
		getOut(): boolean,
		setDirection(direction?: string): void,
		setEasing(easing?: string): void,
		setOut(out?: boolean): void
	}

	declare export interface IWipeOut {
		
	}

			
}

declare module 'fx' {
		declare export interface IAnimation {
		
	}

	declare export interface IEasing {
		
	}

	declare export interface IRunner {
		
	}

	declare export interface IState {
		
	}

			
}

declare module 'easing' {
		declare export interface IAbstract {
		getStartTime(): number,
		getStartValue(): number,
		setStartTime(startTime?: number): void,
		setStartValue(startValue?: number): void
	}

	declare export interface IBounce {
		getAcceleration(): number,
		getSpringTension(): number,
		getStartVelocity(): number,
		setAcceleration(acceleration?: number): void,
		setSpringTension(springTension?: number): void,
		setStartVelocity(startVelocity?: number): void
	}

	declare export interface IBoundMomentum {
		bounce?: any,
		minVelocity?: number,
		momentum?: any,
		startVelocity?: number,
		getBounce(): any,
		getMaxMomentumValue(): number,
		getMinMomentumValue(): number,
		getMinVelocity(): number,
		getMomentum(): any,
		getStartVelocity(): number,
		setBounce(bounce?: any): void,
		setMaxMomentumValue(maxMomentumValue?: number): void,
		setMinMomentumValue(minMomentumValue?: number): void,
		setMinVelocity(minVelocity?: number): void,
		setMomentum(momentum?: any): void,
		setStartVelocity(startVelocity?: number): void
	}

	declare export interface IEaseIn {
		getDuration(): number,
		getExponent(): number,
		setDuration(duration?: number): void,
		setExponent(exponent?: number): void
	}

	declare export interface IEaseOut {
		getDuration(): number,
		getExponent(): number,
		setDuration(duration?: number): void,
		setExponent(exponent?: number): void
	}

	declare export interface ILinear {
		getDuration(): number,
		getEndValue(): number,
		setDuration(duration?: number): void,
		setEndValue(endValue?: number): void
	}

	declare export interface IMomentum {
		getAcceleration(): number,
		getFriction(): number,
		getStartVelocity(): number,
		setAcceleration(acceleration?: number): void,
		setFriction(friction?: number): void,
		setStartVelocity(startVelocity?: number): void
	}

			
}

declare module 'card' {
		declare export interface IAbstract {
		destroy(): void,
		getDirection(): string,
		getDuration(): any,
		getLayout(): any,
		getReverse(): any,
		setDirection(direction?: string): void,
		setDuration(duration?: any): void,
		setLayout(layout?: any): void,
		setReverse(reverse?: any): void
	}

	declare export interface ICover {
		getInAnimation(): any,
		getOutAnimation(): any,
		getReverse(): any,
		setInAnimation(inAnimation?: any): void,
		setOutAnimation(outAnimation?: any): void,
		setReverse(reverse?: any): void
	}

	declare export interface ICube {
		getInAnimation(): any,
		getOutAnimation(): any,
		getReverse(): any,
		setInAnimation(inAnimation?: any): void,
		setOutAnimation(outAnimation?: any): void,
		setReverse(reverse?: any): void
	}

	declare export interface IFade {
		getInAnimation(): any,
		getOutAnimation(): any,
		getReverse(): any,
		setInAnimation(inAnimation?: any): void,
		setOutAnimation(outAnimation?: any): void,
		setReverse(reverse?: any): void
	}

	declare export interface IFlip {
		getDuration(): number,
		getInAnimation(): any,
		getOutAnimation(): any,
		setDuration(duration?: number): void,
		setInAnimation(inAnimation?: any): void,
		setOutAnimation(outAnimation?: any): void
	}

	declare export interface IPop {
		getDuration(): number,
		getInAnimation(): any,
		getOutAnimation(): any,
		setDuration(duration?: number): void,
		setInAnimation(inAnimation?: any): void,
		setOutAnimation(outAnimation?: any): void
	}

	declare export interface IReveal {
		getInAnimation(): any,
		getOutAnimation(): any,
		setInAnimation(inAnimation?: any): void,
		setOutAnimation(outAnimation?: any): void
	}

	declare export interface IScroll {
		getDuration(): number,
		setDuration(duration?: number): void
	}

	declare export interface IScrollCover {
		
	}

	declare export interface IScrollReveal {
		
	}

	declare export interface ISlide {
		getInAnimation(): any,
		getOutAnimation(): any,
		setInAnimation(inAnimation?: any): void,
		setOutAnimation(outAnimation?: any): void
	}

	declare export interface IStyle {
		destroy(): void,
		getInAnimation(): any,
		getOutAnimation(): any,
		setInAnimation(inAnimation?: any): void,
		setOutAnimation(outAnimation?: any): void
	}

			
}

declare module 'runner' {
		declare export interface ICss {
		
	}

	declare export interface ICssAnimation {
		
	}

	declare export interface ICssTransition {
		
	}

			
}

declare module 'wrapper' {
		declare export interface IBoxDock {
		destroy(): void,
		getBodyElement(): any,
		getContainer(): any,
		getDirection(): string,
		getElement(): any,
		getInnerWrapper(): any,
		getSizeState(): boolean,
		setBodyElement(bodyElement?: any): void,
		setContainer(container?: any): void,
		setDirection(direction?: string): void,
		setElement(element?: any): void,
		setInnerWrapper(innerWrapper?: any): void,
		setSizeState(sizeState?: boolean): void
	}

	declare export interface IDock {
		destroy(): void,
		getBodyElement(): any,
		getContainer(): any,
		getDirection(): string,
		getElement(): any,
		getInnerWrapper(): any,
		getSizeState(): boolean,
		setBodyElement(bodyElement?: any): void,
		setContainer(container?: any): void,
		setDirection(direction?: string): void,
		setElement(element?: any): void,
		setInnerWrapper(innerWrapper?: any): void,
		setSizeState(sizeState?: boolean): void
	}

	declare export interface IInner {
		getContainer(): any,
		getSizeState(): any,
		setContainer(container?: any): void,
		setSizeState(sizeState?: any): void
	}

			
}

declare module 'mixin' {
		declare export interface IBindable {
		
	}

	declare export interface IFilterable {
		filterRoot?: string,
		filters?: any[],
		currentSortFn?: any,
		dirtyFilterFn?: boolean,
		filtered?: boolean,
		addFilter(filter?: any): void,
		addFilters(filters?: any[]): any,
		filter(data?: any[]): any[],
		getFilterFn(): any,
		getFilterRoot(): string,
		getFilters(): any[],
		insertFilter(index?: number, filter?: any): any,
		insertFilters(index?: number, filters?: any[]): any[],
		removeFilters(filters?: any[]): void,
		setFilterRoot(filterRoot?: string): void,
		setFilters(filters?: any[]): void
	}

	declare export interface IIdentifiable {
		getId(): any
	}

	declare export interface IMixin {
		
	}

	declare export interface IObservable {
		bubbleEvents?: any,
		listeners?: any,
		addAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		addEvents(eventNames?: any): void,
		addListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		addManagedListener(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		clearListeners(): void,
		destroy(): void,
		enableBubble(events?: any): void,
		fireAction(eventName?: string, args?: any[], fn?: any, scope?: any): any,
		fireEvent(eventName: string, ...args: any[]): boolean,
		getBubbleEvents(): any,
		getId(): any,
		getListeners(): any,
		hasListener(eventName?: string): boolean,
		mon(object?: any, eventName?: any, fn?: any, scope?: any, options?: any): void,
		mun(object?: any, eventName?: any, fn?: any, scope?: any): void,
		on(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		onAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		onBefore(eventName?: any, fn?: any, scope?: any, options?: any): void,
		relayEvents(object?: any, events?: any): Ext.mixin.IObservable,
		removeAfterListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeBeforeListener(eventName?: any, fn?: any, scope?: any, options?: any): void,
		removeListener(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		removeManagedListener(object?: any, eventName?: any, fn?: any, scope?: any): void,
		resumeEvents(discardQueuedEvents?: boolean): void,
		setBubbleEvents(bubbleEvents?: any): void,
		setListeners(listeners?: any): void,
		suspendEvents(): void,
		un(eventName?: any, fn?: any, scope?: any, options?: any, order?: string): void,
		unAfter(eventName?: any, fn?: any, scope?: any, options?: any): void,
		unBefore(eventName?: any, fn?: any, scope?: any, options?: any): void
	}

	declare export interface ISelectable {
		allowDeselect?: boolean,
		deselectOnContainerClick?: boolean,
		disableSelection?: boolean,
		locked?: boolean,
		mode?: string,
		clearSelections(): void,
		deselect(records?: any, suppressEvent?: boolean): void,
		deselectAll(supress?: any): void,
		doDeselect(records?: any, suppressEvent?: boolean): void,
		doSelect(records?: any, keepExisting?: boolean, suppressEvent?: boolean): void,
		getAllowDeselect(): boolean,
		getCount(): number,
		getDeselectOnContainerClick(): boolean,
		getDisableSelection(): boolean,
		getLastSelected(): any[],
		getMode(): string,
		getSelection(): any[],
		getSelectionCount(): number,
		getSelectionMode(): string,
		hasSelection(): boolean,
		isLocked(): boolean,
		isSelected(record?: any): boolean,
		select(records?: any, keepExisting?: boolean, suppressEvent?: boolean): void,
		selectAll(silent?: boolean): void,
		selectRange(startRecord?: number, endRecord?: number, keepExisting?: boolean): void,
		setAllowDeselect(allowDeselect?: boolean): void,
		setDeselectOnContainerClick(deselectOnContainerClick?: boolean): void,
		setDisableSelection(disableSelection?: boolean): void,
		setLastFocused(): void,
		setMode(mode?: string): void,
		updateLastFocused(newRecord?: Ext.data.IRecord, oldRecord?: Ext.data.IRecord): void
	}

	declare export interface ISortable {
		defaultSortDirection?: string,
		sortRoot?: string,
		sorters?: any[],
		currentSortFn?: any,
		dirtySortFn?: boolean,
		sorted?: boolean,
		addSorter(sorter?: any, defaultDirection?: string): void,
		addSorters(sorters?: any[], defaultDirection?: string): void,
		findInsertionIndex(items?: any[], item?: any): number,
		getDefaultSortDirection(): string,
		getSortFn(): any,
		getSortRoot(): string,
		getSorters(): any[],
		insertSorter(index?: number, sorter?: any, defaultDirection?: string): void,
		insertSorters(index?: number, sorters?: any[], defaultDirection?: string): void,
		removeSorter(sorter?: any): void,
		removeSorters(sorters?: any[]): void,
		setDefaultSortDirection(defaultSortDirection?: string): void,
		setSortRoot(sortRoot?: string): void,
		setSorters(sorters?: any[]): void,
		sort(data?: any[]): any[]
	}

	declare export interface ITemplatable {
		
	}

	declare export interface ITraversable {
		
	}

			
}

declare module 'navigation' {
		declare export interface IBar {
		androidAnimation?: boolean,
		baseCls?: string,
		cls?: string,
		ui?: string,
		getAndroidAnimation(): boolean,
		getBaseCls(): string,
		getCls(): string,
		getUi(): string,
		setAndroidAnimation(androidAnimation?: boolean): void,
		setBaseCls(baseCls?: string): void,
		setCls(cls?: string): void,
		setUi(ui?: string): void
	}

	declare export interface IView {
		baseCls?: string,
		defaultBackButtonText?: string,
		items?: any,
		navigationBar?: any,
		useTitleForBackButtonText?: boolean,
		getBaseCls(): string,
		getDefaultBackButtonText(): string,
		getItems(): any,
		getNavigationBar(): any,
		getPreviousItem(): any,
		getUseTitleForBackButtonText(): boolean,
		pop(count?: number): Ext.IComponent,
		push(view?: any): Ext.IComponent,
		reset(): Ext.IComponent,
		setBaseCls(baseCls?: string): void,
		setDefaultBackButtonText(defaultBackButtonText?: string): void,
		setItems(items?: any): void,
		setNavigationBar(navigationBar?: any): void,
		setUseTitleForBackButtonText(useTitleForBackButtonText?: boolean): void
	}

			
}

declare module 'picker' {
		declare export interface IDate {
		dayText?: string,
		doneButton?: any,
		monthText?: string,
		slotOrder?: any[],
		value?: any,
		yearFrom?: number,
		yearText?: string,
		yearTo?: number,
		getDayText(): string,
		getDoneButton(): any,
		getMonthText(): string,
		getSlotOrder(): any[],
		getValue(useDom?: any): any,
		getYearFrom(): number,
		getYearText(): string,
		getYearTo(): number,
		initialize(): void,
		setDayText(dayText?: string): void,
		setDoneButton(doneButton?: any): void,
		setMonthText(monthText?: string): void,
		setSlotOrder(slotOrder?: any[]): void,
		setValue(value?: any, animated?: any): Ext.IPicker,
		setYearFrom(yearFrom?: number): void,
		setYearText(yearText?: string): void,
		setYearTo(yearTo?: number): void,
		updateDayText(newDayText?: any, oldDayText?: any): void,
		updateMonthText(newMonthText?: any, oldMonthText?: any): void,
		updateYearFrom(): void,
		updateYearText(yearText?: any): void,
		updateYearTo(): void
	}

	declare export interface IPicker {
		activeCls?: string,
		baseCls?: string,
		bottom?: any,
		cancelButton?: any,
		doneButton?: any,
		height?: number,
		layout?: any,
		left?: any,
		right?: any,
		slots?: any[],
		toolbar?: any,
		useTitles?: boolean,
		value?: any,
		applyCancelButton(config?: any): any,
		applyDoneButton(config?: any): any,
		destroy(): void,
		getBaseCls(): string,
		getBottom(): number,
		getCancelButton(): any,
		getCard(): any,
		getDoneButton(): any,
		getLayout(): any,
		getSlots(): any[],
		getToolbar(): any,
		getToolbarPosition(): string,
		getUseTitles(): boolean,
		getValue(useDom?: any): any,
		getValues(): any,
		initialize(): void,
		setBaseCls(baseCls?: string): void,
		setBottom(bottom?: number): void,
		setCancelButton(cancelButton?: any): void,
		setCard(activeItem?: any): void,
		setDoneButton(doneButton?: any): void,
		setHeight(height?: number): void,
		setLayout(layout?: any): void,
		setLeft(left?: number): void,
		setRight(right?: number): void,
		setSlots(slots?: any[]): void,
		setToolbar(toolbar?: any): void,
		setToolbarPosition(toolbarPosition?: string): void,
		setUseTitles(useTitles?: boolean): void,
		setValue(values?: any, animated?: boolean): Ext.IPicker,
		show(): Ext.IComponent
	}

	declare export interface ISlot {
		align?: string,
		displayField?: string,
		itemTpl?: string,
		name?: string,
		title?: string,
		value?: number,
		valueField?: string,
		applyData(data?: any): any,
		applyTitle(title?: string): string,
		getAlign(): string,
		getDisplayField(): string,
		getName(): string,
		getTitle(): string,
		getValueField(): string,
		setAlign(align?: string): void,
		setDisplayField(displayField?: string): void,
		setItemTpl(itemTpl?: string): void,
		setName(name?: string): void,
		setTitle(title?: string): void,
		setValueField(valueField?: string): void,
		updateAlign(newAlign?: any, oldAlign?: any): void
	}

			
}

declare module 'plugin' {
		declare export interface IListPaging {
		autoPaging?: boolean,
		loadMoreText?: string,
		noMoreRecordsText?: string,
		getAutoPaging(): boolean,
		getLoadMoreText(): string,
		getNoMoreRecordsText(): string,
		setAutoPaging(autoPaging?: boolean): void,
		setLoadMoreText(loadMoreText?: string): void,
		setNoMoreRecordsText(noMoreRecordsText?: string): void
	}

	declare export interface IPullRefresh {
		autoSnapBack?: boolean,
		lastUpdatedDateFormat?: string,
		lastUpdatedText?: string,
		list?: Ext.dataview.IList,
		loadedText?: string,
		loadingText?: string,
		overpullSnapBackDuration?: number,
		pullRefreshText?: string,
		pullTpl?: any,
		releaseRefreshText?: string,
		snappingAnimationDuration?: number,
		getAutoSnapBack(): boolean,
		getLastUpdatedDateFormat(): string,
		getLastUpdatedText(): string,
		getList(): Ext.dataview.IList,
		getLoadedText(): string,
		getLoadingText(): string,
		getOverpullSnapBackDuration(): number,
		getPullRefreshText(): string,
		getPullTpl(): any,
		getReleaseRefreshText(): string,
		getSnappingAnimationDuration(): number,
		getTranslatable(): boolean,
		initialize(): void,
		setAutoSnapBack(autoSnapBack?: boolean): void,
		setLastUpdatedDateFormat(lastUpdatedDateFormat?: string): void,
		setLastUpdatedText(lastUpdatedText?: string): void,
		setList(list?: Ext.dataview.IList): void,
		setLoadedText(loadedText?: string): void,
		setLoadingText(loadingText?: string): void,
		setOverpullSnapBackDuration(overpullSnapBackDuration?: number): void,
		setPullRefreshText(pullRefreshText?: string): void,
		setPullTpl(pullTpl?: any): void,
		setReleaseRefreshText(releaseRefreshText?: string): void,
		setSnappingAnimationDuration(snappingAnimationDuration?: number): void,
		setTranslatable(translatable?: boolean): void
	}

			
}

declare module 'indicator' {
		declare export interface IAbstract {
		baseCls?: string,
		hidden?: boolean,
		ui?: string,
		getActive(): boolean,
		getAxis(): string,
		getBarCls(): string,
		getBaseCls(): string,
		getHidden(): boolean,
		getLength(): any,
		getMinLength(): number,
		getRatio(): number,
		getUi(): string,
		getValue(): any,
		setActive(active?: boolean): void,
		setAxis(axis?: string): void,
		setBarCls(barCls?: string): void,
		setBaseCls(baseCls?: string): void,
		setHidden(hidden?: boolean): void,
		setLength(length?: any): void,
		setMinLength(minLength?: number): void,
		setRatio(ratio?: number): void,
		setUi(ui?: string): void,
		setValue(value?: any): void
	}

	declare export interface ICssTransform {
		cls?: any,
		getCls(): string,
		setCls(cls?: string): void
	}

	declare export interface IRounded {
		cls?: any,
		getCls(): string,
		setCls(cls?: string): void
	}

	declare export interface IScrollPosition {
		cls?: any,
		getCls(): string,
		setCls(cls?: string): void
	}

			
}

declare module 'scroll' {
		declare export interface IIndicator {
		
	}

	declare export interface IScroller {
		acceleration?: number,
		direction?: string,
		directionLock?: boolean,
		disabled?: boolean,
		friction?: number,
		initialOffset?: any,
		momentumEasing?: any,
		slotSnapSize?: any,
		destroy(): void,
		getDirection(): string,
		getDirectionLock(): boolean,
		getDisabled(): boolean,
		getInitialOffset(): any,
		getMomentumEasing(): any,
		getSlotSnapEasing(): any,
		getSlotSnapSize(): any,
		getTranslatable(): any,
		isAxisEnabled(axis?: string): boolean,
		scrollBy(x?: number, y?: number, animation?: any): Ext.scroll.IScroller,
		scrollTo(x?: number, y?: number, animation?: any): Ext.scroll.IScroller,
		scrollToEnd(animation?: any): Ext.scroll.IScroller,
		setDirection(direction?: string): void,
		setDirectionLock(directionLock?: boolean): void,
		setDisabled(disabled?: boolean): void,
		setInitialOffset(initialOffset?: any): void,
		setMomentumEasing(momentumEasing?: any): void,
		setOffset(offset?: any): Ext.scroll.IScroller,
		setSlotSnapEasing(slotSnapEasing?: any): void,
		setSlotSnapSize(slotSnapSize?: any): void,
		setTranslatable(translatable?: any): void,
		updateBoundary(): Ext.scroll.IScroller
	}

	declare export interface IView {
		indicatorsUi?: string,
		destroy(): void,
		getCls(): string,
		getElement(): any,
		getIndicators(): any,
		getIndicatorsHidingDelay(): number,
		getIndicatorsUi(): string,
		getScroller(): Ext.scroll.IView,
		setCls(cls?: string): void,
		setElement(element?: any): void,
		setIndicators(indicators?: any): void,
		setIndicatorsHidingDelay(indicatorsHidingDelay?: number): void,
		setIndicatorsUi(indicatorsUi?: string): void,
		setScroller(scroller?: any): void
	}

			
}

declare module 'slider' {
		declare export interface ISlider {
		allowThumbsOverlapping?: boolean,
		animation?: any,
		animationDuration?: boolean,
		baseCls?: string,
		increment?: number,
		maxValue?: number,
		minValue?: number,
		readOnly?: boolean,
		thumbConfig?: any,
		value?: any,
		values?: any,
		applyIncrement(increment?: number): number,
		getAllowThumbsOverlapping(): boolean,
		getAnimation(): any,
		getBaseCls(): string,
		getIncrement(): number,
		getMaxValue(): number,
		getMinValue(): number,
		getReadOnly(): boolean,
		getThumb(index?: number): Ext.slider.IThumb,
		getThumbConfig(): any,
		getThumbs(): Ext.slider.IThumb[],
		getValue(): any,
		getValues(): any,
		setAllowThumbsOverlapping(allowThumbsOverlapping?: boolean): void,
		setAnimation(animation?: any): void,
		setBaseCls(baseCls?: string): void,
		setIncrement(increment?: number): void,
		setMaxValue(maxValue?: number): void,
		setMinValue(minValue?: number): void,
		setReadOnly(readOnly?: boolean): void,
		setThumbConfig(thumbConfig?: any): void,
		setValue(value?: any): void,
		setValues(value?: any): void,
		updateValue(newValue?: any, oldValue?: any): void
	}

	declare export interface IThumb {
		baseCls?: string,
		draggable?: any,
		getBaseCls(): string,
		getDraggable(): any,
		initialize(): void,
		setBaseCls(baseCls?: string): void,
		setDraggable(draggable?: any): void
	}

	declare export interface IToggle {
		baseCls?: string,
		maxValueCls?: string,
		minValueCls?: string,
		applyIncrement(): number,
		getBaseCls(): string,
		getMaxValueCls(): string,
		getMinValueCls(): string,
		setBaseCls(baseCls?: string): void,
		setMaxValueCls(maxValueCls?: string): void,
		setMinValueCls(minValueCls?: string): void,
		setValue(newValue?: any, oldValue?: any): void
	}

			
}

declare module 'tab' {
		declare export interface IBar {
		activeTab?: any,
		baseCls?: string,
		getActiveTab(): any,
		getBaseCls(): string,
		initialize(): void,
		setActiveTab(activeTab?: any): void,
		setBaseCls(baseCls?: string): void
	}

	declare export interface IPanel {
		cls?: any,
		layout?: any,
		tabBar?: any,
		tabBarDock?: boolean,
		tabBarPosition?: string,
		ui?: string,
		doTabChange(tabBar?: any, newTab?: any): boolean,
		getCls(): string,
		getLayout(): any,
		getTabBar(): any,
		getTabBarPosition(): string,
		getUi(): string,
		initialize(): void,
		setCls(cls?: string): void,
		setLayout(layout?: any): void,
		setTabBar(tabBar?: any): void,
		setTabBarPosition(tabBarPosition?: string): void,
		setUi(ui?: string): void,
		updateUi(newUi?: any, oldUi?: any): void
	}

	declare export interface ITab {
		active?: boolean,
		activeCls?: string,
		baseCls?: string,
		pressedCls?: string,
		title?: string,
		getActive(): boolean,
		getActiveCls(): string,
		getBaseCls(): string,
		getPressedCls(): string,
		getTitle(): string,
		setActive(active?: boolean): void,
		setActiveCls(activeCls?: string): void,
		setBaseCls(baseCls?: string): void,
		setPressedCls(pressedCls?: string): void,
		setTitle(title?: string): void
	}

			
}

declare module 'paintmonitor' {
		declare export interface IAbstract {
		destroy(): void,
		getArgs(): any[],
		getCallback(): any,
		getElement(): any,
		getScope(): any,
		setArgs(args?: any[]): void,
		setCallback(callback?: any): void,
		setElement(element?: any): void,
		setScope(scope?: any): void
	}

	declare export interface ICssAnimation {
		
	}

	declare export interface IOverflowChange {
		
	}

			
}

declare module 'sizemonitor' {
		declare export interface IAbstract {
		destroy(): void,
		getArgs(): any[],
		getCallback(): any,
		getElement(): any,
		getScope(): any,
		setArgs(args?: any[]): void,
		setCallback(callback?: any): void,
		setElement(element?: any): void,
		setScope(scope?: any): void
	}

	declare export interface IDefault {
		
	}

	declare export interface IOverflowChange {
		
	}

	declare export interface IScroll {
		
	}

			
}

declare module 'translatable' {
		declare export interface IAbstract {
		destroy(): void,
		getEasing(): any,
		getEasingX(): any,
		getEasingY(): any,
		getUseWrapper(): any,
		setEasing(easing?: any): void,
		setEasingX(easingX?: any): void,
		setEasingY(easingY?: any): void,
		setUseWrapper(useWrapper?: any): void
	}

	declare export interface ICssPosition {
		destroy(): void
	}

	declare export interface ICssTransform {
		destroy(): void
	}

	declare export interface IDom {
		getElement(): any,
		setElement(element?: any): void
	}

	declare export interface IScrollPosition {
		destroy(): void,
		getUseWrapper(): boolean,
		setUseWrapper(useWrapper?: boolean): void
	}

			
}

declare module 'viewport' {
		declare export interface IAndroid {
		getAutoBlurInput(): boolean,
		setAutoBlurInput(autoBlurInput?: boolean): void
	}

	declare export interface IDefault {
		autoMaximize?: boolean,
		id?: string,
		layout?: any,
		preventPanning?: boolean,
		preventZooming?: boolean,
		isReady?: boolean,
		getAutoMaximize(): boolean,
		getLayout(): any,
		getOrientation(): string,
		getPreventPanning(): boolean,
		getPreventZooming(): boolean,
		getSize(): any,
		getUseBodyElement(): boolean,
		getWindowHeight(): number,
		getWindowWidth(): number,
		setAutoMaximize(autoMaximize?: boolean): void,
		setLayout(layout?: any): void,
		setPreventPanning(preventPanning?: boolean): void,
		setPreventZooming(preventZooming?: boolean): void,
		setUseBodyElement(useBodyElement?: boolean): void
	}

	declare export interface IIos {
		
	}

	declare export interface IViewport {
		
	}

	declare export interface IWindowsPhone {
		initialize(): void
	}

	declare export interface IWP {
		initialize(): void
	}

			
}