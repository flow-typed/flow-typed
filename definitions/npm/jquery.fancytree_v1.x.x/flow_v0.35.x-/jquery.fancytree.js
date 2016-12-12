

declare module 'jquery.fancytree' {
		declare interface JQuery {
		fancytree(options?: Fancytree.FancytreeOptions): Fancytree.Fancytree,
		fancytree(option?: string, ...rest: any[]): any
	}

			
}

declare module 'npm$namespace$JQueryUI' {
		declare interface UI {
		fancytree: Fancytree.FancytreeStatic
	}

			
}

declare module 'npm$namespace$Fancytree' {
		declare interface Fancytree {
		$div: JQuery,
		rootNode: FancytreeNode,
		activateKey(key: string): FancytreeNode,
		applyPatch(patchList: NodePatch[]): JQueryPromise<any>,
		changeRefKey(oldRefKey: string, newRefKey: string): void,
		clearCookies(): void,
		clearFilter(): void,
		count(): number,
		debug(msg: any): void,
		filterBranches(filter: string): number,
		filterBranches(filter: (node: FancytreeNode) => boolean): number,
		filterNodes(filter: string, leavesOnly?: boolean): number,
		filterNodes(filter: (node: FancytreeNode) => boolean, leavesOnly?: boolean): number,
		findNextNode(match: string, startNode?: FancytreeNode): FancytreeNode,
		findNextNode(
		match: (node: FancytreeNode) => boolean, startNode?: FancytreeNode
	): FancytreeNode,
		generateFormElements(selected?: boolean, active?: boolean): void,
		getActiveNode(): FancytreeNode,
		getFirstChild(): FancytreeNode,
		getFocusNode(ifTreeHasFocus?: boolean): FancytreeNode,
		getNodeByKey(key: string, searchRoot?: FancytreeNode): FancytreeNode,
		getNodesByRef(refKey: string, rootNode?: FancytreeNode): FancytreeNode[],
		getPersistData(): void,
		getRootNode(): FancytreeNode,
		getSelectedNodes(stopOnParents?: boolean): FancytreeNode[],
		hasFocus(): boolean,
		info(msg: any): void,
		isEditing(): FancytreeNode,
		loadKeyPath(
		keyPathList: string[], callback: (node: FancytreeNode, status: string) => void
	): JQueryPromise<any>,
		loadKeyPath(
		keyPath: string, callback: (node: FancytreeNode, status: string) => void
	): JQueryPromise<any>,
		reactivate(): void,
		reload(source?: any): JQueryPromise<any>,
		render(force?: boolean, deep?: boolean): void,
		setFocus(flag?: boolean): void,
		toDict(includeRoot?: boolean, callback?: (node: FancytreeNode) => void): any,
		visit(fn: (node: FancytreeNode) => any): boolean,
		warn(msg: any): void
	}

	declare interface FancytreeNode {
		tree: Fancytree,
		parent: FancytreeNode,
		key: string,
		title: string,
		data: Object,
		children: FancytreeNode[],
		expanded: boolean,
		extraClasses: string,
		folder: boolean,
		statusNodeType: string,
		lazy: boolean,
		tooltip: string,
		addChildren(children: Fancytree.NodeData[], insertBefore?: FancytreeNode): FancytreeNode,
		addChildren(children: Fancytree.NodeData[], insertBefore?: string): FancytreeNode,
		addChildren(children: Fancytree.NodeData[], insertBefore?: number): FancytreeNode,
		addChildren(child: Fancytree.NodeData, insertBefore?: FancytreeNode): FancytreeNode,
		addChildren(child: Fancytree.NodeData, insertBefore?: string): FancytreeNode,
		addChildren(child: Fancytree.NodeData, insertBefore?: number): FancytreeNode,
		addNode(node: NodeData, mode?: string): FancytreeNode,
		applyPatch(patch: NodePatch): JQueryPromise<any>,
		collapseSiblings(): JQueryPromise<any>,
		copyTo(
		node: FancytreeNode, mode?: string, map?: (node: NodeData) => void
	): FancytreeNode,
		countChildren(deep?: boolean): number,
		debug(msg: any): void,
		editCreateNode(mode?: string, init?: Object): void,
		editEnd(applyChanges: boolean): void,
		editStart(): void,
		findAll(match: string): FancytreeNode[],
		findAll(match: (node: FancytreeNode) => boolean): FancytreeNode[],
		findFirst(match: string): FancytreeNode,
		findFirst(match: (node: FancytreeNode) => boolean): FancytreeNode,
		fixSelection3AfterClick(): void,
		fixSelection3FromEndNodes(): void,
		fromDict(dict: NodeData): void,
		getChildren(): FancytreeNode[],
		getCloneList(includeSelf?: boolean): FancytreeNode[],
		getFirstChild(): FancytreeNode,
		getIndex(): number,
		getIndexHier(): string,
		getKeyPath(excludeSelf: boolean): string,
		getLastChild(): FancytreeNode,
		getLevel(): number,
		getNextSibling(): FancytreeNode,
		getParent(): FancytreeNode,
		getParentList(includeRoot: boolean, includeSelf: boolean): FancytreeNode[],
		getPrevSibling(): FancytreeNode,
		hasChildren(): boolean,
		hasFocus(): boolean,
		info(msg: string): void,
		isActive(): boolean,
		isChildOf(otherNode: FancytreeNode): boolean,
		isClone(): boolean,
		isDescendantOf(otherNode: FancytreeNode): boolean,
		isEditing(): boolean,
		isExpanded(): boolean,
		isFirstSibling(): boolean,
		isFolder(): boolean,
		isLastSibling(): boolean,
		isLazy(): boolean,
		isLoaded(): boolean,
		isLoading(): boolean,
		isRootNode(): boolean,
		isSelected(): boolean,
		isStatusNode(): boolean,
		isTopLevel(): boolean,
		isUndefined(): boolean,
		isVisible(): boolean,
		load(forceReload?: boolean): JQueryPromise<any>,
		makeVisible(opts?: Object): JQueryPromise<any>,
		moveTo(
		targetNode: FancytreeNode, mode: string, map?: (node: FancytreeNode) => void
	): void,
		navigate(where: number, activate?: boolean): JQueryPromise<any>,
		remove(): void,
		removeChild(childNode: FancytreeNode): void,
		removeChildren(): void,
		render(force?: boolean, deep?: boolean): void,
		renderStatus(): void,
		renderTitle(): void,
		reRegister(key: string, refKey: string): boolean,
		resetLazy(): void,
		scheduleAction(mode: string, ms: number): void,
		scrollIntoView(effects?: boolean, options?: Object): JQueryPromise<any>,
		scrollIntoView(effects?: Object, options?: Object): JQueryPromise<any>,
		setActive(flag?: boolean, opts?: Object): JQueryPromise<any>,
		setExpanded(flag?: boolean, opts?: Object): JQueryPromise<any>,
		setFocus(flag?: boolean): void,
		setSelected(flag?: boolean): void,
		setStatus(status: string, message?: string, details?: string): void,
		setTitle(title: string): void,
		sortChildren(cmp?: (a: FancytreeNode, b: FancytreeNode) => number, deep?: boolean): void,
		toDict(recursive?: boolean, callback?: (dict: NodeData) => void): NodeData,
		toggleExpanded(): void,
		toggleSelected(): void,
		visit(fn: (node: FancytreeNode) => any, includeSelf?: boolean): boolean,
		visitAndLoad(fn: (node: FancytreeNode) => any, includeSelf?: boolean): JQueryPromise<any>,
		visitParents(fn: (node: FancytreeNode) => any, includeSelf?: boolean): boolean,
		warn(msg: any): void
	}

	declare interface EventData {
		tree: Fancytree,
		widget: Object,
		options: FancytreeOptions,
		originalEvent: JQueryEventObject,
		node: FancytreeNode,
		result: any,
		targetType: string,
		response: any
	}

	declare interface FancytreeEvents {
		activate(event: JQueryEventObject, data: EventData): void,
		beforeActivate(event: JQueryEventObject, data: EventData): boolean,
		beforeExpand(event: JQueryEventObject, data: EventData): boolean,
		beforeSelect(event: JQueryEventObject, data: EventData): boolean,
		blur(event: JQueryEventObject, data: EventData): void,
		blurTree(event: JQueryEventObject, data: EventData): void,
		click(event: JQueryEventObject, data: EventData): boolean,
		collapse(event: JQueryEventObject, data: EventData): void,
		create(event: JQueryEventObject, data: EventData): void,
		createNode(event: JQueryEventObject, data: EventData): void,
		dblclick(event: JQueryEventObject, data: EventData): boolean,
		deactivate(event: JQueryEventObject, data: EventData): void,
		expand(event: JQueryEventObject, data: EventData): void,
		focus(event: JQueryEventObject, data: EventData): void,
		focusTree(event: JQueryEventObject, data: EventData): void,
		init(event: JQueryEventObject, data: EventData): void,
		keydown(event: JQueryEventObject, data: EventData): boolean,
		keypress(event: JQueryEventObject, data: EventData): void,
		lazyLoad(event: JQueryEventObject, data: EventData): void,
		loadChildren(event: JQueryEventObject, data: EventData): void,
		loadError(event: JQueryEventObject, data: EventData): boolean,
		postProcess(event: JQueryEventObject, data: EventData): void,
		removeNode(event: JQueryEventObject, data: EventData): void,
		renderColumns(event: JQueryEventObject, data: EventData): void,
		renderNode(event: JQueryEventObject, data: EventData): void,
		renderTitle(event: JQueryEventObject, data: EventData): void,
		restore(event: JQueryEventObject, data: EventData): void,
		select(event: JQueryEventObject, data: EventData): void
	}

	declare interface FancytreeOptions {
		activeVisible?: boolean,
		ajax?: Object,
		aria?: boolean,
		autoActivate?: boolean,
		autoCollapse?: boolean,
		autoScroll?: boolean,
		checkbox?: boolean,
		clickFolderMode?: FancytreeClickFolderMode,
		debugLevel?: number,
		defaultKey?: (node: FancytreeNode) => string,
		enableAspx?: boolean,
		extensions?: string[],
		focusOnSelect?: boolean,
		generateIds?: boolean,
		icons?: boolean,
		idPrefix?: string,
		imagePath?: string,
		keyboard?: boolean,
		keyPathSeparator?: string,
		minExpandLevel?: number,
		quicksearch?: boolean,
		scrollOfs?: Object,
		scrollParent?: JQuery,
		selectMode?: FancytreeSelectMode,
		source?: any,
		strings?: Object,
		tabbable?: boolean,
		titlesTabbable?: boolean,
		toggleEffect?: Object
	}

	declare interface NodeData {
		title: string,
		icon?: string,
		key?: string,
		refKey?: string,
		expanded?: boolean,
		active?: boolean,
		focus?: boolean,
		folder?: boolean,
		hideCheckbox?: boolean,
		lazy?: boolean,
		selected?: boolean,
		unselectable?: boolean,
		children?: NodeData[],
		tooltip?: string,
		extraClasses?: string,
		data?: Object
	}

	declare interface NodePatch {
		appendChildren?: NodeData,
		replaceChildren?: NodeData,
		insertChildren?: NodeData
	}

	declare interface TreePatch {
		[key: string]: NodePatch
	}

	declare interface FancytreeStatic {
		buildType: string,
		debugLevel: number,
		version: string,
		assert(cond: boolean, msg: string): void,
		debounce<T>(timeout: number, fn: T, invokeAsap?: boolean, ctx?: any): T,
		debug(msg: string): void,
		error(msg: string): void,
		escapeHtml(s: string): string,
		getEventTarget(event: Event): Object,
		getEventTargetType(event: Event): string,
		getNode(el: JQuery): FancytreeNode,
		getNode(el: Event): FancytreeNode,
		getNode(el: Element): FancytreeNode,
		info(msg: string): void,
		keyEventToString(event: Event): string,
		parseHtml($ul: JQuery): NodeData[],
		registerExtension(definition: Object): void,
		unescapeHtml(s: string): string,
		warn(msg: string): void
	}

			
}