// @flow
import React from "react";
import { AppContainer } from 'react-hot-loader';

let errorReporter = () => <div>error message</div>;

// passing
<AppContainer><div>some child</div></AppContainer>

// passing
<AppContainer errorReporter={errorReporter}><div>some child</div></AppContainer>

// passing
<AppContainer errorReporter={<i>Err</i>}><div>some child</div></AppContainer>

// $ExpectError - missing children prop
<AppContainer />
// $ExpectError - not one child
<AppContainerr><div>some child</div><div>some child</div></AppContainer>

errorReporter = () => [1,2,3].map(i => <i>{i}</i>);
// $ExpectError - errorReporter cannot be array of children
<AppContainer errorReporter={errorReporter}><div>some child</div></AppContainer>

errorReporter = [1,2,3].map(i => <i>{i}</i>);
// $ExpectError - errorReporter cannot be array of children
<AppContainer errorReporter={errorReporter}><div>some child</div></AppContainer>
