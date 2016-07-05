import pad from 'pad';

pad("a string", 30);
pad(30, "a string");

pad("a string", 30, "_");
pad(30, "a string", {
  char: "_",
  colors: true,
  strip: false
});
