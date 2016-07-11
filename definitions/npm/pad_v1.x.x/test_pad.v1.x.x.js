import pad from 'pad';

pad("a string", 30);
pad(30, "a string");

pad("a string", 30, "_");
pad(30, "a string", {
  char: "_",
  colors: true,
  strip: false
});

// $ExpectError
pad(true, 20);
// $ExpectError
pad(20, true);
// $ExpectError
pad(' a string', 20, false);
