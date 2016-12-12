

declare module 'fontoxml' {
		declare export interface IInvocator {
		documentIds: string[],
		cmsBaseUrl: string,
		editSessionToken: string,
		user?: IUserInfo,
		workflow?: IWorkflowInfo,
		autosave?: boolean,
		heartbeat?: number
	}

	declare export interface IWorkflowInfo {
		id: string,
		displayName: string
	}

	declare export interface IUserInfo {
		roleId: string
	}

	declare export interface IFontoMessageEventData {
		command: string,
		type: string,
		scope: com.fontoxml.IInvocator,
		metadata: any
	}

			
}