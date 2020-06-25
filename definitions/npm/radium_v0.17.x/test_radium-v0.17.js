// @flow
import Radium from 'radium';

const A = Radium(<div/>);
const B = Radium(<Radium.StyleRoot/>);
const C: string = Radium.keyframes({});
// $FlowExpectedError
const D: string = Radium.keyframes();
const E: bool = Radium.getState({}, 'ref', ':hover');
// $FlowExpectedError
const F: bool = Radium.getState({}, 'ref', ':visible')
