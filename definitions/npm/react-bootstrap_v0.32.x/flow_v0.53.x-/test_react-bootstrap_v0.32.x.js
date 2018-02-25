import * as React from 'react';
import { Dropdown, Overlay } from 'react-bootstrap';


// normal components works
(<Dropdown id={123}></Dropdown>: React.Node);
(<Overlay></Overlay>: React.Node);

// nested components works too
(<Dropdown.Toggle></Dropdown.Toggle>: React.Node);
