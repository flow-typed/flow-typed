

declare module 'knockout.dirtyFlag' {
		declare interface DirtyFlag {
		isDirty: KnockoutComputed<boolean>,
		new (objectToTrack: any, isInitiallyDirty?: boolean, hashFunction?: () => any): any,
		reset(): void
	}

	declare interface KnockoutStatic {
		DirtyFlag: DirtyFlag
	}

	declare interface KnockoutDirtyFlagStatic {
		DirtyFlag: DirtyFlag
	}

			
}

declare module 'kodirtyflag' {
					declare module.exports: undefined


}