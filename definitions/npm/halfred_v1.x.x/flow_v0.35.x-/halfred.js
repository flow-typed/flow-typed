

declare module 'halfred' {
		declare export interface Resource {
		allLinkArrays(): LinkCollection,
		allLinks(): LinkCollection,
		linkArray(key: string): Link[],
		link(key: string): Link,
		allEmbeddedResourceArrays(): ResourceCollection,
		allEmbeddedArrays(): ResourceCollection,
		allEmbeddedResources(): ResourceCollection,
		embeddedResourceArray(key: string): Resource[],
		embeddedArray(key: string): Resource[],
		embeddedResource(key: string): Resource,
		embedded(key: string): Resource,
		original(): any,
		hasCuries(): boolean,
		curieArray(): Link[],
		curie(name: string): Link,
		reverseResolveCurie(fullUrl: string): string,
		validationIssues(): any,
		validation(): any
	}

	declare interface ResourceCollection {
		[key: string]: Resource[]
	}

	declare interface LinkCollection {
		[rel: string]: Link[]
	}

	declare interface Link {
		href: string,
		templated?: boolean,
		type?: string,
		deprecation?: string,
		name?: string,
		profile?: string,
		title?: string,
		hreflang?: string
	}

	declare export function parse(object: any): Resource

	declare export function enableValidation(flag: boolean): void

	declare export function disableValidation(): void

		
}