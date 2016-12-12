

declare module 'spectacle' {
	declare type transitionType = "slide" | "zoom" | "fade" | "spin";

	declare type progressType = "pacman" | "bar" | "number" | "none";

	declare type alignType = "flex-start flex-start" | "flex-start center" | "flex-start flex-end" | "center flex-start" | "center center" | "center flex-end" | "flex-end flex-start" | "flex-end center" | "flex-end flex-end";

	declare export interface BaseProps {
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
	}

	declare export interface SpectacleProps {
		theme?: {
		[key: string]: string | number
	}
	}

	declare export interface DeckProps {
		transition?: transitionType[],
		transitionDuration?: number,
		progress?: progressType,
		controls?: boolean
	}

	declare export interface SlideProps {
		align?: alignType,
		transition?: transitionType[],
		transitionDuration?: number,
		notes?: string,
		id?: string
	}

	declare export interface MarkdownProps {
		source?: string,
		mdastConfig?: {
		[key: string]: string | number
	}
	}

	declare export interface CodePaneProps {
		lang?: string,
		source?: string
	}

	declare export interface HeadingProps {
		fit?: boolean,
		lineHeight?: number,
		size?: number
	}

	declare export interface ImageProps {
		display?: string,
		height?: number,
		src?: string,
		width?: number | string
	}

	declare export interface LinkProps {
		href?: string
	}

	declare export interface SProps {
		type?: string
	}

	declare export interface TextProps {
		fit?: boolean,
		lineHeight?: number
	}

		declare export class Spectacle extends React$Component<SpectacleProps, any> {
		
	}

	declare export class Deck extends React$Component<DeckProps, any> {
		
	}

	declare export class Slide extends React$Component<SlideProps, any> {
		
	}

	declare export class Layout extends React$Component<any, any> {
		
	}

	declare export class Fit extends React$Component<any, any> {
		
	}

	declare export class Fill extends React$Component<any, any> {
		
	}

	declare export class Markdown extends React$Component<MarkdownProps, any> {
		
	}

	declare export class Appear extends React$Component<any, any> {
		
	}

	declare export class BlockQuote extends React$Component<BaseProps, any> {
		
	}

	declare export class Quote extends React$Component<BaseProps, any> {
		
	}

	declare export class Cite extends React$Component<BaseProps, any> {
		
	}

	declare export class CodePane extends React$Component<CodePaneProps, any> {
		
	}

	declare export class Code extends React$Component<BaseProps, any> {
		
	}

	declare export class Heading extends React$Component<HeadingProps, any> {
		
	}

	declare export class Image extends React$Component<ImageProps, any> {
		
	}

	declare export class Link extends React$Component<LinkProps, any> {
		
	}

	declare export class List extends React$Component<BaseProps, any> {
		
	}

	declare export class ListItem extends React$Component<BaseProps, any> {
		
	}

	declare export class S extends React$Component<SProps, any> {
		
	}

	declare export class Table extends React$Component<BaseProps, any> {
		
	}

	declare export class TableRow extends React$Component<BaseProps, any> {
		
	}

	declare export class TableHeaderItem extends React$Component<BaseProps, any> {
		
	}

	declare export class TableItem extends React$Component<BaseProps, any> {
		
	}

	declare export class Text extends React$Component<TextProps, any> {
		
	}

	
}