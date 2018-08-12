/* @flow */

import * as React from "react";
import { DragSource, DropTarget, DragLayer, DragDropContext } from "react-dnd";

import AceEditor from "react-ace";
import "brace/mode/mysql";

const editor = (
  <AceEditor
    mode="mysql"
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
