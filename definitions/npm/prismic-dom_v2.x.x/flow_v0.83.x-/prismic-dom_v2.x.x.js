declare module 'prismic-dom' {
  declare export type Elements = {|
    heading1: 'heading1';
    heading2: 'heading2';
    heading3: 'heading3';
    heading4: 'heading4';
    heading5: 'heading5';
    heading6: 'heading6';
    paragraph: 'paragraph';
    preformatted: 'preformatted';
    strong: 'strong';
    em: 'em';
    listItem: 'list-item';
    oListItem: 'o-list-item';
    list: 'group-list-item';
    oList: 'group-o-list-item';
    image: 'image';
    embed: 'embed';
    hyperlink: 'hyperlink';
    label: 'label';
    span: 'span';
  |};

  declare type Serializer<T> = (
    type: $Keys<Elements>,
    element: any,
    text: string | null,
    children: Array<T>,
    index: number,
  ) => T;

  declare type LinkResolver = (doc: any) => string;

  declare var RichText: {|
    asHtml(
      richText: $NonMaybeType<mixed>,
      linkResolver?: LinkResolver,
      serializer?: Serializer<string>,
    ): string;
    asText(richText: $NonMaybeType<mixed>, joinString?: string): string;
    Elements: Elements;
  |};

  declare var Link: {|
    url(link: $NonMaybeType<mixed>, linkResolver?: LinkResolver): string;
  |};

  declare var HTMLSerializer: Serializer<string>;

  declare module.exports: {|
    default: {|
      RichText: typeof RichText,
      Link: typeof Link,
    |},
    RichText: typeof RichText,
    Link: typeof Link,
    HTMLSerializer: typeof HTMLSerializer,
  |};
}
