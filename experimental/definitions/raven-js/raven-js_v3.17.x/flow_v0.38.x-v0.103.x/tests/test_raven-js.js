import Raven from "raven-js";
import { it, describe } from "flow-typed-test";

describe("raven-js", () => {
  describe("Raven.config", () => {
    it("works", () => {
      Raven.config("dsn");
      Raven.config("dsn", {});
      Raven.config("dsn", {
        level: "critical"
      });
      Raven.config("dsn").install();

      // $ExpectError - dsn argument is required
      Raven.config();

      // $ExpectError - dsn argument must be a string
      Raven.config(0);

      // $ExpectError - high is not a valid level option
      Raven.config("dsn", {
        level: "high"
      });

      // $ExpectError - unknown is not a method on Raven
      Raven.config("dsn").unknown();
    });
  });

  describe("Raven.isSetup", () => {
    it("works", () => {
      const isSetup: boolean = Raven.isSetup();

      // $ExpectError - Raven.isSetup returns a boolean
      const isSetupString: string = Raven.isSetup();
    });
  });

  describe("Raven.showReportDialog", () => {
    it("works", () => {
      Raven.showReportDialog();
      Raven.showReportDialog({});
      Raven.showReportDialog({
        dsn: "dsn"
      });
      Raven.showReportDialog({
        eventId: "eventId",
        ddsn: "dsn",
        user: {
          name: "name",
          email: "email"
        }
      });

      // $ExpectError - eventId must be a string
      Raven.showReportDialog({ eventId: 1 });

      // $ExpectError - dsn must be a string
      Raven.showReportDialog({ dsn: 1 });

      // $ExpectError - user name must be a string
      Raven.showReportDialog({
        user: { name: { first: "first", last: "last" } }
      });
    });
  });
});
