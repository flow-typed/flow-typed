

declare module 'ej.web.all' {
		declare interface JQueryXHR {
		
	}

	declare interface JQueryPromise<T> {
		
	}

	declare interface JQueryDeferred<T> {
		
	}

	declare interface JQueryParam {
		
	}

	declare interface JQuery {
		data(key: any): any
	}

	declare interface Window {
		ej: typeof ej
	}

	declare interface JQuery {
		ejAccordion(): JQuery,
		ejAccordion(options?: ej.Accordion.Model): JQuery,
		ejAccordion(memberName: any, value?: any, param?: any): any,
		data(key: "ejAccordion"): ej.Accordion,
		ejAutocomplete(): JQuery,
		ejAutocomplete(options?: ej.Autocomplete.Model): JQuery,
		ejAutocomplete(memberName: any, value?: any, param?: any): any,
		data(key: "ejAutocomplete"): ej.Autocomplete,
		ejBarcode(): JQuery,
		ejBarcode(options?: ej.datavisualization.Barcode.Model): JQuery,
		ejBarcode(memberName: any, value?: any, param?: any): any,
		data(key: "ejBarcode"): ej.datavisualization.Barcode,
		ejBulletGraph(): JQuery,
		ejBulletGraph(options?: ej.datavisualization.BulletGraph.Model): JQuery,
		ejBulletGraph(memberName: any, value?: any, param?: any): any,
		data(key: "ejBulletGraph"): ej.datavisualization.BulletGraph,
		ejButton(): JQuery,
		ejButton(options?: ej.Button.Model): JQuery,
		ejButton(memberName: any, value?: any, param?: any): any,
		data(key: "ejButton"): ej.Button,
		ejCaptcha(): JQuery,
		ejCaptcha(options?: ej.Captcha.Model): JQuery,
		ejCaptcha(memberName: any, value?: any, param?: any): any,
		data(key: "ejCaptcha"): ej.Captcha,
		ejChart(): JQuery,
		ejChart(options?: ej.datavisualization.Chart.Model): JQuery,
		ejChart(memberName: any, value?: any, param?: any): any,
		data(key: "ejChart"): ej.datavisualization.Chart,
		ejCheckBox(): JQuery,
		ejCheckBox(options?: ej.CheckBox.Model): JQuery,
		ejCheckBox(memberName: any, value?: any, param?: any): any,
		data(key: "ejCheckBox"): ej.CheckBox,
		ejCircularGauge(): JQuery,
		ejCircularGauge(options?: ej.datavisualization.CircularGauge.Model): JQuery,
		ejCircularGauge(memberName: any, value?: any, param?: any): any,
		data(key: "ejCircularGauge"): ej.datavisualization.CircularGauge,
		ejColorPicker(): JQuery,
		ejColorPicker(options?: ej.ColorPicker.Model): JQuery,
		ejColorPicker(memberName: any, value?: any, param?: any): any,
		data(key: "ejColorPicker"): ej.ColorPicker,
		ejDatePicker(): JQuery,
		ejDatePicker(options?: ej.DatePicker.Model): JQuery,
		ejDatePicker(memberName: any, value?: any, param?: any): any,
		data(key: "ejDatePicker"): ej.DatePicker,
		ejDateTimePicker(): JQuery,
		ejDateTimePicker(options?: ej.DateTimePicker.Model): JQuery,
		ejDateTimePicker(memberName: any, value?: any, param?: any): any,
		data(key: "ejDateTimePicker"): ej.DateTimePicker,
		ejDiagram(): JQuery,
		ejDiagram(options?: ej.datavisualization.Diagram.Model): JQuery,
		ejDiagram(memberName: any, value?: any, param?: any): any,
		data(key: "ejDiagram"): ej.datavisualization.Diagram,
		ejDialog(): JQuery,
		ejDialog(options?: ej.Dialog.Model): JQuery,
		ejDialog(memberName: any, value?: any, param?: any): any,
		data(key: "ejDialog"): ej.Dialog,
		ejDigitalGauge(): JQuery,
		ejDigitalGauge(options?: ej.datavisualization.DigitalGauge.Model): JQuery,
		ejDigitalGauge(memberName: any, value?: any, param?: any): any,
		data(key: "ejDigitalGauge"): ej.datavisualization.DigitalGauge,
		ejDraggable(): JQuery,
		ejDraggable(options?: ej.Draggable.Model): JQuery,
		ejDraggable(memberName: any, value?: any, param?: any): any,
		data(key: "ejDraggable"): ej.Draggable,
		ejDropDownList(): JQuery,
		ejDropDownList(options?: ej.DropDownList.Model): JQuery,
		ejDropDownList(memberName: any, value?: any, param?: any): any,
		data(key: "ejDropDownList"): ej.DropDownList,
		ejDroppable(): JQuery,
		ejDroppable(options?: ej.Droppable.Model): JQuery,
		ejDroppable(memberName: any, value?: any, param?: any): any,
		data(key: "ejDroppable"): ej.Droppable,
		ejFileExplorer(): JQuery,
		ejFileExplorer(options?: ej.FileExplorer.Model): JQuery,
		ejFileExplorer(memberName: any, value?: any, param?: any): any,
		data(key: "ejFileExplorer"): ej.FileExplorer,
		ejGantt(): JQuery,
		ejGantt(options?: ej.Gantt.Model): JQuery,
		ejGantt(memberName: any, value?: any, param?: any): any,
		data(key: "ejGantt"): ej.Gantt,
		ejGrid(): JQuery,
		ejGrid(options?: ej.Grid.Model): JQuery,
		ejGrid(memberName: any, value?: any, param?: any): any,
		data(key: "ejGrid"): ej.Grid,
		ejGroupButton(): JQuery,
		ejGroupButton(options?: ej.GroupButton.Model): JQuery,
		ejGroupButton(memberName: any, value?: any, param?: any): any,
		data(key: "ejGroupButton"): ej.GroupButton,
		ejHeatMap(): JQuery,
		ejHeatMap(options?: ej.datavisualization.HeatMap.Model): JQuery,
		ejHeatMap(memberName: any, value?: any, param?: any): any,
		data(key: "ejHeatMap"): ej.datavisualization.HeatMap,
		ejHeatMapLegend(): JQuery,
		ejHeatMapLegend(options?: ej.datavisualization.HeatMapLegend.Model): JQuery,
		ejHeatMapLegend(memberName: any, value?: any, param?: any): any,
		data(key: "ejHeatMapLegend"): ej.datavisualization.HeatMapLegend,
		ejKanban(): JQuery,
		ejKanban(options?: ej.Kanban.Model): JQuery,
		ejKanban(memberName: any, value?: any, param?: any): any,
		data(key: "ejKanban"): ej.Kanban,
		ejLinearGauge(): JQuery,
		ejLinearGauge(options?: ej.datavisualization.LinearGauge.Model): JQuery,
		ejLinearGauge(memberName: any, value?: any, param?: any): any,
		data(key: "ejLinearGauge"): ej.datavisualization.LinearGauge,
		ejListBox(): JQuery,
		ejListBox(options?: ej.ListBox.Model): JQuery,
		ejListBox(memberName: any, value?: any, param?: any): any,
		data(key: "ejListBox"): ej.ListBox,
		ejListView(): JQuery,
		ejListView(options?: ej.ListView.Model): JQuery,
		ejListView(memberName: any, value?: any, param?: any): any,
		data(key: "ejListView"): ej.ListView,
		ejMap(): JQuery,
		ejMap(options?: ej.datavisualization.Map.Model): JQuery,
		ejMap(memberName: any, value?: any, param?: any): any,
		data(key: "ejMap"): ej.datavisualization.Map,
		ejMaskEdit(): JQuery,
		ejMaskEdit(options?: ej.MaskEdit.Model): JQuery,
		ejMaskEdit(memberName: any, value?: any, param?: any): any,
		data(key: "ejMaskEdit"): ej.MaskEdit,
		ejMenu(): JQuery,
		ejMenu(options?: ej.Menu.Model): JQuery,
		ejMenu(memberName: any, value?: any, param?: any): any,
		data(key: "ejMenu"): ej.Menu,
		ejNavigationDrawer(): JQuery,
		ejNavigationDrawer(options?: ej.NavigationDrawer.Model): JQuery,
		ejNavigationDrawer(memberName: any, value?: any, param?: any): any,
		data(key: "ejNavigationDrawer"): ej.NavigationDrawer,
		ejOverview(): JQuery,
		ejOverview(options?: ej.datavisualization.Overview.Model): JQuery,
		ejOverview(memberName: any, value?: any, param?: any): any,
		data(key: "ejOverview"): ej.datavisualization.Overview,
		ejPager(): JQuery,
		ejPager(options?: ej.Pager.Model): JQuery,
		ejPager(memberName: any, value?: any, param?: any): any,
		data(key: "ejPager"): ej.Pager,
		ejPdfViewer(): JQuery,
		ejPdfViewer(options?: ej.PdfViewer.Model): JQuery,
		ejPdfViewer(memberName: any, value?: any, param?: any): any,
		data(key: "ejPdfViewer"): ej.PdfViewer,
		ejPivotChart(): JQuery,
		ejPivotChart(options?: ej.PivotChart.Model): JQuery,
		ejPivotChart(memberName: any, value?: any, param?: any): any,
		data(key: "ejPivotChart"): ej.PivotChart,
		ejPivotClient(): JQuery,
		ejPivotClient(options?: ej.PivotClient.Model): JQuery,
		ejPivotClient(memberName: any, value?: any, param?: any): any,
		data(key: "ejPivotClient"): ej.PivotClient,
		ejPivotGauge(): JQuery,
		ejPivotGauge(options?: ej.PivotGauge.Model): JQuery,
		ejPivotGauge(memberName: any, value?: any, param?: any): any,
		data(key: "ejPivotGauge"): ej.PivotGauge,
		ejPivotGrid(): JQuery,
		ejPivotGrid(options?: ej.PivotGrid.Model): JQuery,
		ejPivotGrid(memberName: any, value?: any, param?: any): any,
		data(key: "ejPivotGrid"): ej.PivotGrid,
		ejPivotPager(): JQuery,
		ejPivotPager(options?: ej.PivotPager.Model): JQuery,
		ejPivotPager(memberName: any, value?: any, param?: any): any,
		data(key: "ejPivotPager"): ej.PivotPager,
		ejPivotSchemaDesigner(): JQuery,
		ejPivotSchemaDesigner(options?: ej.PivotSchemaDesigner.Model): JQuery,
		ejPivotSchemaDesigner(memberName: any, value?: any, param?: any): any,
		data(key: "ejPivotSchemaDesigner"): ej.PivotSchemaDesigner,
		ejPivotTreeMap(): JQuery,
		ejPivotTreeMap(options?: ej.PivotTreeMap.Model): JQuery,
		ejPivotTreeMap(memberName: any, value?: any, param?: any): any,
		data(key: "ejPivotTreeMap"): ej.PivotTreeMap,
		ejProgressBar(): JQuery,
		ejProgressBar(options?: ej.ProgressBar.Model): JQuery,
		ejProgressBar(memberName: any, value?: any, param?: any): any,
		data(key: "ejProgressBar"): ej.ProgressBar,
		ejRadialMenu(): JQuery,
		ejRadialMenu(options?: ej.RadialMenu.Model): JQuery,
		ejRadialMenu(memberName: any, value?: any, param?: any): any,
		data(key: "ejRadialMenu"): ej.RadialMenu,
		ejRadialSlider(): JQuery,
		ejRadialSlider(options?: ej.RadialSlider.Model): JQuery,
		ejRadialSlider(memberName: any, value?: any, param?: any): any,
		data(key: "ejRadialSlider"): ej.RadialSlider,
		ejRadioButton(): JQuery,
		ejRadioButton(options?: ej.RadioButton.Model): JQuery,
		ejRadioButton(memberName: any, value?: any, param?: any): any,
		data(key: "ejRadioButton"): ej.RadioButton,
		ejRangeNavigator(): JQuery,
		ejRangeNavigator(options?: ej.datavisualization.RangeNavigator.Model): JQuery,
		ejRangeNavigator(memberName: any, value?: any, param?: any): any,
		data(key: "ejRangeNavigator"): ej.datavisualization.RangeNavigator,
		ejRating(): JQuery,
		ejRating(options?: ej.Rating.Model): JQuery,
		ejRating(memberName: any, value?: any, param?: any): any,
		data(key: "ejRating"): ej.Rating,
		ejRecurrenceEditor(): JQuery,
		ejRecurrenceEditor(options?: ej.RecurrenceEditor.Model): JQuery,
		ejRecurrenceEditor(memberName: any, value?: any, param?: any): any,
		data(key: "ejRecurrenceEditor"): ej.RecurrenceEditor,
		ejReportViewer(): JQuery,
		ejReportViewer(options?: ej.ReportViewer.Model): JQuery,
		ejReportViewer(memberName: any, value?: any, param?: any): any,
		data(key: "ejReportViewer"): ej.ReportViewer,
		ejResizable(): JQuery,
		ejResizable(options?: ej.Resizable.Model): JQuery,
		ejResizable(memberName: any, value?: any, param?: any): any,
		data(key: "ejResizable"): ej.Resizable,
		ejRibbon(): JQuery,
		ejRibbon(options?: ej.Ribbon.Model): JQuery,
		ejRibbon(memberName: any, value?: any, param?: any): any,
		data(key: "ejRibbon"): ej.Ribbon,
		ejRotator(): JQuery,
		ejRotator(options?: ej.Rotator.Model): JQuery,
		ejRotator(memberName: any, value?: any, param?: any): any,
		data(key: "ejRotator"): ej.Rotator,
		ejRTE(): JQuery,
		ejRTE(options?: ej.RTE.Model): JQuery,
		ejRTE(memberName: any, value?: any, param?: any): any,
		data(key: "ejRTE"): ej.RTE,
		ejSchedule(): JQuery,
		ejSchedule(options?: ej.Schedule.Model): JQuery,
		ejSchedule(memberName: any, value?: any, param?: any): any,
		data(key: "ejSchedule"): ej.Schedule,
		ejScroller(): JQuery,
		ejScroller(options?: ej.Scroller.Model): JQuery,
		ejScroller(memberName: any, value?: any, param?: any): any,
		data(key: "ejScroller"): ej.Scroller,
		ejSlider(): JQuery,
		ejSlider(options?: ej.Slider.Model): JQuery,
		ejSlider(memberName: any, value?: any, param?: any): any,
		data(key: "ejSlider"): ej.Slider,
		ejSparkline(): JQuery,
		ejSparkline(options?: ej.datavisualization.Sparkline.Model): JQuery,
		ejSparkline(memberName: any, value?: any, param?: any): any,
		data(key: "ejSparkline"): ej.datavisualization.Sparkline,
		ejSplitButton(): JQuery,
		ejSplitButton(options?: ej.SplitButton.Model): JQuery,
		ejSplitButton(memberName: any, value?: any, param?: any): any,
		data(key: "ejSplitButton"): ej.SplitButton,
		ejSplitter(): JQuery,
		ejSplitter(options?: ej.Splitter.Model): JQuery,
		ejSplitter(memberName: any, value?: any, param?: any): any,
		data(key: "ejSplitter"): ej.Splitter,
		ejSpreadsheet(): JQuery,
		ejSpreadsheet(options?: ej.Spreadsheet.Model): JQuery,
		ejSpreadsheet(memberName: any, value?: any, param?: any): any,
		data(key: "ejSpreadsheet"): ej.Spreadsheet,
		ejSymbolPalette(): JQuery,
		ejSymbolPalette(options?: ej.datavisualization.SymbolPalette.Model): JQuery,
		ejSymbolPalette(memberName: any, value?: any, param?: any): any,
		data(key: "ejSymbolPalette"): ej.datavisualization.SymbolPalette,
		ejTab(): JQuery,
		ejTab(options?: ej.Tab.Model): JQuery,
		ejTab(memberName: any, value?: any, param?: any): any,
		data(key: "ejTab"): ej.Tab,
		ejTagCloud(): JQuery,
		ejTagCloud(options?: ej.TagCloud.Model): JQuery,
		ejTagCloud(memberName: any, value?: any, param?: any): any,
		data(key: "ejTagCloud"): ej.TagCloud,
		ejEditor(): JQuery,
		ejEditor(options?: ej.Editor.Model): JQuery,
		ejEditor(memberName: any, value?: any, param?: any): any,
		data(key: "ejEditor"): ej.Editor,
		ejTile(): JQuery,
		ejTile(options?: ej.Tile.Model): JQuery,
		ejTile(memberName: any, value?: any, param?: any): any,
		data(key: "ejTile"): ej.Tile,
		ejTimePicker(): JQuery,
		ejTimePicker(options?: ej.TimePicker.Model): JQuery,
		ejTimePicker(memberName: any, value?: any, param?: any): any,
		data(key: "ejTimePicker"): ej.TimePicker,
		ejToggleButton(): JQuery,
		ejToggleButton(options?: ej.ToggleButton.Model): JQuery,
		ejToggleButton(memberName: any, value?: any, param?: any): any,
		data(key: "ejToggleButton"): ej.ToggleButton,
		ejToolbar(): JQuery,
		ejToolbar(options?: ej.Toolbar.Model): JQuery,
		ejToolbar(memberName: any, value?: any, param?: any): any,
		data(key: "ejToolbar"): ej.Toolbar,
		ejTooltip(): JQuery,
		ejTooltip(options?: ej.Tooltip.Model): JQuery,
		ejTooltip(memberName: any, value?: any, param?: any): any,
		data(key: "ejTooltip"): ej.Tooltip,
		ejTreeGrid(): JQuery,
		ejTreeGrid(options?: ej.TreeGrid.Model): JQuery,
		ejTreeGrid(memberName: any, value?: any, param?: any): any,
		data(key: "ejTreeGrid"): ej.TreeGrid,
		ejTreeMap(): JQuery,
		ejTreeMap(options?: ej.datavisualization.TreeMap.Model): JQuery,
		ejTreeMap(memberName: any, value?: any, param?: any): any,
		data(key: "ejTreeMap"): ej.datavisualization.TreeMap,
		ejTreeView(): JQuery,
		ejTreeView(options?: ej.TreeView.Model): JQuery,
		ejTreeView(memberName: any, value?: any, param?: any): any,
		data(key: "ejTreeView"): ej.TreeView,
		ejUploadbox(): JQuery,
		ejUploadbox(options?: ej.Uploadbox.Model): JQuery,
		ejUploadbox(memberName: any, value?: any, param?: any): any,
		data(key: "ejUploadbox"): ej.Uploadbox,
		ejWaitingPopup(): JQuery,
		ejWaitingPopup(options?: ej.WaitingPopup.Model): JQuery,
		ejWaitingPopup(memberName: any, value?: any, param?: any): any,
		data(key: "ejWaitingPopup"): ej.WaitingPopup
	}

			
}

declare module 'ej' {
		declare interface browserInfoOptions {
		name: string,
		version: string,
		culture: Object,
		isMSPointerEnabled: boolean
	}

	declare interface BaseEvent {
		cancel: boolean,
		type: string
	}

	declare interface AdaptorOptions {
		from?: string,
		requestType?: string,
		sortBy?: string,
		select?: string,
		skip?: string,
		group?: string,
		take?: string,
		search?: string,
		count?: string,
		where?: string,
		aggregates?: string
	}

	declare interface UrlAdaptorOptions {
		requestType?: string,
		accept?: string,
		multipartAccept?: string,
		sortBy?: string,
		select?: string,
		skip?: string,
		take?: string,
		count?: string,
		where?: string,
		expand?: string,
		batch?: string,
		changeSet?: string,
		batchPre?: string,
		contentId?: string,
		batchContent?: string,
		changeSetContent?: string,
		batchChangeSetContentType?: string
	}

	declare interface ODataAdaptorOptions {
		requestType?: string,
		accept?: string,
		multipartAccept?: string,
		sortBy?: string,
		select?: string,
		skip?: string,
		take?: string,
		count?: string,
		search?: string,
		where?: string,
		expand?: string,
		batch?: string,
		changeSet?: string,
		batchPre?: string,
		contentId?: string,
		batchContent?: string,
		changeSetContent?: string,
		batchChangeSetContentType?: string
	}

	declare interface Changes {
		changed?: Array<any>,
		added?: Array<any>,
		deleted?: Array<any>
	}

	declare interface dataUtil {
		swap(array: Array<any>, x: number, y: number): void,
		mergeSort(jsonArray: Array<any>, fieldName?: string, comparer?: any): Array<any>,
		max(jsonArray: Array<any>, fieldName?: string, comparer?: string): Array<any>,
		min(jsonArray: Array<any>, fieldName: string, comparer: string): Array<any>,
		distinct(
		jsonArray: Array<any>, fieldName?: string, requiresCompleteRecord?: any
	): Array<any>,
		sum(json: any, fieldName: string): number,
		avg(json: any, fieldName: string): number,
		select(jsonArray: Array<any>, fieldName: string, fields: string): Array<any>,
		group(jsonArray: Array<any>, field: string, level: number): Array<any>,
		parseTable(table: string, headerOption: ej.headerOption, headerRowIndex: number): Object
	}

	declare interface AjaxSettings {
		type?: string,
		cache: boolean,
		data?: any,
		dataType?: string,
		contentType?: any,
		async?: boolean
	}

	declare interface globalize {
		addCulture(name: string, culture?: any): void,
		preferredCulture(culture?: string): culture,
		format(value: any, format: string, culture?: string): string,
		parseInt(value: string, radix?: any, culture?: string): number,
		parseFloat(value: string, radix?: any, culture?: string): number,
		parseDate(value: string, format: string, culture?: string): Date,
		getLocalizedConstants(controlName: string, culture?: string): any
	}

	declare interface culture {
		name?: string,
		englishName?: string,
		namtiveName?: string,
		language?: string,
		isRTL: boolean,
		numberFormat?: formatSettings,
		calendars?: calendarsSettings
	}

	declare interface formatSettings {
		pattern: Array<string>,
		decimals: number,
		groupSizes: Array<number>,
		percent: percentSettings,
		currency: currencySettings
	}

	declare interface percentSettings {
		pattern: Array<string>,
		decimals: number,
		groupSizes: Array<number>,
		symbol: string
	}

	declare interface currencySettings {
		pattern: Array<string>,
		decimals: number,
		groupSizes: Array<number>,
		symbol: string
	}

	declare interface calendarsSettings {
		standard: standardSettings
	}

	declare interface standardSettings {
		firstDay: number,
		days: daySettings,
		months: monthSettings,
		AM: Array<string>,
		PM: Array<string>,
		twoDigitYearMax: number,
		patterns: patternSettings
	}

	declare interface daySettings {
		names: Array<string>,
		namesAbbr: Array<string>,
		namesShort: Array<string>
	}

	declare interface monthSettings {
		names: Array<string>,
		namesAbbr: Array<string>
	}

	declare interface patternSettings {
		d: string,
		D: string,
		t: string,
		T: string,
		f: string,
		F: string,
		M: string,
		Y: string,
		S: string
	}

	declare function isMobile(): boolean

	declare function isIOS(): boolean

	declare function isAndroid(): boolean

	declare function isFlat(): boolean

	declare function isWindows(): boolean

	declare function isCssCalc(): boolean

	declare function getCurrentPage(): JQuery

	declare function isLowerResolution(): boolean

	declare function browserInfo(): browserInfoOptions

	declare function isTouchDevice(): boolean

	declare function addPrefix(style: string): string

	declare function animationEndEvent(): string

	declare function blockDefaultActions(e: Object): void

	declare function buildTag(tag: string, innerHtml?: string, styles?: Object, attrs?: Object): JQuery

	declare function cancelEvent(): string

	declare function copyObject(): string

	declare function createObject(nameSpace: string, value: Object, initIn: any): JQuery

	declare function createObject(element: any, eventEmitter: any, model: any): any

	declare function getObject<T>(element: string, model: any): T

	declare function defineClass(className: string, constructor: any, proto: Object, replace: boolean): Object

	declare function destroyWidgets(element: Object): void

	declare function endEvent(): string

	declare function event(type: string, data: any, eventProp: Object): Object

	declare function getAndroidVersion(): Object

	declare function getAttrVal(ele: Object, val: string, option: Object): Object

	declare function getBooleanVal(ele: Object, val: string, option: Object): Object

	declare function getClearString(): string

	declare function getDimension(element: Object, method: string): Object

	declare function getFontString(fontObj: Object): string

	declare function getFontStyle(style: string): string

	declare function getMaxZindex(): number

	declare function getNameSpace(className: string): string

	declare function getObject(nameSpace: string, fromdata?: any): Object

	declare function getOffset(ele: string): Object

	declare function getRenderMode(): string

	declare function getScrollableParents(element: Object): void

	declare function getTheme(): string

	declare function getZindexPartial(element: Object, popupEle: string): number

	declare function hasRenderMode(element: string): void

	declare function hasStyle(prop: string): boolean

	declare function hasTheme(element: string): string

	declare function hexFromRGB(color: string): string

	declare function ieClearRemover(element: string): void

	declare function isAndroidWebView(): string

	declare function isDevice(): boolean

	declare function isIOS7(): boolean

	declare function isIOSWebView(): boolean

	declare function isLowerAndroid(): boolean

	declare function isNullOrUndefined(value: Object): boolean

	declare function isPlainObject(): JQuery

	declare function isPortrait(): any

	declare function isTablet(): boolean

	declare function isWindowsWebView(): string

	declare function listenEvents(
		selectors: any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean
	): void

	declare function listenTouchEvent(
		selectors: any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean
	): void

	declare function logBase(val: string, base: string): number

	declare function measureText(text: string, maxwidth: number, font: string): string

	declare function moveEvent(): string

	declare function print(element: string, printWindow: any): void

	declare function proxy(fn: Object, context?: string, arg?: string): any

	declare function round(value: string, div: string, up: string): any

	declare function sendAjaxRequest(ajaxOptions: Object): void

	declare function setCaretToPos(nput: string, pos1: string, pos2: string): void

	declare function setRenderMode(element: string): void

	declare function setTheme(): Object

	declare function startEvent(): string

	declare function tapEvent(): string

	declare function tapHoldEvent(): string

	declare function throwError(): Object

	declare function transitionEndEvent(): Object

	declare function userAgent(): boolean

	declare function widget(pluginName: string, className: string, proto: Object): Object

	declare function avg(json: Object, filedName: string): any

	declare function getGuid(prefix: string): number

	declare function group(
		jsonArray: any, field: string, agg: string, level: number, groupDs: string
	): Object

	declare function isJson(jsonData: string): string

	declare function max(jsonArray: any, fieldName?: string, comparer?: string): any

	declare function min(jsonArray: any, fieldName: string, comparer: string): any

	declare function merge(first: string, second: string): any

	declare function mergeshort(jsonArray: any, fieldName: string, comparer: string): any

	declare function parseJson(jsonText: string): string

	declare function parseTable(table: number, headerOption: string, headerRowIndex: string): Object

	declare function select(jsonArray: any, fields: string): any

	declare function setTransition(): boolean

	declare function sum(json: string, fieldName: string): string

	declare function swap(array: any, x: string, y: string): any

	declare function addCulture(name: string, culture?: any): void

	declare function preferredCulture(culture?: string): culture

	declare function format(value: any, format: string, culture?: string): string

	declare function parseInt(value: string, radix?: any, culture?: string): number

	declare function parseFloat(value: string, radix?: any, culture?: string): number

	declare function parseDate(value: string, format: string, culture?: string): Date

	declare function getLocalizedConstants(controlName: string, culture?: string): any

	declare class WidgetBase  {
		destroy(): void;
		element: JQuery;
		setModel(options: Object, forceSet?: boolean): any;
		option(prop?: Object, value?: Object, forceSet?: boolean): any;
		_trigger(eventName?: string, eventProp?: Object): any;
		_on(
		element: JQuery, eventType?: string, handler?: (eventObject: JQueryEventObject) => any
	): any;
		_on(
		element: JQuery, eventType?: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): any;
		_off(
		element: JQuery, eventName: string, handler?: (eventObject: JQueryEventObject) => any
	): any;
		_off(
		element: JQuery, eventType?: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): any;
		persistState(): void;
		restoreState(silent: boolean): void
	}

	declare class Widget extends WidgetBase {
		constructor(pluginName: string, className: string, proto: any): this;
		fn: Widget;
		extend(widget: Widget): any;
		register(pluginName: string, className: string, prototype: any): void;
		destroyAll(elements: Element): void;
		model: any
	}

	declare class DataManager  {
		constructor(dataSource?: any, query?: ej.Query, adaptor?: any): this;
		setDefaultQuery(query: ej.Query): void;
		executeQuery(query?: ej.Query, done?: any, fail?: any, always?: any): JQueryPromise<any>;
		executeLocal(query?: ej.Query): ej.DataManager;
		saveChanges(changes?: Changes, key?: string, tableName?: string): JQueryDeferred<any>;
		insert(data: Object, tableName?: string): JQueryPromise<any>;
		remove(keyField: string, value: any, tableName?: string): Object;
		update(keyField: string, value: any, tableName?: string): Object
	}

	declare class Query  {
		constructor(): this;
		fn: Query;
		extend(prototype: Object): Query;
		key(field: string): ej.Query;
		using(dataManager: ej.DataManager): ej.Query;
		execute(dataManager: ej.DataManager, done: any, fail?: string, always?: string): any;
		executeLocal(dataManager: ej.DataManager): ej.DataManager;
		clone(): ej.Query;
		from(tableName: any): ej.Query;
		addParams(key: string, value: string): ej.Query;
		expand(tables: any): ej.Query;
		where(
		fieldName: string, operator: ej.FilterOperators, value: any, ignoreCase?: boolean
	): ej.Query;
		where(predicate: ej.Predicate): ej.Query;
		search(
		searchKey: any, fieldNames?: any, operator?: string, ignoreCase?: boolean
	): ej.Query;
		sortBy(fieldName: string, comparer?: ej.SortOrder, isFromGroup?: boolean): ej.Query;
		sortByDesc(fieldName: string): ej.Query;
		group(fieldName: string): ej.Query;
		page(pageIndex: number, pageSize: number): ej.Query;
		take(nos: number): ej.Query;
		skip(nos: number): ej.Query;
		select(fieldNames: any): ej.Query;
		hierarchy(query: ej.Query, selectorFn: any): ej.Query;
		foreignKey(key: string): ej.Query;
		requiresCount(): ej.Query;
		range(start: number, end: number): ej.Query
	}

	declare class Adaptor  {
		constructor(ds: any): this;
		pvt: Object;
		type: ej.Adaptor;
		options: AdaptorOptions;
		extend(overrides: any): ej.Adaptor;
		processQuery(dm: ej.DataManager, query: ej.Query): any;
		processResponse(
		data: Object, ds: any, query: ej.Query, xhr: JQueryXHR, request?: Object, changes?: Changes
	): Object;
		convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam
	}

	declare class UrlAdaptor extends ej$Adaptor {
		constructor(): this;
		processQuery(
		dm: ej.DataManager, query: ej.Query, hierarchyFilters?: Object
	): {
		type: string,
		url: string,
		ejPvtData: Object,
		contentType?: string,
		data?: Object
	};
		convertToQueryString(req: Object, query: ej.Query, dm: ej.DataManager): JQueryParam;
		processResponse(
		data: Object, ds: any, query: ej.Query, xhr: JQueryXHR, request?: Object, changes?: Changes
	): Object;
		onGroup(e: any): void;
		batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
		beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
		insert(
		dm: ej.DataManager, data: Object, tableName: string
	): {
		url: string,
		data: any
	};
		remove(
		dm: ej.DataManager, keyField: string, value: any, tableName: string
	): {
		type: string,
		url: string,
		data?: any
	};
		update(
		dm: ej.DataManager, keyField: string, value: any, tableName: string
	): {
		type: string,
		url: string,
		data: any
	};
		getFiltersFrom(data: Object, query: ej.Query): ej.Predicate
	}

	declare class ODataAdaptor extends ej$UrlAdaptor {
		constructor(): this;
		options: UrlAdaptorOptions;
		onEachWhere(filter: any, requiresCast: boolean): any;
		onPredicate(pred: ej.Predicate, query: ej.Query, requiresCast: boolean): string;
		onComplexPredicate(pred: ej.Predicate, requiresCast: boolean): string;
		onWhere(filters: Array<string>): string;
		onEachSearch(e: Object): void;
		onSearch(e: Object): string;
		onEachSort(e: Object): string;
		onSortBy(e: Object): string;
		onGroup(e: Object): string;
		onSelect(e: Object): string;
		onCount(e: Object): string;
		beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
		processResponse(
		data: Object, ds: Object, query: ej.Query, xhr: any, request: any, changes: Changes
	): {
		result: Object,
		count: number
	};
		convertToQueryString(req: Object, query: ej.Query, dm: ej.DataManager): JQueryParam;
		insert(
		dm: ej.DataManager, data: Object, tableName: string
	): {
		url: string,
		data: Object
	};
		remove(
		dm: ej.DataManager, keyField: string, value: any, tableName: string
	): {
		url: string,
		type: string
	};
		update(
		dm: ej.DataManager, keyField: string, value: any, tableName: string
	): {
		url: string,
		type: string,
		data: Object,
		accept: string
	};
		batchRequest(
		dm: ej.DataManager, changes: Changes, e: any
	): {
		url: string,
		type: string,
		data: Object,
		contentType: string
	};
		generateDeleteRequest(arr: Array<any>, e: any): string;
		generateInsertRequest(arr: Array<any>, e: any): string;
		generateUpdateRequest(arr: Array<any>, e: any): string
	}

	declare class ODataV4Adaptor extends ej$ODataAdaptor {
		constructor(): this;
		options: ODataAdaptorOptions;
		onCount(e: Object): string;
		onEachSearch(e: Object): void;
		onSearch(e: Object): string;
		beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
		processResponse(
		data: Object, ds: Object, query: ej.Query, xhr: any, request: any, changes: Changes
	): {
		result: Object,
		count: number
	}
	}

	declare class JsonAdaptor extends ej$Adaptor {
		constructor(): this;
		processQuery(ds: Object, query: ej.Query): string;
		batchRequest(dm: ej.DataManager, changes: Changes, e: any): Changes;
		onWhere(ds: Object, e: any): any;
		onSearch(ds: Object, e: any): any;
		onSortBy(ds: Object, e: any, query: ej.Query): Object;
		onGroup(ds: Object, e: any, query: ej.Query): Object;
		onPage(ds: Object, e: any, query: ej.Query): Object;
		onRange(ds: Object, e: any): Object;
		onTake(ds: Object, e: any): Object;
		onSkip(ds: Object, e: any): Object;
		onSelect(ds: Object, e: any): Object;
		insert(dm: ej.DataManager, data: any): Object;
		remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): Object;
		update(dm: ej.DataManager, keyField: string, value: any, tableName: string): Object
	}

	declare class remoteSaveAdaptor extends ej$UrlAdaptor {
		constructor(): this;
		batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
		beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
		insert(
		dm: ej.DataManager, data: Object, tableName: string
	): {
		url: string,
		data: any
	};
		remove(
		dm: ej.DataManager, keyField: string, value: any, tableName: string
	): {
		type: string,
		url: string,
		data?: any
	};
		update(
		dm: ej.DataManager, keyField: string, value: any, tableName: string
	): {
		type: string,
		url: string,
		data: any
	}
	}

	declare class TableModel  {
		constructor(name: string, jsonArray: Array<any>, dataManager: ej.DataManager, modelComputed: any): this;
		on(eventName: string, handler: any): void;
		off(eventName: string, handler: any): void;
		setDataManager(dataManager: DataManager): void;
		saveChanges(): void;
		rejectChanges(): void;
		insert(json: any): void;
		update(value: any): void;
		remove(key: string): void;
		isDirty(): boolean;
		getChanges(): Changes;
		toArray(): Array<any>;
		setDirty(dirty: any, model: any): void;
		get(index: number): void;
		length(): number;
		bindTo(element: any): void
	}

	declare class Model  {
		constructor(json: any, table: string, name: string): this;
		formElements: Array<string>;
		computes(value: any): void;
		on(eventName: string, handler: any): void;
		off(eventName: string, handler: any): void;
		set(field: string, value: any): void;
		get(field: string): any;
		revert(suspendEvent: any): void;
		save(dm: ej.DataManager, key: string): void;
		markCommit(): void;
		markDelete(): void;
		changeState(state: boolean, args: any): void;
		properties(): any;
		bindTo(element: any): void;
		unbind(element: any): void
	}

	declare class Predicate  {
		constructor(): this;
		constructor(field: string, operator: ej.FilterOperators, value: any, ignoreCase: boolean): this;
		and(field: string, operator: any, value: any, ignoreCase: boolean): void;
		or(field: string, operator: any, value: any, ignoreCase: boolean): void;
		or(predicate: Array<Object>): any;
		validate(record: Object): boolean;
		toJSON(
		
	): {
		isComplex: boolean,
		field: string,
		operator: string,
		value: any,
		ignoreCase: boolean,
		condition: string,
		predicates: any
	}
	}

	declare class Draggable extends ej$Widget {
		fn: Draggable;
		constructor(element: JQuery, options?: Draggable.Model): this;
		constructor(element: Element, options?: Draggable.Model): this;
		model: Draggable.Model;
		defaults: Draggable.Model;
		_destroy(): void
	}

	declare class Droppable extends ej$Widget {
		fn: Droppable;
		constructor(element: JQuery, options?: Droppable.Model): this;
		constructor(element: Element, options?: Droppable.Model): this;
		model: Droppable.Model;
		defaults: Droppable.Model;
		_destroy(): void
	}

	declare class Resizable extends ej$Widget {
		fn: Resizable;
		constructor(element: JQuery, options?: Resizable.Model): this;
		constructor(element: Element, options?: Resizable.Model): this;
		model: Resizable.Model;
		defaults: Resizable.Model;
		_destroy(): void
	}

	declare class Scroller extends ej$Widget {
		fn: Scroller;
		constructor(element: JQuery, options?: Scroller.Model): this;
		constructor(element: Element, options?: Scroller.Model): this;
		model: Scroller.Model;
		defaults: Scroller.Model;
		destroy(): void;
		disable(): void;
		enable(): void;
		isHScroll(): boolean;
		isVScroll(): boolean;
		refresh(): void;
		scrollX(): void;
		scrollY(): void
	}

	declare class Accordion extends ej$Widget {
		fn: Accordion;
		constructor(element: JQuery, options?: Accordion.Model): this;
		constructor(element: Element, options?: Accordion.Model): this;
		model: Accordion.Model;
		defaults: Accordion.Model;
		addItem(header_name: string, content: string, index: number, isAjaxReq: boolean): void;
		collapseAll(): void;
		collapsePanel(): void;
		destroy(): void;
		disable(): void;
		disableItems(index: Array<any>): void;
		enable(): void;
		enableItems(index: Array<any>): void;
		expandAll(): void;
		expandPanel(): void;
		getItemsCount(): number;
		hide(): void;
		refresh(): void;
		removeItem(index: number): void;
		show(): void
	}

	declare class Autocomplete extends ej$Widget {
		fn: Autocomplete;
		constructor(element: JQuery, options?: Autocomplete.Model): this;
		constructor(element: Element, options?: Autocomplete.Model): this;
		model: Autocomplete.Model;
		defaults: Autocomplete.Model;
		clearText(): void;
		destroy(): void;
		disable(): void;
		enable(): void;
		getSelectedItems(): void;
		getValue(): void;
		getActiveText(): void;
		search(): void;
		open(): void;
		selectValueByKey(Key: string): void;
		selectValueByText(Text: string): void
	}

	declare class Button extends ej$Widget {
		fn: Button;
		constructor(element: JQuery, options?: Button.Model): this;
		constructor(element: Element, options?: Button.Model): this;
		model: Button.Model;
		defaults: Button.Model;
		destroy(): void;
		disable(): void;
		enable(): void
	}

	declare class Captcha extends ej$Widget {
		fn: Captcha;
		constructor(element: JQuery, options?: Captcha.Model): this;
		constructor(element: Element, options?: Captcha.Model): this;
		model: Captcha.Model;
		defaults: Captcha.Model
	}

	declare class ListBox extends ej$Widget {
		fn: ListBox;
		constructor(element: JQuery, options?: ListBox.Model): this;
		constructor(element: Element, options?: ListBox.Model): this;
		model: ListBox.Model;
		defaults: ListBox.Model;
		addItem(listItem: any | string, index: number): void;
		checkAll(): void;
		checkItemByIndex(index: number): void;
		checkItemsByIndices(indices: number[]): void;
		disable(): void;
		disableItem(text: string): void;
		disableItemByIndex(index: number): void;
		disableItemsByIndices(Indices: number[] | string): void;
		enable(): void;
		enableItem(text: string): void;
		enableItemByIndex(index: number): void;
		enableItemsByIndices(indices: number[] | string): void;
		getCheckedItems(): any;
		getSelectedItems(): any;
		getIndexByText(text: string): number;
		getIndexByValue(indices: string): number;
		getTextByIndex(): string;
		getItemByIndex(): any;
		getItemByText(text: string): any;
		mergeData(data: Array<any>): void;
		moveDown(): void;
		moveUp(): void;
		refresh(refreshData: boolean): void;
		removeAll(): void;
		removeSelectedItems(): void;
		removeItemByText(text: string): void;
		removeItemByIndex(index: number): void;
		selectAll(): void;
		selectItemByText(text: string): void;
		selectItemByValue(value: string): void;
		selectItemByIndex(index: number): void;
		selectItemsByIndices(Indices: number | number[]): void;
		uncheckAll(): void;
		uncheckItemByIndex(index: number): void;
		uncheckItemsByIndices(indices: number[] | string): void;
		unselectAll(): void;
		unselectItemByIndex(index: number): void;
		unselectItemByText(text: string): void;
		unselectItemByValue(value: string): void;
		unselectItemsByIndices(indices: number[] | string): void;
		hideCheckedItems(): void;
		showItemByIndices(indices: number[] | string): void;
		hideItemsByIndices(indices: number[] | string): void;
		showItemsByValues(values: Array<any>): void;
		hideItemsByValues(values: Array<any>): void;
		showItemByValue(value: string): void;
		hideItemByValue(value: string): void;
		showItemByIndex(index: number): void;
		hideItemByIndex(index: number): void;
		show(): void;
		hide(): void;
		hideAllItems(): void;
		showAllItems(): void
	}

	declare class Calculate  {
		fn: Calculate;
		constructor(element: JQuery, options?: Calculate.Model): this;
		constructor(element: Element, options?: Calculate.Model): this;
		model: Calculate.Model;
		defaults: Calculate.Model;
		addCustomFunction(FormulaName: string, FunctionName: string): void;
		addNamedRange(Name: string, cellRange: string): void;
		adjustRangeArg(Name: string): string;
		clearFormulaDependentCells(Cell: string): void;
		clearLibraryComputationException(): void;
		colIndex(Cell: string): void;
		computedValue(Formula: string): string;
		computeFormula(Formula: string): string
	}

	declare class CheckBox extends ej$Widget {
		fn: CheckBox;
		constructor(element: JQuery, options?: CheckBox.Model): this;
		constructor(element: Element, options?: CheckBox.Model): this;
		model: CheckBox.Model;
		defaults: CheckBox.Model;
		destroy(): void;
		disable(): void;
		enable(): void;
		isChecked(): boolean
	}

	declare class ColorPicker extends ej$Widget {
		fn: ColorPicker;
		constructor(element: JQuery, options?: ColorPicker.Model): this;
		constructor(element: Element, options?: ColorPicker.Model): this;
		model: ColorPicker.Model;
		defaults: ColorPicker.Model;
		disable(): void;
		enable(): void;
		getColor(): any;
		getValue(): string;
		hexCodeToRGB(): any;
		hide(): void;
		HSVToRGB(): any;
		RGBToHEX(): string;
		RGBToHSV(): any;
		show(): void
	}

	declare class FileExplorer extends ej$Widget {
		fn: FileExplorer;
		constructor(element: JQuery, options?: FileExplorer.Model): this;
		constructor(element: Element, options?: FileExplorer.Model): this;
		model: FileExplorer.Model;
		defaults: FileExplorer.Model;
		adjustSize(): void;
		disableMenuItem(item: string | HTMLElement): void;
		disableToolbarItem(item: string | HTMLElement): void;
		enableMenuItem(item: string | HTMLElement): void;
		enableToolbarItem(item: string | HTMLElement): void;
		refresh(): void;
		removeToolbarItem(item: string | HTMLElement): void
	}

	declare class DatePicker extends ej$Widget {
		fn: DatePicker;
		constructor(element: JQuery, options?: DatePicker.Model): this;
		constructor(element: Element, options?: DatePicker.Model): this;
		model: DatePicker.Model;
		defaults: DatePicker.Model;
		disable(): void;
		enable(): void;
		getValue(): string;
		hide(): void;
		show(): void
	}

	declare class DateTimePicker extends ej$Widget {
		fn: DateTimePicker;
		constructor(element: JQuery, options?: DateTimePicker.Model): this;
		constructor(element: Element, options?: DateTimePicker.Model): this;
		model: DateTimePicker.Model;
		defaults: DateTimePicker.Model;
		disable(): void;
		enable(): void;
		getValue(): string;
		hide(): void;
		setCurrentDateTime(): void;
		show(): void
	}

	declare class Dialog extends ej$Widget {
		fn: Dialog;
		constructor(element: JQuery, options?: Dialog.Model): this;
		constructor(element: Element, options?: Dialog.Model): this;
		model: Dialog.Model;
		defaults: Dialog.Model;
		close(): void;
		collapse(): void;
		destroy(): void;
		expand(): void;
		isOpen(): void;
		maximize(): void;
		minimize(): void;
		open(): void;
		pin(): void;
		restore(): void;
		unpin(): void;
		setTitle(Title: string): void;
		setContent(content: string): void;
		focus(): void
	}

	declare class DropDownList extends ej$Widget {
		fn: DropDownList;
		constructor(element: JQuery, options?: DropDownList.Model): this;
		constructor(element: Element, options?: DropDownList.Model): this;
		model: DropDownList.Model;
		defaults: DropDownList.Model;
		addItem(data: any | Array<any>): void;
		checkAll(): void;
		clearText(): void;
		destroy(): void;
		disable(): void;
		disableItemsByIndices(index: string | number | Array<any>): void;
		enable(): void;
		enableItemsByIndices(index: string | number | Array<any>): void;
		getItemDataByValue(value: string | number | any): any;
		getListData(): any;
		getSelectedItem(): HTMLElement;
		getSelectedValue(): string;
		hidePopup(): void;
		selectItemsByIndices(index: string | number | Array<any>): void;
		selectItemByText(index: string | number | Array<any>): void;
		selectItemByValue(index: string | number | Array<any>): void;
		showPopup(): void;
		unCheckAll(): void;
		unselectItemsByIndices(index: string | number | Array<any>): void;
		unselectItemByText(index: string | number | Array<any>): void;
		unselectItemByValue(index: string | number | Array<any>): void
	}

	declare class Tooltip extends ej$Widget {
		fn: Tooltip;
		constructor(element: JQuery, options?: Tooltip.Model): this;
		constructor(element: Element, options?: Tooltip.Model): this;
		model: Tooltip.Model;
		defaults: Tooltip.Model;
		destroy(): void;
		disable(): void;
		enable(): void;
		hide(effect?: string, func?: Function): void;
		show(effect?: string, func?: Function, target?: JQuery): void
	}

	declare class Editor extends ej$Widget {
		fn: Editor;
		constructor(element: JQuery, options?: Editor.Model): this;
		constructor(element: Element, options?: Editor.Model): this;
		model: Editor.Model;
		defaults: Editor.Model;
		destroy(): void;
		disable(): void;
		enable(): void;
		getValue(): number
	}

	declare class NumericTextbox extends Editor {
		
	}

	declare class CurrencyTextbox extends Editor {
		
	}

	declare class PercentageTextbox extends Editor {
		
	}

	declare class ListView extends ej$Widget {
		fn: ListView;
		constructor(element: JQuery, options?: ListView.Model): this;
		constructor(element: Element, options?: ListView.Model): this;
		model: ListView.Model;
		defaults: ListView.Model;
		addItem(item: any, index: number, groupid: string): void;
		checkAllItem(): void;
		checkItem(index: number): void;
		clear(): void;
		deActive(index: number): void;
		disableItem(index: number): void;
		enableItem(index: number): void;
		getActiveItem(): HTMLElement;
		getActiveItemText(): string;
		getCheckedItems(): Array<any>;
		getCheckedItemsText(): Array<any>;
		getItemsCount(): number;
		getItemText(index: string | number): string;
		hasChild(index: number): boolean;
		hide(): void;
		hideItem(index: number): void;
		isChecked(): boolean;
		loadAjaxContent(item: string): void;
		removeCheckMark(index: number): void;
		removeItem(index: number): void;
		selectItem(index: number): void;
		setActive(index: number): void;
		show(): void;
		showItem(index: number): void;
		unCheckAllItem(): void;
		unCheckItem(index: number): void
	}

	declare class MaskEdit extends ej$Widget {
		fn: MaskEdit;
		constructor(element: JQuery, options?: MaskEdit.Model): this;
		constructor(element: Element, options?: MaskEdit.Model): this;
		model: MaskEdit.Model;
		defaults: MaskEdit.Model;
		clear(): void;
		disable(): void;
		enable(): void;
		get_StrippedValue(): string;
		get_UnstrippedValue(): string
	}

	declare class Menu extends ej$Widget {
		fn: Menu;
		constructor(element: JQuery, options?: Menu.Model): this;
		constructor(element: Element, options?: Menu.Model): this;
		model: Menu.Model;
		defaults: Menu.Model;
		disable(): void;
		disableItem(itemtext: string): void;
		disableItemByID(itemid: string | number): void;
		enable(): void;
		enableItem(itemtext: string): void;
		enableItemByID(itemid: string | number): void;
		hide(): void;
		hideItems(): void;
		insert(item: any, target: string | any): void;
		insertAfter(item: any, target: string | any): void;
		insertBefore(item: any, target: string | any): void;
		remove(target: any | Array<any>): void;
		show(locationX: number, locationY: number, targetElement: any, event: any): void;
		showItems(): void
	}

	declare class Pager extends ej$Widget {
		fn: Pager;
		constructor(element: JQuery, options?: Pager.Model): this;
		constructor(element: Element, options?: Pager.Model): this;
		model: Pager.Model;
		defaults: Pager.Model;
		gotoPage(pageIndex: number): void;
		refreshPager(): void
	}

	declare class ProgressBar extends ej$Widget {
		fn: ProgressBar;
		constructor(element: JQuery, options?: ProgressBar.Model): this;
		constructor(element: Element, options?: ProgressBar.Model): this;
		model: ProgressBar.Model;
		defaults: ProgressBar.Model;
		destroy(): void;
		disable(): void;
		enable(): void;
		getPercentage(): number;
		getValue(): number
	}

	declare class RadioButton extends ej$Widget {
		fn: RadioButton;
		constructor(element: JQuery, options?: RadioButton.Model): this;
		constructor(element: Element, options?: RadioButton.Model): this;
		model: RadioButton.Model;
		defaults: RadioButton.Model;
		disable(): void;
		enable(): void
	}

	declare class Rating extends ej$Widget {
		fn: Rating;
		constructor(element: JQuery, options?: Rating.Model): this;
		constructor(element: Element, options?: Rating.Model): this;
		model: Rating.Model;
		defaults: Rating.Model;
		destroy(): void;
		getValue(): number;
		hide(): void;
		refresh(): void;
		reset(): void;
		setValue(value: string | number): void;
		show(): void
	}

	declare class Ribbon extends ej$Widget {
		fn: Ribbon;
		constructor(element: JQuery, options?: Ribbon.Model): this;
		constructor(element: Element, options?: Ribbon.Model): this;
		model: Ribbon.Model;
		defaults: Ribbon.Model;
		addContextualTabs(contextualTabSet: any, index?: number): void;
		addBackStageItem(item: any, index?: number): void;
		addTab(tabText: string, ribbonGroups: Array<any>, index?: number): void;
		addTabGroup(tabIndex: number, tabGroup: any, groupIndex?: number): void;
		addTabGroupContent(
		tabIndex: number, groupIndex: number, subGroupIndex: number, content: any, contentIndex?: number
	): void;
		hideBackstage(): void;
		collapse(): void;
		destroy(): void;
		expand(): void;
		getTabText(index: number): string;
		hideTab(text: string): void;
		isEnable(text: string): boolean;
		isVisible(text: string): boolean;
		removeTab(index: number): void;
		setTabText(tabText: string, newText: string): void;
		showBackstage(): void;
		showTab(text: string): void;
		updateGroup(tabIndex: number, groupId: string, contentGroup?: any): void;
		updateBackStageItem(index: number, item?: any): void;
		removeTabGroupContent(tabIndex: number, groupIndex: string, subGroupIndex?: number): void;
		removeBackStageItem(index: number): void
	}

	declare class Kanban extends ej$Widget {
		fn: Kanban;
		constructor(element: JQuery, options?: Kanban.Model): this;
		constructor(element: Element, options?: Kanban.Model): this;
		model: Kanban.Model;
		defaults: Kanban.Model;
		columns(
		columndetails: Array<any> | string, keyvalue: Array<any> | string, action?: string
	): void;
		destroy(): void;
		dataSource(datasource: Array<any>): void;
		toggleColumn(headerText: any): void;
		toggleCard(key: string | number): void;
		getVisibleColumnNames(): void;
		getScrollObject(): void;
		getColumnByHeaderText(headerText: string): string;
		getHeaderTable(): string;
		hideColumns(headerText: Array<any> | string): void;
		print(): void;
		refreshTemplate(): void;
		refresh(templateRefresh?: boolean): void;
		showColumns(headerText: Array<any> | string): void;
		updateCard(key: string, data: Array<any>): void;
		KanbanSelection: Kanban.KanbanSelection;
		KanbanSwimlane: Kanban.KanbanSwimlane;
		KanbanFilter: Kanban.KanbanFilter;
		KanbanEdit: Kanban.KanbanEdit
	}

	declare class Rotator extends ej$Widget {
		fn: Rotator;
		constructor(element: JQuery, options?: Rotator.Model): this;
		constructor(element: Element, options?: Rotator.Model): this;
		model: Rotator.Model;
		defaults: Rotator.Model;
		disable(): void;
		enable(): void;
		getIndex(): number;
		gotoIndex(index: number): void;
		pause(): void;
		play(): void;
		slideNext(): void;
		slidePrevious(): void;
		updateTemplateById(index: number, id: string): void
	}

	declare class RTE extends ej$Widget {
		fn: RTE;
		constructor(element: JQuery, options?: RTE.Model): this;
		constructor(element: Element, options?: RTE.Model): this;
		model: RTE.Model;
		defaults: RTE.Model;
		createRange(): void;
		disable(): void;
		disableToolbarItem(): void;
		enable(): void;
		enableToolbarItem(): void;
		executeCommand(): void;
		focus(): void;
		getCommandStatus(): void;
		getDocument(): void;
		getHtml(): void;
		getSelectedHtml(): void;
		getText(): void;
		hide(): void;
		insertMenuOption(): void;
		insertColumn(before?: boolean, cell?: JQuery): void;
		insertRow(before?: boolean, cell?: JQuery): void;
		pasteContent(): void;
		refresh(): void;
		removeColumn(cell?: JQuery): void;
		removeRow(cell?: JQuery): void;
		removeTable(table?: JQuery): void;
		removeMenuOption(): void;
		removeToolbarItem(): void;
		selectAll(): void;
		selectRange(): void;
		setColorPickerType(): void;
		setHtml(): void;
		show(): void
	}

	declare class Slider extends ej$Widget {
		fn: Slider;
		constructor(element: JQuery, options?: Slider.Model): this;
		constructor(element: Element, options?: Slider.Model): this;
		model: Slider.Model;
		defaults: Slider.Model;
		disable(): void;
		enable(): void;
		getValue(): number;
		setValue(): void
	}

	declare class SplitButton extends ej$Widget {
		fn: SplitButton;
		constructor(element: JQuery, options?: SplitButton.Model): this;
		constructor(element: Element, options?: SplitButton.Model): this;
		model: SplitButton.Model;
		defaults: SplitButton.Model;
		destroy(): void;
		disable(): void;
		enable(): void;
		hide(): void;
		show(): void
	}

	declare class Splitter extends ej$Widget {
		fn: Splitter;
		constructor(element: JQuery, options?: Splitter.Model): this;
		constructor(element: Element, options?: Splitter.Model): this;
		model: Splitter.Model;
		defaults: Splitter.Model;
		addItem(content: string, property: any, index: number): HTMLElement;
		collapse(paneIndex: number): void;
		expand(paneIndex: number): void;
		refresh(): void;
		removeItem(index: number): void
	}

	declare class Tab extends ej$Widget {
		fn: Tab;
		constructor(element: JQuery, options?: Tab.Model): this;
		constructor(element: Element, options?: Tab.Model): this;
		model: Tab.Model;
		defaults: Tab.Model;
		addItem(
		URL: string, displayLabel: string, index: number, cssClass: string, id: string
	): void;
		disable(): void;
		enable(): void;
		getItemsCount(): number;
		hide(): void;
		hideItem(index: number): void;
		removeItem(index: number): void;
		show(): void;
		showItem(index: number): void
	}

	declare class TagCloud extends ej$Widget {
		fn: TagCloud;
		constructor(element: JQuery, options?: TagCloud.Model): this;
		constructor(element: Element, options?: TagCloud.Model): this;
		model: TagCloud.Model;
		defaults: TagCloud.Model;
		insert(name: string): void;
		insertAt(name: string, position: number): void;
		remove(name: string): void;
		removeAt(position: number): void
	}

	declare class TimePicker extends ej$Widget {
		fn: TimePicker;
		constructor(element: JQuery, options?: TimePicker.Model): this;
		constructor(element: Element, options?: TimePicker.Model): this;
		model: TimePicker.Model;
		defaults: TimePicker.Model;
		disable(): void;
		enable(): void;
		getValue(): string;
		hide(): void;
		setCurrentTime(): void;
		show(): void
	}

	declare class ToggleButton extends ej$Widget {
		fn: ToggleButton;
		constructor(element: JQuery, options?: ToggleButton.Model): this;
		constructor(element: Element, options?: ToggleButton.Model): this;
		model: ToggleButton.Model;
		defaults: ToggleButton.Model;
		destroy(): void;
		disable(): void;
		enable(): void
	}

	declare class Toolbar extends ej$Widget {
		fn: Toolbar;
		constructor(element: JQuery, options?: Toolbar.Model): this;
		constructor(element: Element, options?: Toolbar.Model): this;
		model: Toolbar.Model;
		defaults: Toolbar.Model;
		deselectItem(element: any): void;
		deselectItemByID(ID: string): void;
		destroy(): void;
		disable(): void;
		disableItem(element: any): void;
		disableItemByID(ID: string): void;
		enable(): void;
		enableItem(element: any): void;
		enableItemByID(ID: string): void;
		hide(): void;
		removeItem(element: any): void;
		removeItemByID(ID: string): void;
		selectItem(element: any): void;
		selectItemByID(ID: string): void;
		show(): void
	}

	declare class TreeView extends ej$Widget {
		fn: TreeView;
		constructor(element: JQuery, options?: TreeView.Model): this;
		constructor(element: Element, options?: TreeView.Model): this;
		model: TreeView.Model;
		defaults: TreeView.Model;
		addNode(newNodeText: string | any, target: string | any): void;
		addNodes(collection: any | Array<any>, target: string | any): void;
		checkAll(): void;
		checkNode(element: string | any): void;
		collapseAll(levelUntil?: number): void;
		collapseNode(element: string | any): void;
		disableNode(element: string | any): void;
		enableNode(element: string | any): void;
		ensureVisible(element: string | any): boolean;
		expandAll(levelUntil?: number): void;
		expandNode(element: string | any): void;
		getCheckedNodes(): any;
		getCheckedNodesIndex(): Array<any>;
		getChildren(element: string | any, includeNestedChild?: boolean): Array<any>;
		getNodeCount(): number;
		getExpandedNodes(): any;
		getExpandedNodesIndex(): Array<any>;
		getNodeByIndex(index: number): any;
		getNode(element: string | any): any;
		getNodeIndex(element: string | any): number;
		getParent(element: string | any): any;
		getSelectedNode(): any;
		getSelectedNodes(): Array<any>;
		getSelectedNodeIndex(): number;
		getSelectedNodesIndex(): Array<any>;
		getText(element: string | any): string;
		getTreeData(id?: string | number): Array<any>;
		getVisibleNodes(): any;
		hasChildNode(element: string | any): boolean;
		hide(): void;
		hideNode(element: string | any): void;
		insertAfter(newNodeText: string | any, target: string | any): void;
		insertBefore(newNodeText: string | any, target: string | any): void;
		isNodeChecked(element: string | any): boolean;
		isChildLoaded(element: string | any): boolean;
		isDisabled(element: string | any): boolean;
		isExist(element: string | any): boolean;
		isExpanded(element: string | any): boolean;
		isSelected(element: string | any): boolean;
		isVisible(element: string | any): boolean;
		loadData(URL: string, target: string | any): void;
		moveNode(sourceNode: string | any, destinationNode: string | any, index: number): void;
		refresh(): void;
		removeAll(): void;
		removeNode(element: string | any): void;
		selectAll(): void;
		selectNode(element: string | any | Array<any>): void;
		show(): void;
		showNode(element: string | any): void;
		unCheckAll(): void;
		uncheckNode(element: string | any): void;
		unselectAll(): void;
		unselectNode(element: string | any | Array<any>): void;
		updateText(target: string | any, newText: string): void
	}

	declare class Uploadbox extends ej$Widget {
		fn: Uploadbox;
		constructor(element: JQuery, options?: Uploadbox.Model): this;
		constructor(element: Element, options?: Uploadbox.Model): this;
		model: Uploadbox.Model;
		defaults: Uploadbox.Model;
		destroy(): void;
		disable(): void;
		enable(): void;
		refresh(): void
	}

	declare class WaitingPopup extends ej$Widget {
		fn: WaitingPopup;
		constructor(element: JQuery, options?: WaitingPopup.Model): this;
		constructor(element: Element, options?: WaitingPopup.Model): this;
		model: WaitingPopup.Model;
		defaults: WaitingPopup.Model;
		hide(): void;
		refresh(): void;
		show(): void
	}

	declare class Grid extends ej$Widget {
		fn: Grid;
		constructor(element: JQuery, options?: Grid.Model): this;
		constructor(element: Element, options?: Grid.Model): this;
		model: Grid.Model;
		defaults: Grid.Model;
		addIgnoreOnExport(propertyNames: Array<any>): void;
		addRecord(): void;
		addRecord(data: Array<any>, serverChange?: Array<any>): void;
		batchCancel(): void;
		batchSave(): void;
		cancelEdit(): void;
		cancelEditCell(): void;
		clearCellSelection(): boolean;
		clearCellSelection(rowIndex: number, columnIndex: number): boolean;
		clearColumnSelection(index?: number): boolean;
		clearFiltering(field: string): void;
		clearSearching(): void;
		clearSelection(index?: number): boolean;
		clearSorting(): void;
		collapseAll(): void;
		collapseGroupDropArea(): void;
		columns(columnDetails: Array<any> | string, action?: string): void;
		dataSource(datasource: Array<any>, templateRefresh?: boolean): void;
		deleteRecord(fieldName: string, data: Array<any>): void;
		destroy(): void;
		editCell(index: number, fieldName: string): void;
		endEdit(): void;
		expandAll(): void;
		expandCollapse($target: JQuery): HTMLElement;
		expandGroupDropArea(): void;
		export(
		action: string, serverEvent?: string, multipleExport?: boolean, gridIds?: Array<any>
	): void;
		export(action: string, serverEvent?: string, multipleExport?: boolean): void;
		filterColumn(
		fieldName: Array<any>, filterOperator: string, filterValue: string, predicate: string, matchcase?: boolean, actualFilterValue?: any
	): void;
		filterColumn(filterQueries: Array<any>): void;
		getBatchChanges(): any;
		getBrowserDetails(): any;
		getColumnByField(fieldName: string): any;
		getColumnByHeaderText(headerText: string): any;
		getColumnByIndex(columnIndex: number): any;
		getColumnFieldNames(): Array<any>;
		getColumnIndexByField(fieldName: string): number;
		getContent(): HTMLElement;
		getContentTable(): HTMLElement;
		getCurrentEditCellData(): any;
		getCurrentIndex(): number;
		getCurrentViewData(): Array<any>;
		getFieldNameByHeaderText(headerText: string): string;
		getFilterBar(): HTMLElement;
		getFilteredRecords(): Array<any>;
		getFooterContent(): HTMLElement;
		getFooterTable(): HTMLElement;
		getHeaderContent(): HTMLElement;
		getHeaderTable(): HTMLElement;
		getHeaderTextByFieldName(field: string): string;
		getHiddenColumnNames(): Array<any>;
		getIndexByRow($tr: JQuery): number;
		getPager(): HTMLElement;
		getPrimaryKeyFieldNames(): Array<any>;
		getRowByIndex(from: number, to: number): HTMLElement;
		getRowHeight(): number;
		getRows(): HTMLElement;
		getScrollObject(): any;
		getSelectedRecords(): void;
		getSummaryValues(summaryCol: any, summaryData: any): number;
		getVisibleColumnNames(): Array<any>;
		gotoPage(pageIndex: number): void;
		groupColumn(fieldName: string): void;
		hideColumns(headerText: Array<any> | string): void;
		print(): void;
		refreshBatchEditChanges(): void;
		refreshContent(templateRefresh?: boolean): void;
		refreshTemplate(): void;
		refreshToolbar(): void;
		removeSortedColumns(fieldName: Array<any> | string): void;
		render(): void;
		reorderColumns(fromFieldName: string, toFieldName: string): void;
		resetModelCollections(): void;
		resizeColumns(column: string, width: string): void;
		rowHeightRefresh(): void;
		saveCell(): boolean;
		saveCell(preventSaveEvent: boolean): void;
		setDimension(height: number, width: number): void;
		setWidthToColumns(): void;
		search(searchString: string): void;
		selectCells(rowCellIndexes: any): void;
		selectColumns(fromIndex: number): void;
		selectColumns(columnIndex: number, toIndex?: number): boolean;
		selectRows(fromIndex: number, toIndex: number): void;
		selectRows(from: Array<any> | number, to: number, target?: any): void;
		selectRows(rowIndexes: Array<any>): void;
		setCellText(): void;
		setCellValue(Index: number, fieldName: string, value: any): void;
		setValidationToField(fieldName: string, rules: any): void;
		showColumns(headerText: Array<any> | string): void;
		sortColumn(columnName: string, sortingDirection?: string): void;
		startEdit($tr: JQuery): HTMLElement;
		ungroupColumn(fieldName: string): void;
		updateRecord(fieldName: string, data: Array<any>): void;
		windowonresize(): void
	}

	declare class Sparkline extends ej$Widget {
		fn: Sparkline;
		constructor(element: JQuery, options?: Sparkline.Model): this;
		constructor(element: Element, options?: Sparkline.Model): this;
		model: Sparkline.Model;
		defaults: Sparkline.Model;
		redraw(): void
	}

	declare class PivotGrid extends ej$Widget {
		fn: PivotGrid;
		constructor(element: JQuery, options?: PivotGrid.Model): this;
		constructor(element: Element, options?: PivotGrid.Model): this;
		model: PivotGrid.Model;
		defaults: PivotGrid.Model;
		doAjaxPost(): void;
		doPostBack(): void;
		exportPivotGrid(): void;
		refreshPagedPivotGrid(): void;
		refreshPivotGrid(): void;
		refreshFieldCaption(): void;
		renderControlFromJSON(): void
	}

	declare class PivotSchemaDesigner extends ej$Widget {
		fn: PivotSchemaDesigner;
		constructor(element: JQuery, options?: PivotSchemaDesigner.Model): this;
		constructor(element: Element, options?: PivotSchemaDesigner.Model): this;
		model: PivotSchemaDesigner.Model;
		defaults: PivotSchemaDesigner.Model;
		doAjaxPost(): void
	}

	declare class PivotPager extends ej$Widget {
		fn: PivotPager;
		constructor(element: JQuery, options?: PivotPager.Model): this;
		constructor(element: Element, options?: PivotPager.Model): this;
		model: PivotPager.Model;
		defaults: PivotPager.Model;
		initPagerProperties(): void
	}

	declare class PivotChart extends ej$Widget {
		fn: PivotChart;
		constructor(element: JQuery, options?: PivotChart.Model): this;
		constructor(element: Element, options?: PivotChart.Model): this;
		model: PivotChart.Model;
		defaults: PivotChart.Model;
		doAjaxPost(): void;
		doPostBack(): void;
		exportPivotChart(): void;
		renderChartFromJSON(): void;
		renderControlSuccess(): void
	}

	declare class PivotClient extends ej$Widget {
		fn: PivotClient;
		constructor(element: JQuery, options?: PivotClient.Model): this;
		constructor(element: Element, options?: PivotClient.Model): this;
		model: PivotClient.Model;
		defaults: PivotClient.Model;
		doAjaxPost(): void;
		doPostBack(): void
	}

	declare class PivotGauge extends ej$Widget {
		fn: PivotGauge;
		constructor(element: JQuery, options?: PivotGauge.Model): this;
		constructor(element: Element, options?: PivotGauge.Model): this;
		model: PivotGauge.Model;
		defaults: PivotGauge.Model;
		doAjaxPost(): void;
		refresh(): void;
		removeImg(): void;
		renderControlFromJSON(): void
	}

	declare class PivotTreeMap extends ej$Widget {
		fn: PivotTreeMap;
		constructor(element: JQuery, options?: PivotTreeMap.Model): this;
		constructor(element: Element, options?: PivotTreeMap.Model): this;
		model: PivotTreeMap.Model;
		defaults: PivotTreeMap.Model;
		doAjaxPost(): void;
		doPostBack(): void;
		renderTreeMapFromJSON(): void;
		renderControlSuccess(): void
	}

	declare class Schedule extends ej$Widget {
		fn: Schedule;
		constructor(element: JQuery, options?: Schedule.Model): this;
		constructor(element: Element, options?: Schedule.Model): this;
		model: Schedule.Model;
		defaults: Schedule.Model;
		deleteAppointment(data: string | any): void;
		destroy(): void;
		exportSchedule(action: string, serverEvent: string, id: string | number): void;
		filterAppointments(filterConditions: Array<any>): void;
		getAppointments(): void;
		print(data: any): void;
		refreshScroller(): void;
		saveAppointment(appointmentObject: any): void;
		getRecurrenceRule(): void;
		getSlotByElement(element: any): void;
		searchAppointments(
		searchString: any | string, field: string, operator: string | string, ignoreCase: boolean
	): void;
		refresh(): void;
		refreshAppointments(): void
	}

	declare class RecurrenceEditor extends ej$Widget {
		fn: RecurrenceEditor;
		constructor(element: JQuery, options?: RecurrenceEditor.Model): this;
		constructor(element: Element, options?: RecurrenceEditor.Model): this;
		model: RecurrenceEditor.Model;
		defaults: RecurrenceEditor.Model;
		getRecurrenceRule(): void;
		recurrenceDateGenerator(recurrenceString: string, startDate: any): void;
		recurrenceRuleSplit(recurrenceRule: string, exDate: any): void
	}

	declare class Gantt extends ej$Widget {
		fn: Gantt;
		constructor(element: JQuery, options?: Gantt.Model): this;
		constructor(element: Element, options?: Gantt.Model): this;
		model: Gantt.Model;
		defaults: Gantt.Model;
		addRecord(data: any, rowPosition: string): void;
		selectCells(Indexes: Array<any>, preservePreviousSelectedCell: boolean): void;
		setSplitterIndex(index: number): void;
		cancelEdit(): void;
		collapseAllItems(): void;
		deleteItem(): void;
		destroy(): void;
		expandAllItems(): void;
		expandCollapseRecord(taskId: number): void;
		hideColumn(headerText: string): void;
		indentItem(): void;
		openAddDialog(): void;
		openEditDialog(): void;
		outdentItem(): void;
		saveEdit(): void;
		searchItem(searchString: string): void;
		setSplitterPosition(width: string): void;
		showColumn(headerText: string): void
	}

	declare class ReportViewer extends ej$Widget {
		fn: ReportViewer;
		constructor(element: JQuery, options?: ReportViewer.Model): this;
		constructor(element: Element, options?: ReportViewer.Model): this;
		model: ReportViewer.Model;
		defaults: ReportViewer.Model;
		exportReport(): void;
		fitToPage(): void;
		fitToPageHeight(): void;
		fitToPageWidth(): void;
		getDataSetNames(): void;
		getParameters(): void;
		gotoFirstPage(): void;
		gotoLastPage(): void;
		gotoNextPage(): void;
		gotoPageIndex(): void;
		gotoPreviousPage(): void;
		print(): void;
		printLayout(): void;
		refresh(): void
	}

	declare class TreeGrid extends ej$Widget {
		fn: TreeGrid;
		constructor(element: JQuery, options?: TreeGrid.Model): this;
		constructor(element: Element, options?: TreeGrid.Model): this;
		model: TreeGrid.Model;
		defaults: TreeGrid.Model;
		addRow(data: any, rowPosition: string): void;
		clearSelection(index: number): void;
		selectCells(Indexes: Array<any>, preservePreviousSelectedCell: boolean): void;
		renameColumn(columnIndex: number, name: string): void;
		deleteColumn(columnIndex: number): void;
		collapseAll(): void;
		hideColumn(headerText: string): void;
		expandAtLevel(index: number): void;
		collapseAtLevel(index: number): void;
		refresh(dataSource: Array<any>, query: any): void;
		freezePrecedingColumns(field: string): void;
		freezeColumn(field: string, isFrozen: boolean): void;
		saveCell(): void;
		search(searchString: string): void;
		showColumn(headerText: string): void;
		sortColumn(columnName: string, columnSortDirection: string): void
	}

	declare class GroupButton extends ej$Widget {
		fn: GroupButton;
		constructor(element: JQuery, options?: GroupButton.Model): this;
		constructor(element: Element, options?: GroupButton.Model): this;
		model: GroupButton.Model;
		defaults: GroupButton.Model;
		deselectItem(element: JQuery): void;
		destroy(): void;
		disable(): void;
		disableItem(element: JQuery): void;
		enable(): void;
		enableItem(element: JQuery): void;
		getIndex(element: JQuery): number;
		getSelectedItem(element: JQuery): number;
		hide(): void;
		hideItem(element: JQuery): void;
		isDisabled(): boolean;
		isSelected(): boolean;
		selectItem(element: JQuery): void;
		show(): void;
		showItem(element: JQuery): void
	}

	declare class NavigationDrawer extends ej$Widget {
		fn: NavigationDrawer;
		constructor(element: JQuery, options?: NavigationDrawer.Model): this;
		constructor(element: Element, options?: NavigationDrawer.Model): this;
		model: NavigationDrawer.Model;
		defaults: NavigationDrawer.Model;
		close(): void;
		open(): void;
		toggle(): void
	}

	declare class RadialMenu extends ej$Widget {
		fn: RadialMenu;
		constructor(element: JQuery, options?: RadialMenu.Model): this;
		constructor(element: Element, options?: RadialMenu.Model): this;
		model: RadialMenu.Model;
		defaults: RadialMenu.Model;
		hide(): void;
		hideMenu(): void;
		show(): void;
		showMenu(): void;
		enableItemByIndex(): void;
		enableItemsByIndices(): void;
		disableItemByIndex(): void;
		disableItemsByIndices(): void;
		enableItem(): void;
		disableItem(): void;
		enableItems(): void;
		disableItems(): void;
		updateBadgeValue(): void;
		showBadge(): void;
		hideBadge(): void
	}

	declare class Tile extends ej$Widget {
		fn: Tile;
		constructor(element: JQuery, options?: Tile.Model): this;
		constructor(element: Element, options?: Tile.Model): this;
		model: Tile.Model;
		defaults: Tile.Model;
		updateTemplate(id: string, index: number): void
	}

	declare class RadialSlider extends ej$Widget {
		fn: RadialSlider;
		constructor(element: JQuery, options?: RadialSlider.Model): this;
		constructor(element: Element, options?: RadialSlider.Model): this;
		model: RadialSlider.Model;
		defaults: RadialSlider.Model;
		show(): void;
		hide(): void
	}

	declare class Spreadsheet extends ej$Widget {
		fn: Spreadsheet;
		constructor(element: JQuery, options?: Spreadsheet.Model): this;
		constructor(element: Element, options?: Spreadsheet.Model): this;
		model: Spreadsheet.Model;
		defaults: Spreadsheet.Model;
		addCustomFormula(formulaName: string, functionName: string): void;
		addNewSheet(): void;
		clearAll(range?: string): void;
		clearAllFormat(range?: string): void;
		clearBorder(range?: string): void;
		clearContents(range?: string): void;
		clearRange(rangeName: string): void;
		clearRangeData(
		range?: Array<any> | string, property?: string, cells?: any, skipHiddenRow?: boolean, status?: any, skipCell?: any
	): void;
		copySheet(fromIdx: number, toIdx: number, isCopySheet: boolean): void;
		deleteEntireColumn(startCol: number, endCol: number): void;
		deleteEntireRow(startRow: number, endRow: number): void;
		deleteSheet(idx: number): void;
		deleteShiftLeft(startCell: any, endCell: any): void;
		deleteShiftUp(startCell: any, endCell: any): void;
		editRange(rangeName: string, fn: Function): void;
		getActivationPanel(): HTMLElement;
		getActiveCell(sheetIdx?: number): any;
		getActiveCellElem(sheetIdx?: number): HTMLElement;
		getActiveSheetIndex(): number;
		getAutoFillElem(): HTMLElement;
		getCell(rowIdx: number, colIdx: number, sheetIdx?: number): HTMLElement;
		getDataSettings(sheetIdx: number): number;
		getFrozenColumns(sheetIdx: number): number;
		getFrozenRows(sheetIdx: number): number;
		getHyperlink(cell: HTMLElement): any;
		getRange(
		startRIndex: number, startCIndex: number, endRIndex: number, endCIndex: number, sheetIdx: number
	): HTMLElement;
		getRangeData(options?: any): Array<any>;
		getRangeIndices(range: string): Array<any>;
		getSheet(sheetIdx: number): any;
		getSheetElement(sheetIdx: number): HTMLElement;
		gotoPage(sheetIdx: number, newSheet: boolean): void;
		hideColumn(startCol: number, endCol: number): void;
		hideFormulaBar(): void;
		hideRow(startRow: number, endRow: number): void;
		hideSheet(sheetIdx: string | number): void;
		hideWaitingPopUp(): void;
		insertEntireColumn(startCol: number, endCol: number): void;
		insertEntireRow(startRow: number, endRow: number): void;
		insertSheet(): void;
		insertShiftBottom(startCell: any, endCell: any): void;
		insertShiftRight(startCell: any, endCell: any): void;
		import(importRequest: any): void;
		lockCells(range: string | Array<any>, isLocked?: string): void;
		mergeAcrossCells(range?: string, alertStatus?: boolean): void;
		mergeCells(range?: string, alertStatus?: boolean): void;
		protectSheet(isProtected?: boolean): void;
		refreshContent(sheetIdx: number): void;
		refreshSpreadsheet(): void;
		removeCustomFormula(formulaName: string, functionName: string): void;
		removeHyperlink(
		range: string, isClearHLink?: boolean, status?: boolean, cells?: any, skipHiddenRow?: boolean
	): void;
		removeRange(rangeName: string): void;
		saveAsJSON(): void;
		saveBatchChanges(sheetIdx: number): void;
		setActiveCell(rowIdx: number, colIdx: number, sheetIdx: number): void;
		setActiveSheetIndex(sheetIdx: number): void;
		setBorder(property: any, range?: string): void;
		setHyperlink(range: string, link: any, sheetIdx: number): void;
		setSheetFocus(): void;
		setWidthToColumns(widthColl: Array<any> | any): void;
		sheetRename(sheetName: string): void;
		showActivationPanel(rangeName: string): void;
		showColumn(startColIdx: number, endColIdx: number): void;
		showFormulaBar(): void;
		showGridlines(status: boolean): void;
		showHeadings(startRow: boolean): void;
		showRow(startRow: number, endRow: number): void;
		showWaitingPopUp(): void;
		unfreezePanes(): void;
		unhideSheet(sheetInfo: string | number): void;
		unmergeCells(range?: string): void;
		unWrapText(range?: Array<any> | string): void;
		updateData(data: any, range?: Array<any>): void;
		updateFormulaBar(): void;
		updateRange(sheetIdx: number, settings: any): void;
		updateUniqueData(data: any, range?: Array<any> | string): void;
		wrapText(range?: Array<any> | string): void;
		XLCellType: Spreadsheet.XLCellType;
		XLCFormat: Spreadsheet.XLCFormat;
		XLChart: Spreadsheet.XLChart;
		XLClipboard: Spreadsheet.XLClipboard;
		XLComment: Spreadsheet.XLComment;
		XLDragDrop: Spreadsheet.XLDragDrop;
		XLDragFill: Spreadsheet.XLDragFill;
		XLEdit: Spreadsheet.XLEdit;
		XLExport: Spreadsheet.XLExport;
		XLFilter: Spreadsheet.XLFilter;
		XLFormat: Spreadsheet.XLFormat;
		XLFreeze: Spreadsheet.XLFreeze;
		XLPivot: Spreadsheet.XLPivot;
		XLPrint: Spreadsheet.XLPrint;
		XLResize: Spreadsheet.XLResize;
		XLRibbon: Spreadsheet.XLRibbon;
		XLSearch: Spreadsheet.XLSearch;
		XLSelection: Spreadsheet.XLSelection;
		XLSort: Spreadsheet.XLSort;
		XLValidate: Spreadsheet.XLValidate
	}

	declare class PdfViewer extends ej$Widget {
		fn: PdfViewer;
		constructor(element: JQuery, options?: PdfViewer.Model): this;
		constructor(element: Element, options?: PdfViewer.Model): this;
		model: PdfViewer.Model;
		defaults: PdfViewer.Model;
		load(): void;
		showToolbar(): void;
		print(): void;
		showPageNavigationTools(): void;
		goToPage(): void;
		goToLastPage(): void;
		goToFirstPage(): void;
		goToNextPage(): void;
		goToPreviousPage(): void;
		showMagnificationTools(): void;
		fitToPage(): void;
		fitToWidth(): void;
		zoomIn(): void;
		zoomOut(): void;
		zoomTo(): void
	}

	
}

declare module 'device' {
			declare function isAndroid(): boolean

	declare function isIOS(): boolean

	declare function isFlat(): boolean

	declare function isIOS7(): boolean

	declare function isWindows(): boolean

		
}

declare module 'widget' {
			declare function register(pluginName: string, className: string, prototype: any): void

	declare function destroyAll(elements: Element): void

	declare function init(element: Element): void

	declare function registerInstance(element: Element, pluginName: string, className: string, prototype: any): void

		
}

declare module 'Draggable' {
		declare export interface Model {
		clone?: boolean,
		cursorAt?: any,
		distance?: number,
		dragArea?: boolean,
		handle?: string,
		scope?: string,
		destroy(e: DestroyEventArgs): void,
		drag(e: DragEventArgs): void,
		dragStart(e: DragStartEventArgs): void,
		dragStop(e: DragStopEventArgs): void,
		helper(e: HelperEventArgs): void
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Draggable.Model,
		type?: string
	}

	declare export interface DragEventArgs {
		cancel?: boolean,
		model?: ej.Draggable.Model,
		type?: string,
		event?: any,
		target?: any
	}

	declare export interface DragStartEventArgs {
		cancel?: boolean,
		model?: ej.Draggable.Model,
		type?: string,
		event?: any,
		target?: any
	}

	declare export interface DragStopEventArgs {
		cancel?: boolean,
		model?: ej.Draggable.Model,
		type?: string,
		event?: any,
		target?: any
	}

	declare export interface HelperEventArgs {
		element?: any,
		sender?: any
	}

			
}

declare module 'Droppable' {
		declare export interface Model {
		accept?: any,
		scope?: string,
		drop(e: DropEventArgs): void,
		out(e: OutEventArgs): void,
		over(e: OverEventArgs): void
	}

	declare export interface DropEventArgs {
		cancel?: boolean,
		model?: ej.Droppable.Model,
		type?: string,
		targetElement?: any
	}

	declare export interface OutEventArgs {
		cancel?: boolean,
		model?: ej.Droppable.Model,
		type?: string,
		targetElement?: any
	}

	declare export interface OverEventArgs {
		cancel?: boolean,
		model?: ej.Droppable.Model,
		type?: string,
		targetElement?: any
	}

			
}

declare module 'Resizable' {
		declare export interface Model {
		cursorAt?: any,
		distance?: number,
		handle?: string,
		maxHeight?: number,
		maxWidth?: number,
		minHeight?: number,
		minWidth?: number,
		scope?: string,
		destroy(e: DestroyEventArgs): void,
		helper(e: HelperEventArgs): void
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Resizable.Model,
		type?: string
	}

	declare export interface HelperEventArgs {
		cancel?: boolean,
		model?: ej.Resizable.Model,
		type?: string
	}

			
}

declare module 'Scroller' {
		declare export interface Model {
		animationSpeed?: number,
		autoHide?: boolean,
		buttonSize?: number,
		enabled?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		enableTouchScroll?: boolean,
		height?: number | string,
		scrollerSize?: number,
		scrollLeft?: number,
		scrollOneStepBy?: number,
		scrollTop?: number,
		targetPane?: string,
		width?: number | string,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		wheelStart(e: WheelStartEventArgs): void,
		wheelMove(e: WheelMoveEventArgs): void,
		wheelStop(e: WheelStopEventArgs): void
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Scroller.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		model?: ej.Scroller.Model,
		type?: string
	}

	declare export interface WheelStartEventArgs {
		cancel?: boolean,
		model?: ej.Scroller.Model,
		originalEvent?: any,
		scrollData?: any,
		type?: string
	}

	declare export interface WheelMoveEventArgs {
		cancel?: boolean,
		model?: ej.Scroller.Model,
		originalEvent?: any
	}

	declare export interface WheelStopEventArgs {
		cancel?: boolean,
		model?: ej.Scroller.Model,
		type?: string,
		originalEvent?: any
	}

			
}

declare module 'Accordion' {
		declare export interface Model {
		ajaxSettings?: AjaxSettings,
		allowKeyboardNavigation?: boolean,
		collapseSpeed?: number,
		collapsible?: boolean,
		cssClass?: string,
		customIcon?: CustomIcon,
		disabledItems?: number[],
		enableAnimation?: boolean,
		enabled?: boolean,
		enabledItems?: number[],
		enableMultipleOpen?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		events?: string,
		expandSpeed?: number,
		headerSize?: number | string,
		height?: number | string,
		heightAdjustMode?: ej.Accordion.HeightAdjustMode | string,
		htmlAttributes?: any,
		selectedItemIndex?: number,
		selectedItems?: number[],
		showCloseButton?: boolean,
		showRoundedCorner?: boolean,
		width?: number | string,
		activate(e: ActivateEventArgs): void,
		ajaxBeforeLoad(e: AjaxBeforeLoadEventArgs): void,
		ajaxError(e: AjaxErrorEventArgs): void,
		ajaxLoad(e: AjaxLoadEventArgs): void,
		ajaxSuccess(e: AjaxSuccessEventArgs): void,
		beforeActivate(e: BeforeActivateEventArgs): void,
		beforeInactivate(e: BeforeInactivateEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		inActivate(e: InActivateEventArgs): void
	}

	declare export interface ActivateEventArgs {
		cancel?: boolean,
		model?: ej.Accordion.Model,
		type?: string,
		activeIndex?: number,
		activeHeader?: any,
		isInteraction?: boolean
	}

	declare export interface AjaxBeforeLoadEventArgs {
		cancel?: boolean,
		model?: ej.Accordion.Model,
		type?: string,
		URL?: string
	}

	declare export interface AjaxErrorEventArgs {
		cancel?: boolean,
		model?: ej.Accordion.Model,
		type?: string,
		URL?: string,
		data?: string
	}

	declare export interface AjaxLoadEventArgs {
		cancel?: boolean,
		model?: ej.Accordion.Model,
		type?: string,
		URL?: string
	}

	declare export interface AjaxSuccessEventArgs {
		cancel?: boolean,
		model?: ej.Accordion.Model,
		type?: string,
		URL?: string,
		data?: string,
		content?: string
	}

	declare export interface BeforeActivateEventArgs {
		cancel?: boolean,
		model?: ej.Accordion.Model,
		type?: string,
		activeIndex?: number,
		isInteraction?: boolean
	}

	declare export interface BeforeInactivateEventArgs {
		cancel?: boolean,
		model?: ej.Accordion.Model,
		type?: string,
		inActiveIndex?: number,
		isInteraction?: boolean
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Accordion.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Accordion.Model,
		type?: string
	}

	declare export interface InActivateEventArgs {
		cancel?: boolean,
		model?: ej.Accordion.Model,
		type?: string,
		inActiveIndex?: number,
		inActiveHeader?: any,
		isInteraction?: boolean
	}

	declare export interface AjaxSettings {
		async?: boolean,
		cache?: boolean,
		contentType?: string,
		data?: any,
		dataType?: string,
		type?: string
	}

	declare export interface CustomIcon {
		header?: string,
		selectedHeader?: string
	}

			
}

declare module 'Autocomplete' {
		declare export interface Model {
		addNewText?: boolean,
		allowAddNew?: boolean,
		allowSorting?: boolean,
		animateType?: ej.Autocomplete.Animation | string,
		autoFocus?: boolean,
		caseSensitiveSearch?: boolean,
		cssClass?: string,
		dataSource?: any | Array<any>,
		delaySuggestionTimeout?: number,
		delimiterChar?: string,
		emptyResultText?: string,
		enableAutoFill?: boolean,
		enabled?: boolean,
		enableDistinct?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		fields?: Fields,
		filterType?: string,
		height?: string,
		highlightSearch?: boolean,
		itemsCount?: number,
		minCharacter?: number,
		multiColumnSettings?: MultiColumnSettings,
		multiSelectMode?: ej.Autocomplete.MultiSelectMode | string,
		popupHeight?: string,
		popupWidth?: string,
		query?: ej.Query | string,
		readOnly?: boolean,
		selectValueByKey?: number,
		showEmptyResultText?: boolean,
		showLoadingIcon?: boolean,
		showPopupButton?: boolean,
		showRoundedCorner?: boolean,
		showResetIcon?: boolean,
		sortOrder?: ej.Autocomplete.SortOrder | string,
		template?: string,
		validationMessage?: any,
		validationRules?: any,
		value?: string,
		visible?: boolean,
		watermarkText?: string,
		width?: string,
		actionBegin(e: ActionBeginEventArgs): void,
		actionSuccess(e: ActionSuccessEventArgs): void,
		actionComplete(e: ActionCompleteEventArgs): void,
		actionFailure(e: ActionFailureEventArgs): void,
		change(e: ChangeEventArgs): void,
		close(e: CloseEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		focusIn(e: FocusInEventArgs): void,
		focusOut(e: FocusOutEventArgs): void,
		open(e: OpenEventArgs): void,
		select(e: SelectEventArgs): void
	}

	declare export interface ActionBeginEventArgs {
		
	}

	declare export interface ActionSuccessEventArgs {
		
	}

	declare export interface ActionCompleteEventArgs {
		
	}

	declare export interface ActionFailureEventArgs {
		
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		value?: string
	}

	declare export interface CloseEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Autocomplete.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Autocomplete.Model,
		type?: string
	}

	declare export interface FocusInEventArgs {
		cancel?: boolean,
		model?: ej.Autocomplete.Model,
		type?: string,
		value?: string
	}

	declare export interface FocusOutEventArgs {
		cancel?: boolean,
		model?: ej.Autocomplete.Model,
		type?: string,
		value?: string
	}

	declare export interface OpenEventArgs {
		cancel?: boolean,
		model?: ej.Autocomplete.Model,
		type?: string
	}

	declare export interface SelectEventArgs {
		cancel?: boolean,
		model?: ej.Autocomplete.Model,
		type?: string,
		value?: string,
		text?: string,
		key?: string,
		Item?: ej.Autocomplete.Model
	}

	declare export interface Fields {
		groupBy?: string,
		htmlAttributes?: any,
		key?: string,
		text?: string
	}

	declare export interface MultiColumnSettingsColumn {
		field?: string,
		headerText?: string,
		cssClass?: string,
		type?: ej.Type | string,
		filterType?: ej.filterType | string,
		headerTextAlign?: ej.TextAlign | string,
		textAlign?: ej.TextAlign | string
	}

	declare export interface MultiColumnSettings {
		enable?: boolean,
		showHeader?: boolean,
		stringFormat?: string,
		columns?: Array<MultiColumnSettingsColumn>
	}

			
}

declare module 'Button' {
		declare export interface Model {
		contentType?: ej.ContentType | string,
		cssClass?: string,
		enabled?: boolean,
		enableRTL?: boolean,
		height?: number,
		htmlAttributes?: any,
		imagePosition?: ej.ImagePosition | string,
		prefixIcon?: string,
		repeatButton?: boolean,
		showRoundedCorner?: boolean,
		size?: ej.ButtonSize | string,
		suffixIcon?: string,
		text?: string,
		timeInterval?: string,
		type?: ej.ButtonType | string,
		width?: string | number,
		click(e: ClickEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void
	}

	declare export interface ClickEventArgs {
		cancel?: boolean,
		model?: ej.Button.Model,
		type?: string,
		status?: boolean,
		e?: any
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Button.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Button.Model,
		type?: string
	}

			
}

declare module 'Captcha' {
		declare export interface Model {
		characterSet?: string,
		customErrorMessage?: string,
		enableAutoValidation?: boolean,
		enableCaseSensitivity?: boolean,
		enablePattern?: boolean,
		enableRTL?: boolean,
		hatchStyle?: ej.HatchStyle | string,
		height?: number,
		mapper?: string,
		maximumLength?: number,
		minimumLength?: number,
		requestMapper?: string,
		showAudioButton?: boolean,
		showRefreshButton?: boolean,
		targetButton?: string,
		targetInput?: string,
		width?: number,
		refreshBegin(e: RefreshBeginEventArgs): void,
		refreshComplete(e: RefreshCompleteEventArgs): void,
		refreshFailure(e: RefreshFailureEventArgs): void,
		refreshSuccess(e: RefreshSuccessEventArgs): void
	}

	declare export interface RefreshBeginEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface RefreshCompleteEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface RefreshFailureEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface RefreshSuccessEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

			
}

declare module 'ListBox' {
		declare export interface Model {
		allowDrag?: boolean,
		allowDrop?: boolean,
		allowMultiSelection?: boolean,
		allowVirtualScrolling?: boolean,
		caseSensitiveSearch?: boolean,
		cascadeTo?: string,
		checkedIndices?: Array<any>,
		cssClass?: string,
		dataSource?: any,
		enabled?: boolean,
		enableIncrementalSearch?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		enableWordWrap?: boolean,
		fields?: Fields,
		height?: string,
		itemsCount?: number,
		totalItemsCount?: number,
		itemRequestCount?: number,
		loadDataOnInit?: boolean,
		query?: ej.Query | string,
		selectedIndex?: number,
		selectedIndices?: Array<any>,
		showCheckbox?: boolean,
		showRoundedCorner?: boolean,
		template?: string,
		value?: number,
		virtualScrollMode?: ej.VirtualScrollMode | string,
		width?: string,
		targetID?: string,
		actionBegin(e: ActionBeginEventArgs): void,
		actionSuccess(e: ActionSuccessEventArgs): void,
		actionComplete(e: ActionCompleteEventArgs): void,
		actionFailure(e: ActionFailureEventArgs): void,
		actionBeforeSuccess(e: ActionBeforeSuccessEventArgs): void,
		change(e: ChangeEventArgs): void,
		checkChange(e: CheckChangeEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		focusIn(e: FocusInEventArgs): void,
		focusOut(e: FocusOutEventArgs): void,
		itemDrag(e: ItemDragEventArgs): void,
		itemDragStart(e: ItemDragStartEventArgs): void,
		itemDragStop(e: ItemDragStopEventArgs): void,
		itemDrop(e: ItemDropEventArgs): void,
		select(e: SelectEventArgs): void,
		unselect(e: UnselectEventArgs): void
	}

	declare export interface ActionBeginEventArgs {
		
	}

	declare export interface ActionSuccessEventArgs {
		
	}

	declare export interface ActionCompleteEventArgs {
		
	}

	declare export interface ActionFailureEventArgs {
		
	}

	declare export interface ActionBeforeSuccessEventArgs {
		model?: any,
		type?: string,
		actual?: any,
		request?: any,
		cancel?: boolean,
		result?: Array<any>,
		xhr?: any
	}

	declare export interface ChangeEventArgs {
		model?: any,
		type?: string,
		item?: any,
		data?: any,
		index?: number,
		cancel?: boolean,
		isChecked?: boolean,
		isSelected?: boolean,
		isEnabled?: boolean,
		text?: string,
		value?: string
	}

	declare export interface CheckChangeEventArgs {
		model?: any,
		type?: string,
		item?: any,
		data?: any,
		index?: number,
		cancel?: boolean,
		isChecked?: boolean,
		isSelected?: boolean,
		isEnabled?: boolean,
		text?: string,
		value?: string
	}

	declare export interface CreateEventArgs {
		model?: ej.ListBox.Model,
		type?: string,
		cancel?: boolean
	}

	declare export interface DestroyEventArgs {
		model?: any,
		type?: string,
		cancel?: boolean
	}

	declare export interface FocusInEventArgs {
		model?: any,
		type?: string,
		cancel?: boolean
	}

	declare export interface FocusOutEventArgs {
		model?: any,
		type?: string,
		cancel?: boolean
	}

	declare export interface ItemDragEventArgs {
		model?: any,
		type?: string,
		cancel?: boolean,
		data?: any,
		index?: number,
		isChecked?: boolean,
		isSelected?: boolean,
		isEnabled?: boolean,
		text?: string,
		value?: string
	}

	declare export interface ItemDragStartEventArgs {
		model?: any,
		type?: string,
		cancel?: boolean,
		data?: any,
		index?: number,
		isChecked?: boolean,
		isSelected?: boolean,
		isEnabled?: boolean,
		text?: string,
		value?: string
	}

	declare export interface ItemDragStopEventArgs {
		model?: any,
		type?: string,
		cancel?: boolean,
		data?: any,
		index?: number,
		isChecked?: boolean,
		isSelected?: boolean,
		isEnabled?: boolean,
		text?: string,
		value?: string
	}

	declare export interface ItemDropEventArgs {
		model?: any,
		type?: string,
		cancel?: boolean,
		data?: any,
		index?: number,
		isChecked?: boolean,
		isSelected?: boolean,
		isEnabled?: boolean,
		text?: string,
		value?: string
	}

	declare export interface SelectEventArgs {
		model?: any,
		type?: string,
		item?: any,
		data?: any,
		index?: number,
		cancel?: boolean,
		isChecked?: boolean,
		isSelected?: boolean,
		isEnabled?: boolean,
		text?: string,
		value?: string
	}

	declare export interface UnselectEventArgs {
		model?: any,
		type?: string,
		item?: any,
		data?: any,
		index?: number,
		cancel?: boolean,
		isChecked?: boolean,
		isSelected?: boolean,
		isEnabled?: boolean,
		text?: string,
		value?: string
	}

	declare export interface Fields {
		checkBy?: boolean,
		groupBy?: string,
		htmlAttributes?: any,
		id?: string,
		imageUrl?: string,
		imageAttributes?: string,
		selectBy?: boolean,
		spriteCssClass?: string,
		tableName?: string,
		text?: string,
		value?: string
	}

			
}

declare module 'Calculate' {
		declare export interface Model {
		
	}

			
}

declare module 'CheckBox' {
		declare export interface Model {
		checked?: boolean | string[],
		checkState?: ej.CheckState | string,
		cssClass?: string,
		enabled?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		enableTriState?: boolean,
		htmlAttributes?: any,
		id?: string,
		idPrefix?: string,
		name?: string,
		showRoundedCorner?: boolean,
		size?: ej.CheckboxSize | string,
		text?: string,
		validationMessage?: any,
		validationRules?: any,
		value?: string,
		beforeChange(e: BeforeChangeEventArgs): void,
		change(e: ChangeEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void
	}

	declare export interface BeforeChangeEventArgs {
		cancel?: boolean,
		model?: ej.CheckBox.Model,
		type?: string,
		event?: any,
		isChecked?: boolean
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.CheckBox.Model,
		type?: string,
		event?: any,
		isChecked?: boolean,
		checkState?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.CheckBox.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.CheckBox.Model,
		type?: string
	}

			
}

declare module 'ColorPicker' {
		declare export interface Model {
		buttonText?: ButtonText,
		buttonMode?: ej.ButtonMode | string,
		columns?: number | string,
		cssClass?: string,
		custom?: Array<any>,
		displayInline?: boolean,
		enabled?: boolean,
		enableOpacity?: boolean,
		htmlAttributes?: any,
		modelType?: ej.ColorPicker.ModelType | string,
		opacityValue?: number | string,
		palette?: ej.ColorPicker.Palette | string,
		presetType?: ej.ColorPicker.Presets | string,
		showApplyCancel?: boolean,
		showClearButton?: boolean,
		showPreview?: boolean,
		showRecentColors?: boolean,
		showSwitcher?: boolean,
		showTooltip?: boolean,
		toolIcon?: string,
		tooltipText?: TooltipText,
		value?: string,
		change(e: ChangeEventArgs): void,
		close(e: CloseEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		open(e: OpenEventArgs): void,
		select(e: SelectEventArgs): void
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.ColorPicker.Model,
		type?: string,
		value?: string
	}

	declare export interface CloseEventArgs {
		cancel?: boolean,
		model?: ej.ColorPicker.Model,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.ColorPicker.Model,
		type?: string
	}

	declare export interface OpenEventArgs {
		cancel?: boolean,
		model?: ej.ColorPicker.Model,
		type?: string
	}

	declare export interface SelectEventArgs {
		cancel?: boolean,
		model?: ej.ColorPicker.Model,
		type?: string,
		value?: string
	}

	declare export interface ButtonText {
		apply?: string,
		cancel?: string,
		swatches?: string
	}

	declare export interface TooltipText {
		switcher?: string,
		addbutton?: string,
		basic?: string,
		monochrome?: string,
		flatcolors?: string,
		seawolf?: string,
		webcolors?: string,
		sandy?: string,
		pinkshades?: string,
		misty?: string,
		citrus?: string,
		vintage?: string,
		moonlight?: string,
		candycrush?: string,
		currentcolor?: string,
		selectedcolor?: string
	}

			
}

declare module 'FileExplorer' {
		declare export interface Model {
		ajaxAction?: string,
		ajaxDataType?: string,
		ajaxSettings?: any,
		allowDragAndDrop?: boolean,
		allowMultiSelection?: boolean,
		contextMenuSettings?: ContextMenuSettings,
		cssClass?: string,
		enableResize?: boolean,
		enableRTL?: boolean,
		enableThumbnailCompress?: boolean,
		fileTypes?: string,
		filterSettings?: FilterSettings,
		gridSettings?: GridSettings,
		height?: string | number,
		isResponsive?: boolean,
		layout?: ej.FileExplorer.layoutType | string,
		locale?: string,
		maxHeight?: string | number,
		maxWidth?: string | number,
		minHeight?: string | number,
		minWidth?: string | number,
		path?: string,
		selectedFolder?: string,
		selectedItems?: string | Array<any>,
		showCheckbox?: boolean,
		showContextMenu?: boolean,
		showFooter?: boolean,
		showRoundedCorner?: boolean,
		showThumbnail?: boolean,
		showToolbar?: boolean,
		showNavigationPane?: boolean,
		tools?: any,
		toolsList?: Array<any>,
		uploadSettings?: UploadSettings,
		width?: string | number,
		beforeAjaxRequest(e: BeforeAjaxRequestEventArgs): void,
		beforeDownload(e: BeforeDownloadEventArgs): void,
		beforeGetImage(e: BeforeGetImageEventArgs): void,
		beforeOpen(e: BeforeOpenEventArgs): void,
		beforeUpload(e: BeforeUploadEventArgs): void,
		create(e: CreateEventArgs): void,
		copy(e: CopyEventArgs): void,
		createFolder(e: CreateFolderEventArgs): void,
		cut(e: CutEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		dragStart(e: DragStartEventArgs): void,
		drag(e: DragEventArgs): void,
		dragStop(e: DragStopEventArgs): void,
		drop(e: DropEventArgs): void,
		getImage(e: GetImageEventArgs): void,
		layoutChange(e: LayoutChangeEventArgs): void
	}

	declare export interface BeforeAjaxRequestEventArgs {
		cancel?: boolean,
		data?: any,
		model?: ej.FileExplorer.Model,
		type?: string
	}

	declare export interface BeforeDownloadEventArgs {
		cancel?: boolean,
		files?: string[],
		model?: ej.FileExplorer.Model,
		path?: string,
		selectedItems?: any,
		type?: string
	}

	declare export interface BeforeGetImageEventArgs {
		cancel?: boolean,
		canCompress?: boolean,
		model?: ej.FileExplorer.Model,
		size?: any,
		selectedItems?: any,
		type?: string
	}

	declare export interface BeforeOpenEventArgs {
		cancel?: boolean,
		itemType?: string,
		model?: ej.FileExplorer.Model,
		path?: string,
		selectedItems?: any,
		type?: string
	}

	declare export interface BeforeUploadEventArgs {
		cancel?: boolean,
		model?: ej.FileExplorer.Model,
		path?: string,
		selectedItems?: any,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.FileExplorer.Model,
		type?: string
	}

	declare export interface CopyEventArgs {
		cancel?: boolean,
		model?: ej.FileExplorer.Model,
		name?: string[],
		selectedItems?: any,
		sourcePath?: string,
		type?: string
	}

	declare export interface CreateFolderEventArgs {
		cancel?: boolean,
		data?: any,
		model?: ej.FileExplorer.Model,
		selectedItems?: any,
		type?: string
	}

	declare export interface CutEventArgs {
		cancel?: boolean,
		model?: ej.FileExplorer.Model,
		name?: string[],
		selectedItems?: any,
		sourcePath?: string,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.FileExplorer.Model,
		type?: string
	}

	declare export interface DragStartEventArgs {
		cancel?: boolean,
		model?: ej.FileExplorer.Model,
		type?: string,
		target?: any,
		targetPath?: string,
		selectedItems?: any
	}

	declare export interface DragEventArgs {
		cancel?: boolean,
		model?: ej.FileExplorer.Model,
		type?: string,
		target?: any,
		targetElementName?: string,
		targetPath?: string
	}

	declare export interface DragStopEventArgs {
		cancel?: boolean,
		model?: ej.FileExplorer.Model,
		type?: string,
		target?: any,
		targetPath?: string,
		targetElementName?: string,
		dropAction?: string,
		fileInfo?: any
	}

	declare export interface DropEventArgs {
		cancel?: boolean,
		model?: ej.FileExplorer.Model,
		type?: string,
		target?: any,
		targetFolder?: string,
		targetPath?: string,
		fileInfo?: any,
		dropAction?: string
	}

	declare export interface GetImageEventArgs {
		cancel?: boolean,
		path?: string,
		element?: any,
		model?: ej.FileExplorer.Model,
		originalArgs?: any,
		action?: string,
		type?: string
	}

	declare export interface LayoutChangeEventArgs {
		cancel?: boolean,
		isInteraction?: boolean,
		model?: ej.FileExplorer.Model,
		type?: string
	}

	declare export interface ContextMenuSettings {
		items?: any,
		customMenuFields?: Array<any>
	}

	declare export interface FilterSettings {
		allowSearchOnTyping?: boolean,
		caseSensitiveSearch?: boolean,
		filterType?: ej.FilterType | string
	}

	declare export interface GridSettings {
		allowResizing?: boolean,
		allowSorting?: boolean,
		columns?: Array<any>
	}

	declare export interface UploadSettings {
		maxFileSize?: number,
		allowMultipleFile?: boolean,
		autoUpload?: boolean
	}

			
}

declare module 'DatePicker' {
		declare export interface Model {
		allowEdit?: boolean,
		allowDrillDown?: boolean,
		blackoutDates?: any,
		buttonText?: string,
		cssClass?: string,
		dateFormat?: string,
		dayHeaderFormat?: string | ej.DatePicker.Header,
		depthLevel?: string | ej.DatePicker.Level,
		displayInline?: boolean,
		enableAnimation?: boolean,
		enabled?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		enableStrictMode?: boolean,
		fields?: Fields,
		headerFormat?: string,
		height?: string,
		highlightSection?: string | ej.DatePicker.HighlightSection,
		highlightWeekend?: boolean,
		htmlAttributes?: any,
		locale?: string,
		maxDate?: string | Date,
		minDate?: string | Date,
		readOnly?: boolean,
		showDisabledRange?: boolean,
		showFooter?: boolean,
		showOtherMonths?: boolean,
		showPopupButton?: boolean,
		showRoundedCorner?: boolean,
		showTooltip?: boolean,
		specialDates?: any,
		startDay?: number,
		startLevel?: string | ej.DatePicker.Level,
		stepMonths?: number,
		tooltipFormat?: string,
		validationMessage?: any,
		validationRules?: any,
		value?: string | Date,
		watermarkText?: string,
		width?: string,
		beforeClose(e: BeforeCloseEventArgs): void,
		beforeDateCreate(e: BeforeDateCreateEventArgs): void,
		beforeOpen(e: BeforeOpenEventArgs): void,
		change(e: ChangeEventArgs): void,
		close(e: CloseEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		focusIn(e: FocusInEventArgs): void,
		focusOut(e: FocusOutEventArgs): void,
		navigate(e: NavigateEventArgs): void,
		open(e: OpenEventArgs): void,
		select(e: SelectEventArgs): void
	}

	declare export interface BeforeCloseEventArgs {
		cancel?: boolean,
		model?: ej.DatePicker.Model,
		type?: string,
		events?: any,
		element?: HTMLElement
	}

	declare export interface BeforeDateCreateEventArgs {
		cancel?: boolean,
		model?: ej.DatePicker.Model,
		type?: string,
		date?: any,
		element?: HTMLElement,
		value?: string
	}

	declare export interface BeforeOpenEventArgs {
		cancel?: boolean,
		model?: ej.DatePicker.Model,
		type?: string,
		events?: any,
		element?: HTMLElement
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.DatePicker.Model,
		type?: string,
		value?: string,
		prevDate?: string
	}

	declare export interface CloseEventArgs {
		cancel?: boolean,
		date?: any,
		model?: ej.DatePicker.Model,
		type?: string,
		value?: string,
		prevDate?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.DatePicker.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.DatePicker.Model,
		type?: string
	}

	declare export interface FocusInEventArgs {
		cancel?: boolean,
		model?: ej.DatePicker.Model,
		type?: string,
		value?: string
	}

	declare export interface FocusOutEventArgs {
		cancel?: boolean,
		model?: ej.DatePicker.Model,
		type?: string,
		value?: string,
		prevDate?: string
	}

	declare export interface NavigateEventArgs {
		cancel?: boolean,
		date?: any,
		model?: ej.DatePicker.Model,
		navigateFrom?: string,
		navigateTo?: string,
		type?: string,
		value?: string
	}

	declare export interface OpenEventArgs {
		cancel?: boolean,
		date?: any,
		model?: ej.DatePicker.Model,
		type?: string,
		value?: string,
		prevDate?: string
	}

	declare export interface SelectEventArgs {
		cancel?: boolean,
		date?: any,
		model?: ej.DatePicker.Model,
		type?: string,
		value?: string,
		prevDate?: string,
		isSpecialDay?: string
	}

	declare export interface Fields {
		date?: string,
		iconClass?: string,
		tooltip?: string,
		cssClass?: string
	}

			
}

declare module 'DateTimePicker' {
		declare export interface Model {
		buttonText?: ButtonText,
		cssClass?: string,
		dateTimeFormat?: string,
		dayHeaderFormat?: ej.DatePicker.Header | string,
		depthLevel?: ej.DatePicker.Level | string,
		enableAnimation?: boolean,
		enabled?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		enableStrictMode?: boolean,
		headerFormat?: string,
		height?: string | number,
		htmlAttributes?: any,
		interval?: number,
		locale?: string,
		maxDateTime?: string | Date,
		minDateTime?: string | Date,
		popupPosition?: string | ej.popupPosition,
		readOnly?: boolean,
		showOtherMonths?: boolean,
		showPopupButton?: boolean,
		showRoundedCorner?: boolean,
		startDay?: number,
		startLevel?: ej.DatePicker.Level | string,
		stepMonths?: number,
		timeDisplayFormat?: string,
		timeDrillDown?: TimeDrillDown,
		timePopupWidth?: string | number,
		validationMessage?: any,
		validationRules?: any,
		value?: string | Date,
		watermarkText?: string,
		width?: string | number,
		beforeClose(e: BeforeCloseEventArgs): void,
		beforeOpen(e: BeforeOpenEventArgs): void,
		change(e: ChangeEventArgs): void,
		close(e: CloseEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		focusIn(e: FocusInEventArgs): void,
		focusOut(e: FocusOutEventArgs): void,
		open(e: OpenEventArgs): void
	}

	declare export interface BeforeCloseEventArgs {
		cancel?: boolean,
		model?: ej.DateTimePicker.Model,
		type?: string,
		events?: any,
		element?: HTMLElement
	}

	declare export interface BeforeOpenEventArgs {
		cancel?: boolean,
		model?: ej.DateTimePicker.Model,
		type?: string,
		events?: any,
		element?: HTMLElement
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.DateTimePicker.Model,
		type?: string,
		isValidState?: boolean,
		value?: string,
		prevDateTime?: string,
		isInteraction?: boolean
	}

	declare export interface CloseEventArgs {
		cancel?: boolean,
		model?: ej.DateTimePicker.Model,
		type?: string,
		value?: string,
		prevDateTime?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.DateTimePicker.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.DateTimePicker.Model,
		type?: string
	}

	declare export interface FocusInEventArgs {
		cancel?: boolean,
		model?: ej.DateTimePicker.Model,
		type?: string,
		value?: string
	}

	declare export interface FocusOutEventArgs {
		cancel?: boolean,
		model?: ej.DateTimePicker.Model,
		type?: string,
		value?: string
	}

	declare export interface OpenEventArgs {
		cancel?: boolean,
		model?: ej.DateTimePicker.Model,
		type?: string,
		value?: string,
		prevDateTime?: string
	}

	declare export interface ButtonText {
		done?: string,
		timeNow?: string,
		timeTitle?: string,
		today?: string
	}

	declare export interface TimeDrillDown {
		enabled?: boolean,
		interval?: number,
		showMeridian?: boolean,
		autoClose?: boolean
	}

			
}

declare module 'Dialog' {
		declare export interface Model {
		actionButtons?: string[],
		allowDraggable?: boolean,
		allowKeyboardNavigation?: boolean,
		animation?: any,
		closeOnEscape?: boolean,
		containment?: string,
		contentType?: string,
		contentUrl?: string,
		cssClass?: string,
		enableAnimation?: boolean,
		enabled?: boolean,
		enableModal?: boolean,
		enablePersistence?: boolean,
		enableResize?: boolean,
		enableRTL?: boolean,
		faviconCSS?: string,
		height?: string | number,
		isResponsive?: boolean,
		locale?: number,
		maxHeight?: number,
		maxWidth?: number,
		minHeight?: number,
		minWidth?: number,
		position?: any,
		showHeader?: boolean,
		showOnInit?: boolean,
		showRoundedCorner?: boolean,
		target?: string,
		title?: string,
		tooltip?: any,
		width?: string | number,
		zIndex?: number,
		showFooter?: boolean,
		footerTemplateId?: string,
		beforeOpen(e: BeforeOpenEventArgs): void,
		ajaxError(e: AjaxErrorEventArgs): void,
		ajaxSuccess(e: AjaxSuccessEventArgs): void,
		beforeClose(e: BeforeCloseEventArgs): void,
		close(e: CloseEventArgs): void,
		contentLoad(e: ContentLoadEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		drag(e: DragEventArgs): void,
		dragStart(e: DragStartEventArgs): void,
		dragStop(e: DragStopEventArgs): void,
		open(e: OpenEventArgs): void,
		resize(e: ResizeEventArgs): void,
		resizeStart(e: ResizeStartEventArgs): void,
		resizeStop(e: ResizeStopEventArgs): void,
		expand(e: ExpandEventArgs): void,
		collapse(e: CollapseEventArgs): void,
		actionButtonClick(e: ActionButtonClickEventArgs): void
	}

	declare export interface BeforeOpenEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string
	}

	declare export interface AjaxErrorEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string,
		URL?: string,
		responseText?: string,
		status?: number,
		statusText?: string
	}

	declare export interface AjaxSuccessEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string,
		URL?: string,
		data?: string
	}

	declare export interface BeforeCloseEventArgs {
		event?: any,
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string
	}

	declare export interface CloseEventArgs {
		event?: any,
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string
	}

	declare export interface ContentLoadEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string,
		URL?: string,
		contentType?: any
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string
	}

	declare export interface DragEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string,
		event?: any
	}

	declare export interface DragStartEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string,
		event?: any
	}

	declare export interface DragStopEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string,
		event?: any
	}

	declare export interface OpenEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string
	}

	declare export interface ResizeEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string,
		event?: any
	}

	declare export interface ResizeStartEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string,
		event?: any
	}

	declare export interface ResizeStopEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string,
		event?: any
	}

	declare export interface ExpandEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string
	}

	declare export interface CollapseEventArgs {
		cancel?: boolean,
		model?: ej.Dialog.Model,
		type?: string
	}

	declare export interface ActionButtonClickEventArgs {
		cancel?: boolean,
		buttonID?: string,
		type?: string,
		model?: ej.Dialog.Model,
		currentTarget?: string
	}

			
}

declare module 'DropDownList' {
		declare export interface Model {
		allowVirtualScrolling?: boolean,
		cascadeTo?: string,
		caseSensitiveSearch?: boolean,
		cssClass?: string,
		dataSource?: any,
		delimiterChar?: string,
		enableAnimation?: boolean,
		enabled?: boolean,
		enableIncrementalSearch?: boolean,
		enableFilterSearch?: boolean,
		enablePersistence?: boolean,
		enablePopupResize?: boolean,
		enableRTL?: boolean,
		enableSorting?: boolean,
		fields?: Fields,
		filterType?: ej.FilterType | string,
		headerTemplate?: string,
		height?: string | number,
		htmlAttributes?: any,
		itemsCount?: number,
		locale?: string,
		maxPopupHeight?: string | number,
		minPopupHeight?: string | number,
		maxPopupWidth?: string | number,
		minPopupWidth?: string | number,
		multiSelectMode?: ej.MultiSelectMode | string,
		popupHeight?: string | number,
		popupWidth?: string | number,
		query?: any,
		readOnly?: boolean,
		selectedIndex?: number,
		selectedIndices?: Array<any>,
		showCheckbox?: boolean,
		showPopupOnLoad?: boolean,
		showRoundedCorner?: boolean,
		sortOrder?: ej.SortOrder | string,
		targetID?: string,
		template?: string,
		text?: string,
		validationMessage?: any,
		validationRules?: any,
		value?: string,
		watermarkText?: string,
		width?: string | number,
		virtualScrollMode?: ej.VirtualScrollMode | string,
		actionBegin(e: ActionBeginEventArgs): void,
		actionComplete(e: ActionCompleteEventArgs): void,
		actionFailure(e: ActionFailureEventArgs): void,
		actionSuccess(e: ActionSuccessEventArgs): void,
		beforePopupHide(e: BeforePopupHideEventArgs): void,
		beforePopupShown(e: BeforePopupShownEventArgs): void,
		cascade(e: CascadeEventArgs): void,
		change(e: ChangeEventArgs): void,
		checkChange(e: CheckChangeEventArgs): void,
		create(e: CreateEventArgs): void,
		dataBound(e: DataBoundEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		focusIn(e: FocusInEventArgs): void,
		focusOut(e: FocusOutEventArgs): void,
		popupHide(e: PopupHideEventArgs): void,
		popupResize(e: PopupResizeEventArgs): void,
		popupShown(e: PopupShownEventArgs): void,
		popupResizeStart(e: PopupResizeStartEventArgs): void,
		popupResizeStop(e: PopupResizeStopEventArgs): void,
		search(e: SearchEventArgs): void,
		select(e: SelectEventArgs): void
	}

	declare export interface ActionBeginEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ActionCompleteEventArgs {
		cancel?: boolean,
		count?: number,
		model?: any,
		query?: any,
		request?: any,
		type?: string,
		result?: Array<any>,
		xhr?: any
	}

	declare export interface ActionFailureEventArgs {
		cancel?: boolean,
		error?: any,
		model?: any,
		query?: any,
		type?: string
	}

	declare export interface ActionSuccessEventArgs {
		cancel?: boolean,
		count?: number,
		model?: any,
		query?: any,
		request?: any,
		type?: string,
		result?: Array<any>,
		xhr?: any
	}

	declare export interface BeforePopupHideEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		text?: string,
		value?: string
	}

	declare export interface BeforePopupShownEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		text?: string,
		value?: string
	}

	declare export interface CascadeEventArgs {
		cancel?: boolean,
		cascadeModel?: any,
		cascadeValue?: string,
		model?: any,
		requiresDefaultFilter?: boolean,
		type?: string
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		isChecked?: boolean,
		itemId?: string,
		model?: any,
		selectedText?: string,
		type?: string,
		text?: string,
		value?: string
	}

	declare export interface CheckChangeEventArgs {
		cancel?: boolean,
		isChecked?: boolean,
		itemId?: string,
		model?: any,
		selectedText?: string,
		type?: string,
		text?: string,
		value?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface DataBoundEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		data?: any
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface FocusInEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface FocusOutEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface PopupHideEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		text?: string,
		value?: string
	}

	declare export interface PopupResizeEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		event?: any
	}

	declare export interface PopupShownEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		text?: string,
		value?: string
	}

	declare export interface PopupResizeStartEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		event?: any
	}

	declare export interface PopupResizeStopEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		event?: any
	}

	declare export interface SearchEventArgs {
		cancel?: boolean,
		items?: any,
		model?: any,
		selectedText?: string,
		type?: string,
		searchString?: string
	}

	declare export interface SelectEventArgs {
		cancel?: boolean,
		isChecked?: boolean,
		itemId?: string,
		model?: any,
		selectedText?: string,
		type?: string,
		text?: string,
		value?: string
	}

	declare export interface Fields {
		groupBy?: string,
		htmlAttributes?: any,
		id?: string,
		imageAttributes?: string,
		imageUrl?: string,
		selected?: boolean,
		spriteCssClass?: string,
		tableName?: string,
		text?: string,
		value?: string
	}

			
}

declare module 'Tooltip' {
		declare export interface Model {
		allowKeyboardNavigation?: boolean,
		animation?: Animation,
		associate?: ej.Tooltip.Associate | string,
		autoCloseTimeout?: number,
		closeMode?: ej.Tooltip.CloseMode | string,
		collision?: ej.Tooltip.Collision | string,
		containment?: string,
		content?: string,
		cssClass?: string,
		enabled?: boolean,
		enableRTL?: boolean,
		height?: string | number,
		isBalloon?: boolean,
		position?: Position,
		showRoundedCorner?: boolean,
		showShadow?: boolean,
		target?: string,
		title?: string,
		trigger?: ej.Tooltip.Trigger | string,
		width?: string | number,
		beforeClose(e: BeforeCloseEventArgs): void,
		beforeOpen(e: BeforeOpenEventArgs): void,
		click(e: ClickEventArgs): void,
		close(e: CloseEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		hover(e: HoverEventArgs): void,
		open(e: OpenEventArgs): void,
		tracking(e: TrackingEventArgs): void
	}

	declare export interface BeforeCloseEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		content?: string
	}

	declare export interface BeforeOpenEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		content?: string
	}

	declare export interface ClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		event?: any
	}

	declare export interface CloseEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		content?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface HoverEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		event?: any
	}

	declare export interface OpenEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		content?: string
	}

	declare export interface TrackingEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		event?: any
	}

	declare export interface Animation {
		effect?: ej.Tooltip.effect | string,
		speed?: number
	}

	declare export interface PositionTarget {
		horizontal?: string | number,
		vertical?: string | number
	}

	declare export interface PositionStem {
		horizontal?: string,
		vertical?: string
	}

	declare export interface Position {
		target?: PositionTarget,
		stem?: PositionStem
	}

			
}

declare module 'Editor' {
		declare export interface Model {
		cssClass?: string,
		decimalPlaces?: number,
		enabled?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		enableStrictMode?: boolean,
		groupSize?: string,
		groupSeparator?: string,
		height?: number | string,
		htmlAttributes?: any,
		incrementStep?: number,
		locale?: string,
		maxValue?: number,
		minValue?: number,
		name?: string,
		negativePattern?: string,
		positivePattern?: string,
		readOnly?: boolean,
		showRoundedCorner?: boolean,
		showSpinButton?: boolean,
		validateOnType?: boolean,
		validationMessage?: any,
		validationRules?: any,
		value?: number | string,
		watermarkText?: string,
		width?: number | string,
		change(e: ChangeEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		focusIn(e: FocusInEventArgs): void,
		focusOut(e: FocusOutEventArgs): void
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.Editor.Model,
		type?: string,
		value?: number,
		isInteraction?: boolean
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Editor.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Editor.Model,
		type?: string
	}

	declare export interface FocusInEventArgs {
		cancel?: boolean,
		model?: ej.Editor.Model,
		type?: string,
		value?: number
	}

	declare export interface FocusOutEventArgs {
		cancel?: boolean,
		model?: ej.Editor.Model,
		type?: string,
		value?: number
	}

			
}

declare module 'ListView' {
		declare export interface Model {
		cssClass?: string,
		dataSource?: Array<any>,
		enableAjax?: boolean,
		enableCache?: boolean,
		enableCheckMark?: boolean,
		enableFiltering?: boolean,
		enableGroupList?: boolean,
		enablePersistence?: boolean,
		fieldSettings?: any,
		headerBackButtonText?: string,
		headerTitle?: string,
		height?: string | number,
		persistSelection?: boolean,
		preventSelection?: boolean,
		query?: any,
		renderTemplate?: boolean,
		selectedItemIndex?: number,
		showHeader?: boolean,
		templateId?: string,
		width?: string | number,
		ajaxBeforeLoad(e: AjaxBeforeLoadEventArgs): void,
		ajaxComplete(e: AjaxCompleteEventArgs): void,
		ajaxError(e: AjaxErrorEventArgs): void,
		ajaxSuccess(e: AjaxSuccessEventArgs): void,
		load(e: LoadEventArgs): void,
		loadComplete(e: LoadCompleteEventArgs): void,
		mouseDown(e: MouseDownEventArgs): void,
		mouseUP(e: MouseUPEventArgs): void
	}

	declare export interface AjaxBeforeLoadEventArgs {
		cancel?: boolean,
		type?: string,
		model?: any,
		ajaxData?: any
	}

	declare export interface AjaxCompleteEventArgs {
		cancel?: boolean,
		type?: string,
		model?: any
	}

	declare export interface AjaxErrorEventArgs {
		cancel?: boolean,
		type?: string,
		model?: any,
		errorThrown?: any,
		textStatus?: any,
		item?: any,
		text?: string,
		index?: number
	}

	declare export interface AjaxSuccessEventArgs {
		cancel?: boolean,
		type?: string,
		model?: any,
		content?: string,
		item?: any,
		text?: string,
		index?: number,
		URL?: string
	}

	declare export interface LoadEventArgs {
		cancel?: boolean,
		type?: string,
		model?: any
	}

	declare export interface LoadCompleteEventArgs {
		cancel?: boolean,
		type?: string,
		model?: any
	}

	declare export interface MouseDownEventArgs {
		cancel?: boolean,
		type?: string,
		model?: any,
		hasChild?: boolean,
		item?: string,
		text?: string,
		index?: number,
		isChecked?: boolean,
		checkedItems?: number,
		checkedItemsText?: string
	}

	declare export interface MouseUPEventArgs {
		cancel?: boolean,
		type?: string,
		model?: any,
		hasChild?: boolean,
		item?: string,
		text?: string,
		index?: number,
		isChecked?: boolean,
		checkedItems?: number,
		checkedItemsText?: string
	}

			
}

declare module 'MaskEdit' {
		declare export interface Model {
		cssClass?: string,
		customCharacter?: string,
		enabled?: boolean,
		enablePersistence?: boolean,
		height?: string,
		hidePromptOnLeave?: boolean,
		htmlAttributes?: any,
		inputMode?: ej.InputMode | string,
		maskFormat?: string,
		name?: string,
		readOnly?: boolean,
		showError?: boolean,
		showPromptChar?: boolean,
		showRoundedCorner?: boolean,
		textAlign?: ej.TextAlign | string,
		validationMessage?: any,
		validationRules?: any,
		value?: string,
		watermarkText?: string,
		width?: string,
		change(e: ChangeEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		focusIn(e: FocusInEventArgs): void,
		focusOut(e: FocusOutEventArgs): void,
		keydown(e: KeydownEventArgs): void,
		keyPress(e: KeyPressEventArgs): void,
		keyup(e: KeyupEventArgs): void,
		mouseout(e: MouseoutEventArgs): void,
		mouseover(e: MouseoverEventArgs): void
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.MaskEdit.Model,
		type?: string,
		value?: number,
		unmaskedValue?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.MaskEdit.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.MaskEdit.Model,
		type?: string
	}

	declare export interface FocusInEventArgs {
		cancel?: boolean,
		model?: ej.MaskEdit.Model,
		type?: string,
		value?: number,
		unmaskedValue?: string
	}

	declare export interface FocusOutEventArgs {
		cancel?: boolean,
		model?: ej.MaskEdit.Model,
		type?: string,
		value?: number,
		unmaskedValue?: string
	}

	declare export interface KeydownEventArgs {
		cancel?: boolean,
		model?: ej.MaskEdit.Model,
		type?: string,
		value?: number,
		unmaskedValue?: string
	}

	declare export interface KeyPressEventArgs {
		cancel?: boolean,
		model?: ej.MaskEdit.Model,
		type?: string,
		value?: number,
		unmaskedValue?: string
	}

	declare export interface KeyupEventArgs {
		cancel?: boolean,
		model?: ej.MaskEdit.Model,
		type?: string,
		value?: number,
		unmaskedValue?: string
	}

	declare export interface MouseoutEventArgs {
		cancel?: boolean,
		model?: ej.MaskEdit.Model,
		type?: string,
		value?: number,
		unmaskedValue?: string
	}

	declare export interface MouseoverEventArgs {
		cancel?: boolean,
		model?: ej.MaskEdit.Model,
		type?: string,
		value?: number,
		unmaskedValue?: string
	}

			
}

declare module 'Menu' {
		declare export interface Model {
		animationType?: ej.AnimationType | string,
		contextMenuTarget?: string,
		cssClass?: string,
		enableAnimation?: boolean,
		enableCenterAlign?: boolean,
		enabled?: boolean,
		enableRTL?: boolean,
		enableSeparator?: boolean,
		excludeTarget?: string,
		fields?: Fields,
		height?: string | number,
		htmlAttributes?: any,
		isResponsive?: boolean,
		menuType?: string | ej.MenuType,
		openOnClick?: boolean,
		orientation?: ej.Orientation | string,
		showRootLevelArrows?: boolean,
		showSubLevelArrows?: boolean,
		subMenuDirection?: string | ej.Direction,
		titleText?: string,
		width?: string | number,
		beforeOpen(e: BeforeOpenEventArgs): void,
		click(e: ClickEventArgs): void,
		close(e: CloseEventArgs): void,
		open(e: OpenEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		keydown(e: KeydownEventArgs): void,
		mouseout(e: MouseoutEventArgs): void,
		mouseover(e: MouseoverEventArgs): void
	}

	declare export interface BeforeOpenEventArgs {
		cancel?: boolean,
		model?: ej.Menu.Model,
		type?: string,
		target?: any
	}

	declare export interface ClickEventArgs {
		model?: ej.Menu.Model,
		type?: string,
		text?: string,
		element?: any,
		event?: any,
		selectedItem?: number
	}

	declare export interface CloseEventArgs {
		model?: ej.Menu.Model,
		type?: string,
		target?: any
	}

	declare export interface OpenEventArgs {
		model?: ej.Menu.Model,
		type?: string,
		target?: any
	}

	declare export interface CreateEventArgs {
		model?: ej.Menu.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		model?: ej.Menu.Model,
		type?: string
	}

	declare export interface KeydownEventArgs {
		model?: ej.Menu.Model,
		type?: string,
		menuText?: string,
		element?: any,
		event?: any
	}

	declare export interface MouseoutEventArgs {
		model?: ej.Menu.Model,
		type?: string,
		text?: string,
		element?: any,
		event?: any
	}

	declare export interface MouseoverEventArgs {
		model?: ej.Menu.Model,
		type?: string,
		text?: string,
		element?: any,
		event?: any
	}

	declare export interface Fields {
		child?: any,
		dataSource?: any,
		htmlAttribute?: string,
		id?: string,
		imageAttribute?: string,
		imageUrl?: string,
		linkAttribute?: string,
		parentId?: string,
		query?: any,
		spriteCssClass?: string,
		tableName?: string,
		text?: string,
		url?: string
	}

			
}

declare module 'Pager' {
		declare export interface Model {
		customText?: string,
		currentPage?: number,
		enableExternalMessage?: boolean,
		enableQueryString?: boolean,
		enableRTL?: boolean,
		externalMessage?: string,
		locale?: string,
		pageCount?: number,
		pageSize?: number,
		totalPages?: number,
		totalRecordsCount?: number,
		showPageInfo?: boolean,
		click(e: ClickEventArgs): void
	}

	declare export interface ClickEventArgs {
		cancel?: boolean,
		currentPage?: number,
		model?: any,
		type?: string,
		event?: any
	}

			
}

declare module 'ProgressBar' {
		declare export interface Model {
		cssClass?: string,
		enabled?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		height?: number | string,
		htmlAttributes?: any,
		maxValue?: number,
		minValue?: number,
		percentage?: number,
		showRoundedCorner?: boolean,
		text?: string,
		value?: number,
		width?: number | string,
		change(e: ChangeEventArgs): void,
		complete(e: CompleteEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		start(e: StartEventArgs): void
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.ProgressBar.Model,
		percentage?: any,
		type?: string,
		value?: string
	}

	declare export interface CompleteEventArgs {
		cancel?: boolean,
		model?: ej.ProgressBar.Model,
		percentage?: any,
		type?: string,
		value?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.ProgressBar.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.ProgressBar.Model,
		type?: string
	}

	declare export interface StartEventArgs {
		cancel?: boolean,
		model?: ej.ProgressBar.Model,
		percentage?: any,
		type?: string,
		value?: string
	}

			
}

declare module 'RadioButton' {
		declare export interface Model {
		checked?: boolean,
		cssClass?: string,
		enabled?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		htmlAttributes?: any,
		id?: string,
		idPrefix?: string,
		name?: string,
		size?: ej.RadioButtonSize | string,
		text?: string,
		validationMessage?: any,
		validationRules?: any,
		value?: string,
		beforeChange(e: BeforeChangeEventArgs): void,
		change(e: ChangeEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void
	}

	declare export interface BeforeChangeEventArgs {
		cancel?: boolean,
		model?: ej.RadioButton.Model,
		type?: string,
		isChecked?: boolean,
		isInteraction?: boolean
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.RadioButton.Model,
		type?: string,
		isChecked?: boolean,
		isInteraction?: boolean
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.RadioButton.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.RadioButton.Model,
		type?: string
	}

			
}

declare module 'Rating' {
		declare export interface Model {
		allowReset?: boolean,
		cssClass?: string,
		enabled?: boolean,
		enablePersistence?: boolean,
		height?: string,
		htmlAttributes?: any,
		incrementStep?: number,
		maxValue?: number,
		minValue?: number,
		orientation?: ej.Orientation | string,
		precision?: ej.Rating.Precision | string,
		readOnly?: boolean,
		shapeHeight?: number,
		shapeWidth?: number,
		showTooltip?: boolean,
		value?: number,
		width?: string,
		change(e: ChangeEventArgs): void,
		click(e: ClickEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		mouseout(e: MouseoutEventArgs): void,
		mouseover(e: MouseoverEventArgs): void
	}

	declare export interface ChangeEventArgs {
		value?: number,
		cancel?: boolean,
		model?: ej.Rating.Model,
		type?: string,
		event?: any
	}

	declare export interface ClickEventArgs {
		value?: number,
		cancel?: boolean,
		model?: ej.Rating.Model,
		type?: string,
		event?: any
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Rating.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Rating.Model,
		type?: string
	}

	declare export interface MouseoutEventArgs {
		value?: number,
		cancel?: boolean,
		model?: ej.Rating.Model,
		type?: string,
		event?: any
	}

	declare export interface MouseoverEventArgs {
		value?: number,
		cancel?: boolean,
		model?: ej.Rating.Model,
		type?: string,
		event?: any,
		index?: any
	}

			
}

declare module 'Ribbon' {
		declare export interface Model {
		allowResizing?: boolean,
		isResponsive?: boolean,
		isMobileOnly?: boolean,
		buttonDefaults?: any,
		showQAT?: boolean,
		collapsePinSettings?: CollapsePinSettings,
		enableRTL?: any,
		expandPinSettings?: ExpandPinSettings,
		applicationTab?: ApplicationTab,
		contextualTabs?: Array<ContextualTab>,
		disabledItemIndex?: Array<any>,
		enabledItemIndex?: Array<any>,
		selectedItemIndex?: number,
		tabs?: Array<Tab>,
		locale?: string,
		width?: string | number,
		beforeTabRemove(e: BeforeTabRemoveEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		groupClick(e: GroupClickEventArgs): void,
		groupExpand(e: GroupExpandEventArgs): void,
		galleryItemClick(e: GalleryItemClickEventArgs): void,
		backstageItemClick(e: BackstageItemClickEventArgs): void,
		collapse(e: CollapseEventArgs): void,
		expand(e: ExpandEventArgs): void,
		load(e: LoadEventArgs): void,
		tabAdd(e: TabAddEventArgs): void,
		tabClick(e: TabClickEventArgs): void,
		tabCreate(e: TabCreateEventArgs): void,
		tabRemove(e: TabRemoveEventArgs): void,
		tabSelect(e: TabSelectEventArgs): void,
		toggleButtonClick(e: ToggleButtonClickEventArgs): void,
		qatMenuItemClick(e: QatMenuItemClickEventArgs): void
	}

	declare export interface BeforeTabRemoveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		index?: number
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		deleteIndex?: number
	}

	declare export interface GroupClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		target?: number
	}

	declare export interface GroupExpandEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		target?: number
	}

	declare export interface GalleryItemClickEventArgs {
		cancel?: boolean,
		model?: any,
		galleryModel?: any,
		type?: string,
		target?: number
	}

	declare export interface BackstageItemClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		target?: number,
		id?: string,
		text?: string
	}

	declare export interface CollapseEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ExpandEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface LoadEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface TabAddEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		tabHeader?: any,
		tabContent?: any
	}

	declare export interface TabClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		prevActiveHeader?: any,
		prevActiveIndex?: number,
		activeHeader?: any,
		activeIndex?: number
	}

	declare export interface TabCreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		deleteIndex?: number
	}

	declare export interface TabRemoveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		removedIndex?: number
	}

	declare export interface TabSelectEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		prevActiveHeader?: any,
		prevActiveIndex?: number,
		activeHeader?: any,
		activeIndex?: number
	}

	declare export interface ToggleButtonClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		target?: number
	}

	declare export interface QatMenuItemClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		text?: string
	}

	declare export interface CollapsePinSettings {
		toolTip?: string,
		customToolTip?: any
	}

	declare export interface ExpandPinSettings {
		toolTip?: string,
		customToolTip?: any
	}

	declare export interface ApplicationTabBackstageSettingsPage {
		id?: string,
		text?: string,
		itemType?: ej.Ribbon.ItemType | string,
		contentID?: string,
		enableSeparator?: boolean
	}

	declare export interface ApplicationTabBackstageSettings {
		text?: string,
		height?: string | number,
		width?: string | number,
		pages?: Array<ApplicationTabBackstageSettingsPage>,
		headerWidth?: string | number
	}

	declare export interface ApplicationTab {
		backstageSettings?: ApplicationTabBackstageSettings,
		menuItemID?: string,
		menuSettings?: any,
		type?: ej.Ribbon.ApplicationTabType | string
	}

	declare export interface ContextualTab {
		backgroundColor?: string,
		borderColor?: string,
		tabs?: Array<any>
	}

	declare export interface TabsGroupsContentDefaults {
		height?: string | number,
		width?: string | number,
		type?: string,
		isBig?: boolean
	}

	declare export interface TabsGroupsContentGroupsCustomGalleryItem {
		buttonSettings?: any,
		customItemType?: ej.Ribbon.CustomItemType | string,
		customToolTip?: any,
		menuId?: string,
		menuSettings?: any,
		text?: string,
		toolTip?: string
	}

	declare export interface TabsGroupsContentGroupsCustomToolTip {
		content?: string,
		prefixIcon?: string,
		title?: string
	}

	declare export interface TabsGroupsContentGroupsGalleryItem {
		buttonSettings?: any,
		customToolTip?: any,
		text?: string,
		toolTip?: string
	}

	declare export interface TabsGroupsContentGroup {
		buttonSettings?: any,
		columns?: number,
		contentID?: string,
		cssClass?: string,
		customGalleryItems?: Array<TabsGroupsContentGroupsCustomGalleryItem>,
		customToolTip?: TabsGroupsContentGroupsCustomToolTip,
		dropdownSettings?: any,
		enableSeparator?: boolean,
		expandedColumns?: number,
		galleryItems?: Array<TabsGroupsContentGroupsGalleryItem>,
		id?: string,
		isBig?: boolean,
		itemHeight?: string | number,
		itemWidth?: string | number,
		splitButtonSettings?: any,
		text?: string,
		toggleButtonSettings?: any,
		toolTip?: string,
		quickAccessMode?: ej.Ribbon.QuickAccessMode | string,
		type?: ej.Ribbon.Type | string
	}

	declare export interface TabsGroupsContent {
		defaults?: TabsGroupsContentDefaults,
		groups?: Array<TabsGroupsContentGroup>
	}

	declare export interface TabsGroupsGroupExpanderSettings {
		toolTip?: string,
		customToolTip?: any
	}

	declare export interface TabsGroup {
		alignType?: ej.Ribbon.AlignType | string,
		content?: Array<TabsGroupsContent>,
		contentID?: string,
		customContent?: string,
		enableGroupExpander?: boolean,
		groupExpanderSettings?: TabsGroupsGroupExpanderSettings,
		text?: string,
		type?: string
	}

	declare export interface Tab {
		groups?: Array<TabsGroup>,
		id?: string,
		text?: string
	}

			
}

declare module 'Kanban' {
		declare export interface KanbanSelection {
		clear(): void
	}

	declare export interface KanbanSwimlane {
		expandAll(): void,
		collapseAll(): void,
		toggle($div: any): void
	}

	declare export interface KanbanFilter {
		clearSearch(): void,
		searchCards(searchString: string): void,
		clearFilter(): void,
		filterCards(): void
	}

	declare export interface KanbanEdit {
		addCard(primaryKey: string, card: Array<any>): void,
		cancelEdit(): void,
		deleteCard(Key: string | number): void,
		endEdit(): void,
		startEdit($div: any): void,
		setValidationToField(name: string, rules: any): void
	}

	declare export interface Model {
		allowDragAndDrop?: boolean,
		allowTitle?: boolean,
		swimlaneSettings?: SwimlaneSettings,
		allowToggleColumn?: boolean,
		allowSearching?: boolean,
		allowFiltering?: boolean,
		allowSelection?: boolean,
		allowHover?: boolean,
		allowKeyboardNavigation?: boolean,
		allowScrolling?: boolean,
		allowPrinting?: boolean,
		contextMenuSettings?: ContextMenuSettings,
		columns?: Array<Column>,
		cardSettings?: CardSettings,
		customToolbarItems?: Array<CustomToolbarItem>,
		cssClass?: string,
		dataSource?: any,
		enableTouch?: boolean,
		enableRTL?: boolean,
		enableTotalCount?: boolean,
		editSettings?: EditSettings,
		fields?: Fields,
		keyField?: string,
		isResponsive?: boolean,
		minWidth?: number,
		filterSettings?: Array<FilterSetting>,
		query?: any,
		keySettings?: any,
		scrollSettings?: ScrollSettings,
		searchSettings?: SearchSettings,
		selectionType?: ej.Kanban.SelectionType | string,
		stackedHeaderRows?: Array<StackedHeaderRow>,
		tooltipSettings?: TooltipSettings,
		workflows?: Array<Workflow>,
		locale?: string,
		actionBegin(e: ActionBeginEventArgs): void,
		actionComplete(e: ActionCompleteEventArgs): void,
		actionFailure(e: ActionFailureEventArgs): void,
		beginEdit(e: BeginEditEventArgs): void,
		beginAdd(e: BeginAddEventArgs): void,
		beforeCardSelect(e: BeforeCardSelectEventArgs): void,
		cardClick(e: CardClickEventArgs): void,
		cardDrag(e: CardDragEventArgs): void,
		cardDragStart(e: CardDragStartEventArgs): void,
		cardDragStop(e: CardDragStopEventArgs): void,
		cardDrop(e: CardDropEventArgs): void,
		cardSelect(e: CardSelectEventArgs): void,
		cardDoubleClick(e: CardDoubleClickEventArgs): void
	}

	declare export interface ActionBeginEventArgs {
		model?: any,
		type?: string,
		cancel?: boolean,
		originalEventType?: string,
		primaryKeyValue?: string,
		requestType?: string,
		rowIndex?: number,
		data?: any,
		currentFilteringobject?: any,
		filterCollection?: any
	}

	declare export interface ActionCompleteEventArgs {
		cancel?: boolean,
		model?: any,
		requestType?: string,
		type?: string,
		originalEventType?: string,
		primaryKey?: string,
		primaryKeyValue?: string,
		target?: any,
		data?: any,
		selectedRow?: number,
		currentFilteringColumn?: string,
		filterCollection?: any
	}

	declare export interface ActionFailureEventArgs {
		cancel?: boolean,
		model?: any,
		requestType?: string,
		type?: string,
		error?: any,
		originalEventType?: string,
		primaryKeyValue?: string,
		target?: any,
		data?: any,
		currentFilteringColumn?: string,
		filterCollection?: any
	}

	declare export interface BeginEditEventArgs {
		cancel?: boolean,
		model?: any,
		primaryKeyValue?: string,
		data?: any,
		type?: string
	}

	declare export interface BeginAddEventArgs {
		model?: any,
		primaryKeyValue?: string,
		data?: any,
		type?: string
	}

	declare export interface BeforeCardSelectEventArgs {
		cancel?: boolean,
		cellIndex?: number,
		cardIndex?: number,
		currentCell?: any,
		previousCard?: any,
		previousRowcellindex?: Array<any>,
		Target?: any,
		model?: any,
		data?: any,
		type?: string
	}

	declare export interface CardClickEventArgs {
		cancel?: boolean,
		data?: any,
		currentCard?: string,
		target?: any,
		model?: any,
		columnName?: string,
		type?: string
	}

	declare export interface CardDragEventArgs {
		cancel?: boolean,
		data?: any,
		dragtarget?: any,
		draggedElement?: any,
		model?: any,
		type?: string
	}

	declare export interface CardDragStartEventArgs {
		cancel?: boolean,
		data?: any,
		draggedElement?: any,
		model?: any,
		dragtarget?: any,
		type?: string
	}

	declare export interface CardDragStopEventArgs {
		cancel?: boolean,
		draggedElement?: any,
		model?: any,
		droptarget?: any,
		data?: any,
		type?: string
	}

	declare export interface CardDropEventArgs {
		cancel?: boolean,
		draggedElement?: any,
		draggedParent?: any,
		data?: any,
		model?: any,
		target?: any,
		type?: string
	}

	declare export interface CardSelectEventArgs {
		cellIndex?: number,
		cardIndex?: number,
		currentCell?: any,
		cancel?: boolean,
		previousCard?: any,
		previousRowcellindex?: Array<any>,
		currentTarget?: any,
		model?: any,
		data?: any,
		type?: string
	}

	declare export interface CardDoubleClickEventArgs {
		cancel?: boolean,
		data?: any,
		type?: string
	}

	declare export interface SwimlaneSettings {
		showCount?: boolean,
		allowDragAndDrop?: boolean
	}

	declare export interface ContextMenuSettingsCustomMenuItem {
		target?: ej.Kanban.Target | string,
		text?: string,
		template?: string
	}

	declare export interface ContextMenuSettings {
		enable?: boolean,
		disableDefaultItems?: Array<any>,
		menuItems?: Array<any>,
		customMenuItems?: Array<ContextMenuSettingsCustomMenuItem>
	}

	declare export interface ColumnsConstraints {
		type?: string,
		min?: number,
		max?: number
	}

	declare export interface Column {
		headerText?: string,
		totalCount?: string,
		key?: string | number,
		allowDrop?: boolean,
		allowDrag?: boolean,
		isCollapsed?: boolean,
		constraints?: ColumnsConstraints,
		headerTemplate?: string,
		width?: string | number,
		visible?: boolean,
		showAddButton?: boolean
	}

	declare export interface CardSettings {
		template?: string,
		colorMapping?: any
	}

	declare export interface CustomToolbarItem {
		template?: string
	}

	declare export interface EditSettingsEditItem {
		field?: string,
		editType?: ej.Kanban.EditingType | string,
		validationRules?: any,
		editParams?: any,
		defaultValue?: string | number
	}

	declare export interface EditSettings {
		allowEditing?: boolean,
		allowAdding?: boolean,
		dialogTemplate?: string,
		editMode?: ej.Kanban.EditMode | string,
		editItems?: Array<EditSettingsEditItem>,
		externalFormTemplate?: string,
		formPosition?: ej.Kanban.FormPosition | string
	}

	declare export interface Fields {
		primaryKey?: string,
		swimlaneKey?: string,
		priority?: string,
		content?: string,
		tag?: string,
		title?: string,
		color?: string,
		imageUrl?: string
	}

	declare export interface FilterSetting {
		text?: string,
		query?: any,
		description?: string
	}

	declare export interface ScrollSettings {
		height?: string | number,
		width?: string | number,
		allowFreezeSwimlane?: boolean
	}

	declare export interface SearchSettings {
		fields?: Array<any>,
		key?: string,
		operator?: string,
		ignoreCase?: boolean
	}

	declare export interface StackedHeaderRowsStackedHeaderColumn {
		headerText?: string,
		column?: string
	}

	declare export interface StackedHeaderRow {
		stackedHeaderColumns?: Array<StackedHeaderRowsStackedHeaderColumn>
	}

	declare export interface TooltipSettings {
		enable?: boolean,
		template?: string
	}

	declare export interface Workflow {
		key?: string | number,
		allowedTransitions?: string
	}

			
}

declare module 'Rotator' {
		declare export interface Model {
		allowKeyboardNavigation?: boolean,
		animationSpeed?: string | number,
		animationType?: string,
		circularMode?: boolean,
		cssClass?: string,
		dataSource?: any,
		delay?: number,
		displayItemsCount?: string | number,
		enableAutoPlay?: boolean,
		enabled?: boolean,
		enableRTL?: boolean,
		fields?: Fields,
		frameSpace?: string | number,
		isResponsive?: boolean,
		navigateSteps?: string | number,
		orientation?: ej.Orientation | string,
		pagerPosition?: string | ej.Rotator.PagerPosition,
		query?: string,
		showCaption?: boolean,
		showNavigateButton?: boolean,
		showPager?: boolean,
		showPlayButton?: boolean,
		showThumbnail?: boolean,
		slideHeight?: string | number,
		slideWidth?: string | number,
		startIndex?: string | number,
		stopOnHover?: boolean,
		template?: string,
		thumbnailSourceID?: any,
		change(e: ChangeEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		pagerClick(e: PagerClickEventArgs): void,
		start(e: StartEventArgs): void,
		stop(e: StopEventArgs): void,
		thumbItemClick(e: ThumbItemClickEventArgs): void
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.Rotator.Model,
		type?: string,
		itemId?: string,
		activeItemIndex?: number
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Rotator.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Rotator.Model,
		type?: string
	}

	declare export interface PagerClickEventArgs {
		cancel?: boolean,
		model?: ej.Rotator.Model,
		type?: string,
		itemId?: string,
		activeItemIndex?: number
	}

	declare export interface StartEventArgs {
		cancel?: boolean,
		model?: ej.Rotator.Model,
		type?: string,
		itemId?: string,
		activeItemIndex?: number
	}

	declare export interface StopEventArgs {
		cancel?: boolean,
		model?: ej.Rotator.Model,
		type?: string,
		itemId?: string,
		activeItemIndex?: number
	}

	declare export interface ThumbItemClickEventArgs {
		cancel?: boolean,
		model?: ej.Rotator.Model,
		type?: string,
		itemId?: string,
		activeItemIndex?: number
	}

	declare export interface Fields {
		linkAttribute?: string,
		targetAttribute?: string,
		text?: string,
		thumbnailText?: string,
		thumbnailUrl?: string,
		url?: string
	}

			
}

declare module 'RTE' {
		declare export interface Model {
		allowEditing?: boolean,
		allowKeyboardNavigation?: boolean,
		autoFocus?: boolean,
		autoHeight?: boolean,
		colorCode?: any,
		colorPaletteColumns?: number,
		colorPaletteRows?: number,
		cssClass?: string,
		enabled?: boolean,
		enableHtmlEncode?: boolean,
		enablePersistence?: boolean,
		enableResize?: boolean,
		enableRTL?: boolean,
		enableXHTML?: boolean,
		enableTabKeyNavigation?: boolean,
		externalCSS?: string,
		fileBrowser?: FileBrowser,
		fontName?: any,
		fontSize?: any,
		format?: string,
		height?: string | number,
		htmlAttributes?: any,
		iframeAttributes?: any,
		imageBrowser?: ImageBrowser,
		isResponsive?: boolean,
		locale?: string,
		maxHeight?: string | number,
		maxLength?: number,
		maxWidth?: string | number,
		minHeight?: string | number,
		minWidth?: string | number,
		name?: string,
		showClearAll?: boolean,
		showClearFormat?: boolean,
		showCustomTable?: boolean,
		showContextMenu?: boolean,
		showDimensions?: boolean,
		showFontOption?: boolean,
		showFooter?: boolean,
		showHtmlSource?: boolean,
		showHtmlTagInfo?: boolean,
		showToolbar?: boolean,
		showCharCount?: boolean,
		showRoundedCorner?: boolean,
		showWordCount?: boolean,
		tableColumns?: number,
		tableRows?: number,
		tools?: Tools,
		toolsList?: Array<any>,
		tooltipSettings?: any,
		undoStackLimit?: number,
		value?: string,
		validationRules?: any,
		validationMessage?: any,
		width?: string | number,
		zoomStep?: string | number,
		change(e: ChangeEventArgs): void,
		create(e: CreateEventArgs): void,
		contextMenuClick(e: ContextMenuClickEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		execute(e: ExecuteEventArgs): void,
		keydown(e: KeydownEventArgs): void,
		keyup(e: KeyupEventArgs): void,
		preRender(e: PreRenderEventArgs): void,
		select(e: SelectEventArgs): void
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ContextMenuClickEventArgs {
		text?: string,
		element?: any,
		selectedItem?: number
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ExecuteEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface KeydownEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface KeyupEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface PreRenderEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface SelectEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		event?: any
	}

	declare export interface FileBrowser {
		ajaxAction?: string,
		extensionAllow?: string,
		filePath?: string
	}

	declare export interface ImageBrowser {
		ajaxAction?: string,
		extensionAllow?: string,
		filePath?: string
	}

	declare export interface ToolsCustomOrderedList {
		name?: string,
		tooltip?: string,
		css?: string,
		text?: string,
		listStyle?: string,
		listImage?: string
	}

	declare export interface ToolsCustomUnorderedList {
		name?: string,
		tooltip?: string,
		css?: string,
		text?: string,
		listStyle?: string,
		listImage?: string
	}

	declare export interface Tools {
		alignment?: any,
		casing?: Array<any>,
		clear?: Array<any>,
		clipboard?: Array<any>,
		edit?: Array<any>,
		doAction?: Array<any>,
		effects?: Array<any>,
		font?: Array<any>,
		formatStyle?: Array<any>,
		images?: Array<any>,
		indenting?: Array<any>,
		links?: Array<any>,
		lists?: Array<any>,
		media?: Array<any>,
		style?: Array<any>,
		tables?: Array<any>,
		view?: Array<any>,
		print?: Array<any>,
		customOrderedList?: Array<ToolsCustomOrderedList>,
		customUnorderedList?: Array<ToolsCustomUnorderedList>
	}

			
}

declare module 'Slider' {
		declare export interface Model {
		allowMouseWheel?: boolean,
		animationSpeed?: number,
		cssClass?: string,
		enableAnimation?: boolean,
		enabled?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		height?: string,
		htmlAttributes?: any,
		incrementStep?: number,
		largeStep?: number,
		maxValue?: number,
		minValue?: number,
		orientation?: ej.Orientation | string,
		readOnly?: boolean,
		showRoundedCorner?: boolean,
		showScale?: boolean,
		showSmallTicks?: boolean,
		showTooltip?: boolean,
		sliderType?: ej.slider.sliderType | string,
		smallStep?: number,
		value?: number,
		values?: Array<any>,
		width?: string,
		change(e: ChangeEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		slide(e: SlideEventArgs): void,
		start(e: StartEventArgs): void,
		stop(e: StopEventArgs): void,
		tooltipChange(e: TooltipChangeEventArgs): void
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		sliderIndex?: number,
		id?: string,
		model?: ej.Slider.Model,
		type?: string,
		value?: number,
		isInteraction?: boolean
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Slider.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Slider.Model,
		type?: string
	}

	declare export interface SlideEventArgs {
		cancel?: boolean,
		sliderIndex?: number,
		id?: string,
		model?: ej.Slider.Model,
		type?: string,
		value?: number
	}

	declare export interface StartEventArgs {
		cancel?: boolean,
		sliderIndex?: number,
		id?: string,
		model?: ej.Slider.Model,
		type?: string,
		value?: number
	}

	declare export interface StopEventArgs {
		cancel?: boolean,
		sliderIndex?: number,
		id?: string,
		model?: ej.Slider.Model,
		type?: string,
		value?: number
	}

	declare export interface TooltipChangeEventArgs {
		
	}

			
}

declare module 'SplitButton' {
		declare export interface Model {
		arrowPosition?: string | ej.ArrowPosition,
		buttonMode?: string | ej.ButtonMode,
		contentType?: string | ej.ContentType,
		cssClass?: string,
		enabled?: boolean,
		enableRTL?: boolean,
		height?: string | number,
		htmlAttributes?: any,
		imagePosition?: string | ej.ImagePosition,
		prefixIcon?: string,
		showRoundedCorner?: boolean,
		size?: string | ej.ButtonSize,
		suffixIcon?: string,
		targetID?: string,
		text?: string,
		width?: string | number,
		beforeOpen(e: BeforeOpenEventArgs): void,
		click(e: ClickEventArgs): void,
		close(e: CloseEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		itemMouseOut(e: ItemMouseOutEventArgs): void,
		itemMouseOver(e: ItemMouseOverEventArgs): void,
		itemSelected(e: ItemSelectedEventArgs): void,
		open(e: OpenEventArgs): void
	}

	declare export interface BeforeOpenEventArgs {
		cancel?: boolean,
		model?: ej.SplitButton.Model,
		type?: string
	}

	declare export interface ClickEventArgs {
		cancel?: boolean,
		model?: ej.SplitButton.Model,
		type?: string,
		target?: any,
		status?: boolean
	}

	declare export interface CloseEventArgs {
		cancel?: boolean,
		model?: ej.SplitButton.Model,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.SplitButton.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.SplitButton.Model,
		type?: string
	}

	declare export interface ItemMouseOutEventArgs {
		cancel?: boolean,
		model?: ej.SplitButton.Model,
		type?: string,
		element?: any,
		event?: any
	}

	declare export interface ItemMouseOutEvent {
		ID?: string,
		Text?: string
	}

	declare export interface ItemMouseOverEventArgs {
		cancel?: boolean,
		model?: ej.SplitButton.Model,
		type?: string,
		element?: any,
		event?: any
	}

	declare export interface ItemMouseOverEvent {
		ID?: string,
		Text?: string
	}

	declare export interface ItemSelectedEventArgs {
		cancel?: boolean,
		model?: ej.SplitButton.Model,
		type?: string,
		element?: any,
		selectedItem?: any,
		menuId?: string,
		menuText?: string
	}

	declare export interface OpenEventArgs {
		cancel?: boolean,
		model?: ej.SplitButton.Model,
		type?: string
	}

			
}

declare module 'Splitter' {
		declare export interface Model {
		allowKeyboardNavigation?: boolean,
		animationSpeed?: number,
		cssClass?: string,
		enableAnimation?: boolean,
		enableRTL?: boolean,
		height?: string,
		htmlAttributes?: any,
		isResponsive?: boolean,
		orientation?: ej.Orientation | string,
		properties?: Array<any>,
		width?: string,
		beforeExpandCollapse(e: BeforeExpandCollapseEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		expandCollapse(e: ExpandCollapseEventArgs): void,
		resize(e: ResizeEventArgs): void
	}

	declare export interface BeforeExpandCollapseEventArgs {
		cancel?: boolean,
		collapsed?: any,
		expanded?: any,
		model?: ej.Splitter.Model,
		splitbarIndex?: number,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Splitter.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Splitter.Model,
		type?: string
	}

	declare export interface ExpandCollapseEventArgs {
		cancel?: boolean,
		collapsed?: any,
		expanded?: any,
		model?: ej.Splitter.Model,
		splitbarIndex?: number,
		type?: string
	}

	declare export interface ResizeEventArgs {
		cancel?: boolean,
		prevPane?: any,
		nextPane?: any,
		model?: ej.Splitter.Model,
		splitbarIndex?: number,
		type?: string
	}

			
}

declare module 'Tab' {
		declare export interface Model {
		ajaxSettings?: AjaxSettings,
		allowKeyboardNavigation?: boolean,
		collapsible?: boolean,
		cssClass?: string,
		disabledItemIndex?: number[],
		enableAnimation?: boolean,
		enabled?: boolean,
		enabledItemIndex?: number[],
		enablePersistence?: boolean,
		enableRTL?: boolean,
		enableTabScroll?: boolean,
		events?: string,
		headerPosition?: string | ej.Tab.Position,
		headerSize?: string | number,
		height?: string | number,
		heightAdjustMode?: string | ej.Tab.HeightAdjustMode,
		hiddenItemIndex?: Array<any>,
		htmlAttributes?: any,
		idPrefix?: string,
		selectedItemIndex?: number,
		showCloseButton?: boolean,
		showReloadIcon?: boolean,
		showRoundedCorner?: boolean,
		width?: string | number,
		itemActive(e: ItemActiveEventArgs): void,
		ajaxBeforeLoad(e: AjaxBeforeLoadEventArgs): void,
		ajaxError(e: AjaxErrorEventArgs): void,
		ajaxLoad(e: AjaxLoadEventArgs): void,
		ajaxSuccess(e: AjaxSuccessEventArgs): void,
		beforeActive(e: BeforeActiveEventArgs): void,
		beforeItemRemove(e: BeforeItemRemoveEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		itemAdd(e: ItemAddEventArgs): void,
		itemRemove(e: ItemRemoveEventArgs): void
	}

	declare export interface ItemActiveEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string,
		prevActiveHeader?: HTMLElement,
		prevActiveIndex?: number,
		activeHeader?: HTMLElement,
		activeIndex?: number,
		isInteraction?: boolean
	}

	declare export interface AjaxBeforeLoadEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string,
		prevActiveHeader?: HTMLElement,
		prevActiveIndex?: number,
		activeHeader?: HTMLElement,
		activeIndex?: number,
		URL?: string,
		isInteraction?: boolean
	}

	declare export interface AjaxErrorEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string,
		data?: any,
		URL?: string
	}

	declare export interface AjaxLoadEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string,
		prevActiveHeader?: HTMLElement,
		prevActiveIndex?: number,
		activeHeader?: HTMLElement,
		activeIndex?: number,
		URL?: string,
		isInteraction?: boolean
	}

	declare export interface AjaxSuccessEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string,
		data?: any,
		URL?: string,
		content?: any
	}

	declare export interface BeforeActiveEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string,
		prevActiveHeader?: HTMLElement,
		prevActiveIndex?: number,
		activeHeader?: HTMLElement,
		activeIndex?: number,
		isInteraction?: boolean
	}

	declare export interface BeforeItemRemoveEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string,
		index?: number
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string
	}

	declare export interface ItemAddEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string,
		tabHeader?: HTMLElement,
		tabContent?: any
	}

	declare export interface ItemRemoveEventArgs {
		cancel?: boolean,
		model?: ej.Tab.Model,
		type?: string,
		removedTab?: HTMLElement
	}

	declare export interface AjaxSettings {
		async?: boolean,
		cache?: boolean,
		contentType?: string,
		data?: any,
		dataType?: string,
		type?: string
	}

			
}

declare module 'TagCloud' {
		declare export interface Model {
		cssClass?: string,
		dataSource?: any,
		enableRTL?: boolean,
		fields?: Fields,
		htmlAttributes?: any,
		format?: string | ej.Format,
		maxFontSize?: string | number,
		minFontSize?: string | number,
		query?: any,
		showTitle?: boolean,
		titleImage?: string,
		titleText?: string,
		click(e: ClickEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		mouseout(e: MouseoutEventArgs): void,
		mouseover(e: MouseoverEventArgs): void
	}

	declare export interface ClickEventArgs {
		cancel?: boolean,
		model?: ej.TagCloud.Model,
		type?: string,
		text?: string,
		URL?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.TagCloud.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.TagCloud.Model,
		type?: string
	}

	declare export interface MouseoutEventArgs {
		cancel?: boolean,
		model?: ej.TagCloud.Model,
		type?: string,
		text?: string,
		URL?: string
	}

	declare export interface MouseoverEventArgs {
		cancel?: boolean,
		model?: ej.TagCloud.Model,
		type?: string,
		text?: string,
		URL?: string
	}

	declare export interface Fields {
		frequency?: string,
		htmlAttributes?: string,
		text?: string,
		url?: string
	}

			
}

declare module 'TimePicker' {
		declare export interface Model {
		cssClass?: string,
		disableTimeRanges?: any,
		enableAnimation?: boolean,
		enabled?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		enableStrictMode?: boolean,
		height?: string | number,
		hourInterval?: number,
		htmlAttributes?: any,
		interval?: number,
		locale?: string,
		maxTime?: string,
		minTime?: string,
		minutesInterval?: number,
		popupHeight?: string | number,
		popupWidth?: string | number,
		readOnly?: boolean,
		secondsInterval?: number,
		showPopupButton?: boolean,
		showRoundedCorner?: boolean,
		timeFormat?: string,
		value?: string | Date,
		width?: string | number,
		beforeChange(e: BeforeChangeEventArgs): void,
		beforeOpen(e: BeforeOpenEventArgs): void,
		change(e: ChangeEventArgs): void,
		close(e: CloseEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		focusIn(e: FocusInEventArgs): void,
		focusOut(e: FocusOutEventArgs): void,
		open(e: OpenEventArgs): void,
		select(e: SelectEventArgs): void
	}

	declare export interface BeforeChangeEventArgs {
		cancel?: boolean,
		model?: ej.TimePicker.Model,
		type?: string,
		prevTime?: string,
		value?: string
	}

	declare export interface BeforeOpenEventArgs {
		cancel?: boolean,
		model?: ej.TimePicker.Model,
		type?: string,
		prevTime?: string,
		value?: string
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.TimePicker.Model,
		type?: string,
		isInteraction?: boolean,
		prevTime?: string,
		value?: string
	}

	declare export interface CloseEventArgs {
		cancel?: boolean,
		model?: ej.TimePicker.Model,
		type?: string,
		prevTime?: string,
		value?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.TimePicker.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.TimePicker.Model,
		type?: string
	}

	declare export interface FocusInEventArgs {
		cancel?: boolean,
		model?: ej.TimePicker.Model,
		type?: string,
		prevTime?: string,
		value?: string
	}

	declare export interface FocusOutEventArgs {
		cancel?: boolean,
		model?: ej.TimePicker.Model,
		type?: string,
		prevTime?: string,
		value?: string
	}

	declare export interface OpenEventArgs {
		cancel?: boolean,
		model?: ej.TimePicker.Model,
		type?: string,
		value?: string
	}

	declare export interface SelectEventArgs {
		cancel?: boolean,
		model?: ej.TimePicker.Model,
		type?: string,
		prevTime?: string,
		value?: string
	}

			
}

declare module 'ToggleButton' {
		declare export interface Model {
		activePrefixIcon?: string,
		activeSuffixIcon?: string,
		activeText?: string,
		contentType?: ej.ContentType | string,
		cssClass?: string,
		defaultPrefixIcon?: string,
		defaultSuffixIcon?: string,
		defaultText?: string,
		enabled?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		height?: number | string,
		htmlAttributes?: any,
		imagePosition?: ej.ImagePosition | string,
		preventToggle?: boolean,
		showRoundedCorner?: boolean,
		size?: ej.ButtonSize | string,
		toggleState?: boolean,
		type?: ej.ButtonType | string,
		width?: number | string,
		change(e: ChangeEventArgs): void,
		click(e: ClickEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		isChecked?: boolean,
		model?: ej.ToggleButton.Model,
		type?: string
	}

	declare export interface ClickEventArgs {
		cancel?: boolean,
		isChecked?: boolean,
		model?: ej.ToggleButton.Model,
		status?: boolean,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.ToggleButton.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.ToggleButton.Model,
		type?: string
	}

			
}

declare module 'Toolbar' {
		declare export interface Model {
		cssClass?: string,
		dataSource?: any,
		enabled?: boolean,
		enableRTL?: boolean,
		enableSeparator?: boolean,
		fields?: string,
		height?: number | string,
		htmlAttributes?: any,
		hide?: boolean,
		isResponsive?: boolean,
		orientation?: ej.Orientation | string,
		query?: any,
		showRoundedCorner?: boolean,
		width?: number | string,
		click(e: ClickEventArgs): void,
		create(e: CreateEventArgs): void,
		focusOut(e: FocusOutEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		itemHover(e: ItemHoverEventArgs): void,
		itemLeave(e: ItemLeaveEventArgs): void
	}

	declare export interface ClickEventArgs {
		cancel?: boolean,
		model?: ej.Toolbar.Model,
		type?: string,
		target?: any,
		currentTarget?: any,
		status?: boolean
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Toolbar.Model,
		type?: string
	}

	declare export interface FocusOutEventArgs {
		cancel?: boolean,
		model?: ej.Toolbar.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Toolbar.Model,
		type?: string
	}

	declare export interface ItemHoverEventArgs {
		cancel?: boolean,
		model?: ej.Toolbar.Model,
		type?: string,
		target?: any,
		currentTarget?: any,
		status?: boolean
	}

	declare export interface ItemLeaveEventArgs {
		cancel?: boolean,
		model?: ej.Toolbar.Model,
		type?: string,
		target?: any,
		currentTarget?: any,
		status?: boolean
	}

	declare export interface Fields {
		group?: string,
		htmlAttributes?: any,
		id?: string,
		imageAttributes?: string,
		imageUrl?: string,
		spriteCssClass?: string,
		text?: string,
		tooltipText?: string
	}

			
}

declare module 'TreeView' {
		declare export interface Model {
		allowDragAndDrop?: boolean,
		allowDragAndDropAcrossControl?: boolean,
		allowDropSibling?: boolean,
		allowDropChild?: boolean,
		allowEditing?: boolean,
		allowKeyboardNavigation?: boolean,
		allowMultiSelection?: boolean,
		autoCheck?: boolean,
		autoCheckParentNode?: boolean,
		checkedNodes?: Array<any>,
		cssClass?: string,
		enableAnimation?: boolean,
		enabled?: boolean,
		enableMultipleExpand?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		expandedNodes?: Array<any>,
		expandOn?: string,
		fields?: Fields,
		height?: string | number,
		htmlAttributes?: any,
		loadOnDemand?: boolean,
		selectedNode?: number,
		selectedNodes?: Array<any>,
		showCheckbox?: boolean,
		sortSettings?: SortSettings,
		template?: string,
		width?: string | number,
		beforeAdd(e: BeforeAddEventArgs): void,
		beforeCollapse(e: BeforeCollapseEventArgs): void,
		beforeCut(e: BeforeCutEventArgs): void,
		beforeDelete(e: BeforeDeleteEventArgs): void,
		beforeEdit(e: BeforeEditEventArgs): void,
		beforeExpand(e: BeforeExpandEventArgs): void,
		beforeLoad(e: BeforeLoadEventArgs): void,
		beforePaste(e: BeforePasteEventArgs): void,
		beforeSelect(e: BeforeSelectEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		inlineEditValidation(e: InlineEditValidationEventArgs): void,
		keyPress(e: KeyPressEventArgs): void,
		loadError(e: LoadErrorEventArgs): void,
		loadSuccess(e: LoadSuccessEventArgs): void,
		nodeAdd(e: NodeAddEventArgs): void,
		nodeCheck(e: NodeCheckEventArgs): void,
		nodeClick(e: NodeClickEventArgs): void,
		nodeCollapse(e: NodeCollapseEventArgs): void,
		nodeCut(e: NodeCutEventArgs): void,
		nodeDelete(e: NodeDeleteEventArgs): void,
		nodeDrag(e: NodeDragEventArgs): void,
		nodeDragStart(e: NodeDragStartEventArgs): void,
		nodeDragStop(e: NodeDragStopEventArgs): void,
		nodeDropped(e: NodeDroppedEventArgs): void,
		nodeEdit(e: NodeEditEventArgs): void,
		nodeExpand(e: NodeExpandEventArgs): void,
		nodePaste(e: NodePasteEventArgs): void,
		nodeSelect(e: NodeSelectEventArgs): void,
		nodeUncheck(e: NodeUncheckEventArgs): void,
		nodeUnselect(e: NodeUnselectEventArgs): void,
		ready(e: ReadyEventArgs): void
	}

	declare export interface BeforeAddEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		data?: string | any,
		targetParent?: any,
		parentDetails?: any
	}

	declare export interface BeforeCollapseEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		value?: string,
		currentElement?: any,
		isChildLoaded?: boolean,
		id?: string,
		parentId?: string,
		async?: boolean
	}

	declare export interface BeforeCutEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		event?: any,
		target?: any,
		nodeDetails?: any,
		keyCode?: number
	}

	declare export interface BeforeDeleteEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		event?: any,
		target?: any,
		nodeDetails?: any,
		parentElement?: any,
		parentDetails?: any,
		removedNodes?: Array<any>
	}

	declare export interface BeforeEditEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		currentElement?: any
	}

	declare export interface BeforeExpandEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		value?: string,
		isChildLoaded?: boolean,
		currentElement?: any,
		id?: string,
		parentId?: string,
		async?: boolean
	}

	declare export interface BeforeLoadEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		AjaxOptions?: any
	}

	declare export interface BeforePasteEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		event?: any,
		target?: any,
		nodeDetails?: any,
		keyCode?: number
	}

	declare export interface BeforeSelectEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		target?: any,
		nodeDetails?: any
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string
	}

	declare export interface InlineEditValidationEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		newText?: string,
		id?: any,
		oldText?: string
	}

	declare export interface KeyPressEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		event?: any,
		currentElement?: any,
		value?: string,
		path?: string,
		keyCode?: number,
		isExpanded?: boolean
	}

	declare export interface LoadErrorEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		error?: any
	}

	declare export interface LoadSuccessEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		data?: any,
		targetParent?: any,
		parentDetails?: any
	}

	declare export interface NodeAddEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		data?: any,
		nodes?: any,
		parentElement?: any,
		parentDetails?: any
	}

	declare export interface NodeCheckEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		event?: any,
		value?: string,
		id?: string,
		parentId?: string,
		currentElement?: any,
		isChecked?: boolean,
		currentNode?: Array<any>,
		currentCheckedNodes?: Array<any>
	}

	declare export interface NodeClickEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		event?: any,
		currentElement?: any,
		id?: string,
		parentId?: string
	}

	declare export interface NodeCollapseEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		id?: string,
		type?: string,
		parentId?: string,
		value?: string,
		currentElement?: any,
		isChildLoaded?: boolean,
		async?: boolean
	}

	declare export interface NodeCutEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		event?: any,
		parentElement?: any,
		parentDetails?: any,
		keyCode?: number
	}

	declare export interface NodeDeleteEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		event?: any,
		parentElement?: any,
		parentDetails?: any,
		removedNodes?: Array<any>
	}

	declare export interface NodeDragEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		dragTarget?: any,
		target?: any,
		targetElementData?: any,
		draggedElement?: any,
		draggedElementData?: any,
		event?: any
	}

	declare export interface NodeDragStartEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		dragTarget?: any,
		parentElement?: any,
		parentElementData?: any,
		target?: any,
		targetElementData?: any,
		event?: any
	}

	declare export interface NodeDragStopEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		dropTarget?: any,
		draggedElement?: any,
		draggedElementData?: any,
		target?: any,
		targetElementData?: any,
		position?: string,
		event?: any
	}

	declare export interface NodeDroppedEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		dropTarget?: any,
		droppedElement?: any,
		droppedElementData?: any,
		target?: any,
		targetElementData?: any,
		position?: string,
		event?: any
	}

	declare export interface NodeEditEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		id?: string,
		oldText?: string,
		newText?: string,
		event?: any,
		target?: any,
		nodeDetails?: any
	}

	declare export interface NodeExpandEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		value?: string,
		isChildLoaded?: boolean,
		currentElement?: any,
		id?: string,
		parentId?: string,
		async?: boolean
	}

	declare export interface NodePasteEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		event?: any,
		target?: any,
		nodeDetails?: any,
		keyCode?: number
	}

	declare export interface NodeSelectEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		id?: any,
		parentId?: any,
		selectedNodes?: Array<any>,
		value?: string,
		currentElement?: any
	}

	declare export interface NodeUncheckEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string,
		event?: any,
		id?: any,
		parentId?: any,
		value?: string,
		currentElement?: any,
		isChecked?: boolean,
		currentNode?: string,
		currentUncheckedNodes?: Array<any>
	}

	declare export interface NodeUnselectEventArgs {
		cancel?: boolean,
		currentElement?: any,
		id?: string,
		model?: ej.TreeView.Model,
		parentId?: string,
		selectedNodes?: Array<any>,
		type?: string,
		value?: string
	}

	declare export interface ReadyEventArgs {
		cancel?: boolean,
		model?: ej.TreeView.Model,
		type?: string
	}

	declare export interface Fields {
		child?: any,
		dataSource?: any,
		expanded?: boolean,
		hasChild?: boolean,
		htmlAttribute?: any,
		id?: string,
		imageAttribute?: any,
		imageUrl?: string,
		isChecked?: boolean,
		linkAttribute?: any,
		parentId?: string,
		query?: any,
		selected?: boolean,
		spriteCssClass?: string,
		tableName?: string,
		text?: string
	}

	declare export interface SortSettings {
		allowSorting?: boolean,
		sortOrder?: ej.sortOrder | string
	}

			
}

declare module 'Uploadbox' {
		declare export interface Model {
		allowDragAndDrop?: boolean,
		asyncUpload?: boolean,
		autoUpload?: boolean,
		buttonText?: ButtonText,
		cssClass?: string,
		customFileDetails?: CustomFileDetails,
		dialogAction?: DialogAction,
		dialogPosition?: any,
		dialogText?: DialogText,
		dropAreaText?: string,
		dropAreaHeight?: number | string,
		dropAreaWidth?: number | string,
		enabled?: boolean,
		enableRTL?: boolean,
		extensionsAllow?: string,
		extensionsDeny?: string,
		fileSize?: number,
		height?: string,
		htmlAttributes?: any,
		locale?: string,
		multipleFilesSelection?: boolean,
		pushFile?: any,
		removeUrl?: string,
		saveUrl?: string,
		showBrowseButton?: boolean,
		showFileDetails?: boolean,
		showRoundedCorner?: boolean,
		uploadName?: string,
		width?: string,
		beforeSend(e: BeforeSendEventArgs): void,
		begin(e: BeginEventArgs): void,
		cancel(e: CancelEventArgs): void,
		complete(e: CompleteEventArgs): void,
		success(e: SuccessEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		error(e: ErrorEventArgs): void,
		fileSelect(e: FileSelectEventArgs): void,
		inProgress(e: InProgressEventArgs): void,
		remove(e: RemoveEventArgs): void
	}

	declare export interface BeforeSendEventArgs {
		files?: any,
		cancel?: boolean,
		model?: any,
		xhr?: any,
		type?: string
	}

	declare export interface BeginEventArgs {
		data?: any,
		files?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface CancelEventArgs {
		fileStatus?: any,
		model?: any,
		type?: string
	}

	declare export interface CompleteEventArgs {
		e?: any,
		files?: any,
		responseText?: string,
		xhr?: any,
		model?: any,
		type?: string
	}

	declare export interface SuccessEventArgs {
		responseText?: string,
		e?: any,
		success?: any,
		files?: any,
		xhr?: any,
		model?: any,
		type?: string
	}

	declare export interface CreateEventArgs {
		model?: any,
		type?: string
	}

	declare export interface DestroyEventArgs {
		model?: any,
		type?: string
	}

	declare export interface ErrorEventArgs {
		error?: string,
		type?: string,
		action?: string,
		files?: any
	}

	declare export interface FileSelectEventArgs {
		files?: any,
		model?: any,
		type?: string
	}

	declare export interface InProgressEventArgs {
		cancel?: boolean,
		e?: any,
		files?: any,
		model?: any,
		percentage?: any,
		type?: string
	}

	declare export interface RemoveEventArgs {
		model?: any,
		type?: string,
		fileStatus?: any
	}

	declare export interface ButtonText {
		browse?: string,
		cancel?: string,
		Close?: string,
		upload?: string
	}

	declare export interface CustomFileDetails {
		action?: boolean,
		name?: boolean,
		size?: boolean,
		status?: boolean,
		title?: boolean
	}

	declare export interface DialogAction {
		closeOnComplete?: boolean,
		content?: string,
		drag?: boolean,
		modal?: boolean
	}

	declare export interface DialogText {
		name?: string,
		size?: string,
		status?: string,
		title?: string
	}

			
}

declare module 'WaitingPopup' {
		declare export interface Model {
		cssClass?: string,
		htmlAttributes?: any,
		showImage?: boolean,
		showOnInit?: boolean,
		target?: string,
		appendTo?: string,
		template?: any,
		text?: string,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.WaitingPopup.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.WaitingPopup.Model,
		type?: string
	}

			
}

declare module 'Grid' {
		declare export interface Model {
		allowCellMerging?: boolean,
		allowGrouping?: boolean,
		allowKeyboardNavigation?: boolean,
		allowFiltering?: boolean,
		allowSorting?: boolean,
		allowMultiSorting?: boolean,
		allowPaging?: boolean,
		allowReordering?: boolean,
		allowResizeToFit?: boolean,
		allowResizing?: boolean,
		allowRowDragAndDrop?: boolean,
		allowScrolling?: boolean,
		allowSearching?: boolean,
		allowSelection?: boolean,
		allowTextWrap?: boolean,
		allowMultipleExporting?: boolean,
		commonWidth?: number,
		gridLines?: ej.Grid.GridLines | string,
		childGrid?: any,
		columnLayout?: ej.Grid.ColumnLayout | string,
		columns?: Array<Column>,
		contextMenuSettings?: ContextMenuSettings,
		cssClass?: string,
		dataSource?: any,
		detailsTemplate?: string,
		editSettings?: EditSettings,
		enableAltRow?: boolean,
		enableAutoSaveOnSelectionChange?: boolean,
		enableHeaderHover?: boolean,
		enablePersistence?: boolean,
		enableResponsiveRow?: boolean,
		enableRowHover?: boolean,
		enableRTL?: boolean,
		enableTouch?: boolean,
		filterSettings?: FilterSettings,
		groupSettings?: GroupSettings,
		isResponsive?: boolean,
		keySettings?: any,
		locale?: string,
		minWidth?: number,
		pageSettings?: PageSettings,
		query?: any,
		resizeSettings?: ResizeSettings,
		rowTemplate?: string,
		rowDropSettings?: RowDropSettings,
		searchSettings?: SearchSettings,
		selectedRecords?: Array<any>,
		selectedRowIndex?: number,
		selectionSettings?: SelectionSettings,
		selectionType?: ej.Grid.SelectionType | string,
		scrollSettings?: ScrollSettings,
		showColumnChooser?: boolean,
		showStackedHeader?: boolean,
		showSummary?: boolean,
		sortSettings?: SortSettings,
		stackedHeaderRows?: Array<StackedHeaderRow>,
		summaryRows?: Array<SummaryRow>,
		textWrapSettings?: TextWrapSettings,
		toolbarSettings?: ToolbarSettings,
		actionBegin(e: ActionBeginEventArgs): void,
		actionComplete(e: ActionCompleteEventArgs): void,
		actionFailure(e: ActionFailureEventArgs): void,
		batchAdd(e: BatchAddEventArgs): void,
		batchDelete(e: BatchDeleteEventArgs): void,
		beforeBatchAdd(e: BeforeBatchAddEventArgs): void,
		beforeBatchDelete(e: BeforeBatchDeleteEventArgs): void,
		beforeBatchSave(e: BeforeBatchSaveEventArgs): void,
		beginEdit(e: BeginEditEventArgs): void,
		cellEdit(e: CellEditEventArgs): void,
		cellSave(e: CellSaveEventArgs): void,
		cellSelected(e: CellSelectedEventArgs): void,
		cellSelecting(e: CellSelectingEventArgs): void,
		columnDrag(e: ColumnDragEventArgs): void,
		columnDragStart(e: ColumnDragStartEventArgs): void,
		columnDrop(e: ColumnDropEventArgs): void,
		rowDrag(e: RowDragEventArgs): void,
		rowDragStart(e: RowDragStartEventArgs): void,
		rowDrop(e: RowDropEventArgs): void,
		columnSelected(e: ColumnSelectedEventArgs): void,
		columnSelecting(e: ColumnSelectingEventArgs): void,
		contextClick(e: ContextClickEventArgs): void,
		contextOpen(e: ContextOpenEventArgs): void,
		create(e: CreateEventArgs): void,
		dataBound(e: DataBoundEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		detailsCollapse(e: DetailsCollapseEventArgs): void,
		detailsDataBound(e: DetailsDataBoundEventArgs): void,
		detailsExpand(e: DetailsExpandEventArgs): void,
		endAdd(e: EndAddEventArgs): void,
		endDelete(e: EndDeleteEventArgs): void,
		endEdit(e: EndEditEventArgs): void,
		load(e: LoadEventArgs): void,
		mergeCellInfo(e: MergeCellInfoEventArgs): void,
		queryCellInfo(e: QueryCellInfoEventArgs): void,
		recordClick(e: RecordClickEventArgs): void,
		recordDoubleClick(e: RecordDoubleClickEventArgs): void,
		resized(e: ResizedEventArgs): void,
		resizeEnd(e: ResizeEndEventArgs): void,
		resizeStart(e: ResizeStartEventArgs): void,
		rightClick(e: RightClickEventArgs): void,
		rowDataBound(e: RowDataBoundEventArgs): void,
		rowSelected(e: RowSelectedEventArgs): void,
		rowSelecting(e: RowSelectingEventArgs): void,
		templateRefresh(e: TemplateRefreshEventArgs): void,
		toolBarClick(e: ToolBarClickEventArgs): void
	}

	declare export interface ActionBeginEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		currentPage?: number,
		previousPage?: number,
		endIndex?: number,
		requestType?: string,
		startIndex?: number,
		columnName?: string,
		columnSortDirection?: string,
		row?: any,
		originalEventType?: string,
		primaryKey?: string,
		primaryKeyValue?: string,
		rowIndex?: number,
		data?: any,
		foreignKeyData?: any,
		selectedRow?: number,
		tr?: any,
		currentFilteringColumn?: any,
		currentFilterObject?: any,
		filterCollection?: any,
		columnType?: string,
		filtermodel?: any,
		dataSource?: any,
		query?: any,
		isCustomFilter?: boolean
	}

	declare export interface ActionCompleteEventArgs {
		cancel?: boolean,
		model?: any,
		requestType?: string,
		type?: string,
		currentPage?: number,
		previousPage?: number,
		endIndex?: number,
		originalEventType?: string,
		startIndex?: number,
		target?: any,
		columnName?: string,
		columnSortDirection?: string,
		row?: any,
		primaryKey?: string,
		primaryKeyValue?: string,
		rowIndex?: number,
		data?: any,
		selectedRow?: number,
		foreignKeyData?: any,
		tr?: any,
		currentFilteringColumn?: string,
		currentFilterObject?: any,
		filterCollection?: any,
		dataSource?: any,
		filtermodel?: any,
		columnType?: string,
		isCustomFilter?: boolean
	}

	declare export interface ActionFailureEventArgs {
		cancel?: boolean,
		model?: any,
		requestType?: string,
		type?: string,
		error?: any,
		currentPage?: number,
		previousPage?: number,
		endIndex?: number,
		originalEventType?: string,
		startIndex?: number,
		target?: any,
		columnName?: string,
		columnSortDirection?: string,
		row?: any,
		primaryKey?: string,
		primaryKeyValue?: string,
		rowIndex?: number,
		data?: any,
		selectedRow?: number,
		foreignKeyData?: any,
		tr?: any,
		currentFilteringColumn?: string,
		currentFilterObject?: any,
		filterCollection?: any
	}

	declare export interface BatchAddEventArgs {
		cancel?: boolean,
		model?: any,
		data?: any,
		type?: string,
		columnObject?: any,
		columnIndex?: number,
		row?: any,
		primaryKey?: any,
		cell?: any
	}

	declare export interface BatchDeleteEventArgs {
		cancel?: boolean,
		model?: any,
		data?: any,
		type?: string,
		primaryKey?: any,
		rowIndex?: number
	}

	declare export interface BeforeBatchAddEventArgs {
		cancel?: boolean,
		model?: any,
		data?: any,
		type?: string,
		defaultData?: any,
		primaryKey?: any
	}

	declare export interface BeforeBatchDeleteEventArgs {
		model?: any,
		data?: any,
		type?: string,
		primaryKey?: any,
		rowIndex?: number,
		rowData?: any,
		row?: any
	}

	declare export interface BeforeBatchSaveEventArgs {
		model?: any,
		data?: any,
		type?: string,
		batchChanges?: any
	}

	declare export interface BeginEditEventArgs {
		cancel?: boolean,
		row?: any,
		model?: any,
		primaryKey?: any,
		primaryKeyValue?: any,
		rowIndex?: number,
		type?: string
	}

	declare export interface CellEditEventArgs {
		model?: any,
		data?: any,
		type?: string,
		validationRules?: any,
		columnName?: string,
		value?: string,
		rowData?: any,
		previousValue?: string,
		columnObject?: any,
		cell?: any,
		isForeignKey?: boolean
	}

	declare export interface CellSaveEventArgs {
		model?: any,
		data?: any,
		type?: string,
		columnName?: string,
		value?: string,
		rowData?: any,
		previousValue?: string,
		columnObject?: any,
		cell?: any,
		isForeignKey?: boolean
	}

	declare export interface CellSelectedEventArgs {
		cellIndex?: number,
		previousRowCellIndex?: number,
		currentCell?: any,
		previousRowCell?: any,
		data?: any,
		selectedRowCellIndex?: Array<any>,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface CellSelectingEventArgs {
		cellIndex?: number,
		previousRowCellIndex?: number,
		currentCell?: any,
		previousRowCell?: any,
		data?: any,
		isCtrlKeyPressed?: boolean,
		isShiftKeyPressed?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ColumnDragEventArgs {
		cancel?: boolean,
		draggableType?: any,
		column?: any,
		model?: any,
		target?: any,
		type?: string
	}

	declare export interface ColumnDragStartEventArgs {
		cancel?: boolean,
		draggableType?: any,
		column?: any,
		model?: any,
		target?: any,
		type?: string
	}

	declare export interface ColumnDropEventArgs {
		cancel?: boolean,
		draggableType?: string,
		column?: any,
		model?: any,
		target?: any,
		type?: string
	}

	declare export interface RowDragEventArgs {
		cancel?: boolean,
		draggableType?: any,
		target?: any,
		model?: any,
		currentTarget?: any,
		type?: string,
		data?: any
	}

	declare export interface RowDragStartEventArgs {
		cancel?: boolean,
		draggableType?: any,
		target?: any,
		model?: any,
		currentTarget?: any,
		type?: string,
		data?: any
	}

	declare export interface RowDropEventArgs {
		cancel?: boolean,
		draggableType?: string,
		rows?: any,
		model?: any,
		target?: any,
		type?: string,
		data?: any
	}

	declare export interface ColumnSelectedEventArgs {
		columnIndex?: number,
		previousColumnIndex?: number,
		headerCell?: any,
		prevColumnHeaderCell?: any,
		column?: any,
		selectedColumnsIndex?: Array<any>,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ColumnSelectingEventArgs {
		columnIndex?: number,
		previousColumnIndex?: number,
		headerCell?: any,
		prevColumnHeaderCell?: any,
		column?: any,
		isCtrlKeyPressed?: boolean,
		isShiftKeyPressed?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ContextClickEventArgs {
		cancel?: boolean,
		currentTarget?: any,
		model?: any,
		status?: boolean,
		target?: any,
		type?: string
	}

	declare export interface ContextOpenEventArgs {
		cancel?: boolean,
		currentTarget?: any,
		model?: any,
		status?: boolean,
		target?: any,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface DataBoundEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface DestroyEventArgs {
		model?: any,
		data?: any,
		type?: string
	}

	declare export interface DetailsCollapseEventArgs {
		cancel?: boolean,
		detailsRow?: any,
		masterData?: any,
		foreignKeyData?: any,
		masterRow?: any,
		model?: any,
		type?: string
	}

	declare export interface DetailsDataBoundEventArgs {
		cancel?: boolean,
		detailsElement?: any,
		data?: any,
		model?: any,
		type?: string
	}

	declare export interface DetailsExpandEventArgs {
		cancel?: boolean,
		detailsRow?: any,
		masterData?: any,
		foreignKeyData?: any,
		masterRow?: any,
		model?: any,
		type?: string
	}

	declare export interface EndAddEventArgs {
		model?: any,
		data?: any,
		type?: string
	}

	declare export interface EndDeleteEventArgs {
		model?: any,
		data?: any,
		type?: string
	}

	declare export interface EndEditEventArgs {
		model?: any,
		data?: any,
		type?: string
	}

	declare export interface LoadEventArgs {
		model?: any,
		data?: any,
		cancel?: boolean,
		type?: string
	}

	declare export interface MergeCellInfoEventArgs {
		cell?: any,
		cancel?: boolean,
		data?: any,
		text?: string,
		column?: any,
		rowMerge?: void,
		colMerge?: void,
		merge?: void,
		model?: any,
		type?: string
	}

	declare export interface QueryCellInfoEventArgs {
		cell?: any,
		cancel?: boolean,
		data?: any,
		text?: string,
		column?: any,
		foreignKeyData?: any,
		model?: any,
		type?: string
	}

	declare export interface RecordClickEventArgs {
		cancel?: boolean,
		data?: any,
		rowIndex?: number,
		row?: any,
		cell?: any,
		model?: any,
		cellIndex?: number,
		cellValue?: string,
		columnName?: string,
		type?: string
	}

	declare export interface RecordDoubleClickEventArgs {
		cancel?: boolean,
		data?: any,
		rowIndex?: number,
		row?: any,
		cell?: any,
		model?: any,
		cellIndex?: number,
		cellValue?: string,
		columnName?: string,
		type?: string
	}

	declare export interface ResizedEventArgs {
		model?: any,
		cancel?: boolean,
		data?: any,
		type?: string,
		columnIndex?: number,
		column?: any,
		target?: any,
		oldWidth?: number,
		newWidth?: number
	}

	declare export interface ResizeEndEventArgs {
		model?: any,
		data?: any,
		type?: string,
		columnIndex?: number,
		column?: any,
		target?: any,
		oldWidth?: number,
		newWidth?: number,
		extra?: number
	}

	declare export interface ResizeStartEventArgs {
		model?: any,
		data?: any,
		type?: string,
		columnIndex?: number,
		column?: any,
		target?: any,
		oldWidth?: number
	}

	declare export interface RightClickEventArgs {
		cancel?: boolean,
		currentData?: any,
		rowIndex?: number,
		row?: any,
		data?: any,
		cellIndex?: number,
		cellValue?: string,
		cell?: any,
		model?: any,
		type?: string
	}

	declare export interface RowDataBoundEventArgs {
		row?: any,
		cancel?: boolean,
		data?: any,
		foreignKeyData?: any,
		model?: any,
		type?: string
	}

	declare export interface RowSelectedEventArgs {
		cancel?: boolean,
		data?: any,
		foreignKeyData?: any,
		rowIndex?: number,
		row?: any,
		prevRow?: any,
		prevRowIndex?: number,
		model?: any,
		type?: string
	}

	declare export interface RowSelectingEventArgs {
		rowIndex?: number,
		row?: any,
		prevRow?: any,
		prevRowIndex?: number,
		data?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface TemplateRefreshEventArgs {
		cancel?: boolean,
		cell?: any,
		column?: any,
		data?: any,
		model?: any,
		rowIndex?: number,
		type?: string
	}

	declare export interface ToolBarClickEventArgs {
		cancel?: boolean,
		currentTarget?: any,
		model?: any,
		status?: boolean,
		target?: any,
		type?: string,
		gridModel?: any,
		toolbarData?: any,
		itemId?: string,
		itemIndex?: number,
		itemName?: string
	}

	declare export interface ColumnsCommand {
		buttonOptions?: any,
		type?: ej.Grid.UnboundType | string
	}

	declare export interface Column {
		clipMode?: ej.Grid.ClipMode | string,
		allowEditing?: boolean,
		allowFiltering?: boolean,
		allowGrouping?: boolean,
		allowSorting?: boolean,
		allowResizing?: boolean,
		commands?: Array<ColumnsCommand>,
		cssClass?: string,
		customAttributes?: any,
		dataSource?: Array<any>,
		defaultValue?: string | number | boolean | Date,
		disableHtmlEncode?: boolean,
		displayAsCheckBox?: boolean,
		editParams?: any,
		editTemplate?: any,
		editType?: ej.Grid.EditingType | string,
		field?: string,
		foreignKeyField?: string,
		foreignKeyValue?: string,
		format?: string,
		headerTemplateID?: string,
		headerText?: string,
		headerTextAlign?: ej.TextAlign | string,
		isFrozen?: boolean,
		isIdentity?: boolean,
		isPrimaryKey?: boolean,
		priority?: number,
		showInColumnChooser?: boolean,
		template?: boolean | string,
		textAlign?: ej.TextAlign | string,
		tooltip?: string,
		type?: string,
		validationRules?: any,
		visible?: boolean,
		width?: number
	}

	declare export interface ContextMenuSettingsSubContextMenu {
		contextMenuItem?: string,
		subMenu?: Array<any>
	}

	declare export interface ContextMenuSettings {
		contextMenuItems?: Array<any>,
		customContextMenuItems?: Array<any>,
		enableContextMenu?: boolean,
		subContextMenu?: Array<ContextMenuSettingsSubContextMenu>,
		disableDefaultItems?: boolean
	}

	declare export interface EditSettings {
		allowAdding?: boolean,
		allowDeleting?: boolean,
		allowEditing?: boolean,
		allowEditOnDblClick?: boolean,
		dialogEditorTemplateID?: string,
		editMode?: ej.Grid.EditMode | string,
		externalFormTemplateID?: string,
		formPosition?: ej.Grid.FormPosition | string,
		inlineFormTemplateID?: string,
		rowPosition?: ej.Grid.RowPosition | string,
		showConfirmDialog?: boolean,
		showDeleteConfirmDialog?: boolean,
		titleColumn?: string,
		showAddNewRow?: boolean
	}

	declare export interface FilterSettingsFilteredColumn {
		field?: string,
		operator?: ej.FilterOperators | string,
		predicate?: string,
		value?: string | number
	}

	declare export interface FilterSettings {
		enableCaseSensitivity?: boolean,
		filterBarMode?: ej.Grid.FilterBarMode | string,
		filteredColumns?: Array<FilterSettingsFilteredColumn>,
		filterType?: ej.Grid.FilterType | string,
		maxFilterChoices?: number,
		showFilterBarMessage?: boolean,
		showPredicate?: boolean
	}

	declare export interface GroupSettings {
		captionFormat?: string,
		enableDropAreaAutoSizing?: boolean,
		groupedColumns?: Array<any>,
		showDropArea?: boolean,
		showGroupedColumn?: boolean,
		showToggleButton?: boolean,
		showUngroupButton?: boolean
	}

	declare export interface PageSettings {
		currentPage?: number,
		enableQueryString?: boolean,
		enableTemplates?: boolean,
		pageCount?: number,
		pageSize?: number,
		showDefaults?: boolean,
		template?: string,
		totalPages?: number,
		totalRecordsCount?: number,
		printMode?: ej.Grid.PrintMode | string
	}

	declare export interface ResizeSettings {
		resizeMode?: ej.Grid.ResizeMode | string
	}

	declare export interface RowDropSettings {
		dropTargetID?: any,
		dragMapper?: string,
		dropMapper?: string
	}

	declare export interface SearchSettings {
		fields?: any,
		key?: string,
		operator?: string,
		ignoreCase?: boolean
	}

	declare export interface SelectionSettings {
		enableToggle?: boolean,
		selectionMode?: Array<any>
	}

	declare export interface ScrollSettings {
		allowVirtualScrolling?: boolean,
		enableTouchScroll?: boolean,
		frozenColumns?: number,
		frozenRows?: number,
		height?: string | number,
		virtualScrollMode?: ej.Grid.VirtualScrollMode | string,
		enableVirtualization?: boolean,
		width?: string | number,
		scrollOneStepBy?: number
	}

	declare export interface SortSettingsSortedColumn {
		direction?: string,
		field?: string
	}

	declare export interface SortSettings {
		sortedColumns?: Array<SortSettingsSortedColumn>
	}

	declare export interface StackedHeaderRowsStackedHeaderColumn {
		column?: any,
		cssClass?: string,
		headerText?: string,
		textAlign?: string
	}

	declare export interface StackedHeaderRow {
		stackedHeaderColumns?: Array<StackedHeaderRowsStackedHeaderColumn>
	}

	declare export interface SummaryRowsSummaryColumn {
		customSummaryValue?: string,
		dataMember?: string,
		displayColumn?: string,
		format?: string,
		prefix?: string,
		suffix?: string,
		summaryType?: ej.Grid.SummaryType | string,
		template?: string
	}

	declare export interface SummaryRow {
		showCaptionSummary?: boolean,
		showGroupSummary?: boolean,
		showTotalSummary?: boolean,
		summaryColumns?: Array<SummaryRowsSummaryColumn>,
		title?: string,
		titleColumn?: string
	}

	declare export interface TextWrapSettings {
		wrapMode?: ej.Grid.WrapMode | string
	}

	declare export interface ToolbarSettings {
		customToolbarItems?: Array<any>,
		showToolbar?: boolean,
		toolbarItems?: Array<any>
	}

			
}

declare module 'Sparkline' {
		declare export interface Model {
		background?: string,
		fill?: string,
		stroke?: string,
		border?: Border,
		width?: number,
		opacity?: number,
		highPointColor?: string,
		lowPointColor?: string,
		startPointColor?: string,
		endPointColor?: string,
		negativePointColor?: string,
		rangeBandSettings?: RangeBandSettings,
		palette?: string,
		isResponsive?: boolean,
		enableCanvasRendering?: boolean,
		dataSource?: any,
		xName?: string,
		yName?: string,
		padding?: number,
		type?: ej.datavisualization.Sparkline.Type | string,
		theme?: ej.datavisualization.Sparkline.Theme | string,
		tooltip?: Tooltip,
		markerSettings?: MarkerSettings,
		size?: Size,
		axisLineSettings?: AxisLineSettings,
		load(e: LoadEventArgs): void,
		loaded(e: LoadedEventArgs): void,
		tooltipInitialize(e: TooltipInitializeEventArgs): void,
		seriesRendering(e: SeriesRenderingEventArgs): void,
		pointRegionMouseMove(e: PointRegionMouseMoveEventArgs): void,
		pointRegionMouseClick(e: PointRegionMouseClickEventArgs): void,
		sparklineMouseMove(e: SparklineMouseMoveEventArgs): void,
		sparklineMouseLeave(e: SparklineMouseLeaveEventArgs): void
	}

	declare export interface LoadEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface LoadedEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface TooltipInitializeEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		locationX?: any,
		locationY?: any,
		pointIndex?: number,
		currentText?: string
	}

	declare export interface SeriesRenderingEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		minX?: any,
		minY?: any,
		maxX?: any,
		maxY?: any
	}

	declare export interface PointRegionMouseMoveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		locationX?: number,
		locationY?: number,
		pointIndex?: number,
		seriesType?: string
	}

	declare export interface PointRegionMouseClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		locationX?: number,
		locationY?: number,
		pointIndex?: number,
		seriesType?: string
	}

	declare export interface SparklineMouseMoveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface SparklineMouseLeaveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface Border {
		color?: string,
		width?: number
	}

	declare export interface RangeBandSettings {
		startRange?: number,
		endRange?: number,
		opacity?: number,
		color?: string
	}

	declare export interface TooltipBorder {
		color?: string,
		width?: number
	}

	declare export interface TooltipFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Sparkline.FontStyle | string,
		fontWeight?: ej.datavisualization.Sparkline.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface Tooltip {
		visible?: boolean,
		fill?: string,
		template?: string,
		border?: TooltipBorder,
		font?: TooltipFont
	}

	declare export interface MarkerSettingsBorder {
		color?: string,
		opacity?: number,
		width?: number
	}

	declare export interface MarkerSettings {
		opacity?: number,
		visible?: boolean,
		width?: number,
		fill?: string,
		border?: MarkerSettingsBorder
	}

	declare export interface Size {
		height?: string,
		width?: string
	}

	declare export interface AxisLineSettings {
		visible?: boolean,
		color?: string,
		width?: number,
		dashArray?: number
	}

	declare export interface Model {
		background?: string,
		fill?: string,
		stroke?: string,
		border?: Border,
		width?: number,
		opacity?: number,
		highPointColor?: string,
		lowPointColor?: string,
		startPointColor?: string,
		endPointColor?: string,
		negativePointColor?: string,
		rangeBandSettings?: RangeBandSettings,
		palette?: string,
		isResponsive?: boolean,
		enableCanvasRendering?: boolean,
		dataSource?: any,
		xName?: string,
		yName?: string,
		padding?: number,
		type?: ej.datavisualization.Sparkline.Type | string,
		theme?: ej.datavisualization.Sparkline.Theme | string,
		tooltip?: Tooltip,
		markerSettings?: MarkerSettings,
		size?: Size,
		axisLineSettings?: AxisLineSettings,
		load(e: LoadEventArgs): void,
		loaded(e: LoadedEventArgs): void,
		tooltipInitialize(e: TooltipInitializeEventArgs): void,
		seriesRendering(e: SeriesRenderingEventArgs): void,
		pointRegionMouseMove(e: PointRegionMouseMoveEventArgs): void,
		pointRegionMouseClick(e: PointRegionMouseClickEventArgs): void,
		sparklineMouseMove(e: SparklineMouseMoveEventArgs): void,
		sparklineMouseLeave(e: SparklineMouseLeaveEventArgs): void
	}

	declare export interface LoadEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface LoadedEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface TooltipInitializeEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		locationX?: any,
		locationY?: any,
		pointIndex?: number,
		currentText?: string
	}

	declare export interface SeriesRenderingEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		minX?: any,
		minY?: any,
		maxX?: any,
		maxY?: any
	}

	declare export interface PointRegionMouseMoveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		locationX?: number,
		locationY?: number,
		pointIndex?: number,
		seriesType?: string
	}

	declare export interface PointRegionMouseClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		locationX?: number,
		locationY?: number,
		pointIndex?: number,
		seriesType?: string
	}

	declare export interface SparklineMouseMoveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface SparklineMouseLeaveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface Border {
		color?: string,
		width?: number
	}

	declare export interface RangeBandSettings {
		startRange?: number,
		endRange?: number,
		opacity?: number,
		color?: string
	}

	declare export interface TooltipBorder {
		color?: string,
		width?: number
	}

	declare export interface TooltipFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Sparkline.FontStyle | string,
		fontWeight?: ej.datavisualization.Sparkline.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface Tooltip {
		visible?: boolean,
		fill?: string,
		template?: string,
		border?: TooltipBorder,
		font?: TooltipFont
	}

	declare export interface MarkerSettingsBorder {
		color?: string,
		opacity?: number,
		width?: number
	}

	declare export interface MarkerSettings {
		opacity?: number,
		visible?: boolean,
		width?: number,
		fill?: string,
		border?: MarkerSettingsBorder
	}

	declare export interface Size {
		height?: string,
		width?: string
	}

	declare export interface AxisLineSettings {
		visible?: boolean,
		color?: string,
		width?: number,
		dashArray?: number
	}

			
}

declare module 'PivotGrid' {
		declare export interface Model {
		analysisMode?: ej.PivotGrid.AnalysisMode | string,
		cssClass?: string,
		currentReport?: string,
		dataSource?: DataSource,
		drilledItems?: Array<any>,
		customObject?: any,
		enableCellContext?: boolean,
		enableCellSelection?: boolean,
		enableDrillThrough?: boolean,
		enableCellDoubleClick?: boolean,
		enableCellEditing?: boolean,
		enableCollapseByDefault?: boolean,
		enableColumnGrandTotal?: boolean,
		enableConditionalFormatting?: boolean,
		enableDeferUpdate?: boolean,
		enableGroupingBar?: boolean,
		enableGrandTotal?: boolean,
		enableJSONRendering?: boolean,
		enablePivotFieldList?: boolean,
		enableRowGrandTotal?: boolean,
		enableRTL?: boolean,
		enableToolTip?: boolean,
		enableToolTipAnimation?: boolean,
		enableVirtualScrolling?: boolean,
		hyperlinkSettings?: HyperlinkSettings,
		isNamedSets?: boolean,
		isResponsive?: boolean,
		jsonRecords?: string,
		layout?: ej.PivotGrid.Layout | string,
		locale?: string,
		operationalMode?: ej.PivotGrid.OperationalMode | string,
		serviceMethodSettings?: ServiceMethodSettings,
		url?: string,
		afterServiceInvoke(e: AfterServiceInvokeEventArgs): void,
		beforeServiceInvoke(e: BeforeServiceInvokeEventArgs): void,
		beforePivotEnginePopulate(e: BeforePivotEnginePopulateEventArgs): void,
		cellDoubleClick(e: CellDoubleClickEventArgs): void,
		cellContext(e: CellContextEventArgs): void,
		cellSelection(e: CellSelectionEventArgs): void,
		columnHeaderHyperlinkClick(e: ColumnHeaderHyperlinkClickEventArgs): void,
		drillSuccess(e: DrillSuccessEventArgs): void,
		drillThrough(e: DrillThroughEventArgs): void,
		load(e: LoadEventArgs): void,
		renderComplete(e: RenderCompleteEventArgs): void,
		renderFailure(e: RenderFailureEventArgs): void,
		renderSuccess(e: RenderSuccessEventArgs): void,
		rowHeaderHyperlinkClick(e: RowHeaderHyperlinkClickEventArgs): void,
		summaryCellHyperlinkClick(e: SummaryCellHyperlinkClickEventArgs): void,
		valueCellHyperlinkClick(e: ValueCellHyperlinkClickEventArgs): void
	}

	declare export interface AfterServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotGrid.Model,
		type?: string
	}

	declare export interface BeforeServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotGrid.Model,
		type?: string
	}

	declare export interface BeforePivotEnginePopulateEventArgs {
		pivotObject?: any,
		model?: ej.PivotGrid.Model,
		cancel?: boolean,
		type?: string
	}

	declare export interface CellDoubleClickEventArgs {
		selectedData?: any,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotGrid.Model,
		type?: string
	}

	declare export interface CellContextEventArgs {
		args?: any,
		cellPosition?: string,
		cellType?: string,
		rowData?: string,
		uniqueName?: string
	}

	declare export interface CellSelectionEventArgs {
		args?: any,
		cellvalue?: any,
		rowheaders?: any,
		colheaders?: any,
		measure?: any,
		measureValue?: any
	}

	declare export interface ColumnHeaderHyperlinkClickEventArgs {
		args?: any,
		cellPosition?: string,
		cellType?: string,
		rowData?: string,
		uniqueName?: string
	}

	declare export interface DrillSuccessEventArgs {
		cancel?: boolean,
		model?: ej.PivotGrid.Model,
		type?: string
	}

	declare export interface DrillThroughEventArgs {
		data?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotGrid.Model,
		type?: string
	}

	declare export interface LoadEventArgs {
		args?: any,
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotGrid.Model,
		type?: string
	}

	declare export interface RenderCompleteEventArgs {
		args?: any,
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotGrid.Model,
		type?: string
	}

	declare export interface RenderFailureEventArgs {
		args?: any,
		action?: string,
		customObject?: any,
		element?: string,
		message?: any,
		cancel?: boolean,
		model?: ej.PivotGrid.Model,
		type?: string
	}

	declare export interface RenderSuccessEventArgs {
		args?: any,
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotGrid.Model,
		type?: string
	}

	declare export interface RowHeaderHyperlinkClickEventArgs {
		args?: any,
		cellPosition?: string,
		cellType?: string,
		rowData?: string,
		uniqueName?: string
	}

	declare export interface SummaryCellHyperlinkClickEventArgs {
		args?: any,
		cellPosition?: string,
		cellType?: string,
		rowData?: string,
		uniqueName?: string
	}

	declare export interface ValueCellHyperlinkClickEventArgs {
		args?: any,
		cellPosition?: string,
		cellType?: string,
		rowData?: string,
		uniqueName?: string
	}

	declare export interface DataSourceColumnsAdvancedFilter {
		name?: string,
		labelFilterOperator?: string,
		valueFilterOperator?: string,
		advancedFilterType?: string,
		values?: string
	}

	declare export interface DataSourceColumn {
		fieldName?: string,
		fieldCaption?: string,
		advancedFilter?: Array<DataSourceColumnsAdvancedFilter>,
		isNamedSets?: boolean
	}

	declare export interface DataSourceRowsAdvancedFilter {
		name?: string,
		labelFilterOperator?: string,
		valueFilterOperator?: string,
		advancedFilterType?: string,
		values?: string
	}

	declare export interface DataSourceRow {
		fieldName?: string,
		fieldCaption?: string,
		advancedFilter?: Array<DataSourceRowsAdvancedFilter>,
		isNamedSets?: boolean
	}

	declare export interface DataSourceValue {
		measures?: Array<any>,
		axis?: string,
		fieldName?: string,
		fieldCaption?: string,
		isCalculatedField?: boolean,
		formula?: string
	}

	declare export interface DataSourceFilter {
		fieldName?: string,
		fieldCaption?: string,
		isNamedSets?: boolean
	}

	declare export interface DataSource {
		catalog?: string,
		columns?: Array<DataSourceColumn>,
		cube?: string,
		data?: any,
		rows?: Array<DataSourceRow>,
		values?: Array<DataSourceValue>,
		enableAdvancedFilter?: boolean,
		filters?: Array<DataSourceFilter>
	}

	declare export interface HyperlinkSettings {
		enableColumnHeaderHyperlink?: boolean,
		enableRowHeaderHyperlink?: boolean,
		enableSummaryCellHyperlink?: boolean,
		enableValueCellHyperlink?: boolean
	}

	declare export interface ServiceMethodSettings {
		drillDown?: string,
		exportPivotGrid?: string,
		deferUpdate?: string,
		fetchMembers?: string,
		filtering?: string,
		initialize?: string,
		nodeDropped?: string,
		nodeStateModified?: string,
		paging?: string,
		sorting?: string,
		memberExpand?: string,
		writeBack?: string
	}

			
}

declare module 'PivotSchemaDesigner' {
		declare export interface Model {
		cssClass?: string,
		customObject?: any,
		enableWrapper?: boolean,
		enableRTL?: boolean,
		showKPI?: boolean,
		showNamedSets?: boolean,
		enableDragDrop?: boolean,
		filters?: Array<any>,
		height?: string,
		locale?: string,
		pivotCalculations?: Array<any>,
		pivotColumns?: Array<any>,
		pivotControl?: any,
		pivotRows?: Array<any>,
		pivotTableFields?: Array<any>,
		serviceMethod?: ServiceMethod,
		url?: string,
		width?: string,
		afterServiceInvoke(e: AfterServiceInvokeEventArgs): void,
		beforeServiceInvoke(e: BeforeServiceInvokeEventArgs): void,
		dragMove(e: DragMoveEventArgs): void
	}

	declare export interface AfterServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotSchemaDesigner.Model,
		type?: string
	}

	declare export interface BeforeServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotSchemaDesigner.Model,
		type?: string
	}

	declare export interface DragMoveEventArgs {
		dragTarget?: any,
		draggedElementData?: any,
		cancel?: boolean,
		model?: ej.PivotSchemaDesigner.Model
	}

	declare export interface ServiceMethod {
		fetchMembers?: string,
		filtering?: string,
		memberExpand?: string,
		nodeDropped?: string,
		nodeStateModified?: string,
		removeButton?: string
	}

			
}

declare module 'PivotPager' {
		declare export interface Model {
		categoricalCurrentPage?: number,
		categoricalPageCount?: number,
		locale?: string,
		mode?: ej.PivotPager.Mode | string,
		seriesCurrentPage?: number,
		seriesPageCount?: number,
		targetControlID?: string
	}

			
}

declare module 'PivotChart' {
		declare export interface Model {
		analysisMode?: any,
		cssClass?: string,
		commonSeriesOptions?: any,
		currentReport?: string,
		dataSource?: DataSource,
		customObject?: any,
		enable3D?: boolean,
		enableRTL?: boolean,
		isResponsive?: boolean,
		legend?: any,
		locale?: string,
		operationalMode?: any,
		primaryXAxis?: any,
		primaryYAxis?: any,
		rotation?: number,
		serviceMethodSettings?: ServiceMethodSettings,
		size?: any,
		url?: string,
		load(e: LoadEventArgs): void,
		afterServiceInvoke(e: AfterServiceInvokeEventArgs): void,
		beforeServiceInvoke(e: BeforeServiceInvokeEventArgs): void,
		drillSuccess(e: DrillSuccessEventArgs): void,
		renderComplete(e: RenderCompleteEventArgs): void,
		renderFailure(e: RenderFailureEventArgs): void,
		renderSuccess(e: RenderSuccessEventArgs): void
	}

	declare export interface LoadEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotChart.Model,
		type?: string
	}

	declare export interface AfterServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotChart.Model,
		type?: string
	}

	declare export interface BeforeServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotChart.Model,
		type?: string
	}

	declare export interface DrillSuccessEventArgs {
		cancel?: boolean,
		model?: ej.PivotChart.Model,
		type?: string
	}

	declare export interface RenderCompleteEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotChart.Model,
		type?: string
	}

	declare export interface RenderFailureEventArgs {
		action?: string,
		customObject?: any,
		message?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotChart.Model,
		type?: string
	}

	declare export interface RenderSuccessEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotChart.Model,
		type?: string
	}

	declare export interface DataSourceColumn {
		fieldName?: string,
		fieldCaption?: string,
		isNamedSets?: boolean
	}

	declare export interface DataSourceRow {
		fieldName?: string,
		fieldCaption?: string,
		isNamedSets?: boolean
	}

	declare export interface DataSourceValue {
		measures?: Array<any>,
		axis?: string,
		fieldName?: string,
		fieldCaption?: string
	}

	declare export interface DataSourceFilter {
		fieldName?: string,
		fieldCaption?: string,
		isNamedSets?: boolean
	}

	declare export interface DataSource {
		catalog?: string,
		columns?: Array<DataSourceColumn>,
		cube?: string,
		data?: any,
		rows?: Array<DataSourceRow>,
		values?: Array<DataSourceValue>,
		filters?: Array<DataSourceFilter>
	}

	declare export interface ServiceMethodSettings {
		drillDown?: string,
		exportPivotChart?: string,
		initialize?: string
	}

			
}

declare module 'PivotClient' {
		declare export interface Model {
		chartType?: ej.PivotChart.ChartTypes | string,
		clientExportMode?: string,
		cssClass?: string,
		customObject?: any,
		displaySettings?: DisplaySettings,
		enableDeferUpdate?: boolean,
		enableRTL?: boolean,
		enableMeasureGroups?: boolean,
		gridLayout?: ej.PivotGrid.Layout | string,
		locale?: string,
		serviceMethodSettings?: ServiceMethodSettings,
		title?: string,
		url?: string,
		afterServiceInvoke(e: AfterServiceInvokeEventArgs): void,
		beforeServiceInvoke(e: BeforeServiceInvokeEventArgs): void,
		chartLoad(e: ChartLoadEventArgs): void,
		load(e: LoadEventArgs): void,
		renderComplete(e: RenderCompleteEventArgs): void,
		renderFailure(e: RenderFailureEventArgs): void,
		renderSuccess(e: RenderSuccessEventArgs): void
	}

	declare export interface AfterServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotClient.Model,
		type?: string
	}

	declare export interface BeforeServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotClient.Model,
		type?: string
	}

	declare export interface ChartLoadEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotClient.Model,
		type?: string
	}

	declare export interface LoadEventArgs {
		element?: string,
		cancel?: boolean,
		model?: ej.PivotClient.Model,
		type?: string
	}

	declare export interface RenderCompleteEventArgs {
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotClient.Model,
		type?: string
	}

	declare export interface RenderFailureEventArgs {
		customObject?: any,
		element?: string,
		message?: any,
		cancel?: boolean,
		model?: ej.PivotClient.Model,
		type?: string
	}

	declare export interface RenderSuccessEventArgs {
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotClient.Model,
		type?: string
	}

	declare export interface DisplaySettings {
		controlPlacement?: ej.PivotClient.ControlPlacement | string,
		defaultView?: ej.PivotClient.DefaultView | string,
		enableFullScreen?: boolean,
		enableTogglePanel?: boolean,
		isResponsive?: boolean,
		mode?: ej.PivotClient.DisplayMode | string
	}

	declare export interface ServiceMethodSettings {
		cubeChanged?: string,
		exportPivotClient?: string,
		fetchMemberTreeNodes?: string,
		fetchReportList?: string,
		filterElement?: string,
		initialize?: string,
		loadReport?: string,
		mdxQuery?: string,
		measureGroupChanged?: string,
		memberExpand?: string,
		nodeDropped?: string,
		removeSplitButton?: string,
		saveReport?: string,
		toggleAxis?: string,
		toolbarServices?: string,
		updateReport?: string
	}

			
}

declare module 'PivotGauge' {
		declare export interface Model {
		backgroundColor?: string,
		columnsCount?: number,
		cssClass?: string,
		customObject?: any,
		dataSource?: DataSource,
		enableTooltip?: boolean,
		enableRTL?: boolean,
		isResponsive?: boolean,
		labelFormatSettings?: LabelFormatSettings,
		locale?: string,
		rowsCount?: number,
		scales?: any,
		serviceMethodSettings?: ServiceMethodSettings,
		showHeaderLabel?: boolean,
		url?: string,
		afterServiceInvoke(e: AfterServiceInvokeEventArgs): void,
		beforeServiceInvoke(e: BeforeServiceInvokeEventArgs): void,
		load(e: LoadEventArgs): void,
		renderComplete(e: RenderCompleteEventArgs): void,
		renderFailure(e: RenderFailureEventArgs): void,
		renderSuccess(e: RenderSuccessEventArgs): void
	}

	declare export interface AfterServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotGauge.Model,
		type?: string
	}

	declare export interface BeforeServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotGauge.Model,
		type?: string
	}

	declare export interface LoadEventArgs {
		cancel?: boolean,
		model?: ej.PivotGauge.Model,
		type?: string
	}

	declare export interface RenderCompleteEventArgs {
		element?: string,
		customObject?: any,
		cancel?: boolean,
		model?: ej.PivotGauge.Model,
		type?: string
	}

	declare export interface RenderFailureEventArgs {
		element?: string,
		customObject?: any,
		message?: any,
		cancel?: boolean,
		model?: ej.PivotGauge.Model,
		type?: string,
		responseJSON?: any
	}

	declare export interface RenderSuccessEventArgs {
		element?: string,
		customObject?: any,
		cancel?: boolean,
		model?: ej.PivotGauge.Model,
		type?: string
	}

	declare export interface DataSourceColumn {
		fieldName?: string,
		fieldCaption?: string,
		isNamedSets?: boolean
	}

	declare export interface DataSourceRowsFilterItems {
		filterType?: string,
		values?: Array<any>
	}

	declare export interface DataSourceRow {
		fieldName?: string,
		fieldCaption?: string,
		filterItems?: DataSourceRowsFilterItems,
		isNamedSets?: boolean
	}

	declare export interface DataSourceValue {
		measures?: Array<any>,
		axis?: string,
		fieldName?: string,
		fieldCaption?: string
	}

	declare export interface DataSourceFilter {
		fieldName?: string,
		fieldCaption?: string,
		isNamedSets?: boolean
	}

	declare export interface DataSource {
		catalog?: string,
		columns?: Array<DataSourceColumn>,
		cube?: string,
		data?: any,
		rows?: Array<DataSourceRow>,
		values?: Array<DataSourceValue>,
		filters?: Array<DataSourceFilter>
	}

	declare export interface LabelFormatSettings {
		numberFormat?: ej.PivotGauge.NumberFormat | string,
		decimalPlaces?: number,
		prefixText?: string,
		suffixText?: string
	}

	declare export interface ServiceMethodSettings {
		initialize?: string
	}

			
}

declare module 'PivotTreeMap' {
		declare export interface Model {
		cssClass?: string,
		currentReport?: string,
		dataSource?: DataSource,
		customObject?: any,
		enableRTL?: boolean,
		isResponsive?: boolean,
		locale?: string,
		operationalMode?: any,
		serviceMethodSettings?: ServiceMethodSettings,
		url?: string,
		afterServiceInvoke(e: AfterServiceInvokeEventArgs): void,
		beforeServiceInvoke(e: BeforeServiceInvokeEventArgs): void,
		drillSuccess(e: DrillSuccessEventArgs): void,
		renderComplete(e: RenderCompleteEventArgs): void,
		renderFailure(e: RenderFailureEventArgs): void,
		renderSuccess(e: RenderSuccessEventArgs): void
	}

	declare export interface AfterServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotTreeMap.Model,
		type?: string
	}

	declare export interface BeforeServiceInvokeEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotTreeMap.Model,
		type?: string
	}

	declare export interface DrillSuccessEventArgs {
		
	}

	declare export interface RenderCompleteEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotTreeMap.Model,
		type?: string
	}

	declare export interface RenderFailureEventArgs {
		action?: string,
		customObject?: any,
		message?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotTreeMap.Model,
		type?: string
	}

	declare export interface RenderSuccessEventArgs {
		action?: string,
		customObject?: any,
		element?: string,
		cancel?: boolean,
		model?: ej.PivotTreeMap.Model,
		type?: string
	}

	declare export interface DataSourceColumn {
		fieldName?: string,
		fieldCaption?: string,
		isNamedSets?: boolean
	}

	declare export interface DataSourceRow {
		fieldName?: string,
		fieldCaption?: string,
		isNamedSets?: boolean
	}

	declare export interface DataSourceValue {
		measures?: Array<any>,
		axis?: string,
		fieldName?: string,
		fieldCaption?: string
	}

	declare export interface DataSourceFilter {
		fieldName?: string,
		fieldCaption?: string,
		isNamedSets?: boolean
	}

	declare export interface DataSource {
		catalog?: string,
		columns?: Array<DataSourceColumn>,
		cube?: string,
		data?: any,
		rows?: Array<DataSourceRow>,
		values?: Array<DataSourceValue>,
		filters?: Array<DataSourceFilter>
	}

	declare export interface ServiceMethodSettings {
		initialize?: string,
		drillDown?: string
	}

			
}

declare module 'Schedule' {
		declare export interface Model {
		allowDragAndDrop?: boolean,
		allowKeyboardNavigation?: boolean,
		appointmentSettings?: AppointmentSettings,
		appointmentTemplateId?: string,
		cssClass?: string,
		categorizeSettings?: CategorizeSettings,
		cellHeight?: string,
		cellWidth?: string,
		contextMenuSettings?: ContextMenuSettings,
		currentDate?: any,
		currentView?: string | ej.Schedule.CurrentView,
		dateFormat?: string,
		showAppointmentNavigator?: boolean,
		enableAppointmentResize?: boolean,
		enableLoadOnDemand?: boolean,
		enablePersistence?: boolean,
		enableRTL?: boolean,
		endHour?: number,
		group?: Group,
		height?: string,
		workHours?: WorkHours,
		isDST?: boolean,
		isResponsive?: boolean,
		locale?: string,
		maxDate?: any,
		minDate?: any,
		orientation?: string | ej.Schedule.Orientation,
		prioritySettings?: PrioritySettings,
		readOnly?: boolean,
		reminderSettings?: ReminderSettings,
		renderDates?: RenderDates,
		resourceHeaderTemplateId?: string,
		resources?: Array<Resource>,
		showAllDayRow?: boolean,
		showCurrentTimeIndicator?: boolean,
		showHeaderBar?: boolean,
		showLocationField?: boolean,
		showTimeZoneFields?: boolean,
		showQuickWindow?: boolean,
		startHour?: number,
		timeMode?: string | ej.Schedule.TimeMode,
		timeZone?: string,
		timeZoneCollection?: TimeZoneCollection,
		views?: Array<any>,
		width?: string,
		enableRecurrenceValidation?: boolean,
		agendaViewSettings?: AgendaViewSettings,
		firstDayOfWeek?: string,
		workWeek?: Array<any>,
		tooltipSettings?: TooltipSettings,
		timeScale?: TimeScale,
		showDeleteConfirmationDialog?: boolean,
		allDayCellsTemplateId?: string,
		workCellsTemplateId?: string,
		dateHeaderTemplateId?: string,
		showOverflowButton?: boolean,
		appointmentDragArea?: string,
		showNextPrevMonth?: boolean,
		blockoutSettings?: BlockoutSettings,
		actionBegin(e: ActionBeginEventArgs): void,
		actionComplete(e: ActionCompleteEventArgs): void,
		appointmentClick(e: AppointmentClickEventArgs): void,
		beforeAppointmentRemove(e: BeforeAppointmentRemoveEventArgs): void,
		beforeAppointmentChange(e: BeforeAppointmentChangeEventArgs): void,
		appointmentHover(e: AppointmentHoverEventArgs): void,
		beforeAppointmentCreate(e: BeforeAppointmentCreateEventArgs): void,
		appointmentWindowOpen(e: AppointmentWindowOpenEventArgs): void,
		beforeContextMenuOpen(e: BeforeContextMenuOpenEventArgs): void,
		cellClick(e: CellClickEventArgs): void,
		cellDoubleClick(e: CellDoubleClickEventArgs): void,
		cellHover(e: CellHoverEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		drag(e: DragEventArgs): void,
		dragStart(e: DragStartEventArgs): void,
		dragStop(e: DragStopEventArgs): void,
		menuItemClick(e: MenuItemClickEventArgs): void,
		navigation(e: NavigationEventArgs): void,
		queryCellInfo(e: QueryCellInfoEventArgs): void,
		reminder(e: ReminderEventArgs): void,
		resize(e: ResizeEventArgs): void,
		resizeStart(e: ResizeStartEventArgs): void,
		resizeStop(e: ResizeStopEventArgs): void,
		overflowButtonClick(e: OverflowButtonClickEventArgs): void,
		overflowButtonHover(e: OverflowButtonHoverEventArgs): void,
		keyDown(e: KeyDownEventArgs): void,
		appointmentCreated(e: AppointmentCreatedEventArgs): void,
		appointmentChanged(e: AppointmentChangedEventArgs): void,
		appointmentRemoved(e: AppointmentRemovedEventArgs): void
	}

	declare export interface ActionBeginEventArgs {
		currentDate?: any,
		cancel?: boolean,
		currentView?: string,
		model?: ej.Schedule.Model,
		requestType?: string,
		target?: any,
		type?: string,
		data?: any,
		id?: number
	}

	declare export interface ActionCompleteEventArgs {
		cancel?: boolean,
		data?: any,
		model?: ej.Schedule.Model,
		requestType?: string,
		type?: string,
		appointment?: any
	}

	declare export interface AppointmentClickEventArgs {
		object?: any,
		appointment?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface BeforeAppointmentRemoveEventArgs {
		cancel?: boolean,
		appointment?: any,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface BeforeAppointmentChangeEventArgs {
		appointment?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface AppointmentHoverEventArgs {
		object?: any,
		appointment?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface BeforeAppointmentCreateEventArgs {
		appointment?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface AppointmentWindowOpenEventArgs {
		object?: any,
		cancel?: boolean,
		endTime?: any,
		model?: ej.Schedule.Model,
		originalEventType?: string,
		startTime?: any,
		target?: any,
		type?: string,
		appointment?: any,
		edit?: boolean
	}

	declare export interface BeforeContextMenuOpenEventArgs {
		object?: any,
		cancel?: boolean,
		cellIndex?: number,
		currentDate?: any,
		resources?: any,
		appointment?: any,
		events?: any,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface CellClickEventArgs {
		object?: any,
		cancel?: boolean,
		endTime?: any,
		model?: ej.Schedule.Model,
		startTime?: any,
		target?: any,
		type?: string
	}

	declare export interface CellDoubleClickEventArgs {
		object?: any,
		cancel?: boolean,
		endTime?: any,
		model?: ej.Schedule.Model,
		startTime?: any,
		target?: any,
		type?: string
	}

	declare export interface CellHoverEventArgs {
		object?: any,
		cancel?: boolean,
		cellIndex?: any,
		currentDate?: any,
		model?: ej.Schedule.Model,
		target?: any,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface DragEventArgs {
		object?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		target?: any,
		type?: string
	}

	declare export interface DragStartEventArgs {
		object?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		target?: any,
		type?: string
	}

	declare export interface DragStopEventArgs {
		object?: any,
		appointment?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface MenuItemClickEventArgs {
		object?: any,
		cancel?: boolean,
		events?: any,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface NavigationEventArgs {
		currentDate?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		currentView?: string,
		previousView?: string,
		target?: any,
		type?: string,
		previousDate?: any
	}

	declare export interface QueryCellInfoEventArgs {
		cancel?: boolean,
		model?: ej.Schedule.Model,
		appointment?: any,
		element?: any,
		requestType?: string,
		cellType?: string,
		currentAppointmentDate?: any,
		cell?: any,
		resource?: any,
		currentDay?: any
	}

	declare export interface ReminderEventArgs {
		cancel?: boolean,
		model?: ej.Schedule.Model,
		type?: string,
		reminderAppointment?: any
	}

	declare export interface ResizeEventArgs {
		object?: any,
		cancel?: boolean,
		element?: any,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface ResizeStartEventArgs {
		object?: any,
		cancel?: boolean,
		element?: any,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface ResizeStopEventArgs {
		object?: any,
		appointment?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		target?: any,
		type?: string
	}

	declare export interface OverflowButtonClickEventArgs {
		object?: any,
		cancel?: boolean,
		events?: any,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface OverflowButtonHoverEventArgs {
		object?: any,
		cancel?: boolean,
		events?: any,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface KeyDownEventArgs {
		cancel?: boolean,
		events?: any,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface AppointmentCreatedEventArgs {
		appointment?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface AppointmentChangedEventArgs {
		appointment?: any,
		cancel?: boolean,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface AppointmentRemovedEventArgs {
		cancel?: boolean,
		appointment?: any,
		model?: ej.Schedule.Model,
		type?: string
	}

	declare export interface AppointmentSettings {
		dataSource?: any | Array<any>,
		query?: string,
		tableName?: string,
		applyTimeOffset?: boolean,
		id?: string,
		startTime?: string,
		endTime?: string,
		subject?: string,
		description?: string,
		recurrence?: string,
		recurrenceRule?: string,
		allDay?: string,
		resourceFields?: string,
		categorize?: string,
		location?: string,
		priority?: string,
		startTimeZone?: string,
		endTimeZone?: string
	}

	declare export interface CategorizeSettings {
		allowMultiple?: boolean,
		enable?: boolean,
		dataSource?: Array<any> | any,
		id?: string,
		text?: string,
		color?: string,
		fontColor?: string
	}

	declare export interface ContextMenuSettingsMenuItems {
		appointment?: Array<any>,
		cells?: Array<any>
	}

	declare export interface ContextMenuSettings {
		enable?: boolean,
		menuItems?: ContextMenuSettingsMenuItems
	}

	declare export interface Group {
		resources?: Array<any>
	}

	declare export interface WorkHours {
		highlight?: boolean,
		start?: number,
		end?: number
	}

	declare export interface PrioritySettings {
		enable?: boolean,
		dataSource?: any | Array<any>,
		text?: string,
		value?: string,
		template?: string
	}

	declare export interface ReminderSettings {
		enable?: boolean,
		alertBefore?: number
	}

	declare export interface RenderDates {
		start?: any,
		end?: any
	}

	declare export interface ResourcesResourceSettings {
		dataSource?: any | Array<any>,
		text?: string,
		id?: string,
		groupId?: string,
		color?: string,
		start?: string,
		end?: string,
		workWeek?: string,
		appointmentClass?: string
	}

	declare export interface Resource {
		field?: string,
		title?: string,
		name?: string,
		allowMultiple?: boolean,
		resourceSettings?: ResourcesResourceSettings
	}

	declare export interface TimeZoneCollection {
		dataSource?: any,
		text?: string,
		id?: string,
		value?: string
	}

	declare export interface AgendaViewSettings {
		daysInAgenda?: number,
		dateColumnTemplateId?: string,
		timeColumnTemplateId?: string
	}

	declare export interface TooltipSettings {
		enable?: boolean,
		templateId?: string
	}

	declare export interface TimeScale {
		enable?: boolean,
		minorSlotCount?: number,
		majorSlot?: number,
		minorSlotTemplateId?: string,
		majorSlotTemplateId?: string
	}

	declare export interface BlockoutSettings {
		enable?: boolean,
		templateId?: string,
		dataSource?: any | Array<any>,
		query?: string,
		tableName?: string,
		id?: string,
		startTime?: string,
		endTime?: string,
		subject?: string,
		isBlockAppointment?: string,
		isAllDay?: string,
		resourceId?: string,
		customStyle?: string
	}

			
}

declare module 'RecurrenceEditor' {
		declare export interface Model {
		frequencies?: Array<any>,
		firstDayOfWeek?: string,
		enableSpinners?: boolean,
		startDate?: any,
		locale?: string,
		dateFormat?: string,
		enableRTL?: boolean,
		selectedRecurrenceType?: number,
		minDate?: any,
		maxDate?: any,
		cssClass?: string,
		change(e: ChangeEventArgs): void
	}

	declare export interface ChangeEventArgs {
		cancel?: boolean,
		model?: ej.RecurrenceEditor.Model,
		type?: string,
		recurrenceRule?: string
	}

			
}

declare module 'Gantt' {
		declare export interface Model {
		addDialogFields?: Array<any>,
		allowColumnResize?: boolean,
		allowGanttChartEditing?: boolean,
		allowKeyboardNavigation?: boolean,
		allowMultiSorting?: boolean,
		allowSelection?: boolean,
		allowSorting?: boolean,
		allowDragAndDrop?: boolean,
		enablePredecessorValidation?: boolean,
		baselineColor?: string,
		baselineEndDateMapping?: string,
		baselineStartDateMapping?: string,
		childMapping?: string,
		columnDialogFields?: Array<any>,
		connectorLineBackground?: string,
		connectorlineWidth?: number,
		cssClass?: string,
		cellTooltipTemplate?: string,
		dragTooltip?: DragTooltip,
		dataSource?: Array<any>,
		dateFormat?: string,
		durationMapping?: string,
		durationUnit?: ej.Gantt.DurationUnit | string,
		editDialogFields?: Array<any>,
		isResponsive?: boolean,
		splitterSettings?: SplitterSettings,
		editSettings?: EditSettings,
		enableAltRow?: boolean,
		enableWBS?: boolean,
		enableWBSPredecessor?: boolean,
		enableCollapseAll?: boolean,
		leftTaskLabelMapping?: string,
		rightTaskLabelMapping?: string,
		leftTaskLabelTemplate?: string,
		rightTaskLabelTemplate?: string,
		enableContextMenu?: boolean,
		enableProgressBarResizing?: boolean,
		enableResize?: boolean,
		enableTaskbarDragTooltip?: boolean,
		enableTaskbarTooltip?: boolean,
		enableVirtualization?: boolean,
		endDateMapping?: string,
		highlightWeekends?: boolean,
		holidays?: Array<any>,
		includeWeekend?: boolean,
		locale?: string,
		milestoneMapping?: string,
		showColumnOptions?: boolean,
		parentTaskbarTemplate?: string,
		selectionType?: ej.Gantt.SelectionType | string,
		parentProgressbarBackground?: string,
		parentTaskbarBackground?: string,
		parentTaskIdMapping?: string,
		predecessorMapping?: string,
		progressbarBackground?: string,
		progressbarHeight?: number,
		progressbarTooltipTemplate?: string,
		progressbarTooltipTemplateId?: string,
		progressMapping?: string,
		query?: any,
		renderBaseline?: boolean,
		resourceIdMapping?: string,
		resourceInfoMapping?: string,
		resourceNameMapping?: string,
		resources?: Array<any>,
		roundOffDayworkingTime?: boolean,
		rowHeight?: number,
		scheduleEndDate?: string,
		scheduleHeaderSettings?: ScheduleHeaderSettings,
		scheduleStartDate?: string,
		selectedRowIndex?: number,
		showColumnChooser?: boolean,
		showGridCellTooltip?: boolean,
		showGridExpandCellTooltip?: boolean,
		showProgressStatus?: boolean,
		showResourceNames?: boolean,
		showTaskNames?: boolean,
		sizeSettings?: SizeSettings,
		selectedCellIndexes?: Array<SelectedCellIndex>,
		sortSettings?: SortSettings,
		splitterPosition?: string,
		startDateMapping?: string,
		stripLines?: Array<any>,
		taskbarBackground?: string,
		taskbarEditingTooltipTemplate?: string,
		taskbarEditingTooltipTemplateId?: string,
		taskbarTooltipTemplate?: string,
		taskbarTemplate?: string,
		milestoneTemplate?: string,
		readOnly?: boolean,
		taskbarTooltipTemplateId?: string,
		taskIdMapping?: string,
		taskNameMapping?: string,
		toolbarSettings?: ToolbarSettings,
		treeColumnIndex?: number,
		selectionMode?: ej.Gantt.SelectionMode | string,
		weekendBackground?: string,
		workingTimeScale?: ej.Gantt.workingTimeScale | string,
		actionBegin(e: ActionBeginEventArgs): void,
		actionComplete(e: ActionCompleteEventArgs): void,
		beginEdit(e: BeginEditEventArgs): void,
		cellSelecting(e: CellSelectingEventArgs): void,
		cellSelected(e: CellSelectedEventArgs): void,
		rowDrag(e: RowDragEventArgs): void,
		rowDragStart(e: RowDragStartEventArgs): void,
		rowDragStop(e: RowDragStopEventArgs): void,
		collapsed(e: CollapsedEventArgs): void,
		collapsing(e: CollapsingEventArgs): void,
		contextMenuOpen(e: ContextMenuOpenEventArgs): void,
		create(e: CreateEventArgs): void,
		endEdit(e: EndEditEventArgs): void,
		expanded(e: ExpandedEventArgs): void,
		expanding(e: ExpandingEventArgs): void,
		load(e: LoadEventArgs): void,
		queryCellInfo(e: QueryCellInfoEventArgs): void,
		queryTaskbarInfo(e: QueryTaskbarInfoEventArgs): void,
		rowDataBound(e: RowDataBoundEventArgs): void,
		rowSelected(e: RowSelectedEventArgs): void,
		rowSelecting(e: RowSelectingEventArgs): void,
		taskbarEdited(e: TaskbarEditedEventArgs): void,
		taskbarEditing(e: TaskbarEditingEventArgs): void,
		toolbarClick(e: ToolbarClickEventArgs): void
	}

	declare export interface ActionBeginEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		columnName?: string,
		requestType?: string,
		columnSortDirection?: string,
		keyValue?: string,
		data?: string,
		recordIndex?: number
	}

	declare export interface ActionCompleteEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		columnName?: string,
		requestType?: string,
		columnSortDirection?: string,
		keyValue?: string,
		data?: string,
		recordIndex?: number
	}

	declare export interface BeginEditEventArgs {
		cancel?: boolean,
		rowElement?: any,
		cellElement?: any,
		data?: any,
		columnIndex?: number
	}

	declare export interface CellSelectingEventArgs {
		cancel?: boolean,
		cellIndex?: number,
		rowIndex?: number,
		targetCell?: any,
		targetRow?: any,
		data?: any,
		model?: any
	}

	declare export interface CellSelectedEventArgs {
		cancel?: boolean,
		cellIndex?: number,
		rowIndex?: number,
		targetCell?: any,
		targetRow?: any,
		data?: any,
		model?: any,
		previousData?: any,
		previousCellIndex?: any,
		previousRowIndex?: any,
		previousTargetCell?: any,
		previousTargetRow?: any
	}

	declare export interface RowDragEventArgs {
		cancel?: boolean,
		draggedRow?: any,
		draggedRowIndex?: number,
		targetRow?: any,
		targetRowIndex?: number,
		canDrop?: boolean,
		model?: any,
		requestType?: string,
		type?: string
	}

	declare export interface RowDragStartEventArgs {
		cancel?: boolean,
		draggedRow?: any,
		draggedRowIndex?: boolean,
		model?: any,
		requestType?: string,
		type?: string
	}

	declare export interface RowDragStopEventArgs {
		cancel?: boolean,
		draggedRow?: any,
		draggedRowIndex?: number,
		targetRow?: any,
		targetRowIndex?: number,
		model?: any,
		requestType?: string,
		type?: string
	}

	declare export interface CollapsedEventArgs {
		cancel?: boolean,
		recordIndex?: number,
		data?: any,
		requestType?: string,
		expanded?: boolean
	}

	declare export interface CollapsingEventArgs {
		cancel?: boolean,
		recordIndex?: number,
		data?: any,
		expanded?: boolean
	}

	declare export interface ContextMenuOpenEventArgs {
		cancel?: boolean,
		contextMenuItems?: Array<any>,
		model?: any,
		requestType?: string,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface EndEditEventArgs {
		cancel?: boolean,
		rowElement?: any,
		cellElement?: any,
		data?: any,
		columnName?: string,
		columnObject?: any
	}

	declare export interface ExpandedEventArgs {
		cancel?: boolean,
		recordIndex?: number,
		data?: any,
		requestType?: string,
		expanded?: boolean
	}

	declare export interface ExpandingEventArgs {
		cancel?: boolean,
		recordIndex?: any,
		data?: any,
		expanded?: boolean
	}

	declare export interface LoadEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface QueryCellInfoEventArgs {
		cancel?: boolean,
		cellElement?: any,
		cellValue?: string,
		data?: any,
		column?: any
	}

	declare export interface QueryTaskbarInfoEventArgs {
		cancel?: boolean,
		TaskbarBackground?: string,
		ProgressbarBackground?: string,
		parentTaskbarBackground?: string,
		parentProgressbarBackground?: string,
		data?: any
	}

	declare export interface RowDataBoundEventArgs {
		cancel?: boolean,
		rowElement?: any,
		data?: any
	}

	declare export interface RowSelectedEventArgs {
		cancel?: boolean,
		targetRow?: any,
		recordIndex?: number,
		data?: any
	}

	declare export interface RowSelectingEventArgs {
		cancel?: boolean,
		data?: any,
		recordIndex?: string,
		targetChartRow?: any,
		targetGridRow?: any,
		previousData?: any,
		previousIndex?: string,
		previousChartRow?: any,
		previousGridRow?: any
	}

	declare export interface TaskbarEditedEventArgs {
		cancel?: boolean,
		data?: any,
		previousData?: any,
		dragging?: boolean,
		leftResizing?: boolean,
		rightResizing?: boolean,
		progressResizing?: boolean,
		editingFields?: any,
		model?: any
	}

	declare export interface TaskbarEditingEventArgs {
		cancel?: boolean,
		model?: any,
		rowData?: any,
		editingFields?: any,
		type?: string
	}

	declare export interface ToolbarClickEventArgs {
		cancel?: boolean,
		currentTarget?: any,
		model?: any,
		itemName?: string,
		type?: string
	}

	declare export interface DragTooltip {
		showTooltip?: boolean,
		tooltipItems?: Array<any>,
		tooltipTemplate?: string
	}

	declare export interface SplitterSettings {
		position?: string,
		index?: string
	}

	declare export interface EditSettings {
		allowAdding?: boolean,
		allowDeleting?: boolean,
		allowEditing?: boolean,
		allowIndent?: boolean,
		allowOutdent?: boolean,
		beginEditAction?: ej.Gantt.BeginEditAction | string,
		editMode?: string
	}

	declare export interface ScheduleHeaderSettings {
		dayHeaderFormat?: string,
		hourHeaderFormat?: string,
		minutesPerInterval?: ej.Gantt.minutesPerInterval | string,
		monthHeaderFormat?: string,
		scheduleHeaderType?: ej.Gantt.ScheduleHeaderType | string,
		timescaleStartDateMode?: ej.Gantt.TimescaleRoundMode | string,
		weekendBackground?: string,
		weekHeaderFormat?: string,
		yearHeaderFormat?: string
	}

	declare export interface SizeSettings {
		height?: string,
		width?: string
	}

	declare export interface SelectedCellIndex {
		rowIndex?: number,
		cellIndex?: number
	}

	declare export interface SortSettings {
		sortedColumns?: Array<any>
	}

	declare export interface ToolbarSettings {
		showToolbar?: boolean,
		toolbarItems?: Array<any>
	}

			
}

declare module 'ReportViewer' {
		declare export interface Model {
		dataSources?: Array<DataSource>,
		enablePageCache?: boolean,
		exportSettings?: ExportSettings,
		isResponsive?: boolean,
		locale?: string,
		pageSettings?: PageSettings,
		parameters?: Array<Parameter>,
		printMode?: boolean,
		printOptions?: ej.ReportViewer.PrintOptions | string,
		processingMode?: ej.ReportViewer.ProcessingMode | string,
		renderMode?: ej.ReportViewer.RenderMode | string,
		reportPath?: string,
		reportServerUrl?: string,
		reportServiceUrl?: string,
		toolbarSettings?: ToolbarSettings,
		zoomFactor?: number,
		destroy(e: DestroyEventArgs): void,
		drillThrough(e: DrillThroughEventArgs): void,
		renderingBegin(e: RenderingBeginEventArgs): void,
		renderingComplete(e: RenderingCompleteEventArgs): void,
		reportError(e: ReportErrorEventArgs): void,
		reportExport(e: ReportExportEventArgs): void,
		reportLoaded(e: ReportLoadedEventArgs): void,
		viewReportClick(e: ViewReportClickEventArgs): void
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface DrillThroughEventArgs {
		cancel?: boolean,
		actionInfo?: any,
		model?: any,
		type?: string
	}

	declare export interface RenderingBeginEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface RenderingCompleteEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		reportParameters?: any
	}

	declare export interface ReportErrorEventArgs {
		cancel?: boolean,
		error?: string,
		model?: any,
		type?: string
	}

	declare export interface ReportExportEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ReportLoadedEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ViewReportClickEventArgs {
		cancel?: boolean,
		parameters?: any,
		model?: any,
		type?: string
	}

	declare export interface DataSource {
		name?: string,
		values?: Array<any>
	}

	declare export interface ExportSettings {
		exportOptions?: ej.ReportViewer.ExportOptions | string,
		excelFormat?: ej.ReportViewer.ExcelFormats | string,
		wordFormat?: ej.ReportViewer.WordFormats | string
	}

	declare export interface PageSettings {
		orientation?: ej.ReportViewer.Orientation | string,
		paperSize?: ej.ReportViewer.PaperSize | string
	}

	declare export interface Parameter {
		labels?: Array<any>,
		name?: string,
		nullable?: boolean,
		prompt?: string,
		values?: Array<any>
	}

	declare export interface ToolbarSettings {
		click?: string,
		items?: ej.ReportViewer.ToolbarItems | string,
		showToolbar?: boolean,
		showTooltip?: boolean,
		templateId?: string
	}

			
}

declare module 'TreeGrid' {
		declare export interface Model {
		allowColumnResize?: boolean,
		allowDragAndDrop?: boolean,
		allowFiltering?: boolean,
		allowKeyboardNavigation?: boolean,
		allowMultiSorting?: boolean,
		allowSelection?: boolean,
		allowSorting?: boolean,
		allowPaging?: boolean,
		altRowTemplateID?: string,
		childMapping?: string,
		columns?: Array<Column>,
		columnDialogFields?: Array<any>,
		contextMenuSettings?: ContextMenuSettings,
		cssClass?: string,
		dataSource?: Array<any>,
		headerTextOverflow?: string,
		dragTooltip?: DragTooltip,
		editSettings?: EditSettings,
		enableAltRow?: boolean,
		enableCollapseAll?: boolean,
		enableResize?: boolean,
		enableVirtualization?: boolean,
		filterSettings?: FilterSettings,
		locale?: string,
		idMapping?: string,
		isResponsive?: boolean,
		parentIdMapping?: string,
		pageSettings?: PageSettings,
		cellTooltipTemplate?: string,
		query?: any,
		rowHeight?: number,
		rowTemplateID?: string,
		selectedRowIndex?: number,
		selectionMode?: ej.TreeGrid.SelectionMode | string,
		selectionType?: ej.TreeGrid.SelectionType | string,
		showColumnOptions?: boolean,
		showColumnChooser?: boolean,
		showDetailsRow?: boolean,
		showDetailsRowInfoColumn?: boolean,
		detailsTemplate?: string,
		detailsRowHeight?: number,
		showSummaryRow?: boolean,
		showTotalSummary?: boolean,
		summaryRows?: Array<any>,
		showGridCellTooltip?: boolean,
		showGridExpandCellTooltip?: boolean,
		sizeSettings?: SizeSettings,
		sortSettings?: SortSettings,
		toolbarSettings?: ToolbarSettings,
		treeColumnIndex?: number,
		actionBegin(e: ActionBeginEventArgs): void,
		actionComplete(e: ActionCompleteEventArgs): void,
		beginEdit(e: BeginEditEventArgs): void,
		collapsed(e: CollapsedEventArgs): void,
		collapsing(e: CollapsingEventArgs): void,
		columnResized(e: ColumnResizedEventArgs): void,
		columnResizeStart(e: ColumnResizeStartEventArgs): void,
		columnResizeEnd(e: ColumnResizeEndEventArgs): void,
		contextMenuOpen(e: ContextMenuOpenEventArgs): void,
		create(e: CreateEventArgs): void,
		endEdit(e: EndEditEventArgs): void,
		expanded(e: ExpandedEventArgs): void,
		expanding(e: ExpandingEventArgs): void,
		load(e: LoadEventArgs): void,
		queryCellInfo(e: QueryCellInfoEventArgs): void,
		rowDataBound(e: RowDataBoundEventArgs): void,
		rowDrag(e: RowDragEventArgs): void,
		rowDragStart(e: RowDragStartEventArgs): void,
		rowDragStop(e: RowDragStopEventArgs): void,
		cellSelecting(e: CellSelectingEventArgs): void,
		cellSelected(e: CellSelectedEventArgs): void,
		rowSelected(e: RowSelectedEventArgs): void,
		rowSelecting(e: RowSelectingEventArgs): void,
		toolbarClick(e: ToolbarClickEventArgs): void
	}

	declare export interface ActionBeginEventArgs {
		cancel?: boolean,
		columnName?: string,
		model?: any,
		requestType?: string,
		type?: string,
		columnSortDirection?: string,
		keyValue?: string,
		data?: string
	}

	declare export interface ActionCompleteEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		columnName?: string,
		requestType?: string,
		columnSortDirection?: string,
		keyValue?: string,
		data?: string,
		recordIndex?: number
	}

	declare export interface BeginEditEventArgs {
		cancel?: boolean,
		rowElement?: any,
		cellElement?: any,
		data?: any,
		columnIndex?: number
	}

	declare export interface CollapsedEventArgs {
		cancel?: boolean,
		recordIndex?: number,
		data?: any,
		requestType?: string,
		expanded?: boolean,
		type?: string
	}

	declare export interface CollapsingEventArgs {
		cancel?: boolean,
		recordIndex?: number,
		data?: any,
		type?: string,
		expanded?: boolean
	}

	declare export interface ColumnResizedEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		column?: any,
		columnIndex?: number,
		newWidth?: number,
		oldWidth?: number
	}

	declare export interface ColumnResizeStartEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		column?: any,
		columnIndex?: number,
		oldWidth?: number,
		target?: any
	}

	declare export interface ColumnResizeEndEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		column?: any,
		columnIndex?: number,
		extra?: number,
		newWidth?: number,
		oldWidth?: number,
		target?: any
	}

	declare export interface ContextMenuOpenEventArgs {
		cancel?: boolean,
		contextMenuItems?: Array<any>,
		model?: any,
		requestType?: string,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface EndEditEventArgs {
		cancel?: boolean,
		rowElement?: any,
		cellElement?: any,
		data?: any,
		columnName?: string,
		columnObject?: any
	}

	declare export interface ExpandedEventArgs {
		cancel?: boolean,
		recordIndex?: number,
		data?: any,
		requestType?: string,
		expanded?: boolean,
		type?: string
	}

	declare export interface ExpandingEventArgs {
		cancel?: boolean,
		recordIndex?: number,
		data?: any,
		type?: string,
		expanded?: boolean
	}

	declare export interface LoadEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface QueryCellInfoEventArgs {
		cancel?: boolean,
		cellElement?: any,
		cellValue?: string,
		data?: any,
		column?: any
	}

	declare export interface RowDataBoundEventArgs {
		cancel?: boolean,
		rowElement?: any,
		data?: any
	}

	declare export interface RowDragEventArgs {
		cancel?: boolean,
		draggedRow?: any,
		draggedRowIndex?: number,
		targetRow?: any,
		targetRowIndex?: number,
		canDrop?: boolean,
		model?: any,
		requestType?: string,
		type?: string
	}

	declare export interface RowDragStartEventArgs {
		cancel?: boolean,
		draggedRow?: any,
		draggedRowIndex?: boolean,
		model?: any,
		requestType?: string,
		type?: string
	}

	declare export interface RowDragStopEventArgs {
		cancel?: boolean,
		draggedRow?: any,
		draggedRowIndex?: number,
		targetRow?: any,
		targetRowIndex?: number,
		model?: any,
		requestType?: string,
		type?: string
	}

	declare export interface CellSelectingEventArgs {
		cancel?: boolean,
		cellIndex?: number,
		rowIndex?: number,
		targetCell?: any,
		targetRow?: any,
		data?: any,
		model?: any
	}

	declare export interface CellSelectedEventArgs {
		cancel?: boolean,
		cellIndex?: number,
		rowIndex?: number,
		targetCell?: any,
		targetRow?: any,
		data?: any,
		model?: any,
		previousData?: any,
		previousCellIndex?: any,
		previousRowIndex?: any,
		previousTargetCell?: any,
		previousTargetRow?: any
	}

	declare export interface RowSelectedEventArgs {
		cancel?: boolean,
		targetRow?: any,
		recordIndex?: number,
		data?: any,
		type?: string
	}

	declare export interface RowSelectingEventArgs {
		cancel?: boolean,
		data?: any,
		recordIndex?: string,
		targetRow?: any,
		previousData?: any,
		previousIndex?: string,
		previousTreeGridRow?: any
	}

	declare export interface ToolbarClickEventArgs {
		cancel?: boolean,
		currentTarget?: any,
		model?: any,
		itemName?: string,
		type?: string
	}

	declare export interface Column {
		allowFiltering?: boolean,
		allowSorting?: boolean,
		allowCellSelection?: boolean,
		editType?: ej.TreeGrid.EditingType | string,
		field?: string,
		filterEditType?: ej.TreeGrid.EditingType | string,
		headerText?: string,
		visible?: boolean,
		headerTemplateID?: string,
		format?: any,
		isTemplateColumn?: boolean,
		headerTextAlign?: ej.TextAlign | string,
		isFrozen?: boolean,
		textAlign?: ej.TextAlign | string,
		templateID?: string,
		allowEditing?: boolean,
		allowFreezing?: boolean
	}

	declare export interface ContextMenuSettings {
		contextMenuItems?: Array<any>,
		showContextMenu?: boolean
	}

	declare export interface DragTooltip {
		showTooltip?: boolean,
		tooltipItems?: Array<any>,
		tooltipTemplate?: string
	}

	declare export interface EditSettings {
		allowAdding?: boolean,
		allowDeleting?: boolean,
		allowEditing?: boolean,
		beginEditAction?: ej.TreeGrid.BeginEditAction | string,
		editMode?: ej.TreeGrid.EditMode | string,
		rowPosition?: ej.TreeGrid.RowPosition | string
	}

	declare export interface FilterSettings {
		filterBarMode?: string,
		filteredColumns?: Array<any>
	}

	declare export interface PageSettings {
		pageCount?: number,
		pageSize?: number,
		totalRecordsCount?: number,
		currentPage?: number,
		pageSizeMode?: ej.TreeGrid.PageSizeMode | string,
		template?: string
	}

	declare export interface SizeSettings {
		height?: string,
		width?: string
	}

	declare export interface SortSettings {
		sortedColumns?: Array<any>
	}

	declare export interface ToolbarSettings {
		showToolbar?: boolean,
		toolbarItems?: Array<any>
	}

			
}

declare module 'GroupButton' {
		declare export interface Model {
		cssClass?: string,
		dataSource?: any,
		enableRTL?: boolean,
		enabled?: boolean,
		fields?: any,
		groupButtonMode?: ej.GroupButtonMode | string,
		height?: string | number,
		htmlAttributes?: any,
		orientation?: ej.Orientation | string,
		query?: any,
		selectedItemIndex?: number[] | string[],
		showRoundedCorner?: boolean,
		size?: ej.ButtonSize | string,
		width?: string | number,
		beforeSelect(e: BeforeSelectEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		keyPress(e: KeyPressEventArgs): void,
		select(e: SelectEventArgs): void
	}

	declare export interface BeforeSelectEventArgs {
		disabled?: boolean,
		element?: any,
		event?: any,
		id?: string,
		index?: number,
		model?: ej.GroupButton.Model,
		selected?: boolean,
		type?: string,
		status?: boolean
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: ej.GroupButton.Model,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: ej.GroupButton.Model,
		type?: string
	}

	declare export interface KeyPressEventArgs {
		disabled?: boolean,
		element?: any,
		event?: any,
		id?: string,
		index?: number,
		model?: ej.GroupButton.Model,
		selected?: boolean,
		type?: string,
		status?: boolean
	}

	declare export interface SelectEventArgs {
		disabled?: boolean,
		element?: any,
		event?: any,
		id?: string,
		index?: number,
		model?: ej.GroupButton.Model,
		selected?: boolean,
		type?: string,
		status?: boolean
	}

			
}

declare module 'NavigationDrawer' {
		declare export interface Model {
		contentId?: string,
		cssClass?: string,
		direction?: ej.Direction | string,
		enableListView?: boolean,
		items?: Array<any>,
		listViewSettings?: any,
		position?: string,
		targetId?: string,
		type?: string,
		width?: number,
		beforeClose(e: BeforeCloseEventArgs): void,
		open(e: OpenEventArgs): void,
		swipe(e: SwipeEventArgs): void
	}

	declare export interface BeforeCloseEventArgs {
		cancel?: boolean,
		model?: ej.NavigationDrawer.Model,
		type?: string
	}

	declare export interface OpenEventArgs {
		cancel?: boolean,
		model?: ej.NavigationDrawer.Model,
		type?: string
	}

	declare export interface SwipeEventArgs {
		cancel?: boolean,
		model?: ej.NavigationDrawer.Model,
		type?: string
	}

			
}

declare module 'RadialMenu' {
		declare export interface Model {
		autoOpen?: boolean,
		backImageClass?: string,
		cssClass?: string,
		enableAnimation?: boolean,
		imageClass?: string,
		items?: Array<Item>,
		radius?: number,
		targetElementId?: string,
		position?: any,
		click(e: ClickEventArgs): void,
		open(e: OpenEventArgs): void,
		close(e: CloseEventArgs): void
	}

	declare export interface ClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		item?: any,
		itemName?: string
	}

	declare export interface OpenEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface CloseEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ItemsBadge {
		enabled?: boolean,
		value?: number
	}

	declare export interface ItemsSliderSettings {
		ticks?: Array<any>,
		strokeWidth?: number,
		labelSpace?: number
	}

	declare export interface Item {
		imageUrl?: string,
		text?: string,
		enabled?: boolean,
		click?: string,
		badge?: ItemsBadge,
		type?: string,
		sliderSettings?: ItemsSliderSettings,
		items?: Array<any>
	}

			
}

declare module 'Tile' {
		declare export interface Model {
		badge?: Badge,
		caption?: Caption,
		cssClass?: string,
		enablePersistence?: boolean,
		height?: number,
		imageClass?: string,
		imagePosition?: ej.Tile.ImagePosition | string,
		imageTemplateId?: string,
		imageUrl?: string,
		liveTile?: LiveTile,
		tileSize?: ej.Tile.TileSize | string,
		width?: number,
		showRoundedCorner?: boolean,
		allowSelection?: boolean,
		backgroundColor?: string,
		mouseDown(e: MouseDownEventArgs): void,
		mouseUp(e: MouseUpEventArgs): void
	}

	declare export interface MouseDownEventArgs {
		cancel?: boolean,
		model?: boolean,
		type?: boolean,
		text?: string,
		index?: number
	}

	declare export interface MouseUpEventArgs {
		cancel?: boolean,
		model?: boolean,
		type?: boolean,
		text?: boolean,
		index?: number
	}

	declare export interface Badge {
		enabled?: boolean,
		maxValue?: number,
		minValue?: number,
		text?: string,
		value?: number,
		position?: ej.Tile.BadgePosition | string
	}

	declare export interface Caption {
		enabled?: boolean,
		text?: string,
		alignment?: ej.Tile.CaptionAlignment | string,
		position?: ej.Tile.CaptionPosition | string,
		icon?: string
	}

	declare export interface LiveTile {
		enabled?: boolean,
		imageClass?: Array<any>,
		imageTemplateId?: Array<any>,
		imageUrl?: Array<any>,
		type?: ej.Tile.liveTileType | string,
		updateInterval?: number,
		text?: Array<any>
	}

			
}

declare module 'RadialSlider' {
		declare export interface Model {
		autoOpen?: boolean,
		cssClass?: string,
		enableAnimation?: boolean,
		enableRoundOff?: boolean,
		endAngle?: number,
		inline?: boolean,
		innerCircleImageClass?: string,
		innerCircleImageUrl?: string,
		labelSpace?: number,
		radius?: number,
		showInnerCircle?: boolean,
		startAngle?: number,
		strokeWidth?: number,
		ticks?: Array<any>,
		value?: number,
		change(e: ChangeEventArgs): void,
		create(e: CreateEventArgs): void,
		mouseover(e: MouseoverEventArgs): void,
		slide(e: SlideEventArgs): void,
		start(e: StartEventArgs): void,
		stop(e: StopEventArgs): void
	}

	declare export interface ChangeEventArgs {
		model?: any,
		cancel?: boolean,
		oldValue?: number,
		type?: string,
		value?: number
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface MouseoverEventArgs {
		cancel?: boolean,
		model?: any,
		selectedValue?: number,
		type?: string,
		value?: number
	}

	declare export interface SlideEventArgs {
		cancel?: boolean,
		model?: any,
		selectedValue?: number,
		type?: string,
		value?: number
	}

	declare export interface StartEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		value?: number
	}

	declare export interface StopEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		value?: number
	}

			
}

declare module 'Spreadsheet' {
		declare export interface XLCellType {
		addCellTypes(range: string, settings: any, sheetIdx: number): void,
		removeCellTypes(range: string, sheetIdx: number): void
	}

	declare export interface XLCFormat {
		clearCF(isSelected: boolean, range: Array<any> | string): void,
		getCFRule(rowIdx: number, colIdx: number): Array<any>,
		setCFRule(rule: any): void
	}

	declare export interface XLChart {
		createChart(range: string, options: any): void,
		refreshChart(id: string, options: any): void,
		resizeChart(id: string, height: number, width: number): void
	}

	declare export interface XLClipboard {
		copy(): void,
		cut(): void,
		paste(): void
	}

	declare export interface XLComment {
		deleteComment(range: Array<any> | string, sheetIdx: number, skipHiddenRow: boolean): void,
		editComment(targetCell: any): void,
		findNextComment(): boolean,
		findPrevComment(): boolean,
		getComment(cell: HTMLElement): any,
		setComment(range: string | Array<any>, data: string, showEditPanel: boolean): void,
		showAllComments(): void,
		showHideComment(targetCell: HTMLElement): void
	}

	declare export interface XLDragDrop {
		moveRangeTo(sourceRange: any | Array<any>, destinationRange: any | Array<any>): void
	}

	declare export interface XLDragFill {
		autoFill(options: any): void,
		hideAutoFillElement(): void,
		hideAutoFillOptions(): void,
		positionAutoFillElement(isDragFill: boolean): void
	}

	declare export interface XLEdit {
		calcNow(sheetIdx: number): void,
		editCell(rowIdx: number, colIdx: number, oldData: boolean): void,
		getPropertyValue(
		rowIdx: number, colIdx: number, prop: string, sheetIdx: number
	): any | string | Array<any>,
		getPropertyValueByElem(elem: HTMLElement, property: string, sheetIdx: number): void,
		saveCell(): void,
		updateCell(cell: any, value: string | number): void,
		updateCellValue(
		cellIdx: any, val: string | number, formatClass: string, sheetIdx: number
	): void
	}

	declare export interface XLExport {
		export(type: string): void
	}

	declare export interface XLFilter {
		clearFilter(): void,
		filter(range: string): void,
		filterByActiveCell(): void
	}

	declare export interface XLFormat {
		createTable(tableObject: any, range: string): void,
		format(formatObj: any, range: string): void,
		removeStyle(range: Array<any> | string, options: any): void,
		removeTable(tableId: number): void,
		updateDecimalPlaces(type: string, range: string): void,
		updateFormat(formatObj: any, range: Array<any>): void,
		updateUniqueFormat(formatClass: string, range: Array<any>): void
	}

	declare export interface XLFreeze {
		freezeColumns(colIdx: number): void,
		freezeLeftColumn(): void,
		freezePanes(cell: any): void,
		freezeRows(rowIdx: number): void,
		freezeTopRow(): void
	}

	declare export interface XLPivot {
		clearPivotFieldList(pivotName: string): void,
		createPivotTable(range: string, location: string, name: string, settings: any, pvt: any): void,
		deletePivotTable(pivotName: string): void,
		refreshDataSource(name: string, sheetIdx: number): void
	}

	declare export interface XLPrint {
		printSelection(): void,
		printSheet(): void
	}

	declare export interface XLResize {
		getColWidth(colIdx: number): number,
		getRowHeight(rowIdx: number): number,
		setColWidth(colIdx: number, size: number): void,
		setRowHeight(rowIdx: number, size: number): void
	}

	declare export interface XLRibbon {
		addNamedRange(name: string, refersTo: string, comment: string, sheetIdx: number): void,
		autoSum(type: string, range: string): void,
		removeNamedRange(name: string): void,
		updateRibbonIcons(): void
	}

	declare export interface XLSearch {
		replaceAllByBook(
		findData: string, replaceData: string, isCSen: boolean, isEMatch: boolean
	): void,
		replaceAllBySheet(
		findData: string, replaceData: string, isCSen: boolean, isEMatch: boolean
	): void
	}

	declare export interface XLSelection {
		getSelectedCells(sheetIdx: number): HTMLElement,
		refreshSelection(range: Array<any>): void,
		selectColumn(colIdx: number): void,
		selectColumns(startIdx: number, endIdx: number): void,
		selectRange(range: string): void,
		selectRow(rowIdx: number): void,
		selectRows(startIdx: number, endIdx: number): void,
		selectSheet(): void
	}

	declare export interface XLSort {
		sortByColor(operation: string, color: any, range: string): void,
		sortByRange(range: Array<any> | string, columnName: string, direction: any): void
	}

	declare export interface XLValidate {
		applyDVRules(
		range: string, values: Array<any>, type: string, required: boolean, showErrorAlert: boolean
	): void,
		clearDV(range: string): void,
		highlightInvalidData(range: string): void
	}

	declare export interface Model {
		activeSheetIndex?: number,
		allowAutoCellType?: boolean,
		allowAutoFill?: boolean,
		allowAutoSum?: boolean,
		allowCellFormatting?: boolean,
		allowCellType?: boolean,
		allowCharts?: boolean,
		allowClipboard?: boolean,
		allowComments?: boolean,
		allowConditionalFormats?: boolean,
		allowDataValidation?: boolean,
		allowDelete?: boolean,
		allowDragAndDrop?: boolean,
		allowEditing?: boolean,
		allowFiltering?: boolean,
		allowFormatAsTable?: boolean,
		allowFormatPainter?: boolean,
		allowFormulaBar?: boolean,
		allowFreezing?: boolean,
		allowHyperlink?: boolean,
		allowImport?: boolean,
		allowInsert?: boolean,
		allowKeyboardNavigation?: boolean,
		allowLockCell?: boolean,
		allowMerging?: boolean,
		allowResizing?: boolean,
		allowSearching?: boolean,
		allowSelection?: boolean,
		allowSorting?: boolean,
		allowUndoRedo?: boolean,
		allowWrap?: boolean,
		apWidth?: number,
		autoFillSettings?: AutoFillSettings,
		chartSettings?: ChartSettings,
		columnCount?: number,
		columnWidth?: number,
		cssClass?: string,
		customFormulas?: Array<any>,
		enableContextMenu?: boolean,
		enablePivotTable?: boolean,
		enableTouch?: boolean,
		exportSettings?: ExportSettings,
		formatSettings?: FormatSettings,
		importSettings?: ImportSettings,
		locale?: string,
		pictureSettings?: PictureSettings,
		printSettings?: PrintSettings,
		ribbonSettings?: RibbonSettings,
		rowCount?: number,
		rowHeight?: number,
		scrollSettings?: ScrollSettings,
		selectionSettings?: SelectionSettings,
		sheetCount?: number,
		sheets?: Array<Sheet>,
		showPager?: boolean,
		showRibbon?: boolean,
		undoRedoStep?: number,
		userName?: string,
		actionBegin(e: ActionBeginEventArgs): void,
		actionComplete(e: ActionCompleteEventArgs): void,
		autoFillBegin(e: AutoFillBeginEventArgs): void,
		autoFillComplete(e: AutoFillCompleteEventArgs): void,
		beforeBatchSave(e: BeforeBatchSaveEventArgs): void,
		beforeCellFormat(e: BeforeCellFormatEventArgs): void,
		beforeCellSelect(e: BeforeCellSelectEventArgs): void,
		beforeDrop(e: BeforeDropEventArgs): void,
		beforeOpen(e: BeforeOpenEventArgs): void,
		beforePanelOpen(e: BeforePanelOpenEventArgs): void,
		cellClick(e: CellClickEventArgs): void,
		cellEdit(e: CellEditEventArgs): void,
		cellFormatting(e: CellFormattingEventArgs): void,
		cellHover(e: CellHoverEventArgs): void,
		cellSave(e: CellSaveEventArgs): void,
		cellSelected(e: CellSelectedEventArgs): void,
		contextMenuClick(e: ContextMenuClickEventArgs): void,
		drag(e: DragEventArgs): void,
		dragStart(e: DragStartEventArgs): void,
		drop(e: DropEventArgs): void,
		editRangeBegin(e: EditRangeBeginEventArgs): void,
		editRangeComplete(e: EditRangeCompleteEventArgs): void,
		load(e: LoadEventArgs): void,
		loadComplete(e: LoadCompleteEventArgs): void,
		menuClick(e: MenuClickEventArgs): void,
		onImport(e: OnImportEventArgs): void,
		openFailure(e: OpenFailureEventArgs): void,
		pagerClick(e: PagerClickEventArgs): void,
		ribbonClick(e: RibbonClickEventArgs): void,
		seriesRendering(e: SeriesRenderingEventArgs): void,
		tabClick(e: TabClickEventArgs): void,
		tabSelect(e: TabSelectEventArgs): void
	}

	declare export interface ActionBeginEventArgs {
		afterFormat?: any,
		beforeFormat?: any,
		sheetIdx?: number,
		range?: Array<any>,
		reqType?: string,
		gotoIdx?: number,
		newSheet?: boolean,
		columnName?: string,
		colSelected?: number,
		sortDirection?: string
	}

	declare export interface ActionCompleteEventArgs {
		model?: ej.Spreadsheet.Model,
		selectedCell?: Array<any> | any,
		sheetIdx?: number,
		reqType?: string,
		cancel?: boolean,
		type?: string
	}

	declare export interface AutoFillBeginEventArgs {
		dataRange?: Array<any>,
		direction?: string,
		fillRange?: Array<any>,
		fillType?: string,
		sheetIdx?: number,
		model?: ej.Spreadsheet.Model,
		type?: string,
		cancel?: boolean
	}

	declare export interface AutoFillCompleteEventArgs {
		dataRange?: Array<any>,
		direction?: string,
		fillRange?: Array<any>,
		fillType?: string,
		sheetIdx?: number,
		model?: ej.Spreadsheet.Model,
		type?: string,
		cancel?: boolean
	}

	declare export interface BeforeBatchSaveEventArgs {
		sheetIdx?: number,
		dataSetting?: any,
		batchChanges?: any
	}

	declare export interface BeforeCellFormatEventArgs {
		sheetIdx?: number,
		format?: any,
		cells?: Array<any> | any,
		model?: ej.Spreadsheet.Model,
		cancel?: boolean,
		type?: string
	}

	declare export interface BeforeCellSelectEventArgs {
		prevRange?: Array<any>,
		currRange?: Array<any>,
		model?: ej.Spreadsheet.Model,
		type?: string,
		cancel?: boolean
	}

	declare export interface BeforeDropEventArgs {
		sheetIdx?: number,
		currentCell?: any,
		dragAndDropRange?: any,
		preventAlert?: boolean,
		model?: ej.Spreadsheet.Model,
		target?: HTMLElement,
		type?: string,
		cancel?: boolean
	}

	declare export interface BeforeOpenEventArgs {
		target?: HTMLElement,
		type?: string,
		model?: ej.Spreadsheet.Model,
		cancel?: boolean
	}

	declare export interface BeforePanelOpenEventArgs {
		sheetIdx?: number,
		activationPanel?: any,
		range?: any,
		model?: ej.Spreadsheet.Model,
		type?: string,
		cancel?: boolean
	}

	declare export interface CellClickEventArgs {
		cell?: HTMLElement,
		columnIndex?: number,
		rowIndex?: number,
		columnName?: string,
		columnObject?: any,
		model?: ej.Spreadsheet.Model,
		type?: string,
		target?: HTMLElement,
		value?: string,
		cancel?: boolean
	}

	declare export interface CellEditEventArgs {
		cell?: HTMLElement,
		columnName?: string,
		columnObject?: any,
		model?: ej.Spreadsheet.Model,
		type?: string,
		target?: HTMLElement,
		cancel?: boolean
	}

	declare export interface CellFormattingEventArgs {
		SheetIdx?: number,
		Format?: any,
		Cell?: number,
		cssClass?: string,
		type?: string,
		target?: HTMLElement,
		model?: ej.Spreadsheet.Model
	}

	declare export interface CellHoverEventArgs {
		target?: HTMLElement,
		type?: string,
		model?: ej.Spreadsheet.Model,
		cancel?: boolean
	}

	declare export interface CellSaveEventArgs {
		cell?: HTMLElement,
		columnName?: string,
		columnObject?: any,
		rowIndex?: number,
		colIndex?: number,
		model?: ej.Spreadsheet.Model,
		pValue?: string,
		type?: string,
		cancel?: boolean,
		target?: HTMLElement,
		value?: string
	}

	declare export interface CellSelectedEventArgs {
		sheetIdx?: number,
		selectedRange?: Array<any>,
		target?: HTMLElement,
		model?: ej.Spreadsheet.Model,
		type?: string,
		cancel?: boolean
	}

	declare export interface ContextMenuClickEventArgs {
		Id?: string,
		element?: HTMLElement,
		event?: any,
		events?: any,
		model?: ej.Spreadsheet.Model,
		parentId?: string,
		parentText?: string,
		text?: string,
		type?: string,
		cancel?: boolean
	}

	declare export interface DragEventArgs {
		sheetIdx?: number,
		currentCell?: any,
		dragAndDropRange?: any,
		model?: ej.Spreadsheet.Model,
		target?: HTMLElement,
		type?: string,
		cancel?: boolean
	}

	declare export interface DragStartEventArgs {
		sheetIdx?: number,
		currentCell?: any,
		dragAndDropRange?: any,
		model?: ej.Spreadsheet.Model,
		target?: HTMLElement,
		type?: string,
		cancel?: boolean
	}

	declare export interface DropEventArgs {
		sheetIdx?: number,
		currentCell?: any,
		dragAndDropRange?: any,
		model?: ej.Spreadsheet.Model,
		target?: HTMLElement,
		type?: string,
		cancel?: boolean
	}

	declare export interface EditRangeBeginEventArgs {
		sheetIdx?: number,
		model?: ej.Spreadsheet.Model,
		range?: any,
		type?: string,
		cancel?: boolean
	}

	declare export interface EditRangeCompleteEventArgs {
		sheetIdx?: number,
		model?: ej.Spreadsheet.Model,
		range?: any,
		type?: string,
		cancel?: boolean
	}

	declare export interface LoadEventArgs {
		type?: string,
		model?: ej.Spreadsheet.Model,
		cancel?: boolean,
		sheetIndex?: number
	}

	declare export interface LoadCompleteEventArgs {
		model?: ej.Spreadsheet.Model,
		type?: string,
		cancel?: boolean
	}

	declare export interface MenuClickEventArgs {
		element?: HTMLElement,
		event?: any,
		model?: ej.Spreadsheet.Model,
		parentId?: string,
		parentText?: string,
		text?: string,
		type?: string,
		cancel?: boolean
	}

	declare export interface OnImportEventArgs {
		type?: string,
		model?: ej.Spreadsheet.Model,
		cancel?: boolean,
		importData?: any
	}

	declare export interface OpenFailureEventArgs {
		failureType?: string,
		status?: number,
		statusText?: string,
		model?: ej.Spreadsheet.Model,
		type?: string,
		cancel?: boolean
	}

	declare export interface PagerClickEventArgs {
		activeSheet?: number,
		gotoSheet?: number,
		newSheet?: boolean,
		model?: ej.Spreadsheet.Model,
		type?: string,
		target?: HTMLElement,
		cancel?: boolean
	}

	declare export interface RibbonClickEventArgs {
		Id?: string,
		prop?: any,
		model?: ej.Spreadsheet.Model,
		status?: boolean,
		isChecked?: boolean,
		type?: string,
		target?: HTMLElement,
		cancel?: boolean
	}

	declare export interface SeriesRenderingEventArgs {
		data?: any,
		model?: ej.Spreadsheet.Model,
		type?: string,
		cancel?: boolean
	}

	declare export interface TabClickEventArgs {
		activeIndex?: number,
		activeHeader?: any,
		prevActiveHeader?: any,
		prevActiveIndex?: number,
		model?: ej.Spreadsheet.Model,
		type?: string,
		target?: HTMLElement,
		cancel?: boolean
	}

	declare export interface TabSelectEventArgs {
		activeIndex?: number,
		activeHeader?: any,
		prevActiveHeader?: any,
		prevActiveIndex?: number,
		model?: ej.Spreadsheet.Model,
		type?: string,
		target?: HTMLElement,
		cancel?: boolean
	}

	declare export interface AutoFillSettings {
		fillType?: ej.Spreadsheet.AutoFillOptions | string,
		showFillOptions?: boolean
	}

	declare export interface ChartSettings {
		height?: number,
		width?: number
	}

	declare export interface ExportSettings {
		allowExporting?: boolean,
		csvUrl?: string,
		excelUrl?: string,
		password?: string,
		pdfUrl?: string
	}

	declare export interface FormatSettings {
		allowCellBorder?: boolean,
		allowDecimalPlaces?: boolean,
		allowFontFamily?: boolean
	}

	declare export interface ImportSettings {
		importMapper?: string,
		importOnLoad?: boolean,
		importUrl?: string,
		password?: string
	}

	declare export interface PictureSettings {
		allowPictures?: boolean,
		height?: number,
		width?: number
	}

	declare export interface PrintSettings {
		allowPageSetup?: boolean,
		allowPageSize?: boolean,
		allowPrinting?: boolean
	}

	declare export interface RibbonSettingsApplicationTabMenuSettings {
		isAppend?: boolean,
		dataSource?: Array<any>
	}

	declare export interface RibbonSettingsApplicationTab {
		type?: ej.Ribbon.ApplicationTabType | string,
		menuSettings?: RibbonSettingsApplicationTabMenuSettings
	}

	declare export interface RibbonSettings {
		applicationTab?: RibbonSettingsApplicationTab
	}

	declare export interface ScrollSettings {
		allowScrolling?: boolean,
		allowSheetOnDemand?: boolean,
		allowVirtualScrolling?: boolean,
		height?: number | string,
		isResponsive?: boolean,
		scrollMode?: ej.Spreadsheet.scrollMode | string,
		width?: number | string
	}

	declare export interface SelectionSettings {
		activeCell?: string,
		animationTime?: number,
		enableAnimation?: boolean,
		selectionType?: ej.Spreadsheet.SelectionType | string,
		selectionUnit?: ej.Spreadsheet.SelectionUnit | string
	}

	declare export interface SheetsBorder {
		type?: ej.Spreadsheet.BorderType | string,
		color?: string,
		range?: string
	}

	declare export interface SheetsCFormatRule {
		action?: ej.Spreadsheet.CFormatRule | string,
		color?: ej.Spreadsheet.CFormatHighlightColor | string,
		inputs?: Array<any>,
		range?: string
	}

	declare export interface SheetsRangeSetting {
		dataSource?: any,
		headerStyles?: any,
		primaryKey?: string,
		query?: any,
		showHeader?: boolean,
		startCell?: string
	}

	declare export interface SheetsRowsCellsComment {
		isVisible?: boolean,
		value?: string
	}

	declare export interface SheetsRowsCellsFormat {
		type?: string
	}

	declare export interface SheetsRowsCellsHyperlink {
		webAddr?: string,
		cellAddr?: string,
		sheetIndex?: number
	}

	declare export interface SheetsRowsCellsStyle {
		backgroundColor?: string,
		color?: string,
		fontWeight?: string
	}

	declare export interface SheetsRowsCell {
		comment?: SheetsRowsCellsComment,
		format?: SheetsRowsCellsFormat,
		hyperlink?: SheetsRowsCellsHyperlink,
		index?: number,
		style?: SheetsRowsCellsStyle,
		value?: string
	}

	declare export interface SheetsRow {
		height?: number,
		cells?: Array<SheetsRowsCell>,
		index?: number
	}

	declare export interface Sheet {
		border?: Array<SheetsBorder>,
		cFormatRule?: Array<SheetsCFormatRule>,
		colCount?: number,
		columnWidth?: number,
		dataSource?: any,
		fieldAsColumnHeader?: boolean,
		headerStyles?: any,
		hideColumns?: Array<any>,
		hideRows?: Array<any>,
		mergeCells?: Array<any>,
		primaryKey?: string,
		query?: any,
		rangeSettings?: Array<SheetsRangeSetting>,
		rowCount?: number,
		rows?: Array<SheetsRow>,
		showGridlines?: boolean,
		showHeader?: boolean,
		showHeadings?: boolean,
		startCell?: string
	}

			
}

declare module 'PdfViewer' {
		declare export interface Model {
		locale?: string,
		toolbarSettings?: ToolbarSettings,
		toolbarItems?: ej.PdfViewer.ToolbarItems | string,
		serviceUrl?: string,
		pageCount?: number,
		currentPageNumber?: number,
		zoomPercentage?: number,
		pdfService?: ej.PdfViewer.PdfService | string,
		hyperlinkOpenState?: ej.PdfViewer.LinkTarget | string,
		isResponsive?: boolean,
		fileName?: string,
		documentLoad(e: DocumentLoadEventArgs): void,
		pageChange(e: PageChangeEventArgs): void,
		zoomChange(e: ZoomChangeEventArgs): void,
		hyperlinkClick(e: HyperlinkClickEventArgs): void,
		beforePrint(e: BeforePrintEventArgs): void,
		afterPrint(e: AfterPrintEventArgs): void,
		destroy(e: DestroyEventArgs): void
	}

	declare export interface DocumentLoadEventArgs {
		Cancel?: boolean,
		Model?: any,
		Type?: string
	}

	declare export interface PageChangeEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		currentPageNumber?: number
	}

	declare export interface ZoomChangeEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		previousZoomPercentage?: number,
		currentZoomPercentage?: number
	}

	declare export interface HyperlinkClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		hyperlink?: string
	}

	declare export interface BeforePrintEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface AfterPrintEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ToolbarSettings {
		showToolTip?: boolean
	}

			
}

declare module 'datavisualization' {
				declare class SymbolPalette extends ej$Widget {
		fn: SymbolPalette;
		constructor(element: JQuery, options?: SymbolPalette.Model): this;
		constructor(element: Element, options?: SymbolPalette.Model): this;
		model: SymbolPalette.Model;
		defaults: SymbolPalette.Model
	}

	declare class LinearGauge extends ej$Widget {
		fn: LinearGauge;
		constructor(element: JQuery, options?: LinearGauge.Model): this;
		constructor(element: Element, options?: LinearGauge.Model): this;
		model: LinearGauge.Model;
		defaults: LinearGauge.Model;
		destroy(): void;
		exportImage(): void;
		getBarDistanceFromScale(): void;
		getBarPointerValue(): void;
		getBarWidth(): void;
		getCustomLabelAngle(): void;
		getCustomLabelValue(): void;
		getLabelAngle(): void;
		getLabelPlacement(): void;
		getLabelStyle(): void;
		getLabelXDistanceFromScale(): void;
		getLabelYDistanceFromScale(): void;
		getMajorIntervalValue(): void;
		getMarkerStyle(): void;
		getMaximumValue(): void;
		getMinimumValue(): void;
		getMinorIntervalValue(): void;
		getPointerDistanceFromScale(): void;
		getPointerHeight(): void;
		getPointerPlacement(): void;
		getPointerValue(): void;
		getPointerWidth(): void;
		getRangeBorderWidth(): void;
		getRangeDistanceFromScale(): void;
		getRangeEndValue(): void;
		getRangeEndWidth(): void;
		getRangePosition(): void;
		getRangeStartValue(): void;
		getRangeStartWidth(): void;
		getScaleBarLength(): void;
		getScaleBarSize(): void;
		getScaleBorderWidth(): void;
		getScaleDirection(): void;
		getScaleLocation(): void;
		getScaleStyle(): void;
		getTickAngle(): void;
		getTickHeight(): void;
		getTickPlacement(): void;
		getTickStyle(): void;
		getTickWidth(): void;
		getTickXDistanceFromScale(): void;
		getTickYDistanceFromScale(): void;
		scales(): void;
		setBarDistanceFromScale(): void;
		setBarPointerValue(): void;
		setBarWidth(): void;
		setCustomLabelAngle(): void;
		setCustomLabelValue(): void;
		setLabelAngle(): void;
		setLabelPlacement(): void;
		setLabelStyle(): void;
		setLabelXDistanceFromScale(): void;
		setLabelYDistanceFromScale(): void;
		setMajorIntervalValue(): void;
		setMarkerStyle(): void;
		setMaximumValue(): void;
		setMinimumValue(): void;
		setMinorIntervalValue(): void;
		setPointerDistanceFromScale(): void;
		setPointerHeight(): void;
		setPointerPlacement(): void;
		setPointerValue(): void;
		setPointerWidth(): void;
		setRangeBorderWidth(): void;
		setRangeDistanceFromScale(): void;
		setRangeEndValue(): void;
		setRangeEndWidth(): void;
		setRangePosition(): void;
		setRangeStartValue(): void;
		setRangeStartWidth(): void;
		setScaleBarLength(): void;
		setScaleBarSize(): void;
		setScaleBorderWidth(): void;
		setScaleDirection(): void;
		setScaleLocation(): void;
		setScaleStyle(): void;
		setTickAngle(): void;
		setTickHeight(): void;
		setTickPlacement(): void;
		setTickStyle(): void;
		setTickWidth(): void;
		setTickXDistanceFromScale(): void;
		setTickYDistanceFromScale(): void
	}

	declare class CircularGauge extends ej$Widget {
		fn: CircularGauge;
		constructor(element: JQuery, options?: CircularGauge.Model): this;
		constructor(element: Element, options?: CircularGauge.Model): this;
		model: CircularGauge.Model;
		defaults: CircularGauge.Model;
		destroy(): void;
		exportImage(): void;
		getBackNeedleLength(): void;
		getCustomLabelAngle(): void;
		getCustomLabelValue(): void;
		getLabelAngle(): void;
		getLabelDistanceFromScale(): void;
		getLabelPlacement(): void;
		getLabelStyle(): void;
		getMajorIntervalValue(): void;
		getMarkerDistanceFromScale(): void;
		getMarkerStyle(): void;
		getMaximumValue(): void;
		getMinimumValue(): void;
		getMinorIntervalValue(): void;
		getNeedleStyle(): void;
		getPointerCapBorderWidth(): void;
		getPointerCapRadius(): void;
		getPointerLength(): void;
		getPointerNeedleType(): void;
		getPointerPlacement(): void;
		getPointerValue(): void;
		getPointerWidth(): void;
		getRangeBorderWidth(): void;
		getRangeDistanceFromScale(): void;
		getRangeEndValue(): void;
		getRangePosition(): void;
		getRangeSize(): void;
		getRangeStartValue(): void;
		getScaleBarSize(): void;
		getScaleBorderWidth(): void;
		getScaleDirection(): void;
		getScaleRadius(): void;
		getStartAngle(): void;
		getSubGaugeLocation(): void;
		getSweepAngle(): void;
		getTickAngle(): void;
		getTickDistanceFromScale(): void;
		getTickHeight(): void;
		getTickPlacement(): void;
		getTickStyle(): void;
		getTickWidth(): void;
		includeFirstValue(): void;
		redraw(): void;
		setBackNeedleLength(): void;
		setCustomLabelAngle(): void;
		setCustomLabelValue(): void;
		setLabelAngle(): void;
		setLabelDistanceFromScale(): void;
		setLabelPlacement(): void;
		setLabelStyle(): void;
		setMajorIntervalValue(): void;
		setMarkerDistanceFromScale(): void;
		setMarkerStyle(): void;
		setMaximumValue(): void;
		setMinimumValue(): void;
		setMinorIntervalValue(): void;
		setNeedleStyle(): void;
		setPointerCapBorderWidth(): void;
		setPointerCapRadius(): void;
		setPointerLength(): void;
		setPointerNeedleType(): void;
		setPointerPlacement(): void;
		setPointerValue(): void;
		setPointerWidth(): void;
		setRangeBorderWidth(): void;
		setRangeDistanceFromScale(): void;
		setRangeEndValue(): void;
		setRangePosition(): void;
		setRangeSize(): void;
		setRangeStartValue(): void;
		setScaleBarSize(): void;
		setScaleBorderWidth(): void;
		setScaleDirection(): void;
		setScaleRadius(): void;
		setStartAngle(): void;
		setSubGaugeLocation(): void;
		setSweepAngle(): void;
		setTickAngle(): void;
		setTickDistanceFromScale(): void;
		setTickHeight(): void;
		setTickPlacement(): void;
		setTickStyle(): void;
		setTickWidth(): void
	}

	declare class DigitalGauge extends ej$Widget {
		fn: DigitalGauge;
		constructor(element: JQuery, options?: DigitalGauge.Model): this;
		constructor(element: Element, options?: DigitalGauge.Model): this;
		model: DigitalGauge.Model;
		defaults: DigitalGauge.Model;
		destroy(): void;
		exportImage(fileName: string, fileType: string): void;
		getPosition(itemIndex: number): void;
		getValue(itemIndex: number): void;
		refresh(): void;
		setPosition(itemIndex: number, value: any): void;
		setValue(itemIndex: number, value: string): void
	}

	declare class Chart extends ej$Widget {
		fn: Chart;
		constructor(element: JQuery, options?: Chart.Model): this;
		constructor(element: Element, options?: Chart.Model): this;
		model: Chart.Model;
		defaults: Chart.Model;
		animate(options: any): void;
		export(type: string, URL: string, exportMultipleChart: boolean): void;
		redraw(): void
	}

	declare class RangeNavigator extends ej$Widget {
		fn: RangeNavigator;
		constructor(element: JQuery, options?: RangeNavigator.Model): this;
		constructor(element: Element, options?: RangeNavigator.Model): this;
		model: RangeNavigator.Model;
		defaults: RangeNavigator.Model;
		_destroy(): void
	}

	declare class BulletGraph extends ej$Widget {
		fn: BulletGraph;
		constructor(element: JQuery, options?: BulletGraph.Model): this;
		constructor(element: Element, options?: BulletGraph.Model): this;
		model: BulletGraph.Model;
		defaults: BulletGraph.Model;
		destroy(): void;
		redraw(): void;
		setComparativeMeasureSymbol(): void;
		setFeatureMeasureBarValue(): void
	}

	declare class Barcode extends ej$Widget {
		fn: Barcode;
		constructor(element: JQuery, options?: Barcode.Model): this;
		constructor(element: Element, options?: Barcode.Model): this;
		model: Barcode.Model;
		defaults: Barcode.Model;
		disable(): void;
		enable(): void
	}

	declare class Map extends ej$Widget {
		fn: Map;
		constructor(element: JQuery, options?: Map.Model): this;
		constructor(element: Element, options?: Map.Model): this;
		model: Map.Model;
		defaults: Map.Model;
		navigateTo(latitude: number, longitude: number, level: number): void;
		pan(direction: string): void;
		refresh(): void;
		refreshLayers(): void;
		refreshNavigationControl(navigation: any): void;
		zoom(level: number, isAnimate: boolean): void
	}

	declare class TreeMap extends ej$Widget {
		fn: TreeMap;
		constructor(element: JQuery, options?: TreeMap.Model): this;
		constructor(element: Element, options?: TreeMap.Model): this;
		model: TreeMap.Model;
		defaults: TreeMap.Model;
		refresh(): void
	}

	declare class Diagram extends ej$Widget {
		fn: Diagram;
		constructor(element: JQuery, options?: Diagram.Model): this;
		constructor(element: Element, options?: Diagram.Model): this;
		model: Diagram.Model;
		defaults: Diagram.Model;
		add(node: any): void;
		addLabel(nodeName: string, newLabel: any): void;
		addPhase(name: string, options: any): void;
		addPorts(name: string, ports: Array<any>): void;
		addSelection(node: any, clearSelection?: boolean): void;
		align(direction: string): void;
		bringIntoView(rect: any): void;
		bringToCenter(rect: any): void;
		bringToFront(): void;
		clear(): void;
		clearSelection(): void;
		copy(): any;
		cut(): void;
		exportDiagram(options?: Diagram.Options): string;
		findNode(name: string): any;
		fitToPage(mode?: string, region?: string, margin?: any): void;
		group(): void;
		insertLabel(name: string, label: any, index?: number): void;
		layout(): void;
		load(data: any): void;
		moveForward(): void;
		nudge(direction: string, delta?: number): void;
		paste(object?: any, rename?: boolean): void;
		print(): void;
		redo(): void;
		refresh(): void;
		remove(node?: any): void;
		removeSelection(node: any): void;
		sameHeight(): void;
		sameSize(): void;
		sameWidth(): void;
		save(): any;
		scrollToNode(node: any): void;
		selectAll(): void;
		sendBackward(): void;
		sendToBack(): void;
		spaceAcross(): void;
		spaceDown(): void;
		startLabelEdit(node: any, label: any): void;
		undo(): void;
		ungroup(): void;
		update(options: any): void;
		updateConnector(name: string, options: any): void;
		updateLabel(nodeName: string, label: any, options: any): any;
		updateNode(name: string, options: any): void;
		updatePort(nodeName: string, port: any, options: any): void;
		updateSelectedObject(name: string): void;
		updateSelection(showUserHandles?: boolean): void;
		updateUserHandles(node: any): void;
		updateViewPort(): void;
		upgrade(data: any): void;
		zoomTo(zoom: any): void
	}

	declare class HeatMap extends ej$Widget {
		fn: HeatMap;
		constructor(element: JQuery, options?: HeatMap.Model): this;
		constructor(element: Element, options?: HeatMap.Model): this;
		model: HeatMap.Model;
		defaults: HeatMap.Model
	}

	declare class HeatMapLegend extends ej$Widget {
		fn: HeatMapLegend;
		constructor(element: JQuery, options?: HeatMapLegend.Model): this;
		constructor(element: Element, options?: HeatMapLegend.Model): this;
		model: HeatMapLegend.Model;
		defaults: HeatMapLegend.Model
	}

	declare class Sparkline extends ej$Widget {
		fn: Sparkline;
		constructor(element: JQuery, options?: Sparkline.Model): this;
		constructor(element: Element, options?: Sparkline.Model): this;
		model: Sparkline.Model;
		defaults: Sparkline.Model;
		redraw(): void
	}

	declare class Overview extends ej$Widget {
		fn: Overview;
		constructor(element: JQuery, options?: Overview.Model): this;
		constructor(element: Element, options?: Overview.Model): this;
		model: Overview.Model;
		defaults: Overview.Model
	}

	
}

declare module 'SymbolPalette' {
		declare export interface Model {
		allowDrag?: boolean,
		cssClass?: string,
		defaultSettings?: DefaultSettings,
		diagramId?: string,
		headerHeight?: number,
		height?: number,
		paletteItemHeight?: number,
		paletteItemWidth?: number,
		palettes?: Array<Palette>,
		previewHeight?: number,
		previewOffset?: any,
		previewWidth?: number,
		showPaletteItemText?: boolean,
		width?: number,
		selectionChange(e: SelectionChangeEventArgs): void
	}

	declare export interface SelectionChangeEventArgs {
		changeType?: string,
		element?: any
	}

	declare export interface DefaultSettings {
		node?: any,
		connector?: any
	}

	declare export interface Palette {
		name?: string,
		expanded?: boolean,
		items?: Array<any>
	}

			
}

declare module 'LinearGauge' {
		declare export interface Model {
		animationSpeed?: number,
		backgroundColor?: string,
		borderColor?: string,
		enableAnimation?: boolean,
		enableMarkerPointerAnimation?: boolean,
		isResponsive?: boolean,
		frame?: Frame,
		height?: number,
		labelColor?: string,
		maximum?: number,
		minimum?: number,
		orientation?: string,
		outerCustomLabelPosition?: ej.datavisualization.LinearGauge.OuterCustomLabelPosition | string,
		pointerGradient1?: any,
		pointerGradient2?: any,
		readOnly?: boolean,
		scales?: Scales,
		theme?: ej.datavisualization.LinearGauge.Themes | string,
		tickColor?: string,
		tooltip?: Tooltip,
		value?: number,
		width?: number,
		drawBarPointers(e: DrawBarPointersEventArgs): void,
		drawCustomLabel(e: DrawCustomLabelEventArgs): void,
		drawIndicators(e: DrawIndicatorsEventArgs): void,
		drawLabels(e: DrawLabelsEventArgs): void,
		drawMarkerPointers(e: DrawMarkerPointersEventArgs): void,
		drawRange(e: DrawRangeEventArgs): void,
		drawTicks(e: DrawTicksEventArgs): void,
		init(e: InitEventArgs): void,
		load(e: LoadEventArgs): void,
		mouseClick(e: MouseClickEventArgs): void,
		mouseClickMove(e: MouseClickMoveEventArgs): void,
		mouseClickUp(e: MouseClickUpEventArgs): void,
		renderComplete(e: RenderCompleteEventArgs): void
	}

	declare export interface DrawBarPointersEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		Model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		barElement?: any,
		barPointerIndex?: number,
		PointerValue?: number,
		type?: any
	}

	declare export interface DrawCustomLabelEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		Model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: any,
		customLabelElement?: any,
		customLabelIndex?: number,
		type?: any
	}

	declare export interface DrawIndicatorsEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		Model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		IndicatorElement?: any,
		IndicatorIndex?: number,
		type?: any
	}

	declare export interface DrawLabelsEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		Model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		angle?: number,
		element?: any,
		index?: number,
		value?: number,
		type?: any
	}

	declare export interface DrawMarkerPointersEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		Model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		markerElement?: any,
		markerPointerIndex?: number,
		pointerValue?: number,
		pointerAngle?: number,
		type?: any
	}

	declare export interface DrawRangeEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		Model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		rangeElement?: any,
		rangeIndex?: number,
		type?: any
	}

	declare export interface DrawTicksEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		Model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		angle?: number,
		element?: any,
		index?: number,
		value?: number,
		type?: any
	}

	declare export interface InitEventArgs {
		object?: any,
		cancel?: boolean,
		Model?: any,
		scaleElement?: any,
		context?: any,
		type?: string
	}

	declare export interface LoadEventArgs {
		object?: any,
		cancel?: boolean,
		Model?: any,
		scaleElement?: any,
		context?: any,
		type?: any
	}

	declare export interface MouseClickEventArgs {
		object?: any,
		cancel?: boolean,
		model?: any,
		type?: any,
		scaleElement?: any,
		scaleIndex?: number,
		context?: any,
		markerpointerindex?: number,
		markerpointerelement?: any,
		markerpointervalue?: number,
		style?: string,
		position?: any
	}

	declare export interface MouseClickMoveEventArgs {
		object?: any,
		cancel?: boolean,
		model?: any,
		type?: any,
		scaleElement?: any,
		scaleIndex?: number,
		context?: any,
		index?: number,
		element?: any,
		value?: number,
		style?: string,
		position?: any
	}

	declare export interface MouseClickUpEventArgs {
		object?: any,
		cancel?: boolean,
		model?: any,
		type?: any,
		scaleElement?: any,
		scaleIndex?: number,
		context?: any,
		markerpointerIndex?: number,
		markerpointerElement?: any,
		markerpointerValue?: number,
		style?: string,
		position?: any
	}

	declare export interface RenderCompleteEventArgs {
		object?: any,
		cancel?: boolean,
		Model?: any,
		scaleElement?: any,
		context?: any,
		type?: any
	}

	declare export interface Frame {
		backgroundImageUrl?: string,
		innerWidth?: number,
		outerWidth?: number
	}

	declare export interface ScalesBarPointersBorder {
		color?: string,
		width?: number
	}

	declare export interface ScalesBarPointer {
		backgroundColor?: string,
		border?: ScalesBarPointersBorder,
		distanceFromScale?: number,
		gradients?: any,
		opacity?: number,
		value?: number,
		width?: number
	}

	declare export interface ScalesBorder {
		color?: string,
		width?: number
	}

	declare export interface ScalesCustomLabelsFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.LinearGauge.FontStyle | string,
		size?: string
	}

	declare export interface ScalesCustomLabelsPosition {
		x?: number,
		y?: number
	}

	declare export interface ScalesCustomLabel {
		color?: number,
		font?: ScalesCustomLabelsFont,
		opacity?: string,
		position?: ScalesCustomLabelsPosition,
		positionType?: any,
		textAngle?: number,
		value?: string
	}

	declare export interface ScalesIndicatorsBorder {
		color?: string,
		width?: number
	}

	declare export interface ScalesIndicatorsFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.LinearGauge.FontStyle | string,
		size?: string
	}

	declare export interface ScalesIndicatorsPosition {
		x?: number,
		y?: number
	}

	declare export interface ScalesIndicatorsStateRange {
		backgroundColor?: string,
		borderColor?: string,
		endValue?: number,
		startValue?: number,
		text?: string,
		textColor?: string
	}

	declare export interface ScalesIndicatorsTextLocation {
		x?: number,
		y?: number
	}

	declare export interface ScalesIndicator {
		backgroundColor?: string,
		border?: ScalesIndicatorsBorder,
		font?: ScalesIndicatorsFont,
		height?: number,
		opacity?: number,
		position?: ScalesIndicatorsPosition,
		stateRanges?: Array<ScalesIndicatorsStateRange>,
		textLocation?: ScalesIndicatorsTextLocation,
		type?: ej.datavisualization.LinearGauge.IndicatorTypes | string,
		width?: number
	}

	declare export interface ScalesLabelsDistanceFromScale {
		x?: number,
		y?: number
	}

	declare export interface ScalesLabelsFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.LinearGauge.FontStyle | string,
		size?: string
	}

	declare export interface ScalesLabel {
		angle?: number,
		distanceFromScale?: ScalesLabelsDistanceFromScale,
		font?: ScalesLabelsFont,
		includeFirstValue?: boolean,
		opacity?: number,
		placement?: ej.datavisualization.LinearGauge.PointerPlacement | string,
		textColor?: string,
		type?: ej.datavisualization.LinearGauge.ScaleType | string,
		unitText?: string,
		unitTextPlacement?: ej.datavisualization.LinearGauge.UnitTextPlacement | string
	}

	declare export interface ScalesMarkerPointersBorder {
		color?: string,
		width?: number
	}

	declare export interface ScalesMarkerPointer {
		backgroundColor?: string,
		border?: ScalesMarkerPointersBorder,
		distanceFromScale?: number,
		gradients?: any,
		length?: number,
		opacity?: number,
		placement?: ej.datavisualization.LinearGauge.PointerPlacement | string,
		type?: ej.datavisualization.LinearGauge.MarkerType | string,
		value?: number,
		width?: number
	}

	declare export interface ScalesPosition {
		x?: number,
		y?: number
	}

	declare export interface ScalesRangesBorder {
		color?: string,
		width?: number
	}

	declare export interface ScalesRange {
		backgroundColor?: string,
		border?: ScalesRangesBorder,
		distanceFromScale?: number,
		endValue?: number,
		endWidth?: number,
		gradients?: any,
		opacity?: number,
		placement?: ej.datavisualization.LinearGauge.PointerPlacement | string,
		startValue?: number,
		startWidth?: number
	}

	declare export interface ScalesTicksDistanceFromScale {
		x?: number,
		y?: number
	}

	declare export interface ScalesTick {
		angle?: number,
		color?: string,
		distanceFromScale?: ScalesTicksDistanceFromScale,
		height?: number,
		opacity?: number,
		placement?: ej.datavisualization.LinearGauge.PointerPlacement | string,
		type?: ej.datavisualization.LinearGauge.TicksType | string,
		width?: number
	}

	declare export interface Scales {
		backgroundColor?: string,
		barPointers?: Array<ScalesBarPointer>,
		border?: ScalesBorder,
		customLabels?: Array<ScalesCustomLabel>,
		direction?: ej.datavisualization.LinearGauge.Direction | string,
		indicators?: Array<ScalesIndicator>,
		labels?: Array<ScalesLabel>,
		length?: number,
		majorIntervalValue?: number,
		markerPointers?: Array<ScalesMarkerPointer>,
		maximum?: number,
		minimum?: number,
		minorIntervalValue?: number,
		opacity?: number,
		position?: ScalesPosition,
		ranges?: Array<ScalesRange>,
		shadowOffset?: number,
		showBarPointers?: boolean,
		showCustomLabels?: boolean,
		showIndicators?: boolean,
		showLabels?: boolean,
		showMarkerPointers?: boolean,
		showRanges?: boolean,
		showTicks?: boolean,
		ticks?: Array<ScalesTick>,
		type?: ej.datavisualization.LinearGauge.ScaleType | string,
		width?: number
	}

	declare export interface Tooltip {
		showCustomLabelTooltip?: boolean,
		showLabelTooltip?: boolean,
		templateID?: string
	}

			
}

declare module 'CircularGauge' {
		declare export interface Model {
		animationSpeed?: number,
		backgroundColor?: string,
		distanceFromCorner?: number,
		enableAnimation?: boolean,
		frame?: Frame,
		gaugePosition?: ej.datavisualization.CircularGauge.gaugePosition | string,
		height?: number,
		interiorGradient?: any,
		isRadialGradient?: boolean,
		isResponsive?: boolean,
		maximum?: number,
		minimum?: number,
		outerCustomLabelPosition?: ej.datavisualization.CircularGauge.CustomLabelPositionType | string,
		radius?: number,
		readOnly?: boolean,
		scales?: Scales,
		theme?: string,
		tooltip?: Tooltip,
		value?: number,
		width?: number,
		drawCustomLabel(e: DrawCustomLabelEventArgs): void,
		drawIndicators(e: DrawIndicatorsEventArgs): void,
		drawLabels(e: DrawLabelsEventArgs): void,
		drawPointerCap(e: DrawPointerCapEventArgs): void,
		drawPointers(e: DrawPointersEventArgs): void,
		drawRange(e: DrawRangeEventArgs): void,
		drawTicks(e: DrawTicksEventArgs): void,
		load(e: LoadEventArgs): void,
		mouseClick(e: MouseClickEventArgs): void,
		mouseClickMove(e: MouseClickMoveEventArgs): void,
		mouseClickUp(e: MouseClickUpEventArgs): void,
		renderComplete(e: RenderCompleteEventArgs): void
	}

	declare export interface DrawCustomLabelEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		customLabelElement?: any,
		customLabelIndex?: number,
		type?: string
	}

	declare export interface DrawIndicatorsEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		indicatorElement?: any,
		indicatorIndex?: number,
		type?: string
	}

	declare export interface DrawLabelsEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		angle?: number,
		element?: any,
		index?: number,
		pointerValue?: number,
		type?: string
	}

	declare export interface DrawPointerCapEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		scaleElement?: any,
		position?: any,
		model?: any,
		style?: string,
		type?: string
	}

	declare export interface DrawPointersEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		angle?: number,
		element?: any,
		index?: number,
		value?: number,
		type?: string
	}

	declare export interface DrawRangeEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		rangeElement?: any,
		rangeIndex?: number,
		type?: string
	}

	declare export interface DrawTicksEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		position?: any,
		model?: any,
		scaleElement?: any,
		scaleIndex?: number,
		style?: string,
		angle?: number,
		element?: any,
		index?: number,
		pointerValue?: number,
		type?: string
	}

	declare export interface LoadEventArgs {
		object?: any,
		cancel?: boolean,
		Model?: any,
		scaleElement?: any,
		context?: any,
		type?: string
	}

	declare export interface MouseClickEventArgs {
		object?: any,
		cancel?: boolean,
		model?: any,
		type?: any,
		scaleElement?: any,
		scaleIndex?: number,
		context?: any,
		index?: number,
		element?: any,
		value?: number,
		angle?: number,
		style?: string,
		position?: any
	}

	declare export interface MouseClickMoveEventArgs {
		object?: any,
		cancel?: boolean,
		model?: any,
		type?: any,
		scaleElement?: any,
		scaleIndex?: number,
		context?: any,
		index?: number,
		element?: any,
		value?: number,
		angle?: number,
		style?: string,
		position?: any
	}

	declare export interface MouseClickUpEventArgs {
		object?: any,
		cancel?: boolean,
		model?: any,
		type?: any,
		scaleElement?: any,
		scaleIndex?: number,
		context?: any,
		index?: number,
		element?: any,
		value?: number,
		angle?: number,
		style?: string,
		position?: any
	}

	declare export interface RenderCompleteEventArgs {
		object?: any,
		cancel?: boolean,
		context?: any,
		scaleElement?: any,
		model?: any,
		type?: string
	}

	declare export interface Frame {
		backgroundImageUrl?: string,
		frameType?: ej.datavisualization.CircularGauge.FrameType | string,
		halfCircleFrameEndAngle?: number,
		halfCircleFrameStartAngle?: number
	}

	declare export interface ScalesBorder {
		color?: string,
		width?: number
	}

	declare export interface ScalesCustomLabelsPosition {
		x?: number,
		y?: number
	}

	declare export interface ScalesCustomLabelsFont {
		fontFamily?: string,
		fontStyle?: string,
		size?: string
	}

	declare export interface ScalesCustomLabel {
		value?: string,
		color?: string,
		position?: ScalesCustomLabelsPosition,
		font?: ScalesCustomLabelsFont
	}

	declare export interface ScalesIndicatorsPosition {
		x?: number,
		y?: number
	}

	declare export interface ScalesIndicatorsStateRange {
		backgroundColor?: string,
		borderColor?: string,
		endValue?: number,
		font?: any,
		startValue?: number,
		text?: string,
		textColor?: string
	}

	declare export interface ScalesIndicator {
		height?: number,
		imageUrl?: string,
		position?: ScalesIndicatorsPosition,
		stateRanges?: Array<ScalesIndicatorsStateRange>,
		type?: ej.datavisualization.CircularGauge.IndicatorTypes | string,
		width?: number
	}

	declare export interface ScalesLabelsFont {
		fontFamily?: string,
		fontStyle?: string,
		size?: string
	}

	declare export interface ScalesLabel {
		angle?: number,
		autoAngle?: boolean,
		color?: string,
		distanceFromScale?: number,
		font?: ScalesLabelsFont,
		includeFirstValue?: boolean,
		opacity?: number,
		placement?: ej.datavisualization.CircularGauge.Placement | string,
		type?: ej.datavisualization.CircularGauge.LabelType | string,
		unitText?: string,
		unitTextPosition?: ej.datavisualization.CircularGauge.UnitTextPlacement | string
	}

	declare export interface ScalesPointerCap {
		backgroundColor?: string,
		borderColor?: string,
		borderWidth?: number,
		interiorGradient?: any,
		radius?: number
	}

	declare export interface ScalesPointersBorder {
		color?: string,
		width?: number
	}

	declare export interface ScalesPointersPointerValueTextFont {
		fontFamily?: string,
		fontStyle?: string,
		size?: string
	}

	declare export interface ScalesPointersPointerValueText {
		angle?: number,
		autoAngle?: boolean,
		color?: string,
		distance?: number,
		font?: ScalesPointersPointerValueTextFont,
		opacity?: number,
		showValue?: boolean
	}

	declare export interface ScalesPointer {
		backgroundColor?: string,
		backNeedleLength?: number,
		border?: ScalesPointersBorder,
		distanceFromScale?: number,
		gradients?: any,
		imageUrl?: string,
		length?: number,
		markerType?: ej.datavisualization.CircularGauge.MarkerType | string,
		needleType?: ej.datavisualization.CircularGauge.NeedleType | string,
		opacity?: number,
		placement?: ej.datavisualization.CircularGauge.Placement | string,
		pointerValueText?: ScalesPointersPointerValueText,
		showBackNeedle?: boolean,
		type?: ej.datavisualization.CircularGauge.PointerType | string,
		value?: number,
		width?: number
	}

	declare export interface ScalesRangesBorder {
		color?: string,
		width?: number
	}

	declare export interface ScalesRange {
		backgroundColor?: string,
		border?: ScalesRangesBorder,
		distanceFromScale?: number,
		endValue?: number,
		endWidth?: number,
		gradients?: any,
		opacity?: number,
		placement?: ej.datavisualization.CircularGauge.Placement | string,
		size?: number,
		startValue?: number,
		startWidth?: number
	}

	declare export interface ScalesSubGaugesPosition {
		x?: number,
		y?: number
	}

	declare export interface ScalesSubGauge {
		height?: number,
		position?: ScalesSubGaugesPosition,
		width?: number
	}

	declare export interface ScalesTick {
		angle?: number,
		color?: string,
		distanceFromScale?: number,
		height?: number,
		placement?: ej.datavisualization.CircularGauge.Placement | string,
		type?: ej.datavisualization.CircularGauge.LabelType | string,
		width?: number
	}

	declare export interface Scales {
		backgroundColor?: string,
		border?: ScalesBorder,
		direction?: ej.datavisualization.CircularGauge.Direction | string,
		customLabels?: Array<ScalesCustomLabel>,
		indicators?: Array<ScalesIndicator>,
		labels?: Array<ScalesLabel>,
		majorIntervalValue?: number,
		maximum?: number,
		minimum?: number,
		minorIntervalValue?: number,
		opacity?: number,
		pointerCap?: ScalesPointerCap,
		pointers?: Array<ScalesPointer>,
		radius?: number,
		ranges?: Array<ScalesRange>,
		shadowOffset?: number,
		showIndicators?: boolean,
		showLabels?: boolean,
		showPointers?: boolean,
		showRanges?: boolean,
		showScaleBar?: boolean,
		showTicks?: boolean,
		size?: number,
		startAngle?: number,
		subGauges?: Array<ScalesSubGauge>,
		sweepAngle?: number,
		ticks?: Array<ScalesTick>
	}

	declare export interface Tooltip {
		showCustomLabelTooltip?: boolean,
		showLabelTooltip?: boolean,
		templateID?: string
	}

			
}

declare module 'DigitalGauge' {
		declare export interface Model {
		frame?: Frame,
		height?: number,
		isResponsive?: boolean,
		items?: Items,
		matrixSegmentData?: any,
		segmentData?: any,
		themes?: string,
		value?: string,
		width?: number,
		init(e: InitEventArgs): void,
		itemRendering(e: ItemRenderingEventArgs): void,
		load(e: LoadEventArgs): void,
		renderComplete(e: RenderCompleteEventArgs): void
	}

	declare export interface InitEventArgs {
		object?: any,
		cancel?: boolean,
		items?: any,
		context?: any,
		model?: any,
		type?: string
	}

	declare export interface ItemRenderingEventArgs {
		object?: any,
		cancel?: boolean,
		items?: any,
		context?: any,
		model?: any,
		type?: string
	}

	declare export interface LoadEventArgs {
		object?: any,
		cancel?: boolean,
		items?: any,
		context?: any,
		model?: any,
		type?: string
	}

	declare export interface RenderCompleteEventArgs {
		object?: any,
		cancel?: boolean,
		items?: any,
		context?: any,
		model?: any,
		type?: string
	}

	declare export interface Frame {
		backgroundImageUrl?: string,
		innerWidth?: number,
		outerWidth?: number
	}

	declare export interface ItemsCharacterSettings {
		count?: number,
		opacity?: number,
		spacing?: number,
		type?: ej.datavisualization.DigitalGauge.CharacterType | string
	}

	declare export interface ItemsFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.DigitalGauge.FontStyle | string,
		size?: string
	}

	declare export interface ItemsPosition {
		x?: number,
		y?: number
	}

	declare export interface ItemsSegmentSettings {
		color?: string,
		gradient?: any,
		length?: number,
		opacity?: number,
		spacing?: number,
		width?: number
	}

	declare export interface Items {
		characterSettings?: ItemsCharacterSettings,
		enableCustomFont?: boolean,
		font?: ItemsFont,
		position?: ItemsPosition,
		segmentSettings?: ItemsSegmentSettings,
		shadowBlur?: number,
		shadowColor?: string,
		shadowOffsetX?: number,
		shadowOffsetY?: number,
		textAlign?: string,
		textColor?: string,
		value?: string
	}

			
}

declare module 'Chart' {
		declare export interface Model {
		annotations?: Array<Annotation>,
		backGroundImageUrl?: string,
		border?: Border,
		exportSettings?: ExportSettings,
		chartArea?: ChartArea,
		columnDefinitions?: Array<ColumnDefinition>,
		commonSeriesOptions?: CommonSeriesOptions,
		crosshair?: Crosshair,
		depth?: number,
		enable3D?: boolean,
		enableCanvasRendering?: boolean,
		enableRotation?: boolean,
		indicators?: Array<Indicator>,
		isResponsive?: boolean,
		legend?: Legend,
		locale?: string,
		palette?: Array<any>,
		Margin?: any,
		perspectiveAngle?: number,
		primaryXAxis?: PrimaryXAxis,
		primaryYAxis?: PrimaryYAxis,
		rotation?: number,
		rowDefinitions?: Array<RowDefinition>,
		series?: Array<Series>,
		sideBySideSeriesPlacement?: boolean,
		size?: Size,
		theme?: ej.datavisualization.Chart.Theme | string,
		tilt?: number,
		title?: Title,
		wallSize?: number,
		zooming?: Zooming,
		animationComplete(e: AnimationCompleteEventArgs): void,
		axesLabelRendering(e: AxesLabelRenderingEventArgs): void,
		axesLabelsInitialize(e: AxesLabelsInitializeEventArgs): void,
		axesRangeCalculate(e: AxesRangeCalculateEventArgs): void,
		axesTitleRendering(e: AxesTitleRenderingEventArgs): void,
		chartAreaBoundsCalculate(e: ChartAreaBoundsCalculateEventArgs): void,
		create(e: CreateEventArgs): void,
		destroy(e: DestroyEventArgs): void,
		displayTextRendering(e: DisplayTextRenderingEventArgs): void,
		legendBoundsCalculate(e: LegendBoundsCalculateEventArgs): void,
		legendItemClick(e: LegendItemClickEventArgs): void,
		legendItemMouseMove(e: LegendItemMouseMoveEventArgs): void,
		legendItemRendering(e: LegendItemRenderingEventArgs): void,
		load(e: LoadEventArgs): void,
		pointRegionClick(e: PointRegionClickEventArgs): void,
		pointRegionMouseMove(e: PointRegionMouseMoveEventArgs): void,
		preRender(e: PreRenderEventArgs): void,
		seriesRegionClick(e: SeriesRegionClickEventArgs): void,
		seriesRendering(e: SeriesRenderingEventArgs): void,
		symbolRendering(e: SymbolRenderingEventArgs): void,
		titleRendering(e: TitleRenderingEventArgs): void,
		toolTipInitialize(e: ToolTipInitializeEventArgs): void,
		trackAxisToolTip(e: TrackAxisToolTipEventArgs): void,
		trackToolTip(e: TrackToolTipEventArgs): void,
		axisLabelClick(e: AxisLabelClickEventArgs): void,
		axisLabelMouseMove(e: AxisLabelMouseMoveEventArgs): void,
		chartClick(e: ChartClickEventArgs): void,
		chartMouseMove(e: ChartMouseMoveEventArgs): void,
		chartDoubleClick(e: ChartDoubleClickEventArgs): void,
		annotationClick(e: AnnotationClickEventArgs): void,
		afterResize(e: AfterResizeEventArgs): void,
		beforeResize(e: BeforeResizeEventArgs): void,
		errorBarRendering(e: ErrorBarRenderingEventArgs): void,
		scrollChanged(e: ScrollChangedEventArgs): void,
		scrollStart(e: ScrollStartEventArgs): void,
		scrollEnd(e: ScrollEndEventArgs): void
	}

	declare export interface AnimationCompleteEventArgs {
		series?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface AxesLabelRenderingEventArgs {
		Axis?: any,
		LabelText?: string,
		LabelValue?: string,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface AxesLabelsInitializeEventArgs {
		dataAxes?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface AxesRangeCalculateEventArgs {
		delta?: number,
		interval?: number,
		max?: number,
		min?: number,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface AxesTitleRenderingEventArgs {
		axes?: any,
		locationX?: number,
		locationY?: number,
		title?: string,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ChartAreaBoundsCalculateEventArgs {
		areaBoundsHeight?: number,
		areaBoundsWidth?: number,
		areaBoundsX?: number,
		areaBoundsY?: number,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface CreateEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface DestroyEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface DisplayTextRenderingEventArgs {
		text?: string,
		locationX?: number,
		locationY?: number,
		seriesIndex?: number,
		pointIndex?: number,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface LegendBoundsCalculateEventArgs {
		legendBoundsHeight?: number,
		legendBoundsWidth?: number,
		legendBoundsRows?: number,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface LegendItemClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		startX?: number,
		startY?: number,
		LegendItem?: any,
		style?: any,
		Bounds?: any,
		symbolShape?: string,
		series?: any
	}

	declare export interface LegendItemMouseMoveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		startX?: number,
		startY?: number,
		LegendItem?: any,
		style?: any,
		Bounds?: any,
		symbolShape?: string,
		series?: any
	}

	declare export interface LegendItemRenderingEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		startX?: number,
		startY?: number,
		legendItem?: any,
		style?: any,
		symbolShape?: string
	}

	declare export interface LoadEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface PointRegionClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		locationX?: number,
		locationY?: number,
		pointIndex?: number,
		seriesIndex?: number
	}

	declare export interface PointRegionMouseMoveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		locationX?: number,
		locationY?: number,
		pointIndex?: number,
		seriesIndex?: number
	}

	declare export interface PreRenderEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface SeriesRegionClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		series?: any,
		seriesIndex?: number
	}

	declare export interface SeriesRenderingEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		series?: any
	}

	declare export interface SymbolRenderingEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		location?: any,
		style?: any
	}

	declare export interface TitleRenderingEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		location?: any,
		size?: any,
		title?: string
	}

	declare export interface ToolTipInitializeEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		currentText?: string,
		pointIndex?: number,
		seriesIndex?: number
	}

	declare export interface TrackAxisToolTipEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		location?: any,
		axisIndex?: number,
		crossAxis?: number,
		currentTrackText?: string
	}

	declare export interface TrackToolTipEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		location?: any,
		pointIndex?: number,
		seriesIndex?: number,
		currentText?: string,
		series?: any
	}

	declare export interface AxisLabelClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		location?: any,
		index?: number,
		axis?: any,
		text?: string
	}

	declare export interface AxisLabelMouseMoveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		location?: any,
		index?: number,
		axis?: any,
		text?: string
	}

	declare export interface ChartClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		location?: any,
		id?: string,
		size?: any,
		pageX?: number,
		pageY?: number
	}

	declare export interface ChartMouseMoveEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		location?: any,
		id?: string,
		size?: any,
		pageX?: number,
		pageY?: number
	}

	declare export interface ChartDoubleClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		location?: any,
		id?: string,
		size?: any,
		pageX?: number,
		pageY?: number
	}

	declare export interface AnnotationClickEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		location?: any,
		contentData?: any,
		pageX?: number,
		pageY?: number
	}

	declare export interface AfterResizeEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		width?: number,
		height?: number,
		prevWidth?: number,
		prevHeight?: number,
		originalWidth?: number,
		originalHeight?: number
	}

	declare export interface BeforeResizeEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		currentWidth?: number,
		currentHeight?: number,
		newWidth?: number,
		newHeight?: number
	}

	declare export interface ErrorBarRenderingEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		errorbar?: any
	}

	declare export interface ScrollChangedEventArgs {
		data?: any,
		dataoldRange?: any,
		datanewRange?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ScrollStartEventArgs {
		data?: any,
		datastartRange?: string,
		dataendRange?: string,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ScrollEndEventArgs {
		data?: any,
		dataoldRange?: any,
		datanewRange?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface AnnotationsMargin {
		bottom?: number,
		left?: number,
		right?: number,
		top?: number
	}

	declare export interface Annotation {
		angle?: number,
		content?: string,
		coordinateUnit?: ej.datavisualization.Chart.CoordinateUnit | string,
		horizontalAlignment?: ej.datavisualization.Chart.HorizontalAlignment | string,
		margin?: AnnotationsMargin,
		opacity?: number,
		region?: ej.datavisualization.Chart.Region | string,
		verticalAlignment?: ej.datavisualization.Chart.VerticalAlignment | string,
		visible?: boolean,
		x?: number,
		xAxisName?: string,
		y?: number,
		yAxisName?: string
	}

	declare export interface Border {
		color?: string,
		opacity?: number,
		width?: number
	}

	declare export interface ExportSettings {
		filename?: string,
		action?: string,
		angle?: number,
		type?: ej.datavisualization.Chart.ExportingType | string,
		orientation?: ej.datavisualization.Chart.ExportingOrientation | string,
		mode?: ej.datavisualization.Chart.ExportingMode | string,
		multipleExport?: boolean
	}

	declare export interface ChartAreaBorder {
		color?: string,
		opacity?: number,
		width?: number
	}

	declare export interface ChartArea {
		background?: string,
		border?: ChartAreaBorder
	}

	declare export interface ColumnDefinition {
		unit?: ej.datavisualization.Chart.Unit | string,
		columnWidth?: number,
		lineColor?: string,
		lineWidth?: number
	}

	declare export interface CommonSeriesOptionsBorder {
		color?: string,
		dashArray?: string,
		width?: number
	}

	declare export interface CommonSeriesOptionsFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface CommonSeriesOptionsMarkerBorder {
		color?: string,
		width?: number
	}

	declare export interface CommonSeriesOptionsMarkerDataLabelBorder {
		color?: string,
		width?: number
	}

	declare export interface CommonSeriesOptionsMarkerDataLabelConnectorLine {
		type?: ej.datavisualization.Chart.ConnectorLineType | string,
		width?: number,
		color?: string,
		height?: string
	}

	declare export interface CommonSeriesOptionsMarkerDataLabelFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface CommonSeriesOptionsMarkerDataLabelMargin {
		bottom?: number,
		left?: number,
		right?: number,
		top?: number
	}

	declare export interface CommonSeriesOptionsMarkerDataLabel {
		angle?: number,
		border?: CommonSeriesOptionsMarkerDataLabelBorder,
		connectorLine?: CommonSeriesOptionsMarkerDataLabelConnectorLine,
		fill?: string,
		font?: CommonSeriesOptionsMarkerDataLabelFont,
		horizontalTextAlignment?: ej.datavisualization.Chart.HorizontalTextAlignment | string,
		margin?: CommonSeriesOptionsMarkerDataLabelMargin,
		opacity?: number,
		shape?: ej.datavisualization.Chart.Shape | string,
		textMappingName?: string,
		textPosition?: ej.datavisualization.Chart.TextPosition | string,
		verticalTextAlignment?: ej.datavisualization.Chart.VerticalTextAlignment | string,
		visible?: boolean
	}

	declare export interface CommonSeriesOptionsMarkerSize {
		height?: number,
		width?: number
	}

	declare export interface CommonSeriesOptionsMarker {
		border?: CommonSeriesOptionsMarkerBorder,
		dataLabel?: CommonSeriesOptionsMarkerDataLabel,
		fill?: string,
		imageUrl?: string,
		opacity?: number,
		shape?: ej.datavisualization.Chart.Shape | string,
		size?: CommonSeriesOptionsMarkerSize,
		visible?: boolean
	}

	declare export interface CommonSeriesOptionsTooltipBorder {
		color?: string,
		width?: number
	}

	declare export interface CommonSeriesOptionsTooltip {
		border?: CommonSeriesOptionsTooltipBorder,
		rx?: number,
		ry?: number,
		duration?: string,
		enableAnimation?: boolean,
		fill?: string,
		format?: string,
		opacity?: number,
		template?: string,
		visible?: boolean
	}

	declare export interface CommonSeriesOptionsEmptyPointSettingsStyleBorder {
		color?: string,
		width?: number
	}

	declare export interface CommonSeriesOptionsEmptyPointSettingsStyle {
		color?: string,
		border?: CommonSeriesOptionsEmptyPointSettingsStyleBorder
	}

	declare export interface CommonSeriesOptionsEmptyPointSettings {
		visible?: boolean,
		displayMode?: ej.datavisualization.Chart.EmptyPointMode | string,
		style?: CommonSeriesOptionsEmptyPointSettingsStyle
	}

	declare export interface CommonSeriesOptionsConnectorLine {
		width?: number,
		color?: string,
		dashArray?: string,
		opacity?: number
	}

	declare export interface CommonSeriesOptionsErrorBarCap {
		visible?: boolean,
		width?: number,
		length?: number,
		fill?: string
	}

	declare export interface CommonSeriesOptionsErrorBar {
		visibility?: boolean,
		type?: ej.datavisualization.Chart.ErrorBarType | string,
		mode?: ej.datavisualization.Chart.ErrorBarMode | string,
		direction?: ej.datavisualization.Chart.ErrorBarDirection | string,
		verticalErrorValue?: number,
		horizontalErrorValue?: number,
		horizontalPositiveErrorValue?: number,
		horizontalNegativeErrorValue?: number,
		verticalPositiveErrorValue?: number,
		verticalNegativeErrorValue?: number,
		fill?: string,
		width?: number,
		cap?: CommonSeriesOptionsErrorBarCap
	}

	declare export interface CommonSeriesOptionsTrendline {
		visibility?: boolean,
		type?: string,
		name?: string,
		fill?: string,
		width?: number,
		opacity?: number,
		dashArray?: string,
		forwardForecast?: number,
		backwardForecast?: number,
		polynomialOrder?: number,
		period?: number
	}

	declare export interface CommonSeriesOptionsHighlightSettingsBorder {
		color?: string,
		width?: string
	}

	declare export interface CommonSeriesOptionsHighlightSettings {
		enable?: boolean,
		mode?: ej.datavisualization.Chart.Mode | string,
		color?: string,
		opacity?: number,
		border?: CommonSeriesOptionsHighlightSettingsBorder,
		pattern?: string,
		customPattern?: string
	}

	declare export interface CommonSeriesOptionsSelectionSettingsBorder {
		color?: string,
		width?: string
	}

	declare export interface CommonSeriesOptionsSelectionSettings {
		enable?: boolean,
		type?: ej.datavisualization.Chart.SelectionType | string,
		mode?: ej.datavisualization.Chart.Mode | string,
		rangeType?: ej.datavisualization.Chart.RangeType | string,
		color?: string,
		opacity?: number,
		border?: CommonSeriesOptionsSelectionSettingsBorder,
		pattern?: string,
		customPattern?: string
	}

	declare export interface CommonSeriesOptions {
		border?: CommonSeriesOptionsBorder,
		columnWidth?: number,
		columnSpacing?: number,
		visibleOnLegend?: string,
		dashArray?: string,
		dataSource?: any,
		doughnutCoefficient?: number,
		doughnutSize?: number,
		drawType?: ej.datavisualization.Chart.DrawType | string,
		enableAnimation?: boolean,
		enableSmartLabels?: boolean,
		endAngle?: number,
		explode?: boolean,
		explodeAll?: boolean,
		explodeIndex?: number,
		explodeOffset?: number,
		fill?: string,
		font?: CommonSeriesOptionsFont,
		funnelHeight?: string,
		funnelWidth?: string,
		gapRatio?: number,
		isClosed?: boolean,
		isStacking?: boolean,
		isTransposed?: boolean,
		labelPosition?: ej.datavisualization.Chart.LabelPosition | string,
		lineCap?: ej.datavisualization.Chart.LineCap | string,
		lineJoin?: ej.datavisualization.Chart.LineJoin | string,
		marker?: CommonSeriesOptionsMarker,
		opacity?: number,
		palette?: string,
		pieCoefficient?: number,
		pointColorMappingName?: string,
		pyramidMode?: ej.datavisualization.Chart.PyramidMode | string,
		startAngle?: number,
		tooltip?: CommonSeriesOptionsTooltip,
		type?: ej.datavisualization.Chart.Type | string,
		xAxisName?: string,
		xName?: string,
		yAxisName?: string,
		yName?: string,
		high?: string,
		low?: string,
		open?: string,
		close?: string,
		zOrder?: number,
		size?: string,
		emptyPointSettings?: CommonSeriesOptionsEmptyPointSettings,
		positiveFill?: string,
		connectorLine?: CommonSeriesOptionsConnectorLine,
		errorBar?: CommonSeriesOptionsErrorBar,
		trendlines?: Array<CommonSeriesOptionsTrendline>,
		highlightSettings?: CommonSeriesOptionsHighlightSettings,
		selectionSettings?: CommonSeriesOptionsSelectionSettings
	}

	declare export interface CrosshairMarkerBorder {
		width?: number
	}

	declare export interface CrosshairMarkerSize {
		height?: number,
		width?: number
	}

	declare export interface CrosshairMarker {
		border?: CrosshairMarkerBorder,
		opacity?: boolean,
		size?: CrosshairMarkerSize,
		visible?: boolean
	}

	declare export interface CrosshairLine {
		color?: string,
		width?: number
	}

	declare export interface Crosshair {
		marker?: CrosshairMarker,
		line?: CrosshairLine,
		type?: ej.datavisualization.Chart.CrosshairType | string,
		visible?: boolean
	}

	declare export interface IndicatorsHistogramBorder {
		color?: string,
		width?: number
	}

	declare export interface IndicatorsHistogram {
		border?: IndicatorsHistogramBorder,
		fill?: string,
		opacity?: number
	}

	declare export interface IndicatorsLowerLine {
		fill?: string,
		width?: number
	}

	declare export interface IndicatorsMacdLine {
		fill?: string,
		width?: number
	}

	declare export interface IndicatorsPeriodLine {
		fill?: string,
		width?: number
	}

	declare export interface IndicatorsTooltipBorder {
		color?: string,
		width?: number
	}

	declare export interface IndicatorsTooltip {
		border?: IndicatorsTooltipBorder,
		duration?: string,
		enableAnimation?: boolean,
		format?: string,
		fill?: string,
		opacity?: number,
		visible?: boolean
	}

	declare export interface IndicatorsUpperLine {
		fill?: string,
		width?: number
	}

	declare export interface Indicator {
		dPeriod?: number,
		enableAnimation?: boolean,
		fill?: string,
		histogram?: IndicatorsHistogram,
		kPeriod?: number,
		longPeriod?: number,
		lowerLine?: IndicatorsLowerLine,
		macdLine?: IndicatorsMacdLine,
		macdType?: string,
		period?: number,
		periodLine?: IndicatorsPeriodLine,
		seriesName?: string,
		shortPeriod?: number,
		standardDeviations?: number,
		tooltip?: IndicatorsTooltip,
		trigger?: number,
		visibility?: string,
		type?: string,
		upperLine?: IndicatorsUpperLine,
		width?: number,
		xAxisName?: string,
		yAxisName?: string
	}

	declare export interface LegendBorder {
		color?: string,
		width?: number
	}

	declare export interface LegendFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		size?: string
	}

	declare export interface LegendItemStyleBorder {
		color?: string,
		width?: number
	}

	declare export interface LegendItemStyle {
		border?: LegendItemStyleBorder,
		height?: number,
		width?: number
	}

	declare export interface LegendLocation {
		x?: number,
		y?: number
	}

	declare export interface LegendSize {
		height?: string,
		width?: string
	}

	declare export interface LegendTitleFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		size?: string
	}

	declare export interface LegendTitle {
		font?: LegendTitleFont,
		text?: string,
		textAlignment?: ej.datavisualization.Chart.Alignment | string
	}

	declare export interface Legend {
		alignment?: ej.datavisualization.Chart.Alignment | string,
		background?: string,
		border?: LegendBorder,
		columnCount?: number,
		enableScrollbar?: boolean,
		fill?: string,
		font?: LegendFont,
		itemPadding?: number,
		itemStyle?: LegendItemStyle,
		location?: LegendLocation,
		opacity?: number,
		position?: ej.datavisualization.Chart.Position | string,
		rowCount?: number,
		shape?: ej.datavisualization.Chart.Shape | string,
		size?: LegendSize,
		title?: LegendTitle,
		textOverflow?: ej.datavisualization.Chart.TextOverflow | string,
		textWidth?: number,
		visible?: boolean
	}

	declare export interface PrimaryXAxisAlternateGridBandEven {
		fill?: string,
		opacity?: number
	}

	declare export interface PrimaryXAxisAlternateGridBandOdd {
		fill?: string,
		opacity?: number
	}

	declare export interface PrimaryXAxisAlternateGridBand {
		even?: PrimaryXAxisAlternateGridBandEven,
		odd?: PrimaryXAxisAlternateGridBandOdd
	}

	declare export interface PrimaryXAxisAxisLine {
		dashArray?: string,
		offset?: number,
		visible?: boolean,
		width?: number
	}

	declare export interface PrimaryXAxisCrosshairLabel {
		visible?: boolean
	}

	declare export interface PrimaryXAxisFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface PrimaryXAxisMajorGridLines {
		dashArray?: string,
		color?: string,
		opacity?: number,
		visible?: boolean,
		width?: number
	}

	declare export interface PrimaryXAxisMajorTickLines {
		size?: number,
		visible?: boolean,
		width?: number
	}

	declare export interface PrimaryXAxisMinorGridLines {
		dashArray?: string,
		visible?: boolean,
		width?: number
	}

	declare export interface PrimaryXAxisMinorTickLines {
		size?: number,
		visible?: boolean,
		width?: number
	}

	declare export interface PrimaryXAxisRange {
		min?: number,
		max?: number,
		interval?: number
	}

	declare export interface PrimaryXAxisStripLineFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: string,
		opacity?: number,
		size?: string
	}

	declare export interface PrimaryXAxisStripLine {
		borderColor?: string,
		color?: string,
		end?: number,
		font?: PrimaryXAxisStripLineFont,
		start?: number,
		startFromAxis?: boolean,
		text?: string,
		textAlignment?: ej.datavisualization.Chart.TextAlignment | string,
		visible?: boolean,
		width?: number,
		zIndex?: ej.datavisualization.Chart.ZIndex | string
	}

	declare export interface PrimaryXAxisTitleFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface PrimaryXAxisTitle {
		enableTrim?: boolean,
		font?: PrimaryXAxisTitleFont,
		maximumTitleWidth?: number,
		text?: string,
		visible?: boolean
	}

	declare export interface PrimaryXAxis {
		alternateGridBand?: PrimaryXAxisAlternateGridBand,
		crossesAt?: number,
		crossesInAxis?: string,
		isIndexed?: boolean,
		axisLine?: PrimaryXAxisAxisLine,
		columnIndex?: number,
		columnSpan?: number,
		crosshairLabel?: PrimaryXAxisCrosshairLabel,
		desiredIntervals?: number,
		edgeLabelPlacement?: ej.datavisualization.Chart.EdgeLabelPlacement | string,
		enableTrim?: boolean,
		font?: PrimaryXAxisFont,
		intervalType?: ej.datavisualization.Chart.IntervalType | string,
		isInversed?: boolean,
		labelFormat?: string,
		labelIntersectAction?: ej.datavisualization.Chart.LabelIntersectAction | string,
		labelPosition?: ej.datavisualization.Chart.LabelPosition | string,
		labelRotation?: number,
		logBase?: number,
		majorGridLines?: PrimaryXAxisMajorGridLines,
		majorTickLines?: PrimaryXAxisMajorTickLines,
		maximumLabels?: number,
		maximumLabelWidth?: number,
		minorGridLines?: PrimaryXAxisMinorGridLines,
		minorTickLines?: PrimaryXAxisMinorTickLines,
		minorTicksPerInterval?: number,
		name?: string,
		opposedPosition?: boolean,
		plotOffset?: number,
		range?: PrimaryXAxisRange,
		rangePadding?: ej.datavisualization.Chart.RangePadding | string,
		roundingPlaces?: number,
		stripLine?: Array<PrimaryXAxisStripLine>,
		tickLinesPosition?: ej.datavisualization.Chart.TickLinesPosition | string,
		title?: PrimaryXAxisTitle,
		valueType?: ej.datavisualization.Chart.ValueType | string,
		visible?: boolean,
		zoomFactor?: number,
		zoomPosition?: number
	}

	declare export interface PrimaryYAxisAlternateGridBandEven {
		fill?: string,
		opacity?: number
	}

	declare export interface PrimaryYAxisAlternateGridBandOdd {
		fill?: string,
		opacity?: number
	}

	declare export interface PrimaryYAxisAlternateGridBand {
		even?: PrimaryYAxisAlternateGridBandEven,
		odd?: PrimaryYAxisAlternateGridBandOdd
	}

	declare export interface PrimaryYAxisAxisLine {
		dashArray?: string,
		offset?: number,
		visible?: boolean,
		width?: number
	}

	declare export interface PrimaryYAxisCrosshairLabel {
		visible?: boolean
	}

	declare export interface PrimaryYAxisFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface PrimaryYAxisMajorGridLines {
		dashArray?: string,
		color?: string,
		opacity?: number,
		visible?: boolean,
		width?: number
	}

	declare export interface PrimaryYAxisMajorTickLines {
		size?: number,
		visible?: boolean,
		width?: number
	}

	declare export interface PrimaryYAxisMinorGridLines {
		dashArray?: string,
		visible?: boolean,
		width?: number
	}

	declare export interface PrimaryYAxisMinorTickLines {
		size?: number,
		visible?: boolean,
		width?: number
	}

	declare export interface PrimaryYAxisRange {
		min?: number,
		max?: number,
		interval?: number
	}

	declare export interface PrimaryYAxisStripLineFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: string,
		opacity?: number,
		size?: string
	}

	declare export interface PrimaryYAxisStripLine {
		borderColor?: string,
		color?: string,
		end?: number,
		font?: PrimaryYAxisStripLineFont,
		start?: number,
		startFromAxis?: boolean,
		text?: string,
		textAlignment?: ej.datavisualization.Chart.TextAlignment | string,
		visible?: boolean,
		width?: number,
		zIndex?: ej.datavisualization.Chart.ZIndex | string
	}

	declare export interface PrimaryYAxisTitleFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface PrimaryYAxisTitle {
		enableTrim?: boolean,
		font?: PrimaryYAxisTitleFont,
		maximumTitleWidth?: number,
		text?: string,
		visible?: boolean
	}

	declare export interface PrimaryYAxis {
		alternateGridBand?: PrimaryYAxisAlternateGridBand,
		axisLine?: PrimaryYAxisAxisLine,
		crossesAt?: number,
		crossesInAxis?: string,
		crosshairLabel?: PrimaryYAxisCrosshairLabel,
		desiredIntervals?: number,
		edgeLabelPlacement?: ej.datavisualization.Chart.EdgeLabelPlacement | string,
		enableTrim?: boolean,
		font?: PrimaryYAxisFont,
		intervalType?: ej.datavisualization.Chart.IntervalType | string,
		isInversed?: boolean,
		labelFormat?: string,
		labelIntersectAction?: ej.datavisualization.Chart.LabelIntersectAction | string,
		labelPosition?: ej.datavisualization.Chart.LabelPosition | string,
		logBase?: number,
		majorGridLines?: PrimaryYAxisMajorGridLines,
		majorTickLines?: PrimaryYAxisMajorTickLines,
		maximumLabels?: number,
		maximumLabelWidth?: number,
		minorGridLines?: PrimaryYAxisMinorGridLines,
		minorTickLines?: PrimaryYAxisMinorTickLines,
		minorTicksPerInterval?: number,
		name?: string,
		opposedPosition?: boolean,
		plotOffset?: number,
		range?: PrimaryYAxisRange,
		rangePadding?: ej.datavisualization.Chart.RangePadding | string,
		roundingPlaces?: number,
		rowIndex?: number,
		rowSpan?: number,
		stripLine?: Array<PrimaryYAxisStripLine>,
		tickLinesPosition?: ej.datavisualization.Chart.TickLinesPosition | string,
		title?: PrimaryYAxisTitle,
		valueType?: ej.datavisualization.Chart.ValueType | string,
		visible?: boolean,
		zoomFactor?: number,
		zoomPosition?: number
	}

	declare export interface RowDefinition {
		unit?: ej.datavisualization.Chart.Unit | string,
		rowHeight?: number,
		lineColor?: string,
		lineWidth?: number
	}

	declare export interface SeriesBorder {
		color?: string,
		width?: number,
		dashArray?: string
	}

	declare export interface SeriesFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface SeriesMarkerBorder {
		color?: string,
		width?: number
	}

	declare export interface SeriesMarkerDataLabelBorder {
		color?: string,
		width?: number
	}

	declare export interface SeriesMarkerDataLabelConnectorLine {
		type?: ej.datavisualization.Chart.Type | string,
		width?: number,
		color?: string,
		height?: number
	}

	declare export interface SeriesMarkerDataLabelFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface SeriesMarkerDataLabelMargin {
		bottom?: number,
		left?: number,
		right?: number,
		top?: number
	}

	declare export interface SeriesMarkerDataLabel {
		angle?: number,
		border?: SeriesMarkerDataLabelBorder,
		connectorLine?: SeriesMarkerDataLabelConnectorLine,
		fill?: string,
		font?: SeriesMarkerDataLabelFont,
		horizontalTextAlignment?: ej.datavisualization.Chart.HorizontalTextAlignment | string,
		margin?: SeriesMarkerDataLabelMargin,
		opacity?: number,
		shape?: ej.datavisualization.Chart.Shape | string,
		textMappingName?: string,
		textPosition?: ej.datavisualization.Chart.TextPosition | string,
		verticalTextAlignment?: ej.datavisualization.Chart.VerticalTextAlignment | string,
		visible?: boolean,
		template?: string,
		offset?: number
	}

	declare export interface SeriesMarkerSize {
		height?: number,
		width?: number
	}

	declare export interface SeriesMarker {
		border?: SeriesMarkerBorder,
		dataLabel?: SeriesMarkerDataLabel,
		fill?: string,
		imageUrl?: string,
		opacity?: number,
		shape?: ej.datavisualization.Chart.Shape | string,
		size?: SeriesMarkerSize,
		visible?: boolean
	}

	declare export interface SeriesEmptyPointSettingsStyleBorder {
		color?: string,
		width?: number
	}

	declare export interface SeriesEmptyPointSettingsStyle {
		color?: string,
		border?: SeriesEmptyPointSettingsStyleBorder
	}

	declare export interface SeriesEmptyPointSettings {
		visible?: boolean,
		displayMode?: ej.datavisualization.Chart.EmptyPointMode | string,
		style?: SeriesEmptyPointSettingsStyle
	}

	declare export interface SeriesConnectorLine {
		width?: number,
		color?: string,
		dashArray?: string,
		opacity?: number
	}

	declare export interface SeriesErrorBarCap {
		visible?: boolean,
		width?: number,
		length?: number,
		fill?: string
	}

	declare export interface SeriesErrorBar {
		visibility?: boolean,
		type?: ej.datavisualization.Chart.ErrorBarType | string,
		mode?: ej.datavisualization.Chart.ErrorBarMode | string,
		direction?: ej.datavisualization.Chart.ErrorBarDirection | string,
		verticalErrorValue?: number,
		horizontalErrorValue?: number,
		horizontalPositiveErrorValue?: number,
		horizontalNegativeErrorValue?: number,
		verticalPositiveErrorValue?: number,
		verticalNegativeErrorValue?: number,
		fill?: string,
		width?: number,
		cap?: SeriesErrorBarCap
	}

	declare export interface SeriesPointsBorder {
		color?: string,
		width?: number
	}

	declare export interface SeriesPointsMarkerBorder {
		color?: string,
		width?: number
	}

	declare export interface SeriesPointsMarkerDataLabelBorder {
		color?: string,
		width?: number
	}

	declare export interface SeriesPointsMarkerDataLabelConnectorLine {
		type?: ej.datavisualization.Chart.ConnectorLineType | string,
		width?: number
	}

	declare export interface SeriesPointsMarkerDataLabelFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface SeriesPointsMarkerDataLabelMargin {
		bottom?: number,
		left?: number,
		right?: number,
		top?: number
	}

	declare export interface SeriesPointsMarkerDataLabel {
		angle?: number,
		border?: SeriesPointsMarkerDataLabelBorder,
		connectorLine?: SeriesPointsMarkerDataLabelConnectorLine,
		fill?: string,
		font?: SeriesPointsMarkerDataLabelFont,
		horizontalTextAlignment?: ej.datavisualization.Chart.HorizontalTextAlignment | string,
		margin?: SeriesPointsMarkerDataLabelMargin,
		opacity?: number,
		shape?: ej.datavisualization.Chart.Shape | string,
		textPosition?: ej.datavisualization.Chart.TextPosition | string,
		verticalTextAlignment?: ej.datavisualization.Chart.VerticalTextAlignment | string,
		visible?: boolean,
		template?: string,
		offset?: number
	}

	declare export interface SeriesPointsMarkerSize {
		height?: number,
		width?: number
	}

	declare export interface SeriesPointsMarker {
		border?: SeriesPointsMarkerBorder,
		dataLabel?: SeriesPointsMarkerDataLabel,
		fill?: string,
		imageUrl?: string,
		opacity?: number,
		shape?: ej.datavisualization.Chart.Shape | string,
		size?: SeriesPointsMarkerSize,
		visible?: boolean
	}

	declare export interface SeriesPoint {
		border?: SeriesPointsBorder,
		visibleOnLegend?: string,
		showIntermediateSum?: boolean,
		showTotalSum?: boolean,
		close?: number,
		size?: number,
		fill?: string,
		high?: number,
		low?: number,
		marker?: SeriesPointsMarker,
		open?: number,
		text?: string,
		x?: number,
		y?: number
	}

	declare export interface SeriesTooltipBorder {
		color?: string,
		width?: number
	}

	declare export interface SeriesTooltip {
		border?: SeriesTooltipBorder,
		rx?: number,
		ry?: number,
		duration?: string,
		enableAnimation?: boolean,
		fill?: string,
		format?: string,
		opacity?: number,
		template?: string,
		visible?: boolean
	}

	declare export interface SeriesTrendline {
		visibility?: boolean,
		type?: string,
		name?: string,
		fill?: string,
		width?: number,
		opacity?: number,
		dashArray?: string,
		forwardForecast?: number,
		backwardForecast?: number,
		polynomialOrder?: number,
		period?: number
	}

	declare export interface SeriesHighlightSettingsBorder {
		color?: string,
		width?: string
	}

	declare export interface SeriesHighlightSettings {
		enable?: boolean,
		mode?: ej.datavisualization.Chart.Mode | string,
		color?: string,
		opacity?: number,
		border?: SeriesHighlightSettingsBorder,
		pattern?: string,
		customPattern?: string
	}

	declare export interface SeriesSelectionSettingsBorder {
		color?: string,
		width?: string
	}

	declare export interface SeriesSelectionSettings {
		enable?: boolean,
		mode?: ej.datavisualization.Chart.Mode | string,
		type?: ej.datavisualization.Chart.SelectionType | string,
		rangeType?: ej.datavisualization.Chart.RangeType | string,
		color?: string,
		opacity?: number,
		border?: SeriesSelectionSettingsBorder,
		pattern?: string,
		customPattern?: string
	}

	declare export interface Series {
		bearFillColor?: string,
		border?: SeriesBorder,
		bullFillColor?: string,
		columnWidth?: number,
		columnSpacing?: number,
		dashArray?: string,
		dataSource?: any,
		doughnutCoefficient?: number,
		doughnutSize?: number,
		drawType?: boolean,
		enableAnimation?: boolean,
		enableSmartLabels?: number,
		endAngle?: number,
		explode?: boolean,
		explodeAll?: boolean,
		explodeIndex?: number,
		explodeOffset?: number,
		fill?: string,
		font?: SeriesFont,
		funnelHeight?: string,
		funnelWidth?: string,
		gapRatio?: number,
		isClosed?: boolean,
		isStacking?: boolean,
		isTransposed?: boolean,
		labelPosition?: ej.datavisualization.Chart.LabelPosition | string,
		lineCap?: ej.datavisualization.Chart.LineCap | string,
		lineJoin?: ej.datavisualization.Chart.LineJoin | string,
		marker?: SeriesMarker,
		name?: string,
		opacity?: number,
		palette?: string,
		pieCoefficient?: number,
		emptyPointSettings?: SeriesEmptyPointSettings,
		positiveFill?: string,
		connectorLine?: SeriesConnectorLine,
		errorBar?: SeriesErrorBar,
		points?: Array<SeriesPoint>,
		pyramidMode?: ej.datavisualization.Chart.PyramidMode | string,
		query?: any,
		startAngle?: number,
		tooltip?: SeriesTooltip,
		type?: ej.datavisualization.Chart.Type | string,
		visibility?: string,
		visibleOnLegend?: string,
		xAxisName?: string,
		xName?: string,
		yAxisName?: string,
		yName?: string,
		high?: string,
		low?: string,
		open?: string,
		close?: string,
		pointColorMappingName?: string,
		zOrder?: number,
		size?: string,
		trendlines?: Array<SeriesTrendline>,
		highlightSettings?: SeriesHighlightSettings,
		selectionSettings?: SeriesSelectionSettings
	}

	declare export interface Size {
		height?: string,
		width?: string
	}

	declare export interface TitleBorder {
		width?: number,
		color?: string,
		opacity?: number,
		cornerRadius?: number
	}

	declare export interface TitleFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface TitleSubTitleFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.Chart.FontStyle | string,
		fontWeight?: ej.datavisualization.Chart.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface TitleSubTitleBorder {
		width?: number,
		color?: string,
		opacity?: number,
		cornerRadius?: number
	}

	declare export interface TitleSubTitle {
		font?: TitleSubTitleFont,
		background?: string,
		border?: TitleSubTitleBorder,
		text?: string,
		textAlignment?: ej.datavisualization.Chart.Alignment | string
	}

	declare export interface Title {
		background?: string,
		border?: TitleBorder,
		font?: TitleFont,
		subTitle?: TitleSubTitle,
		text?: string,
		textAlignment?: ej.datavisualization.Chart.Alignment | string
	}

	declare export interface Zooming {
		enable?: boolean,
		enablePinching?: boolean,
		enableDeferredZoom?: boolean,
		enableMouseWheel?: boolean,
		type?: string,
		toolbarItems?: Array<any>
	}

			
}

declare module 'RangeNavigator' {
		declare export interface Model {
		allowSnapping?: boolean,
		border?: Border,
		dataSource?: any,
		series?: Array<Series>,
		enableDeferredUpdate?: boolean,
		enableScrollbar?: boolean,
		enableRTL?: boolean,
		isResponsive?: boolean,
		labelSettings?: LabelSettings,
		locale?: string,
		navigatorStyleSettings?: NavigatorStyleSettings,
		padding?: string,
		rangePadding?: ej.datavisualization.RangeNavigator.RangePadding | string,
		rangeSettings?: RangeSettings,
		selectedData?: any,
		selectedRangeSettings?: SelectedRangeSettings,
		scrollRangeSettings?: ScrollRangeSettings,
		sizeSettings?: SizeSettings,
		theme?: string,
		tooltipSettings?: TooltipSettings,
		valueAxisSettings?: ValueAxisSettings,
		valueType?: ej.datavisualization.RangeNavigator.ValueType | string,
		xName?: any,
		yName?: any,
		load(e: LoadEventArgs): void,
		loaded(e: LoadedEventArgs): void,
		rangeChanged(e: RangeChangedEventArgs): void,
		scrollChanged(e: ScrollChangedEventArgs): void,
		scrollStart(e: ScrollStartEventArgs): void,
		scrollEnd(e: ScrollEndEventArgs): void
	}

	declare export interface LoadEventArgs {
		Data?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface LoadedEventArgs {
		Data?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface RangeChangedEventArgs {
		Data?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ScrollChangedEventArgs {
		data?: any,
		dataoldRange?: any,
		datanewRange?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ScrollStartEventArgs {
		data?: any,
		datastartRange?: string,
		dataendRange?: string,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface ScrollEndEventArgs {
		data?: any,
		dataoldRange?: any,
		datanewRange?: any,
		cancel?: boolean,
		model?: any,
		type?: string
	}

	declare export interface Border {
		color?: string,
		opacity?: number,
		width?: number
	}

	declare export interface Series {
		xName?: string,
		yName?: string,
		dataSource?: any,
		type?: ej.datavisualization.RangeNavigator.Type | string,
		enableAnimation?: boolean,
		fill?: string
	}

	declare export interface LabelSettingsHigherLevelBorder {
		color?: string,
		width?: string
	}

	declare export interface LabelSettingsHigherLevelGridLineStyle {
		color?: string,
		dashArray?: string,
		width?: string
	}

	declare export interface LabelSettingsHigherLevelStyleFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: string,
		fontWeight?: string,
		opacity?: number,
		size?: string
	}

	declare export interface LabelSettingsHigherLevelStyle {
		font?: LabelSettingsHigherLevelStyleFont,
		horizontalAlignment?: string
	}

	declare export interface LabelSettingsHigherLevel {
		border?: LabelSettingsHigherLevelBorder,
		fill?: string,
		gridLineStyle?: LabelSettingsHigherLevelGridLineStyle,
		intervalType?: ej.datavisualization.RangeNavigator.IntervalType | string,
		labelPlacement?: ej.datavisualization.RangeNavigator.LabelPlacement | string,
		position?: ej.datavisualization.RangeNavigator.Position | string,
		style?: LabelSettingsHigherLevelStyle,
		visible?: boolean
	}

	declare export interface LabelSettingsLowerLevelBorder {
		color?: string,
		width?: string
	}

	declare export interface LabelSettingsLowerLevelGridLineStyle {
		color?: string,
		dashArray?: string,
		width?: string
	}

	declare export interface LabelSettingsLowerLevelStyleFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: string,
		fontWeight?: string,
		opacity?: string,
		size?: string
	}

	declare export interface LabelSettingsLowerLevelStyle {
		font?: LabelSettingsLowerLevelStyleFont,
		horizontalAlignment?: string
	}

	declare export interface LabelSettingsLowerLevel {
		border?: LabelSettingsLowerLevelBorder,
		fill?: string,
		gridLineStyle?: LabelSettingsLowerLevelGridLineStyle,
		intervalType?: ej.datavisualization.RangeNavigator.IntervalType | string,
		labelPlacement?: ej.datavisualization.RangeNavigator.LabelPlacement | string,
		position?: ej.datavisualization.RangeNavigator.Position | string,
		style?: LabelSettingsLowerLevelStyle,
		visible?: boolean
	}

	declare export interface LabelSettingsStyleFont {
		color?: string,
		family?: string,
		opacity?: number,
		size?: string,
		style?: ej.datavisualization.RangeNavigator.FontStyle | string,
		weight?: ej.datavisualization.RangeNavigator.FontWeight | string
	}

	declare export interface LabelSettingsStyle {
		font?: LabelSettingsStyleFont,
		horizontalAlignment?: ej.datavisualization.RangeNavigator.HorizontalAlignment | string
	}

	declare export interface LabelSettings {
		higherLevel?: LabelSettingsHigherLevel,
		lowerLevel?: LabelSettingsLowerLevel,
		style?: LabelSettingsStyle
	}

	declare export interface NavigatorStyleSettingsBorder {
		color?: string,
		dashArray?: string,
		width?: number
	}

	declare export interface NavigatorStyleSettingsMajorGridLineStyle {
		color?: string,
		visible?: boolean
	}

	declare export interface NavigatorStyleSettingsMinorGridLineStyle {
		color?: string,
		visible?: boolean
	}

	declare export interface NavigatorStyleSettingsHighlightSettingsBorder {
		color?: string,
		width?: number
	}

	declare export interface NavigatorStyleSettingsHighlightSettings {
		enable?: boolean,
		color?: string,
		opacity?: number,
		border?: NavigatorStyleSettingsHighlightSettingsBorder
	}

	declare export interface NavigatorStyleSettingsSelectionSettingsBorder {
		color?: string,
		width?: number
	}

	declare export interface NavigatorStyleSettingsSelectionSettings {
		enable?: boolean,
		color?: string,
		opacity?: number,
		border?: NavigatorStyleSettingsSelectionSettingsBorder
	}

	declare export interface NavigatorStyleSettings {
		background?: string,
		border?: NavigatorStyleSettingsBorder,
		leftThumbTemplate?: string,
		majorGridLineStyle?: NavigatorStyleSettingsMajorGridLineStyle,
		minorGridLineStyle?: NavigatorStyleSettingsMinorGridLineStyle,
		opacity?: number,
		rightThumbTemplate?: string,
		selectedRegionColor?: string,
		selectedRegionOpacity?: number,
		thumbColor?: string,
		thumbRadius?: number,
		thumbStroke?: string,
		unselectedRegionColor?: string,
		unselectedRegionOpacity?: number,
		highlightSettings?: NavigatorStyleSettingsHighlightSettings,
		selectionSettings?: NavigatorStyleSettingsSelectionSettings
	}

	declare export interface RangeSettings {
		end?: string,
		start?: string
	}

	declare export interface SelectedRangeSettings {
		end?: string,
		start?: string
	}

	declare export interface ScrollRangeSettings {
		end?: string,
		start?: string
	}

	declare export interface SizeSettings {
		height?: string,
		width?: string
	}

	declare export interface TooltipSettingsFont {
		color?: string,
		family?: string,
		fontStyle?: string,
		opacity?: number,
		size?: string,
		weight?: string
	}

	declare export interface TooltipSettings {
		backgroundColor?: string,
		font?: TooltipSettingsFont,
		labelFormat?: string,
		tooltipDisplayMode?: string,
		visible?: boolean
	}

	declare export interface ValueAxisSettingsAxisLine {
		visible?: string
	}

	declare export interface ValueAxisSettingsFont {
		size?: string
	}

	declare export interface ValueAxisSettingsMajorGridLines {
		visible?: boolean
	}

	declare export interface ValueAxisSettingsMajorTickLines {
		size?: number,
		visible?: boolean,
		width?: number
	}

	declare export interface ValueAxisSettings {
		axisLine?: ValueAxisSettingsAxisLine,
		font?: ValueAxisSettingsFont,
		majorGridLines?: ValueAxisSettingsMajorGridLines,
		majorTickLines?: ValueAxisSettingsMajorTickLines,
		rangePadding?: string,
		visible?: boolean
	}

			
}

declare module 'BulletGraph' {
		declare export interface Model {
		applyRangeStrokeToLabels?: boolean,
		applyRangeStrokeToTicks?: boolean,
		captionSettings?: CaptionSettings,
		comparativeMeasureValue?: number,
		enableAnimation?: boolean,
		flowDirection?: ej.datavisualization.BulletGraph.FlowDirection | string,
		height?: number,
		isResponsive?: boolean,
		orientation?: ej.datavisualization.BulletGraph.Orientation | string,
		qualitativeRanges?: Array<QualitativeRange>,
		qualitativeRangeSize?: number,
		quantitativeScaleLength?: number,
		quantitativeScaleSettings?: QuantitativeScaleSettings,
		theme?: string,
		tooltipSettings?: TooltipSettings,
		value?: number,
		width?: number,
		drawCaption(e: DrawCaptionEventArgs): void,
		drawCategory(e: DrawCategoryEventArgs): void,
		drawComparativeMeasureSymbol(e: DrawComparativeMeasureSymbolEventArgs): void,
		drawFeatureMeasureBar(e: DrawFeatureMeasureBarEventArgs): void,
		drawIndicator(e: DrawIndicatorEventArgs): void,
		drawLabels(e: DrawLabelsEventArgs): void,
		drawQualitativeRanges(e: DrawQualitativeRangesEventArgs): void,
		load(e: LoadEventArgs): void
	}

	declare export interface DrawCaptionEventArgs {
		Object?: any,
		scaleElement?: HTMLElement,
		captionElement?: HTMLElement,
		captionType?: string
	}

	declare export interface DrawCategoryEventArgs {
		Object?: any,
		scaleElement?: HTMLElement,
		categoryElement?: HTMLElement,
		Value?: string
	}

	declare export interface DrawComparativeMeasureSymbolEventArgs {
		Object?: any,
		scaleElement?: HTMLElement,
		targetElement?: HTMLElement,
		Value?: number
	}

	declare export interface DrawFeatureMeasureBarEventArgs {
		Object?: any,
		scaleElement?: HTMLElement,
		currentElement?: HTMLElement,
		Value?: number
	}

	declare export interface DrawIndicatorEventArgs {
		indicatorSettings?: any,
		model?: any,
		type?: string,
		cancel?: boolean
	}

	declare export interface DrawLabelsEventArgs {
		Object?: any,
		scaleElement?: HTMLElement,
		tickElement?: HTMLElement,
		labelType?: string
	}

	declare export interface DrawQualitativeRangesEventArgs {
		Object?: any,
		rangeIndex?: number,
		rangeOptions?: any,
		rangeEndValue?: number
	}

	declare export interface LoadEventArgs {
		
	}

	declare export interface CaptionSettingsFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: ej.datavisualization.BulletGraph.FontStyle | string,
		fontWeight?: ej.datavisualization.BulletGraph.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface CaptionSettingsIndicatorFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: ej.datavisualization.BulletGraph.FontStyle | string,
		fontWeight?: ej.datavisualization.BulletGraph.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface CaptionSettingsIndicatorLocation {
		x?: number,
		y?: number
	}

	declare export interface CaptionSettingsIndicatorSymbolBorder {
		color?: string,
		width?: number
	}

	declare export interface CaptionSettingsIndicatorSymbolSize {
		height?: number,
		width?: number
	}

	declare export interface CaptionSettingsIndicatorSymbol {
		border?: CaptionSettingsIndicatorSymbolBorder,
		color?: string,
		imageURL?: string,
		opacity?: number,
		shape?: string,
		size?: CaptionSettingsIndicatorSymbolSize
	}

	declare export interface CaptionSettingsIndicator {
		font?: CaptionSettingsIndicatorFont,
		location?: CaptionSettingsIndicatorLocation,
		padding?: number,
		symbol?: CaptionSettingsIndicatorSymbol,
		text?: string,
		textAlignment?: ej.datavisualization.BulletGraph.TextAlignment | string,
		textAnchor?: ej.datavisualization.BulletGraph.TextAnchor | string,
		textAngle?: number,
		textPosition?: ej.datavisualization.BulletGraph.TextPosition | string,
		textSpacing?: number,
		visible?: boolean
	}

	declare export interface CaptionSettingsLocation {
		x?: number,
		y?: number
	}

	declare export interface CaptionSettingsSubTitleFont {
		color?: string,
		fontFamily?: string,
		fontStyle?: ej.datavisualization.BulletGraph.FontStyle | string,
		fontWeight?: ej.datavisualization.BulletGraph.FontWeight | string,
		opacity?: number,
		size?: string
	}

	declare export interface CaptionSettingsSubTitleLocation {
		x?: number,
		y?: number
	}

	declare export interface CaptionSettingsSubTitle {
		font?: CaptionSettingsSubTitleFont,
		location?: CaptionSettingsSubTitleLocation,
		padding?: number,
		text?: string,
		textAlignment?: ej.datavisualization.BulletGraph.TextAlignment | string,
		textAnchor?: ej.datavisualization.BulletGraph.TextAnchor | string,
		textAngle?: number,
		textPosition?: ej.datavisualization.BulletGraph.TextPosition | string
	}

	declare export interface CaptionSettings {
		enableTrim?: boolean,
		font?: CaptionSettingsFont,
		indicator?: CaptionSettingsIndicator,
		location?: CaptionSettingsLocation,
		padding?: number,
		subTitle?: CaptionSettingsSubTitle,
		text?: string,
		textAlignment?: ej.datavisualization.BulletGraph.TextAlignment | string,
		textAnchor?: ej.datavisualization.BulletGraph.TextAnchor | string,
		textAngle?: number,
		textPosition?: ej.datavisualization.BulletGraph.TextPosition | string
	}

	declare export interface QualitativeRange {
		rangeEnd?: number,
		rangeOpacity?: number,
		rangeStroke?: string
	}

	declare export interface QuantitativeScaleSettingsComparativeMeasureSettings {
		stroke?: number,
		width?: number
	}

	declare export interface QuantitativeScaleSettingsFeaturedMeasureSettings {
		stroke?: number,
		width?: number
	}

	declare export interface QuantitativeScaleSettingsFeatureMeasure {
		category?: string,
		comparativeMeasureValue?: number,
		value?: number
	}

	declare export interface QuantitativeScaleSettingsFields {
		category?: string,
		comparativeMeasure?: string,
		dataSource?: any,
		featureMeasures?: string,
		query?: string,
		tableName?: string
	}

	declare export interface QuantitativeScaleSettingsLabelSettingsFont {
		fontFamily?: string,
		fontStyle?: ej.datavisualization.BulletGraph.FontStyle | string,
		fontWeight?: ej.datavisualization.BulletGraph.FontWeight | string,
		opacity?: number
	}

	declare export interface QuantitativeScaleSettingsLabelSettings {
		font?: QuantitativeScaleSettingsLabelSettingsFont,
		labelPlacement?: ej.datavisualization.BulletGraph.LabelPlacement | string,
		labelPrefix?: string,
		labelSuffix?: string,
		offset?: number,
		position?: ej.datavisualization.BulletGraph.LabelPosition | string,
		size?: number,
		stroke?: string
	}

	declare export interface QuantitativeScaleSettingsLocation {
		x?: number,
		y?: number
	}

	declare export interface QuantitativeScaleSettingsMajorTickSettings {
		size?: number,
		stroke?: string,
		width?: number
	}

	declare export interface QuantitativeScaleSettingsMinorTickSettings {
		size?: number,
		stroke?: string,
		width?: number
	}

	declare export interface QuantitativeScaleSettings {
		comparativeMeasureSettings?: QuantitativeScaleSettingsComparativeMeasureSettings,
		featuredMeasureSettings?: QuantitativeScaleSettingsFeaturedMeasureSettings,
		featureMeasures?: Array<QuantitativeScaleSettingsFeatureMeasure>,
		fields?: QuantitativeScaleSettingsFields,
		interval?: number,
		labelSettings?: QuantitativeScaleSettingsLabelSettings,
		location?: QuantitativeScaleSettingsLocation,
		majorTickSettings?: QuantitativeScaleSettingsMajorTickSettings,
		maximum?: number,
		minimum?: number,
		minorTickSettings?: QuantitativeScaleSettingsMinorTickSettings,
		minorTicksPerInterval?: number,
		tickPlacement?: ej.datavisualization.BulletGraph.TickPlacement | string,
		tickPosition?: ej.datavisualization.BulletGraph.TickPosition | string
	}

	declare export interface TooltipSettings {
		captionTemplate?: string,
		enableCaptionTooltip?: boolean,
		template?: string,
		visible?: boolean
	}

			
}

declare module 'Barcode' {
		declare export interface Model {
		barcodeToTextGapHeight?: number,
		barHeight?: number,
		darkBarColor?: any,
		displayText?: boolean,
		enabled?: boolean,
		encodeStartStopSymbol?: number,
		lightBarColor?: any,
		narrowBarWidth?: number,
		quietZone?: QuietZone,
		symbologyType?: ej.datavisualization.Barcode.SymbologyType | string,
		text?: string,
		textColor?: any,
		wideBarWidth?: number,
		xDimension?: number,
		load(e: LoadEventArgs): void
	}

	declare export interface LoadEventArgs {
		cancel?: boolean,
		model?: any,
		type?: string,
		status?: boolean
	}

	declare export interface QuietZone {
		all?: number,
		bottom?: number,
		left?: number,
		right?: number,
		top?: number
	}

			
}

declare module 'Map' {
		declare export interface Model {
		background?: string,
		baseMapIndex?: number,
		centerPosition?: any,
		enableAnimation?: boolean,
		enableLayerChangeAnimation?: boolean,
		enablePan?: boolean,
		enableResize?: boolean,
		zoomSettings?: ZoomSettings,
		navigationControl?: NavigationControl,
		layers?: Array<Layer>,
		markerSelected(e: MarkerSelectedEventArgs): void,
		mouseleave(e: MouseleaveEventArgs): void,
		mouseover(e: MouseoverEventArgs): void,
		onRenderComplete(e: OnRenderCompleteEventArgs): void,
		panned(e: PannedEventArgs): void,
		shapeSelected(e: ShapeSelectedEventArgs): void,
		zoomedIn(e: ZoomedInEventArgs): void,
		zoomedOut(e: ZoomedOutEventArgs): void
	}

	declare export interface MarkerSelectedEventArgs {
		originalEvent?: any
	}

	declare export interface MouseleaveEventArgs {
		originalEvent?: any
	}

	declare export interface MouseoverEventArgs {
		originalEvent?: any
	}

	declare export interface OnRenderCompleteEventArgs {
		originalEvent?: any
	}

	declare export interface PannedEventArgs {
		originalEvent?: any
	}

	declare export interface ShapeSelectedEventArgs {
		originalEvent?: any
	}

	declare export interface ZoomedInEventArgs {
		originalEvent?: any,
		zoomLevel?: any
	}

	declare export interface ZoomedOutEventArgs {
		originalEvent?: any,
		zoomLevel?: any
	}

	declare export interface ZoomSettings {
		enableZoom?: boolean,
		enableZoomOnSelection?: boolean,
		factor?: number,
		level?: number,
		minValue?: number,
		maxValue?: number
	}

	declare export interface NavigationControl {
		absolutePosition?: any,
		content?: string,
		dockPosition?: ej.datavisualization.Map.Position | string,
		enableNavigation?: boolean,
		orientation?: ej.datavisualization.Map.LabelOrientation | string
	}

	declare export interface LayersBubbleSettings {
		bubbleOpacity?: number,
		color?: string,
		colorMappings?: any,
		colorValuePath?: string,
		maxValue?: number,
		minValue?: number,
		showBubble?: boolean,
		showTooltip?: boolean,
		tooltipTemplate?: string,
		valuePath?: string
	}

	declare export interface LayersLabelSettings {
		enableSmartLabel?: boolean,
		labelLength?: number,
		labelPath?: string,
		showLabels?: boolean,
		smartLabelSize?: ej.datavisualization.Map.LabelSize | string
	}

	declare export interface LayersLegendSettings {
		dockOnMap?: boolean,
		dockPosition?: ej.datavisualization.Map.DockPosition | string,
		height?: number,
		icon?: ej.datavisualization.Map.LegendIcons | string,
		iconHeight?: number,
		iconWidth?: number,
		labelOrientation?: ej.datavisualization.Map.LabelOrientation | string,
		leftLabel?: string,
		mode?: ej.datavisualization.Map.Mode | string,
		position?: ej.datavisualization.Map.Position | string,
		positionX?: number,
		positionY?: number,
		rightLabel?: string,
		showLabels?: boolean,
		showLegend?: boolean,
		title?: string,
		type?: ej.datavisualization.Map.LegendType | string,
		width?: number
	}

	declare export interface LayersShapeSettingsColorMappingsRangeColorMapping {
		from?: number,
		to?: number,
		gradientColors?: Array<any>
	}

	declare export interface LayersShapeSettingsColorMappingsEqualColorMapping {
		value?: string,
		color?: string
	}

	declare export interface LayersShapeSettingsColorMappings {
		rangeColorMapping?: Array<LayersShapeSettingsColorMappingsRangeColorMapping>,
		equalColorMapping?: Array<LayersShapeSettingsColorMappingsEqualColorMapping>
	}

	declare export interface LayersShapeSettings {
		autoFill?: boolean,
		colorMappings?: LayersShapeSettingsColorMappings,
		colorPalette?: ej.datavisualization.Map.ColorPalette | string,
		colorValuePath?: string,
		enableGradient?: boolean,
		fill?: string,
		highlightBorderWidth?: number,
		highlightColor?: string,
		highlightStroke?: string,
		selectionColor?: string,
		selectionStroke?: string,
		selectionStrokeWidth?: number,
		stroke?: string,
		strokeThickness?: number,
		valuePath?: string
	}

	declare export interface Layer {
		bingMapType?: ej.datavisualization.Map.BingMapType | string,
		bubbleSettings?: LayersBubbleSettings,
		dataSource?: any,
		shapeDataPath?: string,
		shapePropertyPath?: string,
		enableMouseHover?: boolean,
		enableSelection?: boolean,
		key?: string,
		labelSettings?: LayersLabelSettings,
		layerType?: ej.datavisualization.Map.LayerType | string,
		legendSettings?: LayersLegendSettings,
		mapItemsTemplate?: string,
		markers?: Array<any>,
		markerTemplate?: string,
		selectedMapShapes?: Array<any>,
		selectionMode?: ej.datavisualization.Map.SelectionMode | string,
		shapeData?: any,
		shapeSettings?: LayersShapeSettings,
		showMapItems?: boolean,
		showTooltip?: boolean,
		tooltipTemplate?: string,
		urlTemplate?: string
	}

			
}

declare module 'TreeMap' {
		declare export interface Model {
		borderBrush?: string,
		borderThickness?: number,
		uniColorMapping?: UniColorMapping,
		desaturationColorMapping?: DesaturationColorMapping,
		paletteColorMapping?: PaletteColorMapping,
		colorValuePath?: string,
		dataSource?: any,
		dockPosition?: ej.datavisualization.TreeMap.DockPosition | string,
		drillDownHeaderColor?: string,
		drillDownSelectionColor?: string,
		enableDrillDown?: boolean,
		isResponsive?: boolean,
		enableResize?: boolean,
		draggingOnSelection?: boolean,
		draggingGroupOnSelection?: boolean,
		groupColorMapping?: Array<GroupColorMapping>,
		legendSettings?: LegendSettings,
		highlightBorderBrush?: string,
		highlightBorderThickness?: number,
		highlightGroupBorderBrush?: string,
		highlightGroupBorderThickness?: number,
		highlightGroupOnSelection?: boolean,
		highlightOnSelection?: boolean,
		itemsLayoutMode?: ej.datavisualization.TreeMap.ItemsLayoutMode | string,
		leafItemSettings?: LeafItemSettings,
		rangeColorMapping?: Array<RangeColorMapping>,
		selectionMode?: ej.datavisualization.TreeMap.selectionMode | string,
		groupSelectionMode?: ej.datavisualization.TreeMap.groupSelectionMode | string,
		showLegend?: boolean,
		enableGradient?: boolean,
		showTooltip?: boolean,
		tooltipTemplate?: string,
		treeMapItems?: Array<any>,
		levels?: Array<Level>,
		weightValuePath?: string,
		treeMapItemSelected(e: TreeMapItemSelectedEventArgs): void
	}

	declare export interface TreeMapItemSelectedEventArgs {
		originalEvent?: any
	}

	declare export interface UniColorMapping {
		color?: string
	}

	declare export interface DesaturationColorMapping {
		to?: number,
		color?: string,
		from?: number,
		rangeMaximum?: number,
		rangeMinimum?: number
	}

	declare export interface PaletteColorMapping {
		colors?: Array<any>
	}

	declare export interface GroupColorMapping {
		groupID?: string
	}

	declare export interface LegendSettings {
		height?: number,
		width?: number,
		iconHeight?: number,
		iconWidth?: number,
		template?: string,
		mode?: string,
		title?: string,
		leftLabel?: string,
		rightLabel?: string,
		dockPosition?: string,
		alignment?: string,
		columnCount?: number
	}

	declare export interface LeafItemSettings {
		borderBrush?: string,
		borderThickness?: number,
		itemTemplate?: string,
		labelPath?: string,
		labelPosition?: ej.datavisualization.TreeMap.Position | string,
		labelVisibilityMode?: ej.datavisualization.TreeMap.VisibilityMode | string,
		showLabels?: boolean
	}

	declare export interface RangeColorMapping {
		color?: string,
		gradientColors?: Array<any>,
		from?: number,
		legendLabel?: string,
		to?: number
	}

	declare export interface Level {
		groupBackground?: string,
		groupBorderColor?: string,
		groupBorderThickness?: number,
		groupGap?: number,
		groupPadding?: number,
		groupPath?: string,
		headerHeight?: number,
		headerTemplate?: string,
		headerVisibilityMode?: ej.datavisualization.TreeMap.VisibilityMode | string,
		labelPosition?: ej.datavisualization.TreeMap.Position | string,
		labelTemplate?: string,
		labelVisibilityMode?: ej.datavisualization.TreeMap.VisibilityMode | string,
		showHeader?: boolean,
		showLabels?: boolean
	}

			
}

declare module 'Diagram' {
		declare export interface Options {
		fileName?: string,
		format?: string,
		mode?: string,
		region?: string,
		bounds?: any,
		margin?: any
	}

	declare export interface Model {
		backgroundColor?: string,
		backgroundImage?: string,
		bridgeDirection?: ej.datavisualization.Diagram.BridgeDirection | string,
		commandManager?: CommandManager,
		connectors?: Array<Connector>,
		connectorTemplate?: any,
		constraints?: ej.datavisualization.Diagram.DiagramConstraints | string,
		contextMenu?: ContextMenu,
		dataSourceSettings?: DataSourceSettings,
		defaultSettings?: DefaultSettings,
		drawType?: any,
		enableAutoScroll?: boolean,
		enableContextMenu?: boolean,
		height?: string,
		historyManager?: HistoryManager,
		layout?: Layout,
		locale?: string,
		nodes?: Array<Node>,
		nodeTemplate?: any,
		pageSettings?: PageSettings,
		scrollSettings?: ScrollSettings,
		selectedItems?: SelectedItems,
		showTooltip?: boolean,
		snapSettings?: SnapSettings,
		tool?: ej.datavisualization.Diagram.Tool | string,
		tooltip?: Tooltip,
		width?: string,
		zoomFactor?: number,
		autoScrollChange(e: AutoScrollChangeEventArgs): void,
		click(e: ClickEventArgs): void,
		connectionChange(e: ConnectionChangeEventArgs): void,
		connectorCollectionChange(e: ConnectorCollectionChangeEventArgs): void,
		connectorSourceChange(e: ConnectorSourceChangeEventArgs): void,
		connectorTargetChange(e: ConnectorTargetChangeEventArgs): void,
		contextMenuBeforeOpen(e: ContextMenuBeforeOpenEventArgs): void,
		contextMenuClick(e: ContextMenuClickEventArgs): void,
		doubleClick(e: DoubleClickEventArgs): void,
		drag(e: DragEventArgs): void,
		dragEnter(e: DragEnterEventArgs): void,
		dragLeave(e: DragLeaveEventArgs): void,
		dragOver(e: DragOverEventArgs): void,
		drop(e: DropEventArgs): void,
		groupChange(e: GroupChangeEventArgs): void,
		historyChange(e: HistoryChangeEventArgs): void,
		itemClick(e: ItemClickEventArgs): void,
		mouseEnter(e: MouseEnterEventArgs): void,
		mouseLeave(e: MouseLeaveEventArgs): void,
		mouseOver(e: MouseOverEventArgs): void,
		nodeCollectionChange(e: NodeCollectionChangeEventArgs): void,
		propertyChange(e: PropertyChangeEventArgs): void,
		rotationChange(e: RotationChangeEventArgs): void,
		scrollChange(e: ScrollChangeEventArgs): void,
		segmentChange(e: SegmentChangeEventArgs): void,
		selectionChange(e: SelectionChangeEventArgs): void,
		sizeChange(e: SizeChangeEventArgs): void,
		textChange(e: TextChangeEventArgs): void,
		create(e: CreateEventArgs): void
	}

	declare export interface AutoScrollChangeEventArgs {
		delay?: string
	}

	declare export interface ClickEventArgs {
		element?: any,
		actualObject?: number,
		offsetX?: number,
		offsetY?: number,
		count?: number,
		event?: any
	}

	declare export interface ConnectionChangeEventArgs {
		element?: any,
		connection?: string,
		port?: any,
		cancel?: boolean
	}

	declare export interface ConnectorCollectionChangeEventArgs {
		changeType?: string,
		element?: any,
		cancel?: boolean
	}

	declare export interface ConnectorSourceChangeEventArgs {
		element?: any,
		node?: any,
		point?: any,
		port?: any,
		dragState?: string,
		cancel?: boolean
	}

	declare export interface ConnectorTargetChangeEventArgs {
		element?: any,
		node?: any,
		point?: any,
		port?: any,
		dragState?: string,
		cancel?: boolean
	}

	declare export interface ContextMenuBeforeOpenEventArgs {
		diagram?: any,
		contextmenu?: any,
		target?: any
	}

	declare export interface ContextMenuClickEventArgs {
		id?: string,
		text?: string,
		parentId?: string,
		parentText?: string,
		target?: any,
		canExecute?: boolean
	}

	declare export interface DoubleClickEventArgs {
		actualObject?: any,
		element?: any
	}

	declare export interface DragEventArgs {
		element?: any,
		oldValue?: any,
		newValue?: any,
		dragState?: string,
		cancel?: boolean
	}

	declare export interface DragEnterEventArgs {
		element?: any,
		cancel?: boolean
	}

	declare export interface DragLeaveEventArgs {
		element?: any
	}

	declare export interface DragOverEventArgs {
		element?: any,
		allowDrop?: boolean,
		target?: any,
		oldValue?: any,
		newValue?: any,
		cancel?: boolean
	}

	declare export interface DropEventArgs {
		element?: any,
		cancel?: boolean,
		source?: any,
		target?: any,
		sourceType?: string
	}

	declare export interface GroupChangeEventArgs {
		element?: any,
		oldParent?: any,
		newParent?: any,
		cause?: string
	}

	declare export interface HistoryChangeEventArgs {
		changes?: Array<any>,
		Source?: Array<any>
	}

	declare export interface ItemClickEventArgs {
		actualObject?: any,
		selectedObject?: any,
		cancel?: boolean,
		event?: any
	}

	declare export interface MouseEnterEventArgs {
		element?: any,
		source?: any,
		target?: any
	}

	declare export interface MouseLeaveEventArgs {
		element?: any,
		source?: any,
		target?: any
	}

	declare export interface MouseOverEventArgs {
		element?: any,
		source?: any,
		target?: any
	}

	declare export interface NodeCollectionChangeEventArgs {
		changeType?: string,
		element?: any,
		cancel?: boolean
	}

	declare export interface PropertyChangeEventArgs {
		element?: any,
		cause?: string,
		newValue?: any,
		oldValue?: any,
		propertyName?: string
	}

	declare export interface RotationChangeEventArgs {
		element?: any,
		oldValue?: any,
		newValue?: any,
		cancel?: boolean
	}

	declare export interface ScrollChangeEventArgs {
		newValues?: any,
		oldValues?: any
	}

	declare export interface SegmentChangeEventArgs {
		element?: any,
		dragState?: string,
		point?: any,
		cancel?: boolean
	}

	declare export interface SelectionChangeEventArgs {
		changeType?: string,
		element?: any,
		oldItems?: Array<any>,
		newItems?: Array<any>,
		selectedItems?: Array<any>,
		cancel?: boolean
	}

	declare export interface SizeChangeEventArgs {
		element?: any,
		cancel?: boolean,
		newValue?: any,
		oldValue?: any,
		resizeState?: string,
		offset?: any
	}

	declare export interface TextChangeEventArgs {
		element?: any,
		value?: string,
		keyCode?: string
	}

	declare export interface CreateEventArgs {
		model?: any,
		type?: string
	}

	declare export interface BackgroundImage {
		alignment?: ej.datavisualization.Diagram.ImageAlignment | string,
		scale?: ej.datavisualization.Diagram.ScaleConstraints | string,
		source?: string
	}

	declare export interface CommandManagerCommandsGesture {
		key?: ej.datavisualization.Diagram.Keys | string,
		keyModifiers?: ej.datavisualization.Diagram.KeyModifiers | string
	}

	declare export interface CommandManagerCommands {
		canExecute?: Function,
		execute?: Function,
		gesture?: CommandManagerCommandsGesture,
		parameter?: any
	}

	declare export interface CommandManager {
		commands?: CommandManagerCommands
	}

	declare export interface ConnectorsLabelsMargin {
		right?: number,
		left?: number,
		top?: number,
		bottom?: number
	}

	declare export interface ConnectorsLabel {
		alignment?: ej.datavisualization.Diagram.Alignment | string,
		bold?: boolean,
		borderColor?: string,
		borderWidth?: number,
		boundaryConstraints?: boolean,
		fillColor?: string,
		fontColor?: string,
		fontFamily?: string,
		fontSize?: number,
		horizontalAlignment?: ej.datavisualization.Diagram.HorizontalAlignment | string,
		italic?: boolean,
		mode?: ej.datavisualization.Diagram.LabelEditMode | string,
		name?: string,
		offset?: any,
		margin?: ConnectorsLabelsMargin,
		opacity?: number,
		readOnly?: boolean,
		relativeMode?: ej.datavisualization.Diagram.LabelRelativeMode | string,
		rotateAngle?: number,
		segmentOffset?: string,
		text?: string,
		textAlign?: ej.datavisualization.Diagram.TextAlign | string,
		textDecoration?: ej.datavisualization.Diagram.TextDecorations | string,
		verticalAlignment?: ej.datavisualization.Diagram.VerticalAlignment | string,
		visible?: boolean,
		width?: number,
		wrapping?: ej.datavisualization.Diagram.TextWrapping | string
	}

	declare export interface ConnectorsSegment {
		direction?: string,
		length?: number,
		point?: ej.datavisualization.Diagram.ConnectorsSourcePoint | string,
		point1?: ej.datavisualization.Diagram.ConnectorsSourcePoint | string,
		point2?: ej.datavisualization.Diagram.ConnectorsSourcePoint | string,
		type?: ej.datavisualization.Diagram.Segments | string,
		vector1?: any,
		vector2?: any
	}

	declare export interface ConnectorsShape {
		type?: ej.datavisualization.Diagram.ConnectorShapes | string,
		flow?: ej.datavisualization.Diagram.BPMNFlows | string,
		association?: ej.datavisualization.Diagram.AssociationFlows | string,
		message?: ej.datavisualization.Diagram.BPMNMessageFlows | string,
		sequence?: ej.datavisualization.Diagram.BPMNSequenceFlows | string,
		relationship?: string,
		multiplicity?: string
	}

	declare export interface ConnectorsSourceDecorator {
		borderColor?: string,
		borderWidth?: number,
		fillColor?: string,
		height?: number,
		pathData?: string,
		shape?: ej.datavisualization.Diagram.DecoratorShapes | string,
		width?: number
	}

	declare export interface ConnectorsSourcePoint {
		x?: number,
		y?: number
	}

	declare export interface ConnectorsTargetDecorator {
		borderColor?: string,
		fillColor?: string,
		height?: number,
		pathData?: string,
		shape?: ej.datavisualization.Diagram.DecoratorShapes | string,
		width?: number
	}

	declare export interface Connector {
		addInfo?: any,
		bridgeSpace?: number,
		constraints?: ej.datavisualization.Diagram.ConnectorConstraints | string,
		cornerRadius?: number,
		cssClass?: string,
		horizontalAlign?: ej.datavisualization.Diagram.HorizontalAlignment | string,
		labels?: Array<ConnectorsLabel>,
		lineColor?: string,
		lineDashArray?: string,
		lineHitPadding?: number,
		lineWidth?: number,
		marginBottom?: number,
		marginLeft?: number,
		marginRight?: number,
		marginTop?: number,
		name?: string,
		opacity?: number,
		paletteItem?: any,
		parent?: string,
		segments?: Array<ConnectorsSegment>,
		shape?: ConnectorsShape,
		sourceDecorator?: ConnectorsSourceDecorator,
		sourceNode?: string,
		sourcePadding?: number,
		sourcePoint?: ConnectorsSourcePoint,
		sourcePort?: string,
		targetDecorator?: ConnectorsTargetDecorator,
		targetNode?: string,
		targetPadding?: number,
		targetPoint?: ej.datavisualization.Diagram.ConnectorsSourcePoint | string,
		targetPort?: string,
		tooltip?: any,
		verticalAlign?: ej.datavisualization.Diagram.VerticalAlignment | string,
		visible?: boolean,
		zOrder?: number
	}

	declare export interface ContextMenu {
		items?: Array<any>,
		showCustomMenuItemsOnly?: boolean
	}

	declare export interface DataSourceSettings {
		dataSource?: any,
		id?: string,
		parent?: string,
		query?: string,
		root?: string,
		tableName?: string
	}

	declare export interface DefaultSettings {
		connector?: any,
		group?: any,
		node?: any
	}

	declare export interface HistoryManager {
		canPop?: Function,
		closeGroupAction?: Function,
		pop?: Function,
		push?: Function,
		redo?: Function,
		startGroupAction?: Function,
		undo?: Function
	}

	declare export interface Layout {
		bounds?: any,
		fixedNode?: string,
		getLayoutInfo?: any,
		horizontalSpacing?: number,
		margin?: any,
		horizontalAlignment?: ej.datavisualization.Diagram.HorizontalAlignment | string,
		verticalAlignment?: ej.datavisualization.Diagram.VerticalAlignment | string,
		orientation?: ej.datavisualization.Diagram.LayoutOrientations | string,
		type?: ej.datavisualization.Diagram.LayoutTypes | string,
		verticalSpacing?: number
	}

	declare export interface NodesAnnotation {
		angle?: number,
		direction?: ej.datavisualization.Diagram.BPMNAnnotationDirection | string,
		height?: number,
		length?: number,
		text?: string,
		width?: number
	}

	declare export interface NodesClassAttribute {
		name?: string,
		type?: string,
		scope?: string
	}

	declare export interface NodesClassMethod {
		scope?: string
	}

	declare export interface NodesClass {
		name?: string,
		attributes?: Array<NodesClassAttribute>,
		methods?: Array<NodesClassMethod>
	}

	declare export interface NodesContainer {
		orientation?: string,
		type?: ej.datavisualization.Diagram.ContainerType | string
	}

	declare export interface NodesData {
		type?: ej.datavisualization.Diagram.BPMNDataObjects | string,
		collection?: boolean
	}

	declare export interface NodesEnumerationMember {
		name?: string
	}

	declare export interface NodesEnumeration {
		name?: string,
		members?: Array<NodesEnumerationMember>
	}

	declare export interface NodesGradientLinearGradient {
		stops?: Array<any>,
		x1?: number,
		x2?: number,
		y1?: number,
		y2?: number
	}

	declare export interface NodesGradientRadialGradient {
		cx?: number,
		cy?: number,
		fx?: number,
		fy?: number,
		stops?: Array<any>
	}

	declare export interface NodesGradientStop {
		color?: string,
		offset?: number,
		opacity?: number
	}

	declare export interface NodesGradient {
		LinearGradient?: NodesGradientLinearGradient,
		RadialGradient?: NodesGradientRadialGradient,
		Stop?: NodesGradientStop
	}

	declare export interface NodesInterfaceAttribute {
		name?: string,
		type?: string,
		scope?: string
	}

	declare export interface NodesInterfaceMethod {
		scope?: string
	}

	declare export interface NodesInterface {
		name?: string,
		attributes?: Array<NodesInterfaceAttribute>,
		methods?: Array<NodesInterfaceMethod>
	}

	declare export interface NodesLabel {
		bold?: boolean,
		borderColor?: string,
		borderWidth?: number,
		fillColor?: string,
		fontColor?: string,
		fontFamily?: string,
		fontSize?: number,
		horizontalAlignment?: ej.datavisualization.Diagram.HorizontalAlignment | string,
		italic?: boolean,
		margin?: any,
		mode?: ej.datavisualization.Diagram.LabelEditMode | string,
		name?: string,
		offset?: any,
		opacity?: number,
		readOnly?: boolean,
		rotateAngle?: number,
		text?: string,
		textAlign?: ej.datavisualization.Diagram.TextAlign | string,
		textDecoration?: ej.datavisualization.Diagram.TextDecorations | string,
		verticalAlignment?: ej.datavisualization.Diagram.VerticalAlignment | string,
		visible?: boolean,
		width?: number,
		wrapping?: ej.datavisualization.Diagram.TextWrapping | string
	}

	declare export interface NodesLane {
		width?: number,
		height?: number,
		zorder?: number,
		addInfo?: any,
		children?: Array<any>,
		fillColor?: string,
		header?: any,
		isLane?: boolean,
		name?: string,
		orientation?: string
	}

	declare export interface NodesPaletteItem {
		enableScale?: boolean,
		height?: number,
		margin?: any,
		previewHeight?: number,
		previewWidth?: number,
		width?: number
	}

	declare export interface NodesPhase {
		label?: any,
		lineColor?: string,
		lineDashArray?: string,
		lineWidth?: number,
		name?: string,
		offset?: number,
		orientation?: string,
		type?: string
	}

	declare export interface NodesPort {
		borderColor?: string,
		borderWidth?: number,
		connectorPadding?: number,
		constraints?: ej.datavisualization.Diagram.PortConstraints | string,
		fillColor?: string,
		name?: string,
		offset?: any,
		pathData?: string,
		shape?: ej.datavisualization.Diagram.PortShapes | string,
		size?: number,
		visibility?: ej.datavisualization.Diagram.PortVisibility | string
	}

	declare export interface NodesShadow {
		angle?: number,
		distance?: number,
		opacity?: number
	}

	declare export interface NodesSubProcess {
		adhoc?: boolean,
		boundary?: ej.datavisualization.Diagram.BPMNBoundary | string,
		compensation?: boolean,
		collapsed?: boolean,
		event?: ej.datavisualization.Diagram.BPMNEvents | string,
		events?: Array<any>,
		loop?: ej.datavisualization.Diagram.BPMNLoops | string,
		trigger?: ej.datavisualization.Diagram.BPMNTriggers | string,
		type?: ej.datavisualization.Diagram.BPMNSubProcessTypes | string
	}

	declare export interface NodesTask {
		call?: boolean,
		compensation?: boolean,
		loop?: ej.datavisualization.Diagram.BPMNLoops | string,
		type?: ej.datavisualization.Diagram.BPMNTasks | string
	}

	declare export interface Node {
		activity?: ej.datavisualization.Diagram.BPMNActivity | string,
		addInfo?: any,
		annotation?: NodesAnnotation,
		borderColor?: string,
		borderDashArray?: string,
		borderWidth?: number,
		canUngroup?: boolean,
		children?: Array<any>,
		classifier?: ej.datavisualization.Diagram.ClassifierShapes | string,
		class?: NodesClass,
		connectorPadding?: number,
		constraints?: ej.datavisualization.Diagram.NodeConstraints | string,
		container?: NodesContainer,
		cornerRadius?: number,
		cssClass?: string,
		data?: NodesData,
		enumeration?: NodesEnumeration,
		event?: ej.datavisualization.Diagram.BPMNEvents | string,
		excludeFromLayout?: boolean,
		fillColor?: string,
		gateway?: ej.datavisualization.Diagram.BPMNGateways | string,
		gradient?: NodesGradient,
		group?: any,
		header?: any,
		height?: number,
		horizontalAlign?: ej.datavisualization.Diagram.HorizontalAlignment | string,
		inEdges?: Array<any>,
		interface?: NodesInterface,
		isExpanded?: boolean,
		isSwimlane?: boolean,
		labels?: Array<NodesLabel>,
		lanes?: Array<NodesLane>,
		marginBottom?: number,
		marginLeft?: number,
		marginRight?: number,
		marginTop?: number,
		maxHeight?: number,
		maxWidth?: number,
		minHeight?: number,
		minWidth?: number,
		name?: string,
		offsetX?: number,
		offsetY?: number,
		opacity?: number,
		orientation?: string,
		outEdges?: Array<any>,
		paddingBottom?: number,
		paddingLeft?: number,
		paddingRight?: number,
		paddingTop?: number,
		paletteItem?: NodesPaletteItem,
		parent?: string,
		pathData?: string,
		phases?: Array<NodesPhase>,
		phaseSize?: number,
		pivot?: any,
		points?: Array<any>,
		ports?: Array<NodesPort>,
		rotateAngle?: number,
		scale?: ej.datavisualization.Diagram.ScaleConstraints | string,
		shadow?: NodesShadow,
		shape?: ej.datavisualization.Diagram.BasicShapes | string,
		source?: string,
		subProcess?: NodesSubProcess,
		task?: NodesTask,
		templateId?: string,
		textBlock?: any,
		tooltip?: any,
		trigger?: ej.datavisualization.Diagram.BPMNTriggers | string,
		type?: ej.datavisualization.Diagram.Shapes | string,
		verticalAlign?: ej.datavisualization.Diagram.VerticalAlignment | string,
		visible?: boolean,
		width?: number,
		zOrder?: number
	}

	declare export interface PageSettings {
		autoScrollBorder?: any,
		multiplePage?: boolean,
		pageBackgroundColor?: string,
		pageBorderColor?: string,
		pageBorderWidth?: number,
		pageHeight?: number,
		pageMargin?: number,
		pageOrientation?: ej.datavisualization.Diagram.PageOrientations | string,
		pageWidth?: number,
		scrollableArea?: any,
		scrollLimit?: ej.datavisualization.Diagram.ScrollLimit | string,
		boundaryConstraints?: ej.datavisualization.Diagram.BoundaryConstraints | string,
		showPageBreak?: boolean
	}

	declare export interface ScrollSettings {
		currentZoom?: number,
		horizontalOffset?: number,
		padding?: any,
		verticalOffset?: number,
		viewPortHeight?: number,
		viewPortWidth?: number
	}

	declare export interface SelectedItemsUserHandle {
		backgroundColor?: string,
		borderColor?: string,
		enableMultiSelection?: boolean,
		pathColor?: string,
		pathData?: string,
		position?: ej.datavisualization.Diagram.UserHandlePositions | string,
		size?: number,
		tool?: any,
		visible?: boolean
	}

	declare export interface SelectedItems {
		children?: Array<any>,
		constraints?: ej.datavisualization.Diagram.SelectorConstraints | string,
		getConstraints?: any,
		height?: number,
		offsetX?: number,
		offsetY?: number,
		rotateAngle?: number,
		tooltip?: any,
		userHandles?: Array<SelectedItemsUserHandle>,
		width?: number
	}

	declare export interface SnapSettingsHorizontalGridLines {
		lineColor?: string,
		lineDashArray?: string,
		linesInterval?: Array<any>,
		snapInterval?: Array<any>
	}

	declare export interface SnapSettingsVerticalGridLines {
		lineColor?: string,
		lineDashArray?: string,
		linesInterval?: Array<any>,
		snapInterval?: Array<any>
	}

	declare export interface SnapSettings {
		enableSnapToObject?: boolean,
		horizontalGridLines?: SnapSettingsHorizontalGridLines,
		snapAngle?: number,
		snapConstraints?: ej.datavisualization.Diagram.SnapConstraints | string,
		snapObjectDistance?: number,
		verticalGridLines?: SnapSettingsVerticalGridLines
	}

	declare export interface TooltipAlignment {
		horizontal?: ej.datavisualization.Diagram.HorizontalAlignment | string,
		vertical?: ej.datavisualization.Diagram.VerticalAlignment | string
	}

	declare export interface Tooltip {
		alignment?: TooltipAlignment,
		margin?: any,
		relativeMode?: ej.datavisualization.Diagram.RelativeMode | string,
		templateId?: string
	}

			
}

declare module 'HeatMap' {
		declare export interface Model {
		width?: any,
		height?: any,
		id?: number,
		itemsSource?: any,
		heatMapCell?: HeatMapCell,
		isResponsive?: boolean,
		enableVirtualization?: boolean,
		defaultColumnStyle?: DefaultColumnStyle,
		legendCollection?: Array<any>,
		itemsMapping?: ItemsMapping,
		colorMappingCollection?: Array<ColorMappingCollection>,
		cellMouseOver(e: CellMouseOverEventArgs): void,
		cellMouseEnter(e: CellMouseEnterEventArgs): void,
		cellMouseLeave(e: CellMouseLeaveEventArgs): void,
		cellSelected(e: CellSelectedEventArgs): void
	}

	declare export interface CellMouseOverEventArgs {
		cellValue?: string,
		source?: any,
		cell?: any
	}

	declare export interface CellMouseEnterEventArgs {
		cellValue?: string,
		source?: any,
		cell?: any
	}

	declare export interface CellMouseLeaveEventArgs {
		cellValue?: string,
		source?: any,
		cell?: any
	}

	declare export interface CellSelectedEventArgs {
		cellValue?: string,
		source?: any,
		cell?: any
	}

	declare export interface HeatMapCell {
		showContent?: ej.datavisualization.HeatMap.CellVisibility | string,
		showColor?: boolean
	}

	declare export interface DefaultColumnStyle {
		textAlign?: any,
		headerTemplateID?: string,
		templateID?: string
	}

	declare export interface ItemsMappingColumnStyle {
		width?: number,
		textAlign?: string,
		headerTemplateID?: string,
		templateID?: string
	}

	declare export interface ItemsMappingColumn {
		propertyName?: string,
		displayName?: string
	}

	declare export interface ItemsMappingRow {
		propertyName?: string,
		displayName?: string
	}

	declare export interface ItemsMappingValue {
		propertyName?: string,
		displayName?: string
	}

	declare export interface ItemsMappingHeaderMapping {
		propertyName?: string,
		displayName?: string,
		columnStyle?: any
	}

	declare export interface ItemsMapping {
		columnStyle?: ItemsMappingColumnStyle,
		column?: ItemsMappingColumn,
		row?: ItemsMappingRow,
		value?: ItemsMappingValue,
		headerMapping?: ItemsMappingHeaderMapping,
		columnMapping?: Array<any>
	}

	declare export interface ColorMappingCollectionLabel {
		bold?: boolean,
		italic?: boolean,
		text?: string,
		textDecoration?: ej.datavisualization.HeatMap.TextDecoration | string,
		fontSize?: number,
		fontFamily?: string,
		fontColor?: string
	}

	declare export interface ColorMappingCollection {
		color?: string,
		value?: number,
		label?: ColorMappingCollectionLabel
	}

			
}

declare module 'HeatMapLegend' {
		declare export interface Model {
		width?: any,
		height?: any,
		isResponsive?: boolean,
		showLabel?: boolean,
		colorMappingCollection?: Array<ColorMappingCollection>,
		orientation?: ej.datavisualization.HeatMap.LegendOrientation | string,
		legendMode?: ej.datavisualization.HeatMap.LegendMode | string
	}

	declare export interface ColorMappingCollectionLabel {
		bold?: boolean,
		italic?: boolean,
		text?: string,
		textDecoration?: ej.datavisualization.HeatMap.TextDecoration | string,
		fontSize?: number,
		fontFamily?: string,
		fontColor?: string
	}

	declare export interface ColorMappingCollection {
		color?: string,
		value?: number,
		label?: ColorMappingCollectionLabel
	}

			
}

declare module 'Overview' {
		declare export interface Model {
		sourceID?: string,
		height?: number,
		width?: number
	}

			
}