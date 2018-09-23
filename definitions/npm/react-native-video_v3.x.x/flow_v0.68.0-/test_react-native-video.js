// @flow
import * as React from "react";
import Video, { TextTrackType } from "react-native-video";

<>
  <Video source={1} />
  <Video
    source={{ uri: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" }}
  />
  <Video
    source={1}
    scaleX={0}
    scaleY={0}
    translateX={0}
    translateY={0}
    rotation={0}
  />
  ;
</>;

var video: React.ElementRef<typeof Video> = new Video();

video.dismissFullscreenPlayer();
video.presentFullscreenPlayer();
video.seek(1);
video.seek(120, 50);
// $ExpectError
video.seek();
