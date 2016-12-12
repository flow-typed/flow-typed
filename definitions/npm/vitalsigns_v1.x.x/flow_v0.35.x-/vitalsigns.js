

declare module 'vitalsigns' {
		declare export interface Constraint {
		comparator: string,
		field: string,
		monitor: string,
		negate?: boolean,
		value: any
	}

	declare export interface ConstraintWrapper {
		equals?: (num: number) => ConstraintWrapper,
		greaterThan?: (num: number) => ConstraintWrapper,
		lessThan?: (num: number) => ConstraintWrapper,
		not?: ConstraintWrapper
	}

	declare export interface Options {
		autoCheck?: number | boolean,
		httpHealthy?: number,
		httpUnhealthy?: number
	}

	declare export interface Monitor {
		connections: any
	}

	declare export interface MonitorField {
		name?: string,
		units?: string
	}

	declare interface ReportOptions {
		flatten?: boolean,
		separator?: string
	}

		declare class VitalSigns  {
		constructor(options?: vitalsigns.Options): this;
		addConstraint(): void;
		destroy(): void;
		express: RequestHandler;
		getFailed(): Array<string>;
		getReport(options?: vitalsigns.ReportOptions): {
		
	};
		isHealthy(report?: {
		
	}): boolean;
		monitor(
		monitor: string | vitalsigns.Monitor | {
		
	}, field?: vitalsigns.MonitorField
	): void;
		unhealthyWhen: (monitorName: string, fieldName: string) => vitalsigns.ConstraintWrapper
	}

	declare module.exports: undefined


}