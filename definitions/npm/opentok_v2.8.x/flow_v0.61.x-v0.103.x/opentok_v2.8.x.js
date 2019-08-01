// @flow

declare module 'opentok' {

  // https://tokbox.com/developer/sdks/node/reference/OpenTok.html#createSession
  declare export type SessionOptions = {|
    location?: string,
    mediaMode?: 'routed' | 'relayed',
    archiveMode?: 'always' | 'manual'
  |};

  // https://tokbox.com/developer/sdks/node/reference/Session.html
  declare export type Session = {
    sessionId: string
  };

  // https://tokbox.com/developer/sdks/node/reference/OpenTok.html#generateToken
  declare export type GenerateTokenOptions = {|
    role?: 'subscriber' | 'publisher' | 'moderator',
    expireTime?: number,
    data?: string,
    initialLayoutClassList?: Array<string>
  |};

  declare export type Layout = {|
    type: string,
    stylesheet?: string
  |};

  // https://tokbox.com/developer/sdks/node/reference/OpenTok.html#setStreamClassLists
  declare export type StreamLayoutClassItem = {|
    id: string,
    layoutClassList?: Array<string>
  |};

  // https://tokbox.com/developer/sdks/node/reference/OpenTok.html#getArchive
  declare export type ListArchivesOptions = {|
    count?: number,
    offset?: number,
    sessionId?: string
  |};

  // https://tokbox.com/developer/sdks/node/reference/OpenTok.html#startArchive
  declare export type ArchiveOutputMode = 'composed' | 'individual';
  declare export type StartArchiveOptions = {|
    name?: string,
    hasAudio?: boolean,
    hasVideo?: boolean,
    outputMode?: ArchiveOutputMode,
    layout?: Layout
  |};

  // https://tokbox.com/developer/sdks/node/reference/OpenTok.html#dial
  declare export type DialOptions = {|
    headers?: {[string]: any},
    auth?: {
      username: string,
      password: string
    },
    secure?: boolean
  |};
  declare export type SipInterconnect = {
    id: string,
    connectionId: string,
    streamId: string
  };

  // https://tokbox.com/developer/sdks/node/reference/Archive.html
  declare export class Archive {
    createdAt: number;
    duration: string;
    id: string;
    name: string;
    partnerId: string;
    reason: string;
    sessionId: string;
    size: number;
    status: 'available' | 'expired' | 'failed' | 'paused' | 'started' | 'stopped' | 'uploaded';
    hasAudio: boolean;
    hasVideo: boolean;
    outputMode: ArchiveOutputMode;
    url: ?string;
    delete(callback: (?Error) => any): void;
    stop(callback: (?Error, ?Archive) => any): void;
  }

  // https://tokbox.com/developer/sdks/node/reference/Broadcast.html
  declare export class Broadcast {
    createdAt: number;
    stop(callback: (?Error, ?Broadcast) => any): void;
  }
  declare export type BroadcastRtmpOutput = {|
    id?: string,
    serverUrl: string,
    streamName: string,
  |};
  declare export type StartBroadcastOptions = {|
    outputs: {
      hls?: {},
      rtmp?: Array<BroadcastRtmpOutput>,
    },
    maxDuration?: number,
    resolution?: string,
    layout?: Layout
  |};

  // https://tokbox.com/developer/sdks/node/reference/Stream.html
  declare export class Stream {
    id: string;
    name?: string;
    layoutClassList: Array<string>;
    videoType: string;
  }

  // https://tokbox.com/developer/sdks/node/reference/OpenTok.html
  declare export default class OpenTok {
    constructor(apiKey: string, apiSecret: string): void;
    createSession(options: SessionOptions, callback: (error: ?Error, session: ?Session) => any): void;
    deleteArchive(archiveId: string, callback: (error: ?Error) => any): void;
    dial(sessionId: string, token: string, sipUri: string, options?: DialOptions): SipInterconnect;
    forceDisconnect(sessionId: string, connectionId: string, callback: (error: ?Error) => any): void;
    generateToken(sessionId: string, options?: GenerateTokenOptions): string;
    setBroadcastLayout(broadcastId: string, type: string, stylesheet: ?string, callback: (?Error) => any): void;
    setStreamClassLists(sessionId: string, classListArray: ?Array<StreamLayoutClassItem>, callback: (?Error) => any): void;
    signal(sessionId: string, connectionId: string, payload: Object, callback: (?Error, ?Archive) => any): void;
    getArchive(archiveId: string, callback: (?Error, ?Archive) => any): void;
    getBroadcast(broadcastId: string, callback: (?Error, ?Broadcast) => any): void;
    getStream(sessionId: string, streamId: string, callback: (?Error, ?Stream) => any): void;
    setLayout(archiveId: string, type: string, stylesheet: ?string, callback: (?Error) => any): void;
    listArchives(options: ListArchivesOptions, callback: (?Error, ?Array<Archive>) => any): void;
    listStreams(sessionId: string, callback: (?Error, ?Array<Stream>) => any): void;
    startArchive(sessionId: string, options: StartArchiveOptions, callback: (?Error, ?Archive) => any): void;
    startBroadcast(sessionId: string, options: StartBroadcastOptions, callback: (?Error, ?Broadcast) => any): void;
    stopArchive(archiveId: string, callback: (?Error, ?Archive) => any): void;
    stopBroadcast(sessionId: string, callback: (?Error, ?Broadcast) => any): void;
  }
}
