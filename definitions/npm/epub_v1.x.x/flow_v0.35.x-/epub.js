

declare module 'epub' {
		declare interface TocElement {
		level: number,
		order: number,
		title: string,
		id: string,
		href?: string
	}

		declare class EPub extends EventEmitter {
		constructor(epubfile: string, imagewebroot?: string, chapterwebroot?: string): this;
		metadata: Object;
		manifest: Object;
		spine: Object;
		flow: Array<Object>;
		toc: Array<TocElement>;
		parse(): void;
		getChapter(chapterId: string, callback: (error: Error, text: string) => void): void;
		getChapterRaw(chapterId: string, callback: (error: Error, text: string) => void): void;
		getImage(
		id: string, callback: (error: Error, data: Buffer, mimeType: string) => void
	): void;
		getFile(
		id: string, callback: (error: Error, data: Buffer, mimeType: string) => void
	): void
	}

	declare module.exports: undefined


}