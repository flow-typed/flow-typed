

declare module 'amazon-product-api' {
		declare interface ICredentials {
		awsId: string,
		awsSecret: string,
		awsTag: string
	}

	declare interface IAmazonProductQueryCallback {
		(err: string, results: Object[]): void
	}

	declare interface IAmazonProductClient {
		itemSearch(query: any, callback?: IAmazonProductQueryCallback): Promise<Object[]>,
		itemLookup(query: any, callback?: IAmazonProductQueryCallback): Promise<Object[]>,
		browseNodeLookup(query: any, callback?: IAmazonProductQueryCallback): Promise<Object[]>
	}

	declare export function createClient(credentials: ICredentials): IAmazonProductClient

		
}