// @flow
import * as React from "react";
import { describe, it } from "flow-typed-test";
import QRCode from "react-native-qrcode-svg";

describe("<QRCode/>", () => {
  it("should return react element of QRCode", () => {
    (<QRCode />: React$Element<typeof QRCode>);
  });

  describe("props", () => {
    it("passes when used properly", () => {
      <QRCode
        value="value"
        size={100}
        color="#000"
        backgroundColor="#fff"
        logoSize={1}
        logoBackgroundColor="red"
        logoMargin={5}
        logoBorderRadius={3}
        getRef={() => {}}
      />;
    });

    describe("ecl - error correction level", () => {
      it("passes when used properly", () => {
        <QRCode ecl="L" />;
        <QRCode ecl="M" />;
        <QRCode ecl="Q" />;
        <QRCode ecl="H" />;
      });

      it("raises an error when ecl invalid", () => {
        // $ExpectError
        <QRCode ecl="" />;
      });
    });

    describe("logo", () => {
      it("passes when used properly", () => {
        <QRCode logo={1} />;

        <QRCode logo={{ uri: "" }} />;
      });

      it("raises an error when logo invalid", () => {
        // $ExpectError
        <QRCode logo="https://" />;
      });
    });
  });
});
