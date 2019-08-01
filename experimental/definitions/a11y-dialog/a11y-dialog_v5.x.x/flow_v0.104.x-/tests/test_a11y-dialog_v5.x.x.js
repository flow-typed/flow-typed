// @flow

import { describe, it } from "flow-typed-test";
import A11yDialog from "a11y-dialog";

let el = document.getElementById("my-accessible-dialog");
let containers = document.querySelectorAll("container");
let dialog;

describe("The `A11yDialog` constructor", () => {
  it("should validate on default usage", () => {
    if (el instanceof HTMLElement) {
      dialog = new A11yDialog(el);
    }
  });

  it("should validate when passing targets", () => {
    if (el instanceof HTMLElement) {
      new A11yDialog(el, containers);
    }
  });

  it("should error when passing erroneous parameters", () => {
    // $ExpectError
    new A11yDialog("");
    // $ExpectError
    new A11yDialog(true, true);
    if (el instanceof HTMLElement) {
      // $ExpectError
      new A11yDialog(el, true);
    }
  });
});

describe("The `create` method", () => {
  it("should validate on default usage", () => {
    dialog.create();
  });

  it("should validate when passing the `targets` parameter", () => {
    dialog.create(containers);
  });

  it("should error when passing erroneous parameters", () => {
    // $ExpectError
    dialog.create(true);
  });
});

describe("The `show` method", () => {
  it("should validate on default usage", () => {
    dialog.show();
  });

  it("should validate when passing the `event` parameter", () => {
    document.addEventListener("click", (evt: Event) => {
      dialog.show(evt);
    });
  });

  it("should error when passing erroneous parameters", () => {
    // $ExpectError
    dialog.show("");
  });
});

describe("The `hide` method", () => {
  it("should validate on default usage", () => {
    dialog.hide();
  });

  it("should validate when passing the `event` parameter", () => {
    document.addEventListener("click", (evt: Event) => {
      dialog.hide(evt);
    });
  });

  it("should error when passing erroneous parameters", () => {
    // $ExpectError
    dialog.hide("");
  });
});

describe("The `destroy` method", () => {
  it("should validate on default usage", () => {
    dialog.destroy();
  });

  it("should error when passing erroneous parameters", () => {
    // $ExpectError
    dialog.create(true);
  });
});

describe("The `on` method", () => {
  it("should validate on default usage", () => {
    dialog.on("create", () => {});
    dialog.on("show", () => {});
    dialog.on("hide", () => {});
    dialog.on("destroy", () => {});
  });

  it("should validate on default usage with parameters", () => {
    dialog.on("show", dialogEl => {
      (dialogEl: HTMLElement);
    });

    dialog.on("show", (dialogEl, event) => {
      if (event instanceof Event) {
        (event: Event);
      }
    });
  });

  it("should error when passing erroneous parameters", () => {
    // $ExpectError
    dialog.on(() => {});
    // $ExpectError
    dialog.on("");
    // $ExpectError
    dialog.on("foobar");
    // $ExpectError
    dialog.on("show", true);
  });

  it("should error on missing parameters", () => {
    // $ExpectError
    dialog.on("show");
  });
});

describe("The `off` method", () => {
  it("should validate on default usage", () => {
    dialog.off("create", () => {});
    dialog.off("show", () => {});
    dialog.off("hide", () => {});
    dialog.off("destroy", () => {});
  });

  it("should validate on default usage with parameters", () => {
    dialog.off("show", dialogEl => {
      (dialogEl: HTMLElement);
    });

    dialog.off("show", (dialogEl, event) => {
      if (event instanceof Event) {
        (event: Event);
      }
    });
  });

  it("should error when passing erroneous parameters", () => {
    // $ExpectError
    dialog.off(() => {});
    // $ExpectError
    dialog.off("");
    // $ExpectError
    dialog.off("foobar");
    // $ExpectError
    dialog.off("show", true);
  });

  it("should error on missing parameters", () => {
    // $ExpectError
    dialog.off("show");
  });
});
