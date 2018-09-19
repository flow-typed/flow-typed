// @flow
import * as React from "react";
import { Thumbnail, type TYPES } from "react-native-thumbnail-video";
import { getVideoId } from "react-native-thumbnail-video/src/helpers";

var thumbnailVideo: React.ElementRef<typeof Thumbnail> = new Thumbnail();

var simpleStyle = { color: "red", width: 20 };

<>
  <Thumbnail url="" type="default" />
  <Thumbnail url="" type="high" />
  <Thumbnail url="" type="medium" />
  <Thumbnail url="" type="standard" />
  <Thumbnail url="" type="maximum" />

  <Thumbnail url="" imageHeight={1} imageWidth={1} />

  <Thumbnail
    url=""
    containerStyle={simpleStyle}
    iconStyle={simpleStyle}
    onPress={e => {}}
    onPressError={err => {}}
    style={simpleStyle}
    showPlayIcon
  >
    <i />
  </Thumbnail>
</>;


var id = getVideoId("");

if (id) {
  (id: string);
}

// $ExpectError
<Thumbnail url={undefined} />;
// $ExpectError
getVideoId();
