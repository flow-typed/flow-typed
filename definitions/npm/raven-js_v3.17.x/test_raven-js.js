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

      // $FlowExpectedError - dsn argument is required
      Raven.config();

      // $FlowExpectedError - dsn argument must be a string
      Raven.config(0);

      // $FlowExpectedError - high is not a valid level option
      Raven.config("dsn", {
        level: "high"
      });

      // $FlowExpectedError - unknown is not a method on Raven
      Raven.config("dsn").unknown();
    });
  });

  describe("Raven.isSetup", () => {
    it("works", () => {
      const isSetup: boolean = Raven.isSetup();

      // $FlowExpectedError - Raven.isSetup returns a boolean
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

      // $FlowExpectedError - eventId must be a string
      Raven.showReportDialog({ eventId: 1 });

      // $FlowExpectedError - dsn must be a string
      Raven.showReportDialog({ dsn: 1 });

      // $FlowExpectedError - user name must be a string
      Raven.showReportDialog({
        user: { name: { first: "first", last: "last" } }
      });
    });
  });
});
