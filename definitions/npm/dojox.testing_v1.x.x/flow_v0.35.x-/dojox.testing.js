

declare module 'dojox.testing' {
					
}

declare module 'testing' {
				declare class DocTest  {
		constructor(): this;
		errors: any[];
		getTests(moduleName: String): any;
		getTestsFromString(data: String): any;
		run(moduleName: any): void;
		runTest(commands: any, expected: any): Object
	}

	
}

declare module 'dojox/testing/DocTest' {
					declare module.exports: DocTest


}