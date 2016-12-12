

declare module 'aws-serverless-express' {
			declare export function createServer(
		requestListener: (request: http.IncomingMessage, response: http.ServerResponse) => http.Server, serverListenCallback?: () => any
	): http.Server

	declare export function proxy(server: http.Server, event: any, context: lambda.Context): void

		
}