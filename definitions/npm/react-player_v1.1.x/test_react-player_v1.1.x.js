import React, { Component } from "react";
import Player from "react-player";

class BadPlayer1 extends Component<*> {
  render() {
    // $ExpectError
    return <Player url={10} />;
  }
}

class BadPlayer2 extends Component<*> {
  render() {
    // $ExpectError
    return <Player url="youtube.com/..." playing={"true"} />;
  }
}

class BadPlayer3 extends Component<*> {
  render() {
    // $ExpectError
    return <Player url="youtube.com/..." playing style="margin: 0;" />;
  }
}

class GoodPlayer extends Component<*> {
  render() {
    return (
      <Player
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        playing
        loop
        controls
        volume={4}
        muted
        playbackRate={3}
        width={300}
        height="200"
        style={{}}
        progressFrequency={20}
        playsinline
        config={{}}
        soundcloudConfig={{}}
        youtubeConfig={{}}
        facebookConfig={{}}
        dailymotionConfig={{}}
        vimeoConfig={{}}
        fileConfig={{}}
        wistiaConfig={{}}
        onReady={() => console.log("ready")}
        onStart={() => console.log("start")}
        onPlay={() => console.log("play")}
        onPause={() => console.log("pause")}
        onBuffer={() => console.log("buffer")}
        onEnded={() => console.log("ended")}
        onError={error => console.error(error)}
        onDuration={duration => console.log(duration)}
        onSeek={seconds => console.log(seconds)}
        onProgress={() => {
          console.log("progress");
        }}
      />
    );
  }
}
