

declare module 'gulp-ng-annotate' {
					declare module.exports: NgAnnotate


}

declare module 'ngAnnotate' {
		declare interface NgAnnotate {
		(option?: Option): NodeJS.ReadWriteStream
	}

	declare interface Option {
		add?: boolean,
		remove?: boolean,
		list?: boolean,
		regexp?: string,
		enable?: boolean,
		single_quotes?: boolean,
		rename?: RenameOption[],
		plugin?: any[]
	}

	declare interface RenameOption {
		from: string,
		to: string
	}

			
}