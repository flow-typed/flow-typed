

declare module 'msportalfx-test' {
					
}

declare module 'Locators' {
				declare export class Locator  {
		seleniumLocator: any;
		findElements(context: any): any;
		toString(): string
	}

	declare export class ContentLocator extends Locator {
		locators: Array<Locator>;
		constructor(innerLocators: Locator[]): this;
		findElements(context: any): any;
		toString(): string
	}

	declare export class ChainedLocator extends Locator {
		locators: Array<Locator>;
		constructor(innerLocators: Locator[]): this;
		findElements(context: any): any;
		toString(): string
	}

	declare export class By  {
		className(value: string): Locator;
		css(value: string): Locator;
		id(value: string): Locator;
		js(script: any, ...var_args: any[]): Locator;
		linkText(value: string): Locator;
		name(value: string): Locator;
		partialLinkText(value: string): Locator;
		tagName(value: string): Locator;
		xpath(value: string): Locator;
		text(value: string): Locator;
		chained(...values: Locator[]): Locator;
		content(...values: Locator[]): Locator
	}

	
}

declare module 'ActionBars' {
				declare export class ActionBarButton extends PortalElement {
		constructor(parentLocator?: Locators.Locator, baseLocator?: Locators.Locator): this;
		click(): Q.Promise<void>
	}

	declare export class CreateActionBar extends PortalElement {
		createButton: ActionBarButton;
		constructor(parentLocator?: Locators.Locator): this
	}

	declare export class DeleteActionBar extends PortalElement {
		deleteButton: ActionBarButton;
		cancelButton: ActionBarButton;
		constructor(parentLocator?: Locators.Locator): this
	}

	declare export class PickerActionBar extends PortalElement {
		selectButton: ActionBarButton;
		constructor(parentLocator?: Locators.Locator): this
	}

	
}

declare module 'Blades' {
				declare export class Blade extends MsPortalTestFx$PortalElement {
		title: string;
		constructor(title: string): this;
		clickCommand(commandText: string): Q.Promise<Blade>;
		getTiles(): Q.Promise<Parts.Tile[]>
	}

	declare export class CreateBlade extends Blade {
		actionBar: ActionBars.CreateActionBar
	}

	declare export class BrowseResourceBlade extends Blade {
		constructor(title: string): this;
		selectResource(resourceName: string): Q.Promise<void>;
		filterItems(filter: string): Q.Promise<BrowseResourceBlade>
	}

	declare export class PickerBlade extends Blade {
		pickItem(item: string): Q.Promise<void>
	}

	declare export class SpecPickerBlade extends Blade {
		pickSpec(specCode: string): Q.Promise<void>
	}

	declare export class QuickStartBlade extends Blade {
		constructor(): this;
		clickLink(linkText: string): Q.Promise<void>
	}

	declare export class UsersBlade extends Blade {
		constructor(): this
	}

	
}

declare module 'Controls' {
				declare export class FormElement extends MsPortalTestFx$PortalElement {
		label: string;
		constructor(baseLocator: Locators.Locator, parentLocator?: Locators.Locator, label?: string): this
	}

	declare export class CheckBoxField extends FormElement {
		constructor(parentLocator?: Locators.Locator, label?: string): this
	}

	declare export class SelectorField extends FormElement {
		constructor(parentLocator?: Locators.Locator, label?: string): this;
		openPicker(): Q.Promise<void>
	}

	declare export class CreatorAndSelectorField extends FormElement {
		constructor(parentLocator?: Locators.Locator, selectModeLabel?: string, createModeLabel?: string): this;
		openPicker(): Q.Promise<void>;
		clickCreateNew(): Q.Promise<CreatorAndSelectorField>;
		enterNewValue(...var_args: string[]): Q.Promise<CreatorAndSelectorField>
	}

	declare export class GridCell extends MsPortalTestFx$PortalElement {
		constructor(text: string, parentLocator?: Locators.Locator): this;
		getLocator(): Locators.Locator
	}

	declare export class TextField extends FormElement {
		constructor(parentLocator?: Locators.Locator, label?: string, baseLocator?: Locators.Locator): this;
		sendKeys(...var_args: string[]): Q.Promise<void>
	}

	declare export class ResourceFilterTextField extends TextField {
		constructor(parentLocator?: Locators.Locator): this
	}

	declare export class HotSpot extends PortalElement {
		constructor(parentLocator?: Locators.Locator, baseLocator?: Locators.Locator): this;
		isSelected(): Q.Promise<boolean>
	}

	
}

declare module 'Parts' {
			declare export function canPinAllBladeParts(
		targetBladeDeepLink: string, targetBladeTitle: string, timeout?: number
	): Q.Promise<boolean>

	declare export class Part extends MsPortalTestFx$PortalElement {
		innerText: string;
		constructor(parentLocator?: Locators.Locator, innerText?: string, baseLocator?: Locators.Locator): this;
		isSelected(): Q.Promise<boolean>;
		isLoaded(): Q.Promise<boolean>;
		waitUntilLoaded(timeout?: number): Q.Promise<boolean>;
		isClickable(): Q.Promise<boolean>;
		hasError(): Q.Promise<boolean>
	}

	declare export class PartProperty extends MsPortalTestFx$PortalElement {
		name: string;
		constructor(name: string, parentLocator?: Locators.Locator): this;
		getValue(): Q.Promise<string>
	}

	declare export class ResourceSummaryPart extends Part {
		properties: Array<PartProperty>;
		resourceGroupProperty: PartProperty;
		quickStartHotSpot: Controls.HotSpot;
		accessHotSpot: Controls.HotSpot;
		constructor(parentLocator?: Locators.Locator): this
	}

	declare class PricingTierPart extends Part {
		
	}

	declare export class Tile extends MsPortalTestFx$PortalElement {
		progressLocator: Locators.Locator;
		constructor(parentLocator?: Locators.Locator): this;
		tryPin(): Q.Promise<void>;
		getPart(): Part;
		waitUntilLoaded(timeout?: number): Q.Promise<void>
	}

	
}

declare module 'Commands' {
				declare export class ContextMenu extends PortalElement {
		constructor(): this;
		hasItem(text: string): Q.Promise<boolean>;
		clickItem(text: string): Q.Promise<void>
	}

	declare export class ContextMenuItem extends PortalElement {
		constructor(parentLocator: Locators.Locator, text?: string): this
	}

	
}

declare module 'Notifications' {
				declare export class Notification extends PortalElement {
		constructor(): this;
		getTitle(): Q.Promise<string>;
		getDescription(): Q.Promise<string>
	}

	declare export class NotificationsMenu extends PortalElement {
		constructor(): this;
		waitForNewNotification(
		title?: string, description?: string, timeout?: number
	): Q.Promise<Notification>
	}

	
}

declare module 'npm$namespace$MsPortalTestFx' {
		declare export interface TestExtension {
		name: string,
		uri: string
	}

	declare export interface Feature {
		name: string,
		value: string
	}

	declare export interface PortalContext {
		capabilities: {
		browserName: string,
		chromeOptions: {
		args: string[]
	}
	},
		chromeDriverPath?: string,
		portalUrl: string,
		signInUrl?: string,
		signInEmail?: string,
		signInPassword?: string,
		features?: Feature[],
		testExtensions?: TestExtension[]
	}

		declare export class PortalElement  {
		baseLocator: Locators.Locator;
		parentLocator: Locators.Locator;
		constructor(baseLocator: Locators.Locator, parentLocator?: Locators.Locator): this;
		click(): Q.Promise<void>;
		rightClick(): Q.Promise<void>;
		getAttribute(attributeName: string): Q.Promise<string>;
		sendKeys(...var_args: string[]): Q.Promise<void>;
		getText(): Q.Promise<string>;
		isPresent(): Q.Promise<boolean>;
		isElementPresent(subLocator: Locators.Locator): Q.Promise<boolean>;
		isDisplayed(): Q.Promise<boolean>;
		getLocator(): Locators.Locator
	}

	declare export class Portal  {
		portalContext: PortalContext;
		goHome(timeout?: number): Q.Promise<void>;
		openGalleryCreateBlade(
		galleryPackageName: string, bladeTitle: string, timeout?: number
	): Q.Promise<Blades.CreateBlade>;
		openBrowseBlade(
		resourceProvider: string, resourceType: string, bladeTitle: string, timeout?: number
	): Q.Promise<Blades.BrowseResourceBlade>;
		openResourceBlade(
		resourceId: string, bladeTitle: string, timeout?: number
	): Q.Promise<Blades.Blade>;
		navigateToDeepLink(deepLink: string, timeout?: number): Q.Promise<any>;
		waitForElementVisible(locator: Locators.Locator, timeout?: number): Q.Promise<boolean>;
		waitForElementNotVisible(locator: Locators.Locator, timeout?: number): Q.Promise<boolean>;
		waitUntilElementContainsAttribute(
		locator: Locators.Locator, attributeName: string, attributeValue: string, timeout?: number
	): Q.Promise<any>;
		waitUntilElementDoesNotContainAttribute(
		locator: Locators.Locator, attributeName: string, attributeValue: string, timeout?: number
	): Q.Promise<any>;
		waitForElementLocated(locator: Locators.Locator, timeout?: number): Q.Promise<any>;
		waitForElementsLocated(locator: Locators.Locator, timeout?: number): Q.Promise<any[]>;
		takeScreenshot(filePrefix?: string): Q.Promise<string>;
		getBrowserLogs(level: LogLevel): Q.Promise<string[]>;
		executeScript<T>(script: string): Q.Promise<T>;
		applyFeature(name: string, value: string): void;
		getCurrentUrl(): Q.Promise<string>;
		quit(): Q.Promise<any>
	}

	declare export class SplashScreen extends PortalElement {
		clickUntrustedExtensionsOkButton(): Q.Promise<void>
	}

	declare export class StartBoard extends PortalElement {
		constructor(): this;
		getTiles(): Q.Promise<Parts.Tile[]>
	}

	
}

declare module 'MsPortalFx-Test' {
					declare module.exports: undefined


}