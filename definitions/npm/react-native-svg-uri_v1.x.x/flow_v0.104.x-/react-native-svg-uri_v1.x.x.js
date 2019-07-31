declare module "react-native-svg-uri" {
  // These types are copied directly from the react-native.
  // Importing them in this libdef causes a loss in type coverage.

  // https://github.com/facebook/react-native/blob/e7ddc59019f737f98b7be6e9abc7106be3a6cdde/Libraries/Image/ImageSource.js#L91

  declare export type ImageURISource = { uri?: ?string, ... };

  declare export type ImageSource =
    | number
    | ImageURISource
    | Array<ImageURISource>;

  ///////////////////////////////////////////////////////////////////////////////////////////

  declare export type SvgUriProps = {
   width?: number | string,
   height?: number | string,
   source?: ImageSource,
   /**
    * Direct svg code to render. Similar to inline svg
    */
   svgXmlData?: string,
   /**
    * Fill color for the svg object
    */
   fill?: string,
   /**
    * Invoked when load completes successfully when  source.uri is remote address 'http://'
    */
   onLoad?: () => any,
   /**
    * Fill the entire svg element with same color
    */
   fillAll?: boolean,
   ...
  };

  declare class SvgUri extends React$Component<SvgUriProps> {}

  declare export default typeof SvgUri;
}
