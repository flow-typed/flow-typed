

declare module 'consul' {
					declare module.exports: ConsulStatic


}

declare module 'Consul' {
		declare interface Thenable<T> {
		then<U>(
		onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>
	): Thenable<U>,
		then<U>(
		onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void
	): Thenable<U>,
		catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>
	}

	declare interface CommonOptions {
		consistent?: boolean,
		dc?: string,
		stale?: boolean,
		token?: string,
		wait?: string,
		wan?: boolean,
		ctx?: NodeJS.EventEmitter,
		timeout?: number
	}

	declare interface Response {
		body?: Object | string | Buffer
	}

	declare interface Callback<TData> {
		(err?: Error, data?: TData, res?: Response): any
	}

	declare interface Acl {
		consul: Consul,
		create: {
		(opts: Acl.CreateOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Acl.CreateOptions): Thenable<TData>
	},
		update: {
		(opts: Acl.UpdateOptions, callback: Callback<TData>): void,
		(opts: Acl.UpdateOptions): Thenable<TData>
	},
		destroy: {
		(id: string, callback: Callback<TData>): void,
		(opts: Acl.DestroyOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Acl.DestroyOptions): Thenable<TData>
	},
		info: {
		(id: string, callback: Callback<TData>): void,
		(opts: Acl.InfoOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Acl.InfoOptions): Thenable<TData>
	},
		get: {
		(id: string, callback: Callback<TData>): void,
		(opts: Acl.GetOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Acl.GetOptions): Thenable<TData>
	},
		clone: {
		(id: string, callback: Callback<TData>): void,
		(opts: Acl.CloneOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Acl.CloneOptions): Thenable<TData>
	},
		list: {
		(opts: Acl.ListOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Acl.ListOptions): Thenable<TData>
	}
	}

	declare interface AclStatic {
		new (consul: Consul): Acl
	}

	declare interface Agent {
		consul: Consul,
		check: Agent.Check,
		service: Agent.Service,
		checks: {
		(opts: Agent.ChecksOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Agent.ChecksOptions): Thenable<TData>
	},
		services: {
		(opts: Agent.ServicesOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Agent.ServicesOptions): Thenable<TData>
	},
		members: {
		(opts: Agent.MembersOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Agent.MembersOptions): Thenable<TData>
	},
		self: {
		(opts: Agent.SelfOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Agent.SelfOptions): Thenable<TData>
	},
		maintenance: {
		(enable: boolean, callback: Callback<TData>): void,
		(opts: Agent.MaintenanceOptions, callback: Callback<TData>): void,
		(enable: boolean): Thenable<TData>,
		(opts: Agent.MaintenanceOptions): Thenable<TData>
	},
		join: {
		(address: string, callback: Callback<TData>): void,
		(opts: Agent.JoinOptions, callback: Callback<TData>): void,
		(address: string): Thenable<TData>,
		(opts: Agent.JoinOptions): Thenable<TData>
	},
		forceLeave: {
		(node: string, callback: Callback<TData>): void,
		(opts: Agent.ForceLeaveOptions, callback: Callback<TData>): void,
		(node: string): Thenable<TData>,
		(opts: Agent.ForceLeaveOptions): Thenable<TData>
	}
	}

	declare interface AgentStatic {
		new (consul: Consul): Agent,
		Check: Agent.CheckStatic,
		Service: Agent.ServiceStatic
	}

	declare interface Catalog {
		consul: Consul,
		node: Catalog.Node,
		service: Catalog.Service,
		datacenters: {
		(opts: Catalog.DatacentersOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Catalog.DatacentersOptions): Thenable<TData>
	},
		nodes: {
		(dc: string, callback: Callback<TData>): void,
		(opts: Catalog.NodesOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(dc?: string): Thenable<TData>,
		(opts?: Catalog.NodesOptions): Thenable<TData>
	},
		services: {
		(dc: string, callback: Callback<TData>): void,
		(opts: Catalog.ServicesOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(dc?: string): Thenable<TData>,
		(opts?: Catalog.ServicesOptions): Thenable<TData>
	}
	}

	declare interface CatalogStatic {
		new (consul: Consul): Catalog,
		Node: Catalog.NodeStatic,
		Service: Catalog.ServiceStatic
	}

	declare interface Event {
		consul: Consul,
		fire: {
		(name: string, payload: string | Buffer, callback: Callback<TData>): void,
		(name: string, callback: Callback<TData>): void,
		(opts: Event.FireOptions, callback: Callback<TData>): void,
		(name: string, payload: string | Buffer): Thenable<TData>,
		(name: string): Thenable<TData>,
		(opts: Event.FireOptions): Thenable<TData>
	},
		list: {
		(name: string, callback: Callback<TData>): void,
		(opts: Event.ListOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(name?: string): Thenable<TData>,
		(opts?: Event.ListOptions): Thenable<TData>
	}
	}

	declare interface EventStatic {
		new (consul: Consul): Event
	}

	declare interface Health {
		consul: Consul,
		node: {
		(node: string, callback: Callback<TData>): void,
		(opts: Health.NodeOptions, callback: Callback<TData>): void,
		(node: string): Thenable<TData>,
		(opts: Health.NodeOptions): Thenable<TData>
	},
		checks: {
		(service: string, callback: Callback<TData>): void,
		(opts: Health.ChecksOptions, callback: Callback<TData>): void,
		(service: string): Thenable<TData>,
		(opts: Health.ChecksOptions): Thenable<TData>
	},
		service: {
		(service: string, callback: Callback<TData>): void,
		(opts: Health.ServiceOptions, callback: Callback<TData>): void,
		(service: string): Thenable<TData>,
		(opts: Health.ServiceOptions): Thenable<TData>
	},
		state: {
		(state: string, callback: Callback<TData>): void,
		(opts: Health.StateOptions, callback: Callback<TData>): void,
		(state: string): Thenable<TData>,
		(opts: Health.StateOptions): Thenable<TData>
	}
	}

	declare interface HealthStatic {
		new (consul: Consul): Health
	}

	declare interface Kv {
		consul: Consul,
		get: {
		(key: string, callback: Callback<TData>): void,
		(opts: Kv.GetOptions, callback: Callback<TData>): void,
		(key: string): Thenable<TData>,
		(opts: Kv.GetOptions): Thenable<TData>
	},
		keys: {
		(key: string, callback: Callback<TData>): void,
		(opts: Kv.KeysOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(key?: string): Thenable<TData>,
		(opts?: Kv.KeysOptions): Thenable<TData>
	},
		set: {
		(key: string, value: string | Buffer, opts: Kv.SetOptions, callback: Callback<TData>): void,
		(key: string, value: string | Buffer, callback: Callback<TData>): void,
		(opts: Kv.SetOptions, callback: Callback<TData>): void,
		(key: string, value: string | Buffer, opts: Kv.SetOptions): Thenable<TData>,
		(key: string, value: string | Buffer): Thenable<TData>,
		(opts: Kv.SetOptions): Thenable<TData>
	},
		del: {
		(key: string, callback: Callback<TData>): void,
		(opts: Kv.DelOptions, callback: Callback<TData>): void,
		(key: string): Thenable<TData>,
		(opts: Kv.DelOptions): Thenable<TData>
	},
		delete: {
		(key: string, callback: Callback<TData>): void,
		(opts: Kv.DeleteOptions, callback: Callback<TData>): void,
		(key: string): Thenable<TData>,
		(opts: Kv.DeleteOptions): Thenable<TData>
	}
	}

	declare interface KvStatic {
		new (consul: Consul): Kv
	}

	declare interface Lock {
		consul: Consul,
		acquire(): void,
		release(): void
	}

	declare interface LockStatic {
		new (consul: Consul, opts: Lock.Options): Lock
	}

	declare interface Session {
		consul: Consul,
		create: {
		(opts: Session.CreateOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Session.CreateOptions): Thenable<TData>
	},
		destroy: {
		(id: string, callback: Callback<TData>): void,
		(opts: Session.DestroyOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Session.DestroyOptions): Thenable<TData>
	},
		info: {
		(id: string, callback: Callback<TData>): void,
		(opts: Session.InfoOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Session.InfoOptions): Thenable<TData>
	},
		get: {
		(id: string, callback: Callback<TData>): void,
		(opts: Session.GetOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Session.GetOptions): Thenable<TData>
	},
		node: {
		(node: string, callback: Callback<TData>): void,
		(opts: Session.NodeOptions, callback: Callback<TData>): void,
		(node: string): Thenable<TData>,
		(opts: Session.NodeOptions): Thenable<TData>
	},
		list: {
		(opts: Session.ListOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Session.ListOptions): Thenable<TData>
	},
		renew: {
		(id: string, callback: Callback<TData>): void,
		(opts: Session.RenewOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Session.RenewOptions): Thenable<TData>
	}
	}

	declare interface SessionStatic {
		new (consul: Consul): Session
	}

	declare interface Status {
		consul: Consul,
		leader: {
		(opts: Status.LeaderOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Status.LeaderOptions): Thenable<TData>
	},
		peers: {
		(opts: Status.PeersOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Status.PeersOptions): Thenable<TData>
	}
	}

	declare interface StatusStatic {
		new (consul: Consul): Status
	}

	declare interface Watch {
		consul: Consul,
		isRunning(): boolean,
		updateTime(): number,
		end(): void
	}

	declare interface WatchStatic {
		new (consul: Consul, opts: Watch.Options): Watch
	}

	declare interface ConsulOptions {
		host?: string,
		port?: string,
		secure?: boolean,
		ca?: string[],
		defaults?: CommonOptions,
		promisify?: boolean | Function
	}

	declare interface Consul {
		acl: Acl,
		agent: Agent,
		catalog: Catalog,
		event: Event,
		health: Health,
		kv: Kv,
		session: Session,
		status: Status,
		lock(opts: Lock.Options): Lock,
		watch(opts: Watch.Options): Watch
	}

	declare interface ConsulStatic {
		(opts?: ConsulOptions): Consul,
		new (opts?: ConsulOptions): Consul,
		Acl: AclStatic,
		Agent: AgentStatic,
		Catalog: CatalogStatic,
		Event: EventStatic,
		Health: HealthStatic,
		Kv: KvStatic,
		Lock: LockStatic,
		Session: SessionStatic,
		Status: StatusStatic,
		Watch: WatchStatic
	}

			
}

declare module 'Acl' {
		declare interface CreateOptions {
		name?: string,
		type?: string,
		rules?: string
	}

	declare interface UpdateOptions {
		id: string,
		name?: string,
		type?: string,
		rules?: string
	}

	declare interface DestroyOptions {
		id: string
	}

	declare interface InfoOptions {
		id: string
	}

	declare interface GetOptions {
		
	}

	declare interface CloneOptions {
		id: string
	}

	declare interface ListOptions {
		
	}

			
}

declare module 'Check' {
		declare interface ListOptions {
		
	}

	declare interface RegisterOptions {
		name: string,
		id?: string,
		serviceid?: string,
		http?: string,
		script?: string,
		interval?: string,
		ttl?: string,
		notes?: string,
		status?: string
	}

	declare interface DeregisterOptions {
		id: string
	}

	declare interface PassOptions {
		id: string,
		note?: string
	}

	declare interface WarnOptions {
		id: string,
		note?: string
	}

	declare interface FailOptions {
		id: string,
		note?: string
	}

			
}

declare module 'Agent' {
		declare interface Check {
		consul: Consul,
		list: {
		(opts: Check.ListOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Check.ListOptions): Thenable<TData>
	},
		register: {
		(opts: Check.RegisterOptions, callback: Callback<TData>): void,
		(opts: Check.RegisterOptions): Thenable<TData>
	},
		deregister: {
		(id: string, callback: Callback<TData>): void,
		(opts: Check.DeregisterOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Check.DeregisterOptions): Thenable<TData>
	},
		pass: {
		(id: string, callback: Callback<TData>): void,
		(opts: Check.PassOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Check.PassOptions): Thenable<TData>
	},
		warn: {
		(id: string, callback: Callback<TData>): void,
		(opts: Check.WarnOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Check.WarnOptions): Thenable<TData>
	},
		fail: {
		(id: string, callback: Callback<TData>): void,
		(opts: Check.FailOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Check.FailOptions): Thenable<TData>
	}
	}

	declare interface CheckStatic {
		new (consul: Consul): Check
	}

	declare interface Service {
		consul: Consul,
		list: {
		(opts: Service.ListOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(opts?: Service.ListOptions): Thenable<TData>
	},
		register: {
		(name: string, callback: Callback<TData>): void,
		(opts: Service.RegisterOptions, callback: Callback<TData>): void,
		(name: string): Thenable<TData>,
		(opts: Service.RegisterOptions): Thenable<TData>
	},
		deregister: {
		(id: string, callback: Callback<TData>): void,
		(opts: Service.DeregisterOptions, callback: Callback<TData>): void,
		(id: string): Thenable<TData>,
		(opts: Service.DeregisterOptions): Thenable<TData>
	},
		maintenance: {
		(opts: Service.MaintenanceOptions, callback: Callback<TData>): void,
		(opts: Service.MaintenanceOptions): Thenable<TData>
	}
	}

	declare interface ServiceStatic {
		new (consul: Consul): Service
	}

	declare interface ChecksOptions {
		
	}

	declare interface ServicesOptions {
		
	}

	declare interface MembersOptions {
		wan?: boolean
	}

	declare interface SelfOptions {
		
	}

	declare interface MaintenanceOptions {
		enable: boolean,
		reason?: string
	}

	declare interface JoinOptions {
		address: string,
		wan?: boolean
	}

	declare interface ForceLeaveOptions {
		node: string
	}

			
}

declare module 'Service' {
		declare interface RegisterCheck {
		http?: string,
		script?: string,
		interval?: string,
		ttl?: string,
		notes?: string,
		status?: string
	}

	declare interface ListOptions {
		
	}

	declare interface RegisterOptions {
		name: string,
		id?: string,
		tags?: string[],
		address?: string,
		port?: number,
		check?: RegisterCheck,
		checks?: RegisterCheck[]
	}

	declare interface DeregisterOptions {
		id: string
	}

	declare interface MaintenanceOptions {
		id: string,
		enable: boolean,
		reason?: string
	}

	declare interface ListOptions {
		dc?: string
	}

	declare interface NodesOptions {
		service: string,
		dc?: string,
		tag?: string
	}

			
}

declare module 'Node' {
		declare interface ListOptions {
		dc?: string
	}

	declare interface ServicesOptions {
		node: string
	}

			
}

declare module 'Catalog' {
		declare interface Node {
		consul: Consul,
		list: {
		(dc: string, callback: Callback<TData>): void,
		(opts: Node.ListOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(dc?: string): Thenable<TData>,
		(opts?: Node.ListOptions): Thenable<TData>
	},
		services: {
		(node: string, callback: Callback<TData>): void,
		(opts: Node.ServicesOptions, callback: Callback<TData>): void,
		(node: string): Thenable<TData>,
		(opts: Node.ServicesOptions): Thenable<TData>
	}
	}

	declare interface NodeStatic {
		new (consul: Consul): Node
	}

	declare interface Service {
		consul: Consul,
		list: {
		(dc: string, callback: Callback<TData>): void,
		(opts: Service.ListOptions, callback: Callback<TData>): void,
		(callback: Callback<TData>): void,
		(dc?: string): Thenable<TData>,
		(opts?: Service.ListOptions): Thenable<TData>
	},
		nodes: {
		(service: string, callback: Callback<TData>): void,
		(opts: Service.NodesOptions, callback: Callback<TData>): void,
		(service: string): Thenable<TData>,
		(opts: Service.NodesOptions): Thenable<TData>
	}
	}

	declare interface ServiceStatic {
		new (consul: Consul): Service
	}

	declare interface DatacentersOptions {
		
	}

	declare interface NodesOptions {
		
	}

	declare interface ServicesOptions {
		
	}

			
}

declare module 'Event' {
		declare interface FireOptions {
		name: string,
		payload: string | Buffer,
		node?: string,
		service?: string,
		tag?: string
	}

	declare interface ListOptions {
		name?: string
	}

			
}

declare module 'Health' {
		declare interface NodeOptions {
		node: string,
		dc?: string
	}

	declare interface ChecksOptions {
		service: string,
		dc?: string
	}

	declare interface ServiceOptions {
		service: string,
		dc?: string,
		tag?: string,
		passing?: boolean
	}

	declare interface StateOptions {
		state: string,
		dc?: string
	}

			
}

declare module 'Kv' {
		declare interface GetOptions {
		key: string,
		dc?: string,
		recurse?: boolean,
		index?: string,
		wait?: string,
		raw?: boolean,
		buffer?: boolean
	}

	declare interface KeysOptions {
		key: string,
		dc?: string,
		separator?: string
	}

	declare interface SetOptions {
		key: string,
		value: string | Buffer,
		dc?: string,
		flags?: number,
		cas?: string,
		acquire?: string,
		release?: string
	}

	declare interface DelOptions {
		key: string,
		dc?: string,
		recurse?: boolean,
		cas?: string
	}

	declare interface DeleteOptions {
		
	}

			
}

declare module 'Lock' {
		declare interface Options {
		key: string,
		session?: Object | string,
		value?: string | Buffer,
		lockwaittime?: string,
		lockretrytime?: string
	}

			
}

declare module 'Session' {
		declare interface CreateOptions {
		dc?: string,
		lockdelay?: string,
		name?: string,
		node?: string,
		checks?: string[],
		behavior?: string,
		ttl?: string
	}

	declare interface DestroyOptions {
		id: string,
		dc?: string
	}

	declare interface InfoOptions {
		id: string,
		dc?: string
	}

	declare interface GetOptions {
		
	}

	declare interface NodeOptions {
		node: string,
		dc?: string
	}

	declare interface ListOptions {
		dc?: string
	}

	declare interface RenewOptions {
		id: string,
		dc?: string
	}

			
}

declare module 'Status' {
		declare interface LeaderOptions {
		
	}

	declare interface PeersOptions {
		
	}

			
}

declare module 'Watch' {
		declare interface Options {
		method: Function,
		options?: CommonOptions
	}

			
}