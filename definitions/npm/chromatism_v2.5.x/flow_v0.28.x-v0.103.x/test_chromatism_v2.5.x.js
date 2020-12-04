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
// $FlowExpectedError
var convert2: ColourObject = convert(fakeColour);

var complementary1: ColourObject = complementary(colour);
// $FlowExpectedError
var complementary2: ColourObject = complementary1(fakeColour);

var triad1: ColourObjectArray = triad(colour);
// $FlowExpectedError
var triad2: ColourObjectArray = triad(fakeColour);

var tetrad1: ColourObjectArray = tetrad(colour);
// $FlowExpectedError
var tetrad2: ColourObjectArray = tetrad(fakeColour);

var uniformComplementary1: ColourObject = uniformComplementary(colour);
// $FlowExpectedError
var uniformComplementary2: ColourObject = uniformComplementary(fakeColour);

var uniformTriad1: ColourObjectArray = uniformTriad(colour);
// $FlowExpectedError
var uniformTriad2: ColourObjectArray = uniformTriad(fakeColour);

var uniformTetrad1: ColourObjectArray = uniformTetrad(colour);
// $FlowExpectedError
var uniformTetrad2: ColourObjectArray = uniformTetrad(fakeColour);

var mid1: ColourObject = mid(colourOne, colourTwo);
// $FlowExpectedError
var mid2: ColourObject = mid(fakeColour, fakeColour);

var invert1: ColourObject = invert(colour);
// $FlowExpectedError
var invert2: ColourObject = invert(fakeColour);

var invertLightness1: ColourObject = invertLightness(colour);
// $FlowExpectedError
var invertLightness2: ColourObject = invertLightness(fakeColour);

var multiply1: ColourObject = multiply(colourOne, colourTwo);
// $FlowExpectedError
var multiply2: ColourObject = multiply(fakeColour, fakeColour);

var adjacent1: ColourObjectArray = adjacent(degrees, sections, colour);
// $FlowExpectedError
var adjacent2: ColourObjectArray = adjacent(degrees, sections, fakeColour);

var fade1: ColourObjectArray = fade(amount, colourFrom, colourTo);
// $FlowExpectedError
var fade2: ColourObjectArray = fade(amount, fakeColour, fakeColour);

var shade1: ColourObject = shade(percent, colour);
// $FlowExpectedError
var shade2: ColourObject = shade(percent, fakeColour);

var saturation1: ColourObject = saturation(percent, colour);
// $FlowExpectedError
var saturation2: ColourObject = saturation(percent, fakeColour);

var brightness1: ColourObject = brightness(percent, colour);
// $FlowExpectedError
var brightness2: ColourObject = brightness(percent, fakeColour);

var hue1: ColourObject = hue(degrees, colour);
// $FlowExpectedError
var hue2: ColourObject = hue(degrees, fakeColour);

var contrast1: ColourObject = contrast(contrastCoeff, colour);
// $FlowExpectedError
var contrast2: ColourObject = contrast(contrastCoeff, fakeColour);

var greyscale1: ColourObject = greyscale(colour);
// $FlowExpectedError
var greyscale2: ColourObject = greyscale(fakeColour);

var sepia1: ColourObject = sepia(colour);
// $FlowExpectedError
var sepia2: ColourObject = sepia(fakeColour);

var contrastRatio1: ColourObject = contrastRatio(colour);
// $FlowExpectedError
var contrastRatio2: ColourObject = contrastRatio(fakeColour);

var adapt1: ColourObject = adapt(colour, illuminantColour);
var adapt2: ColourObject = adapt(colour, illuminantColour, sourceIlluminant);
// $FlowExpectedError
var adapt3: ColourObject = adapt(fakeColour, illuminantColour, sourceIlluminant);

var difference1: number = difference(colourOne, colourTwo);
var difference2: number = difference(colourOne, colourTwo, luminanceWeight);
var difference3: number = difference(colourOne, colourTwo, luminanceWeight, chromaWeight);
// $FlowExpectedError
var difference4: number = difference(fakeColour, fakeColour, luminanceWeight, chromaWeight);

var temperature1: number = temperature(colour);
// $FlowExpectedError
var temperature2: number = temperature(fakeColour);
