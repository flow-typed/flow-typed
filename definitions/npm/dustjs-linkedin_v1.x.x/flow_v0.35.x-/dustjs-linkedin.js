

declare module 'dustjs-linkedin' {
		declare export interface Template {
		(chk: Chunk, ctx: Context): Chunk
	}

	declare export interface Chunk {
		write(data: string): Chunk,
		end(data: string): Chunk,
		map(callback: (chunk: Chunk) => any): Chunk,
		tap(callback: (value: any) => any): Chunk,
		untap(): Chunk,
		render(body: any, context: Context): Chunk,
		setError(err: any): Chunk
	}

	declare export interface Context {
		get(key: string): any,
		push(head: any, idx?: number, len?: number): Context,
		rebase(head: any): Context,
		current(): any
	}

	declare export interface Stream {
		flush(): void,
		emit(evt: string, data: any): void,
		on(evt: string, callback: (data?: any) => any): this,
		pipe(stream: Stream): Stream
	}

	declare export function register(name: string, tmpl: Template): void

	declare export function compile(source: string, name: string, strip?: boolean): string

	declare export function compileFn(source: string, name?: string): Template

	declare export function loadSource(compiled: string): Template

	declare export function render(name: string, context: any, callback: (err: any, out: string) => any): void

	declare export function render(name: string, context: Context, callback: (err: any, out: string) => any): void

	declare export function renderSource(source: string, context: any): Stream

	declare export function renderSource(source: string, context: Context): Stream

	declare export function renderSource(source: string, context: any, callback: (err: any, out: string) => any): void

	declare export function renderSource(
		source: string, context: Context, callback: (err: any, out: string) => any
	): void

	declare export function stream(name: string, context: any): Stream

	declare export function stream(name: string, context: Context): Stream

	declare export function makeBase(global: any): Context

	declare export function makeBase(global: Context): Context

	declare export function escapeHtml(html: string): string

	declare export function escapeJs(js: string): string

		
}