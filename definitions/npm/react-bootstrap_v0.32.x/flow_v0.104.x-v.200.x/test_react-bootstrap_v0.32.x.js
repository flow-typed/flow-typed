import * as React from 'react';
import { Checkbox, Dropdown, FormControl, Glyphicon, Overlay, Radio } from 'react-bootstrap';


// normal components works
(<Dropdown id={123}></Dropdown>: React.Node);
(<Overlay></Overlay>: React.Node);

// nested components works too
(<Dropdown.Toggle></Dropdown.Toggle>: React.Node);

// inputRefs gives HTMLInputElements
(<FormControl inputRef={(ref) => {(ref: ?HTMLInputElement)}}/>: React.Node);
(<Checkbox inputRef={(ref) => {(ref: ?HTMLInputElement)}} />: React.Node);
(<Radio inputRef={(ref) => {(ref: ?HTMLInputElement)}} />: React.Node);

(<Glyphicon glyph="string" />: React.Node);
