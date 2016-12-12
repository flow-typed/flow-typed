

declare module 'material-design-lite' {
					
}

declare module 'MaterialDesignLite' {
		declare interface ComponentHandler {
		upgradeDom(): void,
		upgradeDom(jsClass: string): void,
		upgradeDom(jsClass: string, cssClass: string): void,
		upgradeElement(element: HTMLElement): void,
		upgradeElement(element: HTMLElement, jsClass: string): void,
		upgradeElements(elements: HTMLElement): void,
		upgradeElements(elements: Array<HTMLElement>): void,
		upgradeElements(elements: NodeList): void,
		upgradeElements(elements: HTMLCollection): void,
		upgradeAllRegistered(): void,
		registerUpgradedCallback(jsClass: string, callback: (element: HTMLElement) => any): void,
		register(config: ComponentConfigPublic): void,
		downgradeElements(nodes: Node): void,
		downgradeElements(nodes: Array<Node>): void,
		downgradeElements(nodes: NodeList): void
	}

	declare interface ComponentConfigPublic {
		constructor(element: HTMLElement): void,
		classAsString: string,
		cssClass: string,
		widget?: string | boolean
	}

			
}