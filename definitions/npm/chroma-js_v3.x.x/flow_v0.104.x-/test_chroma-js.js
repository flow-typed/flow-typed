// @flow
import chroma, { type Color, scale, mix, random, contrast, contrastAPCA, valid, lab, oklab, oklch } from "chroma-js"
import type { Scale } from "chroma-js"

// https://gka.github.io/chroma.js/#api
// $FlowExpectedError[incompatible-type]
chroma()
chroma('pink').darken().saturate(2).hex()
chroma.scale(['#fafa6e','#2A4858'])
    .mode('lch').colors(6)
chroma('hotpink')
chroma('#ff3399');
chroma('F39');
chroma(0xff3399)
chroma(0xff, 0x33, 0x99);
chroma(255, 51, 153);
chroma([255, 51, 153]);
chroma(330, 1, 0.6, 'hsl')
chroma({ h:120, s:1, l:0.75});
chroma({ l:80, c:25, h:200 });
chroma({ c:1, m:0.5, y:0, k:0.2});
// $FlowExpectedError[incompatible-type]
chroma.valid();
chroma.valid('red');
chroma.valid('bread');
chroma.valid('#F0000D');
chroma.valid('#FOOOOD');
chroma.hsl(330, 1, 0.6)
chroma.lch(80, 40, 130);
chroma(80, 40, 130, 'lch');
chroma.hcl(130, 40, 80);
chroma(130, 40, 80, 'hcl');
chroma.cmyk(0.2, 0.8, 0, 0);
chroma(0.2, 0.8, 0, 0, 'cmyk');
chroma.gl(0.6, 0, 0.8);
chroma.gl(0.6, 0, 0.8, 0.5);
chroma(0.6, 0, 0.8, 'gl');
chroma.temperature(2000); // candle light
chroma.temperature(3500); // sunset
chroma.temperature(6500); // daylight
chroma.mix('red', 'blue');
chroma.mix('red', 'blue', 0.25);
chroma.mix('red', 'blue', 0.75);
chroma.mix('red', 'blue', 0.5, 'rgb');
chroma.mix('red', 'blue', 0.5, 'hsl');
chroma.mix('red', 'blue', 0.5, 'lab');
chroma.mix('red', 'blue', 0.5, 'lch');
chroma.mix('red', 'blue', 0.5, 'lrgb');
var colors = ['#ddd', 'yellow', 'red', 'teal'];
chroma.average(colors); // lrgb
chroma.average(colors, 'rgb');
chroma.average(colors, 'lab');
chroma.average(colors, 'lch');
chroma.average(['red', 'rgba(0,0,0,0.5)']).css();
chroma.average(colors, 'lch'); // unweighted
chroma.average(colors, 'lch', [1,1,2,1]);
chroma.average(colors, 'lch', [1.5,0.5,1,2.3]);
chroma.blend('4CBBFC', 'EEEE22', 'multiply');
chroma.blend('4CBBFC', 'EEEE22', 'darken');
chroma.blend('4CBBFC', 'EEEE22', 'lighten');
chroma.random();
// contrast smaller than 4.5 = too low
chroma.contrast('pink', 'hotpink');
// contrast greater than 4.5 = high enough
chroma.contrast('pink', 'purple');
chroma.distance('#fff', '#ff0', 'rgb');
chroma.distance('#fff', '#f0f', 'rgb');
chroma.distance('#fff', '#ff0');
chroma.distance('#fff', '#f0f');
chroma.deltaE('#ededee', '#edeeed');
chroma.deltaE('#ececee', '#eceeec');
chroma.deltaE('#e9e9ee', '#e9eee9');
chroma.deltaE('#e4e4ee', '#e4eee4');
chroma.deltaE('#e0e0ee', '#e0eee0');
chroma.brewer.OrRd
var data = [2.0,3.5,3.6,3.8,3.8,4.1,4.3,4.4,
            4.6,4.9,5.2,5.3,5.4,5.7,5.8,5.9,
            6.2,6.5,6.8,7.2,8];
chroma.limits(data, 'e', 4);
chroma.limits(data, 'q', 4);
chroma.limits(data, 'l', 4);
chroma.limits(data, 'k', 4);

// https://gka.github.io/chroma.js/#color
chroma('red').alpha(0.5);
chroma('rgba(255,0,0,0.35)').alpha();
chroma('hotpink').darken();
chroma('hotpink').darken(2);
chroma('hotpink').darken(2.6);
chroma('hotpink').brighten();
chroma('hotpink').brighten(2);
chroma('hotpink').brighten(3);
chroma('slategray').saturate();
chroma('slategray').saturate(2);
chroma('slategray').saturate(3);
chroma('hotpink').desaturate();
chroma('hotpink').desaturate(2);
chroma('hotpink').desaturate(3);
// change hue to 0 deg (=red)
chroma('skyblue').set('hsl.h', 0);
// set chromaticity to 30
chroma('hotpink').set('lch.c', 30);
// half Lab lightness
chroma('orangered').set('lab.l', '*0.5');
// double Lch saturation
chroma('darkseagreen').set('lch.c', '*2');
chroma('orangered').get('lab.l');
chroma('orangered').get('hsl.l');
chroma('orangered').get('rgb.g');
chroma('white').luminance();
chroma('aquamarine').luminance();
chroma('hotpink').luminance();
chroma('darkslateblue').luminance();
chroma('black').luminance();
// set lumincance to 50% for all colors
chroma('white').luminance(0.5);
chroma('aquamarine').luminance(0.5);
chroma('hotpink').luminance(0.5);
chroma('darkslateblue').luminance(0.5);
chroma('aquamarine').luminance(0.5); // rgb
chroma('aquamarine').luminance(0.5, 'lab');
chroma('aquamarine').luminance(0.5, 'hsl');
chroma('orange').hex()
chroma('orange').hex();
chroma('orange').alpha(0.5).hex();
chroma('orange').alpha(0.5).hex('rgb');
chroma('#ffa500').name();
chroma('#ffa505').name();
chroma('teal').css();
chroma('teal').alpha(0.5).css();
chroma('teal').css('hsl');
chroma('orange').rgb();
chroma('orange').darken().rgb();
chroma('orange').darken().rgb(false);
chroma('orange').rgba();
chroma('hsla(20, 100%, 40%, 0.5)').rgba();
chroma('orange').hsl();
chroma('white').hsl();
chroma('orange').hsv();
chroma('white').hsv();
chroma('orange').hsi();
chroma('white').hsi();
chroma('orange').lab()
chroma('skyblue').lch()
chroma('skyblue').hcl()
chroma('#000000').num();
chroma('#0000ff').num();
chroma('#00ff00').num();
chroma('#ff0000').num();
chroma('#ff3300').temperature();
chroma('#ff8a13').temperature();
chroma('#ffe3cd').temperature();
chroma('#cbdbff').temperature();
chroma('#b3ccff').temperature();
chroma('33cc00').gl();
{let c = chroma.hcl(50, 40, 20); c.clipped()};
{let c = chroma.hcl(50, 40, 40); c.clipped()};
{let c = chroma.hcl(50, 40, 60); c.clipped()};
{let c = chroma.hcl(50, 40, 80); c.clipped()};
{let c = chroma.hcl(50, 40, 100); c.clipped()};
chroma.hcl(50, 40, 100).rgb();

// https://gka.github.io/chroma.js/#color-scales
{
  var f = chroma.scale();
  f(0.25);
  f(0.5);
  f(0.75);
}
chroma.scale(['yellow', '008ae5']);
chroma.scale(['yellow', 'red', 'black']);
// default domain is [0,1]
chroma.scale(['yellow', '008ae5']);
// set domain to [0,100]
chroma.scale(['yellow', '008ae5']).domain([0,100]);
// default domain is [0,1]
chroma.scale(['yellow', 'lightgreen', '008ae5'])
    .domain([0,0.25,1]);
chroma.scale(['yellow', '008ae5']);
chroma.scale(['yellow', 'navy']);
chroma.scale(['yellow', 'navy']).mode('lab');
chroma.scale(['#f00', '#0f0']);
chroma.scale(['#f00', '#0f0']).mode('lrgb');
chroma.scale(['yellow', 'navy']).mode('lab');
chroma.scale(['yellow', 'navy']).mode('hsl');
chroma.scale(['yellow', 'navy']).mode('lch');
chroma.scale('YlGn').gamma(0.5);
chroma.scale('YlGn').gamma(1);
chroma.scale('YlGn').gamma(2);
chroma.scale(['black','red','yellow','white']);
chroma.scale(['black','red','yellow','white'])
    .correctLightness();
chroma.scale(['yellow', '008ae5']).cache(false);
chroma.scale('RdYlBu');
chroma.scale('RdYlBu').padding(0.15);
chroma.scale('RdYlBu').padding(0.3);
chroma.scale('RdYlBu').padding(-0.15);
chroma.scale('OrRd');
chroma.scale('OrRd').padding([0.2, 0]);
chroma.scale('OrRd').colors(5);
chroma.scale(['white', 'black']).colors(12);
// continuous
chroma.scale('OrRd');
// class breaks
chroma.scale('OrRd').classes(5);
chroma.scale('OrRd').classes(8);
chroma.scale('OrRd').classes([0,0.3,0.55,0.85,1]);
chroma.scale('OrRd')(null);
chroma.scale('OrRd')(undefined);
chroma.scale('OrRd').nodata('#eee')(null);
chroma.scale('YlGnBu');
chroma.scale('Spectral');
chroma.scale('Spectral').domain([1,0]);
chroma.brewer.OrRd
// linear interpolation
chroma.scale(['yellow', 'red', 'black']);
// bezier interpolation
chroma.bezier(['yellow', 'red', 'black']);
chroma.bezier(['yellow', 'red', 'black'])
    .scale()
    .colors(5);

// https://gka.github.io/chroma.js/#cubehelix
// use the default helix...
chroma.cubehelix();
// or customize it
chroma.cubehelix()
    .start(200)
    .rotations(-0.5)
    .gamma(0.8)
    .lightness([0.3, 0.8]);
chroma.cubehelix().start(300);
chroma.cubehelix().start(200);
chroma.cubehelix().rotations(-1.5);
chroma.cubehelix().rotations(0.5);
chroma.cubehelix().rotations(3);
chroma.cubehelix();
chroma.cubehelix().hue(0.5);
chroma.cubehelix().hue([1,0]);
chroma.cubehelix().gamma(1);
chroma.cubehelix().gamma(0.5);
chroma.cubehelix().lightness([0,1]);
chroma.cubehelix().lightness([1,0]);
chroma.cubehelix().lightness([0.3,0.7]);
chroma.cubehelix()
    .start(200)
    .rotations(-0.35)
    .gamma(0.7)
    .lightness([0.3, 0.8])
  .scale() // convert to chroma.scale
    .correctLightness()
    .colors(5);

// ========================================
// v3 additions
// ========================================

// oklab / oklch constructors
chroma.oklab(0.5, -0.1, 0.1);
chroma.oklab(0.5, -0.1, 0.1, 0.8);
chroma.oklch(0.5, 0.2, 180);
chroma.oklch(0.5, 0.2, 180, 0.8);
// $FlowExpectedError[incompatible-type] - oklab requires at least 3 args
chroma.oklab(0.5, -0.1);
// $FlowExpectedError[incompatible-type] - oklch requires at least 3 args
chroma.oklch(0.5, 0.2);

// oklab / oklch instance getters
(chroma('red').oklab(): [number, number, number]);
(chroma('red').oklch(): [number, number, number]);

// Lab white point
chroma.setLabWhitePoint('D50');
chroma.setLabWhitePoint('D65');
chroma.setLabWhitePoint('E');
(chroma.getLabWhitePoint(): 'D50' | 'D55' | 'D65' | 'A' | 'B' | 'C' | 'F2' | 'F7' | 'F11' | 'E');
// $FlowExpectedError[incompatible-type] - invalid white point
chroma.setLabWhitePoint('D99');

// contrastAPCA
(chroma.contrastAPCA('red', 'white'): number);
(chroma.contrastAPCA(chroma('red'), chroma('white')): number);
// $FlowExpectedError[incompatible-type] - contrastAPCA needs 2 args
chroma.contrastAPCA('red');

// random with custom RNG
chroma.random();
chroma.random(() => 0.5);
// $FlowExpectedError[incompatible-type] - rng must be a function
chroma.random(42);

// deltaE with Kl, Kc, Kh weighting params
chroma.deltaE('#ededee', '#edeeed');
chroma.deltaE('#ededee', '#edeeed', 2);
chroma.deltaE('#ededee', '#edeeed', 2, 1);
chroma.deltaE('#ededee', '#edeeed', 2, 1, 1);

// instance mix / shade / tint
(chroma('red').mix('blue'): Color);
(chroma('red').mix('blue', 0.5): Color);
(chroma('red').mix('blue', 0.5, 'lab'): Color);
(chroma('red').shade(): Color);
(chroma('red').shade(0.5): Color);
(chroma('red').shade(0.5, 'lab'): Color);
(chroma('red').tint(): Color);
(chroma('red').tint(0.5): Color);
(chroma('red').tint(0.5, 'lrgb'): Color);

// hex with 'argb'
(chroma('orange').hex('argb'): string);
(chroma('orange').hex('auto'): string);
(chroma('orange').hex('rgb'): string);
(chroma('orange').hex('rgba'): string);
// $FlowExpectedError[incompatible-type] - invalid hex mode
chroma('orange').hex('bgr');

// css with various modes
(chroma('teal').css(): string);
(chroma('teal').css('rgb'): string);
(chroma('teal').css('hsl'): string);
(chroma('teal').css('lab'): string);
(chroma('teal').css('lch'): string);
(chroma('teal').css('oklab'): string);
(chroma('teal').css('oklch'): string);
// $FlowExpectedError[incompatible-type] - invalid css mode
chroma('teal').css('cmyk');

// scale with oklab/oklch modes
chroma.scale(['yellow', 'navy']).mode('oklab');
chroma.scale(['yellow', 'navy']).mode('oklch');

// scale.domain() without args returns number[]
(chroma.scale(['yellow', 'navy']).domain(): number[]);

// scale.colors with oklab/oklch
chroma.scale(['yellow', 'navy']).colors(5, 'oklab');
chroma.scale(['yellow', 'navy']).colors(5, 'oklch');

// scale.out with oklab/oklch
chroma.scale(['yellow', 'navy']).out('oklab');
chroma.scale(['yellow', 'navy']).out('oklch');

// ========================================
// Named exports
// ========================================

(scale(['red', 'blue']): Scale<Color>);
(mix('red', 'blue'): Color);
(random(): Color);
(contrast('pink', 'purple'): number);
(contrastAPCA('red', 'white'): number);
(valid('red'): boolean);
(lab(50, 0, 0): Color);
(oklab(0.5, 0, 0): Color);
(oklch(0.5, 0.2, 180): Color);

// ========================================
// color.interpolate() (alias for mix)
// ========================================

(chroma('red').interpolate('blue', 0.5): Color);
(chroma('red').interpolate('blue', 0.5, 'lab'): Color);

// ========================================
// Constructors with alpha
// ========================================

chroma.hsl(330, 1, 0.6, 0.5);
chroma.lch(80, 40, 130, 0.5);

// ========================================
// brewer.Viridis
// ========================================

chroma.brewer.Viridis;

// ========================================
// bezier with Color objects
// ========================================

chroma.bezier([chroma('yellow'), chroma('red'), chroma('black')]);

// ========================================
// Scale: out('num') and colors(n, 'num')
// ========================================

(chroma.scale(['red', 'blue']).out('num'): Scale<number>);
(chroma.scale(['red', 'blue']).colors(5, 'num'): number[]);

// ========================================
// padding with tuple
// ========================================

chroma.scale('OrRd').padding([0.2, 0.1]);

// ========================================
// hsv with alpha
// ========================================

chroma.hsv(120, 1, 0.8, 0.5);

// ========================================
// hcl with alpha
// ========================================

chroma.hcl(130, 40, 80, 0.5);

// ========================================
// ChromaInput breadth (Color objects in contrast/distance)
// ========================================

(chroma.contrast(chroma('pink'), chroma('purple')): number);
(chroma.distance(chroma('red'), chroma('blue')): number);

// ========================================
// luminance with lrgb
// ========================================

chroma('aquamarine').luminance(0.5, 'lrgb');

// ========================================
// Removed _rgb (negative test)
// ========================================

// $FlowExpectedError[prop-missing] - _rgb er fjernet i v3
chroma('red')._rgb;
