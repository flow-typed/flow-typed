/** @flow */
/* eslint-disable flowtype/no-weak-types */


/********************************************************************************
 * Imports
 */

import $ from 'jquery';


/********************************************************************************
 * Global variables
 */

let testString: string = '';
let testNumber: number = 0;
let testBoolean: boolean = false;
let testObject: Object = {};
let testArray: Array<any> = [];
let testNode: Node = $('div')[0];
let testElement: Element = $('div')[0];
let testHTMLElement: HTMLElement = $('div')[0];
let testElements: Array<Element> = [testElement, testElement];
let testSelector: JQuery = $('div');
let testCoordinates: JQueryCoordinates;
let testEventObject: JQueryEventObject;
let testAnimationOptions: JQueryAnimationOptions;
let testCallbackEventObject = function (eventObject: JQueryEventObject) {return false};
let testCallbackKeyEventObject = function (eventObject: JQueryKeyEventObject) {return false};
let testCallbackMouseEventObject = function (eventObject: JQueryMouseEventObject) {return false};


/********************************************************************************
 * Static members of jQuery (those on $ and jQuery themselves)
 */

//cookie(key: string, value?: any): string;
testString = $.cookie('string');
// $ExpectError
testNumber = $.cookie('string');
$.cookie('string', {p: 0});
// $ExpectError
$.cookie(0);

//ajax(settings: JQueryAjaxSettings): JQueryXHR;
$.ajax({
	url: 'url',
	data: {id: 3},
	success: (data) => {
		console.log(data);
	}
});

//ajax(url: string, settings?: JQueryAjaxSettings): JQueryXHR;
$.ajax('url').done((data) => {
	console.log(data);
});

//ajaxPrefilter(dataTypes: string, handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any): void;
$.ajaxPrefilter('text/html', function (options) {
	if (options.crossDomain) {
		options.crossDomain = false;
	}
});

//ajaxPrefilter(handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any): void;
$.ajaxPrefilter(function (options) {
	if (options.crossDomain) {
		options.crossDomain = false;
	}
});

//ajaxSetup(options: JQueryAjaxSettings): void;
$.ajaxSetup({
	url: '/xmlhttp/',
	global: false,
	type: 'POST'
});

//get(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
$.get('ajax/test.html', function (data) {
	alert('Load was performed.');
});

//get(url: string, data?: Object | string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
$.get('test.cgi', {name: 'John', time: '2pm'}).then(function (data) {
	alert('Data Loaded: ' + data);
});

//getJSON(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;
$.getJSON('ajax/test.json', function (data) {
	alert('Load was performed.');
});

//getJSON(url: string, data?: Object | string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;
$.getJSON('ajax/test.json', {name: 'John', time: '2pm'}, function (data) {
	alert('Load was performed.');
});

//getScript(url: string, success?: (script: string, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;
$.getScript('ajax/test.js', function (data) {
	alert('Load was performed.');
});

//param: JQueryParam;

//post(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
$.post('ajax/test.html', function (data) {
	$('.result').html(data);
});

//post(url: string, data?: Object | string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
$.post('ajax/test.html', {name: 'John', time: '2pm'}, function (data) {
	$('.result').html(data);
});

//Callbacks(flags?: string): JQueryCallback;

//holdReady(hold: boolean): void;
$.holdReady(true);
// $ExpectError
$.holdReady();

//(selector: string, context?: Element | JQuery): JQuery;
testSelector = $('div');
testSelector = $('div', testElement);

//(element: Element): JQuery;
testSelector = $(testElement);

//(elementArray: Element[]): JQuery;
testSelector = $(testElements);

//(callback: (jQueryAlias?: JQueryStatic) => any): JQuery;
testSelector = $(function () {});

//(object: {}): JQuery;
testSelector = $({});

//(object: JQuery): JQuery;
const new$ = $($);

//(_: void): JQuery;
// TODO: unable to create test!!!

//(html: string, ownerDocument?: Document): JQuery;
//(html: string, attributes: Object): JQuery;
const $html = $('<div>');

//noConflict(removeAll?: boolean): JQueryStatic;
$.noConflict();

//when <T> (...deferreds: Array < T | JQueryPromise <T> /* as JQueryDeferred<T> */ > ): JQueryPromise <T> ;
// TODO: unable to create test!!!
/*
$.when($.ajax('test.aspx')).then(function (data) {
	console.log(data);
});
*/

//cssHooks: {[key: string]: any;};
//cssNumber: any;

//data <T> (element: Element, key: string, value: T): T;
$.data($('div')[0], 'test', {first: 16, last: 'pizza!'});

//data(element: Element, key: string): any;
console.log($.data($('div')[0], 'test'));

//data(element: Element, _: void): any;
console.log($.data($('div')[0]));

//dequeue(element: Element, queueName?: string): void;
$.dequeue(testElement);

//hasData(element: Element): boolean;
testBoolean = $.hasData($('div')[0]);

//queue(element: Element, queueName?: string, _: void): any[];
const q1: Array<any> = $.queue($('div')[0], 'fx');

//queue(element: Element, queueName: string, newQueue: Function[]): JQuery;
testSelector = $.queue($('div')[0], 'fx', [() => false]);

//queue(element: Element, queueName: string, callback: Function): JQuery;
testSelector = $.queue($('div')[0], 'fx', () => false);

//removeData(element: Element, name?: string): JQuery;
$.removeData($('div')[0], 'test1');

//Deferred <T> (beforeStart?: (deferred: JQueryDeferred <T> ) => any): JQueryDeferred <T> ;

//easing: JQueryEasingFunctions;

//fx: {tick: () => void; interval: number; stop: () => void; speeds: {slow: number;fast: number;}; off: boolean; step: any;};

//proxy(fnction: (...args: any[]) => any, context: Object, ...additionalArguments: any[]): any;
//proxy(context: Object, name: string, ...additionalArguments: any[]): any;
const testProxyContext = {
	name: 'John',
	test: function() {
		$('#log').append(this.name);
		$('#test').off('click', testProxyContext.test);
	}
};
$('#test').on('click', $.proxy(testProxyContext, 'test'));

//Event: JQueryEventConstructor;

//error(message: any): JQuery;
$('#book').error(function () {
	alert('Handler for .error() called.');
});

//expr: any;

//fn: any;
const testFN = $.fn;

// DEPRECATED isReady: boolean;
// DEPRECATED support: JQuerySupport;

//contains(container: Element, contained: Element): boolean;
testBoolean = $.contains(testElement, testElement);

//each <T> (collection: T[], callback: (indexInArray: number, valueOfElement: T) => any): any;
//each(collection: any, callback: (indexInArray: any, valueOfElement: any) => any): any;
$.each([52, 97], function (index: number, value: number) {
	console.log(index + ': ' + value);
});

//extend(target: any, object1?: any, ...objectN: any[]): any;
testObject = $.extend({apple: 0, banana: {weight: 52, price: 100}, cherry: 97}, {banana: {price: 200}, durian: 100});

//extend(deep: boolean, target: any, object1?: any, ...objectN: any[]): any;
testObject = $.extend(true, {apple: 0, banana: {weight: 52, price: 100}, cherry: 97}, {banana: {price: 200}, durian: 100});

//globalEval(code: string): any;
$.globalEval('var newVar = true;');

//grep <T> (array: T[], func: (elementOfArray: T, indexInArray: number) => boolean, invert?: boolean): T[];
testArray = $.grep([1, 9, 3, 8, 6, 1, 5, 9, 4, 7, 3, 8, 6, 9, 1], function (value: number, index: number) {
	return (value !== 5 && index > 4);
});

//inArray <T> (value: T, array: T[], fromIndex?: number): number;
testNumber = $.inArray('John', [4, 'Pete', 8, 'John']);

//isArray(obj: any): boolean;
testBoolean = $.isArray([]);

//isEmptyObject(obj: any): boolean;
testBoolean = $.isEmptyObject({});

//isFunction(obj: any): boolean;
testBoolean = $.isFunction(alert);

//isNumeric(value: any): boolean;
testBoolean = $.isNumeric(0);

//isPlainObject(obj: any): boolean;
testBoolean = $.isPlainObject({});

//isWindow(obj: any): boolean;
testBoolean = $.isWindow(0);

//isXMLDoc(node: Node): boolean;
testBoolean = $.isXMLDoc(testNode);

//makeArray(obj: any): any[];
testArray = $.makeArray($('li'));

//map < T, U > (array: T[], callback: (elementOfArray: T, indexInArray: number) => U): U[];
//map(arrayOrObject: any, callback: (value: any, indexOrKey: any) => any): any;
testArray = $.map([ 'a', 'b', 'c', 'd', 'e' ], function (value: string, index: number) {
	return (value.toUpperCase() + index);
});

//merge <T> (first: T[], second: T[]): T[];
testArray = $.merge([0, 1, 2], [2, 3, 4]);

//noop(_: void): any;
$.noop();

//now(_: void): number;
testNumber = $.now();

//parseJSON(json: string): any;
testObject = $.parseJSON('{id: 7}');

//parseXML(data: string): any;
testObject = $.parseXML('<rss version="2.0"><channel><title>RSS Title</title></channel></rss>');

//trim(str: string): string;
testString = $.trim(testString);

//type(obj: any): string;
testString = $.type(/test/);

//unique(array: Element[]): Element[];
const testUniqueDivs: Element[] = $.unique($('div').get());

//parseHTML(data: string, context?: HTMLElement, keepScripts?: boolean): any[];
//parseHTML(data: string, context?: Document, keepScripts?: boolean): any[];
const testHtmlNodes: Element[] = $.parseHTML('hello, <b>my name is</b> jQuery.');


/********************************************************************************
 * The jQuery instance members
 */

//ajaxComplete(handler: (event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: any) => any): JQuery;
testSelector = testSelector.ajaxComplete(function () {});

//ajaxError(handler: (event: JQueryEventObject, jqXHR: JQueryXHR, ajaxSettings: JQueryAjaxSettings, thrownError: any) => any): JQuery;
testSelector = testSelector.ajaxError(function () {});

//ajaxSend(handler: (event: JQueryEventObject, jqXHR: JQueryXHR, ajaxOptions: JQueryAjaxSettings) => any): JQuery;
testSelector = testSelector.ajaxSend(function () {});

//ajaxStart(handler: () => any): JQuery;
testSelector = testSelector.ajaxStart(function () {});

//ajaxStop(handler: () => any): JQuery;
testSelector = testSelector.ajaxStop(function () {});

//ajaxSuccess(handler: (event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: JQueryAjaxSettings) => any): JQuery;
testSelector = testSelector.ajaxSuccess(function () {});

//load(url: string, data?: string | Object, complete?: (responseText: string, textStatus: string, XMLHttpRequest: XMLHttpRequest) => any): JQuery;
testSelector = testSelector.load('ajax/test.html', function () {
	alert('Load was performed.');
});

//serialize(_: void): string;
testString = testSelector.serialize();

//serializeArray(_: void): JQuerySerializeArrayElement[];
const testArrayElements: JQuerySerializeArrayElement[] = testSelector.serializeArray();

//addClass(func: (index: number, className: string) => string): JQuery;
testSelector.addClass(function (index) {
	return 'item-' + index;
});

//addClass(className: string): JQuery;
testSelector = testSelector.addClass('class');

//addBack(selector?: string): JQuery;
testSelector = testSelector.addBack('div');

//attr(attributeName: string, func: (index: number, attr: string) => string | number): JQuery;
testSelector = testSelector.attr('href', function () {return 'ajax/test.html'});

//attr(attributeName: string, value: string | number): JQuery;
testSelector = testSelector.attr('href', 'ajax/test.html');

//attr(attributes: Object): JQuery;
testSelector = testSelector.attr({href: 'ajax/test.html'});

//attr(attributeName: string): string;
testString = testSelector.attr('href');

//hasClass(className: string): boolean;
testBoolean = testSelector.hasClass('class');

//html(func: (index: number, oldhtml: string) => string): JQuery;
testSelector = testSelector.html(function () {return '<div>'});

//html(htmlString: string): JQuery;
testSelector = testSelector.html('<div>');

//html(_: void): string;
testString = testSelector.html();

//prop(propertyName: string): any;
testString = testSelector.prop('href');

//prop(propertyName: string, value: string | number | boolean): JQuery;
testSelector = testSelector.prop('href', 'ajax/test.html');

//prop(properties: Object): JQuery;
testSelector = testSelector.prop({href: 'ajax/test.html'});

//prop(propertyName: string, func: (index: number, oldPropertyValue: any) => any): JQuery;
testSelector = $('input').prop('checked', function (i, val) {
	return !val;
});

//removeAttr(attributeName: string): JQuery;
testString = testSelector.removeAttr('href');

//removeClass(className?: string): JQuery;
testString = testSelector.removeClass('class');

//removeClass(func: (index: number, className: string) => string): JQuery;
testSelector = testSelector.removeClass(function () {
	return $(this).prev().attr('class');
});

//removeProp(propertyName: string): JQuery;
testString = testSelector.removeProp('class');

//toggleClass(className: string, swtch?: boolean): JQuery;
testSelector = testSelector.toggleClass('class');

//toggleClass(swtch?: boolean, _: void): JQuery;
testSelector = testSelector.toggleClass(true);

//toggleClass(func: (index: number, className: string, swtch: boolean) => string, swtch?: boolean): JQuery;
testSelector = $('div').toggleClass(function () {
	return $(this).parent().is('.bar') ? 'happy' : '';
});

//val(_: void): any;
testString = testSelector.val();

//val(value: string | string[] | number): JQuery;
testSelector = testSelector.val('value');

//val(func: (index: number, value: string) => string): JQuery;
testSelector = $('input').val(function (index, value) {
	return value.trim();
});

//css(propertyName: string, value: (index: number, value: string) => string | number): JQuery;
testSelector = $('div').css('width', function (index) {
	return index * 50;
});

//css(propertyName: string, value: string | number): JQuery;
testSelector = $('div').css('width', 50);

//css(properties: Object): JQuery;
testSelector = $('div').css({width: 50});

//css(propertyName: string): string;
testString = $('div').css('width');

//height(_: void): number;
testNumber = $('div').height();

//height(value: number | string): JQuery;
testSelector = $('div').height(50);

//height(func: (index: number, height: number) => number | string): JQuery;
testSelector = $('div').height(function (index) {
	return index * 50;
});

//innerHeight(_: void): number;
testNumber = $('div').innerHeight();

//innerHeight(height: number | string): JQuery;
testSelector = $('div').innerHeight(50);

//innerWidth(_: void): number;
testNumber = $('div').innerWidth();

//innerWidth(width: number | string): JQuery;
testSelector = $('div').innerWidth(50);

//offset(_: void): JQueryCoordinates;
testCoordinates = $('div').offset();

//offset(coordinates: JQueryCoordinates): JQuery;
testSelector = $('div').offset(testCoordinates);

//offset(func: (index: number, coords: JQueryCoordinates) => JQueryCoordinates): JQuery;
testSelector = $('div').offset(function () {
	return testCoordinates;
});

//outerHeight(includeMargin?: boolean): number;
testNumber = $('div').outerHeight();

//outerHeight(height: number | string): JQuery;
testSelector = $('div').outerHeight(10);

//outerWidth(includeMargin?: boolean): number;
testNumber = $('div').outerWidth();

//outerWidth(width: number | string): JQuery;
testSelector = $('div').outerWidth(10);

//position(_: void): JQueryCoordinates;
testCoordinates = $('div').position();

//scrollLeft(_: void): number;
testNumber = $('div').scrollLeft();

//scrollLeft(value: number): JQuery;
testSelector = $('div').scrollLeft(10);

//scrollTop(_: void): number;
testNumber = $('div').scrollTop();

//scrollTop(value: number): JQuery;
testSelector = $('div').scrollTop(10);

//width(_: void): number;
testNumber = $('div').width();

//width(value: number | string): JQuery;
testSelector = $('div').width(50);

//width(func: (index: number, width: number) => number | string): JQuery;
testSelector = $('div').width(function (index) {
	return index * 50;
});

//clearQueue(queueName?: string): JQuery;
testSelector = $('div').clearQueue('queue');

//data(key: string, value: any): JQuery;
testSelector = $('div').data('test', {first: 16, last: 'pizza!'});

//data(obj: {[key: string]: any;}): JQuery;
testSelector = $('div').data({key: 'value'});

//data(key: string, _: void): any;
$('div').data('key');

//data(_: void): any;
testString = $('div').data();

//dequeue(queueName?: string): JQuery;
testSelector = $('div').dequeue('queue');

//removeData(name: string): JQuery;
testSelector = $('div').removeData('name');

//removeData(list: string[]): JQuery;
testSelector = $('div').removeData(['name']);

//removeData(_: void): JQuery;
testSelector = $('div').removeData();

//promise(type?: string, target?: Object): JQueryPromise <any> ;
// TODO: unable to create test!!!

//animate(properties: Object, duration?: string | number, complete?: Function): JQuery;
testSelector = $('div').animate({}, 400, () => false);

//animate(properties: Object, duration?: string | number, easing?: string, complete?: Function): JQuery;
testSelector = $('div').animate({}, 400, 'swing', () => false);

//animate(properties: Object, options: JQueryAnimationOptions): JQuery;
testSelector = $('div').animate({}, testAnimationOptions);

//delay(duration: number, queueName?: string): JQuery;
testSelector = $('div').delay(400, 'queue');

//fadeIn(duration?: number | string, complete?: Function): JQuery;
testSelector = $('div').fadeIn(400, () => false);

//fadeIn(duration?: number | string, easing?: string, complete?: Function): JQuery;
testSelector = $('div').fadeIn(400, 'swing', () => false);

//fadeIn(options: JQueryAnimationOptions): JQuery;
testSelector = $('div').fadeIn(testAnimationOptions);

//fadeOut(duration?: number | string, complete?: Function): JQuery;
testSelector = $('div').fadeOut(400, () => false);

//fadeOut(duration?: number | string, easing?: string, complete?: Function): JQuery;
testSelector = $('div').fadeOut(400, 'swing', () => false);

//fadeOut(options: JQueryAnimationOptions): JQuery;
testSelector = $('div').fadeOut(400, () => false);

//fadeTo(duration: string | number, opacity: number, complete?: Function): JQuery;
testSelector = $('div').fadeTo(400, 0, () => false);

//fadeTo(duration: string | number, opacity: number, easing?: string, complete?: Function): JQuery;
testSelector = $('div').fadeTo(400, 0, 'swing', () => false);

//fadeToggle(duration?: number | string, complete?: Function): JQuery;
testSelector = $('div').fadeToggle(400, () => false);

//fadeToggle(duration?: number | string, easing?: string, complete?: Function): JQuery;
testSelector = $('div').fadeToggle(400, 'swing', () => false);

//fadeToggle(options: JQueryAnimationOptions): JQuery;
testSelector = $('div').fadeToggle(testAnimationOptions);

//finish(queue?: string): JQuery;
testSelector = $('div').finish();

//hide(duration?: number | string, complete?: Function): JQuery;
testSelector = $('div').hide(400, () => false);

//hide(duration?: number | string, easing?: string, complete?: Function): JQuery;
testSelector = $('div').hide(400, 'swing', () => false);

//hide(options: JQueryAnimationOptions): JQuery;
testSelector = $('div').hide(testAnimationOptions);

//show(duration?: number | string, complete?: Function): JQuery;
testSelector = $('div').show(400, () => false);

//show(duration?: number | string, easing?: string, complete?: Function): JQuery;
testSelector = $('div').show(400, 'swing', () => false);

//show(options: JQueryAnimationOptions): JQuery;
testSelector = $('div').show(testAnimationOptions);

//slideDown(duration?: number | string, complete?: Function): JQuery;
testSelector = $('div').slideDown(400, () => false);

//slideDown(duration?: number | string, easing?: string, complete?: Function): JQuery;
testSelector = $('div').slideDown(400, 'swing', () => false);

//slideDown(options: JQueryAnimationOptions): JQuery;
testSelector = $('div').slideDown(testAnimationOptions);

//slideToggle(duration?: number | string, complete?: Function): JQuery;
testSelector = $('div').slideToggle(400, () => false);

//slideToggle(duration?: number | string, easing?: string, complete?: Function): JQuery;
testSelector = $('div').slideToggle(400, 'swing', () => false);

//slideToggle(options: JQueryAnimationOptions): JQuery;
testSelector = $('div').slideToggle(testAnimationOptions);

//slideUp(duration?: number | string, complete?: Function): JQuery;
testSelector = $('div').slideUp(400, () => false);

//slideUp(duration?: number | string, easing?: string, complete?: Function): JQuery;
testSelector = $('div').slideUp(400, 'swing', () => false);

//slideUp(options: JQueryAnimationOptions): JQuery;
testSelector = $('div').slideUp(testAnimationOptions);

//stop(clearQueue?: boolean, jumpToEnd?: boolean): JQuery;
testSelector = $('div').stop(true, true);

//stop(queue?: string, clearQueue?: boolean, jumpToEnd?: boolean): JQuery;
testSelector = $('div').stop('queue', true, true);

//toggle(duration?: number | string, complete?: Function): JQuery;
testSelector = $('div').toggle(400, () => false);

//toggle(duration?: number | string, easing?: string, complete?: Function): JQuery;
testSelector = $('div').toggle(400, 'swing', () => false);

//toggle(options: JQueryAnimationOptions): JQuery;
testSelector = $('div').toggle(testAnimationOptions);

//toggle(showOrHide: boolean): JQuery;
testSelector = $('div').toggle(true);

//bind(eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').bind('click', {}, testCallbackEventObject);

//bind(eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').bind('click', testCallbackEventObject);

//bind(eventType: string, eventData: any, preventBubble: boolean): JQuery;
testSelector = $('div').bind('click', {}, false);

//bind(eventType: string, preventBubble: boolean): JQuery;
testSelector = $('div').bind('click', testCallbackEventObject);

//bind(events: any, _: void): JQuery;
testSelector = $('div').bind('click', testEventObject);

//blur(_: void): JQuery;
testSelector = $('div').blur();

//blur(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').blur(testCallbackEventObject);

//blur(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').blur({}, testCallbackEventObject);

//change(_: void): JQuery;
testSelector = $('div').change();

//change(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').change(testCallbackEventObject);

//change(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').change({}, testCallbackEventObject);

//click(_: void): JQuery;
testSelector = $('div').click();

//click(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').click(testCallbackEventObject);

//click(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').click({}, testCallbackEventObject);

//dblclick(_: void): JQuery;
testSelector = $('div').dblclick();

//dblclick(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').dblclick(testCallbackEventObject);

//dblclick(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').dblclick({}, testCallbackEventObject);

//delegate(selector: any, eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').delegate('p', 'click', testCallbackEventObject);

//delegate(selector: any, eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').delegate('p', 'click', {}, testCallbackEventObject);

//focus(_: void): JQuery;
testSelector = $('div').focus();

//focus(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').focus(testCallbackEventObject);

//focus(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').focus({}, testCallbackEventObject);

//focusin(_: void): JQuery;
testSelector = $('div').focusin();

//focusin(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').focusin(testCallbackEventObject);

//focusin(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').focusin({}, testCallbackEventObject);

//focusout(_: void): JQuery;
testSelector = $('div').focusout();

//focusout(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').focusout(testCallbackEventObject);

//focusout(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').focusout({}, testCallbackEventObject);

//hover(handlerIn: (eventObject: JQueryEventObject) => any, handlerOut: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').hover(testCallbackEventObject, testCallbackEventObject);

//hover(handlerInOut: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').hover(testCallbackEventObject);

//keydown(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
testSelector = $('div').keydown(testCallbackKeyEventObject);

//keydown(eventData: any, handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
testSelector = $('div').keydown({}, testCallbackKeyEventObject);

//keypress(_: void): JQuery;
testSelector = $('div').keypress();

//keypress(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
testSelector = $('div').keypress(testCallbackKeyEventObject);

//keypress(eventData: any, handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
testSelector = $('div').keypress({}, testCallbackKeyEventObject);

//keyup(_: void): JQuery;
testSelector = $('div').keyup();

//keyup(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
testSelector = $('div').keyup(testCallbackKeyEventObject);

//keyup(eventData: any, handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
testSelector = $('div').keyup(testCallbackKeyEventObject);

//load(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').load(testCallbackEventObject);

//load(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').load({}, testCallbackEventObject);

//mousedown(_: void): JQuery;
testSelector = $('div').mousedown();

//mousedown(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mousedown(testCallbackMouseEventObject);

//mousedown(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mousedown({}, testCallbackMouseEventObject);

//mouseenter(_: void): JQuery;
testSelector = $('div').mouseenter();

//mouseenter(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mouseenter(testCallbackMouseEventObject);

//mouseenter(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mouseenter({}, testCallbackMouseEventObject);

//mouseleave(_: void): JQuery;
testSelector = $('div').mouseleave();

//mouseleave(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mouseleave(testCallbackMouseEventObject);

//mouseleave(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mouseleave({}, testCallbackMouseEventObject);

//mousemove(_: void): JQuery;
testSelector = $('div').mousemove();

//mousemove(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mousemove(testCallbackMouseEventObject);

//mousemove(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mousemove({}, testCallbackMouseEventObject);

//mouseout(_: void): JQuery;
testSelector = $('div').mouseout();

//mouseout(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mouseout(testCallbackMouseEventObject);

//mouseout(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mouseout({}, testCallbackMouseEventObject);

//mouseover(_: void): JQuery;
testSelector = $('div').mouseover();

//mouseover(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mouseover(testCallbackMouseEventObject);

//mouseover(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mouseover({}, testCallbackMouseEventObject);

//mouseup(_: void): JQuery;
testSelector = $('div').mouseup();

//mouseup(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mouseup(testCallbackMouseEventObject);

//mouseup(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
testSelector = $('div').mouseup({}, testCallbackMouseEventObject);

//off(_: void): JQuery;
testSelector = $('div').off();

//off(events: string): JQuery;
testSelector = $('div').off('click');

//off(events: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').off('click', 'p', testCallbackEventObject);

//off(events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
// TODO: unable to create test!!!

//off(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').off('click', testCallbackEventObject);

//off(events: {[key: string]: any;}, selector?: string): JQuery;
testSelector = $('div').off({'click': testCallbackEventObject}, 'p');

//on(events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
testSelector = $('div').on('click', testCallbackEventObject);

//on(events: string, selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;
testSelector = $('div').on('click', 'p', testCallbackEventObject);

//on(events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;
testSelector = $('div').on('click', 'p', {}, testCallbackEventObject);

//on(events: string, data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
testSelector = $('div').on('click', {}, testCallbackEventObject);

//on(events: {[key: string]: any;}, selector?: string, data?: any): JQuery;
testSelector = $('div').on({'click': testCallbackEventObject}, 'p', {});

//on(events: {[key: string]: any;}, data?: any): JQuery;
testSelector = $('div').on({'click': testCallbackEventObject}, {});

//one(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').one('click', testCallbackEventObject);

//one(events: string, selector: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').one('click', 'p', testCallbackEventObject);

//one(events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').one('click', 'p', {}, testCallbackEventObject);

//one(events: string, data: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').one('click', {}, testCallbackEventObject);

//one(events: {[key: string]: any;}, selector?: string, data?: any): JQuery;
testSelector = $('div').one({'click': testCallbackEventObject}, 'p', {});

//one(events: {[key: string]: any;}, data?: any): JQuery;
testSelector = $('div').one({'click': testCallbackEventObject}, {});

//ready(handler: (jQueryAlias?: JQueryStatic) => any): JQuery;
testSelector = $('div').ready(() => false);

//resize(_: void): JQuery;
testSelector = $('div').resize();

//resize(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').resize(testCallbackEventObject);

//resize(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').resize({}, testCallbackEventObject);

//scroll(_: void): JQuery;
testSelector = $('div').scroll();

//scroll(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').scroll(testCallbackEventObject);

//scroll(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').scroll({}, testCallbackEventObject);

//select(_: void): JQuery;
testSelector = $('div').select();

//select(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').select(testCallbackEventObject);

//select(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').select({}, testCallbackEventObject);

//submit(_: void): JQuery;
testSelector = $('div').submit();

//submit(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').submit(testCallbackEventObject);

//submit(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').submit({}, testCallbackEventObject);

//trigger(eventType: string, extraParameters?: any[] | Object): JQuery;
testSelector = $('div').trigger('click', {});

//trigger(event: JQueryEventObject, extraParameters?: any[] | Object): JQuery;
testSelector = $('div').trigger('click', testEventObject);

//triggerHandler(eventType: string, ...extraParameters: any[]): Object;
testSelector = $('div').triggerHandler('click', {});

//triggerHandler(event: JQueryEventObject, ...extraParameters: any[]): Object;
testSelector = $('div').triggerHandler('click', testEventObject);

//unbind(eventType?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').unbind('click', testCallbackEventObject);

//unbind(eventType: string, fls: boolean): JQuery;
testSelector = $('div').unbind('click', false);

//unbind(evt: any): JQuery;
testSelector = $('div').unbind(testEventObject);

//undelegate(_: void): JQuery;
testSelector = $('div').undelegate();

//undelegate(selector: string, eventType: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').undelegate('p', 'click', testCallbackEventObject);

//undelegate(selector: string, events: Object): JQuery;
testSelector = $('div').undelegate('p', testEventObject);

//undelegate(namespace: string): JQuery;
testSelector = $('div').undelegate('namespace');

//unload(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').unload(testCallbackEventObject);

//unload(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').unload({}, testCallbackEventObject);

//error(handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').error(testCallbackEventObject);

//error(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
testSelector = $('div').error({}, testCallbackEventObject);

//pushStack(elements: any[]): JQuery;
testSelector = $('div').pushStack([testElement]);

//pushStack(elements: any[], name: string, arguments: any[]): JQuery;
testSelector = $('div').pushStack([testElement], 'name', [{}]);

//after(content1: JQuery | any[] | Element | Text | string, ...content2: any[]): JQuery;
testSelector = $('div').after('<p>Test</p>');

//after(func: (index: number, html: string) => string | Element | JQuery): JQuery;
testSelector = $('div').after(() => '<p>Test</p>');

//append(content1: JQuery | any[] | Element | Text | string, ...content2: any[]): JQuery;
testSelector = $('div').append('<p>Test</p>');

//append(func: (index: number, html: string) => string | Element | JQuery): JQuery;
testSelector = $('div').append(() => '<p>Test</p>');

//appendTo(target: JQuery | any[] | Element | string): JQuery;
testSelector = $('div').appendTo('<p>Test</p>');

//before(content1: JQuery | any[] | Element | Text | string, ...content2: any[]): JQuery;
testSelector = $('div').before('<p>Test</p>');

//before(func: (index: number, html: string) => string | Element | JQuery): JQuery;
testSelector = $('div').before(() => '<p>Test</p>');

//clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): JQuery;
testSelector = $('div').clone(true, true);

//detach(selector?: string): JQuery;
testSelector = $('div').detach('p');

//empty(_: void): JQuery;
testSelector = $('div').empty();

//insertAfter(target: JQuery | any[] | Element | Text | string): JQuery;
testSelector = $('div').insertAfter('<p>');

//insertBefore(target: JQuery | any[] | Element | Text | string): JQuery;
testSelector = $('div').insertBefore('<p>');

//prepend(content1: JQuery | any[] | Element | Text | string, ...content2: any[]): JQuery;
testSelector = $('div').prepend('<p>');

//prepend(func: (index: number, html: string) => string | Element | JQuery): JQuery;
testSelector = $('div').prepend(() => '<p>');

//prependTo(target: JQuery | any[] | Element | string): JQuery;
testSelector = $('div').prependTo('<p>');

//remove(selector?: string): JQuery;
testSelector = $('div').remove('p');

//replaceAll(target: JQuery | any[] | Element | string): JQuery;
testSelector = $('div').replaceAll(testSelector);

//replaceWith(newContent: JQuery | any[] | Element | Text | string): JQuery;
testSelector = $('div').replaceWith(testSelector);

//replaceWith(func: () => Element | JQuery): JQuery;
testSelector = $('div').replaceWith(() => $('div')[0]);

//text(text: string | number | boolean): JQuery;
testSelector = $('div').text('text');

//text(func: (index: number, text: string) => string): JQuery;
testSelector = $('div').text(() => 'text');

//text(_: void): string;
testString = $('div').text();

//toArray(_: void): any[];
testArray = $('div').toArray();

//unwrap(_: void): JQuery;
testSelector = $('div').unwrap();

//wrap(wrappingElement: JQuery | Element | string): JQuery;
testSelector = $('div').wrap('div');

//wrap(func: (index: number) => string | JQuery): JQuery;
testSelector = $('div').wrap(() => 'div');

//wrapAll(wrappingElement: JQuery | Element | string): JQuery;
testSelector = $('div').wrapAll('div');

//wrapAll(func: (index: number) => string): JQuery;
testSelector = $('div').wrapAll(() => 'div');

//wrapInner(wrappingElement: JQuery | Element | string): JQuery;
testSelector = $('div').wrapInner('div');

//wrapInner(func: (index: number) => string): JQuery;
testSelector = $('div').wrapInner(() => 'div');

//each(func: (index: number, elem: Element) => any): JQuery;
testSelector = $('div').each((index) => index);

//get(index: number): HTMLElement;
testHTMLElement = $('div').get(0);

//get(_: void): any[];
testArray = $('div').get();

//index(_: void): number;
testNumber = $('div').index();

//index(selector: string | JQuery | Element): number;
testNumber = $('div').index('p');

//length: number;
testNumber = $('div').length;

//selector: string;
testString = $('div').selector;

//[index: number]: HTMLElement;
testHTMLElement = $('div')[0];

//add(selector: string, context?: Element): JQuery;
testSelector = $('div').add('p', testElement);

//add(...elements: Element[]): JQuery;
testSelector = $('div').add(testElement);

//add(html: string, _:void): JQuery;
testSelector = $('div').add('p');

//add(obj: JQuery, _:void): JQuery;
testSelector = $('div').add(testSelector);

//children(selector?: string): JQuery;
testSelector = $('div').children('div');

//closest(selector: string, _:void): JQuery;
testSelector = $('div').closest('div');

//closest(selector: string, context?: Element): JQuery;
testSelector = $('div').closest('div', testElement);

//closest(obj: JQuery, _:void): JQuery;
testSelector = $('div').closest(testSelector);

//closest(element: Element, _:void): JQuery;
testSelector = $('div').closest(testElement);

//closest(selectors: any, context?: Element): any[];
// TODO: unable to create test!!!

//contents(_: void): JQuery;
testSelector = $('div').contents();

//end(_: void): JQuery;
testSelector = $('div').end();

//eq(index: number): JQuery;
testSelector = $('div').eq(1);

//filter(selector: string): JQuery;
testSelector = $('div').filter('p');

//filter(func: (index: number, element: Element) => any): JQuery;
testSelector = $('div').filter((index) => index);

//filter(element: Element): JQuery;
testSelector = $('div').filter(testElement);

//filter(obj: JQuery): JQuery;
testSelector = $('div').filter(testSelector);

//find(selector: string): JQuery;
testSelector = $('div').find('p');

//find(element: Element): JQuery;
testSelector = $('div').find(testElement);

//find(obj: JQuery): JQuery;
testSelector = $('div').find(testSelector);

//first(_: void): JQuery;
testSelector = $('div').first();

//has(selector: string): JQuery;
testSelector = $('div').has('p');

//has(contained: Element): JQuery;
testSelector = $('div').has(testElement);

//is(selector: string): boolean;
testBoolean = $('div').is('p');

//is(func: (index: number, element: Element) => boolean): boolean;
testBoolean = $('div').is((index) => index > 0);

//is(selection: JQuery): boolean;
testBoolean = $('div').is(testSelector);

//is(elements: Element | Element[]): boolean;
testBoolean = $('div').is(testElement);

//last(_: void): JQuery;
testSelector = $('div').last();

//map(callback: (index: number, domElement: Element) => any): JQuery;
testSelector = $('div').map((index) => index);

//next(selector?: string): JQuery;
testSelector = $('div').next('p');

//nextAll(selector?: string): JQuery;
testSelector = $('div').nextAll('p');

//nextUntil(selector?: string, filter?: string): JQuery;
testSelector = $('div').nextUntil('p');

//nextUntil(element?: Element, filter?: string): JQuery;
testSelector = $('div').nextUntil(testElement);

//nextUntil(obj?: JQuery, filter?: string): JQuery;
testSelector = $('div').nextUntil(testSelector);

//not(selector: string): JQuery;
testSelector = $('div').not('p');

//not(func: (index: number, element: Element) => boolean): JQuery;
testSelector = $('div').not(() => false);

//not(elements: Element | Element[]): JQuery;
testSelector = $('div').not(testElement);

//not(obj: JQuery): JQuery;
testSelector = $('div').not(testSelector);

//offsetParent(_: void): JQuery;
testSelector = $('div').offsetParent();

//parent(selector?: string): JQuery;
testSelector = $('div').parent('p');

//parents(selector?: string): JQuery;
testSelector = $('div').parents('p');

//parentsUntil(selector?: string, filter?: string): JQuery;
testSelector = $('div').parentsUntil('p');

//parentsUntil(element?: Element, filter?: string): JQuery;
testSelector = $('div').parentsUntil(testElement);

//parentsUntil(obj?: JQuery, filter?: string): JQuery;
testSelector = $('div').parentsUntil(testSelector);

//prev(selector?: string): JQuery;
testSelector = $('div').prev('p');

//prevAll(selector?: string): JQuery;
testSelector = $('div').prevAll('p');

//prevUntil(selector?: string, filter?: string): JQuery;
testSelector = $('div').prevUntil('p');

//prevUntil(element?: Element, filter?: string): JQuery;
testSelector = $('div').prevUntil(testElement);

//prevUntil(obj?: JQuery, filter?: string): JQuery;
testSelector = $('div').prevUntil(testSelector);

//siblings(selector?: string): JQuery;
testSelector = $('div').siblings('p');

//slice(start: number, end?: number): JQuery;
testSelector = $('div').slice(1, 3);

//queue(queueName?: string, _:void): any[];
testArray = $('div').queue('queue');

//queue(newQueue: Function[]): JQuery;
testSelector = $('div').queue([() => false]);

//queue(callback: Function): JQuery;
testSelector = $('div').queue(() => false);

//queue(queueName: string, newQueue: Function[]): JQuery;
testSelector = $('div').queue('queue', [() => false]);

//queue(queueName: string, callback: Function): JQuery;
testSelector = $('div').queue('queue', () => false);
