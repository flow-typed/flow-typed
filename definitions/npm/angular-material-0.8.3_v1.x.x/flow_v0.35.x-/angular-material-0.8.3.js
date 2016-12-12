

declare module 'angular-material-0.8.3' {
					
}

declare module 'material' {
		declare interface MDBottomSheetOptions {
		templateUrl?: string,
		template?: string,
		controller?: any,
		locals?: {
		[index: string]: any
	},
		targetEvent?: any,
		resolve?: {
		[index: string]: angular.IPromise<any>
	},
		controllerAs?: string,
		parent?: Element,
		disableParentScroll?: boolean
	}

	declare interface MDBottomSheetService {
		show(options: MDBottomSheetOptions): angular.IPromise<any>,
		hide(response?: any): void,
		cancel(response?: any): void
	}

	declare interface MDPresetDialog<T> {
		title(title: string): T,
		content(content: string): T,
		ok(content: string): T,
		theme(theme: string): T
	}

	declare interface MDAlertDialog {
		
	}

	declare interface MDConfirmDialog {
		cancel(reason?: string): MDConfirmDialog
	}

	declare interface MDDialogOptions {
		templateUrl?: string,
		template?: string,
		domClickEvent?: any,
		disableParentScroll?: boolean,
		clickOutsideToClose?: boolean,
		hasBackdrop?: boolean,
		escapeToClose?: boolean,
		controller?: any,
		locals?: {
		[index: string]: any
	},
		bindToController?: boolean,
		resolve?: {
		[index: string]: angular.IPromise<any>
	},
		controllerAs?: string,
		parent?: Element,
		onComplete?: Function
	}

	declare interface MDDialogService {
		show(dialog: MDDialogOptions | MDPresetDialog<any>): angular.IPromise<any>,
		confirm(): MDConfirmDialog,
		alert(): MDAlertDialog,
		hide(response?: any): angular.IPromise<any>,
		cancel(response?: any): void
	}

	declare interface MDIcon {
		(path: string): angular.IPromise<Element>
	}

	declare interface MDIconProvider {
		icon(id: string, url: string, iconSize?: string): MDIconProvider,
		iconSet(id: string, url: string, iconSize?: string): MDIconProvider,
		defaultIconSet(url: string, iconSize?: string): MDIconProvider,
		defaultIconSize(iconSize: string): MDIconProvider
	}

	declare interface MDMedia {
		(media: string): boolean
	}

	declare interface MDSidenavObject {
		toggle(): void,
		open(): void,
		close(): void,
		isOpen(): boolean,
		isLockedOpen(): boolean
	}

	declare interface MDSidenavService {
		(component: string): MDSidenavObject
	}

	declare interface MDToastPreset<T> {
		content(content: string): T,
		action(action: string): T,
		highlightAction(highlightAction: boolean): T,
		capsule(capsule: boolean): T,
		theme(theme: string): T,
		hideDelay(delay: number): T
	}

	declare interface MDSimpleToastPreset {
		
	}

	declare interface MDToastOptions {
		templateUrl?: string,
		template?: string,
		hideDelay?: number,
		position?: string,
		controller?: any,
		locals?: {
		[index: string]: any
	},
		bindToController?: boolean,
		resolve?: {
		[index: string]: angular.IPromise<any>
	},
		controllerAs?: string,
		parent?: Element
	}

	declare interface MDToastService {
		show(optionsOrPreset: MDToastOptions | MDToastPreset<any>): angular.IPromise<any>,
		showSimple(): angular.IPromise<any>,
		simple(): MDSimpleToastPreset,
		build(): MDToastPreset<any>,
		updateContent(): void,
		hide(response?: any): void,
		cancel(response?: any): void
	}

	declare interface MDPalette {
		0?: string,
		50?: string,
		100?: string,
		200?: string,
		300?: string,
		400?: string,
		500?: string,
		600?: string,
		700?: string,
		800?: string,
		900?: string,
		A100?: string,
		A200?: string,
		A400?: string,
		A700?: string,
		contrastDefaultColor?: string,
		contrastDarkColors?: string,
		contrastStrongLightColors?: string
	}

	declare interface MDThemeHues {
		default?: string,
		hue-1?: string,
		hue-2?: string,
		hue-3?: string
	}

	declare interface MDThemePalette {
		name: string,
		hues: MDThemeHues
	}

	declare interface MDThemeColors {
		accent: MDThemePalette,
		background: MDThemePalette,
		primary: MDThemePalette,
		warn: MDThemePalette
	}

	declare interface MDThemeGrayScalePalette {
		1: string,
		2: string,
		3: string,
		4: string,
		name: string
	}

	declare interface MDTheme {
		name: string,
		colors: MDThemeColors,
		foregroundPalette: MDThemeGrayScalePalette,
		foregroundShadow: string,
		accentPalette(name: string, hues?: MDThemeHues): MDTheme,
		primaryPalette(name: string, hues?: MDThemeHues): MDTheme,
		warnPalette(name: string, hues?: MDThemeHues): MDTheme,
		backgroundPalette(name: string, hues?: MDThemeHues): MDTheme,
		dark(isDark?: boolean): MDTheme
	}

	declare interface MDThemingProvider {
		theme(name: string, inheritFrom?: string): MDTheme,
		definePalette(name: string, palette: MDPalette): MDThemingProvider,
		extendPalette(name: string, palette: MDPalette): MDPalette,
		setDefaultTheme(theme: string): void,
		alwaysWatchTheme(alwaysWatch: boolean): void
	}

			
}