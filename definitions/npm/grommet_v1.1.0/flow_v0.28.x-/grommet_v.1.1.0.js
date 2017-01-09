/**
 * Flowtype definitions for grommet v1.1.0
 * Author: [Ryan C. Collins](http://www.ryancollins.io)
 * Repo: https://github.com/RyanCCollins/grommet-flow-type
 */

declare module 'grommet/components' {
  declare type Grommet$AccordionProps = {
    active?: number | number[],
    animate?: boolean,
    onActive?: Function,
    openMulti?: boolean
  }

  declare export class Accordion extends React.Component<void, Grommet$AccordionProps, any> {
    render(): JSX.Element
  }

  declare type Grommet$AccordionPanelProps = {
    a11yTitle?: string,
    active?: boolean,
    animate?: boolean,
    heading?: React.ReactNode,
    onChange?: Function,
    pad?: any
  }

  declare export class AccordionPanel extends React.Component<void, Grommet$AccordionPanelProps, any> {
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$AnchorProps = {
    a11yTitle?: string,
    align?: "start" | "center" | "end",
    animateIcon?: boolean,
    disabled?: boolean,
    href?: string,
    icon?: React.ReactNode | JSX.Element,
    id?: string,
    label?: string,
    method?: "push" | "replace",
    onClick?: Function,
    path?: string,
    primary?: boolean,
    reverse?: boolean,
    tag?: string,
    target?: string
  }

  declare export class Anchor extends React.Component<void, Grommet$AnchorProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$AnimateProps = {
    component?: string | Function,
    enter?: GrommetCustomTypes$AnimationDetails,
    keep?: boolean,
    leave: GrommetCustomTypes$AnimationDetails,
    visible?: "scroll" | boolean
  }

  declare export class Animate extends React.Component<void, Grommet$AnimateProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$AppProps = {
    centered?: boolean,
    inline?: boolean
  }

  declare export class App extends React.Component<void, Grommet$AppProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$ArticleProps = {
    controls?: boolean,
    onProgress?: Function,
    onSelect?: Function,
    scrollStep?: boolean,
    selected?: number
  } & Grommet$BoxProps


  declare export class Article extends React.Component<void, Grommet$ArticleProps, any>{
    render(): JSX.Element
  }

  declare export type Grommet$BoxProps<T>= {
    a11yTitle?: string | any,
    announce?: boolean,
    align?: "start" |
      "center" |
      "end" |
      "baseline" |
      "stretch",
    alignContent?: "start" |
      "center" |
      "end" |
      "between" |
      "around" |
      "stretch",
    alignSelf?: "start" | "center" | "end" | "stretch",
    appCentered?: boolean,
    backgroundImage?: string,
    basis?: GrommetBoxTypes$BoxSizes,
    colorIndex?: string,
    containerClassName?: string,
    direction?: "row" | "column",
    focusable?: boolean,
    flex?: "grow" | "shrink" | boolean,
    full?: "horizontal" | "vertical" | boolean,
    onClick?: Function,
    justify?: "start" | "center" | "between" | "end",
    margin?: GrommetBoxTypes$MarginSizes | {
      bottom: GrommetBoxTypes$MarginSizes,
      horizontal: GrommetBoxTypes$MarginSizes,
      left: GrommetBoxTypes$MarginSizes,
      right: GrommetBoxTypes$MarginSizes,
      top: GrommetBoxTypes$MarginSizes,
      vertical: GrommetBoxTypes$MarginSizes
    },
    pad?: GrommetBoxTypes$PadSizes | {
      between?: GrommetBoxTypes$PadSizes,
      horizontal?: GrommetBoxTypes$PadSizes,
      vertical?: GrommetBoxTypes$PadSizes
    },
    primary?: boolean,
    reverse?: boolean,
    responsive?: boolean,
    role?: string,
    separator?: "top" |
      "bottom" |
      "left" |
      "right" |
      "horizontal" |
      "vertical" |
      "all" |
      "none",
    size?: {
      height?: GrommetBoxTypes$Size | {
        max?: GrommetBoxTypes$FixedSizes,
        min?: GrommetBoxTypes$FixedSizes
      },
      width?: GrommetBoxTypes$Size | {
        max?: GrommetBoxTypes$FixedSizes,
        min?: GrommetBoxTypes$FixedSizes
      }
    },
    tag?: string,
    textAlign?: "left" | "center" | "right",
    texture?: React.ReactNode | string,
    wrap?: boolean,
    onFocus?: Function
  }

  declare export class Box extends React.Component<void, Grommet$BoxProps<Grommet$Box>, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$ButtonProps = {
    a11yTitle?: string,
    accent?: boolean,
    align?: "start" | "center" | "end",
    fill?: boolean,
    href?: string,
    icon?: React$Element<any>,
    label?: React.ReactNode,
    method?: "push" | "replace",
    onClick?: Function,
    path?: string,
    plain?: boolean,
    primary?: boolean,
    reverse?: boolean,
    secondary?: boolean,
    type?: "button" | "reset" | "submit"
  }

  declare export class Button extends React.Component<void, Grommet$ButtonProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$CardProps = {
    contentPad?: GrommetBoxTypes$PadSizes | {
      between?: GrommetBoxTypes$PadSizes,
      horizontal?: GrommetBoxTypes$PadSizes,
      vertical?: GrommetBoxTypes$PadSizes
    },
    description?: string | React$Element<any>,
    heading?: string | React$Element<any>,
    headingStrong?: boolean,
    label?: string | React$Element<any>,
    link?: React$Element<any>,
    textSize?: "xsmall" |
      "small" |
      "medium" |
      "large" |
      "xlarge",
    thumbnail?: string | React$Element<any>,
    truncate?: boolean,
    video?: {
      source: string,
      type?: string
    } | React.ReactElement<any >
  } & Grommet$BoxProps


  declare export class Card extends React.Component<void, Grommet$CardProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$CarouselProps = {
    a11yTitle?: string,
    autoplay?: boolean,
    autoplaySpeed?: number,
    infinite?: boolean,
    persistentNav?: boolean
  }

  declare export class Carousel extends React.Component<void, Grommet$CarouselProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$CheckBoxProps = {
    checked?: boolean,
    disabled?: boolean,
    label?: React.ReactNode,
    name?: string,
    onChange?: Function,
    reverse?: boolean,
    toggle?: boolean
  }

  declare export class CheckBox extends React.Component<void, Grommet$CheckBoxProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$ColumnsProps = {
    justify?: "start" | "center" | "between" | "end",
    margin?: "small" | "medium" | "large",
    masonry?: boolean,
    maxCount?: number,
    responsive?: boolean,
    size?: "small" | "medium" | "large"
  }

  declare export class Columns extends React.Component<void, Grommet$ColumnsProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$DateTimeProps = {
    format?: string,
    id?: string,
    name?: string,
    onChange?: Function,
    step?: number,
    value?: string | {}
  }

  declare export class DateTime extends React.Component<void, Grommet$DateTimeProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$DistributionProps = {
    a11yTitle?: string,
    full?: boolean,
    series?: Array<{
      label?: React.ReactNode,
      value: number,
      colorIndex?: string,
      important?: boolean,
      onClick?: Function,
      icon?: {
        width?: number,
        height?: number,
        svgElement?: React.ReactNode
      }
    }>,
    size?: "small" | "medium" | "large" | "full",
    units?: string,
    vertical?: boolean
  }

  declare export class Distribution extends React.Component<void, Grommet$DistributionProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$FooterProps = {
    fixed?: boolean,
    float?: boolean,
    primary?: boolean,
    size?: "small" | "medium" | "large"
  } & Grommet$BoxProps


  declare export class Footer extends React.Component<void, Grommet$FooterProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$FormProps = {
    compact?: boolean,
    fill?: boolean,
    onSubmit?: Function,
    pad?: GrommetCustomTypes$FormPadding | {
      horizontal?: GrommetCustomTypes$FormPadding,
      vertical?: GrommetCustomTypes$FormPadding
    }
  }

  declare export class Form extends React.Component<void, Grommet$FormProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$FormattedMessageProps = {
    id: string,
    defaultMessage?: string
  }

  declare export class FormattedMessage extends React.Component<void, Grommet$FormattedMessageProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$FormFieldProps = {
    error?: React.ReactNode,
    help?: React.ReactNode,
    hidden?: boolean,
    htmlFor?: string,
    label?: React.ReactNode,
    size?: "medium" | "large",
    strong?: boolean
  }

  declare export class FormField extends React.Component<void, Grommet$FormFieldProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$FormFieldsProps = {
    children?: React.ReactNode,
    className?: string
  }

  declare export class FormFields extends React.Component<void, Grommet$FormFieldsProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$HeaderProps = {
    fixed?: boolean,
    float?: boolean,
    size?: "small" | "medium" | "large",
    splash?: boolean
  } & Grommet$BoxProps


  declare export class Header extends React.Component<void, Grommet$HeaderProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$HeadingProps = {
    align?: "start" | "center" | "end",
    margin?: "none" | "small" | "medium" | "large",
    size?: "small" | "medium" | "large",
    strong?: boolean,
    tag?: string,
    truncate?: boolean,
    uppercase?: boolean
  }

  declare export class Heading extends React.Component<void, Grommet$HeadingProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$HeadlineProps = {
    align?: "start" | "center" | "end",
    margin?: "none" | "small" | "medium" | "large",
    size?: "small" | "medium" | "large" | "xlarge",
    strong?: boolean
  }

  declare export class Headline extends React.Component<void, Grommet$HeadlineProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$HeroProps = {
    background?: React$Element<any>,
    backgroundColorIndex?: string,
    size?: "small" | "medium" | "large",
    backgroundImage?: string,
    backgroundPosition?: "left" | "center" | "right",
    backgroundVideo?: React$Element<any>,
    colorIndex?: string,
    flush?: boolean,
    image?: string,
    justify?: "start" | "center" | "end",
    responsiveBackgroundPosition?: "left" | "center" | "right",
    separator?: boolean
  }

  declare export class Hero extends React.Component<void, Grommet$HeroProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$ImageProps = {
    align?: {
      bottom?: boolean,
      left?: boolean,
      right?: boolean,
      top?: boolean
    },
    alt?: string,
    caption?: boolean | string,
    fit?: "contain" | "cover",
    full?: "horizontal" | "vertical" | boolean,
    mask?: boolean,
    size?: "small" | "medium" | "large" | "thumb",
    src?: string,
    title?: string
  }

  declare export class Image extends React.Component<void, Grommet$ImageProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$LabelProps = {
    announce?: boolean,
    labelFor?: string,
    margin?: "none" | "small" | "medium" | "large",
    size?: "small" | "medium",
    truncate?: boolean,
    uppercase?: boolean
  }

  declare export class Label extends React.Component<void, Grommet$LabelProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$LayerProps = {
    align?: "center" |
      "top" |
      "bottom" |
      "left" |
      "right",
    closer?: React.ReactNode | boolean,
    flush?: boolean,
    hidden?: boolean,
    peek?: boolean,
    onClose?: Function
  }

  declare export class Layer extends React.Component<void, Grommet$LayerProps, any>{
    context: GrommetContextTypes$All;
    render(): JSX.Element
  }

  declare type Grommet$LegendProps = {
    activeIndex?: number,
    announce?: boolean,
    onActive?: Function,
    series: Array<{
      label?: string,
      value?: number | React.ReactNode,
      units?: number | React.ReactNode | {
        prefix?: string,
        suffix?: string
      },
      colorIndex?: number | string,
      onClick?: Function
    }>,
    total?: boolean | React.ReactNode,
    units?: string | {
      prefix?: string,
      suffix?: string
    }
  }

  declare export class Legend extends React.Component<void, Grommet$LegendProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$ListProps = {
    emptyIndicator?: React.ReactNode,
    onMore?: Function,
    onSelect?: Function,
    selectable?: boolean | "multiple",
    selected?: number | number[]
  }

  declare export class List extends React.Component<void, Grommet$ListProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare export class ListItem extends React.Component<void, Grommet$BoxProps<Grommet$ListItem>, any>{
    render(): JSX.Element
  }

  declare type Grommet$LoginFormProps = {
    align?: "start" | "center" | "end" | "stretch",
    defaultValues?: {
      username?: string,
      rememberMe?: boolean
    },
    errors?: string[],
    forgotPassword?: React.ReactNode,
    logo?: React.ReactNode,
    onSubmit?: Function,
    onChange?: Function,
    rememberMe?: boolean,
    secondaryText?: string,
    title?: string,
    usernameType?: string
  }

  declare export class LoginForm extends React.Component<void, Grommet$LoginFormProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$MapProps = {
    active?: string,
    data: {
      categories: Array<{
        id?: string,
        label?: React.ReactNode,
        items: Array<{
          id?: string,
          label?: string,
          node?: React.ReactNode
        } >
      }>,
      links: Array<{
        childId: string,
        colorIndex?: string,
        parentId: string
      } >
    },
    linkColorIndex?: string,
    onActive?: Function,
    vertical?: boolean
  }

  declare export class Map extends React.Component<void, Grommet$MapProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$MarkdownProps = {
    content?: string,
    components?: {
      props?: {}
    }
  }

  declare export class Markdown extends React.Component<void, Grommet$MarkdownProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$MenuProps = {
    closeOnClick?: boolean,
    dropAlign?: {
      top?: GrommetCustomTypes$VERTICAL_ALIGN_OPTIONS,
      bottom?: GrommetCustomTypes$VERTICAL_ALIGN_OPTIONS,
      left?: GrommetCustomTypes$HORIZONTAL_ALIGN_OPTIONS,
      right?: GrommetCustomTypes$HORIZONTAL_ALIGN_OPTIONS
    },
    dropColorIndex?: string,
    icon?: React.ReactNode,
    id?: string,
    inline?: boolean | "expand",
    fill?: boolean,
    label?: string,
    size?: "small" | "medium" | "large"
  } & Grommet$BoxProps


  declare export class Menu extends React.Component<void, Grommet$MenuProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$MeterProps = {
    active?: boolean,
    activeIndex?: number,
    a11yTitle?: string,
    colorIndex?: string,
    label?: React.ReactNode,
    max?: number,
    min?: number,
    onActive?: Function,
    series?: Array<{
      colorIndex?: string,
      onClick?: Function,
      label?: string,
      value: number
    }>,
    size?: "xsmall" |
      "small" |
      "medium" |
      "large" |
      "xlarge",
    stacked?: boolean,
    tabIndex?: string,
    threshold?: number,
    thresholds?: Array<{
      value: number,
      colorIndex?: string
    }>,
    type?: "bar" | "arc" | "circle" | "spiral",
    value?: number,
    vertical?: boolean,
    responsive?: boolean
  }

  declare export class Meter extends React.Component<void, Grommet$MeterProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$NotificationProps = {
    closer?: React.ReactNode | boolean,
    context?: React.ReactNode,
    message: string,
    onClose?: Function,
    percentComplete?: number,
    size?: "small" | "medium" | "large",
    state?: string,
    status?: string,
    timestamp?: {}
  } & Grommet$BoxProps


  declare export class Notification extends React.Component<void, Grommet$NotificationProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$NumberInputProps = {
    defaultValue?: number,
    disabled?: boolean,
    id?: string,
    max?: number,
    min?: number,
    name?: string,
    onChange?: Function,
    step?: number,
    value?: number | string
  }

  declare export class NumberInput extends React.Component<void, Grommet$NumberInputProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$ObjectProps = {
    data: {}
  }

  declare export class Object extends React.Component<void, Grommet$ObjectProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$ParagraphProps = {
    align?: "start" | "center" | "end",
    margin?: "none" | "small" | "medium" | "large",
    size?: "small" | "medium" | "large" | "xlarge",
    width?: "small" | "medium" | "large"
  }

  declare export class Paragraph extends React.Component<void, Grommet$ParagraphProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$QuoteProps = {
    borderColorIndex?: string,
    size?: "small" | "medium" | "large" | "full",
    credit?: string | React$Element<any>,
    emphasizeCredit?: boolean
  } & Grommet$BoxProps


  declare export class Quote extends React.Component<void, Grommet$QuoteProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$RadioButtonProps = {
    checked?: boolean,
    defaultChecked?: boolean,
    disabled?: boolean,
    id: string,
    label: React.ReactNode,
    name?: string,
    onChange?: Function,
    value?: string
  }

  declare export class RadioButton extends React.Component<void, Grommet$RadioButtonProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$SearchProps = {
    align?: string,
    defaultValue?: string,
    dropAlign?: {
      top?: GrommetCustomTypes$VERTICAL_ALIGN_OPTIONS,
      bottom?: GrommetCustomTypes$VERTICAL_ALIGN_OPTIONS,
      left?: GrommetCustomTypes$HORIZONTAL_ALIGN_OPTIONS,
      right?: GrommetCustomTypes$HORIZONTAL_ALIGN_OPTIONS
    },
    dropColorIndex?: string,
    fill?: boolean,
    iconAlign?: "start" | "end",
    id?: string,
    initialFocus?: boolean,
    inline?: boolean,
    onDOMChange?: Function,
    onSelect?: Function,
    pad?: "small" | "medium",
    placeHolder?: string,
    responsive?: boolean,
    size?: "small" | "medium" | "large",
    suggestions?: Array<{
      label?: React.ReactNode,
      value?: any
    } | string>,
    value?: string
  }

  declare export class Search extends React.Component<void, Grommet$SearchProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$SearchInputProps = {
    defaultValue?: GrommetCustomTypes$SearchInputValue | string,
    id?: string,
    name?: string,
    onDOMChange?: Function,
    onSelect?: Function,
    placeHolder?: string,
    suggestions?: Array<GrommetCustomTypes$SearchInputValue | string>,
    value?: GrommetCustomTypes$SearchInputValue | string
  }

  declare export class SearchInput extends React.Component<void, Grommet$SearchInputProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare export class Section extends React.Component<void, Grommet$BoxProps<Grommet$Section>, any>{
    render(): JSX.Element
  }

  declare type Grommet$SelectProps = {
    inline?: boolean,
    multiple?: boolean,
    onSearch?: Function,
    onChange?: Function,
    placeHolder?: string,
    options: GrommetCustomTypes$SelectValueType[],
    value?: GrommetCustomTypes$SelectValueType | GrommetCustomTypes$SelectValueType[]
  }

  declare export class Select extends React.Component<void, Grommet$SelectProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$SidebarProps = {
    fixed?: boolean,
    size?: "xsmall" | "small" | "medium" | "large",
    full?: boolean
  } & Grommet$BoxProps


  declare export class Sidebar extends React.Component<void, Grommet$SidebarProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$SkipLinkAnchorProps = {
    label: React.ReactNode
  }

  declare export class SkipLinkAnchor extends React.Component<void, Grommet$SkipLinkAnchorProps, any>{
    render(): JSX.Element
  }

  declare export class SkipLinks extends React.Component<void, any, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$SocialShareProps = {
    a11yTitle?: string,
    className?: string,
    colorIndex?: string,
    link: string,
    text?: string,
    title?: string,
    type: "email" |
      "facebook" |
      "twitter" |
      "linkedin" |
      "google"
  }

  declare export class SocialShare extends React.Component<void, Grommet$SocialShareProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$SplitProps = {
    fixed?: boolean,
    flex?: "left" | "right" | "both",
    onResponsive?: Function,
    priority?: "left" | "right",
    separator?: boolean,
    showOnResponsive?: "priority" | "both"
  }

  declare export class Split extends React.Component<void, Grommet$SplitProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$SunBurstProps = {
    a11yTitle?: string,
    active?: number[],
    data?: Array<{
      children?: Array<{}>,
      colorIndex?: string,
      total?: number,
      value: number
    }>,
    label?: React.ReactNode,
    onActive?: Function,
    onClick?: Function,
    size?: "small" |
      "medium" |
      "large" |
      "xlarge" |
      "full"
  }

  declare export class SunBurst extends React.Component<void, Grommet$SunBurstProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$SVGIconProps = {
    a11yTitle?: string,
    colorIndex?: string,
    size?: "small" |
      "medium" |
      "large" |
      "xlarge" |
      "huge",
    type?: "control" | "logo" | "status"
  }

  declare export class SVGIcon extends React.Component<void, Grommet$SVGIconProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare interface Grommet$TabProps {
    title: string,
      active?: boolean,
      id?: string,
      onRequestForActive?: Function
  }

  declare export class Tab extends React.Component<void, Grommet$TabProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$TableProps = {
    a11yTitle?: string,
    onMore?: Function,
    onSelect?: Function,
    scrollable?: boolean,
    selectable?: boolean | "multiple",
    selected?: number | number[]
  }

  declare export class Table extends React.Component<void, Grommet$TableProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$TableHeaderProps = {
    labels: React.ReactNode[],
    onSort?: Function,
    sortAscending?: boolean,
    sortIndex?: number
  }

  declare export class TableHeader extends React.Component<void, Grommet$TableHeaderProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$TableRowProps = {
    onClick?: Function
  }

  declare export class TableRow extends React.Component<void, Grommet$TableRowProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$TabsProps = {
    activeIndex?: number,
    justify?: "start" | "center" | "end",
    responsive?: boolean,
    onActive?: Function
  }

  declare export class Tabs extends React.Component<void, Grommet$TabsProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$TextInputProps = {
    defaultValue?: string,
    id?: string,
    name?: string,
    onDOMChange?: Function,
    onSelect?: Function,
    placeHolder?: string,
    suggestions?: Array<string | {
      label?: React.ReactNode,
      value?: any
    }>,
    value?: string
  }

  declare export class TextInput extends React.Component<void, Grommet$TextInputProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$TileProps = {
    hoverStyle?: "border" | "background" | "none",
    hoverColorIndex?: string,
    hoverBorder?: boolean,
    hoverBorderSize?: "small" | "medium" | "large",
    wide?: boolean
  } & Grommet$BoxProps


  declare export class Tile extends React.Component<void, Grommet$TileProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$TilesProps = {
    fill?: boolean,
    flush?: boolean,
    onMore?: Function,
    onSelect?: Function,
    selectable?: boolean | "multiple",
    selected?: number | number[]
  } & Grommet$BoxProps


  declare export class Tiles extends React.Component<void, Grommet$TilesProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$TimestampProps = {
    align?: "start" | "center" | "end",
    fields?: GrommetCustomTypes$TIME_STAMP_FIELD_TYPES[] | GrommetCustomTypes$TIME_STAMP_FIELD_TYPES,
    value: string | {}
  }

  declare export class Timestamp extends React.Component<void, Grommet$TimestampProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$TipProps = {
    colorIndex?: string,
    onClose: Function,
    target: string
  }

  declare export class Tip extends React.Component<void, Grommet$TipProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$TitleProps = {
    a11yTitle?: string,
    onClick?: Function,
    responsive?: boolean,
    truncate?: boolean
  }

  declare export class Title extends React.Component<void, Grommet$TitleProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$ToastProps = {
    onClose?: Function,
    status?: string
  }

  declare export class Toast extends React.Component<void, Grommet$ToastProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$TopologyProps = {
    a11yTitle?: string,
    links?: Array<{
      colorIndex?: string,
      ids: string[]
    }>,
    linkOffset?: number
  }

  declare export class Topology extends React.Component<void, Grommet$TopologyProps, any>{
    context: GrommetContextTypes$Intl;
    render(): JSX.Element
  }

  declare type Grommet$ValueProps = {
    active?: boolean,
    align?: "start" | "center" | "end",
    announce?: boolean,
    colorIndex?: string,
    icon?: React.ReactNode,
    label?: string | React.ReactNode,
    onClick?: Function,
    size?: "xsmall" |
      "small" |
      "medium" |
      "large" |
      "xlarge",
    trendIcon?: React.ReactNode,
    value?: React.ReactNode | number | string,
    units?: React.ReactNode | string
  }

  declare export class Value extends React.Component<void, Grommet$ValueProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$VideoProps = {
    align?: {
      bottom?: boolean,
      left?: boolean,
      right?: boolean,
      top?: boolean
    },
    allowFullScreen?: boolean,
    autoPlay?: boolean,
    colorIndex?: string,
    fit?: "contain" | "cover",
    full?: boolean | "horizontal" | "vertical",
    loop?: boolean,
    muted?: boolean,
    poster?: string,
    shareLink?: string,
    shareHeadline?: string,
    shareText?: string,
    showControls?: boolean,
    size?: "small" | "medium" | "large",
    timeline?: Array<{
      label?: string,
      time?: number
    }>,
    title?: React.ReactNode
  }

  declare export class Video extends React.Component<void, Grommet$VideoProps, any>{
    render(): JSX.Element
  }

  declare type Grommet$WorldMapProps = {
    series?: Array<{
      continent?: "NorthAmerica" | "SouthAmerica" | "Europe" | "Africa" | "Asia" | "Australia",
      colorIndex?: string,
      onClick?: Function
    }>
  }

  declare export class WorldMap extends React.Component<void, Grommet$WorldMapProps, any>{
    render(): JSX.Element
  }
  declare type GrommetBoxTypes$FixedSizes = "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";

  declare type GrommetBoxTypes$MarginSizes = "small" | "medium" | "large" | "none";

  declare type GrommetBoxTypes$BoxSizes = "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "full" | "1/2" | "1/3" | "2/3" | "1/4" | "3/4";

  declare type GrommetBoxTypes$PadSizes = "small" | "medium" | "large" | "none";

  declare type GrommetBoxTypes$Size = "auto" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "full";

  declare interface GrommetContextTypes$Intl {
    intl?: {}
  }

  declare interface GrommetContextTypes$All {
    router?: any,
    history?: {},
    intl?: {},
    store?: {}
  }
  declare type GrommetCustomTypes$SelectValueType = {
    label?: string,
    value?: any } | string | number;

  declare interface GrommetCustomTypes$SearchInputValue {
    label?: string,
    value?: string
  }

  declare type GrommetCustomTypes$VERTICAL_ALIGN_OPTIONS = "top" | "bottom";

  declare type GrommetCustomTypes$HORIZONTAL_ALIGN_OPTIONS = "right" | "left";

  declare type GrommetCustomTypes$FormPadding = "none" | "small" | "medium" | "large";

  declare type GrommetCustomTypes$AnimationType = "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "jiggle";

  declare interface GrommetCustomTypes$AnimationDetails {
    animation: GrommetCustomTypes$AnimationType,
    duration?: number,
    delay?: number
  }

  declare type GrommetCustomTypes$TIME_STAMP_FIELD_TYPES = "date" | "time" | "year" | "month" | "day" | "hour" | "minute" | "second" | "hours" | "minutes" | "seconds";
}
