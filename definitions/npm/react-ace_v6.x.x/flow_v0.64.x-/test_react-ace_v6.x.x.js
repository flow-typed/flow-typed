/* @flow */

import * as React from "react";
import AceEditor from "react-ace";

const editor = (
  <AceEditor
    name="editor"
    width="100%"
    height="100%"
    focus={false}
    fontSize={16}
    scrollMargin={[10, 10]}
    highlightActiveLine={false}
    showPrintMargin={false}
    value="Hello World"
    editorProps={{
        $blockScrolling: Infinity,
    }}
    onCursorChange={() => {}}
    onSelectionChange={() => {}}
    onChange={() => {}}
    commands={[
        {
            name: "runCode",
            bindKey: { win: "Ctrl-Enter", mac: "Command-Enter" },
            exec: () => {},
        },
    ]}
  />
);

const invalidEditor = (
  <AceEditor
    // $ExpectError
    fontSize="not-a-number"
  />
);
