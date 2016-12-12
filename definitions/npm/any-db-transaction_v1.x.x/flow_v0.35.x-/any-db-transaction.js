

declare module 'any-db-transaction' {
			declare function begin(
		q: anyDB.Queryable, options?: begin.TransactionOptions, callback?: (error: Error, transaction: begin.Transaction) => void
	): begin.Transaction

	declare function begin(
		q: anyDB.Queryable, callback?: (error: Error, transaction: begin.Transaction) => void
	): begin.Transaction

	declare function begin(
		q: anyDB.Queryable, beginStatement?: string, callback?: (error: Error, transaction: begin.Transaction) => void
	): begin.Transaction

	declare function begin(
		q: anyDB.Queryable, options?: begin.TransactionOptions, beginStatement?: string, callback?: (error: Error, transaction: begin.Transaction) => void
	): begin.Transaction

		declare module.exports: undefined


}

declare module 'begin' {
		declare interface Transaction {
		commit(callback?: (error: Error) => void): void,
		rollback(callback?: (error: Error) => void): void
	}

	declare interface TransactionOptions {
		adapter?: anyDB.Adapter,
		begin?: string,
		commit?: string,
		rollback?: string,
		callback?: (error: Error, transaction: Transaction) => void,
		autoRollback?: boolean
	}

			
}