/**
 * Flowtype definitions for react-mdl
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type ___ReactMDL$___MDLClassProps = React.ClassAttributes<any>;

declare type ___ReactMDL$___MDLOtherProps = React.HTMLProps<any>;

declare class ___MDLComponent<P>mixins React.Component<P, {}>{}

declare class ___MDLBasicComponent mixins ___MDLComponent<___ReactMDL$___MDLOtherProps>{}

declare interface ___ReactMDL$ShadowedComponent {
    shadow?: number
}

declare interface ___ReactMDL$RippleComponent {
    ripple?: boolean
}

declare interface ___ReactMDL$CustomRenderedComponent {
    component?: string | JSX.Element | Function
}

declare interface ___ReactMDL$MDLHTMLAttributes {
    defaultChecked?: boolean,
        defaultValue?: string | string[],
        accept?: string,
        acceptCharset?: string,
        accessKey?: string,
        action?: string,
        allowFullScreen?: boolean,
        allowTransparency?: boolean,
        alt?: string,
        async?: boolean,
        autoComplete?: string,
        autoFocus?: boolean,
        autoPlay?: boolean,
        capture?: boolean,
        cellPadding?: number | string,
        cellSpacing?: number | string,
        charSet?: string,
        challenge?: string,
        checked?: boolean,
        classID?: string,
        className?: string,
        cols?: number,
        colSpan?: number,
        content?: string,
        contentEditable?: boolean,
        contextMenu?: string,
        controls?: boolean,
        coords?: string,
        crossOrigin?: string,
        dateTime?: string,
        default?: boolean,
        defer?: boolean,
        dir?: string,
        disabled?: boolean,
        download?: any,
        draggable?: boolean,
        encType?: string,
        form?: string,
        formAction?: string,
        formEncType?: string,
        formMethod?: string,
        formNoValidate?: boolean,
        formTarget?: string,
        frameBorder?: number | string,
        headers?: string,
        height?: number | string,
        hidden?: boolean,
        high?: number,
        href?: string,
        hrefLang?: string,
        htmlFor?: string,
        httpEquiv?: string,
        id?: string,
        inputMode?: string,
        integrity?: string,
        is?: string,
        keyParams?: string,
        keyType?: string,
        kind?: string,
        lang?: string,
        list?: string,
        loop?: boolean,
        low?: number,
        manifest?: string,
        marginHeight?: number,
        marginWidth?: number,
        max?: number | string,
        maxLength?: number,
        media?: string,
        mediaGroup?: string,
        method?: string,
        min?: number | string,
        minLength?: number,
        multiple?: boolean,
        muted?: boolean,
        nonce?: string,
        noValidate?: boolean,
        open?: boolean,
        optimum?: number,
        pattern?: string,
        placeholder?: string,
        poster?: string,
        preload?: string,
        radioGroup?: string,
        readOnly?: boolean,
        rel?: string,
        required?: boolean,
        reversed?: boolean,
        role?: string,
        rowSpan?: number,
        sandbox?: string,
        scope?: string,
        scoped?: boolean,
        scrolling?: string,
        seamless?: boolean,
        selected?: boolean,
        shape?: string,
        sizes?: string,
        span?: number,
        spellCheck?: boolean,
        src?: string,
        srcDoc?: string,
        srcLang?: string,
        srcSet?: string,
        start?: number,
        step?: number | string,
        style?: React.CSSProperties,
        summary?: string,
        tabIndex?: number,
        target?: string,
        type?: string,
        useMap?: string,
        width?: number | string,
        wmode?: string,
        wrap?: string,
        about?: string,
        datatype?: string,
        inlist?: any,
        prefix?: string,
        property?: string,
        resource?: string,
        typeof?: string,
        vocab?: string,
        autoCapitalize?: string,
        autoCorrect?: string,
        autoSave?: string,
        color?: string,
        itemProp?: string,
        itemScope?: boolean,
        itemType?: string,
        itemID?: string,
        itemRef?: string,
        results?: number,
        security?: string,
        unselectable?: boolean, [key: string]: any
}

declare interface ___ReactMDL$MDLDOMAttributes {
    children?: React.ReactNode,
        dangerouslySetInnerHTML?: {
            ___html: string
        },
        onCopy?: React.ClipboardEventHandler,
        onCut?: React.ClipboardEventHandler,
        onPaste?: React.ClipboardEventHandler,
        onCompositionEnd?: React.CompositionEventHandler,
        onCompositionStart?: React.CompositionEventHandler,
        onCompositionUpdate?: React.CompositionEventHandler,
        onFocus?: React.FocusEventHandler,
        onBlur?: React.FocusEventHandler,
        onInput?: React.FormEventHandler,
        onSubmit?: React.FormEventHandler,
        onLoad?: React.ReactEventHandler,
        onError?: React.ReactEventHandler,
        onKeyDown?: React.KeyboardEventHandler,
        onKeyPress?: React.KeyboardEventHandler,
        onKeyUp?: React.KeyboardEventHandler,
        onAbort?: React.ReactEventHandler,
        onCanPlay?: React.ReactEventHandler,
        onCanPlayThrough?: React.ReactEventHandler,
        onDurationChange?: React.ReactEventHandler,
        onEmptied?: React.ReactEventHandler,
        onEncrypted?: React.ReactEventHandler,
        onEnded?: React.ReactEventHandler,
        onLoadedData?: React.ReactEventHandler,
        onLoadedMetadata?: React.ReactEventHandler,
        onLoadStart?: React.ReactEventHandler,
        onPause?: React.ReactEventHandler,
        onPlay?: React.ReactEventHandler,
        onPlaying?: React.ReactEventHandler,
        onProgress?: React.ReactEventHandler,
        onRateChange?: React.ReactEventHandler,
        onSeeked?: React.ReactEventHandler,
        onSeeking?: React.ReactEventHandler,
        onStalled?: React.ReactEventHandler,
        onSuspend?: React.ReactEventHandler,
        onTimeUpdate?: React.ReactEventHandler,
        onVolumeChange?: React.ReactEventHandler,
        onWaiting?: React.ReactEventHandler,
        onContextMenu?: React.MouseEventHandler,
        onDoubleClick?: React.MouseEventHandler,
        onDrag?: React.DragEventHandler,
        onDragEnd?: React.DragEventHandler,
        onDragEnter?: React.DragEventHandler,
        onDragExit?: React.DragEventHandler,
        onDragLeave?: React.DragEventHandler,
        onDragOver?: React.DragEventHandler,
        onDragStart?: React.DragEventHandler,
        onDrop?: React.DragEventHandler,
        onMouseDown?: React.MouseEventHandler,
        onMouseEnter?: React.MouseEventHandler,
        onMouseLeave?: React.MouseEventHandler,
        onMouseMove?: React.MouseEventHandler,
        onMouseOut?: React.MouseEventHandler,
        onMouseOver?: React.MouseEventHandler,
        onMouseUp?: React.MouseEventHandler,
        onSelect?: React.ReactEventHandler,
        onTouchCancel?: React.TouchEventHandler,
        onTouchEnd?: React.TouchEventHandler,
        onTouchMove?: React.TouchEventHandler,
        onTouchStart?: React.TouchEventHandler,
        onScroll?: React.UIEventHandler,
        onWheel?: React.WheelEventHandler
}

declare type ___ReactMDL$BadgeProps = {
    text: string | number,
    className?: string,
    noBackground?: boolean,
    overlap?: boolean
} & ___ReactMDL$___MDLClassProps


declare class Badge mixins ___MDLComponent<___ReactMDL$BadgeProps>{}

declare type ___ReactMDL$ChipProps = {
    onClick?: React.MouseEventHandler,
    onClose?: React.MouseEventHandler
} & ___ReactMDL$___MDLOtherProps


declare class Chip mixins ___MDLComponent<___ReactMDL$ChipProps>{}

declare class ChipContact mixins ___MDLComponent<___ReactMDL$___MDLOtherProps>{}

declare type ___ReactMDL$ButtonProps = {
    accent?: boolean,
    colored?: boolean,
    primary?: boolean
} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$RippleComponent & ___ReactMDL$CustomRenderedComponent


declare type ___ReactMDL$StandardButtonProps = {
    raised?: boolean
} & ___ReactMDL$ButtonProps


declare type ___ReactMDL$FABButtonProps = {
    mini?: boolean
} & ___ReactMDL$ButtonProps


declare type ___ReactMDL$IconButtonProps = {
    name?: string,
    raised?: boolean
} & ___ReactMDL$ButtonProps


declare class Button mixins ___MDLComponent<___ReactMDL$StandardButtonProps>{}

declare class FABButton mixins ___MDLComponent<___ReactMDL$FABButtonProps>{}

declare class IconButton mixins ___MDLComponent<___ReactMDL$IconButtonProps>{}

declare type ___ReactMDL$CardProps = {} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$ShadowedComponent


declare type ___ReactMDL$CardActionProps = {
    border?: boolean
} & ___ReactMDL$___MDLOtherProps


declare type ___ReactMDL$CardTitleProps = {
    expand?: boolean
} & ___ReactMDL$___MDLOtherProps


declare class Card mixins ___MDLComponent<___ReactMDL$CardProps>{}

declare class CardActions mixins ___MDLComponent<___ReactMDL$CardActionProps>{}

declare class CardTitle mixins ___MDLComponent<___ReactMDL$CardTitleProps>{}

declare class CardText mixins ___MDLBasicComponent {}

declare class CardMenu mixins ___MDLBasicComponent {}

declare class CardMedia mixins ___MDLBasicComponent {}

declare type ___ReactMDL$CheckboxProps = {
    checked?: boolean,
    disabled?: boolean,
    label?: string
} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$RippleComponent


declare class Checkbox mixins ___MDLComponent<___ReactMDL$CheckboxProps>{}

declare type ___ReactMDL$UndecoratedTableProps = {
    rows: Array<any>,
    rowKeyColumn?: string,
    name?: string,
    title?: string
} & ___ReactMDL$___MDLClassProps & ___ReactMDL$MDLHTMLAttributes & & ___ReactMDL$ShadowedComponent


declare type ___ReactMDL$TableProps = {
    sortable?: boolean,
    selectable?: boolean,
    onSelectionChanged?: (row: any) => any
} & ___ReactMDL$UndecoratedTableProps


declare type ___ReactMDL$TableHeaderProps = {
    name: string,
    title?: string,
    cellFormatter?: (value: any, row: any, index: number) => React.ReactNode,
    numeric?: boolean,
    nosort?: boolean,
    onClick?: (e: React.MouseEvent, name: string) => any,
    sortFn?: (a: any, b: any, isAsc: boolean) => number,
    tooltip?: React.ReactNode
} & ___ReactMDL$___MDLClassProps & ___ReactMDL$MDLHTMLAttributes & ___ReactMDL$MDLDOMAttributes


declare class Table mixins ___MDLComponent<___ReactMDL$TableProps>{}

declare class TableHeader mixins ___MDLComponent<___ReactMDL$TableHeaderProps>{}

declare class UndecoratedTable mixins ___MDLComponent<___ReactMDL$UndecoratedTableProps>{}

declare class DataTable mixins Table {}

declare type ___ReactMDL$DialogProps = {
    open?: boolean
} & ___ReactMDL$___MDLOtherProps


declare type ___ReactMDL$DialogActionsProps = {
    fullWidth?: boolean
} & ___ReactMDL$___MDLOtherProps


declare type ___ReactMDL$DialogTitleProps = {} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$CustomRenderedComponent


declare class Dialog mixins ___MDLComponent<___ReactMDL$DialogProps>{}

declare class DialogActions mixins ___MDLComponent<___ReactMDL$DialogActionsProps>{}

declare class DialogTitle mixins ___MDLComponent<___ReactMDL$DialogTitleProps>{}

declare class DialogContent mixins ___MDLBasicComponent {}

declare type ___ReactMDL$GridProps = {
    noSpacing?: boolean
} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$CustomRenderedComponent & ___ReactMDL$ShadowedComponent


declare type ___ReactMDL$CellProps = {
    col: number,
    align?: string,
    phone?: number,
    tablet?: number,
    hideDesktop?: boolean,
    hidePhone?: boolean,
    hideTablet?: boolean
} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$CustomRenderedComponent & ___ReactMDL$ShadowedComponent


declare class Grid mixins ___MDLComponent<___ReactMDL$GridProps>{}

declare class Cell mixins ___MDLComponent<___ReactMDL$CellProps>{}

declare type ___ReactMDL$IconProps = {
    name: string
} & ___ReactMDL$___MDLOtherProps


declare class Icon mixins ___MDLComponent<___ReactMDL$IconProps>{}

declare type ___ReactMDL$IconToggleProps = {
    name: string,
    checked?: boolean,
    disabled?: boolean
} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$RippleComponent


declare class IconToggle mixins ___MDLComponent<___ReactMDL$IconToggleProps>{}

declare type ___ReactMDL$ContentProps = {} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$CustomRenderedComponent


declare type ___ReactMDL$DrawerProps = {
    title?: string
} & ___ReactMDL$___MDLOtherProps


declare type ___ReactMDL$HeaderProps = {
    title?: string,
    scroll?: boolean,
    seamed?: boolean,
    transparent?: boolean,
    waterfall?: boolean,
    hideTop?: boolean,
    hideSpacer?: boolean
} & ___ReactMDL$___MDLOtherProps


declare type ___ReactMDL$HeaderRowProps = {
    title?: string,
    hideSpacer?: boolean
} & ___ReactMDL$___MDLOtherProps


declare type ___ReactMDL$HeaderTabsProps = {
    activeTab?: number,
    onChange?: React.FormEventHandler
} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$RippleComponent


declare type ___ReactMDL$LayoutProps = {
    fixedDrawer?: boolean,
    fixedHeader?: boolean,
    fixedTabse?: boolean
} & ___ReactMDL$___MDLOtherProps


declare type ___ReactMDL$NavigationProps = {} & ___ReactMDL$___MDLOtherProps


declare class Content mixins ___MDLComponent<___ReactMDL$ContentProps>{}

declare class Drawer mixins ___MDLComponent<___ReactMDL$DrawerProps>{}

declare class Header mixins ___MDLComponent<___ReactMDL$HeaderProps>{}

declare class HeaderRow mixins ___MDLComponent<___ReactMDL$HeaderRowProps>{}

declare class HeaderTabs mixins ___MDLComponent<___ReactMDL$HeaderTabsProps>{}

declare class Layout mixins ___MDLComponent<___ReactMDL$LayoutProps>{}

declare class Navigation mixins ___MDLComponent<___ReactMDL$NavigationProps>{}

declare class Spacer mixins ___MDLBasicComponent {}

declare type ___ReactMDL$FooterProps = {
        size?: string,
        title?: string
    } & ___ReactMDL$MDLHTMLAttributes &


    declare type ___ReactMDL$FooterDropDownSectionProps = {
        size?: string,
        title: React.ReactNode
    } & ___ReactMDL$MDLHTMLAttributes &


    declare type ___ReactMDL$FooterLinkListProps = {
        size?: string,
        title?: string
    } & ___ReactMDL$MDLHTMLAttributes &


    declare type ___ReactMDL$FooterSectionProps = {
        size?: string,
        type?: string,
        logo?: React.ReactNode,
        title?: string
    } & ___ReactMDL$MDLHTMLAttributes &


    declare class Footer mixins ___MDLComponent<___ReactMDL$FooterProps>{}

declare class FooterDropDownSection mixins ___MDLComponent<___ReactMDL$FooterDropDownSectionProps>{}

declare class FooterLinkList mixins ___MDLComponent<___ReactMDL$FooterLinkListProps>{}

declare class FooterSection mixins ___MDLComponent<___ReactMDL$FooterSectionProps>{}

declare type ___ReactMDL$ListItemProps = {
    twoLine?: boolean,
    threeLine?: boolean
} & ___ReactMDL$___MDLOtherProps


declare type ___ReactMDL$ListItemActionProps = {
    info?: string
} & ___ReactMDL$___MDLOtherProps


declare type ___ReactMDL$ListItemContentProps = {
        avatar?: string | JSX.Element,
        icon?: string | JSX.Element,
        subtitle?: React.ReactNode,
        useBodyClass?: boolean
    } & ___ReactMDL$MDLHTMLAttributes &


    declare class List mixins ___MDLBasicComponent {}

declare class ListItem mixins ___MDLComponent<___ReactMDL$ListItemProps>{}

declare class ListItemAction mixins ___MDLComponent<___ReactMDL$ListItemActionProps>{}

declare class ListItemContent mixins ___MDLComponent<___ReactMDL$ListItemContentProps>{}

declare type ___ReactMDL$MenuProps = {
    target: string,
    align?: string,
    valign?: string
} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$RippleComponent


declare class Menu mixins ___MDLComponent<___ReactMDL$MenuProps>{}

declare class MenuItem mixins ___MDLBasicComponent {}

declare type ___ReactMDL$ProgressBarProps = {
    buffer?: number,
    indeterminate?: boolean,
    progress?: number
} & ___ReactMDL$___MDLOtherProps


declare class ProgressBar mixins ___MDLComponent<___ReactMDL$ProgressBarProps>{}

declare type ___ReactMDL$RadioProps = {
    value: string | number,
    checked?: boolean,
    disabled?: boolean,
    name?: string,
    onChange?: React.FormEventHandler,
    label?: string
} & ___ReactMDL$MDLHTMLAttributes & & ___ReactMDL$RippleComponent


declare type ___ReactMDL$RadioGroupProps = {
        name: string,
        value: string | number,
        childContainer?: string,
        container?: string,
        onChange?: React.FormEventHandler,
        label?: string
    } & ___ReactMDL$MDLHTMLAttributes &


    declare class Radio mixins ___MDLComponent<___ReactMDL$RadioProps>{}

declare class RadioGroup mixins ___MDLComponent<___ReactMDL$RadioGroupProps>{}

declare type ___ReactMDL$SliderProps = {
        max: number,
        min: number,
        onChange?: React.FormEventHandler,
        value?: number
    } & ___ReactMDL$MDLHTMLAttributes &


    declare class Slider mixins ___MDLComponent<___ReactMDL$SliderProps>{}

declare type ___ReactMDL$SnackbarProps = {
    active: boolean,
    onTimeout: () => any,
    action?: string,
    onActionClick?: React.MouseEventHandler,
    timeout?: number
} & ___ReactMDL$___MDLOtherProps


declare class Snackbar mixins ___MDLComponent<___ReactMDL$SnackbarProps>{}

declare type ___ReactMDL$SpinnerProps = {
    singleColor?: boolean
} & ___ReactMDL$___MDLOtherProps


declare class Spinner mixins ___MDLComponent<___ReactMDL$SpinnerProps>{}

declare type ___ReactMDL$SwitchProps = {
    checked?: boolean,
    disabled?: boolean,
    onChange?: React.FormEventHandler
} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$RippleComponent


declare class Switch mixins ___MDLComponent<___ReactMDL$SwitchProps>{}

declare type ___ReactMDL$TabProps = {
    active?: boolean,
    cssPrefix?: string,
    onTabClick?: (tabId: number) => any,
    tabId?: number
} & ___ReactMDL$___MDLOtherProps & ___ReactMDL$CustomRenderedComponent


declare type ___ReactMDL$TabBarProps = {
    cssPrefix: string,
    activeTab?: number,
    onChange?: (tabId: number) => any,
    name?: string,
    title?: string,
    onClick?: React.MouseEventHandler
} & ___ReactMDL$MDLHTMLAttributes & ___ReactMDL$MDLDOMAttributes


declare type ___ReactMDL$TabsProps = {
    activeTab?: number,
    onChange?: (tabId: number) => any,
    tabBarProps?: ___ReactMDL$TabBarProps,
    name?: string,
    title?: string,
    onClick?: React.MouseEventHandler
} & ___ReactMDL$MDLHTMLAttributes & ___ReactMDL$MDLDOMAttributes


declare class Tab mixins ___MDLComponent<___ReactMDL$TabProps>{}

declare class TabBar mixins ___MDLComponent<___ReactMDL$TabBarProps>{}

declare class Tabs mixins ___MDLComponent<___ReactMDL$TabsProps>{}

declare type ___ReactMDL$TextfieldProps = {
        label: string,
        disabled?: boolean,
        error?: React.ReactNode,
        expandable?: boolean,
        expandableIcon?: string,
        floatingLabel?: boolean,
        id?: string,
        inputClassName?: string,
        maxRows?: number,
        onChange?: React.FormEventHandler,
        pattern?: string,
        required?: boolean,
        rows?: number,
        value?: string | number,
        name?: string,
        title?: string
    } & ___ReactMDL$MDLHTMLAttributes &


    declare class Textfield mixins ___MDLComponent<___ReactMDL$TextfieldProps>{}

declare type ___ReactMDL$TooltipProps = {
        label: React.ReactNode,
        large?: boolean,
        position?: string,
        name?: string,
        title?: string
    } & ___ReactMDL$MDLHTMLAttributes &


    declare class Tooltip mixins ___MDLComponent<___ReactMDL$TooltipProps>{}
declare module 'react-mdl' {
    declare module.exports: typeof ___ReactMDL
}