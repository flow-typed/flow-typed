//@flow

import React from 'react';
import Media from 'react-media';

// $ExpectError
const queryError = <Media query={1} />;
// $ExpectError
const defaultMatchesError = <Media defaultMatches={1}/>;
// $ExpectError
const renderError = <Media render={12} />;
// $ExpectError
const childrenError = <Media>{(matches: number) => matches}</Media>;

const str = <Media query="max-width: 500px" />;
const obj = <Media query={{maxWidth: 500, minWidth: '13em'}} />;
const ary = <Media query={[{maxWidth: 500, minWidth: '13em'}, { orientation: 'landscape' }]} />;
const render = <Media query={[{maxWidth: 500, minWidth: '13em'}, { orientation: 'landscape' }]} render={() => <div/>} />;
const children = <Media query={[{maxWidth: 500, minWidth: '13em'}, { orientation: 'landscape' }]}>{(matches: boolean) => <div/>}</Media>;
