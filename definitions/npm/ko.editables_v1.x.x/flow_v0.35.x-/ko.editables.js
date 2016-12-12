

declare module 'ko.editables' {
		declare interface KnockoutEditable {
		addEditable(target: any): any,
		beginEdit(): void,
		commit(): void,
		rollback(): void,
		hasChanges(): boolean
	}

	declare interface KnockoutEditableStatic {
		(viewModel: any, autoInit?: boolean): void,
		beginEdit(scope: string): void,
		commit(scope: string): void,
		rollback(scope: string): void,
		hasChanges(scope: string): boolean
	}

	declare interface KnockoutStatic {
		editable: KnockoutEditableStatic
	}

			
}