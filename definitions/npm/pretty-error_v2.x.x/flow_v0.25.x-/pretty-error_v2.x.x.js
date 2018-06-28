declare module "pretty-error" {
  declare class PrettyError {
    static constructor(): PrettyError;
    static start(): PrettyError;
    alias(toBeAliased: string, alias: string): this;
    appendStyle(style: Object): this;
    render(error: Error): string;
    skip(skipFn: (traceline: Object, lineNumber: number) => boolean): this;
    skipNodeFiles(): this;
    skipPackage(...packages: string[]): this;
    skipPath(path: string): this;
    start(): this;
    withoutColors(): this;
  }
  declare module.exports: Class<PrettyError>;
}
