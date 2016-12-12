

declare module 'api-docs' {
					
}

declare module 'npm$namespace$AtomDocTypes' {
		declare interface Metadata {
		classes: {
		[className: string]: ClassInfo
	}
	}

	declare interface ClassInfo {
		name: string,
		superClass: string,
		visibility: string,
		filename: string,
		srcUrl: string,
		summary: string,
		description: string,
		examples: Example[],
		sections: Section[],
		classMethods: ClassMethod[],
		classProperties: ClassProperty[],
		instanceMethods: InstanceMethod[],
		instanceProperties: InstanceProperty[]
	}

	declare interface Example {
		description: string,
		lang: string,
		code: string,
		raw: string
	}

	declare interface Section {
		name: string,
		description: string
	}

	declare interface ClassMethod {
		name: string,
		sectionName: string,
		srcUrl: string,
		visibility: string,
		summary: string,
		description: string,
		arguments: Argument[],
		returnValues: ReturnValue[]
	}

	declare interface ClassProperty {
		
	}

	declare interface InstanceMethod {
		name: string,
		sectionName: string,
		srcUrl: string,
		visibility: string,
		summary: string,
		description: string,
		arguments: Argument[],
		returnValues: ReturnValue[],
		titledArguments: TitledArgument[]
	}

	declare interface InstanceProperty {
		name: string,
		sectionName: string,
		srcUrl: string,
		visibility: string,
		summary: string,
		description: string
	}

	declare interface Argument {
		name: string,
		description: string,
		type: string,
		isOptional: boolean,
		children: Argument[]
	}

	declare interface TitledArgument {
		title: string,
		description: string,
		arguments: Argument[]
	}

	declare interface ReturnValue {
		type: string,
		description: string
	}

			
}