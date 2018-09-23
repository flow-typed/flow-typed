// @flow
import * as React from "react";
import { describe, it } from "flow-typed-test";
import Video, {
  TextTrackType,
  type TimedMetadata,
  type TrackDescriptor
} from "react-native-video";

describe("selectedAudioTrack & selectedTextTrack", () => {
  it("must passes when used properly", () => {
    <Video
      source={0}
      selectedAudioTrack={{ type: "system" }}
      selectedTextTrack={{ type: "system" }}
    />;

    <Video
      source={0}
      selectedAudioTrack={{ type: "disabled", value: undefined }}
      selectedTextTrack={{ type: "disabled", value: undefined }}
    />;

    <Video
      source={0}
      selectedAudioTrack={{ type: "title", value: "French 1" }}
      selectedTextTrack={{ type: "title", value: "French 1" }}
    />;

    <Video
      source={0}
      selectedAudioTrack={{ type: "language", value: "fr" }}
      selectedTextTrack={{ type: "language", value: "fr" }}
    />;

    <Video
      source={0}
      selectedAudioTrack={{ type: "index", value: 0 }}
      selectedTextTrack={{ type: "index", value: 0 }}
    />;
  });

  it("raises error when passed an unrecognized value key", () => {
    // $ExpectError
    <Video
      source={0}
      selectedAudioTrack={{ type: "index", value: "notNumber" }}
    />;

    // $ExpectError
    <Video source={0} selectedTextTrack={{ type: "language", value: 69 }} />;

    // $ExpectError
    <Video source={0} selectedTextTrack={{ type: "unsutortedType" }} />;

    // $ExpectError
    <Video source={0} selectedAudioTrack={{ type: "title", value: 13 }} />;
  });
});

describe("TextTrackType", () => {
  it("must has values", () => {
    (TextTrackType.SRT: "application/x-subrip");
    (TextTrackType.TTML: "application/ttml+xml");
    (TextTrackType.VTT: "text/vtt");
  });
});

describe("public class methods", () => {
  var video = new Video();

  it("must create react element", () => {
    (video: React.ElementRef<typeof Video>);
  });

  describe("seek", () => {
    it("seek must call with number ", () => {
      video.seek(1);

      // $ExpectError
      video.seek();
    });

    it("must call seek with number and tolerance IOS argument", () => {
      var toleranceIOS = 1;

      video.seek(1, toleranceIOS);
    });
  });

  describe("must call dismissFullscreenPlayer", () => {
    video.dismissFullscreenPlayer();
  });

  describe("must call presentFullscreenPlayer", () => {
    video.presentFullscreenPlayer();
  });
});

describe("props", () => {
  it("must render with source prop", () => {
    <>
      <Video source={0} />
      <Video
        source={{ uri: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" }}
      />
    </>;
  });

  it("must throw error when source is void", () => {
    // $ExpectError
    <Video source={null} />;

    // $ExpectError
    <Video source={undefined} />;
  });
});

it("must used with poster prop", () => {
  <Video
    source={0}
    //
    poster="https://example.com"
  />;

  <Video
    source={0}
    //
    poster={undefined}
  />;
});

it("must render with number props", () => {
  <Video
    source={0}
    //

    volume={1}
    stereoPan={1}
    rate={1}
    currentTime={1}
    progressUpdateInterval={1}
    scaleX={1}
    scaleY={1}
    translateX={1}
    translateY={1}
    rotation={1}
  />;

  <Video
    source={0}
    //

    volume={undefined}
    stereoPan={undefined}
    rate={undefined}
    currentTime={undefined}
    progressUpdateInterval={undefined}
    scaleX={undefined}
    scaleY={undefined}
    translateX={undefined}
    translateY={undefined}
    rotation={undefined}
  />;
});

describe("boolean props", () => {
  it("must render with boolean props", () => {
    <Video
      source={0}
      //
      paused={false}
      muted={false}
      playInBackground={false}
      playWhenInactive={false}
      disableFocus={false}
      controls={false}
      audioOnly={false}
      useTextureView={false}
    />;

    <Video
      source={0}
      //
      paused
      muted
      playInBackground
      playWhenInactive
      disableFocus
      controls
      audioOnly
      useTextureView
    />;
  });
});

describe("Fullscreen Event props", () => {
  it("passes when used properly", () => {
    <Video
      source={0}
      //
      onFullscreenPlayerWillPresent={() => {}}
      onFullscreenPlayerDidPresent={() => {}}
      onFullscreenPlayerWillDismiss={() => {}}
      onFullscreenPlayerDidDismiss={() => {}}
    />;
  });
});

it("must passes when used properly resizeMode", () => {
  <>
    <Video source={0} resizeMode="contain" />
    <Video source={0} resizeMode="cover" />
    <Video source={0} resizeMode="stretch" />
    <Video source={0} resizeMode={undefined} />
  </>;

  // $ExpectError
  var b = <Video source={0} resizeMode="unSupportedType" />;
});

it("must passes when used properly posterResizeMode", () => {
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

describe("events", () => {
  describe("onTimedMetadata", () => {
    it("must passes when used properly", () => {
      <Video
        source={0}
        onTimedMetadata={event => {
          // $ExpectError - read-only event
          event.abc = 123;

          (event.metadata: $ReadOnlyArray<TimedMetadata>);
        }}
      />;
      <Video source={0} onTimedMetadata={() => {}} />;
      <Video source={0} onTimedMetadata={undefined} />;
    });
  });

  describe("onAudioFocusChanged", () => {
    it("must passes when used properly", () => {
      <Video
        source={0}
        onAudioFocusChanged={event => {
          // $ExpectError - read-only event
          event.abc = 123;

          (event.hasAudioFocus: boolean);
        }}
      />;
      <Video source={0} onAudioFocusChanged={() => {}} />;
      <Video source={0} onAudioFocusChanged={undefined} />;
    });
  });

  describe("onProgress", () => {
    it("must passes when used properly", () => {
      <Video
        source={0}
        onProgress={event => {
          // $ExpectError - read-only event
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

  describe("onBuffer", () => {
    it("must passes when used properly", () => {
      <Video
        source={0}
        onBuffer={event => {
          // $ExpectError - read-only event
          event.abc = 123;

          (event.isBuffering: boolean);
        }}
      />;
      <Video source={0} onBuffer={() => {}} />;
      <Video source={0} onBuffer={undefined} />;
    });
  });

  describe("onLoad", () => {
    it("must passes when used properly", () => {
      <Video
        source={0}
        onLoad={event => {
          // $ExpectError - read-only event
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

  describe("onLoadStart", () => {
    it("must passes when used properly", () => {
      <Video
        source={0}
        onLoadStart={event => {
          // $ExpectError - read-only event
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

  describe("other events", () => {
    it("must passes when used properly", () => {
      <Video
        source={0}
        //
        onError={() => {}}
        onSeek={() => {}}
        onEnd={() => {}}
        onReadyForDisplay={() => {}}
        onPlaybackStalled={() => {}}
        onPlaybackResume={() => {}}
        onPlaybackRateChange={() => {}}
        onAudioBecomingNoisy={() => {}}
      />;

      <Video
        source={0}
        //
        onError={undefined}
        onSeek={undefined}
        onEnd={undefined}
        onReadyForDisplay={undefined}
        onPlaybackStalled={undefined}
        onPlaybackResume={undefined}
        onPlaybackRateChange={undefined}
        onAudioBecomingNoisy={undefined}
      />;
    });
  });
});
