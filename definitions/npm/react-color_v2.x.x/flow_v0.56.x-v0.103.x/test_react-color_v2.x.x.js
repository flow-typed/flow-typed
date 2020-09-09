// @flow
import * as React from "react";
import { render } from "react-dom";
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker,
  CustomPicker
} from "react-color";
import type { InjectedColorProps } from "react-color"
import { EditableInput, Hue } from "react-color/lib/components/common";

/**
 * Fake HTML element used for rendering
 */

const root: any = {};

/**
 * Test common component props
 */

// $FlowExpectedError (hex color should be a string)
render(<AlphaPicker color={101010} />, root);
render(<AlphaPicker color="#101010" />, root);

// $FlowExpectedError (hsl[a] object shouldn't have typos)
render(<BlockPicker color={{ h: 1, s: 1, I: 1 }} />, root);
render(<BlockPicker color={{ h: 1, s: 1, l: 1 }} />, root);
render(<BlockPicker color={{ h: 1, s: 1, l: 1, a: 1 }} />, root);

// $FlowExpectedError (rgb[a] object shouldn't have typos)
render(<ChromePicker color={{ r: 1, g: 1, p: 1 }} />, root);
render(<ChromePicker color={{ r: 1, g: 1, b: 1 }} />, root);
render(<ChromePicker color={{ r: 1, g: 1, b: 1, a: 1 }} />, root);

render(
  <CirclePicker
    onChange={color => {
      (color.hex: string);
      // $FlowExpectedError (hsl should be an HSLColor object)
      (color.hsl: string);
      // $FlowExpectedError (rgb should be an RGBColor object)
      (color.rgb: string);
    }}
  />,
  root
);

render(
  <CompactPicker
    onChangeComplete={color => {
      (color.hex: string);
      (color.hsl: { h: number, s: number, l: number, a?: number });
      // $FlowExpectedError (rgb should be an RGBColor object)
      (color.rgb: string);
    }}
  />,
  root
);

/**
 * Test unique component props
 */

// $FlowExpectedError (height shouldn't have a typo)
render(<AlphaPicker hight="300" />, root);
render(<AlphaPicker height="300" />, root);

// $FlowExpectedError (width should be a string)
render(<BlockPicker width={300} />, root);
render(<BlockPicker width="300" />, root);

// $FlowExpectedError (disableAlpha should be a boolean)
render(<ChromePicker disableAlpha="false" />, root);
render(<ChromePicker disableAlpha={false} />, root);

// $FlowExpectedError (colors should be an array of stirngs)
render(<CirclePicker colors={[{ r: 1, g: 1, b: 1 }]} />, root);
render(<CirclePicker colors={["#111111"]} />, root);

// $FlowExpectedError (onSwatchHover should be a function)
render(<CompactPicker onSwatchHover={{}} />, root);
render(<CompactPicker onSwatchHover={() => {}} />, root);

// $FlowExpectedError (triangle should be 'hide' or 'top-left' or 'top-right')
render(<GitHubPicker triangle="bottom-right" />, root);
render(<GitHubPicker onSwatchHover="top-right" />, root);

// $FlowExpectedError (direction should be 'horizontal' or 'vertical')
render(<HuePicker direction="sideways" />, root);
render(<HuePicker direction="horizontal" />, root);

// $FlowExpectedError (onAccept should be a function)
render(<PhotoshopPicker onAccept={{}} />, root);
render(<PhotoshopPicker onAccept={() => {}} />, root);

// $FlowExpectedError (objects in presetColors should have a title)
render(<SketchPicker presetColors={[{ color: "#fff" }]} />, root);
render(
  <SketchPicker presetColors={[{ color: "#fff", title: "white" }]} />,
  root
);

// $FlowExpectedError (pointer should be a valid component)
render(<SliderPicker pointer={{}} />, root);
render(<SliderPicker pointer={() => <h1>Pointer</h1>} />, root);

// $FlowExpectedError (colors should be an Array of Array of strings)
render(<SwatchesPicker colors={["#fff", "#eee"]} />, root);
render(<SwatchesPicker colors={[["#fff, #eee"], ["#ddd", "#ccc"]]} />, root);

// $FlowExpectedError (colors should be an Array of strings)
render(<TwitterPicker colors={[111, 222]} />, root);
render(<TwitterPicker colors={["#111", "#222"]} />, root);

/**
 * Test custom picker
 */

type MyPickerProps = InjectedColorProps & { ownProp: boolean };
const MyPicker = ({ hex, hsl, hsv, onChange }: MyPickerProps) => {
 const styles = {
   hue: {
     height: 10,
     position: "relative",
     marginBottom: 10
   },
   input: {
     height: 34,
     border: `1px solid ${hex}`,
     paddingLeft: 10
   },
   swatch: {
     width: 54,
     height: 38,
     background: hex
   }
 };
 // $FlowExpectedError hsv is not string
 const a = hsv.toUpperCase();
 // $FlowExpectedError hsl is not string
 const b = hsl.toUpperCase();
 const c = hex.toUpperCase();
 return (
   <div>
     <div style={styles.hue}>
       {/* $FlowExpectedError (hsl should be a valid HSL Object) */}
       <Hue hsl="#ffffff" onChange={onChange} />
       {/* $FlowExpectedError wrong type of onChange callback */}
       <Hue hsl={hsl} onChange={(str: string) => {}} />
       <Hue hsl={hsl} onChange={onChange} />
     </div>

     <div style={{ display: "flex" }}>
       <EditableInput
         style={{ input: styles.input }}
         value={hex}
         onChange={onChange}
       />
       <div style={styles.swatch} />
     </div>
   </div>
 );
};

const MyEnhancedPicker = CustomPicker(MyPicker);
render(<MyEnhancedPicker ownProp={true} />, root);
// $FlowExpectedError ownProp is required
render(<MyEnhancedPicker />, root);
