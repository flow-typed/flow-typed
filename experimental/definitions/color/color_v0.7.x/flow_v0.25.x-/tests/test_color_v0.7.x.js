// @flow

import Color from "color";

(new Color(): Color);
new Color('rgb(0,0,0)');
new Color({r: 0, g: 0, b: 0});
new Color().rgb().r;
(new Color().rgb(0, 0, 0): Color);

// $ExpectError
new Color().nope;

(Color(): Color);
Color('rgb(0,0,0)');
Color({r: 0, g: 0, b: 0});
Color().rgb().r;
(Color().rgb(0, 0, 0): Color);

// $ExpectError
Color().nope;
