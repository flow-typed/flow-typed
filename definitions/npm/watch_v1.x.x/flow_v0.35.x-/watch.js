

declare module 'watch' {
		declare export interface Monitor {
		
	}

	declare export interface Options {
		persistent?: boolean,
		ignoreDotFiles?: boolean,
		filter?: any,
		interval?: number
	}

	declare export function watchTree(root: string, callback: (f: any, curr: fs.Stats, prev: fs.Stats) => void): void

	declare export function watchTree(
		root: string, options: Options, callback: (f: any, curr: fs.Stats, prev: fs.Stats) => void
	): void

	declare export function unwatchTree(root: string): void

	declare export function createMonitor(root: string, callback: (monitor: Monitor) => void): void

	declare export function createMonitor(root: string, options: Options, callback: (monitor: Monitor) => void): void

		
}