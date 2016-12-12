

declare module 'activex-data-objects' {
		declare interface ActiveXObject {
		new (progID: "ADODB.Connection"): ADODB.Connection,
		new (progID: "ADODB.Record"): ADODB.Record,
		new (progID: "ADODB.Stream"): ADODB.Stream,
		new (progID: "ADODB.Command"): ADODB.Command,
		new (progID: "ADODB.Recordset"): ADODB.Recordset,
		new (progID: "ADODB.Parameter"): ADODB.Parameter
	}

			
}

declare module 'npm$namespace$ADODB' {
		declare interface Command {
		ActiveConnection: Connection,
		Cancel: () => void,
		CommandStream: any,
		CommandText: string,
		CommandTimeout: number,
		CommandType: CommandTypeEnum,
		CreateParameter: (
		Name?: string, Type?: DataTypeEnum, Direction?: ParameterDirectionEnum, Size?: number, Value?: any
	) => Parameter,
		Dialect: string,
		Execute: (RecordsAffected?: any, Parameters?: any, Options?: number) => Recordset,
		Name: string,
		NamedParameters: boolean,
		Parameters: Parameters,
		Prepared: boolean,
		Properties: Properties,
		State: number
	}

	declare interface Connection {
		Attributes: number,
		BeginTrans: () => number,
		Cancel: () => void,
		Close: () => void,
		CommandTimeout: number,
		CommitTrans: () => void,
		ConnectionString: string,
		ConnectionTimeout: number,
		CursorLocation: CursorLocationEnum,
		DefaultDatabase: string,
		Errors: Errors,
		Execute: (CommandText: string, RecordsAffected: any, Options?: number) => Recordset,
		IsolationLevel: IsolationLevelEnum,
		Mode: ConnectModeEnum,
		Open: (
		ConnectionString?: string, UserID?: string, Password?: string, Options?: number
	) => void,
		OpenSchema: (Schema: SchemaEnum, Restrictions?: any, SchemaID?: any) => Recordset,
		Properties: Properties,
		Provider: string,
		RollbackTrans: () => void,
		State: number,
		Version: string
	}

	declare interface Error {
		Description: string,
		HelpContext: number,
		HelpFile: string,
		NativeError: number,
		Number: number,
		Source: string,
		SQLState: string
	}

	declare interface Errors {
		Clear: () => void,
		Count: number,
		Item: (Index: any) => Error,
		Refresh: () => void
	}

	declare interface Field {
		ActualSize: number,
		AppendChunk: (Data: any) => void,
		Attributes: number,
		DataFormat: any,
		DefinedSize: number,
		GetChunk: (Length: number) => any,
		Name: string,
		NumericScale: number,
		OriginalValue: any,
		Precision: number,
		Properties: Properties,
		Status: number,
		Type: DataTypeEnum,
		UnderlyingValue: any,
		Value: any
	}

	declare interface Fields {
		_Append: (
		Name: string, Type: DataTypeEnum, DefinedSize?: number, Attrib?: FieldAttributeEnum
	) => void,
		Append: (
		Name: string, Type: DataTypeEnum, DefinedSize?: number, Attrib?: FieldAttributeEnum, FieldValue?: any
	) => void,
		CancelUpdate: () => void,
		Count: number,
		Delete: (Index: any) => void,
		Item: (Index: any) => Field,
		Refresh: () => void,
		Resync: (ResyncValues?: ResyncEnum) => void,
		Update: () => void
	}

	declare interface Parameter {
		AppendChunk: (Val: any) => void,
		Attributes: number,
		Direction: ParameterDirectionEnum,
		Name: string,
		NumericScale: number,
		Precision: number,
		Properties: Properties,
		Size: number,
		Type: DataTypeEnum,
		Value: any
	}

	declare interface Parameters {
		Append: (Object: any) => void,
		Count: number,
		Delete: (Index: any) => void,
		Item: (Index: any) => Parameter,
		Refresh: () => void
	}

	declare interface Properties {
		Count: number,
		Item: (Index: any) => Property,
		Refresh: () => void
	}

	declare interface Property {
		Attributes: number,
		Name: string,
		Type: DataTypeEnum,
		Value: any
	}

	declare interface Record {
		ActiveConnection: any,
		Cancel: () => void,
		Close: () => void,
		CopyRecord: (
		Source?: string, Destination?: string, UserName?: string, Password?: string, Options?: CopyRecordOptionsEnum, Async?: boolean
	) => string,
		DeleteRecord: (Source?: string, Async?: boolean) => void,
		Fields: Fields,
		GetChildren: () => Recordset,
		Mode: ConnectModeEnum,
		MoveRecord: (
		Source?: string, Destination?: string, UserName?: string, Password?: string, Options?: MoveRecordOptionsEnum, Async?: boolean
	) => string,
		Open: (
		Source: any, ActiveConnection: any, Mode?: ConnectModeEnum, CreateOptions?: RecordCreateOptionsEnum, Options?: RecordOpenOptionsEnum, UserName?: string, Password?: string
	) => void,
		ParentURL: string,
		Properties: Properties,
		RecordType: RecordTypeEnum,
		Source: any,
		State: ObjectStateEnum
	}

	declare interface Recordset {
		_xClone: () => Recordset,
		_xResync: (AffectRecords?: AffectEnum) => void,
		_xSave: (FileName?: string, PersistFormat?: PersistFormatEnum) => void,
		AbsolutePage: PositionEnum,
		AbsolutePosition: PositionEnum,
		ActiveCommand: any,
		ActiveConnection: any,
		AddNew: (FieldList?: any, Values?: any) => void,
		BOF: boolean,
		Bookmark: any,
		CacheSize: number,
		Cancel: () => void,
		CancelBatch: (AffectRecords?: AffectEnum) => void,
		CancelUpdate: () => void,
		Clone: (LockType?: LockTypeEnum) => Recordset,
		Close: () => void,
		Collect: (Index: any) => any,
		CompareBookmarks: (Bookmark1: any, Bookmark2: any) => CompareEnum,
		CursorLocation: CursorLocationEnum,
		CursorType: CursorTypeEnum,
		DataMember: string,
		DataSource: any,
		Delete: (AffectRecords?: AffectEnum) => void,
		EditMode: EditModeEnum,
		EOF: boolean,
		Fields: Fields,
		Filter: any,
		Find: (
		Criteria: string, SkipRecords?: number, SearchDirection?: SearchDirectionEnum, Start?: any
	) => void,
		GetRows: (Rows?: number, Start?: any, Fields?: any) => any,
		GetString: (
		StringFormat?: StringFormatEnum, NumRows?: number, ColumnDelimeter?: string, RowDelimeter?: string, NullExpr?: string
	) => string,
		Index: string,
		LockType: LockTypeEnum,
		MarshalOptions: MarshalOptionsEnum,
		MaxRecords: number,
		Move: (NumRecords: number, Start?: any) => void,
		MoveFirst: () => void,
		MoveLast: () => void,
		MoveNext: () => void,
		MovePrevious: () => void,
		NextRecordset: (RecordsAffected?: any) => Recordset,
		Open: (
		Source: any, ActiveConnection: any, CursorType?: CursorTypeEnum, LockType?: LockTypeEnum, Options?: number
	) => void,
		PageCount: number,
		PageSize: number,
		Properties: Properties,
		RecordCount: number,
		Requery: (Options?: number) => void,
		Resync: (AffectRecords?: AffectEnum, ResyncValues?: ResyncEnum) => void,
		Save: (Destination: any, PersistFormat?: PersistFormatEnum) => void,
		Seek: (KeyValues: any, SeekOption?: SeekEnum) => void,
		Sort: string,
		Source: any,
		State: number,
		Status: number,
		StayInSync: boolean,
		Supports: (CursorOptions: CursorOptionEnum) => boolean,
		Update: (Fields?: any, Values?: any) => void,
		UpdateBatch: (AffectRecords?: AffectEnum) => void
	}

	declare interface Stream {
		Cancel: () => void,
		Charset: string,
		Close: () => void,
		CopyTo: (DestStream: Stream, CharNumber?: number) => void,
		EOS: boolean,
		Flush: () => void,
		LineSeparator: LineSeparatorEnum,
		LoadFromFile: (FileName: string) => void,
		Mode: ConnectModeEnum,
		Open: (
		Source: any, Mode?: ConnectModeEnum, Options?: StreamOpenOptionsEnum, UserName?: string, Password?: string
	) => void,
		Position: number,
		Read: (NumBytes?: number) => any,
		ReadText: (NumChars?: number) => string,
		SaveToFile: (FileName: string, Options?: SaveOptionsEnum) => void,
		SetEOS: () => void,
		Size: number,
		SkipLine: () => void,
		State: ObjectStateEnum,
		Type: StreamTypeEnum,
		Write: (Buffer: any) => void,
		WriteText: (Data: string, Options?: StreamWriteEnum) => void
	}

			
}