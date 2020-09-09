import pad from 'pad';

pad("a string", 30);
pad(30, "a string");

pad("a string", 30, "_");
pad(30, "a string", {
  char: "_",
  colors: true,
  strip: false
});

// $FlowExpectedError
pad(true, 20);
// $FlowExpectedError
pad(20, true);
// $FlowExpectedError
pad(' a string', 20, false);
