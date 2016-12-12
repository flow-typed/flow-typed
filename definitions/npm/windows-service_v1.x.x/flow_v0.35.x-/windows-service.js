

declare module 'windows-service' {
		declare export interface AddOptions {
		displayName?: string,
		nodePath?: string,
		nodeArgs?: string[],
		programPath?: string,
		programArgs?: string[]
	}

	declare export function add(name: string, opts?: AddOptions): void

	declare export function remove(name: string): void

	declare export function run(stdoutLogStream: stream.Writable, callback: () => void): void

	declare export function run(
		stdoutLogStream: stream.Writable, stderrLogStream: stream.Writable, callback: () => void
	): void

	declare export function stop(rcode?: number): void

		
}