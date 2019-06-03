// @flow
import * as React from "react";
import { describe, it } from "flow-typed-test";
import { Thumbnail } from "react-native-thumbnail-video";
import { getVideoId } from "react-native-thumbnail-video/src/helpers";

it("must create instance of Thumbnail", () => {
  var thumbnailVideo: React.ElementRef<typeof Thumbnail> = new Thumbnail();
});

describe("Props", () => {
  it("must use enum of quality types", () => {
    <>
      <Thumbnail url="" type="default" />
      <Thumbnail url="" type="high" />
      <Thumbnail url="" type="medium" />
      <Thumbnail url="" type="standard" />
      <Thumbnail url="" type="maximum" />
    </>;
  });

  it("must throw error when type isn't supported", () => {
    // $ExpectError
    <Thumbnail url="" type="maximuMmmmm" />;
  });

  it("must throw error when required property 'url' is void ", () => {
    // $ExpectError
    <Thumbnail url={undefined} />;
  });

  it("must use onPressError and onPress handler without arguments", () => {
    <Thumbnail url="" onPress={() => {}} onPressError={() => {}} />;
  });

  it("must render Thumbnail without errors", () => {
    var simpleStyle = { color: "red", width: 20 };

    <Thumbnail
      url=""
      imageHeight={1}
      imageWidth={1}
      containerStyle={simpleStyle}
      iconStyle={simpleStyle}
      onPress={e => {}}
      onPressError={err => {}}
      style={simpleStyle}
      showPlayIcon
    >
      <i />
    </Thumbnail>;
  });
});

describe("helpers", () => {
  describe("getVideoId", () => {
    it("must return video id or void", () => {
      var id = getVideoId("");

      if (id) {
        (id: string);
      }
    });

    it("must throw error when url argument isn't string", () => {
      // $ExpectError
      getVideoId();
    });
  });
});
