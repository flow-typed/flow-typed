declare module "pretty-error" {
  declare class PrettyError {
    static constructor(): PrettyError;
    static start(): void;
    alias(toBeAliased: string, alias: string): void;
    appendStyle(style: Object): void;
    render(error: Error): void;
    skip(skipFn: (traceline: Object, lineNumber: number) => boolean): void;
    skipNodeFiles(): void;
    skipPackage(...packages: string[]): void;
    skipPath(path: string): void;
    start(): void;
    withoutColors(): void;
  }
  declare module.exports: Class<PrettyError>;
}
