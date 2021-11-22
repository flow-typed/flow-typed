declare module 'react-measure' {
  declare type ContentRect = {|
    offset: {|
      offsetTop: number,
      offsetLeft: number,
      offsetWidth: number,
      offsetHeight: number,
    |},
    scroll: {|
      scrollTop: number,
      scrollLeft: number,
      scrollWidth: number,
      scrollHeight: number,
    |},
    bounds: {|
      width: number,
      height: number,
      top: number,
      right: number,
      bottom: number,
      left: number,
    |},
    margin: {|
      top: number,
      right: number,
      bottom: number,
      left: number,
    |},
  |};

  declare class Measure extends React$Component<{|
    client?: boolean,
    offset?: boolean,
    scroll?: boolean,
    bounds?: boolean,
    margin?: boolean,
    innerRef?: (HTMLElement) => void,
    onResize?: (ContentRect) => void,
    children?: ({|
      measureRef: () => void,
      measure: () => void,
      contentRect: ContentRect,
    |}) => React$Node,
  |}> {}

  declare export default typeof Measure;
}
