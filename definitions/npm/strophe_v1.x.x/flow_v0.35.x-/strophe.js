

declare module 'strophe' {
			declare function $build(name: string, attrs?: any): wrapper.Strophe.Builder

	declare function $msg(attrs?: any): wrapper.Strophe.Builder

	declare function $iq(attrs?: any): wrapper.Strophe.Builder

	declare function $pres(attrs?: any): wrapper.Strophe.Builder

		declare module.exports: undefined


}

declare module 'npm$namespace$wrapper' {
			declare function $build(name: string, attrs?: any): Strophe.Builder

	declare function $msg(attrs?: any): Strophe.Builder

	declare function $iq(attrs?: any): Strophe.Builder

	declare function $pres(attrs?: any): Strophe.Builder

		
}

declare module 'Strophe' {
		declare interface Builder {
		tree(): Element,
		toString(): string,
		up(): Builder,
		attrs(moreattrs: any): Builder,
		c(name: string, attrs?: any, text?: string): Builder,
		cnode(elem: Node): Builder,
		t(text: string): Builder,
		h(html: string): Builder
	}

	declare interface ConnectionOptions {
		protocol?: string,
		sync?: boolean
	}

	declare interface Connection {
		jid: string,
		authzid: string,
		pass: string,
		authcid: string,
		domain: string,
		servtype: string,
		maxRetries: number,
		reset(): void,
		pause(): void,
		resume(): void,
		getUniqueId(suffix?: string | number): string,
		connect(
		jid?: string, pass?: string, callback?: (status: Status, condition: string) => any, wait?: number, hold?: number, route?: string
	): void,
		attach(
		jid: string, sid: string, rid: string, callback?: (status: Status, condition: string) => any, wait?: number, hold?: number, wind?: number
	): void,
		xmlInput(elem: Element): void,
		xmlOutput(elem: Element): void,
		rawInput(data: string): void,
		rawOutput(data: string): void,
		send(elem: Element | Element[] | Builder): void,
		flush(): void,
		sendIQ(
		elem: Element | Builder, callback?: (stanza: Element) => any, errback?: (stanza: Element) => any, timeout?: number
	): string,
		addTimedHandler(period: number, handler: () => boolean): any,
		deleteTimedHandler(handRef: any): void,
		addHandler(
		handler: (stanza: Element) => boolean, ns: string, name: string, type?: string, id?: string, from?: string, options?: {
		matchBare: boolean
	}
	): any,
		deleteHandler(handRef: any): void,
		disconnect(reason: string): void
	}

	declare interface SASLMechanism {
		test(connection: Connection): boolean,
		priority: number
	}

	declare function addNamespace(name: string, value: string): void

	declare function forEachChild(elem: Element, elemName: string, func: (child: Element) => any): void

	declare function isTagEqual(el: Element, name: string): boolean

	declare function xmlGenerator(): Document

	declare function xmlElement(name: string, attrs?: any, text?: string): Element

	declare function xmlElement(name: string, text?: string, attrs?: any): Element

	declare function xmlescape(text: string): string

	declare function xmlunescape(text: string): string

	declare function xmlTextNode(text: string): Text

	declare function xmlHtmlNode(html: string): Document

	declare function getText(elem: Element): string

	declare function copyElement(elem: Element): Element

	declare function createHtml(elem: Element): Element

	declare function escapeNode(node: string): string

	declare function unescapeNode(node: string): string

	declare function getNodeFromJid(jid: string): string

	declare function getDomainFromJid(jid: string): string

	declare function getResourceFromJid(jid: string): string

	declare function getBareJidFromJid(jid: string): string

	declare function log(level: LogLevel, msg: string): void

	declare function debug(msg: string): void

	declare function info(msg: string): void

	declare function warn(msg: string): void

	declare function error(msg: string): void

	declare function fatal(msg: string): void

	declare function serialize(elem: Element | Builder): string

	declare function addConnectionPlugin(name: string, ptype: any): void

		


}

declare module '$build' {
					


}

declare module '$msg' {
					


}

declare module '$iq' {
					


}

declare module '$pres' {
					


}