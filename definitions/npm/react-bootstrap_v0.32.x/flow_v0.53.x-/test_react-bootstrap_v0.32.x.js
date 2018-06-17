import * as React from 'react';
import { Button, Dropdown, Overlay, FormControl, Checkbox, Radio } from 'react-bootstrap';


// normal components works
(<Dropdown id={123}></Dropdown>: React.Node);
(<Overlay></Overlay>: React.Node);

// nested components works too
(<Dropdown.Toggle></Dropdown.Toggle>: React.Node);

// inputRefs gives HTMLInputElements
(<FormControl inputRef={(ref) => {(ref: ?HTMLInputElement)}}/>: React.Node);
(<Checkbox inputRef={(ref) => {(ref: ?HTMLInputElement)}} />: React.Node);
(<Radio inputRef={(ref) => {(ref: ?HTMLInputElement)}} />: React.Node);

// componentClass accepts a string or a React Component
(<Button componentClass={Button} />: React.Node);
(<Button componentClass="Button" />: React.Node);

class NotAReactComponent {}

// But should reject a valid identifier that isn't a React component
// $ExpectError
(<Button componentClass={NotAReactComponent} />: React.Node);
