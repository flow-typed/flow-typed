import type { uuid } from 'npm$namespace$dojox'

declare module 'dojox.uuid' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface uuid {
		
	}

			
}

declare module 'uuid' {
		declare interface generateRandomUuid {
		(): void
	}

	declare interface generateTimeBasedUuid {
		(node?: String): void
	}

	declare interface Uuid {
		(input?: String): void
	}

			
}

declare module 'generateTimeBasedUuid' {
		declare interface getNode {
		(): void
	}

	declare interface isValidNode {
		(node: String): void
	}

	declare interface setNode {
		(node: String): void
	}

			
}

declare module 'Uuid' {
		declare interface compare {
		(otherUuid: dojox.uuid.Uuid): void
	}

	declare interface compare {
		(uuidOne: dojox.uuid.Uuid, uuidTwo: dojox.uuid.Uuid): void
	}

	declare interface getGenerator {
		(): void
	}

	declare interface getNode {
		(): void
	}

	declare interface getTimestamp {
		(returnType: String): any
	}

	declare interface getVariant {
		(): void
	}

	declare interface getVersion {
		(): void
	}

	declare interface isEqual {
		(otherUuid: dojox.uuid.Uuid): void
	}

	declare interface isValid {
		(): void
	}

	declare interface setGenerator {
		(generator: Function): void
	}

	declare interface toString {
		(): void
	}

			
}

declare module '_base' {
		declare interface variant {
		DCE: string,
		MICROSOFT: string,
		NCS: string,
		UNKNOWN: string
	}

	declare interface version {
		DCE_SECURITY: number,
		NAME_BASED_MD5: number,
		NAME_BASED_SHA1: number,
		RANDOM: number,
		TIME_BASED: number,
		UNKNOWN: number
	}

			
}

declare module 'dojox/uuid' {
					declare module.exports: uuid


}

declare module 'dojox/uuid/generateRandomUuid' {
					declare module.exports: generateRandomUuid


}

declare module 'dojox/uuid/generateTimeBasedUuid' {
					declare module.exports: generateTimeBasedUuid


}

declare module 'dojox/uuid/Uuid' {
					declare module.exports: Uuid


}

declare module 'dojox/uuid/_base.variant' {
					declare module.exports: variant


}

declare module 'dojox/uuid/_base.version' {
					declare module.exports: version


}