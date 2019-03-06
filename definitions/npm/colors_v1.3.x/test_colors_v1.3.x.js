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
      // $ExpectError
      colors.enable("");
    });

    it("should return void", () => {
      (colors.enable(): void);
      // $ExpectError
      (colors.enable(): string);
    });
  });

  describe("The `disable` method", () => {
    it("should not accept parameters", () => {
      colors.disable();
      // $ExpectError
      colors.disable("");
    });

    it("should return void", () => {
      (colors.disable(): void);
      // $ExpectError
      (colors.disable(): string);
    });
  });

  describe("The `disable` method", () => {
    it("should not accept parameters", () => {
      colors.disable();
      // $ExpectError
      colors.disable("");
    });

    it("should return void", () => {
      (colors.disable(): void);
      // $ExpectError
      (colors.disable(): string);
    });
  });

  describe("The `setTheme` method", () => {
    it("should accept a `theme` Object as parameter", () => {
      colors.setTheme({});
      // $ExpectError
      colors.setTheme("");
    });

    it("should return void", () => {
      (colors.setTheme({}): void);
      // $ExpectError
      (colors.setTheme({}): string);
    });
  });

  describe("The `strip` method", () => {
    it("should accept a String as parameter", () => {
      colors.strip("");
      // $ExpectError
      colors.strip();
    });

    it("should return a String", () => {
      (colors.strip(""): string);
      // $ExpectError
      (colors.strip(""): void);
    });
  });

  describe("The `stripColors` method", () => {
    it("should accept a String as parameter", () => {
      colors.stripColors("");
      // $ExpectError
      colors.stripColors();
    });

    it("should return a String", () => {
      (colors.stripColors(""): string);
      // $ExpectError
      (colors.stripColors(""): void);
    });
  });

  describe("The `black` method", () => {
    it("should accept a String as parameter", () => {
      colors.black("");
      // $ExpectError
      colors.black();
    });

    it("should return a String", () => {
      (colors.black(""): string);
      // $ExpectError
      (colors.black(""): void);
    });
  });

  describe("The `red` method", () => {
    it("should accept a String as parameter", () => {
      colors.red("");
      // $ExpectError
      colors.red();
    });

    it("should return a String", () => {
      (colors.red(""): string);
      // $ExpectError
      (colors.red(""): void);
    });
  });

  describe("The `green` method", () => {
    it("should accept a String as parameter", () => {
      colors.green("");
      // $ExpectError
      colors.green();
    });

    it("should return a String", () => {
      (colors.green(""): string);
      // $ExpectError
      (colors.green(""): void);
    });
  });

  describe("The `yellow` method", () => {
    it("should accept a String as parameter", () => {
      colors.yellow("");
      // $ExpectError
      colors.yellow();
    });

    it("should return a String", () => {
      (colors.yellow(""): string);
      // $ExpectError
      (colors.yellow(""): void);
    });
  });

  describe("The `blue` method", () => {
    it("should accept a String as parameter", () => {
      colors.blue("");
      // $ExpectError
      colors.blue();
    });

    it("should return a String", () => {
      (colors.blue(""): string);
      // $ExpectError
      (colors.blue(""): void);
    });
  });

  describe("The `magenta` method", () => {
    it("should accept a String as parameter", () => {
      colors.magenta("");
      // $ExpectError
      colors.magenta();
    });

    it("should return a String", () => {
      (colors.magenta(""): string);
      // $ExpectError
      (colors.magenta(""): void);
    });
  });

  describe("The `cyan` method", () => {
    it("should accept a String as parameter", () => {
      colors.cyan("");
      // $ExpectError
      colors.cyan();
    });

    it("should return a String", () => {
      (colors.cyan(""): string);
      // $ExpectError
      (colors.cyan(""): void);
    });
  });

  describe("The `white` method", () => {
    it("should accept a String as parameter", () => {
      colors.white("");
      // $ExpectError
      colors.white();
    });

    it("should return a String", () => {
      (colors.white(""): string);
      // $ExpectError
      (colors.white(""): void);
    });
  });

  describe("The `gray` method", () => {
    it("should accept a String as parameter", () => {
      colors.gray("");
      // $ExpectError
      colors.gray();
    });

    it("should return a String", () => {
      (colors.gray(""): string);
      // $ExpectError
      (colors.gray(""): void);
    });
  });

  describe("The `grey` method", () => {
    it("should accept a String as parameter", () => {
      colors.grey("");
      // $ExpectError
      colors.grey();
    });

    it("should return a String", () => {
      (colors.grey(""): string);
      // $ExpectError
      (colors.grey(""): void);
    });
  });

  describe("The `bgBlack` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgBlack("");
      // $ExpectError
      colors.bgBlack();
    });

    it("should return a String", () => {
      (colors.bgBlack(""): string);
      // $ExpectError
      (colors.bgBlack(""): void);
    });
  });

  describe("The `bgRed` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgRed("");
      // $ExpectError
      colors.bgRed();
    });

    it("should return a String", () => {
      (colors.bgRed(""): string);
      // $ExpectError
      (colors.bgRed(""): void);
    });
  });

  describe("The `bgGreen` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgGreen("");
      // $ExpectError
      colors.bgGreen();
    });

    it("should return a String", () => {
      (colors.bgGreen(""): string);
      // $ExpectError
      (colors.bgGreen(""): void);
    });
  });

  describe("The `bgYellow` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgYellow("");
      // $ExpectError
      colors.bgYellow();
    });

    it("should return a String", () => {
      (colors.bgYellow(""): string);
      // $ExpectError
      (colors.bgYellow(""): void);
    });
  });

  describe("The `bgBlue` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgBlue("");
      // $ExpectError
      colors.bgBlue();
    });

    it("should return a String", () => {
      (colors.bgBlue(""): string);
      // $ExpectError
      (colors.bgBlue(""): void);
    });
  });

  describe("The `bgMagenta` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgMagenta("");
      // $ExpectError
      colors.bgMagenta();
    });

    it("should return a String", () => {
      (colors.bgMagenta(""): string);
      // $ExpectError
      (colors.bgMagenta(""): void);
    });
  });

  describe("The `bgCyan` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgCyan("");
      // $ExpectError
      colors.bgCyan();
    });

    it("should return a String", () => {
      (colors.bgCyan(""): string);
      // $ExpectError
      (colors.bgCyan(""): void);
    });
  });

  describe("The `bgWhite` method", () => {
    it("should accept a String as parameter", () => {
      colors.bgWhite("");
      // $ExpectError
      colors.bgWhite();
    });

    it("should return a String", () => {
      (colors.bgWhite(""): string);
      // $ExpectError
      (colors.bgWhite(""): void);
    });
  });

  describe("The `reset` method", () => {
    it("should accept a String as parameter", () => {
      colors.reset("");
      // $ExpectError
      colors.reset();
    });

    it("should return a String", () => {
      (colors.reset(""): string);
      // $ExpectError
      (colors.reset(""): void);
    });
  });

  describe("The `bold` method", () => {
    it("should accept a String as parameter", () => {
      colors.bold("");
      // $ExpectError
      colors.bold();
    });

    it("should return a String", () => {
      (colors.bold(""): string);
      // $ExpectError
      (colors.bold(""): void);
    });
  });

  describe("The `dim` method", () => {
    it("should accept a String as parameter", () => {
      colors.dim("");
      // $ExpectError
      colors.dim();
    });

    it("should return a String", () => {
      (colors.dim(""): string);
      // $ExpectError
      (colors.dim(""): void);
    });
  });

  describe("The `italic` method", () => {
    it("should accept a String as parameter", () => {
      colors.italic("");
      // $ExpectError
      colors.italic();
    });

    it("should return a String", () => {
      (colors.italic(""): string);
      // $ExpectError
      (colors.italic(""): void);
    });
  });

  describe("The `underline` method", () => {
    it("should accept a String as parameter", () => {
      colors.underline("");
      // $ExpectError
      colors.underline();
    });

    it("should return a String", () => {
      (colors.underline(""): string);
      // $ExpectError
      (colors.underline(""): void);
    });
  });

  describe("The `inverse` method", () => {
    it("should accept a String as parameter", () => {
      colors.inverse("");
      // $ExpectError
      colors.inverse();
    });

    it("should return a String", () => {
      (colors.inverse(""): string);
      // $ExpectError
      (colors.inverse(""): void);
    });
  });

  describe("The `hidden` method", () => {
    it("should accept a String as parameter", () => {
      colors.hidden("");
      // $ExpectError
      colors.hidden();
    });

    it("should return a String", () => {
      (colors.hidden(""): string);
      // $ExpectError
      (colors.hidden(""): void);
    });
  });

  describe("The `strikethrough` method", () => {
    it("should accept a String as parameter", () => {
      colors.strikethrough("");
      // $ExpectError
      colors.strikethrough();
    });

    it("should return a String", () => {
      (colors.strikethrough(""): string);
      // $ExpectError
      (colors.strikethrough(""): void);
    });
  });

  describe("The `rainbow` method", () => {
    it("should accept a String as parameter", () => {
      colors.rainbow("");
      // $ExpectError
      colors.rainbow();
    });

    it("should return a String", () => {
      (colors.rainbow(""): string);
      // $ExpectError
      (colors.rainbow(""): void);
    });
  });

  describe("The `zebra` method", () => {
    it("should accept a String as parameter", () => {
      colors.zebra("");
      // $ExpectError
      colors.zebra();
    });

    it("should return a String", () => {
      (colors.zebra(""): string);
      // $ExpectError
      (colors.zebra(""): void);
    });
  });

  describe("The `america` method", () => {
    it("should accept a String as parameter", () => {
      colors.america("");
      // $ExpectError
      colors.america();
    });

    it("should return a String", () => {
      (colors.america(""): string);
      // $ExpectError
      (colors.america(""): void);
    });
  });

  describe("The `trap` method", () => {
    it("should accept a String as parameter", () => {
      colors.trap("");
      // $ExpectError
      colors.trap();
    });

    it("should return a String", () => {
      (colors.trap(""): string);
      // $ExpectError
      (colors.trap(""): void);
    });
  });

  describe("The `random` method", () => {
    it("should accept a String as parameter", () => {
      colors.random("");
      // $ExpectError
      colors.random();
    });

    it("should return a String", () => {
      (colors.random(""): string);
      // $ExpectError
      (colors.random(""): void);
    });
  });

  describe("The `zalgo` method", () => {
    it("should accept a String as parameter", () => {
      colors.zalgo("");
      // $ExpectError
      colors.zalgo();
    });

    it("should return a String", () => {
      (colors.zalgo(""): string);
      // $ExpectError
      (colors.zalgo(""): void);
    });
  });
});
