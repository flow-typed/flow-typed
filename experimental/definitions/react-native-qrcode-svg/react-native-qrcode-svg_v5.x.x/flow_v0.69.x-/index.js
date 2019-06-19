declare module "react-native-qrcode-svg" {
  declare export type ImageSourcePropType = number | { uri: string };

  declare export type QRCodeSvgProps = {
    /* what the qr code stands for */
    value?: string,
    /* the whole component size */
    size?: number,
    /* the color of the cell */
    color?: string,
    /* the color of the background */
    backgroundColor?: string,
    /* an image source object. example {uri: 'base64string'} or {require('pathToImage')} */
    logo?: ImageSourcePropType,
    /* logo size in pixels */
    logoSize?: number,
    /* the logo gets a filled rectangular background with this color. Use 'transparent'
           if your logo already has its own backdrop. Default = same as backgroundColor */
    logoBackgroundColor?: string,
    /* logo's distance to its wrapper */
    logoMargin?: number,
    /* the border-radius of logo image */
    logoBorderRadius?: number,
    /* get svg ref for further usage */
    getRef?: (ref: any) => void,
    /* error correction level */
    ecl?: "L" | "M" | "Q" | "H"
  };

  declare class QRCodeSvg extends React$PureComponent<QRCodeSvgProps> {}

  declare export default typeof QRCodeSvg;
}
