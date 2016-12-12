

declare module 'adm-zip' {
				declare class AdmZip  {
		constructor(): this;
		constructor(fileName: string): this;
		readFile(entry: string): Buffer;
		readFile(entry: AdmZip.IZipEntry): Buffer;
		readFileAsync(entry: string, callback: (data: Buffer, err: string) => any): void;
		readFileAsync(entry: AdmZip.IZipEntry, callback: (data: Buffer, err: string) => any): void;
		readAsText(fileName: string, encoding?: string): string;
		readAsText(fileName: AdmZip.IZipEntry, encoding?: string): string;
		readAsTextAsync(fileName: string, callback: (data: string) => any, encoding?: string): void;
		readAsTextAsync(
		fileName: AdmZip.IZipEntry, callback: (data: string) => any, encoding?: string
	): void;
		deleteFile(entry: string): void;
		deleteFile(entry: AdmZip.IZipEntry): void;
		addZipComment(comment: string): void;
		getZipComment(): string;
		addZipEntryComment(entry: string, comment: string): void;
		addZipEntryComment(entry: AdmZip.IZipEntry, comment: string): void;
		getZipEntryComment(entry: string): string;
		getZipEntryComment(entry: AdmZip.IZipEntry): string;
		updateFile(entry: string, content: Buffer): void;
		updateFile(entry: AdmZip.IZipEntry, content: Buffer): void;
		addLocalFile(localPath: string, zipPath?: string): void;
		addLocalFolder(localPath: string, zipPath?: string): void;
		addFile(entryName: string, data: Buffer, comment?: string, attr?: number): void;
		getEntries(): AdmZip.IZipEntry[];
		getEntry(name: string): AdmZip.IZipEntry;
		extractEntryTo(
		entryPath: string, targetPath: string, maintainEntryPath?: boolean, overwrite?: boolean
	): boolean;
		extractEntryTo(
		entryPath: AdmZip.IZipEntry, targetPath: string, maintainEntryPath?: boolean, overwrite?: boolean
	): boolean;
		extractAllTo(targetPath: string, overwrite?: boolean): void;
		extractAllToAsync(targetPath: string, overwrite: boolean, callback: (error: Error) => void): void;
		writeZip(targetPath?: string): void;
		toBuffer(): Buffer
	}

	declare module.exports: undefined


}

declare module 'AdmZip' {
		declare interface IZipEntry {
		entryName: string,
		rawEntryName: Buffer,
		extra: Buffer,
		comment: string,
		name: string,
		isDirectory: boolean,
		header: Buffer,
		getCompressedData(): Buffer,
		getCompressedDataAsync(callback: (data: Buffer) => void): void,
		setData(value: string): void,
		setData(value: Buffer): void,
		getData(): Buffer,
		getDataAsync(callback: (data: Buffer) => void): void,
		packHeader(): Buffer,
		toString(): string
	}

			
}