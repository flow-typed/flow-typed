/* @flow */

import { EventEmitter } from "events";

// Note:
// This type definition assumes "sync": false in wdio.conf.js.

declare module "webdriverio" {
  declare export interface Value<T> {
    value: T;
    status: number;
    state: string;
    sessionId: string;
    hCode?: number;
    class?: string;
  }

  declare export class WebElement {
    ELEMENT: string;
    getAttribute(attributeName: string): Client<string>;
    getCssProperty(cssProperty: string): Client<string>;
    getElementSize(which?: string): Client<number | ElementSize>;
    getHTML(includeSelectorTag?: boolean): Client<string>;
    getLocation(which?: string): Client<Position | number>;
    getLocationInView(which?: string): Client<Position | number>;
    getSource(): Client<string>;
    getTagName(): Client<string>;
    getText(): Client<string>;
    getValue(): Client<string>;
  }

  declare export type ElementValue = Value<WebElement>;

  declare export interface Cookie {
    name: string;
    value: string;
  }

  declare export interface GestureAttr {
    element?: string;
    x?: number;
    y?: number;
  }

  declare export interface Location {
    latitude: number;
    longitude: number;
    altitude: number;
  }

  declare export interface AndroidAppInformation {
    appPackage: string;
    appActivity: string;
  }

  declare export interface Action {
    action: string;
    options?: {
      x?: number,
      y?: number
    };
  }

  declare interface ElementSize {
    width: number;
    height: number;
  }
  declare type WindowSize = ElementSize;

  declare interface Position {
    x: number;
    y: number;
  }

  declare export type ButtonCode = 0 | 1 | 2;

  declare interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  declare interface CommandHistory {
    name: string;
    args: Array<any>;
    result: any;
  }

  declare export class Client<T> extends EventEmitter {
    options: RemoteOptions;

    // Actions
    addValue(selector: string, values: string | number): Client<string>;
    clearElement(selector: string): this;
    click(selector: string): this;
    doubleClick(selector: string): this;
    dragAndDrop(selector: string, destinationElem: string): this;
    leftClick(selector: string, xoffset: number, yoffset: number): this;
    middleClick(selector: string, xoffset: number, yoffset: number): this;
    moveToObject(selector: string, xoffset: number, yoffset: number): this;
    rightClick(selector: string, xoffset: number, yoffset: number): this;
    selectByAttribute(selector: string, attribute: string, value: string): this;
    selectByIndex(selector: string, index: number): this;
    selectByValue(selector: string, value: string): this;
    selectByVisibleText(selector: string, text: string): this;
    selectorExecute(
      selector: string,
      script: Function,
      ...args: Array<any>
    ): Array<ElementValue>;
    selectorExecuteAsync(
      selector: string,
      script: Function,
      ...args: Array<any>
    ): Client<Array<ElementValue>>; // XXX: Is return type correct?
    setValue(selector: string, values: string | number): this;
    submitForm(selector: string): this;

    // Cookie
    deleteCookie(name?: string): this;
    getCookie(name?: string): Client<Cookie | Cookie[]>;
    setCookie(cookie: Cookie): this;

    // Grid
    getGridNodeDetails(): Client<Object>;
    gridProxyDetails(): Client<Object>;
    gridTestSession(): Client<Object>;

    // Mobile
    background(seconds: number): this;
    closeApp(): this;
    context(id?: string): this;
    contexts(): Client<Value<string[]>>;
    currentActivity(): Client<Value<any>>; // What's actual value?
    deviceKeyEvent(keyValue: number): this;
    getAppStrings(language: string): Client<Value<string[]>>; // Is return value correct?
    getCurrentDeviceActivity(): Client<Value<any>>; // What's actual value?
    getDeviceTime(): Client<Value<any>>; // What's actual value?
    getGeoLocation(): Client<Value<any>>; // What's actual value?
    getNetworkConnection(): Client<Value<any>>; // What's actual value?
    getOrientation(): Client<Value<string>>;
    hideDeviceKeyboard(strategy?: string): this;
    hold(selector: string): this;
    installApp(path: string): this;
    isAppInstalled(bundleId: string): Client<Value<boolean>>;
    isLocked(): Client<Value<boolean>>;
    launch(): this;
    lock(seconds: number): this;
    longPressKeycode(keycode: string | number, metastate: string): this;
    openNotifications(): this;
    orientation(): Value<string>;
    performMultiAction(touchAttrs: Array<GestureAttr>): this;
    performTouchAction(touchAttrs: Array<GestureAttr>): this;
    pressKeycode(keycode: string, metastate: string): this;
    pullFile(path: string): this;
    pullFolder(path: string): this;
    pushFile(path: string, data: Buffer): this;
    release(selector: string): this;
    removeApp(bundleId: string): this;
    reset(): this;
    rotate(
      x: number,
      y: number,
      duration: number,
      radius: number,
      rotation: number,
      touchCount: number
    ): this;
    setGeoLocation(location: Location): this;
    setImmediateValue(el: any, value: string): Client<void>; // Undocumented
    setNetworkConnection(id: number): this;
    setOrientation(orientation: string): this;
    settings(): Client<Value<any>>;
    shake(): this;
    startActivity(info: AndroidAppInformation): this;
    strings(): Client<Value<Array<string>>>;
    swipe(
      selector?: string,
      xoffset?: number,
      yoffset?: number,
      speed?: number
    ): this;
    swipeDown(selector: string, speed: number): this;
    swipeLeft(selector: string, speed: number): this;
    swipeRight(selector: string, speed: number): this;
    swipeUp(selector: string, speed: number): this;
    toggleAirplaneMode(): this;
    toggleData(): this;
    toggleLocationServices(): this;
    toggleTouchIdEnrollment(match: boolean): this;
    toggleWiFi(): this;
    touch(selector: string, longClick?: boolean): this;
    touchMultiPerform(actions: Array<Action>): this;
    touchPerform(actions: Array<Action>): this;
    unlock(): this;

    // Property
    getAttribute(selector: string, attributeName: string): Client<string>;
    getCssProperty(selector: string, cssProperty: string): Client<string>;
    getElementSize(
      selector: string,
      which?: string
    ): Client<number | ElementSize>;
    getHTML(selector: string, includeSelectorTag?: boolean): Client<string>;
    getLocation(selector: string, which?: string): Client<Position | number>;
    getLocationInView(
      selector: string,
      which?: string
    ): Client<Position | number>;
    getSource(selector: string): Client<string>;
    getTagName(selector: string): Client<string>;
    getText(selector: string): Client<string>;
    getValue(selector: string): Client<string>;
    getTitle(): Client<string>;
    getUrl(): Client<string>;

    // Protocol
    alertAccept(selector: string): this;
    alertDismiss(selector: string): this;
    alertText(text?: string): this;
    applicationCacheStatus(selector: string): any; // Return type is undocumented
    back(selector: string): this;
    buttonDown(button: ButtonCode): Client<string>;
    buttonPress(button: ButtonCode): Client<any>;
    buttonUp(button: ButtonCode): Client<any>;
    cookie(method: string, args: Object | string): this;
    cookie(): Client<Array<Cookie>>;
    doDoubleClick(): this;
    element(selector: string): Client<ElementValue>;
    elementActive(): Client<ElementValue>;
    elementIdAttribute(id: string, attr: string): Client<string>;
    elementIdClear(id: string): this;
    elementIdClick(id: string): this;
    elementIdCssProperty(id: string, cssPropertyName: string): Client<string>;
    elementIdDisplayed(id: string): Client<boolean>;
    elementIdElement(id: string, selector: string): Client<ElementValue>;
    elementIdElements(id: string): Client<Value<Array<WebElement>>>;
    elementIdEnabled(id: string): Client<boolean>;
    elementIdLocation(id: string): Client<Position>;
    elementIdLocationInView(id: string): Client<Position>;
    elementIdName(id: string): Client<string>;
    elementIdRect(id: string): Client<Rectangle>;
    elementIdSelected(id: string): Client<boolean>;
    elementIdSize(id: string): Client<ElementSize>;
    elementIdText(id: string): Client<string>;
    elementIdValue(id: string, value: string | Array<string>): this;
    elements(selector: string): Client<Value<Array<WebElement>>>;
    execute(script: string | Function, ...args: Array<any>): any;
    executeAsync(script: string | Function, ...args: Array<any>): Client<any>; // Is return value correct?
    file(data: any /*base64 data object?*/): this;
    forward(): this;
    frame(id: string | number | null | WebElement): this;
    frameParent(): this;
    imeActivate(engine: string): this;
    imeActivated(): Client<boolean>;
    imeActiveEngine(): Client<string>;
    imeAvailableEngines(): Client<Array<string>>;
    imeDeactivated(): Client<boolean>;
    init(capabilicies?: Object): this;
    keys(keys: string | Array<string>): this;
    localStorage(method: string, args?: Object | string): Client<any>;
    localStorageSize(): Client<number>;
    location(loc: Location): this;
    log(type: string): Client<any>; // What is actual return type?
    logTypes(): Client<Array<string>>;
    moveTo(element: string, xoffset: number, yoffset: number): this;
    refresh(): this;
    screenshot(): this;
    session(doWhat: "get" | "delete", sessionId?: string): this;
    session(): Client<any>;
    sessionStorage(method: string, args?: Object | string): this;
    sessionStorage(): Client<any>;
    sessionStorageSize(): Client<number>;
    sessions(id: string, capabilities: Object): Client<Array<any>>;
    source(selector: string): Client<any>; // Return type is undocumented
    status(selector: string): Client<any>;
    submit(id: string): this;
    timeouts(type: string, ms: number): this;
    timeoutsAsyncScript(ms: number): this;
    timeoutsImplicitWait(ms: number): this;
    title(): Client<string>;
    touchClick(id: string): this;
    touchDown(x: number, y: number): this;
    touchFlick(
      id: string,
      xoffset: number,
      yoffset: number,
      speed: number
    ): this;
    touchLongClick(id: string): this;
    touchMove(x: number, y: number): this;
    touchScroll(
      id: string,
      xoffset: number,
      yoffset: number,
      speed: number
    ): this;
    touchUp(x: number, y: number): this;
    url(url?: string): this;
    window(handle?: string): this;
    windowHandle(): Client<string>;
    windowHandleFullscreen(): this;
    windowHandleMaximize(handle?: string): this;
    windowHandlePosition(handle: string, position?: Position): this;
    windowHandlePosition(handle?: string): this;
    windowHandleSize(handle: string, size?: WindowSize): this;
    windowHandleSize(handle?: string): this;
    windowHandles(selector: string): Client<Array<string>>;

    // State
    hasFocus(selector: string): Client<boolean>;
    isEnabled(selector: string): Client<boolean>;
    isExisting(selector: string): Client<boolean>;
    isSelected(selector: string): Client<boolean>;
    isVisible(selector: string): Client<boolean>;
    isVisibleWithinViewport(selector: string): Client<boolean>;

    // Utility
    addCommand(name: string, method: Function, overwrite?: boolean): this;
    call(callback: Function): this;
    chooseFile(selector: string, localPath: string): this;
    debug(): this;
    end(): this;
    endAll(): this;
    getCommandHistory(): Client<Array<CommandHistory>>;
    pause(ms: number): this;
    reload(): this;
    saveScreenshot(filename?: string): this;
    scroll(selector: string, xoffset: number, yoffset: number): this;
    scroll(xoffset: number, yoffset: number): this;
    uploadFile(localPath: string): this;
    waitForEnabled(
      selector: string,
      ms?: number,
      reverse?: boolean
    ): Client<boolean>;
    waitForExist(
      selector: string,
      ms?: number,
      reverse?: boolean
    ): Client<boolean>;
    waitForSelected(
      selector: string,
      ms?: number,
      reverse?: boolean
    ): Client<boolean>;
    waitForText(
      selector: string,
      ms?: number,
      reverse?: boolean
    ): Client<boolean>;
    waitForValue(
      selector: string,
      ms?: number,
      reverse?: boolean
    ): Client<boolean>;
    waitForVisible(
      selector: string,
      ms?: number,
      reverse?: boolean
    ): Client<boolean>;
    waitUntil(
      condition: Function | Promise<any>,
      timeout?: number,
      timeoutMsg?: string,
      interval?: number
    ): this;

    // Window
    close(handle?: string): this;
    getCurrentTabId(): Client<string>;
    getTabIds(): Array<any>; // Return type is undocumented
    getViewportSize(property?: string): Client<number | WindowSize>;
    newWindow(url: string, windowName: string, windowFeatures: string): this;
    setViewportSize(size: WindowSize, type?: boolean): this;
    switchTab(handle?: string): this;

    // Promise
    then<U>(
      onFulfill?: (value: T) => Promise<U> | U,
      onReject?: (error: any) => Promise<U> | U
    ): Client<U>;
  }

  declare export interface RemoteOptions {
    protocol?: string;
    waitforTimeout?: number;
    waitforInterval?: number;
    coloredLogs?: boolean;
    logLevel?: string;
    baseUrl?: string;
    desiredCapabilities?: Object;
  }

  declare export interface MultiRemoteOptions {
    [key: string]: RemoteOptions;
  }

  declare export function remote(
    options?: RemoteOptions | string
  ): Client<void>;
  declare export function multiremote(
    options?: MultiRemoteOptions
  ): Client<void>;
}

import type Client from "webdriverio";
declare var browser: Client<void>;
