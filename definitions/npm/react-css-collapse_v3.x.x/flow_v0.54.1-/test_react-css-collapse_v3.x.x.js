//@flow

import React from 'react';
import Collapse from 'react-css-collapse';

{
  // $ExpectError
  <Collapse isOpen="a" />
}

{
  // $ExpectError
  <Collapse onRest={1} />
}

{
  // $ExpectError
  <Collapse onRest={() => true} />
}

{
  <Collapse isOpen onRest={() => {}}><div/></Collapse>
}
