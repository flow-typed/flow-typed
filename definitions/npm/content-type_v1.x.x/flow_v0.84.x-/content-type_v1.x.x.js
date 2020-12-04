declare module 'content-type' {
  declare type contentType$OutputParsedContentType = {|
    type: string,
    parameters: {| [string]: string |},
  |};

  declare type contentType$InputParsedContentType = {|
    +type: string,
    +parameters?: { [string]: string | number, ... },
  |};

  declare function parse(
    string | http$IncomingMessage<> | http$ServerResponse
  ): contentType$OutputParsedContentType;

  declare function format(contentType$InputParsedContentType): string;

  declare module.exports: {|
    +parse: typeof parse,
    +format: typeof format,
  |};
}
