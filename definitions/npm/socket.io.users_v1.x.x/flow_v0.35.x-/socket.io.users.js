

declare module 'socket.io.users' {
	declare type SocketUserList = {
		[namespace: string]: Users
	};

			declare class Namespaces  {
		attach(namespace: string, socketUsersObj: Users): void;
		get(namespace: string): Users
	}

	declare class User  {
		id: string | number;
		socket: SocketIO.Socket;
		sockets: SocketIO.Socket[];
		rooms: string[];
		ip: string;
		remoteAddresses: string[];
		store: any;
		attach(socket: SocketIO.Socket): void;
		detachSocket(socket: SocketIO.Socket): void;
		detach(): void;
		join(room: string): boolean;
		leave(room: string): void;
		leaveAll(): void;
		belong(room: string): boolean;
		in(room: string): boolean;
		set(key: string, value: any, callback?: () => void): void;
		get: (key: string) => any;
		toString(): string;
		emit(...args: any[]): void;
		to(room: string): SocketIO.Socket
	}

	declare class Users extends EventEmitter {
		namespace: string;
		users: User[];
		constructor(namespace?: string): this;
		of(namespace?: string): Users;
		takeId: (request: any) => string | number;
		create(socket: SocketIO.Socket): User;
		getById(id: string | number): User;
		get(socket: SocketIO.Socket): User;
		list(): User[];
		size(): number;
		push(_user: User): void;
		add(socket: SocketIO.Socket): User;
		indexOf(user: User): number;
		remove(user: User): void;
		room(room: string): User[];
		in(room: string): User[];
		from(room: string): User[];
		update(user: User): void;
		emitAll(...args: any[]): void;
		registerSocketEvents(currentUser: User): void
	}

	
}