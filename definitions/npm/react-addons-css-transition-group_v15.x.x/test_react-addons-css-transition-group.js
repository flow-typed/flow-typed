// @flow
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const shouldWork = () => (
  <div>
    <ReactCSSTransitionGroup
      transitionName="div"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <div />
    </ReactCSSTransitionGroup>
  </div>
)

const fail = () => (
  // $ExpectError should require a name
  <ReactCSSTransitionGroup transitionName={null} />
)


const customClasses = () => (
  <ReactCSSTransitionGroup
    transitionName={{
      enter: 'enter',
      leave: 'leave',
      appear: 'appear',
    }}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}>
    <div />
  </ReactCSSTransitionGroup>
);


const customClassesPass = () => (
  <ReactCSSTransitionGroup
    transitionName={{}}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}>
    <div />
  </ReactCSSTransitionGroup>
);



const customClassesActive = () => (
  <ReactCSSTransitionGroup
    transitionName={{
      enter: 'enter',
      enterActive: 'enter-active',
      leave: 'leave',
      leaveActive: 'leave-active',
      appear: 'appear',
      appearActive: 'appearActive',
    }}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}>
    <div />
  </ReactCSSTransitionGroup>
);


const customClassesActiveFail = () => (

  <ReactCSSTransitionGroup
    // $ExpectError
    transitionName={{
      enterActive: null,
      leaveActive: null,
      appearActive: null,
    }}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}>
    <div />
  </ReactCSSTransitionGroup>
);
