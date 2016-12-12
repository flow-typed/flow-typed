import type { Static } from 'npm$namespace$MailcheckModule'

declare module 'mailcheck' {
		declare interface JQuery {
		mailcheck(opts: MailcheckModule.IOptions): void
	}

			declare module.exports: Static


}

declare module 'npm$namespace$MailcheckModule' {
		declare export interface IDistanceFunction {
		(s1: string, s2: string): number
	}

	declare export interface ISuggestFunction {
		(email: string, domains?: string[], topLevelDomains?: string[], distanceFunction?: IDistanceFunction): void
	}

	declare export interface IJQuerySuggested {
		(element: JQuery, suggested: ISuggestion): void
	}

	declare export interface IJQueryEmpty {
		(element: JQuery): void
	}

	declare export interface IEmpty {
		(): void
	}

	declare export interface ISuggested {
		(suggested: ISuggestion): void
	}

	declare export interface ISplitEmail {
		topLevelDomain?: string,
		domain?: string,
		address?: string
	}

	declare export interface ISuggestion {
		address: string,
		domain: string,
		full: string
	}

	declare export interface IOptions {
		email: string,
		domains?: string[],
		secondLevelDomains?: string[],
		topLevelDomains?: string[],
		distanceFunction?: IDistanceFunction,
		suggested?: ISuggested | IJQuerySuggested,
		empty?: IEmpty | IJQueryEmpty
	}

	declare export interface Static {
		defaultDomains: string[],
		defaultSecondLevelDomains: string[],
		defaultTopLevelDomains: string[],
		domainThreshold: number,
		topLevelThreshold: number,
		run(opts: IOptions): void,
		suggest: ISuggestFunction,
		encodeEmail(email: string): string,
		splitEmail(email: string): ISplitEmail,
		sift3Distance(s1: string, s2: string): number,
		findClosestDomain(
		domain: string, domains: string[], distanceFunction?: IDistanceFunction, threshold?: number
	): boolean | string
	}

			
}