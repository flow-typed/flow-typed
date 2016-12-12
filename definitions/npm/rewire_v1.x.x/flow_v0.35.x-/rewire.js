import type { Rewire } from 'npm$namespace$RewireInterfaces'

declare module 'rewire' {
					declare module.exports: Rewire


}

declare module 'npm$namespace$RewireInterfaces' {
		declare interface Rewire {
		(filename: string): RewiredModule
	}

	declare interface RewiredModule {
		___set__(obj: Object): Function,
		___set__(name: string, value: any): Function,
		___get__(name: string): any,
		___with__(obj: Object): (callback: Function) => any
	}

			
}