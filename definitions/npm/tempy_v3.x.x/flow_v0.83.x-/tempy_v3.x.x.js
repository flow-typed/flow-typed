declare module 'tempy' {
  declare type FileOptions =
    | {|
        +extension?: string,
      |}
    | {|
        +name?: string,
      |};

  declare type DirectoryOptions = {|
    +prefix?: string,
  |};

  declare type TaskCallback<ReturnValueType> = (
    temporaryPath: string,
  ) => Promise<ReturnValueType> | ReturnValueType;

  declare function temporaryFileTask<ReturnValueType>(
    callback: TaskCallback<ReturnValueType>,
    options?: FileOptions,
  ): Promise<ReturnValueType>;

  declare function temporaryDirectory(options?: DirectoryOptions): string;

  declare function temporaryDirectoryTask<ReturnValueType>(
    callback: TaskCallback<ReturnValueType>,
    options?: DirectoryOptions,
  ): Promise<ReturnValueType>;

  declare function temporaryWrite(
    fileContent: string | Buffer | $TypedArray | DataView | ReadableStream,
    options?: FileOptions,
  ): Promise<string>;

  declare function temporaryWriteTask<ReturnValueType>(
    fileContent: string | Buffer | $TypedArray | DataView | ReadableStream,
    callback: TaskCallback<ReturnValueType>,
    options?: FileOptions,
  ): Promise<ReturnValueType>;

  declare function temporaryWriteSync(
    fileContent: string | Buffer | $TypedArray | DataView,
    options?: FileOptions,
  ): string;

  declare var rootTemporaryDirectory: string;
}
