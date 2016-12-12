import type { StamplayStatic } from 'npm$namespace$Stamplay'

declare module 'stamplay-js-sdk' {
					
}

declare module 'npm$namespace$Stamplay' {
		declare export interface IStamplayModel {
		signup({}: <<UNKNOWN PARAM FORMAT>>): PromisesAPlus.Thenable<any>,
		new (): IStamplayModel,
		get(property: string): any,
		set(property: string, value: any): void,
		unset(property: string): void,
		fetch(id: any): PromisesAPlus.Thenable<any>,
		destroy(): PromisesAPlus.Thenable<any>,
		save({}?: <<UNKNOWN PARAM FORMAT>>): PromisesAPlus.Thenable<any>,
		upVote(): PromisesAPlus.Thenable<any>
	}

	declare export interface IStamplayObject {
		Model: IStamplayModel,
		Collection: any
	}

	declare export interface StamplayStatic {
		init(appId: string): void,
		User(): IStamplayObject,
		Cobject(object: string): IStamplayObject
	}

			
}

declare module 'Stamplay' {
					declare module.exports: undefined


}