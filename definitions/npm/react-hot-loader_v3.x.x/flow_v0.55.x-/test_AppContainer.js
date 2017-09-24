// @flow
import React from "react";
import { AppContainer } from 'react-hot-loader';

errorReporter = () => <div>error message</div>;

// passing
<AppContainer><div>some child</div></AppContainer>

// $ExpectError - missing children prop
<AppContainer />

// $ExpectError - not one child
<AppContainerr><div>some child</div><div>some child</div></AppContainer>

// passing - errorReporter as NodeElement or function returning NodeElement
<div>
<AppContainer errorReporter={errorReporter}><div>some child</div></AppContainer>
<AppContainer errorReporter={<i>Err</i>}><div>some child</div></AppContainer>
</div>

errorReporter = () => [1,2,3].map(i => <i>{i}</i>);
// $ExpectError - errorReporter cannot be array of children
<AppContainer errorReporter={errorReporter}><div>some child</div></AppContainer>

errorReporter = [1,2,3].map(i => <i>{i}</i>);
// $ExpectError - errorReporter cannot be array of children
<AppContainer errorReporter={errorReporter}><div>some child</div></AppContainer>
