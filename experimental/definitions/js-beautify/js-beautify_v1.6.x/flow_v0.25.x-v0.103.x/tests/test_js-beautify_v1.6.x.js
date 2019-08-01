// @flow
import beautify, { html, css, js, css_beautify, html_beautify, js_beautify } from 'js-beautify';

var code: string = '';
// default import
var a: string = beautify(code, { indent_size: 2, no_preserve_newlines: true, wrap_line_length: 0 });

//named
var b: string = html(code, { indent_size: 2, no_preserve_newlines: true, wrap_line_length: 0 });
var c: string = css(code, { indent_size: 2, no_preserve_newlines: true, wrap_line_length: 0 });
var d: string = js(code, { indent_size: 2, no_preserve_newlines: true, wrap_line_length: 0 });
var e: string = css_beautify(code, { indent_size: 2, no_preserve_newlines: true, wrap_line_length: 0 });
var f: string = js_beautify(code, { indent_size: 2, no_preserve_newlines: true, wrap_line_length: 0 });
var g: string = html_beautify(code, { indent_size: 2, no_preserve_newlines: true, wrap_line_length: 0 });

//commonjs
var beautifyCommonJs = require('js-beautify');
var h: string = beautifyCommonJs(code);
var i: string = beautifyCommonJs.css_beautify(code, {});
var j: string = beautifyCommonJs.js_beautify(code, {});
var k: string = beautifyCommonJs.html_beautify(code, {});
var l: string = beautifyCommonJs.css(code);
var m: string = beautifyCommonJs.js(code);
var n: string = beautifyCommonJs.html(code);

// $ExpectError
var o: number = beautifyCommonJs.html(code);

// $ExpectError
var p: string = beautifyCommonJs.html(1);

