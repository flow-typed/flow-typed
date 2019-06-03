declare module "react-visibility-sensor" {
  declare export type Rect = {
    top?: number,
    left?: number,
    bottom?: number,
    right?: number
  };

  declare export type VisibilitySensorProps = {
    active?: boolean,
    partialVisibility?: boolean,
    offset?: Rect,
    minTopValue?: number,
    intervalCheck?: boolean,
    intervalDelay?: number,
    scrollCheck?: boolean,
    scrollDelay?: number,
    scrollThrottle?: number,
    resizeCheck?: boolean,
    resizeDelay?: number,
    resizeThrottle?: number,
    containment?: any,
    delayedCall?: boolean,
    onChange: (isVisible: boolean, visibilityRect?: Rect) => void
  };

  declare export default class VisibilitySensor extends React$Component<VisibilitySensorProps> {}
}
