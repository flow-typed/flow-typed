

declare module 'promise.prototype.finally' {
		declare interface Promise<T> {
		finally<U>(onFinally?: () => U | Promise<U>): Promise<U>
	}

			
}