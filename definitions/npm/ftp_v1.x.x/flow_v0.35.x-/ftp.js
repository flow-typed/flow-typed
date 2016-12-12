

declare module 'ftp' {
				declare class Client extends events$EventEmitter {
		constructor(): this;
		connect(config?: Client.Options): void;
		end(): void;
		destroy(): void;
		list(
		path: string, useCompression: boolean, callback: (error: Error, listing: Client.ListingElement[]) => void
	): void;
		list(
		path: string, callback: (error: Error, listing: Client.ListingElement[]) => void
	): void;
		list(
		useCompression: boolean, callback: (error: Error, listing: Client.ListingElement[]) => void
	): void;
		list(callback: (error: Error, listing: Client.ListingElement[]) => void): void;
		get(
		path: string, callback: (error: Error, stream: NodeJS.ReadableStream) => void
	): void;
		get(
		path: string, useCompression: boolean, callback: (error: Error, stream: NodeJS.ReadableStream) => void
	): void;
		put(
		input: NodeJS.ReadableStream | Buffer | string, destPath: string, useCompression: boolean, callback: (error: Error) => void
	): void;
		put(
		input: NodeJS.ReadableStream | Buffer | string, destPath: string, callback: (error: Error) => void
	): void;
		append(
		input: NodeJS.ReadableStream | Buffer | string, destPath: string, useCompression: boolean, callback: (error: Error) => void
	): void;
		append(
		input: NodeJS.ReadableStream | Buffer | string, destPath: string, callback: (error: Error) => void
	): void;
		rename(oldPath: string, newPath: string, callback: (error: Error) => void): void;
		logout(callback: (error: Error) => void): void;
		delete(path: string, callback: (error: Error) => void): void;
		cwd(path: string, callback: (error: Error, currentDir?: string) => void): void;
		abort(callback: (error: Error) => void): void;
		site(
		command: string, callback: (error: Error, responseText: string, responseCode: number) => void
	): void;
		status(callback: (error: Error, status: string) => void): void;
		ascii(callback: (error: Error) => void): void;
		binary(callback: (error: Error) => void): void;
		mkdir(path: string, recursive: boolean, callback: (error: Error) => void): void;
		mkdir(path: string, callback: (error: Error) => void): void;
		rmdir(path: string, recursive: boolean, callback: (error: Error) => void): void;
		rmdir(path: string, callback: (error: Error) => void): void;
		cdup(callback: (error: Error) => void): void;
		pwd(callback: (error: Error, path: string) => void): void;
		system(callback: (error: Error, OS: string) => void): void;
		listSafe(
		path: string, useCompression: boolean, callback: (error: Error, listing: Client.ListingElement[]) => void
	): void;
		listSafe(
		path: string, callback: (error: Error, listing: Client.ListingElement[]) => void
	): void;
		listSafe(
		useCompression: boolean, callback: (error: Error, listing: Client.ListingElement[]) => void
	): void;
		listSafe(callback: (error: Error, listing: Client.ListingElement[]) => void): void;
		size(path: string, callback: (error: Error, size: number) => void): void;
		lastMod(path: string, callback: (error: Error, lastMod: Date) => void): void;
		restart(byteOffset: number, callback: (error: Error) => void): void
	}

	declare module.exports: undefined


}

declare module 'Client' {
		declare export interface Options {
		host?: string,
		port?: number,
		secure?: string | boolean,
		secureOptions?: tls.ConnectionOptions,
		user?: string,
		password?: string,
		connTimeout?: number,
		pasvTimeout?: number,
		keepalive?: number
	}

	declare export interface ListingElement {
		type: string,
		name: string,
		size: string,
		date: Date,
		rights?: {
		user: string,
		group: string,
		other: string
	},
		owner?: string,
		group?: string,
		target?: string,
		sticky?: boolean
	}

			
}