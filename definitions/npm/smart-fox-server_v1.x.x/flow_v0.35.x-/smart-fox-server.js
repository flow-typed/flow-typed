

declare module 'smart-fox-server' {
					
}

declare module 'Data' {
				declare export class Vec3D  {
		px: number;
		py: number;
		pz: number;
		constructor(px: number, py: number, pz?: number): this;
		isFloat(): boolean
	}

	
}

declare module 'Invitation' {
				declare export class InvitationReply  {
		ACCEPT: number;
		REFUSE: number
	}

	declare export class SFSInvitation  {
		id: number;
		invitee: SFSUser;
		inviter: SFSUser;
		params: Object;
		secondsForAnswer: number;
		constructor(inviter: SFSUser, invitee: SFSUser, secondsForAnswer: number, params: Object): this
	}

	
}

declare module 'Match' {
				declare export class BoolMatch  {
		EQUALS: BoolMatch;
		NOT_EQUALS: BoolMatch
	}

	declare export class LogicOperator  {
		AND: LogicOperator;
		OR: LogicOperator
	}

	declare export class MatchExpression  {
		condition: RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest;
		loginOp: LogicOperator;
		next: MatchExpression;
		value: any;
		varName: string;
		constructor(varName: string, condition: RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest, value: any): this;
		and(
		varName: string, condition: RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest, value: any
	): MatchExpression;
		hasNext(): boolean;
		or(
		varName: string, condition: RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest, value: any
	): MatchExpression;
		rewind(): MatchExpression;
		toString(): string
	}

	declare export class NumberMatch  {
		EQUALS: NumberMatch;
		GREATER_THAN: NumberMatch;
		GREATER_THAN_OR_EQUAL_TO: NumberMatch;
		LESS_THAN: NumberMatch;
		LESS_THAN_OR_EQUAL_TO: NumberMatch;
		NOT_EQUALS: NumberMatch
	}

	declare export class RoomProperties  {
		GROUP_ID: string;
		HAS_FREE_PLAYER_SLOTS: string;
		IS_GAME: string;
		IS_PRIVATE: string;
		IS_TYPE_SFSGAME: string;
		MAX_SPECTATORS: string;
		MAX_USERS: string;
		NAME: string;
		SPECTATOR_COUNT: string;
		USER_COUNT: string
	}

	declare export class StringMatch  {
		CONTAINS: StringMatch;
		ENDS_WITH: StringMatch;
		EQUALS: StringMatch;
		NOT_EQUALS: StringMatch;
		STARTS_WITH: StringMatch
	}

	declare export class UserProperties  {
		IS_IN_ANY_ROOM: string;
		IS_NPC: string;
		IS_PLAYER: string;
		IS_SPECTATOR: string;
		NAME: string;
		PRIVILEGE_ID: string
	}

	
}

declare module 'Entities' {
				declare export class MMOItem  {
		aoiEnteryPoint: Data.Vec3D;
		id: number;
		constructor(id: number): this;
		containsVariable(varName: string): boolean;
		getVariable(varName: string): Variables.MMOItemVariable;
		getVariables(): Variables.MMOItemVariable[];
		toString(): string
	}

	declare export class MMORoom extends SFSRoom {
		defaultAOI: Data.Vec3D;
		higherMapLimit: Requests.MMO.MapLimits;
		lowerMapLimit: Requests.MMO.MapLimits;
		constructor(id: number, name: string, groupId?: string): this;
		getMMOItem(id: number): MMOItem;
		getMMOItems(): MMOItem[]
	}

	declare export class SFSBuddy  {
		id: number;
		name: string;
		constructor(id: number, name: string, isBlocked?: boolean, isTemp?: boolean): this;
		containsVariable(varName: string): boolean;
		getNickName(): string;
		getOfflineVariables(): Variables.SFSBuddyVariable[];
		getOnlineVariables(): Variables.SFSBuddyVariable[];
		getState(): string;
		getVariable(varName: string): Variables.SFSBuddyVariable;
		getVariables(): Variables.SFSBuddyVariable[];
		isBlocked(): boolean;
		isOnline(): boolean;
		isTemp(): boolean;
		toString(): string
	}

	declare export class SFSRoom  {
		groupId: string;
		id: number;
		isGame: boolean;
		isHidden: boolean;
		isJoined: boolean;
		isPasswordProtected: boolean;
		maxSpectators: number;
		maxUsers: number;
		name: string;
		properties: Object;
		constructor(id: number, name: string, groupId?: string): this;
		containsUser(user: SFSUser): boolean;
		containsVariable(varName: string): boolean;
		getCapacity(): number;
		getPlayerList(): SFSUser[];
		getRoomManager(): Managers.RoomManager;
		getSpectatorCount(): number;
		getSpectatorList(): SFSUser[];
		getUserById(id: number): SFSUser;
		getUserByName(name: string): SFSUser;
		getUserCount(): number;
		getUserList(): SFSUser[];
		getVariable(varName: string): Variables.SFSRoomVariable;
		getVariables(): Variables.SFSRoomVariable[];
		toString(): string
	}

	declare export class SFSUser  {
		aoiEntryPoint: Data.Vec3D;
		id: number;
		isItMe: boolean;
		name: string;
		privilegeId: number;
		properties: Object;
		constructor(id: number, name: string, isItMe?: boolean): this;
		containsVariable(varName: string): boolean;
		getPlayerId(room: SFSRoom): number;
		getUserManager(): Managers.UserManager;
		getVariable(varName: string): Variables.SFSUserVariable;
		getVariables(): Variables.SFSUserVariable[];
		isAdmin(): boolean;
		isGuest(): boolean;
		isJoinedInRoom(room: SFSRoom): boolean;
		isModerator(): boolean;
		isPlayer(): boolean;
		isPlayerInRoom(room: SFSRoom): boolean;
		isSpectator(): boolean;
		isSpectatorInRoom(room: SFSRoom): boolean;
		isStandardUser(): boolean;
		toString(): string
	}

	declare export class UserPrivileges  {
		ADMINISTRATOR: number;
		GUEST: number;
		MODERATOR: number;
		STANDARD: number
	}

	
}

declare module 'Variables' {
				declare export class MMOItemVariable extends SFSUserVariable {
		constructor(name: string, value: any, type?: number): this;
		toString(): string
	}

	declare export class ReservedBuddyVariables  {
		BV_NICKNAME: string;
		BV_ONLINE: string;
		BV_STATE: string
	}

	declare export class ReservedRoomVariables  {
		RV_GAME_STARTED: string
	}

	declare export class SFSBuddyVariable extends SFSUserVariable {
		OFFLINE_PREFIX: string;
		constructor(name: string, value: any, type?: number): this;
		isOffline(): boolean;
		toString(): string
	}

	declare export class SFSRoomVariable extends SFSUserVariable {
		isPersistent: boolean;
		isPrivate: boolean;
		constructor(name: string, value: any, type?: number): this;
		toString(): string
	}

	declare export class SFSUserVariable  {
		name: string;
		value: number;
		constructor(name: string, value: any, type?: number): this;
		getTypeName(typeId: number): string;
		isNull(): boolean;
		toString(): string
	}

	declare export class VariableType  {
		ARRAY: number;
		BOOL: number;
		DOUBLE: number;
		INT: number;
		NULL: number;
		OBJECT: number;
		STRING: number
	}

	
}

declare module 'npm$namespace$SFS2X' {
		declare interface IBUDDY_ADD {
		buddy: Entities.SFSBuddy
	}

	declare interface IBUDDY_BLOCK {
		buddy: Entities.SFSBuddy
	}

	declare interface IBUDDY_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface IBUDDY_LIST_INIT {
		buddyList: Entities.SFSBuddy[],
		myVariables: Entities.Variables.SFSBuddyVariable[]
	}

	declare interface IBUDDY_MESSAGE {
		buddy: Entities.SFSBuddy,
		isItMe: boolean,
		message: string,
		data: Object
	}

	declare interface IBUDDY_ONLINE_STATE_CHANGE {
		buddy: Entities.SFSBuddy,
		isItMe: boolean
	}

	declare interface IBUDDY_REMOVE {
		buddy: Entities.SFSBuddy
	}

	declare interface IBUDDY_VARIABLES_UPDATE {
		buddy: Entities.SFSBuddy,
		isItMe: boolean,
		changedVars: string[]
	}

	declare interface IADMIN_MESSAGE {
		sender: Entities.SFSUser,
		message: string,
		data: Object
	}

	declare interface ICONNECTION {
		success: boolean
	}

	declare interface ICONNECTION_LOST {
		reason: string
	}

	declare interface IEXTENSION_RESPONSE {
		cmd: string,
		params: Object,
		sourceRoom: number
	}

	declare interface IINVITATION {
		invitation: Entities.Invitation.SFSInvitation
	}

	declare interface IINVITATION_REPLY {
		invitee: Entities.SFSUser,
		reply: number,
		data: Object
	}

	declare interface IINVITATION_REPLY_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface ILOGIN {
		user: Entities.SFSUser,
		data: Object
	}

	declare interface ILOGIN_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface ILOGOUT {
		
	}

	declare interface IMMOITEM_VARIABLES_UPDATE {
		room: Entities.MMORoom,
		mmoItem: Entities.MMOItem,
		changedVars: string[]
	}

	declare interface IMODERATOR_MESSAGE {
		sender: Entities.SFSUser,
		message: string,
		data: Object
	}

	declare interface IOBJECT_MESSAGE {
		sender: Entities.SFSUser,
		message: string
	}

	declare interface IPING_PONG {
		lagValue: number
	}

	declare interface IPLAYER_TO_SPECTATOR {
		room: Entities.SFSRoom,
		user: Entities.SFSUser
	}

	declare interface IPLAYER_TO_SPECTATOR_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface IPRIVATE_MESSAGE {
		sender: Entities.SFSUser,
		message: string,
		data: Object
	}

	declare interface IPROXIMITY_LIST_UPDATE {
		addedUsers: Entities.SFSUser[],
		removedUsers: Entities.SFSUser[],
		addedItems: Entities.MMOItem[],
		removedItems: Entities.MMOItem[]
	}

	declare interface IPUBLIC_MESSAGE {
		room: Entities.SFSRoom,
		sender: Entities.SFSUser,
		message: string,
		data: Object
	}

	declare interface IROOM_ADD {
		room: Entities.SFSRoom
	}

	declare interface IROOM_CAPACITY_CHANGE {
		room: Entities.SFSRoom
	}

	declare interface IROOM_CAPACITY_CHANGE_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface IROOM_CREATION_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface IROOM_FIND_RESULT {
		rooms: Entities.SFSRoom[]
	}

	declare interface IROOM_GROUP_SUBSCRIBE {
		groupId: string,
		newRooms: Entities.SFSRoom[]
	}

	declare interface IROOM_GROUP_SUBSCRIBE_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface IROOM_GROUP_UNSUBSCRIBE {
		groupId: string
	}

	declare interface IROOM_GROUP_UNSUBSCRIBE_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface IROOM_JOIN {
		room: Entities.SFSRoom
	}

	declare interface IROOM_JOIN_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface IROOM_NAME_CHANGE {
		room: Entities.SFSRoom,
		oldName: string
	}

	declare interface IROOM_NAME_CHANGE_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface IROOM_PASSWORD_STATE_CHANGE {
		room: Entities.SFSRoom
	}

	declare interface IROOM_PASSWORD_STATE_CHANGE_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface IROOM_REMOVE {
		room: Entities.SFSRoom
	}

	declare interface IROOM_VARIABLES_UPDATE {
		room: Entities.SFSRoom,
		changedVars: string[]
	}

	declare interface ISOCKET_ERROR {
		errorMessage: string
	}

	declare interface ISPECTATOR_TO_PLAYER {
		room: Entities.SFSRoom,
		user: Entities.SFSUser,
		playerId: number
	}

	declare interface ISPECTATOR_TO_PLAYER_ERROR {
		errorMessage: string,
		errorCode: number
	}

	declare interface IUSER_COUNT_CHANGE {
		room: Entities.SFSRoom,
		uCount: number,
		sCount: number
	}

	declare interface IUSER_ENTER_ROOM {
		user: Entities.SFSUser,
		room: Entities.SFSRoom
	}

	declare interface IUSER_EXIT_ROOM {
		user: Entities.SFSUser,
		room: Entities.SFSRoom
	}

	declare interface IUSER_FIND_RESULT {
		users: Entities.SFSUser[]
	}

	declare interface IUSER_VARIABLES_UPDATE {
		user: Entities.SFSUser,
		changedVars: string[]
	}

	declare export interface IconfigObj {
		host?: string,
		port?: number,
		useSSL?: boolean,
		zone?: string,
		debug?: boolean
	}

		declare export class ErrorCodes  {
		setErrorMessage(code: number, message: string): void
	}

	declare export class Logger  {
		setLevel(level: number): void
	}

	declare export class LogLevel  {
		DEBUG: number;
		ERROR: number;
		INFO: number;
		WARN: number
	}

	declare export class SFSBuddyEvent  {
		BUDDY_ADD: string;
		BUDDY_BLOCK: string;
		BUDDY_ERROR: string;
		BUDDY_LIST_INIT: string;
		BUDDY_MESSAGE: string;
		BUDDY_ONLINE_STATE_CHANGE: string;
		BUDDY_REMOVE: string;
		BUDDY_VARIABLES_UPDATE: string
	}

	declare export class SFSEvent  {
		ADMIN_MESSAGE: string;
		CONNECTION: string;
		CONNECTION_LOST: string;
		EXTENSION_RESPONSE: string;
		INVITATION: string;
		INVITATION_REPLY: string;
		INVITATION_REPLY_ERROR: string;
		LOGIN: string;
		LOGIN_ERROR: string;
		LOGOUT: string;
		MMOITEM_VARIABLES_UPDATE: string;
		MODERATOR_MESSAGE: string;
		OBJECT_MESSAGE: string;
		PING_PONG: string;
		PLAYER_TO_SPECTATOR: string;
		PLAYER_TO_SPECTATOR_ERROR: string;
		PRIVATE_MESSAGE: string;
		PROXIMITY_LIST_UPDATE: string;
		PUBLIC_MESSAGE: string;
		ROOM_ADD: string;
		ROOM_CAPACITY_CHANGE: string;
		ROOM_CAPACITY_CHANGE_ERROR: string;
		ROOM_CREATION_ERROR: string;
		ROOM_FIND_RESULT: string;
		ROOM_GROUP_SUBSCRIBE: string;
		ROOM_GROUP_SUBSCRIBE_ERROR: string;
		ROOM_GROUP_UNSUBSCRIBE: string;
		ROOM_GROUP_UNSUBSCRIBE_ERROR: string;
		ROOM_JOIN: string;
		ROOM_JOIN_ERROR: string;
		ROOM_NAME_CHANGE: string;
		ROOM_NAME_CHANGE_ERROR: string;
		ROOM_PASSWORD_STATE_CHANGE: string;
		ROOM_PASSWORD_STATE_CHANGE_ERROR: string;
		ROOM_REMOVE: string;
		ROOM_VARIABLES_UPDATE: string;
		SOCKET_ERROR: string;
		SPECTATOR_TO_PLAYER: string;
		SPECTATOR_TO_PLAYER_ERROR: string;
		USER_COUNT_CHANGE: string;
		USER_ENTER_ROOM: string;
		USER_EXIT_ROOM: string;
		USER_FIND_RESULT: string;
		USER_VARIABLES_UPDATE: string
	}

	declare export class SmartFox  {
		buddyManager: Managers.BuddyManager;
		config: IconfigObj;
		debug: boolean;
		lastJoinedRoom: Entities.SFSRoom;
		logger: Logger;
		mySelf: Entities.SFSUser;
		roomManager: Managers.RoomManager;
		sessionToken: string;
		userManager: Managers.UserManager;
		version: string;
		constructor(configObj?: IconfigObj): this;
		addEventListener(evtType: string, listener: Function, scope: number): void;
		connect(host?: string, port?: number, useSSL?: boolean): void;
		disconnect(): void;
		enableLagMonitor(enabled: boolean, interval?: number, queueSize?: number): void;
		getJoinedRooms(): Entities.SFSRoom[];
		getMaxMessageSize(): number;
		getRoomById(id: number): Entities.SFSRoom;
		getRoomByName(name: string): Entities.SFSRoom;
		getRoomList(): Entities.SFSRoom[];
		getRoomListFromGroup(groupId: string): Entities.SFSRoom;
		isConnected(): boolean;
		removeEventListener(evtType: string, listener: Function): void;
		send(
		request: Requests.BuddyList.AddBuddyRequest | Requests.BuddyList.BlockBuddyRequest | Requests.BuddyList.BuddyMessageRequest | Requests.BuddyList.GoOnlineRequest | Requests.BuddyList.InitBuddyListRequest | Requests.BuddyList.RemoveBuddyRequest | Requests.BuddyList.SetBuddyVariablesRequest | Requests.Game.CreateSFSGameRequest | Requests.Game.InvitationReplyRequest | Requests.Game.InviteUsersRequest | Requests.Game.QuickJoinGameRequest | Requests.MMO.SetUserPositionRequest | Requests.System.AdminMessageRequest | Requests.System.BanUserRequest | Requests.System.ChangeRoomCapacityRequest | Requests.System.ChangeRoomNameRequest | Requests.System.ChangeRoomPasswordStateRequest | Requests.System.CreateRoomRequest | Requests.System.ExtensionRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest | Requests.System.JoinRoomRequest | Requests.System.KickUserRequest | Requests.System.LeaveRoomRequest | Requests.System.LoginRequest | Requests.System.LogoutRequest | Requests.System.ModeratorMessageRequest | Requests.System.ObjectMessageRequest | Requests.System.PlayerToSpectatorRequest | Requests.System.PrivateMessageRequest | Requests.System.PublicMessageRequest | Requests.System.SetRoomVariablesRequest | Requests.System.SetUserVariablesRequest | Requests.System.SpectatorToPlayerRequest | Requests.System.SubscribeRoomGroupRequest | Requests.System.UnsubscribeRoomGroupRequest
	): void;
		setClientDetails(platformId: string, version: string): void
	}

	
}

declare module 'Managers' {
				declare export class BuddyManager  {
		constructor(sfs: SmartFox): this;
		containsBuddy(name: string): boolean;
		getBuddyById(id: number): Entities.SFSBuddy;
		getBuddyByName(name: string): Entities.SFSBuddy;
		getBuddyByNickName(nickName: string): Entities.SFSBuddy;
		getBuddyList(): Entities.SFSBuddy[];
		getBuddyStates(): string[];
		getMyNickName(): string;
		getMyOnlineState(): boolean;
		getMyState(): string;
		getMyVariable(varName: string): Entities.Variables.SFSBuddyVariable;
		getMyVariables(): Entities.Variables.SFSBuddyVariable[];
		getOfflineBuddies(): Entities.SFSBuddy[];
		getOnlineBuddies(): Entities.SFSBuddy[];
		isInited(): boolean
	}

	declare export class RoomManager  {
		constructor(sfs: SmartFox): this;
		containsGroup(groupId: string): boolean;
		containsRoom(idOrName: any): boolean;
		containsRoomInGroup(idOrName: any, groupId: string): boolean;
		getJoinedRooms(): Entities.SFSRoom[];
		getRoomById(id: number): Entities.SFSRoom;
		getRoomByName(name: string): Entities.SFSRoom;
		getRoomCount(): number;
		getRoomGroups(): string[];
		getRoomList(): Entities.SFSRoom[];
		getRoomListFromGroup(groupId: string): Entities.SFSRoom[];
		getUserRooms(user: Entities.SFSUser): Entities.SFSRoom[]
	}

	declare export class UserManager  {
		constructor(sfs: SmartFox): this;
		containsUser(user: Entities.SFSUser): boolean;
		containsUserId(userId: number): boolean;
		containsUserName(userName: string): boolean;
		getUserById(userId: number): Entities.SFSUser;
		getUserByName(userName: string): Entities.SFSUser;
		getUserCount(): number;
		getUserList(): Entities.SFSUser[]
	}

	
}

declare module 'Requests' {
				declare export class BanMode  {
		BY_ADDRESS: number;
		BY_NAME: number
	}

	declare export class MessageRecipientMode  {
		mode: number;
		target: any;
		TO_GROUP: number;
		TO_ROOM: number;
		TO_USER: number;
		TO_ZONE: number;
		constructor(mode: number, target: any): this
	}

	declare export class RoomEvents  {
		allowUserCountChance: boolean;
		allowUserEnter: boolean;
		allowUserExit: boolean;
		allowUserVariablesUpdate: boolean;
		constructor(): this
	}

	declare export class RoomExtension  {
		className: string;
		id: string;
		propertiesFile: string;
		constructor(id: string, className: string): this
	}

	declare export class RoomPermissions  {
		allowNameChange: boolean;
		allowPasswordStateChange: boolean;
		allowPublicMessages: boolean;
		aloowResizing: boolean;
		constructor(): this
	}

	declare export class RoomSettings  {
		events: RoomEvents;
		extension: RoomExtension;
		groupId: string;
		isGame: boolean;
		maxSpectators: number;
		maxUsers: number;
		maxVariables: number;
		name: string;
		password: string;
		permissions: RoomPermissions;
		variables: Entities.Variables.ReservedRoomVariables[];
		constructor(name: string): this
	}

	
}

declare module 'BuddyList' {
				declare export class AddBuddyRequest  {
		constructor(buddyName: string): this
	}

	declare export class BlockBuddyRequest  {
		constructor(buddyName: string, blocked: boolean): this
	}

	declare export class BuddyMessageRequest  {
		constructor(message: string, targetBuddy: Entities.SFSBuddy, parms?: Object): this
	}

	declare export class GoOnlineRequest  {
		constructor(online: boolean): this
	}

	declare export class InitBuddyListRequest  {
		constructor(): this
	}

	declare export class RemoveBuddyRequest  {
		constructor(buddyName: string): this
	}

	declare export class SetBuddyVariablesRequest  {
		constructor(buddyVariables: Entities.Variables.SFSBuddyVariable[]): this
	}

	
}

declare module 'Game' {
				declare export class CreateSFSGameRequest  {
		constructor(settings: SFSGameSettings): this
	}

	declare export class InvitationReplyRequest  {
		constructor(invitation: IINVITATION, invitationReply: number, params?: Object): this
	}

	declare export class InviteUsersRequest  {
		constructor(invitedUsers: Entities.SFSUser[], secondsForAnswer: number, params?: Object): this
	}

	declare export class QuickJoinGameRequest  {
		constructor(whereToSearch: Entities.SFSRoom[], roomToLeave?: Entities.SFSRoom): this;
		constructor(matchExpression: Entities.Match.MatchExpression, whereToSearch: Entities.SFSRoom[], roomToLeave?: Entities.SFSRoom): this
	}

	declare export class SFSGameSettings extends RoomSettings {
		invitationExpiryTime: number;
		invitiationParams: Object;
		invitiedPlayers: Entities.SFSUser[];
		isPublic: boolean;
		leaveLastJoinedRoom: boolean;
		minPlayersToStartGame: number;
		notifyGameStarted: boolean;
		playerMatchExpression: Entities.Match.MatchExpression;
		serachableRooms: string[];
		spectatorMatchExpression: Entities.Match.MatchExpression;
		constructor(name: string): this
	}

	
}

declare module 'MMO' {
				declare export class MapLimits  {
		higherLimit: Entities.Data.Vec3D;
		lowerLimit: Entities.Data.Vec3D;
		constructor(lowerLimit: Entities.Data.Vec3D, higherLimit: Entities.Data.Vec3D): this
	}

	declare export class MMORoomSettings  {
		defaultAOI: Entities.Data.Vec3D;
		mapLimits: MapLimits;
		proximityListUpdateMillis: number;
		sendAOIEntryPoint: boolean;
		userMaxLimboSeconds: number;
		constructor(name: string): this
	}

	declare export class SetUserPositionRequest  {
		constructor(pos: Entities.Data.Vec3D, targetRoom?: Entities.MMORoom): this
	}

	
}

declare module 'System' {
				declare export class AdminMessageRequest  {
		constructor(message: string, recipientMode: MessageRecipientMode, params?: Object): this
	}

	declare export class BanUserRequest  {
		constructor(userId: number, message?: string, banMode?: BanMode, delaySeconds?: number, durationHours?: number): this
	}

	declare export class ChangeRoomCapacityRequest  {
		constructor(room: Entities.SFSRoom, newMaxUsers: number, newMaxSpect: number): this
	}

	declare export class ChangeRoomNameRequest  {
		constructor(room: Entities.SFSRoom, newName: string): this
	}

	declare export class ChangeRoomPasswordStateRequest  {
		constructor(room: Entities.SFSRoom, newPass: string): this
	}

	declare export class CreateRoomRequest  {
		constructor(settings: RoomSettings, autoJoin?: boolean, roomToLeave?: Entities.SFSRoom): this
	}

	declare export class ExtensionRequest  {
		constructor(extCmd: string, params?: Object, room?: Entities.SFSRoom): this
	}

	declare export class FindRoomsRequest  {
		constructor(expr: Entities.Match.MatchExpression, groupId?: string, limit?: number): this
	}

	declare export class FindUsersRequest  {
		constructor(expr: Entities.Match.MatchExpression, target?: any, limit?: number): this
	}

	declare export class JoinRoomRequest  {
		constructor(room: any, password?: string, roomIdToLeave?: number, asSpect?: boolean): this
	}

	declare export class KickUserRequest  {
		constructor(userId: number, message?: string, delaySeconds?: number): this
	}

	declare export class LeaveRoomRequest  {
		constructor(room?: Entities.SFSRoom): this
	}

	declare export class LoginRequest  {
		constructor(userName: string, password?: string, params?: Object, zoneName?: string): this
	}

	declare export class LogoutRequest  {
		constructor(): this
	}

	declare export class ModeratorMessageRequest  {
		constructor(message: string, recipientMode: MessageRecipientMode, params?: Object): this
	}

	declare export class ObjectMessageRequest  {
		constructor(obj: Object, targetRoom?: Entities.SFSRoom, recipients?: Entities.SFSUser[]): this
	}

	declare export class PlayerToSpectatorRequest  {
		constructor(targetRoom?: Entities.SFSRoom): this
	}

	declare export class PrivateMessageRequest  {
		constructor(message: string, recipientId: number, params?: Object): this
	}

	declare export class PublicMessageRequest  {
		constructor(message: string, params?: Object, targetRoom?: Entities.SFSRoom): this
	}

	declare export class SetRoomVariablesRequest  {
		constructor(roomVariables: Entities.Variables.SFSRoomVariable[], room: Entities.SFSRoom): this
	}

	declare export class SetUserVariablesRequest  {
		constructor(userVariables: Entities.Variables.SFSUserVariable): this
	}

	declare export class SpectatorToPlayerRequest  {
		constructor(targetRoom: Entities.SFSRoom): this
	}

	declare export class SubscribeRoomGroupRequest  {
		constructor(groupId: string): this
	}

	declare export class UnsubscribeRoomGroupRequest  {
		constructor(groupId: string): this
	}

	
}

declare module 'Utils' {
				declare export class ClientDisconnectionReason  {
		BAN: string;
		IDLE: string;
		KICK: string;
		MANUAL: string;
		UNKNOWN: string
	}

	
}