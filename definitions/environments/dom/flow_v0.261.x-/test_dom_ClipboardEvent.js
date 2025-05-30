// @flow

let tests = [
  // ClipboardEvent
  function () {
    const copyEvent = new ClipboardEvent('copy'); // valid
    const pasteEvent = new ClipboardEvent('paste'); // valid
    const cutEvent = new ClipboardEvent('cut'); // valid
    const changeEvent = new ClipboardEvent('clipboardchange'); // valid
    // $FlowExpectedError[incompatible-call]
    const invalidEvent = new ClipboardEvent('invalid'); // invalid
  },
  function() {
    const transfer = new DataTransfer();
    transfer.setData('text/plain', 'Lorem ipsum');
    const valid1 = new ClipboardEvent(
      'cut',
      {clipboardData: transfer},
    ); // valid
    const valid2 = new ClipboardEvent(
      'cut',
      {clipboardData: null}, // valid, clipboardData nullable
    );
    const invalid1 = new ClipboardEvent(
      'cut',
      // $FlowExpectedError[prop-missing]
      {}, // invalid, clipboardData may not be omitted
    );
    // $FlowExpectedError[incompatible-call]
    const invalid2 = new ClipboardEvent('cut', {clipboardData: {
      'text/plain': 'thats not how you do it'}}); // invalid
  },
  function(input: HTMLInputElement) {
    input.addEventListener('cut', (e: ClipboardEvent) => {
      // $FlowExpectedError[incompatible-use]
      e.clipboardData.getData('text/plain'); // invalid: null check required
      if (e.clipboardData) {
        const data: string = e.clipboardData.getData('text/plain'); // valid
      }
    })
  },
];
