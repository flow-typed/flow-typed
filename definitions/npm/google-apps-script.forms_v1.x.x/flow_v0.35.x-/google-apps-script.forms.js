

declare module 'google-apps-script.forms' {
					
}

declare module 'Forms' {
		declare export interface CheckboxItem {
		createChoice(value: string): Choice,
		createResponse(responses: String[]): ItemResponse,
		duplicate(): CheckboxItem,
		getChoices(): Choice[],
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		hasOtherOption(): boolean,
		isRequired(): boolean,
		setChoiceValues(values: String[]): CheckboxItem,
		setChoices(choices: Choice[]): CheckboxItem,
		setHelpText(text: string): CheckboxItem,
		setRequired(enabled: boolean): CheckboxItem,
		setTitle(title: string): CheckboxItem,
		showOtherOption(enabled: boolean): CheckboxItem
	}

	declare export interface Choice {
		getGotoPage(): PageBreakItem,
		getPageNavigationType(): PageNavigationType,
		getValue(): string
	}

	declare export interface DateItem {
		createResponse(response: Date): ItemResponse,
		duplicate(): DateItem,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		includesYear(): boolean,
		isRequired(): boolean,
		setHelpText(text: string): DateItem,
		setIncludesYear(enableYear: boolean): DateItem,
		setRequired(enabled: boolean): DateItem,
		setTitle(title: string): DateItem
	}

	declare export interface DateTimeItem {
		createResponse(response: Date): ItemResponse,
		duplicate(): DateTimeItem,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		includesYear(): boolean,
		isRequired(): boolean,
		setHelpText(text: string): DateTimeItem,
		setIncludesYear(enableYear: boolean): DateTimeItem,
		setRequired(enabled: boolean): DateTimeItem,
		setTitle(title: string): DateTimeItem
	}

	declare export interface DurationItem {
		createResponse(hours: Integer, minutes: Integer, seconds: Integer): ItemResponse,
		duplicate(): DurationItem,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		isRequired(): boolean,
		setHelpText(text: string): DurationItem,
		setRequired(enabled: boolean): DurationItem,
		setTitle(title: string): DurationItem
	}

	declare export interface Form {
		addCheckboxItem(): CheckboxItem,
		addDateItem(): DateItem,
		addDateTimeItem(): DateTimeItem,
		addDurationItem(): DurationItem,
		addEditor(emailAddress: string): Form,
		addEditor(user: Base.User): Form,
		addEditors(emailAddresses: String[]): Form,
		addGridItem(): GridItem,
		addImageItem(): ImageItem,
		addListItem(): ListItem,
		addMultipleChoiceItem(): MultipleChoiceItem,
		addPageBreakItem(): PageBreakItem,
		addParagraphTextItem(): ParagraphTextItem,
		addScaleItem(): ScaleItem,
		addSectionHeaderItem(): SectionHeaderItem,
		addTextItem(): TextItem,
		addTimeItem(): TimeItem,
		addVideoItem(): VideoItem,
		canEditResponse(): boolean,
		collectsEmail(): boolean,
		createResponse(): FormResponse,
		deleteAllResponses(): Form,
		deleteItem(index: Integer): void,
		deleteItem(item: Item): void,
		getConfirmationMessage(): string,
		getCustomClosedFormMessage(): string,
		getDescription(): string,
		getDestinationId(): string,
		getDestinationType(): DestinationType,
		getEditUrl(): string,
		getEditors(): Base.User[],
		getId(): string,
		getItemById(id: Integer): Item,
		getItems(): Item[],
		getItems(itemType: ItemType): Item[],
		getPublishedUrl(): string,
		getResponse(responseId: string): FormResponse,
		getResponses(): FormResponse[],
		getResponses(timestamp: Date): FormResponse[],
		getShuffleQuestions(): boolean,
		getSummaryUrl(): string,
		getTitle(): string,
		hasLimitOneResponsePerUser(): boolean,
		hasProgressBar(): boolean,
		hasRespondAgainLink(): boolean,
		isAcceptingResponses(): boolean,
		isPublishingSummary(): boolean,
		moveItem(from: Integer, to: Integer): Item,
		moveItem(item: Item, toIndex: Integer): Item,
		removeDestination(): Form,
		removeEditor(emailAddress: string): Form,
		removeEditor(user: Base.User): Form,
		requiresLogin(): boolean,
		setAcceptingResponses(enabled: boolean): Form,
		setAllowResponseEdits(enabled: boolean): Form,
		setCollectEmail(collect: boolean): Form,
		setConfirmationMessage(message: string): Form,
		setCustomClosedFormMessage(message: string): Form,
		setDescription(description: string): Form,
		setDestination(type: DestinationType, id: string): Form,
		setLimitOneResponsePerUser(enabled: boolean): Form,
		setProgressBar(enabled: boolean): Form,
		setPublishingSummary(enabled: boolean): Form,
		setRequireLogin(requireLogin: boolean): Form,
		setShowLinkToRespondAgain(enabled: boolean): Form,
		setShuffleQuestions(shuffle: boolean): Form,
		setTitle(title: string): Form,
		shortenFormUrl(url: string): string
	}

	declare export interface FormApp {
		Alignment: Alignment,
		DestinationType: DestinationType,
		ItemType: ItemType,
		PageNavigationType: PageNavigationType,
		create(title: string): Form,
		getActiveForm(): Form,
		getUi(): Base.Ui,
		openById(id: string): Form,
		openByUrl(url: string): Form
	}

	declare export interface FormResponse {
		getEditResponseUrl(): string,
		getId(): string,
		getItemResponses(): ItemResponse[],
		getRespondentEmail(): string,
		getResponseForItem(item: Item): ItemResponse,
		getTimestamp(): Date,
		submit(): FormResponse,
		toPrefilledUrl(): string,
		withItemResponse(response: ItemResponse): FormResponse
	}

	declare export interface GridItem {
		createResponse(responses: String[]): ItemResponse,
		duplicate(): GridItem,
		getColumns(): String[],
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getRows(): String[],
		getTitle(): string,
		getType(): ItemType,
		isRequired(): boolean,
		setColumns(columns: String[]): GridItem,
		setHelpText(text: string): GridItem,
		setRequired(enabled: boolean): GridItem,
		setRows(rows: String[]): GridItem,
		setTitle(title: string): GridItem
	}

	declare export interface ImageItem {
		duplicate(): ImageItem,
		getAlignment(): Alignment,
		getHelpText(): string,
		getId(): Integer,
		getImage(): Base.Blob,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		getWidth(): Integer,
		setAlignment(alignment: Alignment): ImageItem,
		setHelpText(text: string): ImageItem,
		setImage(image: Base.BlobSource): ImageItem,
		setTitle(title: string): ImageItem,
		setWidth(width: Integer): ImageItem
	}

	declare export interface Item {
		asCheckboxItem(): CheckboxItem,
		asDateItem(): DateItem,
		asDateTimeItem(): DateTimeItem,
		asDurationItem(): DurationItem,
		asGridItem(): GridItem,
		asImageItem(): ImageItem,
		asListItem(): ListItem,
		asMultipleChoiceItem(): MultipleChoiceItem,
		asPageBreakItem(): PageBreakItem,
		asParagraphTextItem(): ParagraphTextItem,
		asScaleItem(): ScaleItem,
		asSectionHeaderItem(): SectionHeaderItem,
		asTextItem(): TextItem,
		asTimeItem(): TimeItem,
		asVideoItem(): VideoItem,
		duplicate(): Item,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		setHelpText(text: string): Item,
		setTitle(title: string): Item
	}

	declare export interface ItemResponse {
		getItem(): Item,
		getResponse(): Object
	}

	declare export interface ListItem {
		createChoice(value: string): Choice,
		createChoice(value: string, navigationItem: PageBreakItem): Choice,
		createChoice(value: string, navigationType: PageNavigationType): Choice,
		createResponse(response: string): ItemResponse,
		duplicate(): ListItem,
		getChoices(): Choice[],
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		isRequired(): boolean,
		setChoiceValues(values: String[]): ListItem,
		setChoices(choices: Choice[]): ListItem,
		setHelpText(text: string): ListItem,
		setRequired(enabled: boolean): ListItem,
		setTitle(title: string): ListItem
	}

	declare export interface MultipleChoiceItem {
		createChoice(value: string): Choice,
		createChoice(value: string, navigationItem: PageBreakItem): Choice,
		createChoice(value: string, navigationType: PageNavigationType): Choice,
		createResponse(response: string): ItemResponse,
		duplicate(): MultipleChoiceItem,
		getChoices(): Choice[],
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		hasOtherOption(): boolean,
		isRequired(): boolean,
		setChoiceValues(values: String[]): MultipleChoiceItem,
		setChoices(choices: Choice[]): MultipleChoiceItem,
		setHelpText(text: string): MultipleChoiceItem,
		setRequired(enabled: boolean): MultipleChoiceItem,
		setTitle(title: string): MultipleChoiceItem,
		showOtherOption(enabled: boolean): MultipleChoiceItem
	}

	declare export interface PageBreakItem {
		duplicate(): PageBreakItem,
		getGoToPage(): PageBreakItem,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getPageNavigationType(): PageNavigationType,
		getTitle(): string,
		getType(): ItemType,
		setGoToPage(goToPageItem: PageBreakItem): PageBreakItem,
		setGoToPage(navigationType: PageNavigationType): PageBreakItem,
		setHelpText(text: string): PageBreakItem,
		setTitle(title: string): PageBreakItem
	}

	declare export interface ParagraphTextItem {
		createResponse(response: string): ItemResponse,
		duplicate(): ParagraphTextItem,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		isRequired(): boolean,
		setHelpText(text: string): ParagraphTextItem,
		setRequired(enabled: boolean): ParagraphTextItem,
		setTitle(title: string): ParagraphTextItem
	}

	declare export interface ScaleItem {
		createResponse(response: Integer): ItemResponse,
		duplicate(): ScaleItem,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getLeftLabel(): string,
		getLowerBound(): Integer,
		getRightLabel(): string,
		getTitle(): string,
		getType(): ItemType,
		getUpperBound(): Integer,
		isRequired(): boolean,
		setBounds(lower: Integer, upper: Integer): ScaleItem,
		setHelpText(text: string): ScaleItem,
		setLabels(lower: string, upper: string): ScaleItem,
		setRequired(enabled: boolean): ScaleItem,
		setTitle(title: string): ScaleItem
	}

	declare export interface SectionHeaderItem {
		duplicate(): SectionHeaderItem,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		setHelpText(text: string): SectionHeaderItem,
		setTitle(title: string): SectionHeaderItem
	}

	declare export interface TextItem {
		createResponse(response: string): ItemResponse,
		duplicate(): TextItem,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		isRequired(): boolean,
		setHelpText(text: string): TextItem,
		setRequired(enabled: boolean): TextItem,
		setTitle(title: string): TextItem
	}

	declare export interface TimeItem {
		createResponse(hour: Integer, minute: Integer): ItemResponse,
		duplicate(): TimeItem,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		isRequired(): boolean,
		setHelpText(text: string): TimeItem,
		setRequired(enabled: boolean): TimeItem,
		setTitle(title: string): TimeItem
	}

	declare export interface VideoItem {
		duplicate(): VideoItem,
		getAlignment(): Alignment,
		getHelpText(): string,
		getId(): Integer,
		getIndex(): Integer,
		getTitle(): string,
		getType(): ItemType,
		getWidth(): Integer,
		setAlignment(alignment: Alignment): VideoItem,
		setHelpText(text: string): VideoItem,
		setTitle(title: string): VideoItem,
		setVideoUrl(youtubeUrl: string): VideoItem,
		setWidth(width: Integer): VideoItem
	}

			
}