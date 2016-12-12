

declare module 'soap' {
		declare interface Security {
		
	}

	declare interface Client {
		setSecurity(s: Security): void,
		[method: string]: (
		args: any, fn: (err: any, result: any) => void, options?: any, extraHeaders?: any
	) => void,
		addSoapHeader(headJSON: any): void,
		setEndpoint(endpoint: string): void
	}

	declare export interface Server {
		addSoapHeader(soapHeader: any, name: any, namespace: any, xmlns: any): any,
		changeSoapHeader(index: any, soapHeader: any, name: any, namespace: any, xmlns: any): any,
		getSoapHeaders(): any,
		clearSoapHeaders(): any,
		log(type: any, data: any): any
	}

	declare function createClient(wsdlPath: string, options: any, fn: (err: any, client: Client) => void): void

	declare export function listen(server: any, path: string, service: any, wsdl: string): Server

	declare class WSSecurity extends Security {
		constructor(username: string, password: string, options?: any): this
	}

	declare class ClientSSLSecurity extends Security {
		constructor(key: string, cert: string, ca: string, defaults: any): this
	}

	
}