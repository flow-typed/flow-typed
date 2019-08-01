// @flow

import { describe, it } from "flow-typed-test";
import React from "react";
import Dialog from "react-a11y-dialog";

let defaultProps = {
  id: "my-accessible-dialog",
  appRoot: "#main",
  dialogRoot: "#dialog-root",
  title: "The dialog title",
  children: <p>Some content for the dialog.</p>
};

describe("The `role` property", () => {
  it("should accept an enum", () => {
    <Dialog {...defaultProps} role="dialog" />;
    <Dialog {...defaultProps} role="alertdialog" />;
    // $ExpectError
    <Dialog {...defaultProps} role="tooltip" />;
  });
});

describe("The `id` property", () => {
  it("should accept a string", () => {
    <Dialog {...defaultProps} id="" />;
    // $ExpectError
    <Dialog {...defaultProps} id={123} />;
  });
});

describe("The `title` property", () => {
  it("should accept a string", () => {
    <Dialog {...defaultProps} title="" />;
    // $ExpectError
    <Dialog {...defaultProps} title={true} />;
  });

  it("should accept an React Element", () => {
    <Dialog {...defaultProps} title={<h1>test</h1>} />;
    // $ExpectError
    <Dialog {...defaultProps} title={() => <h1>test</h1>} />;
  });
});

describe("The `titleId` property", () => {
  it("should accept a string", () => {
    <Dialog {...defaultProps} title="" />;
    // $ExpectError
    <Dialog {...defaultProps} id={123} />;
  });

  describe("The `closeButtonLabel` property", () => {
    it("should accept a string", () => {
      <Dialog {...defaultProps} closeButtonLabel="" />;
      // $ExpectError
      <Dialog {...defaultProps} closeButtonLabel={123} />;
    });
  });

  describe("The `closeButtonContent` property", () => {
    it("should accept a string", () => {
      <Dialog {...defaultProps} closeButtonContent="" />;
      // $ExpectError
      <Dialog {...defaultProps} closeButtonContent={123} />;
    });

    it("should accept an React Element", () => {
      <Dialog {...defaultProps} closeButtonContent={<span>test</span>} />;
      // $ExpectError
      <Dialog {...defaultProps} closeButtonContent={() => <span>test</span>} />;
    });
  });
});

describe("The `appRoot` property", () => {
  it("should accept a string", () => {
    <Dialog {...defaultProps} appRoot="" />;
    // $ExpectError
    <Dialog {...defaultProps} appRoot={true} />;
  });

  it("should accept aa array of strings", () => {
    <Dialog {...defaultProps} appRoot={["", ""]} />;
    // $ExpectError
    <Dialog {...defaultProps} appRoot={[true, false]} />;
  });
});

describe("The `dialogRoot` property", () => {
  it("should accept a string", () => {
    <Dialog {...defaultProps} dialogRoot="" />;
    // $ExpectError
    <Dialog {...defaultProps} dialogRoot={123} />;
  });
});

describe("The `classNames` property", () => {
  it("should accept an object with pre-defined keys", () => {
    <Dialog {...defaultProps} classNames={{ base: "", document: "" }} />;
    // $ExpectError
    <Dialog {...defaultProps} classNames="" />;
    // $ExpectError
    <Dialog {...defaultProps} classNames={{ foo: "" }} />;
  });
});

describe("The `useDialog` property", () => {
  it("should accept a boolean", () => {
    <Dialog {...defaultProps} useDialog />;
    <Dialog {...defaultProps} useDialog={true} />;
    // $ExpectError
    <Dialog {...defaultProps} useDialog="" />;
  });
});
