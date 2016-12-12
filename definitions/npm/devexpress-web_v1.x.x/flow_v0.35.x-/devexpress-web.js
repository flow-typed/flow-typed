

declare module 'devexpress-web' {
		declare interface MVCxClientDashboardViewer {
		
	}

	declare interface ASPxClientDashboardItemUnderlyingData {
		GetRowCount(): number,
		GetRowValue(rowIndex: number, dataMember: string): Object,
		GetDataMembers(): string[],
		IsDataReceived(): boolean,
		GetRequestDataError(): string
	}

	declare interface ASPxClientDashboardItemRequestUnderlyingDataParameters {
		DataMembers: string[],
		AxisPoints: ASPxClientDashboardItemDataAxisPoint[],
		ValuesByAxisName: Object,
		UniqueValuesByAxisName: Object
	}

	declare interface ASPxClientDashboardItemRequestUnderlyingDataCompleted {
		(data: ASPxClientDashboardItemUnderlyingData): void
	}

	declare interface ASPxClientDashboardItemClickEventHandler<S> {
		(source: S, e: ASPxClientDashboardItemClickEventArgs): void
	}

	declare interface ASPxClientDashboardItemClickEventArgs {
		ItemName: string,
		GetData(): ASPxClientDashboardItemData,
		GetAxisPoint(axisName: string): ASPxClientDashboardItemDataAxisPoint,
		GetMeasures(): ASPxClientDashboardItemDataMeasure[],
		GetDeltas(): ASPxClientDashboardItemDataDelta[],
		GetDimensions(axisName: string): ASPxClientDashboardItemDataDimension[],
		RequestUnderlyingData(
		onCompleted: ASPxClientDashboardItemRequestUnderlyingDataCompleted, dataMembers: string[]
	): void
	}

	declare interface ASPxClientDashboardItemVisualInteractivityEventHandler<S> {
		(source: S, e: ASPxClientDashboardItemVisualInteractivityEventArgs): void
	}

	declare interface ASPxClientDashboardItemVisualInteractivityEventArgs {
		ItemName: string,
		GetSelectionMode(): string,
		SetSelectionMode(selectionMode: string): void,
		IsHighlightingEnabled(): boolean,
		EnableHighlighting(enableHighlighting: boolean): void,
		GetTargetAxes(): string[],
		SetTargetAxes(targetAxes: string[]): void,
		GetDefaultSelection(): ASPxClientDashboardItemDataAxisPointTuple[],
		SetDefaultSelection(values: ASPxClientDashboardItemDataAxisPointTuple[]): void
	}

	declare interface ASPxClientDashboardItemSelectionChangedEventHandler<S> {
		(source: S, e: ASPxClientDashboardItemSelectionChangedEventArgs): void
	}

	declare interface ASPxClientDashboardItemSelectionChangedEventArgs {
		ItemName: string,
		GetCurrentSelection(): ASPxClientDashboardItemDataAxisPointTuple[]
	}

	declare interface ASPxClientDashboardItemElementCustomColorEventHandler<S> {
		(source: S, e: ASPxClientDashboardItemElementCustomColorEventArgs): void
	}

	declare interface ASPxClientDashboardItemElementCustomColorEventArgs {
		ItemName: string,
		GetTargetElement(): ASPxClientDashboardItemDataAxisPointTuple,
		GetColor(): string,
		SetColor(color: string): void,
		GetMeasures(): ASPxClientDashboardItemDataMeasure[]
	}

	declare interface ASPxClientDashboardItemWidgetCreatedEventHandler<S> {
		(source: S, e: ASPxClientDashboardItemWidgetEventArgs): void
	}

	declare interface ASPxClientDashboardItemWidgetUpdatingEventHandler<S> {
		(source: S, e: ASPxClientDashboardItemWidgetEventArgs): void
	}

	declare interface ASPxClientDashboardItemWidgetUpdatedEventHandler<S> {
		(source: S, e: ASPxClientDashboardItemWidgetEventArgs): void
	}

	declare interface ASPxClientDashboardItemBeforeWidgetDisposedEventHandler<S> {
		(source: S, e: ASPxClientDashboardItemWidgetEventArgs): void
	}

	declare interface ASPxClientDashboardItemWidgetEventArgs {
		ItemName: string,
		GetWidget(): Object
	}

	declare interface ASPxClientDashboardItemData {
		GetAxisNames(): string[],
		GetAxis(axisName: string): ASPxClientDashboardItemDataAxis,
		GetDimensions(axisName: string): ASPxClientDashboardItemDataDimension[],
		GetMeasures(): ASPxClientDashboardItemDataMeasure[],
		GetDeltas(): ASPxClientDashboardItemDataDelta[],
		GetSlice(tuple: ASPxClientDashboardItemDataAxisPointTuple): ASPxClientDashboardItemData,
		GetSlice(axisPoint: ASPxClientDashboardItemDataAxisPoint): ASPxClientDashboardItemData,
		GetMeasureValue(measureId: string): ASPxClientDashboardItemDataMeasureValue,
		GetDeltaValue(deltaId: string): ASPxClientDashboardItemDataDeltaValue,
		GetDataMembers(): string[],
		CreateTuple(values: Object[]): ASPxClientDashboardItemDataAxisPointTuple,
		CreateTuple(
		axisPoints: ASPxClientDashboardItemDataAxisPoint[]
	): ASPxClientDashboardItemDataAxisPointTuple
	}

	declare interface ASPxClientDashboardItemDataAxis {
		GetDimensions(): ASPxClientDashboardItemDataDimension[],
		GetRootPoint(): ASPxClientDashboardItemDataAxisPoint,
		GetPoints(): ASPxClientDashboardItemDataAxisPoint[],
		GetPointsByDimension(dimensionId: string): ASPxClientDashboardItemDataAxisPoint[],
		GetPointByUniqueValues(uniqueValues: Object[]): ASPxClientDashboardItemDataAxisPoint
	}

	declare interface ASPxClientDashboardItemDataDimension {
		Id: string,
		Name: string,
		DataMember: string,
		DateTimeGroupInterval: string,
		TextGroupInterval: string,
		Format(value: Object): string
	}

	declare interface ASPxClientDashboardItemDataMeasure {
		Id: string,
		Name: string,
		DataMember: string,
		SummaryType: string,
		Format(value: Object): string
	}

	declare interface ASPxClientDashboardItemDataDelta {
		Id: string,
		Name: string,
		ActualMeasureId: string,
		TargetMeasureId: string
	}

	declare interface ASPxClientDashboardItemDataDimensionValue {
		GetValue(): Object,
		GetUniqueValue(): Object,
		GetDisplayText(): string
	}

	declare interface ASPxClientDashboardItemDataMeasureValue {
		GetValue(): Object,
		GetDisplayText(): string
	}

	declare interface ASPxClientDashboardItemDataDeltaValue {
		GetActualValue(): ASPxClientDashboardItemDataMeasureValue,
		GetTargetValue(): ASPxClientDashboardItemDataMeasureValue,
		GetAbsoluteVariation(): ASPxClientDashboardItemDataMeasureValue,
		GetPercentVariation(): ASPxClientDashboardItemDataMeasureValue,
		GetPercentOfTarget(): ASPxClientDashboardItemDataMeasureValue,
		GetDisplayValue(): ASPxClientDashboardItemDataMeasureValue,
		GetDisplaySubValue1(): ASPxClientDashboardItemDataMeasureValue,
		GetDisplaySubValue2(): ASPxClientDashboardItemDataMeasureValue,
		GetIsGood(): ASPxClientDashboardItemDataMeasureValue,
		GetIndicatorType(): ASPxClientDashboardItemDataMeasureValue
	}

	declare interface ASPxClientDashboardItemDataAxisPoint {
		GetAxisName(): string,
		GetDimension(): ASPxClientDashboardItemDataDimension,
		GetDimensions(): ASPxClientDashboardItemDataDimension[],
		GetValue(): Object,
		GetDisplayText(): string,
		GetUniqueValue(): Object,
		GetDimensionValue(): ASPxClientDashboardItemDataDimensionValue,
		GetDimensionValue(dimensionId: string): ASPxClientDashboardItemDataDimensionValue,
		GetChildren(): ASPxClientDashboardItemDataAxisPoint[],
		GetParent(): ASPxClientDashboardItemDataAxisPoint
	}

	declare interface ASPxClientDashboardItemDataAxisPointTuple {
		GetAxisPoint(): ASPxClientDashboardItemDataAxisPoint,
		GetAxisPoint(axisName: string): ASPxClientDashboardItemDataAxisPoint
	}

	declare interface ASPxClientDashboardDesigner {
		DashboardStateChanged: ASPxClientEvent<ASPxClientDashboardStateChangedEventHandler<ASPxClientDashboardDesigner>>,
		DashboardChanged: ASPxClientEvent<ASPxClientDashboardChangedEventHandler<ASPxClientDashboardDesigner>>,
		CustomizeMenuItems: ASPxClientEvent<ASPxClientDashboardDesignerCustomizeMenuItemsEventHandler<ASPxClientDashboardDesigner>>,
		BeforeRender: ASPxClientEvent<ASPxClientDashboardDesignerBeforeRenderEventHandler<ASPxClientDashboardDesigner>>,
		SwitchToViewer(): void,
		SwitchToDesigner(): void,
		GetWorkingMode(): string,
		GetDashboardId(): string,
		GetDashboardName(): string,
		GetDashboardState(): string,
		LoadDashboard(dashboardId: string): void,
		SaveDashboard(): void
	}

	declare interface ASPxClientDashboardStateChangedEventHandler<S> {
		(source: S, e: ASPxClientDashboardStateChangedEventArgs): void
	}

	declare interface ASPxClientDashboardStateChangedEventArgs {
		DashboardState: string
	}

	declare interface ASPxClientDashboardChangedEventHandler<S> {
		(source: S, e: ASPxClientDashboardChangedEventArgs): void
	}

	declare interface ASPxClientDashboardChangedEventArgs {
		DashboardId: string,
		DashboardName: string
	}

	declare interface ASPxClientDashboardDesignerCustomizeMenuItemsEventHandler<S> {
		(source: S, e: ASPxClientDashboardDesignerCustomizeMenuItemsEventArgs): void
	}

	declare interface ASPxClientDashboardDesignerMenuItem {
		id: string,
		title: string,
		template: string,
		selected: boolean,
		disabled: boolean,
		hasSeparator: boolean,
		click: Function,
		hotKey: number
	}

	declare interface ASPxClientDashboardDesignerCustomizeMenuItemsEventArgs {
		Items: ASPxClientDashboardDesignerMenuItem[],
		FindById(itemId: string): ASPxClientDashboardDesignerMenuItem
	}

	declare interface ASPxClientDashboardDesignerBeforeRenderEventHandler<S> {
		(source: S, e: ASPxClientEventArgs): void
	}

	declare interface ASPxClientDashboardViewer {
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientDashboardViewer>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientDashboardViewer>>,
		ActionAvailabilityChanged: ASPxClientEvent<ASPxClientDashboardActionAvailabilityChangedEventHandler<ASPxClientDashboardViewer>>,
		MasterFilterSet: ASPxClientEvent<ASPxClientDashboardMasterFilterSetEventHandler<ASPxClientDashboardViewer>>,
		MasterFilterCleared: ASPxClientEvent<ASPxClientDashboardMasterFilterClearedEventHandler<ASPxClientDashboardViewer>>,
		DataLoadingError: ASPxClientEvent<ASPxClientDashboardDataLoadingErrorEventHandler<ASPxClientDashboardViewer>>,
		DrillDownPerformed: ASPxClientEvent<ASPxClientDashboardDrillDownPerformedEventHandler<ASPxClientDashboardViewer>>,
		DrillUpPerformed: ASPxClientEvent<ASPxClientDashboardDrillUpPerformedEventHandler<ASPxClientDashboardViewer>>,
		Loaded: ASPxClientEvent<ASPxClientEventHandler<ASPxClientDashboardViewer>>,
		ItemClick: ASPxClientEvent<ASPxClientDashboardItemClickEventHandler<ASPxClientDashboardViewer>>,
		ItemVisualInteractivity: ASPxClientEvent<ASPxClientDashboardItemVisualInteractivityEventHandler<ASPxClientDashboardViewer>>,
		ItemWidgetCreated: ASPxClientEvent<ASPxClientDashboardItemWidgetCreatedEventHandler<ASPxClientDashboardViewer>>,
		ItemWidgetUpdating: ASPxClientEvent<ASPxClientDashboardItemWidgetUpdatingEventHandler<ASPxClientDashboardViewer>>,
		ItemWidgetUpdated: ASPxClientEvent<ASPxClientDashboardItemWidgetUpdatedEventHandler<ASPxClientDashboardViewer>>,
		ItemBeforeWidgetDisposed: ASPxClientEvent<ASPxClientDashboardItemBeforeWidgetDisposedEventHandler<ASPxClientDashboardViewer>>,
		ItemSelectionChanged: ASPxClientEvent<ASPxClientDashboardItemSelectionChangedEventHandler<ASPxClientDashboardViewer>>,
		ItemElementCustomColor: ASPxClientEvent<ASPxClientDashboardItemElementCustomColorEventHandler<ASPxClientDashboardViewer>>,
		ReloadData(): void,
		ReloadData(parameters: ASPxClientDashboardParameter[]): void,
		GetParameters(): ASPxClientDashboardParameters,
		BeginUpdateParameters(): void,
		EndUpdateParameters(): void,
		GetCurrentRange(itemName: string): ASPxClientDashboardRangeFilterSelection,
		GetEntireRange(itemName: string): ASPxClientDashboardRangeFilterSelection,
		SetRange(itemName: string, range: ASPxClientDashboardRangeFilterSelection): void,
		SetRange(itemName: string, dateTimePeriodName: string): void,
		GetAvailableDrillDownValues(itemName: string): ASPxClientDashboardItemDataAxisPointTuple[],
		GetCurrentDrillDownValues(itemName: string): ASPxClientDashboardItemDataAxisPointTuple,
		GetAvailableFilterValues(itemName: string): ASPxClientDashboardItemDataAxisPointTuple[],
		GetCurrentFilterValues(itemName: string): ASPxClientDashboardItemDataAxisPointTuple[],
		GetCurrentSelection(itemName: string): ASPxClientDashboardItemDataAxisPointTuple[],
		RequestUnderlyingData(
		itemName: string, args: ASPxClientDashboardItemRequestUnderlyingDataParameters, onCompleted: ASPxClientDashboardItemRequestUnderlyingDataCompleted
	): void,
		ShowParametersDialog(): void,
		HideParametersDialog(): void,
		GetExportOptions(): ASPxClientDashboardExportOptions,
		SetExportOptions(options: ASPxClientDashboardExportOptions): void,
		ExportToPdf(): void,
		ExportToPdf(options: ASPxClientDashboardExportOptions): void,
		ExportToImage(): void,
		ExportToImage(options: ASPxClientDashboardExportOptions): void,
		ExportDashboardItemToPdf(itemName: string): void,
		ExportDashboardItemToPdf(itemName: string, options: ASPxClientDashboardExportOptions): void,
		ExportDashboardItemToImage(itemName: string): void,
		ExportDashboardItemToImage(itemName: string, options: ASPxClientDashboardExportOptions): void,
		ExportDashboardItemToExcel(itemName: string): void,
		ExportDashboardItemToExcel(itemName: string, options: ASPxClientDashboardExportOptions): void,
		GetWidth(): number,
		GetHeight(): number,
		SetWidth(width: number): void,
		SetHeight(height: number): void,
		SetSize(width: number, height: number): void,
		SetMasterFilter(itemName: string, values: Object[][]): void,
		SetMasterFilter(
		itemName: string, axisPointTuples: ASPxClientDashboardItemDataAxisPointTuple[]
	): void,
		PerformDrillDown(itemName: string, value: Object): void,
		PerformDrillDown(
		itemName: string, axisPointTuple: ASPxClientDashboardItemDataAxisPointTuple
	): void,
		ClearMasterFilter(itemName: string): void,
		PerformDrillUp(itemName: string): void,
		CanSetMasterFilter(itemName: string): boolean,
		CanClearMasterFilter(itemName: string): boolean,
		CanPerformDrillDown(itemName: string): boolean,
		CanPerformDrillUp(itemName: string): boolean,
		GetItemData(itemName: string): ASPxClientDashboardItemData
	}

	declare interface ASPxClientDashboardRangeFilterSelection {
		Maximum: Object,
		Minimum: Object
	}

	declare interface ASPxClientDashboardParameters {
		GetParameterList(): ASPxClientDashboardParameter[],
		GetParameterByName(name: string): ASPxClientDashboardParameter,
		GetParameterByIndex(index: number): ASPxClientDashboardParameter
	}

	declare interface ASPxClientDashboardParameter {
		Name: string,
		Value: Object,
		GetName(): string,
		GetValue(): Object,
		SetValue(value: Object): void,
		GetDefaultValue(): Object,
		GetDescription(): string,
		GetType(): string,
		GetValues(): ASPxClientDashboardParameterValue[]
	}

	declare interface ASPxClientDashboardParameterValue {
		GetDisplayText(): string,
		GetValue(): Object
	}

	declare interface ImageFormatOptions {
		Format: string,
		Resolution: number
	}

	declare interface ExcelFormatOptions {
		Format: string,
		CsvValueSeparator: string
	}

	declare interface GridExportOptions {
		FitToPageWidth: boolean,
		PrintHeadersOnEveryPage: boolean
	}

	declare interface PivotExportOptions {
		PrintHeadersOnEveryPage: boolean
	}

	declare interface PieExportOptions {
		AutoArrangeContent: boolean
	}

	declare interface GaugeExportOptions {
		AutoArrangeContent: boolean
	}

	declare interface CardExportOptions {
		AutoArrangeContent: boolean
	}

	declare interface RangeFilterExportOptions {
		AutomaticPageLayout: boolean,
		SizeMode: string
	}

	declare interface ChartExportOptions {
		AutomaticPageLayout: boolean,
		SizeMode: string
	}

	declare interface MapExportOptions {
		AutomaticPageLayout: boolean,
		SizeMode: string
	}

	declare interface ASPxClientDashboardExportOptions {
		PaperKind: string,
		PageLayout: string,
		ScaleMode: string,
		ScaleFactor: number,
		AutoFitPageCount: number,
		Title: string,
		ShowTitle: boolean,
		FilterState: string,
		ImageOptions: ImageFormatOptions,
		ExcelOptions: ExcelFormatOptions,
		GridOptions: GridExportOptions,
		PivotOptions: PivotExportOptions,
		PieOptions: PieExportOptions,
		GaugeOptions: GaugeExportOptions,
		CardOptions: CardExportOptions,
		RangeFilterOptions: RangeFilterExportOptions,
		ChartOptions: ChartExportOptions,
		MapOptions: MapExportOptions
	}

	declare interface ASPxClientDashboardActionAvailabilityChangedEventHandler<S> {
		(source: S, e: ASPxClientDashboardActionAvailabilityChangedEventArgs): void
	}

	declare interface ASPxClientDashboardActionAvailabilityChangedEventArgs {
		IsReloadDataAvailable: boolean,
		ItemActions: ASPxClientDashboardItemAction[]
	}

	declare interface ASPxClientDashboardDataLoadingErrorEventHandler<S> {
		(source: S, e: ASPxClientDashboardDataLoadingErrorEventArgs): void
	}

	declare interface ASPxClientDashboardDataLoadingErrorEventArgs {
		IsErrorMessageShown(): boolean,
		ShowErrorMessage(value: boolean): void,
		GetError(): string,
		SetError(value: string): void
	}

	declare interface ASPxClientDashboardItemAction {
		ItemName: string,
		Actions: any[]
	}

	declare interface ASPxClientDashboardMasterFilterSetEventHandler<S> {
		(source: S, e: ASPxClientDashboardMasterFilterSetEventArgs): void
	}

	declare interface ASPxClientDashboardMasterFilterSetEventArgs {
		ItemName: string,
		Values: Object[][],
		IsNullValue(value: Object): boolean,
		IsOthersValue(value: Object): boolean
	}

	declare interface ASPxClientDashboardMasterFilterClearedEventHandler<S> {
		(source: S, e: ASPxClientDashboardMasterFilterClearedEventArgs): void
	}

	declare interface ASPxClientDashboardMasterFilterClearedEventArgs {
		ItemName: string
	}

	declare interface ASPxClientDashboardDrillDownPerformedEventHandler<S> {
		(source: S, e: ASPxClientDashboardDrillDownPerformedEventArgs): void
	}

	declare interface ASPxClientDashboardDrillDownPerformedEventArgs {
		ItemName: string,
		Value: Object[],
		IsNullValue(value: Object): boolean,
		IsOthersValue(value: Object): boolean
	}

	declare interface ASPxClientDashboardDrillUpPerformedEventHandler<S> {
		(source: S, e: ASPxClientDashboardDrillUpPerformedEventArgs): void
	}

	declare interface ASPxClientDashboardDrillUpPerformedEventArgs {
		ItemName: string
	}

	declare interface ASPxClientEditBase {
		GetValue(): Object,
		SetValue(value: Object): void,
		GetEnabled(): boolean,
		SetEnabled(value: boolean): void,
		GetCaption(): string,
		SetCaption(caption: string): void
	}

	declare interface ASPxClientEdit {
		GotFocus: ASPxClientEvent<ASPxClientEventHandler<ASPxClientEdit>>,
		LostFocus: ASPxClientEvent<ASPxClientEventHandler<ASPxClientEdit>>,
		Validation: ASPxClientEvent<ASPxClientEditValidationEventHandler<ASPxClientEdit>>,
		ValueChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientEdit>>,
		GetInputElement(): Object,
		Focus(): void,
		GetIsValid(): boolean,
		GetErrorText(): string,
		SetIsValid(isValid: boolean): void,
		SetErrorText(errorText: string): void,
		Validate(): void
	}

	declare interface ASPxClientBinaryImage {
		Click: ASPxClientEvent<ASPxClientEditEventHandler<ASPxClientBinaryImage>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientBinaryImage>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientBinaryImage>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientBinaryImage>>,
		SetSize(width: number, height: number): void,
		GetValue(): Object,
		SetValue(value: Object): void,
		Clear(): void,
		GetUploadedFileName(): string,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface ASPxClientButton {
		CheckedChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientButton>>,
		GotFocus: ASPxClientEvent<ASPxClientEventHandler<ASPxClientButton>>,
		LostFocus: ASPxClientEvent<ASPxClientEventHandler<ASPxClientButton>>,
		Click: ASPxClientEvent<ASPxClientButtonClickEventHandler<ASPxClientButton>>,
		DoClick(): void,
		GetChecked(): boolean,
		SetChecked(value: boolean): void,
		GetText(): string,
		SetText(value: string): void,
		GetImageUrl(): string,
		SetImageUrl(value: string): void,
		SetEnabled(value: boolean): void,
		GetEnabled(): boolean,
		Focus(): void
	}

	declare interface ASPxClientButtonClickEventHandler<S> {
		(source: S, e: ASPxClientButtonClickEventArgs): void
	}

	declare interface ASPxClientButtonClickEventArgs {
		cancelEventAndBubble: boolean
	}

	declare interface ASPxClientCalendar {
		SelectionChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientCalendar>>,
		VisibleMonthChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientCalendar>>,
		CustomDisabledDate: ASPxClientEvent<ASPxClientCalendarCustomDisabledDateEventHandler<ASPxClientCalendar>>,
		KeyDown: ASPxClientEvent<ASPxClientEditKeyEventHandler<ASPxClientCalendar>>,
		KeyPress: ASPxClientEvent<ASPxClientEditKeyEventHandler<ASPxClientCalendar>>,
		KeyUp: ASPxClientEvent<ASPxClientEditKeyEventHandler<ASPxClientCalendar>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientCalendar>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientCalendar>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientCalendar>>,
		IsDateSelected(date: Date): boolean,
		SetVisibleDate(date: Date): void,
		SetSelectedDate(date: Date): void,
		GetSelectedDate(): Date,
		GetVisibleDate(): Date,
		SelectDate(date: Date): void,
		SelectRange(start: Date, end: Date): void,
		DeselectDate(date: Date): void,
		DeselectRange(start: Date, end: Date): void,
		ClearSelection(): void,
		GetSelectedDates(): Date[],
		GetMinDate(): Date,
		SetMinDate(date: Date): void,
		GetMaxDate(): Date,
		SetMaxDate(date: Date): void
	}

	declare interface ASPxClientCalendarCustomDisabledDateEventArgs {
		date: Date,
		isDisabled: boolean
	}

	declare interface ASPxClientCalendarCustomDisabledDateEventHandler<S> {
		(source: S, e: ASPxClientCalendarCustomDisabledDateEventArgs): void
	}

	declare interface ASPxClientCaptcha {
		Focus(): void,
		Refresh(): void
	}

	declare interface ASPxClientCheckBox {
		CheckedChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientCheckBox>>,
		GetChecked(): boolean,
		SetChecked(isChecked: boolean): void,
		GetText(): string,
		GetCheckState(): string,
		SetCheckState(checkState: string): void,
		SetText(text: string): void
	}

	declare interface ASPxClientRadioButton {
		GetChecked(): boolean,
		SetChecked(isChecked: boolean): void
	}

	declare interface ASPxClientTextEdit {
		KeyDown: ASPxClientEvent<ASPxClientEditKeyEventHandler<ASPxClientTextEdit>>,
		KeyPress: ASPxClientEvent<ASPxClientEditKeyEventHandler<ASPxClientTextEdit>>,
		KeyUp: ASPxClientEvent<ASPxClientEditKeyEventHandler<ASPxClientTextEdit>>,
		TextChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientTextEdit>>,
		GetText(): string,
		SetText(text: string): void,
		SelectAll(): void,
		SetCaretPosition(position: number): void,
		SetSelection(startPos: number, endPos: number, scrollToSelection: boolean): void
	}

	declare interface ASPxClientTextBoxBase {
		
	}

	declare interface ASPxClientButtonEditBase {
		ButtonClick: ASPxClientEvent<ASPxClientButtonEditClickEventHandler<ASPxClientButtonEditBase>>,
		SetButtonVisible(number: number, value: boolean): void,
		GetButtonVisible(number: number): boolean
	}

	declare interface ASPxClientDropDownEditBase {
		DropDown: ASPxClientEvent<ASPxClientEventHandler<ASPxClientDropDownEditBase>>,
		CloseUp: ASPxClientEvent<ASPxClientEventHandler<ASPxClientDropDownEditBase>>,
		QueryCloseUp: ASPxClientEvent<ASPxClientCancelEventHandler<ASPxClientDropDownEditBase>>,
		AdjustDropDownWindow(): void,
		ShowDropDown(): void,
		HideDropDown(): void
	}

	declare interface ASPxClientColorEdit {
		ColorChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientColorEdit>>,
		TextChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientColorEdit>>,
		GetColor(): string,
		SetColor(value: string): void,
		IsAutomaticColorSelected(): boolean
	}

	declare interface ASPxClientComboBox {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientComboBox>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientComboBox>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientComboBox>>,
		SelectedIndexChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientComboBox>>,
		SetText(text: string): void,
		AddItem(text: string): number,
		AddItem(text: string, value: Object): number,
		AddItem(text: string, value: Object, imageUrl: string): number,
		InsertItem(index: number, text: string, value: Object, imageUrl: string): void,
		InsertItem(index: number, text: string, value: Object): void,
		InsertItem(index: number, text: string): void,
		RemoveItem(index: number): void,
		ClearItems(): void,
		BeginUpdate(): void,
		EndUpdate(): void,
		MakeItemVisible(index: number): void,
		GetItem(index: number): ASPxClientListEditItem,
		FindItemByText(text: string): ASPxClientListEditItem,
		FindItemByValue(value: Object): ASPxClientListEditItem,
		GetItemCount(): number,
		GetSelectedIndex(): number,
		SetSelectedIndex(index: number): void,
		GetSelectedItem(): ASPxClientListEditItem,
		SetSelectedItem(item: ASPxClientListEditItem): void,
		GetText(): string,
		PerformCallback(parameter: string): void,
		AddItem(texts: string[]): number,
		AddItem(texts: string[], value: Object): number,
		AddItem(texts: string[], value: Object, imageUrl: string): number,
		InsertItem(index: number, texts: string[], value: Object, imageUrl: string): void,
		InsertItem(index: number, texts: string[], value: Object): void,
		InsertItem(index: number, texts: string[]): void,
		EnsureDropDownLoaded(callbackFunction: Object): void
	}

	declare interface ASPxClientDateEdit {
		DateChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientDateEdit>>,
		ParseDate: ASPxClientEvent<ASPxClientParseDateEventHandler<ASPxClientDateEdit>>,
		CalendarCustomDisabledDate: ASPxClientEvent<ASPxClientCalendarCustomDisabledDateEventHandler<ASPxClientDateEdit>>,
		TextChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientDateEdit>>,
		GetCalendar(): ASPxClientCalendar,
		GetTimeEdit(): ASPxClientTimeEdit,
		SetDate(date: Object): void,
		GetDate(): Object,
		GetRangeDayCount(): number,
		GetMinDate(): Date,
		SetMinDate(date: Date): void,
		GetMaxDate(): Date,
		SetMaxDate(date: Date): void
	}

	declare interface ASPxClientParseDateEventArgs {
		value: string,
		date: Date,
		handled: boolean
	}

	declare interface ASPxClientParseDateEventHandler<S> {
		(source: S, e: ASPxClientParseDateEventArgs): void
	}

	declare interface ASPxClientDropDownEdit {
		GetKeyValue(): string,
		SetKeyValue(keyValue: string): void
	}

	declare interface ASPxClientEditKeyEventHandler<S> {
		(source: S, e: ASPxClientEditKeyEventArgs): void
	}

	declare interface ASPxClientEditKeyEventArgs {
		htmlEvent: Object
	}

	declare interface ASPxClientEditValidationEventHandler<S> {
		(source: S, e: ASPxClientEditValidationEventArgs): void
	}

	declare interface ASPxClientEditValidationEventArgs {
		errorText: string,
		isValid: boolean,
		value: string
	}

	declare interface ASPxClientFilterControl {
		Applied: ASPxClientEvent<ASPxClientFilterAppliedEventHandler<ASPxClientFilterControl>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientFilterControl>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientFilterControl>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientFilterControl>>,
		GetFilterExpression(): string,
		GetAppliedFilterExpression(): string,
		GetEditor(editorIndex: number): ASPxClientEditBase,
		IsFilterExpressionValid(): boolean,
		Apply(): void,
		Reset(): void
	}

	declare interface ASPxClientFilterAppliedEventHandler<S> {
		(source: S, e: ASPxClientFilterAppliedEventArgs): void
	}

	declare interface ASPxClientFilterAppliedEventArgs {
		filterExpression: string
	}

	declare interface ASPxClientListEdit {
		SelectedIndexChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientListEdit>>,
		GetSelectedItem(): ASPxClientListEditItem,
		GetSelectedIndex(): number,
		SetSelectedItem(item: ASPxClientListEditItem): void,
		SetSelectedIndex(index: number): void
	}

	declare interface ASPxClientListEditItem {
		selected: boolean,
		listEditBase: ASPxClientListEdit,
		index: number,
		imageUrl: string,
		text: string,
		value: Object,
		GetColumnText(columnIndex: number): string,
		GetColumnText(columnName: string): string
	}

	declare interface ASPxClientListBox {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientListBox>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientListBox>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientListBox>>,
		KeyDown: ASPxClientEvent<ASPxClientEditKeyEventHandler<ASPxClientListBox>>,
		KeyPress: ASPxClientEvent<ASPxClientEditKeyEventHandler<ASPxClientListBox>>,
		KeyUp: ASPxClientEvent<ASPxClientEditKeyEventHandler<ASPxClientListBox>>,
		SelectedIndexChanged: ASPxClientEvent<ASPxClientListEditItemSelectedChangedEventHandler<ASPxClientListBox>>,
		ItemDoubleClick: ASPxClientEvent<ASPxClientEventHandler<ASPxClientListBox>>,
		GetItemCount(): number,
		GetItem(index: number): ASPxClientListEditItem,
		GetSelectedIndices(): number[],
		GetSelectedValues(): Object[],
		GetSelectedItems(): ASPxClientListEditItem[],
		SelectAll(): void,
		UnselectAll(): void,
		SelectIndices(indices: number[]): void,
		UnselectIndices(indices: number[]): void,
		SelectItems(items: ASPxClientListEditItem[]): void,
		UnselectItems(items: ASPxClientListEditItem[]): void,
		SelectValues(values: Object[]): void,
		UnselectValues(values: Object[]): void,
		MakeItemVisible(index: number): void,
		InitOnContainerMadeVisible(): void,
		AddItem(text: string): number,
		AddItem(text: string, value: Object): number,
		AddItem(text: string, value: Object, imageUrl: string): number,
		InsertItem(index: number, text: string, value: Object, imageUrl: string): void,
		InsertItem(index: number, text: string, value: Object): void,
		InsertItem(index: number, text: string): void,
		BeginUpdate(): void,
		EndUpdate(): void,
		ClearItems(): void,
		RemoveItem(index: number): void,
		FindItemByText(text: string): ASPxClientListEditItem,
		FindItemByValue(value: Object): ASPxClientListEditItem,
		PerformCallback(parameter: string): void,
		AddItem(texts: string[]): number,
		AddItem(texts: string[], value: Object): number,
		AddItem(texts: string[], value: Object, imageUrl: string): number,
		InsertItem(index: number, texts: string[], value: Object, imageUrl: string): void,
		InsertItem(index: number, texts: string[], value: Object): void,
		InsertItem(index: number, texts: string[]): void
	}

	declare interface ASPxClientCheckListBase {
		GetItemCount(): number,
		GetItem(index: number): ASPxClientListEditItem
	}

	declare interface ASPxClientRadioButtonList {
		
	}

	declare interface ASPxClientCheckBoxList {
		SelectedIndexChanged: ASPxClientEvent<ASPxClientListEditItemSelectedChangedEventHandler<ASPxClientCheckBoxList>>,
		GetSelectedIndices(): number[],
		GetSelectedValues(): Object[],
		GetSelectedItems(): ASPxClientListEditItem[],
		SelectAll(): void,
		UnselectAll(): void,
		SelectIndices(indices: number[]): void,
		SelectItems(items: ASPxClientListEditItem[]): void,
		SelectValues(values: Object[]): void,
		UnselectIndices(indices: number[]): void,
		UnselectItems(items: ASPxClientListEditItem[]): void,
		UnselectValues(values: Object[]): void
	}

	declare interface ASPxClientListEditItemSelectedChangedEventHandler<S> {
		(source: S, e: ASPxClientListEditItemSelectedChangedEventArgs): void
	}

	declare interface ASPxClientListEditItemSelectedChangedEventArgs {
		index: number,
		isSelected: boolean
	}

	declare interface ASPxClientProgressBar {
		SetPosition(position: number): void,
		GetPosition(): number,
		SetCustomDisplayFormat(text: string): void,
		GetDisplayText(): string,
		GetPercent(): number,
		SetMinimum(min: number): void,
		SetMaximum(max: number): void,
		GetMinimum(): number,
		GetMaximum(): number,
		SetMinMaxValues(minValue: number, maxValue: number): void
	}

	declare interface ASPxClientSpinEditBase {
		TextChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientSpinEditBase>>
	}

	declare interface ASPxClientSpinEdit {
		NumberChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientSpinEdit>>,
		SetValue(number: number): void,
		SetNumber(number: number): void,
		GetNumber(): number,
		GetText(): string,
		SetMinValue(value: number): void,
		GetMinValue(): number,
		SetMaxValue(value: number): void,
		GetMaxValue(): number,
		SetValue(value: Object): void
	}

	declare interface ASPxClientTimeEdit {
		DateChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientTimeEdit>>,
		SetDate(date: Object): void,
		GetDate(): Object
	}

	declare interface ASPxClientStaticEdit {
		Click: ASPxClientEvent<ASPxClientEditEventHandler<ASPxClientStaticEdit>>
	}

	declare interface ASPxClientEditEventHandler<S> {
		(source: S, e: ASPxClientEditClickEventArgs): void
	}

	declare interface ASPxClientEditClickEventArgs {
		htmlElement: Object,
		htmlEvent: Object
	}

	declare interface ASPxClientHyperLink {
		GetNavigateUrl(): string,
		SetNavigateUrl(url: string): void,
		GetText(): string,
		SetText(text: string): void
	}

	declare interface ASPxClientImageBase {
		SetSize(width: number, height: number): void
	}

	declare interface ASPxClientImage {
		GetImageUrl(): string,
		SetImageUrl(url: string): void
	}

	declare interface ASPxClientLabel {
		GetText(): string,
		SetText(text: string): void
	}

	declare interface ASPxClientTextBox {
		
	}

	declare interface ASPxClientMemo {
		
	}

	declare interface ASPxClientButtonEdit {
		
	}

	declare interface ASPxClientButtonEditClickEventHandler<S> {
		(source: S, e: ASPxClientButtonEditClickEventArgs): void
	}

	declare interface ASPxClientButtonEditClickEventArgs {
		buttonIndex: number
	}

	declare interface ASPxClientTokenBox {
		TokensChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientTokenBox>>,
		AddToken(text: string): void,
		RemoveTokenByText(text: string): void,
		RemoveToken(index: number): void,
		GetTokenHtmlElement(index: number): Object,
		GetTokenTextHtmlElement(index: number): Object,
		GetTokenRemoveButtonHtmlElement(index: number): Object,
		GetTokenCollection(): string[],
		SetTokenCollection(collection: string[]): void,
		ClearTokenCollection(): void,
		GetTokenIndexByText(text: string): number,
		GetText(): string,
		SetText(text: string): void,
		GetValue(): string,
		SetValue(value: string): void,
		IsCustomToken(text: string, caseSensitive: boolean): boolean,
		SetValue(value: Object): void
	}

	declare interface ASPxClientTrackBar {
		PositionChanging: ASPxClientEvent<ASPxClientTrackBarPositionChangingEventHandler<ASPxClientTrackBar>>,
		PositionChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientTrackBar>>,
		Track: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientTrackBar>>,
		TrackStart: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientTrackBar>>,
		TrackEnd: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientTrackBar>>,
		GetItemIndexByValue(value: Object): number,
		GetItemValue(index: number): Object,
		GetItemText(index: number): string,
		GetItemToolTip(index: number): string,
		GetItemCount(): number,
		SetPositionEnd(position: number): void,
		SetPositionStart(position: number): void,
		GetPositionEnd(): number,
		GetPositionStart(): number,
		GetPosition(): number,
		SetPosition(position: number): void
	}

	declare interface ASPxClientTrackBarPositionChangingEventHandler<S> {
		(source: S, e: ASPxClientTrackBarPositionChangingEventArgs): void
	}

	declare interface ASPxClientTrackBarPositionChangingEventArgs {
		cancel: boolean,
		currentPosition: number,
		currentPositionEnd: number,
		currentPositionStart: number,
		newPosition: number,
		newPositionEnd: number,
		newPositionStart: number
	}

	declare interface ASPxClientValidationSummary {
		VisibilityChanged: ASPxClientEvent<ASPxClientValidationSummaryVisibilityChangedEventHandler<ASPxClientValidationSummary>>
	}

	declare interface ASPxClientValidationSummaryVisibilityChangedEventHandler<S> {
		(source: S, e: ASPxClientValidationSummaryVisibilityChangedEventArgs): void
	}

	declare interface ASPxClientValidationSummaryVisibilityChangedEventArgs {
		visible: boolean
	}

	declare interface ASPxClientGaugeControl {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientGaugeControl>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientGaugeControl>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientGaugeControl>>,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface ASPxClientGridBase {
		
	}

	declare interface ASPxClientGridColumnBase {
		
	}

	declare interface ASPxClientGridLookup {
		RowClick: ASPxClientEvent<ASPxClientGridViewRowClickEventHandler<ASPxClientGridLookup>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientGridLookup>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientGridLookup>>,
		GetGridView(): ASPxClientGridView,
		ConfirmCurrentSelection(): void,
		RollbackToLastConfirmedSelection(): void
	}

	declare interface ASPxClientCardView {
		batchEditApi: ASPxClientCardViewBatchEditApi,
		CustomButtonClick: ASPxClientEvent<ASPxClientCardViewCustomButtonEventHandler<ASPxClientCardView>>,
		SelectionChanged: ASPxClientEvent<ASPxClientCardViewSelectionEventHandler<ASPxClientCardView>>,
		ColumnSorting: ASPxClientEvent<ASPxClientCardViewColumnCancelEventHandler<ASPxClientCardView>>,
		BatchEditStartEditing: ASPxClientEvent<ASPxClientCardViewBatchEditStartEditingEventHandler<ASPxClientCardView>>,
		BatchEditEndEditing: ASPxClientEvent<ASPxClientCardViewBatchEditEndEditingEventHandler<ASPxClientCardView>>,
		BatchEditConfirmShowing: ASPxClientEvent<ASPxClientCardViewBatchEditConfirmShowingEventHandler<ASPxClientCardView>>,
		BatchEditTemplateCellFocused: ASPxClientEvent<ASPxClientCardViewBatchEditTemplateCellFocusedEventHandler<ASPxClientCardView>>,
		BatchEditCardValidating: ASPxClientEvent<ASPxClientCardViewBatchEditCardValidatingEventHandler<ASPxClientCardView>>,
		BatchEditChangesSaving: ASPxClientEvent<ASPxClientCardViewBatchEditChangesSavingEventHandler<ASPxClientCardView>>,
		BatchEditChangesCanceling: ASPxClientEvent<ASPxClientCardViewBatchEditChangesCancelingEventHandler<ASPxClientCardView>>,
		BatchEditCardInserting: ASPxClientEvent<ASPxClientCardViewBatchEditCardInsertingEventHandler<ASPxClientCardView>>,
		BatchEditCardDeleting: ASPxClientEvent<ASPxClientCardViewBatchEditCardDeletingEventHandler<ASPxClientCardView>>,
		CardClick: ASPxClientEvent<ASPxClientCardViewCardClickEventHandler<ASPxClientCardView>>,
		CardDblClick: ASPxClientEvent<ASPxClientCardViewCardClickEventHandler<ASPxClientCardView>>,
		FocusedCardChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientCardView>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientCardView>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientCardView>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientCardView>>,
		CustomizationWindowCloseUp: ASPxClientEvent<ASPxClientEventHandler<ASPxClientCardView>>,
		FocusEditor(column: ASPxClientCardViewColumn): void,
		FocusEditor(columnIndex: number): void,
		FocusEditor(columnFieldNameOrId: string): void,
		SetEditValue(column: ASPxClientCardViewColumn, value: string): void,
		SetEditValue(columnIndex: number, value: string): void,
		SetEditValue(columnFieldNameOrId: string, value: string): void,
		ShowFilterControl(): void,
		CloseFilterControl(): void,
		SetFilterEnabled(isFilterEnabled: boolean): void,
		GetVerticalScrollPosition(): number,
		SetVerticalScrollPosition(position: number): void,
		GetFocusedCell(): ASPxClientCardViewCellInfo,
		SetFocusedCell(cardVisibleIndex: number, columnIndex: number): void,
		SortBy(column: ASPxClientCardViewColumn): void,
		SortBy(columnIndex: number): void,
		SortBy(columnFieldNameOrId: string): void,
		SortBy(column: ASPxClientCardViewColumn, sortOrder: string): void,
		SortBy(columnIndex: number, sortOrder: string): void,
		SortBy(columnFieldNameOrId: string, sortOrder: string): void,
		SortBy(column: ASPxClientCardViewColumn, sortOrder: string, reset: boolean): void,
		SortBy(columnIndex: number, sortOrder: string, reset: boolean): void,
		SortBy(columnFieldNameOrId: string, sortOrder: string, reset: boolean): void,
		SortBy(
		column: ASPxClientCardViewColumn, sortOrder: string, reset: boolean, sortIndex: number
	): void,
		SortBy(
		columnIndex: number, sortOrder: string, reset: boolean, sortIndex: number
	): void,
		SortBy(
		columnFieldNameOrId: string, sortOrder: string, reset: boolean, sortIndex: number
	): void,
		MoveColumn(column: ASPxClientCardViewColumn): void,
		MoveColumn(columnIndex: number): void,
		MoveColumn(columnFieldNameOrId: string): void,
		MoveColumn(column: ASPxClientCardViewColumn, moveToColumnVisibleIndex: number): void,
		MoveColumn(columnIndex: number, moveToColumnVisibleIndex: number): void,
		MoveColumn(columnFieldNameOrId: string, moveToColumnVisibleIndex: number): void,
		MoveColumn(
		column: ASPxClientCardViewColumn, moveToColumnVisibleIndex: number, moveBefore: boolean
	): void,
		MoveColumn(
		columnIndex: number, moveToColumnVisibleIndex: number, moveBefore: boolean
	): void,
		MoveColumn(
		columnFieldNameOrId: string, moveToColumnVisibleIndex: number, moveBefore: boolean
	): void,
		GetCardKey(visibleIndex: number): string,
		StartEditCard(visibleIndex: number): void,
		StartEditCardByKey(key: Object): void,
		IsNewCardEditing(): boolean,
		AddNewCard(): void,
		DeleteCard(visibleIndex: number): void,
		DeleteCardByKey(key: Object): void,
		GetFocusedCardIndex(): number,
		SetFocusedCardIndex(visibleIndex: number): void,
		SelectCards(): void,
		SelectCards(visibleIndex: number): void,
		SelectCards(visibleIndices: number[]): void,
		SelectCards(visibleIndices: number[], selected: boolean): void,
		SelectCards(visibleIndex: number, selected?: boolean): void,
		SelectCardsByKey(keys: Object[], selected?: boolean): void,
		SelectCardsByKey(key: Object, selected?: boolean): void,
		SelectCardsByKey(keys: Object[]): void,
		SelectCardsByKey(key: Object): void,
		UnselectCardsByKey(keys: Object[]): void,
		UnselectCardsByKey(key: Object): void,
		UnselectCards(): void,
		UnselectCards(visibleIndices: number[]): void,
		UnselectCards(visibleIndex: number): void,
		UnselectFilteredCards(): void,
		SelectCardOnPage(visibleIndex: number): void,
		SelectCardOnPage(visibleIndex: number, selected?: boolean): void,
		UnselectCardOnPage(visibleIndex: number): void,
		SelectAllCardsOnPage(): void,
		SelectAllCardsOnPage(selected: boolean): void,
		UnselectAllCardsOnPage(): void,
		GetSelectedCardCount(): number,
		IsCardSelectedOnPage(visibleIndex: number): boolean,
		ApplySearchPanelFilter(value: string): void,
		ApplyFilter(filterExpression: string): void,
		ClearFilter(): void,
		GetPopupEditForm(): ASPxClientPopupControl,
		Focus(): void,
		PerformCallback(args: string): void,
		GotoPage(pageIndex: number): void,
		GetPageIndex(): number,
		GetPageCount(): number,
		NextPage(): void,
		PrevPage(): void,
		GetTopVisibleIndex(): number,
		IsEditing(): boolean,
		UpdateEdit(): void,
		CancelEdit(): void,
		Refresh(): void,
		IsCustomizationWindowVisible(): boolean,
		ShowCustomizationWindow(): void,
		ShowCustomizationWindow(showAtElement?: Object): void,
		HideCustomizationWindow(): void,
		GetColumnCount(): number,
		GetSelectedFieldValues(fieldNames: string, onCallback: ASPxClientCardViewValuesCallback): void,
		GetSelectedKeysOnPage(): Object[],
		GetValuesOnCustomCallback(args: string, onCallback: ASPxClientCardViewValuesCallback): void,
		GetCardValues(
		visibleIndex: number, fieldNames: string, onCallback: ASPxClientCardViewValuesCallback
	): void,
		GetPageCardValues(fieldNames: string, onCallback: ASPxClientCardViewValuesCallback): void,
		GetVisibleCardsOnPage(): number,
		GetColumn(columnIndex: number): ASPxClientCardViewColumn,
		GetColumnById(columnId: string): ASPxClientCardViewColumn,
		GetColumnByField(columnFieldName: string): ASPxClientCardViewColumn,
		GetEditor(column: ASPxClientCardViewColumn): ASPxClientEdit,
		GetEditor(columnIndex: number): ASPxClientEdit,
		GetEditor(columnFieldNameOrId: string): ASPxClientEdit,
		GetEditValue(column: ASPxClientCardViewColumn): string,
		GetEditValue(columnIndex: number): string,
		GetEditValue(columnFieldNameOrId: string): string
	}

	declare interface ASPxClientCardViewColumn {
		name: string,
		index: number,
		fieldName: string,
		visible: boolean
	}

	declare interface ASPxClientCardViewValuesCallback {
		(result: Object): void
	}

	declare interface ASPxClientCardViewColumnCancelEventHandler<S> {
		(source: S, e: ASPxClientCardViewColumnCancelEventArgs): void
	}

	declare interface ASPxClientCardViewColumnCancelEventArgs {
		column: ASPxClientCardViewColumn
	}

	declare interface ASPxClientCardViewCardClickEventHandler<S> {
		(source: S, e: ASPxClientCardViewCardClickEventArgs): void
	}

	declare interface ASPxClientCardViewCardClickEventArgs {
		visibleIndex: number,
		htmlEvent: Object
	}

	declare interface ASPxClientCardViewCustomButtonEventHandler<S> {
		(source: S, e: ASPxClientCardViewCustomButtonEventArgs): void
	}

	declare interface ASPxClientCardViewCustomButtonEventArgs {
		visibleIndex: number,
		buttonID: string
	}

	declare interface ASPxClientCardViewSelectionEventHandler<S> {
		(source: S, e: ASPxClientCardViewSelectionEventArgs): void
	}

	declare interface ASPxClientCardViewSelectionEventArgs {
		visibleIndex: number,
		isSelected: boolean,
		isAllRecordsOnPage: boolean,
		isChangedOnServer: boolean
	}

	declare interface ASPxClientCardViewBatchEditStartEditingEventHandler<S> {
		(source: S, e: ASPxClientCardViewBatchEditStartEditingEventArgs): void
	}

	declare interface ASPxClientCardViewBatchEditStartEditingEventArgs {
		visibleIndex: number,
		focusedColumn: ASPxClientCardViewColumn,
		cardValues: Object
	}

	declare interface ASPxClientCardViewBatchEditEndEditingEventHandler<S> {
		(source: S, e: ASPxClientCardViewBatchEditEndEditingEventArgs): void
	}

	declare interface ASPxClientCardViewBatchEditEndEditingEventArgs {
		visibleIndex: number,
		cardValues: Object
	}

	declare interface ASPxClientCardViewBatchEditCardValidatingEventHandler<S> {
		(source: S, e: ASPxClientCardViewBatchEditCardValidatingEventArgs): void
	}

	declare interface ASPxClientCardViewBatchEditCardValidatingEventArgs {
		visibleIndex: number,
		validationInfo: Object
	}

	declare interface ASPxClientCardViewBatchEditConfirmShowingEventHandler<S> {
		(source: S, e: ASPxClientCardViewBatchEditConfirmShowingEventArgs): void
	}

	declare interface ASPxClientCardViewBatchEditConfirmShowingEventArgs {
		requestTriggerID: string
	}

	declare interface ASPxClientCardViewBatchEditTemplateCellFocusedEventHandler<S> {
		(source: S, e: ASPxClientCardViewBatchEditTemplateCellFocusedEventArgs): void
	}

	declare interface ASPxClientCardViewBatchEditTemplateCellFocusedEventArgs {
		column: ASPxClientCardViewColumn,
		handled: boolean
	}

	declare interface ASPxClientCardViewBatchEditChangesSavingEventHandler<S> {
		(source: S, e: ASPxClientCardViewBatchEditChangesSavingEventArgs): void
	}

	declare interface ASPxClientCardViewBatchEditChangesSavingEventArgs {
		insertedValues: Object,
		deletedValues: Object,
		updatedValues: Object
	}

	declare interface ASPxClientCardViewBatchEditChangesCancelingEventHandler<S> {
		(source: S, e: ASPxClientCardViewBatchEditChangesCancelingEventArgs): void
	}

	declare interface ASPxClientCardViewBatchEditChangesCancelingEventArgs {
		insertedValues: Object,
		deletedValues: Object,
		updatedValues: Object
	}

	declare interface ASPxClientCardViewBatchEditCardInsertingEventHandler<S> {
		(source: S, e: ASPxClientCardViewBatchEditCardInsertingEventArgs): void
	}

	declare interface ASPxClientCardViewBatchEditCardInsertingEventArgs {
		visibleIndex: number
	}

	declare interface ASPxClientCardViewBatchEditCardDeletingEventHandler<S> {
		(source: S, e: ASPxClientCardViewBatchEditCardDeletingEventArgs): void
	}

	declare interface ASPxClientCardViewBatchEditCardDeletingEventArgs {
		visibleIndex: number,
		cardValues: Object
	}

	declare interface ASPxClientCardViewBatchEditApi {
		ValidateCards(): boolean,
		ValidateCard(visibleIndex: number): boolean,
		GetCardVisibleIndices(includeDeleted: boolean): number[],
		GetDeletedCardIndices(): number[],
		GetInsertedCardIndices(): number[],
		IsDeletedCard(visibleIndex: number): boolean,
		IsNewCard(visibleIndex: number): boolean,
		MoveFocusBackward(): boolean,
		MoveFocusForward(): boolean,
		SetCellValue(visibleIndex: number, columnFieldNameOrId: string, value: Object): void,
		SetCellValue(
		visibleIndex: number, columnFieldNameOrId: string, value: Object, displayText: string, cancelCellHighlighting?: boolean
	): void,
		GetCellValue(visibleIndex: number, columnFieldNameOrId: string, initial?: boolean): Object,
		GetEditCellInfo(): ASPxClientCardViewCellInfo,
		HasChanges(): boolean,
		HasChanges(visibleIndex: number): boolean,
		HasChanges(visibleIndex: number, columnFieldNameOrId: string): boolean,
		ResetChanges(visibleIndex: number): void,
		ResetChanges(visibleIndex: number, columnIndex: number): void,
		StartEdit(visibleIndex: number, columnIndex: number): void,
		EndEdit(): void
	}

	declare interface ASPxClientCardViewCellInfo {
		cardVisibleIndex: number,
		column: ASPxClientCardViewColumn
	}

	declare interface ASPxClientGridView {
		batchEditApi: ASPxClientGridViewBatchEditApi,
		CustomButtonClick: ASPxClientEvent<ASPxClientGridViewCustomButtonEventHandler<ASPxClientGridView>>,
		SelectionChanged: ASPxClientEvent<ASPxClientGridViewSelectionEventHandler<ASPxClientGridView>>,
		ColumnSorting: ASPxClientEvent<ASPxClientGridViewColumnCancelEventHandler<ASPxClientGridView>>,
		FocusedRowChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientGridView>>,
		ColumnGrouping: ASPxClientEvent<ASPxClientGridViewColumnCancelEventHandler<ASPxClientGridView>>,
		ColumnStartDragging: ASPxClientEvent<ASPxClientGridViewColumnCancelEventHandler<ASPxClientGridView>>,
		ColumnResizing: ASPxClientEvent<ASPxClientGridViewColumnCancelEventHandler<ASPxClientGridView>>,
		ColumnResized: ASPxClientEvent<ASPxClientGridViewColumnProcessingModeEventHandler<ASPxClientGridView>>,
		ColumnMoving: ASPxClientEvent<ASPxClientGridViewColumnMovingEventHandler<ASPxClientGridView>>,
		RowExpanding: ASPxClientEvent<ASPxClientGridViewRowCancelEventHandler<ASPxClientGridView>>,
		RowCollapsing: ASPxClientEvent<ASPxClientGridViewRowCancelEventHandler<ASPxClientGridView>>,
		DetailRowExpanding: ASPxClientEvent<ASPxClientGridViewRowCancelEventHandler<ASPxClientGridView>>,
		DetailRowCollapsing: ASPxClientEvent<ASPxClientGridViewRowCancelEventHandler<ASPxClientGridView>>,
		RowClick: ASPxClientEvent<ASPxClientGridViewRowClickEventHandler<ASPxClientGridView>>,
		RowDblClick: ASPxClientEvent<ASPxClientGridViewRowClickEventHandler<ASPxClientGridView>>,
		ContextMenu: ASPxClientEvent<ASPxClientGridViewContextMenuEventHandler<ASPxClientGridView>>,
		ContextMenuItemClick: ASPxClientEvent<ASPxClientGridViewContextMenuItemClickEventHandler<ASPxClientGridView>>,
		BatchEditRowValidating: ASPxClientEvent<ASPxClientGridViewBatchEditRowValidatingEventHandler<ASPxClientGridView>>,
		BatchEditConfirmShowing: ASPxClientEvent<ASPxClientGridViewBatchEditConfirmShowingEventHandler<ASPxClientGridView>>,
		BatchEditStartEditing: ASPxClientEvent<ASPxClientGridViewBatchEditStartEditingEventHandler<ASPxClientGridView>>,
		BatchEditEndEditing: ASPxClientEvent<ASPxClientGridViewBatchEditEndEditingEventHandler<ASPxClientGridView>>,
		BatchEditTemplateCellFocused: ASPxClientEvent<ASPxClientGridViewBatchEditTemplateCellFocusedEventHandler<ASPxClientGridView>>,
		BatchEditChangesSaving: ASPxClientEvent<ASPxClientGridViewBatchEditChangesSavingEventHandler<ASPxClientGridView>>,
		BatchEditChangesCanceling: ASPxClientEvent<ASPxClientGridViewBatchEditChangesCancelingEventHandler<ASPxClientGridView>>,
		BatchEditRowInserting: ASPxClientEvent<ASPxClientGridViewBatchEditRowInsertingEventHandler<ASPxClientGridView>>,
		BatchEditRowDeleting: ASPxClientEvent<ASPxClientGridViewBatchEditRowDeletingEventHandler<ASPxClientGridView>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientGridView>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientGridView>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientGridView>>,
		CustomizationWindowCloseUp: ASPxClientEvent<ASPxClientEventHandler<ASPxClientGridView>>,
		SelectRowOnPage(visibleIndex: number, selected?: boolean): void,
		UnselectRowOnPage(visibleIndex: number): void,
		SelectAllRowsOnPage(): void,
		SelectAllRowsOnPage(selected: boolean): void,
		UnselectAllRowsOnPage(): void,
		GetSelectedRowCount(): number,
		IsRowSelectedOnPage(visibleIndex: number): boolean,
		IsGroupRow(visibleIndex: number): boolean,
		IsDataRow(visibleIndex: number): boolean,
		IsGroupRowExpanded(visibleIndex: number): boolean,
		GetVertScrollPos(): number,
		GetHorzScrollPos(): number,
		GetHorizontalScrollPosition(): number,
		SetVertScrollPos(position: number): void,
		SetHorzScrollPos(position: number): void,
		SetHorizontalScrollPosition(position: number): void,
		ApplyOnClickRowFilter(): void,
		GetAutoFilterEditor(column: ASPxClientGridViewColumn): Object,
		GetAutoFilterEditor(columnIndex: number): Object,
		GetAutoFilterEditor(columnFieldNameOrId: string): Object,
		AutoFilterByColumn(column: ASPxClientGridViewColumn, val: string): void,
		AutoFilterByColumn(columnIndex: number, val: string): void,
		AutoFilterByColumn(columnFieldNameOrId: string, val: string): void,
		ApplySearchPanelFilter(value: string): void,
		ApplyFilter(filterExpression: string): void,
		ClearFilter(): void,
		GetPopupEditForm(): ASPxClientPopupControl,
		Focus(): void,
		PerformCallback(args: string): void,
		GotoPage(pageIndex: number): void,
		GetPageIndex(): number,
		GetPageCount(): number,
		NextPage(): void,
		PrevPage(): void,
		GetTopVisibleIndex(): number,
		IsEditing(): boolean,
		UpdateEdit(): void,
		CancelEdit(): void,
		Refresh(): void,
		IsCustomizationWindowVisible(): boolean,
		ShowCustomizationWindow(): void,
		ShowCustomizationWindow(showAtElement?: Object): void,
		HideCustomizationWindow(): void,
		GetColumnsCount(): number,
		GetColumnCount(): number,
		GetSelectedFieldValues(fieldNames: string, onCallback: ASPxClientGridViewValuesCallback): void,
		GetSelectedKeysOnPage(): Object[],
		GetValuesOnCustomCallback(args: string, onCallback: ASPxClientGridViewValuesCallback): void,
		GetRowValues(
		visibleIndex: number, fieldNames: string, onCallback: ASPxClientGridViewValuesCallback
	): void,
		GetPageRowValues(fieldNames: string, onCallback: ASPxClientGridViewValuesCallback): void,
		GetVisibleRowsOnPage(): number,
		GetColumn(columnIndex: number): ASPxClientGridViewColumn,
		GetColumnById(columnId: string): ASPxClientGridViewColumn,
		GetColumnByField(columnFieldName: string): ASPxClientGridViewColumn,
		GetEditor(column: ASPxClientGridViewColumn): ASPxClientEdit,
		GetEditor(columnIndex: number): ASPxClientEdit,
		GetEditor(columnFieldNameOrId: string): ASPxClientEdit,
		GetEditValue(column: ASPxClientGridViewColumn): string,
		GetEditValue(columnIndex: number): string,
		GetEditValue(columnFieldNameOrId: string): string,
		FocusEditor(column: ASPxClientGridViewColumn): void,
		FocusEditor(columnIndex: number): void,
		FocusEditor(columnFieldNameOrId: string): void,
		SetEditValue(column: ASPxClientGridViewColumn, value: string): void,
		SetEditValue(columnIndex: number, value: string): void,
		SetEditValue(columnFieldNameOrId: string, value: string): void,
		ShowFilterControl(): void,
		CloseFilterControl(): void,
		SetFilterEnabled(isFilterEnabled: boolean): void,
		GetVerticalScrollPosition(): number,
		SetVerticalScrollPosition(position: number): void,
		GetFocusedCell(): ASPxClientGridViewCellInfo,
		SetFocusedCell(rowVisibleIndex: number, columnIndex: number): void,
		SortBy(column: ASPxClientGridViewColumn): void,
		SortBy(columnIndex: number): void,
		SortBy(columnFieldNameOrId: string): void,
		SortBy(column: ASPxClientGridViewColumn, sortOrder: string): void,
		SortBy(columnIndex: number, sortOrder: string): void,
		SortBy(columnFieldNameOrId: string, sortOrder: string): void,
		SortBy(column: ASPxClientGridViewColumn, sortOrder: string, reset: boolean): void,
		SortBy(columnIndex: number, sortOrder: string, reset: boolean): void,
		SortBy(columnFieldNameOrId: string, sortOrder: string, reset: boolean): void,
		SortBy(
		column: ASPxClientGridViewColumn, sortOrder: string, reset: boolean, sortIndex: number
	): void,
		SortBy(
		columnIndex: number, sortOrder: string, reset: boolean, sortIndex: number
	): void,
		SortBy(
		columnFieldNameOrId: string, sortOrder: string, reset: boolean, sortIndex: number
	): void,
		MoveColumn(column: ASPxClientGridViewColumn): void,
		MoveColumn(columnIndex: number): void,
		MoveColumn(columnFieldNameOrId: string): void,
		MoveColumn(column: ASPxClientGridViewColumn, moveToColumnVisibleIndex: number): void,
		MoveColumn(columnIndex: number, moveToColumnVisibleIndex: number): void,
		MoveColumn(columnFieldNameOrId: string, moveToColumnVisibleIndex: number): void,
		MoveColumn(
		column: ASPxClientGridViewColumn, moveToColumnVisibleIndex: number, moveBefore: boolean
	): void,
		MoveColumn(
		columnIndex: number, moveToColumnVisibleIndex: number, moveBefore: boolean
	): void,
		MoveColumn(
		columnFieldNameOrId: string, moveToColumnVisibleIndex: number, moveBefore: boolean
	): void,
		MoveColumn(
		column: ASPxClientGridViewColumn, moveToColumnVisibleIndex: number, moveBefore: boolean, moveToGroup: boolean
	): void,
		MoveColumn(
		columnIndex: number, moveToColumnVisibleIndex: number, moveBefore: boolean, moveToGroup: boolean
	): void,
		MoveColumn(
		columnFieldNameOrId: string, moveToColumnVisibleIndex: number, moveBefore: boolean, moveToGroup: boolean
	): void,
		MoveColumn(
		column: ASPxClientGridViewColumn, moveToColumnVisibleIndex: number, moveBefore: boolean, moveToGroup: boolean, moveFromGroup: boolean
	): void,
		MoveColumn(
		columnIndex: number, moveToColumnVisibleIndex: number, moveBefore: boolean, moveToGroup: boolean, moveFromGroup: boolean
	): void,
		MoveColumn(
		columnFieldNameOrId: string, moveToColumnVisibleIndex: number, moveBefore: boolean, moveToGroup: boolean, moveFromGroup: boolean
	): void,
		GroupBy(column: ASPxClientGridViewColumn): void,
		GroupBy(columnIndex: number): void,
		GroupBy(columnFieldNameOrId: string): void,
		GroupBy(column: ASPxClientGridViewColumn, groupIndex: number): void,
		GroupBy(columnIndex: number, groupIndex: number): void,
		GroupBy(columnFieldNameOrId: string, groupIndex: number): void,
		GroupBy(column: ASPxClientGridViewColumn, groupIndex: number, sortOrder: string): void,
		GroupBy(columnIndex: number, groupIndex: number, sortOrder: string): void,
		GroupBy(columnFieldNameOrId: string, groupIndex: number, sortOrder: string): void,
		UnGroup(column: ASPxClientGridViewColumn): void,
		UnGroup(columnIndex: number): void,
		UnGroup(columnFieldNameOrId: string): void,
		ExpandAll(): void,
		CollapseAll(): void,
		ExpandAllDetailRows(): void,
		CollapseAllDetailRows(): void,
		ExpandRow(visibleIndex: number): void,
		ExpandRow(visibleIndex: number, recursive?: boolean): void,
		CollapseRow(visibleIndex: number): void,
		CollapseRow(visibleIndex: number, recursive?: boolean): void,
		MakeRowVisible(visibleIndex: number): void,
		ExpandDetailRow(visibleIndex: number): void,
		CollapseDetailRow(visibleIndex: number): void,
		GetRowKey(visibleIndex: number): string,
		StartEditRow(visibleIndex: number): void,
		StartEditRowByKey(key: Object): void,
		IsNewRowEditing(): boolean,
		AddNewRow(): void,
		DeleteRow(visibleIndex: number): void,
		DeleteRowByKey(key: Object): void,
		GetFocusedRowIndex(): number,
		SetFocusedRowIndex(visibleIndex: number): void,
		SelectRows(): void,
		SelectRows(visibleIndex: number): void,
		SelectRows(visibleIndices: number[]): void,
		SelectRows(visibleIndices: number[], selected: boolean): void,
		SelectRows(visibleIndex: number, selected?: boolean): void,
		SelectRowsByKey(keys: Object[], selected?: boolean): void,
		SelectRowsByKey(key: Object, selected?: boolean): void,
		SelectRowsByKey(keys: Object[]): void,
		SelectRowsByKey(key: Object): void,
		UnselectRowsByKey(keys: Object[]): void,
		UnselectRowsByKey(key: Object): void,
		UnselectRows(): void,
		UnselectRows(visibleIndices: number[]): void,
		UnselectRows(visibleIndex: number): void,
		UnselectFilteredRows(): void,
		SelectRowOnPage(visibleIndex: number): void
	}

	declare interface ASPxClientGridViewColumn {
		id: string,
		name: string,
		index: number,
		fieldName: string,
		visible: boolean
	}

	declare interface ASPxClientGridViewValuesCallback {
		(result: Object): void
	}

	declare interface ASPxClientGridViewColumnCancelEventHandler<S> {
		(source: S, e: ASPxClientGridViewColumnCancelEventArgs): void
	}

	declare interface ASPxClientGridViewColumnCancelEventArgs {
		column: ASPxClientGridViewColumn
	}

	declare interface ASPxClientGridViewColumnProcessingModeEventHandler<S> {
		(source: S, e: ASPxClientGridViewColumnProcessingModeEventArgs): void
	}

	declare interface ASPxClientGridViewColumnProcessingModeEventArgs {
		column: ASPxClientGridViewColumn
	}

	declare interface ASPxClientGridViewRowCancelEventHandler<S> {
		(source: S, e: ASPxClientGridViewRowCancelEventArgs): void
	}

	declare interface ASPxClientGridViewRowCancelEventArgs {
		visibleIndex: number
	}

	declare interface ASPxClientGridViewSelectionEventHandler<S> {
		(source: S, e: ASPxClientGridViewSelectionEventArgs): void
	}

	declare interface ASPxClientGridViewSelectionEventArgs {
		visibleIndex: number,
		isSelected: boolean,
		isAllRecordsOnPage: boolean,
		isChangedOnServer: boolean
	}

	declare interface ASPxClientGridViewRowClickEventHandler<S> {
		(source: S, e: ASPxClientGridViewRowClickEventArgs): void
	}

	declare interface ASPxClientGridViewRowClickEventArgs {
		htmlEvent: Object
	}

	declare interface ASPxClientGridViewContextMenuEventHandler<S> {
		(source: S, e: ASPxClientGridViewContextMenuEventArgs): void
	}

	declare interface ASPxClientGridViewContextMenuEventArgs {
		objectType: string,
		index: number,
		htmlEvent: Object,
		menu: Object,
		showBrowserMenu: boolean
	}

	declare interface ASPxClientGridViewContextMenuItemClickEventHandler<S> {
		(source: S, e: ASPxClientGridViewContextMenuItemClickEventArgs): void
	}

	declare interface ASPxClientGridViewContextMenuItemClickEventArgs {
		item: ASPxClientMenuItem,
		objectType: string,
		elementIndex: number,
		usePostBack: boolean,
		handled: boolean
	}

	declare interface ASPxClientGridViewCustomButtonEventHandler<S> {
		(source: S, e: ASPxClientGridViewCustomButtonEventArgs): void
	}

	declare interface ASPxClientGridViewCustomButtonEventArgs {
		visibleIndex: number,
		buttonID: string
	}

	declare interface ASPxClientGridViewColumnMovingEventHandler<S> {
		(source: S, e: ASPxClientGridViewColumnMovingEventArgs): void
	}

	declare interface ASPxClientGridViewColumnMovingEventArgs {
		allow: boolean,
		sourceColumn: ASPxClientGridViewColumn,
		destinationColumn: ASPxClientGridViewColumn,
		isDropBefore: boolean,
		isGroupPanel: boolean
	}

	declare interface ASPxClientGridViewBatchEditConfirmShowingEventHandler<S> {
		(source: S, e: ASPxClientGridViewBatchEditConfirmShowingEventArgs): void
	}

	declare interface ASPxClientGridViewBatchEditConfirmShowingEventArgs {
		requestTriggerID: string
	}

	declare interface ASPxClientGridViewBatchEditStartEditingEventHandler<S> {
		(source: S, e: ASPxClientGridViewBatchEditStartEditingEventArgs): void
	}

	declare interface ASPxClientGridViewBatchEditStartEditingEventArgs {
		visibleIndex: number,
		focusedColumn: ASPxClientGridViewColumn,
		rowValues: Object
	}

	declare interface ASPxClientGridViewBatchEditEndEditingEventHandler<S> {
		(source: S, e: ASPxClientGridViewBatchEditEndEditingEventArgs): void
	}

	declare interface ASPxClientGridViewBatchEditEndEditingEventArgs {
		visibleIndex: number,
		rowValues: Object
	}

	declare interface ASPxClientGridViewBatchEditRowValidatingEventHandler<S> {
		(source: S, e: ASPxClientGridViewBatchEditRowValidatingEventArgs): void
	}

	declare interface ASPxClientGridViewBatchEditRowValidatingEventArgs {
		visibleIndex: number,
		validationInfo: Object
	}

	declare interface ASPxClientGridViewBatchEditTemplateCellFocusedEventHandler<S> {
		(source: S, e: ASPxClientGridViewBatchEditTemplateCellFocusedEventArgs): void
	}

	declare interface ASPxClientGridViewBatchEditTemplateCellFocusedEventArgs {
		column: ASPxClientGridViewColumn,
		handled: boolean
	}

	declare interface ASPxClientGridViewBatchEditChangesSavingEventHandler<S> {
		(source: S, e: ASPxClientGridViewBatchEditChangesSavingEventArgs): void
	}

	declare interface ASPxClientGridViewBatchEditChangesSavingEventArgs {
		insertedValues: Object,
		deletedValues: Object,
		updatedValues: Object
	}

	declare interface ASPxClientGridViewBatchEditChangesCancelingEventHandler<S> {
		(source: S, e: ASPxClientGridViewBatchEditChangesCancelingEventArgs): void
	}

	declare interface ASPxClientGridViewBatchEditChangesCancelingEventArgs {
		insertedValues: Object,
		deletedValues: Object,
		updatedValues: Object
	}

	declare interface ASPxClientGridViewBatchEditRowInsertingEventHandler<S> {
		(source: S, e: ASPxClientGridViewBatchEditRowInsertingEventArgs): void
	}

	declare interface ASPxClientGridViewBatchEditRowInsertingEventArgs {
		visibleIndex: number
	}

	declare interface ASPxClientGridViewBatchEditRowDeletingEventHandler<S> {
		(source: S, e: ASPxClientGridViewBatchEditRowDeletingEventArgs): void
	}

	declare interface ASPxClientGridViewBatchEditRowDeletingEventArgs {
		visibleIndex: number,
		rowValues: Object
	}

	declare interface ASPxClientGridViewCellInfo {
		rowVisibleIndex: number,
		column: ASPxClientGridViewColumn
	}

	declare interface ASPxClientGridViewBatchEditApi {
		ValidateRows(): boolean,
		ValidateRow(visibleIndex: number): boolean,
		GetRowVisibleIndices(includeDeleted: boolean): number[],
		GetDeletedRowIndices(): number[],
		GetInsertedRowIndices(): number[],
		IsDeletedRow(visibleIndex: number): boolean,
		IsNewRow(visibleIndex: number): boolean,
		MoveFocusBackward(): boolean,
		MoveFocusForward(): boolean,
		SetCellValue(visibleIndex: number, columnFieldNameOrId: string, value: Object): void,
		SetCellValue(
		visibleIndex: number, columnFieldNameOrId: string, value: Object, displayText: string, cancelCellHighlighting?: boolean
	): void,
		GetCellValue(visibleIndex: number, columnFieldNameOrId: string, initial?: boolean): Object,
		GetEditCellInfo(): ASPxClientGridViewCellInfo,
		HasChanges(): boolean,
		HasChanges(visibleIndex: number): boolean,
		HasChanges(visibleIndex: number, columnFieldNameOrId: string): boolean,
		ResetChanges(visibleIndex: number): void,
		ResetChanges(visibleIndex: number, columnIndex: number): void,
		StartEdit(visibleIndex: number, columnIndex: number): void,
		EndEdit(): void
	}

	declare interface ASPxClientVerticalGrid {
		batchEditApi: ASPxClientVerticalGridBatchEditApi,
		CustomButtonClick: ASPxClientEvent<ASPxClientVerticalGridCustomButtonEventHandler<ASPxClientVerticalGrid>>,
		SelectionChanged: ASPxClientEvent<ASPxClientVerticalGridSelectionEventHandler<ASPxClientVerticalGrid>>,
		BatchEditStartEditing: ASPxClientEvent<ASPxClientVerticalGridBatchEditStartEditingEventHandler<ASPxClientVerticalGrid>>,
		BatchEditEndEditing: ASPxClientEvent<ASPxClientVerticalGridBatchEditEndEditingEventHandler<ASPxClientVerticalGrid>>,
		BatchEditConfirmShowing: ASPxClientEvent<ASPxClientVerticalGridBatchEditConfirmShowingEventHandler<ASPxClientVerticalGrid>>,
		BatchEditTemplateCellFocused: ASPxClientEvent<ASPxClientVerticalGridBatchEditTemplateCellFocusedEventHandler<ASPxClientVerticalGrid>>,
		BatchEditChangesSaving: ASPxClientEvent<ASPxClientVerticalGridBatchEditChangesSavingEventHandler<ASPxClientVerticalGrid>>,
		BatchEditChangesCanceling: ASPxClientEvent<ASPxClientVerticalGridBatchEditChangesCancelingEventHandler<ASPxClientVerticalGrid>>,
		BatchEditRecordInserting: ASPxClientEvent<ASPxClientVerticalGridBatchEditRecordInsertingEventHandler<ASPxClientVerticalGrid>>,
		BatchEditRecordDeleting: ASPxClientEvent<ASPxClientVerticalGridBatchEditRecordDeletingEventHandler<ASPxClientVerticalGrid>>,
		BatchEditRecordValidating: ASPxClientEvent<ASPxClientVerticalGridBatchEditRecordValidatingEventHandler<ASPxClientVerticalGrid>>,
		RowSorting: ASPxClientEvent<ASPxClientVerticalGridRowCancelEventHandler<ASPxClientVerticalGrid>>,
		RowExpandedChanging: ASPxClientEvent<ASPxClientVerticalGridRowExpandingEventHandler<ASPxClientVerticalGrid>>,
		RowExpandedChanged: ASPxClientEvent<ASPxClientVerticalGridRowExpandedEventHandler<ASPxClientVerticalGrid>>,
		RecordClick: ASPxClientEvent<ASPxClientVerticalGridRecordClickEventHandler<ASPxClientVerticalGrid>>,
		RecordDblClick: ASPxClientEvent<ASPxClientVerticalGridRecordClickEventHandler<ASPxClientVerticalGrid>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientVerticalGrid>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientVerticalGrid>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientVerticalGrid>>,
		SortBy(row: ASPxClientVerticalGridRow): void,
		SortBy(rowIndex: number): void,
		SortBy(rowFieldNameOrId: string): void,
		SortBy(row: ASPxClientVerticalGridRow, sortOrder: string): void,
		SortBy(rowIndex: number, sortOrder: string): void,
		SortBy(rowFieldNameOrId: string, sortOrder: string): void,
		SortBy(row: ASPxClientVerticalGridRow, sortOrder: string, reset: boolean): void,
		SortBy(rowIndex: number, sortOrder: string, reset: boolean): void,
		SortBy(rowFieldNameOrId: string, sortOrder: string, reset: boolean): void,
		SortBy(
		row: ASPxClientVerticalGridRow, sortOrder: string, reset: boolean, sortIndex: number
	): void,
		SortBy(rowIndex: number, sortOrder: string, reset: boolean, sortIndex: number): void,
		SortBy(
		rowFieldNameOrId: string, sortOrder: string, reset: boolean, sortIndex: number
	): void,
		GetRecordKey(visibleIndex: number): string,
		AddNewRecord(): void,
		DeleteRecord(visibleIndex: number): void,
		DeleteRecordByKey(key: Object): void,
		SelectRecords(): void,
		SelectRecords(visibleIndex: number): void,
		SelectRecords(visibleIndices: number[]): void,
		SelectRecords(visibleIndices: number[], selected: boolean): void,
		SelectRecords(visibleIndex: number, selected?: boolean): void,
		SelectRecordsByKey(keys: Object[], selected?: boolean): void,
		SelectRecordsByKey(key: Object, selected?: boolean): void,
		SelectRecordsByKey(keys: Object[]): void,
		SelectRecordsByKey(key: Object): void,
		UnselectRecords(): void,
		UnselectRecords(visibleIndices: number[]): void,
		UnselectRecords(visibleIndex: number): void,
		UnselectRecordsByKey(keys: Object[]): void,
		UnselectRecordsByKey(key: Object): void,
		UnselectFilteredRecords(): void,
		SelectRecordOnPage(visibleIndex: number): void,
		SelectRecordOnPage(visibleIndex: number, selected?: boolean): void,
		UnselectRecordOnPage(visibleIndex: number): void,
		SelectAllRecordsOnPage(): void,
		SelectAllRecordsOnPage(selected: boolean): void,
		UnselectAllRecordsOnPage(): void,
		GetSelectedRecordCount(): number,
		IsRecordSelectedOnPage(visibleIndex: number): boolean,
		GetRecordValues(
		visibleIndex: number, fieldNames: string, onCallback: ASPxClientVerticalGridValuesCallback
	): void,
		GetPageRecordValues(fieldNames: string, onCallback: ASPxClientVerticalGridValuesCallback): void,
		GetVisibleRecordsOnPage(): number,
		GetRowCount(): number,
		ApplySearchPanelFilter(value: string): void,
		ApplyFilter(filterExpression: string): void,
		ClearFilter(): void,
		Focus(): void,
		PerformCallback(args: string): void,
		GotoPage(pageIndex: number): void,
		GetPageIndex(): number,
		GetPageCount(): number,
		NextPage(): void,
		PrevPage(): void,
		GetTopVisibleIndex(): number,
		UpdateEdit(): void,
		CancelEdit(): void,
		Refresh(): void,
		GetSelectedFieldValues(fieldNames: string, onCallback: ASPxClientVerticalGridValuesCallback): void,
		GetSelectedKeysOnPage(): Object[],
		GetValuesOnCustomCallback(args: string, onCallback: ASPxClientVerticalGridValuesCallback): void,
		GetEditor(row: ASPxClientVerticalGridRow): ASPxClientEdit,
		GetEditor(rowIndex: number): ASPxClientEdit,
		GetEditor(rowFieldNameOrId: string): ASPxClientEdit,
		ShowFilterControl(): void,
		CloseFilterControl(): void,
		SetFilterEnabled(isFilterEnabled: boolean): void,
		GetRow(rowIndex: number): ASPxClientVerticalGridRow,
		GetRowById(rowId: string): ASPxClientVerticalGridRow,
		GetRowByField(rowFieldName: string): ASPxClientVerticalGridRow,
		GetVerticalScrollPosition(): number,
		GetHorizontalScrollPosition(): number,
		SetVerticalScrollPosition(position: number): void,
		SetHorizontalScrollPosition(position: number): void,
		GetRowExpanded(row: ASPxClientVerticalGridRow): boolean,
		GetRowExpanded(rowIndex: number): boolean,
		GetRowExpanded(rowFieldNameOrId: string): boolean,
		SetRowExpanded(row: ASPxClientVerticalGridRow, value: boolean): void,
		SetRowExpanded(rowIndex: number, value: boolean): void,
		SetRowExpanded(rowFieldNameOrId: string, value: boolean): void
	}

	declare interface ASPxClientVerticalGridRow {
		name: string,
		index: number,
		fieldName: string,
		visible: boolean
	}

	declare interface ASPxClientVerticalGridValuesCallback {
		(result: Object): void
	}

	declare interface ASPxClientVerticalGridRowCancelEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridRowCancelEventArgs): void
	}

	declare interface ASPxClientVerticalGridRowCancelEventArgs {
		row: ASPxClientVerticalGridRow
	}

	declare interface ASPxClientVerticalGridRecordClickEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridRecordClickEventArgs): void
	}

	declare interface ASPxClientVerticalGridRecordClickEventArgs {
		visibleIndex: number,
		htmlEvent: Object
	}

	declare interface ASPxClientVerticalGridCustomButtonEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridCustomButtonEventArgs): void
	}

	declare interface ASPxClientVerticalGridCustomButtonEventArgs {
		visibleIndex: number,
		buttonID: string
	}

	declare interface ASPxClientVerticalGridSelectionEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridSelectionEventArgs): void
	}

	declare interface ASPxClientVerticalGridSelectionEventArgs {
		visibleIndex: number,
		isSelected: boolean,
		isAllRecordsOnPage: boolean,
		isChangedOnServer: boolean
	}

	declare interface ASPxClientVerticalGridRowExpandedEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridRowExpandedEventArgs): void
	}

	declare interface ASPxClientVerticalGridRowExpandedEventArgs {
		row: ASPxClientVerticalGridRow
	}

	declare interface ASPxClientVerticalGridRowExpandingEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridRowExpandingEventArgs): void
	}

	declare interface ASPxClientVerticalGridRowExpandingEventArgs {
		cancel: boolean
	}

	declare interface ASPxClientVerticalGridBatchEditStartEditingEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridBatchEditStartEditingEventArgs): void
	}

	declare interface ASPxClientVerticalGridBatchEditStartEditingEventArgs {
		visibleIndex: number,
		focusedRow: ASPxClientVerticalGridRow,
		recordValues: Object
	}

	declare interface ASPxClientVerticalGridBatchEditEndEditingEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridBatchEditEndEditingEventArgs): void
	}

	declare interface ASPxClientVerticalGridBatchEditEndEditingEventArgs {
		visibleIndex: number,
		recordValues: Object
	}

	declare interface ASPxClientVerticalGridBatchEditRecordValidatingEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridBatchEditRecordValidatingEventArgs): void
	}

	declare interface ASPxClientVerticalGridBatchEditRecordValidatingEventArgs {
		visibleIndex: number,
		validationInfo: Object
	}

	declare interface ASPxClientVerticalGridBatchEditConfirmShowingEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridBatchEditConfirmShowingEventArgs): void
	}

	declare interface ASPxClientVerticalGridBatchEditConfirmShowingEventArgs {
		requestTriggerID: string
	}

	declare interface ASPxClientVerticalGridBatchEditTemplateCellFocusedEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridBatchEditTemplateCellFocusedEventArgs): void
	}

	declare interface ASPxClientVerticalGridBatchEditTemplateCellFocusedEventArgs {
		row: ASPxClientVerticalGridRow,
		handled: boolean
	}

	declare interface ASPxClientVerticalGridBatchEditChangesSavingEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridBatchEditChangesSavingEventArgs): void
	}

	declare interface ASPxClientVerticalGridBatchEditChangesSavingEventArgs {
		insertedValues: Object,
		deletedValues: Object,
		updatedValues: Object
	}

	declare interface ASPxClientVerticalGridBatchEditChangesCancelingEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridBatchEditChangesCancelingEventArgs): void
	}

	declare interface ASPxClientVerticalGridBatchEditChangesCancelingEventArgs {
		insertedValues: Object,
		deletedValues: Object,
		updatedValues: Object
	}

	declare interface ASPxClientVerticalGridBatchEditRecordInsertingEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridBatchEditRecordInsertingEventArgs): void
	}

	declare interface ASPxClientVerticalGridBatchEditRecordInsertingEventArgs {
		visibleIndex: number
	}

	declare interface ASPxClientVerticalGridBatchEditRecordDeletingEventHandler<S> {
		(source: S, e: ASPxClientVerticalGridBatchEditRecordDeletingEventArgs): void
	}

	declare interface ASPxClientVerticalGridBatchEditRecordDeletingEventArgs {
		visibleIndex: number,
		recordValues: Object
	}

	declare interface ASPxClientVerticalGridCellInfo {
		row: ASPxClientVerticalGridRow,
		recordVisibleIndex: number
	}

	declare interface ASPxClientVerticalGridBatchEditApi {
		ValidateRecords(): boolean,
		ValidateRecord(visibleIndex: number): boolean,
		GetRecordVisibleIndices(includeDeleted: boolean): number[],
		GetDeletedRecordIndices(): number[],
		GetInsertedRecordIndices(): number[],
		IsDeletedRecord(visibleIndex: number): boolean,
		IsNewRecord(visibleIndex: number): boolean,
		MoveFocusBackward(): boolean,
		MoveFocusForward(): boolean,
		SetCellValue(visibleIndex: number, rowFieldNameOrId: string, value: Object): void,
		SetCellValue(
		visibleIndex: number, rowFieldNameOrId: string, value: Object, displayText: string, cancelCellHighlighting?: boolean
	): void,
		GetCellValue(visibleIndex: number, rowFieldNameOrId: string, initial?: boolean): Object,
		GetEditCellInfo(): ASPxClientVerticalGridCellInfo,
		HasChanges(): boolean,
		HasChanges(visibleIndex: number): boolean,
		HasChanges(visibleIndex: number, rowFieldNameOrId: string): boolean,
		ResetChanges(visibleIndex: number): void,
		ResetChanges(visibleIndex: number, rowIndex: number): void,
		StartEdit(visibleIndex: number, rowIndex: number): void,
		EndEdit(): void
	}

	declare interface ASPxClientHtmlEditorCommandStyleSettings {
		className: string,
		width: string,
		height: string,
		borderWidth: string,
		borderColor: string,
		borderStyle: string,
		marginTop: string,
		marginRight: string,
		marginBottom: string,
		marginLeft: string
	}

	declare interface ASPxClientHtmlEditorCommandArguments {
		selectedElement: Object
	}

	declare interface ASPxClientHtmlEditorInsertImageCommandArguments {
		src: string,
		alt: string,
		useFloat: boolean,
		align: string,
		styleSettings: ASPxClientHtmlEditorCommandStyleSettings
	}

	declare interface ASPxClientHtmlEditorChangeImageCommandArguments {
		
	}

	declare interface ASPxClientHtmlEditorInsertLinkCommandArguments {
		url: string,
		text: string,
		target: string,
		title: string
	}

	declare interface ASPxClientHtmlEditorChangeMediaElementCommandArguments {
		id: string,
		src: string,
		align: string,
		styleSettings: ASPxClientHtmlEditorCommandStyleSettings,
		GetCommandName(): string
	}

	declare interface ASPxClientHtmlEditorChangeHtml5MediaElementCommandArguments {
		autoPlay: boolean,
		loop: boolean,
		showPlayerControls: boolean,
		preloadMode: string
	}

	declare interface ASPxClientHtmlEditorInsertAudioCommandArguments {
		
	}

	declare interface ASPxClientHtmlEditorChangeAudioCommandArguments {
		
	}

	declare interface ASPxClientHtmlEditorInsertVideoCommandArguments {
		posterUrl: string
	}

	declare interface ASPxClientHtmlEditorChangeVideoCommandArguments {
		
	}

	declare interface ASPxClientHtmlEditorInsertFlashCommandArguments {
		autoPlay: boolean,
		loop: boolean,
		enableFlashMenu: boolean,
		allowFullscreen: boolean,
		quality: string
	}

	declare interface ASPxClientHtmlEditorChangeFlashCommandArguments {
		
	}

	declare interface ASPxClientHtmlEditorInsertYouTubeVideoCommandArguments {
		showRelatedVideos: boolean,
		showVideoInfo: boolean,
		enablePrivacyEnhancedMode: boolean,
		showPlayerControls: boolean
	}

	declare interface ASPxClientHtmlEditorChangeYouTubeVideoCommandArguments {
		
	}

	declare interface ASPxClientHtmlEditorDialogInitializedEventHandler<S> {
		(source: S, e: ASPxClientHtmlEditorDialogInitializedEventArgs): void
	}

	declare interface ASPxClientHtmlEditorDialogInitializedEventArgs {
		dialogName: string
	}

	declare interface ASPxClientHtmlEditorCommandExecutingEventHandler<S> {
		(source: S, e: ASPxClientHtmlEditorCommandExecutingEventArgs): void
	}

	declare interface ASPxClientHtmlEditorCommandExecutingEventArgs {
		commandName: string,
		parameter: Object
	}

	declare interface ASPxClientHtmlEditorCommandEventHandler<S> {
		(source: S, e: ASPxClientHtmlEditorCommandEventArgs): void
	}

	declare interface ASPxClientHtmlEditorCommandEventArgs {
		commandName: string,
		parameter: Object
	}

	declare interface ASPxClientHtmlEditorCustomDialogEventHandler<S> {
		(source: S, e: ASPxClientHtmlEditorCustomDialogEventArgs): void
	}

	declare interface ASPxClientHtmlEditorCustomDialogEventArgs {
		name: string
	}

	declare interface ASPxClientHtmlEditorCustomDialogCloseEventArgsBase {
		status: Object
	}

	declare interface ASPxClientHtmlEditorCustomDialogClosingEventHandler<S> {
		(source: S, e: ASPxClientHtmlEditorCustomDialogClosingEventArgs): void
	}

	declare interface ASPxClientHtmlEditorCustomDialogClosingEventArgs {
		handled: boolean
	}

	declare interface ASPxClientHtmlEditorCustomDialogClosedEventHandler<S> {
		(source: S, e: ASPxClientHtmlEditorCustomDialogClosedEventArgs): void
	}

	declare interface ASPxClientHtmlEditorCustomDialogClosedEventArgs {
		data: Object
	}

	declare interface ASPxClientHtmlEditorValidationEventHandler<S> {
		(source: S, e: ASPxClientHtmlEditorValidationEventArgs): void
	}

	declare interface ASPxClientHtmlEditorValidationEventArgs {
		html: string,
		isValid: boolean,
		errorText: string
	}

	declare interface ASPxClientHtmlEditorTabEventHandler<S> {
		(source: S, e: ASPxClientHtmlEditorTabEventArgs): void
	}

	declare interface ASPxClientHtmlEditorTabEventArgs {
		name: string
	}

	declare interface ASPxClientHtmlEditorTabCancelEventHandler<S> {
		(source: S, e: ASPxClientHtmlEditorTabCancelEventArgs): void
	}

	declare interface ASPxClientHtmlEditorTabCancelEventArgs {
		cancel: boolean
	}

	declare interface ASPxClientHtmlEditorBeforePasteEventHandler<S> {
		(source: S, e: ASPxClientHtmlEditorBeforePasteEventArgs): void
	}

	declare interface ASPxClientHtmlEditorBeforePasteEventArgs {
		commandName: string,
		html: string
	}

	declare interface ASPxClientHtmlEditor {
		DialogInitialized: ASPxClientEvent<ASPxClientHtmlEditorDialogInitializedEventHandler<ASPxClientHtmlEditor>>,
		CommandExecuting: ASPxClientEvent<ASPxClientHtmlEditorCommandExecutingEventHandler<ASPxClientHtmlEditor>>,
		CustomCommand: ASPxClientEvent<ASPxClientHtmlEditorCommandEventHandler<ASPxClientHtmlEditor>>,
		CommandExecuted: ASPxClientEvent<ASPxClientHtmlEditorCommandEventHandler<ASPxClientHtmlEditor>>,
		GotFocus: ASPxClientEvent<ASPxClientEventHandler<ASPxClientHtmlEditor>>,
		LostFocus: ASPxClientEvent<ASPxClientEventHandler<ASPxClientHtmlEditor>>,
		SelectionChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientHtmlEditor>>,
		HtmlChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientHtmlEditor>>,
		CustomDialogOpened: ASPxClientEvent<ASPxClientHtmlEditorCustomDialogEventHandler<ASPxClientHtmlEditor>>,
		CustomDialogClosing: ASPxClientEvent<ASPxClientHtmlEditorCustomDialogClosingEventHandler<ASPxClientHtmlEditor>>,
		CustomDialogClosed: ASPxClientEvent<ASPxClientHtmlEditorCustomDialogClosedEventHandler<ASPxClientHtmlEditor>>,
		Validation: ASPxClientEvent<ASPxClientHtmlEditorValidationEventHandler<ASPxClientHtmlEditor>>,
		ContextMenuShowing: ASPxClientEvent<ASPxClientEventHandler<ASPxClientHtmlEditor>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientHtmlEditor>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientHtmlEditor>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientHtmlEditor>>,
		CustomDataCallback: ASPxClientEvent<ASPxClientCustomDataCallbackEventHandler<ASPxClientHtmlEditor>>,
		SpellingChecked: ASPxClientEvent<ASPxClientEventHandler<ASPxClientHtmlEditor>>,
		ActiveTabChanged: ASPxClientEvent<ASPxClientHtmlEditorTabEventHandler<ASPxClientHtmlEditor>>,
		ActiveTabChanging: ASPxClientEvent<ASPxClientHtmlEditorTabCancelEventHandler<ASPxClientHtmlEditor>>,
		BeforePaste: ASPxClientEvent<ASPxClientHtmlEditorBeforePasteEventHandler<ASPxClientHtmlEditor>>,
		GetDesignViewDocument(): Object,
		GetPreviewDocument(): Object,
		GetContextMenu(): ASPxClientPopupMenu,
		GetEnabled(): boolean,
		SetEnabled(value: boolean): void,
		Focus(): void,
		GetHtml(): string,
		SetHtml(html: string): void,
		SetHtml(html: string, clearUndoHistory: boolean): void,
		ReplacePlaceholders(html: string, placeholders: Object[]): string,
		CreateChangeMediaElementCommandArguments(element: Object): ASPxClientHtmlEditorChangeMediaElementCommandArguments,
		ExecuteCommand(commandName: string, parameter: Object, addToUndoHistory: boolean): boolean,
		SaveToUndoHistory(): void,
		GetSelection(): ASPxClientHtmlEditorSelection,
		RestoreSelection(): boolean,
		SetToolbarComboBoxValue(commandName: string, value: string): void,
		SetToolbarDropDownItemPickerValue(commandName: string, value: string): void,
		SetRibbonContextTabCategoryVisible(categoryName: string, active: string): void,
		GetRibbon(): ASPxClientRibbon,
		GetIsValid(): boolean,
		GetErrorText(): string,
		SetIsValid(isValid: boolean): void,
		SetErrorText(errorText: string): void,
		Validate(): void,
		SetActiveTabByName(name: string): void,
		GetActiveTabName(): string,
		ReconnectToExternalRibbon(): void,
		PerformDataCallback(parameter: string, onCallback: ASPxClientDataCallback): void
	}

	declare interface ASPxClientHtmlEditorSelection {
		GetSelectedElement(): Object,
		GetHtml(): string,
		GetText(): string,
		GetElements(): Object[],
		SetHtml(html: string, addToHistory: boolean): void
	}

	declare interface ASPxClientPivotGrid {
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientPivotGrid>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientPivotGrid>>,
		AfterCallback: ASPxClientEvent<ASPxClientEventHandler<ASPxClientPivotGrid>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientPivotGrid>>,
		BeforeCallback: ASPxClientEvent<ASPxClientEventHandler<ASPxClientPivotGrid>>,
		CustomizationFieldsVisibleChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientPivotGrid>>,
		CellClick: ASPxClientEvent<ASPxClientClickEventHandler<ASPxClientPivotGrid>>,
		CellDblClick: ASPxClientEvent<ASPxClientClickEventHandler<ASPxClientPivotGrid>>,
		PopupMenuItemClick: ASPxClientEvent<ASPxClientPivotMenuItemClickEventHandler<ASPxClientPivotGrid>>,
		IsDeferUpdatesChecked(): boolean,
		IsPrefilterVisible(): boolean,
		ShowPrefilter(): void,
		HidePrefilter(): void,
		ClearPrefilter(): void,
		ChangePrefilterEnabled(): void,
		GetCustomizationFieldsVisibility(): boolean,
		SetCustomizationFieldsVisibility(value: boolean): void,
		ChangeCustomizationFieldsVisibility(): void,
		PerformCallback(args: string): void,
		PerformCallback(args: string, onSuccess: (arg1: string) => void): void
	}

	declare interface ASPxClientClickEventHandler<S> {
		(source: S, e: ASPxClientClickEventArgs): void
	}

	declare interface ASPxClientClickEventArgs {
		HtmlEvent: Object,
		Value: Object,
		ColumnIndex: number,
		RowIndex: number,
		ColumnValue: Object,
		RowValue: Object,
		ColumnFieldName: string,
		RowFieldName: string,
		ColumnValueType: string,
		RowValueType: string,
		DataIndex: number
	}

	declare interface ASPxClientPivotMenuItemClickEventHandler<S> {
		(source: S, e: ASPxClientPivotMenuItemClickEventArgs): void
	}

	declare interface ASPxClientPivotMenuItemClickEventArgs {
		MenuType: string,
		MenuItemName: string,
		FieldID: string,
		FieldValueIndex: number
	}

	declare interface ASPxClientPivotCustomization {
		GetMainContainer(): Object,
		GetPivotGrid(): ASPxClientPivotGrid,
		SetHeight(value: number): void,
		SetWidth(value: number): void,
		UpdateHeight(): void,
		SetLayout(layout: string): void
	}

	declare interface ASPxClientRichEditCustomCommandExecutedEventHandler<S> {
		(source: S, e: ASPxClientRichEditCustomCommandExecutedEventArgs): void
	}

	declare interface ASPxClientRichEditCustomCommandExecutedEventArgs {
		commandName: string,
		parameter: Object
	}

	declare interface ASPxClientRichEditHyperlinkClickEventHandler<S> {
		(source: S, e: ASPxClientRichEditHyperlinkClickEventArgs): void
	}

	declare interface ASPxClientRichEditHyperlinkClickEventArgs {
		handled: boolean,
		htmlEvent: Object,
		hyperlinkType: ASPxClientOfficeDocumentLinkType,
		targetUri: string
	}

	declare interface ASPxClientRichEdit {
		document: RichEditDocument,
		commands: RichEditCommands,
		selection: RichEditSelection,
		CustomCommandExecuted: ASPxClientEvent<ASPxClientRichEditCustomCommandExecutedEventHandler<ASPxClientRichEdit>>,
		BeginSynchronization: ASPxClientEvent<ASPxClientEventHandler<ASPxClientRichEdit>>,
		EndSynchronization: ASPxClientEvent<ASPxClientEventHandler<ASPxClientRichEdit>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientRichEdit>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientRichEdit>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientRichEdit>>,
		DocumentChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientRichEdit>>,
		HyperlinkClick: ASPxClientEvent<ASPxClientRichEditHyperlinkClickEventHandler<ASPxClientRichEdit>>,
		SelectionChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientRichEdit>>,
		SetFullscreenMode(fullscreen: boolean): void,
		GetRibbon(): ASPxClientRibbon,
		Focus(): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void,
		HasUnsavedChanges(): boolean,
		ReconnectToExternalRibbon(): void
	}

	declare interface RichEditCommands {
		fileNew: FileNewCommand,
		fileOpen: FileOpenCommand,
		fileOpenDialog: FileOpenDialogCommand,
		fileSave: FileSaveCommand,
		fileDownload: FileDownloadCommand,
		fileSaveAs: FileSaveAsCommand,
		filePrint: FilePrintCommand,
		undo: UndoCommand,
		redo: RedoCommand,
		copy: CopyCommand,
		paste: PasteCommand,
		cut: CutCommand,
		changeFontName: ChangeFontNameCommand,
		changeFontSize: ChangeFontSizeCommand,
		increaseFontSize: IncreaseFontSizeCommand,
		decreaseFontSize: DecreaseFontSizeCommand,
		makeTextUpperCase: MakeTextUpperCaseCommand,
		makeTextLowerCase: MakeTextLowerCaseCommand,
		capitalizeEachWordTextCase: CapitalizeEachWordTextCaseCommand,
		toggleTextCase: ToggleTextCaseCommand,
		changeFontBold: ChangeFontBoldCommand,
		changeFontItalic: ChangeFontItalicCommand,
		changeFontUnderline: ChangeFontUnderlineCommand,
		changeFontStrikeout: ChangeFontStrikeoutCommand,
		changeFontSuperscript: ChangeFontSuperscriptCommand,
		changeFontSubscript: ChangeFontSubscriptCommand,
		changeFontForeColor: ChangeFontForeColorCommand,
		changeFontBackColor: ChangeFontBackColorCommand,
		clearFormatting: ClearFormattingCommand,
		changeStyle: ChangeStyleCommand,
		toggleBulletedList: ToggleBulletedListCommand,
		toggleNumberingList: ToggleNumberingListCommand,
		toggleMultilevelList: ToggleMultilevelListCommand,
		increaseIndent: IncreaseIndentCommand,
		decreaseIndent: DecreaseIndentCommand,
		showHiddenSymbols: ShowHiddenSymbolsCommand,
		toggleParagraphAlignmentLeft: ToggleParagraphAlignmentLeftCommand,
		toggleParagraphAlignmentCenter: ToggleParagraphAlignmentCenterCommand,
		toggleParagraphAlignmentRight: ToggleParagraphAlignmentRightCommand,
		toggleParagraphAlignmentJustify: ToggleParagraphAlignmentJustifyCommand,
		setSingleParagraphSpacing: SetSingleParagraphSpacingCommand,
		setSesquialteralParagraphSpacing: SetSesquialteralParagraphSpacingCommand,
		setDoubleParagraphSpacing: SetDoubleParagraphSpacingCommand,
		addSpacingBeforeParagraph: AddSpacingBeforeParagraphCommand,
		addSpacingAfterParagraph: AddSpacingAfterParagraphCommand,
		removeSpacingBeforeParagraph: RemoveSpacingBeforeParagraphCommand,
		removeSpacingAfterParagraph: RemoveSpacingAfterParagraphCommand,
		changeParagraphBackColor: ChangeParagraphBackColorCommand,
		openFontFormattingDialog: OpenFontFormattingDialogCommand,
		changeFontFormatting: ChangeFontFormattingCommand,
		openParagraphFormattingDialog: OpenParagraphFormattingDialogCommand,
		changeParagraphFormatting: ChangeParagraphFormattingCommand,
		insertPageBreak: InsertPageBreakCommand,
		openInsertTableDialog: OpenInsertTableDialogCommand,
		insertTable: InsertTableCommand,
		openInsertPictureDialog: OpenInsertPictureDialogCommand,
		insertPicture: InsertPictureCommand,
		openInsertBookmarkDialog: OpenInsertBookmarkDialogCommand,
		insertBookmark: InsertBookmarkCommand,
		deleteBookmark: DeleteBookmarkCommand,
		openInsertHyperlinkDialog: OpenInsertHyperlinkDialogCommand,
		insertHyperlink: InsertHyperlinkCommand,
		deleteHyperlink: DeleteHyperlinkCommand,
		deleteHyperlinks: DeleteHyperlinksCommand,
		openHyperlink: OpenHyperlinkCommand,
		openInsertSymbolDialog: OpenInsertSymbolDialogCommand,
		insertSymbol: InsertSymbolCommand,
		changePageMargins: ChangePageMarginsCommand,
		openPageMarginsDialog: OpenPageMarginsDialogCommand,
		changePageOrientation: ChangePageOrientationCommand,
		openPagePaperSizeDialog: OpenPagePaperSizeDialogCommand,
		changePageSize: ChangePageSizeCommand,
		changeSectionEqualColumnCount: ChangeSectionEqualColumnCountCommand,
		openSectionColumnsDialog: OpenSectionColumnsDialogCommand,
		changeSectionColumns: ChangeSectionColumnsCommand,
		insertColumnBreak: InsertColumnBreakCommand,
		insertSectionBreakNextPage: InsertSectionBreakNextPageCommand,
		insertSectionBreakEvenPage: InsertSectionBreakEvenPageCommand,
		insertSectionBreakOddPage: InsertSectionBreakOddPageCommand,
		changePageColor: ChangePageColorCommand,
		showHorizontalRuler: ShowHorizontalRulerCommand,
		setFullscreen: SetFullscreenCommand,
		openNumberingListDialog: OpenNumberingListDialogCommand,
		insertParagraph: InsertParagraphCommand,
		insertText: InsertTextCommand,
		delete: DeleteCommand,
		backspace: BackspaceCommand,
		insertLineBreak: InsertLineBreakCommand,
		changePictureScale: ChangePictureScaleCommand,
		incrementParagraphLeftIndent: IncrementParagraphLeftIndentCommand,
		decrementParagraphLeftIndent: DecrementParagraphLeftIndentCommand,
		moveContent: MoveContentCommand,
		copyContent: CopyContentCommand,
		insertTab: InsertTabCommand,
		openTabsDialog: OpenTabsDialogCommand,
		changeTabs: ChangeTabsCommand,
		openCustomNumberingListDialog: OpenCustomNumberingListDialogCommand,
		changeCustomNumberingList: ChangeCustomNumberingListCommand,
		restartNumberingList: RestartNumberingListCommand,
		incrementNumberingIndent: IncrementNumberingIndentCommand,
		decrementNumberingIndent: DecrementNumberingIndentCommand,
		createField: CreateFieldCommand,
		updateField: UpdateFieldCommand,
		showFieldCodes: ShowFieldCodesCommand,
		showAllFieldCodes: ShowAllFieldCodesCommand,
		continueNumberingList: ContinueNumberingListCommand,
		insertNumeration: InsertNumerationCommand,
		removeNumeration: RemoveNumerationCommand,
		updateAllFields: UpdateAllFieldsCommand,
		createDateField: CreateDateFieldCommand,
		createTimeField: CreateTimeFieldCommand,
		createPageField: CreatePageFieldCommand,
		makeTextSentenceCase: MakeTextSentenceCaseCommand,
		switchTextCase: SwitchTextCaseCommand,
		goToFirstDataRecord: GoToFirstDataRecordCommand,
		goToPreviousDataRecord: GoToPreviousDataRecordCommand,
		goToNextDataRecord: GoToNextDataRecordCommand,
		goToDataRecord: GoToDataRecordCommand,
		goToLastDataRecord: GoToLastDataRecordCommand,
		showMergedData: ShowMergedDataCommand,
		mergeFieldDialog: MergeFieldDialogCommand,
		createMergeField: CreateMergeFieldCommand,
		mailMergeDialog: MailMergeDialogCommand,
		mailMergeAndDownload: MailMergeAndDownloadCommand,
		mailMergeAndSaveAs: MailMergeAndSaveAsCommand,
		insertHeader: InsertHeaderCommand,
		insertFooter: InsertFooterCommand,
		linkHeaderFooterToPrevious: LinkHeaderFooterToPreviousCommand,
		goToFooter: GoToFooterCommand,
		goToHeader: GoToHeaderCommand,
		goToNextHeaderFooter: GoToNextHeaderFooterCommand,
		goToPreviousHeaderFooter: GoToPreviousHeaderFooterCommand,
		setDifferentFirstPageHeaderFooter: SetDifferentFirstPageHeaderFooterCommand,
		setDifferentOddAndEvenPagesHeaderFooter: SetDifferentOddAndEvenPagesHeaderFooterCommand,
		closeHeaderFooter: CloseHeaderFooterCommand,
		createPageCountField: CreatePageCountFieldCommand,
		openTableFormattingDialog: OpenTableFormattingDialogCommand,
		changeTableFormatting: ChangeTableFormattingCommand,
		changeTableRowPreferredHeight: ChangeTableRowPreferredHeightCommand,
		changeTableCellPreferredWidth: ChangeTableCellPreferredWidthCommand,
		changeTableColumnPreferredWidth: ChangeTableColumnPreferredWidthCommand,
		changeTableCellFormatting: ChangeTableCellFormattingCommand,
		insertTableColumnToTheLeft: InsertTableColumnToTheLeftCommand,
		insertTableColumnToTheRight: InsertTableColumnToTheRightCommand,
		insertTableRowBelow: InsertTableRowBelowCommand,
		insertTableRowAbove: InsertTableRowAboveCommand,
		deleteTableRows: DeleteTableRowsCommand,
		deleteTableColumns: DeleteTableColumnsCommand,
		insertTableCellWithShiftToTheLeft: InsertTableCellWithShiftToTheLeftCommand,
		deleteTableCellsWithShiftHorizontally: DeleteTableCellsWithShiftHorizontallyCommand,
		deleteTableCellsWithShiftVertically: DeleteTableCellsWithShiftVerticallyCommand,
		deleteTable: DeleteTableCommand,
		insertTableCellsDialog: InsertTableCellsDialogCommand,
		deleteTableCellsDialog: DeleteTableCellsDialogCommand,
		mergeTableCells: MergeTableCellsCommand,
		splitTableCellsDialog: SplitTableCellsDialogCommand,
		splitTableCells: SplitTableCellsCommand,
		insertTableCellsWithShiftToTheVertically: InsertTableCellsWithShiftToTheVerticallyCommand,
		openTableBordersAndShadingDialog: OpenTableBordersAndShadingDialogCommand,
		changeTableBordersAndShading: ChangeTableBordersAndShadingCommand,
		toggleTableCellAlignTopLeft: ToggleTableCellAlignTopLeftCommand,
		toggleTableCellAlignTopCenter: ToggleTableCellAlignTopCenterCommand,
		toggleTableCellAlignTopRight: ToggleTableCellAlignTopRightCommand,
		toggleTableCellAlignMiddleLeft: ToggleTableCellAlignMiddleLeftCommand,
		toggleTableCellAlignMiddleCenter: ToggleTableCellAlignMiddleCenterCommand,
		toggleTableCellAlignMiddleRight: ToggleTableCellAlignMiddleRightCommand,
		toggleTableCellAlignBottomLeft: ToggleTableCellAlignBottomLeftCommand,
		toggleTableCellAlignBottomCenter: ToggleTableCellAlignBottomCenterCommand,
		toggleTableCellAlignBottomRight: ToggleTableCellAlignBottomRightCommand,
		changeTableStyle: ChangeTableStyleCommand,
		toggleTableCellTopBorder: ToggleTableCellTopBorderCommand,
		toggleTableCellRightBorder: ToggleTableCellRightBorderCommand,
		toggleTableCellBottomBorder: ToggleTableCellBottomBorderCommand,
		toggleTableCellLeftBorder: ToggleTableCellLeftBorderCommand,
		removeTableCellBorders: RemoveTableCellBordersCommand,
		toggleTableCellAllBorders: ToggleTableCellAllBordersCommand,
		toggleTableCellInsideHorizontalBorders: ToggleTableCellInsideHorizontalBordersCommand,
		toggleTableCellInsideVerticalBorders: ToggleTableCellInsideVerticalBordersCommand,
		toggleTableCellOutsideBorders: ToggleTableCellOutsideBordersCommand,
		changeTableLook: ChangeTableLookCommand,
		changeTableBorderRepositoryItem: ChangeTableBorderRepositoryItemCommand,
		changeTableCellShading: ChangeTableCellShadingCommand,
		showTableGridLines: ShowTableGridLinesCommand,
		openFindPanel: OpenFindPanelCommand,
		openFindAndReplaceDialog: OpenFindAndReplaceDialogCommand,
		findAll: FindAllCommand,
		hideFindResults: HideFindResultsCommand,
		replaceAll: ReplaceAllCommand,
		replaceNext: ReplaceNextCommand,
		openSpellingDialog: OpenSpellingDialogCommand
	}

	declare interface CommandBase {
		
	}

	declare interface CommandWithSimpleStateBase {
		getState(): SimpleCommandState
	}

	declare interface CommandWithBooleanStateBase {
		getState(): any
	}

	declare interface SimpleCommandState {
		enabled: boolean,
		visible: boolean
	}

	declare interface CommandState<T> {
		value: T
	}

	declare interface RichEditDocument {
		activeSubDocument: SubDocument,
		sectionsInfo: Section[],
		paragraphStylesInfo: ParagraphStyle[],
		characterStylesInfo: CharacterStyle[],
		abstractNumberingListsInfo: AbstractNumberingList[],
		tableStylesInfo: TableStyle[]
	}

	declare interface AbstractNumberingList {
		deleted: boolean
	}

	declare interface SubDocument {
		id: number,
		type: any,
		paragraphsInfo: Paragraph[],
		fieldsInfo: Field[],
		tablesInfo: Table[],
		bookmarksInfo: Bookmark[],
		text: string,
		length: number
	}

	declare interface Paragraph {
		length: number,
		start: number,
		styleName: string,
		listIndex: number,
		listLevelIndex: number
	}

	declare interface Field {
		start: number,
		length: number,
		hyperlinkUri: string,
		hyperlinkTip: string,
		hyperlinkAnchor: string
	}

	declare interface Table {
		start: number,
		length: number,
		rows: TableRow[],
		styleName: string
	}

	declare interface TableRow {
		start: number,
		length: number,
		cells: TableCell[]
	}

	declare interface TableCell {
		start: number,
		length: number
	}

	declare interface Bookmark {
		start: number,
		length: number,
		name: string
	}

	declare interface Section {
		start: number,
		length: number,
		headers: HeaderFooter[],
		footers: HeaderFooter[]
	}

	declare interface HeaderFooter {
		type: any,
		subDocument: SubDocument
	}

	declare interface StyleBase {
		name: string,
		isDeleted: boolean
	}

	declare interface ParagraphStyle {
		linkedStyle: CharacterStyle,
		nextStyle: ParagraphStyle,
		listIndex: number,
		listLevelIndex: number,
		parent: ParagraphStyle
	}

	declare interface CharacterStyle {
		linkedStyle: ParagraphStyle,
		parent: CharacterStyle
	}

	declare interface TableStyle {
		parent: TableStyle
	}

	declare interface RichEditSelection {
		intervals: Interval[],
		collapsed: boolean,
		goToNextLine(): void,
		goToNextLine(extendSelection: boolean): void,
		goToLineEnd(): void,
		goToLineEnd(extendSelection: boolean): void,
		goToLineStart(): void,
		goToLineStart(extendSelection: boolean): void,
		goToPreviousLine(): void,
		goToPreviousLine(extendSelection: boolean): void,
		goToNextCharacter(): void,
		goToNextCharacter(extendSelection: boolean): void,
		goToPreviousCharacter(): void,
		goToPreviousCharacter(extendSelection: boolean): void,
		selectLine(): void,
		selectLine(extendSelection: boolean): void,
		goToNextPage(): void,
		goToNextPage(extendSelection: boolean): void,
		goToPreviousPage(): void,
		goToPreviousPage(extendSelection: boolean): void,
		goToDocumentStart(): void,
		goToDocumentStart(extendSelection: boolean): void,
		goToDocumentEnd(): void,
		goToDocumentEnd(extendSelection: boolean): void,
		goToNextWord(): void,
		goToNextWord(extendSelection: boolean): void,
		goToPrevWord(): void,
		goToPrevWord(extendSelection: boolean): void,
		goToParagraphStart(): void,
		goToParagraphStart(extendSelection: boolean): void,
		goToParagraphEnd(): void,
		goToParagraphEnd(extendSelection: boolean): void,
		selectParagraph(): void,
		selectTableCell(): void,
		selectTableCell(extendSelection: boolean): void,
		selectTableRow(): void,
		selectTableRow(extendSelection: boolean): void,
		selectTable(): void,
		selectTable(extendSelection: boolean): void,
		selectAll(): void,
		setMainSubDocumentAsActive(): void,
		setFooterSubDocumentAsActiveByPageIndex(pageIndex: number): void,
		setHeaderSubDocumentAsActiveByPageIndex(pageIndex: number): void
	}

	declare interface Interval {
		start: number,
		length: number
	}

	declare interface OpenInsertBookmarkDialogCommand {
		execute(): boolean
	}

	declare interface InsertBookmarkCommand {
		execute(name: string, start: number, length: number): boolean
	}

	declare interface DeleteBookmarkCommand {
		execute(name: string): boolean
	}

	declare interface GoToBookmarkCommand {
		execute(name: string): boolean
	}

	declare interface PasteCommand {
		execute(): boolean
	}

	declare interface CopyCommand {
		execute(): boolean
	}

	declare interface CutCommand {
		execute(): boolean
	}

	declare interface CreateFieldCommand {
		execute(): boolean
	}

	declare interface UpdateFieldCommand {
		execute(): boolean
	}

	declare interface ShowFieldCodesCommand {
		execute(showFieldCodes: boolean): boolean,
		execute(): boolean
	}

	declare interface ShowAllFieldCodesCommand {
		execute(showFieldCodes: boolean): boolean,
		execute(): boolean
	}

	declare interface UpdateAllFieldsCommand {
		execute(): boolean
	}

	declare interface CreateDateFieldCommand {
		execute(): boolean
	}

	declare interface CreateTimeFieldCommand {
		execute(): boolean
	}

	declare interface CreatePageFieldCommand {
		execute(): boolean
	}

	declare interface GoToDataRecordCommand {
		execute(activeRecordIndex: number): boolean
	}

	declare interface GoToFirstDataRecordCommand {
		execute(): boolean
	}

	declare interface GoToPreviousDataRecordCommand {
		execute(): boolean
	}

	declare interface GoToNextDataRecordCommand {
		execute(): boolean
	}

	declare interface GoToLastDataRecordCommand {
		execute(): boolean
	}

	declare interface ShowMergedDataCommand {
		execute(): boolean,
		execute(showMergedData: boolean): boolean
	}

	declare interface MergeFieldDialogCommand {
		execute(): boolean
	}

	declare interface CreateMergeFieldCommand {
		execute(fieldName: string): boolean
	}

	declare interface MailMergeDialogCommand {
		execute(): boolean
	}

	declare interface MailMergeAndDownloadCommand {
		execute(fileExtension: string): boolean,
		execute(fileExtension: string, settings: MailMergeSettings): boolean,
		getState(): any
	}

	declare interface MailMergeAndSaveAsCommand {
		execute(filePath: string): boolean,
		execute(filePath: string, settings: MailMergeSettings): boolean,
		getState(): any
	}

	declare interface CreatePageCountFieldCommand {
		execute(): boolean
	}

	declare interface MailMergeSettings {
		range: any,
		exportFrom: number,
		exportRecordsCount: number,
		mergeMode: any
	}

	declare interface FileNewCommand {
		execute(): boolean
	}

	declare interface FileOpenCommand {
		execute(path: string): boolean
	}

	declare interface FileOpenDialogCommand {
		execute(): boolean
	}

	declare interface FileSaveCommand {
		execute(): boolean
	}

	declare interface FileSaveAsCommand {
		execute(path: string): boolean
	}

	declare interface FileDownloadCommand {
		execute(fileExtension: string): boolean
	}

	declare interface FilePrintCommand {
		execute(): boolean
	}

	declare interface OpenFindPanelCommand {
		execute(): boolean
	}

	declare interface OpenFindAndReplaceDialogCommand {
		execute(): boolean
	}

	declare interface FindAllCommand {
		execute(text: string, matchCase: boolean, highlightResults: boolean): boolean,
		execute(
		text: string, matchCase: boolean, highlightResults: boolean, results: Interval[]
	): boolean
	}

	declare interface HideFindResultsCommand {
		execute(): boolean
	}

	declare interface ReplaceAllCommand {
		execute(text: string, replaceText: string, matchCase: boolean): boolean
	}

	declare interface ReplaceNextCommand {
		execute(text: string, replaceText: string, matchCase: boolean): boolean
	}

	declare interface UndoCommand {
		execute(): boolean
	}

	declare interface RedoCommand {
		execute(): boolean
	}

	declare interface OpenInsertHyperlinkDialogCommand {
		execute(): boolean
	}

	declare interface InsertHyperlinkCommand {
		execute(settings: HyperlinkSettings): boolean,
		getState(): any
	}

	declare interface DeleteHyperlinkCommand {
		execute(): boolean
	}

	declare interface DeleteHyperlinksCommand {
		execute(): boolean
	}

	declare interface OpenHyperlinkCommand {
		execute(): boolean
	}

	declare interface HyperlinkSettings {
		text: string,
		tooltip: string,
		url: string,
		bookmark: string
	}

	declare interface InsertPageBreakCommand {
		execute(): boolean
	}

	declare interface InsertColumnBreakCommand {
		execute(): boolean
	}

	declare interface InsertSectionBreakNextPageCommand {
		execute(): boolean
	}

	declare interface InsertSectionBreakEvenPageCommand {
		execute(): boolean
	}

	declare interface InsertSectionBreakOddPageCommand {
		execute(): boolean
	}

	declare interface InsertLineBreakCommand {
		execute(): boolean
	}

	declare interface ToggleBulletedListCommand {
		execute(): boolean
	}

	declare interface ToggleNumberingListCommand {
		execute(): boolean
	}

	declare interface ToggleMultilevelListCommand {
		execute(): boolean
	}

	declare interface OpenNumberingListDialogCommand {
		execute(): boolean
	}

	declare interface OpenCustomNumberingListDialogCommand {
		execute(abstractNumberingListIndex: number): boolean
	}

	declare interface ChangeCustomNumberingListCommand {
		execute(
		abstractNumberingListIndex: number, listLevelSettings: ListLevelSettings[]
	): boolean,
		getState(abstractNumberingListIndex: number): any
	}

	declare interface RestartNumberingListCommand {
		execute(): boolean
	}

	declare interface IncrementNumberingIndentCommand {
		execute(): boolean
	}

	declare interface DecrementNumberingIndentCommand {
		execute(): boolean
	}

	declare interface ContinueNumberingListCommand {
		execute(): boolean
	}

	declare interface InsertNumerationCommand {
		execute(abstractNumberingListIndex: number): boolean,
		execute(numberingListIndex: number, isAbstractNumberingList: boolean): boolean
	}

	declare interface RemoveNumerationCommand {
		execute(): boolean
	}

	declare interface ListLevelSettings {
		displayFormatString: string,
		format: any,
		start: number,
		alignment: any,
		separator: string,
		leftIndent: number,
		firstLineIndent: number,
		firstLineIndentType: any,
		fontName: string,
		fontColor: string,
		fontSize: number,
		fontBold: boolean,
		fontItalic: boolean
	}

	declare interface OpenInsertPictureDialogCommand {
		execute(): boolean
	}

	declare interface InsertPictureCommand {
		execute(imageUrl: string): boolean
	}

	declare interface OpenInsertSymbolDialogCommand {
		execute(): boolean
	}

	declare interface InsertSymbolCommand {
		execute(symbol: string, fontName: string): boolean
	}

	declare interface InsertParagraphCommand {
		execute(): boolean
	}

	declare interface InsertTextCommand {
		execute(text: string): boolean
	}

	declare interface DeleteCommand {
		execute(): boolean
	}

	declare interface BackspaceCommand {
		execute(): boolean
	}

	declare interface ChangePictureScaleCommand {
		execute(scale: Scale): boolean,
		execute(x: number, y: number): boolean,
		getState(): any
	}

	declare interface MoveContentCommand {
		execute(position: number): boolean
	}

	declare interface CopyContentCommand {
		execute(position: number): boolean
	}

	declare interface InsertTabCommand {
		execute(): boolean
	}

	declare interface Scale {
		x: number,
		y: number
	}

	declare interface ChangePageMarginsCommand {
		execute(left: number, top: number, right: number, bottom: number): boolean,
		execute(margins: Margins): boolean,
		getState(): any
	}

	declare interface OpenPageMarginsDialogCommand {
		execute(): boolean
	}

	declare interface ChangePageOrientationCommand {
		execute(isPortrait: any): boolean,
		getState(): any
	}

	declare interface OpenPagePaperSizeDialogCommand {
		execute(): boolean
	}

	declare interface SetPageSizeDialogCommand {
		execute(): boolean
	}

	declare interface ChangePageSizeCommand {
		execute(width: number, height: number): boolean,
		execute(size: Size): boolean,
		getState(): any
	}

	declare interface ChangeSectionEqualColumnCountCommand {
		execute(columnCount: number): boolean,
		getState(): any
	}

	declare interface OpenSectionColumnsDialogCommand {
		execute(): boolean
	}

	declare interface ChangeSectionColumnsCommand {
		execute(): boolean,
		getState(): any
	}

	declare interface ChangePageColorCommand {
		execute(color: string): boolean,
		getState(): any
	}

	declare interface InsertHeaderCommand {
		execute(): boolean
	}

	declare interface InsertFooterCommand {
		execute(): boolean
	}

	declare interface LinkHeaderFooterToPreviousCommand {
		execute(): boolean
	}

	declare interface GoToFooterCommand {
		execute(): boolean
	}

	declare interface GoToHeaderCommand {
		execute(): boolean
	}

	declare interface GoToNextHeaderFooterCommand {
		execute(): boolean
	}

	declare interface GoToPreviousHeaderFooterCommand {
		execute(): boolean
	}

	declare interface SetDifferentFirstPageHeaderFooterCommand {
		execute(): boolean,
		execute(differentFirstPage: boolean): boolean
	}

	declare interface SetDifferentOddAndEvenPagesHeaderFooterCommand {
		execute(): boolean,
		execute(differentOddAndEvenPages: boolean): boolean
	}

	declare interface CloseHeaderFooterCommand {
		execute(): boolean
	}

	declare interface SectionColumn {
		width: number,
		spacing: number
	}

	declare interface Size {
		width: number,
		height: number
	}

	declare interface Margins {
		left: number,
		top: number,
		right: number,
		bottom: number
	}

	declare interface IncreaseIndentCommand {
		execute(): boolean
	}

	declare interface DecreaseIndentCommand {
		execute(): boolean
	}

	declare interface ShowHiddenSymbolsCommand {
		execute(): boolean,
		execute(show: boolean): boolean
	}

	declare interface ToggleParagraphAlignmentLeftCommand {
		execute(): boolean
	}

	declare interface ToggleParagraphAlignmentCenterCommand {
		execute(): boolean
	}

	declare interface ToggleParagraphAlignmentRightCommand {
		execute(): boolean
	}

	declare interface ToggleParagraphAlignmentJustifyCommand {
		execute(): boolean
	}

	declare interface SetSingleParagraphSpacingCommand {
		execute(): boolean
	}

	declare interface SetSesquialteralParagraphSpacingCommand {
		execute(): boolean
	}

	declare interface SetDoubleParagraphSpacingCommand {
		execute(): boolean
	}

	declare interface AddSpacingBeforeParagraphCommand {
		execute(): boolean
	}

	declare interface AddSpacingAfterParagraphCommand {
		execute(): boolean
	}

	declare interface RemoveSpacingBeforeParagraphCommand {
		execute(): boolean
	}

	declare interface RemoveSpacingAfterParagraphCommand {
		execute(): boolean
	}

	declare interface ChangeParagraphBackColorCommand {
		execute(color: string): boolean,
		getState(): any
	}

	declare interface OpenParagraphFormattingDialogCommand {
		execute(): boolean
	}

	declare interface ChangeParagraphFormattingCommand {
		execute(settings: ParagraphFormattingSettings): boolean,
		getState(): any
	}

	declare interface IncrementParagraphLeftIndentCommand {
		execute(): boolean
	}

	declare interface DecrementParagraphLeftIndentCommand {
		execute(): boolean
	}

	declare interface OpenTabsDialogCommand {
		execute(): boolean
	}

	declare interface ChangeTabsCommand {
		execute(settings: TabsSettings): boolean,
		getState(): any
	}

	declare interface TabsSettings {
		defaultTabStop: number,
		tabs: TabSettings[]
	}

	declare interface TabSettings {
		alignment: any,
		leader: any,
		position: number,
		deleted: boolean
	}

	declare interface ParagraphFormattingSettings {
		alignment: any,
		outlineLevel: number,
		rightIndent: number,
		spacingBefore: number,
		spacingAfter: number,
		lineSpacingType: any,
		firstLineIndentType: any,
		firstLineIndent: number,
		contextualSpacing: boolean,
		keepLinesTogether: boolean,
		pageBreakBefore: boolean,
		leftIndent: number,
		lineSpacing: number,
		backColor: string
	}

	declare interface OpenSpellingDialogCommand {
		execute(): boolean
	}

	declare interface OpenInsertTableDialogCommand {
		execute(): boolean
	}

	declare interface InsertTableCommand {
		execute(columnCount: number, rowCount: number): boolean
	}

	declare interface OpenTableFormattingDialogCommand {
		execute(): boolean
	}

	declare interface ChangeTableFormattingCommand {
		execute(settings: TableFormattingSettings): boolean,
		getState(): any
	}

	declare interface ChangeTableRowPreferredHeightCommand {
		execute(preferredHeight: TableHeightUnit): boolean,
		getState(): any
	}

	declare interface ChangeTableCellPreferredWidthCommand {
		execute(preferredWidth: TableWidthUnit): boolean,
		getState(): any
	}

	declare interface ChangeTableColumnPreferredWidthCommand {
		execute(preferredWidth: TableWidthUnit): boolean,
		getState(): any
	}

	declare interface ChangeTableCellFormattingCommand {
		execute(settings: TableCellFormattingSettings): boolean,
		getState(): any
	}

	declare interface InsertTableColumnToTheLeftCommand {
		execute(): boolean
	}

	declare interface InsertTableColumnToTheRightCommand {
		execute(): boolean
	}

	declare interface InsertTableRowBelowCommand {
		execute(): boolean
	}

	declare interface InsertTableRowAboveCommand {
		execute(): boolean
	}

	declare interface DeleteTableRowsCommand {
		execute(): boolean
	}

	declare interface DeleteTableColumnsCommand {
		execute(): boolean
	}

	declare interface InsertTableCellWithShiftToTheLeftCommand {
		execute(): boolean
	}

	declare interface DeleteTableCellsWithShiftHorizontallyCommand {
		execute(): boolean
	}

	declare interface DeleteTableCellsWithShiftVerticallyCommand {
		execute(): boolean
	}

	declare interface DeleteTableCommand {
		execute(): boolean
	}

	declare interface InsertTableCellsDialogCommand {
		execute(): boolean
	}

	declare interface DeleteTableCellsDialogCommand {
		execute(): boolean
	}

	declare interface MergeTableCellsCommand {
		execute(): boolean
	}

	declare interface SplitTableCellsDialogCommand {
		execute(): boolean
	}

	declare interface SplitTableCellsCommand {
		execute(rowCount: number, columnCount: number, mergeBeforeSplit: boolean): boolean
	}

	declare interface InsertTableCellsWithShiftToTheVerticallyCommand {
		execute(): boolean
	}

	declare interface OpenTableBordersAndShadingDialogCommand {
		execute(): boolean
	}

	declare interface ChangeTableBordersAndShadingCommand {
		execute(settings: TableBordersSettings, applyToWholeTable: boolean): boolean,
		getState(): any
	}

	declare interface ToggleTableCellAlignTopLeftCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellAlignTopCenterCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellAlignTopRightCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellAlignMiddleLeftCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellAlignMiddleCenterCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellAlignMiddleRightCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellAlignBottomLeftCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellAlignBottomCenterCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellAlignBottomRightCommand {
		execute(): boolean
	}

	declare interface ChangeTableStyleCommand {
		execute(style: TableStyle): boolean,
		execute(styleName: string): boolean,
		getState(): any
	}

	declare interface ToggleTableCellTopBorderCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellRightBorderCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellBottomBorderCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellLeftBorderCommand {
		execute(): boolean
	}

	declare interface RemoveTableCellBordersCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellAllBordersCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellInsideBordersCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellInsideHorizontalBordersCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellInsideVerticalBordersCommand {
		execute(): boolean
	}

	declare interface ToggleTableCellOutsideBordersCommand {
		execute(): boolean
	}

	declare interface ChangeTableLookCommand {
		execute(settings: TableLookSettings): boolean,
		getState(): any
	}

	declare interface ChangeTableBorderRepositoryItemCommand {
		execute(settings: TableBorderSettings): boolean,
		getState(): any
	}

	declare interface ChangeTableCellShadingCommand {
		execute(color: string): boolean,
		getState(): any
	}

	declare interface ShowTableGridLinesCommand {
		execute(): boolean,
		execute(showTableGridLines: boolean): boolean
	}

	declare interface TableLookSettings {
		applyFirstRow: boolean,
		applyLastRow: boolean,
		applyFirstColumn: boolean,
		applyLastColumn: boolean,
		doNotApplyRowBanding: boolean,
		doNotApplyColumnBanding: boolean
	}

	declare interface TableBordersSettings {
		top: TableBorderSettings,
		right: TableBorderSettings,
		bottom: TableBorderSettings,
		left: TableBorderSettings,
		insideHorizontal: TableBorderSettings,
		insideVertical: TableBorderSettings,
		backgroundColor: string
	}

	declare interface TableBorderSettings {
		color: string,
		width: number,
		style: any
	}

	declare interface TableCellFormattingSettings {
		preferredWidth: TableWidthUnit,
		verticalAlignment: any,
		noWrap: boolean,
		marginLeft: number,
		marginRight: number,
		marginTop: number,
		marginBottom: number,
		marginsSameAsTable: boolean
	}

	declare interface TableFormattingSettings {
		preferredWidth: TableWidthUnit,
		alignment: any,
		indent: number,
		spacingBetweenCells: number,
		allowSpacingBetweenCells: boolean,
		resizeToFitContent: boolean,
		defaultCellMarginLeft: number,
		defaultCellMarginRight: number,
		defaultCellMarginTop: number,
		defaultCellMarginBottom: number
	}

	declare interface TableWidthUnit {
		value: number,
		type: any
	}

	declare interface TableHeightUnit {
		value: number,
		type: any
	}

	declare interface ChangeFontNameCommand {
		execute(fontName: string): boolean,
		getState(): any
	}

	declare interface ChangeFontSizeCommand {
		execute(fontSize: number): boolean,
		getState(): any
	}

	declare interface IncreaseFontSizeCommand {
		execute(): boolean
	}

	declare interface DecreaseFontSizeCommand {
		execute(): boolean
	}

	declare interface MakeTextUpperCaseCommand {
		execute(): boolean
	}

	declare interface MakeTextLowerCaseCommand {
		execute(): boolean
	}

	declare interface CapitalizeEachWordTextCaseCommand {
		execute(): boolean
	}

	declare interface ToggleTextCaseCommand {
		execute(): boolean
	}

	declare interface ChangeFontBoldCommand {
		execute(): boolean,
		execute(fontBold: boolean): boolean
	}

	declare interface ChangeFontItalicCommand {
		execute(): boolean,
		execute(fontItalic: boolean): boolean
	}

	declare interface ChangeFontUnderlineCommand {
		execute(): boolean,
		execute(fontUnderline: boolean): boolean
	}

	declare interface ChangeFontStrikeoutCommand {
		execute(): boolean,
		execute(fontStrikeout: boolean): boolean
	}

	declare interface ChangeFontSuperscriptCommand {
		execute(): boolean,
		execute(fontSuperscript: boolean): boolean
	}

	declare interface ChangeFontSubscriptCommand {
		execute(): boolean,
		execute(fontSubscript: boolean): boolean
	}

	declare interface ChangeFontForeColorCommand {
		execute(color: string): boolean,
		getState(): any
	}

	declare interface ChangeFontBackColorCommand {
		execute(color: string): boolean,
		getState(): any
	}

	declare interface ClearFormattingCommand {
		execute(): boolean
	}

	declare interface ChangeStyleCommand {
		execute(style: StyleBase): boolean,
		execute(styleName: string, isParagraphStyle: boolean): boolean,
		getState(): any
	}

	declare interface OpenFontFormattingDialogCommand {
		execute(): boolean
	}

	declare interface MakeTextSentenceCaseCommand {
		execute(): boolean
	}

	declare interface SwitchTextCaseCommand {
		execute(): boolean
	}

	declare interface ChangeFontFormattingCommand {
		execute(settings: FontFormattingSettings): boolean,
		getState(): any
	}

	declare interface FontFormattingSettings {
		fontName: string,
		size: number,
		foreColor: string,
		backColor: string,
		underline: boolean,
		underlineColor: string,
		bold: boolean,
		italic: boolean,
		boolean: boolean,
		underlineWordsOnly: boolean,
		script: any,
		allCaps: boolean,
		hidden: boolean
	}

	declare interface ShowHorizontalRulerCommand {
		execute(): boolean,
		execute(show: boolean): boolean
	}

	declare interface SetFullscreenCommand {
		execute(): boolean,
		execute(fullscreen: boolean): boolean
	}

	declare interface ASPxClientAppointmentFlags {
		allowDelete: boolean,
		allowEdit: boolean,
		allowResize: boolean,
		allowCopy: boolean,
		allowDrag: boolean,
		allowDragBetweenResources: boolean,
		allowInplaceEditor: boolean,
		allowConflicts: boolean
	}

	declare interface ASPxClientAppointment {
		interval: ASPxClientTimeInterval,
		resources: string[],
		appointmentId: string,
		appointmentType: ASPxAppointmentType,
		statusIndex: number,
		labelIndex: number,
		subject: string,
		description: string,
		location: string,
		allDay: boolean,
		AddResource(resourceId: Object): void,
		GetResource(index: number): Object,
		SetStart(start: Date): void,
		GetStart(): Date,
		SetEnd(end: Date): void,
		GetEnd(): Date,
		SetDuration(duration: any): void,
		GetDuration(): number,
		SetId(id: Object): void,
		GetId(): Object,
		SetAppointmentType(type: ASPxAppointmentType): void,
		GetAppointmentType(): ASPxAppointmentType,
		SetStatusId(statusId: number): void,
		GetStatusId(): number,
		SetLabelId(statusId: number): void,
		GetLabelId(): number,
		SetSubject(subject: string): void,
		GetSubject(): string,
		SetDescription(description: string): void,
		GetDescription(): string,
		SetLocation(location: string): void,
		GetLocation(): string,
		SetAllDay(allDay: boolean): void,
		GetAllDay(): boolean,
		GetRecurrencePattern(): ASPxClientAppointment,
		SetRecurrenceInfo(recurrenceInfo: ASPxClientRecurrenceInfo): void,
		GetRecurrenceInfo(): ASPxClientRecurrenceInfo
	}

	declare interface ASPxClientPoint {
		GetX(): number,
		GetY(): number
	}

	declare interface ASPxClientRect {
		GetLeft(): number,
		GetRight(): number,
		GetTop(): number,
		GetBottom(): number,
		GetWidth(): number,
		GetHeight(): number
	}

	declare interface ASPxClientRecurrenceInfo {
		SetStart(start: Date): void,
		GetStart(): Date,
		SetEnd(end: Date): void,
		GetEnd(): Date,
		SetDuration(duration: any): void,
		GetDuration(): number,
		SetRecurrenceType(type: ASPxClientRecurrenceType): void,
		GetRecurrenceType(): ASPxClientRecurrenceType,
		SetWeekDays(weekDays: ASPxClientWeekDays): void,
		GetWeekDays(): ASPxClientWeekDays,
		SetOccurrenceCount(occurrenceCount: number): void,
		GetOccurrenceCount(): number,
		SetPeriodicity(periodicity: number): void,
		GetPeriodicity(): number,
		SetDayNumber(dayNubmer: number): void,
		GetDayNumber(): number,
		SetWeekOfMonth(weekOfMonth: ASPxClientWeekOfMonth): void,
		GetWeekOfMonth(): ASPxClientWeekOfMonth,
		SetMonth(month: number): void,
		GetMonth(): number,
		GetRange(): ASPxClientRecurrenceRange,
		SetRange(range: ASPxClientRecurrenceRange): void
	}

	declare interface ASPxClientRecurrenceRange {
		NoEndDate: string,
		OccurrenceCount: string,
		EndByDate: string
	}

	declare interface ASPxClientRecurrenceType {
		Daily: string,
		Weekly: string,
		Monthly: string,
		Yearly: string,
		Hourly: string
	}

	declare interface ASPxClientWeekDays {
		Sunday: number,
		Monday: number,
		Tuesday: number,
		Wednesday: number,
		Thursday: number,
		Friday: number,
		Saturday: number,
		WeekendDays: number,
		WorkDays: number,
		EveryDay: number
	}

	declare interface ASPxClientWeekOfMonth {
		None: number,
		First: number,
		Second: number,
		Third: number,
		Fourth: number,
		Last: number
	}

	declare interface ASPxClientWeekDaysCheckEdit {
		GetValue(): ASPxClientWeekDays,
		SetValue(value: ASPxClientWeekDays): void
	}

	declare interface ASPxClientRecurrenceRangeControl {
		GetRange(): ASPxClientRecurrenceRange,
		GetOccurrenceCount(): number,
		GetEndDate(): Date,
		SetRange(range: ASPxClientRecurrenceRange): void,
		SetOccurrenceCount(occurrenceCount: number): void,
		SetEndDate(date: Date): void
	}

	declare interface ASPxClientRecurrenceControlBase {
		CreateValueAccessor(): DefaultRecurrenceRuleValuesAccessor,
		Update(recurrenceInfo: ASPxClientRecurrenceInfo): void
	}

	declare interface ASPxClientDailyRecurrenceControl {
		CreateValueAccessor(): DefaultRecurrenceRuleValuesAccessor,
		Update(recurrenceInfo: ASPxClientRecurrenceInfo): void
	}

	declare interface ASPxClientWeeklyRecurrenceControl {
		CreateValueAccessor(): DefaultRecurrenceRuleValuesAccessor,
		Update(recurrenceInfo: ASPxClientRecurrenceInfo): void
	}

	declare interface ASPxClientMonthlyRecurrenceControl {
		CreateValueAccessor(): DefaultRecurrenceRuleValuesAccessor,
		Update(recurrenceInfo: ASPxClientRecurrenceInfo): void
	}

	declare interface ASPxClientYearlyRecurrenceControl {
		CreateValueAccessor(): DefaultRecurrenceRuleValuesAccessor,
		Update(recurrenceInfo: ASPxClientRecurrenceInfo): void
	}

	declare interface DefaultRecurrenceRuleValuesAccessor {
		GetPeriodicity(): number,
		GetDayNumber(): number,
		GetMonth(): number,
		GetWeekDays(): ASPxClientWeekDays,
		GetWeekOfMonth(): ASPxClientWeekOfMonth
	}

	declare interface DailyRecurrenceValuesAccessor {
		GetPeriodicity(): number,
		GetWeekDays(): ASPxClientWeekDays
	}

	declare interface WeeklyRecurrenceValuesAccessor {
		GetPeriodicity(): number,
		GetWeekDays(): ASPxClientWeekDays
	}

	declare interface MonthlyRecurrenceValuesAccessor {
		GetDayNumber(): number,
		GetPeriodicity(): number,
		GetWeekDays(): ASPxClientWeekDays,
		GetWeekOfMonth(): ASPxClientWeekOfMonth
	}

	declare interface YearlyRecurrenceValuesAccessor {
		GetDayNumber(): number,
		GetMonth(): number,
		GetWeekDays(): ASPxClientWeekDays,
		GetWeekOfMonth(): ASPxClientWeekOfMonth
	}

	declare interface ASPxClientFormBase {
		FormClosed: ASPxClientEvent<ASPxClientEventHandler<ASPxClientFormBase>>,
		Close(): void,
		SetVisibleCore(element: Object, isVisible: boolean): void
	}

	declare interface ASPxClientRecurrenceTypeEdit {
		GetRecurrenceType(): ASPxClientRecurrenceType,
		SetRecurrenceType(recurrenceType: ASPxClientRecurrenceType): void
	}

	declare interface AppointmentPropertyNames {
		Normal: string,
		Pattern: string
	}

	declare interface ASPxClientTimeInterval {
		GetAllDay(): boolean,
		SetAllDay(allDayValue: boolean): void,
		GetStart(): Date,
		GetDuration(): number,
		GetEnd(): Date,
		SetStart(value: Date): void,
		SetDuration(value: any): void,
		SetEnd(value: Date): void,
		Equals(interval: ASPxClientTimeInterval): boolean,
		IntersectsWith(interval: ASPxClientTimeInterval): boolean,
		IntersectsWithExcludingBounds(interval: ASPxClientTimeInterval): boolean,
		Contains(interval: ASPxClientTimeInterval): boolean
	}

	declare interface ASPxClientSchedulerRefreshAction {
		None: number,
		VisibleIntervalChanged: number,
		ActiveViewTypeChanged: number
	}

	declare interface ASPxClientAppointmentOperation {
		Apply(): void,
		Cancel(): void
	}

	declare interface ASPxClientScheduler {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientScheduler>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientScheduler>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientScheduler>>,
		ActiveViewChanging: ASPxClientEvent<ActiveViewChangingEventHandler<ASPxClientScheduler>>,
		ActiveViewChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientScheduler>>,
		AppointmentClick: ASPxClientEvent<AppointmentClickEventHandler<ASPxClientScheduler>>,
		AppointmentDoubleClick: ASPxClientEvent<AppointmentClickEventHandler<ASPxClientScheduler>>,
		AppointmentsSelectionChanged: ASPxClientEvent<AppointmentsSelectionEventHandler<ASPxClientScheduler>>,
		SelectionChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientScheduler>>,
		SelectionChanging: ASPxClientEvent<ASPxClientEventHandler<ASPxClientScheduler>>,
		VisibleIntervalChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientScheduler>>,
		MoreButtonClicked: ASPxClientEvent<MoreButtonClickedEventHandler<ASPxClientScheduler>>,
		MenuItemClicked: ASPxClientEvent<MenuItemClickedEventHandler<ASPxClientScheduler>>,
		AppointmentDrop: ASPxClientEvent<AppointmentDropEventHandler<ASPxClientScheduler>>,
		AppointmentResize: ASPxClientEvent<AppointmentResizeEventHandler<ASPxClientScheduler>>,
		AppointmentDeleting: ASPxClientEvent<ASPxClientAppointmentDeletingEventHandler<ASPxClientScheduler>>,
		GetActiveViewType(): ASPxSchedulerViewType,
		SetActiveViewType(value: ASPxSchedulerViewType): void,
		PerformCallback(parameter: string): void,
		Refresh(): void,
		Refresh(refreshAction: ASPxClientSchedulerRefreshAction): void,
		GetGroupType(): ASPxSchedulerGroupType,
		SetGroupType(value: ASPxSchedulerGroupType): void,
		GotoToday(): void,
		GotoDate(date: Date): void,
		NavigateBackward(): void,
		NavigateForward(): void,
		ChangeTimeZoneId(timeZoneId: string): void,
		ShowSelectionToolTip(x: number, y: number): void,
		GetSelectedInterval(): ASPxClientTimeInterval,
		GetSelectedResource(): string,
		GetAppointmentById(id: Object): ASPxClientAppointment,
		GetSelectedAppointmentIds(): string[],
		DeselectAppointmentById(aptId: Object): void,
		SelectAppointmentById(aptId: Object): void,
		GetAppointmentProperties(aptId: number, propertyNames: string[], onCallBack: Object): string[],
		RefreshClientAppointmentProperties(
		clientAppointment: ASPxClientAppointment, propertyNames: string[], onCallBack: Object
	): void,
		ShowAppointmentFormByClientId(aptClientId: string): void,
		ShowAppointmentFormByServerId(aptServerId: string): void,
		SetTopRowTime(duration: number, viewType: ASPxSchedulerViewType): void,
		SetTopRowTime(duration: number): void,
		GetTopRowTime(viewType: ASPxSchedulerViewType): number,
		GetTopRowTime(): number,
		ShowLoadingPanel(): void,
		HideLoadingPanel(): void,
		ShowInplaceEditor(start: Date, end: Date): void,
		ShowInplaceEditor(start: Date, end: Date, resourceId: string): void,
		InsertAppointment(apt: ASPxClientAppointment): void,
		UpdateAppointment(apt: ASPxClientAppointment): void,
		DeleteAppointment(apt: ASPxClientAppointment): void,
		GetVisibleIntervals(): ASPxClientTimeInterval[],
		ChangeToolTipContainer(container: Object): void,
		ChangePopupMenuContainer(container: Object): void,
		ChangeFormContainer(container: Object): void,
		AppointmentFormSave(): void,
		AppointmentFormDelete(): void,
		AppointmentFormCancel(): void,
		GoToDateFormApply(): void,
		GoToDateFormCancel(): void,
		InplaceEditFormSave(): void,
		InplaceEditFormCancel(): void,
		InplaceEditFormShowMore(): void,
		ReminderFormCancel(): void,
		ReminderFormDismiss(): void,
		ReminderFormDismissAll(): void,
		ReminderFormSnooze(): void
	}

	declare interface ASPxSchedulerViewType {
		Day: string,
		WorkWeek: string,
		Week: string,
		Month: string,
		Timeline: string,
		FullWeek: string
	}

	declare interface ASPxSchedulerGroupType {
		None: string,
		Date: string,
		Resource: string
	}

	declare interface ASPxAppointmentType {
		Normal: string,
		Pattern: string,
		Occurrence: string,
		ChangedOccurrence: string,
		DeletedOccurrence: string
	}

	declare interface ASPxClientAppointmentDeletingEventHandler<S> {
		(source: S, e: ASPxClientAppointmentDeletingEventArgs): void
	}

	declare interface ASPxClientAppointmentDeletingEventArgs {
		appointmentIds: Object[]
	}

	declare interface AppointmentClickEventHandler<S> {
		(source: S, e: AppointmentClickEventArgs): void
	}

	declare interface AppointmentClickEventArgs {
		appointmentId: string,
		htmlElement: Object,
		handled: boolean
	}

	declare interface AppointmentsSelectionEventHandler<S> {
		(source: S, e: AppointmentsSelectionEventArgs): void
	}

	declare interface AppointmentsSelectionEventArgs {
		appointmentIds: string[]
	}

	declare interface ActiveViewChangingEventHandler<S> {
		(source: S, e: ActiveViewChangingEventArgs): void
	}

	declare interface ActiveViewChangingEventArgs {
		oldView: ASPxSchedulerViewType,
		newView: ASPxSchedulerViewType,
		cancel: boolean
	}

	declare interface MoreButtonClickedEventHandler<S> {
		(source: S, e: MoreButtonClickedEventArgs): void
	}

	declare interface MoreButtonClickedEventArgs {
		targetDateTime: Date,
		interval: ASPxClientTimeInterval,
		resource: string,
		handled: boolean
	}

	declare interface MenuItemClickedEventHandler<S> {
		(source: S, e: MenuItemClickedEventArgs): void
	}

	declare interface MenuItemClickedEventArgs {
		itemName: string,
		handled: boolean
	}

	declare interface AppointmentDropEventHandler<S> {
		(source: S, e: ASPxClientAppointmentDragEventArgs): void
	}

	declare interface ASPxClientAppointmentDragEventArgs {
		handled: boolean,
		operation: ASPxClientAppointmentOperation,
		dragInformation: ASPxClientAppointmentDragInfo[]
	}

	declare interface AppointmentResizeEventHandler<S> {
		(source: S, e: ASPxClientAppointmentResizeEventArgs): void
	}

	declare interface ASPxClientAppointmentResizeEventArgs {
		handled: boolean,
		operation: ASPxClientAppointmentOperation,
		appointmentId: string,
		oldInterval: ASPxClientTimeInterval,
		newInterval: ASPxClientTimeInterval
	}

	declare interface ASPxClientAppointmentDragInfo {
		appointmentId: string,
		oldInterval: ASPxClientTimeInterval,
		oldResources: string[],
		newInterval: ASPxClientTimeInterval,
		newResources: string[]
	}

	declare interface ASPxClientSchedulerToolTipData {
		GetAppointment(): ASPxClientAppointment,
		GetInterval(): ASPxClientTimeInterval,
		GetResources(): Object[]
	}

	declare interface ASPxClientToolTipBase {
		CanShowToolTip(): boolean,
		FinalizeUpdate(toolTipData: ASPxClientSchedulerToolTipData): void,
		Update(toolTipData: ASPxClientSchedulerToolTipData): void,
		Close(): void,
		CalculatePosition(bounds: Object): ASPxClientPoint,
		ShowAppointmentMenu(eventObject: Object): void,
		ShowViewMenu(eventObject: Object): void,
		ConvertIntervalToString(interval: ASPxClientTimeInterval): string
	}

	declare interface ASPxClientSpellChecker {
		BeforeCheck: ASPxClientEvent<ASPxClientBeforeCheckEventHandler<ASPxClientSpellChecker>>,
		CheckCompleteFormShowing: ASPxClientEvent<ASPxClientCancelEventHandler<ASPxClientSpellChecker>>,
		AfterCheck: ASPxClientEvent<ASPxClientAfterCheckEventHandler<ASPxClientSpellChecker>>,
		WordChanged: ASPxClientEvent<ASPxClientWordChangedEventHandler<ASPxClientSpellChecker>>,
		Check(): void,
		CheckElement(element: Object): void,
		CheckElementById(id: string): void,
		CheckElementsInContainer(containerElement: Object): void,
		CheckElementsInContainerById(containerId: string): void
	}

	declare interface ASPxClientBeforeCheckEventHandler<S> {
		(source: S, e: ASPxClientSpellCheckerBeforeCheckEventArgs): void
	}

	declare interface ASPxClientSpellCheckerBeforeCheckEventArgs {
		controlId: string
	}

	declare interface ASPxClientAfterCheckEventHandler<S> {
		(source: S, e: ASPxClientSpellCheckerAfterCheckEventArgs): void
	}

	declare interface ASPxClientSpellCheckerAfterCheckEventArgs {
		controlId: string,
		checkedText: string
	}

	declare interface ASPxClientWordChangedEventHandler<S> {
		(source: S, e: ASPxClientSpellCheckerAfterCheckEventArgs): void
	}

	declare interface ASPxClientSpreadsheetCustomCommandExecutedEventHandler<S> {
		(source: S, e: ASPxClientSpreadsheetCustomCommandExecutedEventArgs): void
	}

	declare interface ASPxClientSpreadsheetCustomCommandExecutedEventArgs {
		commandName: string,
		parameter: string,
		item: ASPxClientRibbonItem
	}

	declare interface ASPxClientSpreadsheetDocumentChangedEventHandler<S> {
		(source: S, e: ASPxClientSpreadsheetDocumentChangedEventArgs): void
	}

	declare interface ASPxClientSpreadsheetDocumentChangedEventArgs {
		
	}

	declare interface ASPxClientSpreadsheetSynchronizationEventHandler<S> {
		(source: S, e: ASPxClientSpreadsheetSynchronizationEventArgs): void
	}

	declare interface ASPxClientSpreadsheetSynchronizationEventArgs {
		
	}

	declare interface ASPxClientSpreadsheetHyperlinkClickEventHandler<S> {
		(source: S, e: ASPxClientSpreadsheetHyperlinkClickEventArgs): void
	}

	declare interface ASPxClientSpreadsheetHyperlinkClickEventArgs {
		handled: boolean,
		htmlEvent: Object,
		hyperlinkType: ASPxClientOfficeDocumentLinkType,
		targetUri: string
	}

	declare interface ASPxClientSpreadsheet {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientSpreadsheet>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientSpreadsheet>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientSpreadsheet>>,
		SelectionChanged: ASPxClientEvent<ASPxClientSpreadsheetSelectionChangedEventHandler<ASPxClientSpreadsheet>>,
		CustomCommandExecuted: ASPxClientEvent<ASPxClientSpreadsheetCustomCommandExecutedEventHandler<ASPxClientSpreadsheet>>,
		DocumentChanged: ASPxClientEvent<ASPxClientSpreadsheetDocumentChangedEventHandler<ASPxClientSpreadsheet>>,
		BeginSynchronization: ASPxClientEvent<ASPxClientSpreadsheetSynchronizationEventHandler<ASPxClientSpreadsheet>>,
		EndSynchronization: ASPxClientEvent<ASPxClientSpreadsheetSynchronizationEventHandler<ASPxClientSpreadsheet>>,
		HyperlinkClick: ASPxClientEvent<ASPxClientSpreadsheetHyperlinkClickEventHandler<ASPxClientSpreadsheet>>,
		Focus(): void,
		GetRibbon(): ASPxClientRibbon,
		SetFullscreenMode(fullscreen: boolean): void,
		GetSelection(): ASPxClientSpreadsheetSelection,
		HasUnsavedChanges(): boolean,
		GetCellValue(colModelIndex: number, rowModelIndex: number): Object,
		GetActiveCellValue(): Object,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void,
		PerformDocumentCallback(parameter: string): void,
		ReconnectToExternalRibbon(): void
	}

	declare interface ASPxClientSpreadsheetSelectionChangedEventHandler<S> {
		(source: S, e: ASPxClientSpreadsheetSelectionChangedEventArgs): void
	}

	declare interface ASPxClientSpreadsheetSelectionChangedEventArgs {
		selection: ASPxClientSpreadsheetSelection
	}

	declare interface ASPxClientSpreadsheetSelection {
		activeCellColumnIndex: number,
		activeCellRowIndex: number,
		leftColumnIndex: number,
		topRowIndex: number,
		rightColumnIndex: number,
		bottomRowIndex: number
	}

	declare interface ASPxClientTreeList {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientTreeList>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientTreeList>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientTreeList>>,
		ContextMenu: ASPxClientEvent<ASPxClientTreeListContextMenuEventHandler<ASPxClientTreeList>>,
		CustomButtonClick: ASPxClientEvent<ASPxClientTreeListCustomButtonEventHandler<ASPxClientTreeList>>,
		NodeFocusing: ASPxClientEvent<ASPxClientTreeListNodeEventHandler<ASPxClientTreeList>>,
		FocusedNodeChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientTreeList>>,
		SelectionChanged: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientTreeList>>,
		CustomizationWindowCloseUp: ASPxClientEvent<ASPxClientEventHandler<ASPxClientTreeList>>,
		CustomDataCallback: ASPxClientEvent<ASPxClientTreeListCustomDataCallbackEventHandler<ASPxClientTreeList>>,
		NodeClick: ASPxClientEvent<ASPxClientTreeListNodeEventHandler<ASPxClientTreeList>>,
		NodeDblClick: ASPxClientEvent<ASPxClientTreeListNodeEventHandler<ASPxClientTreeList>>,
		NodeExpanding: ASPxClientEvent<ASPxClientTreeListNodeEventHandler<ASPxClientTreeList>>,
		NodeCollapsing: ASPxClientEvent<ASPxClientTreeListNodeEventHandler<ASPxClientTreeList>>,
		StartDragNode: ASPxClientEvent<ASPxClientTreeListStartDragNodeEventHandler<ASPxClientTreeList>>,
		EndDragNode: ASPxClientEvent<ASPxClientTreeListEndDragNodeEventHandler<ASPxClientTreeList>>,
		ColumnResizing: ASPxClientEvent<ASPxClientTreeListColumnResizingEventHandler<ASPxClientTreeList>>,
		ColumnResized: ASPxClientEvent<ASPxClientTreeListColumnResizedEventHandler<ASPxClientTreeList>>,
		Focus(): void,
		GetPopupEditForm(): ASPxClientPopupControl,
		GetFocusedNodeKey(): string,
		SetFocusedNodeKey(key: string): void,
		IsNodeSelected(nodeKey: string): any,
		SelectNode(nodeKey: string): void,
		SelectNode(nodeKey: string, state: boolean): void,
		GetVisibleSelectedNodeKeys(): string[],
		IsCustomizationWindowVisible(): boolean,
		ShowCustomizationWindow(): void,
		ShowCustomizationWindow(htmlElement: Object): void,
		HideCustomizationWindow(): void,
		PerformCustomCallback(arg: string): void,
		PerformCallback(args: string): void,
		PerformCallback(args: string, onSuccess: (arg1: string) => void): void,
		PerformCustomDataCallback(arg: string): void,
		GetNodeValues(
		nodeKey: string, fieldNames: string, onCallback: ASPxClientTreeListValuesCallback
	): void,
		GetNodeValues(
		nodeKey: string, fieldNames: string[], onCallback: ASPxClientTreeListValuesCallback
	): void,
		GetVisibleNodeValues(fieldNames: string, onCallback: ASPxClientTreeListValuesCallback): void,
		GetVisibleNodeValues(fieldNames: string[], onCallback: ASPxClientTreeListValuesCallback): void,
		GetSelectedNodeValues(fieldNames: string, onCallback: ASPxClientTreeListValuesCallback): void,
		GetSelectedNodeValues(fieldNames: string[], onCallback: ASPxClientTreeListValuesCallback): void,
		GetSelectedNodeValues(
		fieldNames: string, onCallback: ASPxClientTreeListValuesCallback, visibleOnly: boolean
	): void,
		GetSelectedNodeValues(
		fieldNames: string[], onCallback: ASPxClientTreeListValuesCallback, visibleOnly: boolean
	): void,
		GoToPage(index: number): void,
		PrevPage(): void,
		NextPage(): void,
		GetPageIndex(): number,
		GetPageCount(): number,
		GetNodeState(nodeKey: string): string,
		ExpandAll(): void,
		CollapseAll(): void,
		ExpandNode(key: string): void,
		CollapseNode(key: string): void,
		GetVisibleNodeKeys(): string[],
		GetNodeHtmlElement(nodeKey: string): Object,
		GetVisibleColumnCount(): number,
		GetColumnCount(): number,
		GetColumnByIndex(index: number): ASPxClientTreeListColumn,
		GetColumnByName(name: string): ASPxClientTreeListColumn,
		GetColumnByFieldName(fieldName: string): ASPxClientTreeListColumn,
		SortBy(columnIndex: number): void,
		SortBy(columnIndex: number, sortOrder: string): void,
		SortBy(columnIndex: number, sortOrder: string, reset: boolean): void,
		SortBy(nameOrFieldName: string): void,
		SortBy(nameOrFieldName: string, sortOrder: string): void,
		SortBy(nameOrFieldName: string, sortOrder: string, reset: boolean): void,
		SortBy(column: ASPxClientTreeListColumn): void,
		SortBy(column: ASPxClientTreeListColumn, sortOrder: string): void,
		SortBy(column: ASPxClientTreeListColumn, sortOrder: string, reset: boolean): void,
		StartEdit(nodeKey: string): void,
		UpdateEdit(): void,
		CancelEdit(): void,
		IsEditing(): boolean,
		GetEditingNodeKey(): string,
		MoveNode(nodeKey: string, parentNodeKey: string): void,
		DeleteNode(nodeKey: string): void,
		StartEditNewNode(): void,
		StartEditNewNode(parentNodeKey: string): void,
		GetEditor(column: ASPxClientTreeListColumn): Object,
		GetEditor(columnIndex: number): Object,
		GetEditor(columnNameOrFieldName: string): Object,
		GetEditValue(column: ASPxClientTreeListColumn): Object,
		GetEditValue(columnIndex: number): Object,
		GetEditValue(columnNameOrFieldName: string): Object,
		SetEditValue(column: ASPxClientTreeListColumn, value: Object): void,
		SetEditValue(columnIndex: number, value: Object): void,
		SetEditValue(columnNameOrFieldName: string, value: Object): void,
		FocusEditor(column: ASPxClientTreeListColumn): void,
		FocusEditor(columnIndex: number): void,
		FocusEditor(columnNameOrFieldName: string): void,
		MakeNodeVisible(nodeKey: string): void,
		GetVerticalScrollPosition(): number,
		GetHorizontalScrollPosition(): number,
		SetVerticalScrollPosition(position: number): void,
		SetHorizontalScrollPosition(position: number): void
	}

	declare interface ASPxClientTreeListColumn {
		index: number,
		name: string,
		fieldName: string
	}

	declare interface ASPxClientTreeListCustomDataCallbackEventArgs {
		arg: string,
		result: Object
	}

	declare interface ASPxClientTreeListCustomDataCallbackEventHandler<S> {
		(source: S, e: ASPxClientTreeListCustomDataCallbackEventArgs): void
	}

	declare interface ASPxClientTreeListNodeEventArgs {
		nodeKey: string,
		htmlEvent: Object,
		cancel: boolean
	}

	declare interface ASPxClientTreeListNodeEventHandler<S> {
		(source: S, e: ASPxClientTreeListNodeEventArgs): void
	}

	declare interface ASPxClientTreeListContextMenuEventArgs {
		objectType: string,
		objectKey: Object,
		htmlEvent: Object,
		cancel: boolean
	}

	declare interface ASPxClientTreeListContextMenuEventHandler<S> {
		(source: S, e: ASPxClientTreeListContextMenuEventArgs): void
	}

	declare interface ASPxClientTreeListStartDragNodeEventArgs {
		targets: Object[]
	}

	declare interface ASPxClientTreeListStartDragNodeEventHandler<S> {
		(source: S, e: ASPxClientTreeListStartDragNodeEventArgs): void
	}

	declare interface ASPxClientTreeListEndDragNodeEventArgs {
		targetElement: Object
	}

	declare interface ASPxClientTreeListEndDragNodeEventHandler<S> {
		(source: S, e: ASPxClientTreeListEndDragNodeEventArgs): void
	}

	declare interface ASPxClientTreeListCustomButtonEventArgs {
		nodeKey: string,
		buttonIndex: number,
		buttonID: string
	}

	declare interface ASPxClientTreeListCustomButtonEventHandler<S> {
		(source: S, e: ASPxClientTreeListCustomButtonEventArgs): void
	}

	declare interface ASPxClientTreeListValuesCallback {
		(result: Object): void
	}

	declare interface ASPxClientTreeListColumnResizingEventArgs {
		column: ASPxClientTreeListColumn
	}

	declare interface ASPxClientTreeListColumnResizingEventHandler<S> {
		(source: S, e: ASPxClientTreeListColumnResizingEventArgs): void
	}

	declare interface ASPxClientTreeListColumnResizedEventArgs {
		column: ASPxClientTreeListColumn
	}

	declare interface ASPxClientTreeListColumnResizedEventHandler<S> {
		(source: S, e: ASPxClientTreeListColumnResizedEventArgs): void
	}

	declare interface MVCxClientCalendar {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientCalendar>>
	}

	declare interface MVCxClientCallbackPanel {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientCallbackPanel>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientCardView {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientCardView>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		GetValuesOnCustomCallback(data: Object, onCallback: ASPxClientCardViewValuesCallback): void,
		PerformCallback(args: string): void,
		GetValuesOnCustomCallback(args: string, onCallback: ASPxClientCardViewValuesCallback): void
	}

	declare interface MVCxClientChart {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientChart>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(args: string): void,
		PerformCallback(args: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientComboBox {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientComboBox>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void
	}

	declare interface MVCxClientDataView {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientDataView>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientDateEdit {
		
	}

	declare interface MVCxClientDockManager {
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientDockPanel {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientDockPanel>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void
	}

	declare interface MVCxClientFileManager {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientFileManager>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(args: string): void,
		PerformCallback(args: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientGridView {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientGridView>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		GetValuesOnCustomCallback(data: Object, onCallback: ASPxClientGridViewValuesCallback): void,
		PerformCallback(args: string): void,
		GetValuesOnCustomCallback(args: string, onCallback: ASPxClientGridViewValuesCallback): void
	}

	declare interface MVCxClientHtmlEditor {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientHtmlEditor>>,
		PerformDataCallback(data: Object): void,
		PerformDataCallback(data: Object, onCallback: ASPxClientDataCallback): void,
		PerformDataCallback(parameter: string, onCallback: ASPxClientDataCallback): void
	}

	declare interface MVCxClientImageGallery {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientImageGallery>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientListBox {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientListBox>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void
	}

	declare interface MVCxClientNavBar {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientNavBar>>
	}

	declare interface MVCxClientPivotGrid {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientPivotGrid>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		FillStateObject(obj: Object): void,
		PerformCallback(args: string): void,
		PerformCallback(args: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientPopupControl {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientPopupControl>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformWindowCallback(window: ASPxClientPopupWindow, data: Object): void,
		PerformWindowCallback(window: ASPxClientPopupWindow, parameter: string): void,
		PerformWindowCallback(
		window: ASPxClientPopupWindow, parameter: string, onSuccess: (arg1: string) => void
	): void,
		PerformCallback(parameter: string): void
	}

	declare interface MVCxClientDocumentViewer {
		BeforeExportRequest: ASPxClientEvent<MVCxClientBeforeExportRequestEventHandler<MVCxClientDocumentViewer>>,
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientDocumentViewer>>
	}

	declare interface MVCxClientReportViewer {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientReportViewer>>,
		BeforeExportRequest: ASPxClientEvent<MVCxClientBeforeExportRequestEventHandler<MVCxClientReportViewer>>
	}

	declare interface MVCxClientBeforeExportRequestEventHandler<S> {
		(source: S, e: MVCxClientBeforeExportRequestEventArgs): void
	}

	declare interface MVCxClientBeforeExportRequestEventArgs {
		customArgs: Object
	}

	declare interface MVCxClientReportDesigner {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientReportDesigner>>,
		SaveCommandExecuted: ASPxClientEvent<MVCxClientReportDesignerSaveCommandExecutedEventHandler<MVCxClientReportDesigner>>,
		PerformCallback(arg: Object): void,
		PerformCallback(arg: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(arg: string): void,
		PerformCallback(arg: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientReportDesignerSaveCommandExecutedEventHandler<S> {
		(source: S, e: MVCxClientReportDesignerSaveCommandExecutedEventArgs): void
	}

	declare interface MVCxClientReportDesignerSaveCommandExecutedEventArgs {
		Result: string
	}

	declare interface MVCxClientRichEdit {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientRichEdit>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientRoundPanel {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientRoundPanel>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientScheduler {
		ToolTipDisplaying: ASPxClientEvent<MVCxClientSchedulerToolTipDisplayingEventHandler<MVCxClientScheduler>>,
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientScheduler>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void
	}

	declare interface MVCxClientSchedulerTemplateToolTip {
		type: MVCxSchedulerToolTipType
	}

	declare interface MVCxClientSchedulerToolTipDisplayingEventHandler<S> {
		(source: S, e: MVCxClientSchedulerToolTipDisplayingEventArgs): void
	}

	declare interface MVCxClientSchedulerToolTipDisplayingEventArgs {
		toolTip: MVCxClientSchedulerTemplateToolTip,
		data: ASPxClientSchedulerToolTipData
	}

	declare interface MVCxSchedulerToolTipType {
		
	}

	declare interface MVCxClientSpreadsheet {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientSpreadsheet>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientPageControl {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientPageControl>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface MVCxClientTokenBox {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientTokenBox>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCallback(parameter: string): void
	}

	declare interface MVCxClientTreeList {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientTreeList>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		PerformCustomDataCallback(data: Object): void,
		PerformCallback(args: string): void,
		PerformCallback(args: string, onSuccess: (arg1: string) => void): void,
		PerformCustomDataCallback(arg: string): void
	}

	declare interface MVCxClientTreeView {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientTreeView>>
	}

	declare interface MVCxClientUploadControl {
		
	}

	declare interface MVCxClientBeginCallbackEventHandler<S> {
		(source: S, e: MVCxClientBeginCallbackEventArgs): void
	}

	declare interface MVCxClientBeginCallbackEventArgs {
		customArgs: Object
	}

	declare interface MVCxClientGlobalBeginCallbackEventHandler<S> {
		(source: S, e: MVCxClientGlobalBeginCallbackEventArgs): void
	}

	declare interface MVCxClientGlobalBeginCallbackEventArgs {
		customArgs: Object
	}

	declare interface MVCxClientGlobalEvents {
		ControlsInitialized: ASPxClientEvent<ASPxClientControlsInitializedEventHandler<MVCxClientGlobalEvents>>,
		BeginCallback: ASPxClientEvent<MVCxClientGlobalBeginCallbackEventHandler<MVCxClientGlobalEvents>>,
		EndCallback: ASPxClientEvent<ASPxClientGlobalEndCallbackEventHandler<MVCxClientGlobalEvents>>,
		CallbackError: ASPxClientEvent<ASPxClientGlobalCallbackErrorEventHandler<MVCxClientGlobalEvents>>
	}

	declare interface MVCxClientVerticalGrid {
		BeginCallback: ASPxClientEvent<MVCxClientBeginCallbackEventHandler<MVCxClientVerticalGrid>>,
		PerformCallback(data: Object): void,
		PerformCallback(data: Object, onSuccess: (arg1: string) => void): void,
		GetValuesOnCustomCallback(data: Object, onCallback: ASPxClientGridViewValuesCallback): void,
		PerformCallback(args: string): void,
		GetValuesOnCustomCallback(args: string, onCallback: ASPxClientVerticalGridValuesCallback): void
	}

	declare interface MVCxClientWebDocumentViewer {
		
	}

	declare interface ASPxClientControlBase {
		name: string,
		Init: ASPxClientEvent<ASPxClientEventHandler<ASPxClientControlBase>>,
		GetMainElement(): Object,
		GetClientVisible(): boolean,
		SetClientVisible(visible: boolean): void,
		GetVisible(): boolean,
		SetVisible(visible: boolean): void,
		InCallback(): boolean
	}

	declare interface ASPxClientControl {
		GetWidth(): number,
		GetHeight(): number,
		SetWidth(width: number): void,
		SetHeight(height: number): void,
		AdjustControl(): void
	}

	declare interface ASPxClientCallback {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientCallback>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientCallback>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientCallback>>,
		CallbackComplete: ASPxClientEvent<ASPxClientCallbackCompleteEventHandler<ASPxClientCallback>>,
		SendCallback(parameter: string): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface ASPxClientCallbackCompleteEventHandler<S> {
		(source: S, e: ASPxClientCallbackCompleteEventArgs): void
	}

	declare interface ASPxClientEventArgs {
		
	}

	declare interface ASPxClientCallbackCompleteEventArgs {
		parameter: string,
		result: string
	}

	declare interface ASPxClientCallbackPanel {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientCallbackPanel>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientCallbackPanel>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientCallbackPanel>>,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void,
		GetLoadingPanelText(): string,
		SetLoadingPanelText(loadingPanelText: string): void,
		SetEnabled(enabled: boolean): void,
		GetEnabled(): boolean
	}

	declare interface ASPxClientEvent<T> {
		AddHandler(handler: T): void,
		RemoveHandler(handler: T): void,
		ClearHandlers(): void,
		FireEvent(source: Object, e: ASPxClientEventArgs): void
	}

	declare interface ASPxClientEventHandler<S> {
		(source: S, e: ASPxClientEventArgs): void
	}

	declare interface ASPxClientCancelEventHandler<S> {
		(source: S, e: ASPxClientCancelEventArgs): void
	}

	declare interface ASPxClientCancelEventArgs {
		cancel: boolean
	}

	declare interface ASPxClientProcessingModeEventHandler<S> {
		(source: S, e: ASPxClientProcessingModeEventArgs): void
	}

	declare interface ASPxClientProcessingModeEventArgs {
		processOnServer: boolean
	}

	declare interface ASPxClientProcessingModeCancelEventHandler<S> {
		(source: S, e: ASPxClientProcessingModeCancelEventArgs): void
	}

	declare interface ASPxClientProcessingModeCancelEventArgs {
		cancel: boolean
	}

	declare interface ASPxClientDataCallback {
		(sender: Object, result: string): void
	}

	declare interface ASPxClientCloudControl {
		ItemClick: ASPxClientEvent<ASPxClientCloudControlItemEventHandler<ASPxClientCloudControl>>
	}

	declare interface ASPxClientCloudControlItemEventHandler<S> {
		(source: S, e: ASPxClientCloudControlItemEventArgs): void
	}

	declare interface ASPxClientCloudControlItemEventArgs {
		name: Object,
		htmlElement: Object,
		htmlEvent: Object
	}

	declare interface ASPxClientBeginCallbackEventHandler<S> {
		(source: S, e: ASPxClientBeginCallbackEventArgs): void
	}

	declare interface ASPxClientBeginCallbackEventArgs {
		command: string
	}

	declare interface ASPxClientGlobalBeginCallbackEventHandler<S> {
		(source: S, e: ASPxClientGlobalBeginCallbackEventArgs): void
	}

	declare interface ASPxClientGlobalBeginCallbackEventArgs {
		control: ASPxClientControl
	}

	declare interface ASPxClientEndCallbackEventHandler<S> {
		(source: S, e: ASPxClientEndCallbackEventArgs): void
	}

	declare interface ASPxClientEndCallbackEventArgs {
		
	}

	declare interface ASPxClientGlobalEndCallbackEventHandler<S> {
		(source: S, e: ASPxClientGlobalEndCallbackEventArgs): void
	}

	declare interface ASPxClientGlobalEndCallbackEventArgs {
		control: ASPxClientControl
	}

	declare interface ASPxClientCustomDataCallbackEventHandler<S> {
		(source: S, e: ASPxClientCustomDataCallbackEventArgs): void
	}

	declare interface ASPxClientCustomDataCallbackEventArgs {
		result: string
	}

	declare interface ASPxClientCallbackErrorEventHandler<S> {
		(source: S, e: ASPxClientCallbackErrorEventArgs): void
	}

	declare interface ASPxClientCallbackErrorEventArgs {
		message: string,
		handled: boolean
	}

	declare interface ASPxClientGlobalCallbackErrorEventHandler<S> {
		(source: S, e: ASPxClientGlobalCallbackErrorEventArgs): void
	}

	declare interface ASPxClientGlobalCallbackErrorEventArgs {
		control: ASPxClientControl
	}

	declare interface ASPxClientValidationCompletedEventHandler<S> {
		(source: S, e: ASPxClientValidationCompletedEventArgs): void
	}

	declare interface ASPxClientValidationCompletedEventArgs {
		container: Object,
		validationGroup: string,
		invisibleControlsValidated: boolean,
		isValid: boolean,
		firstInvalidControl: ASPxClientControl,
		firstVisibleInvalidControl: ASPxClientControl
	}

	declare interface ASPxClientControlsInitializedEventHandler<S> {
		(source: S, e: ASPxClientControlsInitializedEventArgs): void
	}

	declare interface ASPxClientControlsInitializedEventArgs {
		isCallback: boolean
	}

	declare interface ASPxClientControlPredicate {
		(control: Object): boolean
	}

	declare interface ASPxClientControlAction {
		(control: Object): void
	}

	declare interface ASPxClientControlCollection {
		ControlsInitialized: ASPxClientEvent<ASPxClientControlsInitializedEventHandler<ASPxClientControlCollection>>,
		BrowserWindowResized: ASPxClientEvent<ASPxClientEventHandler<ASPxClientControlCollection>>,
		BeginCallback: ASPxClientEvent<ASPxClientGlobalBeginCallbackEventHandler<ASPxClientControlCollection>>,
		EndCallback: ASPxClientEvent<ASPxClientGlobalEndCallbackEventHandler<ASPxClientControlCollection>>,
		CallbackError: ASPxClientEvent<ASPxClientGlobalCallbackErrorEventHandler<ASPxClientControlCollection>>,
		ValidationCompleted: ASPxClientEvent<ASPxClientValidationCompletedEventHandler<ASPxClientControlCollection>>,
		Get(name: Object): Object,
		GetByName(name: string): Object,
		GetControlsByPredicate(predicate: ASPxClientControlPredicate): Object[],
		GetControlsByType(type: Object): Object[],
		ForEachControl(action: ASPxClientControlAction): void
	}

	declare interface ASPxClientDataView {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientDataView>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientDataView>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientDataView>>,
		GotoPage(pageIndex: number): void,
		GetPageIndex(): number,
		GetPageSize(): number,
		SetPageSize(pageSize: number): void,
		GetPageCount(): number,
		NextPage(): void,
		PrevPage(): void,
		FirstPage(): void,
		LastPage(): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface ASPxClientDockingFilterPredicate {
		(item: Object): boolean
	}

	declare interface ASPxClientDockManager {
		BeforeDock: ASPxClientEvent<ASPxClientDockManagerProcessingModeCancelEventHandler<ASPxClientDockManager>>,
		AfterDock: ASPxClientEvent<ASPxClientDockManagerProcessingModeEventHandler<ASPxClientDockManager>>,
		BeforeFloat: ASPxClientEvent<ASPxClientDockManagerProcessingModeCancelEventHandler<ASPxClientDockManager>>,
		AfterFloat: ASPxClientEvent<ASPxClientDockManagerProcessingModeEventHandler<ASPxClientDockManager>>,
		StartPanelDragging: ASPxClientEvent<ASPxClientDockManagerEventHandler<ASPxClientDockManager>>,
		EndPanelDragging: ASPxClientEvent<ASPxClientDockManagerEventHandler<ASPxClientDockManager>>,
		PanelClosing: ASPxClientEvent<ASPxClientDockManagerCancelEventHandler<ASPxClientDockManager>>,
		PanelCloseUp: ASPxClientEvent<ASPxClientDockManagerEventHandler<ASPxClientDockManager>>,
		PanelPopUp: ASPxClientEvent<ASPxClientDockManagerEventHandler<ASPxClientDockManager>>,
		PanelShown: ASPxClientEvent<ASPxClientDockManagerEventHandler<ASPxClientDockManager>>,
		PanelResize: ASPxClientEvent<ASPxClientDockManagerEventHandler<ASPxClientDockManager>>,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void,
		GetZoneByUID(zoneUID: string): ASPxClientDockZone,
		GetPanelByUID(panelUID: string): ASPxClientDockPanel,
		GetPanels(): ASPxClientDockPanel[],
		GetPanels(filterPredicate: ASPxClientDockingFilterPredicate): ASPxClientDockPanel[],
		GetZones(): ASPxClientDockZone[],
		GetZones(filterPredicate: ASPxClientDockingFilterPredicate): ASPxClientDockZone[]
	}

	declare interface ASPxClientDockManagerProcessingModeCancelEventHandler<S> {
		(source: S, e: ASPxClientDockManagerProcessingModeCancelEventArgs): void
	}

	declare interface ASPxClientDockManagerProcessingModeCancelEventArgs {
		panel: ASPxClientDockPanel,
		zone: ASPxClientDockZone
	}

	declare interface ASPxClientDockManagerProcessingModeEventHandler<S> {
		(source: S, e: ASPxClientDockManagerProcessingModeEventArgs): void
	}

	declare interface ASPxClientDockManagerProcessingModeEventArgs {
		panel: ASPxClientDockPanel,
		zone: ASPxClientDockZone
	}

	declare interface ASPxClientDockManagerEventHandler<S> {
		(source: S, e: ASPxClientDockManagerEventArgs): void
	}

	declare interface ASPxClientDockManagerEventArgs {
		panel: ASPxClientDockPanel
	}

	declare interface ASPxClientDockManagerCancelEventHandler<S> {
		(source: S, e: ASPxClientDockManagerCancelEventArgs): void
	}

	declare interface ASPxClientDockManagerCancelEventArgs {
		panel: ASPxClientDockPanel
	}

	declare interface ASPxClientPopupControlBase {
		BeforeResizing: ASPxClientEvent<ASPxClientPopupWindowEventHandler<ASPxClientPopupControlBase>>,
		AfterResizing: ASPxClientEvent<ASPxClientPopupWindowEventHandler<ASPxClientPopupControlBase>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientPopupControlBase>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientPopupControlBase>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientPopupControlBase>>,
		CloseUp: ASPxClientEvent<ASPxClientPopupWindowCloseUpEventHandler<ASPxClientPopupControlBase>>,
		Closing: ASPxClientEvent<ASPxClientPopupWindowCancelEventHandler<ASPxClientPopupControlBase>>,
		PopUp: ASPxClientEvent<ASPxClientPopupWindowEventHandler<ASPxClientPopupControlBase>>,
		Resize: ASPxClientEvent<ASPxClientPopupWindowResizeEventHandler<ASPxClientPopupControlBase>>,
		Shown: ASPxClientEvent<ASPxClientPopupWindowEventHandler<ASPxClientPopupControlBase>>,
		PinnedChanged: ASPxClientEvent<ASPxClientPopupWindowPinnedChangedEventHandler<ASPxClientPopupControlBase>>,
		AdjustSize(): void,
		BringToFront(): void,
		GetCollapsed(): boolean,
		GetContentHtml(): string,
		GetContentIFrame(): Object,
		GetContentIFrameWindow(): Object,
		GetContentUrl(): string,
		GetFooterImageUrl(): string,
		GetFooterNavigateUrl(): string,
		GetFooterText(): string,
		GetHeaderImageUrl(): string,
		GetHeaderNavigateUrl(): string,
		GetHeaderText(): string,
		GetContentWidth(): number,
		GetContentHeight(): number,
		GetMaximized(): boolean,
		GetPinned(): boolean,
		PerformCallback(parameter: string): void,
		RefreshContentUrl(): void,
		SetCollapsed(value: boolean): void,
		SetContentHtml(html: string): void,
		SetContentUrl(url: string): void,
		SetFooterImageUrl(value: string): void,
		SetFooterNavigateUrl(value: string): void,
		SetFooterText(value: string): void,
		SetHeaderImageUrl(value: string): void,
		SetHeaderNavigateUrl(value: string): void,
		SetHeaderText(value: string): void,
		SetMaximized(value: boolean): void,
		SetPinned(value: boolean): void,
		Show(): void,
		Show(popupElementIndex: number): void,
		ShowAtElement(htmlElement: Object): void,
		ShowAtElementByID(id: string): void,
		ShowAtPos(x: number, y: number): void,
		Hide(): void,
		IsVisible(): boolean
	}

	declare interface ASPxClientDockPanel {
		panelUID: string,
		BeforeDock: ASPxClientEvent<ASPxClientDockPanelProcessingModeCancelEventHandler<ASPxClientDockPanel>>,
		AfterDock: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientDockPanel>>,
		BeforeFloat: ASPxClientEvent<ASPxClientDockPanelProcessingModeCancelEventHandler<ASPxClientDockPanel>>,
		AfterFloat: ASPxClientEvent<ASPxClientDockPanelProcessingModeEventHandler<ASPxClientDockPanel>>,
		StartDragging: ASPxClientEvent<ASPxClientEventHandler<ASPxClientDockPanel>>,
		EndDragging: ASPxClientEvent<ASPxClientEventHandler<ASPxClientDockPanel>>,
		GetOwnerZone(): ASPxClientDockZone,
		Dock(zone: ASPxClientDockZone): void,
		Dock(zone: ASPxClientDockZone, visibleIndex: number): void,
		MakeFloat(): void,
		MakeFloat(x: number, y: number): void,
		GetVisibleIndex(): number,
		SetVisibleIndex(visibleIndex: number): void,
		IsDocked(): boolean
	}

	declare interface ASPxClientDockPanelProcessingModeCancelEventHandler<S> {
		(source: S, e: ASPxClientDockPanelProcessingModeCancelEventArgs): void
	}

	declare interface ASPxClientDockPanelProcessingModeCancelEventArgs {
		zone: ASPxClientDockZone
	}

	declare interface ASPxClientDockPanelProcessingModeEventHandler<S> {
		(source: S, e: ASPxClientDockPanelProcessingModeEventArgs): void
	}

	declare interface ASPxClientDockPanelProcessingModeEventArgs {
		zone: ASPxClientDockZone
	}

	declare interface ASPxClientDockZone {
		zoneUID: string,
		BeforeDock: ASPxClientEvent<ASPxClientDockZoneCancelEventHandler<ASPxClientDockZone>>,
		AfterDock: ASPxClientEvent<ASPxClientDockZoneProcessingModeEventHandler<ASPxClientDockZone>>,
		IsVertical(): boolean,
		GetAllowGrowing(): boolean,
		GetPanelCount(): number,
		GetPanelByUID(panelUID: string): ASPxClientDockPanel,
		GetPanelByVisibleIndex(visibleIndex: number): ASPxClientDockPanel,
		GetPanels(): ASPxClientDockPanel[],
		GetPanels(filterPredicate: ASPxClientDockingFilterPredicate): ASPxClientDockPanel[]
	}

	declare interface ASPxClientDockZoneCancelEventHandler<S> {
		(source: S, e: ASPxClientDockZoneCancelEventArgs): void
	}

	declare interface ASPxClientDockZoneCancelEventArgs {
		panel: ASPxClientDockPanel
	}

	declare interface ASPxClientDockZoneProcessingModeEventHandler<S> {
		(source: S, e: ASPxClientDockZoneProcessingModeEventArgs): void
	}

	declare interface ASPxClientDockZoneProcessingModeEventArgs {
		panel: ASPxClientDockPanel
	}

	declare interface ASPxClientFileManager {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientFileManager>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientFileManager>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientFileManager>>,
		SelectedFileChanged: ASPxClientEvent<ASPxClientFileManagerFileEventHandler<ASPxClientFileManager>>,
		SelectedFileOpened: ASPxClientEvent<ASPxClientFileManagerFileOpenedEventHandler<ASPxClientFileManager>>,
		FocusedItemChanged: ASPxClientEvent<ASPxClientFileManagerFocusedItemChangedEventHandler<ASPxClientFileManager>>,
		SelectionChanged: ASPxClientEvent<ASPxClientFileManagerSelectionChangedEventHandler<ASPxClientFileManager>>,
		CurrentFolderChanged: ASPxClientEvent<ASPxClientFileManagerCurrentFolderChangedEventHandler<ASPxClientFileManager>>,
		FolderCreating: ASPxClientEvent<ASPxClientFileManagerItemEditingEventHandler<ASPxClientFileManager>>,
		FolderCreated: ASPxClientEvent<ASPxClientFileManagerItemCreatedEventHandler<ASPxClientFileManager>>,
		ItemRenaming: ASPxClientEvent<ASPxClientFileManagerItemEditingEventHandler<ASPxClientFileManager>>,
		ItemRenamed: ASPxClientEvent<ASPxClientFileManagerItemRenamedEventHandler<ASPxClientFileManager>>,
		ItemDeleting: ASPxClientEvent<ASPxClientFileManagerItemEditingEventHandler<ASPxClientFileManager>>,
		ItemDeleted: ASPxClientEvent<ASPxClientFileManagerItemDeletedEventHandler<ASPxClientFileManager>>,
		ItemsDeleted: ASPxClientEvent<ASPxClientFileManagerItemsDeletedEventHandler<ASPxClientFileManager>>,
		ItemMoving: ASPxClientEvent<ASPxClientFileManagerItemEditingEventHandler<ASPxClientFileManager>>,
		ItemMoved: ASPxClientEvent<ASPxClientFileManagerItemMovedEventHandler<ASPxClientFileManager>>,
		ItemsMoved: ASPxClientEvent<ASPxClientFileManagerItemsMovedEventHandler<ASPxClientFileManager>>,
		ItemCopying: ASPxClientEvent<ASPxClientFileManagerItemEditingEventHandler<ASPxClientFileManager>>,
		ItemCopied: ASPxClientEvent<ASPxClientFileManagerItemCopiedEventHandler<ASPxClientFileManager>>,
		ItemsCopied: ASPxClientEvent<ASPxClientFileManagerItemsCopiedEventHandler<ASPxClientFileManager>>,
		ErrorOccurred: ASPxClientEvent<ASPxClientFileManagerErrorEventHandler<ASPxClientFileManager>>,
		ErrorAlertDisplaying: ASPxClientEvent<ASPxClientFileManagerErrorAlertDisplayingEventHandler<ASPxClientFileManager>>,
		CustomCommand: ASPxClientEvent<ASPxClientFileManagerCustomCommandEventHandler<ASPxClientFileManager>>,
		ToolbarUpdating: ASPxClientEvent<ASPxClientFileManagerToolbarUpdatingEventHandler<ASPxClientFileManager>>,
		HighlightItemTemplate: ASPxClientEvent<ASPxClientFileManagerHighlightItemTemplateEventHandler<ASPxClientFileManager>>,
		FileUploading: ASPxClientEvent<ASPxClientFileManagerFileUploadingEventHandler<ASPxClientFileManager>>,
		FilesUploading: ASPxClientEvent<ASPxClientFileManagerFilesUploadingEventHandler<ASPxClientFileManager>>,
		FileUploaded: ASPxClientEvent<ASPxClientFileManagerFileUploadedEventHandler<ASPxClientFileManager>>,
		FilesUploaded: ASPxClientEvent<ASPxClientFileManagerFilesUploadedEventHandler<ASPxClientFileManager>>,
		FileDownloading: ASPxClientEvent<ASPxClientFileManagerFileDownloadingEventHandler<ASPxClientFileManager>>,
		GetActiveAreaName(): string,
		Refresh(): void,
		ExecuteCommand(commandName: string): boolean,
		GetSelectedFile(): ASPxClientFileManagerFile,
		GetSelectedItems(): ASPxClientFileManagerFile[],
		GetItems(): ASPxClientFileManagerFile[],
		GetAllItems(onCallback: ASPxClientFileManagerAllItemsCallback): void,
		GetToolbarItemByCommandName(commandName: string): ASPxClientFileManagerToolbarItem,
		GetContextMenuItemByCommandName(commandName: string): ASPxClientFileManagerToolbarItem,
		GetCurrentFolderPath(): string,
		GetCurrentFolderPath(separator: string): string,
		GetCurrentFolderPath(separator: string, skipRootFolder: boolean): string,
		SetCurrentFolderPath(path: string, onCallback: ASPxClientFileManagerCallback): void,
		GetCurrentFolderId(): string,
		PerformCallback(args: string): void,
		PerformCallback(args: string, onSuccess: (arg1: string) => void): void
	}

	declare interface ASPxClientFileManagerCallback {
		(result: Object): void
	}

	declare interface ASPxClientFileManagerItem {
		name: string,
		id: string,
		isFolder: boolean,
		SetSelected(selected: boolean): void,
		IsSelected(): boolean,
		GetFullName(): string,
		GetFullName(separator: string): string,
		GetFullName(separator: string, skipRootFolder: boolean): string
	}

	declare interface ASPxClientFileManagerFile {
		Download(): void
	}

	declare interface ASPxClientFileManagerFolder {
		isParentFolder: boolean
	}

	declare interface ASPxClientFileManagerAllItemsCallback {
		(items: ASPxClientFileManagerItem[]): void
	}

	declare interface ASPxClientFileManagerFileEventHandler<S> {
		(source: S, e: ASPxClientFileManagerFileEventArgs): void
	}

	declare interface ASPxClientFileManagerFileEventArgs {
		file: ASPxClientFileManagerFile
	}

	declare interface ASPxClientFileManagerFileOpenedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerFileOpenedEventArgs): void
	}

	declare interface ASPxClientFileManagerFileOpenedEventArgs {
		processOnServer: boolean
	}

	declare interface ASPxClientFileManagerActionEventArgsBase {
		fullName: string,
		name: string,
		isFolder: boolean
	}

	declare interface ASPxClientFileManagerItemEditingEventHandler<S> {
		(source: S, e: ASPxClientFileManagerItemEditingEventArgs): void
	}

	declare interface ASPxClientFileManagerItemEditingEventArgs {
		cancel: boolean
	}

	declare interface ASPxClientFileManagerItemRenamedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerItemRenamedEventArgs): void
	}

	declare interface ASPxClientFileManagerItemRenamedEventArgs {
		oldName: string
	}

	declare interface ASPxClientFileManagerItemDeletedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerItemDeletedEventArgs): void
	}

	declare interface ASPxClientFileManagerItemDeletedEventArgs {
		
	}

	declare interface ASPxClientFileManagerItemsDeletedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerItemsDeletedEventArgs): void
	}

	declare interface ASPxClientFileManagerItemsDeletedEventArgs {
		items: ASPxClientFileManagerItem[]
	}

	declare interface ASPxClientFileManagerItemMovedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerItemMovedEventArgs): void
	}

	declare interface ASPxClientFileManagerItemMovedEventArgs {
		oldFolderFullName: string
	}

	declare interface ASPxClientFileManagerItemsMovedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerItemsMovedEventArgs): void
	}

	declare interface ASPxClientFileManagerItemsMovedEventArgs {
		items: ASPxClientFileManagerItem[],
		oldFolderFullName: string
	}

	declare interface ASPxClientFileManagerItemCopiedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerItemCopiedEventArgs): void
	}

	declare interface ASPxClientFileManagerItemCopiedEventArgs {
		oldFolderFullName: string
	}

	declare interface ASPxClientFileManagerItemsCopiedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerItemsCopiedEventArgs): void
	}

	declare interface ASPxClientFileManagerItemsCopiedEventArgs {
		items: ASPxClientFileManagerItem[],
		oldFolderFullName: string
	}

	declare interface ASPxClientFileManagerItemCreatedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerItemCreatedEventArgs): void
	}

	declare interface ASPxClientFileManagerItemCreatedEventArgs {
		
	}

	declare interface ASPxClientFileManagerErrorEventHandler<S> {
		(source: S, e: ASPxClientFileManagerErrorEventArgs): void
	}

	declare interface ASPxClientFileManagerErrorEventArgs {
		commandName: string,
		errorText: string,
		showAlert: boolean,
		errorCode: number
	}

	declare interface ASPxClientFileManagerErrorAlertDisplayingEventHandler<S> {
		(source: S, e: ASPxClientFileManagerErrorAlertDisplayingEventArgs): void
	}

	declare interface ASPxClientFileManagerErrorAlertDisplayingEventArgs {
		commandName: string,
		errorText: string,
		showAlert: boolean
	}

	declare interface ASPxClientFileManagerFileUploadingEventHandler<S> {
		(source: S, e: ASPxClientFileManagerFileUploadingEventArgs): void
	}

	declare interface ASPxClientFileManagerFileUploadingEventArgs {
		folder: string,
		fileName: string,
		cancel: boolean
	}

	declare interface ASPxClientFileManagerFilesUploadingEventHandler<S> {
		(source: S, e: ASPxClientFileManagerFilesUploadingEventArgs): void
	}

	declare interface ASPxClientFileManagerFilesUploadingEventArgs {
		folder: string,
		fileNames: string[],
		cancel: boolean
	}

	declare interface ASPxClientFileManagerFileUploadedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerFileUploadedEventArgs): void
	}

	declare interface ASPxClientFileManagerFileUploadedEventArgs {
		folder: string,
		fileName: string
	}

	declare interface ASPxClientFileManagerFilesUploadedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerFilesUploadedEventArgs): void
	}

	declare interface ASPxClientFileManagerFilesUploadedEventArgs {
		folder: string,
		fileNames: string[]
	}

	declare interface ASPxClientFileManagerFileDownloadingEventHandler<S> {
		(source: S, e: ASPxClientFileManagerFileDownloadingEventArgs): void
	}

	declare interface ASPxClientFileManagerFileDownloadingEventArgs {
		cancel: boolean
	}

	declare interface ASPxClientFileManagerFocusedItemChangedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerFocusedItemChangedEventArgs): void
	}

	declare interface ASPxClientFileManagerFocusedItemChangedEventArgs {
		item: ASPxClientFileManagerItem,
		name: string,
		fullName: string
	}

	declare interface ASPxClientFileManagerCurrentFolderChangedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerCurrentFolderChangedEventArgs): void
	}

	declare interface ASPxClientFileManagerCurrentFolderChangedEventArgs {
		name: string,
		fullName: string
	}

	declare interface ASPxClientFileManagerSelectionChangedEventHandler<S> {
		(source: S, e: ASPxClientFileManagerSelectionChangedEventArgs): void
	}

	declare interface ASPxClientFileManagerSelectionChangedEventArgs {
		item: ASPxClientFileManagerItem,
		name: string,
		fullName: string,
		isSelected: boolean
	}

	declare interface ASPxClientFileManagerCustomCommandEventHandler<S> {
		(source: S, e: ASPxClientFileManagerCustomCommandEventArgs): void
	}

	declare interface ASPxClientFileManagerCustomCommandEventArgs {
		commandName: string
	}

	declare interface ASPxClientFileManagerToolbarUpdatingEventHandler<S> {
		(source: S, e: ASPxClientFileManagerToolbarUpdatingEventArgs): void
	}

	declare interface ASPxClientFileManagerToolbarUpdatingEventArgs {
		activeAreaName: string
	}

	declare interface ASPxClientFileManagerHighlightItemTemplateEventHandler<S> {
		(source: S, e: ASPxClientFileManagerHighlightItemTemplateEventArgs): void
	}

	declare interface ASPxClientFileManagerHighlightItemTemplateEventArgs {
		filterValue: string,
		itemName: string,
		templateElement: string,
		highlightCssClassName: string
	}

	declare interface ASPxClientMenuItem {
		menu: ASPxClientMenuBase,
		parent: ASPxClientMenuItem,
		index: number,
		name: string,
		indexPath: string,
		GetItemCount(): number,
		GetItem(index: number): ASPxClientMenuItem,
		GetItemByName(name: string): ASPxClientMenuItem,
		GetChecked(): boolean,
		SetChecked(value: boolean): void,
		GetEnabled(): boolean,
		SetEnabled(value: boolean): void,
		GetImageUrl(): string,
		SetImageUrl(value: string): void,
		GetNavigateUrl(): string,
		SetNavigateUrl(value: string): void,
		GetText(): string,
		SetText(value: string): void,
		GetVisible(): boolean,
		SetVisible(value: boolean): void
	}

	declare interface ASPxClientFileManagerToolbarItem {
		menu: ASPxClientMenuBase,
		parent: ASPxClientMenuItem,
		index: number
	}

	declare interface ASPxClientLayoutItem {
		formLayout: ASPxClientFormLayout,
		name: string,
		parent: ASPxClientLayoutItem,
		GetItemByName(name: string): ASPxClientLayoutItem,
		GetVisible(): boolean,
		SetVisible(value: boolean): void,
		SetCaption(caption: string): void,
		GetCaption(): string
	}

	declare interface ASPxClientFormLayout {
		GetItemByName(name: string): ASPxClientLayoutItem
	}

	declare interface ASPxClientGlobalEvents {
		ControlsInitialized: ASPxClientEvent<ASPxClientControlsInitializedEventHandler<ASPxClientGlobalEvents>>,
		BrowserWindowResized: ASPxClientEvent<ASPxClientEventHandler<ASPxClientGlobalEvents>>,
		BeginCallback: ASPxClientEvent<ASPxClientGlobalBeginCallbackEventHandler<ASPxClientGlobalEvents>>,
		EndCallback: ASPxClientEvent<ASPxClientGlobalEndCallbackEventHandler<ASPxClientGlobalEvents>>,
		CallbackError: ASPxClientEvent<ASPxClientGlobalCallbackErrorEventHandler<ASPxClientGlobalEvents>>,
		ValidationCompleted: ASPxClientEvent<ASPxClientValidationCompletedEventHandler<ASPxClientGlobalEvents>>
	}

	declare interface ASPxClientHiddenField {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientHiddenField>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientHiddenField>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientHiddenField>>,
		PerformCallback(parameter: string): void,
		Add(propertyName: string, propertyValue: Object): void,
		Get(propertyName: string): Object,
		Set(propertyName: string, propertyValue: Object): void,
		Remove(propertyName: string): void,
		Clear(): void,
		Contains(propertyName: string): boolean
	}

	declare interface ASPxClientImageGallery {
		FullscreenViewerShowing: ASPxClientEvent<ASPxClientImageGalleryCancelEventHandler<ASPxClientImageGallery>>,
		FullscreenViewerActiveItemIndexChanged: ASPxClientEvent<ASPxClientImageGalleryFullscreenViewerEventHandler<ASPxClientImageGallery>>,
		ShowFullscreenViewer(index: number): void,
		HideFullscreenViewer(): void,
		SetFullscreenViewerActiveItemIndex(index: number, preventAnimation: boolean): void,
		GetFullscreenViewerItemCount(): number,
		GetFullscreenViewerActiveItemIndex(): number,
		PlaySlideShow(): void,
		PauseSlideShow(): void
	}

	declare interface ASPxClientImageGalleryCancelEventHandler<S> {
		(source: S, e: ASPxClientImageGalleryCancelEventArgs): void
	}

	declare interface ASPxClientImageGalleryCancelEventArgs {
		index: number,
		name: string
	}

	declare interface ASPxClientImageGalleryFullscreenViewerEventHandler<S> {
		(source: S, e: ASPxClientImageGalleryFullscreenViewerEventArgs): void
	}

	declare interface ASPxClientImageGalleryFullscreenViewerEventArgs {
		index: number,
		name: string
	}

	declare interface ASPxClientImageSlider {
		ActiveItemChanged: ASPxClientEvent<ASPxClientImageSliderItemEventHandler<ASPxClientImageSlider>>,
		ItemClick: ASPxClientEvent<ASPxClientImageSliderItemEventHandler<ASPxClientImageSlider>>,
		ThumbnailItemClick: ASPxClientEvent<ASPxClientImageSliderItemEventHandler<ASPxClientImageSlider>>,
		GetItem(index: number): ASPxClientImageSliderItem,
		GetItemByName(name: string): ASPxClientImageSliderItem,
		GetActiveItemIndex(): number,
		SetActiveItemIndex(index: number, preventAnimation: boolean): void,
		GetActiveItem(): ASPxClientImageSliderItem,
		SetActiveItem(item: ASPxClientImageSliderItem, preventAnimation: boolean): void,
		GetItemCount(): number,
		Focus(): void,
		Play(): void,
		Pause(): void,
		IsSlideShowPlaying(): boolean
	}

	declare interface ASPxClientImageSliderItemEventHandler<S> {
		(source: S, e: ASPxClientImageSliderItemEventArgs): void
	}

	declare interface ASPxClientImageSliderItemEventArgs {
		item: ASPxClientImageSliderItem
	}

	declare interface ASPxClientImageSliderItem {
		imageSlider: ASPxClientImageSlider,
		index: number,
		name: string,
		imageUrl: string,
		text: string
	}

	declare interface ASPxClientImageZoomNavigator {
		
	}

	declare interface ASPxClientImageZoom {
		SetImageProperties(
		imageUrl: string, largeImageUrl: string, zoomWindowText: string, expandWindowText: string, alternateText: string
	): void
	}

	declare interface ASPxClientLoadingPanel {
		Show(): void,
		ShowInElement(htmlElement: Object): void,
		ShowInElementByID(id: string): void,
		ShowAtPos(x: number, y: number): void,
		SetText(text: string): void,
		GetText(): string,
		Hide(): void
	}

	declare interface ASPxClientMenuBase {
		ItemClick: ASPxClientEvent<ASPxClientMenuItemClickEventHandler<ASPxClientMenuBase>>,
		ItemMouseOver: ASPxClientEvent<ASPxClientMenuItemMouseEventHandler<ASPxClientMenuBase>>,
		ItemMouseOut: ASPxClientEvent<ASPxClientMenuItemMouseEventHandler<ASPxClientMenuBase>>,
		PopUp: ASPxClientEvent<ASPxClientMenuItemEventHandler<ASPxClientMenuBase>>,
		CloseUp: ASPxClientEvent<ASPxClientMenuItemEventHandler<ASPxClientMenuBase>>,
		GetItemCount(): number,
		GetItem(index: number): ASPxClientMenuItem,
		GetItemByName(name: string): ASPxClientMenuItem,
		GetSelectedItem(): ASPxClientMenuItem,
		SetSelectedItem(item: ASPxClientMenuItem): void,
		GetRootItem(): ASPxClientMenuItem
	}

	declare interface ASPxClientMenuCollection {
		RecalculateAll(): void,
		HideAll(): void
	}

	declare interface ASPxClientMenu {
		GetOrientation(): string,
		SetOrientation(orientation: string): void
	}

	declare interface ASPxClientMenuItemEventHandler<S> {
		(source: S, e: ASPxClientMenuItemEventArgs): void
	}

	declare interface ASPxClientMenuItemEventArgs {
		item: ASPxClientMenuItem
	}

	declare interface ASPxClientMenuItemMouseEventHandler<S> {
		(source: S, e: ASPxClientMenuItemMouseEventArgs): void
	}

	declare interface ASPxClientMenuItemMouseEventArgs {
		htmlElement: Object
	}

	declare interface ASPxClientMenuItemClickEventHandler<S> {
		(source: S, e: ASPxClientMenuItemClickEventArgs): void
	}

	declare interface ASPxClientMenuItemClickEventArgs {
		item: ASPxClientMenuItem,
		htmlElement: Object,
		htmlEvent: Object
	}

	declare interface ASPxClientTouchUIOptions {
		showHorizontalScrollbar: boolean,
		showVerticalScrollbar: boolean,
		vScrollClassName: string,
		hScrollClassName: string
	}

	declare interface ScrollExtender {
		ChangeElement(id: string): void,
		ChangeElement(element: Object): void
	}

	declare interface ASPxClientNavBar {
		ItemClick: ASPxClientEvent<ASPxClientNavBarItemEventHandler<ASPxClientNavBar>>,
		ExpandedChanged: ASPxClientEvent<ASPxClientNavBarGroupEventHandler<ASPxClientNavBar>>,
		ExpandedChanging: ASPxClientEvent<ASPxClientNavBarGroupCancelEventHandler<ASPxClientNavBar>>,
		HeaderClick: ASPxClientEvent<ASPxClientNavBarGroupClickEventHandler<ASPxClientNavBar>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientNavBar>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientNavBar>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientNavBar>>,
		GetGroupCount(): number,
		GetGroup(index: number): ASPxClientNavBarGroup,
		GetGroupByName(name: string): ASPxClientNavBarGroup,
		GetActiveGroup(): ASPxClientNavBarGroup,
		SetActiveGroup(group: ASPxClientNavBarGroup): void,
		GetItemByName(name: string): ASPxClientNavBarItem,
		GetSelectedItem(): ASPxClientNavBarItem,
		SetSelectedItem(item: ASPxClientNavBarItem): void,
		CollapseAll(): void,
		ExpandAll(): void
	}

	declare interface ASPxClientNavBarGroup {
		navBar: ASPxClientNavBar,
		index: number,
		name: string,
		GetEnabled(): boolean,
		GetExpanded(): boolean,
		SetExpanded(value: boolean): void,
		GetVisible(): boolean,
		GetText(): string,
		SetText(text: string): void,
		SetVisible(value: boolean): void,
		GetItemCount(): number,
		GetItem(index: number): ASPxClientNavBarItem,
		GetItemByName(name: string): ASPxClientNavBarItem
	}

	declare interface ASPxClientNavBarItem {
		navBar: ASPxClientNavBar,
		group: ASPxClientNavBarGroup,
		index: number,
		name: string,
		GetEnabled(): boolean,
		SetEnabled(value: boolean): void,
		GetImageUrl(): string,
		SetImageUrl(value: string): void,
		GetNavigateUrl(): string,
		SetNavigateUrl(value: string): void,
		GetText(): string,
		SetText(value: string): void,
		GetVisible(): boolean,
		SetVisible(value: boolean): void
	}

	declare interface ASPxClientNavBarItemEventHandler<S> {
		(source: S, e: ASPxClientNavBarItemEventArgs): void
	}

	declare interface ASPxClientNavBarItemEventArgs {
		item: ASPxClientNavBarItem,
		htmlElement: Object,
		htmlEvent: Object
	}

	declare interface ASPxClientNavBarGroupEventHandler<S> {
		(source: S, e: ASPxClientNavBarGroupEventArgs): void
	}

	declare interface ASPxClientNavBarGroupEventArgs {
		group: ASPxClientNavBarGroup
	}

	declare interface ASPxClientNavBarGroupCancelEventHandler<S> {
		(source: S, e: ASPxClientNavBarGroupCancelEventArgs): void
	}

	declare interface ASPxClientNavBarGroupCancelEventArgs {
		group: ASPxClientNavBarGroup
	}

	declare interface ASPxClientNavBarGroupClickEventHandler<S> {
		(source: S, e: ASPxClientNavBarGroupClickEventArgs): void
	}

	declare interface ASPxClientNavBarGroupClickEventArgs {
		htmlElement: Object,
		htmlEvent: Object
	}

	declare interface ASPxClientNewsControl {
		TailClick: ASPxClientEvent<ASPxClientNewsControlItemEventHandler<ASPxClientNewsControl>>
	}

	declare interface ASPxClientNewsControlItemEventHandler<S> {
		(source: S, e: ASPxClientNewsControlItemEventArgs): void
	}

	declare interface ASPxClientNewsControlItemEventArgs {
		name: Object,
		htmlElement: Object,
		htmlEvent: Object
	}

	declare interface ASPxClientObjectContainer {
		FlashScriptCommand: ASPxClientEvent<ASPxClientFlashScriptCommandEventHandler<ASPxClientObjectContainer>>,
		Back(): void,
		GetVariable(name: string): string,
		Forward(): void,
		GotoFrame(frameNumber: number): void,
		IsPlaying(): boolean,
		LoadMovie(layerNumber: number, url: string): void,
		Pan(x: number, y: number, mode: number): void,
		PercentLoaded(): string,
		Play(): void,
		Rewind(): void,
		SetVariable(name: string, value: string): void,
		SetZoomRect(left: number, top: number, right: number, bottom: number): void,
		StopPlay(): void,
		TotalFrames(): number,
		Zoom(percent: number): void,
		QTPlay(): void,
		QTStopPlay(): void,
		QTRewind(): void,
		QTStep(count: number): void
	}

	declare interface ASPxClientFlashScriptCommandEventHandler<S> {
		(source: S, e: ASPxClientFlashScriptCommandEventArgs): void
	}

	declare interface ASPxClientFlashScriptCommandEventArgs {
		command: string,
		args: string
	}

	declare interface ASPxClientOfficeDocumentLinkType {
		
	}

	declare interface ASPxClientPanelBase {
		GetContentHtml(): string,
		SetContentHtml(html: string): void,
		SetEnabled(enabled: boolean): void,
		GetEnabled(): boolean
	}

	declare interface ASPxClientPanel {
		Collapsed: ASPxClientEvent<ASPxClientEventHandler<ASPxClientPanel>>,
		Expanded: ASPxClientEvent<ASPxClientEventHandler<ASPxClientPanel>>,
		Toggle(): void,
		IsExpandable(): boolean,
		IsExpanded(): boolean,
		Expand(): void,
		Collapse(): void
	}

	declare interface ASPxClientPopupControl {
		CloseButtonClick: ASPxClientEvent<ASPxClientPopupWindowEventHandler<ASPxClientPopupControl>>,
		GetMainElement(): Object,
		GetPopUpReasonMouseEvent(): Object,
		GetWindowPopUpReasonMouseEvent(window: ASPxClientPopupWindow): Object,
		PerformWindowCallback(window: ASPxClientPopupWindow, parameter: string): void,
		PerformWindowCallback(
		window: ASPxClientPopupWindow, parameter: string, onSuccess: (arg1: string) => void
	): void,
		SetSize(width: number, height: number): void,
		GetWindowContentWidth(window: ASPxClientPopupWindow): number,
		GetWindowContentHeight(window: ASPxClientPopupWindow): number,
		GetWindowHeight(window: ASPxClientPopupWindow): number,
		GetWindowWidth(window: ASPxClientPopupWindow): number,
		SetWindowSize(window: ASPxClientPopupWindow, width: number, height: number): void,
		GetContentHTML(): string,
		SetContentHTML(html: string): void,
		SetWindowPopupElementID(window: ASPxClientPopupWindow, popupElementId: string): void,
		SetPopupElementID(popupElementId: string): void,
		GetCurrentPopupElementIndex(): number,
		GetWindowCurrentPopupElementIndex(window: ASPxClientPopupWindow): number,
		GetCurrentPopupElement(): Object,
		GetWindowCurrentPopupElement(window: ASPxClientPopupWindow): Object,
		IsWindowVisible(window: ASPxClientPopupWindow): boolean,
		GetWindow(index: number): ASPxClientPopupWindow,
		GetWindowByName(name: string): ASPxClientPopupWindow,
		GetWindowCount(): number,
		ShowWindow(window: ASPxClientPopupWindow): void,
		ShowWindow(window: ASPxClientPopupWindow, popupElementIndex: number): void,
		ShowWindowAtElement(window: ASPxClientPopupWindow, htmlElement: Object): void,
		ShowWindowAtElementByID(window: ASPxClientPopupWindow, id: string): void,
		ShowWindowAtPos(window: ASPxClientPopupWindow, x: number, y: number): void,
		BringWindowToFront(window: ASPxClientPopupWindow): void,
		HideWindow(window: ASPxClientPopupWindow): void,
		GetWindowContentHtml(window: ASPxClientPopupWindow): string,
		SetWindowContentHtml(window: ASPxClientPopupWindow, html: string): void,
		GetWindowContentIFrame(window: ASPxClientPopupWindow): Object,
		GetWindowContentUrl(window: ASPxClientPopupWindow): string,
		SetWindowContentUrl(window: ASPxClientPopupWindow, url: string): void,
		GetWindowPinned(window: ASPxClientPopupWindow): boolean,
		SetWindowPinned(window: ASPxClientPopupWindow, value: boolean): void,
		GetWindowMaximized(window: ASPxClientPopupWindow): boolean,
		SetWindowMaximized(window: ASPxClientPopupWindow, value: boolean): void,
		GetWindowCollapsed(window: ASPxClientPopupWindow): boolean,
		SetWindowCollapsed(window: ASPxClientPopupWindow, value: boolean): void,
		RefreshWindowContentUrl(window: ASPxClientPopupWindow): void,
		UpdatePosition(): void,
		UpdatePositionAtElement(htmlElement: Object): void,
		UpdateWindowPosition(window: ASPxClientPopupWindow): void,
		UpdateWindowPositionAtElement(window: ASPxClientPopupWindow, htmlElement: Object): void,
		RefreshPopupElementConnection(): void
	}

	declare interface ASPxClientPopupWindow {
		popupControl: ASPxClientPopupControl,
		index: number,
		name: string,
		GetHeaderImageUrl(): string,
		SetHeaderImageUrl(value: string): void,
		GetFooterImageUrl(): string,
		SetFooterImageUrl(value: string): void,
		GetHeaderNavigateUrl(): string,
		SetHeaderNavigateUrl(value: string): void,
		GetFooterNavigateUrl(): string,
		SetFooterNavigateUrl(value: string): void,
		GetHeaderText(): string,
		SetHeaderText(value: string): void,
		GetFooterText(): string,
		SetFooterText(value: string): void
	}

	declare interface ASPxClientPopupWindowEventHandler<S> {
		(source: S, e: ASPxClientPopupWindowEventArgs): void
	}

	declare interface ASPxClientPopupWindowEventArgs {
		window: ASPxClientPopupWindow
	}

	declare interface ASPxClientPopupWindowCancelEventHandler<S> {
		(source: S, e: ASPxClientPopupWindowCancelEventArgs): void
	}

	declare interface ASPxClientPopupWindowCancelEventArgs {
		window: ASPxClientPopupWindow,
		closeReason: ASPxClientPopupControlCloseReason
	}

	declare interface ASPxClientPopupWindowCloseUpEventHandler<S> {
		(source: S, e: ASPxClientPopupWindowCloseUpEventArgs): void
	}

	declare interface ASPxClientPopupWindowCloseUpEventArgs {
		closeReason: ASPxClientPopupControlCloseReason
	}

	declare interface ASPxClientPopupWindowResizeEventHandler<S> {
		(source: S, e: ASPxClientPopupWindowResizeEventArgs): void
	}

	declare interface ASPxClientPopupWindowResizeEventArgs {
		resizeState: number
	}

	declare interface ASPxClientPopupWindowPinnedChangedEventHandler<S> {
		(source: S, e: ASPxClientPopupWindowPinnedChangedEventArgs): void
	}

	declare interface ASPxClientPopupWindowPinnedChangedEventArgs {
		pinned: boolean
	}

	declare interface ASPxClientPopupControlCollection {
		HideAllWindows(): void
	}

	declare interface ASPxClientPopupControlCloseReason {
		
	}

	declare interface ASPxClientPopupMenu {
		SetPopupElementID(popupElementId: string): void,
		GetCurrentPopupElementIndex(): number,
		GetCurrentPopupElement(): Object,
		RefreshPopupElementConnection(): void,
		Hide(): void,
		Show(): void,
		Show(popupElementIndex: number): void,
		ShowAtElement(htmlElement: Object): void,
		ShowAtElementByID(id: string): void,
		ShowAtPos(x: number, y: number): void
	}

	declare interface ASPxClientRatingControl {
		ItemClick: ASPxClientEvent<ASPxClientRatingControlItemClickEventHandler<ASPxClientRatingControl>>,
		ItemMouseOver: ASPxClientEvent<ASPxClientRatingControlItemMouseEventHandler<ASPxClientRatingControl>>,
		ItemMouseOut: ASPxClientEvent<ASPxClientRatingControlItemMouseEventHandler<ASPxClientRatingControl>>,
		GetTitle(index: number): string,
		GetReadOnly(): boolean,
		SetReadOnly(value: boolean): void,
		GetValue(): number,
		SetValue(value: number): void
	}

	declare interface ASPxClientRatingControlItemClickEventHandler<S> {
		(source: S, e: ASPxClientRatingControlItemClickEventArgs): void
	}

	declare interface ASPxClientRatingControlItemClickEventArgs {
		index: number
	}

	declare interface ASPxClientRatingControlItemMouseEventHandler<S> {
		(source: S, e: ASPxClientRatingControlItemMouseEventArgs): void
	}

	declare interface ASPxClientRatingControlItemMouseEventArgs {
		index: number
	}

	declare interface ASPxClientRibbon {
		CommandExecuted: ASPxClientEvent<ASPxClientRibbonCommandExecutedEventHandler<ASPxClientRibbon>>,
		ActiveTabChanged: ASPxClientEvent<ASPxClientRibbonTabEventHandler<ASPxClientRibbon>>,
		MinimizationStateChanged: ASPxClientEvent<ASPxClientRibbonMinimizationStateEventHandler<ASPxClientRibbon>>,
		FileTabClicked: ASPxClientEvent<ASPxClientEventHandler<ASPxClientRibbon>>,
		DialogBoxLauncherClicked: ASPxClientEvent<ASPxClientRibbonDialogBoxLauncherClickedEventHandler<ASPxClientRibbon>>,
		KeyTipsClosedOnEscape: ASPxClientEvent<ASPxClientEventHandler<ASPxClientRibbon>>,
		SetEnabled(enabled: boolean): void,
		GetEnabled(): boolean,
		GetTab(index: number): ASPxClientRibbonTab,
		GetTabByName(name: string): ASPxClientRibbonTab,
		GetTabCount(): number,
		GetActiveTab(): ASPxClientRibbonTab,
		SetActiveTab(tab: ASPxClientRibbonTab): void,
		SetActiveTabIndex(index: number): void,
		GetItemByName(name: string): ASPxClientRibbonItem,
		GetItemValueByName(name: string): Object,
		SetItemValueByName(name: string, value: Object): void,
		SetMinimized(minimized: boolean): void,
		GetMinimized(): boolean,
		SetContextTabCategoryVisible(categoryName: string, visible: boolean): void,
		ShowKeyTips(): void
	}

	declare interface ASPxClientRibbonTab {
		ribbon: ASPxClientRibbon,
		index: number,
		name: string,
		GetText(): string,
		SetEnabled(enabled: boolean): void,
		GetEnabled(): boolean,
		GetVisible(): boolean
	}

	declare interface ASPxClientRibbonGroup {
		ribbon: ASPxClientRibbon,
		tab: ASPxClientRibbonTab,
		index: number,
		name: string,
		GetVisible(): boolean
	}

	declare interface ASPxClientRibbonItem {
		group: ASPxClientRibbonGroup,
		index: number,
		name: string,
		ribbon: ASPxClientRibbon,
		GetEnabled(): boolean,
		SetEnabled(enabled: boolean): void,
		GetValue(): Object,
		SetValue(value: Object): void,
		GetVisible(): boolean
	}

	declare interface ASPxClientRibbonCommandExecutedEventHandler<S> {
		(source: S, e: ASPxClientRibbonCommandExecutedEventArgs): void
	}

	declare interface ASPxClientRibbonCommandExecutedEventArgs {
		item: ASPxClientRibbonItem,
		parameter: string
	}

	declare interface ASPxClientRibbonTabEventHandler<S> {
		(source: S, e: ASPxClientRibbonTabEventArgs): void
	}

	declare interface ASPxClientRibbonTabEventArgs {
		tab: ASPxClientRibbonTab
	}

	declare interface ASPxClientRibbonMinimizationStateEventHandler<S> {
		(source: S, e: ASPxClientRibbonMinimizationStateEventArgs): void
	}

	declare interface ASPxClientRibbonMinimizationStateEventArgs {
		ribbonState: number
	}

	declare interface ASPxClientRibbonDialogBoxLauncherClickedEventHandler<S> {
		(source: S, e: ASPxClientRibbonDialogBoxLauncherClickedEventArgs): void
	}

	declare interface ASPxClientRibbonDialogBoxLauncherClickedEventArgs {
		group: ASPxClientRibbonGroup
	}

	declare interface ASPxClientRoundPanel {
		CollapsedChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientRoundPanel>>,
		CollapsedChanging: ASPxClientEvent<ASPxClientCancelEventHandler<ASPxClientRoundPanel>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientRoundPanel>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientRoundPanel>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientRoundPanel>>,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void,
		GetHeaderText(): string,
		SetHeaderText(text: string): void,
		GetCollapsed(): boolean,
		SetCollapsed(collapsed: boolean): void
	}

	declare interface ASPxClientSplitter {
		PaneResizing: ASPxClientEvent<ASPxClientSplitterPaneCancelEventHandler<ASPxClientSplitter>>,
		PaneResized: ASPxClientEvent<ASPxClientSplitterPaneEventHandler<ASPxClientSplitter>>,
		PaneCollapsing: ASPxClientEvent<ASPxClientSplitterPaneCancelEventHandler<ASPxClientSplitter>>,
		PaneCollapsed: ASPxClientEvent<ASPxClientSplitterPaneEventHandler<ASPxClientSplitter>>,
		PaneExpanding: ASPxClientEvent<ASPxClientSplitterPaneCancelEventHandler<ASPxClientSplitter>>,
		PaneExpanded: ASPxClientEvent<ASPxClientSplitterPaneEventHandler<ASPxClientSplitter>>,
		PaneResizeCompleted: ASPxClientEvent<ASPxClientSplitterPaneEventHandler<ASPxClientSplitter>>,
		PaneContentUrlLoaded: ASPxClientEvent<ASPxClientSplitterPaneEventHandler<ASPxClientSplitter>>,
		GetPaneCount(): number,
		GetPane(index: number): ASPxClientSplitterPane,
		GetPaneByName(name: string): ASPxClientSplitterPane,
		SetAllowResize(allowResize: boolean): void,
		GetLayoutData(): string
	}

	declare interface ASPxClientSplitterPane {
		index: number,
		name: string,
		GetSplitter(): ASPxClientSplitter,
		GetParentPane(): ASPxClientSplitterPane,
		GetPrevPane(): ASPxClientSplitterPane,
		GetNextPane(): ASPxClientSplitterPane,
		IsFirstPane(): boolean,
		IsLastPane(): boolean,
		IsVertical(): boolean,
		GetPaneCount(): number,
		GetPane(index: number): ASPxClientSplitterPane,
		GetPaneByName(name: string): ASPxClientSplitterPane,
		GetClientWidth(): number,
		GetClientHeight(): number,
		Collapse(maximizedPane: ASPxClientSplitterPane): boolean,
		CollapseForward(): boolean,
		CollapseBackward(): boolean,
		Expand(): boolean,
		IsCollapsed(): boolean,
		IsContentUrlPane(): boolean,
		GetContentUrl(): string,
		SetContentUrl(url: string): void,
		SetContentUrl(url: string, preventBrowserCaching: boolean): void,
		RefreshContentUrl(): void,
		GetContentIFrame(): Object,
		SetAllowResize(allowResize: boolean): void,
		RaiseResizedEvent(): void,
		GetElement(): Object,
		SetSize(size: number): void,
		SetSize(size: string): void,
		GetSize(): string,
		GetScrollTop(): number,
		SetScrollTop(value: number): void,
		GetScrollLeft(): number,
		SetScrollLeft(value: number): void
	}

	declare interface ASPxClientSplitterPaneEventHandler<S> {
		(source: S, e: ASPxClientSplitterPaneEventArgs): void
	}

	declare interface ASPxClientSplitterPaneEventArgs {
		pane: ASPxClientSplitterPane
	}

	declare interface ASPxClientSplitterPaneCancelEventHandler<S> {
		(source: S, e: ASPxClientSplitterPaneCancelEventArgs): void
	}

	declare interface ASPxClientSplitterPaneCancelEventArgs {
		cancel: boolean
	}

	declare interface ASPxClientTabControlBase {
		TabClick: ASPxClientEvent<ASPxClientTabControlTabClickEventHandler<ASPxClientTabControlBase>>,
		ActiveTabChanged: ASPxClientEvent<ASPxClientTabControlTabEventHandler<ASPxClientTabControlBase>>,
		ActiveTabChanging: ASPxClientEvent<ASPxClientTabControlTabCancelEventHandler<ASPxClientTabControlBase>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientTabControlBase>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientTabControlBase>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientTabControlBase>>,
		AdjustSize(): void,
		GetActiveTab(): ASPxClientTab,
		SetActiveTab(tab: ASPxClientTab): void,
		GetActiveTabIndex(): number,
		SetActiveTabIndex(index: number): void,
		GetTabCount(): number,
		GetTab(index: number): ASPxClientTab,
		GetTabByName(name: string): ASPxClientTab
	}

	declare interface ASPxClientTabControl {
		
	}

	declare interface ASPxClientPageControl {
		GetTabContentHTML(tab: ASPxClientTab): string,
		SetTabContentHTML(tab: ASPxClientTab, html: string): void,
		PerformCallback(parameter: string): void,
		PerformCallback(parameter: string, onSuccess: (arg1: string) => void): void
	}

	declare interface ASPxClientTab {
		tabControl: ASPxClientTabControlBase,
		index: number,
		name: string,
		GetEnabled(): boolean,
		SetEnabled(value: boolean): void,
		GetImageUrl(): string,
		SetImageUrl(value: string): void,
		GetActiveImageUrl(): string,
		SetActiveImageUrl(value: string): void,
		GetNavigateUrl(): string,
		SetNavigateUrl(value: string): void,
		GetText(): string,
		SetText(value: string): void,
		GetVisible(): boolean,
		SetVisible(value: boolean): void
	}

	declare interface ASPxClientTabControlTabEventHandler<S> {
		(source: S, e: ASPxClientTabControlTabEventArgs): void
	}

	declare interface ASPxClientTabControlTabEventArgs {
		tab: ASPxClientTab
	}

	declare interface ASPxClientTabControlTabCancelEventHandler<S> {
		(source: S, e: ASPxClientTabControlTabCancelEventArgs): void
	}

	declare interface ASPxClientTabControlTabCancelEventArgs {
		tab: ASPxClientTab,
		reloadContentOnCallback: boolean
	}

	declare interface ASPxClientTabControlTabClickEventHandler<S> {
		(source: S, e: ASPxClientTabControlTabClickEventArgs): void
	}

	declare interface ASPxClientTabControlTabClickEventArgs {
		htmlElement: Object,
		htmlEvent: Object
	}

	declare interface ASPxClientTimer {
		Tick: ASPxClientEvent<ASPxClientProcessingModeEventHandler<ASPxClientTimer>>,
		GetEnabled(): boolean,
		SetEnabled(enabled: boolean): void,
		GetInterval(): number,
		SetInterval(interval: number): void
	}

	declare interface ASPxClientTitleIndex {
		ItemClick: ASPxClientEvent<ASPxClientTitleIndexItemEventHandler<ASPxClientTitleIndex>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientTitleIndex>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientTitleIndex>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientTitleIndex>>
	}

	declare interface ASPxClientTitleIndexItemEventHandler<S> {
		(source: S, e: ASPxClientTitleIndexItemEventArgs): void
	}

	declare interface ASPxClientTitleIndexItemEventArgs {
		name: Object,
		htmlElement: Object,
		htmlEvent: Object
	}

	declare interface ASPxClientTreeView {
		NodeClick: ASPxClientEvent<ASPxClientTreeViewNodeClickEventHandler<ASPxClientTreeView>>,
		ExpandedChanged: ASPxClientEvent<ASPxClientTreeViewNodeEventHandler<ASPxClientTreeView>>,
		ExpandedChanging: ASPxClientEvent<ASPxClientTreeViewNodeCancelEventHandler<ASPxClientTreeView>>,
		CheckedChanged: ASPxClientEvent<ASPxClientTreeViewNodeProcessingModeEventHandler<ASPxClientTreeView>>,
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientTreeView>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientTreeView>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientTreeView>>,
		GetNode(index: number): ASPxClientTreeViewNode,
		GetNodeByName(name: string): ASPxClientTreeViewNode,
		GetNodeByText(text: string): ASPxClientTreeViewNode,
		GetNodeCount(): number,
		GetSelectedNode(): ASPxClientTreeViewNode,
		SetSelectedNode(node: ASPxClientTreeViewNode): void,
		GetRootNode(): ASPxClientTreeViewNode,
		CollapseAll(): void,
		ExpandAll(): void
	}

	declare interface ASPxClientTreeViewNode {
		treeView: ASPxClientTreeView,
		parent: ASPxClientTreeViewNode,
		index: number,
		name: string,
		GetNodeCount(): number,
		GetNode(index: number): ASPxClientTreeViewNode,
		GetNodeByName(name: string): ASPxClientTreeViewNode,
		GetNodeByText(text: string): ASPxClientTreeViewNode,
		GetExpanded(): boolean,
		SetExpanded(value: boolean): void,
		GetChecked(): boolean,
		SetChecked(value: boolean): void,
		GetCheckState(): string,
		GetEnabled(): boolean,
		SetEnabled(value: boolean): void,
		GetImageUrl(): string,
		SetImageUrl(value: string): void,
		GetNavigateUrl(): string,
		SetNavigateUrl(value: string): void,
		GetText(): string,
		SetText(value: string): void,
		GetVisible(): boolean,
		SetVisible(value: boolean): void,
		GetHtmlElement(): Object
	}

	declare interface ASPxClientTreeViewNodeProcessingModeEventHandler<S> {
		(source: S, e: ASPxClientTreeViewNodeProcessingModeEventArgs): void
	}

	declare interface ASPxClientTreeViewNodeProcessingModeEventArgs {
		node: ASPxClientTreeViewNode
	}

	declare interface ASPxClientTreeViewNodeClickEventHandler<S> {
		(source: S, e: ASPxClientTreeViewNodeClickEventArgs): void
	}

	declare interface ASPxClientTreeViewNodeClickEventArgs {
		htmlElement: Object,
		htmlEvent: Object
	}

	declare interface ASPxClientTreeViewNodeEventHandler<S> {
		(source: S, e: ASPxClientTreeViewNodeEventArgs): void
	}

	declare interface ASPxClientTreeViewNodeEventArgs {
		node: ASPxClientTreeViewNode
	}

	declare interface ASPxClientTreeViewNodeCancelEventHandler<S> {
		(source: S, e: ASPxClientTreeViewNodeCancelEventArgs): void
	}

	declare interface ASPxClientTreeViewNodeCancelEventArgs {
		node: ASPxClientTreeViewNode
	}

	declare interface ASPxClientUploadControl {
		FileUploadComplete: ASPxClientEvent<ASPxClientUploadControlFileUploadCompleteEventHandler<ASPxClientUploadControl>>,
		FilesUploadComplete: ASPxClientEvent<ASPxClientUploadControlFilesUploadCompleteEventHandler<ASPxClientUploadControl>>,
		FileUploadStart: ASPxClientEvent<ASPxClientUploadControlFilesUploadStartEventHandler<ASPxClientUploadControl>>,
		FilesUploadStart: ASPxClientEvent<ASPxClientUploadControlFilesUploadStartEventHandler<ASPxClientUploadControl>>,
		TextChanged: ASPxClientEvent<ASPxClientUploadControlTextChangedEventHandler<ASPxClientUploadControl>>,
		UploadingProgressChanged: ASPxClientEvent<ASPxClientUploadControlUploadingProgressChangedEventHandler<ASPxClientUploadControl>>,
		FileInputCountChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientUploadControl>>,
		DropZoneEnter: ASPxClientEvent<ASPxClientUploadControlDropZoneEnterEventHandler<ASPxClientUploadControl>>,
		DropZoneLeave: ASPxClientEvent<ASPxClientUploadControlDropZoneLeaveEventHandler<ASPxClientUploadControl>>,
		UploadFile(): void,
		AddFileInput(): void,
		RemoveFileInput(index: number): void,
		RemoveFileFromSelection(fileIndex: number): void,
		GetText(index: number): string,
		GetFileInputCount(): number,
		SetFileInputCount(count: number): void,
		SetEnabled(enabled: boolean): void,
		GetEnabled(): boolean,
		Upload(): void,
		Cancel(): void,
		ClearText(): void,
		SetAddButtonText(text: string): void,
		SetUploadButtonText(text: string): void,
		GetAddButtonText(): string,
		GetUploadButtonText(): string,
		SetDialogTriggerID(ids: string): void
	}

	declare interface ASPxClientUploadControlFilesUploadStartEventHandler<S> {
		(source: S, e: ASPxClientUploadControlFilesUploadStartEventArgs): void
	}

	declare interface ASPxClientUploadControlFilesUploadStartEventArgs {
		cancel: boolean
	}

	declare interface ASPxClientUploadControlFileUploadCompleteEventHandler<S> {
		(source: S, e: ASPxClientUploadControlFileUploadCompleteEventArgs): void
	}

	declare interface ASPxClientUploadControlFileUploadCompleteEventArgs {
		inputIndex: number,
		isValid: boolean,
		errorText: string,
		callbackData: string
	}

	declare interface ASPxClientUploadControlFilesUploadCompleteEventHandler<S> {
		(source: S, e: ASPxClientUploadControlFilesUploadCompleteEventArgs): void
	}

	declare interface ASPxClientUploadControlFilesUploadCompleteEventArgs {
		errorText: string,
		callbackData: string
	}

	declare interface ASPxClientUploadControlTextChangedEventHandler<S> {
		(source: S, e: ASPxClientUploadControlTextChangedEventArgs): void
	}

	declare interface ASPxClientUploadControlTextChangedEventArgs {
		inputIndex: number
	}

	declare interface ASPxClientUploadControlUploadingProgressChangedEventHandler<S> {
		(source: S, e: ASPxClientUploadControlUploadingProgressChangedEventArgs): void
	}

	declare interface ASPxClientUploadControlUploadingProgressChangedEventArgs {
		fileCount: number,
		currentFileName: string,
		currentFileContentLength: number,
		currentFileUploadedContentLength: number,
		currentFileProgress: number,
		totalContentLength: number,
		uploadedContentLength: number,
		progress: number
	}

	declare interface ASPxClientUploadControlDropZoneEnterEventHandler<S> {
		(source: S, e: ASPxClientUploadControlDropZoneEnterEventArgs): void
	}

	declare interface ASPxClientUploadControlDropZoneEnterEventArgs {
		dropZone: Object
	}

	declare interface ASPxClientUploadControlDropZoneLeaveEventHandler<S> {
		(source: S, e: ASPxClientUploadControlDropZoneLeaveEventArgs): void
	}

	declare interface ASPxClientUploadControlDropZoneLeaveEventArgs {
		dropZone: Object
	}

	declare interface ASPxClientChartDesigner {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientChartDesigner>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientChartDesigner>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientChartDesigner>>,
		SaveCommandExecute: ASPxClientEvent<ASPxClientChartDesignerSaveCommandExecuteEventHandler<ASPxClientChartDesigner>>,
		CustomizeMenuActions: ASPxClientEvent<ASPxClientChartDesignerCustomizeMenuActionsEventHandler<ASPxClientChartDesigner>>,
		PerformCallback(arg: string): void,
		PerformCallback(arg: string, onSuccess: (arg1: string) => void): void,
		UpdateLocalization(localization: {
		[key: string]: string
	}): void,
		GetDesignerModel(): Object,
		GetJsonChartModel(): string
	}

	declare interface ASPxClientChartDesignerSaveCommandExecuteEventHandler<S> {
		(source: S, e: ASPxClientChartDesignerSaveCommandExecuteEventArgs): void
	}

	declare interface ASPxClientChartDesignerSaveCommandExecuteEventArgs {
		handled: boolean
	}

	declare interface ASPxClientChartDesignerCustomizeMenuActionsEventHandler<S> {
		(source: S, e: ASPxClientChartDesignerCustomizeMenuActionsEventArgs): void
	}

	declare interface ASPxClientChartDesignerMenuAction {
		text: string,
		imageClassName: string,
		clickAction: Function,
		disabled: boolean,
		visible: boolean,
		hotKey: string,
		hasSeparator: string,
		container: string
	}

	declare interface ASPxClientChartDesignerCustomizeMenuActionsEventArgs {
		actions: ASPxClientChartDesignerMenuAction[]
	}

	declare interface ASPxClientWebChartControl {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientWebChartControl>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientWebChartControl>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientWebChartControl>>,
		ObjectHotTracked: ASPxClientEvent<ASPxClientWebChartControlHotTrackEventHandler<ASPxClientWebChartControl>>,
		CustomDrawCrosshair: ASPxClientEvent<ASPxClientWebChartControlCustomDrawCrosshairEventHandler<ASPxClientWebChartControl>>,
		ObjectSelected: ASPxClientEvent<ASPxClientWebChartControlHotTrackEventHandler<ASPxClientWebChartControl>>,
		GetChart(): ASPxClientWebChart,
		GetPrintOptions(): ASPxClientChartPrintOptions,
		SetCursor(cursor: string): void,
		HitTest(x: number, y: number): ASPxClientHitObject[],
		PerformCallback(args: string): void,
		PerformCallback(args: string, onSuccess: (arg1: string) => void): void,
		Print(): void,
		LoadFromObjectModel(serializedChartObjectModel: string): void,
		SaveToDisk(format: string): void,
		SaveToDisk(format: string, filename: string): void,
		SaveToWindow(format: string): void,
		GetMainDOMElement(): Object
	}

	declare interface ASPxClientWebChartControlCustomDrawCrosshairEventHandler<S> {
		(source: S, e: ASPxClientWebChartControlCustomDrawCrosshairEventArgs): void
	}

	declare interface ASPxClientWebChartControlCustomDrawCrosshairEventArgs {
		crosshairElements: ASPxClientCrosshairElement,
		cursorCrosshairAxisLabelElements: ASPxClientCrosshairAxisLabelElement,
		cursorCrosshairLineElement: ASPxClientCrosshairLineElement,
		crosshairGroupHeaderElements: ASPxClientCrosshairGroupHeaderElement,
		crosshairElementGroups: ASPxClientCrosshairElementGroup
	}

	declare interface ASPxClientCrosshairElement {
		Series: ASPxClientSeries,
		Point: ASPxClientSeriesPoint,
		LineElement: ASPxClientCrosshairLineElement,
		AxisLabelElement: ASPxClientCrosshairAxisLabelElement,
		LabelElement: ASPxClientCrosshairSeriesLabelElement,
		visible: boolean
	}

	declare interface ASPxClientCrosshairLineElement {
		
	}

	declare interface ASPxClientCrosshairAxisLabelElement {
		
	}

	declare interface ASPxClientCrosshairGroupHeaderElement {
		
	}

	declare interface ASPxClientCrosshairSeriesLabelElement {
		
	}

	declare interface ASPxClientCrosshairElementGroup {
		
	}

	declare interface ASPxClientWebChartControlHotTrackEventHandler<S> {
		(source: S, e: ASPxClientWebChartControlHotTrackEventArgs): void
	}

	declare interface ASPxClientWebChartControlHotTrackEventArgs {
		hitObject: ASPxClientWebChartElement,
		additionalHitObject: ASPxClientWebChartElement,
		hitInfo: ASPxClientWebChartHitInfo,
		chart: ASPxClientWebChart,
		htmlElement: Object,
		x: number,
		y: number,
		absoluteX: number,
		absoluteY: number,
		cancel: boolean
	}

	declare interface ASPxClientHitObject {
		Object: ASPxClientWebChartElement,
		AdditionalObject: ASPxClientWebChartElement
	}

	declare interface ASPxClientWebChartHitInfo {
		inChart: boolean,
		inChartTitle: boolean,
		inAxis: boolean,
		inAxisLabelItem: boolean,
		inAxisTitle: boolean,
		inConstantLine: boolean,
		inDiagram: boolean,
		inNonDefaultPane: boolean,
		inLegend: boolean,
		inCustomLegendItem: boolean,
		inSeries: boolean,
		inSeriesLabel: boolean,
		inSeriesPoint: boolean,
		inSeriesTitle: boolean,
		inTrendLine: boolean,
		inFibonacciIndicator: boolean,
		inRegressionLine: boolean,
		inIndicator: boolean,
		inAnnotation: boolean,
		inHyperlink: boolean,
		chart: ASPxClientWebChart,
		chartTitle: ASPxClientChartTitle,
		axis: ASPxClientAxisBase,
		constantLine: ASPxClientConstantLine,
		diagram: ASPxClientXYDiagramBase,
		nonDefaultPane: ASPxClientXYDiagramPane,
		legend: ASPxClientLegend,
		customLegendItem: ASPxClientCustomLegendItem,
		series: ASPxClientSeries,
		seriesLabel: ASPxClientSeriesLabel,
		seriesTitle: ASPxClientSeriesTitle,
		trendLine: ASPxClientTrendLine,
		fibonacciIndicator: ASPxClientFibonacciIndicator,
		regressionLine: ASPxClientRegressionLine,
		indicator: ASPxClientIndicator,
		annotation: ASPxClientAnnotation,
		seriesPoint: ASPxClientSeriesPoint,
		axisLabelItem: ASPxClientAxisLabelItem,
		axisTitle: ASPxClientAxisTitle,
		hyperlink: string
	}

	declare interface ASPxClientDiagramCoordinates {
		argumentScaleType: string,
		valueScaleType: string,
		qualitativeArgument: string,
		numericalArgument: number,
		dateTimeArgument: Date,
		numericalValue: number,
		dateTimeValue: Date,
		axisX: ASPxClientAxisBase,
		axisY: ASPxClientAxisBase,
		pane: ASPxClientXYDiagramPane,
		IsEmpty(): boolean,
		GetAxisValue(axis: ASPxClientAxisBase): ASPxClientAxisValue
	}

	declare interface ASPxClientAxisValue {
		scaleType: string,
		qualitativeValue: string,
		numericalValue: number,
		dateTimeValue: Date
	}

	declare interface ASPxClientControlCoordinates {
		pane: ASPxClientXYDiagramPane,
		x: number,
		y: number,
		visibility: string
	}

	declare interface ASPxClientWebChartElement {
		chart: ASPxClientWebChart
	}

	declare interface ASPxClientWebChartEmptyElement {
		
	}

	declare interface ASPxClientWebChartRequiredElement {
		
	}

	declare interface ASPxClientWebChartElementNamed {
		name: string
	}

	declare interface ASPxClientWebChart {
		chartControl: ASPxClientWebChartControl,
		diagram: ASPxClientWebChartElement,
		series: ASPxClientSeries[],
		titles: ASPxClientChartTitle[],
		annotations: ASPxClientAnnotation[],
		legend: ASPxClientLegend,
		legends: ASPxClientLegend[],
		appearanceName: string,
		paletteName: string,
		showSeriesToolTip: boolean,
		showPointToolTip: boolean,
		showCrosshair: boolean,
		toolTipPosition: ASPxClientToolTipPosition,
		toolTipController: ASPxClientToolTipController,
		crosshairOptions: ASPxClientCrosshairOptions,
		cssPostfix: string,
		selectionMode: string
	}

	declare interface ASPxClientSimpleDiagram {
		
	}

	declare interface ASPxClientXYDiagramBase {
		axisX: ASPxClientAxisBase,
		axisY: ASPxClientAxisBase
	}

	declare interface ASPxClientXYDiagram2D {
		secondaryAxesX: ASPxClientAxis[],
		secondaryAxesY: ASPxClientAxis[],
		defaultPane: ASPxClientXYDiagramPane,
		panes: ASPxClientXYDiagramPane[],
		PointToDiagram(x: number, y: number): ASPxClientDiagramCoordinates,
		DiagramToPoint(
		argument: Object, value: Object, axisX: ASPxClientAxis2D, axisY: ASPxClientAxis2D, pane: ASPxClientXYDiagramPane
	): ASPxClientControlCoordinates
	}

	declare interface ASPxClientXYDiagram {
		rotated: boolean
	}

	declare interface ASPxClientSwiftPlotDiagram {
		
	}

	declare interface ASPxClientXYDiagramPane {
		diagram: ASPxClientXYDiagram
	}

	declare interface ASPxClientXYDiagram3D {
		
	}

	declare interface ASPxClientRadarDiagram {
		PointToDiagram(x: number, y: number): ASPxClientDiagramCoordinates,
		DiagramToPoint(argument: Object, value: Object): ASPxClientControlCoordinates
	}

	declare interface ASPxClientAxisBase {
		diagram: ASPxClientXYDiagramBase,
		range: ASPxClientAxisRange
	}

	declare interface ASPxClientAxis2D {
		axisTitle: ASPxClientAxisTitle,
		strips: ASPxClientStrip[],
		constantLines: ASPxClientConstantLine[]
	}

	declare interface ASPxClientAxis {
		reverse: boolean
	}

	declare interface ASPxClientSwiftPlotDiagramAxis {
		
	}

	declare interface ASPxClientAxis3D {
		
	}

	declare interface ASPxClientRadarAxis {
		
	}

	declare interface ASPxClientAxisTitle {
		axis: ASPxClientAxisBase,
		text: string
	}

	declare interface ASPxClientAxisLabelItem {
		axis: ASPxClientAxisBase,
		text: string,
		axisValue: Object,
		axisValueInternal: number
	}

	declare interface ASPxClientAxisRange {
		axis: ASPxClientAxisBase,
		minValue: Object,
		maxValue: Object,
		minValueInternal: number,
		maxValueInternal: number
	}

	declare interface ASPxClientStrip {
		axis: ASPxClientAxis,
		minValue: Object,
		maxValue: Object
	}

	declare interface ASPxClientConstantLine {
		axis: ASPxClientAxis,
		value: Object,
		title: string
	}

	declare interface ASPxClientSeries {
		viewType: string,
		argumentScaleType: string,
		valueScaleType: string,
		axisX: string,
		axisY: string,
		pane: string,
		visible: boolean,
		toolTipEnabled: boolean,
		toolTipText: string,
		toolTipImage: string,
		label: ASPxClientSeriesLabel,
		points: ASPxClientSeriesPoint[],
		titles: ASPxClientSeriesTitle[],
		indicators: ASPxClientIndicator[],
		regressionLines: ASPxClientRegressionLine[],
		trendLines: ASPxClientTrendLine[],
		fibonacciIndicators: ASPxClientFibonacciIndicator[],
		color: string,
		stackedGroup: string,
		crosshairLabelPattern: string,
		groupedElementsPattern: string,
		crosshairValueItems: ASPxClientCrosshairValueItem[],
		actualCrosshairEnabled: boolean,
		actualCrosshairLabelVisibility: boolean
	}

	declare interface ASPxClientSeriesLabel {
		series: ASPxClientSeries,
		text: string
	}

	declare interface ASPxClientSeriesPoint {
		series: ASPxClientSeries,
		argument: Object,
		values: Object[],
		toolTipText: string,
		color: string,
		percentValue: number,
		toolTipHint: string
	}

	declare interface ASPxClientLegend {
		useCheckBoxes: boolean,
		customItems: ASPxClientCustomLegendItem[],
		name: string
	}

	declare interface ASPxClientTitleBase {
		lines: string[],
		alignment: string,
		dock: string
	}

	declare interface ASPxClientChartTitle {
		
	}

	declare interface ASPxClientSeriesTitle {
		series: ASPxClientSeries
	}

	declare interface ASPxClientIndicator {
		series: ASPxClientSeries
	}

	declare interface ASPxClientFinancialIndicator {
		point1: ASPxClientFinancialIndicatorPoint,
		point2: ASPxClientFinancialIndicatorPoint
	}

	declare interface ASPxClientTrendLine {
		
	}

	declare interface ASPxClientFibonacciIndicator {
		
	}

	declare interface ASPxClientFinancialIndicatorPoint {
		financialIndicator: ASPxClientFinancialIndicator,
		argument: Object,
		valueLevel: string
	}

	declare interface ASPxClientSingleLevelIndicator {
		valueLevel: string
	}

	declare interface ASPxClientRegressionLine {
		
	}

	declare interface ASPxClientMovingAverage {
		pointsCount: number,
		kind: string,
		envelopePercent: number
	}

	declare interface ASPxClientSimpleMovingAverage {
		
	}

	declare interface ASPxClientExponentialMovingAverage {
		
	}

	declare interface ASPxClientWeightedMovingAverage {
		
	}

	declare interface ASPxClientTriangularMovingAverage {
		
	}

	declare interface ASPxClientTripleExponentialMovingAverageTema {
		
	}

	declare interface ASPxClientBollingerBands {
		pointsCount: number,
		valueLevel: string
	}

	declare interface ASPxClientMedianPrice {
		
	}

	declare interface ASPxClientTypicalPrice {
		
	}

	declare interface ASPxClientWeightedClose {
		
	}

	declare interface ASPxSeparatePaneIndicator {
		axisY: string,
		pane: string
	}

	declare interface ASPxClientAverageTrueRange {
		pointsCount: number
	}

	declare interface ASPxClientChaikinsVolatility {
		pointsCount: number
	}

	declare interface ASPxClientCommodityChannelIndex {
		pointsCount: number
	}

	declare interface ASPxClientDetrendedPriceOscillator {
		pointsCount: number,
		valueLevel: string
	}

	declare interface ASPxClientMassIndex {
		movingAveragePointsCount: number,
		sumPointsCount: number
	}

	declare interface ASPxClientMovingAverageConvergenceDivergence {
		shortPeriod: number,
		longPeriod: number,
		signalSmoothingPeriod: number
	}

	declare interface ASPxClientRateOfChange {
		pointsCount: number,
		valueLevel: string
	}

	declare interface ASPxClientRelativeStrengthIndex {
		pointsCount: number,
		valueLevel: string
	}

	declare interface ASPxClientStandardDeviation {
		pointsCount: number,
		valueLevel: string
	}

	declare interface ASPxClientTripleExponentialMovingAverageTrix {
		pointsCount: number,
		valueLevel: string
	}

	declare interface ASPxClientWilliamsR {
		pointsCount: number
	}

	declare interface ASPxClientFixedValueErrorBars {
		positiveError: number,
		negativeError: number
	}

	declare interface ASPxClientPercentageErrorBars {
		percent: number
	}

	declare interface ASPxClientStandardDeviationErrorBars {
		multiplier: number
	}

	declare interface ASPxClientStandardErrorBars {
		
	}

	declare interface ASPxClientDataSourceBasedErrorBars {
		
	}

	declare interface ASPxClientAnnotation {
		
	}

	declare interface ASPxClientTextAnnotation {
		lines: string[]
	}

	declare interface ASPxClientImageAnnotation {
		
	}

	declare interface ASPxClientCrosshairValueItem {
		value: number,
		pointIndex: number
	}

	declare interface ASPxClientToolTipController {
		showImage: boolean,
		showText: boolean,
		imagePosition: string,
		openMode: string
	}

	declare interface ASPxClientToolTipPosition {
		
	}

	declare interface ASPxClientToolTipRelativePosition {
		offsetX: number,
		offsetY: number
	}

	declare interface ASPxClientToolTipFreePosition {
		offsetX: number,
		offsetY: number,
		paneID: number,
		dockPosition: string
	}

	declare interface ASPxClientCrosshairPosition {
		offsetX: number,
		offsetY: number
	}

	declare interface ASPxClientCrosshairMousePosition {
		
	}

	declare interface ASPxClientCrosshairFreePosition {
		paneID: number,
		dockPosition: string
	}

	declare interface ASPxClientLineStyle {
		dashStyle: string,
		thickness: number,
		lineJoin: string
	}

	declare interface ASPxClientCrosshairOptions {
		showAxisXLabels: boolean,
		showAxisYLabels: boolean,
		showCrosshairLabels: boolean,
		showArgumentLine: boolean,
		showValueLine: boolean,
		showOnlyInFocusedPane: boolean,
		snapMode: string,
		crosshairLabelMode: string,
		showGroupHeaders: boolean,
		groupHeaderPattern: string,
		argumentLineColor: string,
		valueLineColor: string
	}

	declare interface ASPxClientChartPrintOptions {
		GetSizeMode(): string,
		SetSizeMode(sizeMode: string): void,
		GetLandscape(): boolean,
		SetLandscape(landscape: boolean): void,
		GetMarginLeft(): number,
		SetMarginLeft(marginLeft: number): void,
		GetMarginTop(): number,
		SetMarginTop(marginTop: number): void,
		GetMarginRight(): number,
		SetMarginRight(marginRight: number): void,
		GetMarginBottom(): number,
		SetMarginBottom(marginBottom: number): void,
		GetPaperKind(): string,
		SetPaperKind(paperKind: string): void,
		GetCustomPaperWidth(): number,
		SetCustomPaperWidth(customPaperWidth: number): void,
		GetCustomPaperHeight(): number,
		SetCustomPaperHeight(customPaperHeight: number): void,
		GetCustomPaperName(): string,
		SetCustomPaperName(customPaperName: string): void
	}

	declare interface ASPxClientCustomLegendItem {
		text: string
	}

	declare interface ASPxClientDocumentViewer {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientDocumentViewer>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientDocumentViewer>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientDocumentViewer>>,
		ToolbarItemValueChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientDocumentViewer>>,
		ToolbarItemClick: ASPxClientEvent<ASPxClientEventHandler<ASPxClientDocumentViewer>>,
		PageLoad: ASPxClientEvent<ASPxClientReportViewerPageLoadEventHandler<ASPxClientDocumentViewer>>,
		GetSplitter(): ASPxClientSplitter,
		GetViewer(): ASPxClientReportViewer,
		GetToolbar(): ASPxClientReportToolbar,
		GetRibbonToolbar(): ASPxClientRibbon,
		GetParametersPanel(): ASPxClientReportParametersPanel,
		GetDocumentMap(): ASPxClientReportDocumentMap,
		GotoBookmark(pageIndex: number, bookmarkPath: string): void,
		Refresh(): void,
		Print(): void,
		Print(pageIndex: number): void,
		GotoPage(pageIndex: number): void,
		Search(): void,
		IsSearchAllowed(): boolean,
		SaveToWindow(format: string): void,
		SaveToDisk(format: string): void
	}

	declare interface ASPxClientToolbarItemValueChangedEventHandler<S> {
		(source: S, e: ASPxClientToolbarItemValueChangedEventArgs): void
	}

	declare interface ASPxClientToolbarItemValueChangedEventArgs {
		item: ASPxClientMenuItem,
		editor: ASPxClientControl
	}

	declare interface ASPxClientQueryBuilder {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientQueryBuilder>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientQueryBuilder>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientQueryBuilder>>,
		CustomizeToolbarActions: ASPxClientEvent<ASPxClientQueryBuilderCustomizeToolbarActionsEventHandler<ASPxClientQueryBuilder>>,
		SaveCommandExecute: ASPxClientEvent<ASPxClientQueryBuilderSaveCommandExecuteEventHandler<ASPxClientQueryBuilder>>,
		PerformCallback(arg: string): void,
		PerformCallback(arg: string, onSuccess: (arg1: string) => void): void,
		UpdateLocalization(localization: {
		[key: string]: string
	}): void,
		GetDesignerModel(): Object,
		GetJsonQueryModel(): string,
		Save(): void,
		ShowPreview(): void,
		IsQueryValid(): boolean
	}

	declare interface ASPxClientQueryBuilderSaveCommandExecuteEventHandler<S> {
		(source: S, e: ASPxClientQueryBuilderSaveCommandExecuteEventArgs): void
	}

	declare interface ASPxClientQueryBuilderSaveCommandExecuteEventArgs {
		handled: boolean
	}

	declare interface ASPxClientQueryBuilderCustomizeToolbarActionsEventHandler<S> {
		(source: S, e: ASPxClientQueryBuilderCustomizeToolbarActionsEventArgs): void
	}

	declare interface ASPxClientQueryBuilderMenuAction {
		text: string,
		imageClassName: string,
		clickAction: Function,
		disabled: boolean,
		visible: boolean,
		hotKey: string,
		hasSeparator: string,
		container: string
	}

	declare interface ASPxClientQueryBuilderCustomizeToolbarActionsEventArgs {
		Actions: ASPxClientQueryBuilderMenuAction[],
		GetById(actionId: string): ASPxClientQueryBuilderMenuAction
	}

	declare interface ASPxClientReportDesigner {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientReportDesigner>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientReportDesigner>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientReportDesigner>>,
		SaveCommandExecute: ASPxClientEvent<ASPxClientReportDesignerSaveCommandExecuteEventHandler<ASPxClientReportDesigner>>,
		CustomizeMenuActions: ASPxClientEvent<ASPxClientReportDesignerCustomizeMenuActionsEventHandler<ASPxClientReportDesigner>>,
		CustomizeParameterEditors: ASPxClientEvent<ASPxClientReportDesignerCustomizeParameterEditorsEventHandler<ASPxClientReportDesigner>>,
		ExitDesigner: ASPxClientEvent<ASPxClientReportDesignerExitDesignerEventHandler<ASPxClientReportDesigner>>,
		PerformCallback(arg: string): void,
		PerformCallback(arg: string, onSuccess: (arg1: string) => void): void,
		UpdateLocalization(localization: {
		[key: string]: string
	}): void,
		GetDesignerModel(): Object,
		GetJsonReportModel(): string,
		GetPropertyInfo(
		controlType: string, propertyDisplayName: string
	): ASPxDesignerElementSerializationInfo,
		IsModified(): boolean,
		ResetIsModified(): void
	}

	declare interface ASPxClientReportDesignerSaveCommandExecuteEventHandler<S> {
		(source: S, e: ASPxClientReportDesignerSaveCommandExecuteEventArgs): void
	}

	declare interface ASPxClientReportDesignerSaveCommandExecuteEventArgs {
		handled: boolean
	}

	declare interface ASPxClientReportDesignerCustomizeMenuActionsEventHandler<S> {
		(source: S, e: ASPxClientReportDesignerCustomizeMenuActionsEventArgs): void
	}

	declare interface ASPxClientReportDesignerMenuAction {
		text: string,
		imageClassName: string,
		clickAction: Function,
		disabled: boolean,
		visible: boolean,
		hotKey: string,
		hasSeparator: string,
		container: string
	}

	declare interface ASPxClientReportDesignerCustomizeMenuActionsEventArgs {
		Actions: ASPxClientReportDesignerMenuAction[],
		GetById(actionId: string): ASPxClientReportDesignerMenuAction
	}

	declare interface ASPxClientReportDesignerExitDesignerEventArgs {
		
	}

	declare interface ASPxClientReportDesignerCustomizeParameterEditorsEventHandler<S> {
		(source: S, e: ASPxClientCustomizeParameterEditorsEventArgs): void
	}

	declare interface ASPxClientReportDesignerExitDesignerEventHandler<S> {
		(source: S, e: ASPxClientReportDesignerExitDesignerEventArgs): void
	}

	declare interface ASPxClientReportDocumentMap {
		ContentChanged: ASPxClientEvent<ASPxClientEventHandler<ASPxClientReportDocumentMap>>
	}

	declare interface ASPxClientReportParametersPanel {
		AssignParameters(parametersInfo: ASPxClientReportParameterInfo[]): void,
		AssignParameter(path: string, value: Object): void,
		GetParameterNames(): string[],
		GetEditorByParameterName(parameterName: string): ASPxClientControl
	}

	declare interface ASPxClientReportParameterInfo {
		Path: string,
		Value: Object
	}

	declare interface ASPxClientReportToolbar {
		GetItemTemplateControl(name: string): ASPxClientControl
	}

	declare interface ASPxClientReportViewer {
		BeginCallback: ASPxClientEvent<ASPxClientBeginCallbackEventHandler<ASPxClientReportViewer>>,
		EndCallback: ASPxClientEvent<ASPxClientEndCallbackEventHandler<ASPxClientReportViewer>>,
		CallbackError: ASPxClientEvent<ASPxClientCallbackErrorEventHandler<ASPxClientReportViewer>>,
		PageLoad: ASPxClientEvent<ASPxClientReportViewerPageLoadEventHandler<ASPxClientReportViewer>>,
		SubmitParameters(parameters: {
		[key: string]: Object
	}): void,
		Print(): void,
		Print(pageIndex: number): void,
		GotoPage(pageIndex: number): void,
		Refresh(): void,
		Search(): void,
		SaveToWindow(format: string): void,
		SaveToDisk(format: string): void,
		IsSearchAllowed(): boolean
	}

	declare interface ASPxClientReportViewerPageLoadEventHandler<S> {
		(source: S, e: ASPxClientReportViewerPageLoadEventArgs): void
	}

	declare interface ASPxClientReportViewerPageLoadEventArgs {
		PageIndex: number,
		PageCount: number,
		IsFirstPage(): boolean,
		IsLastPage(): boolean
	}

	declare interface ASPxClientCustomizeParameterEditorsEventArgs {
		parameter: ASPxDesignerElementParameterDescriptor,
		info: ASPxDesignerElementSerializationInfo
	}

	declare interface ASPxDesignerElementParameterDescriptor {
		description: string,
		name: string,
		type: string,
		value: Object,
		visible: boolean
	}

	declare interface ASPxDesignerElementSerializationInfo {
		propertyName: string,
		displayName: string,
		modelName: string,
		defaultVal: Object,
		info: ASPxDesignerElementSerializationInfo[],
		array: boolean,
		link: boolean,
		editor: ASPxDesignerElementEditor,
		valuesArray: ASPxDesignerElementEditorItem[],
		validationRules: Object[],
		visible: Object,
		disabled: Object
	}

	declare interface ASPxDesignerElementEditor {
		header: string,
		content: string,
		editorType: Object
	}

	declare interface ASPxDesignerElementEditorItem {
		value: Object,
		displayValue: string
	}

	declare interface ASPxClientWebDocumentViewer {
		CustomizeMenuActions: ASPxClientEvent<ASPxClientWebDocumentViewerCustomizeMenuActionsEventHandler<ASPxClientWebDocumentViewer>>,
		CustomizeParameterEditors: ASPxClientEvent<ASPxClientWebDocumentViewerCustomizeParameterEditorsEventHandler<ASPxClientWebDocumentViewer>>,
		GetPreviewModel(): Object,
		OpenReport(): Object,
		Print(): void,
		Print(pageIndex: number): void,
		ExportTo(): void,
		ExportTo(format: string): void,
		UpdateLocalization(localization: {
		[key: string]: string
	}): void
	}

	declare interface ASPxClientWebDocumentViewerCustomizeMenuActionsEventHandler<S> {
		(source: S, e: ASPxClientWebDocumentViewerCustomizeMenuActionsEventArgs): void
	}

	declare interface ASPxClientWebDocumentViewerMenuAction {
		text: string,
		imageClassName: string,
		clickAction: Function,
		disabled: boolean,
		visible: boolean,
		hotKey: string,
		hasSeparator: string,
		container: string
	}

	declare interface ASPxClientWebDocumentViewerCustomizeMenuActionsEventArgs {
		Actions: ASPxClientWebDocumentViewerMenuAction[],
		GetById(actionId: string): ASPxClientWebDocumentViewerMenuAction
	}

	declare interface ASPxClientWebDocumentViewerCustomizeParameterEditorsEventHandler<S> {
		(source: S, e: ASPxClientCustomizeParameterEditorsEventArgs): void
	}

	declare interface MVCxClientDashboardViewerStatic {
		
	}

	declare interface DashboardDataAxisNamesStatic {
		DefaultAxis: string,
		ChartSeriesAxis: string,
		ChartArgumentAxis: string,
		SparklineAxis: string,
		PivotColumnAxis: string,
		PivotRowAxis: string
	}

	declare interface DashboardSpecialValuesStatic {
		NullValue: string,
		OlapNullValue: string,
		OthersValue: string,
		ErrorValue: string,
		IsNullValue(value: Object): boolean,
		IsOlapNullValue(value: Object): boolean,
		IsOthersValue(value: Object): boolean,
		IsErrorValue(value: Object): boolean
	}

	declare interface ASPxClientDashboardDesignerStatic {
		
	}

	declare interface ASPxClientDashboardViewerStatic {
		Cast(obj: Object): ASPxClientDashboardViewer
	}

	declare interface DashboardExportPageLayoutStatic {
		Portrait: string,
		Landscape: string
	}

	declare interface DashboardExportPaperKindStatic {
		Letter: string,
		Legal: string,
		Executive: string,
		A5: string,
		A4: string,
		A3: string
	}

	declare interface DashboardExportScaleModeStatic {
		None: string,
		UseScaleFactor: string,
		AutoFitToPageWidth: string,
		AutoFitWithinOnePage: string
	}

	declare interface DashboardExportFilterStateStatic {
		None: string,
		Below: string,
		SeparatePage: string
	}

	declare interface DashboardExportImageFormatStatic {
		Png: string,
		Gif: string,
		Jpg: string
	}

	declare interface DashboardExportExcelFormatStatic {
		Xls: string,
		Xlsx: string,
		Csv: string
	}

	declare interface ChartExportSizeModeStatic {
		None: string,
		Stretch: string,
		Zoom: string
	}

	declare interface MapExportSizeModeStatic {
		None: string,
		Zoom: string
	}

	declare interface RangeFilterExportSizeModeStatic {
		None: string,
		Stretch: string,
		Zoom: string
	}

	declare interface DashboardSelectionModeStatic {
		None: string,
		Single: string,
		Multiple: string
	}

	declare interface ASPxClientEditBaseStatic {
		
	}

	declare interface ASPxClientEditStatic {
		ClearEditorsInContainer(
		container: Object, validationGroup: string, clearInvisibleEditors: boolean
	): void,
		ClearEditorsInContainer(container: Object, validationGroup: string): void,
		ClearEditorsInContainer(container: Object): void,
		ClearEditorsInContainerById(
		containerId: string, validationGroup: string, clearInvisibleEditors: boolean
	): void,
		ClearEditorsInContainerById(containerId: string, validationGroup: string): void,
		ClearEditorsInContainerById(containerId: string): void,
		ClearGroup(validationGroup: string, clearInvisibleEditors: boolean): void,
		ClearGroup(validationGroup: string): void,
		ValidateEditorsInContainer(
		container: Object, validationGroup: string, validateInvisibleEditors: boolean
	): boolean,
		ValidateEditorsInContainer(container: Object, validationGroup: string): boolean,
		ValidateEditorsInContainer(container: Object): boolean,
		ValidateEditorsInContainerById(
		containerId: string, validationGroup: string, validateInvisibleEditors: boolean
	): boolean,
		ValidateEditorsInContainerById(containerId: string, validationGroup: string): boolean,
		ValidateEditorsInContainerById(containerId: string): boolean,
		ValidateGroup(validationGroup: string, validateInvisibleEditors: boolean): boolean,
		ValidateGroup(validationGroup: string): boolean,
		AreEditorsValid(
		container: Object, validationGroup: string, checkInvisibleEditors: boolean
	): boolean,
		AreEditorsValid(container: Object, validationGroup: string): boolean,
		AreEditorsValid(container: Object): boolean,
		AreEditorsValid(
		containerId: string, validationGroup: string, checkInvisibleEditors: boolean
	): boolean,
		AreEditorsValid(containerId: string, validationGroup: string): boolean,
		AreEditorsValid(containerId: string): boolean,
		AreEditorsValid(): boolean
	}

	declare interface ASPxClientBinaryImageStatic {
		Cast(obj: Object): ASPxClientBinaryImage
	}

	declare interface ASPxClientButtonStatic {
		Cast(obj: Object): ASPxClientButton
	}

	declare interface ASPxClientCalendarStatic {
		Cast(obj: Object): ASPxClientCalendar
	}

	declare interface ASPxClientCaptchaStatic {
		Cast(obj: Object): ASPxClientCaptcha
	}

	declare interface ASPxClientCheckBoxStatic {
		Cast(obj: Object): ASPxClientCheckBox
	}

	declare interface ASPxClientRadioButtonStatic {
		Cast(obj: Object): ASPxClientRadioButton
	}

	declare interface ASPxClientTextEditStatic {
		
	}

	declare interface ASPxClientTextBoxBaseStatic {
		
	}

	declare interface ASPxClientButtonEditBaseStatic {
		
	}

	declare interface ASPxClientDropDownEditBaseStatic {
		
	}

	declare interface ASPxClientColorEditStatic {
		Cast(obj: Object): ASPxClientColorEdit
	}

	declare interface ASPxClientComboBoxStatic {
		Cast(obj: Object): ASPxClientComboBox
	}

	declare interface ASPxClientDateEditStatic {
		Cast(obj: Object): ASPxClientDateEdit
	}

	declare interface ASPxClientDropDownEditStatic {
		Cast(obj: Object): ASPxClientDropDownEdit
	}

	declare interface ASPxClientFilterControlStatic {
		Cast(obj: Object): ASPxClientFilterControl
	}

	declare interface ASPxClientListEditStatic {
		
	}

	declare interface ASPxClientListBoxStatic {
		Cast(obj: Object): ASPxClientListBox
	}

	declare interface ASPxClientCheckListBaseStatic {
		
	}

	declare interface ASPxClientRadioButtonListStatic {
		Cast(obj: Object): ASPxClientRadioButtonList
	}

	declare interface ASPxClientCheckBoxListStatic {
		Cast(obj: Object): ASPxClientCheckBoxList
	}

	declare interface ASPxClientProgressBarStatic {
		Cast(obj: Object): ASPxClientProgressBar
	}

	declare interface ASPxClientSpinEditBaseStatic {
		
	}

	declare interface ASPxClientSpinEditStatic {
		Cast(obj: Object): ASPxClientSpinEdit
	}

	declare interface ASPxClientTimeEditStatic {
		Cast(obj: Object): ASPxClientTimeEdit
	}

	declare interface ASPxClientStaticEditStatic {
		
	}

	declare interface ASPxClientHyperLinkStatic {
		Cast(obj: Object): ASPxClientHyperLink
	}

	declare interface ASPxClientImageBaseStatic {
		
	}

	declare interface ASPxClientImageStatic {
		Cast(obj: Object): ASPxClientImage
	}

	declare interface ASPxClientLabelStatic {
		Cast(obj: Object): ASPxClientLabel
	}

	declare interface ASPxClientTextBoxStatic {
		Cast(obj: Object): ASPxClientTextBox
	}

	declare interface ASPxClientMemoStatic {
		Cast(obj: Object): ASPxClientMemo
	}

	declare interface ASPxClientButtonEditStatic {
		Cast(obj: Object): ASPxClientButtonEdit
	}

	declare interface ASPxClientTokenBoxStatic {
		Cast(obj: Object): ASPxClientTokenBox
	}

	declare interface ASPxClientTrackBarStatic {
		Cast(obj: Object): ASPxClientTrackBar
	}

	declare interface ASPxClientValidationSummaryStatic {
		
	}

	declare interface ASPxClientGaugeControlStatic {
		Cast(obj: Object): ASPxClientGaugeControl
	}

	declare interface ASPxClientGridBaseStatic {
		
	}

	declare interface ASPxClientGridViewCallbackCommandStatic {
		NextPage: string,
		PreviousPage: string,
		GotoPage: string,
		SelectRows: string,
		SelectRowsKey: string,
		Selection: string,
		FocusedRow: string,
		Group: string,
		UnGroup: string,
		Sort: string,
		ColumnMove: string,
		CollapseAll: string,
		ExpandAll: string,
		ExpandRow: string,
		CollapseRow: string,
		HideAllDetail: string,
		ShowAllDetail: string,
		ShowDetailRow: string,
		HideDetailRow: string,
		PagerOnClick: string,
		ApplyFilter: string,
		ApplyColumnFilter: string,
		ApplyMultiColumnFilter: string,
		ApplyHeaderColumnFilter: string,
		ApplySearchPanelFilter: string,
		FilterRowMenu: string,
		StartEdit: string,
		CancelEdit: string,
		UpdateEdit: string,
		AddNewRow: string,
		DeleteRow: string,
		CustomButton: string,
		CustomCallback: string,
		ShowFilterControl: string,
		CloseFilterControl: string,
		SetFilterEnabled: string,
		Refresh: string,
		SelFieldValues: string,
		RowValues: string,
		PageRowValues: string,
		FilterPopup: string,
		ContextMenu: string,
		CustomValues: string
	}

	declare interface ASPxClientGridLookupStatic {
		Cast(obj: Object): ASPxClientGridLookup
	}

	declare interface ASPxClientCardViewStatic {
		Cast(obj: Object): ASPxClientCardView
	}

	declare interface ASPxClientGridViewStatic {
		Cast(obj: Object): ASPxClientGridView
	}

	declare interface ASPxClientVerticalGridStatic {
		Cast(obj: Object): ASPxClientVerticalGrid
	}

	declare interface ASPxClientVerticalGridCallbackCommandStatic {
		ExpandRow: string
	}

	declare interface ASPxClientCommandConstsStatic {
		SHOWSEARCHPANEL_COMMAND: string,
		FINDANDREPLACE_DIALOG_COMMAND: string,
		BOLD_COMMAND: string,
		ITALIC_COMMAND: string,
		UNDERLINE_COMMAND: string,
		STRIKETHROUGH_COMMAND: string,
		SUPERSCRIPT_COMMAND: string,
		SUBSCRIPT_COMMAND: string,
		JUSTIFYCENTER_COMMAND: string,
		JUSTIFYLEFT_COMMAND: string,
		INDENT_COMMAND: string,
		OUTDENT_COMMAND: string,
		JUSTIFYRIGHT_COMMAND: string,
		JUSTIFYFULL_COMMAND: string,
		FONTSIZE_COMMAND: string,
		FONTNAME_COMMAND: string,
		FONTCOLOR_COMMAND: string,
		BACKCOLOR_COMMAND: string,
		FORMATBLOCK_COMMAND: string,
		APPLYCSS_COMMAND: string,
		REMOVEFORMAT_COMMAND: string,
		UNDO_COMMAND: string,
		REDO_COMMAND: string,
		COPY_COMMAND: string,
		PASTE_COMMAND: string,
		PASTEFROMWORD_COMMAND: string,
		PASTEFROMWORDDIALOG_COMMAND: string,
		CUT_COMMAND: string,
		SELECT_ALL: string,
		DELETE_COMMAND: string,
		PASTEHTML_COMMAND: string,
		INSERTORDEREDLIST_COMMAND: string,
		INSERTUNORDEREDLIST_COMMAND: string,
		RESTARTORDEREDLIST_COMMAND: string,
		CONTINUEORDEREDLIST_COMMAND: string,
		UNLINK_COMMAND: string,
		INSERTLINK_COMMAND: string,
		INSERTIMAGE_COMMAND: string,
		CHANGEIMAGE_COMMAND: string,
		CHECKSPELLING_COMMAND: string,
		INSERTIMAGE_DIALOG_COMMAND: string,
		CHANGEIMAGE_DIALOG_COMMAND: string,
		INSERTLINK_DIALOG_COMMAND: string,
		CHANGELINK_DIALOG_COMMAND: string,
		INSERTTABLE_DIALOG_COMMAND: string,
		TABLEPROPERTIES_DIALOG_COMMAND: string,
		TABLECELLPROPERTIES_DIALOG_COMMAND: string,
		TABLECOLUMNPROPERTIES_DIALOG_COMMAND: string,
		TABLEROWPROPERTIES_DIALOG_COMMAND: string,
		PRINT_COMMAND: string,
		FULLSCREEN_COMMAND: string,
		INSERTTABLE_COMMAND: string,
		CHANGETABLE_COMMAND: string,
		CHANGETABLECELL_COMMAND: string,
		CHANGETABLEROW_COMMAND: string,
		CHANGETABLECOLUMN_COMMAND: string,
		DELETETABLE_COMMAND: string,
		DELETETABLEROW_COMMAND: string,
		DELETETABLECOLUMN_COMMAND: string,
		INSERTTABLECOLUMNTOLEFT_COMMAND: string,
		INSERTTABLECOLUMNTORIGHT_COMMAND: string,
		INSERTTABLEROWBELOW_COMMAND: string,
		INSERTTABLEROWABOVE_COMMAND: string,
		SPLITTABLECELLHORIZONTALLY_COMMAND: string,
		SPLITTABLECELLVERTICALLY_COMMAND: string,
		MERGETABLECELLRIGHT_COMMAND: string,
		MERGETABLECELLDOWN_COMMAND: string,
		CUSTOMDIALOG_COMMAND: string,
		EXPORT_COMMAND: string,
		INSERTAUDIO_COMMAND: string,
		INSERTVIDEO_COMMAND: string,
		INSERTFLASH_COMMAND: string,
		INSERTYOUTUBEVIDEO_COMMAND: string,
		CHANGEAUDIO_COMMAND: string,
		CHANGEVIDEO_COMMAND: string,
		CHANGEFLASH_COMMAND: string,
		CHANGEYOUTUBEVIDEO_COMMAND: string,
		INSERTAUDIO_DIALOG_COMMAND: string,
		INSERTVIDEO_DIALOG_COMMAND: string,
		INSERTFLASH_DIALOG_COMMAND: string,
		INSERTYOUTUBEVIDEO_DIALOG_COMMAND: string,
		CHANGEAUDIO_DIALOG_COMMAND: string,
		CHANGEVIDEO_DIALOG_COMMAND: string,
		CHANGEFLASH_DIALOG_COMMAND: string,
		CHANGEYOUTUBEVIDEO_DIALOG_COMMAND: string,
		PASTEHTMLSOURCEFORMATTING_COMMAND: string,
		PASTEHTMLPLAINTEXT_COMMAND: string,
		PASTEHTMLMERGEFORMATTING_COMMAND: string,
		INSERTPLACEHOLDER_COMMAND: string,
		CHANGEPLACEHOLDER_COMMAND: string,
		INSERTPLACEHOLDER_DIALOG_COMMAND: string,
		CHANGEPLACEHOLDER_DIALOG_COMMAND: string,
		UPDATEDOCUMENT_COMMAND: string,
		CHANGEELEMENTPROPERTIES_COMMAND: string,
		CHANGEELEMENTPROPERTIES_DIALOG_COMMAND: string,
		COMMENT_COMMAND: string,
		UNCOMMENTHTML_COMMAND: string,
		FORMATDOCUMENT_COMMAND: string,
		INDENTLINE_COMMAND: string,
		OUTDENTLINE_COMMAND: string,
		COLLAPSETAG_COMMAND: string,
		EXPANDTAG_COMMAND: string,
		SHOWINTELLISENSE_COMMAND: string
	}

	declare interface ASPxClientHtmlEditorStatic {
		Cast(obj: Object): ASPxClientHtmlEditor,
		CustomDialogComplete(status: Object, data: Object): void
	}

	declare interface ASPxClientHtmlEditorMediaPreloadModeStatic {
		None: string,
		Auto: string,
		Metadata: string
	}

	declare interface ASPxClientPivotGridStatic {
		Cast(obj: Object): ASPxClientPivotGrid
	}

	declare interface ASPxClientPivotCustomizationStatic {
		
	}

	declare interface ASPxClientRichEditStatic {
		Cast(obj: Object): ASPxClientRichEdit
	}

	declare interface ASPxSchedulerDateTimeHelperStatic {
		TruncToDate(date: Date): Date,
		ToDayTime(date: Date): any,
		AddDays(date: Date, dayCount: number): Date,
		AddTimeSpan(date: Date, timeSpan: any): Date,
		CeilDateTime(date: Date, spanInMs: any): Date
	}

	declare interface ASPxClientWeekDaysCheckEditStatic {
		
	}

	declare interface ASPxClientRecurrenceRangeControlStatic {
		
	}

	declare interface ASPxClientRecurrenceControlBaseStatic {
		
	}

	declare interface ASPxClientDailyRecurrenceControlStatic {
		
	}

	declare interface ASPxClientWeeklyRecurrenceControlStatic {
		
	}

	declare interface ASPxClientMonthlyRecurrenceControlStatic {
		
	}

	declare interface ASPxClientYearlyRecurrenceControlStatic {
		
	}

	declare interface ASPxClientRecurrenceTypeEditStatic {
		
	}

	declare interface ASPxClientTimeIntervalStatic {
		CalculateDuration(start: Date, end: Date): number
	}

	declare interface ASPxClientSchedulerStatic {
		Cast(obj: Object): ASPxClientScheduler
	}

	declare interface ASPxClientSpellCheckerStatic {
		Cast(obj: Object): ASPxClientSpellChecker
	}

	declare interface ASPxClientSpreadsheetStatic {
		Cast(obj: Object): ASPxClientSpreadsheet
	}

	declare interface ASPxClientTreeListStatic {
		Cast(obj: Object): ASPxClientTreeList
	}

	declare interface MVCxClientCalendarStatic {
		Cast(obj: Object): MVCxClientCalendar
	}

	declare interface MVCxClientCallbackPanelStatic {
		Cast(obj: Object): MVCxClientCallbackPanel
	}

	declare interface MVCxClientCardViewStatic {
		Cast(obj: Object): MVCxClientCardView
	}

	declare interface MVCxClientChartStatic {
		Cast(obj: Object): MVCxClientChart
	}

	declare interface MVCxClientComboBoxStatic {
		Cast(obj: Object): MVCxClientComboBox
	}

	declare interface MVCxClientDataViewStatic {
		Cast(obj: Object): MVCxClientDataView
	}

	declare interface MVCxClientDateEditStatic {
		Cast(obj: Object): MVCxClientDateEdit
	}

	declare interface MVCxClientDockManagerStatic {
		Cast(obj: Object): MVCxClientDockManager
	}

	declare interface MVCxClientDockPanelStatic {
		Cast(obj: Object): MVCxClientDockPanel
	}

	declare interface MVCxClientFileManagerStatic {
		Cast(obj: Object): MVCxClientFileManager
	}

	declare interface MVCxClientGridViewStatic {
		Cast(obj: Object): MVCxClientGridView
	}

	declare interface MVCxClientHtmlEditorStatic {
		Cast(obj: Object): MVCxClientHtmlEditor
	}

	declare interface MVCxClientImageGalleryStatic {
		Cast(obj: Object): MVCxClientImageGallery
	}

	declare interface MVCxClientListBoxStatic {
		Cast(obj: Object): MVCxClientListBox
	}

	declare interface MVCxClientNavBarStatic {
		Cast(obj: Object): MVCxClientNavBar
	}

	declare interface MVCxClientPivotGridStatic {
		Cast(obj: Object): MVCxClientPivotGrid
	}

	declare interface MVCxClientPopupControlStatic {
		Cast(obj: Object): MVCxClientPopupControl
	}

	declare interface MVCxClientDocumentViewerStatic {
		
	}

	declare interface MVCxClientReportViewerStatic {
		
	}

	declare interface MVCxClientReportDesignerStatic {
		
	}

	declare interface MVCxClientRichEditStatic {
		Cast(obj: Object): MVCxClientRichEdit
	}

	declare interface MVCxClientRoundPanelStatic {
		Cast(obj: Object): MVCxClientRoundPanel
	}

	declare interface MVCxClientSchedulerStatic {
		Cast(obj: Object): MVCxClientScheduler
	}

	declare interface MVCxSchedulerToolTipTypeStatic {
		Appointment: number,
		AppointmentDrag: number,
		Selection: number
	}

	declare interface MVCxClientSpreadsheetStatic {
		Cast(obj: Object): MVCxClientSpreadsheet
	}

	declare interface MVCxClientPageControlStatic {
		Cast(obj: Object): MVCxClientPageControl
	}

	declare interface MVCxClientTokenBoxStatic {
		Cast(obj: Object): MVCxClientTokenBox
	}

	declare interface MVCxClientTreeListStatic {
		Cast(obj: Object): MVCxClientTreeList
	}

	declare interface MVCxClientTreeViewStatic {
		Cast(obj: Object): MVCxClientTreeView
	}

	declare interface MVCxClientUploadControlStatic {
		Cast(obj: Object): MVCxClientUploadControl
	}

	declare interface MVCxClientUtilsStatic {
		FinalizeCallback(): void,
		GetSerializedEditorValuesInContainer(containerOrId: Object): Object,
		GetSerializedEditorValuesInContainer(containerOrId: Object, processInvisibleEditors: boolean): Object
	}

	declare interface MVCxClientGlobalEventsStatic {
		AddControlsInitializedEventHandler(handler: ASPxClientControlsInitializedEventHandler<any>): void,
		AddBeginCallbackEventHandler(handler: MVCxClientBeginCallbackEventHandler<any>): void,
		AddEndCallbackEventHandler(handler: ASPxClientEndCallbackEventHandler<any>): void,
		AddCallbackErrorHandler(handler: ASPxClientCallbackErrorEventHandler<any>): void
	}

	declare interface MVCxClientVerticalGridStatic {
		Cast(obj: Object): MVCxClientVerticalGrid
	}

	declare interface MVCxClientWebDocumentViewerStatic {
		
	}

	declare interface ASPxClientControlBaseStatic {
		Cast(obj: Object): ASPxClientControlBase
	}

	declare interface ASPxClientControlStatic {
		Cast(obj: Object): ASPxClientControl,
		AdjustControls(): void,
		AdjustControls(container: Object): void,
		GetControlCollection(): ASPxClientControlCollection
	}

	declare interface ASPxClientCallbackStatic {
		Cast(obj: Object): ASPxClientCallback
	}

	declare interface ASPxClientCallbackPanelStatic {
		Cast(obj: Object): ASPxClientCallbackPanel
	}

	declare interface ASPxClientCloudControlStatic {
		Cast(obj: Object): ASPxClientCloudControl
	}

	declare interface ASPxClientDataViewStatic {
		Cast(obj: Object): ASPxClientDataView
	}

	declare interface ASPxClientDockManagerStatic {
		Cast(obj: Object): ASPxClientDockManager
	}

	declare interface ASPxClientPopupControlBaseStatic {
		
	}

	declare interface ASPxClientDockPanelStatic {
		Cast(obj: Object): ASPxClientDockPanel
	}

	declare interface ASPxClientDockZoneStatic {
		Cast(obj: Object): ASPxClientDockZone
	}

	declare interface ASPxClientFileManagerStatic {
		Cast(obj: Object): ASPxClientFileManager
	}

	declare interface ASPxClientFileManagerCommandConstsStatic {
		Rename: string,
		Move: string,
		Delete: string,
		Create: string,
		Upload: string,
		Download: string,
		Copy: string,
		Open: string
	}

	declare interface ASPxClientFileManagerErrorConstsStatic {
		FileNotFound: number,
		FolderNotFound: number,
		AccessDenied: number,
		UnspecifiedIO: number,
		Unspecified: number,
		EmptyName: number,
		CanceledOperation: number,
		InvalidSymbols: number,
		WrongExtension: number,
		UsedByAnotherProcess: number,
		AlreadyExists: number
	}

	declare interface ASPxClientFormLayoutStatic {
		Cast(obj: Object): ASPxClientFormLayout
	}

	declare interface ASPxClientHiddenFieldStatic {
		Cast(obj: Object): ASPxClientHiddenField
	}

	declare interface ASPxClientImageGalleryStatic {
		Cast(obj: Object): ASPxClientImageGallery
	}

	declare interface ASPxClientImageSliderStatic {
		Cast(obj: Object): ASPxClientImageSlider
	}

	declare interface ASPxClientImageZoomNavigatorStatic {
		
	}

	declare interface ASPxClientImageZoomStatic {
		
	}

	declare interface ASPxClientLoadingPanelStatic {
		Cast(obj: Object): ASPxClientLoadingPanel
	}

	declare interface ASPxClientMenuBaseStatic {
		GetMenuCollection(): ASPxClientMenuCollection
	}

	declare interface ASPxClientMenuStatic {
		Cast(obj: Object): ASPxClientMenu
	}

	declare interface ASPxClientTouchUIStatic {
		MakeScrollable(id: string): ScrollExtender,
		MakeScrollable(element: Object): ScrollExtender,
		MakeScrollable(id: string, options: ASPxClientTouchUIOptions): ScrollExtender,
		MakeScrollable(element: Object, options: ASPxClientTouchUIOptions): ScrollExtender
	}

	declare interface ASPxClientNavBarStatic {
		Cast(obj: Object): ASPxClientNavBar
	}

	declare interface ASPxClientNewsControlStatic {
		Cast(obj: Object): ASPxClientNewsControl
	}

	declare interface ASPxClientObjectContainerStatic {
		Cast(obj: Object): ASPxClientObjectContainer
	}

	declare interface ASPxClientPanelBaseStatic {
		Cast(obj: Object): ASPxClientPanelBase
	}

	declare interface ASPxClientPanelStatic {
		Cast(obj: Object): ASPxClientPanel
	}

	declare interface ASPxClientPopupControlStatic {
		Cast(obj: Object): ASPxClientPopupControl,
		GetPopupControlCollection(): ASPxClientPopupControlCollection
	}

	declare interface ASPxClientPopupControlResizeStateStatic {
		Resized: number,
		Collapsed: number,
		Expanded: number,
		Maximized: number,
		RestoredAfterMaximized: number
	}

	declare interface ASPxClientPopupControlCloseReasonStatic {
		API: string,
		CloseButton: string,
		OuterMouseClick: string,
		MouseOut: string,
		Escape: string
	}

	declare interface ASPxClientPopupMenuStatic {
		Cast(obj: Object): ASPxClientPopupMenu
	}

	declare interface ASPxClientRatingControlStatic {
		Cast(obj: Object): ASPxClientRatingControl
	}

	declare interface ASPxClientRibbonStatic {
		Cast(obj: Object): ASPxClientRibbon
	}

	declare interface ASPxClientRibbonStateStatic {
		Normal: number,
		Minimized: number,
		TemporaryShown: number
	}

	declare interface ASPxClientRoundPanelStatic {
		Cast(obj: Object): ASPxClientRoundPanel
	}

	declare interface ASPxClientSplitterStatic {
		Cast(obj: Object): ASPxClientSplitter
	}

	declare interface ASPxClientTabControlBaseStatic {
		
	}

	declare interface ASPxClientTabControlStatic {
		Cast(obj: Object): ASPxClientTabControl
	}

	declare interface ASPxClientPageControlStatic {
		Cast(obj: Object): ASPxClientPageControl
	}

	declare interface ASPxClientTimerStatic {
		Cast(obj: Object): ASPxClientTimer
	}

	declare interface ASPxClientTitleIndexStatic {
		Cast(obj: Object): ASPxClientTitleIndex
	}

	declare interface ASPxClientTreeViewStatic {
		Cast(obj: Object): ASPxClientTreeView
	}

	declare interface ASPxClientUploadControlStatic {
		Cast(obj: Object): ASPxClientUploadControl
	}

	declare interface ASPxClientUtilsStatic {
		agent: string,
		opera: boolean,
		opera9: boolean,
		safari: boolean,
		safari3: boolean,
		safariMacOS: boolean,
		chrome: boolean,
		ie: boolean,
		ie7: boolean,
		firefox: boolean,
		firefox3: boolean,
		mozilla: boolean,
		netscape: boolean,
		browserVersion: number,
		browserMajorVersion: number,
		macOSPlatform: boolean,
		windowsPlatform: boolean,
		webKitFamily: boolean,
		netscapeFamily: boolean,
		touchUI: boolean,
		webKitTouchUI: boolean,
		msTouchUI: boolean,
		iOSPlatform: boolean,
		androidPlatform: boolean,
		ArrayInsert(array: Object[], element: Object): void,
		ArrayRemove(array: Object[], element: Object): void,
		ArrayRemoveAt(array: Object[], index: number): void,
		ArrayClear(array: Object[]): void,
		ArrayIndexOf(array: Object[], element: Object): number,
		AttachEventToElement(element: Object, eventName: string, method: Object): void,
		DetachEventFromElement(element: Object, eventName: string, method: Object): void,
		GetEventSource(htmlEvent: Object): Object,
		GetEventX(htmlEvent: Object): number,
		GetEventY(htmlEvent: Object): number,
		GetKeyCode(htmlEvent: Object): number,
		PreventEvent(htmlEvent: Object): boolean,
		PreventEventAndBubble(htmlEvent: Object): boolean,
		PreventDragStart(htmlEvent: Object): boolean,
		ClearSelection(): void,
		IsExists(obj: Object): boolean,
		IsFunction(obj: Object): boolean,
		GetAbsoluteX(element: Object): number,
		GetAbsoluteY(element: Object): number,
		SetAbsoluteX(element: Object, x: number): void,
		SetAbsoluteY(element: Object, y: number): void,
		GetDocumentScrollTop(): number,
		GetDocumentScrollLeft(): number,
		GetDocumentClientWidth(): number,
		GetDocumentClientHeight(): number,
		GetIsParent(parentElement: Object, element: Object): boolean,
		GetParentById(element: Object, id: string): Object,
		GetParentByTagName(element: Object, tagName: string): Object,
		GetParentByClassName(element: Object, className: string): Object,
		GetChildById(element: Object, id: string): Object,
		GetChildByTagName(element: Object, tagName: string, index: number): Object,
		SetCookie(name: string, value: string): void,
		SetCookie(name: string, value: string, expirationDate: Date): void,
		GetCookie(name: string): string,
		DeleteCookie(name: string): void,
		GetShortcutCode(
		keyCode: number, isCtrlKey: boolean, isShiftKey: boolean, isAltKey: boolean
	): number,
		GetShortcutCodeByEvent(htmlEvent: Object): number,
		StringToShortcutCode(shortcutString: string): number,
		Trim(str: string): string,
		TrimStart(str: string): string,
		TrimEnd(str: string): string
	}

	declare interface ASPxClientChartDesignerStatic {
		Cast(obj: Object): ASPxClientChartDesigner
	}

	declare interface ASPxClientWebChartControlStatic {
		Cast(obj: Object): ASPxClientWebChartControl
	}

	declare interface ASPxClientDocumentViewerStatic {
		Cast(obj: Object): ASPxClientDocumentViewer
	}

	declare interface ASPxClientQueryBuilderStatic {
		Cast(obj: Object): ASPxClientQueryBuilder
	}

	declare interface ASPxClientReportDesignerStatic {
		Cast(obj: Object): ASPxClientReportDesigner
	}

	declare interface ASPxClientReportDocumentMapStatic {
		
	}

	declare interface ASPxClientReportParametersPanelStatic {
		
	}

	declare interface ASPxClientReportToolbarStatic {
		Cast(obj: Object): ASPxClientReportToolbar
	}

	declare interface ASPxClientReportViewerStatic {
		Cast(obj: Object): ASPxClientReportViewer
	}

	declare interface ASPxClientWebDocumentViewerStatic {
		Cast(obj: Object): ASPxClientWebDocumentViewer
	}

			
}