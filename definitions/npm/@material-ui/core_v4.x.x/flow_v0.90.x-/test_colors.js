// @flow
import { it, describe } from "flow-typed-test";
import {
  amber,
  blue,
  blueGrey,
  brown,
  common,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow
} from "@material-ui/core/colors";

import commonColor from "@material-ui/core/colors/common";
import amberColor from "@material-ui/core/colors/amber";
import blueColor from "@material-ui/core/colors/blue";
import blueGreyColor from "@material-ui/core/colors/blueGrey";
import brownColor from "@material-ui/core/colors/brown";
import cyanColor from "@material-ui/core/colors/cyan";
import deepOrangeColor from "@material-ui/core/colors/deepOrange";
import deepPurpleColor from "@material-ui/core/colors/deepPurple";
import greenColor from "@material-ui/core/colors/green";
import greyColor from "@material-ui/core/colors/grey";
import indigoColor from "@material-ui/core/colors/indigo";
import lightBlueColor from "@material-ui/core/colors/lightBlue";
import lightGreenColor from "@material-ui/core/colors/lightGreen";
import limeColor from "@material-ui/core/colors/lime";
import orangeColor from "@material-ui/core/colors/orange";
import pinkColor from "@material-ui/core/colors/pink";
import purpleColor from "@material-ui/core/colors/purple";
import redColor from "@material-ui/core/colors/red";
import tealColor from "@material-ui/core/colors/teal";
import yellowColor from "@material-ui/core/colors/yellow";

describe("other colors", () => {
  it("should passes when used properly", () => {
    (amberColor[50]: string);
    (amber[400]: string);
    (blueColor[100]: string);
    (blue[50]: string);
    (blueGreyColor[200]: string);
    (blueGrey[100]: string);
    (brownColor[300]: string);
    (brown[200]: string);
    (cyanColor[400]: string);
    (cyan[300]: string);
    (deepOrangeColor[500]: string);
    (deepOrange[400]: string);
    (deepPurpleColor[600]: string);
    (deepPurple[500]: string);
    (greenColor[700]: string);
    (green[600]: string);
    (greyColor[800]: string);
    (grey[700]: string);
    (indigoColor[900]: string);
    (indigo[800]: string);
    (lightBlueColor.A100: string);
    (lightBlue[900]: string);
    (lightGreenColor.A200: string);
    (lightGreen.A100: string);
    (limeColor.A400: string);
    (lime.A200: string);
    (orangeColor.A700: string);
    (orange.A400: string);
    (pinkColor[50]: string);
    (pink.A700: string);
    (purpleColor[100]: string);
    (purple[50]: string);
    (redColor[200]: string);
    (red[100]: string);
    (tealColor[300]: string);
    (teal[200]: string);
    (yellowColor[400]: string);
    (yellow[300]: string);
  });

  it("should raises an error when compare with an invalid type", () => {
    // $ExpectError
    (amberColor[50]: number);
    // $ExpectError
    (amber[400]: number);
    // $ExpectError
    (blueColor[100]: number);
    // $ExpectError
    (blue[50]: number);
    // $ExpectError
    (blueGreyColor[200]: number);
    // $ExpectError
    (blueGrey[100]: number);
    // $ExpectError
    (brownColor[300]: number);
    // $ExpectError
    (brown[200]: number);
    // $ExpectError
    (cyanColor[400]: number);
    // $ExpectError
    (cyan[300]: number);
    // $ExpectError
    (deepOrangeColor[500]: number);
    // $ExpectError
    (deepOrange[400]: number);
    // $ExpectError
    (deepPurpleColor[600]: number);
    // $ExpectError
    (deepPurple[500]: number);
    // $ExpectError
    (greenColor[700]: number);
    // $ExpectError
    (green[600]: number);
    // $ExpectError
    (greyColor[800]: number);
    // $ExpectError
    (grey[700]: number);
    // $ExpectError
    (indigoColor[900]: number);
    // $ExpectError
    (indigo[800]: number);
    // $ExpectError
    (lightBlueColor.A100: number);
    // $ExpectError
    (lightBlue[900]: number);
    // $ExpectError
    (lightGreenColor.A200: number);
    // $ExpectError
    (lightGreen.A100: number);
    // $ExpectError
    (limeColor.A400: number);
    // $ExpectError
    (lime.A200: number);
    // $ExpectError
    (orangeColor.A700: number);
    // $ExpectError
    (orange.A400: number);
    // $ExpectError
    (pinkColor[50]: number);
    // $ExpectError
    (pink.A700: number);
    // $ExpectError
    (purpleColor[100]: number);
    // $ExpectError
    (purple[50]: number);
    // $ExpectError
    (redColor[200]: number);
    // $ExpectError
    (red[100]: number);
    // $ExpectError
    (tealColor[300]: number);
    // $ExpectError
    (teal[200]: number);
    // $ExpectError
    (yellowColor[400]: number);
    // $ExpectError
    (yellow[300]: number);
  });
});

describe("common", () => {
  it("common color should have only two property", () => {
    (common.black: string);
    (common.white: string);

    (commonColor.black: string);
    (commonColor.white: string);
  });

  it("should raises an error", () => {
    // $ExpectError - boolean is not string
    (common.black: boolean);
    // $ExpectError - boolean is not string
    (common.white: boolean);

    // $ExpectError - boolean is not string
    (commonColor.black: boolean);
    // $ExpectError - boolean is not string
    (commonColor.white: boolean);
  });
});
