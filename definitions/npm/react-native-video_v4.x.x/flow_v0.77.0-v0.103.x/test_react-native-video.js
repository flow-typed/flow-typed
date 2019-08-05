// @flow
import * as React from 'react';
import { describe, it } from 'flow-typed-test';
import Video, {
  TextTrackType,
  FilterType,
  type TimedMetadata,
  type TrackDescriptor,
} from 'react-native-video';

describe('selectedAudioTrack & selectedTextTrack', () => {
  it('should passes when used properly', () => {
    <Video
      source={0}
      selectedAudioTrack={{ type: 'system' }}
      selectedTextTrack={{ type: 'system' }}
    />;

    <Video
      source={0}
      selectedAudioTrack={{ type: 'disabled', value: undefined }}
      selectedTextTrack={{ type: 'disabled', value: undefined }}
    />;

    <Video
      source={0}
      selectedAudioTrack={{ type: 'title', value: 'French 1' }}
      selectedTextTrack={{ type: 'title', value: 'French 1' }}
    />;

    <Video
      source={0}
      selectedAudioTrack={{ type: 'language', value: 'fr' }}
      selectedTextTrack={{ type: 'language', value: 'fr' }}
    />;

    <Video
      source={0}
      selectedAudioTrack={{ type: 'index', value: 0 }}
      selectedTextTrack={{ type: 'index', value: 0 }}
    />;
  });

  it('raises an error when passed an unrecognized value key', () => {
    // $ExpectError
    <Video
      source={0}
      selectedAudioTrack={{ type: 'index', value: 'notNumber' }}
    />;

    // $ExpectError
    <Video source={0} selectedTextTrack={{ type: 'language', value: 69 }} />;

    // $ExpectError
    <Video source={0} selectedTextTrack={{ type: 'unsutortedType' }} />;

    // $ExpectError
    <Video source={0} selectedAudioTrack={{ type: 'title', value: 13 }} />;
  });
});

describe('TextTrackType', () => {
  it('should has values', () => {
    (TextTrackType.SRT: 'application/x-subrip');
    (TextTrackType.TTML: 'application/ttml+xml');
    (TextTrackType.VTT: 'text/vtt');
  });

  it('raises an error when overwrite some value', () => {
    // $ExpectError - read-only
    TextTrackType.TTML = '123';

    // $ExpectError - exact type
    TextTrackType.TTMLXXX = '123';
  });
});

describe('FilterType', () => {
  it('should has values', () => {
    (FilterType.NONE: '');
    (FilterType.INVERT: 'CIColorInvert');
    (FilterType.MONOCHROME: 'CIColorMonochrome');
    (FilterType.POSTERIZE: 'CIColorPosterize');
    (FilterType.FALSE: 'CIFalseColor');
    (FilterType.MAXIMUMCOMPONENT: 'CIMaximumComponent');
    (FilterType.MINIMUMCOMPONENT: 'CIMinimumComponent');
    (FilterType.CHROME: 'CIPhotoEffectChrome');
    (FilterType.FADE: 'CIPhotoEffectFade');
    (FilterType.INSTANT: 'CIPhotoEffectInstant');
    (FilterType.MONO: 'CIPhotoEffectMono');
    (FilterType.NOIR: 'CIPhotoEffectNoir');
    (FilterType.PROCESS: 'CIPhotoEffectProcess');
    (FilterType.TONAL: 'CIPhotoEffectTonal');
    (FilterType.TRANSFER: 'CIPhotoEffectTransfer');
    (FilterType.SEPIA: 'CISepiaTone');
  });

  it('raises an error when overwrite some value', () => {
    // $ExpectError - read-only
    FilterType.SEPIA = '123';

    // $ExpectError - exact type
    FilterType.SEPIAXXX = '123';
  });
});

describe('public class methods', () => {
  var video = new Video();

  it('should create react element', () => {
    (video: React.ElementRef<typeof Video>);
  });

  describe('seek', () => {
    it('seek should call with number ', () => {
      video.seek(1);

      // $ExpectError
      video.seek();
    });

    it('should call seek with number and tolerance IOS argument', () => {
      var toleranceIOS = 1;

      video.seek(1, toleranceIOS);
    });
  });

  describe('should call dismissFullscreenPlayer', () => {
    video.dismissFullscreenPlayer();
  });

  describe('should call presentFullscreenPlayer', () => {
    video.presentFullscreenPlayer();
  });

  describe('should call restoreUserInterfaceForPictureInPictureStopCompleted', () => {
    video.restoreUserInterfaceForPictureInPictureStopCompleted(true);

    // $ExpectError: first argument must be boolean
    video.restoreUserInterfaceForPictureInPictureStopCompleted('true');
  });
});

describe('source prop', () => {
  it('should render with source prop', () => {
    <>
      <Video source={0} />
      <Video
        source={{ uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
      />
    </>;
  });

  it('should throw error when source is void', () => {
    // $ExpectError
    <Video source={null} />;

    // $ExpectError
    <Video source={undefined} />;
  });
});

it('should passes when passed View props', () => {
  // https://github.com/react-native-community/react-native-video/blob/80391d4e2ae639bb4079b2595a5d7ca27ebaeb7b/Video.js#L433
  <Video source={0} style={{ color: 'sexy' }} testID="video" />;
});

it('should used with poster prop', () => {
  <Video source={0} poster="https://example.com" />;

  <Video source={0} poster={undefined} />;
});

it('should render with number props', () => {
  <Video
    source={0}
    //
    volume={1}
    stereoPan={1}
    rate={1}
    progressUpdateInterval={1}
    maxBitRate={1}
    reportBandwidth={1}
  />;

  <Video
    source={0}
    //
    volume={undefined}
    stereoPan={undefined}
    rate={undefined}
    progressUpdateInterval={undefined}
    maxBitRate={undefined}
    reportBandwidth={undefined}
  />;
});

describe('boolean props', () => {
  it('should render with boolean props', () => {
    <Video
      source={0}
      //
      muted={false}
      paused={false}
      playInBackground={false}
      repeat={false}
      allowsExternalPlayback={false}
      controls={false}
      filterEnabled={false}
      fullscreen={false}
      fullscreenAutorotate={false}
      playWhenInactive={false}
      pictureInPicture={false}
    />;

    <Video
      source={0}
      //
      muted
      paused
      playInBackground
      repeat
      allowsExternalPlayback
      controls
      filterEnabled
      fullscreen
      fullscreenAutorotate
      playWhenInactive
      pictureInPicture
    />;
  });
});

it('should passes when used properly resizeMode', () => {
  <>
    <Video source={0} resizeMode="contain" />
    <Video source={0} resizeMode="cover" />
    <Video source={0} resizeMode="stretch" />
    <Video source={0} resizeMode={undefined} />
  </>;

  // $ExpectError
  var b = <Video source={0} resizeMode="unSupportedType" />;
});

it('should passes when used properly posterResizeMode', () => {
  <>
    <Video source={0} posterResizeMode="contain" />
    <Video source={0} posterResizeMode="cover" />
    <Video source={0} posterResizeMode="stretch" />
    <Video source={0} posterResizeMode="repeat" />
    <Video source={0} posterResizeMode="center" />
    <Video source={0} posterResizeMode={undefined} />
  </>;

  // $ExpectError
  <Video source={0} posterResizeMode="unSupportedType" />;
});

it('should passes when used properly filter', () => {
  <>
    <Video source={0} filter="CIColorInvert" />
    <Video source={0} filter="CIColorMonochrome" />
    <Video source={0} filter="CIColorPosterize" />
    <Video source={0} filter="CIFalseColor" />
    <Video source={0} filter="CIMaximumComponent" />
    <Video source={0} filter="CIMinimumComponent" />
    <Video source={0} filter="CIPhotoEffectChrome" />
    <Video source={0} filter="CIPhotoEffectFade" />
    <Video source={0} filter="CIPhotoEffectInstant" />
    <Video source={0} filter="CIPhotoEffectMono" />
    <Video source={0} filter="CIPhotoEffectNoir" />
    <Video source={0} filter="CIPhotoEffectProcess" />
    <Video source={0} filter="CIPhotoEffectTonal" />
    <Video source={0} filter="CIPhotoEffectTransfer" />
    <Video source={0} filter="CISepiaTone" />
    <Video source={0} filter="" />
    <Video source={0} filter={undefined} />
  </>;

  // $ExpectError
  <Video source={0} filter="unSupportedType" />;
});

describe('events', () => {
  describe('onTimedMetadata', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onTimedMetadata={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.metadata: $ReadOnlyArray<TimedMetadata>);
        }}
      />;
      <Video source={0} onTimedMetadata={() => {}} />;
      <Video source={0} onTimedMetadata={undefined} />;
    });
  });

  describe('onAudioFocusChanged', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onAudioFocusChanged={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.hasAudioFocus: boolean);
        }}
      />;
      <Video source={0} onAudioFocusChanged={() => {}} />;
      <Video source={0} onAudioFocusChanged={undefined} />;
    });
  });

  describe('onProgress', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onProgress={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.currentTime: number);
          (event.playableDuration: number);
          (event.seekableDuration: number);
        }}
      />;
      <Video source={0} onProgress={() => {}} />;
      <Video source={0} onProgress={undefined} />;
    });
  });

  describe('onBuffer', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onBuffer={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.isBuffering: boolean);
        }}
      />;
      <Video source={0} onBuffer={() => {}} />;
      <Video source={0} onBuffer={undefined} />;
    });
  });

  describe('onLoad', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onLoad={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.audioTracks: $ReadOnlyArray<TrackDescriptor>);
          (event.canPlayFastForward: boolean);
          (event.canPlayReverse: boolean);
          (event.canPlaySlowForward: boolean);
          (event.canPlaySlowReverse: boolean);
          (event.canStepBackward: boolean);
          (event.canStepForward: boolean);
          (event.currentTime: number);
          (event.duration: number);
          (event.textTracks: $ReadOnlyArray<TrackDescriptor>);

          // $ExpectError - read-only object
          event.naturalSize.abc = 123;

          (event.naturalSize.height: number);
          (event.naturalSize.orientation: string);
          (event.naturalSize.width: number);
        }}
      />;
      <Video source={0} onLoad={() => {}} />;
      <Video source={0} onLoad={undefined} />;
    });
  });

  describe('onLoadStart', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onLoadStart={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.isNetwork: boolean);
          (event.type: string);
          (event.uri: string);
        }}
      />;
      <Video source={0} onLoadStart={() => {}} />;
      <Video source={0} onLoadStart={undefined} />;
    });
  });

  describe('other events', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        //
        onAudioBecomingNoisy={() => {}}
        onPlaybackResume={() => {}}
        onPlaybackStalled={() => {}}
      />;

      <Video
        source={0}
        //
        onAudioBecomingNoisy={undefined}
        onPlaybackResume={undefined}
        onPlaybackStalled={undefined}
      />;

      // $ExpectError
      <Video source={0} onAudioBecomingNoisy="testAnyFunction" />;
      // $ExpectError
      <Video source={0} onPlaybackResume="testAnyFunction" />;
      // $ExpectError
      <Video source={0} onPlaybackStalled="testAnyFunction" />;
    });
  });

  describe('onSeek', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onSeek={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.target: number);
          (event.currentTime: number);
          (event.seekTime: number);
        }}
      />;
      <Video source={0} onSeek={() => {}} />;
      <Video source={0} onSeek={undefined} />;
    });
  });

  describe('onPlaybackRateChange', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onPlaybackRateChange={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.target: number);
          (event.playbackRate: number);
        }}
      />;
      <Video source={0} onPlaybackRateChange={() => {}} />;
      <Video source={0} onPlaybackRateChange={undefined} />;
    });
  });

  describe('onExternalPlaybackChange', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onExternalPlaybackChange={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.target: number);
          (event.isExternalPlaybackActive: boolean);
        }}
      />;
      <Video source={0} onExternalPlaybackChange={() => {}} />;
      <Video source={0} onExternalPlaybackChange={undefined} />;
    });
  });

  describe('onError', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onError={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.target: number);
          (event.error.domain: string);
          (event.error.code: number);
        }}
      />;
      <Video source={0} onError={() => {}} />;
      <Video source={0} onError={undefined} />;
    });
  });

  describe('onBandwidthUpdate', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onBandwidthUpdate={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.target: number);
          (event.bitrate: number);
        }}
      />;
      <Video source={0} onBandwidthUpdate={() => {}} />;
      <Video source={0} onBandwidthUpdate={undefined} />;
    });
  });

  describe('onPictureInPictureStatusChanged', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onPictureInPictureStatusChanged={event => {
          // $ExpectError - read-only event and exact
          event.abc = 123;

          (event.target: number);
          (event.isActive: boolean);
        }}
      />;
      <Video source={0} onPictureInPictureStatusChanged={() => {}} />;
      <Video source={0} onPictureInPictureStatusChanged={undefined} />;
    });
  });

  describe('onRestoreUserInterfaceForPictureInPictureStop', () => {
    it('should passes when used properly', () => {
      <Video
        source={0}
        onRestoreUserInterfaceForPictureInPictureStop={() => {}}
      />;

      <Video
        source={0}
        onRestoreUserInterfaceForPictureInPictureStop={undefined}
      />;
    });
  });

  describe('Handler without any payload', () => {
    it('passes when used properly', () => {
      <Video
        source={0}
        //
        onReadyForDisplay={e => {
          (e.target: number);
        }}
        onEnd={e => {
          (e.target: number);
        }}
        onFullscreenPlayerWillPresent={e => {
          (e.target: number);
        }}
        onFullscreenPlayerDidPresent={e => {
          (e.target: number);
        }}
        onFullscreenPlayerWillDismiss={e => {
          (e.target: number);
        }}
        onFullscreenPlayerDidDismiss={e => {
          (e.target: number);
        }}
      />;

      // $ExpectError
      <Video source={0} onReadyForDisplay="testForAnyFunction" />;
      // $ExpectError
      <Video source={0} onEnd="testForAnyFunction" />;
      // $ExpectError
      <Video source={0} onFullscreenPlayerWillPresent="testForAnyFunction" />;
      // $ExpectError
      <Video source={0} onFullscreenPlayerDidPresent="testForAnyFunction" />;
      // $ExpectError
      <Video source={0} onFullscreenPlayerWillDismiss="testForAnyFunction" />;
      // $ExpectError
      <Video source={0} onFullscreenPlayerDidDismiss="testForAnyFunction" />;
    });
  });
});
