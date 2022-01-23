// @flow

import { describe, it } from "flow-typed-test";
import colors from "colors";

describe("The `colors` safe API", () => {
  describe("The `enabled` property", () => {
    it("should read as a boolean", () => {
      (colors.enabled: boolean);
    });
  });

  describe("The `themes` property", () => {
    it("should read as an Object", () => {
      (colors.themes: Object);
    });
  });

  describe("The `enable` method", () => {
    it("should not accept parameters", () => {
      colors.enable();
      // $FlowExpectedError[extra-arg]
      colors.enable("");
    });

    it("should return void", () => {
      (colors.enable(): void);
      // $FlowExpectedError[incompatible-cast]
      (colors.enable(): string);
    });
  });

  describe("The `disable` method", () => {
    it("should not accept parameters", () => {
      colors.disable();
      // $FlowExpectedError[extra-arg]
      colors.disable("");
    });

    it("should return void", () => {
      (colors.disable(): void);
      // $FlowExpectedError[incompatible-cast]
      (colors.disable(): string);
    });
  });

  describe("The `disable` method", () => {
    it("should not accept parameters", () => {
      colors.disable();
      // $FlowExpectedError[extra-arg]
      colors.disable("");
    });

    it("should return void", () => {
      (colors.disable(): void);
      // $FlowExpectedError[incompatible-cast]
      (colors.disable(): string);
    });
  });

  describe("The `setTheme` method", () => {
    it("should accept a `theme` Object as parameter", () => {
      colors.setTheme({});
      // $FlowExpectedError[incompatible-call]
      colors.setTheme("");
    });

    it("should return void", () => {
      (colors.setTheme({}): void);
      // $FlowExpectedError[incompatible-cast]
      (colors.setTheme({}): string);
    });
  });

  describe("The `strip` method", () => {
    it("should accept a String as parameter", () => {
      colors.strip("");
      // $FlowExpectedError[incompatible-call]
      colors.strip();
    });

    it("should return a String", () => {
      (colors.strip(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.strip(""): void);
    });
  });

  describe("The `stripColors` method", () => {
    it("should accept a String as parameter", () => {
      colors.stripColors("");
      // $FlowExpectedError[incompatible-call]
      colors.stripColors();
    });

    it("should return a String", () => {
      (colors.stripColors(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.stripColors(""): void);
    });
  });

  describe("The `black` method", () => {
    it("should accept a String as parameter", () => {
      colors.black("");
      // $FlowExpectedError[incompatible-call]
      colors.black();
    });

    it("should return a String", () => {
      (colors.black(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.black(""): void);
    });
  });

  describe("The `red` method", () => {
    it("should accept a String as parameter", () => {
      colors.red("");
      // $FlowExpectedError[incompatible-call]
      colors.red();
    });

    it("should return a String", () => {
      (colors.red(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.red(""): void);
    });
  });

  describe("The `green` method", () => {
    it("should accept a String as parameter", () => {
      colors.green("");
      // $FlowExpectedError[incompatible-call]
      colors.green();
    });

    it("should return a String", () => {
      (colors.green(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.green(""): void);
    });
  });

  describe("The `yellow` method", () => {
    it("should accept a String as parameter", () => {
      colors.yellow("");
      // $FlowExpectedError[incompatible-call]
      colors.yellow();
    });

    it("should return a String", () => {
      (colors.yellow(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.yellow(""): void);
    });
  });

  describe("The `blue` method", () => {
    it("should accept a String as parameter", () => {
      colors.blue("");
      // $FlowExpectedError[incompatible-call]
      colors.blue();
    });

    it("should return a String", () => {
      (colors.blue(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.blue(""): void);
    });
  });

  describe("The `magenta` method", () => {
    it("should accept a String as parameter", () => {
      colors.magenta("");
      // $FlowExpectedError[incompatible-call]
      colors.magenta();
    });

    it("should return a String", () => {
      (colors.magenta(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.magenta(""): void);
    });
  });

  describe("The `cyan` method", () => {
    it("should accept a String as parameter", () => {
      colors.cyan("");
      // $FlowExpectedError[incompatible-call]
      colors.cyan();
    });

    it("should return a String", () => {
      (colors.cyan(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.cyan(""): void);
    });
  });

  describe("The `white` method", () => {
    it("should accept a String as parameter", () => {
      colors.white("");
      // $FlowExpectedError[incompatible-call]
      colors.white();
    });

    it("should return a String", () => {
      (colors.white(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.white(""): void);
    });
  });

  describe("The `gray` method", () => {
    it("should accept a String as parameter", () => {
      colors.gray("");
      // $FlowExpectedError[incompatible-call]
      colors.gray();
    });

    it("should return a String", () => {
      (colors.gray(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.gray(""): void);
    });
  });

  describe("The `grey` method", () => {
    it("should accept a String as parameter", () => {
      colors.grey("");
      // $FlowExpectedError[incompatible-call]
      colors.grey();
    });

    it("should return a String", () => {
      (colors.grey(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.grey(""): void);
    });
  });

  describe("The `bgBlack` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgBlack("");
      // $FlowExpectedError[incompatible-call]
      colors.bgBlack();
    });

    it("should return a String", () => {
      (colors.bgBlack(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.bgBlack(""): void);
    });
  });

  describe("The `bgRed` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgRed("");
      // $FlowExpectedError[incompatible-call]
      colors.bgRed();
    });

    it("should return a String", () => {
      (colors.bgRed(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.bgRed(""): void);
    });
  });

  describe("The `bgGreen` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgGreen("");
      // $FlowExpectedError[incompatible-call]
      colors.bgGreen();
    });

    it("should return a String", () => {
      (colors.bgGreen(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.bgGreen(""): void);
    });
  });

  describe("The `bgYellow` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgYellow("");
      // $FlowExpectedError[incompatible-call]
      colors.bgYellow();
    });

    it("should return a String", () => {
      (colors.bgYellow(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.bgYellow(""): void);
    });
  });

  describe("The `bgBlue` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgBlue("");
      // $FlowExpectedError[incompatible-call]
      colors.bgBlue();
    });

    it("should return a String", () => {
      (colors.bgBlue(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.bgBlue(""): void);
    });
  });

  describe("The `bgMagenta` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgMagenta("");
      // $FlowExpectedError[incompatible-call]
      colors.bgMagenta();
    });

    it("should return a String", () => {
      (colors.bgMagenta(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.bgMagenta(""): void);
    });
  });

  describe("The `bgCyan` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgCyan("");
      // $FlowExpectedError[incompatible-call]
      colors.bgCyan();
    });

    it("should return a String", () => {
      (colors.bgCyan(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.bgCyan(""): void);
    });
  });

  describe("The `bgWhite` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgWhite("");
      // $FlowExpectedError[incompatible-call]
      colors.bgWhite();
    });

    it("should return a String", () => {
      (colors.bgWhite(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.bgWhite(""): void);
    });
  });

  describe("The `reset` method", () => {
    it("should accept a String as parameter", () => {
      colors.reset("");
      // $FlowExpectedError[incompatible-call]
      colors.reset();
    });

    it("should return a String", () => {
      (colors.reset(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.reset(""): void);
    });
  });

  describe("The `bold` method", () => {
    it("should accept a String as parameter", () => {
      colors.bold("");
      // $FlowExpectedError[incompatible-call]
      colors.bold();
    });

    it("should return a String", () => {
      (colors.bold(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.bold(""): void);
    });
  });

  describe("The `dim` method", () => {
    it("should accept a String as parameter", () => {
      colors.dim("");
      // $FlowExpectedError[incompatible-call]
      colors.dim();
    });

    it("should return a String", () => {
      (colors.dim(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.dim(""): void);
    });
  });

  describe("The `italic` method", () => {
    it("should accept a String as parameter", () => {
      colors.italic("");
      // $FlowExpectedError[incompatible-call]
      colors.italic();
    });

    it("should return a String", () => {
      (colors.italic(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.italic(""): void);
    });
  });

  describe("The `underline` method", () => {
    it("should accept a String as parameter", () => {
      colors.underline("");
      // $FlowExpectedError[incompatible-call]
      colors.underline();
    });

    it("should return a String", () => {
      (colors.underline(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.underline(""): void);
    });
  });

  describe("The `inverse` method", () => {
    it("should accept a String as parameter", () => {
      colors.inverse("");
      // $FlowExpectedError[incompatible-call]
      colors.inverse();
    });

    it("should return a String", () => {
      (colors.inverse(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.inverse(""): void);
    });
  });

  describe("The `hidden` method", () => {
    it("should accept a String as parameter", () => {
      colors.hidden("");
      // $FlowExpectedError[incompatible-call]
      colors.hidden();
    });

    it("should return a String", () => {
      (colors.hidden(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.hidden(""): void);
    });
  });

  describe("The `strikethrough` method", () => {
    it("should accept a String as parameter", () => {
      colors.strikethrough("");
      // $FlowExpectedError[incompatible-call]
      colors.strikethrough();
    });

    it("should return a String", () => {
      (colors.strikethrough(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.strikethrough(""): void);
    });
  });

  describe("The `rainbow` method", () => {
    it("should accept a String as parameter", () => {
      colors.rainbow("");
      // $FlowExpectedError[incompatible-call]
      colors.rainbow();
    });

    it("should return a String", () => {
      (colors.rainbow(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.rainbow(""): void);
    });
  });

  describe("The `zebra` method", () => {
    it("should accept a String as parameter", () => {
      colors.zebra("");
      // $FlowExpectedError[incompatible-call]
      colors.zebra();
    });

    it("should return a String", () => {
      (colors.zebra(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.zebra(""): void);
    });
  });

  describe("The `america` method", () => {
    it("should accept a String as parameter", () => {
      colors.america("");
      // $FlowExpectedError[incompatible-call]
      colors.america();
    });

    it("should return a String", () => {
      (colors.america(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.america(""): void);
    });
  });

  describe("The `trap` method", () => {
    it("should accept a String as parameter", () => {
      colors.trap("");
      // $FlowExpectedError[incompatible-call]
      colors.trap();
    });

    it("should return a String", () => {
      (colors.trap(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.trap(""): void);
    });
  });

  describe("The `random` method", () => {
    it("should accept a String as parameter", () => {
      colors.random("");
      // $FlowExpectedError[incompatible-call]
      colors.random();
    });

    it("should return a String", () => {
      (colors.random(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.random(""): void);
    });
  });

  describe("The `zalgo` method", () => {
    it("should accept a String as parameter", () => {
      colors.zalgo("");
      // $FlowExpectedError[incompatible-call]
      colors.zalgo();
    });

    it("should return a String", () => {
      (colors.zalgo(""): string);
      // $FlowExpectedError[incompatible-cast]
      (colors.zalgo(""): void);
    });
  });

  describe("Colors", () => {
    it("should allow nested style modifiers", () => {
      colors.red.bold("");
      colors.bold.red("");
    });
  });
});
