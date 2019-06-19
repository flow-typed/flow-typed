declare module "spectacle" {
  declare type Transition = "slide" | "zoom" | "fade" | "spin";
  declare type Progress = "pacman" | "bar" | "number" | "none";
  declare type Align =
    | "flex-start flex-start"
    | "flex-start center"
    | "flex-start flex-end"
    | "center flex-start"
    | "center center"
    | "center flex-end"
    | "flex-end flex-start"
    | "flex-end center"
    | "flex-end flex-end";

  declare export type BaseProps = {
    italic?: boolean,
    bold?: boolean,
    caps?: boolean,
    margin?: number | string,
    padding?: number | string,
    textColor?: string,
    textSize?: string,
    textAlign?: string,
    textFont?: string,
    bgColor?: string,
    bgImage?: string,
    bgDarken?: number
  };

  declare export type Theme = { [key: string]: string | number };

  declare export type SpectacleProps = {
    theme?: Theme
  };

  declare export type DeckProps = {
    transition?: Array<Transition>,
    transitionDuration?: number,
    progress?: Progress,
    controls?: boolean,
    theme?: Theme
  };

  declare export type SlideProps = BaseProps & {
    align?: Align,
    transition?: Array<Transition>,
    transitionDuration?: number,
    notes?: string,
    id?: string
  };

  declare export type MarkdownProps = {
    source?: string,
    mdastConfig?: { [key: string]: string | number }
  };

  declare export type CodePaneProps = BaseProps & {
    lang?: string,
    source?: string
  };

  declare export type HeadingProps = BaseProps & {
    fit?: boolean,
    lineHeight?: number,
    size?: number
  };

  declare export type ImageProps = BaseProps & {
    display?: string,
    height?: number,
    src?: string,
    width?: number | string
  };

  declare export type LinkProps = BaseProps & {
    href?: string
  };

  declare export type SProps = BaseProps & {
    type?: string
  };

  declare export type TextProps = BaseProps & {
    fit?: boolean,
    lineHeight?: number
  };

  declare export class Spectacle extends React$Component<SpectacleProps> {}

  declare export class Deck extends React$Component<DeckProps> {}

  declare export class Slide extends React$Component<SlideProps> {}

  declare export class Layout extends React$Component<any> {}

  declare export class Fit extends React$Component<any> {}

  declare export class Fill extends React$Component<any> {}

  declare export class Markdown extends React$Component<MarkdownProps> {}

  declare export class Appear extends React$Component<any> {}

  declare export class BlockQuote extends React$Component<BaseProps> {}

  declare export class Quote extends React$Component<BaseProps> {}

  declare export class Cite extends React$Component<BaseProps> {}

  declare export class CodePane extends React$Component<CodePaneProps> {}

  declare export class Code extends React$Component<BaseProps> {}

  declare export class Heading extends React$Component<HeadingProps> {}

  declare export class Image extends React$Component<ImageProps> {}

  declare export class Link extends React$Component<LinkProps> {}

  declare export class List extends React$Component<BaseProps> {}

  declare export class ListItem extends React$Component<BaseProps> {}

  declare export class S extends React$Component<SProps> {}

  declare export class Table extends React$Component<BaseProps> {}

  declare export class TableRow extends React$Component<BaseProps> {}

  declare export class TableHeaderItem extends React$Component<BaseProps> {}

  declare export class TableItem extends React$Component<BaseProps> {}

  declare export class Text extends React$Component<TextProps> {}
}

declare module "spectacle/lib/utils/preloader" {
  declare export default function preloader(obj: Object): void;
}

declare module "spectacle/lib/themes/default" {
  import type { Theme } from "spectacle";
  declare export default function createTheme(...args: Array<Object>): Theme;
}
