// @flow
import * as React from "react";
import { describe, it } from "flow-typed-test";
import SvgUri from "react-native-svg-uri";

describe("<SvgUri />", () => {
  it("should return react element of SvgUri", () => {
    (<SvgUri />: React$Element<typeof SvgUri>);
  });

  describe("SvgUri  Props", () => {
    describe("source", () => {
      it("passes when used properly", () => {
        <SvgUri source={1} />;

        <SvgUri source={{ uri: "https://" }} />;

        <SvgUri source={[{ uri: "https://" }]} />;
      });

      it("passes when use Source object with other params", () => {
        <SvgUri source={{ headers: {} }} />;
      });

      it("raises an error when source invalid", () => {
        // $ExpectError
        <SvgUri source="https://" />;
      });
    });

    describe("width and height", () => {
      it("passes when used properly", () => {
        <SvgUri width={69} height={69} />;
        <SvgUri width="100%" height="100%" />;
      });

      it("raises an error when width or height invalid", () => {
        // $ExpectError
        <SvgUri width={true} />;

        // $ExpectError
        <SvgUri height={{}} />;
      });
    });

    describe("svgXmlData", () => {
      it("passes when used properly", () => {
        <SvgUri
          svgXmlData={`<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
     width="100%" height="100%">
<rect fill="white" x="0" y="0" width="100%" height="100%" />
<rect fill="silver" x="0" y="0" width="100%" height="100%" rx="1em"/>
</svg>`}
        />;
      });

      it("raises an error when svgXmlData invalid", () => {
        // $ExpectError
        <SvgUri svgXmlData={{}} />;
      });
    });

    describe("fill", () => {
      it("passes when used properly", () => {
        <SvgUri fill="red" />;
      });

      it("raises an error when fill invalid", () => {
        // $ExpectError
        <SvgUri fill={{}} />;
      });
    });

    describe("onLoad", () => {
      it("passes when used properly", () => {
        <SvgUri onLoad={() => console.log("ready")} />;
      });

      it("raises an error when onLoad invalid", () => {
        // $ExpectError
        <SvgUri onLoad="ops" />;
      });
    });
  });
});
