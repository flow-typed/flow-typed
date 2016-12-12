

declare module 'opentok' {
				declare class OpenTok  {
		constructor(apiKey: string, apiSecret: string): this;
		createSession(
		options: OpenTok.SessionOptions, callback: (err: Error, session: OpenTok.Session) => void
	): void;
		generateToken(sessionId: string, options: OpenTok.TokenOptions): OpenTok.Token;
		startArchive(
		sessionId: string, options: OpenTok.ArchiveOptions, callback: (err: Error, archive: OpenTok.Archive) => void
	): void;
		stopArchive(
		archiveId: string, callback: (err: Error, archive: OpenTok.Archive) => void
	): void;
		getArchive(
		archiveId: string, callback: (err: Error, archive: OpenTok.Archive) => void
	): void;
		deleteArchive(archiveId: string, callback: (err: Error) => void): void;
		listArchives(
		options: OpenTok.ListArchivesOptions, callback: (err: Error, archives: OpenTok.Archive[], totalCount: number) => void
	): void
	}

	declare module.exports: undefined


}

declare module 'OpenTok' {
	declare export type OutputMode = "composed" | "individual";

	declare export type ArchiveStatus = "available" | "expired" | "failed" | "paused" | "started" | "stopped" | "uploaded";

	declare export type MediaMode = "relayed" | "routed";

	declare export type ArchiveMode = "manual" | "always";

	declare export type Token = string;

	declare export type Role = "subscriber" | "publisher" | "moderator";

	declare export interface Archive {
		createdAt: number,
		duration: string,
		id: string,
		name: string,
		partnerId: string,
		reason: string,
		sessionId: string,
		size: number,
		status: ArchiveStatus,
		hasAudio: boolean,
		hasVideo: boolean,
		outputMode: OutputMode,
		url: string
	}

	declare export interface ArchiveOptions {
		name?: string,
		hasAudio?: boolean,
		hasVideo?: boolean,
		outputMode?: OutputMode
	}

	declare export interface SessionOptions {
		mediaMode?: MediaMode,
		archiveMode?: ArchiveMode,
		location?: string
	}

	declare export interface Session {
		sessionId: string
	}

	declare export interface TokenOptions {
		role?: Role,
		data?: string,
		expireTime?: number
	}

	declare export interface ListArchivesOptions {
		count?: number,
		offset?: number
	}

			
}