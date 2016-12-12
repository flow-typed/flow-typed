

declare module '_debugger' {
		declare export interface Packet {
		raw: string,
		headers: string[],
		body: Message
	}

	declare export interface Message {
		seq: number,
		type: string
	}

	declare export interface RequestInfo {
		command: string,
		arguments: any
	}

	declare export interface Request {
		
	}

	declare export interface Event {
		event: string,
		body?: any
	}

	declare export interface Response {
		request_seq: number,
		success: boolean,
		message?: string,
		body?: any
	}

	declare export interface BreakpointMessageBody {
		type: string,
		target: number,
		line: number
	}

	declare export interface ScriptDesc {
		name: string,
		id: number,
		isNative?: boolean,
		handle?: number,
		type: string,
		lineOffset?: number,
		columnOffset?: number,
		lineCount?: number
	}

	declare export interface Breakpoint {
		id: number,
		scriptId: number,
		script: ScriptDesc,
		line: number,
		condition?: string,
		scriptReq?: string
	}

	declare export interface RequestHandler {
		(err: boolean, body: Message, res: Packet): void,
		request_seq?: number
	}

	declare export interface ResponseBodyHandler {
		(err: boolean, body?: any): void,
		request_seq?: number
	}

	declare export interface ExceptionInfo {
		text: string
	}

	declare export interface BreakResponse {
		script?: ScriptDesc,
		exception?: ExceptionInfo,
		sourceLine: number,
		sourceLineText: string,
		sourceColumn: number
	}

	declare export interface ClientInstance {
		protocol: Protocol,
		scripts: ScriptDesc[],
		handles: ScriptDesc[],
		breakpoints: Breakpoint[],
		currentSourceLine: number,
		currentSourceColumn: number,
		currentSourceLineText: string,
		currentFrame: number,
		currentScript: string,
		connect(port: number, host: string): void,
		req(req: any, cb: RequestHandler): void,
		reqFrameEval(code: string, frame: number, cb: RequestHandler): void,
		mirrorObject(obj: any, depth: number, cb: ResponseBodyHandler): void,
		setBreakpoint(rq: BreakpointMessageBody, cb: RequestHandler): void,
		clearBreakpoint(rq: Request, cb: RequestHandler): void,
		listbreakpoints(cb: RequestHandler): void,
		reqSource(from: number, to: number, cb: RequestHandler): void,
		reqScripts(cb: any): void,
		reqContinue(cb: RequestHandler): void
	}

	declare export function SourceInfo(body: BreakResponse): string

	declare export class Protocol  {
		res: Packet;
		state: string;
		execute(data: string): void;
		serialize(rq: Request): string;
		onResponse: (pkt: Packet) => void
	}

	


}