

declare module 'easy-xapi-supertest' {
		declare export interface BodyAgent {
		send(data: Object): any,
		attach(arg1: any, arg2?: any): any
	}

	declare export interface Agent {
		get(url: string): any,
		delete(url: string): any,
		post(url: string): BodyAgent,
		patch(url: string): BodyAgent,
		put(url: string): BodyAgent
	}

	declare interface getAgent {
		(...args: any[]): Agent
	}

	declare export function getAgentFactory(app: express.Application, transform?: Function): getAgent

		
}