

declare module 'microsoft-sdk-soap' {
					
}

declare module 'npm$namespace$Sdk' {
		declare interface IEntityView {
		attributes: AttributeCollection,
		entityState: EntityState,
		id: string,
		logicalName: string,
		relatedEntities: RelatedEntityCollection
	}

	declare interface IEntityCollectionView {
		entityName: string,
		entities: Array<IEntityView>,
		minActiveRowVersion: string,
		moreRecords: boolean,
		pagingCookie: string,
		totalRecordCount: number,
		totalRecordCountLimitExceeded: boolean
	}

	declare interface IEntityReferenceView {
		Id: string,
		Type: string,
		Name: string
	}

	declare interface IEntityReferenceCollectionView {
		
	}

		declare class Q  {
		associate(
		entityName: string, entityId: string, relationship: string, relatedEntities: Sdk.Collection<Sdk.EntityReference>
	): Q.Promise<void>;
		create(entity: Sdk.Entity): Q.Promise<string>;
		del(entityName: string, id: string): Q.Promise<void>;
		disassociate(
		entityName: string, entityId: string, relationship: string, relatedEntities: Sdk.Collection<Sdk.EntityReference>
	): Q.Promise<void>;
		execute(request: Sdk.OrganizationRequest): Q.Promise<OrganizationResponse>;
		retrieve(entityName: string, id: string, columnSet: Sdk.ColumnSet): Q.Promise<Entity>;
		retrieveMultiple(query: Sdk.Query.QueryByAttribute): Q.Promise<Sdk.EntityCollection>;
		retrieveMultiple(query: Sdk.Query.QueryExpression): Q.Promise<Sdk.EntityCollection>;
		retrieveMultiple(query: Sdk.Query.FetchExpression): Q.Promise<Sdk.EntityCollection>;
		update(entity: Entity): Q.Promise<boolean>
	}

	declare class ColumnSet  {
		constructor(...columns: string[]): this;
		constructor(columns: string[]): this;
		constructor(allColumns: boolean): this;
		getColumns(): Sdk.Collection<string>;
		addColumn(column: string): void;
		addColumns(columns: Array<string>): void;
		setAllColumns(allColumns: boolean): void;
		getAllColumns(): boolean;
		getCount(): number;
		removeColumn(columnName: string, errorIfNotFound?: boolean): void;
		toXml(): string;
		toValueXml(): string
	}

	declare class ValueType  {
		
	}

	declare class Collection<T>  {
		constructor(type: T, items?: Array<T>): this;
		getType(): T;
		add(item: T): void;
		addRange(items: any[]): void;
		clear(): void;
		contains(item: T): boolean;
		contains(predicate: (item: T) => boolean): boolean;
		select(predicate: (item: T) => boolean): Collection<T>;
		forEach(fn: (item: T, index: number) => any): void;
		getByIndex(index: number): T;
		remove(item: T): void;
		toArray(): Array<T>;
		getCount(): number
	}

	declare class EntityCollection  {
		constructor(entities: Sdk.Collection<Sdk.Entity>): this;
		addEntity(entity: Sdk.Entity): void;
		getEntities(): Sdk.Collection<Sdk.Entity>;
		getEntity(index: number): Sdk.Entity;
		getEntity(id: Sdk.Guid): Sdk.Entity;
		setEntity(index: number, value: Sdk.Entity): void;
		setEntity(id: Sdk.Guid, value: Sdk.Entity): void;
		getEntityName(): string;
		setEntityName(name: string): void;
		getMinActiveRowVersion(): string;
		setMinActiveRowVersion(minActiveRowVersion: string): void;
		getMoreRecords(): boolean;
		setMoreRecords(moreRecords: boolean): void;
		getPagingCookie(): string;
		setPagingCookie(pagingCookie: string): void;
		getTotalRecordCount(): number;
		setTotalRecordCount(totalRecordCount: number): void;
		getTotalRecordCountLimitExceeded(): boolean;
		setTotalRecordCountLimitExceeded(totalRecordCountLimitExceeded: boolean): void;
		toValueXml(): string;
		view(): IEntityCollectionView
	}

	declare class EntityReferenceCollection  {
		constructor(entityReferences?: Sdk.Collection<EntityReference>): this;
		getEntityReferences(): Sdk.Collection<EntityReference>;
		setEntityReferences(entityReferences: Sdk.Collection<EntityReference>): void;
		remove(entityReference: Sdk.EntityReference): void;
		view(): IEntityReferenceCollectionView;
		toValueXml(): string
	}

	declare class RelatedEntityCollection extends EntityCollection {
		
	}

	declare class AttributeCollection extends Collection<AttributeBase> {
		constructor(): this;
		add(attribute: AttributeBase, isChanged?: boolean): void;
		getAttributes(): Collection<AttributeBase>;
		forEach(fn: (attribute: AttributeBase, index: number) => any): void;
		get(): Sdk.Collection<AttributeBase>;
		get(attribuetName: string): AttributeBase;
		get(index: number): AttributeBase;
		getAttributeByIndex(index: number): AttributeBase;
		getAttributeByName(name: string): AttributeBase;
		getNames(): Array<string>;
		toXml(action: string): string
	}

	declare class FormattedValueCollection  {
		
	}

	declare class RelatedEntitiesCollection  {
		
	}

	declare class AttributeBase  {
		getIsChanged(): boolean;
		getName(): string;
		getType(): Sdk.ValueType;
		getValue(): any;
		isValueSet(): boolean;
		setIsChanged(isChanged: boolean): void;
		setName(name: string): void;
		setType(type: Sdk.ValueType): void;
		setValue(value: any): void;
		toXml(action: string): string
	}

	declare class Boolean extends AttributeBase {
		constructor(name: string, value?: boolean): this;
		getValue(): boolean;
		setValue(value: boolean): void
	}

	declare class DateTime extends AttributeBase {
		constructor(name: string, value?: Date): this;
		getValue(): Date;
		setValue(value: Date): void
	}

	declare class Decimal extends AttributeBase {
		constructor(name: string, value?: number): this;
		getValue(): number;
		setValue(value: number): void
	}

	declare class Double  {
		constructor(name: string, value?: number): this;
		getValue(): number;
		setValue(value: number): void
	}

	declare class Guid extends AttributeBase {
		constructor(name: string, value?: string): this;
		getValue(): string;
		setValue(value: string): void
	}

	declare class Int extends AttributeBase {
		constructor(name: string, value?: number): this;
		getValue(): number;
		setValue(value: number): void
	}

	declare class Long extends AttributeBase {
		constructor(name: string, value?: number): this;
		getValue(): number;
		setValue(value: number): void
	}

	declare class Lookup extends AttributeBase {
		constructor(name: string, value?: EntityReference): this;
		getValue(): EntityReference;
		setValue(value: EntityReference): void
	}

	declare class Money extends AttributeBase {
		constructor(name: string, value?: number): this;
		getValue(): number;
		setValue(value: number): void
	}

	declare class OptionSet extends AttributeBase {
		constructor(name: string, value?: number): this;
		getValue(): number;
		setValue(value: number): void
	}

	declare class PartyList extends AttributeBase {
		constructor(name: string, value?: EntityCollection): this;
		getValue(): EntityCollection;
		setValue(value: EntityCollection): void
	}

	declare class String extends AttributeBase {
		constructor(name: string, value?: string): this;
		getValue(): string;
		setValue(value: string): void
	}

	declare class EntityState  {
		
	}

	declare class Entity  {
		constructor(type: string): this;
		getAttributes(): Sdk.AttributeCollection;
		getAttributes(attributeName: string): Sdk.AttributeBase;
		getAttributes(index: number): Sdk.AttributeBase;
		containsAttribute(predicate: (attribute: Sdk.AttributeBase) => boolean): boolean;
		containsAttribute(name: string): boolean;
		setAttributes(attributes: Sdk.AttributeCollection): void;
		getEntityState(): Sdk.EntityState;
		setEntityState(state: Sdk.EntityState): void;
		getFormattedValues(): Sdk.FormattedValueCollection;
		setFormattedValues(values: Sdk.FormattedValueCollection): void;
		getId(): string;
		setId(id: string, override?: boolean): void;
		getType(): string;
		setType(type: string): void;
		getRelatedEntities(): Sdk.RelatedEntitiesCollection;
		setRelatedEntities(relatedEntities: Sdk.RelatedEntitiesCollection): void;
		addAttribute(attribute: Sdk.AttributeBase, isChanged?: boolean): void;
		addRelatedEntity(relationshipSchemaName: string, entity: Sdk.Entity): void;
		getIsChanged(): boolean;
		setIsChanged(isChanged: boolean): void;
		getValue(logicalName: string): any;
		initializeSubClass(metadata: Sdk.Mdq.IEntityMetadata): void;
		setValue(logicalName: string, value: Object): void;
		toEntityReference(): Sdk.EntityReference;
		toString(): string;
		toValueXml(action: string): string;
		toXml(action: string): string;
		view(): IEntityView
	}

	declare class EntityReference  {
		constructor(logicalName: string, id: string, name?: string): this;
		getType(): string;
		getId(): string;
		getName(): string;
		setType(type: string): void;
		setId(id: string): void;
		setName(name: string): void;
		toXml(): string;
		toValueXml(): string;
		view(): IEntityReferenceView
	}

	declare class OrganizationRequest  {
		setRequestXml(xml: string): void;
		getRequestXml(): string;
		setResponseType(type: OrganizationResponse): void;
		getResponseType(): OrganizationResponse
	}

	declare class OrganizationResponse  {
		
	}

	declare class FetchXmlToQueryExpressionRequest extends Sdk$OrganizationRequest {
		constructor(fetchXml: string): this;
		setFetchXml(value: string): void
	}

	declare class FetchXmlToQueryExpressionResponse extends Sdk$OrganizationResponse {
		constructor(responseXml: string): this;
		getQuery(): Query.QueryExpression
	}

	declare class QueryExpressionToFetchXmlRequest extends Sdk$OrganizationRequest {
		constructor(query: Sdk.Query.QueryBase): this;
		setQuery(query: Sdk.Query.QueryBase): void
	}

	declare class QueryExpressionToFetchXmlResponse extends Sdk$OrganizationResponse {
		constructor(responseXml: string): this;
		getFetchXml(): string
	}

	declare class RetrieveMetadataChangesRequest extends Sdk$OrganizationRequest {
		constructor(query: Sdk.Mdq.EntityQueryExpression, clientVersionStamp?: string, deletedMetadataFilters?: Sdk.Mdq.DeletedMetadataFilters): this;
		getEntityMetadata(): Sdk.Mdq.IEntityMetadata[];
		getServerVersionStamp(): string;
		getDeletedMetadata(): Object
	}

	declare class RetrieveMetadataChangesResponse  {
		constructor(responseXml: string): this;
		getEntityMetadata(): Array<Mdq.IEntityMetadata>;
		getServerVersionStamp(): string;
		getDeletedMetadata(): any
	}

	declare class SetStateRequest extends Sdk$OrganizationRequest {
		constructor(entityMoniker: EntityReference, state: number, status: number): this;
		setEntityMoniker(value: EntityReference): void;
		setState(value: number): void;
		setStatus(value: number): void
	}

	declare class SetStateResponse  {
		constructor(responseXml: string): this
	}

	
}

declare module 'Query' {
				declare class QueryBase  {
		constructor(type: string): this;
		getColumnSet(): Sdk.ColumnSet;
		setColumnSet(columns: Sdk.ColumnSet): void;
		setColumnSet(columns: Array<string>): void;
		setColumnSet(...columns: string[]): void;
		getQueryType(): string;
		getEntityName(): string;
		setEntityName(name: string): void;
		getPageInfo(): Sdk.Query.PagingInfo;
		setPageInfo(pageInfo: Sdk.Query.PagingInfo): void;
		addColumn(columnName: string): void;
		removeColumn(columnName: string, errorIfNotFound?: boolean): void;
		getOrders(): Sdk.Collection<Sdk.Query.OrderExpression>;
		getTopCount(): number;
		setTopCount(count: number): void;
		toXml(): string;
		toValueXml(): string
	}

	declare class QueryByAttribute extends QueryBase {
		constructor(entityName: string): this;
		getAttributeValues(): Sdk.Collection<Sdk.AttributeBase>;
		setOrders(orders: Sdk.Collection<Sdk.Query.OrderExpression>): void;
		addAttributeValue(attributeValue: Sdk.AttributeBase): void;
		addOrder(order: Sdk.Query.OrderExpression): void;
		removeAttributeValue(attributeValue: Sdk.AttributeBase, errorIfNotFound?: boolean): void
	}

	declare class QueryExpression extends QueryBase {
		constructor(entityName: string): this;
		getCriteria(): FilterExpression;
		setCriteria(criteria: FilterExpression): void;
		getDistinct(): boolean;
		setDistinct(isDistinct: boolean): void;
		getLinkEntities(): Sdk.Collection<LinkEntity>;
		getNoLock(): boolean;
		setNoLock(isNoLock: boolean): void;
		addCondition(
		entityName: string, attributeName: string, conditionOperator: Sdk.Query.ConditionOperator, values: Sdk.Query.ValueBase
	): void;
		addLink(firstParam: Sdk.Query.LinkEntity): void;
		addLink(
		firstParam: string, linkFromAttributeName: string, linkToAttributeName: string, joinOperator: Sdk.Query.JoinOperator
	): void;
		addOrder(attributeName: string, orderType: Sdk.Query.OrderType): void
	}

	declare class OrderExpression  {
		
	}

	declare class ConditionExpression  {
		constructor(entityName: string, attributeName: string, operator: ConditionOperator, values?: ValueBase): this;
		getEntityName(): string;
		setEntityName(name: string): void;
		getAttributeName(): string;
		setAttributeName(name: string): void;
		getOperator(): ConditionOperator;
		setOperator(operator: ConditionOperator): void;
		getValues(): ValueBase;
		setValues(values: ValueBase): void
	}

	declare class FilterExpression  {
		constructor(logicalOperator: LogicalOperator): this;
		addCondition(firstParam: ConditionExpression): void;
		addCondition(
		entityName: string, attributeName: string, conditionOperator: ConditionOperator, values?: ValueBase
	): void;
		addFilter(filterExpression: FilterExpression): void;
		addFilter(logicalOperator: LogicalOperator): void;
		getConditions(): Sdk.Collection<ConditionExpression>;
		getFilterOperator(): LogicalOperator;
		getFilters(): Sdk.Collection<FilterExpression>;
		getIsQuickFindFilter(): boolean;
		setFilterOperator(filterOperator: LogicalOperator): void;
		setIsQuickFindFilter(isQuickFind: boolean): void
	}

	declare class FetchExpression  {
		constructor(fetchXml: string): this;
		getFetchXml(): string;
		setFetchXml(fetchXml: string): void
	}

	declare class LinkEntity  {
		constructor(linkFromEntityName: string, linkToEntityName: string, linkFromAttributeName: string, linkToAttributeName: string, joinOperator: Sdk.Query.JoinOperator, entityAlias: string): this;
		addLink(linkEntity: Sdk.Query.LinkEntity): void;
		getColumns(): Sdk.ColumnSet;
		setColumns(columns: Sdk.ColumnSet): void;
		setColumns(columns: string[]): void;
		setColumns(...columns: string[]): void;
		getEntityAlias(): string;
		setEntityAlias(alias: string): void;
		getJoinOperator(): Sdk.Query.JoinOperator;
		setJoinOperator(operator: Sdk.Query.JoinOperator): void;
		getLinkCriteria(): Sdk.Query.FilterExpression;
		setLinkCriteria(criteria: Sdk.Query.FilterExpression): void;
		getLinkEntities(): Sdk.Collection<Sdk.Query.LinkEntity>;
		getLinkFromAttributeName(): string;
		setLinkFromAttributeName(name: string): void;
		getLinkFromEntityName(): string;
		setLinkFromEntityName(name: string): void;
		getLinkToAttributeName(): string;
		setLinkToAttributeName(name: string): void;
		getLinkToEntityName(): string;
		setLinkToEntityName(name: string): void;
		toXml(): string;
		toValueXml(): string
	}

	declare class PagingInfo  {
		getCount(): number;
		setCount(count: number): void;
		getPageNumber(): number;
		setPageNumber(pages: number): void;
		getPagingCookie(): string;
		setPagingCookie(cookie: string): void;
		getReturnTotalRecordCount(): boolean;
		setReturnTotalRecordCount(returnTotalRecordsCount: boolean): void;
		toValueXml(): string
	}

	declare export class ValueBase  {
		
	}

	declare class Booleans extends ValueBase {
		constructor(args: boolean[]): this;
		getType(): string;
		getValues(): Sdk.Collection<boolean>;
		setValues(setValueArgs: boolean[]): void
	}

	declare class Dates extends ValueBase {
		constructor(args: Date[]): this;
		getType(): string;
		getValues(): Sdk.Collection<Date>;
		setValues(setValueArgs: Date[]): void
	}

	declare class Decimals extends ValueBase {
		constructor(args: number[]): this;
		getType(): string;
		getValues(): Sdk.Collection<number>;
		setValues(setValueArgs: number[]): void
	}

	declare class Doubles extends ValueBase {
		constructor(args: number[]): this;
		getType(): string;
		getValues(): Sdk.Collection<number>;
		setValues(setValueArgs: number[]): void
	}

	declare class Ints extends ValueBase {
		constructor(args: number[]): this;
		getType(): string;
		getValues(): Sdk.Collection<number>;
		setValues(setValueArgs: number[]): void
	}

	declare class Longs extends ValueBase {
		constructor(args: number[]): this;
		getType(): string;
		getValues(): Sdk.Collection<number>;
		setValues(setValueArgs: number[]): void
	}

	declare class EntityReferences extends ValueBase {
		constructor(args: Sdk.EntityReference[]): this;
		getType(): string;
		getValues(): Sdk.Collection<number>;
		setValues(setValueArgs: Sdk.EntityReference[]): void
	}

	declare class Guids extends ValueBase {
		constructor(args: string[]): this;
		getType(): string;
		getValues(): Sdk.Collection<string>;
		setValues(setValueArgs: string[]): void
	}

	declare class Money extends ValueBase {
		constructor(args: number[]): this;
		getType(): string;
		getValues(): Sdk.Collection<number>;
		setValues(setValueArgs: number[]): void
	}

	declare class OptionSets extends ValueBase {
		constructor(args: number[]): this;
		getType(): string;
		getValues(): Sdk.Collection<number>;
		setValues(setValueArgs: number[]): void
	}

	declare class Strings extends ValueBase {
		constructor(args: string[]): this;
		getType(): string;
		getValues(): Sdk.Collection<string>;
		setValues(setValueArgs: string[]): void
	}

	
}

declare module 'Util' {
			declare function isGuid(value: string): boolean

	declare function isGuidOrNull(value: string): boolean

	declare function getEmptyGuid(): string

	declare function format(string: string, args: string[]): string

	declare function getError(resp: any): string

	declare function getClientUrl(): string

	declare function setClientUrl(url: string): void

	declare function getXMLHttpRequest(action: string, async: boolean): any

	declare function createEntityFromNode(node: string): void

		
}

declare module 'Mdq' {
	declare export type CascadeType = "Active" | "Cascade" | "NoCascade" | "UserOwned";

	declare export type AssociatedMenuBehavior = "DoNotDisplay" | "UseCollectionName" | "UseLabel";

	declare export type AssociatedMenuGroup = "Details" | "Marketing" | "Sales" | "Service";

	declare export type RelationshipType = "Default" | "ManyToManyRelationship" | "OneToManyRelationship";

	declare export type SecurityType = "Append" | "Inheritance" | "None" | "ParentChild" | "Pointer";

	declare export interface IEntityMetadata {
		ActivityTypeMask: number,
		Attributes: IAttributeMetadata[],
		AutoCreateAccessTeams: any,
		AutoRouteToOwnerQueue: boolean,
		CanBeInManyToMany: ManagedProperty<boolean>,
		CanBePrimaryEntityInRelationship: ManagedProperty<boolean>,
		CanBeRelatedEntityInRelationship: ManagedProperty<boolean>,
		CanCreateAttributes: ManagedProperty<boolean>,
		CanCreateCharts: ManagedProperty<boolean>,
		CanCreateForms: ManagedProperty<boolean>,
		CanCreateViews: ManagedProperty<boolean>,
		CanModifyAdditionalSettings: ManagedProperty<boolean>,
		CanTriggerWorkflow: boolean,
		Description: Label,
		DisplayCollectionName: Label,
		DisplayName: Label,
		IconLargeName: string,
		IconMediumName: string,
		IconSmallName: string,
		IntroducedVersion: any,
		IsActivity: boolean,
		IsActivityParty: boolean,
		IsAIRUpdated: boolean,
		IsAuditEnabled: ManagedProperty<boolean>,
		IsAvailableOffline: boolean,
		IsBusinessProcessEnabled: boolean,
		IsChildEntity: boolean,
		IsConnectionsEnabled: ManagedProperty<boolean>,
		IsCustomEntity: boolean,
		IsCustomizable: ManagedProperty<boolean>,
		IsDocumentManagementEnabled: boolean,
		IsDuplicateDetectionEnabled: ManagedProperty<boolean>,
		IsEnabledForCharts: boolean,
		IsImportable: boolean,
		IsIntersect: boolean,
		IsMailMergeEnabled: ManagedProperty<boolean>,
		IsManaged: boolean,
		IsMappable: ManagedProperty<boolean>,
		IsQuickCreateEnabled: boolean,
		IsReadingPaneEnabled: boolean,
		IsRenameable: boolean,
		IsValidForAdvancedFind: boolean,
		IsValidForQueue: ManagedProperty<boolean>,
		IsVisibleInMobile: ManagedProperty<boolean>,
		IsVisibleInMobileClient: boolean,
		LogicalName: string,
		ManyToManyRelationships: ManyToManyRelationshipMetadata,
		ManyToOneRelationships: OneToManyRelationshipMetadata,
		MetadataId: string,
		ObjectTypeCode: number,
		OneToManyRelationships: OneToManyRelationshipMetadata,
		OwnershipType: "BusinessOwned" | "BusinessParented" | "None	OrganizationOwned" | "TeamOwned	UserOwned",
		PrimaryIdAttribute: string,
		PrimaryImageAttribute: string,
		PrimaryNameAttribute: string,
		Privileges: SecurityPrivilegeMetadata[],
		RecurrenceBaseEntityLogicalName: string,
		ReportViewName: string,
		SchemaName: string
	}

	declare export interface SecurityPrivilegeMetadata {
		CanBeBasic: boolean,
		CanBeDeep: boolean,
		CanBeEntityReference: boolean,
		CanBeGlobal: boolean,
		CanBeLocal: boolean,
		CanBeParentEntityReference: boolean,
		ExtensionData: boolean,
		Name: string,
		PrivilegeId: string,
		PrivilegeType: "Append" | "AppendTo" | "Assign" | "Create" | "Delete" | "None" | "Read" | "Share" | "Write"
	}

	declare export interface OneToManyRelationshipMetadata {
		AssociatedMenuConfiguration: AssociatedMenuConfiguration,
		CascadeConfiguration: CascadeConfiguration,
		HasChanged: any,
		IntroducedVersion: any,
		IsCustomizable: ManagedProperty<boolean>,
		IsCustomRelationship: boolean,
		IsHierarchical: any,
		IsManaged: boolean,
		IsValidForAdvancedFind: boolean,
		MetadataId: string,
		ReferencedAttribute: string,
		ReferencedEntity: string,
		ReferencingAttribute: string,
		ReferencingEntity: string,
		RelationshipType: string,
		SchemaName: string,
		SecurityTypes: any
	}

	declare export interface CascadeConfiguration {
		Assign: CascadeType,
		Delete: CascadeType,
		ExtensionData: CascadeType,
		Merge: CascadeType,
		Reparent: CascadeType,
		Share: CascadeType,
		Unshare: CascadeType
	}

	declare export interface ManyToManyRelationshipMetadata {
		Entity1AssociatedMenuConfiguration: AssociatedMenuConfiguration,
		Entity1IntersectAttribute: string,
		Entity1LogicalName: string,
		Entity2AssociatedMenuConfiguration: AssociatedMenuConfiguration,
		Entity2IntersectAttribute: string,
		Entity2LogicalName: string,
		HasChanged: boolean,
		IntersectEntityName: string,
		IntroducedVersion: any,
		IsCustomizable: ManagedProperty<boolean>,
		IsCustomRelationship: boolean,
		IsManaged: boolean,
		IsValidForAdvancedFind: boolean,
		MetadataId: string,
		RelationshipType: RelationshipType,
		SchemaName: string,
		SecurityTypes: SecurityType
	}

	declare export interface AssociatedMenuConfiguration {
		Behavior: AssociatedMenuBehavior,
		Group: AssociatedMenuGroup,
		Label: Label,
		Order: number
	}

	declare export interface IAttributeMetadata {
		AttributeOf: string,
		AttributeType: "Customer" | "DateTime" | "Decimal" | "Double" | "EntityName" | "Integer" | "Lookup" | "ManagedProperty" | "Memo" | "Money" | "Owner" | "PartyList" | "Picklist" | "State" | "Status" | "Uniqueidentifier" | "Virtual",
		AttributeTypeName: "BigIntType" | "BooleanType" | "CalendarRulesType" | "CustomerType" | "DateTimeType" | "DecimalType" | "DoubleType" | "EntityNameType" | "ImageType" | "IntegerType" | "LookupType" | "ManagedPropertyType" | "MemoType" | "MoneyType" | "OwnerType" | "PartyListType" | "PicklistType" | "StateType	StatusType" | "StringType" | "UniqueidentifierType" | "VirtualType",
		CalculationOf: any,
		CanBeSecuredForCreate: boolean,
		CanBeSecuredForRead: boolean,
		CanBeSecuredForUpdate: boolean,
		CanModifyAdditionalSettings: ManagedProperty<boolean>,
		ColumnNumber: number,
		DefaultFormValue: any,
		DefaultValue: any,
		DeprecatedVersion: any,
		Description: Label,
		DisplayName: Label,
		EntityLogicalName: string,
		Format: any,
		FormatName: string,
		ImeMode: any,
		IntroducedVersion: any,
		IsAuditEnabled: boolean,
		IsCustomAttribute: boolean,
		IsCustomizable: ManagedProperty<boolean>,
		IsManaged: boolean,
		IsPrimaryId: boolean,
		IsPrimaryName: boolean,
		IsRenameable: ManagedProperty<boolean>,
		IsSecured: boolean,
		IsValidForAdvancedFind: ManagedProperty<boolean>,
		IsValidForCreate: boolean,
		IsValidForRead: boolean,
		IsValidForUpdate: boolean,
		LinkedAttributeId: string,
		LogicalName: string,
		MaxLength: number,
		MaxValue: any,
		MetadataId: string,
		MinValue: number,
		OptionSet: any,
		Precision: any,
		PrecisionSource: any,
		RequiredLevel: ManagedProperty<string>,
		SchemaName: string,
		Targets: string[],
		YomiOf: any
	}

	declare export interface ManagedProperty<T> {
		CanBeChanged: boolean,
		ManagedPropertyLogicalName: string,
		Value: T
	}

	declare export interface Label {
		LocalizedLabels: LocalizedLabel[],
		UserLocalizedLabel: LocalizedLabel
	}

	declare export interface LocalizedLabel {
		Label: string,
		LangaugeCode: number,
		MetadataId: string,
		HasChanged: boolean,
		IsManaged: boolean
	}

		declare export class EntityQueryExpression  {
		constructor(criteria: Sdk.Mdq.MetadataFilterExpression, properties: Sdk.Mdq.MetadataPropertiesExpression, attributeQuery?: Sdk.Mdq.AttributeQueryExpression, relationshipQuery?: Sdk.Mdq.RelationshipQueryExpression, labelQuery?: Sdk.Mdq.LabelQueryExpression): this
	}

	declare export class MetadataFilterExpression  {
		constructor(filterOperator: Sdk.Mdq.LogicalOperator): this;
		addCondition(
		propertyName: SearchableEntityMetadataProperties | SearchableAttributeMetadataProperties | SearchableRelationshipMetadataProperties, conditionOperator: MetadataConditionOperator, value: Object
	): void;
		addCondition(
		propertyName: SearchableAttributeMetadataProperties, conditionOperator: MetadataConditionOperator, value: any
	): void;
		addCondition(
		propertyName: SearchableEntityMetadataProperties | SearchableAttributeMetadataProperties | SearchableRelationshipMetadataProperties, conditionOperator: MetadataConditionOperator, value: Object
	): void;
		addCondition(
		propertyName: SearchableAttributeMetadataProperties, conditionOperator: MetadataConditionOperator
	): void;
		addCondition(
		propertyName: SearchableEntityMetadataProperties | SearchableAttributeMetadataProperties | SearchableRelationshipMetadataProperties, conditionOperator: MetadataConditionOperator, value: Object
	): void
	}

	declare export class AttributeQueryExpression  {
		constructor(criteria: MetadataFilterExpression, properties: Sdk.Mdq.MetadataPropertiesExpression): this
	}

	declare export class RelationshipQueryExpression  {
		constructor(criteria: MetadataFilterExpression, properties: Mdq.MetadataPropertiesExpression): this
	}

	declare export class LabelQueryExpression  {
		constructor(languages: Array<number>): this
	}

	declare export class MetadataPropertiesExpression  {
		constructor(allProperties: boolean, propertyNames?: Array<EntityMetadataProperties | AttributeMetadataProperties | RelationshipMetadataProperties | any>): this
	}

	
}