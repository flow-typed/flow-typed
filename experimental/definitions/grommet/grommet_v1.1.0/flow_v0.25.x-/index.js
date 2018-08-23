/* eslint-disable flowtype/no-weak-types */

declare module 'grommet' {
  declare module.exports: any;
}

declare module 'grommet/components/Accordion' {
  declare type Grommet$AccordionProps = {
    active?: number | number[],
    animate?: boolean,
    onActive?: Function,
    openMulti?: boolean
  }
  declare class Accordion extends React$Component {
    props: Grommet$AccordionProps;
  }
  declare module.exports:  Class<Accordion>;
}

declare module 'grommet/components/AccordionPanel' {
  declare type Grommet$AccordionPanelProps = {
    a11yTitle?: string,
    active?: boolean,
    animate?: boolean,
    heading?: ReactNode,
    onChange?: Function,
    pad?: any
  }
  declare class AccordionPanel extends React$Component {
    props: Grommet$AccordionPanelProps;
  }
  declare module.exports: Class<AccordionPanel>;
}

declare module 'grommet/components/Animate' {
  declare type Grommet$AnimateProps = {
    component?: string | Function,
    enter?: GrommetCustomTypes$AnimationDetails,
    keep?: boolean,
    leave?: GrommetCustomTypes$AnimationDetails,
    visible?: "scroll" | boolean
  }
  declare class Animate extends React$Component {
    props: Grommet$AnimateProps;
  }
  declare module.exports: Class<Animate>;
}

declare module 'grommet/components/App' {
  declare type Grommet$AppProps = {
    centered?: boolean,
    inline?: boolean
  }
  declare class App extends React$Component {
    props: Grommet$AppProps;
  }
  declare module.exports: Class<App>;
}

declare module 'grommet/components/Anchor' {
  declare type Grommet$AnchorProps = {
    a11yTitle?: string,
    align?: "start" | "center" | "end",
    animateIcon?: boolean,
    disabled?: boolean,
    href?: string,
    icon?: ReactNode,
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

  declare class Anchor extends React$Component {
    props: Grommet$AnchorProps;
  }
  declare module.exports: Class<Anchor>;
}

declare module 'grommet/components/Article' {
  declare type Grommet$ArticleProps = {
    controls?: boolean,
    onProgress?: Function,
    onSelect?: Function,
    scrollStep?: boolean,
    selected?: number
  } & Grommet$BoxProps<Article> & Grommet$BoxFull
  declare class Article extends React$Component {
    props: Grommet$ArticleProps;
  }
  declare module.exports: Class<Article>;
}

declare module 'grommet/components/Box' {
  declare type Grommet$BoxProps$BoxSizing = Grommet$BoxProps<Box> & Grommet$BoxSizing & Grommet$BoxFull;
  declare class Box extends React$Component {
    props: Grommet$BoxProps$BoxSizing;
  }
  declare module.exports: Class<Box>;
}

declare module 'grommet/components/Button' {
  declare type Grommet$ButtonProps = {
    a11yTitle?: string,
    accent?: boolean,
    align?: "start" | "center" | "end",
    fill?: boolean,
    href?: string,
    icon?: React$Element<any>,
    label?: ReactNode,
    method?: "push" | "replace",
    onClick?: Function,
    path?: string,
    plain?: boolean,
    primary?: boolean,
    reverse?: boolean,
    secondary?: boolean,
    type?: "button" | "reset" | "submit"
  }
  declare class Button extends React$Component{
    props: Grommet$ButtonProps;
  }
  declare module.exports: Class<Button>;
}

declare module 'grommet/components/Card' {
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
    textSize?: "xsmall" | "small" | "medium" | "large" | "xlarge",
    thumbnail?: string | React$Element<any>,
    truncate?: boolean,
    video?: {
      source: string,
      type?: string
    } | React$Element<any>
  } & Grommet$BoxProps<Card> & Grommet$BoxFull

  declare class Card extends React$Component {
    props: Grommet$CardProps;
  }
  declare module.exports: Class<Card>;
}

declare module 'grommet/components/Carousel' {
  declare type Grommet$CarouselProps = {
    a11yTitle?: string,
    autoplay?: boolean,
    autoplaySpeed?: number,
    infinite?: boolean,
    persistentNav?: boolean
  }
  declare class Carousel extends React$Component {
    props: Grommet$CarouselProps;
  }
  declare module.exports: Class<Carousel>;
}

declare module 'grommet/components/chart/Area' {
  declare class Area extends React$Component {
    props: Grommet$Chart$GraphProps<Area>;
  }
  declare module.exports: Class<Area>;
}

declare module 'grommet/components/chart/Axis' {
  declare type Grommet$Chart$AxisProps = {
    a11yTitle?: string,
    align?: 'start' | 'end';
    count: number,
    labels: Array<{
      colorIndex?: string,
      index: number,
      label: ReactNode
    }>,
    reverse?: boolean,
    ticks?: boolean,
    tickAlign?: 'start' | 'end';
    vertical?: boolean,
  }
  declare class Axis extends React$Component {
    props: Grommet$Chart$AxisProps;
  }
  declare module.exports: Class<Axis>;
}

declare module 'grommet/components/chart/Bar' {
  declare class Bar extends React$Component {
    props: Grommet$Chart$GraphProps<Bar>;
  }
  declare module.exports: Class<Bar>;
}

declare module 'grommet/components/chart/Base' {
  declare type Grommet$Chart$BaseProps = {
    height?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'sparkline',
    vertical?: boolean,
    width?: 'small' | 'medium' | 'large' | 'full',
  }
  declare class Base extends React$Component {
    props: Grommet$Chart$BaseProps;
  }
  declare module.exports: Class<Base>;
}

declare module 'grommet/components/chart/Chart' {
  declare module.exports: any;
}

declare module 'grommet/components/chart/Graph' {
  declare class Graph extends React$Component {
    props: Grommet$Chart$GraphProps<Graph>,
  }
  declare module.exports: Class<Graph>;
}

declare module 'grommet/components/chart/Grid' {
  declare type Grommet$Chart$GridProps = {
    columns?: number,
    row?: number
  }
  declare class Grid extends React$Component {
    props: Grommet$Chart$GridProps;
  }
  declare module.exports: Class<Grid>;
}

declare module 'grommet/components/chart/HotSpots' {
  declare type $Grommet$Chart$HotSpots = {
    a11yTitle?: number | string,
    activeIndex?: number,
    count: number,
    onActive?: Function,
    onClick?: Function,
    vertical?: boolean
  }
  declare class HotSpots extends React$Component {
    props: $Grommet$Chart$HotSpots;
  }
  declare module.exports: Class<HotSpots>;
}

declare module 'grommet/components/chart/Layers' {
  declare type Grommet$Chart$LayersProps = {
    height?: number,
    width?: number
  }
  declare class Layers extends React$Component {
    props: Grommet$Chart$LayersProps;
  }
  declare module.exports: Class<Layers>;
}

declare module 'grommet/components/chart/Line' {
  declare class Line extends React$Component {
    props: Grommet$Chart$GraphProps<Line>,
  }
  declare module.exports: Class<Line>;
}

declare module 'grommet/components/chart/Marker' {
  declare type $Grommet$Chart$MarkerProps = {
    colorIndex?: string,
    count?: number,
    index?: number,
    max?: number,
    min?: number,
    reverse?: boolean,
    value?: number,
    vertical?: boolean,
  }
  declare class Marker extends React$Component {
    props: $Grommet$Chart$MarkerProps,
  }
  declare module.exports: Class<Marker>;
}

declare module 'grommet/components/chart/MarkerLabel' {
  declare type $Grommet$Chart$MarkerLabelProps = {
    align?: 'start' | 'end',
    colorIndex?: string,
    count?: number,
    index?: number,
    label?: ReactNode,
    max?: number,
    min?: number,
    reverse?: boolean,
    value?: number,
    vertical?: boolean,
  }
  declare class MarkerLabel extends React$Component {
    props: $Grommet$Chart$MarkerLabelProps,
  }
  declare module.exports: Class<MarkerLabel>;
}

declare module 'grommet/components/chart/Range' {
  declare type $Grommet$Chart$RangeProps = {
    active?: {
      end: number,
      start: number
    },
    count: number,
    onActive?: Function,
    vertical?: boolean
  }
  declare class Range extends React$Component {
    props: $Grommet$Chart$RangeProps,
  }
  declare module.exports: Class<Range>;
}

declare module 'grommet/components/CheckBox' {
  declare type Grommet$CheckBoxProps = {
    checked?: boolean,
    disabled?: boolean,
    label?: ReactNode,
    name?: string,
    onChange?: Function,
    reverse?: boolean,
    toggle?: boolean
  }

  declare class CheckBox extends React$Component{
    props: Grommet$CheckBoxProps;
  }
  declare module.exports: Class<CheckBox>;
}

declare module 'grommet/components/Columns' {
  declare type Grommet$ColumnsProps = {
    justify?: "start" | "center" | "between" | "end",
    margin?: "small" | "medium" | "large",
    masonry?: boolean,
    maxCount?: number,
    responsive?: boolean,
    size?: "small" | "medium" | "large"
  }
  declare class Columns extends React$Component {
    props: Grommet$ColumnsProps;
  }
  declare module.exports: Class<Columns>;
}

declare module 'grommet/components/DateTime' {
  declare type Grommet$DateTimeProps = {
    format?: string,
    id?: string,
    name?: string,
    onChange?: Function,
    step?: number,
    value?: string | {}
  }
  declare class DateTime extends React$Component {
    props: Grommet$DateTimeProps
  }
  declare module.exports: Class<DateTime>;
}

declare module 'grommet/components/Distribution' {
  declare type Grommet$DistributionProps = {
    a11yTitle?: string,
    full?: boolean,
    series?: Array<{
      label?: ReactNode,
      value: number,
      colorIndex?: string,
      important?: boolean,
      onClick?: Function,
      icon?: {
        width?: number,
        height?: number,
        svgElement?: ReactNode
      }
    }>,
    size?: "small" | "medium" | "large" | "full",
    units?: string,
    vertical?: boolean
  }
  declare class Distribution extends React$Component {
    props: Grommet$DistributionProps;
  }
  declare module.exports: Class<Distribution>;
}

declare module 'grommet/components/Footer' {
  declare type Grommet$FooterProps = {
    fixed?: boolean,
    float?: boolean,
    primary?: boolean,
    size?: "small" | "medium" | "large"
  } & Grommet$BoxProps<Footer> & Grommet$BoxFull

  declare class Footer extends React$Component {
    props: Grommet$FooterProps;
  }
  declare module.exports: Class<Footer>;
}

declare module 'grommet/components/Form' {
  declare type Grommet$FormProps = {
    compact?: boolean,
    fill?: boolean,
    onSubmit?: Function,
    pad?: GrommetCustomTypes$FormPadding | {
      horizontal?: GrommetCustomTypes$FormPadding,
      vertical?: GrommetCustomTypes$FormPadding
    }
  }

  declare class Form extends React$Component {
    props: Grommet$FormProps;
  }
  declare module.exports: Class<Form>;
}

declare module 'grommet/components/FormattedMessage' {
  declare type Grommet$FormattedMessageProps = {
    id: string,
    defaultMessage?: string
  }

  declare class FormattedMessage extends React$Component {
    props: Grommet$FormattedMessageProps;
  }
  declare module.exports: Class<FormattedMessage>;
}

declare module 'grommet/components/FormField' {
  declare type Grommet$FormFieldProps = {
    error?: ReactNode,
    help?: ReactNode,
    hidden?: boolean,
    htmlFor?: string,
    label?: ReactNode,
    size?: "medium" | "large",
    strong?: boolean
  }
  declare class FormField extends React$Component {
    props: Grommet$FormFieldProps;
  }
  declare module.exports: Class<FormField>;
}

declare module 'grommet/components/FormFields' {
  declare type Grommet$FormFieldsProps = {
    children?: ReactNode,
    className?: string
  }

  declare class FormFields extends React$Component {
    props: Grommet$FormFieldsProps;
  }
  declare module.exports: Class<FormFields>;
}

declare module 'grommet/components/Header' {
  declare type Grommet$HeaderProps = {
    fixed?: boolean,
    float?: boolean,
    size?: "small" | "medium" | "large",
    splash?: boolean
  } & Grommet$BoxProps<Header> & Grommet$BoxFull
  declare class Header extends React$Component {
    props: Grommet$HeaderProps;
  }
  declare module.exports: Class<Header>;
}

declare module 'grommet/components/Heading' {
  declare type Grommet$HeadingProps = {
    align?: "start" | "center" | "end",
    margin?: "none" | "small" | "medium" | "large",
    size?: "small" | "medium" | "large",
    strong?: boolean,
    tag?: string,
    truncate?: boolean,
    uppercase?: boolean
  }

  declare class Heading extends React$Component {
    props: Grommet$HeadingProps;
  }
  declare module.exports: Class<Heading>;
}

declare module 'grommet/components/Headline' {
  declare type Grommet$HeadlineProps = {
    align?: "start" | "center" | "end",
    margin?: "none" | "small" | "medium" | "large",
    size?: "small" | "medium" | "large" | "xlarge",
    strong?: boolean
  }
  declare class Headline extends React$Component {
    props: Grommet$HeadlineProps;
  }
  declare module.exports: Class<Headline>;
}

declare module 'grommet/components/Hero' {
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
  declare class Hero extends React$Component{
    props: Grommet$HeroProps;
  }
  declare module.exports: Class<Hero>;
}
declare module 'grommet/components/icons/base/AccessAccessibility' {
  declare class AccessAccessibility extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<AccessAccessibility>;
}
declare module 'grommet/components/icons/base/AccessAd' {
  declare class AccessAd extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<AccessAd>;
}
declare module 'grommet/components/icons/base/AccessAssistListening' {
  declare class AccessAssistListening extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<AccessAssistListening>;
}
declare module 'grommet/components/icons/base/AccessBraille' {
  declare class AccessBraille extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<AccessBraille>;
}
declare module 'grommet/components/icons/base/AccessSign' {
  declare class AccessSign extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<AccessSign>;
}
declare module 'grommet/components/icons/base/AccessTty' {
  declare class AccessTty extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<AccessTty>;
}
declare module 'grommet/components/icons/base/AccessVolumeControl' {
  declare class AccessVolumeControl extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<AccessVolumeControl>;
}
declare module 'grommet/components/icons/base/AccessWheelchairActive' {
  declare class AccessWheelchairActive extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<AccessWheelchairActive>;
}
declare module 'grommet/components/icons/base/AccessWheelchair' {
  declare class AccessWheelchair extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<AccessWheelchair>;
}
declare module 'grommet/components/icons/base/Achievement' {
  declare class Achievement extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Achievement>;
}
declare module 'grommet/components/icons/base/Action' {
  declare class Action extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Action>;
}
declare module 'grommet/components/icons/base/Actions' {
  declare class Actions extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Actions>;
}
declare module 'grommet/components/icons/base/AddCircle' {
  declare class AddCircle extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<AddCircle>;
}
declare module 'grommet/components/icons/base/Add' {
  declare class Add extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Add>;
}
declare module 'grommet/components/icons/base/Aggregate' {
  declare class Aggregate extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Aggregate>;
}
declare module 'grommet/components/icons/base/Aid' {
  declare class Aid extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Aid>;
}
declare module 'grommet/components/icons/base/Alarm' {
  declare class Alarm extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Alarm>;
}
declare module 'grommet/components/icons/base/Alert' {
  declare class Alert extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Alert>;
}
declare module 'grommet/components/icons/base/Analytics' {
  declare class Analytics extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Analytics>;
}
declare module 'grommet/components/icons/base/Announce' {
  declare class Announce extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Announce>;
}
declare module 'grommet/components/icons/base/Apps' {
  declare class Apps extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Apps>;
}
declare module 'grommet/components/icons/base/Archive' {
  declare class Archive extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Archive>;
}
declare module 'grommet/components/icons/base/Article' {
  declare class Article extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Article>;
}
declare module 'grommet/components/icons/base/Ascend' {
  declare class Ascend extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Ascend>;
}
declare module 'grommet/components/icons/base/Attachment' {
  declare class Attachment extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Attachment>;
}
declare module 'grommet/components/icons/base/BackTen' {
  declare class BackTen extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BackTen>;
}
declare module 'grommet/components/icons/base/BarChart' {
  declare class BarChart extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BarChart>;
}
declare module 'grommet/components/icons/base/Basket' {
  declare class Basket extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Basket>;
}
declare module 'grommet/components/icons/base/Blog' {
  declare class Blog extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Blog>;
}
declare module 'grommet/components/icons/base/Book' {
  declare class Book extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Book>;
}
declare module 'grommet/components/icons/base/Bookmark' {
  declare class Bookmark extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Bookmark>;
}
declare module 'grommet/components/icons/base/BottomCorner' {
  declare class BottomCorner extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BottomCorner>;
}
declare module 'grommet/components/icons/base/BrandAppleAppStore' {
  declare class BrandAppleAppStore extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandAppleAppStore>;
}
declare module 'grommet/components/icons/base/BrandCodepenEdit' {
  declare class BrandCodepenEdit extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandCodepenEdit>;
}
declare module 'grommet/components/icons/base/BrandCodepenTry' {
  declare class BrandCodepenTry extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandCodepenTry>;
}
declare module 'grommet/components/icons/base/BrandGooglePlay' {
  declare class BrandGooglePlay extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandGooglePlay>;
}
declare module 'grommet/components/icons/base/BrandGrommetOutline' {
  declare class BrandGrommetOutline extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandGrommetOutline>;
}
declare module 'grommet/components/icons/base/BrandGrommetPath' {
  declare class BrandGrommetPath extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandGrommetPath>;
}
declare module 'grommet/components/icons/base/BrandHpeElementOutline' {
  declare class BrandHpeElementOutline extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandHpeElementOutline>;
}
declare module 'grommet/components/icons/base/BrandHpeElementPath' {
  declare class BrandHpeElementPath extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandHpeElementPath>;
}
declare module 'grommet/components/icons/base/BrandHpeLabsInsigniaOutline' {
  declare class BrandHpeLabsInsigniaOutline extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandHpeLabsInsigniaOutline>;
}
declare module 'grommet/components/icons/base/BrandHpeLabsInsignia' {
  declare class BrandHpeLabsInsignia extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandHpeLabsInsignia>;
}
declare module 'grommet/components/icons/base/BrandHpeStackCentered' {
  declare class BrandHpeStackCentered extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandHpeStackCentered>;
}
declare module 'grommet/components/icons/base/BrandHpeStack' {
  declare class BrandHpeStack extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BrandHpeStack>;
}
declare module 'grommet/components/icons/base/Briefcase' {
  declare class Briefcase extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Briefcase>;
}
declare module 'grommet/components/icons/base/Brush' {
  declare class Brush extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Brush>;
}
declare module 'grommet/components/icons/base/Bug' {
  declare class Bug extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Bug>;
}
declare module 'grommet/components/icons/base/Bundle' {
  declare class Bundle extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Bundle>;
}
declare module 'grommet/components/icons/base/BusinessService' {
  declare class BusinessService extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<BusinessService>;
}
declare module 'grommet/components/icons/base/Calculator' {
  declare class Calculator extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Calculator>;
}
declare module 'grommet/components/icons/base/Calendar' {
  declare class Calendar extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Calendar>;
}
declare module 'grommet/components/icons/base/Camera' {
  declare class Camera extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Camera>;
}
declare module 'grommet/components/icons/base/Capacity' {
  declare class Capacity extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Capacity>;
}
declare module 'grommet/components/icons/base/Car' {
  declare class Car extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Car>;
}
declare module 'grommet/components/icons/base/CaretDown' {
  declare class CaretDown extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CaretDown>;
}
declare module 'grommet/components/icons/base/CaretNext' {
  declare class CaretNext extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CaretNext>;
}
declare module 'grommet/components/icons/base/CaretPrevious' {
  declare class CaretPrevious extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CaretPrevious>;
}
declare module 'grommet/components/icons/base/CaretUp' {
  declare class CaretUp extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CaretUp>;
}
declare module 'grommet/components/icons/base/Cart' {
  declare class Cart extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Cart>;
}
declare module 'grommet/components/icons/base/Catalog' {
  declare class Catalog extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Catalog>;
}
declare module 'grommet/components/icons/base/ChapterAdd' {
  declare class ChapterAdd extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ChapterAdd>;
}
declare module 'grommet/components/icons/base/ChapterNext' {
  declare class ChapterNext extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ChapterNext>;
}
declare module 'grommet/components/icons/base/ChapterPrevious' {
  declare class ChapterPrevious extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ChapterPrevious>;
}
declare module 'grommet/components/icons/base/Chat' {
  declare class Chat extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Chat>;
}
declare module 'grommet/components/icons/base/CheckboxSelected' {
  declare class CheckboxSelected extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CheckboxSelected>;
}
declare module 'grommet/components/icons/base/Checkbox' {
  declare class Checkbox extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Checkbox>;
}
declare module 'grommet/components/icons/base/Checkmark' {
  declare class Checkmark extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Checkmark>;
}
declare module 'grommet/components/icons/base/CircleInformation' {
  declare class CircleInformation extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CircleInformation>;
}
declare module 'grommet/components/icons/base/CirclePlay' {
  declare class CirclePlay extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CirclePlay>;
}
declare module 'grommet/components/icons/base/CircleQuestion' {
  declare class CircleQuestion extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CircleQuestion>;
}
declare module 'grommet/components/icons/base/ClearOption' {
  declare class ClearOption extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ClearOption>;
}
declare module 'grommet/components/icons/base/Clear' {
  declare class Clear extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Clear>;
}
declare module 'grommet/components/icons/base/Cli' {
  declare class Cli extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Cli>;
}
declare module 'grommet/components/icons/base/Clipboard' {
  declare class Clipboard extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Clipboard>;
}
declare module 'grommet/components/icons/base/Clock' {
  declare class Clock extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Clock>;
}
declare module 'grommet/components/icons/base/Clone' {
  declare class Clone extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Clone>;
}
declare module 'grommet/components/icons/base/Close' {
  declare class Close extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Close>;
}
declare module 'grommet/components/icons/base/ClosedCaption' {
  declare class ClosedCaption extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ClosedCaption>;
}
declare module 'grommet/components/icons/base/CloudComputer' {
  declare class CloudComputer extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CloudComputer>;
}
declare module 'grommet/components/icons/base/CloudDownload' {
  declare class CloudDownload extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CloudDownload>;
}
declare module 'grommet/components/icons/base/CloudSoftware' {
  declare class CloudSoftware extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CloudSoftware>;
}
declare module 'grommet/components/icons/base/CloudUpload' {
  declare class CloudUpload extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CloudUpload>;
}
declare module 'grommet/components/icons/base/Cloud' {
  declare class Cloud extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Cloud>;
}
declare module 'grommet/components/icons/base/Cluster' {
  declare class Cluster extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Cluster>;
}
declare module 'grommet/components/icons/base/Code' {
  declare class Code extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Code>;
}
declare module 'grommet/components/icons/base/Columns' {
  declare class Columns extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Columns>;
}
declare module 'grommet/components/icons/base/Compare' {
  declare class Compare extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Compare>;
}
declare module 'grommet/components/icons/base/Compass' {
  declare class Compass extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Compass>;
}
declare module 'grommet/components/icons/base/Compliance' {
  declare class Compliance extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Compliance>;
}
declare module 'grommet/components/icons/base/Configure' {
  declare class Configure extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Configure>;
}
declare module 'grommet/components/icons/base/Connect' {
  declare class Connect extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Connect>;
}
declare module 'grommet/components/icons/base/ContactInfo' {
  declare class ContactInfo extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ContactInfo>;
}
declare module 'grommet/components/icons/base/Contact' {
  declare class Contact extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Contact>;
}
declare module 'grommet/components/icons/base/Contract' {
  declare class Contract extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Contract>;
}
declare module 'grommet/components/icons/base/Copy' {
  declare class Copy extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Copy>;
}
declare module 'grommet/components/icons/base/CreditCard' {
  declare class CreditCard extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<CreditCard>;
}
declare module 'grommet/components/icons/base/Cube' {
  declare class Cube extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Cube>;
}
declare module 'grommet/components/icons/base/Cubes' {
  declare class Cubes extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Cubes>;
}
declare module 'grommet/components/icons/base/Currency' {
  declare class Currency extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Currency>;
}
declare module 'grommet/components/icons/base/Cursor' {
  declare class Cursor extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Cursor>;
}
declare module 'grommet/components/icons/base/Cut' {
  declare class Cut extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Cut>;
}
declare module 'grommet/components/icons/base/Cycle' {
  declare class Cycle extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Cycle>;
}
declare module 'grommet/components/icons/base/Dashboard' {
  declare class Dashboard extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Dashboard>;
}
declare module 'grommet/components/icons/base/Database' {
  declare class Database extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Database>;
}
declare module 'grommet/components/icons/base/Deliver' {
  declare class Deliver extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Deliver>;
}
declare module 'grommet/components/icons/base/Deploy' {
  declare class Deploy extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Deploy>;
}
declare module 'grommet/components/icons/base/Descend' {
  declare class Descend extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Descend>;
}
declare module 'grommet/components/icons/base/Desktop' {
  declare class Desktop extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Desktop>;
}
declare module 'grommet/components/icons/base/Detach' {
  declare class Detach extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Detach>;
}
declare module 'grommet/components/icons/base/Diamond' {
  declare class Diamond extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Diamond>;
}
declare module 'grommet/components/icons/base/Directions' {
  declare class Directions extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Directions>;
}
declare module 'grommet/components/icons/base/Dislike' {
  declare class Dislike extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Dislike>;
}
declare module 'grommet/components/icons/base/DocumentCloud' {
  declare class DocumentCloud extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentCloud>;
}
declare module 'grommet/components/icons/base/DocumentConfig' {
  declare class DocumentConfig extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentConfig>;
}
declare module 'grommet/components/icons/base/DocumentCsv' {
  declare class DocumentCsv extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentCsv>;
}
declare module 'grommet/components/icons/base/DocumentDownload' {
  declare class DocumentDownload extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentDownload>;
}
declare module 'grommet/components/icons/base/DocumentExcel' {
  declare class DocumentExcel extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentExcel>;
}
declare module 'grommet/components/icons/base/DocumentExe' {
  declare class DocumentExe extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentExe>;
}
declare module 'grommet/components/icons/base/DocumentImage' {
  declare class DocumentImage extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentImage>;
}
declare module 'grommet/components/icons/base/DocumentLocked' {
  declare class DocumentLocked extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentLocked>;
}
declare module 'grommet/components/icons/base/DocumentMissing' {
  declare class DocumentMissing extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentMissing>;
}
declare module 'grommet/components/icons/base/DocumentNotes' {
  declare class DocumentNotes extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentNotes>;
}
declare module 'grommet/components/icons/base/DocumentOutlook' {
  declare class DocumentOutlook extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentOutlook>;
}
declare module 'grommet/components/icons/base/DocumentPdf' {
  declare class DocumentPdf extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentPdf>;
}
declare module 'grommet/components/icons/base/DocumentPerformance' {
  declare class DocumentPerformance extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentPerformance>;
}
declare module 'grommet/components/icons/base/DocumentPpt' {
  declare class DocumentPpt extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentPpt>;
}
declare module 'grommet/components/icons/base/DocumentRtf' {
  declare class DocumentRtf extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentRtf>;
}
declare module 'grommet/components/icons/base/DocumentSound' {
  declare class DocumentSound extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentSound>;
}
declare module 'grommet/components/icons/base/DocumentStore' {
  declare class DocumentStore extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentStore>;
}
declare module 'grommet/components/icons/base/DocumentTest' {
  declare class DocumentTest extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentTest>;
}
declare module 'grommet/components/icons/base/DocumentThreat' {
  declare class DocumentThreat extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentThreat>;
}
declare module 'grommet/components/icons/base/DocumentTime' {
  declare class DocumentTime extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentTime>;
}
declare module 'grommet/components/icons/base/DocumentTransfer' {
  declare class DocumentTransfer extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentTransfer>;
}
declare module 'grommet/components/icons/base/DocumentTxt' {
  declare class DocumentTxt extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentTxt>;
}
declare module 'grommet/components/icons/base/DocumentUpdate' {
  declare class DocumentUpdate extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentUpdate>;
}
declare module 'grommet/components/icons/base/DocumentUpload' {
  declare class DocumentUpload extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentUpload>;
}
declare module 'grommet/components/icons/base/DocumentUser' {
  declare class DocumentUser extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentUser>;
}
declare module 'grommet/components/icons/base/DocumentVerified' {
  declare class DocumentVerified extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentVerified>;
}
declare module 'grommet/components/icons/base/DocumentVideo' {
  declare class DocumentVideo extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentVideo>;
}
declare module 'grommet/components/icons/base/DocumentWindows' {
  declare class DocumentWindows extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentWindows>;
}
declare module 'grommet/components/icons/base/DocumentWord' {
  declare class DocumentWord extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentWord>;
}
declare module 'grommet/components/icons/base/DocumentZip' {
  declare class DocumentZip extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DocumentZip>;
}
declare module 'grommet/components/icons/base/Document' {
  declare class Document extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Document>;
}
declare module 'grommet/components/icons/base/Domain' {
  declare class Domain extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Domain>;
}
declare module 'grommet/components/icons/base/Down' {
  declare class Down extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Down>;
}
declare module 'grommet/components/icons/base/Download' {
  declare class Download extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Download>;
}
declare module 'grommet/components/icons/base/Drag' {
  declare class Drag extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Drag>;
}
declare module 'grommet/components/icons/base/DriveCage' {
  declare class DriveCage extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<DriveCage>;
}
declare module 'grommet/components/icons/base/Duplicate' {
  declare class Duplicate extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Duplicate>;
}
declare module 'grommet/components/icons/base/Edit' {
  declare class Edit extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Edit>;
}
declare module 'grommet/components/icons/base/Eject' {
  declare class Eject extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Eject>;
}
declare module 'grommet/components/icons/base/EmptyCircle' {
  declare class EmptyCircle extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<EmptyCircle>;
}
declare module 'grommet/components/icons/base/Expand' {
  declare class Expand extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Expand>;
}
declare module 'grommet/components/icons/base/Fan' {
  declare class Fan extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Fan>;
}
declare module 'grommet/components/icons/base/FastForward' {
  declare class FastForward extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<FastForward>;
}
declare module 'grommet/components/icons/base/Favorite' {
  declare class Favorite extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Favorite>;
}
declare module 'grommet/components/icons/base/Filter' {
  declare class Filter extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Filter>;
}
declare module 'grommet/components/icons/base/FingerPrint' {
  declare class FingerPrint extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<FingerPrint>;
}
declare module 'grommet/components/icons/base/Flag' {
  declare class Flag extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Flag>;
}
declare module 'grommet/components/icons/base/FolderCycle' {
  declare class FolderCycle extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<FolderCycle>;
}
declare module 'grommet/components/icons/base/FolderOpen' {
  declare class FolderOpen extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<FolderOpen>;
}
declare module 'grommet/components/icons/base/Folder' {
  declare class Folder extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Folder>;
}
declare module 'grommet/components/icons/base/ForwardTen' {
  declare class ForwardTen extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ForwardTen>;
}
declare module 'grommet/components/icons/base/Gallery' {
  declare class Gallery extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Gallery>;
}
declare module 'grommet/components/icons/base/Gamepad' {
  declare class Gamepad extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Gamepad>;
}
declare module 'grommet/components/icons/base/Gift' {
  declare class Gift extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Gift>;
}
declare module 'grommet/components/icons/base/Globe' {
  declare class Globe extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Globe>;
}
declare module 'grommet/components/icons/base/Grid' {
  declare class Grid extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Grid>;
}
declare module 'grommet/components/icons/base/Group' {
  declare class Group extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Group>;
}
declare module 'grommet/components/icons/base/Grow' {
  declare class Grow extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Grow>;
}
declare module 'grommet/components/icons/base/Halt' {
  declare class Halt extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Halt>;
}
declare module 'grommet/components/icons/base/Help' {
  declare class Help extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Help>;
}
declare module 'grommet/components/icons/base/History' {
  declare class History extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<History>;
}
declare module 'grommet/components/icons/base/Home' {
  declare class Home extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Home>;
}
declare module 'grommet/components/icons/base/HostMaintenance' {
  declare class HostMaintenance extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<HostMaintenance>;
}
declare module 'grommet/components/icons/base/Host' {
  declare class Host extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Host>;
}
declare module 'grommet/components/icons/base/Image' {
  declare class Image extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Image>;
}
declare module 'grommet/components/icons/base/Impact' {
  declare class Impact extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Impact>;
}
declare module 'grommet/components/icons/base/InProgress' {
  declare class InProgress extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<InProgress>;
}
declare module 'grommet/components/icons/base/Inbox' {
  declare class Inbox extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Inbox>;
}
declare module 'grommet/components/icons/base/Indicator' {
  declare class Indicator extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Indicator>;
}
declare module 'grommet/components/icons/base/Info' {
  declare class Info extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Info>;
}
declare module 'grommet/components/icons/base/Inherit' {
  declare class Inherit extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Inherit>;
}
declare module 'grommet/components/icons/base/Inspect' {
  declare class Inspect extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Inspect>;
}
declare module 'grommet/components/icons/base/Install' {
  declare class Install extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Install>;
}
declare module 'grommet/components/icons/base/Integration' {
  declare class Integration extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Integration>;
}
declare module 'grommet/components/icons/base/Iteration' {
  declare class Iteration extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Iteration>;
}
declare module 'grommet/components/icons/base/Java' {
  declare class Java extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Java>;
}
declare module 'grommet/components/icons/base/Language' {
  declare class Language extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Language>;
}
declare module 'grommet/components/icons/base/Launch' {
  declare class Launch extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Launch>;
}
declare module 'grommet/components/icons/base/Layer' {
  declare class Layer extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Layer>;
}
declare module 'grommet/components/icons/base/License' {
  declare class License extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<License>;
}
declare module 'grommet/components/icons/base/Like' {
  declare class Like extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Like>;
}
declare module 'grommet/components/icons/base/LineChart' {
  declare class LineChart extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<LineChart>;
}
declare module 'grommet/components/icons/base/LinkBottom' {
  declare class LinkBottom extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<LinkBottom>;
}
declare module 'grommet/components/icons/base/LinkDown' {
  declare class LinkDown extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<LinkDown>;
}
declare module 'grommet/components/icons/base/LinkNext' {
  declare class LinkNext extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<LinkNext>;
}
declare module 'grommet/components/icons/base/LinkPrevious' {
  declare class LinkPrevious extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<LinkPrevious>;
}
declare module 'grommet/components/icons/base/LinkTop' {
  declare class LinkTop extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<LinkTop>;
}
declare module 'grommet/components/icons/base/LinkUp' {
  declare class LinkUp extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<LinkUp>;
}
declare module 'grommet/components/icons/base/Link' {
  declare class Link extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Link>;
}
declare module 'grommet/components/icons/base/Local' {
  declare class Local extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Local>;
}
declare module 'grommet/components/icons/base/LocationPin' {
  declare class LocationPin extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<LocationPin>;
}
declare module 'grommet/components/icons/base/Location' {
  declare class Location extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Location>;
}
declare module 'grommet/components/icons/base/Lock' {
  declare class Lock extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Lock>;
}
declare module 'grommet/components/icons/base/Login' {
  declare class Login extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Login>;
}
declare module 'grommet/components/icons/base/Logout' {
  declare class Logout extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Logout>;
}
declare module 'grommet/components/icons/base/Magic' {
  declare class Magic extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Magic>;
}
declare module 'grommet/components/icons/base/MailOption' {
  declare class MailOption extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<MailOption>;
}
declare module 'grommet/components/icons/base/Mail' {
  declare class Mail extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Mail>;
}
declare module 'grommet/components/icons/base/Manual' {
  declare class Manual extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Manual>;
}
declare module 'grommet/components/icons/base/MapLocation' {
  declare class MapLocation extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<MapLocation>;
}
declare module 'grommet/components/icons/base/Map' {
  declare class Map extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Map>;
}
declare module 'grommet/components/icons/base/Menu' {
  declare class Menu extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Menu>;
}
declare module 'grommet/components/icons/base/Microphone' {
  declare class Microphone extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Microphone>;
}
declare module 'grommet/components/icons/base/Money' {
  declare class Money extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Money>;
}
declare module 'grommet/components/icons/base/Monitor' {
  declare class Monitor extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Monitor>;
}
declare module 'grommet/components/icons/base/More' {
  declare class More extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<More>;
}
declare module 'grommet/components/icons/base/Multiple' {
  declare class Multiple extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Multiple>;
}
declare module 'grommet/components/icons/base/Navigate' {
  declare class Navigate extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Navigate>;
}
declare module 'grommet/components/icons/base/NewWindow' {
  declare class NewWindow extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<NewWindow>;
}
declare module 'grommet/components/icons/base/New' {
  declare class New extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<New>;
}
declare module 'grommet/components/icons/base/Next' {
  declare class Next extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Next>;
}
declare module 'grommet/components/icons/base/Nodes' {
  declare class Nodes extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Nodes>;
}
declare module 'grommet/components/icons/base/Note' {
  declare class Note extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Note>;
}
declare module 'grommet/components/icons/base/Notes' {
  declare class Notes extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Notes>;
}
declare module 'grommet/components/icons/base/Notification' {
  declare class Notification extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Notification>;
}
declare module 'grommet/components/icons/base/ObjectGroup' {
  declare class ObjectGroup extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ObjectGroup>;
}
declare module 'grommet/components/icons/base/ObjectUngroup' {
  declare class ObjectUngroup extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ObjectUngroup>;
}
declare module 'grommet/components/icons/base/Optimize' {
  declare class Optimize extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Optimize>;
}
declare module 'grommet/components/icons/base/Organization' {
  declare class Organization extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Organization>;
}
declare module 'grommet/components/icons/base/Overview' {
  declare class Overview extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Overview>;
}
declare module 'grommet/components/icons/base/Pan' {
  declare class Pan extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Pan>;
}
declare module 'grommet/components/icons/base/PauseFill' {
  declare class PauseFill extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PauseFill>;
}
declare module 'grommet/components/icons/base/Pause' {
  declare class Pause extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Pause>;
}
declare module 'grommet/components/icons/base/PersonalComputer' {
  declare class PersonalComputer extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PersonalComputer>;
}
declare module 'grommet/components/icons/base/PieChart' {
  declare class PieChart extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PieChart>;
}
declare module 'grommet/components/icons/base/Pin' {
  declare class Pin extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Pin>;
}
declare module 'grommet/components/icons/base/Plan' {
  declare class Plan extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Plan>;
}
declare module 'grommet/components/icons/base/PlatformAmazon' {
  declare class PlatformAmazon extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformAmazon>;
}
declare module 'grommet/components/icons/base/PlatformAndroid' {
  declare class PlatformAndroid extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformAndroid>;
}
declare module 'grommet/components/icons/base/PlatformApple' {
  declare class PlatformApple extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformApple>;
}
declare module 'grommet/components/icons/base/PlatformArchlinux' {
  declare class PlatformArchlinux extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformArchlinux>;
}
declare module 'grommet/components/icons/base/PlatformAruba' {
  declare class PlatformAruba extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformAruba>;
}
declare module 'grommet/components/icons/base/PlatformCentos' {
  declare class PlatformCentos extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformCentos>;
}
declare module 'grommet/components/icons/base/PlatformChrome' {
  declare class PlatformChrome extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformChrome>;
}
declare module 'grommet/components/icons/base/PlatformCloudlinux' {
  declare class PlatformCloudlinux extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformCloudlinux>;
}
declare module 'grommet/components/icons/base/PlatformDebian' {
  declare class PlatformDebian extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformDebian>;
}
declare module 'grommet/components/icons/base/PlatformDocker' {
  declare class PlatformDocker extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformDocker>;
}
declare module 'grommet/components/icons/base/PlatformDos' {
  declare class PlatformDos extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformDos>;
}
declare module 'grommet/components/icons/base/PlatformDropbox' {
  declare class PlatformDropbox extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformDropbox>;
}
declare module 'grommet/components/icons/base/PlatformEdge' {
  declare class PlatformEdge extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformEdge>;
}
declare module 'grommet/components/icons/base/PlatformFedora' {
  declare class PlatformFedora extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformFedora>;
}
declare module 'grommet/components/icons/base/PlatformFirefox' {
  declare class PlatformFirefox extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformFirefox>;
}
declare module 'grommet/components/icons/base/PlatformFreebsd' {
  declare class PlatformFreebsd extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformFreebsd>;
}
declare module 'grommet/components/icons/base/PlatformGoogle' {
  declare class PlatformGoogle extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformGoogle>;
}
declare module 'grommet/components/icons/base/PlatformHadoop' {
  declare class PlatformHadoop extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformHadoop>;
}
declare module 'grommet/components/icons/base/PlatformHeroku' {
  declare class PlatformHeroku extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformHeroku>;
}
declare module 'grommet/components/icons/base/PlatformHorton' {
  declare class PlatformHorton extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformHorton>;
}
declare module 'grommet/components/icons/base/PlatformHp' {
  declare class PlatformHp extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformHp>;
}
declare module 'grommet/components/icons/base/PlatformHpi' {
  declare class PlatformHpi extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformHpi>;
}
declare module 'grommet/components/icons/base/PlatformInternetExplorer' {
  declare class PlatformInternetExplorer extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformInternetExplorer>;
}
declare module 'grommet/components/icons/base/PlatformJava' {
  declare class PlatformJava extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformJava>;
}
declare module 'grommet/components/icons/base/PlatformMandriva' {
  declare class PlatformMandriva extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformMandriva>;
}
declare module 'grommet/components/icons/base/PlatformMysql' {
  declare class PlatformMysql extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformMysql>;
}
declare module 'grommet/components/icons/base/PlatformNorton' {
  declare class PlatformNorton extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformNorton>;
}
declare module 'grommet/components/icons/base/PlatformOnedrive' {
  declare class PlatformOnedrive extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformOnedrive>;
}
declare module 'grommet/components/icons/base/PlatformOpera' {
  declare class PlatformOpera extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformOpera>;
}
declare module 'grommet/components/icons/base/PlatformOracle' {
  declare class PlatformOracle extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformOracle>;
}
declare module 'grommet/components/icons/base/PlatformPiedPiper' {
  declare class PlatformPiedPiper extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformPiedPiper>;
}
declare module 'grommet/components/icons/base/PlatformRaspberry' {
  declare class PlatformRaspberry extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformRaspberry>;
}
declare module 'grommet/components/icons/base/PlatformReactjs' {
  declare class PlatformReactjs extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformReactjs>;
}
declare module 'grommet/components/icons/base/PlatformRedhat' {
  declare class PlatformRedhat extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformRedhat>;
}
declare module 'grommet/components/icons/base/PlatformSafariOption' {
  declare class PlatformSafariOption extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformSafariOption>;
}
declare module 'grommet/components/icons/base/PlatformSafari' {
  declare class PlatformSafari extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformSafari>;
}
declare module 'grommet/components/icons/base/PlatformSco' {
  declare class PlatformSco extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformSco>;
}
declare module 'grommet/components/icons/base/PlatformSolaris' {
  declare class PlatformSolaris extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformSolaris>;
}
declare module 'grommet/components/icons/base/PlatformSuse' {
  declare class PlatformSuse extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformSuse>;
}
declare module 'grommet/components/icons/base/PlatformSwift' {
  declare class PlatformSwift extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformSwift>;
}
declare module 'grommet/components/icons/base/PlatformTurbolinux' {
  declare class PlatformTurbolinux extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformTurbolinux>;
}
declare module 'grommet/components/icons/base/PlatformUbuntu' {
  declare class PlatformUbuntu extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformUbuntu>;
}
declare module 'grommet/components/icons/base/PlatformUnixware' {
  declare class PlatformUnixware extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformUnixware>;
}
declare module 'grommet/components/icons/base/PlatformVmware' {
  declare class PlatformVmware extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformVmware>;
}
declare module 'grommet/components/icons/base/PlatformWindowsLegacy' {
  declare class PlatformWindowsLegacy extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformWindowsLegacy>;
}
declare module 'grommet/components/icons/base/PlatformWindows' {
  declare class PlatformWindows extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlatformWindows>;
}
declare module 'grommet/components/icons/base/PlayFill' {
  declare class PlayFill extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<PlayFill>;
}
declare module 'grommet/components/icons/base/Play' {
  declare class Play extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Play>;
}
declare module 'grommet/components/icons/base/Power' {
  declare class Power extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Power>;
}
declare module 'grommet/components/icons/base/Previous' {
  declare class Previous extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Previous>;
}
declare module 'grommet/components/icons/base/Print' {
  declare class Print extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Print>;
}
declare module 'grommet/components/icons/base/RadialSelected' {
  declare class RadialSelected extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<RadialSelected>;
}
declare module 'grommet/components/icons/base/Radial' {
  declare class Radial extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Radial>;
}
declare module 'grommet/components/icons/base/Refresh' {
  declare class Refresh extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Refresh>;
}
declare module 'grommet/components/icons/base/Resources' {
  declare class Resources extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Resources>;
}
declare module 'grommet/components/icons/base/Resume' {
  declare class Resume extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Resume>;
}
declare module 'grommet/components/icons/base/Revert' {
  declare class Revert extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Revert>;
}
declare module 'grommet/components/icons/base/Rewind' {
  declare class Rewind extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Rewind>;
}
declare module 'grommet/components/icons/base/Risk' {
  declare class Risk extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Risk>;
}
declare module 'grommet/components/icons/base/Robot' {
  declare class Robot extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Robot>;
}
declare module 'grommet/components/icons/base/Rss' {
  declare class Rss extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Rss>;
}
declare module 'grommet/components/icons/base/Run' {
  declare class Run extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Run>;
}
declare module 'grommet/components/icons/base/Satellite' {
  declare class Satellite extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Satellite>;
}
declare module 'grommet/components/icons/base/Save' {
  declare class Save extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Save>;
}
declare module 'grommet/components/icons/base/Scan' {
  declare class Scan extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Scan>;
}
declare module 'grommet/components/icons/base/ScheduleNew' {
  declare class ScheduleNew extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ScheduleNew>;
}
declare module 'grommet/components/icons/base/SchedulePlay' {
  declare class SchedulePlay extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SchedulePlay>;
}
declare module 'grommet/components/icons/base/Schedule' {
  declare class Schedule extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Schedule>;
}
declare module 'grommet/components/icons/base/Schedules' {
  declare class Schedules extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Schedules>;
}
declare module 'grommet/components/icons/base/Scorecard' {
  declare class Scorecard extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Scorecard>;
}
declare module 'grommet/components/icons/base/SearchAdvanced' {
  declare class SearchAdvanced extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SearchAdvanced>;
}
declare module 'grommet/components/icons/base/Search' {
  declare class Search extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Search>;
}
declare module 'grommet/components/icons/base/Secure' {
  declare class Secure extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Secure>;
}
declare module 'grommet/components/icons/base/Select' {
  declare class Select extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Select>;
}
declare module 'grommet/components/icons/base/Selection' {
  declare class Selection extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Selection>;
}
declare module 'grommet/components/icons/base/Send' {
  declare class Send extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Send>;
}
declare module 'grommet/components/icons/base/ServerCluster' {
  declare class ServerCluster extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ServerCluster>;
}
declare module 'grommet/components/icons/base/Server' {
  declare class Server extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Server>;
}
declare module 'grommet/components/icons/base/Servers' {
  declare class Servers extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Servers>;
}
declare module 'grommet/components/icons/base/ServicePlay' {
  declare class ServicePlay extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ServicePlay>;
}
declare module 'grommet/components/icons/base/Services' {
  declare class Services extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Services>;
}
declare module 'grommet/components/icons/base/SettingsOption' {
  declare class SettingsOption extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SettingsOption>;
}
declare module 'grommet/components/icons/base/Share' {
  declare class Share extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Share>;
}
declare module 'grommet/components/icons/base/ShieldSecurity' {
  declare class ShieldSecurity extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ShieldSecurity>;
}
declare module 'grommet/components/icons/base/Shield' {
  declare class Shield extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Shield>;
}
declare module 'grommet/components/icons/base/Shift' {
  declare class Shift extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Shift>;
}
declare module 'grommet/components/icons/base/Sidebar' {
  declare class Sidebar extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Sidebar>;
}
declare module 'grommet/components/icons/base/SocialAmazon' {
  declare class SocialAmazon extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialAmazon>;
}
declare module 'grommet/components/icons/base/SocialAmex' {
  declare class SocialAmex extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialAmex>;
}
declare module 'grommet/components/icons/base/SocialBitcoin' {
  declare class SocialBitcoin extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialBitcoin>;
}
declare module 'grommet/components/icons/base/SocialCodepen' {
  declare class SocialCodepen extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialCodepen>;
}
declare module 'grommet/components/icons/base/SocialCreativeCommons' {
  declare class SocialCreativeCommons extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialCreativeCommons>;
}
declare module 'grommet/components/icons/base/SocialDropbox' {
  declare class SocialDropbox extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialDropbox>;
}
declare module 'grommet/components/icons/base/SocialFacebookOption' {
  declare class SocialFacebookOption extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialFacebookOption>;
}
declare module 'grommet/components/icons/base/SocialFacebook' {
  declare class SocialFacebook extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialFacebook>;
}
declare module 'grommet/components/icons/base/SocialGithub' {
  declare class SocialGithub extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialGithub>;
}
declare module 'grommet/components/icons/base/SocialGooglePlus' {
  declare class SocialGooglePlus extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialGooglePlus>;
}
declare module 'grommet/components/icons/base/SocialGoogleWallet' {
  declare class SocialGoogleWallet extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialGoogleWallet>;
}
declare module 'grommet/components/icons/base/SocialInstagram' {
  declare class SocialInstagram extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialInstagram>;
}
declare module 'grommet/components/icons/base/SocialLinkedinOption' {
  declare class SocialLinkedinOption extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialLinkedinOption>;
}
declare module 'grommet/components/icons/base/SocialLinkedin' {
  declare class SocialLinkedin extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialLinkedin>;
}
declare module 'grommet/components/icons/base/SocialMail' {
  declare class SocialMail extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialMail>;
}
declare module 'grommet/components/icons/base/SocialMastercard' {
  declare class SocialMastercard extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialMastercard>;
}
declare module 'grommet/components/icons/base/SocialMedium' {
  declare class SocialMedium extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialMedium>;
}
declare module 'grommet/components/icons/base/SocialPaypal' {
  declare class SocialPaypal extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialPaypal>;
}
declare module 'grommet/components/icons/base/SocialPinterest' {
  declare class SocialPinterest extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialPinterest>;
}
declare module 'grommet/components/icons/base/SocialProductHunt' {
  declare class SocialProductHunt extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialProductHunt>;
}
declare module 'grommet/components/icons/base/SocialReddit' {
  declare class SocialReddit extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialReddit>;
}
declare module 'grommet/components/icons/base/SocialSkype' {
  declare class SocialSkype extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialSkype>;
}
declare module 'grommet/components/icons/base/SocialSlack' {
  declare class SocialSlack extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialSlack>;
}
declare module 'grommet/components/icons/base/SocialSnapchat' {
  declare class SocialSnapchat extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialSnapchat>;
}
declare module 'grommet/components/icons/base/SocialSquare' {
  declare class SocialSquare extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialSquare>;
}
declare module 'grommet/components/icons/base/SocialStackOverflow' {
  declare class SocialStackOverflow extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialStackOverflow>;
}
declare module 'grommet/components/icons/base/SocialStripe' {
  declare class SocialStripe extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialStripe>;
}
declare module 'grommet/components/icons/base/SocialTumblr' {
  declare class SocialTumblr extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialTumblr>;
}
declare module 'grommet/components/icons/base/SocialTwitter' {
  declare class SocialTwitter extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialTwitter>;
}
declare module 'grommet/components/icons/base/SocialVimeo' {
  declare class SocialVimeo extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialVimeo>;
}
declare module 'grommet/components/icons/base/SocialVine' {
  declare class SocialVine extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialVine>;
}
declare module 'grommet/components/icons/base/SocialVisa' {
  declare class SocialVisa extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialVisa>;
}
declare module 'grommet/components/icons/base/SocialWordpress' {
  declare class SocialWordpress extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialWordpress>;
}
declare module 'grommet/components/icons/base/SocialYoutube' {
  declare class SocialYoutube extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SocialYoutube>;
}
declare module 'grommet/components/icons/base/Sort' {
  declare class Sort extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Sort>;
}
declare module 'grommet/components/icons/base/Split' {
  declare class Split extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Split>;
}
declare module 'grommet/components/icons/base/Splits' {
  declare class Splits extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Splits>;
}
declare module 'grommet/components/icons/base/Stakeholder' {
  declare class Stakeholder extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Stakeholder>;
}
declare module 'grommet/components/icons/base/Standards-3dEffects' {
  declare class Standards3dEffects extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Standards3dEffects>;
}
declare module 'grommet/components/icons/base/StandardsConnectivity' {
  declare class StandardsConnectivity extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StandardsConnectivity>;
}
declare module 'grommet/components/icons/base/StandardsCss3' {
  declare class StandardsCss3 extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StandardsCss3>;
}
declare module 'grommet/components/icons/base/StandardsDevice' {
  declare class StandardsDevice extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StandardsDevice>;
}
declare module 'grommet/components/icons/base/StandardsFireball' {
  declare class StandardsFireball extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StandardsFireball>;
}
declare module 'grommet/components/icons/base/StandardsHtml5' {
  declare class StandardsHtml5 extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StandardsHtml5>;
}
declare module 'grommet/components/icons/base/StandardsMultimedia' {
  declare class StandardsMultimedia extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StandardsMultimedia>;
}
declare module 'grommet/components/icons/base/StandardsOfflineStorage' {
  declare class StandardsOfflineStorage extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StandardsOfflineStorage>;
}
declare module 'grommet/components/icons/base/StandardsPerformance' {
  declare class StandardsPerformance extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StandardsPerformance>;
}
declare module 'grommet/components/icons/base/StandardsSematics' {
  declare class StandardsSematics extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StandardsSematics>;
}
declare module 'grommet/components/icons/base/StarHalf' {
  declare class StarHalf extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StarHalf>;
}
declare module 'grommet/components/icons/base/Star' {
  declare class Star extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Star>;
}
declare module 'grommet/components/icons/base/Steps' {
  declare class Steps extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Steps>;
}
declare module 'grommet/components/icons/base/StopFill' {
  declare class StopFill extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StopFill>;
}
declare module 'grommet/components/icons/base/Stop' {
  declare class Stop extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Stop>;
}
declare module 'grommet/components/icons/base/Storage' {
  declare class Storage extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Storage>;
}
declare module 'grommet/components/icons/base/StreetView' {
  declare class StreetView extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<StreetView>;
}
declare module 'grommet/components/icons/base/SubtractCircle' {
  declare class SubtractCircle extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<SubtractCircle>;
}
declare module 'grommet/components/icons/base/Subtract' {
  declare class Subtract extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Subtract>;
}
declare module 'grommet/components/icons/base/Support' {
  declare class Support extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Support>;
}
declare module 'grommet/components/icons/base/Sync' {
  declare class Sync extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Sync>;
}
declare module 'grommet/components/icons/base/System' {
  declare class System extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<System>;
}
declare module 'grommet/components/icons/base/TableAdd' {
  declare class TableAdd extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<TableAdd>;
}
declare module 'grommet/components/icons/base/Table' {
  declare class Table extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Table>;
}
declare module 'grommet/components/icons/base/Tag' {
  declare class Tag extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Tag>;
}
declare module 'grommet/components/icons/base/Target' {
  declare class Target extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Target>;
}
declare module 'grommet/components/icons/base/Task' {
  declare class Task extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Task>;
}
declare module 'grommet/components/icons/base/Tasks' {
  declare class Tasks extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Tasks>;
}
declare module 'grommet/components/icons/base/Technology' {
  declare class Technology extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Technology>;
}
declare module 'grommet/components/icons/base/Template' {
  declare class Template extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Template>;
}
declare module 'grommet/components/icons/base/Terminal' {
  declare class Terminal extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Terminal>;
}
declare module 'grommet/components/icons/base/TestDesktop' {
  declare class TestDesktop extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<TestDesktop>;
}
declare module 'grommet/components/icons/base/Test' {
  declare class Test extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Test>;
}
declare module 'grommet/components/icons/base/TextWrap' {
  declare class TextWrap extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<TextWrap>;
}
declare module 'grommet/components/icons/base/Threats' {
  declare class Threats extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Threats>;
}
declare module 'grommet/components/icons/base/Ticket' {
  declare class Ticket extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Ticket>;
}
declare module 'grommet/components/icons/base/Tools' {
  declare class Tools extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Tools>;
}
declare module 'grommet/components/icons/base/Tooltip' {
  declare class Tooltip extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Tooltip>;
}
declare module 'grommet/components/icons/base/TopCorner' {
  declare class TopCorner extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<TopCorner>;
}
declare module 'grommet/components/icons/base/Transaction' {
  declare class Transaction extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Transaction>;
}
declare module 'grommet/components/icons/base/Trash' {
  declare class Trash extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Trash>;
}
declare module 'grommet/components/icons/base/Tree' {
  declare class Tree extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Tree>;
}
declare module 'grommet/components/icons/base/Trigger' {
  declare class Trigger extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Trigger>;
}
declare module 'grommet/components/icons/base/Trophy' {
  declare class Trophy extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Trophy>;
}
declare module 'grommet/components/icons/base/Troubleshoot' {
  declare class Troubleshoot extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Troubleshoot>;
}
declare module 'grommet/components/icons/base/Unlink' {
  declare class Unlink extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Unlink>;
}
declare module 'grommet/components/icons/base/Unlock' {
  declare class Unlock extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Unlock>;
}
declare module 'grommet/components/icons/base/Up' {
  declare class Up extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Up>;
}
declare module 'grommet/components/icons/base/Update' {
  declare class Update extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Update>;
}
declare module 'grommet/components/icons/base/Upgrade' {
  declare class Upgrade extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Upgrade>;
}
declare module 'grommet/components/icons/base/Upload' {
  declare class Upload extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Upload>;
}
declare module 'grommet/components/icons/base/UserAdd' {
  declare class UserAdd extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<UserAdd>;
}
declare module 'grommet/components/icons/base/UserAdmin' {
  declare class UserAdmin extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<UserAdmin>;
}
declare module 'grommet/components/icons/base/UserExpert' {
  declare class UserExpert extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<UserExpert>;
}
declare module 'grommet/components/icons/base/UserFemale' {
  declare class UserFemale extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<UserFemale>;
}
declare module 'grommet/components/icons/base/UserManager' {
  declare class UserManager extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<UserManager>;
}
declare module 'grommet/components/icons/base/UserNew' {
  declare class UserNew extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<UserNew>;
}
declare module 'grommet/components/icons/base/UserPolice' {
  declare class UserPolice extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<UserPolice>;
}
declare module 'grommet/components/icons/base/UserSettings' {
  declare class UserSettings extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<UserSettings>;
}
declare module 'grommet/components/icons/base/UserWorker' {
  declare class UserWorker extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<UserWorker>;
}
declare module 'grommet/components/icons/base/User' {
  declare class User extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<User>;
}
declare module 'grommet/components/icons/base/Validate' {
  declare class Validate extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Validate>;
}
declare module 'grommet/components/icons/base/Video' {
  declare class Video extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Video>;
}
declare module 'grommet/components/icons/base/View' {
  declare class View extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<View>;
}
declare module 'grommet/components/icons/base/VirtualMachine' {
  declare class VirtualMachine extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<VirtualMachine>;
}
declare module 'grommet/components/icons/base/VmMaintenance' {
  declare class VmMaintenance extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<VmMaintenance>;
}
declare module 'grommet/components/icons/base/VolumeLow' {
  declare class VolumeLow extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<VolumeLow>;
}
declare module 'grommet/components/icons/base/VolumeMute' {
  declare class VolumeMute extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<VolumeMute>;
}
declare module 'grommet/components/icons/base/Volume' {
  declare class Volume extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Volume>;
}
declare module 'grommet/components/icons/base/Vulnerability' {
  declare class Vulnerability extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Vulnerability>;
}
declare module 'grommet/components/icons/base/Waypoint' {
  declare class Waypoint extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Waypoint>;
}
declare module 'grommet/components/icons/base/Workshop' {
  declare class Workshop extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<Workshop>;
}
declare module 'grommet/components/icons/base/ZoomIn' {
  declare class ZoomIn extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ZoomIn>;
}
declare module 'grommet/components/icons/base/ZoomOut' {
  declare class ZoomOut extends React$Component {
    props: Grommet$Icons$GenericProps;
  }
  declare module.exports: Class<ZoomOut>;
}

declare module 'grommet/components/icons/Grommet' {
  declare module.exports: any;
}

declare module 'grommet/components/icons/Pulse' {
  declare module.exports: any;
}

declare module 'grommet/components/icons/Spinning' {
  declare module.exports: any;
}

declare module 'grommet/components/icons/Status' {
  declare module.exports: any;
}

declare module 'grommet/components/icons/status/Blank' {
  declare module.exports: any;
}

declare module 'grommet/components/icons/status/CriticalStatus' {
  declare module.exports: any;
}

declare module 'grommet/components/icons/status/Disabled' {
  declare module.exports: any;
}

declare module 'grommet/components/icons/status/Label' {
  declare module.exports: any;
}

declare module 'grommet/components/icons/status/OK' {
  declare module.exports: any;
}

declare module 'grommet/components/icons/status/Unknown' {
  declare module.exports: any;
}

declare module 'grommet/components/icons/status/Warning' {
  declare module.exports: any;
}

declare module 'grommet/components/Image' {
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

  declare class Image extends React$Component {
    props: Grommet$ImageProps;
  }
  declare module.exports: Class<Image>;
}

declare module 'grommet/components/Label' {
  declare type Grommet$LabelProps = {
    announce?: boolean,
    labelFor?: string,
    margin?: "none" | "small" | "medium" | "large",
    size?: "small" | "medium",
    truncate?: boolean,
    uppercase?: boolean
  }
  declare class Label extends React$Component {
    props: Grommet$LabelProps;
  }
  declare module.exports: Class<Label>;
}

declare module 'grommet/components/Layer' {
  declare type Grommet$LayerProps = {
    align?: "center" |
      "top" |
      "bottom" |
      "left" |
      "right",
    closer?: ReactNode | boolean,
    flush?: boolean,
    hidden?: boolean,
    peek?: boolean,
    onClose?: Function
  }

  declare class Layer extends React$Component {
    props: Grommet$LayerProps;
  }
  declare module.exports: Class<Layer>;
}

declare module 'grommet/components/Legend' {
  declare type Grommet$LegendProps = {
    activeIndex?: number,
    announce?: boolean,
    onActive?: Function,
    series: Array<{
      label?: string,
      value?: number | ReactNode,
      units?: number | ReactNode | {
        prefix?: string,
        suffix?: string
      },
      colorIndex?: number | string,
      onClick?: Function
    }>,
    total?: boolean | ReactNode,
    units?: string | {
      prefix?: string,
      suffix?: string
    }
  }
  declare class Legend extends React$Component {
    props: Grommet$LegendProps;
  }
  declare module.exports: Class<Legend>;
}

declare module 'grommet/components/List' {
  declare type Grommet$ListProps = {
    emptyIndicator?: ReactNode,
    onMore?: Function,
    onSelect?: Function,
    selectable?: boolean | "multiple",
    selected?: number | number[]
  }
  declare class List extends React$Component {
    props: Grommet$ListProps;
  }
  declare module.exports: Class<List>;
}

declare module 'grommet/components/ListItem' {
  declare module.exports: any;
}

declare module 'grommet/components/LoginForm' {
  declare type Grommet$LoginFormProps = {
    align?: "start" | "center" | "end" | "stretch",
    defaultValues?: {
      username?: string,
      rememberMe?: boolean
    },
    errors?: string[],
    forgotPassword?: ReactNode,
    logo?: ReactNode,
    onSubmit?: Function,
    onChange?: Function,
    rememberMe?: boolean,
    secondaryText?: string,
    title?: string,
    usernameType?: string
  }

  declare class LoginForm extends React$Component {
    props: Grommet$LoginFormProps;
  }
  declare module.exports: Class<LoginForm>;
}

declare module 'grommet/components/Map' {
  declare type Grommet$MapProps = {
    active?: string,
    data: {
      categories: Array<{
        id?: string,
        label?: ReactNode,
        items: Array<{
          id?: string,
          label?: string,
          node?: ReactNode
        }>
      }>,
      links: Array<{
        childId: string,
        colorIndex?: string,
        parentId: string
      }>
    },
    linkColorIndex?: string,
    onActive?: Function,
    vertical?: boolean
  }
  declare class Map extends React$Component {
    props: Grommet$MapProps;
  }
  declare module.exports: Class<Map>;
}

declare module 'grommet/components/Markdown' {
  declare type Grommet$MarkdownProps = {
    content?: string,
    components?: {
      props?: {}
    }
  }
  declare class Markdown extends React$Component {
    props: Grommet$MarkdownProps;
  }
  declare module.exports: Class<Markdown>;
}

declare module 'grommet/components/Menu' {
  declare type Grommet$MenuProps = Grommet$BoxProps<Menu> & {
    closeOnClick?: boolean,
    dropAlign?: {
      top?: GrommetCustomTypes$VERTICAL_ALIGN_OPTIONS,
      bottom?: GrommetCustomTypes$VERTICAL_ALIGN_OPTIONS,
      left?: GrommetCustomTypes$HORIZONTAL_ALIGN_OPTIONS,
      right?: GrommetCustomTypes$HORIZONTAL_ALIGN_OPTIONS
    },
    dropColorIndex?: string,
    icon?: ReactNode,
    id?: string,
    inline?: boolean | "expand",
    fill?: boolean,
    label?: string,
    size?: "small" | "medium" | "large"
  }


  declare class Menu extends React$Component {
    props: Grommet$MenuProps;
  }
  declare module.exports: Class<Menu>;
}

declare module 'grommet/components/Meter' {
  declare type Grommet$MeterProps = {
    active?: boolean,
    activeIndex?: number,
    a11yTitle?: string,
    colorIndex?: string,
    label?: ReactNode,
    max?: number,
    min?: number,
    onActive?: Function,
    series?: Array<{
      colorIndex?: string,
      onClick?: Function,
      label?: string,
      value: number
    }>,
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge",
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

  declare class Meter extends React$Component {
    props: Grommet$MeterProps;
  }
  declare module.exports: Class<Meter>;
}

declare module 'grommet/components/meter/Arc' {
  declare module.exports: any;
}

declare module 'grommet/components/meter/Bar' {
  declare module.exports: any;
}

declare module 'grommet/components/meter/Circle' {
  declare module.exports: any;
}

declare module 'grommet/components/meter/Graphic' {
  declare module.exports: any;
}

declare module 'grommet/components/meter/propTypes' {
  declare module.exports: any;
}

declare module 'grommet/components/meter/Spiral' {
  declare module.exports: any;
}

declare module 'grommet/components/meter/utils' {
  declare module.exports: any;
}

declare module 'grommet/components/Notification' {
  declare type Grommet$NotificationProps = {
    closer?: ReactNode | boolean,
    context?: ReactNode,
    message: string,
    onClose?: Function,
    percentComplete?: number,
    size?: "small" | "medium" | "large",
    state?: string,
    status?: string,
    timestamp?: {} | string
  } & Grommet$BoxProps<Notification> & Grommet$BoxFull
  declare class Notification extends React$Component {
    props: Grommet$NotificationProps;
  }
  declare module.exports: Class<Notification>;
}

declare module 'grommet/components/NumberInput' {
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
  declare class NumberInput extends React$Component {
    props: Grommet$NumberInputProps;
  }
  declare module.exports: Class<NumberInput>;
}

declare module 'grommet/components/Object' {
  declare type Grommet$ObjectProps = {
    data: {}
  }
  declare class Object extends React$Component {
    props: Grommet$ObjectProps;
  }
  declare module.exports: Class<Object>;
}

declare module 'grommet/components/Paragraph' {
  declare type Grommet$ParagraphProps = {
    align?: "start" | "center" | "end",
    margin?: "none" | "small" | "medium" | "large",
    size?: "small" | "medium" | "large" | "xlarge",
    width?: "small" | "medium" | "large"
  }
  declare class Paragraph extends React$Component {
    props: Grommet$ParagraphProps;
  }
  declare module.exports: Class<Paragraph>;
}

declare module 'grommet/components/Quote' {
  declare type Grommet$QuoteProps = {
    borderColorIndex?: string,
    size?: "small" | "medium" | "large" | "full",
    credit?: string | React$Element<any>,
    emphasizeCredit?: boolean
  } & Grommet$BoxFull & Grommet$BoxProps<Quote>
  declare class Quote extends React$Component {
    props: Grommet$QuoteProps;
  }
  declare module.exports: Class<Quote>;
}

declare module 'grommet/components/RadioButton' {
  declare type Grommet$RadioButtonProps = {
    checked?: boolean,
    defaultChecked?: boolean,
    disabled?: boolean,
    id: string,
    label: ReactNode,
    name?: string,
    onChange?: Function,
    value?: string
  }

  declare class RadioButton extends React$Component {
    props: Grommet$RadioButtonProps
  }
  declare module.exports: Class<RadioButton>;
}

declare module 'grommet/components/Search' {
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
      label?: ReactNode,
      value?: any
    } | string>,
    value?: string
  }

  declare class Search extends React$Component {
    props: Grommet$SearchProps
  }
  declare module.exports: Class<Search>;
}

declare module 'grommet/components/SearchInput' {
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

  declare class SearchInput extends React$Component {
    props: Grommet$SearchInputProps;
  }
  declare module.exports: Class<SearchInput>;
}

declare module 'grommet/components/Section' {
  declare class Section extends React$Component {
    props: Grommet$BoxProps<Section>;
  }
  declare module.exports: Class<Section>;
}

declare module 'grommet/components/Select' {
  declare type Grommet$SelectProps = {
    inline?: boolean,
    multiple?: boolean,
    onSearch?: Function,
    onChange?: Function,
    placeHolder?: string,
    options: GrommetCustomTypes$SelectValueType[],
    value?: GrommetCustomTypes$SelectValueType | GrommetCustomTypes$SelectValueType[]
  }
  declare class Select extends React$Component {
    props: Grommet$SelectProps;
  }
  declare module.exports: Class<Select>;
}

declare module 'grommet/components/Sidebar' {
  declare type Grommet$SidebarProps = Grommet$BoxProps<Sidebar> & {
    fixed?: boolean,
    size?: "xsmall" | "small" | "medium" | "large",
    full?: boolean
  }
  declare class Sidebar extends React$Component {
    props: Grommet$SidebarProps;
  }
  declare module.exports: Class<Sidebar>;
}

declare module 'grommet/components/SkipLinkAnchor' {
  declare type Grommet$SkipLinkAnchorProps = {
    label: ReactNode
  }
  declare class SkipLinkAnchor extends React$Component {
    props: Grommet$SkipLinkAnchorProps;
  }
  declare module.exports: Class<SkipLinkAnchor>;
}

declare module 'grommet/components/SkipLinks' {
  declare module.exports: any;
}

declare module 'grommet/components/SocialShare' {
  declare type Grommet$SocialShareProps = {
    a11yTitle?: string,
    className?: string,
    colorIndex?: string,
    link: string,
    text?: string,
    title?: string,
    type: "email" | "facebook" | "twitter" | "linkedin" | "google"
  }
  declare class SocialShare extends React$Component {
    props: Grommet$SocialShareProps;
  }
  declare module.exports: Class<SocialShare>;
}

declare module 'grommet/components/Split' {
  declare type Grommet$SplitProps = {
    fixed?: boolean,
    flex?: "left" | "right" | "both",
    onResponsive?: Function,
    priority?: "left" | "right",
    separator?: boolean,
    showOnResponsive?: "priority" | "both"
  }

  declare class Split extends React$Component {
    props: Grommet$SplitProps;
  }
  declare module.exports: Class<Split>;
}

declare module 'grommet/components/SunBurst' {
  declare type Grommet$SunBurstProps = {
    a11yTitle?: string,
    active?: number[],
    data?: Array<{
      children?: Array<{}>,
      colorIndex?: string,
      total?: number,
      value: number
    }>,
    label?: ReactNode,
    onActive?: Function,
    onClick?: Function,
    size?: "small" | "medium" | "large" | "xlarge" | "full"
  }
  declare class SunBurst extends React$Component {
    props: Grommet$SunBurstProps;
  }
  declare module.exports: Class<SunBurst>;
}

declare module 'grommet/components/SVGIcon' {
  declare type Grommet$SVGIconProps = {
    a11yTitle?: string,
    colorIndex?: string,
    size?: "small" | "medium" | "large" | "xlarge" | "huge",
    type?: "control" | "logo" | "status"
  }

  declare class SVGIcon extends React$Component {
    props: Grommet$SVGIconProps;
  }
  declare module.exports: Class<SVGIcon>;
}

declare module 'grommet/components/Tab' {
  declare interface Grommet$TabProps {
    title: string,
    active?: boolean,
    id?: string,
    onRequestForActive?: Function
  }
  declare class Tab extends React$Component {
    props: Grommet$TabProps;
  }
  declare module.exports: Class<Tab>;
}

declare module 'grommet/components/Table' {
  declare type Grommet$TableProps = {
    a11yTitle?: string,
    onMore?: Function,
    onSelect?: Function,
    scrollable?: boolean,
    selectable?: boolean | "multiple",
    selected?: number | number[]
  }
  declare class Table extends React$Component {
    props: Grommet$TableProps;
  }
  declare module.exports: Class<Table>;
}

declare module 'grommet/components/TableHeader' {
  declare type Grommet$TableHeaderProps = {
    labels: ReactNode[],
    onSort?: Function,
    sortAscending?: boolean,
    sortIndex?: number
  }
  declare class TableHeader extends React$Component {
    props: Grommet$TableHeaderProps;
  }
  declare module.exports: Class<TableHeader>;
}

declare module 'grommet/components/TableRow' {
  declare type Grommet$TableRowProps = {
    onClick?: Function
  }
  declare class TableRow extends React$Component {
    props: Grommet$TableRowProps;
  }
  declare module.exports: Class<TableRow>;
}

declare module 'grommet/components/Tabs' {
  declare type Grommet$TabsProps = {
    activeIndex?: number,
    justify?: "start" | "center" | "end",
    responsive?: boolean,
    onActive?: Function
  }
  declare class Tabs extends React$Component {
    props: Grommet$TabsProps;
  }
  declare module.exports: Class<Tabs>;
}


declare module 'grommet/components/TextInput' {
  declare type Grommet$TextInputProps = {
    defaultValue?: string,
    id?: string,
    name?: string,
    onDOMChange?: Function,
    onSelect?: Function,
    placeHolder?: string,
    suggestions?: Array<string | {
      label?: ReactNode,
      value?: any
    }>,
    value?: string
  }
  declare class TextInput extends React$Component {
    props: Grommet$TextInputProps;
  }
  declare module.exports: Class<TextInput>;
}

declare module 'grommet/components/Tile' {
  declare type Grommet$TileProps = {
    hoverStyle?: "border" | "background" | "none",
    hoverColorIndex?: string,
    hoverBorder?: boolean,
    hoverBorderSize?: "small" | "medium" | "large",
    wide?: boolean
  } & Grommet$BoxFull & Grommet$BoxProps<Tile>
  declare class Tile extends React$Component {
    props: Grommet$TileProps;
  }
  declare module.exports: Class<Tile>;
}

declare module 'grommet/components/Tiles' {
  declare type Grommet$TilesProps = {
    fill?: boolean,
    flush?: boolean,
    onMore?: Function,
    onSelect?: Function,
    selectable?: boolean | "multiple",
    selected?: number | number[]
  } & Grommet$BoxFull & Grommet$BoxProps<Tiles>
  declare class Tiles extends React$Component {
    props: Grommet$TilesProps;
  }
  declare module.exports: Class<Tiles>;
}

declare module 'grommet/components/Timestamp' {
  declare type Grommet$TimestampProps = {
    align?: "start" | "center" | "end",
    fields?: GrommetCustomTypes$TIME_STAMP_FIELD_TYPES[] | GrommetCustomTypes$TIME_STAMP_FIELD_TYPES,
    value: string | {}
  }

  declare class Timestamp extends React$Component {
    props: Grommet$TimestampProps;
  }
  declare module.exports: Class<Timestamp>;
}

declare module 'grommet/components/Tip' {
  declare type Grommet$TipProps = {
    colorIndex?: string,
    onClose: Function,
    target: string
  }
  declare class Tip extends React$Component {
    props: Grommet$TipProps;
  }
  declare module.exports: Class<Tip>;
}

declare module 'grommet/components/Title' {
  declare type Grommet$TitleProps = {
    a11yTitle?: string,
    onClick?: Function,
    responsive?: boolean,
    truncate?: boolean
  }
  declare class Title extends React$Component {
    props: Grommet$TitleProps;
  }
  declare module.exports: Class<Title>;
}

declare module 'grommet/components/Toast' {
  declare type Grommet$ToastProps = {
    onClose?: Function,
    status?: string
  }
  declare class Toast extends React$Component {
    props: Grommet$ToastProps;
  }
  declare module.exports: Class<Toast>;
}

declare module 'grommet/components/Topology' {
  declare type Grommet$TopologyProps = {
    a11yTitle?: string,
    links?: Array<{
      colorIndex?: string,
      ids: string[]
    }>,
    linkOffset?: number
  }
  declare class Topology extends React$Component {
    props: Grommet$TopologyProps;
  }
  declare module.exports: Class<Topology>;
}

declare module 'grommet/components/Value' {
  declare type Grommet$ValueProps = {
    active?: boolean,
    align?: "start" | "center" | "end",
    announce?: boolean,
    colorIndex?: string,
    icon?: ReactNode,
    label?: string | ReactNode,
    onClick?: Function,
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge",
    trendIcon?: ReactNode,
    value?: ReactNode | number | string,
    units?: ReactNode | string
  }
  declare class Value extends React$Component {
    props: Grommet$ValueProps;
  }
  declare module.exports: Class<Value>;
}

declare module 'grommet/components/Video' {
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
    title?: ReactNode
  }
  declare class Video extends React$Component {
    props: Grommet$VideoProps;
  }
  declare module.exports: Class<Video>;
}

declare module 'grommet/components/video/Controls' {
  declare module.exports: any;
}

declare module 'grommet/components/video/FullscreenButton' {
  declare module.exports: any;
}

declare module 'grommet/components/video/Overlay' {
  declare module.exports: any;
}

declare module 'grommet/components/video/PlayButton' {
  declare module.exports: any;
}

declare module 'grommet/components/video/ProgressBar' {
  declare module.exports: any;
}

declare module 'grommet/components/video/Share' {
  declare module.exports: any;
}

declare module 'grommet/components/video/Time' {
  declare module.exports: any;
}

declare module 'grommet/components/WorldMap' {
  declare type Grommet$WorldMapProps = {
    series?: Array<{
      continent?: "NorthAmerica" | "SouthAmerica" | "Europe" | "Africa" | "Asia" | "Australia",
      colorIndex?: string,
      onClick?: Function
    }>
  }
  declare class WorldMap extends React$Component {
    props: Grommet$WorldMapProps;
  }
  declare module.exports: Class<WorldMap>;
}

declare module 'grommet/utils/AlphaNum' {
  declare module.exports: any;
}

declare module 'grommet/utils/Announcer' {
  declare module.exports: any;
}

declare module 'grommet/utils/Cookies' {
  declare module.exports: any;
}

declare module 'grommet/utils/CSSClassnames' {
  declare module.exports: any;
}

declare module 'grommet/utils/DOM' {
  declare module.exports: any;
}

declare module 'grommet/utils/Drop' {
  declare module.exports: any;
}

declare module 'grommet/utils/FormatTime' {
  declare module.exports: any;
}

declare module 'grommet/utils/Graphics' {
  declare module.exports: any;
}

declare module 'grommet/utils/InfiniteScroll' {
  declare module.exports: any;
}

declare module 'grommet/utils/Intl' {
  declare module.exports: any;
}

declare module 'grommet/utils/KeyboardAccelerators' {
  declare module.exports: any;
}

declare module 'grommet/utils/Locale' {
  declare module.exports: any;
}

declare module 'grommet/utils/Props' {
  declare module.exports: any;
}

declare module 'grommet/utils/Responsive' {
  declare module.exports: any;
}

declare module 'grommet/utils/Rest' {
  declare module.exports: any;
}

declare module 'grommet/utils/Scroll' {
  declare module.exports: any;
}

declare module 'grommet/utils/Selection' {
  declare module.exports: any;
}

declare module 'grommet/utils/StringConvert' {
  declare module.exports: any;
}

declare module 'grommet/utils/Throttle' {
  declare module.exports: any;
}

declare module 'grommet/utils/Validator' {
  declare module.exports: any;
}

// Filename aliases
declare module 'grommet/components/Accordion.js' {
  declare module.exports: $Exports<'grommet/components/Accordion'>;
}
declare module 'grommet/components/AccordionPanel.js' {
  declare module.exports: $Exports<'grommet/components/AccordionPanel'>;
}
declare module 'grommet/components/Anchor.js' {
  declare module.exports: $Exports<'grommet/components/Anchor'>;
}
declare module 'grommet/components/Animate.js' {
  declare module.exports: $Exports<'grommet/components/Animate'>;
}
declare module 'grommet/components/App.js' {
  declare module.exports: $Exports<'grommet/components/App'>;
}
declare module 'grommet/components/Article.js' {
  declare module.exports: $Exports<'grommet/components/Article'>;
}
declare module 'grommet/components/Box.js' {
  declare module.exports: $Exports<'grommet/components/Box'>;
}
declare module 'grommet/components/Button.js' {
  declare module.exports: $Exports<'grommet/components/Button'>;
}
declare module 'grommet/components/Card.js' {
  declare module.exports: $Exports<'grommet/components/Card'>;
}
declare module 'grommet/components/Carousel.js' {
  declare module.exports: $Exports<'grommet/components/Carousel'>;
}
declare module 'grommet/components/chart/Area.js' {
  declare module.exports: $Exports<'grommet/components/chart/Area'>;
}
declare module 'grommet/components/chart/Axis.js' {
  declare module.exports: $Exports<'grommet/components/chart/Axis'>;
}
declare module 'grommet/components/chart/Bar.js' {
  declare module.exports: $Exports<'grommet/components/chart/Bar'>;
}
declare module 'grommet/components/chart/Base.js' {
  declare module.exports: $Exports<'grommet/components/chart/Base'>;
}
declare module 'grommet/components/chart/Chart.js' {
  declare module.exports: $Exports<'grommet/components/chart/Chart'>;
}
declare module 'grommet/components/chart/Graph.js' {
  declare module.exports: $Exports<'grommet/components/chart/Graph'>;
}
declare module 'grommet/components/chart/Grid.js' {
  declare module.exports: $Exports<'grommet/components/chart/Grid'>;
}
declare module 'grommet/components/chart/HotSpots.js' {
  declare module.exports: $Exports<'grommet/components/chart/HotSpots'>;
}
declare module 'grommet/components/chart/Layers.js' {
  declare module.exports: $Exports<'grommet/components/chart/Layers'>;
}
declare module 'grommet/components/chart/Line.js' {
  declare module.exports: $Exports<'grommet/components/chart/Line'>;
}
declare module 'grommet/components/chart/Marker.js' {
  declare module.exports: $Exports<'grommet/components/chart/Marker'>;
}
declare module 'grommet/components/chart/MarkerLabel.js' {
  declare module.exports: $Exports<'grommet/components/chart/MarkerLabel'>;
}
declare module 'grommet/components/chart/Range.js' {
  declare module.exports: $Exports<'grommet/components/chart/Range'>;
}
declare module 'grommet/components/CheckBox.js' {
  declare module.exports: $Exports<'grommet/components/CheckBox'>;
}
declare module 'grommet/components/Columns.js' {
  declare module.exports: $Exports<'grommet/components/Columns'>;
}
declare module 'grommet/components/DateTime.js' {
  declare module.exports: $Exports<'grommet/components/DateTime'>;
}
declare module 'grommet/components/Distribution.js' {
  declare module.exports: $Exports<'grommet/components/Distribution'>;
}
declare module 'grommet/components/Footer.js' {
  declare module.exports: $Exports<'grommet/components/Footer'>;
}
declare module 'grommet/components/Form.js' {
  declare module.exports: $Exports<'grommet/components/Form'>;
}
declare module 'grommet/components/FormattedMessage.js' {
  declare module.exports: $Exports<'grommet/components/FormattedMessage'>;
}
declare module 'grommet/components/FormField.js' {
  declare module.exports: $Exports<'grommet/components/FormField'>;
}
declare module 'grommet/components/FormFields.js' {
  declare module.exports: $Exports<'grommet/components/FormFields'>;
}
declare module 'grommet/components/Header.js' {
  declare module.exports: $Exports<'grommet/components/Header'>;
}
declare module 'grommet/components/Heading.js' {
  declare module.exports: $Exports<'grommet/components/Heading'>;
}
declare module 'grommet/components/Headline.js' {
  declare module.exports: $Exports<'grommet/components/Headline'>;
}
declare module 'grommet/components/Hero.js' {
  declare module.exports: $Exports<'grommet/components/Hero'>;
}
declare module 'grommet/components/icons/base/AccessAccessibility.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/AccessAccessibility'>;
}
declare module 'grommet/components/icons/base/AccessAd.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/AccessAd'>;
}
declare module 'grommet/components/icons/base/AccessAssistListening.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/AccessAssistListening'>;
}
declare module 'grommet/components/icons/base/AccessBraille.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/AccessBraille'>;
}
declare module 'grommet/components/icons/base/AccessSign.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/AccessSign'>;
}
declare module 'grommet/components/icons/base/AccessTty.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/AccessTty'>;
}
declare module 'grommet/components/icons/base/AccessVolumeControl.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/AccessVolumeControl'>;
}
declare module 'grommet/components/icons/base/AccessWheelchair.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/AccessWheelchair'>;
}
declare module 'grommet/components/icons/base/AccessWheelchairActive.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/AccessWheelchairActive'>;
}
declare module 'grommet/components/icons/base/Achievement.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Achievement'>;
}
declare module 'grommet/components/icons/base/Action.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Action'>;
}
declare module 'grommet/components/icons/base/Actions.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Actions'>;
}
declare module 'grommet/components/icons/base/Add.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Add'>;
}
declare module 'grommet/components/icons/base/AddCircle.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/AddCircle'>;
}
declare module 'grommet/components/icons/base/Aggregate.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Aggregate'>;
}
declare module 'grommet/components/icons/base/Aid.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Aid'>;
}
declare module 'grommet/components/icons/base/Alarm.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Alarm'>;
}
declare module 'grommet/components/icons/base/Alert.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Alert'>;
}
declare module 'grommet/components/icons/base/Analytics.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Analytics'>;
}
declare module 'grommet/components/icons/base/Announce.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Announce'>;
}
declare module 'grommet/components/icons/base/Apps.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Apps'>;
}
declare module 'grommet/components/icons/base/Archive.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Archive'>;
}
declare module 'grommet/components/icons/base/Article.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Article'>;
}
declare module 'grommet/components/icons/base/Ascend.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Ascend'>;
}
declare module 'grommet/components/icons/base/Attachment.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Attachment'>;
}
declare module 'grommet/components/icons/base/BackTen.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BackTen'>;
}
declare module 'grommet/components/icons/base/BarChart.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BarChart'>;
}
declare module 'grommet/components/icons/base/Basket.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Basket'>;
}
declare module 'grommet/components/icons/base/Blog.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Blog'>;
}
declare module 'grommet/components/icons/base/Book.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Book'>;
}
declare module 'grommet/components/icons/base/Bookmark.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Bookmark'>;
}
declare module 'grommet/components/icons/base/BottomCorner.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BottomCorner'>;
}
declare module 'grommet/components/icons/base/BrandAppleAppStore.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandAppleAppStore'>;
}
declare module 'grommet/components/icons/base/BrandCodepenEdit.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandCodepenEdit'>;
}
declare module 'grommet/components/icons/base/BrandCodepenTry.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandCodepenTry'>;
}
declare module 'grommet/components/icons/base/BrandGooglePlay.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandGooglePlay'>;
}
declare module 'grommet/components/icons/base/BrandGrommetOutline.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandGrommetOutline'>;
}
declare module 'grommet/components/icons/base/BrandGrommetPath.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandGrommetPath'>;
}
declare module 'grommet/components/icons/base/BrandHpeElementOutline.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandHpeElementOutline'>;
}
declare module 'grommet/components/icons/base/BrandHpeElementPath.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandHpeElementPath'>;
}
declare module 'grommet/components/icons/base/BrandHpeLabsInsignia.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandHpeLabsInsignia'>;
}
declare module 'grommet/components/icons/base/BrandHpeLabsInsigniaOutline.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandHpeLabsInsigniaOutline'>;
}
declare module 'grommet/components/icons/base/BrandHpeStack.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandHpeStack'>;
}
declare module 'grommet/components/icons/base/BrandHpeStackCentered.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BrandHpeStackCentered'>;
}
declare module 'grommet/components/icons/base/Briefcase.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Briefcase'>;
}
declare module 'grommet/components/icons/base/Brush.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Brush'>;
}
declare module 'grommet/components/icons/base/Bug.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Bug'>;
}
declare module 'grommet/components/icons/base/Bundle.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Bundle'>;
}
declare module 'grommet/components/icons/base/BusinessService.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/BusinessService'>;
}
declare module 'grommet/components/icons/base/Calculator.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Calculator'>;
}
declare module 'grommet/components/icons/base/Calendar.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Calendar'>;
}
declare module 'grommet/components/icons/base/Camera.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Camera'>;
}
declare module 'grommet/components/icons/base/Capacity.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Capacity'>;
}
declare module 'grommet/components/icons/base/Car.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Car'>;
}
declare module 'grommet/components/icons/base/CaretDown.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CaretDown'>;
}
declare module 'grommet/components/icons/base/CaretNext.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CaretNext'>;
}
declare module 'grommet/components/icons/base/CaretPrevious.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CaretPrevious'>;
}
declare module 'grommet/components/icons/base/CaretUp.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CaretUp'>;
}
declare module 'grommet/components/icons/base/Cart.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Cart'>;
}
declare module 'grommet/components/icons/base/Catalog.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Catalog'>;
}
declare module 'grommet/components/icons/base/ChapterAdd.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ChapterAdd'>;
}
declare module 'grommet/components/icons/base/ChapterNext.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ChapterNext'>;
}
declare module 'grommet/components/icons/base/ChapterPrevious.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ChapterPrevious'>;
}
declare module 'grommet/components/icons/base/Chat.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Chat'>;
}
declare module 'grommet/components/icons/base/Checkbox.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Checkbox'>;
}
declare module 'grommet/components/icons/base/CheckboxSelected.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CheckboxSelected'>;
}
declare module 'grommet/components/icons/base/Checkmark.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Checkmark'>;
}
declare module 'grommet/components/icons/base/CircleInformation.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CircleInformation'>;
}
declare module 'grommet/components/icons/base/CirclePlay.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CirclePlay'>;
}
declare module 'grommet/components/icons/base/CircleQuestion.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CircleQuestion'>;
}
declare module 'grommet/components/icons/base/Clear.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Clear'>;
}
declare module 'grommet/components/icons/base/ClearOption.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ClearOption'>;
}
declare module 'grommet/components/icons/base/Cli.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Cli'>;
}
declare module 'grommet/components/icons/base/Clipboard.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Clipboard'>;
}
declare module 'grommet/components/icons/base/Clock.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Clock'>;
}
declare module 'grommet/components/icons/base/Clone.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Clone'>;
}
declare module 'grommet/components/icons/base/Close.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Close'>;
}
declare module 'grommet/components/icons/base/ClosedCaption.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ClosedCaption'>;
}
declare module 'grommet/components/icons/base/Cloud.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Cloud'>;
}
declare module 'grommet/components/icons/base/CloudComputer.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CloudComputer'>;
}
declare module 'grommet/components/icons/base/CloudDownload.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CloudDownload'>;
}
declare module 'grommet/components/icons/base/CloudSoftware.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CloudSoftware'>;
}
declare module 'grommet/components/icons/base/CloudUpload.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CloudUpload'>;
}
declare module 'grommet/components/icons/base/Cluster.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Cluster'>;
}
declare module 'grommet/components/icons/base/Code.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Code'>;
}
declare module 'grommet/components/icons/base/Columns.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Columns'>;
}
declare module 'grommet/components/icons/base/Compare.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Compare'>;
}
declare module 'grommet/components/icons/base/Compass.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Compass'>;
}
declare module 'grommet/components/icons/base/Compliance.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Compliance'>;
}
declare module 'grommet/components/icons/base/Configure.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Configure'>;
}
declare module 'grommet/components/icons/base/Connect.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Connect'>;
}
declare module 'grommet/components/icons/base/Contact.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Contact'>;
}
declare module 'grommet/components/icons/base/ContactInfo.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ContactInfo'>;
}
declare module 'grommet/components/icons/base/Contract.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Contract'>;
}
declare module 'grommet/components/icons/base/Copy.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Copy'>;
}
declare module 'grommet/components/icons/base/CreditCard.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/CreditCard'>;
}
declare module 'grommet/components/icons/base/Cube.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Cube'>;
}
declare module 'grommet/components/icons/base/Cubes.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Cubes'>;
}
declare module 'grommet/components/icons/base/Currency.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Currency'>;
}
declare module 'grommet/components/icons/base/Cursor.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Cursor'>;
}
declare module 'grommet/components/icons/base/Cut.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Cut'>;
}
declare module 'grommet/components/icons/base/Cycle.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Cycle'>;
}
declare module 'grommet/components/icons/base/Dashboard.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Dashboard'>;
}
declare module 'grommet/components/icons/base/Database.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Database'>;
}
declare module 'grommet/components/icons/base/Deliver.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Deliver'>;
}
declare module 'grommet/components/icons/base/Deploy.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Deploy'>;
}
declare module 'grommet/components/icons/base/Descend.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Descend'>;
}
declare module 'grommet/components/icons/base/Desktop.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Desktop'>;
}
declare module 'grommet/components/icons/base/Detach.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Detach'>;
}
declare module 'grommet/components/icons/base/Diamond.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Diamond'>;
}
declare module 'grommet/components/icons/base/Directions.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Directions'>;
}
declare module 'grommet/components/icons/base/Dislike.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Dislike'>;
}
declare module 'grommet/components/icons/base/Document.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Document'>;
}
declare module 'grommet/components/icons/base/DocumentCloud.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentCloud'>;
}
declare module 'grommet/components/icons/base/DocumentConfig.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentConfig'>;
}
declare module 'grommet/components/icons/base/DocumentCsv.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentCsv'>;
}
declare module 'grommet/components/icons/base/DocumentDownload.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentDownload'>;
}
declare module 'grommet/components/icons/base/DocumentExcel.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentExcel'>;
}
declare module 'grommet/components/icons/base/DocumentExe.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentExe'>;
}
declare module 'grommet/components/icons/base/DocumentImage.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentImage'>;
}
declare module 'grommet/components/icons/base/DocumentLocked.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentLocked'>;
}
declare module 'grommet/components/icons/base/DocumentMissing.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentMissing'>;
}
declare module 'grommet/components/icons/base/DocumentNotes.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentNotes'>;
}
declare module 'grommet/components/icons/base/DocumentOutlook.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentOutlook'>;
}
declare module 'grommet/components/icons/base/DocumentPdf.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentPdf'>;
}
declare module 'grommet/components/icons/base/DocumentPerformance.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentPerformance'>;
}
declare module 'grommet/components/icons/base/DocumentPpt.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentPpt'>;
}
declare module 'grommet/components/icons/base/DocumentRtf.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentRtf'>;
}
declare module 'grommet/components/icons/base/DocumentSound.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentSound'>;
}
declare module 'grommet/components/icons/base/DocumentStore.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentStore'>;
}
declare module 'grommet/components/icons/base/DocumentTest.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentTest'>;
}
declare module 'grommet/components/icons/base/DocumentThreat.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentThreat'>;
}
declare module 'grommet/components/icons/base/DocumentTime.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentTime'>;
}
declare module 'grommet/components/icons/base/DocumentTransfer.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentTransfer'>;
}
declare module 'grommet/components/icons/base/DocumentTxt.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentTxt'>;
}
declare module 'grommet/components/icons/base/DocumentUpdate.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentUpdate'>;
}
declare module 'grommet/components/icons/base/DocumentUpload.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentUpload'>;
}
declare module 'grommet/components/icons/base/DocumentUser.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentUser'>;
}
declare module 'grommet/components/icons/base/DocumentVerified.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentVerified'>;
}
declare module 'grommet/components/icons/base/DocumentVideo.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentVideo'>;
}
declare module 'grommet/components/icons/base/DocumentWindows.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentWindows'>;
}
declare module 'grommet/components/icons/base/DocumentWord.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentWord'>;
}
declare module 'grommet/components/icons/base/DocumentZip.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DocumentZip'>;
}
declare module 'grommet/components/icons/base/Domain.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Domain'>;
}
declare module 'grommet/components/icons/base/Down.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Down'>;
}
declare module 'grommet/components/icons/base/Download.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Download'>;
}
declare module 'grommet/components/icons/base/Drag.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Drag'>;
}
declare module 'grommet/components/icons/base/DriveCage.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/DriveCage'>;
}
declare module 'grommet/components/icons/base/Duplicate.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Duplicate'>;
}
declare module 'grommet/components/icons/base/Edit.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Edit'>;
}
declare module 'grommet/components/icons/base/Eject.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Eject'>;
}
declare module 'grommet/components/icons/base/EmptyCircle.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/EmptyCircle'>;
}
declare module 'grommet/components/icons/base/Expand.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Expand'>;
}
declare module 'grommet/components/icons/base/Fan.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Fan'>;
}
declare module 'grommet/components/icons/base/FastForward.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/FastForward'>;
}
declare module 'grommet/components/icons/base/Favorite.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Favorite'>;
}
declare module 'grommet/components/icons/base/Filter.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Filter'>;
}
declare module 'grommet/components/icons/base/FingerPrint.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/FingerPrint'>;
}
declare module 'grommet/components/icons/base/Flag.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Flag'>;
}
declare module 'grommet/components/icons/base/Folder.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Folder'>;
}
declare module 'grommet/components/icons/base/FolderCycle.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/FolderCycle'>;
}
declare module 'grommet/components/icons/base/FolderOpen.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/FolderOpen'>;
}
declare module 'grommet/components/icons/base/ForwardTen.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ForwardTen'>;
}
declare module 'grommet/components/icons/base/Gallery.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Gallery'>;
}
declare module 'grommet/components/icons/base/Gamepad.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Gamepad'>;
}
declare module 'grommet/components/icons/base/Gift.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Gift'>;
}
declare module 'grommet/components/icons/base/Globe.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Globe'>;
}
declare module 'grommet/components/icons/base/Grid.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Grid'>;
}
declare module 'grommet/components/icons/base/Group.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Group'>;
}
declare module 'grommet/components/icons/base/Grow.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Grow'>;
}
declare module 'grommet/components/icons/base/Halt.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Halt'>;
}
declare module 'grommet/components/icons/base/Help.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Help'>;
}
declare module 'grommet/components/icons/base/History.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/History'>;
}
declare module 'grommet/components/icons/base/Home.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Home'>;
}
declare module 'grommet/components/icons/base/Host.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Host'>;
}
declare module 'grommet/components/icons/base/HostMaintenance.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/HostMaintenance'>;
}
declare module 'grommet/components/icons/base/Image.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Image'>;
}
declare module 'grommet/components/icons/base/Impact.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Impact'>;
}
declare module 'grommet/components/icons/base/Inbox.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Inbox'>;
}
declare module 'grommet/components/icons/base/Indicator.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Indicator'>;
}
declare module 'grommet/components/icons/base/Info.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Info'>;
}
declare module 'grommet/components/icons/base/Inherit.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Inherit'>;
}
declare module 'grommet/components/icons/base/InProgress.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/InProgress'>;
}
declare module 'grommet/components/icons/base/Inspect.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Inspect'>;
}
declare module 'grommet/components/icons/base/Install.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Install'>;
}
declare module 'grommet/components/icons/base/Integration.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Integration'>;
}
declare module 'grommet/components/icons/base/Iteration.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Iteration'>;
}
declare module 'grommet/components/icons/base/Java.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Java'>;
}
declare module 'grommet/components/icons/base/Language.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Language'>;
}
declare module 'grommet/components/icons/base/Launch.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Launch'>;
}
declare module 'grommet/components/icons/base/Layer.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Layer'>;
}
declare module 'grommet/components/icons/base/License.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/License'>;
}
declare module 'grommet/components/icons/base/Like.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Like'>;
}
declare module 'grommet/components/icons/base/LineChart.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/LineChart'>;
}
declare module 'grommet/components/icons/base/Link.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Link'>;
}
declare module 'grommet/components/icons/base/LinkBottom.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/LinkBottom'>;
}
declare module 'grommet/components/icons/base/LinkDown.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/LinkDown'>;
}
declare module 'grommet/components/icons/base/LinkNext.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/LinkNext'>;
}
declare module 'grommet/components/icons/base/LinkPrevious.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/LinkPrevious'>;
}
declare module 'grommet/components/icons/base/LinkTop.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/LinkTop'>;
}
declare module 'grommet/components/icons/base/LinkUp.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/LinkUp'>;
}
declare module 'grommet/components/icons/base/Local.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Local'>;
}
declare module 'grommet/components/icons/base/Location.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Location'>;
}
declare module 'grommet/components/icons/base/LocationPin.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/LocationPin'>;
}
declare module 'grommet/components/icons/base/Lock.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Lock'>;
}
declare module 'grommet/components/icons/base/Login.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Login'>;
}
declare module 'grommet/components/icons/base/Logout.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Logout'>;
}
declare module 'grommet/components/icons/base/Magic.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Magic'>;
}
declare module 'grommet/components/icons/base/Mail.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Mail'>;
}
declare module 'grommet/components/icons/base/MailOption.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/MailOption'>;
}
declare module 'grommet/components/icons/base/Manual.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Manual'>;
}
declare module 'grommet/components/icons/base/Map.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Map'>;
}
declare module 'grommet/components/icons/base/MapLocation.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/MapLocation'>;
}
declare module 'grommet/components/icons/base/Menu.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Menu'>;
}
declare module 'grommet/components/icons/base/Microphone.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Microphone'>;
}
declare module 'grommet/components/icons/base/Money.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Money'>;
}
declare module 'grommet/components/icons/base/Monitor.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Monitor'>;
}
declare module 'grommet/components/icons/base/More.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/More'>;
}
declare module 'grommet/components/icons/base/Multiple.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Multiple'>;
}
declare module 'grommet/components/icons/base/Navigate.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Navigate'>;
}
declare module 'grommet/components/icons/base/New.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/New'>;
}
declare module 'grommet/components/icons/base/NewWindow.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/NewWindow'>;
}
declare module 'grommet/components/icons/base/Next.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Next'>;
}
declare module 'grommet/components/icons/base/Nodes.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Nodes'>;
}
declare module 'grommet/components/icons/base/Note.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Note'>;
}
declare module 'grommet/components/icons/base/Notes.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Notes'>;
}
declare module 'grommet/components/icons/base/Notification.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Notification'>;
}
declare module 'grommet/components/icons/base/ObjectGroup.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ObjectGroup'>;
}
declare module 'grommet/components/icons/base/ObjectUngroup.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ObjectUngroup'>;
}
declare module 'grommet/components/icons/base/Optimize.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Optimize'>;
}
declare module 'grommet/components/icons/base/Organization.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Organization'>;
}
declare module 'grommet/components/icons/base/Overview.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Overview'>;
}
declare module 'grommet/components/icons/base/Pan.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Pan'>;
}
declare module 'grommet/components/icons/base/Pause.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Pause'>;
}
declare module 'grommet/components/icons/base/PauseFill.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PauseFill'>;
}
declare module 'grommet/components/icons/base/PersonalComputer.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PersonalComputer'>;
}
declare module 'grommet/components/icons/base/PieChart.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PieChart'>;
}
declare module 'grommet/components/icons/base/Pin.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Pin'>;
}
declare module 'grommet/components/icons/base/Plan.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Plan'>;
}
declare module 'grommet/components/icons/base/PlatformAmazon.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformAmazon'>;
}
declare module 'grommet/components/icons/base/PlatformAndroid.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformAndroid'>;
}
declare module 'grommet/components/icons/base/PlatformApple.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformApple'>;
}
declare module 'grommet/components/icons/base/PlatformArchlinux.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformArchlinux'>;
}
declare module 'grommet/components/icons/base/PlatformAruba.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformAruba'>;
}
declare module 'grommet/components/icons/base/PlatformCentos.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformCentos'>;
}
declare module 'grommet/components/icons/base/PlatformChrome.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformChrome'>;
}
declare module 'grommet/components/icons/base/PlatformCloudlinux.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformCloudlinux'>;
}
declare module 'grommet/components/icons/base/PlatformDebian.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformDebian'>;
}
declare module 'grommet/components/icons/base/PlatformDocker.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformDocker'>;
}
declare module 'grommet/components/icons/base/PlatformDos.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformDos'>;
}
declare module 'grommet/components/icons/base/PlatformDropbox.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformDropbox'>;
}
declare module 'grommet/components/icons/base/PlatformEdge.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformEdge'>;
}
declare module 'grommet/components/icons/base/PlatformFedora.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformFedora'>;
}
declare module 'grommet/components/icons/base/PlatformFirefox.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformFirefox'>;
}
declare module 'grommet/components/icons/base/PlatformFreebsd.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformFreebsd'>;
}
declare module 'grommet/components/icons/base/PlatformGoogle.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformGoogle'>;
}
declare module 'grommet/components/icons/base/PlatformHadoop.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformHadoop'>;
}
declare module 'grommet/components/icons/base/PlatformHeroku.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformHeroku'>;
}
declare module 'grommet/components/icons/base/PlatformHorton.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformHorton'>;
}
declare module 'grommet/components/icons/base/PlatformHp.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformHp'>;
}
declare module 'grommet/components/icons/base/PlatformHpi.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformHpi'>;
}
declare module 'grommet/components/icons/base/PlatformInternetExplorer.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformInternetExplorer'>;
}
declare module 'grommet/components/icons/base/PlatformJava.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformJava'>;
}
declare module 'grommet/components/icons/base/PlatformMandriva.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformMandriva'>;
}
declare module 'grommet/components/icons/base/PlatformMysql.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformMysql'>;
}
declare module 'grommet/components/icons/base/PlatformNorton.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformNorton'>;
}
declare module 'grommet/components/icons/base/PlatformOnedrive.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformOnedrive'>;
}
declare module 'grommet/components/icons/base/PlatformOpera.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformOpera'>;
}
declare module 'grommet/components/icons/base/PlatformOracle.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformOracle'>;
}
declare module 'grommet/components/icons/base/PlatformPiedPiper.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformPiedPiper'>;
}
declare module 'grommet/components/icons/base/PlatformRaspberry.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformRaspberry'>;
}
declare module 'grommet/components/icons/base/PlatformReactjs.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformReactjs'>;
}
declare module 'grommet/components/icons/base/PlatformRedhat.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformRedhat'>;
}
declare module 'grommet/components/icons/base/PlatformSafari.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformSafari'>;
}
declare module 'grommet/components/icons/base/PlatformSafariOption.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformSafariOption'>;
}
declare module 'grommet/components/icons/base/PlatformSco.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformSco'>;
}
declare module 'grommet/components/icons/base/PlatformSolaris.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformSolaris'>;
}
declare module 'grommet/components/icons/base/PlatformSuse.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformSuse'>;
}
declare module 'grommet/components/icons/base/PlatformSwift.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformSwift'>;
}
declare module 'grommet/components/icons/base/PlatformTurbolinux.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformTurbolinux'>;
}
declare module 'grommet/components/icons/base/PlatformUbuntu.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformUbuntu'>;
}
declare module 'grommet/components/icons/base/PlatformUnixware.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformUnixware'>;
}
declare module 'grommet/components/icons/base/PlatformVmware.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformVmware'>;
}
declare module 'grommet/components/icons/base/PlatformWindows.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformWindows'>;
}
declare module 'grommet/components/icons/base/PlatformWindowsLegacy.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlatformWindowsLegacy'>;
}
declare module 'grommet/components/icons/base/Play.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Play'>;
}
declare module 'grommet/components/icons/base/PlayFill.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/PlayFill'>;
}
declare module 'grommet/components/icons/base/Power.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Power'>;
}
declare module 'grommet/components/icons/base/Previous.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Previous'>;
}
declare module 'grommet/components/icons/base/Print.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Print'>;
}
declare module 'grommet/components/icons/base/Radial.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Radial'>;
}
declare module 'grommet/components/icons/base/RadialSelected.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/RadialSelected'>;
}
declare module 'grommet/components/icons/base/Refresh.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Refresh'>;
}
declare module 'grommet/components/icons/base/Resources.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Resources'>;
}
declare module 'grommet/components/icons/base/Resume.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Resume'>;
}
declare module 'grommet/components/icons/base/Revert.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Revert'>;
}
declare module 'grommet/components/icons/base/Rewind.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Rewind'>;
}
declare module 'grommet/components/icons/base/Risk.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Risk'>;
}
declare module 'grommet/components/icons/base/Robot.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Robot'>;
}
declare module 'grommet/components/icons/base/Rss.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Rss'>;
}
declare module 'grommet/components/icons/base/Run.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Run'>;
}
declare module 'grommet/components/icons/base/Satellite.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Satellite'>;
}
declare module 'grommet/components/icons/base/Save.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Save'>;
}
declare module 'grommet/components/icons/base/Scan.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Scan'>;
}
declare module 'grommet/components/icons/base/Schedule.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Schedule'>;
}
declare module 'grommet/components/icons/base/ScheduleNew.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ScheduleNew'>;
}
declare module 'grommet/components/icons/base/SchedulePlay.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SchedulePlay'>;
}
declare module 'grommet/components/icons/base/Schedules.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Schedules'>;
}
declare module 'grommet/components/icons/base/Scorecard.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Scorecard'>;
}
declare module 'grommet/components/icons/base/Search.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Search'>;
}
declare module 'grommet/components/icons/base/SearchAdvanced.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SearchAdvanced'>;
}
declare module 'grommet/components/icons/base/Secure.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Secure'>;
}
declare module 'grommet/components/icons/base/Select.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Select'>;
}
declare module 'grommet/components/icons/base/Selection.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Selection'>;
}
declare module 'grommet/components/icons/base/Send.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Send'>;
}
declare module 'grommet/components/icons/base/Server.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Server'>;
}
declare module 'grommet/components/icons/base/ServerCluster.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ServerCluster'>;
}
declare module 'grommet/components/icons/base/Servers.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Servers'>;
}
declare module 'grommet/components/icons/base/ServicePlay.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ServicePlay'>;
}
declare module 'grommet/components/icons/base/Services.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Services'>;
}
declare module 'grommet/components/icons/base/SettingsOption.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SettingsOption'>;
}
declare module 'grommet/components/icons/base/Share.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Share'>;
}
declare module 'grommet/components/icons/base/Shield.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Shield'>;
}
declare module 'grommet/components/icons/base/ShieldSecurity.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ShieldSecurity'>;
}
declare module 'grommet/components/icons/base/Shift.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Shift'>;
}
declare module 'grommet/components/icons/base/Sidebar.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Sidebar'>;
}
declare module 'grommet/components/icons/base/SocialAmazon.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialAmazon'>;
}
declare module 'grommet/components/icons/base/SocialAmex.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialAmex'>;
}
declare module 'grommet/components/icons/base/SocialBitcoin.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialBitcoin'>;
}
declare module 'grommet/components/icons/base/SocialCodepen.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialCodepen'>;
}
declare module 'grommet/components/icons/base/SocialCreativeCommons.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialCreativeCommons'>;
}
declare module 'grommet/components/icons/base/SocialDropbox.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialDropbox'>;
}
declare module 'grommet/components/icons/base/SocialFacebook.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialFacebook'>;
}
declare module 'grommet/components/icons/base/SocialFacebookOption.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialFacebookOption'>;
}
declare module 'grommet/components/icons/base/SocialGithub.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialGithub'>;
}
declare module 'grommet/components/icons/base/SocialGooglePlus.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialGooglePlus'>;
}
declare module 'grommet/components/icons/base/SocialGoogleWallet.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialGoogleWallet'>;
}
declare module 'grommet/components/icons/base/SocialInstagram.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialInstagram'>;
}
declare module 'grommet/components/icons/base/SocialLinkedin.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialLinkedin'>;
}
declare module 'grommet/components/icons/base/SocialLinkedinOption.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialLinkedinOption'>;
}
declare module 'grommet/components/icons/base/SocialMail.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialMail'>;
}
declare module 'grommet/components/icons/base/SocialMastercard.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialMastercard'>;
}
declare module 'grommet/components/icons/base/SocialMedium.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialMedium'>;
}
declare module 'grommet/components/icons/base/SocialPaypal.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialPaypal'>;
}
declare module 'grommet/components/icons/base/SocialPinterest.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialPinterest'>;
}
declare module 'grommet/components/icons/base/SocialProductHunt.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialProductHunt'>;
}
declare module 'grommet/components/icons/base/SocialReddit.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialReddit'>;
}
declare module 'grommet/components/icons/base/SocialSkype.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialSkype'>;
}
declare module 'grommet/components/icons/base/SocialSlack.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialSlack'>;
}
declare module 'grommet/components/icons/base/SocialSnapchat.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialSnapchat'>;
}
declare module 'grommet/components/icons/base/SocialSquare.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialSquare'>;
}
declare module 'grommet/components/icons/base/SocialStackOverflow.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialStackOverflow'>;
}
declare module 'grommet/components/icons/base/SocialStripe.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialStripe'>;
}
declare module 'grommet/components/icons/base/SocialTumblr.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialTumblr'>;
}
declare module 'grommet/components/icons/base/SocialTwitter.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialTwitter'>;
}
declare module 'grommet/components/icons/base/SocialVimeo.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialVimeo'>;
}
declare module 'grommet/components/icons/base/SocialVine.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialVine'>;
}
declare module 'grommet/components/icons/base/SocialVisa.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialVisa'>;
}
declare module 'grommet/components/icons/base/SocialWordpress.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialWordpress'>;
}
declare module 'grommet/components/icons/base/SocialYoutube.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SocialYoutube'>;
}
declare module 'grommet/components/icons/base/Sort.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Sort'>;
}
declare module 'grommet/components/icons/base/Split.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Split'>;
}
declare module 'grommet/components/icons/base/Splits.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Splits'>;
}
declare module 'grommet/components/icons/base/Stakeholder.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Stakeholder'>;
}
declare module 'grommet/components/icons/base/Standards-3dEffects.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Standards-3dEffects'>;
}
declare module 'grommet/components/icons/base/StandardsConnectivity.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StandardsConnectivity'>;
}
declare module 'grommet/components/icons/base/StandardsCss3.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StandardsCss3'>;
}
declare module 'grommet/components/icons/base/StandardsDevice.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StandardsDevice'>;
}
declare module 'grommet/components/icons/base/StandardsFireball.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StandardsFireball'>;
}
declare module 'grommet/components/icons/base/StandardsHtml5.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StandardsHtml5'>;
}
declare module 'grommet/components/icons/base/StandardsMultimedia.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StandardsMultimedia'>;
}
declare module 'grommet/components/icons/base/StandardsOfflineStorage.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StandardsOfflineStorage'>;
}
declare module 'grommet/components/icons/base/StandardsPerformance.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StandardsPerformance'>;
}
declare module 'grommet/components/icons/base/StandardsSematics.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StandardsSematics'>;
}
declare module 'grommet/components/icons/base/Star.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Star'>;
}
declare module 'grommet/components/icons/base/StarHalf.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StarHalf'>;
}
declare module 'grommet/components/icons/base/Steps.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Steps'>;
}
declare module 'grommet/components/icons/base/Stop.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Stop'>;
}
declare module 'grommet/components/icons/base/StopFill.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StopFill'>;
}
declare module 'grommet/components/icons/base/Storage.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Storage'>;
}
declare module 'grommet/components/icons/base/StreetView.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/StreetView'>;
}
declare module 'grommet/components/icons/base/Subtract.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Subtract'>;
}
declare module 'grommet/components/icons/base/SubtractCircle.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/SubtractCircle'>;
}
declare module 'grommet/components/icons/base/Support.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Support'>;
}
declare module 'grommet/components/icons/base/Sync.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Sync'>;
}
declare module 'grommet/components/icons/base/System.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/System'>;
}
declare module 'grommet/components/icons/base/Table.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Table'>;
}
declare module 'grommet/components/icons/base/TableAdd.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/TableAdd'>;
}
declare module 'grommet/components/icons/base/Tag.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Tag'>;
}
declare module 'grommet/components/icons/base/Target.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Target'>;
}
declare module 'grommet/components/icons/base/Task.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Task'>;
}
declare module 'grommet/components/icons/base/Tasks.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Tasks'>;
}
declare module 'grommet/components/icons/base/Technology.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Technology'>;
}
declare module 'grommet/components/icons/base/Template.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Template'>;
}
declare module 'grommet/components/icons/base/Terminal.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Terminal'>;
}
declare module 'grommet/components/icons/base/Test.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Test'>;
}
declare module 'grommet/components/icons/base/TestDesktop.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/TestDesktop'>;
}
declare module 'grommet/components/icons/base/TextWrap.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/TextWrap'>;
}
declare module 'grommet/components/icons/base/Threats.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Threats'>;
}
declare module 'grommet/components/icons/base/Ticket.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Ticket'>;
}
declare module 'grommet/components/icons/base/Tools.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Tools'>;
}
declare module 'grommet/components/icons/base/Tooltip.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Tooltip'>;
}
declare module 'grommet/components/icons/base/TopCorner.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/TopCorner'>;
}
declare module 'grommet/components/icons/base/Transaction.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Transaction'>;
}
declare module 'grommet/components/icons/base/Trash.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Trash'>;
}
declare module 'grommet/components/icons/base/Tree.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Tree'>;
}
declare module 'grommet/components/icons/base/Trigger.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Trigger'>;
}
declare module 'grommet/components/icons/base/Trophy.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Trophy'>;
}
declare module 'grommet/components/icons/base/Troubleshoot.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Troubleshoot'>;
}
declare module 'grommet/components/icons/base/Unlink.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Unlink'>;
}
declare module 'grommet/components/icons/base/Unlock.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Unlock'>;
}
declare module 'grommet/components/icons/base/Up.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Up'>;
}
declare module 'grommet/components/icons/base/Update.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Update'>;
}
declare module 'grommet/components/icons/base/Upgrade.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Upgrade'>;
}
declare module 'grommet/components/icons/base/Upload.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Upload'>;
}
declare module 'grommet/components/icons/base/User.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/User'>;
}
declare module 'grommet/components/icons/base/UserAdd.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/UserAdd'>;
}
declare module 'grommet/components/icons/base/UserAdmin.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/UserAdmin'>;
}
declare module 'grommet/components/icons/base/UserExpert.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/UserExpert'>;
}
declare module 'grommet/components/icons/base/UserFemale.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/UserFemale'>;
}
declare module 'grommet/components/icons/base/UserManager.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/UserManager'>;
}
declare module 'grommet/components/icons/base/UserNew.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/UserNew'>;
}
declare module 'grommet/components/icons/base/UserPolice.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/UserPolice'>;
}
declare module 'grommet/components/icons/base/UserSettings.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/UserSettings'>;
}
declare module 'grommet/components/icons/base/UserWorker.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/UserWorker'>;
}
declare module 'grommet/components/icons/base/Validate.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Validate'>;
}
declare module 'grommet/components/icons/base/Video.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Video'>;
}
declare module 'grommet/components/icons/base/View.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/View'>;
}
declare module 'grommet/components/icons/base/VirtualMachine.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/VirtualMachine'>;
}
declare module 'grommet/components/icons/base/VmMaintenance.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/VmMaintenance'>;
}
declare module 'grommet/components/icons/base/Volume.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Volume'>;
}
declare module 'grommet/components/icons/base/VolumeLow.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/VolumeLow'>;
}
declare module 'grommet/components/icons/base/VolumeMute.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/VolumeMute'>;
}
declare module 'grommet/components/icons/base/Vulnerability.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Vulnerability'>;
}
declare module 'grommet/components/icons/base/Waypoint.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Waypoint'>;
}
declare module 'grommet/components/icons/base/Workshop.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/Workshop'>;
}
declare module 'grommet/components/icons/base/ZoomIn.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ZoomIn'>;
}
declare module 'grommet/components/icons/base/ZoomOut.js' {
  declare module.exports: $Exports<'grommet/components/icons/base/ZoomOut'>;
}
declare module 'grommet/components/icons/Grommet.js' {
  declare module.exports: $Exports<'grommet/components/icons/Grommet'>;
}
declare module 'grommet/components/icons/Pulse.js' {
  declare module.exports: $Exports<'grommet/components/icons/Pulse'>;
}
declare module 'grommet/components/icons/Spinning.js' {
  declare module.exports: $Exports<'grommet/components/icons/Spinning'>;
}
declare module 'grommet/components/icons/Status.js' {
  declare module.exports: $Exports<'grommet/components/icons/Status'>;
}
declare module 'grommet/components/icons/status/Blank.js' {
  declare module.exports: $Exports<'grommet/components/icons/status/Blank'>;
}
declare module 'grommet/components/icons/status/CriticalStatus.js' {
  declare module.exports: $Exports<'grommet/components/icons/status/CriticalStatus'>;
}
declare module 'grommet/components/icons/status/Disabled.js' {
  declare module.exports: $Exports<'grommet/components/icons/status/Disabled'>;
}
declare module 'grommet/components/icons/status/Label.js' {
  declare module.exports: $Exports<'grommet/components/icons/status/Label'>;
}
declare module 'grommet/components/icons/status/OK.js' {
  declare module.exports: $Exports<'grommet/components/icons/status/OK'>;
}
declare module 'grommet/components/icons/status/Unknown.js' {
  declare module.exports: $Exports<'grommet/components/icons/status/Unknown'>;
}
declare module 'grommet/components/icons/status/Warning.js' {
  declare module.exports: $Exports<'grommet/components/icons/status/Warning'>;
}
declare module 'grommet/components/Image.js' {
  declare module.exports: $Exports<'grommet/components/Image'>;
}
declare module 'grommet/components/Label.js' {
  declare module.exports: $Exports<'grommet/components/Label'>;
}
declare module 'grommet/components/Layer.js' {
  declare module.exports: $Exports<'grommet/components/Layer'>;
}
declare module 'grommet/components/Legend.js' {
  declare module.exports: $Exports<'grommet/components/Legend'>;
}
declare module 'grommet/components/List.js' {
  declare module.exports: $Exports<'grommet/components/List'>;
}
declare module 'grommet/components/ListItem.js' {
  declare module.exports: $Exports<'grommet/components/ListItem'>;
}
declare module 'grommet/components/LoginForm.js' {
  declare module.exports: $Exports<'grommet/components/LoginForm'>;
}
declare module 'grommet/components/Map.js' {
  declare module.exports: $Exports<'grommet/components/Map'>;
}
declare module 'grommet/components/Markdown.js' {
  declare module.exports: $Exports<'grommet/components/Markdown'>;
}
declare module 'grommet/components/Menu.js' {
  declare module.exports: $Exports<'grommet/components/Menu'>;
}
declare module 'grommet/components/Meter.js' {
  declare module.exports: $Exports<'grommet/components/Meter'>;
}
declare module 'grommet/components/meter/Arc.js' {
  declare module.exports: $Exports<'grommet/components/meter/Arc'>;
}
declare module 'grommet/components/meter/Bar.js' {
  declare module.exports: $Exports<'grommet/components/meter/Bar'>;
}
declare module 'grommet/components/meter/Circle.js' {
  declare module.exports: $Exports<'grommet/components/meter/Circle'>;
}
declare module 'grommet/components/meter/Graphic.js' {
  declare module.exports: $Exports<'grommet/components/meter/Graphic'>;
}
declare module 'grommet/components/meter/propTypes.js' {
  declare module.exports: $Exports<'grommet/components/meter/propTypes'>;
}
declare module 'grommet/components/meter/Spiral.js' {
  declare module.exports: $Exports<'grommet/components/meter/Spiral'>;
}
declare module 'grommet/components/meter/utils.js' {
  declare module.exports: $Exports<'grommet/components/meter/utils'>;
}
declare module 'grommet/components/Notification.js' {
  declare module.exports: $Exports<'grommet/components/Notification'>;
}
declare module 'grommet/components/NumberInput.js' {
  declare module.exports: $Exports<'grommet/components/NumberInput'>;
}
declare module 'grommet/components/Object.js' {
  declare module.exports: $Exports<'grommet/components/Object'>;
}
declare module 'grommet/components/Paragraph.js' {
  declare module.exports: $Exports<'grommet/components/Paragraph'>;
}
declare module 'grommet/components/Quote.js' {
  declare module.exports: $Exports<'grommet/components/Quote'>;
}
declare module 'grommet/components/RadioButton.js' {
  declare module.exports: $Exports<'grommet/components/RadioButton'>;
}
declare module 'grommet/components/Search.js' {
  declare module.exports: $Exports<'grommet/components/Search'>;
}
declare module 'grommet/components/SearchInput.js' {
  declare module.exports: $Exports<'grommet/components/SearchInput'>;
}
declare module 'grommet/components/Section.js' {
  declare module.exports: $Exports<'grommet/components/Section'>;
}
declare module 'grommet/components/Select.js' {
  declare module.exports: $Exports<'grommet/components/Select'>;
}
declare module 'grommet/components/Sidebar.js' {
  declare module.exports: $Exports<'grommet/components/Sidebar'>;
}
declare module 'grommet/components/SkipLinkAnchor.js' {
  declare module.exports: $Exports<'grommet/components/SkipLinkAnchor'>;
}
declare module 'grommet/components/SkipLinks.js' {
  declare module.exports: $Exports<'grommet/components/SkipLinks'>;
}
declare module 'grommet/components/SocialShare.js' {
  declare module.exports: $Exports<'grommet/components/SocialShare'>;
}
declare module 'grommet/components/Split.js' {
  declare module.exports: $Exports<'grommet/components/Split'>;
}
declare module 'grommet/components/SunBurst.js' {
  declare module.exports: $Exports<'grommet/components/SunBurst'>;
}
declare module 'grommet/components/SVGIcon.js' {
  declare module.exports: $Exports<'grommet/components/SVGIcon'>;
}
declare module 'grommet/components/Tab.js' {
  declare module.exports: $Exports<'grommet/components/Tab'>;
}
declare module 'grommet/components/Table.js' {
  declare module.exports: $Exports<'grommet/components/Table'>;
}
declare module 'grommet/components/TableHeader.js' {
  declare module.exports: $Exports<'grommet/components/TableHeader'>;
}
declare module 'grommet/components/TableRow.js' {
  declare module.exports: $Exports<'grommet/components/TableRow'>;
}
declare module 'grommet/components/Tabs.js' {
  declare module.exports: $Exports<'grommet/components/Tabs'>;
}
declare module 'grommet/components/TextInput.js' {
  declare module.exports: $Exports<'grommet/components/TextInput'>;
}
declare module 'grommet/components/Tile.js' {
  declare module.exports: $Exports<'grommet/components/Tile'>;
}
declare module 'grommet/components/Tiles.js' {
  declare module.exports: $Exports<'grommet/components/Tiles'>;
}
declare module 'grommet/components/Timestamp.js' {
  declare module.exports: $Exports<'grommet/components/Timestamp'>;
}
declare module 'grommet/components/Tip.js' {
  declare module.exports: $Exports<'grommet/components/Tip'>;
}
declare module 'grommet/components/Title.js' {
  declare module.exports: $Exports<'grommet/components/Title'>;
}
declare module 'grommet/components/Toast.js' {
  declare module.exports: $Exports<'grommet/components/Toast'>;
}
declare module 'grommet/components/Topology.js' {
  declare module.exports: $Exports<'grommet/components/Topology'>;
}
declare module 'grommet/components/Value.js' {
  declare module.exports: $Exports<'grommet/components/Value'>;
}
declare module 'grommet/components/Video.js' {
  declare module.exports: $Exports<'grommet/components/Video'>;
}
declare module 'grommet/components/video/Controls.js' {
  declare module.exports: $Exports<'grommet/components/video/Controls'>;
}
declare module 'grommet/components/video/FullscreenButton.js' {
  declare module.exports: $Exports<'grommet/components/video/FullscreenButton'>;
}
declare module 'grommet/components/video/Overlay.js' {
  declare module.exports: $Exports<'grommet/components/video/Overlay'>;
}
declare module 'grommet/components/video/PlayButton.js' {
  declare module.exports: $Exports<'grommet/components/video/PlayButton'>;
}
declare module 'grommet/components/video/ProgressBar.js' {
  declare module.exports: $Exports<'grommet/components/video/ProgressBar'>;
}
declare module 'grommet/components/video/Share.js' {
  declare module.exports: $Exports<'grommet/components/video/Share'>;
}
declare module 'grommet/components/video/Time.js' {
  declare module.exports: $Exports<'grommet/components/video/Time'>;
}
declare module 'grommet/components/WorldMap.js' {
  declare module.exports: $Exports<'grommet/components/WorldMap'>;
}
declare module 'grommet/index' {
  declare module.exports: $Exports<'grommet'>;
}
declare module 'grommet/index.js' {
  declare module.exports: $Exports<'grommet'>;
}
declare module 'grommet/utils/AlphaNum.js' {
  declare module.exports: $Exports<'grommet/utils/AlphaNum'>;
}
declare module 'grommet/utils/Announcer.js' {
  declare module.exports: $Exports<'grommet/utils/Announcer'>;
}
declare module 'grommet/utils/Cookies.js' {
  declare module.exports: $Exports<'grommet/utils/Cookies'>;
}
declare module 'grommet/utils/CSSClassnames.js' {
  declare module.exports: $Exports<'grommet/utils/CSSClassnames'>;
}
declare module 'grommet/utils/DOM.js' {
  declare module.exports: $Exports<'grommet/utils/DOM'>;
}
declare module 'grommet/utils/Drop.js' {
  declare module.exports: $Exports<'grommet/utils/Drop'>;
}
declare module 'grommet/utils/FormatTime.js' {
  declare module.exports: $Exports<'grommet/utils/FormatTime'>;
}
declare module 'grommet/utils/Graphics.js' {
  declare module.exports: $Exports<'grommet/utils/Graphics'>;
}
declare module 'grommet/utils/InfiniteScroll.js' {
  declare module.exports: $Exports<'grommet/utils/InfiniteScroll'>;
}
declare module 'grommet/utils/Intl.js' {
  declare module.exports: $Exports<'grommet/utils/Intl'>;
}
declare module 'grommet/utils/KeyboardAccelerators.js' {
  declare module.exports: $Exports<'grommet/utils/KeyboardAccelerators'>;
}
declare module 'grommet/utils/Locale.js' {
  declare module.exports: $Exports<'grommet/utils/Locale'>;
}
declare module 'grommet/utils/Props.js' {
  declare module.exports: $Exports<'grommet/utils/Props'>;
}
declare module 'grommet/utils/Responsive.js' {
  declare module.exports: $Exports<'grommet/utils/Responsive'>;
}
declare module 'grommet/utils/Rest.js' {
  declare module.exports: $Exports<'grommet/utils/Rest'>;
}
declare module 'grommet/utils/Scroll.js' {
  declare module.exports: $Exports<'grommet/utils/Scroll'>;
}
declare module 'grommet/utils/Selection.js' {
  declare module.exports: $Exports<'grommet/utils/Selection'>;
}
declare module 'grommet/utils/StringConvert.js' {
  declare module.exports: $Exports<'grommet/utils/StringConvert'>;
}
declare module 'grommet/utils/Throttle.js' {
  declare module.exports: $Exports<'grommet/utils/Throttle'>;
}
declare module 'grommet/utils/Validator.js' {
  declare module.exports: $Exports<'grommet/utils/Validator'>;
}

declare type GrommetBoxTypes$FixedSizes = "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";

declare type GrommetBoxTypes$MarginSizes = "small" | "medium" | "large" | "none";

declare type GrommetBoxTypes$BoxSizes = "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "full" | "1/2" | "1/3" | "2/3" | "1/4" | "3/4";

declare type GrommetBoxTypes$PadSizes = "small" | "medium" | "large" | "none";

declare type GrommetBoxTypes$Size = "auto" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "full";

declare type GrommetCustomTypes$SelectValueType = {
  label?: string,
  value?: any
} | string | number;

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

declare type Grommet$Chart$GraphProps<T> = {
  a11yTitle?: string,
  activeIndex?: number,
  colorIndex?: string,
  height?: number,
  max: number,
  min: number,
  points?: boolean,
  reverse?: boolean,
  smooth?: boolean,
  values: Array<number>,
  type?: 'area' | 'line' | 'bar';
  vertical?: boolean,
  width?: number;
}

declare type Grommet$Icons$IconSize = 'small' | 'medium' | 'large' | 'xlarge' | 'huge';
declare type Grommet$Icons$GenericProps = {
  a11yTitle?: string,
  colorIndex?: string,
  size?: Grommet$Icons$IconSize,
  responsive?: boolean
}

declare type ReactNode = ReactNode | React$Element<any>;

declare type Grommet$BoxProps<T> = {
  a11yTitle?: string | any,
  announce?: boolean,
  align?: "start" | "center" | "end" | "baseline" | "stretch",
  alignContent?: "start" | "center" | "end" | "between" | "around" | "stretch",
  alignSelf?: "start" | "center" | "end" | "stretch",
  appCentered?: boolean,
  backgroundImage?: string,
  basis?: GrommetBoxTypes$BoxSizes,
  colorIndex?: string,
  containerClassName?: string,
  direction?: "row" | "column",
  focusable?: boolean,
  flex?: "grow" | "shrink" | boolean,
  onClick?: Function,
  justify?: "start" | "center" | "between" | "end",
  margin?: GrommetBoxTypes$MarginSizes | {
    bottom?: GrommetBoxTypes$MarginSizes,
    horizontal?: GrommetBoxTypes$MarginSizes,
    left?: GrommetBoxTypes$MarginSizes,
    right?: GrommetBoxTypes$MarginSizes,
    top?: GrommetBoxTypes$MarginSizes,
    vertical?: GrommetBoxTypes$MarginSizes
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
  separator?: "top" | "bottom" | "left" | "right" | "horizontal" | "vertical" | "all" | "none",
  tag?: string,
  textAlign?: "left" | "center" | "right",
  texture?: ReactNode | string,
  wrap?: boolean,
  onFocus?: Function
}

declare type Grommet$BoxFull = {
  full?: "horizontal" | "vertical" | boolean,
}

declare type Grommet$BoxSizing = {
  size?: {
    height?: GrommetBoxTypes$Size | {
      max?: GrommetBoxTypes$FixedSizes,
      min?: GrommetBoxTypes$FixedSizes
    },
    width?: GrommetBoxTypes$Size | {
      max?: GrommetBoxTypes$FixedSizes,
      min?: GrommetBoxTypes$FixedSizes
    }
  }
}
