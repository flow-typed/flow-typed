// @flow
import Radium from 'radium';

const A = Radium(<div/>);
const B = Radium(<Radium.StyleRoot/>);
const C: string = Radium.keyframes({});
// $ExpectError
const D: string = Radium.keyframes();
const E: bool = Radium.getState({}, 'ref', ':hover');
// $ExpectError
const F: bool = Radium.getState({}, 'ref', ':visible')
