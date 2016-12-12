

declare module 'passport-strategy' {
				declare class Strategy extends passport$Strategy {
		authenticate(req: express.Request, options?: any): void;
		success(user: any, info: any): void;
		fail(challenge: any, status: number): void;
		fail(status: number): void;
		redirect(url: string, status?: number): void;
		pass(): void;
		error(err: Error): void
	}

	
}