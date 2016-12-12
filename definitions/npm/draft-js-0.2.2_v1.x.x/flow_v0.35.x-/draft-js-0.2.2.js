

declare module 'draft-js-0.2.2' {
					
}

declare module 'Draft' {
		declare interface IEditor {
		new (): Editor
	}

	declare interface EditorState {
		getCurrentContent(): ContentState,
		getSelection(): SelectionState,
		getCurrentInlineStyle(): any,
		getBlockTree(): any,
		createEmpty(decorator?: any): EditorState,
		createWithContent(contentState: ContentState, decorator?: any): EditorState,
		create(config: any): EditorState,
		push(
		editorState: EditorState, contentState: ContentState, actionType: string
	): EditorState,
		undo(editorState: EditorState): EditorState,
		redo(editorState: EditorState): EditorState,
		acceptSelection(editorState: EditorState, selectionState: SelectionState): EditorState,
		forceSelection(editorState: EditorState, selectionState: SelectionState): EditorState,
		moveFocusToEnd(editorState: EditorState): EditorState
	}

	declare interface CompositeDecorator {
		getDecorations(): Array<any>,
		getComponentForKey(): any,
		getPropsForKey(): any
	}

	declare interface Entity {
		create(type: string, mutability: string, data?: Object): EntityInstance,
		add(instance: EntityInstance): string,
		get(key: string): EntityInstance,
		mergeData(key: string, toMerge: any): EntityInstance,
		replaceData(key: string, newData: any): EntityInstance
	}

	declare interface EntityInstance {
		getData(): any,
		getKey(): string,
		getMutability(): string
	}

	declare interface BlockMapBuilder {
		createFromArray(blocks: Array<ContentBlock>): BlockMap
	}

	declare interface CharacterMetadata {
		create(config?: any): CharacterMetadata,
		applyStyle(record: CharacterMetadata, style: string): CharacterMetadata,
		removeStyle(record: CharacterMetadata, style: string): CharacterMetadata,
		applyEntity(record: CharacterMetadata, entityKey?: string): CharacterMetadata,
		getStyle(): any,
		hasStyle(style: string): boolean,
		getEntity(): string
	}

	declare interface IContentBlock {
		new (draftContentBlock: any): ContentBlock
	}

	declare interface ContentBlock {
		key: string,
		type: string,
		text: string,
		characterList: any,
		depth: number,
		getKey(): string,
		getType(): string,
		getText(): string,
		getCharacterList(): any,
		getLength(): number,
		getDepth(): number,
		getInlineStyleAt(offset: number): any,
		getEntityAt(offset: number): string,
		findStyleRanges(filterFn: Function, callback: Function): void,
		findEntityRanges(filterFn: Function, callback: Function): void
	}

	declare interface ContentState {
		createFromText(text: string): ContentState,
		createFromBlockArray(blocks: Array<ContentBlock>): ContentState,
		getBlockMap(): BlockMap,
		getSelectionBefore(): SelectionState,
		getSelectionAfter(): SelectionState,
		getBlockForKey(key: string): ContentBlock,
		getKeyBefore(key: string): string,
		getKeyAfter(key: string): string,
		getBlockBefore(key: string): ContentBlock,
		getBlockAfter(key: string): ContentBlock,
		getBlocksAsArray(): Array<ContentBlock>,
		getPlainText(): string,
		hasText(): boolean,
		set(key: string, value: any): ContentState,
		toJS(): any
	}

	declare interface ISelectionState {
		new (draftSelectionState: any): SelectionState,
		createEmpty(blockKey: string): SelectionState
	}

	declare interface SelectionState {
		getStartKey(): string,
		getStartOffset(): number,
		getEndKey(): string,
		getEndOffset(): number,
		getAnchorKey(): string,
		getAnchorOffset(): number,
		getFocusKey(): string,
		getFocusOffset(): number,
		getIsBackward(): boolean,
		getHasFocus(): boolean,
		isCollapsed(): boolean,
		hasEdgeWithin(blockKey: string, start: number, end: number): boolean,
		serialize(): string,
		get(key: string): any,
		set(key: string, value: any): SelectionState
	}

	declare interface BlockMap {
		get(key: string): ContentBlock,
		set(key: string, value: any): BlockMap,
		delete(key: string): BlockMap,
		find(cb: any): ContentBlock
	}

	declare interface Modifier {
		replaceText(
		contentState: ContentState, rangeToReplace: SelectionState, text: string, inlineStyle?: any, entityKey?: string
	): ContentState,
		insertText(
		contentState: ContentState, targetRange: SelectionState, text: string, inlineStyle?: any, entityKey?: string
	): ContentState,
		moveText(
		contentState: ContentState, removalRange: SelectionState, targetRange: SelectionState
	): ContentState,
		replaceWithFragment(
		contentState: ContentState, targetRange: SelectionState, fragment: BlockMap
	): ContentState,
		removeRange(
		contentState: ContentState, rangeToRemove: SelectionState, removalDirection: string
	): ContentState,
		splitBlock(contentState: ContentState, selectionState: SelectionState): ContentState,
		applyInlineStyle(
		contentState: ContentState, selectionState: SelectionState, inlineStyle: string
	): ContentState,
		removeInlineStyle(
		contentState: ContentState, selectionState: SelectionState, inlineStyle: string
	): ContentState,
		setBlockType(
		contentState: ContentState, selectionState: SelectionState, blockType: string
	): ContentState,
		applyEntity(
		contentState: ContentState, selectionState: SelectionState, entityKey: string
	): ContentState
	}

	declare interface RichUtils {
		currentBlockContainsLink(editorState: EditorState): boolean,
		getCurrentBlockType(editor: EditorState): string,
		handleKeyCommand(editorState: EditorState, command: string): any,
		insertSoftNewline(editorState: EditorState): EditorState,
		onBackspace(editorState: EditorState): EditorState,
		onDelete(editorState: EditorState): EditorState,
		onTab(event: Event, editorState: EditorState, maxDepth: number): EditorState,
		toggleBlockType(editorState: EditorState, blockType: string): EditorState,
		toggleCode(editorState: EditorState): EditorState,
		toggleLink(
		editorState: EditorState, targetSelection: SelectionState, entityKey: string
	): EditorState,
		tryToRemoveBlockStyle(editorState: EditorState): EditorState
	}

	declare interface EditorProps {
		editorState: EditorState,
		onChange(editorState: EditorState): void,
		placeholder?: string,
		textAlignment?: any,
		blockRendererFn?: (ContentBlock: ContentBlock) => any,
		blockStyleFn?: (ContentBlock: ContentBlock) => string,
		customStyleMap?: any,
		readOnly?: boolean,
		spellCheck?: boolean,
		stripPastedStyles?: boolean,
		handleReturn?: (e: any) => boolean,
		handleKeyCommand?: (command: string) => boolean,
		handleBeforeInput?: (chars: string) => boolean,
		handlePastedFiles?: (files: Array<Blob>) => boolean,
		handleDroppedFiles?: (selection: SelectionState, files: Array<Blob>) => boolean,
		handleDrop?: (selection: SelectionState, dataTransfer: any, isInternal: any) => boolean,
		onEscape?: (e: any) => void,
		onTab?: (e: any) => void,
		onUpArrow?: (e: any) => void,
		onDownArrow?: (e: any) => void,
		suppressContentEditableWarning?: any,
		onBlur?: (e: any) => void,
		onFocus?: (e: any) => void
	}

	declare interface Editor {
		props: EditorProps,
		state: any,
		refs: any,
		context: any,
		setState(): any,
		render(): any,
		forceUpdate(): any
	}

	declare function convertFromRaw(rawState: any): Array<ContentBlock>

	declare function convertToRaw(contentState: ContentState): any

	declare function genKey(): string

		
}

declare module 'draft-js' {
					declare module.exports: undefined


}