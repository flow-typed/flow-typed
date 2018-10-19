/* @flow */

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

declare type permissionValues = "YES"|"NO"|"unset";
declare type locationPermissionValues = "always"|"inuse"|"never"|"unset";
declare type orientationTypes = 'portrait' | 'landscape'
declare type launchParamsType = {
    newInstance?: boolean,
    permissions?: permissionsType,
    url?: string,
    userNotification?: {},
    delete?: boolean,
    launchArgs?: {}
}
declare type permissionsType = {
    calendar?: permissionValues,
    camera?: permissionValues,
    contacts?: permissionValues,
    health?: permissionValues,
    homekit?: permissionValues,
    location?: locationPermissionValues,
    medialibrary?: permissionValues,
    microphone?: permissionValues,
    motion?: permissionValues, 
    notifications?: permissionValues,
    photos?: permissionValues,
    reminders?: permissionValues,
    siri?: permissionValues,
    speech?: permissionValues
}
declare type openURLType = {
    url: string,
    sourceApp?: string
}
declare type notificationType = {
    trigger: {
        type: "push" | "calendar" | "timeInterval" | "location",
        timeInterval?: number,
        "date-components"?: {},
        region?: {
            center: {},
            radius: number,
            notifyOnEntry?: boolean,
            notifyOnExit?: boolean

        },
        repeats?: boolean
      },
      title?: string,
      subtitle?: string,
      body?: string,
      badge?: number,
      payload?: {},
      category?: string,
      "user-text"?: string,
      "content-available"?: number,
      "action-identifier"?: string
}

declare type deviceMethods = {
    disableSynchronization: () => Promise<void>,
    enableSynchronization: () => Promise<void>,
    getPlatform: () => Promise<void>,
    installApp: (path?: string) => Promise<void>,
    launchApp: (launchParamsType) => Promise<void>,
    openURL: (openURLType) => Promise<void>,
    relaunchApp: () => Promise<void>,
    reloadReactNative: () => Promise<void>,
    resetContentAndSettings: () => Promise<void>,
    sendToHome: () => Promise<void>,
    sendUserNotification: (notificationType) => Promise<void>,
    setLocation: (lat: number, lon: number) => Promise<void>,
    setOrientation: (orientationTypes) => Promise<void>,
    setURLBlacklist: (urls: string[]) => Promise<void>,
    terminateApp: (bundleID?: string) => Promise<void>,
    uninstallApp: (bundleID?: string) => Promise<void>
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
    declare function cleanup(): Promise<void>;
    declare function beforeEach(): Promise<void>;
    declare function afterEach(): Promise<void>;

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
        clearText(): () => Promise<void>;
        constructor(matcher: Matcher): Element;
        longPress(): () => Promise<void>;
        multiTap(number): Promise<void>;
        replaceText(string): Promise<void>;
        scroll(pixels: number, direction: directionTypes): Promise<void>;
        scrollTo(edgeTypes): Promise<void>;
        swipe(directionTypes, speed: speedTypes, percentage?: number): Promise<void>;
        tap(): Promise<void>;
        tapAtPoint(coordinateTypes): Promise<void>;
        typeText(string): Promise<void>;
        atIndex(number): Element;
    }

    declare class ExpectElement {
        toBeNotVisible(): Promise<void>;
        toBeVisible(): Promise<void>;
        toExist(): Promise<void>;
        toHaveId(id: string): Promise<void>;
        toHaveLabel(label: string): Promise<void>;
        toHaveText(text: string): Promise<void>;
        toHaveValue(value: "0" | "1"): Promise<void>;
        toNotExist(): Promise<void>;
    }

    declare class WaitForInteraction {
        whileElement(searchMatcher: Matcher): WaitForActionInteraction;
        withTimeout(timeout: number): WaitForInteraction;
    }
    declare class WaitForActionInteraction {
        scroll(amount: number, direction: directionTypes): Promise<void>;
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
