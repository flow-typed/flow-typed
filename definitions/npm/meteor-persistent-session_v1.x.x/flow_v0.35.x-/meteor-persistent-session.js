

declare module 'meteor-persistent-session' {
					
}

declare module 'npm$namespace$Session' {
			declare function setTemp(key: string, value: string | number | boolean | any | any): boolean

	declare function setPersistent(key: string, value: string | number | boolean | any | any): boolean

	declare function setAuth(key: string, value: string | number | boolean | any | any): boolean

	declare function setDefaultTemp(key: string, value: EJSONable | any): void

	declare function setDefaultPersistent(key: string, value: EJSONable | any): void

	declare function setDefaultAuth(key: string, value: EJSONable | any): void

	declare function makeTemp(key: string): void

	declare function makePersistent(key: string): void

	declare function makeAuth(key: string): void

	declare function clear(): void

	declare function clear(key: string): void

	declare function clearTemp(): void

	declare function clearPersistent(): void

	declare function clearAuth(): void

		
}