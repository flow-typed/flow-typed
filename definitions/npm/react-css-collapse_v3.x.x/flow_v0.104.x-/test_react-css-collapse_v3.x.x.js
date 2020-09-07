//@flow

import React from 'react';
import Collapse from 'react-css-collapse';

{
  // $FlowExpectedError
  <Collapse isOpen="a" />
}

{
  // $FlowExpectedError
  <Collapse onRest={1} />
}

{
  // $FlowExpectedError
  <Collapse onRest={() => true} />
}

{
  <Collapse isOpen onRest={() => {}}><div/></Collapse>
}
