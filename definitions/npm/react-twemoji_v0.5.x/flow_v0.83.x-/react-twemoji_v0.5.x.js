declare module 'react-twemoji' {
  /**
   * If given to parse, this callback will be invoked per each found emoji.
   *
   * If this callback returns a falsy value instead of a valid `src` to use for the image, nothing will actually change for that specific emoji.
   *
   * @param icon the lower case HEX code point i.e. "1f4a9"
   * @param options all info for this parsing operation
   * @param variant the optional \uFE0F ("as image") variant, in case this info is anyhow meaningful. By default this is ignored.
   */
  declare type ParseCallback = (icon: string, options: TwemojiOptions, variant: string) => string | false;

  declare type TwemojiOptions = {|
    /**
     * Default: MaxCDN
     */
    base?: string,
    /**
     * Default: .png
     */
    ext?: string,
    /**
     * Default: emoji
     */
    className?: string,
    /**
     * Default: 72x72
     */
    size?: string | number,
    /**
     * To render with SVG use `folder: svg, ext: .svg`
     */
    folder?: string,
    /**
     * The function to invoke in order to generate image src(s).
     */
    callback?: ParseCallback,
    /**
     * The function to invoke in order to generate additional, custom attributes for the image tag.
     * Default () => ({})
     * @param icon the lower case HEX code point i.e. "1f4a9"
     * @param variant variant the optional \uFE0F ("as image") variant, in case this info is anyhow meaningful. By default this is ignored.
     *
     */
    attributes?: (icon: string, variant: string) => { ... };
  |};

  declare type TwemojiProps = {|
    children?: React$Node,

    /**
     * When it is true, Twemoji will not render a wrapping element (with tag)
     * to contain its children. Note that since twemoji.parse needs a DOM element
     * reference, any direct pure text child of Twemoji is not parsed when
     * noWrapper is true. E.g. foo in
     * <Twemoji noWrapper={true}>foo<p>bar</p></Twemoji> is not parsed.
     */
    noWrapper?: boolean,

    /**
     * twemoji.parse options.
     */
    options?: TwemojiOptions | ParseCallback,

    /**
     * The tag of the wrapping element. This option is ignored when noWrapper is
     * true.
     */
    tag?: string,
  |};

  /**
   * A simple React wrapper for Twemoji. It calls twemoji.parse() to convert emoji
   * characters to Twemoji images.
   */
  declare module.exports: (props: TwemojiProps) => React$Node;
}
