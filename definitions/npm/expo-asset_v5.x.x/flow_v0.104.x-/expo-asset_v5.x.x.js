declare module 'expo-asset' {
  declare export type AssetMetadata = {|
    hash: string,
    name: string,
    type: string,
    httpServerLocation: string,
    scales: Array<number>,

    width?: number,
    height?: number,
    uri?: string,
    fileHashes?: Array<string>,
    fileUris?: Array<string>,
  |};

  declare export type AssetDescriptor = {|
    name: string,
    type: string,
    uri: string,

    hash?: ?string,
    width?: ?number,
    height?: ?number,
  |};

  declare export class Asset {
    constructor(options: AssetDescriptor): Asset;
    downloadAsync(): Promise<void>;

    name: string;
    type: string;
    uri: string;
    downloaded: boolean;
    downloading: boolean;
    hash: ?string;
    height: ?number;
    width: ?number;
    localUri: ?string;

    static fromMetadata(meta: AssetMetadata): Asset;
    static fromModule(virtualAssetModule: number | string): Asset;
    static fromURI(uri: string): Asset;
    // https://github.com/facebook/react-native/blob/654868da336ab34ea851cada943492932009ec5d/Libraries/Image/ImageSource.js#L87-L91
    // number === require('a.png')
    static loadAsync(moduleId: number | Array<number>): Promise<Array<void>>;
  }
}
