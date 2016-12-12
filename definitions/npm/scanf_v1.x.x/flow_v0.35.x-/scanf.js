

declare module 'scanf' {
			declare function sscanf(source: string, format: "%s"): string

	declare function sscanf(source: string, format: "%S"): string

	declare function sscanf(source: string, format: "%d"): number

	declare function sscanf(source: string, format: "%f"): number

	declare function sscanf(source: string, format: "%o"): number

	declare function sscanf(source: string, format: "%x"): number

	declare function sscanf(source: string, format: string): Array<number | string>

	declare function sscanf(source: string, format: string, ...names: string[]): Object

		


}

declare module 'npm$namespace$___node_scanf' {
			declare function scanf(format: "%s"): string

	declare function scanf(format: "%S"): string

	declare function scanf(format: "%d"): number

	declare function scanf(format: "%f"): number

	declare function scanf(format: "%o"): number

	declare function scanf(format: "%x"): number

	declare function scanf(format: string): Array<number | string>

	declare function scanf(format: string, ...names: string[]): Object

		
}