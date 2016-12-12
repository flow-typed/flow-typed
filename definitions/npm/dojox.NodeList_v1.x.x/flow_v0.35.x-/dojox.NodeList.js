

declare module 'dojox.NodeList' {
					
}

declare module 'NodeList' {
		declare interface delegate {
		(array: any): void
	}

			
}

declare module 'delegate' {
		declare interface addClass {
		(className: String): void
	}

	declare interface addClass {
		(className: any[]): void
	}

	declare interface addClassFx {
		(cssClass: any, args: any): {
		type: Function,
		value: any
	}
	}

	declare interface addContent {
		(content: String, position: String): Function
	}

	declare interface addContent {
		(content: HTMLElement, position: String): Function
	}

	declare interface addContent {
		(content: Object, position: String): Function
	}

	declare interface addContent {
		(content: dojo.NodeList, position: String): Function
	}

	declare interface addContent {
		(content: String, position: number): Function
	}

	declare interface addContent {
		(content: HTMLElement, position: number): Function
	}

	declare interface addContent {
		(content: Object, position: number): Function
	}

	declare interface addContent {
		(content: dojo.NodeList, position: number): Function
	}

	declare interface adopt {
		(queryOrListOrNode: String, position: String): any
	}

	declare interface adopt {
		(queryOrListOrNode: any[], position: String): any
	}

	declare interface adopt {
		(queryOrListOrNode: HTMLElement, position: String): any
	}

	declare interface after {
		(content: String): any
	}

	declare interface after {
		(content: HTMLElement): any
	}

	declare interface after {
		(content: NodeList): any
	}

	declare interface andSelf {
		(): any
	}

	declare interface anim {
		(properties: Object, duration: number, easing: Function, onEnd: Function, delay: number): any
	}

	declare interface animateProperty {
		(args: Object): any
	}

	declare interface append {
		(content: String): any
	}

	declare interface append {
		(content: HTMLElement): any
	}

	declare interface append {
		(content: NodeList): any
	}

	declare interface appendTo {
		(query: String): any
	}

	declare interface at {
		(index: number[]): any
	}

	declare interface attr {
		(property: String, value: String): any
	}

	declare interface before {
		(content: String): any
	}

	declare interface before {
		(content: HTMLElement): any
	}

	declare interface before {
		(content: NodeList): any
	}

	declare interface children {
		(query: String): any
	}

	declare interface clone {
		(): any
	}

	declare interface closest {
		(query: String, root: String): any
	}

	declare interface closest {
		(query: String, root: HTMLElement): any
	}

	declare interface concat {
		(item: Object): any
	}

	declare interface connect {
		(methodName: String, objOrFunc: Object, funcName: String): void
	}

	declare interface connect {
		(methodName: String, objOrFunc: Function, funcName: String): void
	}

	declare interface connect {
		(methodName: String, objOrFunc: String, funcName: String): void
	}

	declare interface coords {
		(): void
	}

	declare interface data {
		(key: Object, value: any): any
	}

	declare interface data {
		(key: String, value: any): any
	}

	declare interface delegate {
		(selector: String, eventName: String, fn: Function): any
	}

	declare interface dtl {
		(template: String, context: Object): Function
	}

	declare interface empty {
		(): any
	}

	declare interface end {
		(): any
	}

	declare interface even {
		(): any
	}

	declare interface every {
		(callback: Function, thisObject: Object): any
	}

	declare interface fadeIn {
		(args: Object): any
	}

	declare interface fadeOut {
		(args: Object): any
	}

	declare interface filter {
		(filter: String): any
	}

	declare interface filter {
		(filter: Function): any
	}

	declare interface first {
		(): any
	}

	declare interface forEach {
		(callback: any, thisObj: any): Function
	}

	declare interface html {
		(value: String): any
	}

	declare interface html {
		(value: HTMLElement): any
	}

	declare interface html {
		(value: NodeList): any
	}

	declare interface indexOf {
		(value: Object, fromIndex: number): any
	}

	declare interface innerHTML {
		(value: String): any
	}

	declare interface innerHTML {
		(value: HTMLElement): any
	}

	declare interface innerHTML {
		(value: NodeList): any
	}

	declare interface insertAfter {
		(query: String): any
	}

	declare interface insertBefore {
		(query: String): any
	}

	declare interface instantiate {
		(declaredClass: String, properties: Object): any
	}

	declare interface instantiate {
		(declaredClass: Object, properties: Object): any
	}

	declare interface last {
		(): any
	}

	declare interface lastIndexOf {
		(value: Object, fromIndex: number): any
	}

	declare interface map {
		(func: Function, obj: Function): any
	}

	declare interface marginBox {
		(): void
	}

	declare interface next {
		(query: String): any
	}

	declare interface nextAll {
		(query: String): any
	}

	declare interface odd {
		(): any
	}

	declare interface on {
		(eventName: any, listener: any): any
	}

	declare interface orphan {
		(filter: String): any
	}

	declare interface parent {
		(query: String): any
	}

	declare interface parents {
		(query: String): any
	}

	declare interface place {
		(queryOrNode: String, position: String): any
	}

	declare interface place {
		(queryOrNode: HTMLElement, position: String): any
	}

	declare interface position {
		(): any
	}

	declare interface prepend {
		(content: String): any
	}

	declare interface prepend {
		(content: HTMLElement): any
	}

	declare interface prepend {
		(content: NodeList): any
	}

	declare interface prependTo {
		(query: String): any
	}

	declare interface prev {
		(query: String): any
	}

	declare interface prevAll {
		(query: String): any
	}

	declare interface query {
		(queryStr: String): any
	}

	declare interface remove {
		(filter: String): any
	}

	declare interface removeAttr {
		(name: String): void
	}

	declare interface removeClass {
		(className: String): any
	}

	declare interface removeClass {
		(className: any[]): any
	}

	declare interface removeClassFx {
		(cssClass: any, args: any): {
		type: Function,
		value: any
	}
	}

	declare interface removeData {
		(key: String): void
	}

	declare interface replaceAll {
		(query: String): any
	}

	declare interface replaceClass {
		(addClassStr: String, removeClassStr: String): void
	}

	declare interface replaceClass {
		(addClassStr: any[], removeClassStr: String): void
	}

	declare interface replaceClass {
		(addClassStr: String, removeClassStr: any[]): void
	}

	declare interface replaceClass {
		(addClassStr: any[], removeClassStr: any[]): void
	}

	declare interface replaceWith {
		(content: String): any
	}

	declare interface replaceWith {
		(content: HTMLElement): any
	}

	declare interface replaceWith {
		(content: NodeList): any
	}

	declare interface siblings {
		(query: String): any
	}

	declare interface slice {
		(begin: number, end: number): any
	}

	declare interface slideTo {
		(args: Object): any
	}

	declare interface some {
		(callback: Function, thisObject: Object): any
	}

	declare interface splice {
		(index: number, howmany: number, item: Object[]): any
	}

	declare interface style {
		(property: String, value: String): any
	}

	declare interface text {
		(value: String): any
	}

	declare interface toggleClass {
		(className: String, condition: boolean): void
	}

	declare interface toggleClassFx {
		(cssClass: any, force: any, args: any): {
		type: Function,
		value: any
	}
	}

	declare interface toString {
		(): any
	}

	declare interface val {
		(value: String): any
	}

	declare interface val {
		(value: any[]): any
	}

	declare interface wipeIn {
		(args: Object): any
	}

	declare interface wipeOut {
		(args: Object): any
	}

	declare interface wrap {
		(html: String): any
	}

	declare interface wrap {
		(html: HTMLElement): any
	}

	declare interface wrapAll {
		(html: String): any
	}

	declare interface wrapAll {
		(html: HTMLElement): any
	}

	declare interface wrapInner {
		(html: String): any
	}

	declare interface wrapInner {
		(html: HTMLElement): any
	}

	declare interface _nodeDataCache {
		
	}

			
}

declare module 'dojox/NodeList/delegate' {
					declare module.exports: delegate


}

declare module 'dojox/NodeList/delegate._nodeDataCache' {
					declare module.exports: _nodeDataCache


}