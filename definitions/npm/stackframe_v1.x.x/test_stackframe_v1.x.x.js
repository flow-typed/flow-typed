import * as StackFrame from "stackframe";

const stackFrame = new StackFrame();

stackFrame.setSource("source");

// $ExpectError
stackFrame.setSource(42);
