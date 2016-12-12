import type { Nfc, Ndef, Util } from 'npm$namespace$PhoneGapNfc'

declare module 'phonegap-nfc' {
		declare interface Document {
		addEventListener(type: "deviceready", listener: (ev: Event) => any, useCapture?: boolean): void
	}

			
}

declare module 'npm$namespace$PhoneGapNfc' {
		declare interface Window {
		nfc: Nfc,
		ndef: Ndef,
		util: Util,
		fireNfcTagEvent(event: TagEvent, tagAsJson: string): void
	}

	declare interface Tag {
		id: Array<number>,
		techTypes: Array<string>,
		type: string,
		date: string
	}

	declare interface NdefRecord {
		tnf: number,
		type: Array<number>,
		id: Array<number>,
		payload: Array<number>
	}

	declare interface NdefTag {
		canMakeReadOnly: boolean,
		isWritable: boolean,
		maxSize: number,
		ndefMessage: Array<NdefRecord>
	}

	declare interface TagEvent {
		tag: Tag
	}

	declare interface NdefTagEvent {
		tag: NdefTag
	}

	declare interface UriHelper {
		protocols: Array<string>,
		decodePayload(data: any): string,
		encodePayload(uri: string): Array<number>
	}

	declare interface TextHelper {
		decodePayload(data: any): string,
		encodePayload(text: string, lang: string, encoding: string): Array<number>
	}

	declare interface Ndef {
		TNF_EMPTY: number,
		TNF_WELL_KNOWN: number,
		TNF_MIME_MEDIA: number,
		TNF_ABSOLUTE_URI: number,
		TNF_EXTERNAL_TYPE: number,
		TNF_UNKNOWN: number,
		TNF_UNCHANGED: number,
		TNF_RESERVED: number,
		RTD_TEXT: Array<number>,
		RTD_URI: Array<number>,
		RTD_SMART_POSTER: Array<number>,
		RTD_ALTERNATIVE_CARRIER: Array<number>,
		RTD_HANDOVER_CARRIER: Array<number>,
		RTD_HANDOVER_REQUEST: Array<number>,
		RTD_HANDOVER_SELECT: Array<number>,
		uriHelper: UriHelper,
		textHelper: TextHelper,
		record(
		tnf: number, type: Array<number>, id: Array<number>, payload: Array<number>
	): NdefRecord,
		textRecord(text: string, languageCode: string, id: Array<number>): NdefRecord,
		uriRecord(uri: string, id: Array<number>): NdefRecord,
		absoluteUriRecord(uri: string, payload: Array<number>, id: Array<number>): NdefRecord,
		mimeMediaRecord(mimeType: string, payload: Array<number>, id: Array<number>): NdefRecord,
		smartPoster(ndefRecords: Array<NdefRecord>, id: Array<number>): NdefRecord,
		emptyRecord(): NdefRecord,
		androidApplicationRecord(packageName: string): NdefRecord,
		encodeMessage(ndefRecords: Array<NdefRecord>): Array<number>,
		decodeMessage(bytes: Array<number>): Array<NdefRecord>,
		decodeTnf(tnf_byte: number): any,
		encodeTnf(
		mb: number, me: number, cf: number, sr: number, il: number, tnf: number
	): number,
		tnfToString(tnf: number): string
	}

	declare interface Util {
		bytesToString(bytes: Array<number>): string,
		stringToBytes(string: string): Array<number>,
		bytesToHexString(bytes: Array<number>): string
	}

	declare interface Nfc {
		addTagDiscoveredListener(callback: (event: TagEvent) => void, win?: () => void, fail?: () => void): void,
		addMimeTypeListener(
		mimeType: string, callback: () => void, win?: () => void, fail?: () => void
	): void,
		addNdefListener(
		callback: (event: NdefTagEvent) => void, win?: () => void, fail?: () => void
	): void,
		addNdefFormatableListener(
		callback: (event: NdefTagEvent) => void, win?: () => void, fail?: () => void
	): void,
		write(ndefMessage: Array<NdefRecord>, win?: () => void, fail?: () => void): void,
		makeReadOnly(win?: () => void, fail?: () => void): void,
		share(ndefMessage: Array<NdefRecord>, win?: () => void, fail?: () => void): void,
		unshare(win?: () => void, fail?: () => void): void,
		handover(uris: string | Array<string>, win?: () => void, fail?: () => void): void,
		stopHandover(win?: () => void, fail?: () => void): void,
		erase(win?: () => void, fail?: () => void): void,
		enabled(win?: (status: String) => void, fail?: (status: String) => void): void,
		removeTagDiscoveredListener(callback: (event: TagEvent) => void, win?: () => void, fail?: () => void): void,
		removeMimeTypeListener(
		mimeType: string, callback: (event: TagEvent) => void, win?: () => void, fail?: () => void
	): void,
		removeNdefListener(callback: (event: TagEvent) => void, win?: () => void, fail?: () => void): void,
		showSettings(win?: () => void, fail?: () => void): void
	}

			
}

declare module 'nfc' {
					declare module.exports: undefined


}

declare module 'ndef' {
					declare module.exports: undefined


}

declare module 'util' {
					declare module.exports: undefined


}