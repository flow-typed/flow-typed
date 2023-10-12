declare module "react-native-vision-camera" {
  import type { ViewProps } from "react-native";

  /**
   * Represents the camera device position.
   *
   * * `"back"`: Indicates that the device is physically located on the back of the system hardware
   * * `"front"`: Indicates that the device is physically located on the front of the system hardware
   *
   * #### iOS only
   * * `"unspecified"`: Indicates that the device's position relative to the system hardware is unspecified
   *
   * #### Android only
   * * `"external"`: The camera device is an external camera, and has no fixed facing relative to the device's screen. (Android only)
   */
  declare type CameraPosition = "front" | "back" | "unspecified" | "external";

  /**
   * Represents the pixel format of a `Frame`.
   * * `420v`: 420 YpCbCr 8 Bi-Planar Video Range
   * * `420f`: 420 YpCbCr 8 Bi-Planar Full Range
   * * `x420`: 420 YpCbCr 10 Bi-Planar Video Range
   */
  declare type PixelFormat = "420f" | "420v" | "x420" | "x422";

  /**
   * Indentifiers for a physical camera (one that actually exists on the back/front of the device)
   *
   * * `"ultra-wide-angle-camera"`: A built-in camera with a shorter focal length than that of a wide-angle camera. (focal length between below 24mm)
   * * `"wide-angle-camera"`: A built-in wide-angle camera. (focal length between 24mm and 35mm)
   * * `"telephoto-camera"`: A built-in camera device with a longer focal length than a wide-angle camera. (focal length between above 85mm)
   */
  declare type PhysicalCameraDeviceType = "ultra-wide-angle-camera" | "wide-angle-camera" | "telephoto-camera";

  /**
   * Indentifiers for a logical camera (Combinations of multiple physical cameras to create a single logical camera).
   *
   * * `"dual-camera"`: A combination of wide-angle and telephoto cameras that creates a capture device.
   * * `"dual-wide-camera"`: A device that consists of two cameras of fixed focal length, one ultrawide angle and one wide angle.
   * * `"triple-camera"`: A device that consists of three cameras of fixed focal length, one ultrawide angle, one wide angle, and one telephoto.
   */
  declare type LogicalCameraDeviceType = "dual-camera" | "dual-wide-camera" | "triple-camera";

  /**
   * Parses an array of physical device types into a single {@linkcode PhysicalCameraDeviceType} or {@linkcode LogicalCameraDeviceType}, depending what matches.
   * @method
   */
  declare var parsePhysicalDeviceTypes: (
    physicalDeviceTypes: PhysicalCameraDeviceType[]
  ) => PhysicalCameraDeviceType | LogicalCameraDeviceType;

  /**
   * Indicates a format's color space.
   *
   * #### The following colorspaces are available on iOS:
   * * `"srgb"`: The sGRB color space.
   * * `"p3-d65"`: The P3 D65 wide color space which uses Illuminant D65 as the white point
   * * `"hlg-bt2020"`: The BT2020 wide color space which uses Illuminant D65 as the white point and Hybrid Log-Gamma as the transfer function
   *
   * > See ["AVCaptureColorSpace"](https://developer.apple.com/documentation/avfoundation/avcapturecolorspace) for more information.
   *
   * #### The following colorspaces are available on Android:
   * * `"yuv"`: The Multi-plane Android YCbCr color space. (YUV 420_888, 422_888 or 444_888)
   * * `"jpeg"`: The compressed JPEG color space.
   * * `"jpeg-depth"`: The compressed JPEG color space including depth data.
   * * `"raw"`: The Camera's RAW sensor color space. (Single-channel Bayer-mosaic image, usually 16 bit)
   * * `"heic"`: The compressed HEIC color space.
   * * `"private"`: The Android private opaque image format. (The choices of the actual format and pixel data layout are entirely up to the device-specific and framework internal implementations, and may vary depending on use cases even for the same device. These buffers are not directly accessible to the application)
   * * `"depth-16"`: The Android dense depth image format (16 bit)
   * * `"unknown"`: Placeholder for an unknown image/pixel format. [Edit this file](https://github.com/mrousavy/react-native-vision-camera/edit/main/android/src/main/java/com/mrousavy/camera/parsers/ImageFormat+String.kt) to add a name for the unknown format.
   *
   * > See ["Android Color Formats"](https://jbit.net/Android_Colors/) for more information.
   */
  declare type ColorSpace =
    | "hlg-bt2020"
    | "p3-d65"
    | "srgb"
    | "yuv"
    | "jpeg"
    | "jpeg-depth"
    | "raw"
    | "heic"
    | "private"
    | "depth-16"
    | "unknown";

  /**
   * Indicates a format's autofocus system.
   *
   * * `"none"`: Indicates that autofocus is not available
   * * `"contrast-detection"`: Indicates that autofocus is achieved by contrast detection. Contrast detection performs a focus scan to find the optimal position
   * * `"phase-detection"`: Indicates that autofocus is achieved by phase detection. Phase detection has the ability to achieve focus in many cases without a focus scan. Phase detection autofocus is typically less visually intrusive than contrast detection autofocus
   */
  declare type AutoFocusSystem = "contrast-detection" | "phase-detection" | "none";

  /**
   * Indicates a format's supported video stabilization mode
   *
   * * `"off"`: Indicates that video should not be stabilized
   * * `"standard"`: Indicates that video should be stabilized using the standard video stabilization algorithm introduced with iOS 5.0. Standard video stabilization has a reduced field of view. Enabling video stabilization may introduce additional latency into the video capture pipeline
   * * `"cinematic"`: Indicates that video should be stabilized using the cinematic stabilization algorithm for more dramatic results. Cinematic video stabilization has a reduced field of view compared to standard video stabilization. Enabling cinematic video stabilization introduces much more latency into the video capture pipeline than standard video stabilization and consumes significantly more system memory. Use narrow or identical min and max frame durations in conjunction with this mode
   * * `"cinematic-extended"`: Indicates that the video should be stabilized using the extended cinematic stabilization algorithm. Enabling extended cinematic stabilization introduces longer latency into the video capture pipeline compared to the AVCaptureVideoStabilizationModeCinematic and consumes more memory, but yields improved stability. It is recommended to use identical or similar min and max frame durations in conjunction with this mode (iOS 13.0+)
   * * `"auto"`: Indicates that the most appropriate video stabilization mode for the device and format should be chosen automatically
   */
  declare type VideoStabilizationMode = "off" | "standard" | "cinematic" | "cinematic-extended" | "auto";
  declare interface FrameRateRange {
    minFrameRate: number;
    maxFrameRate: number;
  }

  /**
   * A Camera Device's video format. Do not create instances of this type yourself, only use {@linkcode Camera.getAvailableCameraDevices | Camera.getAvailableCameraDevices()}.
   */
  declare type CameraDeviceFormat = {|
    /**
     * The height of the highest resolution a still image (photo) can be produced in
     */
    photoHeight: number,

    /**
     * The width of the highest resolution a still image (photo) can be produced in
     */
    photoWidth: number,

    /**
     * The video resolutions's height
     */
    videoHeight?: number,

    /**
     * The video resolution's width
     */
    videoWidth?: number,

    /**
     * A boolean value specifying whether this format supports the highest possible photo quality that can be delivered on the current platform.
     * @platform iOS 13.0+
     */
    isHighestPhotoQualitySupported?: boolean,

    /**
     * Maximum supported ISO value
     */
    maxISO: number,

    /**
     * Minimum supported ISO value
     */
    minISO: number,

    /**
     * The video field of view in degrees
     */
    fieldOfView: number,

    /**
     * The maximum zoom factor (e.g. `128`)
     */
    maxZoom: number,

    /**
     * The available color spaces.
     *
     * Note: On Android, this will always be only `["yuv"]`
     */
    colorSpaces: ColorSpace[],

    /**
     * Specifies whether this format supports HDR mode for video capture
     */
    supportsVideoHDR: boolean,

    /**
     * Specifies whether this format supports HDR mode for photo capture
     */
    supportsPhotoHDR: boolean,

    /**
     * All available frame rate ranges. You can query this to find the highest frame rate available
     */
    frameRateRanges: FrameRateRange[],

    /**
     * Specifies this format's auto focus system.
     */
    autoFocusSystem: AutoFocusSystem,

    /**
     * All supported video stabilization modes
     */
    videoStabilizationModes: VideoStabilizationMode[],

    /**
     * Specifies this format's pixel format. The pixel format specifies how the individual pixels are interpreted as a visual image.
     *
     * The most common format is `420v`. Some formats (like `x420`) are not compatible with some frame processor plugins (e.g. MLKit)
     */
    pixelFormat: PixelFormat
  |};

  /**
   * Represents a camera device discovered by the {@linkcode Camera.getAvailableCameraDevices | Camera.getAvailableCameraDevices()} function
   */
  declare interface CameraDevice {
    /**
     * The native ID of the camera device instance.
     */
    id: string;

    /**
     * The physical devices this `CameraDevice` contains.
     *
     * * If this camera device is a **logical camera** (combination of multiple physical cameras), there are multiple cameras in this array.
     * * If this camera device is a **physical camera**, there is only a single element in this array.
     *
     * You can check if the camera is a logical multi-camera by using the `isMultiCam` property.
     */
    devices: PhysicalCameraDeviceType[];

    /**
     * Specifies the physical position of this camera. (back or front)
     */
    position: CameraPosition;

    /**
     * A friendly localized name describing the camera.
     */
    name: string;

    /**
     * Specifies whether this camera supports enabling flash for photo capture.
     */
    hasFlash: boolean;

    /**
     * Specifies whether this camera supports continuously enabling the flash to act like a torch (flash with video capture)
     */
    hasTorch: boolean;

    /**
     * A property indicating whether the device is a virtual multi-camera consisting of multiple combined physical cameras.
     *
     * Examples:
     * * The Dual Camera, which supports seamlessly switching between a wide and telephoto camera while zooming and generating depth data from the disparities between the different points of view of the physical cameras.
     * * The TrueDepth Camera, which generates depth data from disparities between a YUV camera and an Infrared camera pointed in the same direction.
     */
    isMultiCam: boolean;

    /**
     * Minimum available zoom factor (e.g. `1`)
     */
    minZoom: number;

    /**
     * Maximum available zoom factor (e.g. `128`)
     */
    maxZoom: number;

    /**
     * The zoom factor where the camera is "neutral".
     *
     * * For single-physical cameras this property is always `1.0`.
     * * For multi cameras this property is a value between `minZoom` and `maxZoom`, where the camera is in _wide-angle_ mode and hasn't switched to the _ultra-wide-angle_ ("fish-eye") or telephoto camera yet.
     *
     * Use this value as an initial value for the zoom property if you implement custom zoom. (e.g. reanimated shared value should be initially set to this value)
     * @example const device = ...
     *
     * const zoom = useSharedValue(device.neutralZoom) // <-- initial value so it doesn't start at ultra-wide
     * const cameraProps = useAnimatedProps(() => ({
     *   zoom: zoom.value
     * }))
     */
    neutralZoom: number;

    /**
     * All available formats for this camera device. Use this to find the best format for your use case and set it to the Camera's {@linkcode CameraProps.format | Camera's .format} property.
     *
     * See [the Camera Formats documentation](https://mrousavy.github.io/react-native-vision-camera/docs/guides/formats) for more information about Camera Formats.
     */
    formats: CameraDeviceFormat[];

    /**
     * Whether this camera device supports using Video Recordings (`video={true}`) and Frame Processors (`frameProcessor={...}`) at the same time. See ["The `supportsParallelVideoProcessing` prop"](https://react-native-vision-camera.com/docs/guides/devices#the-supportsparallelvideoprocessing-prop) for more information.
     *
     * If this property is `false`, you can only enable `video` or add a `frameProcessor`, but not both.
     *
     * * On iOS this value is always `true`.
     * * On newer Android devices this value is always `true`.
     * * On older Android devices this value is `false` if the Camera's hardware level is `LEGACY` or `LIMITED`, `true` otherwise. (See [`INFO_SUPPORTED_HARDWARE_LEVEL`](https://developer.android.com/reference/android/hardware/camera2/CameraCharacteristics#INFO_SUPPORTED_HARDWARE_LEVEL) or [the tables at "Regular capture"](https://developer.android.com/reference/android/hardware/camera2/CameraDevice#regular-capture))
     */
    supportsParallelVideoProcessing: boolean;

    /**
     * Whether this camera device supports low light boost.
     */
    supportsLowLightBoost: boolean;

    /**
     * Whether this camera supports taking photos with depth data.
     *
     * **! Work in Progress !**
     */
    supportsDepthCapture: boolean;

    /**
     * Whether this camera supports taking photos in RAW format
     *
     * **! Work in Progress !**
     */
    supportsRawCapture: boolean;

    /**
     * Specifies whether this device supports focusing ({@linkcode Camera.focus | Camera.focus(...)})
     */
    supportsFocus: boolean;
  }
  declare type PermissionError = "permission/microphone-permission-denied" | "permission/camera-permission-denied";
  declare type ParameterError =
    | "parameter/invalid-parameter"
    | "parameter/unsupported-os"
    | "parameter/unsupported-output"
    | "parameter/unsupported-input"
    | "parameter/invalid-combination";
  declare type DeviceError =
    | "device/configuration-error"
    | "device/no-device"
    | "device/invalid-device"
    | "device/parallel-video-processing-not-supported"
    | "device/torch-unavailable"
    | "device/microphone-unavailable"
    | "device/low-light-boost-not-supported"
    | "device/focus-not-supported"
    | "device/camera-not-available-on-simulator";
  declare type FrameProcessorError = "frame-processor/unavailable";
  declare type FormatError =
    | "format/invalid-fps"
    | "format/invalid-hdr"
    | "format/invalid-low-light-boost"
    | "format/invalid-format"
    | "format/invalid-color-space"
    | "format/invalid-preset";
  declare type SessionError =
    | "session/camera-not-ready"
    | "session/audio-session-setup-failed"
    | "session/audio-in-use-by-other-app"
    | "session/audio-session-failed-to-activate";
  declare type CaptureError =
    | "capture/invalid-photo-format"
    | "capture/encoder-error"
    | "capture/muxer-error"
    | "capture/recording-in-progress"
    | "capture/no-recording-in-progress"
    | "capture/file-io-error"
    | "capture/create-temp-file-error"
    | "capture/invalid-video-options"
    | "capture/create-recorder-error"
    | "capture/recorder-error"
    | "capture/no-valid-data"
    | "capture/inactive-source"
    | "capture/insufficient-storage"
    | "capture/file-size-limit-reached"
    | "capture/invalid-photo-codec"
    | "capture/not-bound-error"
    | "capture/capture-type-not-supported"
    | "capture/video-not-enabled"
    | "capture/photo-not-enabled"
    | "capture/aborted"
    | "capture/unknown";
  declare type SystemError = "system/no-camera-manager" | "system/view-not-found";
  declare type UnknownError = "unknown/unknown";

  /**
   * Represents a JSON-style error cause. This contains native `NSError`/`Throwable` information, and can have recursive {@linkcode ErrorWithCause.cause | .cause} properties until the ultimate cause has been found.
   */
  declare interface ErrorWithCause {
    /**
     * The native error's code.
     *
     * * iOS: `NSError.code`
     * * Android: N/A
     */
    code?: number;

    /**
     * The native error's domain.
     *
     * * iOS: `NSError.domain`
     * * Android: N/A
     */
    domain?: string;

    /**
     * The native error description
     *
     * * iOS: `NSError.message`
     * * Android: `Throwable.message`
     */
    message: string;

    /**
     * Optional additional details
     *
     * * iOS: `NSError.userInfo`
     * * Android: N/A
     */
    details?: { [key: string]: mixed, ... };

    /**
     * Optional Java stacktrace
     *
     * * iOS: N/A
     * * Android: `Throwable.stacktrace.toString()`
     */
    stacktrace?: string;

    /**
     * Optional additional cause for nested errors
     *
     * * iOS: N/A
     * * Android: `Throwable.cause`
     */
    cause?: ErrorWithCause;
  }
  declare type CameraErrorCode =
    | PermissionError
    | ParameterError
    | DeviceError
    | FrameProcessorError
    | FormatError
    | SessionError
    | CaptureError
    | SystemError
    | UnknownError;
  declare class CameraError<TCode: CameraErrorCode> extends Error {
    code: TCode;
    message: string;
    cause: Error | void;

    /**
     * @internal
     */
    constructor(code: TCode, message: string, cause?: ErrorWithCause): this;
    toString(): string;
  }

  /**
   * Represents any kind of error that occurred while trying to capture a video or photo.
   *
   * See the ["Camera Errors" documentation](https://react-native-vision-camera.com/docs/guides/errors) for more information about Camera Errors.
   */
  declare class CameraCaptureError extends CameraError<CaptureError> {}

  /**
   * Represents any kind of error that occurred in the Camera View Module.
   *
   * See the ["Camera Errors" documentation](https://react-native-vision-camera.com/docs/guides/errors) for more information about Camera Errors.
   */
  declare class CameraRuntimeError
    extends
      CameraError<
        | PermissionError
        | ParameterError
        | DeviceError
        | FormatError
        | FrameProcessorError
        | SessionError
        | SystemError
        | UnknownError
      > {}

  /**
   * Checks if the given `error` is of type {@linkcode ErrorWithCause}
   * @param {unknown} error Any unknown object to validate
   * @returns `true` if the given `error` is of type {@linkcode ErrorWithCause}
   */
  declare var isErrorWithCause: (error: mixed) => boolean;

  /**
   * Tries to parse an error coming from native to a typed JS camera error.
   * @param {CameraError} nativeError The native error instance. This is a JSON in the legacy native module architecture.
   * @returns A {@linkcode CameraRuntimeError} or {@linkcode CameraCaptureError}, or the `nativeError` itself if it's not parsable
   * @method
   */
  declare var tryParseNativeCameraError: <T>(nativeError: T) => CameraCaptureError | CameraRuntimeError | T;

  /**
   * Indicates the quality level or bit rate of the output.
   *
   * * `"cif-352x288"`: Specifies capture settings suitable for CIF quality (352 x 288 pixel) video output
   * * `"hd-1280x720"`: Specifies capture settings suitable for 720p quality (1280 x 720 pixel) video output.
   * * `"hd-1920x1080"`: Capture settings suitable for 1080p-quality (1920 x 1080 pixels) video output.
   * * `"hd-3840x2160"`: Capture settings suitable for 2160p-quality (3840 x 2160 pixels, "4k") video output.
   * * `"high"`: Specifies capture settings suitable for high-quality video and audio output.
   * * `"iframe-1280x720"`: Specifies capture settings to achieve 1280 x 720 quality iFrame H.264 video at about 40 Mbits/sec with AAC audio.
   * * `"iframe-960x540"`: Specifies capture settings to achieve 960 x 540 quality iFrame H.264 video at about 30 Mbits/sec with AAC audio.
   * * `"input-priority"`: Specifies that the capture session does not control audio and video output settings.
   * * `"low"`: Specifies capture settings suitable for output video and audio bit rates suitable for sharing over 3G.
   * * `"medium"`: Specifies capture settings suitable for output video and audio bit rates suitable for sharing over WiFi.
   * * `"photo"`: Specifies capture settings suitable for high-resolution photo quality output.
   * * `"vga-640x480"`: Specifies capture settings suitable for VGA quality (640 x 480 pixel) video output.
   */
  declare type CameraPreset =
    | "cif-352x288"
    | "hd-1280x720"
    | "hd-1920x1080"
    | "hd-3840x2160"
    | "high"
    | "iframe-1280x720"
    | "iframe-960x540"
    | "input-priority"
    | "low"
    | "medium"
    | "photo"
    | "vga-640x480";

  /**
   * A single frame, as seen by the camera.
   */
  declare interface Frame {
    /**
     * Whether the underlying buffer is still valid or not. The buffer will be released after the frame processor returns, or `close()` is called.
     */
    isValid: boolean;

    /**
     * Returns the width of the frame, in pixels.
     */
    width: number;

    /**
     * Returns the height of the frame, in pixels.
     */
    height: number;

    /**
     * Returns the amount of bytes per row.
     */
    bytesPerRow: number;

    /**
     * Returns the number of planes this frame contains.
     */
    planesCount: number;

    /**
     * Returns a string representation of the frame.
     * @example ```ts
     * console.log(frame.toString()) // -> "3840 x 2160 Frame"
     * ```
     */
    toString(): string;

    /**
     * Closes and disposes the Frame.
     * Only close frames that you have created yourself, e.g. by copying the frame you receive in a frame processor.
     * @example ```ts
     * const frameProcessor = useFrameProcessor((frame) => {
     *   const smallerCopy = resize(frame, 480, 270)
     *   // run AI ...
     *   smallerCopy.close()
     *   // don't close `frame`!
     * })
     * ```
     */
    close(): void;
  }
  declare interface FrameProcessorPerformanceSuggestion {
    type: "can-use-higher-fps" | "should-use-lower-fps";
    suggestedFrameProcessorFps: number;
  }
  declare type CameraProps = {
    ...ViewProps,

    /**
     * The Camera Device to use.
     *
     * See the [Camera Devices](https://react-native-vision-camera.com/docs/guides/devices) section in the documentation for more information about Camera Devices.
     * @example ```tsx
     * const devices = useCameraDevices('wide-angle-camera')
     * const device = devices.back
     *
     * return (
     *   <Camera
     *     device={device}
     *     isActive={true}
     *     style={StyleSheet.absoluteFill}
     *   />
     * )
     * ```
     */
    device: CameraDevice,

    /**
     * Whether the Camera should actively stream video frames, or not. See the [documentation about the `isActive` prop](https://react-native-vision-camera.com/docs/guides/lifecycle#the-isactive-prop) for more information.
     *
     * This can be compared to a Video component, where `isActive` specifies whether the video is paused or not.
     *
     * > Note: If you fully unmount the `<Camera>` component instead of using `isActive={false}`, the Camera will take a bit longer to start again. In return, it will use less resources since the Camera will be completely destroyed when unmounted.
     */
    isActive: boolean,

    /**
     * Enables **photo capture** with the `takePhoto` function (see ["Taking Photos"](https://react-native-vision-camera.com/docs/guides/capturing#taking-photos))
     */
    photo?: boolean,

    /**
     * Enables **video capture** with the `startRecording` function (see ["Recording Videos"](https://react-native-vision-camera.com/docs/guides/capturing/#recording-videos))
     *
     * Note: If you want to use `video` and `frameProcessor` simultaneously, make sure [`supportsParallelVideoProcessing`](https://react-native-vision-camera.com/docs/guides/devices#the-supportsparallelvideoprocessing-prop) is `true`.
     */
    video?: boolean,

    /**
     * Enables **audio capture** for video recordings (see ["Recording Videos"](https://react-native-vision-camera.com/docs/guides/capturing/#recording-videos))
     */
    audio?: boolean,

    /**
     * Set the current torch mode.
     *
     * Note: The torch is only available on `"back"` cameras, and isn't supported by every phone.
     * @default "off"
     */
    torch?: "off" | "on",

    /**
     * Specifies the zoom factor of the current camera, in "factor"/scale.
     *
     * This value ranges from `minZoom` (e.g. `1`) to `maxZoom` (e.g. `128`). It is recommended to set this value
     * to the CameraDevice's `neutralZoom` per default and let the user zoom out to the fish-eye (ultra-wide) camera
     * on demand (if available)
     *
     * **Note:** Linearly increasing this value always appears logarithmic to the user.
     * @default 1.0
     */
    zoom?: number,

    /**
     * Enables or disables the native pinch to zoom gesture.
     *
     * If you want to implement a custom zoom gesture, see [the Zooming with Reanimated documentation](https://react-native-vision-camera.com/docs/guides/animated).
     * @default false
     */
    enableZoomGesture?: boolean,

    /**
     * Automatically selects a camera format which best matches the given preset. Must be `undefined` when `format` is set!
     */
    preset?: CameraPreset,

    /**
     * Selects a given format. Must be `undefined` when `preset` is set!
     */
    format?: CameraDeviceFormat,

    /**
     * Specify the frames per second this camera should use. Make sure the given `format` includes a frame rate range with the given `fps`.
     *
     * Requires `format` to be set.
     */
    fps?: number,

    /**
     * Enables or disables HDR on this camera device. Make sure the given `format` supports HDR mode.
     *
     * Requires `format` to be set.
     */
    hdr?: boolean,

    /**
     * Enables or disables low-light boost on this camera device. Make sure the given `format` supports low-light boost.
     *
     * Requires `format` to be set.
     */
    lowLightBoost?: boolean,

    /**
     * Specifies the color space to use for this camera device. Make sure the given `format` contains the given `colorSpace`.
     *
     * Requires `format` to be set.
     */
    colorSpace?: ColorSpace,

    /**
     * Specifies the video stabilization mode to use for this camera device. Make sure the given `format` contains the given `videoStabilizationMode`.
     *
     * Requires `format` to be set.
     * @platform iOS
     */
    videoStabilizationMode?: VideoStabilizationMode,

    /**
     * Also captures data from depth-perception sensors. (e.g. disparity maps)
     * @default false
     */
    enableDepthData?: boolean,

    /**
     * A boolean specifying whether the photo render pipeline is prepared for portrait effects matte delivery.
     *
     * When enabling this, you must also set `enableDepthData` to `true`.
     * @platform iOS 12.0+
     * @default false
     */
    enablePortraitEffectsMatteDelivery?: boolean,

    /**
     * Indicates whether the Camera should prepare the photo pipeline to provide maximum quality photos.
     *
     * This enables:
     * * High Resolution Capture ([`isHighResolutionCaptureEnabled`](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648721-ishighresolutioncaptureenabled))
     * * Virtual Device fusion for greater detail ([`isVirtualDeviceConstituentPhotoDeliveryEnabled`](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3192189-isvirtualdeviceconstituentphotod))
     * * Dual Device fusion for greater detail ([`isDualCameraDualPhotoDeliveryEnabled`](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2873917-isdualcameradualphotodeliveryena))
     * * Sets the maximum quality prioritization to `.quality` ([`maxPhotoQualityPrioritization`](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3182995-maxphotoqualityprioritization))
     * @default false
     */
    enableHighQualityPhotos?: boolean,

    /**
     * Represents the orientation of all Camera Outputs (Photo, Video, and Frame Processor). If this value is not set, the device orientation is used.
     */
    orientation?: "portrait" | "portraitUpsideDown" | "landscapeLeft" | "landscapeRight",

    /**
     * Called when any kind of runtime error occured.
     */
    onError?: (error: CameraRuntimeError) => void,

    /**
     * Called when the camera was successfully initialized.
     */
    onInitialized?: () => void,

    /**
     * Called when a new performance suggestion for a Frame Processor is available - either if your Frame Processor is running too fast and frames are being dropped, or because it is able to run faster. Optionally, you can adjust your `frameProcessorFps` accordingly.
     */
    onFrameProcessorPerformanceSuggestionAvailable?: (suggestion: FrameProcessorPerformanceSuggestion) => void,

    /**
     * A worklet which will be called for every frame the Camera "sees". Throttle the Frame Processor's frame rate with {@linkcode frameProcessorFps}.
     *
     * > See [the Frame Processors documentation](https://mrousavy.github.io/react-native-vision-camera/docs/guides/frame-processors) for more information
     *
     * Note: If you want to use `video` and `frameProcessor` simultaneously, make sure [`supportsParallelVideoProcessing`](https://mrousavy.github.io/react-native-vision-camera/docs/guides/devices#the-supportsparallelvideoprocessing-prop) is `true`.
     *
     * @example ```tsx
     * const frameProcessor = useFrameProcessor((frame) => {
     *   'worklet'
     *   const qrCodes = scanQRCodes(frame)
     *   console.log(`Detected QR Codes: ${qrCodes}`)
     * }, [])
     *
     * return <Camera {...cameraProps} frameProcessor={frameProcessor} />
     * ```
     */
    frameProcessor?: (frame: Frame) => void,

    /**
     * Specifies the maximum frame rate the frame processor can use, independent of the Camera's frame rate (`fps` property).
     *
     * * A value of `'auto'` (default) indicates that the frame processor should execute as fast as it can, without dropping frames. This is achieved by collecting historical data for previous frame processor calls and adjusting frame rate accordingly.
     * * A value of `1` indicates that the frame processor gets executed once per second, perfect for code scanning.
     * * A value of `10` indicates that the frame processor gets executed 10 times per second, perfect for more realtime use-cases.
     * * A value of `25` indicates that the frame processor gets executed 25 times per second, perfect for high-speed realtime use-cases.
     * * ...and so on
     *
     * If you're using higher values, always check your Xcode/Android Studio Logs to make sure your frame processors are executing fast enough
     * without blocking the video recording queue.
     * @default 'auto'
     */
    frameProcessorFps?: number | "auto",
    ...
  };

  /**
   * Represents a temporary file in the local filesystem.
   */
  declare interface TemporaryFile {
    /**
     * The path of the file.
     *
     * * **Note:** If you want to consume this file (e.g. for displaying it in an `<Image>` component), you might have to add the `file://` prefix.
     *
     * * **Note:** This file might get deleted once the app closes because it lives in the temp directory.
     */
    path: string;
  }
  declare interface TakePhotoOptions {
    /**
     * Indicates how photo quality should be prioritized against speed.
     *
     * * `"quality"` Indicates that photo quality is paramount, even at the expense of shot-to-shot time
     * * `"balanced"` Indicates that photo quality and speed of delivery are balanced in priority
     * * `"speed"` Indicates that speed of photo delivery is most important, even at the expense of quality
     * @platform iOS 13.0+
     * @default "balanced"
     */
    qualityPrioritization?: "quality" | "balanced" | "speed";

    /**
     * Whether the Flash should be enabled or disabled
     * @default "auto"
     */
    flash?: "on" | "off" | "auto";

    /**
     * Specifies whether red-eye reduction should be applied automatically on flash captures.
     * @default false
     */
    enableAutoRedEyeReduction?: boolean;

    /**
     * Indicates whether still image stabilization will be employed when capturing the photo
     * @default false
     */
    enableAutoStabilization?: boolean;

    /**
     * Specifies whether the photo output should use content aware distortion correction on this photo request (at its discretion).
     * @default false
     */
    enableAutoDistortionCorrection?: boolean;

    /**
     * When set to `true`, metadata reading and mapping will be skipped. ({@linkcode PhotoFile.metadata} will be null)
     *
     * This might result in a faster capture, as metadata reading and mapping requires File IO.
     *
     * @default false
     * @platform Android
     */
    skipMetadata?: boolean;
  }

  /**
   * Represents a Photo taken by the Camera written to the local filesystem.
   *
   * Related: {@linkcode Camera.takePhoto | Camera.takePhoto()}, {@linkcode Camera.takeSnapshot | Camera.takeSnapshot()}
   */
  declare type PhotoFile = {
    width: number,
    height: number,
    isRawPhoto: boolean,
    thumbnail?: { [key: string]: mixed, ... },

    /**
     * Metadata information describing the captured image.
     * @see  [AVCapturePhoto.metadata](https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873982-metadata)
     * @see  [AndroidX ExifInterface](https://developer.android.com/reference/androidx/exifinterface/media/ExifInterface)
     */
    metadata: {
      Orientation: number,

      /**
       * @platform iOS
       */
      DPIHeight: number,

      /**
       * @platform iOS
       */
      DPIWidth: number,

      /**
       * Represents any data Apple cameras write to the metadata
       * @platform iOS
       */
      "{MakerApple}"?: { [key: string]: mixed, ... },
      "{TIFF}": {
        ResolutionUnit: number,
        Software: string,
        Make: string,
        DateTime: string,
        XResolution: number,

        /**
         * @platform iOS
         */
        HostComputer?: string,
        Model: string,
        YResolution: number,
        ...
      },
      "{Exif}": {
        DateTimeOriginal: string,
        ExposureTime: number,
        FNumber: number,
        LensSpecification: number[],
        ExposureBiasValue: number,
        ColorSpace: number,
        FocalLenIn35mmFilm: number,
        BrightnessValue: number,
        ExposureMode: number,
        LensModel: string,
        SceneType: number,
        PixelXDimension: number,
        ShutterSpeedValue: number,
        SensingMethod: number,
        SubjectArea: number[],
        ApertureValue: number,
        SubsecTimeDigitized: string,
        FocalLength: number,
        LensMake: string,
        SubsecTimeOriginal: string,
        OffsetTimeDigitized: string,
        PixelYDimension: number,
        ISOSpeedRatings: number[],
        WhiteBalance: number,
        DateTimeDigitized: string,
        OffsetTimeOriginal: string,
        ExifVersion: string,
        OffsetTime: string,
        Flash: number,
        ExposureProgram: number,
        MeteringMode: number,
        ...
      },
      ...
    },
    ...
  } & TemporaryFile;

  /**
   * Represents a Point in a 2 dimensional coordinate system.
   */
  declare interface Point {
    /**
     * The X coordinate of this Point. (double)
     */
    x: number;

    /**
     * The Y coordinate of this Point. (double)
     */
    y: number;
  }
  declare interface TakeSnapshotOptions {
    /**
     * Specifies the quality of the JPEG. (0-100, where 100 means best quality (no compression))
     *
     * It is recommended to set this to `90` or even `80`, since the user probably won't notice a difference between `90`/`80` and `100`.
     * @default 100
     */
    quality?: number;

    /**
     * Whether the Flash should be enabled or disabled
     * @default "off"
     */
    flash?: "on" | "off";

    /**
     * When set to `true`, metadata reading and mapping will be skipped. ({@linkcode PhotoFile.metadata} will be `null`)
     *
     * This might result in a faster capture, as metadata reading and mapping requires File IO.
     *
     * @default false
     * @platform Android
     */
    skipMetadata?: boolean;
  }
  declare type VideoFileType = "mov" | "avci" | "m4v" | "mp4";
  declare type CameraVideoCodec =
    | "h264"
    | "hevc"
    | "hevc-alpha"
    | "jpeg"
    | "pro-res-4444"
    | "pro-res-422"
    | "pro-res-422-hq"
    | "pro-res-422-lt"
    | "pro-res-422-proxy";
  declare interface RecordVideoOptions {
    /**
     * Set the video flash mode. Natively, this just enables the torch while recording.
     */
    flash?: "on" | "off" | "auto";

    /**
     * Sets the file type to use for the Video Recording.
     * @default "mov"
     */
    fileType?: VideoFileType;

    /**
     * Called when there was an unexpected runtime error while recording the video.
     */
    onRecordingError: (error: CameraCaptureError) => void;

    /**
     * Called when the recording has been successfully saved to file.
     */
    onRecordingFinished: (video: VideoFile) => void;

    /**
     * Set the video codec to record in. Different video codecs affect video quality and video size.
     * To get a list of all available video codecs use the `getAvailableVideoCodecs()` function.
     * @default undefined
     * @platform iOS
     */
    videoCodec?: CameraVideoCodec;
  }

  /**
   * Represents a Video taken by the Camera written to the local filesystem.
   *
   * Related: {@linkcode Camera.startRecording | Camera.startRecording()}, {@linkcode Camera.stopRecording | Camera.stopRecording()}
   */
  declare type VideoFile = {
    /**
     * Represents the duration of the video, in seconds.
     */
    duration: number,
    ...
  } & TemporaryFile;

  declare type CameraPermissionStatus = "authorized" | "not-determined" | "denied" | "restricted";
  declare type CameraPermissionRequestResult = "authorized" | "denied";

  /**
   * ### A powerful `<Camera>` component.
   *
   * Read the [VisionCamera documentation](https://mrousavy.github.io/react-native-vision-camera/) for more information.
   *
   * The `<Camera>` component's most important (and therefore _required_) properties are:
   *
   * * {@linkcode CameraProps.device | device}: Specifies the {@linkcode CameraDevice} to use. Get a {@linkcode CameraDevice} by using the {@linkcode useCameraDevices | useCameraDevices()} hook, or manually by using the {@linkcode Camera.getAvailableCameraDevices Camera.getAvailableCameraDevices()} function.
   * * {@linkcode CameraProps.isActive | isActive}: A boolean value that specifies whether the Camera should actively stream video frames or not. This can be compared to a Video component, where `isActive` specifies whether the video is paused or not. If you fully unmount the `<Camera>` component instead of using `isActive={false}`, the Camera will take a bit longer to start again.
   *
   * @example ```tsx
   * function App() {
   *   const devices = useCameraDevices('wide-angle-camera')
   *   const device = devices.back
   *
   *   if (device == null) return <LoadingView />
   *   return (
   *     <Camera
   *       style={StyleSheet.absoluteFill}
   *       device={device}
   *       isActive={true}
   *     />
   *   )
   * }
   * ```
   * @component
   */
  declare class Camera extends React$PureComponent<CameraProps> {
    /**
     * @internal
     */
    static displayName?: ?string;

    /**
     * @internal
     */
    displayName?: ?string;

    /**
     * @internal
     */
    constructor(props: CameraProps): this;
    handle: any;

    /**
     * Take a single photo and write it's content to a temporary file.
     *
     * @throws {@linkcode CameraCaptureError} When any kind of error occured while capturing the photo. Use the {@linkcode CameraCaptureError.code | code} property to get the actual error     * @example ```ts
     * const photo = await camera.current.takePhoto({
     *   qualityPrioritization: 'quality',
     *   flash: 'on',
     *   enableAutoRedEyeReduction: true
     * })
     * ```
     */
    takePhoto(options?: TakePhotoOptions): Promise<PhotoFile>;

    /**
     * Take a snapshot of the current preview view.
     *
     * This can be used as an alternative to {@linkcode Camera.takePhoto | takePhoto()} if speed is more important than quality
     *
     * @throws {@linkcode CameraCaptureError} When any kind of error occured while taking a snapshot. Use the {@linkcode CameraCaptureError.code | code} property to get the actual error
     *
     * @platform Android
     * @example ```ts
     * const photo = await camera.current.takeSnapshot({
     *   quality: 85,
     *   skipMetadata: true
     * })
     * ```
     */
    takeSnapshot(options?: TakeSnapshotOptions): Promise<PhotoFile>;

    /**
     * Start a new video recording.
     *
     * Records in the following formats:
     * * **iOS**: QuickTime (`.mov`)
     * * **Android**: MPEG4 (`.mp4`)
     * @blocking This function is synchronized/blocking.
     *
     * @throws {@linkcode CameraCaptureError} When any kind of error occured while starting the video recording. Use the {@linkcode CameraCaptureError.code | code} property to get the actual error
     *
     * @example ```ts
     * camera.current.startRecording({
     *   onRecordingFinished: (video) => console.log(video),
     *   onRecordingError: (error) => console.error(error),
     * })
     * setTimeout(() => {
     *   camera.current.stopRecording()
     * }, 5000)
     * ```
     */
    startRecording(options: RecordVideoOptions): void;

    /**
     * Pauses the current video recording.
     *
     * @throws {@linkcode CameraCaptureError} When any kind of error occured while pausing the video recording. Use the {@linkcode CameraCaptureError.code | code} property to get the actual error
     *
     * @example ```ts
     * // Start
     * await camera.current.startRecording()
     * await timeout(1000)
     * // Pause
     * await camera.current.pauseRecording()
     * await timeout(500)
     * // Resume
     * await camera.current.resumeRecording()
     * await timeout(2000)
     * // Stop
     * const video = await camera.current.stopRecording()
     * ```
     */
    pauseRecording(): Promise<void>;

    /**
     * Resumes a currently paused video recording.
     *
     * @throws {@linkcode CameraCaptureError} When any kind of error occured while resuming the video recording. Use the {@linkcode CameraCaptureError.code | code} property to get the actual error
     *
     * @example ```ts
     * // Start
     * await camera.current.startRecording()
     * await timeout(1000)
     * // Pause
     * await camera.current.pauseRecording()
     * await timeout(500)
     * // Resume
     * await camera.current.resumeRecording()
     * await timeout(2000)
     * // Stop
     * const video = await camera.current.stopRecording()
     * ```
     */
    resumeRecording(): Promise<void>;

    /**
     * Stop the current video recording.
     *
     * @throws {@linkcode CameraCaptureError} When any kind of error occured while stopping the video recording. Use the {@linkcode CameraCaptureError.code | code} property to get the actual error
     *
     * @example ```ts
     * await camera.current.startRecording()
     * setTimeout(async () => {
     *  const video = await camera.current.stopRecording()
     * }, 5000)
     * ```
     */
    stopRecording(): Promise<void>;

    /**
     * Focus the camera to a specific point in the coordinate system.
     * @param {Point} point The point to focus to. This should be relative to the Camera view's coordinate system,
     * and expressed in Pixel on iOS and Points on Android.
     * * `(0, 0)` means **top left**.
     * * `(CameraView.width, CameraView.height)` means **bottom right**.
     *
     * Make sure the value doesn't exceed the CameraView's dimensions.
     *
     * @throws {@linkcode CameraRuntimeError} When any kind of error occured while focussing. Use the {@linkcode CameraRuntimeError.code | code} property to get the actual error
     * @example ```ts
     * await camera.current.focus({
     *   x: tapEvent.x,
     *   y: tapEvent.y
     * })
     * ```
     */
    focus(point: Point): Promise<void>;

    /**
     * Get a list of video codecs the current camera supports for a given file type.  Returned values are ordered by efficiency (descending).
     * @example ```ts
     * const codecs = await camera.current.getAvailableVideoCodecs("mp4")
     * ```
     * @throws {@linkcode CameraRuntimeError} When any kind of error occured while getting available video codecs. Use the {@linkcode ParameterError.code | code} property to get the actual error
     * @platform iOS
     */
    getAvailableVideoCodecs(fileType?: VideoFileType): Promise<CameraVideoCodec[]>;

    /**
     * Get a list of all available camera devices on the current phone.
     *
     * @throws {@linkcode CameraRuntimeError} When any kind of error occured while getting all available camera devices. Use the {@linkcode CameraRuntimeError.code | code} property to get the actual error
     * @example ```ts
     * const devices = await Camera.getAvailableCameraDevices()
     * const filtered = devices.filter((d) => matchesMyExpectations(d))
     * const sorted = devices.sort(sortDevicesByAmountOfCameras)
     * return {
     *   back: sorted.find((d) => d.position === "back"),
     *   front: sorted.find((d) => d.position === "front")
     * }
     * ```
     */
    static getAvailableCameraDevices(): Promise<CameraDevice[]>;

    /**
     * Gets the current Camera Permission Status. Check this before mounting the Camera to ensure
     * the user has permitted the app to use the camera.
     *
     * To actually prompt the user for camera permission, use {@linkcode Camera.requestCameraPermission | requestCameraPermission()}.
     *
     * @throws {@linkcode CameraRuntimeError} When any kind of error occured while getting the current permission status. Use the {@linkcode CameraRuntimeError.code | code} property to get the actual error
     */
    static getCameraPermissionStatus(): Promise<CameraPermissionStatus>;

    /**
     * Gets the current Microphone-Recording Permission Status. Check this before mounting the Camera to ensure
     * the user has permitted the app to use the microphone.
     *
     * To actually prompt the user for microphone permission, use {@linkcode Camera.requestMicrophonePermission | requestMicrophonePermission()}.
     *
     * @throws {@linkcode CameraRuntimeError} When any kind of error occured while getting the current permission status. Use the {@linkcode CameraRuntimeError.code | code} property to get the actual error
     */
    static getMicrophonePermissionStatus(): Promise<CameraPermissionStatus>;

    /**
     * Shows a "request permission" alert to the user, and resolves with the new camera permission status.
     *
     * If the user has previously blocked the app from using the camera, the alert will not be shown
     * and `"denied"` will be returned.
     *
     * @throws {@linkcode CameraRuntimeError} When any kind of error occured while requesting permission. Use the {@linkcode CameraRuntimeError.code | code} property to get the actual error
     */
    static requestCameraPermission(): Promise<CameraPermissionRequestResult>;

    /**
     * Shows a "request permission" alert to the user, and resolves with the new microphone permission status.
     *
     * If the user has previously blocked the app from using the microphone, the alert will not be shown
     * and `"denied"` will be returned.
     *
     * @throws {@linkcode CameraRuntimeError} When any kind of error occured while requesting permission. Use the {@linkcode CameraRuntimeError.code | code} property to get the actual error
     */
    static requestMicrophonePermission(): Promise<CameraPermissionRequestResult>;

    /**
     * @internal
     */
    componentDidUpdate(): void;

    /**
     * @internal
     */
    render(): React$Node;
  }
  declare type CameraDevices = $ObjMapi<{ [k: CameraPosition]: any }, <key>(key) => CameraDevice | void>;

  /**
   * Gets the best available {@linkcode CameraDevice}. Devices with more cameras are preferred.
   *
   * @returns The best matching {@linkcode CameraDevice}.
   * @throws {@linkcode CameraRuntimeError} if no device was found.
   * @example
   * ```tsx
   * const device = useCameraDevice()
   * // ...
   * return <Camera device={device} />
   * ```
   */
  declare function useCameraDevices(): CameraDevices;

  /**
   * Gets a {@linkcode CameraDevice} for the requested device type.
   *
   * @param {PhysicalCameraDeviceType | LogicalCameraDeviceType} deviceType Specifies a device type which will be used as a device filter.
   * @returns A {@linkcode CameraDevice} for the requested device type.
   * @throws {@linkcode CameraRuntimeError} if no device was found.
   * @example
   * ```tsx
   * const device = useCameraDevice('wide-angle-camera')
   * // ...
   * return <Camera device={device} />
   * ```
   */
  declare function useCameraDevices(deviceType: PhysicalCameraDeviceType | LogicalCameraDeviceType): CameraDevices;

  /**
   * Returns the best format for the given camera device.
   *
   * This function tries to choose a format with the highest possible photo-capture resolution and best matching aspect ratio.
   * @param {CameraDevice} device The Camera Device
   * @returns The best matching format for the given camera device, or `undefined` if the camera device is `undefined`.
   */
  declare function useCameraFormat(device?: CameraDevice): CameraDeviceFormat | void;

  declare type FrameProcessor = (frame: Frame) => void;

  /**
   * Returns a memoized Frame Processor function wich you can pass to the `<Camera>`. (See ["Frame Processors"](https://react-native-vision-camera.com/docs/guides/frame-processors))
   *
   * Make sure to add the `'worklet'` directive to the top of the Frame Processor function, otherwise it will not get compiled into a worklet.
   * @param frameProcessor The Frame Processor
   * @param dependencies The React dependencies which will be copied into the VisionCamera JS-Runtime.
   * @returns The memoized Frame Processor.
   * @example ```ts
   * const frameProcessor = useFrameProcessor((frame) => {
   *   'worklet'
   *   const qrCodes = scanQRCodes(frame)
   *   console.log(`QR Codes: ${qrCodes}`)
   * }, [])
   * ```
   */
  declare function useFrameProcessor(frameProcessor: FrameProcessor, dependencies: $ReadOnlyArray<mixed>): FrameProcessor;

  /**
   * Compares two devices by the following criteria:
   * * `wide-angle-camera`s are ranked higher than others
   * * Devices with more physical cameras are ranked higher than ones with less. (e.g. "Triple Camera" > "Wide-Angle Camera")
   *
   * > Note that this makes the `sort()` function descending, so the first element (`[0]`) is the "best" device.
   * @example ```ts
   * const devices = camera.devices.sort(sortDevices)
   * const bestDevice = devices[0]
   * ```
   * @method
   */
  declare var sortDevices: (left: CameraDevice, right: CameraDevice) => number;

  /**
   * Sort formats by resolution and aspect ratio difference (to the Screen size).
   *
   * > Note that this makes the `sort()` function descending, so the first element (`[0]`) is the "best" device.
   */
  declare var sortFormats: (left: CameraDeviceFormat, right: CameraDeviceFormat) => number;

  /**
   * Returns `true` if the given Frame Rate Range (`range`) contains the given frame rate (`fps`)
   * @param {FrameRateRange} range The range to check if the given `fps` are included in
   * @param {number} fps The FPS to check if the given `range` supports.
   * @example ```ts
   * // get all formats that support 60 FPS
   * const formatsWithHighFps = useMemo(() => device.formats.filter((f) => f.frameRateRanges.some((r) => frameRateIncluded(r, 60))), [device.formats])
   * ```
   * @method
   */
  declare var frameRateIncluded: (range: FrameRateRange, fps: number) => boolean;
}
