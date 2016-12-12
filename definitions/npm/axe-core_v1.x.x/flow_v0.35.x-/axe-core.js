

declare module 'axe-core' {
					declare module.exports: undefined


}

declare module 'npm$namespace$axe' {
	declare export type ImpactValue = "minor" | "moderate" | "serious" | "critical";

	declare export type TagValue = "wcag2a" | "wcag2aa" | "section508" | "best-practice";

	declare export type ReporterVersion = "v1" | "v2";

	declare export type RunOnlyType = "rule" | "rules" | "tag" | "tags";

	declare export interface ElementContext {
		node?: Object,
		selector?: string,
		include?: any[],
		exclude?: any[]
	}

	declare export interface RunOnly {
		type: RunOnlyType,
		value?: {
		include?: string[],
		exclude?: string[]
	},
		values?: TagValue[]
	}

	declare export interface AxeResults {
		url: string,
		timestamp: string,
		passes: Pass[],
		violations: Violation[]
	}

	declare export interface Pass {
		description: string,
		help: string,
		helpUrl: string,
		id: string,
		impact: ImpactValue,
		tags: TagValue[],
		nodes: NodeResult[]
	}

	declare export interface Violation {
		description: string,
		help: string,
		helpUrl: string,
		id: string,
		impact: ImpactValue,
		tags: TagValue[],
		nodes: NodeResult[]
	}

	declare export interface NodeResult {
		html: string,
		impact: ImpactValue,
		target: string[],
		any: CheckResult[],
		all: CheckResult[],
		none: CheckResult[]
	}

	declare export interface CheckResult {
		id: string,
		impact: string,
		message: string,
		data: any,
		relatedNodes?: RelatedNode[]
	}

	declare export interface RelatedNode {
		target: string[],
		html: string
	}

	declare export interface Spec {
		branding?: {
		brand: string,
		application: string
	},
		reporter?: ReporterVersion,
		checks?: Check[],
		rules?: Rule[]
	}

	declare export interface Check {
		id: string,
		evaluate: Function,
		after?: Function,
		options?: any,
		matches?: string,
		enabled?: boolean
	}

	declare export interface Rule {
		id: string,
		selector?: string,
		excludeHidden?: boolean,
		enabled?: boolean,
		pageLevel?: boolean,
		any?: string[],
		all?: string[],
		none?: string[],
		tags?: string[],
		matches?: string
	}

	declare export interface AxePlugin {
		id: string,
		run(...args: any[]): any,
		commands: {
		id: string,
		callback(...args: any[]): void
	}[],
		cleanup(callback: Function): void
	}

	declare export function a11yCheck(
		context: ElementContext, options: {
		runOnly?: RunOnly,
		rules?: Object
	}, callback: (results: AxeResults) => void
	): AxeResults

	declare export function configure(spec: Spec): void

	declare export function getRules(tags?: string[]): Object[]

	declare export function reset(): void

	declare export function registerPlugin(plugin: AxePlugin): void

	declare export function cleanup(): void

		
}