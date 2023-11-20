// @flow

import { describe, it } from 'flow-typed-test';
import * as React from 'react';
import {
  Camera,
  CameraCaptureError, type CameraDeviceFormat,
  CameraRuntimeError,
  useCameraDevices, useCameraFormat,
  useFrameProcessor,
} from 'react-native-vision-camera';
import type { PhotoFile } from 'react-native-vision-camera';

describe("Camera", () => {
  it("instantiates with frame processor", () => {
    const devices = useCameraDevices();
    const device = devices[0];
    const cameraOrientation = "portrait";
    const frameProcessor = useFrameProcessor(frame => {}, []);

    device && (<Camera
      device={device}
      isActive
      photo
      audio={false}
      frameProcessor={frameProcessor}
      orientation={cameraOrientation}
      zoom={device.neutralZoom}
    />)
  });

  it("instantiates with style", () => {
    const devices = useCameraDevices();
    const device = devices[0];
    const absoluteFill = { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 };
    device && <Camera device={device} isActive style={absoluteFill} />;
  });

  it("does not instantiates with invalid device", () => {
    const device = { id: 'invalid', neutralZoom: 1 };
    const cameraOrientation = "portrait";
    const frameProcessor = useFrameProcessor(frame => {}, []);

    <Camera
      // $FlowExpectedError[prop-missing]
      device={device}
      isActive
      photo
      audio={false}
      frameProcessor={frameProcessor}
      orientation={cameraOrientation}
      zoom={device.neutralZoom}
    />
  });
});

describe("CameraCaptureError", () => {
  it("is an Error", () => {
    const error: Error = new CameraCaptureError("capture/recording-in-progress", "goodbye world");
  });
});

describe("CameraRuntimeError", () => {
  it("is an Error", () => {
    const error: Error = new CameraRuntimeError("permission/microphone-permission-denied", "hello world");
  })
})

describe("useCameraFormat", () => {
  it("filters by videoResolution and fps", () => {
    const format: ?CameraDeviceFormat = useCameraFormat(undefined, [{ videoResolution: { width: 1280, height: 720 } }, { fps: 60 }]);
  });

  it("rejects bad video resolution", () => {
    // $FlowExpectedError[incompatible-call]
    const format: ?CameraDeviceFormat = useCameraFormat(undefined, [{ videoResolution: { width: 1280 } }, { fps: 60 }]);
  });
});

describe("PhotoFile type", () => {
  it("accepts valid properties", () => {
    const photoFile: PhotoFile = {
      width: 0,
      height: 0,
      isRawPhoto: false,
      isMirrored: false,
      path: "",
      orientation: "portrait",
      metadata: {
        Orientation: 0,
        DPIHeight: 0,
        DPIWidth: 0,
        "{TIFF}": {
          ResolutionUnit: 0,
          Software: "",
          Make: "",
          DateTime: "",
          XResolution: 0,
          Model: "",
          YResolution: 0
        },
        "{Exif}": {
          DateTimeOriginal: "",
          ExposureTime: 0,
          FNumber: 0,
          LensSpecification: [],
          ExposureBiasValue: 0,
          ColorSpace: 0,
          FocalLenIn35mmFilm: 0,
          BrightnessValue: 0,
          ExposureMode: 0,
          LensModel: "",
          SceneType: 0,
          PixelXDimension: 0,
          ShutterSpeedValue: 0,
          SensingMethod: 0,
          SubjectArea: [],
          ApertureValue: 0,
          SubsecTimeDigitized: "",
          FocalLength: 0,
          LensMake: "",
          SubsecTimeOriginal: "",
          OffsetTimeDigitized: "",
          PixelYDimension: 0,
          ISOSpeedRatings: [],
          WhiteBalance: 0,
          DateTimeDigitized: "",
          OffsetTimeOriginal: "",
          ExifVersion: "",
          OffsetTime: "",
          Flash: 0,
          ExposureProgram: 0,
          MeteringMode: 0
        }
      }
    };
  });

  it("errors when path is missing", () => {
    // $FlowExpectedError[prop-missing]
    const photoFile: PhotoFile = {
      width: 0,
      height: 0,
      isRawPhoto: false,
      isMirrored: false,
      orientation: "portrait",
      metadata: {
        Orientation: 0,
        DPIHeight: 0,
        DPIWidth: 0,
        "{TIFF}": {
          ResolutionUnit: 0,
          Software: "",
          Make: "",
          DateTime: "",
          XResolution: 0,
          Model: "",
          YResolution: 0
        },
        "{Exif}": {
          DateTimeOriginal: "",
          ExposureTime: 0,
          FNumber: 0,
          LensSpecification: [],
          ExposureBiasValue: 0,
          ColorSpace: 0,
          FocalLenIn35mmFilm: 0,
          BrightnessValue: 0,
          ExposureMode: 0,
          LensModel: "",
          SceneType: 0,
          PixelXDimension: 0,
          ShutterSpeedValue: 0,
          SensingMethod: 0,
          SubjectArea: [],
          ApertureValue: 0,
          SubsecTimeDigitized: "",
          FocalLength: 0,
          LensMake: "",
          SubsecTimeOriginal: "",
          OffsetTimeDigitized: "",
          PixelYDimension: 0,
          ISOSpeedRatings: [],
          WhiteBalance: 0,
          DateTimeDigitized: "",
          OffsetTimeOriginal: "",
          ExifVersion: "",
          OffsetTime: "",
          Flash: 0,
          ExposureProgram: 0,
          MeteringMode: 0
        }
      }
    };
  });
});
