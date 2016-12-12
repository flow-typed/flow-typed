

declare module 'redis-scripto' {
				declare class Scripto  {
		constructor(redisClient: redis.RedisClient): this;
		eval(
		scriptName: string, keys: string[], args: any[], callback: (err: Error, result: any) => void
	): void;
		evalSha(
		scriptName: string, keys: string[], args: any[], callback: (err: Error, result: any) => void
	): void;
		load(scripts: Scripto.Scripts): void;
		loadFromDir(scriptsDir: string): void;
		loadFromFile(name: string, filepath: string): void;
		run(
		scriptName: string, keys: string[], args: any[], callback: (err: Error, result: any) => void
	): void
	}

	declare module.exports: undefined


}

declare module 'Scripto' {
	declare export type Script = string;

	declare export interface Scripts {
		[scriptName: string]: Script
	}

			
}