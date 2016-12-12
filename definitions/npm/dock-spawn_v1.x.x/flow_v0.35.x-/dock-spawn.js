

declare module 'dock-spawn' {
					
}

declare module 'npm$namespace$dockspawn' {
				declare class DockManager  {
		context: DockManagerContext;
		constructor(element: HTMLDivElement): this;
		initialize(): void;
		rebuildLayout(node: DockNode): void;
		invalidate(): void;
		resize(width: number, height: number): void;
		setModel(model: DockModel): void;
		setRootNode(node: DockNode): void;
		dockDialogLeft(referenceNode: DockNode, dialog: Dialog): DockNode;
		dockDialogRight(referenceNode: DockNode, dialog: Dialog): DockNode;
		dockDialogUp(referenceNode: DockNode, dialog: Dialog): DockNode;
		dockDialogDown(referenceNode: DockNode, dialog: Dialog): DockNode;
		dockDialogFill(referenceNode: DockNode, container: PanelContainer): DockNode;
		dockLeft(referenceNode: DockNode, container: PanelContainer, ratio: number): DockNode;
		dockRight(referenceNode: DockNode, container: PanelContainer, ratio: number): DockNode;
		dockUp(referenceNode: DockNode, container: PanelContainer, ratio: number): DockNode;
		dockDown(referenceNode: DockNode, container: PanelContainer, ratio: number): DockNode;
		dockFill(referenceNode: DockNode, container: PanelContainer): DockNode;
		suspendLayout(): void;
		resumeLayout(): void;
		saveState(): string;
		loadState(state: string): void
	}

	declare class DockManagerContext  {
		dockManager: DockManager;
		model: DockModel;
		documentManagerView: DocumentManagerContainer;
		constructor(dockManager: DockManager): this
	}

	declare class DockModel  {
		rootNode: DockNode;
		documentManagerNode: DockNode
	}

	declare class DockNode  {
		constructor(container: PanelContainer): this;
		detachFromParent(): void
	}

	declare class TabHost  {
		tabStripDirection: TabStripDirection;
		displayCloseButton: boolean;
		pages: TabPage[];
		hostElement: HTMLDivElement;
		tabListElement: HTMLDivElement;
		separatorElement: HTMLDivElement;
		contentElement: HTMLDivElement;
		constructor(tabStripDirection?: TabStripDirection, displayCloseButton?: boolean): this;
		setActiveTab(container: PanelContainer): void;
		onTabPageSelected(page: TabPage): void;
		resize(width: number, height: number): void
	}

	declare class TabPage  {
		constructor(host: TabHost, container: PanelContainer): this
	}

	declare class FillDockContainer  {
		tabOrientation: TabStripDirection;
		element: HTMLDivElement;
		tabHost: TabHost;
		dockManager: DockManager;
		name: string;
		containerType: string;
		minimumAllowedChildNodes: number;
		constructor(dockManager: DockManager, tabStripDirection?: TabStripDirection): this
	}

	declare class DocumentManagerContainer extends FillDockContainer {
		selectedTab: TabPage;
		constructor(dockManager: DockManager): this;
		saveState(state: string): void
	}

	declare class PanelContainer  {
		width: number;
		height: number;
		constructor(element: HTMLElement, dockManager: DockManager, title?: string): this;
		setTitle(title: string): void;
		setTitleIcon(iconName: string): void
	}

	declare class Dialog  {
		fromElement(id: string, dockManager: DockManager): Dialog;
		constructor(panel: PanelContainer, dockManager: DockManager): this;
		setPosition(x: number, y: number): void;
		resize(width: number, height: number): void;
		setTitle(title: string): void;
		setTitleIcon(iconName: string): void;
		bringToFront(): void
	}

	
}