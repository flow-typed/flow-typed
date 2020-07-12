// @flow

import markedMan from "marked-man";

markedMan.setOptions({
  format: "html",
  name: "",
  date: new Date(),
  section: "",
  version: "",
  manual: "",
  gfm: true,
  breaks: true,
  sanitize: true,
  ronn: true
});

// $FlowExpectedError
markedMan.setOptions(["yoloism", true]);

markedMan("", (err, content) => {
  if (err) throw err;
});

// $FlowExpectedError
markedMan(24, function(err, content) {
  if (err) throw err;
  console.log(content);
});

const x: string = markedMan("");
// $FlowExpectedError
markedMan("", { tables: false });

// $FlowExpectedError
markedMan("up", "top");
// $FlowExpectedError
const y: string = markedMan(23);
