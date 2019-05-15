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
      // $ExpectError
      type={0}
      // $ExpectError
      flashMode={0}
      // $ExpectError
      autoFocus={0}
      // $ExpectError
      whiteBalance={0}
      // $ExpectError
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
      // $ExpectError
      useCamera2Api={'need boolean'}
      // $ExpectError: need string
      ratio={1}
      // $ExpectError
      zoom={'need number'}
      // $ExpectError
      focusDepth={'need number'}
      // $ExpectError: need string
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

        // $ExpectError: check any
        (message: boolean);
      }}
      onBarCodeScanned={async ({ data, type }) => {
        (data: string);
        (type: string);

        // $ExpectError: check any
        (type: boolean);
        // $ExpectError: check any
        (data: boolean);
      }}
      onFacesDetected={async ({ faces }) => {
        (faces: Array<mixed>);
        // $ExpectError: check any
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
    // $ExpectError: children must be a valid react node
    <Camera>{() => {}}</Camera>;

    <Camera
      // $ExpectError
      onCameraReady={'need function'}
      // $ExpectError
      onMountError={'need function'}
      // $ExpectError
      onBarCodeScanned={'need function'}
      // $ExpectError
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
        // $ExpectError
        quality: 'need number',
        // $ExpectError
        base64: 'need boolean',
        // $ExpectError
        exif: 'need boolean',
        // $ExpectError
        onPictureSaved: 'need function',
        // $ExpectError
        skipProcessing: 'need boolean',
      });
    });

    it('should raises an error when pass missing options prop', () => {
      // $ExpectError
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

        // $ExpectError: check any
        (pic.width: boolean);
        // $ExpectError: check any
        (pic.height: boolean);
        // $ExpectError: check any
        (pic.uri: boolean);
        // $ExpectError: check any
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
        // $ExpectError: need opaque value type
        quality: `Constants.VideoQuality['720p']`,
        // $ExpectError:
        maxDuration: 'need number',
        // $ExpectError:
        maxFileSize: 'need number',
        // $ExpectError:
        mute: 'need boolean',
      });
    });

    it('should raises an error when pass missing options prop', () => {
      // $ExpectError
      camera.recordAsync({
        abscd: 'missing prop',
      });
    });

    it('should return Video', () => {
      camera.recordAsync().then(vid => {
        (vid.uri: string);

        // $ExpectError: check any
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
      // $ExpectError: radio argument must be string
      camera.getAvailablePictureSizesAsync(123);
    });

    it('should return array string', () => {
      camera.getAvailablePictureSizesAsync().then(result => {
        (result: Array<string>);

        // $ExpectError: check any
        (result: boolean);
      });
    });
  });

  describe('getSupportedRatiosAsync', () => {
    it('should pass when call without options object', () => {
      camera.getSupportedRatiosAsync();
    });

    it('should raises an error when pass argument', () => {
      // $ExpectError: arguments did not need
      camera.getSupportedRatiosAsync('str');
    });

    it('should return array string', () => {
      camera.getSupportedRatiosAsync().then(result => {
        (result: Array<string>);

        // $ExpectError: check any
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
