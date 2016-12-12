

declare module 'swiftclick' {
		declare interface SwiftClickObject {
		addNodeNamesToTrack(nodeNamesArray: string[]): void,
		replaceNodeNamesToTrack(nodeNamesArray: string[]): void,
		useCssParser(useParser: boolean): void
	}

	declare interface SwiftClickStatic {
		attach(contextEl: Element): SwiftClickObject
	}

			declare module.exports: SwiftClickStatic


}