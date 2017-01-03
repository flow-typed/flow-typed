/**
 * Flowtype definitions for plugapi
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'plugapi' {
    declare interface PlugLogin {
        email: string,
            password: string
    }
    declare interface Notification {
        action: string,
            id: number,
            timestamp: string,
            value: string
    }
    declare interface RawChatMessage {
        cid: string,
            message: string,
            sub: number,
            uid: number,
            un: string
    }
    declare interface Media {
        author: string,
            format: number,
            image: string,
            cid: string,
            duration: number,
            title: string,
            id: number
    }
    declare interface Score {
        positive: number,
            listeners: number,
            grabs: number,
            negative: number,
            skipped: number
    }
    declare interface LastPlay {
        dj: User$DJ,
            media: Media,
            score: Score
    }
    declare interface FollowJoinData {
        r: number,
            un: string,
            id: string
    }
    declare interface LogObject {
        log: () => void
    }
    declare interface User$Default {
        username: string,
            language: string,
            avatarID: string
    }

    declare type User$Extended = {
        status: number,
        fans: number,
        listenerPoints: number,
        id: string,
        curatorPoints: number,
        djPoints: number
    } & User$Default


    declare type User$Update = {
        dateJoined: string
    } & User$Extended


    declare type User$Room = {
        sub: number,
        level: number,
        joined: string,
        id: number,
        badge: string,
        role: number,
        gRole: number,
        slug: string
    } & User$Default


    declare type User$User = {
        silver: boolean,
        guest: boolean
    } & User$Room


    declare type User$DJ = {
        blurp: any,
        grab: boolean,
        status: number,
        vote: number
    } & User$Room


    declare type User$Audience = {
        ignores: any[],
        notifications: Notification[],
        pp: number,
        pw: number,
        xp: number
    } & User$DJ

    declare interface Enum$RoomRole {
        NONE: number,
            RESIDENTDJ: number,
            BOUNCER: number,
            MANAGER: number,
            COHOST: number,
            HOST: number
    }

    declare interface Enum$GlobalRole {
        NONE: number,
            VOLUNTEER: number,
            AMBASSADOR: number,
            LEADER: number,
            ADMIN: number
    }

    declare interface Enum$Status {
        OFFLINE: number,
            ONLINE: number
    }

    declare interface Enum$Ban {
        HOUR: "h",
            DAY: "d",
            PERMA: "f"
    }

    declare interface Enum$BanReason {
        SPAMMING_TROLLING: number,
            VERBAL_ABUSE: number,
            OFFENSIVE_MEDIA: number,
            INAPPROPRIATE_GENRE: number,
            NEGATIVE_ATTITUDE: number
    }

    declare interface Enum$Mute {
        SHORT: "s",
            MEDIUM: "m",
            LONG: "l"
    }

    declare interface Enum$MuteReason {
        VIOLATING_COMMUNITY_RULES: number,
            VERBAL_ABUSE: number,
            SPAMMING_TROLLING: number,
            OFFENSIVE_LANGUAGE: number,
            NEGATIVE_ATTITUDE: number
    }

    declare interface Enum$Events {
        ADVANCE: "advance",
            BAN: "ban",
            BOOTH_LOCKED: "boothLocked",
            CHAT: "chat",
            CHAT_COMMAND: "command",
            CHAT_DELETE: "chatDelete",
            CHAT_LEVEL_UPDATE: "roomMinChatLevelUpdate",
            COMMAND: "command",
            DJ_LIST_CYCLE: "djListCycle",
            DJ_LIST_UPDATE: "djListUpdate",
            DJ_LIST_LOCKED: "djListLocked",
            EARN: "earn",
            FOLLOW_JOIN: "followJoin",
            FLOOD_CHAT: "floodChat",
            FRIEND_REQUEST: "friendRequest",
            GIFTED: "gifted",
            GRAB: "grab",
            KILL_SESSION: "killSession",
            MAINT_MODE: "plugMaintenance",
            MAINT_MODE_ALERT: "plugMaintenanceAlert",
            MODERATE_ADD_DJ: "modAddDJ",
            MODERATE_ADD_WAITLIST: "modAddWaitList",
            MODERATE_AMBASSADOR: "modAmbassador",
            MODERATE_BAN: "modBan",
            MODERATE_MOVE_DJ: "modMoveDJ",
            MODERATE_MUTE: "modMute",
            MODERATE_REMOVE_DJ: "modRemoveDJ",
            MODERATE_REMOVE_WAITLIST: "modRemoveWaitList",
            MODERATE_SKIP: "modSkip",
            MODERATE_STAFF: "modStaff",
            NOTIFY: "notify",
            PDJ_MESSAGE: "pdjMessage",
            PDJ_UPDATE: "pdjUpdate",
            PING: "ping",
            PLAYLIST_CYCLE: "playlistCycle",
            REQUEST_DURATION: "requestDuration",
            REQUEST_DURATION_RETRY: "requestDurationRetry",
            ROOM_CHANGE: "roomChanged",
            ROOM_DESCRIPTION_UPDATE: "roomDescriptionUpdate",
            ROOM_JOIN: "roomJoin",
            ROOM_NAME_UPDATE: "roomNameUpdate",
            ROOM_VOTE_SKIP: "roomVoteSkip",
            ROOM_WELCOME_UPDATE: "roomWelcomeUpdate",
            SESSION_CLOSE: "sessionClose",
            SKIP: "skip",
            STROBE_TOGGLE: "strobeToggle",
            USER_COUNTER_UPDATE: "userCounterUpdate",
            USER_FOLLOW: "userFollow",
            USER_JOIN: "userJoin",
            USER_LEAVE: "userLeave",
            USER_UPDATE: "userUpdate",
            VOTE: "vote"
    }
    declare interface Event$BoothCycle {
        moderator: string,
            cycle: boolean
    }

    declare interface Event$BoothLocked {
        m: string,
            c: boolean,
            ml: string,
            f: boolean
    }

    declare interface Event$Chat {
        raw: RawChatMessage,
            id: string,
            from: User$User,
            message: string,
            mentions: Array<any>,
            muted: boolean,
            type: string
    }

    declare interface Event$ChatDelete {
        mi: number,
            chatID: string
    }

    declare type Event$Grab = number;

    declare interface Event$Advance {
        media: Media,
            startTime: string,
            historyID: string,
            djs: User$DJ[],
            currentDJ: User$DJ,
            playlistID: number,
            lastPlay: LastPlay
    }

    declare interface Event$DJListUpdate {
        djs: User$DJ[],
            remove: string
    }

    declare interface Event$Emote {
        fromID: string,
            message: string,
            from: string,
            type: string,
            chatID: string
    }

    declare interface Event$FollowJoin {
        data: FollowJoinData,
            type: string
    }

    declare interface Event$ModAddDJ {
        moderator: string,
            username: string
    }

    declare interface Event$ModBan {
        moderator: string,
            username: string,
            duration: number,
            ref: string,
            reason: string
    }

    declare interface Event$ModMoveDJ {
        moderator: string,
            index: number,
            old: number,
            userID: string
    }

    declare interface Event$ModRemoveDJ {
        moderator: string,
            username: string,
            userID: string
    }

    declare interface Event$ModSkip {
        mi: number,
            m: string
    }

    declare interface Event$RoomMinChatLevelUpdate {
        level: number,
            id: number,
            user: User$User
    }

    declare type Event$RoomJoin = string;

    declare type Event$UserJoin = User$User;

    declare type Event$UserLeave = User$User;

    declare interface Event$UserUpdate {
        username: string,
            status: number,
            fans: number,
            listenerPoints: number,
            dateJoined: string,
            language: string,
            avatarID: string,
            id: string,
            curatorPoints: number,
            djPoints: number
    }

    declare interface Event$Vote {
        i: number,
            v: number
    }

    declare type Event$Command = {
        command: string,
        args: string[],
        respond: Function,
        respondTimeout: Function,
        havePermission: Function,
        isFrom: Function
    }
    declare interface PlugAPIInstance {
        deleteAllChat: boolean,
            multiLine: boolean,
            multiLineLimit: number,
            connect(room: string): void,
            changeDJCycle(enabled: boolean, callback?: () => void): boolean,
            changeRoom(room: string, callback?: () => void): void,
            close(): void,
            getAdmins(): User$Extended[],
            getAmbassadors(): User$Extended[],
            getAudience(): User$Audience[],
            getDJ(): User$DJ,
            getDJs(): User$DJ[],
            getHost(): User$Extended,
            getMedia(): Media,
            getRoomScore(): Score,
            getSelf(): User$Audience,
            getStaff(): User$Extended[],
            getTimeElapsed(): number,
            getTimeRemaining(): number,
            getUser(userID: number): User$DJ,
            getUsers(): User$DJ[],
            getWaitList(): User$Extended,
            getWaitListPosition(userID: number): number,
            havePermission(userID: number, permission: number, global?: boolean): boolean,
            joinBooth(callback?: () => void): boolean,
            leaveBooth(callback?: () => void): boolean,
            selfSkip(callback?: () => void): boolean,
            sendChat(msg: string, timeout?: number): void,
            setLogger(logObject: LogObject): boolean,
            on(event: "boothCycle", callback: (data: Event$BoothCycle) => void): void,
            on(event: "boothLocked", callback: (data: Event$BoothLocked) => void): void,
            on(event: "chat", callback: (data: Event$Chat) => void): void,
            on(event: "chatDelete", callback: (data: Event$ChatDelete) => void): void,
            on(event: "grab", callback: (data: Event$Grab) => void): void,
            on(event: "advance", callback: (data: Event$Advance) => void): void,
            on(event: "djListUpdate", callback: (data: Event$DJListUpdate) => void): void,
            on(event: "emote", callback: (data: Event$Emote) => void): void,
            on(event: "followJoin", callback: (data: Event$FollowJoin) => void): void,
            on(event: "modAddDJ", callback: (data: Event$ModAddDJ) => void): void,
            on(event: "modBan", callback: (data: Event$ModBan) => void): void,
            on(event: "modMoveDJ", callback: (data: Event$ModMoveDJ) => void): void,
            on(event: "modRemoveDJ", callback: (data: Event$ModRemoveDJ) => void): void,
            on(event: "modSkip", callback: (data: Event$ModSkip) => void): void,
            on(
                event: "roomMinChatLevelUpdate",
                callback: (data: Event$RoomMinChatLevelUpdate) => void): void,
            on(event: "roomJoin", callback: (data: Event$RoomJoin) => void): void,
            on(event: "userJoin", callback: (data: Event$UserJoin) => void): void,
            on(event: "userLeave", callback: (data: Event$UserLeave) => void): void,
            on(event: "userUpdate", callback: (data: Event$UserUpdate) => void): void,
            on(event: "vote", callback: (data: Event$Vote) => void): void,
            on(event: "command", callback: (data: Event$Command) => void): void,
            on(event: string, callback: (data: any) => void): void
    }
    declare interface PlugAPIStatic {
        new(
            login: PlugLogin,
            callback?: (error: Error, bot: PlugAPIInstance) => void): PlugAPIInstance,
        new(login: PlugLogin, callback?: (bot: PlugAPIInstance) => void): PlugAPIInstance,
        ROOM_ROLE: Enum$RoomRole,
            GLOBAL_ROLES: Enum$GlobalRole,
            STATUS: Enum$Status,
            BAN: Enum$Ban,
            BAN_REASON: Enum$BanReason,
            MUTE: Enum$Mute,
            MUTE_REASON: Enum$MuteReason,
            events: Enum$Events
    }
    declare var PlugAPI: PlugAPIStatic;
    declare module.exports: typeof PlugAPI
}