

declare module 'google-apps-script.base' {
					
}

declare module 'Base' {
		declare export interface Blob {
		copyBlob(): Blob,
		getAs(contentType: string): Blob,
		getBytes(): Byte[],
		getContentType(): string,
		getDataAsString(): string,
		getDataAsString(charset: string): string,
		getName(): string,
		isGoogleType(): boolean,
		setBytes(data: Byte[]): Blob,
		setContentType(contentType: string): Blob,
		setContentTypeFromExtension(): Blob,
		setDataFromString(string: string): Blob,
		setDataFromString(string: string, charset: string): Blob,
		setName(name: string): Blob,
		getAllBlobs(): Blob[]
	}

	declare export interface BlobSource {
		getAs(contentType: string): Blob,
		getBlob(): Blob
	}

	declare export interface Browser {
		Buttons: ButtonSet,
		inputBox(prompt: string): string,
		inputBox(prompt: string, buttons: ButtonSet): string,
		inputBox(title: string, prompt: string, buttons: ButtonSet): string,
		msgBox(prompt: string): string,
		msgBox(prompt: string, buttons: ButtonSet): string,
		msgBox(title: string, prompt: string, buttons: ButtonSet): string
	}

	declare export interface Logger {
		clear(): void,
		getLog(): string,
		log(data: Object): Logger,
		log(format: string, ...values: Object[]): Logger
	}

	declare export interface Menu {
		addItem(caption: string, functionName: string): Menu,
		addSeparator(): Menu,
		addSubMenu(menu: Menu): Menu,
		addToUi(): void
	}

	declare export interface PromptResponse {
		getResponseText(): string,
		getSelectedButton(): Button
	}

	declare export interface Session {
		getActiveUser(): User,
		getActiveUserLocale(): string,
		getEffectiveUser(): User,
		getScriptTimeZone(): string,
		getTimeZone(): string,
		getUser(): User
	}

	declare export interface Ui {
		Button: Button,
		ButtonSet: ButtonSet,
		alert(prompt: string): Button,
		alert(prompt: string, buttons: ButtonSet): Button,
		alert(title: string, prompt: string, buttons: ButtonSet): Button,
		createAddonMenu(): Menu,
		createMenu(caption: string): Menu,
		prompt(prompt: string): PromptResponse,
		prompt(prompt: string, buttons: ButtonSet): PromptResponse,
		prompt(title: string, prompt: string, buttons: ButtonSet): PromptResponse,
		showModalDialog(userInterface: Object, title: string): void,
		showModelessDialog(userInterface: Object, title: string): void,
		showSidebar(userInterface: Object): void,
		showDialog(userInterface: Object): void
	}

	declare export interface User {
		getEmail(): string,
		getUserLoginId(): string
	}

			
}