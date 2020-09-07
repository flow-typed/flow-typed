// @flow
import React from 'react';
import { it, describe } from 'flow-typed-test';

import { Camera, Constants } from 'expo-camera';

describe('opaque props', () => {
  it('should passes when used properly', () => {
    <Camera
      type={Constants.Type.front}
      flashMode={Constants.FlashMode.off}
      autoFocus={Constants.AutoFocus.on}
      whiteBalance={Constants.WhiteBalance.incandescent}
      videoStabilizationMode={Constants.VideoStabilization.cinematic}
    />;
  });

  it('should raises an error when pass not supported type', () => {
    <Camera
      // $FlowExpectedError
      type={0}
      // $FlowExpectedError
      flashMode={0}
      // $FlowExpectedError
      autoFocus={0}
      // $FlowExpectedError
      whiteBalance={0}
      // $FlowExpectedError
      videoStabilizationMode={0}
    />;
  });
});

describe('primitive props', () => {
  it('should passes when used properly', () => {
    <Camera
      useCamera2Api={false}
      ratio={'str'}
      zoom={1}
      focusDepth={1}
      pictureSize={'str'}
    />;
  });

  it('should raises an error when passed incompatible types', () => {
    <Camera
      // $FlowExpectedError
      useCamera2Api={'need boolean'}
      // $FlowExpectedError: need string
      ratio={1}
      // $FlowExpectedError
      zoom={'need number'}
      // $FlowExpectedError
      focusDepth={'need number'}
      // $FlowExpectedError: need string
      pictureSize={1}
    />;
  });
});

describe('other props', () => {
  it('should passes when used properly', () => {
    <Camera
      children={[<div />]}
      onCameraReady={async () => {}}
      onMountError={async ({ message }) => {
        (message: string);

        // $FlowExpectedError: check any
        (message: boolean);
      }}
      onBarCodeScanned={async ({ data, type }) => {
        (data: string);
        (type: string);

        // $FlowExpectedError: check any
        (type: boolean);
        // $FlowExpectedError: check any
        (data: boolean);
      }}
      onFacesDetected={async ({ faces }) => {
        (faces: Array<mixed>);
        // $FlowExpectedError: check any
        (faces: boolean);
      }}
    />;

    <Camera
      onCameraReady={() => {}}
      onMountError={() => {}}
      onBarCodeScanned={() => {}}
      onFacesDetected={() => {}}
    />;
  });

  it('should raises an error when pass not supported type', () => {
    // $FlowExpectedError: children must be a valid react node
    <Camera>{() => {}}</Camera>;

    <Camera
      // $FlowExpectedError
      onCameraReady={'need function'}
      // $FlowExpectedError
      onMountError={'need function'}
      // $FlowExpectedError
      onBarCodeScanned={'need function'}
      // $FlowExpectedError
      onFacesDetected={'need function'}
    />;
  });
});

describe('class methods', () => {
  declare var camera: Camera;

  describe('takePictureAsync', () => {
    it('should pass when call without options object', () => {
      camera.takePictureAsync();
    });

    it('should pass when call with valid options object', () => {
      camera.takePictureAsync({
        quality: 1,
        base64: false,
        exif: false,
        onPictureSaved: async () => {},
        skipProcessing: false,
      });
    });

    it('should raises an error when call with invalid options', () => {
      camera.takePictureAsync({
        // $FlowExpectedError
        quality: 'need number',
        // $FlowExpectedError
        base64: 'need boolean',
        // $FlowExpectedError
        exif: 'need boolean',
        // $FlowExpectedError
        onPictureSaved: 'need function',
        // $FlowExpectedError
        skipProcessing: 'need boolean',
      });
    });

    it('should raises an error when pass missing options prop', () => {
      // $FlowExpectedError
      camera.takePictureAsync({
        abscd: 'missing prop',
      });
    });

    it('should return Picture', () => {
      camera.takePictureAsync().then(pic => {
        (pic.width: number);
        (pic.height: number);
        (pic.uri: string);
        (pic.base64: ?string);

        // $FlowExpectedError: check any
        (pic.width: boolean);
        // $FlowExpectedError: check any
        (pic.height: boolean);
        // $FlowExpectedError: check any
        (pic.uri: boolean);
        // $FlowExpectedError: check any
        (pic.base64: ?boolean);
      });
    });
  });

  describe('recordAsync', () => {
    it('should pass when call without options object', () => {
      camera.recordAsync();
    });

    it('should pass when call with valid options object', () => {
      camera.recordAsync({
        quality: Constants.VideoQuality['720p'],
        maxDuration: 1,
        maxFileSize: 1,
        mute: true,
      });
    });

    it('should raises an error when call with invalid options', () => {
      camera.recordAsync({
        // $FlowExpectedError: need opaque value type
        quality: `Constants.VideoQuality['720p']`,
        // $FlowExpectedError:
        maxDuration: 'need number',
        // $FlowExpectedError:
        maxFileSize: 'need number',
        // $FlowExpectedError:
        mute: 'need boolean',
      });
    });

    it('should raises an error when pass missing options prop', () => {
      // $FlowExpectedError
      camera.recordAsync({
        abscd: 'missing prop',
      });
    });

    it('should return Video', () => {
      camera.recordAsync().then(vid => {
        (vid.uri: string);

        // $FlowExpectedError: check any
        (vid.uri: boolean);
      });
    });
  });

  describe('getAvailablePictureSizesAsync', () => {
    it('should pass when call without options object', () => {
      camera.getAvailablePictureSizesAsync();
    });

    it('should pass when call with string', () => {
      camera.getAvailablePictureSizesAsync('str');
    });

    it('should raises an error when call with invalid ratio', () => {
      // $FlowExpectedError: radio argument must be string
      camera.getAvailablePictureSizesAsync(123);
    });

    it('should return array string', () => {
      camera.getAvailablePictureSizesAsync().then(result => {
        (result: Array<string>);

        // $FlowExpectedError: check any
        (result: boolean);
      });
    });
  });

  describe('getSupportedRatiosAsync', () => {
    it('should pass when call without options object', () => {
      camera.getSupportedRatiosAsync();
    });

    it('should raises an error when pass argument', () => {
      // $FlowExpectedError: arguments did not need
      camera.getSupportedRatiosAsync('str');
    });

    it('should return array string', () => {
      camera.getSupportedRatiosAsync().then(result => {
        (result: Array<string>);

        // $FlowExpectedError: check any
        (result: boolean);
      });
    });
  });

  describe('stopRecording', () => {
    it('should return nothing', () => {
      (camera.stopRecording(): void);
    });
  });

  describe('pausePreview', () => {
    it('should return nothing', () => {
      (camera.pausePreview(): void);
    });
  });

  describe('resumePreview', () => {
    it('should return nothing', () => {
      (camera.resumePreview(): void);
    });
  });
});
