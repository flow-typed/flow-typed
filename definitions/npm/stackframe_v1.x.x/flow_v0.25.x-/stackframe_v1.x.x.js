declare module "stackframe" {
  declare class StackFrame {
    functionName?: string;
    args?: Array<string>;
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
    isEval?: boolean;
    isNative?: boolean;
    source?: string;

    setFunctionName(p: string): void;
    getFunctionName(): string;

    setArgs(p: Array<string>): void;
    getArgs(): Array<string>;

    setFileName(p: string): void;
    getFileName(): string;

    setLineNumber(p: number): void;
    getLineNumber(): number;

    setColumnNumber(p: number): void;
    getColumnNumber(): number;

    setSource(p: string): void;
    getSource(): string;

    setIsEval(p: boolean): void;
    getIsEval(): boolean;

    setIsNative(p: boolean): void;
    getIsNative(): boolean;

    toString(): string;
  }

  declare module.exports: StackFrame;
}
