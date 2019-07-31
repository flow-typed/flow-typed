// @flow
import type { ColourMode, ColourObject, ColourObjectArray } from 'chromatism';
import {
  convert,
  complementary,
  triad,
  tetrad,
  uniformComplementary,
  uniformTriad,
  uniformTetrad,
  mid,
  invert,
  invertLightness,
  multiply,
  adjacent,
  fade,
  shade,
  saturation,
  brightness,
  hue,
  contrast,
  greyscale,
  sepia,
  contrastRatio,
  adapt,
  difference,
  temperature,
} from 'chromatism'

declare var colour: ColourMode;
declare var colourOne: ColourMode;
declare var colourTwo: ColourMode;
declare var colourFrom: ColourMode;
declare var colourTo: ColourMode;
declare var illuminantColour: ColourMode;
declare var sourceIlluminant: ColourMode;
declare var percent: number;
declare var sections: number;
declare var degrees: number;
declare var amount: number;
declare var contrastCoeff: number;
declare var luminanceWeight: number;
declare var chromaWeight: number;

declare var fakeColour: { foo: number, bar: number };

var convert1: ColourObject = convert(colour);
// $ExpectError
var convert2: ColourObject = convert(fakeColour);

var complementary1: ColourObject = complementary(colour);
// $ExpectError
var complementary2: ColourObject = complementary1(fakeColour);

var triad1: ColourObjectArray = triad(colour);
// $ExpectError
var triad2: ColourObjectArray = triad(fakeColour);

var tetrad1: ColourObjectArray = tetrad(colour);
// $ExpectError
var tetrad2: ColourObjectArray = tetrad(fakeColour);

var uniformComplementary1: ColourObject = uniformComplementary(colour);
// $ExpectError
var uniformComplementary2: ColourObject = uniformComplementary(fakeColour);

var uniformTriad1: ColourObjectArray = uniformTriad(colour);
// $ExpectError
var uniformTriad2: ColourObjectArray = uniformTriad(fakeColour);

var uniformTetrad1: ColourObjectArray = uniformTetrad(colour);
// $ExpectError
var uniformTetrad2: ColourObjectArray = uniformTetrad(fakeColour);

var mid1: ColourObject = mid(colourOne, colourTwo);
// $ExpectError
var mid2: ColourObject = mid(fakeColour, fakeColour);

var invert1: ColourObject = invert(colour);
// $ExpectError
var invert2: ColourObject = invert(fakeColour);

var invertLightness1: ColourObject = invertLightness(colour);
// $ExpectError
var invertLightness2: ColourObject = invertLightness(fakeColour);

var multiply1: ColourObject = multiply(colourOne, colourTwo);
// $ExpectError
var multiply2: ColourObject = multiply(fakeColour, fakeColour);

var adjacent1: ColourObjectArray = adjacent(degrees, sections, colour);
// $ExpectError
var adjacent2: ColourObjectArray = adjacent(degrees, sections, fakeColour);

var fade1: ColourObjectArray = fade(amount, colourFrom, colourTo);
// $ExpectError
var fade2: ColourObjectArray = fade(amount, fakeColour, fakeColour);

var shade1: ColourObject = shade(percent, colour);
// $ExpectError
var shade2: ColourObject = shade(percent, fakeColour);

var saturation1: ColourObject = saturation(percent, colour);
// $ExpectError
var saturation2: ColourObject = saturation(percent, fakeColour);

var brightness1: ColourObject = brightness(percent, colour);
// $ExpectError
var brightness2: ColourObject = brightness(percent, fakeColour);

var hue1: ColourObject = hue(degrees, colour);
// $ExpectError
var hue2: ColourObject = hue(degrees, fakeColour);

var contrast1: ColourObject = contrast(contrastCoeff, colour);
// $ExpectError
var contrast2: ColourObject = contrast(contrastCoeff, fakeColour);

var greyscale1: ColourObject = greyscale(colour);
// $ExpectError
var greyscale2: ColourObject = greyscale(fakeColour);

var sepia1: ColourObject = sepia(colour);
// $ExpectError
var sepia2: ColourObject = sepia(fakeColour);

var contrastRatio1: ColourObject = contrastRatio(colour);
// $ExpectError
var contrastRatio2: ColourObject = contrastRatio(fakeColour);

var adapt1: ColourObject = adapt(colour, illuminantColour);
var adapt2: ColourObject = adapt(colour, illuminantColour, sourceIlluminant);
// $ExpectError
var adapt3: ColourObject = adapt(fakeColour, illuminantColour, sourceIlluminant);

var difference1: number = difference(colourOne, colourTwo);
var difference2: number = difference(colourOne, colourTwo, luminanceWeight);
var difference3: number = difference(colourOne, colourTwo, luminanceWeight, chromaWeight);
// $ExpectError
var difference4: number = difference(fakeColour, fakeColour, luminanceWeight, chromaWeight);

var temperature1: number = temperature(colour);
// $ExpectError
var temperature2: number = temperature(fakeColour);
