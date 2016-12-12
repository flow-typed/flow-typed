

declare module 'google-apps-script.charts' {
					
}

declare module 'Charts' {
		declare export interface AreaChartBuilder {
		build(): Chart,
		reverseCategories(): AreaChartBuilder,
		setBackgroundColor(cssValue: string): AreaChartBuilder,
		setColors(cssValues: String[]): AreaChartBuilder,
		setDataSourceUrl(url: string): AreaChartBuilder,
		setDataTable(tableBuilder: DataTableBuilder): AreaChartBuilder,
		setDataTable(table: DataTableSource): AreaChartBuilder,
		setDataViewDefinition(dataViewDefinition: DataViewDefinition): AreaChartBuilder,
		setDimensions(width: Integer, height: Integer): AreaChartBuilder,
		setLegendPosition(position: Position): AreaChartBuilder,
		setLegendTextStyle(textStyle: TextStyle): AreaChartBuilder,
		setOption(option: string, value: Object): AreaChartBuilder,
		setPointStyle(style: PointStyle): AreaChartBuilder,
		setRange(start: Number, end: Number): AreaChartBuilder,
		setStacked(): AreaChartBuilder,
		setTitle(chartTitle: string): AreaChartBuilder,
		setTitleTextStyle(textStyle: TextStyle): AreaChartBuilder,
		setXAxisTextStyle(textStyle: TextStyle): AreaChartBuilder,
		setXAxisTitle(title: string): AreaChartBuilder,
		setXAxisTitleTextStyle(textStyle: TextStyle): AreaChartBuilder,
		setYAxisTextStyle(textStyle: TextStyle): AreaChartBuilder,
		setYAxisTitle(title: string): AreaChartBuilder,
		setYAxisTitleTextStyle(textStyle: TextStyle): AreaChartBuilder,
		useLogScale(): AreaChartBuilder
	}

	declare export interface BarChartBuilder {
		build(): Chart,
		reverseCategories(): BarChartBuilder,
		reverseDirection(): BarChartBuilder,
		setBackgroundColor(cssValue: string): BarChartBuilder,
		setColors(cssValues: String[]): BarChartBuilder,
		setDataSourceUrl(url: string): BarChartBuilder,
		setDataTable(tableBuilder: DataTableBuilder): BarChartBuilder,
		setDataTable(table: DataTableSource): BarChartBuilder,
		setDataViewDefinition(dataViewDefinition: DataViewDefinition): BarChartBuilder,
		setDimensions(width: Integer, height: Integer): BarChartBuilder,
		setLegendPosition(position: Position): BarChartBuilder,
		setLegendTextStyle(textStyle: TextStyle): BarChartBuilder,
		setOption(option: string, value: Object): BarChartBuilder,
		setRange(start: Number, end: Number): BarChartBuilder,
		setStacked(): BarChartBuilder,
		setTitle(chartTitle: string): BarChartBuilder,
		setTitleTextStyle(textStyle: TextStyle): BarChartBuilder,
		setXAxisTextStyle(textStyle: TextStyle): BarChartBuilder,
		setXAxisTitle(title: string): BarChartBuilder,
		setXAxisTitleTextStyle(textStyle: TextStyle): BarChartBuilder,
		setYAxisTextStyle(textStyle: TextStyle): BarChartBuilder,
		setYAxisTitle(title: string): BarChartBuilder,
		setYAxisTitleTextStyle(textStyle: TextStyle): BarChartBuilder,
		useLogScale(): BarChartBuilder
	}

	declare export interface CategoryFilterBuilder {
		build(): Control,
		setAllowMultiple(allowMultiple: boolean): CategoryFilterBuilder,
		setAllowNone(allowNone: boolean): CategoryFilterBuilder,
		setAllowTyping(allowTyping: boolean): CategoryFilterBuilder,
		setCaption(caption: string): CategoryFilterBuilder,
		setDataTable(tableBuilder: DataTableBuilder): CategoryFilterBuilder,
		setDataTable(table: DataTableSource): CategoryFilterBuilder,
		setFilterColumnIndex(columnIndex: Integer): CategoryFilterBuilder,
		setFilterColumnLabel(columnLabel: string): CategoryFilterBuilder,
		setLabel(label: string): CategoryFilterBuilder,
		setLabelSeparator(labelSeparator: string): CategoryFilterBuilder,
		setLabelStacking(orientation: Orientation): CategoryFilterBuilder,
		setSelectedValuesLayout(layout: PickerValuesLayout): CategoryFilterBuilder,
		setSortValues(sortValues: boolean): CategoryFilterBuilder,
		setValues(values: String[]): CategoryFilterBuilder
	}

	declare export interface Chart {
		getAs(contentType: string): Base.Blob,
		getBlob(): Base.Blob,
		getId(): string,
		getOptions(): ChartOptions,
		getType(): string,
		setId(id: string): Chart
	}

	declare export interface ChartOptions {
		get(option: string): Object
	}

	declare export interface Charts {
		ChartType: ChartType,
		ColumnType: ColumnType,
		CurveStyle: CurveStyle,
		MatchType: MatchType,
		Orientation: Orientation,
		PickerValuesLayout: PickerValuesLayout,
		PointStyle: PointStyle,
		Position: Position,
		newAreaChart(): AreaChartBuilder,
		newBarChart(): BarChartBuilder,
		newCategoryFilter(): CategoryFilterBuilder,
		newColumnChart(): ColumnChartBuilder,
		newDashboardPanel(): DashboardPanelBuilder,
		newDataTable(): DataTableBuilder,
		newDataViewDefinition(): DataViewDefinitionBuilder,
		newLineChart(): LineChartBuilder,
		newNumberRangeFilter(): NumberRangeFilterBuilder,
		newPieChart(): PieChartBuilder,
		newScatterChart(): ScatterChartBuilder,
		newStringFilter(): StringFilterBuilder,
		newTableChart(): TableChartBuilder,
		newTextStyle(): TextStyleBuilder
	}

	declare export interface ColumnChartBuilder {
		build(): Chart,
		reverseCategories(): ColumnChartBuilder,
		setBackgroundColor(cssValue: string): ColumnChartBuilder,
		setColors(cssValues: String[]): ColumnChartBuilder,
		setDataSourceUrl(url: string): ColumnChartBuilder,
		setDataTable(tableBuilder: DataTableBuilder): ColumnChartBuilder,
		setDataTable(table: DataTableSource): ColumnChartBuilder,
		setDataViewDefinition(dataViewDefinition: DataViewDefinition): ColumnChartBuilder,
		setDimensions(width: Integer, height: Integer): ColumnChartBuilder,
		setLegendPosition(position: Position): ColumnChartBuilder,
		setLegendTextStyle(textStyle: TextStyle): ColumnChartBuilder,
		setOption(option: string, value: Object): ColumnChartBuilder,
		setRange(start: Number, end: Number): ColumnChartBuilder,
		setStacked(): ColumnChartBuilder,
		setTitle(chartTitle: string): ColumnChartBuilder,
		setTitleTextStyle(textStyle: TextStyle): ColumnChartBuilder,
		setXAxisTextStyle(textStyle: TextStyle): ColumnChartBuilder,
		setXAxisTitle(title: string): ColumnChartBuilder,
		setXAxisTitleTextStyle(textStyle: TextStyle): ColumnChartBuilder,
		setYAxisTextStyle(textStyle: TextStyle): ColumnChartBuilder,
		setYAxisTitle(title: string): ColumnChartBuilder,
		setYAxisTitleTextStyle(textStyle: TextStyle): ColumnChartBuilder,
		useLogScale(): ColumnChartBuilder
	}

	declare export interface Control {
		getId(): string,
		getType(): string,
		setId(id: string): Control
	}

	declare export interface DashboardPanel {
		add(widget: UI.Widget): DashboardPanel,
		getId(): string,
		getType(): string,
		setId(id: string): DashboardPanel
	}

	declare export interface DashboardPanelBuilder {
		bind(
		control: Control, chart: Chart, controls: Control[], charts: Chart[]
	): DashboardPanelBuilder,
		bind(
		control: Control, chart: Chart, controls: Control[], charts: Chart[]
	): DashboardPanelBuilder,
		build(): DashboardPanel,
		setDataTable(tableBuilder: DataTableBuilder): DashboardPanelBuilder,
		setDataTable(source: DataTableSource): DashboardPanelBuilder
	}

	declare export interface DataTable {
		
	}

	declare export interface DataTableBuilder {
		addColumn(type: ColumnType, label: string): DataTableBuilder,
		addRow(values: Object[]): DataTableBuilder,
		build(): DataTable,
		setValue(row: Integer, column: Integer, value: Object): DataTableBuilder
	}

	declare export interface DataTableSource {
		getDataTable(): DataTable
	}

	declare export interface DataViewDefinition {
		
	}

	declare export interface DataViewDefinitionBuilder {
		build(): DataViewDefinition,
		setColumns(columns: Object[]): DataViewDefinitionBuilder
	}

	declare export interface LineChartBuilder {
		build(): Chart,
		reverseCategories(): LineChartBuilder,
		setBackgroundColor(cssValue: string): LineChartBuilder,
		setColors(cssValues: String[]): LineChartBuilder,
		setCurveStyle(style: CurveStyle): LineChartBuilder,
		setDataSourceUrl(url: string): LineChartBuilder,
		setDataTable(tableBuilder: DataTableBuilder): LineChartBuilder,
		setDataTable(table: DataTableSource): LineChartBuilder,
		setDataViewDefinition(dataViewDefinition: DataViewDefinition): LineChartBuilder,
		setDimensions(width: Integer, height: Integer): LineChartBuilder,
		setLegendPosition(position: Position): LineChartBuilder,
		setLegendTextStyle(textStyle: TextStyle): LineChartBuilder,
		setOption(option: string, value: Object): LineChartBuilder,
		setPointStyle(style: PointStyle): LineChartBuilder,
		setRange(start: Number, end: Number): LineChartBuilder,
		setTitle(chartTitle: string): LineChartBuilder,
		setTitleTextStyle(textStyle: TextStyle): LineChartBuilder,
		setXAxisTextStyle(textStyle: TextStyle): LineChartBuilder,
		setXAxisTitle(title: string): LineChartBuilder,
		setXAxisTitleTextStyle(textStyle: TextStyle): LineChartBuilder,
		setYAxisTextStyle(textStyle: TextStyle): LineChartBuilder,
		setYAxisTitle(title: string): LineChartBuilder,
		setYAxisTitleTextStyle(textStyle: TextStyle): LineChartBuilder,
		useLogScale(): LineChartBuilder
	}

	declare export interface NumberRangeFilterBuilder {
		build(): Control,
		setDataTable(tableBuilder: DataTableBuilder): NumberRangeFilterBuilder,
		setDataTable(table: DataTableSource): NumberRangeFilterBuilder,
		setFilterColumnIndex(columnIndex: Integer): NumberRangeFilterBuilder,
		setFilterColumnLabel(columnLabel: string): NumberRangeFilterBuilder,
		setLabel(label: string): NumberRangeFilterBuilder,
		setLabelSeparator(labelSeparator: string): NumberRangeFilterBuilder,
		setLabelStacking(orientation: Orientation): NumberRangeFilterBuilder,
		setMaxValue(maxValue: Integer): NumberRangeFilterBuilder,
		setMinValue(minValue: Integer): NumberRangeFilterBuilder,
		setOrientation(orientation: Orientation): NumberRangeFilterBuilder,
		setShowRangeValues(showRangeValues: boolean): NumberRangeFilterBuilder,
		setTicks(ticks: Integer): NumberRangeFilterBuilder
	}

	declare export interface PieChartBuilder {
		build(): Chart,
		reverseCategories(): PieChartBuilder,
		set3D(): PieChartBuilder,
		setBackgroundColor(cssValue: string): PieChartBuilder,
		setColors(cssValues: String[]): PieChartBuilder,
		setDataSourceUrl(url: string): PieChartBuilder,
		setDataTable(tableBuilder: DataTableBuilder): PieChartBuilder,
		setDataTable(table: DataTableSource): PieChartBuilder,
		setDataViewDefinition(dataViewDefinition: DataViewDefinition): PieChartBuilder,
		setDimensions(width: Integer, height: Integer): PieChartBuilder,
		setLegendPosition(position: Position): PieChartBuilder,
		setLegendTextStyle(textStyle: TextStyle): PieChartBuilder,
		setOption(option: string, value: Object): PieChartBuilder,
		setTitle(chartTitle: string): PieChartBuilder,
		setTitleTextStyle(textStyle: TextStyle): PieChartBuilder
	}

	declare export interface ScatterChartBuilder {
		build(): Chart,
		setBackgroundColor(cssValue: string): ScatterChartBuilder,
		setColors(cssValues: String[]): ScatterChartBuilder,
		setDataSourceUrl(url: string): ScatterChartBuilder,
		setDataTable(tableBuilder: DataTableBuilder): ScatterChartBuilder,
		setDataTable(table: DataTableSource): ScatterChartBuilder,
		setDataViewDefinition(dataViewDefinition: DataViewDefinition): ScatterChartBuilder,
		setDimensions(width: Integer, height: Integer): ScatterChartBuilder,
		setLegendPosition(position: Position): ScatterChartBuilder,
		setLegendTextStyle(textStyle: TextStyle): ScatterChartBuilder,
		setOption(option: string, value: Object): ScatterChartBuilder,
		setPointStyle(style: PointStyle): ScatterChartBuilder,
		setTitle(chartTitle: string): ScatterChartBuilder,
		setTitleTextStyle(textStyle: TextStyle): ScatterChartBuilder,
		setXAxisLogScale(): ScatterChartBuilder,
		setXAxisRange(start: Number, end: Number): ScatterChartBuilder,
		setXAxisTextStyle(textStyle: TextStyle): ScatterChartBuilder,
		setXAxisTitle(title: string): ScatterChartBuilder,
		setXAxisTitleTextStyle(textStyle: TextStyle): ScatterChartBuilder,
		setYAxisLogScale(): ScatterChartBuilder,
		setYAxisRange(start: Number, end: Number): ScatterChartBuilder,
		setYAxisTextStyle(textStyle: TextStyle): ScatterChartBuilder,
		setYAxisTitle(title: string): ScatterChartBuilder,
		setYAxisTitleTextStyle(textStyle: TextStyle): ScatterChartBuilder
	}

	declare export interface StringFilterBuilder {
		build(): Control,
		setCaseSensitive(caseSensitive: boolean): StringFilterBuilder,
		setDataTable(tableBuilder: DataTableBuilder): StringFilterBuilder,
		setDataTable(table: DataTableSource): StringFilterBuilder,
		setFilterColumnIndex(columnIndex: Integer): StringFilterBuilder,
		setFilterColumnLabel(columnLabel: string): StringFilterBuilder,
		setLabel(label: string): StringFilterBuilder,
		setLabelSeparator(labelSeparator: string): StringFilterBuilder,
		setLabelStacking(orientation: Orientation): StringFilterBuilder,
		setMatchType(matchType: MatchType): StringFilterBuilder,
		setRealtimeTrigger(realtimeTrigger: boolean): StringFilterBuilder
	}

	declare export interface TableChartBuilder {
		build(): Chart,
		enablePaging(enablePaging: boolean): TableChartBuilder,
		enablePaging(pageSize: Integer): TableChartBuilder,
		enablePaging(pageSize: Integer, startPage: Integer): TableChartBuilder,
		enableRtlTable(rtlEnabled: boolean): TableChartBuilder,
		enableSorting(enableSorting: boolean): TableChartBuilder,
		setDataSourceUrl(url: string): TableChartBuilder,
		setDataTable(tableBuilder: DataTableBuilder): TableChartBuilder,
		setDataTable(table: DataTableSource): TableChartBuilder,
		setDataViewDefinition(dataViewDefinition: DataViewDefinition): TableChartBuilder,
		setDimensions(width: Integer, height: Integer): TableChartBuilder,
		setFirstRowNumber(number: Integer): TableChartBuilder,
		setInitialSortingAscending(column: Integer): TableChartBuilder,
		setInitialSortingDescending(column: Integer): TableChartBuilder,
		setOption(option: string, value: Object): TableChartBuilder,
		showRowNumberColumn(showRowNumber: boolean): TableChartBuilder,
		useAlternatingRowStyle(alternate: boolean): TableChartBuilder
	}

	declare export interface TextStyle {
		getColor(): string,
		getFontName(): string,
		getFontSize(): Number
	}

	declare export interface TextStyleBuilder {
		build(): TextStyle,
		setColor(cssValue: string): TextStyleBuilder,
		setFontName(fontName: string): TextStyleBuilder,
		setFontSize(fontSize: Number): TextStyleBuilder
	}

			
}