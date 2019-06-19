// @flow
import * as React from "react";
import YouTube, {
  YouTubeStandaloneIOS,
  YouTubeStandaloneAndroid
} from "react-native-youtube";

<YouTube
  apiKey="API_KEY"
  videoId="ncw4ISEU5ik"
  videoIds={["HcXNPI-IPPM", "XXlZfc1TrD0", "czcjU1w-c6k", "uMK0prafzw0"]}
  playlistId="PLF797E961509B4EB5"
  origin="SOME_STRING"
  play
  loop
  fullscreen
  showFullscreenButton
  rel
  showinfo
  controls={1}
  style={{ height: 300, width: 400 }}
  onError={(e: { error: string }) => {}}
  onReady={(e: { target: number }) => {}}
  onChangeState={(e: { state: string }) => {}}
  onChangeQuality={(e: { quality: string }) => {}}
  onChangeFullscreen={(e: { isFullscreen: boolean }) => {}}
  onProgress={(e: { duration: number, currentTime: number }) => {}}
/>;

// $ExpectError
<YouTube>
  <div />
</YouTube>;

// Methods on a YouTube instance
var youTube: React.ElementRef<typeof YouTube> = new YouTube();

youTube.seekTo(1000);
youTube.nextVideo();
youTube.previousVideo();
youTube.playVideoAt(2);

youTube.videosIndex().then((index: number) => {});

youTube.currentTime().then((currentTime: number) => {});

if (youTube.duration) {
  youTube.duration().then((duration: number) => {});
}

if (youTube.reloadIframe) {
  youTube.reloadIframe();
}

// $ExpectError
youTube.seekTo("1000");
// $ExpectError
youTube.nextVideo(1);
// $ExpectError
youTube.previousVideo(-1);
// $ExpectError
youTube.playVideoAt("2");

// Standalone Players
if (YouTubeStandaloneAndroid) {
  YouTubeStandaloneAndroid.playVideo({
    apiKey: "API_KEY",
    videoId: "KVZ-P-ZI6W4",
    autoplay: true,
    lightboxMode: false,
    startTime: 25.333
  }).then(() => {});

  YouTubeStandaloneAndroid.playVideos({
    apiKey: "API_KEY",
    videoIds: ["HcXNPI-IPPM", "XXlZfc1TrD0", "czcjU1w-c6k", "uMK0prafzw0"],
    autoplay: false,
    lightboxMode: true,
    startIndex: 1,
    startTime: 46.001
  }).then(() => {});

  YouTubeStandaloneAndroid.playPlaylist({
    apiKey: "API_KEY",
    playlistId: "PLF797E961509B4EB5",
    autoplay: false,
    lightboxMode: false,
    startIndex: 2,
    startTime: 100
  }).then(() => {});
}

if (YouTubeStandaloneIOS) {
  YouTubeStandaloneIOS.playVideo("ncw4ISEU5ik").then(() => {});
}
