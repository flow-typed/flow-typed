// @flow
import React from "react";
import { AppContainer } from "react-hot-loader";

let errorReporter = () => <div>error message</div>;

// $ExpectError - missing children prop
(() => { <div><AppContainer /></div>; })();

// passing
<AppContainer>
  <div>some child</div>
</AppContainer>



// $ExpectError - not one child
(() => { <AppContainer>{[1, 2].map(() => <div>some child</div>)}</AppContainer> })();



// passing - errorReporter as NodeElement or function returning NodeElement
<div>
  <AppContainer errorReporter={errorReporter}>
    <div>some child</div>
  </AppContainer>
  <AppContainer errorReporter={<i>Err</i>}>
    <div>some child</div>
  </AppContainer>
</div>;

errorReporter = () => [1, 2, 3].map(i => <i>{i}</i>);
// $ExpectError - errorReporter cannot return an array of children
<AppContainer errorReporter={errorReporter}><div>some child</div></AppContainer>;

errorReporter = [1, 2, 3].map(i => <i>{i}</i>);
// $ExpectError - errorReporter cannot be an array of children
<AppContainer errorReporter={errorReporter}><div>some child</div></AppContainer>;
