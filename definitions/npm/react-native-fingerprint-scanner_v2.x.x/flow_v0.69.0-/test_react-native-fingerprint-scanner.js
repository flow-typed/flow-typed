// @flow
import { describe, it } from "flow-typed-test";
import FingerprintScanner, {
  type FingerprintScannerError
} from "react-native-fingerprint-scanner";

describe("release(): void", () => {
  it("passes when used properly", () => {
    (FingerprintScanner.release(): void);
  });
});

describe("isSensorAvailableFn(): Promise<BiometricsTypes>", () => {
  it("passes when used properly", () => {
    FingerprintScanner.isSensorAvailable().then(type => {
      (type: "Fingerprint" | "Face ID" | "Touch ID");
    });
  });
});

describe("authenticate({}): Promise<true>", () => {
  it("must return Promise", () => {
    FingerprintScanner.authenticate({}).then(result => {
      (result: true);
    });
  });

  it("passes when first argument is empty object", () => {
    FingerprintScanner.authenticate({});
  });

  it("raises an error when not pass argument", () => {
    // $ExpectError - first argument is required
    FingerprintScanner.authenticate();
  });

  describe("Android", () => {
    it("passes when used properly", () => {
      FingerprintScanner.authenticate({
        onAttempt: (error: FingerprintScannerError) => {}
      });

      FingerprintScanner.authenticate({
        onAttempt: (error: Error) => {}
      });

      FingerprintScanner.authenticate({
        onAttempt: () => {}
      });
    });

    it("raises an error when onAttempt isn't function", () => {
      // $ExpectError
      FingerprintScanner.authenticate({
        onAttempt: "ups..."
      });
    });
  });

  describe("IOS", () => {
    it("passes when used properly", () => {
      FingerprintScanner.authenticate({
        description: "Any string",
        fallbackEnabled: true
      });

      FingerprintScanner.authenticate({
        description: "Any string"
      });

      FingerprintScanner.authenticate({
        fallbackEnabled: true
      });
    });

    it("raises an error when params invalid", () => {
      // $ExpectError
      FingerprintScanner.authenticate({
        fallbackEnabled: "ups...",
        description: 123
      });
    });
  });
});
