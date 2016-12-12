import type { IBowser } from 'npm$namespace$BowserModule'

declare module 'bowser' {
					declare module.exports: IBowser


}

declare module 'npm$namespace$BowserModule' {
		declare export interface IBowserOS {
		mac: boolean,
		windows: boolean,
		windowsphone: boolean,
		linux: boolean,
		chromeos: boolean,
		android: boolean,
		ios: boolean,
		blackberry: boolean,
		firefoxos: boolean,
		webos: boolean,
		bada: boolean,
		tizen: boolean,
		sailfish: boolean
	}

	declare export interface IBowserVersions {
		chrome: boolean,
		firefox: boolean,
		msie: boolean,
		msedge: boolean,
		safari: boolean,
		android: boolean,
		ios: boolean,
		opera: boolean,
		phantom: boolean,
		blackberry: boolean,
		webos: boolean,
		silk: boolean,
		bada: boolean,
		tizen: boolean,
		seamonkey: boolean,
		sailfish: boolean,
		ucbrowser: boolean,
		qupzilla: boolean,
		vivaldi: boolean,
		sleipnir: boolean,
		kMeleon: boolean
	}

	declare export interface IBowserEngines {
		msie: boolean,
		webkit: boolean,
		blink: boolean,
		gecko: boolean,
		msedge: boolean,
		tablet: boolean,
		mobile: boolean
	}

	declare export interface IBowserGrade {
		a: boolean,
		c: boolean,
		x: boolean,
		name: string,
		version: string | number,
		osversion: string | number
	}

	declare export interface IBowserDetection {
		
	}

	declare export interface IBowserMinVersions {
		[index: string]: string
	}

	declare export interface IBowser {
		(): IBowserDetection,
		test(browserList: string[]): boolean,
		_detect(ua: string): IBowser,
		compareVersions(versions: string[]): number,
		check(
		minVersions: IBowserMinVersions, strictMode?: boolean | string, ua?: string
	): Boolean,
		isUnsupportedBrowser(
		minVersions: IBowserMinVersions, strictMode?: boolean | string, ua?: string
	): boolean
	}

			
}