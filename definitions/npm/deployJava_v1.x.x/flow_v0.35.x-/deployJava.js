import type { DeployJavaStatic } from 'npm$namespace$DeployJava'

declare module 'deployJava' {
					
}

declare module 'npm$namespace$DeployJava' {
		declare interface DeployJavaStatic {
		brand: string,
		debug: boolean,
		EAInstallEnabled: boolean,
		EarlyAccessURL: string,
		installType: string,
		locale: string,
		myInterval: number,
		preInstallJREList: Array<string>,
		returnPage: string,
		allowPlugin(): boolean,
		compareVersions(installed: string, required: string): boolean,
		compareVersionToPattern(
		version: string, patternArray: Array<string>, familyMatch: boolean, minMatch: boolean
	): boolean,
		enableAlerts(): void,
		FFInstall(): boolean,
		getBrowser(): string,
		getJPIVersionUsingMimeType(): void,
		getJREs(): Array<string>,
		getPlugin(): HTMLElement,
		IEInstall(): boolean,
		installJRE(requestVersion: string): boolean,
		installLatestJRE(installCallback?: Function): boolean,
		isAutoInstallEnabled(requestedJREVersion?: string): boolean,
		isAutoUpdateEnabled(): boolean,
		isCallbackSupported(): boolean,
		isPlugin2(): boolean,
		isPluginInstalled(): boolean,
		isWebStartInstalled(minimumVersion?: string): boolean,
		launch(jnlp: string): boolean,
		launchWebStartApplication(jnlp: string): void,
		poll(): void,
		refresh(): void,
		runApplet(attributes: Object, parameters: Object, minimumVersion?: string): void,
		setAdditionalPackages(packageList: string): boolean,
		setAutoUpdateEnabled(): void,
		setEarlyAccess(enabled: string): void,
		setInstallerType(type: string): boolean,
		testForMSVM(): boolean,
		testUsingActiveX(version: string): boolean,
		testUsingMimeTypes(version: string): boolean,
		testUsingPluginsArray(version: string): boolean,
		versionCheck(versionPattern: string): boolean,
		writeAppletTag(attributes: Object, parameters: Object): void,
		writeEmbedTag(): void
	}

			
}