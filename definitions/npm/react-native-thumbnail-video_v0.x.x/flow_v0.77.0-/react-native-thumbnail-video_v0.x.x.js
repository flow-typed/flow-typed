// @flow

type PreviewTypes = $ReadOnly<{|
  default: "default",
  high: "hqdefault",
  medium: "mqdefault",
  standard: "sddefault",
  maximum: "maxresdefault"
|}>;

type Units = number | string;

declare module "react-native-thumbnail-video" {
  declare export type TYPES = PreviewTypes;
  declare export type UnitLength = Units;

  declare export type ThumbnailProps = $ReadOnly<{
    url: string,
    children?: ?React$Node,
    containerStyle?: ?Object,
    iconStyle?: ?Object,
    imageHeight?: ?Units,
    imageWidth?: ?Units,
    onPress?: ?(event?: any) => void,
    onPressError?: ?(?Error) => void,
    style?: ?Object,
    type?: ?$Keys<PreviewTypes>,
    showPlayIcon?: boolean
  }>;

  declare export type ThumbnailState = {|
    videoId: string
  |};

  declare export class Thumbnail extends React$Component<
    ThumbnailProps,
    ThumbnailState
  > {}
}

declare module "react-native-thumbnail-video/src/helpers" {
  declare export function getVideoId(url: string): ?string;
}
