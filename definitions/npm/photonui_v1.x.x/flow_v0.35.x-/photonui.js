// @flow
/**
 * Flowtype definitions for photonui
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$photonui: {
    domInsert: typeof photonui$domInsert,
    getWidget: typeof photonui$getWidget,
}
declare var npm$namespace$Helpers: {
    escapeHtml: typeof Helpers$escapeHtml,
    uuid4: typeof Helpers$uuid4,
    cleanNode: typeof Helpers$cleanNode,
    getAbsolutePosition: typeof Helpers$getAbsolutePosition,
    numberToCssSize: typeof Helpers$numberToCssSize,
}
declare function Helpers$escapeHtml(string: string): void

declare function Helpers$uuid4(): string

declare function Helpers$cleanNode(node: HTMLElement): void

declare function Helpers$getAbsolutePosition(element: HTMLElement | string): {
    x: number,
    y: number
}

declare function Helpers$numberToCssSize(value: number, defaultValue?: number, nullValue?: string): string

declare class Base {
    constructor(params?: {
        [key: string]: any
    }): this;
    destroy(): void;
    registerCallback(id: string, wEvent: string, callback: Function, thisArg: any): void;
    removeCallback(id: string): void
}

declare class Widget mixins Base {
    absolutePosition: {
        x: number,
        y: number
    };
    contextMenu: photonui$PopupWindow;
    contextMenuName: string;
    html: HTMLElement;
    layoutOptions: {
        [key: string]: any
    };
    name: string;
    offsetWidth: number;
    offsetHeight: number;
    parent: photonui$Widget;
    parentName: string;
    tooltip: string;
    visible: boolean;
    show(): void;
    hide(): void;
    unparent(): void;
    addClass(className: string): void;
    removeClass(className: string): void;
    getWidget(name: string): photonui$Widget;
    domInsert(widget: photonui$Widget, element?: HTMLElement | string): void
}

declare function photonui$domInsert(widget: photonui$Widget, element?: HTMLElement | string): void

declare function photonui$getWidget(name: string): photonui$Widget

declare class FileManager mixins Base {
    acceptedExts: string[];
    acceptedMimes: string[];
    dropZone: HTMLElement;
    multiselect: boolean;
    open(): void
}

declare class Translation mixins Base {
    locale: string;
    addCatalogs(catalogs: {
        [key: string]: any
    }): void;
    guessUserLanguage(): string;
    gettext(string: string, replacements?: {
        [key: string]: string
    }): string;
    lazyGettext(string: string, replacements?: {
        [key: string]: string
    }): string;
    enableDomScan(enable: boolean): void;
    updateDomTranslation(): void
}

declare class AccelManager mixins Base {
    addAccel(id: string, keys: string, callback: Function, safe?: boolean): void;
    removeAccel(id: string): void
}

declare class MouseManager mixins Base {
    constructor(params?: {
        [key: string]: any
    }): this;
    constructor(element?: photonui$Widget | HTMLElement, params?: {
        [key: string]: any
    }): this;
    element: HTMLElement;
    threshold: number;
    action: string;
    btnLeft: boolean;
    btnMiddle: boolean;
    btnRight: boolean;
    button: string;
    pageX: number;
    pageY: number;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number
}

declare class BaseIcon mixins Widget {}

declare class FAIcon mixins BaseIcon {
    constructor(params?: {
        [key: string]: any
    }): this;
    constructor(name: string, params?: {
        [key: string]: any
    }): this;
    color: string;
    iconName: string;
    size: string
}

declare class SpriteIcon mixins BaseIcon {
    constructor(params?: {
        [key: string]: any
    }): this;
    constructor(name: string, params?: {
        [key: string]: any
    }): this;
    icon: string;
    iconName: string;
    spriteSheetName: string
}

declare class Image mixins Widget {
    width: number;
    height: number;
    url: string
}

declare class SpriteSheet mixins Base {
    name: string;
    imageUrl: string;
    size: string;
    icons: {
        [iconName: string]: number[]
    };
    addIcon(iconName: string, x: number, y: number): void;
    removeIcon(iconName: string): void;
    getIconPosition(iconName: string): {
        x: number,
        y: number
    };
    getIconCSS(iconName: string): string;
    getSpriteSheet(name: string): photonui$SpriteSheet
}

declare class Canvas mixins Widget {
    canvas: HTMLElement;
    interactiveMode: HTMLElement;
    width: number;
    height: number;
    getContext(contextId: string): any;
    setContext(contextId: string): void;
    supportsContext(contextId: string): boolean;
    toBlod(imageFormat: string): any;
    toBlodHD(imageFormat: string): any;
    toDataUrl(imageFormat: string): string;
    toDataUrlHD(imageFormat: string): string;
    transferControlToProxy(): void
}

declare class Label mixins Widget {
    constructor(params?: {
        [key: string]: any
    }): this;
    constructor(name: string, params?: {
        [key: string]: any
    }): this;
    forInput: photonui$Field | photonui$CheckBox;
    forInputName: string;
    text: string;
    textAlign: string
}

declare class Text mixins Widget {
    rawHtml: string;
    text: string
}

declare class ProgressBar mixins Widget {
    orientation: string;
    pulsate: boolean;
    textVisible: boolean;
    value: number
}

declare class Separator mixins Widget {
    orientation: string
}

declare class Button mixins Widget {
    appearance: string;
    buttonColor: string;
    leftIconName: string;
    leftIcon: photonui$BaseIcon;
    leftIconVisible: boolean;
    rightIconName: string;
    rightIcon: photonui$BaseIcon;
    rightIconVisible: boolean;
    text: string;
    textVisible: boolean
}

declare class ColorButton mixins Widget {
    color: photonui$Color;
    dialogOnly: boolean;
    value: string
}

declare class CheckBox mixins Widget {
    value: boolean
}

declare class Switch mixins CheckBox {}

declare class ToggleButton mixins CheckBox {}

declare class Color mixins Base {
    constructor(color: string): this;
    constructor(params?: {
        [key: string]: any
    }): this;
    hexString: string;
    rgbString: string;
    rgbaString: string;
    red: number;
    green: number;
    blue: number;
    alpha: number;
    hue: number;
    saturation: number;
    brightness: number;
    setRGB(red: number, green: number, blue: number): void;
    getRGB(): number[];
    setRGBA(red: number, green: number, blue: number, alpha: number): void;
    getRGBA(): number[];
    setHSB(hue: number, saturation: number, brightness: number): void
}

declare class ColorPalette mixins Widget {
    color: photonui$Color;
    palette: Array<string[]>;
    value: string;
    palette: Array<string[] >
}

declare class ColorPicker mixins Widget {
    color: photonui$Color;
    value: string
}

declare class Field mixins Widget {
    placeholder: string;
    value: boolean
}

declare class NumericField mixins Field {
    min: number;
    max: number;
    step: number;
    decimalDigits: number;
    decimalSymbol: string
}

declare class Slider mixins NumericField {
    fieldVisible: boolean
}

declare class TextAreaField mixins Field {
    cols: number;
    rows: number
}

declare class TextField mixins Field {
    type: string
}

declare class Select mixins Widget {
    children: photonui$Widget[];
    childrenNames: string[];
    iconVisible: boolean;
    placeholder: string;
    popupWidth: number;
    popupHeight: number;
    popupMaxWidth: number;
    popupMinWidth: number;
    popupMaxHeight: number;
    popupMinHeight: number;
    popupOffsetWidth: number;
    popupOffsetHeight: number;
    popupPadding: number;
    value: any;
    addChild(widget: photonui$Widget, layoutOptions?: any): void
}

declare class FontSelect mixins Select {
    fonts: string[];
    addFont(fontName: string): void
}

declare class Container mixins Widget {
    child: photonui$Widget;
    childName: string;
    containerNode: HTMLElement;
    horizontalChildExpansion: boolean;
    verticalChildExpansion: boolean;
    removeChild(widget: photonui$Widget): void
}

declare class Layout mixins Container {
    children: photonui$Widget[];
    childrenNames: string[];
    addChild(widget: photonui$Widget, layoutOptions?: {
        [key: string]: any
    }): void;
    empty(): void
}

declare class BoxLayout mixins Layout {
    horizontalPadding: number;
    verticalPadding: number;
    orientation: string;
    spacing: number
}

declare class FluidLayout mixins Layout {
    horizontalPadding: number;
    verticalPadding: number
}

declare class GridLayout mixins Layout {
    horizontalPadding: number;
    verticalPadding: number;
    horizontalSpacing: number;
    verticalSpacing: number
}

declare class Menu mixins Layout {
    iconVisible: boolean
}

declare class MenuItem mixins Menu {
    active: boolean;
    icon: photonui$BaseIcon;
    iconName: string;
    text: string;
    value: any
}

declare class SubMenuItem mixins MenuItem {
    menu: photonui$Menu;
    menuName: string
}

declare class Viewport mixins Container {
    width: number;
    minWidth: number;
    maxWidth: number;
    height: number;
    minHeight: number;
    maxHeight: number;
    padding: number;
    horizontalScrollbar: boolean;
    verticalScrollbar: boolean
}

declare class BaseWindow mixins Container {
    width: number;
    minWidth: number;
    maxWidth: number;
    height: number;
    minHeight: number;
    maxHeight: number;
    padding: number;
    position: {
        x: number,
        y: number
    };
    x: number;
    y: number;
    center(): void
}

declare class PopupWindow mixins BaseWindow {
    popupXY(x: number, y: number): void;
    popupWidget(widget: photonui$Widget): void
}

declare class PopupMenu mixins PopupWindow {}

declare class Window mixins BaseWindow {
    closeButtonVisible: boolean;
    modal: boolean;
    movable: boolean;
    title: string;
    moveToFront(): void;
    moveToBack(): void
}

declare class Dialog mixins Window {
    buttons: photonui$Widget[];
    buttonNames: string[];
    addButton(widget: photonui$Widget, layoutOptions: any): void;
    removeButton(widget: photonui$Widget): void
}

declare class ColorPickerDialog mixins Dialog {
    color: photonui$Color
}

declare class TabItem mixins Container {
    tabHtml: HTMLElement;
    title: string
}

declare class TabLayout mixins Layout {
    activeTab: photonui$Widget;
    activeTabName: string;
    padding: number;
    tabsPosition: string
}
declare function _(string: string, replacements?: {
    [key: string]: string
}): string