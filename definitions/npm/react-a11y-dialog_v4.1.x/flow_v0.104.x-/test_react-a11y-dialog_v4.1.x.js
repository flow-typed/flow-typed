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

describe("The `dialogRef` property", () => {
  it("should accept a reference callback", () => {
    <Dialog
      {...defaultProps}
      dialogRef={dialog => {
        if (dialog instanceof HTMLDialogElement) {
          (dialog: HTMLDialogElement);
        }

        if (dialog instanceof HTMLElement) {
          (dialog: HTMLElement);
        }
      }}
    />;
    // $ExpectError
    <Dialog {...defaultProps} dialogRef="" />;
  });
});
