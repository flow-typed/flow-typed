//@flow

import React from 'react';
import Toggle from 'react-toggled';

{
  // $ExpectError
  <Toggle defaultOn={2}><div/></Toggle>;
}

{
  // $ExpectError
  <Toggle on={2}><div/></Toggle>;
}

{
  // $ExpectError
  <Toggle onToggle={2}><div/></Toggle>;
}

{
  // $ExpectError
  <Toggle />;
}

{
  <Toggle defaultOn>
    {({ on, setOn, setOff, getTogglerProps, getInputTogglerProps, getElementTogglerProps, toggle }) => (
      <div>
        <button {...getTogglerProps()} onClick={setOn}/>
        <div {...getElementTogglerProps()}/>
        <input type="checkbox" {...getInputTogglerProps()}/>
      </div>
    )}
  </Toggle>
}
