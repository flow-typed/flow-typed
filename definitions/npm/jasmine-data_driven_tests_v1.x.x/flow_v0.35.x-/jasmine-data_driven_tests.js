

declare module 'jasmine-data_driven_tests' {
			declare function all(description: string, dataset: any[], assertion: (...args: any[]) => void): void

	declare function xall(description: string, dataset: any[], assertion: (...args: any[]) => void): void

		
}