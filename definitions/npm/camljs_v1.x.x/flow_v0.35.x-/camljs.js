

declare module 'camljs' {
				declare class CamlBuilder  {
		constructor(): this;
		Where(): CamlBuilder.IFieldExpression;
		View(viewFields?: string[]): CamlBuilder.IView;
		ViewFields(viewFields: string[]): CamlBuilder.IFinalizableToString;
		Expression(): CamlBuilder.IFieldExpression;
		FromXml(xml: string): CamlBuilder.IRawQuery
	}

	
}

declare module 'npm$namespace$CamlBuilder' {
		declare interface IView {
		Query(): IQuery,
		RowLimit(limit: number, paged?: boolean): IView,
		Scope(scope: ViewScope): IView
	}

	declare interface IJoinable {
		InnerJoin(lookupFieldInternalName: string, alias: string): IJoin,
		LeftJoin(lookupFieldInternalName: string, alias: string): IJoin
	}

	declare interface IJoin {
		Select(remoteFieldInternalName: string, remoteFieldAlias: string): IProjectableView
	}

	declare interface IProjectableView {
		Select(remoteFieldInternalName: string, remoteFieldAlias: string): IProjectableView
	}

	declare interface IQuery {
		Where(): IFieldExpression
	}

	declare interface IFinalizableToString {
		ToString(): string
	}

	declare interface IFinalizable {
		ToCamlQuery(): any
	}

	declare interface ISortable {
		OrderBy(
		fieldInternalName: string, override?: boolean, useIndexForOrderBy?: boolean
	): ISortedQuery,
		OrderByDesc(
		fieldInternalName: string, override?: boolean, useIndexForOrderBy?: boolean
	): ISortedQuery
	}

	declare interface IGroupable {
		GroupBy(fieldInternalName: any): IGroupedQuery
	}

	declare interface IExpression {
		And(): IFieldExpression,
		Or(): IFieldExpression
	}

	declare interface IGroupedQuery {
		
	}

	declare interface ISortedQuery {
		ThenBy(fieldInternalName: string): any,
		ThenByDesc(fieldInternalName: string): any
	}

	declare interface IFieldExpression {
		All(...conditions: IExpression[]): IExpression,
		Any(...conditions: IExpression[]): IExpression,
		All(conditions: IExpression[]): IExpression,
		Any(conditions: IExpression[]): IExpression,
		TextField(internalName: string): ITextFieldExpression,
		BooleanField(internalName: string): IBooleanFieldExpression,
		UrlField(internalName: string): ITextFieldExpression,
		NumberField(internalName: string): INumberFieldExpression,
		CounterField(internalName: string): INumberFieldExpression,
		IntegerField(internalName: string): INumberFieldExpression,
		UserField(internalName: string): IUserFieldExpression,
		LookupField(internalName: string): ILookupFieldExpression,
		LookupMultiField(internalName: string): ILookupMultiFieldExpression,
		UserMultiField(internalName: string): IUserMultiFieldExpression,
		DateField(internalName: string): IDateTimeFieldExpression,
		DateTimeField(internalName: string): IDateTimeFieldExpression,
		ModStatField(internalName: string): IModStatFieldExpression,
		DateRangesOverlap(
		overlapType: DateRangesOverlapType, calendarDate: string, eventDateField?: string, endDateField?: string, recurrenceIDField?: string
	): IExpression
	}

	declare interface IBooleanFieldExpression {
		IsTrue(): IExpression,
		IsFalse(): IExpression,
		EqualTo(value: boolean): IExpression,
		NotEqualTo(value: boolean): IExpression,
		IsNull(): IExpression,
		IsNotNull(): IExpression
	}

	declare interface INumberFieldExpression {
		EqualTo(value: number): IExpression,
		NotEqualTo(value: number): IExpression,
		GreaterThan(value: number): IExpression,
		LessThan(value: number): IExpression,
		GreaterThanOrEqualTo(value: number): IExpression,
		LessThanOrEqualTo(value: number): IExpression,
		IsNull(): IExpression,
		IsNotNull(): IExpression,
		In(arrayOfValues: number[]): IExpression
	}

	declare interface IDateTimeFieldExpression {
		IsNull(): IExpression,
		IsNotNull(): IExpression,
		EqualTo(value: Date): IExpression,
		NotEqualTo(value: Date): IExpression,
		GreaterThan(value: Date): IExpression,
		LessThan(value: Date): IExpression,
		GreaterThanOrEqualTo(value: Date): IExpression,
		LessThanOrEqualTo(value: Date): IExpression,
		In(arrayOfValues: Date[]): IExpression,
		EqualTo(value: string): IExpression,
		NotEqualTo(value: string): IExpression,
		GreaterThan(value: string): IExpression,
		LessThan(value: string): IExpression,
		GreaterThanOrEqualTo(value: string): IExpression,
		LessThanOrEqualTo(value: string): IExpression,
		In(arrayOfValues: string[]): IExpression
	}

	declare interface ITextFieldExpression {
		EqualTo(value: string): IExpression,
		NotEqualTo(value: string): IExpression,
		Contains(value: string): IExpression,
		BeginsWith(value: string): IExpression,
		IsNull(): IExpression,
		IsNotNull(): IExpression,
		In(arrayOfValues: string[]): IExpression
	}

	declare interface IUserFieldExpression {
		Membership: IMembership,
		EqualToCurrentUser(): IExpression,
		IsInCurrentUserGroups(): IExpression,
		IsInSPGroup(groupId: number): IExpression,
		IsInSPWebGroups(): IExpression,
		IsInSPWebAllUsers(): IExpression,
		IsInSPWebUsers(): IExpression,
		Id(): INumberFieldExpression,
		ValueAsText(): ITextFieldExpression
	}

	declare interface IMembership {
		CurrentUserGroups(): IExpression,
		SPGroup(groupId: number): IExpression,
		SPWeb: IMembershipSPWeb
	}

	declare interface IMembershipSPWeb {
		AllUsers(): IExpression,
		Users(): IExpression,
		Groups(): IExpression
	}

	declare interface ILookupFieldExpression {
		Id(): INumberFieldExpression,
		ValueAsText(): ITextFieldExpression,
		ValueAsNumber(): INumberFieldExpression,
		ValueAsDate(): IDateTimeFieldExpression,
		ValueAsDateTime(): IDateTimeFieldExpression,
		ValueAsBoolean(): IBooleanFieldExpression
	}

	declare interface ILookupMultiFieldExpression {
		IncludesSuchItemThat(): ILookupFieldExpression,
		IsNull(): IExpression,
		IsNotNull(): IExpression,
		Includes(value: any): IExpression,
		NotIncludes(value: any): IExpression,
		EqualTo(value: any): IExpression,
		NotEqualTo(value: any): IExpression
	}

	declare interface IUserMultiFieldExpression {
		IncludesSuchItemThat(): IUserFieldExpression,
		IsNull(): IExpression,
		IsNotNull(): IExpression,
		Includes(value: any): IExpression,
		NotIncludes(value: any): IExpression,
		EqualTo(value: any): IExpression,
		NotEqualTo(value: any): IExpression
	}

	declare interface IModStatFieldExpression {
		ModStatId(): INumberFieldExpression,
		IsApproved(): IExpression,
		IsRejected(): IExpression,
		IsPending(): IExpression,
		ValueAsText(): ITextFieldExpression
	}

	declare interface IRawQuery {
		ReplaceWhere(): IFieldExpression,
		ModifyWhere(): IRawQueryModify
	}

	declare interface IRawQueryModify {
		AppendOr(): IFieldExpression,
		AppendAnd(): IFieldExpression
	}

		declare class Internal  {
		createView(viewFields?: string[]): IView;
		createViewFields(viewFields: string[]): IFinalizableToString;
		createWhere(): IFieldExpression;
		createExpression(): IFieldExpression;
		createRawQuery(xml: string): IRawQuery
	}

	declare class CamlValues  {
		UserID: string;
		Today: string;
		TodayWithOffset(offsetDays: number): string;
		Now: string;
		ListProperty: {
		Created: string,
		DefaultViewUrl: string,
		Description: string,
		EnableSyndication: string,
		ItemCount: string,
		LinkTitle: string,
		MajorVersionLimit: string,
		MajorWithMinorVersionsLimit: string,
		RelativeFolderPath: string,
		Title: string,
		ViewSelector: string
	};
		ProjectProperty: {
		BlogCategoryTitle: string,
		BlogPostTitle: string,
		Description: string,
		RecycleBinEnabled: string,
		SiteOwnerName: string,
		SiteUrl: string,
		Title: string,
		Url: string
	}
	}

	
}