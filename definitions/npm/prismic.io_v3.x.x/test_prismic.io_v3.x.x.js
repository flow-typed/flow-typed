// @flow

import { api, Predicates } from 'prismic.io';

function geoPointElTest(el) {
  return {
    latitude: (el.latitude : number),
    // $ExpectError
    $latitude: (el.latitude : string),
    longitude: (el.longitude : number),
  };
}

function linkElTest(el) {
  return {
    _url: el.url(),
  };
}

function imageViewTest(el) {
  return {
    url: (el.url : string),
    // $ExpectError
    $url: (el.url : boolean),
    width: (el.width : number),
    height: (el.height : number),
    alt: (el.alt : string),
    _ratio: (el.ratio() : number),
  };
}

function imageElTest(el) {
  return {
    main: imageViewTest(el.main),
    url: (el.url : string),
    // $ExpectError
    $url: (el.url : boolean),
    views: imageViewTest(el.views.foo),
  };
}

function structuredTextElTest(el) {
  return {
    blocks: (el.blocks : Array<Object>),
    // $ExpectError
    $blocks: (el.blocks : Array<string>),
    _getTitle: (() => {
      const x = el.getTitle();
      return !x ? null : (x.blocks : Array<Object>);
    })(),
    _getFirstParagraph: (() => {
      const x = el.getFirstParagraph();
      return !x ? null : (x.blocks : Array<Object>);
    })(),
    _getParagraphs: (el.getParagraphs().map(p => (p.blocks : Array<Object>))),
    _getParagraph: (el.getParagraph(1).blocks : Array<Object>),
    _getFirstImage: (() => {
      const x = el.getFirstImage();
      return !x ? null : imageViewTest(x);
    })(),
  };
}

function groupDocTest(el) {
  return {
    data: (el.data : Object),
    // $ExpectError
    $data: (el.data : Array<number>),
    fragments: (el.fragments : Array<Object>),
  };
}

function groupElTest(el) {
  return {
    value: el.value.map(groupDocTest),
    _toArray: el.toArray().map(groupDocTest),
    _getFirstImage: (() => {
      const imageEl = el.getFirstImage();
      return !imageEl ? null : imageElTest(imageEl);
    })(),
    _getFirstTitle: (() => {
      const structuredTextEl = el.getFirstTitle();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    _getFirstParagraph: (() => {
      const structuredTextEl = el.getFirstParagraph();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
  };
}

function sliceTest(el) {
  return {
    sliceType: (el.sliceType : string),
    // $ExpectError
    $sliceType: (el.sliceType : Array<boolean>),
    label: (el.label : string),
    value: (el.value : Object),
    _getFirstImage: (() => {
      const imageEl = el.getFirstImage();
      return !imageEl ? null : imageElTest(imageEl);
    })(),
    _getFirstTitle: (() => {
      const structuredTextEl = el.getFirstTitle();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    _getFirstParagraph: (() => {
      const structuredTextEl = el.getFirstParagraph();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
  };
}

function sliceZoneElTest(el) {
  return {
    values: el.value.map(sliceTest),
    slices: el.slices.map(sliceTest),
    _getFirstImage: (() => {
      const imageEl = el.getFirstImage();
      return !imageEl ? null : imageElTest(imageEl);
    })(),
    _getFirstTitle: (() => {
      const structuredTextEl = el.getFirstTitle();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    _getFirstParagraph: (() => {
      const structuredTextEl = el.getFirstParagraph();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
  };
}

function linkedDocumentTest(el) {
  return {
    document: (el.document : Object),
    // $ExpectError
    $document: (el.document : Array<string>),
    id: (el.id : string),
    uid: (el.uid : ?string),
    tags: (el.tags : Array<string>),
    slug: (el.slug : string),
    type: (el.type : string),
    fragments: (el.fragments : Array<Object>),
    isBroken: (el.isBroken : boolean),
  };
}

function documentTest(doc) {
  return {
    id: (doc.id : string),
    // $ExpectError
    $id: (el.id : Array<Object>),
    uid: (doc.uid : ?string),
    type: (doc.type : string),
    href: (doc.href : string),
    tags: (doc.tags : Array<string>),
    slug: (doc.slug : string),
    slugs: (doc.tags : Array<string>),
    data: (doc.data : Object),
    _get: (doc.get('foo') : ?Object),
    _getAll: (doc.getAll('foo') : Array<Object>),
    _getImage: (() => {
      const imageEl = doc.getImage('foo');
      return !imageEl ? null : imageElTest(imageEl);
    })(),
    _getAllImages: doc.getAllImages({}).map(imageElTest),
    _getFirstImage: (() => {
      const imageEl = doc.getFirstImage();
      return !imageEl ? null : imageElTest(imageEl);
    })(),
    _getFirstTitle: (() => {
      const structuredTextEl = doc.getFirstTitle();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    _getFirstParagraph: (() => {
      const structuredTextEl = doc.getFirstParagraph();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    _getImageView: (() => {
      const imageView = doc.getImageView('foo', 'foo');
      return !imageView ? null : imageViewTest(imageView);
    })(),
    _getAllImageViews: doc.getAllImageViews('foo', 'foo').map(imageViewTest),
    _getTimestamp: (() => {
      const timestamp = doc.getTimestamp('foo');
      return !timestamp ? null : (timestamp : Date);
    })(),
    _getDate: (() => {
      const date = doc.getDate('foo');
      return !date ? null : (date : Date);
    })(),
    _getBoolean: (() => {
      const bool = doc.getBoolean('foo');
      return !bool ? null : (bool : boolean);
    })(),
    // TODO: How to test a union result?
    // _getText: (() => {
    //   const text = doc.getText('foo', 'foo');
    //   if (text !== null && text.blocks !== undefined) {
    //     return structuredTextElTest(text);
    //   }
    //   return null;
    // })(),
    _getStructuredText: (() => {
      const structuredTextEl = doc.getStructuredText('foo');
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    _getLink: (() => {
      const linkEl = doc.getLink('foo');
      return !linkEl ? null : linkElTest(linkEl);
    })(),
    _getNumber: (() => {
      const num = doc.getNumber('foo');
      return !num ? null : (num : number);
    })(),
    _getColor: (() => {
      const color = doc.getColor('foo');
      return !color ? null : (color : string);
    })(),
    _getGeoPoint: (() => {
      const geoPointEl = doc.getGeoPoint('foo');
      return !geoPointEl ? null : geoPointElTest(geoPointEl);
    })(),
    _getGroup: (() => {
      const groupEl = doc.getGroup('foo');
      return !groupEl ? null : groupElTest(groupEl);
    })(),
    _getHtml: (doc.getHtml('foo', () => undefined) : string),
    _linkedDocuments: doc.linkedDocuments().map(linkedDocumentTest),
    _getSliceZone: (() => {
      const sliceZoneEl = doc.getSliceZone('foo');
      return !sliceZoneEl ? null : sliceZoneElTest(sliceZoneEl);
    })(),
  };
}

const options = {
  accessToken: 'foo',
  apiDataTTL: 1,
};
api('http://foo.prismic.com', options).then(_api => {
  _api.get().then(() => void 0);
  _api.refresh().then(() => void 0);
  _api.form('foo')
    .set('foo', 'bar')
    .ref('foo')
    .query(
      Predicates.at('foo', 'bar'),
      Predicates.not('foo', 'bar'),
      Predicates.missing('foo'),
      Predicates.has('foo'),
      Predicates.any('foo', ['bar']),
      Predicates.in('foo', ['bar']),
      Predicates.fulltext('foo', 'bar'),
      Predicates.similar('foo', 1),
      Predicates.gt('foo', 1),
      Predicates.lt('foo', 1),
      Predicates.inRange('foo', 1, 2),
      Predicates.dateBefore('foo', new Date()),
      Predicates.dateAfter('foo', new Date()),
      Predicates.dateBetween('foo', new Date(), new Date()),
      Predicates.dayOfMonth('foo', 1),
      Predicates.dayOfMonthAfter('foo', 1),
      Predicates.dayOfMonthBefore('foo', 1),
      Predicates.dayOfWeek('foo', 1),
      Predicates.dayOfWeek('foo', 'Monday'),
      Predicates.dayOfWeekAfter('foo', 1),
      Predicates.dayOfWeekAfter('foo', 'Monday'),
      Predicates.dayOfWeekBefore('foo', 1),
      Predicates.dayOfWeekBefore('foo', 'Monday'),
      Predicates.month('foo', 1),
      Predicates.monthBefore('foo', 1),
      Predicates.monthAfter('foo', 1),
      Predicates.year('foo', 1),
      Predicates.hour('foo', 1),
      Predicates.hourBefore('foo', 1),
      Predicates.hourAfter('foo', 1),
      Predicates.near('foo', 1, 1, 1)
    )
    .query(
      // $ExpectError
      Predicates.at('foo', 1)
    )
    .pageSize(1)
    .fetch('foo')
    .fetch(['foo'])
    .fetchLinks('foo')
    .fetchLinks(['foo'])
    .orderings(['foo'])
    .submit()
    .then(result => ({
      results: result.results.map(documentTest),
      page: (result.page : number),
      // $ExpectError
      $page: (result.page : Object),
      resultsPerPage: (result.results_per_page: number),
      resultsSize: (result.results_size: number),
      totalResultsSize: (result.total_results_size: number),
      totalPages: (result.total_pages: number),
      nextPage: (result.next_page: number),
      prevPage: (result.prev_page: number),
    }));
});
