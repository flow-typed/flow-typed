/**
 * Based on the TypeScript definition included in discord.js@11.3.0, which can
 * be found at
 * <https://github.com/zajrik/discord.js-typings/blob/249c4b9/index.d.ts>.
 */
declare module 'discord.js' {
  declare export var version: string;

  declare class Attachment {
    constructor(file: BufferResolvable | stream$Stream, name?: string): this;
    attachment: BufferResolvable | stream$Stream;
    name: string;
    setAttachment(file: BufferResolvable | stream$Stream, name: string): this;
    setFile(attachment: BufferResolvable | stream$Stream): this;
    setName(name: string): this;
  }

  declare class AudioPlayer extends events$EventEmitter {
    constructor(voiceConnection: VoiceConnection): this;
    dispatcher: StreamDispatcher;
    opusEncoder: Object;
    prism: Object;
    transcoder: Object;
    voiceConnection: VoiceConnection;
    setBitrate(value: number | 'auto'): void;
  }

  declare class BaseOpus {
    constructor(options?: { bitrate?: number, fec?: boolean, plp?: number }): this;
    bitrate: number;
    options: Object;
  }

  declare export class CategoryChannel extends GuildChannel {
    +children: Collection<Snowflake, GuildChannel>;
  }

  declare export class Channel {
    constructor(client: Client, data: Object): this;
    client: Client;
    createdAt: Date;
    createdTimestamp: number;
    id: Snowflake;
    type: 'dm' | 'group' | 'text' | 'voice' | 'category';
    delete(): Promise<Channel>;
  }

  declare export class Client extends events$EventEmitter {
    constructor(options?: ClientOptions): this;
    broadcasts: VoiceBroadcast[];
    browser: boolean;
    channels: Collection<Snowflake, Channel>;
    emojis: Collection<Snowflake, Emoji>;
    guilds: Collection<Snowflake, Guild>;
    options: ClientOptions;
    ping: number;
    pings: number[];
    presences: Collection<Snowflake, Presence>;
    readyAt: Date;
    readyTimestamp: number;
    shard: ShardClientUtil;
    status: number;
    token: string;
    uptime: number;
    user: ClientUser;
    users: Collection<Snowflake, User>;
    voiceConnections: Collection<Snowflake, VoiceConnection>;
    clearInterval(interval: Timer): void;
    clearTimeout(timeout: Timer): void;
    createVoiceBroadcast(): VoiceBroadcast;
    destroy(): Promise<void>;
    fetchApplication(id?: Snowflake): Promise<OAuth2Application>;
    fetchInvite(invite: InviteResolvable): Promise<Invite>;
    fetchUser(id: Snowflake, cache?: boolean): Promise<User>;
    fetchVoiceRegions(): Promise<Collection<string, VoiceRegion>>;
    fetchWebhook(id: Snowflake, token?: string): Promise<Webhook>;
    generateInvite(permissions?: PermissionResolvable[] | number): Promise<string>;
    login(token?: string): Promise<string>;
    setInterval(fn: Function, delay: number, ...args: any[]): Timer;
    setTimeout(fn: Function, delay: number, ...args: any[]): Timer;
    sweepMessages(lifetime?: number): number;
    syncGuilds(guilds?: Guild[] | Collection<Snowflake, Guild>): void;
    on(event: string, listener: Function): this;
    on(event: 'channelCreate', listener: (channel: Channel) => void): this;
    on(event: 'channelDelete', listener: (channel: Channel) => void): this;
    on(event: 'channelPinsUpdate', listener: (channel: Channel, time: Date) => void): this;
    on(event: 'channelUpdate', listener: (oldChannel: Channel, newChannel: Channel) => void): this;
    on(event: 'clientUserGuildSettingsUpdate', listener: (clientUserGuildSettings: ClientUserGuildSettings) => void): this;
    on(event: 'clientUserSettingsUpdate', listener: (clientUserSettings: ClientUserSettings) => void): this;
    on(event: 'debug', listener: (info: string) => void): this;
    on(event: 'disconnect', listener: (event: any) => void): this;
    on(event: 'emojiCreate', listener: (emoji: Emoji) => void): this;
    on(event: 'emojiDelete', listener: (emoji: Emoji) => void): this;
    on(event: 'emojiUpdate', listener: (oldEmoji: Emoji, newEmoji: Emoji) => void): this;
    on(event: 'error', listener: (error: Error) => void): this;
    on(event: 'guildBanAdd', listener: (guild: Guild, user: User) => void): this;
    on(event: 'guildBanRemove', listener: (guild: Guild, user: User) => void): this;
    on(event: 'guildCreate', listener: (guild: Guild) => void): this;
    on(event: 'guildDelete', listener: (guild: Guild) => void): this;
    on(event: 'guildMemberAdd', listener: (member: GuildMember) => void): this;
    on(event: 'guildMemberAvailable', listener: (member: GuildMember) => void): this;
    on(event: 'guildMemberRemove', listener: (member: GuildMember) => void): this;
    on(event: 'guildMembersChunk', listener: (members: GuildMember[], guild: Guild) => void): this;
    on(event: 'guildMemberSpeaking', listener: (member: GuildMember, speaking: boolean) => void): this;
    on(event: 'guildMemberUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
    on(event: 'guildUnavailable', listener: (guild: Guild) => void): this;
    on(event: 'guildUpdate', listener: (oldGuild: Guild, newGuild: Guild) => void): this;
    on(event: 'message', listener: (message: Message) => void): this;
    on(event: 'messageDelete', listener: (message: Message) => void): this;
    on(event: 'messageDeleteBulk', listener: (messages: Collection<Snowflake, Message>) => void): this;
    on(event: 'messageReactionAdd', listener: (messageReaction: MessageReaction, user: User) => void): this;
    on(event: 'messageReactionRemove', listener: (messageReaction: MessageReaction, user: User) => void): this;
    on(event: 'messageReactionRemoveAll', listener: (message: Message) => void): this;
    on(event: 'messageUpdate', listener: (oldMessage: Message, newMessage: Message) => void): this;
    on(event: 'presenceUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
    on(event: 'ready', listener: () => void): this;
    on(event: 'reconnecting', listener: () => void): this;
    on(event: 'resume', listener: (replayed: number) => void): this;
    on(event: 'roleCreate', listener: (role: Role) => void): this;
    on(event: 'roleDelete', listener: (role: Role) => void): this;
    on(event: 'roleUpdate', listener: (oldRole: Role, newRole: Role) => void): this;
    on(event: 'typingStart', listener: (channel: Channel, user: User) => void): this;
    on(event: 'typingStop', listener: (channel: Channel, user: User) => void): this;
    on(event: 'userNoteUpdate', listener: (user: UserResolvable, oldNote: string, newNote: string) => void): this;
    on(event: 'userUpdate', listener: (oldUser: User, newUser: User) => void): this;
    on(event: 'voiceStateUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
    on(event: 'warn', listener: (info: string) => void): this
  }

  declare class ClientDataResolver {
    constructor(client: Client): this;
    resolveBase64(data: Base64Resolvable): string;
    resolveChannel(channel: ChannelResolvable): Channel;
    resolveChannelID(channel: ChannelResolvable): Snowflake;
    resolveColor(color: ColorResolvable): number;
    resolveEmojiIdentifier(emoji: EmojiIdentifierResolvable): string;
    resolveFile(resource: BufferResolvable | stream$Stream): Promise<Buffer>;
    resolveGuild(guild: GuildResolvable): Guild;
    resolveGuildMember(guild: GuildResolvable, user: UserResolvable): GuildMember;
    resolveImage(imge: BufferResolvable | Base64Resolvable): Promise<string>;
    resolveInviteCode(data: InviteResolvable): string;
    resolveString(data: StringResolvable): string;
    resolveUser(user: UserResolvable): User;
    resolveUserID(user: UserResolvable): Snowflake;
    resolveColor(color: ColorResolvable): number;
  }

  declare class ClientManager {
    constructor(client: Client): this;
    client: Client;
    heartbeatInterval: number;
    status: number;
    connectToWebSocket(token: string, resolve: Function, reject: Function): void;
  }

  declare export class ClientUser extends User {
    blocked: Collection<Snowflake, User>;
    email: string;
    friends: Collection<Snowflake, User>;
    guildSettings: Collection<Snowflake, ClientUserGuildSettings>;
    mfaEnabled: boolean;
    mobile: boolean;
    notes: Collection<Snowflake, string>;
    premium: boolean;
    settings: ClientUserSettings;
    verified: boolean;
    acceptInvite(invite: Invite | string): Promise<Guild>;
    addFriend(user?: UserResolvable): Promise<User>;
    createGroupDM(recipients: GroupDMRecipientOptions[]): Promise<GroupDMChannel>;
    createGuild(name: string, region: string, icon?: BufferResolvable | Base64Resolvable): Promise<Guild>;
    fetchMentions(options?: { limit?: number, roles?: boolean, everyone?: boolean, guild?: Guild | Snowflake }): Promise<Message[]>;
    removeFriend(user?: UserResolvable): Promise<User>;
    setActivity(name: string, options?: { url?: string, type?: ActivityType | number }): Promise<ClientUser>;
    setAFK(afk: boolean): Promise<ClientUser>;
    setAvatar(avatar: BufferResolvable | Base64Resolvable): Promise<ClientUser>;
    setEmail(email: string, password: string): Promise<ClientUser>;
    setGame(game: string, streamingURL?: string): Promise<ClientUser>;
    setPassword(newPassword: string, oldPassword: string): Promise<ClientUser>;
    setPresence(data: PresenceData): Promise<ClientUser>;
    setStatus(status: PresenceStatus): Promise<ClientUser>;
    setUsername(username: string, password?: string): Promise<ClientUser>;
  }

  declare class ClientUserChannelOverride {
    constructor(user: User, data: Object): this;
    messageNotifications: GuildChannelMessageNotifications;
    muted: boolean;
  }

  declare class ClientUserGuildSettings {
    constructor(data: Object, guild: Guild): this;

    channelOverrides: Collection<Snowflake, ClientUserChannelOverride>;
    client: Client;
    guildID: Snowflake;
    messageNotifications: GuildChannelMessageNotifications;
    mobilePush: boolean;
    muted: boolean;
    suppressEveryone: boolean;
    update(name: string, value: any): Promise<Object>;
  }

  declare export class ClientUserSettings {
    constructor(user: User, data: Object): this;
    convertEmoticons: boolean;
    defaultGuildsRestricted: boolean;
    detectPlatformAccounts: boolean;
    developerMode: boolean;
    enableTTSCommand: boolean;
    explicitContentFilter: 'DISABLED' | 'NON_FRIENDS' | 'FRIENDS_AND_NON_FRIENDS' | string;
    friendsSources: { all: boolean, mutualGuilds: boolean, mutualFriends: boolean };
    guildsPositions: Snowflake[];
    inlineAttachmentMedia: boolean;
    inlineEmbedMedia: boolean;
    locale: string;
    messageDisplayCompact: boolean;
    renderReactions: boolean;
    restrictedGuilds: Snowflake[];
    showCurrentGame: boolean;
    status: PresenceStatus;
    theme: string;
    addRestrictedGuild(guild: Guild): Promise<Guild>;
    removeRestrictedGuild(guild: Guild): Promise<Guild>;
    setGuildPosition(guild: Guild, position: number, relative?: boolean): Promise<Guild>;
    update(name: string, value: any): Promise<Object>;
  }

  declare class ClientVoiceManager {
    constructor(client: Client): this;
    client: Client;
    connections: Collection<Snowflake, VoiceConnection>;
    joinChannel(channel: VoiceChannel): Promise<VoiceConnection>;
  }

  declare export class Collection<K, V> extends Map<K, V> {
    array(): V[];
    clone(): Collection<K, V>;
    concat(...collections: Collection<K, V>[]): Collection<K, V>;
    deleteAll(): Promise<V>[];
    equals(collection: Collection<any, any>): boolean;
    every(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): boolean;
    exists(prop: $Enum<V>, value: any): boolean;
    filter(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): Collection<K, V>;
    filterArray(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): V[];
    find(prop: $Enum<V>, value: any): V;
    find(fn: (value: V, key: K, collection: Collection<K, V>) => boolean): V;
    findAll(prop: $Enum<V>, value: any): V[];
    findKey(prop: $Enum<V>, value: any): K;
    findKey(fn: (value: V, key: K, collection: Collection<K, V>) => boolean): K;
    first(): V;
    first(count: number): V[];
    firstKey(): K;
    firstKey(count: number): K[];
    keyArray(): K[];
    last(): V;
    last(count: number): V[];
    lastKey(): K;
    lastKey(count: number): K[];
    map<T>(fn: (value: V, key: K, collection: Collection<K, V>) => T, thisArg?: any): T[];
    random(): V;
    random(count: number): V[];
    randomKey(): K;
    randomKey(count: number): K[];
    reduce<T>(fn: (accumulator: any, value: V, key: K, collection: Collection<K, V>) => T, initialValue?: any): T;
    some(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): boolean;
    sort(compareFunction?: (a: V, b: V, c?: K, d?: K) => number): Collection<K, V>;
  }

  declare class Collector<K, V> extends events$EventEmitter {
    constructor(client: Client, filter: CollectorFilter, options?: CollectorOptions): this;

    client: Client;
    collected: Collection<K, V>;
    ended: boolean;
    filter: CollectorFilter;
    next: Promise<V>;
    +options: CollectorOptions;
    stop(reason?: string): void;

    listener: Function;
    cleanup(): void;
    handle(...args: any[]): CollectorHandler<K, V>;
    postCheck(...args: any[]): string | null;

    // on(event: 'collect', listener: (element: V, collector: Collector<K, V>) => void): this;
    // on(event: 'end', listener: (collected: Collection<K, V>, reason: string) => void): string;
  }

  declare class DiscordAPIError extends Error {
    constructor(error: Object): this;
    code: number;
    path: string;
  }

  declare export class DMChannel extends Channel mixins PartialTextBasedChannelFields, TextBasedChannelFields {
    constructor(client: Client, data: Object): this;
    lastMessageID: Snowflake;
    messages: Collection<Snowflake, Message>;
    recipient: User;
    toString(): string;
  }

  declare export class Emoji {
    constructor(guild: Guild, data: Object): this;
    animated: boolean;
    client: Client;
    createdAt: Date;
    createdTimestamp: number;
    guild: Guild;
    id: Snowflake;
    identifier: string;
    managed: boolean;
    name: string;
    requiresColons: boolean;
    roles: Collection<Snowflake, Role>;
    url: string;
    addRestrictedRole(role: Role): Promise<Emoji>;
    addRestrictedRoles(roles: Role[]): Promise<Emoji>;
    edit(data: EmojiEditData, reason?: string): Promise<Emoji>;
    equals(other: Emoji | Object): boolean;
    removeRestrictedRole(role: Role): Promise<Emoji>;
    removeRestrictedRoles(roles: Role[]): Promise<Emoji>;
    setName(name: string, reason?: string): Promise<Emoji>;
    toString(): string;
  }

  declare export class Game {
    constructor(data: Object): this;
    name: string;
    streaming: boolean;
    type: number;
    url: string;
    equals(game: Game): boolean;
  }

  declare export class GroupDMChannel extends Channel mixins PartialTextBasedChannelFields, TextBasedChannelFields {
    constructor(client: Client, data: Object): this;
    applicationID: string;
    icon: string;
    lastMessageID: string;
    managed: boolean;
    messages: Collection<Snowflake, Message>;
    name: string;
    nicks: Collection<Snowflake, string>;
    owner: User;
    ownerID: string;
    recipients: Collection<Snowflake, User>;
    addUser(accessTokenOrID: UserResolvable | string, nick?: string): Promise<GroupDMChannel>;
    equals(channel: GroupDMChannel): boolean;
    setIcon(icon: Base64Resolvable | BufferResolvable): Promise<GroupDMChannel>;
    toString(): string;
  }

  declare export class Guild {
    constructor(client: Client, data: Object): this;
    afkChannel: VoiceChannel;
    afkChannelID: string;
    afkTimeout: number;
    applicationID: string;
    available: boolean;
    channels: Collection<Snowflake, GuildChannel>;
    client: Client;
    createdAt: Date;
    createdTimestamp: number;
    defaultChannel: TextChannel;
    defaultRole: Role;
    embedEnabled: boolean;
    emojis: Collection<Snowflake, Emoji>;
    explicitContentFilter: number;
    features: string[];
    icon: string;
    iconURL: string;
    id: Snowflake;
    joinedAt: Date;
    joinedTimestamp: number;
    large: boolean;
    me: GuildMember;
    memberCount: number;
    members: Collection<Snowflake, GuildMember>;
    messageNotifications: MessageNotifications;
    mobilePush: boolean;
    muted: boolean;
    name: string;
    nameAcronym: string;
    owner: GuildMember;
    ownerID: string;
    position: number;
    presences: Collection<Snowflake, Presence>;
    region: string;
    roles: Collection<Snowflake, Role>;
    splash: string;
    splashURL: string;
    suppressEveryone: boolean;
    systemChannel: GuildChannel;
    systemChannelID: Snowflake;
    verificationLevel: number;
    voiceConnection: VoiceConnection;
    acknowledge(): Promise<Guild>;
    addMember(user: UserResolvable, options: AddGuildMemberOptions): Promise<GuildMember>;
    allowDMs(allow: boolean): Promise<Guild>;
    ban(user: UserResolvable, options?: BanOptions | number | string): Promise<GuildMember | User | string>;
    createChannel(name: string, type?: 'category' | 'text' | 'voice', overwrites?: PermissionOverwrites[] | Object[], reason?: string): Promise<CategoryChannel | TextChannel | VoiceChannel>;
    createEmoji(attachment: BufferResolvable | Base64Resolvable, name: string, roles?: Collection<Snowflake, Role> | Role[], reason?: string): Promise<Emoji>;
    createRole(data?: RoleData, reason?: string): Promise<Role>;
    delete(): Promise<Guild>;
    deleteEmoji(emoji: Emoji | string, reason?: string): Promise<void>;
    edit(data: GuildEditData, reason?: string): Promise<Guild>;
    equals(guild: Guild): boolean;
    fetchAuditLogs(options?: GuildAuditLogsFetchOptions): Promise<GuildAuditLogs>;
    fetchBans(): Promise<Collection<Snowflake, User>>;
    fetchInvites(): Promise<Collection<Snowflake, Invite>>;
    fetchMember(user: UserResolvable, cache?: boolean): Promise<GuildMember>;
    fetchMembers(query?: string, limit?: number): Promise<Guild>;
    fetchVoiceRegions(): Promise<Collection<string, VoiceRegion>>;
    fetchWebhooks(): Promise<Collection<Snowflake, Webhook>>;
    leave(): Promise<Guild>;
    member(user: UserResolvable): GuildMember;
    pruneMembers(days: number, dry?: boolean, reason?: string): Promise<number>;
    search(options?: MessageSearchOptions): Promise<MessageSearchResult>;
    setAFKChannel(afkChannel: ChannelResolvable, reason?: string): Promise<Guild>;
    setAFKTimeout(afkTimeout: number, reason?: string): Promise<Guild>;
    setChannelPosition(channel: string | GuildChannel, position: number, relative?: boolean): Promise<Guild>;
    setChannelPositions(channelPositions: ChannelPosition[]): Promise<Guild>;
    setExcplicitContentFilter(explicitContentFilter: number, reason?: string): Promise<Guild>;
    setIcon(icon: Base64Resolvable, reason?: string): Promise<Guild>;
    setName(name: string, reason?: string): Promise<Guild>;
    setOwner(owner: GuildMemberResolvable, reason?: string): Promise<Guild>;
    setPosition(position: number, relative?: boolean): Promise<Guild>;
    setRegion(region: string, reason?: string): Promise<Guild>;
    setRolePosition(role: string | Role, position: number, relative?: boolean): Promise<Guild>;
    setSplash(splash: Base64Resolvable, reason?: string): Promise<Guild>;
    setSystemChannel(systemChannel: ChannelResolvable, reason?: string): Promise<Guild>;
    setVerificationLevel(verificationLevel: number, reason?: string): Promise<Guild>;
    sync(): void;
    toString(): string;
    unban(user: UserResolvable, reason?: string): Promise<User>;
  }

  declare export class GuildAuditLogs {
    constructor(guild: Guild, data: Object): this;
    entries: Collection<Snowflake, GuildAuditLogsEntry>;

    static Actions: GuildAuditLogsActions;
    static Targets: GuildAuditLogsTargets;
    static Entry: typeof GuildAuditLogsEntry;
    static actionType(action: number): GuildAuditLogsActionType;
    static build(...args: any[]): Promise<GuildAuditLogs>;
    static targetType(target: number): GuildAuditLogsTarget;
  }

  declare class GuildAuditLogsEntry {
    constructor(logs: GuildAuditLogs, guild: Guild, data: Object): this;
    action: GuildAuditLogsAction;
    actionType: GuildAuditLogsActionType;
    changes: AuditLogChange[];
    createdAt: Date;
    createdTimestamp: number;
    executor: User;
    extra: Object | Role | GuildMember;
    id: Snowflake;
    reason: string;
    target: Guild | User | Role | Emoji | Invite | Webhook;
    targetType: GuildAuditLogsTarget;
  }

  declare export class GuildChannel extends Channel {
    constructor(guild: Guild, data: Object): this;
    calculatedPosition: number;
    deletable: boolean;
    guild: Guild;
    messageNotifications: GuildChannelMessageNotifications;
    muted: boolean;
    name: string;
    +parent: CategoryChannel;
    parentID: Snowflake;
    permissionOverwrites: Collection<Snowflake, PermissionOverwrites>;
    position: number;
    clone(name?: string, withPermissions?: boolean, withTopic?: boolean, reason?: string): Promise<GuildChannel>;
    createInvite(options?: InviteOptions, reason?: string): Promise<Invite>;
    delete(reason?: string): Promise<GuildChannel>;
    edit(data: ChannelData, reason?: string): Promise<GuildChannel>;
    equals(channel: GuildChannel): boolean;
    overwritePermissions(userOrRole: RoleResolvable | UserResolvable, options: PermissionOverwriteOptions, reason?: string): Promise<void>;
    permissionsFor(member: GuildMemberResolvable): Permissions;
    setName(name: string, reason?: string): Promise<GuildChannel>;
    setParent(parent: ChannelResolvable, reason?: string): Promise<GuildChannel>;
    setPosition(position: number, relative?: boolean): Promise<GuildChannel>;
    setTopic(topic: string, reason?: string): Promise<GuildChannel>;
    toString(): string;
  }

  declare export class GuildMember mixins PartialTextBasedChannelFields {
    constructor(guild: Guild, data: Object): this;
    bannable: boolean;
    client: Client;
    colorRole: Role;
    deaf: boolean;
    displayColor: number;
    displayHexColor: string;
    displayName: string;
    guild: Guild;
    highestRole: Role;
    hoistRole: Role;
    id: Snowflake;
    joinedAt: Date;
    joinedTimestamp: number;
    kickable: boolean;
    lastMessageID: string;
    mute: boolean;
    nickname: string;
    permissions: Permissions;
    presence: Presence;
    roles: Collection<Snowflake, Role>;
    selfDeaf: boolean;
    selfMute: boolean;
    serverDeaf: boolean;
    serverMute: boolean;
    speaking: boolean;
    user: User;
    voiceChannel: VoiceChannel;
    voiceChannelID: string;
    voiceSessionID: string;
    addRole(role: Role | Snowflake, reason?: string): Promise<GuildMember>;
    addRoles(roles: Collection<Snowflake, Role> | Role[] | Snowflake[], reason?: string): Promise<GuildMember>;
    ban(options?: BanOptions | number | string): Promise<GuildMember>;
    createDM(): Promise<DMChannel>;
    deleteDM(): Promise<DMChannel>;
    edit(data: Object, reason?: string): Promise<GuildMember>;
    hasPermission(permission: PermissionResolvable | PermissionResolvable[], explicit?: boolean, checkAdmin?: boolean, checkOwner?: boolean): boolean;
    hasPermissions(permission: PermissionResolvable[], explicit?: boolean): boolean;
    kick(reason?: string): Promise<GuildMember>;
    missingPermissions(permissions: PermissionResolvable[], explicit?: boolean): PermissionResolvable[];
    permissionsIn(channel: ChannelResolvable): Permissions;
    removeRole(role: Role | Snowflake, reason?: string): Promise<GuildMember>;
    removeRoles(roles: Collection<Snowflake, Role> | Role[] | Snowflake[], reason?: string): Promise<GuildMember>;
    setDeaf(deaf: boolean, reason?: string): Promise<GuildMember>;
    setMute(mute: boolean, reason?: string): Promise<GuildMember>;
    setNickname(nickname: string, reason?: string): Promise<GuildMember>;
    setRoles(roles: Collection<Snowflake, Role> | Role[] | Snowflake[], reason?: string): Promise<GuildMember>;
    setVoiceChannel(voiceChannel: ChannelResolvable): Promise<GuildMember>;
    toString(): string;
  }

  declare export class Invite {
    constructor(client: Client, data: Object): this;
    channel: GuildChannel | PartialGuildChannel;
    client: Client;
    code: string;
    createdAt: Date;
    createdTimestamp: number;
    expiresAt: Date;
    expiresTimestamp: number;
    guild: Guild | PartialGuild;
    inviter: User;
    maxAge: number;
    maxUses: number;
    memberCount: number;
    presenceCount: number;
    temporary: boolean;
    textChannelCount: number;
    url: string;
    uses: number;
    voiceChannelCount: number;
    delete(reason?: string): Promise<Invite>;
    toString(): string;
  }

  declare export class Message {
    constructor(channel: TextChannel | DMChannel | GroupDMChannel, data: Object, client: Client): this;
    attachments: Collection<Snowflake, MessageAttachment>;
    author: User;
    channel: TextChannel | DMChannel | GroupDMChannel;
    cleanContent: string;
    client: Client;
    content: string;
    createdAt: Date;
    createdTimestamp: number;
    deletable: boolean;
    editable: boolean;
    editedAt: Date;
    editedTimestamp: number;
    edits: Message[];
    embeds: MessageEmbed[];
    guild: Guild;
    hit: boolean;
    id: Snowflake;
    member: GuildMember;
    mentions: MessageMentions;
    nonce: string;
    pinnable: boolean;
    pinned: boolean;
    reactions: Collection<Snowflake, MessageReaction>;
    system: boolean;
    tts: boolean;
    type: string;
    webhookID: Snowflake;
    acknowledge(): Promise<Message>;
    awaitReactions(filter: CollectorFilter, options?: AwaitReactionsOptions): Promise<Collection<Snowflake, MessageReaction>>;
    clearReactions(): Promise<Message>;
    createReactionCollector(filter: CollectorFilter, options?: ReactionCollectorOptions): ReactionCollector;
    delete(timeout?: number): Promise<Message>;
    edit(content: StringResolvable, options?: MessageEditOptions | RichEmbed): Promise<Message>;
    editCode(lang: string, content: StringResolvable): Promise<Message>;
    equals(message: Message, rawData: Object): boolean;
    fetchWebhook(): Promise<Webhook>;
    isMemberMentioned(member: GuildMember | User): boolean;
    isMentioned(data: GuildChannel | User | Role | Snowflake): boolean;
    pin(): Promise<Message>;
    react(emoji: string | Emoji | ReactionEmoji): Promise<MessageReaction>;
    reply(content?: StringResolvable, options?: MessageOptions): Promise<Message | Message[]>;
    reply(options?: MessageOptions): Promise<Message | Message[]>;
    toString(): string;
    unpin(): Promise<Message>;
  }

  declare export class MessageAttachment {
    constructor(message: Message, data: Object): this;
    client: Client;
    filename: string;
    filesize: number;
    height: number;
    id: Snowflake;
    message: Message;
    proxyURL: string;
    url: string;
    width: number;
  }

  declare export class MessageCollector extends Collector<Snowflake, Message> {
    constructor(channel: TextChannel | DMChannel | GroupDMChannel, filter: CollectorFilter, options?: MessageCollectorOptions): this;
    channel: Channel;
    options: MessageCollectorOptions;
    received: number;

    cleanup(): void;
    handle(message: Message): CollectorHandler<Snowflake, Message>;
    postCheck(): string;
  }

  declare export class MessageEmbed {
    constructor(message: Message, data: Object): this;
    author: MessageEmbedAuthor;
    client: Client;
    color: number;
    createdAt: Date;
    createdTimestamp: number;
    description: string;
    fields: MessageEmbedField[];
    footer: MessageEmbedFooter;
    hexColor: string;
    image: MessageEmbedImage;
    message: Message;
    provider: MessageEmbedProvider;
    thumbnail: MessageEmbedThumbnail;
    title: string;
    type: string;
    url: string;
    video: MessageEmbedVideo;
  }

  declare export class MessageEmbedAuthor {
    constructor(embed: MessageEmbed, data: Object): this;
    embed: MessageEmbed;
    iconURL: string;
    name: string;
    url: string;
  }

  declare export class MessageEmbedField {
    constructor(embed: MessageEmbed, data: Object): this;
    embed: MessageEmbed;
    inline: boolean;
    name: string;
    value: string;
  }

  declare export class MessageEmbedFooter {
    constructor(embed: MessageEmbed, data: Object): this;
    embed: MessageEmbed;
    iconURL: string;
    proxyIconURL: string;
    text: string;
  }

  declare export class MessageEmbedImage {
    constructor(embed: MessageEmbed, data: Object): this;
    embed: MessageEmbed;
    height: number;
    proxyURL: string;
    url: string;
    width: number;
  }

  declare export class MessageEmbedProvider {
    constructor(embed: MessageEmbed, data: Object): this;
    embed: MessageEmbed;
    name: string;
    url: string;
  }

  declare export class MessageEmbedThumbnail {
    constructor(embed: MessageEmbed, data: Object): this;
    embed: MessageEmbed;
    height: number;
    proxyURL: string;
    url: string;
    width: number;
  }

  declare export class MessageEmbedVideo {
    constructor(embed: MessageEmbed, data: Object): this;
    embed: MessageEmbed;
    height: number;
    url: string;
    width: number;
  }

  declare export class MessageMentions {
    channels: Collection<Snowflake, TextChannel>;
    everyone: boolean;
    members: Collection<Snowflake, GuildMember>;
    roles: Collection<Snowflake, Role>;
    users: Collection<Snowflake, User>;
    CHANNELS_PATTERN: RegExp;
    EVERYONE_PATTERN: RegExp;
    ROLES_PATTERN: RegExp;
    USERS_PATTERN: RegExp;
  }

  declare export class MessageReaction {
    constructor(message: Message, emoji: Object, count: number, me: boolean): this;
    count: number;
    emoji: Emoji | ReactionEmoji;
    me: boolean;
    message: Message;
    users: Collection<string, User>;
    fetchUsers(limit?: number, options?: { after?: number, before?: number }): Promise<Collection<Snowflake, User>>;
    remove(user?: UserResolvable): Promise<MessageReaction>;
  }

  declare export class OAuth2Application {
    constructor(client: Client, data: Object): this;
    bot: Object;
    botPublic: boolean;
    botRequireCodeGrant: boolean;
    client: Client;
    createdAt: Date;
    createdTimestamp: number;
    description: string;
    flags: number;
    icon: string;
    iconURL: string;
    id: Snowflake;
    name: string;
    owner: User;
    redirectURIs: string[];
    rpcApplicationState: boolean;
    rpcOrigins: string[];
    secret: string;
    reset(): OAuth2Application;
    toString(): string;
  }

  declare export class PartialGuild {
    constructor(client: Client, data: Object): this;
    client: Client;
    icon: string;
    id: Snowflake;
    name: string;
    splash: string;
  }

  declare export class PartialGuildChannel {
    constructor(client: Client, data: Object): this;
    client: Client;
    id: Snowflake;
    name: string;
    type: string;
  }

  declare export class PermissionOverwrites {
    constructor(guildChannel: GuildChannel, data: Object): this;
    allow: number;
    channel: GuildChannel;
    deny: number;
    id: Snowflake;
    type: string;
    delete(reason?: string): Promise<PermissionOverwrites>;
  }

  declare export class Permissions {
    constructor(permissions: number | PermissionResolvable[]): this;
    constructor(member: GuildMember, permissions: number | PermissionResolvable[]): this;
    bitfield: number;
    member: GuildMember;
    add(...permissions: PermissionResolvable[]): this;
    has(
      permission: PermissionResolvable | PermissionResolvable[],
      checkAdmin?: boolean): boolean;
    hasPermission(permission: PermissionResolvable, explicit?: boolean): boolean;
    hasPermissions(permissions: PermissionResolvable[], explicit?: boolean): boolean;
    missing(
      permissions: PermissionResolvable[],
      checkAdmin?: boolean): PermissionResolvable[];
    missingPermissions(
      permissions: PermissionResolvable[],
      checkAdmin?: boolean): PermissionResolvable[];
    remove(...permissions: PermissionResolvable[]): this;
    serialize(checkAdmin?: boolean): PermissionObject;
    ALL: number;
    DEFAULT: number;
    FLAGS: PermissionFlags;
    resolve(permission: PermissionResolvable | PermissionResolvable[]): number;
  }

  declare export class Presence {
    constructor(data: Object): this;
    game: Game;
    status: 'online' | 'offline' | 'idle' | 'dnd';
    equals(presence: Presence): boolean;
  }

  declare export class ReactionCollector extends Collector<Snowflake, MessageReaction>{
    constructor(message: Message, filter: CollectorFilter, options?: ReactionCollectorOptions): this;
    message: Message;
    options: ReactionCollectorOptions;
    total: number;
    users: Collection<Snowflake, User>;
    cleanup(): void;
    handle(reaction: MessageReaction): CollectorHandler<Snowflake, MessageReaction>;
    postCheck(reaction: MessageReaction, user: User): string;
  }

  declare export class ReactionEmoji {
    constructor(reaction: MessageReaction, name: string, id: string): this;
    id: Snowflake;
    identifier: string;
    name: string;
    reaction: MessageReaction;
    toString(): string;
  }

  declare class RequestHandler {
    constructor(restManager: Object): this;
    globalLimit: boolean;
    queue: Object[];
    restManager: Object;
    handle(): void;
    push(request: Object): void;
  }

  declare export class RichEmbed {
    constructor(data?: RichEmbedOptions): this;
    author?: { name: string, url?: string, icon_url?: string };
    color?: number;
    description?: string;
    fields?: { name: string, value: string, inline?: boolean }[];
    file?: Attachment | string | FileOptions;
    footer?: { text?: string, icon_url?: string };
    image?: { url: string, proxy_url?: string, height?: number, width?: number };
    thumbnail?: { url: string, height?: number, width?: number };
    timestamp?: Date;
    title?: string;
    url?: string;
    addBlankField(inline?: boolean): this;
    addField(name: StringResolvable, value: StringResolvable, inline?: boolean): this;
    attachFile(file: Attachment | FileOptions | string): this;
    setAuthor(name: StringResolvable, icon?: string, url?: string): this;
    setColor(color: ColorResolvable): this;
    setDescription(description: StringResolvable): this;
    setFooter(text: StringResolvable, icon?: string): this;
    setImage(url: string): this;
    setThumbnail(url: string): this;
    setTimestamp(timestamp?: Date): this;
    setTitle(title: StringResolvable): this;
    setURL(url: string): this;
  }

  declare export class Role {
    constructor(guild: Guild, data: Object): this;
    calculatedPosition: number;
    client: Client;
    color: number;
    createdAt: Date;
    createdTimestamp: number;
    editable: boolean;
    guild: Guild;
    hexColor: string;
    hoist: boolean;
    id: Snowflake;
    managed: boolean;
    members: Collection<Snowflake, GuildMember>;
    mentionable: boolean;
    name: string;
    permissions: number;
    position: number;
    comparePositionTo(role: Role): number;
    delete(reason?: string): Promise<Role>;
    edit(data: RoleData, reason?: string): Promise<Role>;
    equals(role: Role): boolean;
    hasPermission(
      permission: PermissionResolvable | PermissionResolvable[],
      explicit?: boolean,
      checkAdmin?: boolean): boolean;
    hasPermissions(permissions: PermissionResolvable[], explicit?: boolean): boolean;
    serialize(): PermissionObject;
    setColor(color: string | number, reason?: string): Promise<Role>;
    setHoist(hoist: boolean, reason?: string): Promise<Role>;
    setMentionable(mentionable: boolean, reason?: string): Promise<Role>;
    setName(name: string, reason?: string): Promise<Role>;
    setPermissions(permissions: PermissionResolvable[], reason?: string): Promise<Role>;
    setPosition(position: number, relative?: boolean): Promise<Role>;
    toString(): string;
    comparePositions(role1: Role, role2: Role): number;
  }

  declare class SecretKey {
    constructor(key: Uint8Array): this;
    key: Uint8Array;
  }

  declare class SequentialRequestHandler extends RequestHandler {
    constructor(restManager: Object, endpoint: string): this;
    busy: boolean;
    endpoint: string;
    globalLimit: boolean;
    queue: Object[];
    restManager: Object;
    timeDifference: number;
    execute(item: Object): Promise<Object | Error>;
    handle(): void;
    push(request: Object): void;
  }

  declare export class Shard {
    constructor(manager: ShardingManager, id: number, args?: string[]): this;
    env: Object;
    id: string;
    manager: ShardingManager;
    process: child_process$ChildProcess;
    eval(script: string): Promise<any>;
    fetchClientValue(prop: string): Promise<any>;
    send(message: any): Promise<Shard>;
  }

  declare export class ShardClientUtil {
    constructor(client: Client): this;
    count: number;
    id: number;
    broadcastEval(script: string): Promise<any[]>;
    fetchClientValues(prop: string): Promise<any[]>;
    send(message: any): Promise<void>;
    singleton(client: Client): ShardClientUtil;
  }

  declare export class ShardingManager extends events$EventEmitter {
    constructor(file: string, options?: {
      totalShards?: number | 'auto',
      respawn?: boolean,
      shardArgs?: string[],
      token?: string
    }): this;
    file: string;
    respawn: boolean;
    shardArgs: string[];
    shards: Collection<number, Shard>;
    token: string;
    totalShards: number | string;
    broadcast(message: any): Promise<Shard[]>;
    broadcastEval(script: string): Promise<any[]>;
    createShard(id: number): Promise<Shard>;
    fetchClientValues(prop: string): Promise<any[]>;
    spawn(amount?: number, delay?: number): Promise<Collection<number, Shard>>;

    // on(event: 'launch', listener: (shard: Shard) => void): this;
    // on(event: 'message', listener: (shard: Shard, message: any) => void): this
  }

  declare export class SnowflakeUtil {
    deconstruct(snowflake: Snowflake): DeconstructedSnowflake;
    generate(): Snowflake;
  }

  declare export class StreamDispatcher extends VolumeInterface {
    constructor(player: AudioPlayer, stream: stream$Readable, streamOptions: StreamOptions): this;
    destroyed: boolean;
    passes: number;
    paused: boolean;
    player: AudioPlayer;
    stream: stream$Readable | VoiceBroadcast;
    time: number;
    totalStreamTime: number;
    end(reason?: string): void;
    pause(): void;
    resume(): void;
    setBitrate(bitrate: number | 'auto'): void;
  }

  declare export class TextChannel extends GuildChannel mixins PartialTextBasedChannelFields, TextBasedChannelFields {
    constructor(guild: Guild, data: Object): this;
    lastMessageID: string;
    members: Collection<Snowflake, GuildMember>;
    messages: Collection<Snowflake, Message>;
    nsfw: boolean;
    topic: string;
    createWebhook(name: string, avatar: BufferResolvable, reason?: string): Promise<Webhook>;
    fetchWebhooks(): Promise<Collection<Snowflake, Webhook>>;
  }

  declare export class User {
    constructor(client: Client, data: Object): this;
    avatar: string;
    avatarURL: string;
    bot: boolean;
    client: Client;
    createdAt: Date;
    createdTimestamp: number;
    defaultAvatarURL: string;
    discriminator: string;
    displayAvatarURL: string;
    dmChannel: DMChannel;
    id: Snowflake;
    lastMessageID: string;
    note: string;
    presence: Presence;
    tag: string;
    username: string;
    addFriend(): Promise<User>;
    block(): Promise<User>;
    createDM(): Promise<DMChannel>;
    deleteDM(): Promise<DMChannel>;
    equals(user: User): boolean;
    fetchProfile(): Promise<UserProfile>;
    removeFriend(): Promise<User>;
    setNote(note: string): Promise<User>;
    toString(): string;
    typingDurationIn(channel: ChannelResolvable): number;
    typingIn(channel: ChannelResolvable): boolean;
    typingSinceIn(channel: ChannelResolvable): Date;
    unblock(): Promise<User>;
  }

  declare export class UserConnection {
    constructor(user: User, data: Object): this;
    id: string;
    integrations: Object[];
    name: string;
    revoked: boolean;
    type: string;
    user: User;
  }

  declare export class UserProfile {
    constructor(user: User, data: Object): this;
    client: Client;
    connections: Collection<string, UserConnection>;
    mutualGuilds: Collection<Snowflake, Guild>;
    premium: boolean;
    premiumSince: Date;
    user: User;
  }

  declare export class Util {
    static arraysEqual(a: any[], b: any[]): boolean;
    static cloneObject(obj: Object): Object;
    static convertToBuffer(ab: ArrayBuffer | string): Buffer;
    static escapeMarkdown(text: string, onlyCodeBlock?: boolean, onlyInlineCode?: boolean): string;
    static fetchRecommendedShards(token: string, guildsPerShard?: number): Promise<number>;
    static makeError(obj: { name: string, message: string, stack: string }): Error;
    static makePlainError(err: Error): Object;
    static mergeDefault(def: Object, given: Object): Object;
    static moveElementInArray(array: any[], element: any, newIndex: number, offset?: boolean): number;
    static parseEmoji(text: string): { animated: boolean, name: string, id: string };
    static splitMessage(text: string, options?: SplitOptions): string | string[];
    static str2ab(str: string): ArrayBuffer
  }

  declare export class VoiceBroadcast extends events$EventEmitter {
    constructor(client: Client): this;
    client: Client;
    currentTranscoder: Object;
    dispatchers: StreamDispatcher[];
    prism: Object;
    destroy(): void;
    end(): void;
    pause(): void;
    playArbitraryInput(input: string, options?: StreamOptions): VoiceBroadcast;
    playConvertedStream(stream: stream$Readable, options?: StreamOptions): VoiceBroadcast;
    playFile(file: string, options?: StreamOptions): StreamDispatcher;
    playOpusStream(stream: stream$Readable, options?: StreamOptions): StreamDispatcher;
    playStream(stream: stream$Readable, options?: StreamOptions): VoiceBroadcast;
    resume(): void;

    // on(event: 'string', listener: Function): this;
    // on(event: 'error', listener: (error: Error) => void): this;
    // on(event: 'subscribe', listener: (dispatcher: StreamDispatcher) => void): this;
    // on(event: 'unsubscribe', listener: (dispatcher: StreamDispatcher) => void): this;
    // on(event: 'warn', listener: (warning: string | Error) => void): this
  }

  declare export class VoiceChannel extends GuildChannel {
    constructor(guild: Guild, data: Object): this;
    bitrate: number;
    connection: VoiceConnection;
    full: boolean;
    joinable: boolean;
    members: Collection<Snowflake, GuildMember>;
    speakable: boolean;
    userLimit: number;
    join(): Promise<VoiceConnection>;
    leave(): void;
    setBitrate(bitrate: number, reason?: string): Promise<VoiceChannel>;
    setUserLimit(userLimit: number, reason?: string): Promise<VoiceChannel>;
  }

  declare export class VoiceConnection extends events$EventEmitter {
    constructor(voiceManager: ClientVoiceManager, channel: VoiceChannel): this;

    channel: VoiceChannel;
    client: Client;
    dispatcher: StreamDispatcher;
    player: AudioPlayer;
    prism: Object;
    receivers: VoiceReceiver[];
    speaking: boolean;
    status: number;
    voiceManager: ClientVoiceManager;
    createReceiver(): VoiceReceiver;
    disconnect(): void;
    playArbitraryInput(input: string, options?: StreamOptions): StreamDispatcher;
    playBroadcast(broadcast: VoiceBroadcast, options?: StreamOptions): StreamDispatcher;
    playConvertedStream(stream: stream$Readable, options?: StreamOptions): StreamDispatcher;
    playFile(file: string, options?: StreamOptions): StreamDispatcher;
    playOpusStream(steam: stream$Readable, options?: StreamOptions): StreamDispatcher;
    playStream(stream: stream$Readable, options?: StreamOptions): StreamDispatcher;
    sendVoiceStateUpdate(options: Object): void;
    setSessionID(sessionID: string): void;
    setTokenAndEndpoint(token: string, endpoint: string): void;

    // on(event: 'authenticated', listener: () => void): this;
    // on(event: 'debug', listener: (message: string) => void): this;
    // on(event: 'disconnect', listener: (error: Error) => void): this;
    // on(event: 'error', listener: (error: Error) => void): this;
    // on(event: 'failed', listener: (error: Error) => void): this;
    // on(event: 'newSession', listener: () => void): this;
    // on(event: 'ready', listener: () => void): this;
    // on(event: 'reconnecting', listener: () => void): this;
    // on(event: 'speaking', listener: (user: User, speaking: boolean) => void): this;
    // on(event: 'warn', listener: (warning: string | Error) => void): this
  }

  declare class VoiceConnectionUDPClient extends events$EventEmitter {
    constructor(voiceConnection: VoiceConnection): this;
    discordAddress: string;
    discordPort: number;
    localAddress: string;
    localPort: string;
    socket: any;
    voiceConnection: VoiceConnection;
    findEndpointAddress(): Promise<string>;
    send(packet: Object): Promise<Object>;
  }

  declare export class VoiceReceiver extends events$EventEmitter {
    constructor(connection: VoiceConnection): this;

    destroyed: boolean;
    voiceConnection: VoiceConnection;
    createOpusStream(user: UserResolvable): stream$Readable;
    createPCMStream(user: UserResolvable): stream$Readable;
    destroy(): void;
    recreate(): void;

    // on(event: 'opus', listener: (user: User, buffer: Buffer) => void): this;
    // on(event: 'pcm', listener: (user: User, buffer: Buffer) => void): this;
    // on(event: 'warn', listener: (reason: string, message: string) => void): this
  }

  declare export class VoiceRegion {
    constructor(data: Object): this;
    custom: boolean;
    deprecated: boolean;
    id: string;
    name: string;
    optimal: boolean;
    sampleHostname: string;
    vip: boolean;
  }

  declare class VoiceWebsocket extends events$EventEmitter {
    constructor(voiceConnection: VoiceConnection): this;
    attempts: number;
    client: Client;
    voiceConnection: VoiceConnection;
    ws: any;
    clearHeartbeat(): void;
    connect(): void;
    onClose(): void;
    onError(error: Error): void;
    onMessage(event: any): void;
    onOpen(): void;
    onPacket(packet: Object): void;
    reset(): void;
    send(data: string): Promise<string>;
    sendHeartbeat(): void;
    sendPacket(packet: Object): Promise<string>;
    setHeartbeat(interval: number): void;

    // on(event: 'ready', listener: (packet: Object) => void): this;
    // on(event: 'sessionDescription', listener: (encryptionMode: string, secretKey: SecretKey) => void): this;
    // on(event: 'speaking', listener: (data: Object) => void): this;
    // on(event: 'unknownPacket', listener: (packet: Object) => void): this;
    // on(event: 'warn', listener: (warn: string) => void): this
  }

  declare export class VolumeInterface extends events$EventEmitter {
    constructor(Object?: { volume: number }): this;
    volume: number;
    volumeDecibels: number;
    volumeLogarithmic: number;
    setVolume(volume: number): void;
    setVolumeDecibels(db: number): void;
    setVolumeLogarithmic(value: number): void;

    // on(event: 'debug', listener: (information: string) => void): this;
    // on(event: 'end', listener: (reason: string) => void): this;
    // on(event: 'error', listener: (err: Error) => void): this;
    // on(event: 'speaking', listener: (value: boolean) => void): this;
    // on(event: 'start', listener: () => void): this;
    // on(event: 'volumeChange', listener: (oldVolume: number, newVolume: number) => void): this
  }

  declare export class Webhook {
    constructor(client: Client, dataOrID: Object | string, token: string): this;
    avatar: string;
    channelID: string;
    client: Client;
    guildID: string;
    id: Snowflake;
    name: string;
    owner: User | Object;
    token: string;
    delete(reason?: string): Promise<void>;
    edit(name: string, avatar: BufferResolvable): Promise<Webhook>;
    send(content?: StringResolvable, options?: WebhookMessageOptions | RichEmbed | Attachment): Promise<Message | Message[]>;
    send(options?: WebhookMessageOptions | RichEmbed | Attachment): Promise<Message | Message[]>;
    sendCode(lang: string, content: StringResolvable, options?: WebhookMessageOptions): Promise<Message | Message[]>;
    sendFile(attachment: BufferResolvable, name?: string, content?: StringResolvable, options?: WebhookMessageOptions): Promise<Message>;
    sendMessage(content?: StringResolvable, options?: WebhookMessageOptions): Promise<Message | Message[]>;
    sendMessage(options?: WebhookMessageOptions): Promise<Message | Message[]>;
    sendSlackMessage(body: Object): Promise<void>;
  }

  declare export class WebhookClient extends Webhook {
    constructor(id: string, token: string, options?: ClientOptions): this;

    options: ClientOptions;
    clearInterval(interval: Timer): void;
    clearTimeout(timeout: Timer): void;
    destroy(): void;
    setInterval(fn: Function, delay: number, ...args: any[]): Timer;
    setTimeout(fn: Function, delay: number, ...args: any[]): Timer;
  }

  declare class PartialTextBasedChannelFields {
    lastMessage: Message;
    acknowledge(): Promise<DMChannel | GroupDMChannel | TextChannel>;
    send(content?: StringResolvable, options?: MessageOptions | RichEmbed | Attachment): Promise<Message | Message[]>;
    send(options?: MessageOptions | RichEmbed | Attachment): Promise<Message | Message[]>;
    sendCode(lang: string, content: StringResolvable, options?: MessageOptions): Promise<Message | Message[]>;
    sendEmbed(embed: RichEmbed | RichEmbedOptions, content?: string, options?: MessageOptions): Promise<Message>;
    sendEmbed(embed: RichEmbed | RichEmbedOptions, options?: MessageOptions): Promise<Message>;
    sendFile(attachment: BufferResolvable, name?: string, content?: StringResolvable, options?: MessageOptions): Promise<Message>;
    sendMessage(content?: string, options?: MessageOptions): Promise<Message | Message[]>;
    sendMessage(options?: MessageOptions): Promise<Message | Message[]>;
  }

  declare class TextBasedChannelFields {
    typing: boolean;
    typingCount: number;
    awaitMessages(filter: CollectorFilter, options?: AwaitMessagesOptions): Promise<Collection<string, Message>>;
    bulkDelete(messages: Collection<string, Message>| Message[] | number, filterOld?: boolean): Promise<Collection<string, Message>>;
    createCollector(filter: CollectorFilter, options?: CollectorOptions): MessageCollector;
    createMessageCollector(filter: CollectorFilter, options?: CollectorOptions): MessageCollector;
    fetchMessage(messageID: string): Promise<Message>;
    fetchMessages(options?: ChannelLogsQueryOptions): Promise<Collection<string, Message>>;
    fetchPinnedMessages(): Promise<Collection<string, Message>>;
    search(options?: MessageSearchOptions): Promise<MessageSearchResult>;
    startTyping(count?: number): void;
    stopTyping(force?: boolean): void;
  }

  declare type ActivityType =
    | 'PLAYING'
    | 'STREAMING'
    | 'LISTENING'
    | 'WATCHING';

  declare type AddGuildMemberOptions = {
    accessToken: String,
    nick?: string,
    roles?: Collection<string, Role> | Role[] | string[],
    mute?: boolean,
    deaf?: boolean
  };

  declare type AuditLogChange = {
    key: string,
    old?: any,
    new?: any
  };

  declare type AwaitMessagesOptions = MessageCollectorOptions & {
    errors?: string[]
  };

  declare type AwaitReactionsOptions = ReactionCollectorOptions & {
    errors?: string[]
  };

  declare type BanOptions = {
    days?: number,
    reason?: string
  };

  declare type Base64Resolvable = Buffer | Base64String;

  declare type Base64String = string;

  declare type BufferResolvable = Buffer | string;

  declare type ChannelData = {
    name?: string,
    position?: number,
    topic?: string,
    bitrate?: number,
    userLimit?: number
  };

  declare type ChannelLogsQueryOptions = {
    limit?: number,
    before?: Snowflake,
    after?: Snowflake,
    around?: Snowflake
  };

  declare type ChannelPosition = {
    channel: ChannelResolvable,
    position: number
  };

  declare type ChannelResolvable = Channel | Guild | Message | Snowflake;

  declare type ClientOptions = {
    apiRequestMethod?: string,
    shardId?: number,
    shardCount?: number,
    messageCacheMaxSize?: number,
    messageCacheLifetime?: number,
    messageSweepInterval?: number,
    fetchAllMembers?: boolean,
    disableEveryone?: boolean,
    sync?: boolean,
    restWsBridgeTimeout?: number,
    restTimeOffset?: number,
    disabledEvents?: WSEventType[],
    ws?: WebSocketOptions,
    http?: HTTPOptions
  };

  declare type CollectorHandler<K, V> = {
    key: K,
    value: V
  };

  declare type CollectorFilter = (...args: any[]) => boolean;

  declare type CollectorOptions = {
    time?: number
  };

  declare type ColorResolvable =
    | 'DEFAULT'
    | 'AQUA'
    | 'GREEN'
    | 'BLUE'
    | 'PURPLE'
    | 'GOLD'
    | 'ORANGE'
    | 'RED'
    | 'GREY'
    | 'DARKER_GREY'
    | 'NAVY'
    | 'DARK_AQUA'
    | 'DARK_GREEN'
    | 'DARK_BLUE'
    | 'DARK_PURPLE'
    | 'DARK_GOLD'
    | 'DARK_ORANGE'
    | 'DARK_RED'
    | 'DARK_GREY'
    | 'LIGHT_GREY'
    | 'DARK_NAVY'
    | 'RANDOM'
    | [number, number, number]
    | number
    | string;

  declare type DeconstructedSnowflake = {
    timestamp: number,
    date: Date,
    workerID: number,
    processID: number,
    increment: number,
    binary: string
  };

  declare type EmojiEditData = {
    name?: string,
    roles?: Collection<Snowflake, Role> | Role[] | Snowflake[]
  };

  declare type EmojiIdentifierResolvable = string | Emoji | ReactionEmoji;

  declare type FileOptions = {
    attachment: BufferResolvable,
    name?: string
  };

  declare type GroupDMRecipientOptions = {
    user?: UserResolvable | Snowflake,
    accessToken?: string,
    nick?: string
  };

  declare type GuildAuditLogsAction = $Keys<GuildAuditLogsActions>;

  declare type GuildAuditLogsActions = {
    ALL?: null,
    GUILD_UPDATE?: number,
    CHANNEL_CREATE?: number,
    CHANNEL_UPDATE?: number,
    CHANNEL_DELETE?: number,
    CHANNEL_OVERWRITE_CREATE?: number,
    CHANNEL_OVERWRITE_UPDATE?: number,
    CHANNEL_OVERWRITE_DELETE?: number,
    MEMBER_KICK?: number,
    MEMBER_PRUNE?: number,
    MEMBER_BAN_ADD?: number,
    MEMBER_BAN_REMOVE?: number,
    MEMBER_UPDATE?: number,
    MEMBER_ROLE_UPDATE?: number,
    ROLE_CREATE?: number,
    ROLE_UPDATE?: number,
    ROLE_DELETE?: number,
    INVITE_CREATE?: number,
    INVITE_UPDATE?: number,
    INVITE_DELETE?: number,
    WEBHOOK_CREATE?: number,
    WEBHOOK_UPDATE?: number,
    WEBHOOK_DELETE?: number,
    EMOJI_CREATE?: number,
    EMOJI_UPDATE?: number,
    EMOJI_DELETE?: number,
    MESSAGE_DELETE?: number
  };

  declare type GuildAuditLogsActionType =
    | 'CREATE'
    | 'DELETE'
    | 'UPDATE'
    | 'ALL';

  declare type GuildAuditLogsFetchOptions = {
    before?: Snowflake | GuildAuditLogsEntry,
    after?: Snowflake | GuildAuditLogsEntry,
    limit?: number,
    user?: UserResolvable,
    type?: string | number
  };

  declare type GuildAuditLogsTarget = $Keys<GuildAuditLogsTargets>;

  declare type GuildAuditLogsTargets = {
    ALL?: string,
    GUILD?: string,
    CHANNEL?: string,
    USER?: string,
    ROLE?: string,
    INVITE?: string,
    WEBHOOK?: string,
    EMOJI?: string,
    MESSAGE?: string
  };

	declare type GuildChannelMessageNotifications = MessageNotifications
    & 'INHERIT';

  declare type GuildEditData = {
    name?: string,
    region?: string,
    verificationLevel?: number,
    explicitContentFilter?: number,
    afkChannel?: ChannelResolvable,
    systemChannel?: ChannelResolvable,
    afkTimeout?: number,
    icon?: Base64Resolvable,
    owner?: GuildMemberResolvable,
    splash?: Base64Resolvable
  };

  declare type GuildMemberEditData = {
    nick?: string,
    roles?: Collection<Snowflake, Role> | Role[] | Snowflake[],
    mute?: boolean,
    deaf?: boolean,
    channel?: ChannelResolvable
  };

  declare type GuildMemberResolvable = GuildMember | User;

  declare type GuildResolvable = Guild | Snowflake;

  declare type HTTPOptions = {
    version?: number,
    host?: string,
    cdn?: string
  };

  declare type InviteOptions = {
    temporary?: boolean,
    maxAge?: number,
    maxUses?: number,
    unique?: boolean
  };

  declare type InviteResolvable = string;

  declare type MessageNotifications =
    | 'EVERYTHING'
    | 'MENTIONS'
    | 'NOTHING';

  declare type MessageCollectorOptions = {
    max?: number,
    maxMatches?: number
  } & CollectorOptions;

  declare type MessageEditOptions = {
    embed?: RichEmbedOptions,
    code?: string | boolean
  };

  declare type MessageOptions = {
    tts?: boolean,
    nonce?: string,
    embed?: RichEmbed | RichEmbedOptions,
    disableEveryone?: boolean,
    file?: FileOptions | string,
    files?: FileOptions[] | string[],
    code?: string | boolean,
    split?: boolean | SplitOptions,
    reply?: UserResolvable
  };

  declare type MessageSearchOptions = {
    content?: string,
    maxID?: Snowflake,
    minID?: Snowflake,
    has?:
      | 'link'
      | 'embed'
      | 'file'
      | 'video'
      | 'image'
      | 'sound'
      | '-link'
      | '-embed'
      | '-file'
      | '-video'
      | '-image'
      | '-sound',
    channel?: ChannelResolvable,
    author?: UserResolvable,
    authorType?:
      | 'user'
      | 'bot'
      | 'webhook'
      | '-user'
      | '-bot'
      | '-webhook',
    sortBy?: 'relevant' | 'recent',
    sortOrder?: 'asc' | 'desc',
    contextSize?: number,
    limit?: number,
    offset?: number,
    mentions?: UserResolvable,
    mentionsEveryone?: boolean,
    linkHostname?: string,
    embedProvider?: string,
    embedType?: 'image' | 'video' | 'url' | 'rich',
    attachmentFilename?: string,
    attachmentExtension?: string,
    before?: Date,
    after?: Date,
    during?: Date,
    nsfw?: boolean
  };

  declare type MessageSearchResult = {
    totalResults: number,
    messages: Message[][]
  };

  declare type PermissionFlags = {
    ADMINISTRATOR?: number,
    CREATE_INSTANT_INVITE?: number,
    KICK_MEMBERS?: number,
    BAN_MEMBERS?: number,
    MANAGE_CHANNELS?: number,
    MANAGE_GUILD?: number,
    ADD_REACTIONS?: number,
    VIEW_AUDIT_LOG?: number,
    VIEW_CHANNEL?: number,
    READ_MESSAGES?: number,
    SEND_MESSAGES?: number,
    SEND_TTS_MESSAGES?: number,
    MANAGE_MESSAGES?: number,
    EMBED_LINKS?: number,
    ATTACH_FILES?: number,
    READ_MESSAGE_HISTORY?: number,
    MENTION_EVERYONE?: number,
    USE_EXTERNAL_EMOJIS?: number,
    EXTERNAL_EMOJIS?: number,
    CONNECT?: number,
    SPEAK?: number,
    MUTE_MEMBERS?: number,
    DEAFEN_MEMBERS?: number,
    MOVE_MEMBERS?: number,
    USE_VAD?: number,
    CHANGE_NICKNAME?: number,
    MANAGE_NICKNAMES?: number,
    MANAGE_ROLES?: number,
    MANAGE_ROLES_OR_PERMISSIONS?: number,
    MANAGE_WEBHOOKS?: number,
    MANAGE_EMOJIS?: number
  };

  declare type PermissionObject = {
    ADMINISTRATOR?: boolean,
    CREATE_INSTANT_INVITE?: boolean,
    KICK_MEMBERS?: boolean,
    BAN_MEMBERS?: boolean,
    MANAGE_CHANNELS?: boolean,
    MANAGE_GUILD?: boolean,
    ADD_REACTIONS?: boolean,
    VIEW_AUDIT_LOG?: boolean,
    VIEW_CHANNEL?: number,
    READ_MESSAGES?: boolean,
    SEND_MESSAGES?: boolean,
    SEND_TTS_MESSAGES?: boolean,
    MANAGE_MESSAGES?: boolean,
    EMBED_LINKS?: boolean,
    ATTACH_FILES?: boolean,
    READ_MESSAGE_HISTORY?: boolean,
    MENTION_EVERYONE?: boolean,
    USE_EXTERNAL_EMOJIS?: boolean,
    EXTERNAL_EMOJIS?: boolean,
    CONNECT?: boolean,
    SPEAK?: boolean,
    MUTE_MEMBERS?: boolean,
    DEAFEN_MEMBERS?: boolean,
    MOVE_MEMBERS?: boolean,
    USE_VAD?: boolean,
    CHANGE_NICKNAME?: boolean,
    MANAGE_NICKNAMES?: boolean,
    MANAGE_ROLES?: boolean,
    MANAGE_ROLES_OR_PERMISSIONS?: boolean,
    MANAGE_WEBHOOKS?: boolean,
    MANAGE_EMOJIS?: boolean
  };

  declare type PermissionString =
    | 'ADMINISTRATOR'
    | 'CREATE_INSTANT_INVITE'
    | 'KICK_MEMBERS'
    | 'BAN_MEMBERS'
    | 'MANAGE_CHANNELS'
    | 'MANAGE_GUILD'
    | 'ADD_REACTIONS'
    | 'VIEW_CHANNEL'
    | 'READ_MESSAGES'
    | 'SEND_MESSAGES'
    | 'SEND_TTS_MESSAGES'
    | 'MANAGE_MESSAGES'
    | 'EMBED_LINKS'
    | 'ATTACH_FILES'
    | 'READ_MESSAGE_HISTORY'
    | 'MENTION_EVERYONE'
    | 'USE_EXTERNAL_EMOJIS'
    | 'EXTERNAL_EMOJIS'
    | 'CONNECT'
    | 'SPEAK'
    | 'MUTE_MEMBERS'
    | 'DEAFEN_MEMBERS'
    | 'MOVE_MEMBERS'
    | 'USE_VAD'
    | 'CHANGE_NICKNAME'
    | 'MANAGE_NICKNAMES'
    | 'MANAGE_ROLES'
    | 'MANAGE_ROLES_OR_PERMISSIONS'
    | 'MANAGE_WEBHOOKS'
    | 'MANAGE_EMOJIS';

  declare type PermissionOverwriteOptions = PermissionObject;

  declare type PermissionResolvable = PermissionString | number;

  declare type PresenceData = {
    status?: PresenceStatus,
    afk?: boolean,
    game?: {
      name?: string,
      url?: string
    }
  };

  declare type PresenceStatus = 'online' | 'idle' | 'invisible' | 'dnd';

  declare type ReactionCollectorOptions = CollectorOptions & {
    max?: number,
    maxEmojis?: number,
    maxUsers?: number
  };

  declare type RichEmbedOptions = {
    title?: string,
    description?: string,
    url?: string,
    timestamp?: Date,
    color?: number | string,
    fields?: {
      name: string,
      value: string,
      inline?: boolean
    }[],
    file?: Attachment | string | FileOptions,
    author?: {
      name: string,
      url?: string,
      icon_url?: string
    },
    thumbnail?: {
      url: string,
      height?: number,
      width?: number
    },
    image?: {
      url: string,
      proxy_url?: string,
      height?: number,
      width?: number
    },
    video?: {
      url: string,
      height: number,
      width: number
    },
    footer?: {
      text?: string,
      icon_url?: string
    }
  };

  declare type RoleData = {
    name?: string,
    color?: ColorResolvable,
    hoist?: boolean,
    position?: number,
    permissions?: PermissionString[],
    mentionable?: boolean
  };

  declare type RoleResolvable = Role | string;

  declare type Snowflake = string;

  declare type SplitOptions = {
    maxLength?: number,
    char?: string,
    prepend?: string,
    append?: string
  };

  declare type Status = number;

  declare type StreamOptions = {
    seek?: number,
    volume?: number,
    passes?: number,
    bitrate?: number | 'auto'
  };

  declare type StringResolvable = string | string[] | any;

  declare interface Timer {
    ref(): void;
    unref(): void;
  }

  declare type UserResolvable = User | Snowflake | Message | Guild | GuildMember;

  declare type VoiceStatus = number;

  declare type WebhookMessageOptions = {
    username?: string,
    avatarURL?: string,
    tts?: boolean,
    nonce?: string,
    embeds?: (RichEmbed | Object)[],
    disableEveryone?: boolean,
    file?: FileOptions | BufferResolvable | Attachment,
    files?: (FileOptions | BufferResolvable | Attachment)[],
    code?: string | boolean,
    split?: boolean | SplitOptions
  };

  declare type WebSocketOptions = {
    large_threshold?: number,
    compress?: boolean
  };

  declare type WSEventType =
    | 'READY'
    | 'RESUMED'
    | 'GUILD_SYNC'
    | 'GUILD_CREATE'
    | 'GUILD_DELETE'
    | 'GUILD_UPDATE'
    | 'GUILD_MEMBER_ADD'
    | 'GUILD_MEMBER_REMOVE'
    | 'GUILD_MEMBER_UPDATE'
    | 'GUILD_MEMBERS_CHUNK'
    | 'GUILD_ROLE_CREATE'
    | 'GUILD_ROLE_DELETE'
    | 'GUILD_ROLE_UPDATE'
    | 'GUILD_BAN_ADD'
    | 'GUILD_BAN_REMOVE'
    | 'CHANNEL_CREATE'
    | 'CHANNEL_DELETE'
    | 'CHANNEL_UPDATE'
    | 'CHANNEL_PINS_UPDATE'
    | 'MESSAGE_CREATE'
    | 'MESSAGE_DELETE'
    | 'MESSAGE_UPDATE'
    | 'MESSAGE_DELETE_BULK'
    | 'MESSAGE_REACTION_ADD'
    | 'MESSAGE_REACTION_REMOVE'
    | 'MESSAGE_REACTION_REMOVE_ALL'
    | 'USER_UPDATE'
    | 'USER_NOTE_UPDATE'
    | 'PRESENCE_UPDATE'
    | 'VOICE_STATE_UPDATE'
    | 'TYPING_START'
    | 'VOICE_SERVER_UPDATE'
    | 'RELATIONSHIP_ADD'
    | 'RELATIONSHIP_REMOVE';
}
