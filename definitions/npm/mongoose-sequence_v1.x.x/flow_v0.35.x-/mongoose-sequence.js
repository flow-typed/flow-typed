

declare module 'mongoose-sequence' {
					declare module.exports: undefined


}

declare module 'mongoose' {
		declare export interface SequenceOptions {
		inc_field: string,
		id?: string,
		reference_fields?: Array<string>,
		disable_hooks?: boolean,
		collection_name?: string
	}

	declare export interface SequenceDocument {
		setNext(sequenceId: string, callback: (err: any, res: SequenceDocument) => void): void
	}

	declare export interface SequenceSchema {
		plugin(
		plugin: (schema: SequenceSchema, options: SequenceOptions) => void, options: SequenceOptions
	): this,
		plugin(plugin: (schema: Schema, options?: Object) => void, opts?: Object): this
	}

			
}