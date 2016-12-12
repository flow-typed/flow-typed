

declare module 'google-apps-script.lock' {
					
}

declare module 'Lock' {
		declare export interface Lock {
		hasLock(): boolean,
		releaseLock(): void,
		tryLock(timeoutInMillis: Integer): boolean,
		waitLock(timeoutInMillis: Integer): void
	}

	declare export interface LockService {
		getDocumentLock(): Lock,
		getScriptLock(): Lock,
		getUserLock(): Lock
	}

			
}