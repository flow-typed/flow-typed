import type { DeepFreezeInterface } from 'npm$namespace$DeepFreeze'

declare module 'deep-freeze' {
					declare module.exports: DeepFreezeInterface


}

declare module 'npm$namespace$DeepFreeze' {
		declare export interface DeepFreezeInterface {
		(obj: T): T
	}

			
}