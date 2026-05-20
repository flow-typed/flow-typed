// @flow

let tests = [
  // USBConnectionEvent
  function() {
    const scheduler1 = new Scheduler(() => {});
    const scheduler2 = new Scheduler(() => {}, {
      priority: 'user-blocking',
      signal: TaskSignal(),
      delay: 3,
    });
  },
];
