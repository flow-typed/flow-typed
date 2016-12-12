

declare module 'winston-dynamodb' {
		declare export interface DynamoDBTransportOptions {
		useEnvironment?: boolean,
		accessKeyId?: string,
		secretAccessKey?: string,
		region?: string,
		tableName: string,
		level: string,
		dynamoDoc?: boolean
	}

	declare export interface DynamoDBTransportInstance {
		new (options?: DynamoDBTransportOptions): DynamoDBTransportInstance
	}

		declare export class DynamoDB extends winston$Transport, DynamoDBTransportInstance {
		regions: string[];
		name: string;
		level: string;
		db: any;
		AWS: any;
		region: string;
		tableName: string;
		dynamoDoc: boolean;
		constructor(options?: DynamoDBTransportOptions): this;
		log(level: any, msg: any, meta: any, callback: any): any
	}

	
}

declare module 'winston' {
		declare interface Transports {
		DynamoDB: DynamoDB
	}

			
}