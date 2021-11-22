declare module 'react-measure' {
  declare type MeasurementType =
    | 'client'
    | 'offset'
    | 'scroll'
    | 'bounds'
    | 'margin';

  declare type TopLeft = {|
    +top: number,
    +left: number,
  |};

  declare type BottomRight = {|
    +bottom: number,
    +right: number,
  |};

  declare type Dimensions = {|
    +width: number,
    +height: number,
  |};

  declare type Margin = {|
    ...TopLeft,
    ...BottomRight
  |};

  declare type Rect = {|
    ...TopLeft,
    ...Dimensions,
  |};

  declare type BoundingRect = {|
    ...Dimensions,
    ...Margin,
  |};

  declare type ContentRect = {|
    client?: Rect,
    offset?: Rect,
    scroll?: Rect,
    bounds?: BoundingRect,
    margin?: Margin,
    entry?: any,
  |};

  declare type MeasuredComponentProps = {|
    measureRef: (ref: Element | null) => void,
    measure: () => void,
    contentRect: ContentRect,
  |};

  declare type MeasureProps = {|
    client?: boolean,
    offset?: boolean,
    scroll?: boolean,
    bounds?: boolean,
    margin?: boolean,
    innerRef?: HTMLElement | null,
    onResize?: (contentRect: ContentRect) => void;
    children?: (props: MeasuredComponentProps) => React$Node,
  |};

  declare type MeasureComponent = (props: MeasureProps) => React$Node;

  declare export var withContentRect: (
    types: Array<MeasurementType> | MeasurementType,
  ) => (children: MeasureProps['children']) => MeasureComponent;

  declare export default MeasureComponent;
}
