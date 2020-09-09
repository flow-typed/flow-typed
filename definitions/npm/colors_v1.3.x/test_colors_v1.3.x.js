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
      // $FlowExpectedError
      colors.enable("");
    });

    it("should return void", () => {
      (colors.enable(): void);
      // $FlowExpectedError
      (colors.enable(): string);
    });
  });

  describe("The `disable` method", () => {
    it("should not accept parameters", () => {
      colors.disable();
      // $FlowExpectedError
      colors.disable("");
    });

    it("should return void", () => {
      (colors.disable(): void);
      // $FlowExpectedError
      (colors.disable(): string);
    });
  });

  describe("The `disable` method", () => {
    it("should not accept parameters", () => {
      colors.disable();
      // $FlowExpectedError
      colors.disable("");
    });

    it("should return void", () => {
      (colors.disable(): void);
      // $FlowExpectedError
      (colors.disable(): string);
    });
  });

  describe("The `setTheme` method", () => {
    it("should accept a `theme` Object as parameter", () => {
      colors.setTheme({});
      // $FlowExpectedError
      colors.setTheme("");
    });

    it("should return void", () => {
      (colors.setTheme({}): void);
      // $FlowExpectedError
      (colors.setTheme({}): string);
    });
  });

  describe("The `strip` method", () => {
    it("should accept a String as parameter", () => {
      colors.strip("");
      // $FlowExpectedError
      colors.strip();
    });

    it("should return a String", () => {
      (colors.strip(""): string);
      // $FlowExpectedError
      (colors.strip(""): void);
    });
  });

  describe("The `stripColors` method", () => {
    it("should accept a String as parameter", () => {
      colors.stripColors("");
      // $FlowExpectedError
      colors.stripColors();
    });

    it("should return a String", () => {
      (colors.stripColors(""): string);
      // $FlowExpectedError
      (colors.stripColors(""): void);
    });
  });

  describe("The `black` method", () => {
    it("should accept a String as parameter", () => {
      colors.black("");
      // $FlowExpectedError
      colors.black();
    });

    it("should return a String", () => {
      (colors.black(""): string);
      // $FlowExpectedError
      (colors.black(""): void);
    });
  });

  describe("The `red` method", () => {
    it("should accept a String as parameter", () => {
      colors.red("");
      // $FlowExpectedError
      colors.red();
    });

    it("should return a String", () => {
      (colors.red(""): string);
      // $FlowExpectedError
      (colors.red(""): void);
    });
  });

  describe("The `green` method", () => {
    it("should accept a String as parameter", () => {
      colors.green("");
      // $FlowExpectedError
      colors.green();
    });

    it("should return a String", () => {
      (colors.green(""): string);
      // $FlowExpectedError
      (colors.green(""): void);
    });
  });

  describe("The `yellow` method", () => {
    it("should accept a String as parameter", () => {
      colors.yellow("");
      // $FlowExpectedError
      colors.yellow();
    });

    it("should return a String", () => {
      (colors.yellow(""): string);
      // $FlowExpectedError
      (colors.yellow(""): void);
    });
  });

  describe("The `blue` method", () => {
    it("should accept a String as parameter", () => {
      colors.blue("");
      // $FlowExpectedError
      colors.blue();
    });

    it("should return a String", () => {
      (colors.blue(""): string);
      // $FlowExpectedError
      (colors.blue(""): void);
    });
  });

  describe("The `magenta` method", () => {
    it("should accept a String as parameter", () => {
      colors.magenta("");
      // $FlowExpectedError
      colors.magenta();
    });

    it("should return a String", () => {
      (colors.magenta(""): string);
      // $FlowExpectedError
      (colors.magenta(""): void);
    });
  });

  describe("The `cyan` method", () => {
    it("should accept a String as parameter", () => {
      colors.cyan("");
      // $FlowExpectedError
      colors.cyan();
    });

    it("should return a String", () => {
      (colors.cyan(""): string);
      // $FlowExpectedError
      (colors.cyan(""): void);
    });
  });

  describe("The `white` method", () => {
    it("should accept a String as parameter", () => {
      colors.white("");
      // $FlowExpectedError
      colors.white();
    });

    it("should return a String", () => {
      (colors.white(""): string);
      // $FlowExpectedError
      (colors.white(""): void);
    });
  });

  describe("The `gray` method", () => {
    it("should accept a String as parameter", () => {
      colors.gray("");
      // $FlowExpectedError
      colors.gray();
    });

    it("should return a String", () => {
      (colors.gray(""): string);
      // $FlowExpectedError
      (colors.gray(""): void);
    });
  });

  describe("The `grey` method", () => {
    it("should accept a String as parameter", () => {
      colors.grey("");
      // $FlowExpectedError
      colors.grey();
    });

    it("should return a String", () => {
      (colors.grey(""): string);
      // $FlowExpectedError
      (colors.grey(""): void);
    });
  });

  describe("The `bgBlack` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgBlack("");
      // $FlowExpectedError
      colors.bgBlack();
    });

    it("should return a String", () => {
      (colors.bgBlack(""): string);
      // $FlowExpectedError
      (colors.bgBlack(""): void);
    });
  });

  describe("The `bgRed` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgRed("");
      // $FlowExpectedError
      colors.bgRed();
    });

    it("should return a String", () => {
      (colors.bgRed(""): string);
      // $FlowExpectedError
      (colors.bgRed(""): void);
    });
  });

  describe("The `bgGreen` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgGreen("");
      // $FlowExpectedError
      colors.bgGreen();
    });

    it("should return a String", () => {
      (colors.bgGreen(""): string);
      // $FlowExpectedError
      (colors.bgGreen(""): void);
    });
  });

  describe("The `bgYellow` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgYellow("");
      // $FlowExpectedError
      colors.bgYellow();
    });

    it("should return a String", () => {
      (colors.bgYellow(""): string);
      // $FlowExpectedError
      (colors.bgYellow(""): void);
    });
  });

  describe("The `bgBlue` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgBlue("");
      // $FlowExpectedError
      colors.bgBlue();
    });

    it("should return a String", () => {
      (colors.bgBlue(""): string);
      // $FlowExpectedError
      (colors.bgBlue(""): void);
    });
  });

  describe("The `bgMagenta` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgMagenta("");
      // $FlowExpectedError
      colors.bgMagenta();
    });

    it("should return a String", () => {
      (colors.bgMagenta(""): string);
      // $FlowExpectedError
      (colors.bgMagenta(""): void);
    });
  });

  describe("The `bgCyan` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgCyan("");
      // $FlowExpectedError
      colors.bgCyan();
    });

    it("should return a String", () => {
      (colors.bgCyan(""): string);
      // $FlowExpectedError
      (colors.bgCyan(""): void);
    });
  });

  describe("The `bgWhite` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgWhite("");
      // $FlowExpectedError
      colors.bgWhite();
    });

    it("should return a String", () => {
      (colors.bgWhite(""): string);
      // $FlowExpectedError
      (colors.bgWhite(""): void);
    });
  });

  describe("The `reset` method", () => {
    it("should accept a String as parameter", () => {
      colors.reset("");
      // $FlowExpectedError
      colors.reset();
    });

    it("should return a String", () => {
      (colors.reset(""): string);
      // $FlowExpectedError
      (colors.reset(""): void);
    });
  });

  describe("The `bold` method", () => {
    it("should accept a String as parameter", () => {
      colors.bold("");
      // $FlowExpectedError
      colors.bold();
    });

    it("should return a String", () => {
      (colors.bold(""): string);
      // $FlowExpectedError
      (colors.bold(""): void);
    });
  });

  describe("The `dim` method", () => {
    it("should accept a String as parameter", () => {
      colors.dim("");
      // $FlowExpectedError
      colors.dim();
    });

    it("should return a String", () => {
      (colors.dim(""): string);
      // $FlowExpectedError
      (colors.dim(""): void);
    });
  });

  describe("The `italic` method", () => {
    it("should accept a String as parameter", () => {
      colors.italic("");
      // $FlowExpectedError
      colors.italic();
    });

    it("should return a String", () => {
      (colors.italic(""): string);
      // $FlowExpectedError
      (colors.italic(""): void);
    });
  });

  describe("The `underline` method", () => {
    it("should accept a String as parameter", () => {
      colors.underline("");
      // $FlowExpectedError
      colors.underline();
    });

    it("should return a String", () => {
      (colors.underline(""): string);
      // $FlowExpectedError
      (colors.underline(""): void);
    });
  });

  describe("The `inverse` method", () => {
    it("should accept a String as parameter", () => {
      colors.inverse("");
      // $FlowExpectedError
      colors.inverse();
    });

    it("should return a String", () => {
      (colors.inverse(""): string);
      // $FlowExpectedError
      (colors.inverse(""): void);
    });
  });

  describe("The `hidden` method", () => {
    it("should accept a String as parameter", () => {
      colors.hidden("");
      // $FlowExpectedError
      colors.hidden();
    });

    it("should return a String", () => {
      (colors.hidden(""): string);
      // $FlowExpectedError
      (colors.hidden(""): void);
    });
  });

  describe("The `strikethrough` method", () => {
    it("should accept a String as parameter", () => {
      colors.strikethrough("");
      // $FlowExpectedError
      colors.strikethrough();
    });

    it("should return a String", () => {
      (colors.strikethrough(""): string);
      // $FlowExpectedError
      (colors.strikethrough(""): void);
    });
  });

  describe("The `rainbow` method", () => {
    it("should accept a String as parameter", () => {
      colors.rainbow("");
      // $FlowExpectedError
      colors.rainbow();
    });

    it("should return a String", () => {
      (colors.rainbow(""): string);
      // $FlowExpectedError
      (colors.rainbow(""): void);
    });
  });

  describe("The `zebra` method", () => {
    it("should accept a String as parameter", () => {
      colors.zebra("");
      // $FlowExpectedError
      colors.zebra();
    });

    it("should return a String", () => {
      (colors.zebra(""): string);
      // $FlowExpectedError
      (colors.zebra(""): void);
    });
  });

  describe("The `america` method", () => {
    it("should accept a String as parameter", () => {
      colors.america("");
      // $FlowExpectedError
      colors.america();
    });

    it("should return a String", () => {
      (colors.america(""): string);
      // $FlowExpectedError
      (colors.america(""): void);
    });
  });

  describe("The `trap` method", () => {
    it("should accept a String as parameter", () => {
      colors.trap("");
      // $FlowExpectedError
      colors.trap();
    });

    it("should return a String", () => {
      (colors.trap(""): string);
      // $FlowExpectedError
      (colors.trap(""): void);
    });
  });

  describe("The `random` method", () => {
    it("should accept a String as parameter", () => {
      colors.random("");
      // $FlowExpectedError
      colors.random();
    });

    it("should return a String", () => {
      (colors.random(""): string);
      // $FlowExpectedError
      (colors.random(""): void);
    });
  });

  describe("The `zalgo` method", () => {
    it("should accept a String as parameter", () => {
      colors.zalgo("");
      // $FlowExpectedError
      colors.zalgo();
    });

    it("should return a String", () => {
      (colors.zalgo(""): string);
      // $FlowExpectedError
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
