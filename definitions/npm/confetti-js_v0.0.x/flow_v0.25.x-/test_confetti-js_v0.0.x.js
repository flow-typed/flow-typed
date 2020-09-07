import ConfettiGenerator from 'confetti-js';

const confettiSettings = {
  target: 'my-canvas',
  max: 200,
};

const confetti = new ConfettiGenerator(confettiSettings);

const func = confetti.render();
func((timestamp) => {});

confetti.clear();

const badConfettiSettings = {
  max: 200,
  size: 100,
  animate: true,
  respawn: true,
};

// $FlowExpectedError
new ConfettiGenerator(badConfettiSettings);
