

declare module 'node-snap7' {
		declare interface MultiVarRead {
		Area: Area,
		WordLen: WordLen,
		DBNumber?: number,
		Start: number,
		Amount: number
	}

	declare interface MultiVarWrite {
		Area: Area,
		WordLen: WordLen,
		DBNumber?: number,
		Start: number,
		Amount: number,
		Data: Buffer
	}

	declare interface MultiVarsReadResult {
		Result: number,
		Data: Buffer
	}

	declare interface MultiVarsWriteResult {
		Result: number
	}

	declare interface S7Client_Static {
		new (): S7Client
	}

	declare interface S7Client {
		Connect(callback?: (err: any) => void): boolean,
		ConnectTo(ip: string, rack: number, slot: number, callback?: (err: any) => void): boolean,
		SetConnectionParams(ip: string, localTSAP: any, remoteTSAP: any): boolean,
		SetConnectionType(connectionType: ConnectionType): void,
		Disconnect(): void,
		GetParam(paramNumber: ParamNumber): any,
		SetParam(paramNumber: ParamNumber, value: any): boolean,
		ReadArea(
		area: Area, dbNumber: number, start: number, amount: number, wordLen: WordLen, callback?: (err: any, data: Buffer) => void
	): Buffer | boolean,
		WriteArea(
		area: Area, dbNumber: number, start: number, amount: number, wordLen: WordLen, buffer: Buffer, callback?: (err: any) => void
	): boolean,
		DBRead(
		dbNumber: number, start: number, size: number, callback?: (err: any, data: any) => void
	): Buffer | boolean,
		DBWrite(
		dbNumber: number, start: number, size: number, buffer: Buffer, callback?: (err: any) => void
	): boolean,
		ABRead(
		start: number, size: number, callback?: (err: any, data: Buffer) => void
	): Buffer | boolean,
		ABWrite(
		start: number, size: number, buffer: Buffer, callback?: (err: any) => void
	): boolean,
		EBRead(
		start: number, size: number, callback?: (err: any, data: Buffer) => void
	): Buffer | boolean,
		EBWrite(
		start: number, size: number, buffer: Buffer, callback?: (err: any) => void
	): boolean,
		MBRead(
		start: number, size: number, callback?: (err: any, data: Buffer) => void
	): Buffer | boolean,
		MBWrite(
		start: number, size: number, buffer: Buffer, callback?: (err: any) => void
	): boolean,
		TMRead(
		start: number, size: number, callback?: (err: any, data: Buffer) => void
	): Buffer | boolean,
		TMWrite(
		start: number, size: number, buffer: Buffer, callback?: (err: any) => void
	): boolean,
		CTRead(
		start: number, size: number, callback?: (err: any, data: Buffer) => void
	): Buffer | boolean,
		CTWrite(
		start: number, size: number, buffer: Buffer, callback?: (err: any) => void
	): boolean,
		ReadMultiVars(
		multiVars: MultiVarRead[], callback?: (err: any, data: MultiVarsReadResult[]) => void
	): MultiVarsReadResult[] | boolean,
		WriteMultiVars(
		multiVars: MultiVarWrite[], callback?: (err: any, data: MultiVarsWriteResult[]) => void
	): MultiVarsWriteResult[] | boolean,
		ListBlocks(callback?: (err: any, data: Object) => void): Object | boolean,
		ListBlocksOfType(blockType: BlockType, callback?: (err: any, data: any) => void): any | boolean,
		GetAgBlockInfo(
		blockType: BlockType, blockNum: number, callback?: (err: any, data: any) => void
	): any | boolean,
		GetPgBlockInfo(buffer: Buffer): Object | boolean,
		FullUpload(
		blockType: BlockType, blockNum: number, callback?: (err: any, data: Object) => void
	): Object | boolean,
		Upload(
		blockType: BlockType, blockNum: number, callback?: (err: any, data: Object) => void
	): Object | boolean,
		Download(blockNum: number, buffer: Buffer, callback?: (err: any) => void): boolean,
		Delete(blockType: BlockType, blockNum: number, callback?: (err: any) => void): boolean,
		DBGet(
		dbNumber: number, callback?: (err: any, data: Buffer) => void
	): Buffer | boolean,
		DBFill(dbNumber: number, fillChar: string, callback?: (err: any) => void): boolean,
		GetPlcDateTime(callback?: (err: any, data: any) => void): any | boolean,
		SetPlcDateTime(dateTime: Date, callback?: (err: any) => void): boolean,
		SetPlcSystemDateTime(callback?: (err: any) => void): boolean,
		ReadSZL(
		id: number, index: number, callback?: (err: any, data: any) => void
	): Buffer | boolean,
		ReadSZLList(callback?: (err: any, data: any) => void): any | boolean,
		GetOrderCode(callback?: (err: any, data: any) => void): any | boolean,
		GetCpuInfo(callback?: (err: any, data: any) => void): any | boolean,
		GetCpInfo(callback?: (err: any, data: any) => void): any | boolean,
		PlcHotStart(callback?: (err: any) => void): boolean,
		PlcColdStart(callback?: (err: any) => void): boolean,
		PlcStop(callback?: (err: any) => void): boolean,
		CopyRamToRom(timeout: number, callback?: (err: any) => void): boolean,
		Compress(timeout: number, callback?: (err: any) => void): boolean,
		SetSessionPassword(password: string, callback?: (err: any) => void): boolean,
		ClearSessionPassword(callback?: (err: any) => void): boolean,
		GetProtection(callback?: (err: any, data: any) => void): any | boolean,
		ExecTime(): number | boolean,
		LastError(): any,
		PduRequested(): number | boolean,
		PduLength(): number | boolean,
		PlcStatus(callback?: (err: any, data: Status) => void): Status | boolean,
		Connected(): any,
		ErrorText(err: number): string
	}

			
}