

declare module 'google.picker' {
					
}

declare module 'picker' {
		declare export interface Picker {
		isVisible(): boolean,
		setCallback(): Picker,
		setRelayUrl(url: string): Picker,
		setVisible(visible: boolean): Picker
	}

		declare export class PickerBuilder  {
		constructor(): this;
		addView(viewOrId: any): PickerBuilder;
		addViewGroup(viewGroup: any): PickerBuilder;
		disableFeature(feature: string): PickerBuilder;
		enableFeature(feature: string): PickerBuilder;
		getRelayUrl(): string;
		getTitle(): string;
		hideTitleBar(): PickerBuilder;
		isFeatureEnabled(feature: string): boolean;
		setAppId(appId: string): PickerBuilder;
		setCallback(method: Function): PickerBuilder;
		setDeveloperKey(key: string): PickerBuilder;
		setDocument(document: string): PickerBuilder;
		setLocale(locale: string): PickerBuilder;
		setOAuthToken(token: string): PickerBuilder;
		setOrigin(origin: string): PickerBuilder;
		setRelayUrl(url: string): PickerBuilder;
		setSelectableMimeTypes(type: string): PickerBuilder;
		setSize(): PickerBuilder;
		setTitle(title: string): PickerBuilder;
		setUploadToAlbumId(albumId: string): PickerBuilder;
		toUri(): string;
		build(): Picker
	}

	declare export class DocsUploadView  {
		constructor(): this;
		setIncludeFolders(included: boolean): DocsUploadView;
		setParent(parentId: string): DocsUploadView
	}

	declare export class DocsView  {
		constructor(viewId?: string): this;
		setIncludeFolders(included: boolean): DocsView;
		setSelectFolderEnabled(enabled: boolean): DocsView;
		setMode(mode: string): DocsView;
		setOwnedByMe(me?: boolean): DocsView;
		setParent(parentId: string): DocsView;
		setStarred(starred: boolean): DocsView
	}

	
}