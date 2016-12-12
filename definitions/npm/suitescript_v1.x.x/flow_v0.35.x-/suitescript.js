

declare module 'suitescript' {
		declare interface nlobjSearch {
		
	}

	declare interface StandardLine {
		getEntityId(): number,
		getId(): number,
		getSubsidiaryId(): number,
		getTaxableAmount(): string,
		getTaxAmount(): string,
		getTaxItemId(): number,
		getTaxType(): string,
		isPosting(): boolean,
		isTaxable(): boolean
	}

	declare interface StandardLines {
		getCount(): number,
		getLine(index: number): StandardLine
	}

	declare interface CustomLine {
		isBookSpecific(): boolean,
		setBookSpecific(bookSpecific: boolean): void,
		setAccountId(accountId: number): void,
		setClassId(classId: number): void,
		setCreditAmount(credit: string): void,
		setDebitAmount(debit: string): void,
		setDepartmentId(departmentId: number): void,
		setLocationId(locationId: number): void,
		setMemo(memo: string): void
	}

	declare interface CustomLines {
		addNewLine(): CustomLine,
		getCount(): number,
		getLine(index: number): CustomLine
	}

	declare interface AccountingBook {
		getId(): number,
		isPrimary(): boolean
	}

	declare interface nlobjRecord {
		new (): any,
		getId(): string | number,
		getRecordType(): string,
		getField(fldnam: string): () => void,
		getSubList(type: string): () => void,
		getMatrixField(type: string, fldnam: string, column: any): () => void,
		getLineItemField(type: string, fldnam: string, linenum?: any): () => void,
		getLineItemMatrixField(type: string, fldnam: string, linenum: any, column: any): () => void,
		setFieldValue(name: string, value: string | number): any,
		setFieldValues(name: string, values: any): void,
		getFieldValue(name: string): string,
		getFieldValues(name: string): string[],
		setFieldText(name: string, text: string): any,
		setFieldTexts(name: string, texts: any): any,
		getFieldText(name: string): string,
		getFieldTexts(name: string): void,
		getMatrixValue(type: string, name: string, column: any): string,
		setMatrixValue(type: string, name: string, column: any, value: string): any,
		getAllFields(): string[],
		getAllLineItemFields(group: string): void,
		setLineItemValue(group: string, name: string, line: any, value: string): void,
		setLineItemDateTimeValue(group: string, name: string, line: any, value: any, timezone: string): void,
		getLineItemValue(group: string, name: string, line: any): string,
		getLineItemDateTimeValue(group: string, name: string, line: any, timezone: string): void,
		getLineItemText(group: string, name: string, line: any): string,
		setCurrentLineItemValue(
		group: string, name: string, value: string | number, firefieldchanged?: boolean, synchronous?: boolean
	): void,
		setCurrentLineItemText(
		group: string, name: string, value: string | number, firefieldchanged?: boolean, synchronous?: boolean
	): void,
		setCurrentLineItemDateTimeValue(group: string, name: string, value: string, timezone: string): any,
		getCurrentLineItemValue(group: string, name: string): string,
		getCurrentLineItemDateTimeValue(group: string, name: string, timezone: string): string,
		getCurrentLineItemText(group: string, name: string): string,
		setCurrentLineItemMatrixValue(group: string, name: string, column: any, value: string): any,
		getCurrentLineItemMatrixValue(group: string, name: string, column: any): string,
		getMatrixCount(group: string, name: string): any,
		getLineItemCount(group: string): string | number,
		findLineItemValue(group: string, fldnam: string, value: string): any,
		findLineItemMatrixValue(group: string, fldnam: string, column: any, value: string): any,
		insertLineItem(group: string, line?: any): void,
		removeLineItem(group: string, line?: any): void,
		selectNewLineItem(group: string): any,
		selectLineItem(group: string, line: any): any,
		commitLineItem(group: string): any,
		setDateTimeValue(name: string, value: string, timezone: string): any,
		getDateTimeValue(fldnam: string, timezone: string): string
	}

	declare interface nlobjConfiguration {
		new (): any,
		getType(): string,
		getField(fldnam: string): () => void,
		setFieldValue(name: string, value: string): any,
		setFieldValues(name: string, value: any): any,
		getFieldValue(name: string): string,
		getFieldValues(name: string): string[],
		setFieldText(name: string, text: string): any,
		setFieldTexts(name: string, texts: any): any,
		getFieldText(name: string): string,
		getFieldTexts(name: string): void,
		getAllFields(): string[]
	}

	declare interface nlobjFile {
		new (): any,
		getName(): string,
		setName(name: string): any,
		getFolder(): any,
		setFolder(folder: any): any,
		setEncoding(encoding: string): any,
		isOnline(): boolean,
		setIsOnline(online: boolean): any,
		isInactive(): boolean,
		setIsInactive(inactive: boolean): any,
		getDescription(): string,
		setDescription(descr: string): any,
		getId(): any,
		getSize(): any,
		getURL(): string,
		getType(): string,
		getValue(): string
	}

	declare interface nlobjSearchFilter {
		new (name: string, join: string, operator: string, value: any, value2: string): any,
		getName(): string,
		getJoin(): string,
		getOperator(): string
	}

	declare interface nlobjSearchColumn {
		new (name: string, join?: string, summary?: string): nlobjSearchColumn,
		getName(): string,
		getJoin(): string,
		getLabel(): string,
		getSummary(): string,
		getFormula(): string,
		setSort(order: any): (name: string, join: string, summary: string) => void,
		setLabel(label: string): nlobjSearchColumn
	}

	declare interface nlobjSearchResult {
		new (): any,
		getId(): any,
		getRecordType(): string,
		getValue(name: string, join: string, summary: string): string,
		getText(name: string, join: string, summary: string): string,
		getAllColumns(): void
	}

	declare interface nlobjContext {
		new (): any,
		getName(): string,
		getUser(): string,
		getRole(): string,
		getRoleId(): string,
		getRoleCenter(): string,
		getEmail(): string,
		getContact(): any,
		getCompany(): string,
		getDepartment(): any,
		getLocation(): any,
		getSubsidiary(): any,
		getExecutionContext(): string,
		getRemainingUsage(): any,
		getFeature(name: string): boolean,
		getPermission(name: string): any,
		getPreference(name: string): string,
		getSessionObject(name: string): string,
		setSessionObject(name: string, value: string): any,
		getAllSessionObjects(): void,
		getVersion(): string,
		getEnvironment(): string,
		getLogLevel(): void,
		getScriptId(): string,
		getDeploymentId(): string,
		getPercentComplete(): any,
		setPercentComplete(pct: any): any,
		getSetting(type: string, name: string): void,
		setSetting(type: string, name: string, value: string): void,
		getColorPreferences(): any,
		getRuntimeVersion(): any
	}

	declare interface nlobjError {
		new (): any,
		getId(): string,
		getCode(): string,
		getDetails(): string,
		getStackTrace(): void,
		getUserEvent(): string,
		getInternalId(): any
	}

	declare interface nlobjServerResponse {
		new (): any,
		getContentType(): string,
		getHeader(name: string): string,
		getHeaders(name: string): void,
		getAllHeaders(): void,
		getCode(): string,
		getBody(): any,
		getError(): () => void
	}

	declare interface nlobjResponse {
		new (): any,
		getBody(): any,
		addHeader(name: string, value: string): any,
		setHeader(name: string, value: string): any,
		getHeader(): string,
		getHeaders(name: string): void,
		getAllHeaders(): any,
		sendNoCache(): any,
		setContentType(type: string, name?: string, disposition?: string): void,
		sendRedirect(
		type: string, subtype: string, id?: string | number, pagemode?: boolean, parameters?: any
	): any,
		write(output: string): any,
		writeLine(output: string): any,
		writePage(pageobject: any): any,
		setEncoding(encoding: string): any,
		getCode(): string
	}

	declare interface nlobjRequest {
		new (): any,
		getParameter(name: string): string,
		getParameterValues(name: string): void,
		getAllParameters(): any,
		getLineItemValue(group: string, name: string, line: any): string,
		getLineItemCount(group: string): string | number,
		getHeader(name: string): string,
		getAllHeaders(): any,
		getFile(name: string): nlobjFile,
		getAllFiles(): any,
		getBody(): any,
		getURL(): string,
		getMethod(): string
	}

	declare interface nlobjPortlet {
		new (): any,
		setTitle(title: string): void,
		setHtml(html: string): void,
		addColumn(name: string, type: string, label: string, align?: string): void,
		addEditColumn(column: () => void, showView: boolean, showHref?: string): () => void,
		addRow(row: any): void,
		addRows(rows: any): void,
		addField(name: string, type: string, label?: string, source?: any): () => void,
		setSubmitButton(url: string, label?: string): void,
		addLine(text: string, url?: string, indent?: any): void
	}

	declare interface nlobjList {
		new (): any,
		setTitle(title: string): void,
		setStyle(style: string): void,
		setScript(script: any): void,
		addColumn(name: string, type: string, label: string, align?: string): () => void,
		addEditColumn(column: () => void, showView: boolean, showHref?: string): () => void,
		addRow(row: any): void,
		addRows(rows: any): void,
		addButton(name: string, label: string, script: string): void,
		addPageLink(type: string, title: string, url: string): void
	}

	declare interface nlobjForm {
		new (): nlobjForm,
		setTitle(title: string): void,
		addTitleHtml(html: any): void,
		setScript(script: any): void,
		setFieldValues(values: any): void,
		addPageLink(type: string, title: string, url: string): void,
		addButton(name: string, label: string, script?: string): nlobjButton,
		getButton(name: string): nlobjButton,
		addResetButton(label?: string): nlobjButton,
		addSubmitButton(label?: string): nlobjButton,
		addTab(name: string, label: string): nlobjTab,
		addField(
		name: string, type: string, label?: string, sourceOrRadio?: any, tab?: string
	): nlobjField,
		addCredentialField(
		name: string, label: string, website?: string, scriptId?: string, value?: string, entityMatch?: boolean, tab?: string
	): nlobjField,
		addSubTab(name: string, label: string, tab?: string): nlobjTab,
		addSubList(name: string, type: string, label: string, tab?: string): nlobjSubList,
		insertTab(tab: () => void, nexttab: string): nlobjTab,
		insertField(field: () => void, nextfld: string): nlobjField,
		insertSubTab(subtab: () => void, nextsubtab: string): nlobjTab,
		insertSubList(sublist: () => void, nextsublist: string): nlobjSubList,
		getTab(name: string): nlobjTab,
		getField(name: string, radio?: string): nlobjField,
		getSubTab(name: string): nlobjTab,
		getSubList(name: string): nlobjSubList,
		addFieldGroup(name: string, label: string, tab: any): nlobjFieldGroup,
		getTabs(): nlobjTab[]
	}

	declare interface nlobjAssistant {
		new (): any,
		setTitle(title: string): any,
		setScript(script: any): any,
		setSplash(title: string, text1: string, text2?: string): any,
		setShortcut(show: boolean): any,
		setFieldValues(values: any): any,
		setOrdered(ordered: boolean): any,
		setNumbered(numbered: boolean): any,
		isFinished(): boolean,
		setFinished(html: string): any,
		hasError(): boolean,
		setError(html: string): any,
		setCurrentStep(step: () => void): any,
		addStep(name: string, label: string): () => void,
		addField(
		name: string, type: string, label?: string, source?: any, group?: string
	): () => void,
		addSubList(name: string, type: string, label: string): () => void,
		addFieldGroup(name: string, label: string): () => void,
		getStep(name: string): () => void,
		getField(name: string): () => void,
		getSubList(name: string): () => void,
		getFieldGroup(name: string): () => void,
		getAllSteps(): void,
		getAllFields(): string[],
		getAllSubLists(): void,
		getAllFieldGroups(): void,
		getLastAction(): string,
		getLastStep(): () => void,
		getNextStep(): () => void,
		getCurrentStep(): () => void,
		getStepCount(): any,
		sendRedirect(response: () => void): any
	}

	declare interface nlobjField {
		new (): any,
		getName(): string,
		getLabel(): string,
		getType(): string,
		isHidden(): boolean,
		isMandatory(): boolean,
		isDisabled(): boolean,
		setLabel(label: string): () => void,
		setAlias(alias: string): () => void,
		setDefaultValue(value: string): () => void,
		setDisabled(disabled: boolean): () => void,
		setMandatory(mandatory: boolean): () => void,
		setMaxLength(maxlength: any): () => void,
		setDisplayType(type: string): () => void,
		setBreakType(breaktype: string): () => void,
		setLayoutType(type: string, breaktype?: string): () => void,
		setLinkText(text: string): () => void,
		setDisplaySize(width: any, height: any): () => void,
		setPadding(padding: any): () => void,
		setHelpText(help: string, inline?: string): () => void,
		addSelectOption(value: string, text: string, selected?: boolean): void
	}

	declare interface nlobjSubList {
		new (): any,
		setLabel(label: string): void,
		setHelpText(help: string): void,
		setDisplayType(type: string): void,
		setLineItemValue(field: string, line: any, value: string): void,
		setLineItemMatrixValue(field: string, line: any, column: any, value: string): any,
		setLineItemValues(values: any): void,
		getLineItemCount(group: string): string | number,
		addField(name: string, type: string, label: string, source: any): () => void,
		setUniqueField(fldnam: string): () => void,
		addButton(name: string, label: string, script: string): () => void,
		addRefreshButton(): () => void,
		addMarkAllButtons(): void
	}

	declare interface nlobjColumn {
		new (): any,
		setLabel(label: string): void,
		setURL(value: string, perRow: boolean): void,
		addParamToURL(param: string, value: string, perRow?: boolean): void
	}

	declare interface nlobjTab {
		new (): any,
		setLabel(label: string): () => void,
		setHelpText(help: string): () => void
	}

	declare interface nlobjAssistantStep {
		new (): any,
		setLabel(label: string): any,
		setHelpText(help: string): () => void,
		getStepNumber(): any,
		getFieldValue(name: string): string,
		getFieldValues(name: string): string[],
		getLineItemCount(group: string): any,
		getLineItemValue(group: string, name: string, line: any): string,
		getAllFields(): string[],
		getAllLineItems(): void,
		getAllLineItemFields(group: string): void
	}

	declare interface nlobjFieldGroup {
		new (): any,
		setLabel(label: string): () => void,
		setCollapsible(collapsible: boolean, defaultcollapsed?: boolean): () => void,
		setSingleColumn(singleColumn: boolean): () => void,
		setShowBorder(showBorder: boolean): () => void
	}

	declare interface nlobjButton {
		new (): nlobjButton,
		setLabel(label: string): nlobjButton,
		setDisabled(disabled: boolean): nlobjButton,
		setVisible(visible: boolean): nlobjButton
	}

	declare interface nlobjSelectOption {
		new (): any,
		getId(): string,
		getText(): string
	}

	declare function nlapiCopyRecord(type: string, id: any, initializeValues?: any): nlobjRecord

	declare function nlapiDisableLineItemField(type: string, fldnam: string, val: boolean): void

	declare function nlapiDisableField(fldnam: string, val: any): void

	declare function nlapiLoadSearch(fldnam: string, val: any): void

	declare function nlapiCreateSearch(
		type: string, filters: nlobjSearchFilter | nlobjSearchFilter[], columns: nlobjSearchColumn | nlobjSearchColumn[]
	): nlobjSearch

	declare function nlapiLoadRecord(type: string, id: any, initializeValues?: any): nlobjRecord

	declare function nlapiCreateRecord(type: string, initializeValues?: any): nlobjRecord

	declare function nlapiSubmitRecord(record: any, doSourcing?: boolean, ignoreMandatoryFields?: boolean): any

	declare function nlapiDeleteRecord(type: string, id: any): void

	declare function nlapiSearchRecord(type: string, id: any, filters: any, columns: any): nlobjSearchResult[]

	declare function nlapiSearchGlobal(keywords: string): nlobjSearchResult[]

	declare function nlapiSearchDuplicate(type: string, fields: any, id?: any): nlobjSearchResult[]

	declare function nlapiTransformRecord(
		type: string, id: any, transformType: string, transformValues?: any
	): nlobjRecord

	declare function nlapiVoidTransaction(type: string, id: string): string

	declare function nlapiLookupField(type: string, id: number, fields: string, text?: boolean): string

	declare function nlapiLookupField(type: string, id: number, fields: string[], text?: boolean): any

	declare function nlapiSubmitField(type: string, id: any, fields: any, values: any, doSourcing?: boolean): void

	declare function nlapiAttachRecord(type1: string, id1: any, type2: string, id2: any, properties?: any): void

	declare function nlapiDetachRecord(type1: string, id1: any, type2: string, id2: any, properties?: any): void

	declare function nlapiResolveURL(type: string, subtype: string, id?: string, pagemode?: string): string

	declare function nlapiSetRedirectURL(
		type: string, identifier: string, id?: string | number, editmode?: boolean, parameters?: any
	): void

	declare function nlapiRequestURL(url: string, postdata?: any, headers?: any, callback?: any, method?: any): any

	declare function nlapiGetContext(): any

	declare function nlapiGetUser(): any

	declare function nlapiGetRole(): any

	declare function nlapiGetDepartment(): any

	declare function nlapiGetLocation(): any

	declare function nlapiGetSubsidiary(): any

	declare function nlapiGetRecordType(): string

	declare function nlapiGetRecordId(): any

	declare function nlapiSendEmail(
		author: number, recipient: string | number, subject: string, body: string | nlobjFile[], cc?: string | string[], bcc?: string | string[], records?: any, attachments?: nlobjFile | nlobjFile[], notifySenderOnBounce?: boolean, internalOnly?: boolean, replyTo?: string
	): void

	declare function nlapiSendCampaignEmail(campaigneventid: any, recipientid: any): any

	declare function nlapiSendFax(
		from: any, to: any, subject: string, body: string, records: any, files: any
	): any

	declare function nlapiGetField(fldnam: string): any

	declare function nlapiGetMatrixField(type: string, fldnam: string, column: any): any

	declare function nlapiGetLineItemField(type: string, fldnam: string, linenum?: any): any

	declare function nlapiGetLineItemMatrixField(type: string, fldnam: string, linenum: any, column: any): any

	declare function nlapiGetFieldValue(fldnam: string): string

	declare function nlapiSetFieldValue(
		fldnam: string, value: string, firefieldchanged?: boolean, synchronous?: boolean
	): any

	declare function nlapiGetFieldText(fldnam: string): string

	declare function nlapiSetFieldText(
		fldnam: string, txt: string, firefieldchanged?: boolean, synchronous?: boolean
	): any

	declare function nlapiGetFieldValues(fldnam: string): void

	declare function nlapiSetFieldValues(
		fldnam: string, values: any, firefieldchanged?: boolean, synchronous?: boolean
	): any

	declare function nlapiGetFieldTexts(fldnam: string): void

	declare function nlapiSetFieldTexts(
		fldnam: string, texts: any, firefieldchanged?: boolean, synchronous?: boolean
	): any

	declare function nlapiGetMatrixValue(type: string, fldnam: string, column: any): string

	declare function nlapiSetMatrixValue(
		type: string, fldnam: string, column: any, value: string, firefieldchanged?: boolean, synchronous?: boolean
	): any

	declare function nlapiGetCurrentLineItemMatrixValue(type: string, fldnam: string, column: any): string

	declare function nlapiSetCurrentLineItemMatrixValue(
		type: string, fldnam: string, column: any, value: string, firefieldchanged?: boolean, synchronous?: boolean
	): any

	declare function nlapiGetLineItemMatrixValue(type: string, fldnam: string, linenum: any, column: any): void

	declare function nlapiGetLineItemValue(type: string, fldnam: string, linenum: any): string

	declare function nlapiGetLineItemDateTimeValue(type: string, fldnam: string, linenum: any, timezone: string): string

	declare function nlapiSetLineItemValue(type: string, fldnam: string, linenum: any, value: string | number): void

	declare function nlapiSetLineItemDateTimeValue(type: string, fldnam: string, linenum: any, value: any, timezone: string): void

	declare function nlapiGetLineItemText(type: string, fldnam: string, linenum: any): string

	declare function nlapiFindLineItemValue(type: string, fldnam: string, val: string): any

	declare function nlapiFindLineItemMatrixValue(type: string, fldnam: string, column: any, val: string): any

	declare function nlapiGetMatrixCount(type: string, fldnam: string): any

	declare function nlapiGetLineItemCount(type: string): string | number

	declare function nlapiInsertLineItem(type: string, line?: any): void

	declare function nlapiRemoveLineItem(type: string, line?: any): any

	declare function nlapiSetCurrentLineItemValue(
		type: string, fldnam: string, value: string | number, firefieldchanged?: boolean, synchronous?: boolean
	): void

	declare function nlapiSetCurrentLineItemDateTimeValue(type: string, fldnam: string, value: string, timezone: string): any

	declare function nlapiSetCurrentLineItemText(
		type: string, fldnam: string, txt: string, firefieldchanged?: boolean, synchronous?: boolean
	): any

	declare function nlapiGetCurrentLineItemValue(type: string, fldnam: string): string

	declare function nlapiGetCurrentLineItemDateTimeValue(type: string, fldnam: string, timezone: string): string

	declare function nlapiGetCurrentLineItemText(type: string, fldnam: string): string

	declare function nlapiGetCurrentLineItemIndex(type: string): any

	declare function nlapiSetLineItemDisabled(type: string, fldnam: string, disable: boolean, linenum: any): any

	declare function nlapiGetFieldMandatory(fldnam: string): boolean

	declare function nlapiGetLineItemMandatory(type: string, fldnam: string): boolean

	declare function nlapiSetFieldMandatory(fldnam: string, mandatory: boolean): any

	declare function nlapiSetLineItemMandatory(type: string, fldnam: string, mandatory: boolean): any

	declare function nlapiSelectLineItem(type: string, linenum: any): any

	declare function nlapiCommitLineItem(type: string): any

	declare function nlapiCancelLineItem(type: string): any

	declare function nlapiSelectNewLineItem(type: string): any

	declare function nlapiRefreshLineItems(type: string): void

	declare function nlapiInsertSelectOption(fldnam: string, value: string, text: string, selected?: boolean): any

	declare function nlapiRemoveSelectOption(fldnam: string, value: string): any

	declare function nlapiInsertLineItemOption(
		type: string, fldnam: string, value: string, text: string, selected?: boolean
	): any

	declare function nlapiRemoveLineItemOption(type: string, fldnam: string, value: string): any

	declare function nlapiIsLineItemChanged(type: string): boolean

	declare function nlapiGetNewRecord(): any

	declare function nlapiGetOldRecord(): any

	declare function nlapiCreateError(code: string, details: string, suppressEmail?: boolean): any

	declare function nlapiCreateForm(title: string, hideHeader?: boolean): nlobjForm

	declare function nlapiCreateList(title: string, hideHeader?: boolean): any

	declare function nlapiCreateAssistant(title: string, hideHeader?: boolean): any

	declare function nlapiLoadFile(id: any): any

	declare function nlapiSubmitFile(file: nlobjFile): any

	declare function nlapiDeleteFile(id: any): any

	declare function nlapiCreateFile(name: string, type: string, contents: string): nlobjFile

	declare function nlapiMergeRecord(
		id: any, baseType: string, baseId: any, altType?: string, altId?: any, fields?: any
	): any

	declare function nlapiPrintRecord(type: string, id: any, format?: string, properties?: any): any

	declare function nlapiXMLToPDF(input: string): any

	declare function nlapiCreateTemplateRenderer(): any

	declare function nlapiCreateEmailMerger(id: any): any

	declare function nlapiLogExecution(type: string, title: string, details?: string): any

	declare function nlapiScheduleScript(script: string, deployment: string, parameters?: any): string

	declare function nlapiOutboundSSO(ssoAppKey: string): string

	declare function nlapiLoadConfiguration(type: string): any

	declare function nlapiSubmitConfiguration(setup: any): void

	declare function nlapiStringToDate(str: string, format?: string): Date

	declare function nlapiDateToString(d: Date, formattype?: string): string

	declare function nlapiAddDays(d: any, days: any): any

	declare function nlapiAddMonths(d: any, months: any): any

	declare function nlapiFormatCurrency(str: string): string

	declare function nlapiEncrypt(s: string, algotithm: string, key?: string): string

	declare function nlapiEscapeXML(text: string): string

	declare function nlapiStringToXML(str: string): any

	declare function nlapiXMLToString(xml: any): string

	declare function nlapiValidateXML(xmlDocument: any, schemaDocument: any, schemaFolderId: string): void

	declare function nlapiSelectValue(node: any, xpath: string): string

	declare function nlapiYieldScript(): void

	declare function nlapiSelectValues(node: any, xpath: string): void

	declare function nlapiSelectNode(node: any, xpath: string): any

	declare function nlapiSelectNodes(node: any, xpath: string): any

	declare function nlapiExchangeRate(fromCurrency: any, toCurrency: any, date?: string): any

	declare function nlapiInitiateWorkflow(recordtype: string, id: any, workflowid: any): any

	declare function nlapiInitiateWorkflowAsync(recordType: any, id: any, workflowId: any, parameters: any): string

	declare function nlapiTriggerWorkflow(recordtype: string, id: any, workflowid: any, actionid: any, stateid: any): any

	declare function nlapiCreateCurrentLineSubrecord(type: string, fldnam: string): void

	declare function nlapiEditCurrentLineItemSubrecord(type: string, fldnam: string): void

	declare function nlapiRemoveCurrentLineItemSubrecord(type: string, fldnam: string): void

	declare function nlapiViewCurrentLineItemSubrecord(type: string, fldnam: string): void

	declare function nlapiViewLineItemSubrecord(type: string, fldnam: string, linenum: any): void

	declare function nlapiGetCache(name: string): any

	declare function createSubrecord(fldnam: string): void

	declare function editSubrecord(fldnam: string): void

	declare function removeSubrecord(fldnam: string): void

	declare function viewSubrecord(fldnam: string): void

	declare function nlapiGetLogin(): void

	declare function nlapiGetJobManager(jobType: any): any

	declare class nlobjSearchColumn  {
		constructor(name: string, join?: string, summary?: string): this
	}

	declare class nlobjError  {
		constructor(name: string, join?: string, summary?: string): this
	}

	
}

declare module 'prototype' {
		declare interface GetSubListRet {
		prototype: {
		addButton: {
		
	},
		setLabel: any,
		setHelpText: any,
		setDisplayType: any,
		setLineItemValue: any,
		setLineItemMatrixValue: any,
		setLineItemValues: any,
		getLineItemCount: string | number,
		addField: any,
		setUniqueField: any,
		addRefreshButton: any,
		addMarkAllButtons: any
	}
	}

	declare interface AddButtonRet {
		prototype: {
		setLabel: any,
		setDisabled: any
	}
	}

	declare interface GetFieldRet {
		prototype: {
		getName: any,
		getLabel: any,
		getType: any,
		isHidden: any,
		isMandatory: any,
		isDisabled: any,
		setLabel: any,
		setAlias: any,
		setDefaultValue: any,
		setDisabled: any,
		setMandatory: any,
		setMaxLength: any,
		setDisplayType: any,
		setBreakType: any,
		setLayoutType: any,
		setLinkText: any,
		setDisplaySize: any,
		setPadding: any,
		setHelpText: any,
		addSelectOption: any
	}
	}

	declare interface AddEditColumn0 {
		prototype: {
		setLabel: any,
		setURL: any,
		addParamToURL: any
	}
	}

	declare interface AddTabRet {
		prototype: {
		setLabel: any,
		setHelpText: any
	}
	}

	declare interface SetCurrentStep0 {
		prototype: {
		setLabel: any,
		setHelpText: any,
		getStepNumber: any,
		getFieldValue: any,
		getFieldValues: string[],
		getLineItemCount: string | number,
		getLineItemValue: string,
		getAllFields: string[],
		getAllLineItems: any,
		getAllLineItemFields: any
	}
	}

	declare interface AddFieldGroupRet {
		prototype: {
		setLabel: any,
		setCollapsible: any,
		setSingleColumn: any,
		setShowBorder: any
	}
	}

	declare interface AddButtonRet {
		prototype: {
		setLabel: any,
		setDisabled: any
	}
	}

			
}