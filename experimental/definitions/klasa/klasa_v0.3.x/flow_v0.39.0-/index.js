import {
  Attachment,
  BufferResolvable,
  Channel,
  ClientOptions,
  ClientUserGuildSettings,
  ClientUserSettings,
  Collection,
  Console,
  DiscordDMChannel,
  DiscordGroupDMChannel,
  DiscordGuild,
  DiscordMessage,
  DiscordTextChannel,
  DiscordUser,
  DiscordVoiceChannel,
  Emoji,
  GuildMember,
  MessageCollector,
  MessageEmbed,
  MessageOptions,
  MessageReaction,
  OAuth2Application,
  RichEmbed,
  RichEmbedOptions,
  Role,
  Snowflake,
  StringResolvable,
  UserResolvable,
  WebhookClient
} from "discord.js";

declare module "klasa" {
  declare export var version: string;

  declare class KlasaClient {
    constructor(options?: KlasaClientConfig): this,
    config: KlasaClientConfig,
    coreBaseDir: string,
    clientBaseDir: string,
    console: Console,
    argResolver: ArgResolver,
    commands: CommandStore,
    inhibitors: InhibitorStore,
    finalizers: FinalizerStore,
    monitors: MonitorStore,
    languages: LanguageStore,
    providers: ProviderStore,
    events: EventStore,
    extendables: ExtendableStore,
    pieceStores: Collection<string, any>,
    commandMessages: Collection<Snowflake, CommandMessage>,
    permissionLevels: PermissionLevels,
    commandMessageLifetime: number,
    commandMessageSweep: number,
    ready: boolean,
    methods: {
      Collection: typeof Collection,
      Embed: typeof MessageEmbed,
      MessageCollector: typeof MessageCollector,
      Webhook: typeof WebhookClient,
      CommandMessage: typeof CommandMessage,
      util: Util
    },
    settings: StringMappedType<SettingGateway<string>>,
    application: OAuth2Application,
    invite: string,
    owner: ExtendedUser,
    validatePermissionLevels(): PermissionLevels,
    registerStore(store: Store): KlasaClient,
    unregisterStore(store: Store): KlasaClient,
    registerPiece(pieceName: string, store: Store): KlasaClient,
    unregisterPiece(pieceName: string): KlasaClient,
    login(token: string): Promise<string>,
    sweepCommandMessages(lifetime?: number): number,
    defaultPermissionLevels: PermissionLevels,
    on(event: string, listener: Function): this,
    on(
      event: "channelCreate" | "channelDelete",
      listener: (channel: Channel) => void
    ): this,
    on(
      event: "channelPinsUpdate",
      listener: (channel: Channel, time: Date) => void
    ): this,
    on(
      event: "channelUpdate",
      listener: (oldChannel: Channel, newChannel: Channel) => void
    ): this,
    on(
      event: "clientUserGuildSettingsUpdate",
      listener: (clientUserGuildSettings: ClientUserGuildSettings) => void
    ): this,
    on(
      event: "clientUserSettingsUpdate",
      listener: (clientUserSettings: ClientUserSettings) => void
    ): this,
    on(
      event: "clientUserGuildSettingsUpdate",
      listener: (clientUserGuildSettings: ClientUserGuildSettings) => void
    ): this,
    on(event: "debug" | "warn", listener: (info: string) => void): this,
    on(event: "disconnect", listener: (event: any) => void): this,
    on(
      event: "emojiCreate" | "emojiDelete",
      listener: (emoji: Emoji) => void
    ): this,
    on(
      event: "emojiUpdate",
      listener: (oldEmoji: Emoji, newEmoji: Emoji) => void
    ): this,
    on(event: "error", listener: (error: Error) => void): this,
    on(
      event: "guildBanAdd" | "guildBanRemove",
      listener: (guild: ExtendedGuild, user: ExtendedUser) => void
    ): this,
    on(
      event: "guildCreate" | "guildDelete" | "guildUnavailable",
      listener: (guild: ExtendedGuild) => void
    ): this,
    on(
      event: "guildMemberAdd" | "guildMemberAvailable" | "guildMemberRemove",
      listener: (member: GuildMember) => void
    ): this,
    on(
      event: "guildMembersChunk",
      listener: (members: GuildMember[], guild: ExtendedGuild) => void
    ): this,
    on(
      event: "guildMemberSpeaking",
      listener: (member: GuildMember, speaking: boolean) => void
    ): this,
    on(
      event: "guildMemberUpdate" | "presenceUpdate" | "voiceStateUpdate",
      listener: (oldMember: GuildMember, newMember: GuildMember) => void
    ): this,
    on(
      event: "guildUpdate",
      listener: (oldGuild: ExtendedGuild, newGuild: ExtendedGuild) => void
    ): this,
    on(
      event: "message" | "messageDelete" | "messageReactionRemoveAll",
      listener: (message: CommandMessage) => void
    ): this,
    on(
      event: "messageDeleteBulk",
      listener: (messages: Collection<Snowflake, CommandMessage>) => void
    ): this,
    on(
      event: "messageReactionAdd" | "messageReactionRemove",
      listener: (messageReaction: MessageReaction, user: ExtendedUser) => void
    ): this,
    on(
      event: "messageUpdate",
      listener: (oldMessage: CommandMessage, newMessage: CommandMessage) => void
    ): this,
    on(event: "ready" | "reconnecting" | "resume", listener: () => void): this,
    on(
      event: "roleCreate" | "roleDelete",
      listener: (role: Role) => void
    ): this,
    on(
      event: "roleUpdate",
      listener: (oldRole: Role, newRole: Role) => void
    ): this,
    on(
      event: "typingStart" | "typingStop",
      listener: (channel: Channel, user: ExtendedUser) => void
    ): this,
    on(
      event: "userNoteUpdate",
      listener: (user: UserResolvable, oldNote: string, newNote: string) => void
    ): this,
    on(
      event: "userUpdate",
      listener: (oldUser: ExtendedUser, newUser: ExtendedUser) => void
    ): this,
    on(
      event: "commandError",
      listener: (
        msg: CommandMessage,
        command: Command,
        params: any[],
        error: Error
      ) => void
    ): this,
    on(
      event: "commandInhibited",
      listener: (
        msg: CommandMessage,
        command: Command,
        response: string | Error
      ) => void
    ): this,
    on(event: "log", listener: (data: any, type: string) => void): this,
    on(event: "wtf", listener: (failure: Error) => void): this,
    on(event: "verbose", listener: (data: any) => void): this,
    once(event: string, listener: Function): this,
    once(
      event: "channelCreate" | "channelDelete",
      listener: (channel: Channel) => void
    ): this,
    once(
      event: "channelPinsUpdate",
      listener: (channel: Channel, time: Date) => void
    ): this,
    once(
      event: "channelUpdate",
      listener: (oldChannel: Channel, newChannel: Channel) => void
    ): this,
    once(
      event: "clientUserGuildSettingsUpdate",
      listener: (clientUserGuildSettings: ClientUserGuildSettings) => void
    ): this,
    once(
      event: "clientUserSettingsUpdate",
      listener: (clientUserSettings: ClientUserSettings) => void
    ): this,
    once(
      event: "clientUserGuildSettingsUpdate",
      listener: (clientUserGuildSettings: ClientUserGuildSettings) => void
    ): this,
    once(event: "debug" | "warn", listener: (info: string) => void): this,
    once(event: "disconnect", listener: (event: any) => void): this,
    once(
      event: "emojiCreate" | "emojiDelete",
      listener: (emoji: Emoji) => void
    ): this,
    once(
      event: "emojiUpdate",
      listener: (oldEmoji: Emoji, newEmoji: Emoji) => void
    ): this,
    once(event: "error", listener: (error: Error) => void): this,
    once(
      event: "guildBanAdd" | "guildBanRemove",
      listener: (guild: ExtendedGuild, user: ExtendedUser) => void
    ): this,
    once(
      event: "guildCreate" | "guildDelete" | "guildUnavailable",
      listener: (guild: ExtendedGuild) => void
    ): this,
    once(
      event: "guildMemberAdd" | "guildMemberAvailable" | "guildMemberRemove",
      listener: (member: GuildMember) => void
    ): this,
    once(
      event: "guildMembersChunk",
      listener: (members: GuildMember[], guild: ExtendedGuild) => void
    ): this,
    once(
      event: "guildMemberSpeaking",
      listener: (member: GuildMember, speaking: boolean) => void
    ): this,
    once(
      event: "guildMemberUpdate" | "presenceUpdate" | "voiceStateUpdate",
      listener: (oldMember: GuildMember, newMember: GuildMember) => void
    ): this,
    once(
      event: "guildUpdate",
      listener: (oldGuild: ExtendedGuild, newGuild: ExtendedGuild) => void
    ): this,
    once(
      event: "message" | "messageDelete" | "messageReactionRemoveAll",
      listener: (message: CommandMessage) => void
    ): this,
    once(
      event: "messageDeleteBulk",
      listener: (messages: Collection<Snowflake, CommandMessage>) => void
    ): this,
    once(
      event: "messageReactionAdd" | "messageReactionRemove",
      listener: (messageReaction: MessageReaction, user: ExtendedUser) => void
    ): this,
    once(
      event: "messageUpdate",
      listener: (oldMessage: CommandMessage, newMessage: CommandMessage) => void
    ): this,
    once(
      event: "ready" | "reconnecting" | "resume",
      listener: () => void
    ): this,
    once(
      event: "roleCreate" | "roleDelete",
      listener: (role: Role) => void
    ): this,
    once(
      event: "roleUpdate",
      listener: (oldRole: Role, newRole: Role) => void
    ): this,
    once(
      event: "typingStart" | "typingStop",
      listener: (channel: Channel, user: ExtendedUser) => void
    ): this,
    once(
      event: "userNoteUpdate",
      listener: (user: UserResolvable, oldNote: string, newNote: string) => void
    ): this,
    once(
      event: "userUpdate",
      listener: (oldUser: ExtendedUser, newUser: ExtendedUser) => void
    ): this,
    once(
      event: "commandError",
      listener: (
        msg: CommandMessage,
        command: Command,
        params: any[],
        error: Error
      ) => void
    ): this,
    once(
      event: "commandInhibited",
      listener: (
        msg: CommandMessage,
        command: Command,
        response: string | Error
      ) => void
    ): this,
    once(event: "log", listener: (data: any, type: string) => void): this,
    once(event: "wtf", listener: (failure: Error) => void): this,
    once(event: "verbose", listener: (data: any) => void): this
  }

  declare export { KlasaClient as Client };

  declare export class ReactionHandler {
    constructor(
      msg: ExtendedMessage,
      filter: Function,
      options: ReactionHandlerOptions,
      display: RichDisplay | RichMenu,
      emojis: emoji[]
    ): this,
    display: RichDisplay | RichMenu,
    methodMap: Map<string, emoji>,
    currentPage: number,
    prompt: string,
    time: number,
    awaiting: boolean,
    selection: Promise<number>
  }

  declare export class RichDisplay {
    constructor(embed: RichEmbed): this,
    embedTemplate: RichEmbed,
    pages: RichEmbed[],
    infoPage: MessageEmbed,
    emojis: RichDisplayEmojisObject,
    footered: boolean,
    template: MessageEmbed,
    setEmojis(emojis: RichDisplayEmojisObject): RichDisplay,
    setInfoPage(embed: MessageEmbed): RichDisplay,
    run(
      msg: ExtendedMessage,
      options?: RichDisplayRunOptions
    ): Promise<ReactionHandler>
  }

  declare export class RichMenu {
    constructor(embed: RichEmbed): this,
    emojis: RichMenuEmojisObject,
    paginated: boolean,
    options: MenuOption[],
    addOption(name: string, body: string, inline?: boolean): RichMenu,
    run(msg: ExtendedMessage, options?: RichMenuRunOptions): ReactionHandler
  }

  declare export class Util {
    codeBlock(lang: string, expression: string): string,
    clean(text: string): string,
    toTitleCase(str: string): string,
    newError(error: Error, code: number): Error,
    regExpEsc(str: string): string,
    applyToClass(base: Object, structure: Object, skips?: string[]): void
  }

  declare export class Resolver {
    constructor(client: KlasaClient): this,
    client: KlasaClient,
    msg(
      input: CommandMessage | Snowflake,
      channel: Channel
    ): Promise<CommandMessage>,
    user(
      input: ExtendedUser | GuildMember | CommandMessage | Snowflake
    ): Promise<ExtendedUser>,
    member(
      input: ExtendedUser | GuildMember | Snowflake,
      guild: ExtendedGuild
    ): Promise<GuildMember>,
    channel(input: Channel | Snowflake): Promise<Channel>,
    guild(input: ExtendedGuild | Snowflake): Promise<ExtendedGuild>,
    role(input: Role | Snowflake, guild: ExtendedGuild): Promise<Role>,
    boolean(input: boolean | string): Promise<boolean>,
    string(input: string): Promise<string>,
    integer(input: string | number): Promise<number>,
    float(input: string | number): Promise<number>,
    url(input: string): Promise<string>,
    regex: {
      userOrMember: RegExp,
      channel: RegExp,
      role: RegExp,
      snowflake: RegExp
    }
  }

  declare export class ArgResolver {
    piece(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Piece>,
    store(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Store>,
    cmd(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Command>,
    command(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Command>,
    event(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Event>,
    extendable(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Extendable>,
    finalizer(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Finalizer>,
    inhibitor(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Inhibitor>,
    monitor(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Monitor>,
    language(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Language>,
    provider(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Provider>,
    msg(
      input: string | CommandMessage,
      channel: Channel
    ): Promise<CommandMessage>,
    msg(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<CommandMessage>,
    message(
      input: string | CommandMessage,
      channel: Channel
    ): Promise<CommandMessage>,
    message(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<CommandMessage>,
    user(
      input: ExtendedUser | GuildMember | CommandMessage | Snowflake
    ): Promise<ExtendedUser>,
    user(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<ExtendedUser>,
    mention(
      input: ExtendedUser | GuildMember | CommandMessage | Snowflake
    ): Promise<ExtendedUser>,
    mention(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<ExtendedUser>,
    member(
      input: ExtendedUser | GuildMember | Snowflake,
      guild: ExtendedGuild
    ): Promise<GuildMember>,
    member(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<GuildMember>,
    channel(input: Channel | Snowflake): Promise<Channel>,
    channel(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Channel>,
    guild(input: ExtendedGuild | Snowflake): Promise<ExtendedGuild>,
    guild(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<ExtendedGuild>,
    role(input: Role | Snowflake, guild: ExtendedGuild): Promise<Role>,
    role(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<Role>,
    literal(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<string>,
    bool(input: boolean | string): Promise<boolean>,
    bool(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<boolean>,
    boolean(input: boolean | string): Promise<boolean>,
    boolean(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<boolean>,
    str(input: string): Promise<string>,
    str(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<string>,
    string(input: string): Promise<string>,
    string(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<string>,
    int(input: string | number): Promise<number>,
    int(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<number>,
    integer(input: string | number): Promise<number>,
    integer(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<number>,
    num(input: string | number): Promise<number>,
    num(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<number>,
    number(input: string | number): Promise<number>,
    number(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<number>,
    float(input: string | number): Promise<number>,
    float(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<number>,
    reg(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<string>,
    regex(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<string>,
    regexp(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<string>,
    url(input: string): Promise<string>,
    url(
      arg: string,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage
    ): Promise<string>,
    minOrMax(
      value: number,
      min: number,
      max: number,
      currentUsage: Object,
      possible: number,
      repeat: boolean,
      msg: CommandMessage,
      suffix: string
    ): boolean
  }

  declare export class SettingResolver {
    command(data: any, guild: ExtendedGuild, name: string): Promise<Command>,
    language(data: any, guild: ExtendedGuild, name: string): Promise<Language>,
    user(
      input: ExtendedUser | GuildMember | CommandMessage | Snowflake
    ): Promise<ExtendedUser>,
    user(data: any, guild: ExtendedGuild, name: string): Promise<ExtendedUser>,
    channel(input: Channel | Snowflake): Promise<Channel>,
    channel(data: any, guild: ExtendedGuild, name: string): Promise<Channel>,
    textchannel(
      data: any,
      guild: ExtendedGuild,
      name: string
    ): Promise<ExtendedTextChannel>,
    voicechannel(
      data: any,
      guild: ExtendedGuild,
      name: string
    ): Promise<ExtendedVoiceChannel>,
    guild(input: ExtendedGuild | Snowflake): Promise<ExtendedGuild>,
    guild(
      data: any,
      guild: ExtendedGuild,
      name: string
    ): Promise<ExtendedGuild>,
    role(input: Role | Snowflake, guild: ExtendedGuild): Promise<Role>,
    role(data: any, guild: ExtendedGuild, name: string): Promise<Role>,
    boolean(input: boolean | string): Promise<boolean>,
    boolean(data: any, guild: ExtendedGuild, name: string): Promise<boolean>,
    string(input: string): Promise<string>,
    string(
      data: any,
      guild: ExtendedGuild,
      name: string,
      minMax: {
        min: number,
        max: number
      }
    ): Promise<string>,
    integer(input: string | number): Promise<number>,
    integer(
      data: any,
      guild: ExtendedGuild,
      name: string,
      minMax: {
        min: number,
        max: number
      }
    ): Promise<number>,
    float(input: string | number): Promise<number>,
    float(
      data: any,
      guild: ExtendedGuild,
      name: string,
      minMax: {
        min: number,
        max: number
      }
    ): Promise<number>,
    url(input: string): Promise<string>,
    url(data: any, guild: ExtendedGuild, name: string): Promise<string>,
    maxOrMin(
      guild: ExtendedGuild,
      value: number,
      min: number,
      max: number,
      name: string,
      suffix: string
    ): boolean
  }

  declare export class PermissionLevels {
    constructor(levels?: number): this,
    requiredLevels: number,
    addLevel(level: number, brk: boolean, check: Function): void,
    set(level: number, obj: PermissionLevel): this,
    isValid(): boolean,
    debug(): string,
    run(msg: CommandMessage, min: number): permissionLevelResponse
  }

  declare export class ParsedUsage {
    constructor(client: KlasaClient, command: Command): this,
    client: KlasaClient,
    names: string[],
    commands: string,
    deliminatedUsage: string,
    usageString: string,
    parsedUsage: Tag[],
    nearlyFullUsage: string,
    fullUsage(msg: CommandMessage): string,
    parseUsage(usageString: string): Tag[],
    tagOpen(usage: Object, char: string): Object,
    tagClose(usage: Object, char: string): Object,
    tagSpace(usage: Object, char: string): Object
  }

  declare export class Possible {
    constructor(regexResults: string[]): this,
    name: string,
    type: string,
    min: number,
    max: number,
    regex: RegExp,
    resolveLimit(limit: string, type: string): number
  }

  declare export class Tag {
    constructor(members: string, count: number, required: boolean): this,
    type: string,
    possibles: Possible[],
    parseMembers(members: string, count: number): Possible[],
    parseTrueMembers(members: string): string[]
  }

  declare export class CacheManager {
    constructor(client: KlasaClient): this,
    cacheEngine: string,
    data: Collection<string, any> | Provider,
    get(key: string): Object,
    getAll(): Object[],
    set(key: string, value: Object): any,
    delete(key: string): any
  }

  declare export class SchemaManager {
    constructor(client: KlasaClient): this,
    schema: Object,
    defaults: Object,
    initSchema(): Promise<void>,
    validateSchema(schema: Object): void,
    add(key: string, options: AddOptions, force?: boolean): Promise<void>,
    remove(key: string, force?: boolean): Promise<void>
  }

  declare export class SettingGateway<T> {
    constructor(
      store: SettingCache,
      type: T,
      validateFunction: Function,
      schema: Object
    ): this,
    store: SettingCache,
    type: T,
    engine: string,
    sql: SQL,
    validate: Function,
    defaultDataSchema: Object,
    initSchema(): Promise<void>,
    create(input: Object | string): Promise<void>,
    destroy(input: string): Promise<void>,
    get(input: string): Object,
    getResolved(
      input: Object | string,
      guild?: SettingGatewayGuildResolvable
    ): Promise<Object>,
    sync(input?: Object | string): Promise<void>,
    reset(input: Object | string, key: string): Promise<any>,
    update(
      input: Object | string,
      Object: Object,
      guild?: SettingGatewayGuildResolvable
    ): Object,
    ensureCreate(target: Object | string): boolean,
    updateArray(
      input: Object | string,
      action: "add" | "remove",
      key: string,
      data: any
    ): Promise<boolean>,
    client: KlasaClient,
    resolver: Resolver,
    provider: Provider
  }

  declare export class SettingCache {
    constructor(client: KlasaClient): this,
    client: KlasaClient,
    resolver: SettingResolver,
    guilds: SettingGateway<"guilds">,
    add<T>(
      name: T,
      validateFunction: Function,
      schema?: Object
    ): Promise<SettingGateway<T>>,
    validate(resolver: SettingResolver, guild: Object | string): void,
    defaultDataSchema: {
      prefix: SchemaPiece,
      language: SchemaPiece,
      disabledCommands: SchemaPiece
    }
  }

  declare export class SQL {
    constructor(client: KlasaClient, gateway: SettingGateway<string>): this,
    client: KlasaClient,
    gateway: SettingGateway<string>,
    buildSingleSQLSchema(value: SchemaPiece): string,
    buildSQLSchema(schema: Object): string[],
    initDeserialize(): void,
    deserializer(data: SchemaPiece): void,
    updateColumns(
      schema: Object,
      defaults: Object,
      key: string
    ): Promise<boolean>,
    constants: Object,
    sanitizer: Function,
    schema: Object,
    defaults: Object,
    provider: Provider
  }

  declare export class Colors {
    constructor(): this,
    CLOSE: ColorsClose,
    STYLES: ColorsStyles,
    TEXTS: ColorsTexts,
    BACKGROUNDS: ColorsBackgrounds,
    hexToRGB(hex: string): number[],
    hueToRGB(p: number, q: number, t: number): number,
    hslToRGB(
      undefined: [number | string, number | string, number | string]
    ): number[],
    formatArray(
      undefined: [number | string, number | string, number | string]
    ): string,
    format(input: string, type?: ColorsFormatOptions): string
  }

  declare class KlasaConsole {
    constructor(options: KlasaConsoleConfig): this,
    stdout: stream$Writable,
    stderr: stream$Writable,
    timestaamps: boolean | string,
    useColors: boolean,
    colors: KlasaConsoleColorsOption,
    write(data: any, type?: string): void,
    log(...data: any[]): void,
    warn(...data: any[]): void,
    error(...data: any[]): void,
    debug(...data: any[]): void,
    verbose(...data: any[]): void,
    wtf(...data: any[]): void,
    timestamp(timestamp: Date, time: string): string,
    messages(input: string, message: string): string,
    flatten(data: any, useColors: boolean): string
  }

  declare export class Stopwatch {
    constructor(digits?: number): this,
    digits: number,
    duration: number,
    friendlyDuration: string,
    running: boolean,
    restart(): this,
    reset(): this,
    start(): this,
    stop(): this,
    toString(): string
  }

  declare export class CommandMessage {
    constructor(
      msg: CommandMessage,
      cmd: Command,
      prefix: string,
      prefixLength: number
    ): this,
    client: KlasaClient,
    msg: CommandMessage,
    cmd: Command,
    prefix: string,
    prefixLength: number,
    args: string[],
    params: any[],
    reprompted: boolean,
    getArgs(cmdMsg: CommandMessage): string[],
    getQuotedStringArgs(cmdMsg: CommandMessage): string[]
  }

  declare export class Piece {
    reload(): Promise<Piece>,
    unload(): void,
    enable(): Piece,
    disable(): Piece,
    toString(): string,
    applyToClass(structure: Object, skips?: string[]): void
  }

  declare export class Command {
    constructor(
      client: KlasaClient,
      dir: string,
      file: string[],
      options: CommandOptions
    ): this,
    client: KlasaClient,
    type: "command",
    enabled: boolean,
    name: string,
    aliases: string[],
    runIn: string[],
    botPerms: string[],
    requiredSettings: string[],
    cooldown: number,
    permLevel: number,
    description: string,
    usageDelim: string,
    extendedHelp: string,
    quotedStringSupport: boolean,
    fullCategory: string[],
    category: string,
    subCategory: string,
    usage: ParsedUsage,
    run(msg: MessageCommandProxy, params: any[]): Promise<SentMessage | any>,
    init(): any,
    enable(): Piece,
    disable(): Piece,
    reload(): Promise<any>,
    unload(): any,
    toString(): string
  }

  declare export class Event {
    constructor(
      client: KlasaClient,
      dir: string,
      file: string[],
      options: EventOptions
    ): this,
    client: KlasaClient,
    type: "event",
    enabled: boolean,
    name: string,
    dir: string,
    file: string,
    run(...params: any[]): void,
    init(): any,
    enable(): Piece,
    disable(): Piece,
    reload(): Promise<any>,
    unload(): any,
    toString(): string
  }

  declare export class Extendable {
    constructor(
      client: KlasaClient,
      dir: string,
      file: string[],
      options: ExtendableOptions
    ): this,
    client: KlasaClient,
    type: "extendable",
    enabled: boolean,
    name: string,
    dir: string,
    file: string,
    appliesTo: string[],
    target: boolean,
    extend(...params: any[]): any,
    init(): any,
    enable(): Piece,
    disable(): Piece,
    reload(): Promise<any>,
    unload(): any,
    toString(): string
  }

  declare export class Finalizer {
    constructor(
      client: KlasaClient,
      dir: string,
      file: string[],
      options: FinalizerOptions
    ): this,
    client: KlasaClient,
    type: "finalizer",
    enabled: boolean,
    name: string,
    dir: string,
    file: string,
    run(msg: CommandMessage, mes: ExtendedMessage, start: Stopwatch): void,
    init(): any,
    enable(): Piece,
    disable(): Piece,
    reload(): Promise<any>,
    unload(): any,
    toString(): string
  }

  declare export class Inhibitor {
    constructor(
      client: KlasaClient,
      dir: string,
      file: string[],
      options: InhibitorOptions
    ): this,
    client: KlasaClient,
    type: "inhibitor",
    enabled: boolean,
    name: string,
    dir: string,
    file: string,
    run(msg: CommandMessage, cmd: Command): Promise<void | string>,
    init(): any,
    enable(): Piece,
    disable(): Piece,
    reload(): Promise<any>,
    unload(): any,
    toString(): string
  }

  declare export class Language {
    constructor(
      client: KlasaClient,
      dir: string,
      file: string[],
      options: LanguageOptions
    ): this,
    client: KlasaClient,
    type: "language",
    enabled: boolean,
    name: string,
    dir: string,
    file: string,
    get(term: string, ...args: any[]): string | Function,
    init(): any,
    enable(): Piece,
    disable(): Piece,
    reload(): Promise<any>,
    unload(): any,
    toString(): string
  }

  declare export class Monitor {
    constructor(
      client: KlasaClient,
      dir: string,
      file: string[],
      options: MonitorOptions
    ): this,
    client: KlasaClient,
    type: "monitor",
    enabled: boolean,
    name: string,
    dir: string,
    file: string,
    ignoreBots: boolean,
    ignoreSelf: boolean,
    run(msg: ExtendedMessage): void,
    init(): any,
    enable(): Piece,
    disable(): Piece,
    reload(): Promise<any>,
    unload(): any,
    toString(): string
  }

  declare export class Provider {
    constructor(
      client: KlasaClient,
      dir: string,
      file: string[],
      options: ProviderOptions
    ): this,
    client: KlasaClient,
    type: "monitor",
    enabled: boolean,
    name: string,
    dir: string,
    file: string,
    description: string,
    sql: boolean,
    init(): any,
    shutdown(): Promise<void>,
    enable(): Piece,
    disable(): Piece,
    reload(): Promise<any>,
    unload(): any,
    toString(): string
  }

  declare export class Store {
    init(): Promise<any[]>,
    load(dir: string, file: string | string[]): Piece,
    loadAll(): Promise<number>,
    resolve(name: Piece | string): Piece,
    toString(): string,
    applyToClass(structure: Object, skips?: string[]): void
  }

  declare export class CommandStore {
    constructor(client: KlasaClient): this,
    client: KlasaClient,
    aliases: Collection<string, Command>,
    coreDir: string,
    userDir: string,
    holds: Command,
    name: "commands",
    get(name: string): Command,
    has(name: string): boolean,
    set(key: string, value: Command): this,
    set(command: Command): Command,
    delete(name: Command | string): boolean,
    clear(): void,
    load(dir: string, file: string[]): Command,
    loadAll(): Promise<number>,
    toString(): string,
    init(): any,
    resolve(): any,
    walk(store: CommandStore, dir: string, subs?: string[]): Promise<void>
  }

  declare export class EventStore {
    constructor(client: KlasaClient): this,
    client: KlasaClient,
    coreDir: string,
    userDir: string,
    holds: Event,
    name: "events",
    clear(): void,
    delete(name: Event | string): boolean,
    set(key: string, value: Event): this,
    set(event: Event): Event,
    init(): any,
    load(): any,
    loadAll(): Promise<any>,
    resolve(): any,
    toString(): string
  }

  declare export class ExtendableStore {
    constructor(client: KlasaClient): this,
    client: KlasaClient,
    coreDir: string,
    userDir: string,
    holds: Extendable,
    name: "extendables",
    delete(name: Extendable | string): boolean,
    clear(): void,
    set(key: string, value: Extendable): this,
    set(extendable: Extendable): Extendable,
    init(): any,
    load(): any,
    loadAll(): Promise<any>,
    resolve(): any,
    toString(): string
  }

  declare export class FinalizerStore {
    constructor(client: KlasaClient): this,
    client: KlasaClient,
    coreDir: string,
    userDir: string,
    holds: Finalizer,
    name: "finalizers",
    delete(name: Finalizer | string): boolean,
    run(msg: CommandMessage, mes: ExtendedMessage, start: number): void,
    set(key: string, value: Finalizer): this,
    set(finalizer: Finalizer): Finalizer,
    init(): any,
    load(): any,
    loadAll(): Promise<any>,
    resolve(): any,
    toString(): string
  }

  declare export class InhibitorStore {
    constructor(client: KlasaClient): this,
    client: KlasaClient,
    coreDir: string,
    userDir: string,
    holds: Inhibitor,
    name: "inhibitors",
    delete(name: Inhibitor | string): boolean,
    run(msg: ExtendedMessage, cmd: Command, selective: boolean): void,
    set(key: string, value: Inhibitor): this,
    set(inhibitor: Inhibitor): Inhibitor,
    init(): any,
    load(): any,
    loadAll(): Promise<any>,
    resolve(): any,
    toString(): string
  }

  declare export class LanguageStore {
    constructor(client: KlasaClient): this,
    client: KlasaClient,
    coreDir: string,
    userDir: string,
    holds: Language,
    name: "languages",
    default: Language,
    delete(name: Language | string): boolean,
    set(key: string, value: Language): this,
    set(language: Language): Language,
    init(): any,
    load(): any,
    loadAll(): Promise<any>,
    resolve(): any,
    toString(): string
  }

  declare export class MonitorStore {
    constructor(client: KlasaClient): this,
    client: KlasaClient,
    coreDir: string,
    userDir: string,
    holds: Monitor,
    name: "monitors",
    delete(name: Monitor | string): boolean,
    run(msg: ExtendedMessage): void,
    set(key: string, value: Monitor): this,
    set(monitor: Monitor): Monitor,
    init(): any,
    load(): any,
    loadAll(): Promise<any>,
    resolve(): any,
    toString(): string
  }

  declare export class ProviderStore {
    constructor(client: KlasaClient): this,
    client: KlasaClient,
    coreDir: string,
    userDir: string,
    holds: Provider,
    name: "providers",
    delete(name: Provider | string): boolean,
    set(key: string, value: Provider): this,
    set(provider: Provider): Provider,
    init(): any,
    load(): any,
    loadAll(): Promise<any>,
    resolve(): any,
    toString(): string
  }

  declare export type KlasaClientConfig = {
    prefix?: string,
    permissionLevels?: PermissionLevels,
    clientBaseDir?: string,
    commandMessageLifetime?: number,
    commandMessageSweep?: number,
    provider?: {
      engine: string,
      cache: string
    },
    console?: KlasaConsoleConfig,
    consoleEvents?: KlasaConsoleEvents,
    ignoreBots?: boolean,
    ignoreSelf?: boolean,
    cmdPrompt?: boolean,
    cmdEditing?: boolean,
    cmdLogging?: boolean,
    typing?: boolean,
    quotedStringSupport?: boolean,
    readyMessage?: string | Function,
    ownerID?: string
  } & ClientOptions;

  declare export type KlasaConsoleConfig = {
    stdout?: stream$Writable,
    stderr?: stream$Writable,
    useColor?: boolean,
    colors?: Colors,
    timestamps?: boolean | string
  };

  declare export type KlasaConsoleEvents = {
    log?: boolean,
    warn?: boolean,
    error?: boolean,
    debug?: boolean,
    verbose?: boolean,
    wtf?: boolean
  };

  declare export type PermissionLevel = {
    break: boolean,
    check: Function
  };

  declare export type permissionLevelResponse = {
    broke: boolean,
    permission: boolean
  };

  declare export type MessageCommandProxy = CommandMessage & ExtendedMessage;

  declare export type CommandOptions = {
    enabled?: boolean,
    name?: string,
    aliases?: string[],
    runIn?: string[],
    botPerms?: string[],
    requiredSettings?: string[],
    cooldown?: number,
    permLevel?: number,
    description?: string,
    usage?: string,
    usageDelim?: string,
    extendedHelp?: string,
    quotedStringSupport?: boolean
  };

  declare export type EventOptions = {
    enabled?: boolean,
    name?: string
  };

  declare export type ExtendableOptions = {
    enabled?: boolean,
    name?: string,
    klasa?: boolean
  };

  declare export type FinalizerOptions = {
    enabled?: boolean,
    name?: string
  };

  declare export type InhibitorOptions = {
    enabled?: boolean,
    name?: string,
    spamProtection?: boolean
  };

  declare export type LanguageOptions = {
    enabled?: boolean,
    name?: string
  };

  declare export type MonitorOptions = {
    enabled?: boolean,
    name?: string,
    ignoreBots?: boolean,
    ignoreSelf?: boolean
  };

  declare export type ProviderOptions = {
    enabled?: boolean,
    name?: string,
    description?: string,
    sql?: boolean
  };

  declare export type AddOptions = {
    type: string,
    default?: any,
    min?: number,
    max?: number,
    array?: boolean,
    sql?: string
  };

  declare export type SchemaPiece = {
    type: string,
    default: any,
    min: number,
    max: number,
    array: boolean,
    sql: string
  };

  declare export type SettingGatewayGuildResolvable =
    | ExtendedGuild
    | Channel
    | ExtendedMessage
    | Role
    | Snowflake;

  declare export type emoji = string;

  declare export type RichDisplayEmojisObject = {
    first: emoji,
    back: emoji,
    forward: emoji,
    last: emoji,
    jump: emoji,
    info: emoji,
    stop: emoji
  };

  declare export type RichMenuEmojisObject = {
    zero: emoji,
    one: emoji,
    two: emoji,
    three: emoji,
    four: emoji,
    five: emoji,
    six: emoji,
    seven: emoji,
    eight: emoji,
    nine: emoji
  } & RichDisplayEmojisObject;

  declare export type RichDisplayRunOptions = {
    filter?: Function,
    stop?: boolean,
    jump?: boolean,
    firstLast?: boolean,
    prompt?: string,
    startPage?: number,
    max?: number,
    maxEmojis?: number,
    maxUsers?: number,
    time?: number
  };

  declare export type MenuOption = {
    name: string,
    body: string,
    inline?: boolean
  };

  declare export type RichMenuRunOptions = {
    filter?: Function,
    stop?: boolean,
    prompt?: string,
    startPage?: number,
    max?: number,
    maxEmojis?: number,
    maxUsers?: number,
    time?: number
  };

  declare export type ReactionHandlerOptions = {
    filter?: Function,
    stop?: boolean,
    prompt?: string,
    startPage?: number,
    max?: number,
    maxEmojis?: number,
    maxUsers?: number,
    time?: number
  };

  declare export type ColorsClose = {
    normal: 0,
    bold: 22,
    dim: 22,
    italic: 23,
    underline: 24,
    inverse: 27,
    hidden: 28,
    strikethrough: 29,
    text: 39,
    background: 49
  };

  declare export type ColorsStyles = {
    normal: 0,
    bold: 1,
    dim: 2,
    italic: 3,
    underline: 4,
    inverse: 7,
    hidden: 8,
    strikethrough: 9
  };

  declare export type ColorsTexts = {
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    lightgray: 37,
    lightgrey: 37,
    gray: 90,
    grey: 90,
    lightred: 91,
    lightgreen: 92,
    lightyellow: 93,
    lightblue: 94,
    lightmagenta: 95,
    lightcyan: 96,
    white: 97
  };

  declare export type ColorsBackgrounds = {
    black: 40,
    red: 41,
    green: 42,
    yellow: 43,
    blue: 44,
    magenta: 45,
    cyan: 46,
    gray: 47,
    grey: 47,
    lightgray: 100,
    lightgrey: 100,
    lightred: 101,
    lightgreen: 102,
    lightyellow: 103,
    lightblue: 104,
    lightmagenta: 105,
    lightcyan: 106,
    white: 107
  };

  declare export type ColorsFormatOptions = {
    style: string | string[],
    background: string | number | string[],
    text: string | number | string[]
  };

  declare export type KlasaConsoleColorsOption =
    | boolean
    | StringMappedType<KlasaConsoleColorObjects>
    | KlasaConsoleColors;

  declare export type KlasaConsoleColors = {
    debug: KlasaConsoleColorObjects,
    error: KlasaConsoleColorObjects,
    log: KlasaConsoleColorObjects,
    verbose: KlasaConsoleColorObjects,
    warn: KlasaConsoleColorObjects,
    wtf: KlasaConsoleColorObjects
  };

  declare export type KlasaConsoleColorObjects = {
    log?: string,
    message?: KlasaConsoleMessageObject,
    time?: KlasaConsoleTimeObject
  };

  declare export type KlasaConsoleMessageObject = {
    background?: BackgroundColorTypes,
    text?: TextColorTypes,
    style?: StyleTypes
  };

  declare export type KlasaConsoleTimeObject = {
    background?: BackgroundColorTypes,
    text?: TextColorTypes,
    style?: StyleTypes
  };

  declare export type TextColorTypes =
    | "black"
    | "red"
    | "green"
    | "yellow"
    | "blue"
    | "magenta"
    | "cyan"
    | "gray"
    | "grey"
    | "lightgray"
    | "lightgrey"
    | "lightred"
    | "lightgreen"
    | "lightyellow"
    | "lightblue"
    | "lightmagenta"
    | "lightcyan"
    | "white"
    | number[]
    | string[];
  declare export type BackgroundColorTypes =
    | "black"
    | "red"
    | "green"
    | "blue"
    | "magenta"
    | "cyan"
    | "gray"
    | "grey"
    | "lightgray"
    | "lightgrey"
    | "lightred"
    | "lightgreen"
    | "lightyellow"
    | "lightblue"
    | "lightmagenta"
    | "lightcyan"
    | "white"
    | number[]
    | string[];

  declare export type StyleTypes =
    | "normal"
    | "bold"
    | "dim"
    | "italic"
    | "underline"
    | "inverse"
    | "hidden"
    | "strikethrough";

  declare type StringMappedType<T> = {
    [key: string]: T
  };

  declare export type GuildSettings = StringMappedType<any>;

  declare export type SchemaObject = StringMappedType<SchemaPiece>;

  declare export type SchemaDefaults = StringMappedType<any>;

  declare export type ExtendedMessage = {
    guild?: ExtendedGuild,
    guildSettings: GuildSettings,
    hasAtLeastPermissionLevel: Promise<boolean>,
    language: Language,
    reactable: boolean,
    send(
      content?: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    send(options: MessageOptions): Promise<SentMessage>,
    sendCode(
      lang: string,
      content: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendEmbed(
      embed: RichEmbed | RichEmbedOptions,
      content?: string,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendMessage(
      content?: string,
      options?: MessageOptions
    ): Promise<SentMessage>
  } & DiscordMessage;

  declare export type ExtendedGuild = {
    language: Language,
    settings: GuildSettings
  } & DiscordGuild;

  declare export type ExtendedUser = {
    send(
      content?: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    send(options: MessageOptions): Promise<SentMessage>,
    sendCode(
      lang: string,
      content: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendEmbed(
      embed: RichEmbed | RichEmbedOptions,
      content?: string,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendEmbed(
      embed: RichEmbed | RichEmbedOptions,
      options?: MessageOptions
    ): Promise<ExtendedMessage>,
    sendFile(
      attachment: BufferResolvable,
      name?: string,
      content?: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendFiles(
      attachments: Attachment[],
      content: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendMessage(
      content?: string,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendMessage(options: MessageOptions): Promise<SentMessage>
  } & DiscordUser;

  declare export type ExtendedTextChannel = {
    attachable: boolean,
    embedable: boolean,
    postable: boolean,
    guild: ExtendedGuild,
    send(
      content?: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    send(options: MessageOptions): Promise<SentMessage>,
    sendCode(
      lang: string,
      content: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendEmbed(
      embed: RichEmbed | RichEmbedOptions,
      content?: string,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendEmbed(
      embed: RichEmbed | RichEmbedOptions,
      options?: MessageOptions
    ): Promise<ExtendedMessage>,
    sendFile(
      attachment: BufferResolvable,
      name?: string,
      content?: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendFiles(
      attachments: Attachment[],
      content: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendMessage(
      content?: string,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendMessage(options: MessageOptions): Promise<SentMessage>
  } & DiscordTextChannel;

  declare export type ExtendedVoiceChannel = {
    guild: ExtendedGuild
  } & DiscordVoiceChannel;

  declare export type ExtendedDMChannel = {
    attachable: boolean,
    embedable: boolean,
    postable: boolean,
    send(
      content?: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    send(options: MessageOptions): Promise<SentMessage>,
    sendCode(
      lang: string,
      content: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendEmbed(
      embed: RichEmbed | RichEmbedOptions,
      content?: string,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendEmbed(
      embed: RichEmbed | RichEmbedOptions,
      options?: MessageOptions
    ): Promise<ExtendedMessage>,
    sendFile(
      attachment: BufferResolvable,
      name?: string,
      content?: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendFiles(
      attachments: Attachment[],
      content: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendMessage(
      content?: string,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendMessage(options: MessageOptions): Promise<SentMessage>
  } & DiscordDMChannel;

  declare export type ExtendedGroupDMChannel = {
    attachable: boolean,
    embedable: boolean,
    postable: boolean,
    send(
      content?: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    send(options: MessageOptions): Promise<SentMessage>,
    sendCode(
      lang: string,
      content: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendEmbed(
      embed: RichEmbed | RichEmbedOptions,
      content?: string,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendEmbed(
      embed: RichEmbed | RichEmbedOptions,
      options?: MessageOptions
    ): Promise<ExtendedMessage>,
    sendFile(
      attachment: BufferResolvable,
      name?: string,
      content?: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendFiles(
      attachments: Attachment[],
      content: StringResolvable,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendMessage(
      content?: string,
      options?: MessageOptions
    ): Promise<SentMessage>,
    sendMessage(options: MessageOptions): Promise<SentMessage>
  } & DiscordGroupDMChannel;

  declare export type SentMessage = ExtendedMessage | ExtendedMessage[];
}
