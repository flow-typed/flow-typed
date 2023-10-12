// @flow

import { describe, it } from 'flow-typed-test';
import * as React from 'react';
import {
  Camera,
  CameraCaptureError,
  CameraRuntimeError,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';

describe("Camera", () => {
  it("instantiates with frame processor", () => {
    const devices = useCameraDevices();
    const device = devices.back;
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

  it("does not instantiates with invalid device", () => {
    const devices = { back: { id: 'invalid', neutralZoom: 1 } };
    const device = devices.back;
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
    const error: Error = new CameraCaptureError("capture/invalid-photo-format", "goodbye world");
  });
});

describe("CameraRuntimeError", () => {
  it("is an Error", () => {
    const error: Error = new CameraRuntimeError("permission/microphone-permission-denied", "hello world");
  })
})
