// @flow
import React from "react";
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
import { describe, it } from "flow-typed-test";

describe('react-color', () => {

  describe('color', () => it('described correctly', () => {
    // $ExpectError (hex color should be a string)
    <AlphaPicker color={101010} />;
    <AlphaPicker color="#101010" />;

    // $ExpectError (hsl[a] object shouldn't have typos)
    <BlockPicker color={{ h: 1, s: 1, I: 1 }} />;
    <BlockPicker color={{ h: 1, s: 1, l: 1 }} />;
    <BlockPicker color={{ h: 1, s: 1, l: 1, a: 1 }} />;

    // $ExpectError (rgb[a] object shouldn't have typos)
    <ChromePicker color={{ r: 1, g: 1, p: 1 }} />;
    <ChromePicker color={{ r: 1, g: 1, b: 1 }} />;
    <ChromePicker color={{ r: 1, g: 1, b: 1, a: 1 }} />;
  }));

  describe('onChange', () => it('described correctly', () => {
    <CirclePicker
      onChange={color => {
        (color.hex: string);
        // $ExpectError (hsl should be an HSLColor object)
        (color.hsl: string);
        // $ExpectError (rgb should be an RGBColor object)
        (color.rgb: string);
      }}
    />
  }));

  describe('onChangeComplete', () => it('described correctly', () => {
    <CompactPicker
      onChangeComplete={color => {
        (color.hex: string);
        (color.hsl: {
          h: number,
          s: number,
          l: number,
          a?: number,
          ...
        });
        // $ExpectError (rgb should be an RGBColor object)
        (color.rgb: string);
      }}
    />
  }));

  /**
   * Test unique component props
   */

  describe('AlphaPicker', () => it('described correctly', () => {
    // $ExpectError (height shouldn't have a typo)
    <AlphaPicker hight="300" />;
    <AlphaPicker height="300" />;
  }));

  describe('BlockPicker', () => it('described correctly', () => {
    // $ExpectError (width should be a string)
    <BlockPicker width={300} />;
    <BlockPicker width="300" />;
  }));

  describe('ChromePicker', () => it('described correctly', () => {
    <ChromePicker className={undefined} />;
    // $ExpectError className should be a string
    <ChromePicker className={1} />;
    <ChromePicker className="test-class-name" />;

    <ChromePicker defaultView={undefined} />;
    // $ExpectError className should be a string
    <ChromePicker defaultView={1} />;
    <ChromePicker defaultView="hex" />;
    <ChromePicker defaultView="hsl" />;
    <ChromePicker defaultView="hex" />;
    // $ExpectError string [1] is incompatible with enum [2] in property `defaultView`
    <ChromePicker defaultView="unknown" />;

    // $ExpectError (disableAlpha should be a boolean)
    <ChromePicker disableAlpha="false" />;
    <ChromePicker disableAlpha={false} />;

    // $ExpectError in property `width`: [incompatible-type]
    <ChromePicker width />;
    // $ExpectError in property `width`: [incompatible-type]
    <ChromePicker width={false} />;
    <ChromePicker width={10} />;
    <ChromePicker width="100%" />;

    // $ExpectError boolean [1] is incompatible with object type [2] in property `styles`
    <ChromePicker styles />;
    // $ExpectError number [1] is incompatible with object type [2] in property `styles`
    <ChromePicker styles={10} />;
    <ChromePicker styles={{width: "100%"}} />;
  }));

  describe('CirclePicker', () => it('described correctly', () => {
    // $ExpectError (colors should be an array of stirngs)
    <CirclePicker colors={[{ r: 1, g: 1, b: 1 }]} />;
    <CirclePicker colors={["#111111"]} />;
  }));

  describe('CompactPicker', () => it('described correctly', () => {
    // $ExpectError (onSwatchHover should be a function)
    <CompactPicker onSwatchHover={{}} />;
    <CompactPicker onSwatchHover={() => {}} />;
  }));

  describe('GitHubPicker', () => it('described correctly', () => {
    // $ExpectError (triangle should be 'hide' or 'top-left' or 'top-right')
    <GitHubPicker triangle="bottom-right" />;
    <GitHubPicker onSwatchHover="top-right" />;
  }));

  describe('HuePicker', () => it('described correctly', () => {
    // $ExpectError (direction should be 'horizontal' or 'vertical')
    <HuePicker direction="sideways" />;
    <HuePicker direction="horizontal" />;
  }));

  describe('PhotoshopPicker', () => it('described correctly', () => {
    // $ExpectError (onAccept should be a function)
    <PhotoshopPicker onAccept={{}} />;
    <PhotoshopPicker onAccept={() => {}} />;
  }));

  describe('SketchPicker', () => it('described correctly', () => {
    // $ExpectError (objects in presetColors should have a title)
    <SketchPicker presetColors={[{ color: "#fff" }]} />;
    <SketchPicker presetColors={[{ color: "#fff", title: "white" }]} />
  }));

  describe('SliderPicker', () => it('described correctly', () => {
    // $ExpectError (pointer should be a valid component)
    <SliderPicker pointer={{}} />;
    <SliderPicker pointer={() => <h1>Pointer</h1>} />;
  }));

  describe('SwatchesPicker', () => it('described correctly', () => {
    // $ExpectError (colors should be an Array of Array of strings)
    <SwatchesPicker colors={["#fff", "#eee"]} />;
    <SwatchesPicker colors={[["#fff, #eee"], ["#ddd", "#ccc"]]} />;
  }));

  describe('TwitterPicker', () => it('described correctly', () => {
    // $ExpectError (colors should be an Array of strings)
    <TwitterPicker colors={[111, 222]} />;
    <TwitterPicker colors={["#111", "#222"]} />;
  }));

  /**
   * Test custom picker
   */
  describe('Custom Picker', () => it('described correctly', () => {
    type MyPickerProps = InjectedColorProps & { ownProp: boolean, ... };
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
     const c = hex.toUpperCase();
     return (
       <div>
         <div style={styles.hue}>
           {/* $ExpectError (hsl should be a valid HSL Object) */}
           <Hue hsl="#ffffff" onChange={onChange} />
           {/* $ExpectError wrong type of onChange callback */}
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
    <MyEnhancedPicker ownProp={true} />;
    // $ExpectError ownProp is required
    <MyEnhancedPicker />;
  }));

});
