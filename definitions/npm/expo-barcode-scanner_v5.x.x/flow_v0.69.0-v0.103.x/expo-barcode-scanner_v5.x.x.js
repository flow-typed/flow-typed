declare module 'expo-barcode-scanner/@@react-native' {
  declare export type ViewProps = {};
}

declare module 'expo-barcode-scanner/build/ExpoBarCodeScannerModule' {
  declare opaque type BCT$aztec: number;
  declare opaque type BCT$code39: number;
  declare opaque type BCT$code93: number;
  declare opaque type BCT$code128: number;
  declare opaque type BCT$datamatrix: number;
  declare opaque type BCT$ean13: number;
  declare opaque type BCT$ean8: number;
  declare opaque type BCT$itf14: number;
  declare opaque type BCT$pdf417: number;
  declare opaque type BCT$upc_e: number;
  declare opaque type BCT$qr: number;
  declare opaque type BCT$code138: number;
  declare opaque type BCT$code39mod43: number;
  declare opaque type BCT$interleaved2of5: number;
  declare opaque type BCT$codabar: number;
  declare opaque type BCT$maxicode: number;
  declare opaque type BCT$rss14: number;
  declare opaque type BCT$rssexpanded: number;
  declare opaque type BCT$upc_a: number;
  declare opaque type BCT$upc_ean: number;

  declare export type BarCodeTypeValues =
    | BCT$aztec
    | BCT$code39
    | BCT$code93
    | BCT$code128
    | BCT$datamatrix
    | BCT$ean13
    | BCT$ean8
    | BCT$itf14
    | BCT$pdf417
    | BCT$upc_e
    | BCT$qr
    | BCT$code138
    | BCT$code39mod43
    | BCT$interleaved2of5
    | BCT$codabar
    | BCT$maxicode
    | BCT$rss14
    | BCT$rssexpanded
    | BCT$upc_a
    | BCT$upc_ean;

  declare export type BarCodeType = $ReadOnly<{|
    aztec: BCT$aztec,
    code39: BCT$code39,
    code93: BCT$code93,
    code128: BCT$code128,
    datamatrix: BCT$datamatrix,
    ean13: BCT$ean13,
    ean8: BCT$ean8,
    itf14: BCT$itf14,
    pdf417: BCT$pdf417,
    upc_e: BCT$upc_e,
    qr: BCT$qr,
    // iOS Only
    code138?: BCT$code138,
    code39mod43?: BCT$code39mod43,
    interleaved2of5?: BCT$interleaved2of5,
    // Android Only
    codabar?: BCT$codabar,
    maxicode?: BCT$maxicode,
    rss14?: BCT$rss14,
    rssexpanded?: BCT$rssexpanded,
    upc_a?: BCT$upc_a,
    upc_ean?: BCT$upc_ean,
  |}>;

  declare opaque type Type$front: number;
  declare opaque type Type$back: number;

  declare export type Type = {|
    front: Type$front,
    back: Type$back,
  |};
}
declare module 'expo-barcode-scanner' {
  import type { ViewProps } from 'expo-barcode-scanner/@@react-native';
  import type {
    BarCodeTypeValues as _BarCodeTypeValues,
    BarCodeType,
    Type,
  } from 'expo-barcode-scanner/build/ExpoBarCodeScannerModule';

  declare export type BarCodeTypeValues = _BarCodeTypeValues;

  declare export type BarCodeEvent = {|
    type: BarCodeTypeValues,
    data: string,
  |};

  declare export type BarCodeScannedCallback = (event: BarCodeEvent) => mixed;

  declare export type BarCodeScannerProps = ViewProps & {
    type?: $Values<Type>,
    barCodeTypes?: Array<BarCodeTypeValues>,
    onBarCodeScanned: BarCodeScannedCallback,
  };

  declare export class BarCodeScanner extends React$Component<BarCodeScannerProps> {
    static scanFromURLAsync(
      url: string,
      barCodeTypes?: Array<BarCodeTypeValues>
    ): Promise<BarCodeEvent>;

    static Constants: $ReadOnly<{|
      BarCodeType: BarCodeType,
      Type: Type,
    |}>;
  }
}
