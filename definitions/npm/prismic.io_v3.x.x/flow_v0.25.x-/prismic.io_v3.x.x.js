declare module 'prismic.io' {
  declare type LinkResolver = (doc: Document) => string;

  declare type DaysOfWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';

  declare type Month =
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';

  declare class Htmlable {
    asHtml(resolver?: LinkResolver) : string;
  }
  declare type $Htmlable = Htmlable;

  declare class Textable {
    asText(resolver?: LinkResolver) : string;
  }
  declare type $Textable = Textable;

  declare class Urlable {
    url(resolver?: LinkResolver) : string;
  }
  declare type $Urlable = Urlable;

  declare class Text mixins Htmlable, Textable {
    constructor(data: string) : void;
    value: string;
  }
  declare type $Text = Text;

  declare class DocumentLink extends WithFragments mixins Urlable {
    constructor(data: Object) : void;
    document: Object;
    id: string;
    uid: ?string;
    tags: Array<string>;
    slug: string;
    type: string;
    fragments: Array<Object>;
    isBroken: boolean;
  }
  declare type $DocumentLink = DocumentLink;

  declare class WebLink mixins Htmlable, Textable, Urlable {
    constructor(data: Object) : void;
    value: Object;
  }
  declare type $WebLink = WebLink;

  declare class FileLink mixins Htmlable, Textable, Urlable {
    constructor(data: Object) : void;
    value: Object;
  }
  declare type $FileLink = FileLink;

  declare class ImageLink mixins Htmlable, Textable, Urlable {
    constructor(data: Object) : void;
    value: Object;
  }
  declare type $ImageLink = ImageLink;

  declare class Select mixins Htmlable, Textable {
    constructor(data: string) : void;
    value: string;
  }
  declare type $Select = Select;

  declare class Color mixins Htmlable, Textable {
    constructor(data: Object) : void;
    value: Object;
  }
  declare type $Color = Color;

  declare class GeoPoint mixins Htmlable, Textable {
    constructor(data: Object) : void;
    latitude: number;
    longitude: number;
  }
  declare type $GeoPoint = GeoPoint;

  declare class Num mixins Htmlable, Textable {
    constructor(data: number) : void;
    value: number;
  }
  declare type $Num = Num;

  declare class DateFragment mixins Htmlable, Textable {
    constructor(data: string) : void;
    value: Date;
  }
  declare type $DateFragment = DateFragment;

  declare class Timestamp mixins Htmlable, Textable {
    constructor(data: string) : void;
    value: Date;
  }
  declare type $Timestamp = Timestamp;

  declare class Embed mixins Htmlable, Textable {
    constructor(data: Object) : void;
    value: Object;
  }
  declare type $Embed = Embed;

  declare class ImageView mixins Htmlable, Textable {
    constructor(url: string, width: number, height: number, alt: string) : void;
    url: string;
    width: number;
    height: number;
    alt: string;
    ratio() : number;
  }
  declare type $ImageView = ImageView;

  declare type ImageViews = { [key: string] : ImageView };

  declare class ImageEl mixins Htmlable, Textable {
    constructor(main: ImageView, views: ?ImageViews) : void;
    main: ImageView;
    url: string;
    views: ImageViews;
    getView(name: string) : ?ImageView;
  }
  declare type $ImageEl = ImageEl;

  declare class Separator mixins Htmlable, Textable { }
  declare type $Separator = Separator;

  declare class GroupDoc extends WithFragments {
    constructor(data: Object) : void;
    data: Object;
    fragments: Array<Object>;
  }
  declare type $GroupDoc = GroupDoc;

  declare class Group mixins Htmlable, Textable {
    constructor(data: Array<Object>) : void;
    value: Array<GroupDoc>;
    toArray() : Array<GroupDoc>;
    getFirstImage() : ?ImageEl;
    getFirstTitle() : ?StructuredText;
    getFirstParagraph() : ?StructuredText;
  }
  declare type $Group = Group;

  declare type HtmlSerializer = (element : Object, content : ?string) => ?string;
  declare class StructuredText mixins Htmlable, Textable {
    constructor(blocks: Array<Object>) : void;
    blocks: Array<Object>;
    getTitle() : ?StructuredText;
    getFirstParagraph() : ?StructuredText;
    getParagraphs() : Array<StructuredText>;
    getParagraph(n: number) : StructuredText;
    getFirstImage() : ?ImageView;

    // StructuredText has an extended custom version of asHtml that allows
    // you to provide an htmlSerializer
    // @see https://prismic.io/docs/fields/structuredtext#integrate?lang=javascript
    asHtml(resolver?: LinkResolver, serializer?: HtmlSerializer) : string;
  }
  declare type $StructuredText = StructuredText;

  declare class Slice mixins Htmlable, Textable {
    constructor(sliceType: string, label: string, value: Object) : void;
    sliceType: string;
    label: string;
    value: Object;
    getFirstImage() : ?ImageEl;
    getFirstTitle() : ?StructuredText;
    getFirstParagraph() : ?StructuredText;
  }
  declare type $Slice = Slice;

  declare class SliceZone mixins Htmlable, Textable {
    constructor(data: Array<Object>) : void;
    value: Array<Slice>;
    slices: Array<Slice>;
    getFirstImage() : ?ImageEl;
    getFirstTitle() : ?StructuredText;
    getFirstParagraph() : ?StructuredText;
  }
  declare type $SliceZone = SliceZone;

  declare class WithFragments mixins Htmlable, Textable {
    get(name: string) : ?Object;
    getAll(name: string) : Array<Object>;
    getImage(name: string) : ?ImageEl;
    getAllImages(fragment: Object) : Array<ImageEl>;
    getFirstImage() : ?ImageEl;
    getFirstTitle() : ?StructuredText;
    getFirstParagraph() : ?StructuredText;
    getImageView(name: string, view: string) : ?ImageView;
    getAllImageViews(name: string, view: string) : Array<ImageView>;
    getTimestamp(name: string) : ?Date;
    getDate(name: string) : ?Date;
    getBoolean(name: string) : boolean;
    getText(name: string, after: ?string) : ?string;
    getStructuredText(name: string) : ?StructuredText;
    getLink(name: string) : null | DocumentLink | WebLink | ImageLink | FileLink;
    getNumber(name: string) : ?number;
    getColor(name: string) : ?string;
    getGeoPoint(name: string) : ?GeoPoint;
    getGroup(name: string) : ?Group;
    getHtml(name: string, resolver?: LinkResolver) : string;
    linkedDocuments() : Array<DocumentLink>;
    getSliceZone(name: string) : ?SliceZone;
  }

  declare class Document extends WithFragments {
    constructor(id: string, uid: ?string, type: string, href: string, tags: Array<string>, slugs: Array<string>, data: Object) : void;
    id: string;
    uid: ?string;
    type: string;
    href: string;
    tags: Array<string>;
    slug: string;
    slugs: Array<string>;
    data: Object;
  }
  declare type $Document = Document;

  declare type Fragments = {
    Embed: Embed,
    Image: ImageEl,
    ImageView: ImageView,
    Text: Text,
    Number: Num,
    Date: DateFragment,
    Timestamp: Timestamp,
    Select: Select,
    Color: Color,
    StructuredText: StructuredText,
    WebLink: WebLink,
    DocumentLink: DocumentLink,
    ImageLink: ImageLink,
    FileLink: FileLink,
    Separator: Separator,
    Group: Group,
    GeoPoint: GeoPoint,
    Slice: Slice,
    SliceZone: SliceZone,
  }

  declare type PredicateQuery = Array<string>;

  declare class Predicates {
    toQuery(predicate: Object) : string;
    at(fragment: string, value: number | string) : PredicateQuery;
    not(fragment: string, value: number | string) : PredicateQuery;
    missing(fragment: string) : PredicateQuery;
    has(fragment: string) : PredicateQuery;
    any(fragment: string, values: Array<number | string>) : PredicateQuery;
    in(fragment: string, values: Array<string>) : PredicateQuery;
    fulltext(fragment: string, value: string) : PredicateQuery;
    similar(documentId: string, maxResults: number) : PredicateQuery;
    gt(fragment: string, value: number) : PredicateQuery;
    lt(fragment: string, value: number) : PredicateQuery;
    inRange(fragment: string, before: number, after: number) : PredicateQuery;
    dateBefore(fragment: string, before: Date) : PredicateQuery;
    dateAfter(fragment: string, before: Date) : PredicateQuery;
    dateBetween(fragment: string, before: Date, after: Date) : PredicateQuery;
    dayOfMonth(fragment: string, day: number) : PredicateQuery;
    dayOfMonthAfter(fragment: string, day: number) : PredicateQuery;
    dayOfMonthBefore(fragment: string, day: number) : PredicateQuery;
    dayOfWeek(fragment: string, day: number | DaysOfWeek) : PredicateQuery;
    dayOfWeekAfter(fragment: string, day: number | DaysOfWeek) : PredicateQuery;
    dayOfWeekBefore(fragment: string, day: number | DaysOfWeek) : PredicateQuery;
    month(fragment: string, month: number | Month) : PredicateQuery;
    monthBefore(fragment: string, month: number | Month) : PredicateQuery;
    monthAfter(fragment: string, month: number | Month) : PredicateQuery;
    year(fragment: string, year: number) : PredicateQuery;
    hour(fragment: string, hour: number) : PredicateQuery;
    hourBefore(fragment: string, hour: number) : PredicateQuery;
    hourAfter(fragment: string, hour: number) : PredicateQuery;
    near(fragment: string, latitude: number, longitude: number, radius: number) : PredicateQuery;
  }

  declare class Response {
    constructor(page: number, results_per_page: number, results_size: number, total_results_size: number, total_pages: number, next_page: number, prev_page: number, results: Array<Document>) : void;
    page: number;
    results_per_page: number;
    results_size: number;
    total_results_size: number;
    total_pages: number;
    next_page: number;
    prev_page: number;
    results: Array<Document>;
  }
  declare type $Response = Response;

  declare class SearchForm {
    constructor(context: Object, form: Object, data: ?Object) : void;
    set(field: string, value: string) : this;
    ref(ref: string) : this;
    query(...queries: Array<PredicateQuery>) : this;
    pageSize(size: number) : this;
    fetch(fields: string | Array<string>) : this;
    fetchLinks(fields: string | Array<string>) : this;
    page(p: number) : this;
    orderings(p: Array<string>) : this;
    submit() : Promise<Response>;
  }
  declare type $SearchForm = SearchForm;

  declare type APIOptions = {
    accessToken?: string,
    req?: any,
    apiCache?: any,
    requestHandler?: any,
    apiDataTTL?: number
  }

  declare class API {
    constructor(url: string, options: ?APIOptions) : void;
    get() : Promise<any>;
    refresh() : Promise<any>;
    form(formId: string) : SearchForm;
    master() : string,
    ref(label: string) : string;
    currentExperiment() : any;
    query(q: PredicateQuery | Array<PredicateQuery>, options: Object) : Promise<Response>;
    getByID(id: string, options: Object) : Promise<?Document>;
    getByIDs(ids: Array<string>, options: Object) : Promise<Array<Document>>;
    getByUID(type: string, uid: string, options: Object) : Promise<?Document>;
    getBookmark(bookmark: string, options: Object) : Promise<?Document>;
    previewSession(token: string, resolver: LinkResolver, defaultUrl: string) : Promise<string>;
    request(url: string, callback: (err: any, resp: Response) => void) : void;
    response(documents: Array<Object>) : Response;
  }
  declare type $API = API;

  declare type getAPI = (url: string, options: ?APIOptions) => Promise<API>;

  declare type Prismic = {
    experimentCookie: string,
    previewCookie: 'io.prismic.preview',
    Document: Document,
    SearchForm: SearchForm,
    Form: any, // I think this is for Prismic's internal mainly.
    Experiments: any, // I think this is for Prismic's internal mainly.
    Predicates: Predicates,
    Fragments: Fragments,
    api: getAPI,
    Api: getAPI,
    parseDoc: (json: Object) => Document
  }

  declare module.exports: Prismic;
}
