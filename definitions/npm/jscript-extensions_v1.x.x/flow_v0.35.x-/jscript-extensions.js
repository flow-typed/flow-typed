

declare module 'jscript-extensions' {
		declare interface VarDate {
		
	}

	declare interface DateConstructor {
		new (vd: VarDate): Date
	}

	declare interface Date {
		getVarDate: () => VarDate
	}

			
}