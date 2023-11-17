declare module "react-native-vision-camera" {
  // import type { EmitterSubscription, ViewProps } from "react-native";
  declare type EmitterSubscription = { ... };
  declare type ViewProps = { ... };

  /**
   * Represents Orientation. Depending on the context, this might be a sensor
   * orientation (relative to the phone's orentation), or view orientation.
   *
   * - `portrait`: **0°** (home-button at the bottom)
   * - `landscape-left`: **90°** (home-button on the left)
   * - `portrait-upside-down`: **180°** (home-button at the top)
   * - `landscape-right`: **270°** (home-button on the right)
   */
  declare export type Orientation = "portrait" | "portrait-upside-down" | "landscape-left" | "landscape-right";

  /**
   * Represents the pixel format of a `Frame`.
   *
   * If you intend to read Pixels from this Frame or use an ML model for processing, make sure that you are
   * using the expected `PixelFormat`, otherwise the plugin might not be able to properly understand the Frame's content.
   *
   * Most ML models operate in either `yuv` (recommended) or `rgb`.
   *
   * - `yuv`: Frame is in YUV pixel-format (Y'CbCr 4:2:0 or NV21, 8-bit)
   * - `rgb`: Frame is in RGB pixel-format (RGB or RGBA, 8-bit)
   * - `native`: Frame is in the Camera's native Hardware Buffer format (PRIVATE). This is the most efficient Format.
   * - `unknown`: Frame has unknown/unsupported pixel-format.
   */
  declare export type PixelFormat = "yuv" | "rgb" | "native" | "unknown";

  /**
   * Represents the camera device position.
   *
   * * `"back"`: Indicates that the device is physically located on the back of the phone
   * * `"front"`: Indicates that the device is physically located on the front of the phone
   * * `"external"`: The camera device is an external camera, and has no fixed facing relative to the phone. (e.g. USB or Continuity Cameras)
   */
  declare export type CameraPosition = "front" | "back" | "external";

  /**
   * Indentifiers for a physical camera (one that actually exists on the back/front of the device)
   *
   * * `"ultra-wide-angle-camera"`: A built-in camera with a shorter focal length than that of a wide-angle camera. (FOV of 94° or higher)
   * * `"wide-angle-camera"`: A built-in wide-angle camera. (FOV between 60° and 94°)
   * * `"telephoto-camera"`: A built-in camera device with a longer focal length than a wide-angle camera. (FOV of 60° or lower)
   *
   * Some Camera devices consist of multiple physical devices. They can be interpreted as _logical devices_, for example:
   *
   * * `"ultra-wide-angle-camera"` + `"wide-angle-camera"` = **dual wide-angle camera**.
   * * `"wide-angle-camera"` + `"telephoto-camera"` = **dual camera**.
   * * `"ultra-wide-angle-camera"` + `"wide-angle-camera"` + `"telephoto-camera"` = **triple camera**.
   */
  declare export type PhysicalCameraDeviceType = "ultra-wide-angle-camera" | "wide-angle-camera" | "telephoto-camera";

  /**
   * Indicates a format's autofocus system.
   *
   * * `"none"`: Indicates that autofocus is not available
   * * `"contrast-detection"`: Indicates that autofocus is achieved by contrast detection. Contrast detection performs a focus scan to find the optimal position
   * * `"phase-detection"`: Indicates that autofocus is achieved by phase detection. Phase detection has the ability to achieve focus in many cases without a focus scan. Phase detection autofocus is typically less visually intrusive than contrast detection autofocus
   */
  declare export type AutoFocusSystem = "contrast-detection" | "phase-detection" | "none";

  /**
   * Indicates a format's supported video stabilization mode. Enabling video stabilization may introduce additional latency into the video capture pipeline.
   *
   * * `"off"`: No video stabilization. Indicates that video should not be stabilized
   * * `"standard"`: Standard software-based video stabilization. Standard video stabilization reduces the field of view by about 10%.
   * * `"cinematic"`: Advanced software-based video stabilization. This applies more aggressive cropping or transformations than standard.
   * * `"cinematic-extended"`: Extended software- and hardware-based stabilization that aggressively crops and transforms the video to apply a smooth cinematic stabilization.
   * * `"auto"`: Indicates that the most appropriate video stabilization mode for the device and format should be chosen automatically
   */
  declare export type VideoStabilizationMode = "off" | "standard" | "cinematic" | "cinematic-extended" | "auto";

  /**
   * A Camera Device's stream-configuration format.
   *
   * A format specifies:
   * - Video Resolution (`videoWidth`/`videoHeight`)
   * - Photo Resolution (`photoWidth`/`photoHeight`)
   * - Possible FPS ranges (`fps`)
   * - Video Stabilization Modes (`videoStabilizationModes`)
   * - Pixel Formats (`pixelFormats`)
   */
  declare export interface CameraDeviceFormat {
    /**
     * The height of the highest resolution a still image (photo) can be produced in
     */
    photoHeight: number;

    /**
     * The width of the highest resolution a still image (photo) can be produced in
     */
    photoWidth: number;

    /**
     * The video resolution's height
     */
    videoHeight: number;

    /**
     * The video resolution's width
     */
    videoWidth: number;

    /**
     * Maximum supported ISO value
     */
    maxISO: number;

    /**
     * Minimum supported ISO value
     */
    minISO: number;

    /**
     * The video field of view in degrees
     */
    fieldOfView: number;

    /**
     * The maximum zoom factor (e.g. `128`)
     */
    maxZoom: number;

    /**
     * Specifies whether this format supports HDR mode for video capture
     */
    supportsVideoHdr: boolean;

    /**
     * Specifies whether this format supports HDR mode for photo capture
     */
    supportsPhotoHdr: boolean;

    /**
     * Specifies whether this format supports delivering depth data for photo or video capture.
     */
    supportsDepthCapture: boolean;

    /**
     * The minimum frame rate this Format needs to run at. High resolution formats often run at lower frame rates.
     */
    minFps: number;

    /**
     * The maximum frame rate this Format is able to run at. High resolution formats often run at lower frame rates.
     */
    maxFps: number;

    /**
     * Specifies this format's autofocus system.
     */
    autoFocusSystem: AutoFocusSystem;

    /**
     * All supported video stabilization modes
     */
    videoStabilizationModes: VideoStabilizationMode[];

    /**
     * Specifies this format's pixel format. The pixel format specifies how the individual pixels are interpreted as a visual image.
     *
     * The most common format is `420v`. Some formats (like `x420`) are not compatible with some frame processor plugins (e.g. MLKit)
     */
    pixelFormats: PixelFormat[];
  }

  /**
   * Represents a camera device discovered by the {@linkcode Camera.getAvailableCameraDevices | Camera.getAvailableCameraDevices()} function
   */
  declare export interface CameraDevice {
    /**
     * The native ID of the camera device instance.
     */
    id: string;

    /**
     * The physical devices this `CameraDevice` consists of.
     *
     * * If this camera device is a **logical camera** (combination of multiple physical cameras, e.g. "Triple Camera"), there are multiple cameras in this array.
     * * If this camera device is a **physical camera** (e.g. "wide-angle-camera"), there is only a single element in this array.
     *
     * You can check if the camera is a logical multi-camera by using the `isMultiCam` property.
     */
    physicalDevices: PhysicalCameraDeviceType[];

    /**
     * Specifies the physical position of this camera.
     * - `back`: The Camera Device is located on the back of the phone. These devices can be used for capturing what's in front of the user.
     * - `front`: The Camera Device is located on the front of the phone. These devices can be used for selfies or FaceTime.
     * - `external`: The Camera Device is an external device. These devices can be either:
     *     - USB Camera Devices (if they support the [USB Video Class (UVC) Specification](https://en.wikipedia.org/wiki/List_of_USB_video_class_devices))
     *     - [Continuity Camera Devices](https://support.apple.com/en-us/HT213244) (e.g. your iPhone's or Mac's Camera connected through WiFi/Continuity)
     *     - Bluetooth/WiFi Camera Devices (if they are supported in the platform-native Camera APIs; Camera2 and AVFoundation)
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
     * Whether this camera device supports low light boost.
     */
    supportsLowLightBoost: boolean;

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

    /**
     * The hardware level of the Camera.
     * - On Android, some older devices are running at a `legacy` or `limited` level which means they are running in a backwards compatible mode.
     * - On iOS, all devices are `full`.
     */
    hardwareLevel: "legacy" | "limited" | "full";

    /**
     * Represents the sensor's orientation relative to the phone.
     * For most phones this will be landscape, as Camera sensors are usually always rotated by 90 degrees (i.e. width and height are flipped).
     */
    sensorOrientation: Orientation;
  }
  declare export type PermissionError =
    | "permission/microphone-permission-denied"
    | "permission/camera-permission-denied";
  declare export type ParameterError =
    | "parameter/invalid-parameter"
    | "parameter/unsupported-output"
    | "parameter/unsupported-input"
    | "parameter/invalid-combination";
  declare export type DeviceError =
    | "device/configuration-error"
    | "device/no-device"
    | "device/invalid-device"
    | "device/microphone-unavailable"
    | "device/pixel-format-not-supported"
    | "device/low-light-boost-not-supported"
    | "device/focus-not-supported"
    | "device/camera-not-available-on-simulator";
  declare export type FormatError =
    | "format/invalid-fps"
    | "format/invalid-video-hdr"
    | "format/incompatible-pixel-format-with-hdr-setting"
    | "format/invalid-format";
  declare export type SessionError =
    | "session/camera-not-ready"
    | "session/camera-cannot-be-opened"
    | "session/camera-has-been-disconnected"
    | "session/audio-in-use-by-other-app"
    | "session/audio-session-failed-to-activate";
  declare export type CodeScannerError =
    | "code-scanner/not-compatible-with-outputs"
    | "code-scanner/code-type-not-supported"
    | "code-scanner/cannot-load-model";
  declare export type CaptureError =
    | "capture/recording-in-progress"
    | "capture/no-recording-in-progress"
    | "capture/file-io-error"
    | "capture/create-temp-file-error"
    | "capture/create-recorder-error"
    | "capture/recorder-error"
    | "capture/video-not-enabled"
    | "capture/photo-not-enabled"
    | "capture/aborted"
    | "capture/unknown";
  declare export type SystemError =
    | "system/camera-module-not-found"
    | "system/no-camera-manager"
    | "system/frame-processors-unavailable"
    | "system/view-not-found";
  declare export type UnknownError = "unknown/unknown";

  /**
   * Represents a JSON-style error cause. This contains native `NSError`/`Throwable` information, and can have recursive {@linkcode ErrorWithCause.cause | .cause} properties until the ultimate cause has been found.
   */
  declare export interface ErrorWithCause {
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
    details?: { [key: string]: mixed };

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
  declare export type CameraErrorCode =
    | PermissionError
    | ParameterError
    | DeviceError
    | FormatError
    | SessionError
    | CaptureError
    | SystemError
    | UnknownError;
  declare export class CameraError<TCode: CameraErrorCode> extends Error {
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
   * Represents any kind of error that occured while trying to capture a video or photo.
   *
   * See the ["Camera Errors" documentation](https://react-native-vision-camera.com/docs/guides/errors) for more information about Camera Errors.
   */
  declare export class CameraCaptureError extends CameraError<CaptureError> {}

  /**
   * Represents any kind of error that occured in the Camera View Module.
   *
   * See the ["Camera Errors" documentation](https://react-native-vision-camera.com/docs/guides/errors) for more information about Camera Errors.
   */
  declare export class CameraRuntimeError
    extends
      CameraError<
        PermissionError | ParameterError | DeviceError | FormatError | SessionError | SystemError | UnknownError
      > {}

  /**
   * Checks if the given `error` is of type {@linkcode ErrorWithCause}
   * @param {unknown} error Any unknown object to validate
   * @returns `true` if the given `error` is of type {@linkcode ErrorWithCause}
   */
  declare export var isErrorWithCause: (error: mixed) => boolean;

  /**
   * Tries to parse an error coming from native to a typed JS camera error.
   * @param {CameraError} nativeError The native error instance. This is a JSON in the legacy native module architecture.
   * @returns A {@linkcode CameraRuntimeError} or {@linkcode CameraCaptureError}, or the `nativeError` itself if it's not parsable
   * @method
   */
  declare export var tryParseNativeCameraError: <T>(nativeError: T) => CameraCaptureError | CameraRuntimeError | T;

  /**
   * Represents a Point in a 2-dimensional coordinate system.
   */
  declare export interface Point {
    /**
     * The X coordinate of this Point. (double)
     */
    x: number;

    /**
     * The Y coordinate of this Point. (double)
     */
    y: number;
  }

  /**
   * The type of the code to scan.
   */
  declare export type CodeType =
    | "code-128"
    | "code-39"
    | "code-93"
    | "codabar"
    | "ean-13"
    | "ean-8"
    | "itf"
    | "upc-e"
    | "qr"
    | "pdf-417"
    | "aztec"
    | "data-matrix";

  /**
   * The full area that is used for code scanning. In most cases, this is 1280x720 or 1920x1080.
   */
  declare export interface CodeScannerFrame {
    /**
     * The width of the frame
     */
    width: number;

    /**
     * The height of the frame
     */
    height: number;
  }

  /**
   * A scanned code.
   */
  declare export type Code = {|
    /**
     * The type of the code that was scanned.
     */
    type: CodeType | "unknown",

    /**
     * The string value, or null if it cannot be decoded.
     */
    value?: string,

    /**
     * The location of the code relative to the Camera Preview (in dp).
     */
    frame?: {|
      x: number,
      y: number,
      width: number,
      height: number
    |},

    /**
     * The location of each corner relative to the Camera Preview (in dp).
     */
    corners?: Point[]
  |};

  /**
   * A scanner for detecting codes in a Camera Stream.
   */
  declare export interface CodeScanner {
    /**
     * The types of codes to configure the code scanner for.
     */
    codeTypes: CodeType[];

    /**
     * A callback to call whenever the scanned codes change.
     * @param codes The scanned codes, or an empty array if none.
     * @param frame The full area that is used for scanning. Code bounds and corners are relative to this frame.
     */
    onCodeScanned: (codes: Code[], frame: CodeScannerFrame) => void;

    /**
     * Crops the scanner's view area to the specific region of interest.
     */
    regionOfInterest?: {|
      x: number,
      y: number,
      width: number,
      height: number
    |};
  }

  /**
   * A single frame, as seen by the camera. This is backed by a C++ HostObject wrapping the native GPU buffer.
   * At a 4k resolution, a Frame can be 1.5MB in size.
   * @example ```ts
   * const frameProcessor = useFrameProcessor((frame) => {
   *   'worklet'
   *   console.log(`Frame: ${frame.width}x${frame.height} (${frame.pixelFormat})`)
   * }, [])
   * ```
   */
  declare export interface Frame {
    /**
     * Whether the underlying buffer is still valid or not.
     * A Frame is valid as long as your Frame Processor (or a `runAsync(..)` operation) is still running
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
     * Returns whether the Frame is mirrored (selfie camera) or not.
     */
    isMirrored: boolean;

    /**
     * Returns the timestamp of the Frame relative to the host sytem's clock.
     */
    timestamp: number;

    /**
     * Represents the orientation of the Frame.
     *
     * Some ML Models are trained for specific orientations, so they need to be taken into
     * consideration when running a frame processor. See also: {@linkcode isMirrored}
     */
    orientation: Orientation;

    /**
     * Represents the pixel-format of the Frame.
     */
    pixelFormat: PixelFormat;

    /**
     * Get the underlying data of the Frame as a uint8 array buffer.
     * The format of the buffer depends on the Frame's {@linkcode pixelFormat}.
     *
     * Note that Frames are allocated on the GPU, so calling `toArrayBuffer()` will copy from the GPU to the CPU.
     *
     * @example
     * ```ts
     * const frameProcessor = useFrameProcessor((frame) => {
     *   'worklet'
     *
     *   if (frame.pixelFormat === 'rgb') {
     *     const data = frame.toArrayBuffer()
     *     console.log(`Pixel at 0,0: RGB(${data[0]}, ${data[1]}, ${data[2]})`)
     *   }
     * }, [])
     * ```
     */
    toArrayBuffer(): Uint8Array;

    /**
     * Returns a string representation of the frame.
     * @example ```ts
     * console.log(frame.toString()) // -> "3840 x 2160 Frame"
     * ```
     */
    toString(): string;
  }

  /**
   * @internal
   */
  declare export type FrameInternal = {|
    /**
     * Increment the Frame Buffer ref-count by one.
     *
     * This is a private API, do not use this.
     * @internal
     */
    incrementRefCount(): void,

    /**
     * Increment the Frame Buffer ref-count by one.
     *
     * This is a private API, do not use this.
     * @internal
     */
    decrementRefCount(): void
  |} & Frame;

  declare export type FrameProcessor = {|
    frameProcessor: (frame: Frame) => void,
    type: "frame-processor"
  |};
  declare export type CameraProps = {
    ...ViewProps,

    /**
     * The Camera Device to use.
     *
     * See the [Camera Devices](https://react-native-vision-camera.com/docs/guides/devices) section in the documentation for more information about Camera Devices.
     * @example ```tsx
     * const device = useCameraDevice('back')
     *
     * if (device == null) return <NoCameraErrorView />
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
     * Enables **photo capture** with the `takePhoto` function (see ["Taking Photos"](https://react-native-vision-camera.com/docs/guides/taking-photos))
     */
    photo?: boolean,

    /**
     * Enables **video capture** with the `startRecording` function (see ["Recording Videos"](https://react-native-vision-camera.com/docs/guides/recording-videos))
     */
    video?: boolean,

    /**
     * Enables **audio capture** for video recordings (see ["Recording Videos"](https://react-native-vision-camera.com/docs/guides/recording-videos))
     */
    audio?: boolean,

    /**
     * Enables **audio capture** for video recordings (see ["Recording Videos"](https://mrousavy.github.io/react-native-vision-camera/docs/guides/capturing/#recording-videos))
     */
    pixelFormat?: "native" | "yuv" | "rgb",

    /**
     * Set the current torch mode.
     *
     * Note: The torch is only available on `"back"` cameras, and isn't supported by every phone.
     *
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
     * If you want to implement a custom zoom gesture, see [the Zooming with Reanimated documentation](https://react-native-vision-camera.com/docs/guides/zooming).
     * @default false
     */
    enableZoomGesture?: boolean,

    /**
     * Selects a given format. Must be `undefined` when `preset` is set!
     */
    format?: CameraDeviceFormat,

    /**
     * Specifies the Preview's resize mode.
     * * `"cover"`: Keep aspect ratio and fill entire parent view (centered).
     * * `"contain"`: Keep aspect ratio and make sure the entire content is visible inside the parent view, even if it introduces additional blank areas (centered).
     * @default "cover"
     */
    resizeMode?: "cover" | "contain",

    /**
     * Enables or disables HDR on this camera device. Make sure the given `format` supports HDR mode.
     *
     * Requires `format` to be set.
     */
    fps?: number,
    /**
     * Enables or disables HDR Video Streaming for Preview, Video and Frame Processor via a 10-bit wide-color pixel format.
     *
     * Make sure the given {@linkcode format} supports HDR (see {@linkcode CameraDeviceFormat.supportsVideoHdr format.supportsVideoHdr}).
     */
    videoHdr?: boolean,
    /**
     * Enables or disables HDR Photo Capture via a double capture routine that combines low- and high exposure photos.
     *
     * Make sure the given {@linkcode format} supports HDR (see {@linkcode CameraDeviceFormat.supportsPhotoHdr format.supportsPhotoHdr}).
     */
    photoHdr?: boolean,
    /**
     * Enables or disables lossless buffer compression for the video stream.
     * If you only use {@linkcode video} or a {@linkcode frameProcessor}, this
     * can increase the efficiency and lower memory usage of the Camera.
     *
     * If buffer compression is enabled, the video pipeline will try to use a
     * lossless-compressed pixel format instead of the normal one.
     *
     * If you use a {@linkcode frameProcessor}, you might need to change how pixels
     * are read inside your native frame processor function as this is different
     * from the usual `yuv` or `rgb` layout.
     *
     * If buffer compression is not available but this property is enabled, the normal
     * pixel formats will be used and no error will be thrown.
     *
     * @platform iOS
     * @default
     * - true // if video={true} and frameProcessor={undefined}
     * - false // otherwise
     */
    enableBufferCompression?: boolean,
    /**
     * Enables or disables low-light boost on this camera device.
     *
     * Make sure the given {@linkcode device} supports low-light-boost (see {@linkcode CameraDevice.supportsLowLightBoost device.supportsLowLightBoost}).
     */
    lowLightBoost?: boolean,
    /**
     * Specifies the video stabilization mode to use.
     *
     * Make sure the given {@linkcode format} supports the given {@linkcode videoStabilizationMode}.
     */
    videoStabilizationMode?: VideoStabilizationMode,
    /**
     * Enables or disables depth data delivery for photo capture.
     *
     * Make sure the given {@linkcode format} supports depth data (see {@linkcode CameraDeviceFormat.supportsDepthCapture format.supportsDepthCapture}).
     *
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
     * If `true`, show a debug view to display the FPS of the Camera session.
     * This is useful for debugging your Frame Processor's speed.
     * @default false
     */
    enableFpsGraph?: boolean,

    /**
     * Represents the orientation of all Camera Outputs (Photo, Video, and Frame Processor). If this value is not set, the device orientation is used.
     */
    orientation?: Orientation,

    /**
     * Called when any kind of runtime error occured.
     */
    onError?: (error: CameraRuntimeError) => void,

    /**
     * Called when the camera was successfully initialized.
     */
    onInitialized?: () => void,

    /**
     * A worklet which will be called for every frame the Camera "sees".
     *
     * > See [the Frame Processors documentation](https://react-native-vision-camera.com/docs/guides/frame-processors) for more information
     * @example ```tsx
     * const frameProcessor = useFrameProcessor((frame) => {
     *   'worklet'
     *   const faces = scanFaces(frame)
     *   console.log(`Faces: ${faces}`)
     * }, [])
     *
     * return <Camera {...cameraProps} frameProcessor={frameProcessor} />
     * ```
     */
    frameProcessor?: FrameProcessor,

    /**
     * A CodeScanner that can detect QR-Codes or Barcodes using platform-native APIs.
     *
     * > See [the Code Scanner documentation](https://react-native-vision-camera.com/docs/guides/code-scanning) for more information
     * @example ```tsx
     * const codeScanner = useCodeScanner({
     *   codeTypes: ['qr', 'ean-13'],
     *   onCodeScanned: (codes) => {
     *     console.log(`Scanned ${codes.length} codes!`)
     *   }
     * })
     *
     * return <Camera {...props} codeScanner={codeScanner} />
     */
    codeScanner?: CodeScanner,
    ...
  };

  /**
   * Represents a temporary file in the local filesystem.
   */
  declare export interface TemporaryFile {
    /**
     * The path of the file.
     *
     * * **Note:** If you want to consume this file (e.g. for displaying it in an `<Image>` component), you might have to add the `file://` prefix.
     *
     * * **Note:** This file might get deleted once the app closes because it lives in the temp directory.
     */
    path: string;
  }
  declare export interface TakePhotoOptions {
    /**
     * Indicates how photo quality should be prioritized against speed.
     *
     * * `"quality"` Indicates that photo quality is paramount, even at the expense of shot-to-shot time
     * * `"balanced"` Indicates that photo quality and speed of delivery are balanced in priority
     * * `"speed"` Indicates that speed of photo delivery is most important, even at the expense of quality
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
     * Indicates whether still image stabilization will be enabled when capturing the photo
     * @default false
     */
    enableAutoStabilization?: boolean;

    /**
     * Specifies whether the photo output should use content aware distortion correction on this photo request.
     * For example, the algorithm may not apply correction to faces in the center of a photo, but may apply it to faces near the photo’s edges.
     * @platform iOS
     * @default false
     */
    enableAutoDistortionCorrection?: boolean;

    /**
     * Whether to play the default shutter "click" sound when taking a picture or not.
     * @default true
     */
    enableShutterSound?: boolean;
  }

  /**
   * Represents a Photo taken by the Camera written to the local filesystem.
   *
   * See {@linkcode Camera.takePhoto | Camera.takePhoto()}
   */
  declare export interface PhotoFile extends TemporaryFile {
    /**
     * The width of the photo, in pixels.
     */
    width: number;

    /**
     * The height of the photo, in pixels.
     */
    height: number;

    /**
     * Whether this photo is in RAW format or not.
     */
    isRawPhoto: boolean;

    /**
     * Display orientation of the photo, relative to the Camera's sensor orientation.
     *
     * Note that Camera sensors are landscape, so e.g. "portrait" photos will have a value of "landscape-left", etc.
     */
    orientation: Orientation;

    /**
     * Whether this photo is mirrored (selfies) or not.
     */
    isMirrored: boolean;
    thumbnail?: { [key: string]: mixed };

    /**
     * Metadata information describing the captured image. (iOS only)
     * @see  [AVCapturePhoto.metadata](https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873982-metadata)
     * @platform iOS
     */
    metadata?: {|
      /**
       * Orientation of the EXIF Image.
       *
       * * 1 = 0 degrees: the correct orientation, no adjustment is required.
       * * 2 = 0 degrees, mirrored: image has been flipped back-to-front.
       * * 3 = 180 degrees: image is upside down.
       * * 4 = 180 degrees, mirrored: image has been flipped back-to-front and is upside down.
       * * 5 = 90 degrees: image has been flipped back-to-front and is on its side.
       * * 6 = 90 degrees, mirrored: image is on its side.
       * * 7 = 270 degrees: image has been flipped back-to-front and is on its far side.
       * * 8 = 270 degrees, mirrored: image is on its far side.
       */
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
      "{MakerApple}"?: { [key: string]: mixed },
      "{TIFF}": {|
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
        YResolution: number
      |},
      "{Exif}": {|
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
        MeteringMode: number
      |}
    |};
  }

  declare export interface RecordVideoOptions {
    /**
     * Set the video flash mode. Natively, this just enables the torch while recording.
     */
    flash?: "on" | "off";

    /**
     * Specifies the output file type to record videos into.
     */
    fileType?: "mov" | "mp4";

    /**
     * Called when there was an unexpected runtime error while recording the video.
     */
    onRecordingError: (error: CameraCaptureError) => void;

    /**
     * Called when the recording has been successfully saved to file.
     */
    onRecordingFinished: (video: VideoFile) => void;

    /**
     * The Video Codec to record in.
     * - `h264`: Widely supported, but might be less efficient, especially with larger sizes or framerates.
     * - `h265`: The HEVC (High-Efficient-Video-Codec) for higher efficient video recordings.
     */
    videoCodec?: "h264" | "h265";

    /**
     * The bit-rate for encoding the video into a file, in Mbps (Megabits per second).
     *
     * Bit-rate is dependant on various factors such as resolution, FPS, pixel format (whether it's 10 bit HDR or not), and codec.
     *
     * By default, it will be calculated using those factors.
     * For example, at 1080p, 30 FPS, H.264 codec, without HDR it will result to 10 Mbps.
     * @default 'normal'
     */
    videoBitRate?: "low" | "normal" | "high" | number;
  }

  /**
   * Represents a Video taken by the Camera written to the local filesystem.
   *
   * Related: {@linkcode Camera.startRecording | Camera.startRecording()}, {@linkcode Camera.stopRecording | Camera.stopRecording()}
   */
  declare export interface VideoFile extends TemporaryFile {
    /**
     * Represents the duration of the video, in seconds.
     */
    duration: number;
  }

  declare export type CameraPermissionStatus = "granted" | "not-determined" | "denied" | "restricted";
  declare export type CameraPermissionRequestResult = "granted" | "denied";

  /**
   * ### A powerful `<Camera>` component.
   *
   * Read the [VisionCamera documentation](https://react-native-vision-camera.com/) for more information.
   *
   * The `<Camera>` component's most important properties are:
   *
   * * {@linkcode CameraProps.device | device}: Specifies the {@linkcode CameraDevice} to use. Get a {@linkcode CameraDevice} by using the {@linkcode useCameraDevice | useCameraDevice(..)} hook, or manually by using the {@linkcode CameraDevices.getAvailableCameraDevices CameraDevices.getAvailableCameraDevices()} function.
   * * {@linkcode CameraProps.isActive | isActive}: A boolean value that specifies whether the Camera should actively stream video frames or not. This can be compared to a Video component, where `isActive` specifies whether the video is paused or not. If you fully unmount the `<Camera>` component instead of using `isActive={false}`, the Camera will take a bit longer to start again.
   *
   * @example
   * ```tsx
   * function App() {
   *   const device = useCameraDevice('back')
   *
   *   if (device == null) return <NoCameraErrorView />
   *   return (
   *     <Camera
   *       style={StyleSheet.absoluteFill}
   *       device={device}
   *       isActive={true}
   *     />
   *   )
   * }
   * ```
   *
   * @component
   */
  declare export class Camera extends React$PureComponent<CameraProps> {
    /**
     * @internal
     */
    static displayName?: ?string;

    /**
     * @internal
     */
    displayName: string;

    /**
     * @internal
     */
    constructor(props: CameraProps): this;
    handle: any;

    /**
     * Take a single photo and write it's content to a temporary file.
     *
     * @throws {@linkcode CameraCaptureError} When any kind of error occured while capturing the photo. Use the {@linkcode CameraCaptureError.code | code} property to get the actual error
     * @example
     * ```ts
     * const photo = await camera.current.takePhoto({
     *   qualityPrioritization: 'quality',
     *   flash: 'on',
     *   enableAutoRedEyeReduction: true
     * })
     * ```
     */
    takePhoto(options?: TakePhotoOptions): Promise<PhotoFile>;

    /**
     * Start a new video recording.
     *
     * Records in the following formats:
     * * **iOS**: QuickTime (`.mov`)
     * * **Android**: MPEG4 (`.mp4`)
     *
     * @blocking This function is synchronized/blocking.
     *
     * @throws {@linkcode CameraCaptureError} When any kind of error occured while starting the video recording. Use the {@linkcode CameraCaptureError.code | code} property to get the actual error
     *
     * @example
     * ```ts
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
     * @example
     * ```ts
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
     * @example
     * ```ts
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
     * @example
     * ```ts
     * await camera.current.startRecording()
     * setTimeout(async () => {
     *  const video = await camera.current.stopRecording()
     * }, 5000)
     * ```
     */
    stopRecording(): Promise<void>;

    /**
     * Focus the camera to a specific point in the coordinate system.
     * @param {Point} point The point to focus to. This should be relative
     * to the Camera view's coordinate system and is expressed in points.
     * * `(0, 0)` means **top left**.
     * * `(CameraView.width, CameraView.height)` means **bottom right**.
     *
     * Make sure the value doesn't exceed the CameraView's dimensions.
     *
     * @throws {@linkcode CameraRuntimeError} When any kind of error occured while focussing. Use the {@linkcode CameraRuntimeError.code | code} property to get the actual error
     * @example
     * ```ts
     * await camera.current.focus({
     *   x: tapEvent.x,
     *   y: tapEvent.y
     * })
     * ```
     */
    focus(point: Point): Promise<void>;

    /**
     * Get a list of video codecs the current camera supports for a given file type.  Returned values are ordered by efficiency (descending).
     * @example
     * ```ts
     * const codecs = await camera.current.getAvailableVideoCodecs("mp4")
     * ```
     */
    static getAvailableCameraDevices(): CameraDevice[];

    /**
     * Adds a listener that gets called everytime the Camera Devices change, for example
     * when an external Camera Device (USB or continuity Camera) gets plugged in or plugged out.
     *
     * If you use Hooks, use the `useCameraDevices()` hook instead.
     */
    static addCameraDevicesChangedListener(listener: (newDevices: CameraDevice[]) => void): EmitterSubscription;
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
  declare export type BasicParameterType = string | number | boolean | void;
  declare export type ParameterType =
    | BasicParameterType
    | BasicParameterType[]
    | { [key: string]: BasicParameterType | void };
  declare export interface FrameProcessorPlugin {
    /**
     * Call the native Frame Processor Plugin with the given Frame and options.
     * @param frame The Frame from the Frame Processor.
     * @param options (optional) Additional options. Options will be converted to a native dictionary
     * @returns (optional) A value returned from the native Frame Processor Plugin (or undefined)
     */
    call: (frame: Frame, options?: { [key: string]: ParameterType }) => ParameterType;
  }
  declare export interface TVisionCameraProxy {
    setFrameProcessor: (viewTag: number, frameProcessor: FrameProcessor) => void;
    removeFrameProcessor: (viewTag: number) => void;

    /**
     * Creates a new instance of a native Frame Processor Plugin.
     * The Plugin has to be registered on the native side, otherwise this returns `undefined`.
     * @param name The name of the Frame Processor Plugin. This has to be the same name as on the native side.
     * @param options (optional) Options, as a native dictionary, passed to the constructor/init-function of the native plugin.
     * @example ```ts
     * const plugin = VisionCameraProxy.initFrameProcessorPlugin('scanFaces', { model: 'fast' })
     * if (plugin == null) throw new Error("Failed to load scanFaces plugin!")
     * ```
     */
    initFrameProcessorPlugin: (name: string, options?: { [key: string]: ParameterType }) => FrameProcessorPlugin | void;
  }
  declare export var VisionCameraProxy: TVisionCameraProxy;

  /**
   * Runs the given function at the given target FPS rate.
   *
   * For example, if you want to run a heavy face detection algorithm
   * only once per second, you can use `runAtTargetFps(1, ...)` to
   * throttle it to 1 FPS.
   * @param fps The target FPS rate at which the given function should be executed
   * @param func The function to execute.
   * @returns The result of the function if it was executed, or `undefined` otherwise.
   * @example ```ts
   * const frameProcessor = useFrameProcessor((frame) => {
   *   'worklet'
   *   console.log('New Frame')
   *   runAtTargetFps(5, () => {
   *     'worklet'
   *     const faces = detectFaces(frame)
   *     console.log(`Detected a new face: ${faces[0]}`)
   *   })
   * })
   * ```
   */
  declare export function runAtTargetFps<T>(fps: number, func: () => T): T | void;

  /**
   * Runs the given function asynchronously, while keeping a strong reference to the Frame.
   *
   * For example, if you want to run a heavy face detection algorithm
   * while still drawing to the screen at 60 FPS, you can use `runAsync(...)`
   * to offload the face detection algorithm to a separate thread.
   * @param frame The current Frame of the Frame Processor.
   * @param func The function to execute.
   * @example ```ts
   * const frameProcessor = useFrameProcessor((frame) => {
   *   'worklet'
   *   console.log('New Frame')
   *   runAsync(frame, () => {
   *     'worklet'
   *     const faces = detectFaces(frame)
   *     const face = [faces0]
   *     console.log(`Detected a new face: ${face}`)
   *   })
   * })
   * ```
   */
  declare export function runAsync(frame: Frame, func: () => void): void;

  declare export interface Size {
    width: number;
    height: number;
  }
  declare export interface FormatFilter {
    /**
     * The target resolution of the video (and frame processor) output pipeline.
     * If no format supports the given resolution, the format closest to this value will be used.
     */
    videoResolution?: Size | "max";

    /**
     * The target resolution of the photo output pipeline.
     * If no format supports the given resolution, the format closest to this value will be used.
     */
    photoResolution?: Size | "max";

    /**
     * The target aspect ratio of the video (and preview) output, expressed as a factor: `width / height`.
     * (Note: Cameras are in landscape orientation)
     *
     * In most cases, you want this to be as close to the screen's aspect ratio as possible (usually ~9:16).
     * @example ```ts
     * const screen = Dimensions.get('screen')
     * targetVideoAspectRatio: screen.height / screen.width
     * ```
     */
    videoAspectRatio?: number;

    /**
     * The target aspect ratio of the photo output, expressed as a factor: `width / height`.
     * (Note: Cameras are in landscape orientation)
     *
     * In most cases, you want this to be the same as `targetVideoAspectRatio`, which you often want
     * to be as close to the screen's aspect ratio as possible (usually ~9:16)
     * @example ```ts
     * const screen = Dimensions.get('screen')
     * targetPhotoAspectRatio: screen.height / screen.width
     * ```
     */
    photoAspectRatio?: number;

    /**
     * The target FPS you want to record video at.
     * If the FPS requirements can not be met, the format closest to this value will be used.
     */
    fps?: number;

    /**
     * The target video stabilization mode you want to use.
     * If no format supports the target video stabilization mode, the best other matching format will be used.
     */
    videoStabilizationMode?: VideoStabilizationMode;

    /**
     * The target pixel format you want to use.
     * If no format supports the target pixel format, the best other matching format will be used.
     */
    pixelFormat?: PixelFormat;

    /**
     * Whether you want to find a format that supports Photo HDR.
     */
    photoHdr?: boolean;

    /**
     * Whether you want to find a format that supports Photo HDR.
     */
    videoHdr?: boolean;
  }

  /**
   * Get the best matching Camera format for the given device that satisfies your requirements using a sorting filter. By default, formats are sorted by highest to lowest resolution.
   *
   * The {@linkcode filters | filters} are ranked by priority, from highest to lowest.
   * This means the first item you pass will have a higher priority than the second, and so on.
   *
   * @param device The Camera Device you're currently using
   * @param filter The filter you want to use. The format that matches your filter the closest will be returned
   * @returns The format that matches your filter the closest.
   *
   * @example
   * ```ts
   * const format = getCameraFormat(device, [
   *   { videoResolution: { width: 3048, height: 2160 } },
   *   { fps: 60 }
   * ])
   * ```
   */
  declare export function getCameraFormat(device: CameraDevice, filters: FormatFilter[]): CameraDeviceFormat;

  declare export interface DeviceFilter {
    /**
     * The desired physical devices your camera device should have.
     *
     * Many modern phones have multiple Camera devices on one side and can combine those physical camera devices to one logical camera device.
     * For example, the iPhone 11 has two physical camera devices, the `ultra-wide-angle-camera` ("fish-eye") and the normal `wide-angle-camera`. You can either use one of those devices individually, or use a combined logical camera device which can smoothly switch over between the two physical cameras depending on the current `zoom` level.
     * When the user is at 0.5x-1x zoom, the `ultra-wide-angle-camera` can be used to offer a fish-eye zoom-out effect, and anything above 1x will smoothly switch over to the `wide-angle-camera`.
     *
     * **Note:** Devices with less phyiscal devices (`['wide-angle-camera']`) are usually faster to start-up than more complex
     * devices (`['ultra-wide-angle-camera', 'wide-angle-camera', 'telephoto-camera']`), but don't offer zoom switch-over capabilities.
     * @example ```ts
     * // This device is simpler, so it starts up faster.
     * getCameraDevice({ physicalDevices: ['wide-angle-camera'] })
     * // This device is more complex, so it starts up slower, but you can switch between devices on 0.5x, 1x and 2x zoom.
     * getCameraDevice({ physicalDevices: ['ultra-wide-angle-camera', 'wide-angle-camera', 'telephoto-camera'] })
     * ```
     */
    physicalDevices?: PhysicalCameraDeviceType[];
  }
  /**
   * Get the best matching Camera device that best satisfies your requirements using a sorting filter, or `undefined` if {@linkcode devices} does not contain any devices.
   * @param position The position of the Camera device relative to the phone.
   * @param filter The filter you want to use. The Camera device that matches your filter the closest will be returned
   * @returns The Camera device that matches your filter the closest, or `undefined` if no such Camera Device exists on the given {@linkcode position}.
   * @example
   * ```ts
   * const devices = Camera.getAvailableCameraDevices()
   * const device = getCameraDevice(devices, 'back', {
   *    physicalDevices: ['wide-angle-camera']
   * })
   * ```
   */
  declare export function getCameraDevice(
    devices: CameraDevice[],
    position: CameraPosition,
    filter?: DeviceFilter
  ): CameraDevice | void;

  declare export type TTemplates = {
    [key: string]: FormatFilter[]
  };

  /**
   * Predefined templates for use in `useCameraFormat`/`getCameraFormat`.
   * @example ```ts
   * const format = useCameraFormat(device, Templates.Snapchat)
   * ```
   */
  declare export var Templates: TTemplates;
  /**
   * Get the best matching Camera device that best satisfies your requirements using a sorting filter.
   * @param position The position of the Camera device relative to the phone.
   * @param filter The filter you want to use. The Camera device that matches your filter the closest will be returned
   * @returns The Camera device that matches your filter the closest, or `undefined` if no such Camera Device exists on the given {@linkcode position}.
   * @example
   * ```ts
   * const device = useCameraDevice('back', {
   *    physicalDevices: ['wide-angle-camera']
   * })
   * ```
   */
  declare export function useCameraDevice(position: CameraPosition, filter?: DeviceFilter): CameraDevice | void;

  /**
   * Get all available Camera Devices this phone has.
   *
   * Camera Devices attached to this phone (`back` or `front`) are always available,
   * while `external` devices might be plugged in or out at any point,
   * so the result of this function might update over time.
   */
  declare export function useCameraDevices(): CameraDevice[];
  /**
   * Get the best matching Camera format for the given device that satisfies your requirements using a sorting filter. By default, formats are sorted by highest to lowest resolution.
   *
   * The {@linkcode filters | filters} are ranked by priority, from highest to lowest.
   * This means the first item you pass will have a higher priority than the second, and so on.
   *
   * @param device The Camera Device you're currently using
   * @param filter The filter you want to use. The format that matches your filter the closest will be returned
   * @returns The format that matches your filter the closest.
   * @example
   * ```ts
   * const device = useCameraDevice(...)
   * const format = useCameraFormat(device, [
   *   { videoResolution: { width: 3048, height: 2160 } },
   *   { fps: 60 }
   * ])
   * ```
   */
  declare export function useCameraFormat(
    device: CameraDevice | void,
    filters: FormatFilter[]
  ): CameraDeviceFormat | void;

  declare export interface PermissionState {
    /**
     * Whether the specified permission has explicitly been granted.
     * By default, this will be `false`. To request permission, call `requestPermission()`.
     */
    hasPermission: boolean;

    /**
     * Requests the specified permission from the user.
     * @returns Whether the specified permission has now been granted, or not.
     */
    requestPermission: () => Promise<boolean>;
  }

  /**
   * Returns whether the user has granted permission to use the Camera, or not.
   *
   * If the user doesn't grant Camera Permission, you cannot use the `<Camera>`.
   * @example ```tsx
   * const { hasPermission, requestPermission } = useCameraPermission()
   *
   * if (!hasPermission) {
   *   return <PermissionScreen onPress={requestPermission} />
   * } else {
   *   return <Camera ... />
   * }
   * ```
   */
  declare export function useCameraPermission(): PermissionState;

  /**
   * Returns whether the user has granted permission to use the Microphone, or not.
   *
   * If the user doesn't grant Audio Permission, you can use the `<Camera>` but you cannot
   * record videos with audio (the `audio={..}` prop).
   * @example ```tsx
   * const { hasPermission, requestPermission } = useMicrophonePermission()
   * const canRecordAudio = hasPermission
   *
   * return <Camera video={true} audio={canRecordAudio} />
   * ```
   */
  declare export function useMicrophonePermission(): PermissionState;

  /**
   * Create a new Frame Processor function which you can pass to the `<Camera>`.
   * (See ["Frame Processors"](https://react-native-vision-camera.com/docs/guides/frame-processors))
   *
   * Make sure to add the `'worklet'` directive to the top of the Frame Processor function, otherwise it will not get compiled into a worklet.
   *
   * Also make sure to memoize the returned object, so that the Camera doesn't reset the Frame Processor Context each time.
   */
  declare export function createFrameProcessor(
    frameProcessor: $PropertyType<FrameProcessor, "frameProcessor">,
    type: $PropertyType<FrameProcessor, "type">
  ): FrameProcessor;

  /**
   * Returns a memoized Frame Processor function which you can pass to the `<Camera>`.
   * (See ["Frame Processors"](https://react-native-vision-camera.com/docs/guides/frame-processors))
   *
   * Make sure to add the `'worklet'` directive to the top of the Frame Processor function, otherwise it will not get compiled into a worklet.
   * @param frameProcessor The Frame Processor
   * @param dependencies The React dependencies which will be copied into the VisionCamera JS-Runtime.
   * @returns The memoized Frame Processor.
   * @example ```ts
   * const frameProcessor = useFrameProcessor((frame) => {
   *   'worklet'
   *   const faces = scanFaces(frame)
   *   console.log(`Faces: ${faces}`)
   * }, [])
   * ```
   */
  declare export function useFrameProcessor(
    frameProcessor: (frame: Frame) => void,
    dependencies: $ReadOnlyArray<mixed>
  ): FrameProcessor;

  declare export function useCodeScanner(codeScanner: CodeScanner): CodeScanner;
}
