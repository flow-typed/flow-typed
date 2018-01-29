import React from "react";
import { render } from "react-dom";
import Scrollbars from "react-custom-scrollbars";

function BadScrollBars1() {
  // $ExpectError
  return <Scrollbars onScroll={10} />;
}

function BadScrollBars2() {
  // $ExpectError
  return <Scrollbars onUpdate={(values: Array<string>) => console.log(values)} />;
}

function GoodScrollBars() {
  return (
    <Scrollbars
      onScroll={(event: SyntheticUIEvent<*>) => console.log(event)}
      onScrollFrame={values => console.log(values)}
      onScrollStart={() => console.log("start")}
      onScrollStop={() => console.log("stop")}
      onUpdate={values => console.log(values)}
      renderView={() => null}
      renderTrackHorizontal={() => null}
      renderTrackVertical={() => null}
      renderThumbHorizontal={() => null}
      renderThumbVertical={() => null}
      hideTracksWhenNotNeeded
      autoHide
      autoHideTimeout={300}
      autoHideDuration={300}
      thumbSize={10}
      thumbMinSize={5}
      universal
      autoHeight
      autoHeightMin={20}
      autoHeightMax={30}
    />
  );
}

function GoodScrollBars2() {
  return (
    <Scrollbars
      onScroll={(event: SyntheticUIEvent<*>) => console.log(event)}
      onScrollFrame={values => console.log(values)}
      onScrollStart={() => console.log("start")}
      onScrollStop={() => console.log("stop")}
      onUpdate={values => console.log(values)}
      renderView={() => null}
      renderTrackHorizontal={() => null}
      renderTrackVertical={() => null}
      renderThumbHorizontal={() => null}
      renderThumbVertical={() => null}
      hideTracksWhenNotNeeded
      autoHide
      autoHideTimeout={300}
      autoHideDuration={300}
      thumbSize={10}
      thumbMinSize={5}
      universal
      autoHeight
      autoHeightMin={"20px"}
      autoHeightMax={"30rem"}
    />
  );
}
