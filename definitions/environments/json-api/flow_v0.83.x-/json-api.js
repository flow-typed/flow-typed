/**
 * A collection of flow types representing json:api
 *
 * Visit https://jsonapi.org/ to learn more about the specification
 */

declare type JsonApi$Json =
	| null
	| void
	| string
	| number
	| boolean
	| { [key: string]: JsonApi$Json }
	| Array<JsonApi$Json>;

declare type JsonApi$Meta = { [key: string]: JsonApi$Json };

declare type JsonApi$Link =
	| string
	| {|
			href: string,
			meta?: JsonApi$Meta,
	  |};

declare type JsonApi$Links = {
	self?: JsonApi$Link,
	related?: JsonApi$Link,
	[key: string]: JsonApi$Link,
  ...
};

declare type JsonApi$PaginationLinks = {|
	first?: ?JsonApi$Link,
	last?: ?JsonApi$Link,
	prev?: ?JsonApi$Link,
	next?: ?JsonApi$Link,
|};

declare type JsonApi$Error = {|
	id?: string,
	links?: {|
		about: JsonApi$Link,
	|},
	status?: string,
	code?: string,
	title?: string,
	detail?: string,
	source?: {|
		pointer?: string,
		parameter?: string,
	|},
	meta?: JsonApi$Meta,
|};

declare type JsonApi$Object = {|
	version?: string,
	meta?: JsonApi$Meta,
|};

declare type JsonApi$Attributes = {
	[key: string]: JsonApi$Json,
  ...
};

declare type JsonApi$ResourceIdentifier = {|
	id: string,
	type: string,
	meta?: JsonApi$Meta,
|};

declare type JsonApi$ResourceLinkage =
	| Array<JsonApi$ResourceIdentifier>
	| JsonApi$ResourceIdentifier
	| null;

declare type JsonApi$Relationship = {|
	links?: JsonApi$Links,
	data?: JsonApi$ResourceLinkage,
	meta?: JsonApi$Meta,
|};

declare type JsonApi$Relationships = {
	[string]: JsonApi$Relationship,
	...
};

declare type JsonApi$Resource = {|
	id?: string,
	type: string,
	attributes?: JsonApi$Attributes,
	relationships?: JsonApi$Relationships,
	links?: JsonApi$Links,
	meta?: JsonApi$Meta,
|};

declare type JsonApi$DataDocument = {|
	data:
		| Array<JsonApi$Resource | JsonApi$ResourceIdentifier>
		| JsonApi$Resource
		| JsonApi$ResourceIdentifier
		| null,
	meta?: JsonApi$Meta,
	jsonapi?: JsonApi$Object,
	links?: JsonApi$PaginationLinks | JsonApi$Links,
	included?: Array<JsonApi$Resource>,
|};

declare type JsonApi$MetaDocument = {|
	meta: JsonApi$Meta,
	jsonapi?: JsonApi$Object,
	links?: JsonApi$Links,
|};

declare type JsonApi$ErrorDocument = {|
	errors: Array<JsonApi$Error>,
	meta?: JsonApi$Meta,
	jsonapi?: JsonApi$Object,
	links?: JsonApi$Links,
|};

declare type JsonApi$Document =
	| JsonApi$DataDocument
	| JsonApi$MetaDocument
	| JsonApi$ErrorDocument;
