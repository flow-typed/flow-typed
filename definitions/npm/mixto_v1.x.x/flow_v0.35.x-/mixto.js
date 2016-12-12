import type { IMixinStatic } from 'npm$namespace$Mixto'

declare module 'mixto' {
					declare module.exports: IMixinStatic


}

declare module 'npm$namespace$Mixto' {
		declare interface IMixinStatic {
		includeInto(constructor: any): void,
		extend(object: any): void
	}

			
}