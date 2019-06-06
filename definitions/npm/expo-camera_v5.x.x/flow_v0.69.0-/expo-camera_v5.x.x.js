declare module 'expo-camera/build/ExponentCameraManage' {
  declare opaque type Front: number;
  declare opaque type Back: number;
  declare export type TypeToFacingMode = {| +front: Front, +back: Back |};

  declare opaque type FM$Auto: number;
  declare opaque type FM$Off: number;
  declare opaque type FM$On: number;
  declare opaque type FM$Torch: number;
  declare export type FlashMode = {|
    +auto: FM$Auto,
    +off: FM$Off,
    +on: FM$On,
    +torch: FM$Torch,
  |};

  declare opaque type AF$Off: number;
  declare opaque type AF$On: number;
  declare export type AutoFocus = {| +off: AF$Off, +on: AF$On |};

  declare opaque type VS$off: number;
  declare opaque type VS$standard: number;
  declare opaque type VS$cinematic: number;
  declare opaque type VS$auto: number;
  declare export type VideoStabilization = {|
    +off: VS$off,
    +standard: VS$standard,
    +cinematic: VS$cinematic,
    +auto: VS$auto,
  |};

  declare opaque type VQ$480: number;
  declare opaque type VQ$720: number;
  declare opaque type VQ$1080: number;
  declare opaque type VQ$2160: number;
  declare opaque type VQ$4x3: number;
  declare export type VideoQuality = {|
    +'480p': VQ$480,
    +'720p': VQ$720,
    +'1080p': VQ$1080,
    +'2160p': VQ$2160,
    +'4:3': VQ$4x3,
  |};

  declare opaque type WB$auto: number;
  declare opaque type WB$cloudy: number;
  declare opaque type WB$fluorescent: number;
  declare opaque type WB$incandescent: number;
  declare opaque type WB$shadow: number;
  declare opaque type WB$sunny: number;
  declare export type WhiteBalance = {|
    +auto: WB$auto,
    +cloudy: WB$cloudy,
    +fluorescent: WB$fluorescent,
    +incandescent: WB$incandescent,
    +shadow: WB$shadow,
    +sunny: WB$sunny,
  |};
}

declare module 'expo-camera' {
  import type {
    TypeToFacingMode,
    FlashMode,
    AutoFocus,
    VideoStabilization,
    WhiteBalance,
    VideoQuality,
  } from 'expo-camera/build/ExponentCameraManage';

  declare export var Constants: {
    Type: TypeToFacingMode,
    FlashMode: FlashMode,
    AutoFocus: AutoFocus,
    WhiteBalance: WhiteBalance,
    VideoQuality: VideoQuality,
    // iOS Only
    VideoStabilization: VideoStabilization,
  };

  declare export type MountError = {
    +message: string,
  };

  declare export type BarCodeScanningResult = {|
    +type: string,
    +data: string,
  |};

  declare export type FaceDetectionResult = {
    // https://docs.expo.io/versions/latest/sdk/facedetector/#event-shape
    faces: Array<mixed>,
  };

  // https://docs.expo.io/versions/latest/sdk/camera/#api
  declare export type CameraProps = $ReadOnly<{
    // Android only
    useCamera2Api?: boolean,
    ratio?: string,

    // iOS only
    videoStabilizationMode?: $Values<VideoStabilization>,

    // Common
    children?: React$Node,
    type?: $Values<TypeToFacingMode>,
    flashMode?: $Values<FlashMode>,
    autoFocus?: $Values<AutoFocus>,
    whiteBalance?: $Values<WhiteBalance>,
    zoom?: number,
    focusDepth?: number,
    pictureSize?: string,

    barCodeScannerSettings?: {
      barCodeTypes: mixed,
    },

    // https://docs.expo.io/versions/latest/sdk/facedetector/#settings
    faceDetectorSettings?: {
      mode: mixed,
      detectLandmarks: mixed,
      runClassifications: mixed,
    },

    onCameraReady?: () => mixed,
    onMountError?: (event: MountError) => mixed,
    onBarCodeScanned?: (scanningResult: BarCodeScanningResult) => mixed,
    onFacesDetected?: (faces: FaceDetectionResult) => mixed,
  }>;

  declare export type PictureOptions = {|
    quality?: number,
    base64?: boolean,
    exif?: boolean,
    onPictureSaved?: () => mixed,
    // Android only
    skipProcessing?: boolean,
  |};

  declare export type CapturedPicture = $ReadOnly<{|
    width: number,
    height: number,
    uri: string,
    base64?: string,
    exif?: mixed,
  |}>;

  declare export type RecordingOptions = {|
    quality?: $Values<VideoQuality>,
    maxDuration?: number,
    maxFileSize?: number,
    mute?: boolean,
  |};

  declare export type RecordedVideo = $ReadOnly<{|
    uri: string,
  |}>;

  declare export class Camera extends React$Component<CameraProps> {
    static Constants: typeof Constants;

    takePictureAsync(options?: PictureOptions): Promise<CapturedPicture>;

    recordAsync(options?: RecordingOptions): Promise<RecordedVideo>;
    stopRecording(): void;

    pausePreview(): void;
    resumePreview(): void;

    getAvailablePictureSizesAsync(ratio?: string): Promise<Array<string>>;
    // Android only
    getSupportedRatiosAsync(): Promise<Array<string>>;
  }
}
