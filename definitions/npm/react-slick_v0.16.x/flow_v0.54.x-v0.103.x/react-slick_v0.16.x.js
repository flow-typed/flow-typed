declare module "react-slick" {
  declare export type CustomArrowProps = {
    className?: string,
    style?: CSSStyleDeclaration,
    onClick?: (e: SyntheticMouseEvent<*>) => void,
    currentSlide?: number,
    slideCount?: number
  };

  declare export type ResponsiveObject = {
    breakpoint: number,
    settings: "unslick" | Props
  };

  declare export type SwipeDirection =
    | "left"
    | "down"
    | "right"
    | "up"
    | string;

  declare export type Props = {
    accessibility?: boolean,
    className?: string,
    adaptiveHeight?: boolean,
    arrows?: boolean,
    nextArrow?: React$Element<any>,
    prevArrow?: React$Element<any>,
    autoplay?: boolean,
    autoplaySpeed?: number,
    centerMode?: boolean,
    centerPadding?: string,
    cssEase?: string,
    customPaging?: (index: number) => React$Element<any>,
    dots?: boolean,
    dotsClass?: string,
    draggable?: boolean,
    easing?: string,
    fade?: boolean,
    focusOnSelect?: boolean,
    infinite?: boolean,
    initialSlide?: number,
    lazyLoad?: boolean,
    pauseOnHover?: boolean,
    responsive?: Array<ResponsiveObject>,
    rtl?: boolean,
    slide?: string,
    slidesToShow?: number,
    slidesToScroll?: number,
    speed?: number,
    swipe?: boolean,
    swipeToSlide?: boolean,
    touchMove?: boolean,
    touchThreshold?: number,
    variableWidth?: boolean,
    useCSS?: boolean,
    vertical?: boolean,
    afterChange?: (currentSlide: number) => void,
    beforeChange?: (currentSlide: number, nextSlide: number) => void,
    slickGoTo?: number,
    edgeFriction?: number,
    waitForAnimate?: boolean,
    edgeEvent?: (swipeDirection: SwipeDirection) => void,
    swipeEvent?: (swipeDirection: SwipeDirection) => void,
    init?: () => void
  };

  declare export default class Slider extends React$Component<Props> {
    slickNext(): void;
    slickPrev(): void;
    slickGoTo(slideNumber: number): void;
  }
}
