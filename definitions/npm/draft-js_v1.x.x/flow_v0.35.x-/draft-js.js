

declare module 'draft-js' {
					
}

declare module 'Base' {
	declare type DraftBlockRenderMap = Immutable.Map<DraftBlockType, DraftBlockRenderConfig>;

	declare type DraftTextAlignment = "left" | "center" | "right";

	declare interface DraftEditorProps {
		editorState: EditorState,
		onChange(editorState: EditorState): void,
		placeholder?: string,
		textAlignment?: DraftTextAlignment,
		blockRendererFn(block: ContentBlock): any,
		blockStyleFn(block: ContentBlock): string,
		customStyleMap?: any,
		keyBindingFn(e: SyntheticKeyboardEvent): DraftEditorCommand,
		keyBindingFn(e: SyntheticKeyboardEvent): string,
		readOnly?: boolean,
		spellCheck?: boolean,
		stripPastedStyles?: boolean,
		tabIndex?: number,
		ariaActiveDescendantID?: string,
		ariaAutoComplete?: string,
		ariaDescribedBy?: string,
		ariaExpanded?: boolean,
		ariaHasPopup?: boolean,
		ariaLabel?: string,
		ariaOwneeID?: string,
		webDriverTestID?: string,
		handleReturn(e: SyntheticKeyboardEvent): boolean,
		handleKeyCommand(command: DraftEditorCommand): boolean,
		handleKeyCommand(command: string): boolean,
		handleBeforeInput(chars: string): boolean,
		handlePastedText(text: string, html?: string): boolean,
		handlePastedFiles(files: Array<Blob>): boolean,
		handleDroppedFiles(selection: SelectionState, files: Array<Blob>): boolean,
		handleDrop(
		selection: SelectionState, dataTransfer: Object, isInternal: DraftDragType
	): boolean,
		onEscape(e: SyntheticKeyboardEvent): void,
		onTab(e: SyntheticKeyboardEvent): void,
		onUpArrow(e: SyntheticKeyboardEvent): void,
		onDownArrow(e: SyntheticKeyboardEvent): void,
		onBlur(e: SyntheticEvent): void,
		onFocus(e: SyntheticEvent): void,
		blockRenderMap?: DraftBlockRenderMap
	}

		declare class DraftEditor extends React$Component<DraftEditorProps, any> {
		focus(): void;
		blur(): void
	}

	
}

declare module 'Components' {
				declare class DraftEditorBlock extends React$Component<any, any> {
		
	}

	
}

declare module 'Selection' {
		declare interface FakeClientRect {
		left: number,
		width: number,
		right: number,
		top: number,
		bottom: number,
		height: number
	}

	declare function getVisibleSelectionRect(global: any): FakeClientRect

		
}

declare module 'Utils' {
			declare function getDefaultKeyBinding(e: SyntheticKeyboardEvent): DraftEditorCommand

	declare function getDefaultKeyBinding(e: SyntheticKeyboardEvent): string

	declare class KeyBindingUtil  {
		isCtrlKeyCommand(e: SyntheticKeyboardEvent): boolean;
		isOptionKeyCommand(e: SyntheticKeyboardEvent): boolean;
		hasCommandModifier(e: SyntheticKeyboardEvent): boolean
	}

	
}

declare module 'Constants' {
	declare type DraftEditorCommand = ("undo" | "redo" | "delete" | "delete-word" | "backspace" | "backspace-word" | "backspace-to-start-of-line" | "bold" | "italic" | "underline" | "code" | "split-block" | "transpose-characters" | "move-selection-to-start-of-block" | "move-selection-to-end-of-block" | "secondary-cut" | "secondary-paste");

	declare type DraftDragType = "internal" | "external";

	declare type DraftBlockType = ("unstyled" | "paragraph" | "header-one" | "header-two" | "header-three" | "header-four" | "header-five" | "header-six" | "unordered-list-item" | "ordered-list-item" | "blockquote" | "code-block" | "atomic");

	declare type DraftRemovalDirection = "backward" | "forward";

				
}

declare module 'Decorators' {
		declare interface DraftDecoratorType {
		getDecorations(block: ContentBlock): Immutable.List<string>,
		getComponentForKey(key: string): Function,
		getPropsForKey(key: string): any
	}

	declare interface DraftDecorator {
		strategy: (block: ContentBlock, callback: (start: number, end: number) => void) => void,
		component: Function,
		props?: Object
	}

		declare class CompositeDraftDecorator  {
		constructor(decorators: Array<DraftDecorator>): this;
		getDecorations(block: ContentBlock): Immutable.List<string>;
		getComponentForKey(key: string): Function;
		getPropsForKey(key: string): Object
	}

	
}

declare module 'Encoding' {
		declare interface EntityRange {
		key: number,
		offset: number,
		length: number
	}

	declare interface InlineStyleRange {
		style: string,
		offset: number,
		length: number
	}

	declare interface RawDraftEntity {
		type: DraftEntityType,
		mutability: DraftEntityMutability,
		data: {
		[key: string]: any
	}
	}

	declare interface RawDraftContentBlock {
		key: string,
		type: DraftBlockType,
		text: string,
		depth: number,
		inlineStyleRanges: Array<InlineStyleRange>,
		entityRanges: Array<EntityRange>,
		data?: Object
	}

	declare interface RawDraftContentState {
		blocks: Array<RawDraftContentBlock>,
		entityMap: {
		[key: string]: RawDraftEntity
	}
	}

	declare function convertFromHTMLtoContentBlocks(
		html: string, DOMBuilder: Function, blockRenderMap?: DraftBlockRenderMap
	): Array<ContentBlock>

	declare function convertFromRawToDraftState(rawState: RawDraftContentState): ContentState

	declare function convertFromDraftStateToRaw(contentState: ContentState): RawDraftContentState

		
}

declare module 'Entity' {
	declare type ComposedEntityType = "LINK" | "TOKEN" | "PHOTO";

	declare type DraftEntityType = string | ComposedEntityType;

	declare type DraftEntityMutability = "MUTABLE" | "IMMUTABLE" | "SEGMENTED";

	declare interface DraftEntityInstance {
		getType(): DraftEntityType,
		getMutability(): DraftEntityMutability,
		getData(): any
	}

		declare class DraftEntity  {
		create(
		type: DraftEntityType, mutability: DraftEntityMutability, data?: Object
	): string;
		add(instance: DraftEntityInstance): string;
		get(key: string): DraftEntityInstance;
		mergeData(key: string, toMerge: {
		[key: string]: any
	}): DraftEntityInstance;
		replaceData(key: string, newData: {
		[key: string]: any
	}): DraftEntityInstance
	}

	
}

declare module 'ImmutableData' {
	declare type DraftInlineStyle = Immutable.OrderedSet<string>;

	declare type BlockMap = Immutable.OrderedMap<string, Draft.Model.ImmutableData.ContentBlock>;

	declare type EditorChangeType = ("adjust-depth" | "apply-entity" | "backspace-character" | "change-block-data" | "change-block-type" | "change-inline-style" | "delete-character" | "insert-characters" | "insert-fragment" | "redo" | "remove-range" | "spellcheck-change" | "split-block" | "undo");

	declare interface DraftBlockRenderConfig {
		element: string,
		wrapper?: React.ReactElement<any>
	}

	declare interface CharacterMetadataConfig {
		style?: DraftInlineStyle,
		entity?: string
	}

	declare interface BlockMapBuilder {
		createFromArray(blocks: Array<ContentBlock>): BlockMap
	}

		declare class EditorState extends Record {
		createEmpty(decorator?: DraftDecoratorType): EditorState;
		createWithContent(contentState: ContentState, decorator?: DraftDecoratorType): EditorState;
		create(config: Object): EditorState;
		set(editorState: EditorState, put: Object): EditorState;
		acceptSelection(editorState: EditorState, selection: SelectionState): EditorState;
		forceSelection(editorState: EditorState, selection: SelectionState): EditorState;
		moveSelectionToEnd(editorState: EditorState): EditorState;
		moveFocusToEnd(editorState: EditorState): EditorState;
		push(
		editorState: EditorState, contentState: ContentState, changeType: EditorChangeType
	): EditorState;
		undo(editorState: EditorState): EditorState;
		redo(editorState: EditorState): EditorState;
		toJS(): Object;
		getAllowUndo(): boolean;
		getCurrentContent(): ContentState;
		getUndoStack(): Immutable.Stack<ContentState>;
		getRedoStack(): Immutable.Stack<ContentState>;
		getSelection(): SelectionState;
		getDecorator(): DraftDecoratorType;
		isInCompositionMode(): boolean;
		mustForceSelection(): boolean;
		getNativelyRenderedContent(): ContentState;
		getLastChangeType(): EditorChangeType;
		getInlineStyleOverride(): DraftInlineStyle;
		setInlineStyleOverride(editorState: EditorState, inlineStyleOverride: DraftInlineStyle): EditorState;
		getCurrentInlineStyle(): DraftInlineStyle;
		getBlockTree(blockKey: string): Immutable.List<any>;
		isSelectionAtStartOfContent(): boolean;
		isSelectionAtEndOfContent(): boolean;
		getDirectionMap(): Immutable.OrderedMap<any, any>
	}

	declare class ContentBlock extends Record {
		getKey(): string;
		getType(): DraftBlockType;
		getType(): string;
		getText(): string;
		getCharacterList(): Immutable.List<CharacterMetadata>;
		getLength(): number;
		getDepth(): number;
		getData(): Immutable.Map<any, any>;
		getInlineStyleAt(offset: number): DraftInlineStyle;
		getEntityAt(offset: number): string;
		findStyleRanges(
		filterFn: (value: CharacterMetadata) => boolean, callback: (start: number, end: number) => void
	): void;
		findEntityRanges(
		filterFn: (value: CharacterMetadata) => boolean, callback: (start: number, end: number) => void
	): void
	}

	declare class ContentState extends Record {
		createFromBlockArray(blocks: Array<ContentBlock>): ContentState;
		createFromText(text: string, delimiter?: string): ContentState;
		getBlockMap(): BlockMap;
		getSelectionBefore(): SelectionState;
		getSelectionAfter(): SelectionState;
		getBlockForKey(key: string): ContentBlock;
		getKeyBefore(key: string): string;
		getKeyAfter(key: string): string;
		getBlockAfter(key: string): ContentBlock;
		getBlockBefore(key: string): ContentBlock;
		getBlocksAsArray(): Array<ContentBlock>;
		getFirstBlock(): ContentBlock;
		getLastBlock(): ContentBlock;
		getPlainText(delimiter?: string): string;
		hasText(): boolean
	}

	declare class SelectionState extends Record {
		createEmpty(key: string): SelectionState;
		serialize(): string;
		getAnchorKey(): string;
		getAnchorOffset(): number;
		getFocusKey(): string;
		getFocusOffset(): number;
		getIsBackward(): boolean;
		getHasFocus(): boolean;
		hasEdgeWithin(blockKey: string, start: number, end: number): boolean;
		isCollapsed(): boolean;
		getStartKey(): string;
		getStartOffset(): number;
		getEndKey(): string;
		getEndOffset(): number
	}

	declare class CharacterMetadata  {
		applyStyle(record: CharacterMetadata, style: string): CharacterMetadata;
		removeStyle(record: CharacterMetadata, style: string): CharacterMetadata;
		applyEntity(record: CharacterMetadata, entityKey: string): CharacterMetadata;
		applyEntity(record: CharacterMetadata): CharacterMetadata;
		create(config?: CharacterMetadataConfig): CharacterMetadata;
		create(): CharacterMetadata;
		getStyle(): DraftInlineStyle;
		getEntity(): string;
		hasStyle(style: string): boolean
	}

	
}

declare module 'Keys' {
			declare function generateRandomKey(): string

		
}

declare module 'Modifier' {
	declare type URI = any;

			declare class AtomicBlockUtils  {
		insertAtomicBlock(editorState: EditorState, entityKey: string, character: string): EditorState
	}

	declare class DraftModifier  {
		replaceText(
		contentState: ContentState, rangeToReplace: SelectionState, text: string, inlineStyle?: DraftInlineStyle, entityKey?: string
	): ContentState;
		insertText(
		contentState: ContentState, targetRange: SelectionState, text: string, inlineStyle?: DraftInlineStyle, entityKey?: string
	): ContentState;
		moveText(
		contentState: ContentState, removalRange: SelectionState, targetRange: SelectionState
	): ContentState;
		replaceWithFragment(
		contentState: ContentState, targetRange: SelectionState, fragment: BlockMap
	): ContentState;
		removeRange(
		contentState: ContentState, rangeToRemove: SelectionState, removalDirection: DraftRemovalDirection
	): ContentState;
		splitBlock(contentState: ContentState, selectionState: SelectionState): ContentState;
		applyInlineStyle(
		contentState: ContentState, selectionState: SelectionState, inlineStyle: string
	): ContentState;
		removeInlineStyle(
		contentState: ContentState, selectionState: SelectionState, inlineStyle: string
	): ContentState;
		setBlockType(
		contentState: ContentState, selectionState: SelectionState, blockType: DraftBlockType
	): ContentState;
		setBlockType(
		contentState: ContentState, selectionState: SelectionState, blockType: string
	): ContentState;
		setBlockData(
		contentState: ContentState, selectionState: SelectionState, blockData: Immutable.Map<any, any>
	): ContentState;
		mergeBlockData(
		contentState: ContentState, selectionState: SelectionState, blockData: Immutable.Map<any, any>
	): ContentState;
		applyEntity(
		contentState: ContentState, selectionState: SelectionState, entityKey: string
	): ContentState
	}

	declare class RichTextEditorUtil  {
		currentBlockContainsLink(editorState: EditorState): boolean;
		getCurrentBlockType(editorState: EditorState): DraftBlockType;
		getCurrentBlockType(editorState: EditorState): string;
		getDataObjectForLinkURL(uri: URI): Object;
		handleKeyCommand(editorState: EditorState, command: DraftEditorCommand): EditorState;
		handleKeyCommand(editorState: EditorState, command: string): EditorState;
		insertSoftNewline(editorState: EditorState): EditorState;
		onBackspace(editorState: EditorState): EditorState;
		onDelete(editorState: EditorState): EditorState;
		onTab(
		event: SyntheticKeyboardEvent, editorState: EditorState, maxDepth: number
	): EditorState;
		toggleBlockType(editorState: EditorState, blockType: DraftBlockType): EditorState;
		toggleBlockType(editorState: EditorState, blockType: string): EditorState;
		toggleCode(editorState: EditorState): EditorState;
		toggleInlineStyle(editorState: EditorState, inlineStyle: string): EditorState;
		toggleLink(
		editorState: EditorState, targetSelection: SelectionState, entityKey: string
	): EditorState;
		tryToRemoveBlockStyle(editorState: EditorState): ContentState
	}

	
}