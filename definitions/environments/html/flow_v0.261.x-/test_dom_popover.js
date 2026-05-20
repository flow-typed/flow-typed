// @flow

let tests = [
  // popover attribute
  function(element: HTMLElement) {
    element.popover = 'auto';
    element.popover = 'manual';
    element.popover = 'hint';
    element.popover = '';
    
    // fails
    // $FlowExpectedError[incompatible-type]
    element.popover = 'invalid';
  },
  
  // popover methods
  function(element: HTMLElement) {
    element.showPopover();
    element.showPopover({ source: document.createElement('button') });
    
    element.hidePopover();
    
    let isOpen: boolean = element.togglePopover();
    isOpen = element.togglePopover(true);
    isOpen = element.togglePopover({ force: true });
    isOpen = element.togglePopover({ force: false, source: document.createElement('button') });
    
    // fails
    // $FlowExpectedError[incompatible-type]
    element.showPopover('invalid');
    // $FlowExpectedError[incompatible-type]
    element.togglePopover({ force: 'invalid' });
  },
  
  // popover invoker attributes
  function(button: HTMLButtonElement) {
    const element: HTMLElement = document.createElement('div');
    button.popoverTargetElement = element;
    button.popoverTargetAction = 'toggle';
    button.popoverTargetAction = 'show';
    button.popoverTargetAction = 'hide';
    
    // fails
    // $FlowExpectedError[incompatible-type]
    button.popoverTargetAction = 'invalid';
  },
  
  // popover state properties
  function(element: HTMLElement) {
    (element.popoverVisibilityState: 'hidden' | 'showing');
    (element.popoverInvoker: HTMLElement | null);
    
    // fails
    // $FlowExpectedError[cannot-write]
    element.popoverVisibilityState = 'hidden';
    // $FlowExpectedError[cannot-write]
    element.popoverInvoker = document.createElement('button');
  },
];

document.addEventListener('toggle', (event) => {
  if (event instanceof ToggleEvent) {
    const oldState: string = event.oldState;
    const newState: string = event.newState;
  }
});
