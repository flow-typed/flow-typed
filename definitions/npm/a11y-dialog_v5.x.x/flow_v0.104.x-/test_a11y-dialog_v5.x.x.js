// @flow

import { describe, it } from "flow-typed-test";
import A11yDialog from "a11y-dialog";

let el = document.getElementById("my-accessible-dialog");
let containers = document.querySelectorAll("container");
let dialog;
if (el instanceof HTMLElement) {
  dialog = new A11yDialog(el);
}

describe("The `dialog` property", () => {
  it("should validate on default usage", () => {
    if (dialog.dialog instanceof HTMLDialogElement) {
      (dialog.dialog.open: boolean);
      (dialog.dialog.returnValue: string);
      (dialog.dialog.show: Function);
      (dialog.dialog.showModal: Function);
      (dialog.dialog.close: Function);
    }
  });
});
