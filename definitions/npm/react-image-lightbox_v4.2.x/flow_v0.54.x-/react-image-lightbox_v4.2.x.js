declare module "react-image-lightbox" {
  declare type Props = {
    mainSrc: string,
    onCloseRequest: () => void,
    prevSrc?: string,
    nextSrc?: string,
    mainSrcThumbnail?: string,
    prevSrcThumbnail?: string,
    nextSrcThumbnail?: string,
    onMovePrevRequeest?: () => void,
    onMoveNextRequest?: () => void,
    onImageLoadError?: (
      imageSrc: string,
      srcType: string,
      errorEvent: Error
    ) => void,
    imageLoadErrorMessage?: React$Node,
    onAfterOpen?: () => void,
    discourageDownloads?: boolean,
    animationDisabled?: boolean,
    animationOnKeyInput?: boolean,
    animationDuration?: number,
    keyRepeatLimit?: number,
    keyRepeatKeyupBonus?: number,
    imageTitle?: React$Node,
    imageCaption?: React$Node,
    imageCrossOrigin?: string,
    toolbarButtons?: Array<React$Node>,
    reactModalStyle?: Object, // TODO: Improve
    reactModalProps?: Object, // TODO: Improve
    imagePadding?: number,
    clickOutsideToClose?: boolean,
    enableZoom?: boolean,
    wrapperClassName?: string,
    nextLabel?: string,
    prevLabel?: string,
    zoomInLabel?: string,
    zoomOutLabel?: string,
    closeLabel?: string
  };

  declare type DefaultProps = {
    imageTitle: string,
    imageCaption: React$Node,
    toolbarButtons: Array<React$Node>,
    reactModalProps: Object, // TODO: Improve
    animationDisabled: boolean,
    animationDuration: number,
    animationOnKeyInput: boolean,
    clickOutsideToClose: boolean,
    closeLabel: string,
    discourageDownloads: boolean,
    enableZoom: boolean,
    imagePadding: number,
    imageCrossOrigin: string,
    keyRepeatKeyupBonus: number,
    keyRepeatLimit: number,
    mainSrcThumbnail: string,
    nextLabel: string,
    nextSrc: string,
    nextSrcThumbnail: string,
    onAfterOpen: () => void,
    onImageLoadError: () => void,
    onMoveNextRequest: () => void,
    onMovePrevRequest: () => void,
    prevLabel: string,
    prevSrc: string,
    prevSrcThumbnail: string,
    reactModalStyle: Object, // TODO: Improve
    wrapperClassName: string,
    zoomInLabel: string,
    zoomOutLabel: string,
    imageLoadErrorMessage: string
  };

  declare export default class Lightbox extends React$Component<Props> {
    static defaultProps: DefaultProps;
  }
}
