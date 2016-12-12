

declare module 'ngstorage' {
					
}

declare module 'storage' {
		declare export interface IStorageService {
		$default(items: {
		
	}): IStorageService,
		$reset(items?: {
		
	}): IStorageService,
		$apply(): void,
		$sync(): void,
		[key: string]: any
	}

	declare export interface IStorageProvider {
		get<T>(key: string): T,
		set<T>(key: string, value: T): T,
		setKeyPrefix(prefix: string): void,
		setSerializer(serializer: (value: any) => string): void,
		setDeserializer(deserializer: (value: string) => any): void
	}

			
}