import { Terminal } from "xterm";

// $ExpectError (Options should be an object)
new Terminal("{}");
new Terminal({});

// $ExpectError (Can't pass invalid option)
new Terminal({ col: 1 });
new Terminal({ cols: 1 });

// $ExpectError (Options must use proper type)
new Terminal({ col: 1 });
new Terminal({ cols: 1 });

// None of these should throw an error
new Terminal();
new Terminal({});
new Terminal({ cols: 1, rows: 1 });
new Terminal({
  cols: 1,
  cursorBlink: true,
  cursorStyle: "block",
  disableStdin: false,
  rows: 1,
  scrollback: 10,
  tabStopWidth: 2
});

// $ExpectError (Can't use undefined static methods)
Terminal.applyAddOn({});
Terminal.applyAddon({});

let terminal = new Terminal();

// $ExpectError (terminal.element should be an HTMLElement)
(terminal.element: string);
(terminal.element: HTMLElement);

// $ExpectError (terminal.textarea should be an HTMLTextAreaElement)
(terminal.textarea: number);
(terminal.textarea: HTMLTextAreaElement);

// $ExpectError (Can't use undefined instance method)
terminal.fokus();
terminal.focus();

// $ExpectError (Instance methods should typecheck parameters)
terminal.write({ foo: "bar" });
terminal.write("foobar");

// None of should throw an error (Mostly copied from the .d.ts test file)
terminal.blur();
terminal.focus();
terminal.destroy();
terminal.clear();
terminal.refresh(0, 1);
terminal.reset();
terminal.resize(1, 1);
terminal.write("foo");
terminal.writeln("foo");
terminal.on("blur", () => {});
terminal.on("focus", () => {});
terminal.on("linefeed", () => {});
terminal.on("selection", () => {});
terminal.on("data", () => {});
terminal.on("data", (data: string) => console.log(data));
terminal.on("key", () => {});
terminal.on("key", (key: string) => console.log(key));
terminal.on("key", (key: string, event: KeyboardEvent) =>
  console.log(key, event)
);
terminal.on("keydown", () => {});
terminal.on("keydown", (event: KeyboardEvent) => console.log(event));
terminal.on("keypress", () => {});
terminal.on("keypress", (event: KeyboardEvent) => console.log(event));
terminal.on("refresh", () => {});
terminal.on("refresh", (data: { start: number, end: number }) =>
  console.log(data)
);
terminal.on("resize", () => {});
terminal.on("resize", (data: { cols: number, rows: number }) =>
  console.log(data)
);
terminal.on("scroll", () => {});
terminal.on("scroll", (ydisp: number) => console.log(ydisp));
terminal.on("title", () => {});
terminal.on("title", (title: string) => console.log(title));
terminal.off("blur", () => {});
terminal.off("focus", () => {});
terminal.off("linefeed", () => {});
terminal.off("selection", () => {});
terminal.off("data", () => {});
terminal.off("data", (data: string) => console.log(data));
terminal.off("key", () => {});
terminal.off("key", (key: string) => console.log(key));
terminal.off("key", (key: string, event: KeyboardEvent) =>
  console.log(key, event)
);
terminal.off("keydown", () => {});
terminal.off("keydown", (event: KeyboardEvent) => console.log(event));
terminal.off("keypress", () => {});
terminal.off("keypress", (event: KeyboardEvent) => console.log(event));
terminal.off("refresh", () => {});
terminal.off(
  "refresh",
  (data: { element: HTMLElement, start: number, end: number }) =>
    console.log(data)
);
terminal.off("resize", () => {});
terminal.off(
  "resize",
  (data: { terminal: Terminal, cols: number, rows: number }) =>
    console.log(data)
);
terminal.off("scroll", () => {});
terminal.off("scroll", (ydisp: number) => console.log(ydisp));
terminal.off("title", () => {});
terminal.off("title", (title: string) => console.log(title));
let e: ?HTMLElement;
e && terminal.open(e);
terminal.attachCustomKeyEventHandler((e: KeyboardEvent) => true);
terminal.attachCustomKeyEventHandler((e: KeyboardEvent) => false);
const r01: string = terminal.getOption("cursorStyle");
const r02: string = terminal.getOption("termName");
const r03: boolean = terminal.getOption("cancelEvents");
const r04: boolean = terminal.getOption("convertEol");
const r05: boolean = terminal.getOption("cursorBlink");
const r06: boolean = terminal.getOption("debug");
const r07: boolean = terminal.getOption("disableStdin");
const r08: boolean = terminal.getOption("popOnBell");
const r09: boolean = terminal.getOption("screenKeys");
const r10: boolean = terminal.getOption("useFlowControl");
const r11: boolean = terminal.getOption("visualBell");
const r12: string[] = terminal.getOption("colors");
const r13: number = terminal.getOption("cols");
const r14: number = terminal.getOption("rows");
const r15: number = terminal.getOption("tabStopWidth");
const r16: number = terminal.getOption("scrollback");
const r18: (data: string) => void = terminal.getOption("handler");
const r19: string = terminal.getOption("bellSound");
const r20: string = terminal.getOption("bellStyle");
const r21: boolean = terminal.getOption("enableBold");
const r22: number = terminal.getOption("letterSpacing");
const r23: boolean = terminal.getOption("macOptionIsMeta");
const r24: string = terminal.getOption("fontWeight");
const r25: string = terminal.getOption("fontWeightBold");
const r26: boolean = terminal.getOption("allowTransparency");
const r27: boolean = terminal.getOption("rightClickSelectsWord");
terminal.setOption("cursorStyle", "bar");
terminal.setOption("cursorStyle", "block");
terminal.setOption("cursorStyle", "underline");
terminal.setOption("termName", "foo");
terminal.setOption("cancelEvents", true);
terminal.setOption("convertEol", true);
terminal.setOption("cursorBlink", true);
terminal.setOption("debug", true);
terminal.setOption("disableStdin", true);
terminal.setOption("enableBold", true);
terminal.setOption("fontWeight", "normal");
terminal.setOption("fontWeight", "bold");
terminal.setOption("fontWeightBold", "normal");
terminal.setOption("fontWeightBold", "bold");
terminal.setOption("popOnBell", true);
terminal.setOption("screenKeys", true);
terminal.setOption("useFlowControl", true);
terminal.setOption("allowTransparency", true);
terminal.setOption("visualBell", true);
let colorsArr: Array<string> = ["a", "b"];
terminal.setOption("colors", colorsArr);
terminal.setOption("letterSpacing", 1);
terminal.setOption("cols", 1);
terminal.setOption("rows", 1);
terminal.setOption("tabStopWidth", 1);
terminal.setOption("scrollback", 1);
terminal.setOption("handler", (data: string): void => console.log(data));
terminal.setOption("bellSound", "foo");
terminal.setOption("bellStyle", "none");
terminal.setOption("bellStyle", "sound");
terminal.setOption("fontSize", 1);
terminal.setOption("lineHeight", 1);
terminal.setOption("fontFamily", "foo");
terminal.setOption("theme", { background: "#ff0000" });
terminal.setOption("macOptionIsMeta", true);
terminal.setOption("rightClickSelectsWord", false);
terminal.scrollLines(-1);
terminal.scrollLines(1);
terminal.scrollLines(-1);
terminal.scrollLines(1);
terminal.scrollToTop();
terminal.scrollToBottom();
const r1: boolean = terminal.hasSelection();
const r2: string = terminal.getSelection();
terminal.clearSelection();
terminal.selectAll();

terminal.registerLinkMatcher(/foo/, () => {});
terminal.registerLinkMatcher(new RegExp("foo"), () => {});
terminal.registerLinkMatcher(/foo/, () => {}, {});
terminal.registerLinkMatcher(
  /foo/,
  (event: MouseEvent, uri: string) => {
    console.log(event, uri);
    return void 0;
  },
  {}
);
terminal.registerLinkMatcher(/foo/, () => {}, {});
terminal.registerLinkMatcher(/foo/, () => {}, {});
terminal.registerLinkMatcher(/foo/, () => {}, {
  matchIndex: 1
});
terminal.registerLinkMatcher(/foo/, () => {}, {
  matchIndex: 1,
  priority: 1,
  validationCallback: (uri: string, callback: (isValid: boolean) => void) => {
    console.log(uri, callback);
  },
  tooltipCallback: (e: MouseEvent, uri: string) => {
    console.log(e, uri);
  },
  leaveCallback: () => {}
});
terminal.deregisterLinkMatcher(1);
