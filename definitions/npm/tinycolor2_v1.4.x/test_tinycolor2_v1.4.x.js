import tinycolor from 'tinycolor2';

const color = tinycolor('#F00');

color.toHSL();
color.toHSV();
color.toHex();

// $ExpectError
color.toThing();
