declare module "sanitize-html" {
  declare type Frame = {
    tag: string,
    attribs: Object,
    text: string,
    tagPosition: number
  };
  declare type SanitizeOptions = {
    allowedTags?: Array<string> | false,
    allowedAttributes?: { [key: string]: Array<string> }[] | Object | false,
    transformTags?: {
      [key: string]:
        | string
        | ((
            tagName: string,
            attribs: Object
          ) => { tagName: string, attribs: Object })
    },
    exclusiveFilter?: (frame: Frame) => boolean,
    textFilter?: (text: string) => string,
    allowedClasses?: { [key: string]: Array<string> },
    allowedSchemes?: Array<string> | { [key: string]: Array<string> },
    nonTextTags?: Array<string>,
    parser?: $Shape<{
      xmlMode: boolean,
      lowerCaseTags: boolean,
      lowerCaseAttributeNames: boolean,
      recognizeCDATA: boolean,
      recognizeSelfClosing: boolean
    }>
  };
  declare module.exports: (dirty: string, options?: SanitizeOptions) => string;
}
