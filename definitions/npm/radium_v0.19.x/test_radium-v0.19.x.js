// @flow
import React from 'react';
import Radium from 'radium';
import type { FunctionComponent } from 'radium'

type Props1 = {
    a: number,
    b: string
};

const C1: FunctionComponent<Props1, void> = (props: Props1) => <div>{props.a} {props.b}</div>

type Props2 = {
    a: number,
    b: string,
};

class C2 extends React.Component<void, Props2, void> {
    render () {
        return <div>{this.props.a} {this.props.b}</div>
    }
}

Radium(<div/>);
Radium(<Radium.StyleRoot/>);
Radium.keyframes({});
// $ExpectError
Radium.keyframes(); // missing object
Radium.getState({}, 'ref', ':hover');
// $ExpectError
Radium.getState({}, 'ref', ':visible') // invalid property

const RC1 = Radium(C1);
<RC1 a={1} b="s" />;
// $ExpectError
<RC1 />; // missing a, b
// $ExpectError
<RC1 a={1} />; // missing b
// $ExpectError
<RC1 a="s" b="s" />; // wrong a type

const RC2 = Radium(C2);
<RC2 a={1} b="s" />;
// $ExpectError
<RC2 />; // missing a, b
// $ExpectError
<RC2 a={1} />; // missing b
// $ExpectError
<RC2 a="s" b="s" />; // wrong a type

const ConfiguredRadium = Radium({ userAgent: 'foo' })
const CRC1 = ConfiguredRadium(C1);
<CRC1 a={1} b="s" />;
// $ExpectError
<CRC1 />; // missing a, b
// $ExpectError
<CRC1 a={1} />; // missing b
// $ExpectError
<CRC1 a="s" b="s" />; // wrong a type


const CRC2 = ConfiguredRadium(C2);
<CRC2 a={1} b="s" />;
// $ExpectError
<CRC2 />; // missing a, b
// $ExpectError
<CRC2 a={1} />; // missing b
// $ExpectError
<CRC2 a="s" b="s" />; // wrong a type