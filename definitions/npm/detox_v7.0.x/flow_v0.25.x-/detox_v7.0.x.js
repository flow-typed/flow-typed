declare type config = {
    configurations: {
        device?: {
            name: string,
            type: string
        }
    }
};

declare type initGlobals = {
    initGlobals?: boolean,
    launchApp?: boolean
};

declare type initFunc = (config: config, initGlobals?: initGlobals) => void;

declare type orientationTypes = 'portrait' | 'landscape'

declare type deviceMethods = {
    disableSynchronization: () => void,
    enableSynchronization: () => void,
    getPlatform: () => void,
    installApp: () => void,
    launchApp: () => void,
    openURL: ({url: string, sourceApp?: string}) => void,
    relaunchApp: () => void,
    reloadReactNative: () => void,
    resetContentAndSettings: () => void,
    sendToHome: () => void,
    sendUserNotification: (params: {}) => void,
    setLocation: (lat: number, lon: number) => void,
    setOrientation: (orientationTypes) => void,
    setURLBlacklist: (urls: string[]) => void,
    terminateApp: () => void,
    uninstallApp: () => void
};

declare type directionTypes = "left" | "right" | "top" | "down";
declare type edgeTypes = "left" | "right" | "top" | "bottom";
declare type speedTypes = "fast" | "slow";
declare type coordinateTypes = {
    x: number,
    y: number
};

declare type elementActions = {};

declare module "detox" {
    declare function cleanup(): void;
    declare function beforeEach(): void;
    declare function afterEach(): void;

    declare type value = string;
    declare type inputString = (value) => Matcher;
    declare type inputArrString = (value[]) => Matcher;

    declare type byTypes = {
        accessibilityLabel: inputString,
        id: inputString,
        label: inputString,
        text: inputString,
        traits: inputArrString,
        type: inputString,
        value: inputString
    };

    declare class Matcher {}

    declare class Element {
        clearText(): () => {};
        constructor(matcher: Matcher): Element;
        longPress(): () => {};
        multiTap(number): {};
        replaceText(string): {};
        scroll(pixels: number, direction: directionTypes): {};
        scrollTo(edgeTypes): {};
        swipe(directionTypes, speed: speedTypes, percentage?: number): {};
        tap(): {};
        tapAtPoint(coordinateTypes): {};
        typeText(string): {};
    }

    declare class ExpectElement {
        toBeNotVisible(): void;
        toBeVisible(): void;
        toExist(): void;
        toHaveId(id: string): void;
        toHaveLabel(label: string): void;
        toHaveText(text: string): void;
        toHaveValue(value: "0" | "1"): void;
        toNotExist(): void;
    }

    declare class WaitForInteraction {
        whileElement(searchMatcher: Matcher): WaitForActionInteraction;
        withTimeout(timeout: number): WaitForInteraction;
    }
    declare class WaitForActionInteraction {
        scroll(amount: number, direction: directionTypes): void;
    }

    declare class WaitForElement {
        toBeNotVisible(): WaitForInteraction;
        toBeVisible(): WaitForInteraction;
        toExist(): WaitForInteraction;
        toHaveText(text: string): WaitForInteraction;
        toHaveValue(value: "0" | "1"): WaitForInteraction;
        toNotExist(): WaitForInteraction;
        whileElement(searchMatcher: Matcher): WaitForActionInteraction;
        withTimeout(millis: number): WaitForInteraction;
    }

    declare module.exports: {
        afterEach: afterEach,
        beforeEach: beforeEach,
        by: byTypes,
        cleanup: cleanup,
        device: deviceMethods,
        element: (matcher: Matcher) => Element,
        expect: (element: Element) => ExpectElement,
        init: initFunc,
        waitFor: (element: Element) => WaitForElement
    };
}
