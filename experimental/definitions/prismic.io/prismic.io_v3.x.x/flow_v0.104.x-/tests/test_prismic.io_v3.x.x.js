// @flow

import { api, Predicates } from 'prismic.io';

function geoPointElTest(el) {
  return {
    test_latitude: (el.latitude : number),
    // $ExpectError
    test_invalid_latitude: (el.latitude : string),
    test_longitude: (el.longitude : number),
  };
}

function linkElTest(el) {
  return {
    test_url: el.url(),
  };
}

function imageViewTest(el) {
  return {
    test_url: (el.url : string),
    // $ExpectError
    test_invalid_url: (el.url : boolean),
    test_width: (el.width : number),
    test_height: (el.height : number),
    test_alt: (el.alt : string),
    test_ratio: (el.ratio() : number),
  };
}

function imageElTest(el) {
  return {
    test_main: imageViewTest(el.main),
    test_url: (el.url : string),
    // $ExpectError
    test_invalid_url: (el.url : boolean),
    test_views: imageViewTest(el.views.foo),
  };
}

function structuredTextElTest(el) {
  return {
    test_blocks: (el.blocks : Array<Object>),
    // $ExpectError
    test_invalid_blocks: (el.blocks : Array<string>),
    test_getTitle: (() => {
      const x = el.getTitle();
      return !x ? null : (x.blocks : Array<Object>);
    })(),
    test_getFirstParagraph: (() => {
      const x = el.getFirstParagraph();
      return !x ? null : (x.blocks : Array<Object>);
    })(),
    test_getParagraphs: (el.getParagraphs().map(p => (p.blocks : Array<Object>))),
    test_getParagraph: (el.getParagraph(1).blocks : Array<Object>),
    test_getFirstImage: (() => {
      const x = el.getFirstImage();
      return !x ? null : imageViewTest(x);
    })(),
    test_asHtml: (() => {
      return el.asHtml((doc) => doc.id, (el, content) => content || 'foo')
    }),
    // $ExpectError
    test_invalid_asHtml: (() => el.asHtml((doc) => doc.id, (el, content) => true))
  };
}

function groupDocTest(el) {
  return {
    test_data: (el.data : Object),
    // $ExpectError
    test_invalid_data: (el.data : Array<number>),
    test_fragments: (el.fragments : Array<Object>),
  };
}

function groupElTest(el) {
  return {
    test_value: el.value.map(groupDocTest),
    test_toArray: el.toArray().map(groupDocTest),
    test_getFirstImage: (() => {
      const imageEl = el.getFirstImage();
      return !imageEl ? null : imageElTest(imageEl);
    })(),
    test_getFirstTitle: (() => {
      const structuredTextEl = el.getFirstTitle();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    test_getFirstParagraph: (() => {
      const structuredTextEl = el.getFirstParagraph();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
  };
}

function sliceTest(el) {
  return {
    test_sliceType: (el.sliceType : string),
    // $ExpectError
    test_invalid_sliceType: (el.sliceType : Array<boolean>),
    test_label: (el.label : string),
    test_value: (el.value : Object),
    test_getFirstImage: (() => {
      const imageEl = el.getFirstImage();
      return !imageEl ? null : imageElTest(imageEl);
    })(),
    test_getFirstTitle: (() => {
      const structuredTextEl = el.getFirstTitle();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    test_getFirstParagraph: (() => {
      const structuredTextEl = el.getFirstParagraph();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
  };
}

function sliceZoneElTest(el) {
  return {
    test_values: el.value.map(sliceTest),
    test_slices: el.slices.map(sliceTest),
    test_getFirstImage: (() => {
      const imageEl = el.getFirstImage();
      return !imageEl ? null : imageElTest(imageEl);
    })(),
    test_getFirstTitle: (() => {
      const structuredTextEl = el.getFirstTitle();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    test_getFirstParagraph: (() => {
      const structuredTextEl = el.getFirstParagraph();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
  };
}

function linkedDocumentTest(el) {
  return {
    test_document: (el.document : Object),
    // $ExpectError
    test_invalid_document: (el.document : Array<string>),
    test_id: (el.id : string),
    test_uid: (el.uid : ?string),
    test_tags: (el.tags : Array<string>),
    test_slug: (el.slug : string),
    test_type: (el.type : string),
    test_fragments: (el.fragments : Array<Object>),
    test_isBroken: (el.isBroken : boolean),
  };
}

function documentTest(doc) {
  return {
    test_id: (doc.id : string),
    // $ExpectError
    test_invalid_id: (el.id : Array<Object>),
    test_uid: (doc.uid : ?string),
    test_type: (doc.type : string),
    test_href: (doc.href : string),
    test_tags: (doc.tags : Array<string>),
    test_slug: (doc.slug : string),
    test_slugs: (doc.tags : Array<string>),
    test_data: (doc.data : Object),
    test_get: (doc.get('foo') : ?Object),
    test_getAll: (doc.getAll('foo') : Array<Object>),
    test_getImage: (() => {
      const imageEl = doc.getImage('foo');
      return !imageEl ? null : imageElTest(imageEl);
    })(),
    test_getAllImages: doc.getAllImages({}).map(imageElTest),
    test_getFirstImage: (() => {
      const imageEl = doc.getFirstImage();
      return !imageEl ? null : imageElTest(imageEl);
    })(),
    test_getFirstTitle: (() => {
      const structuredTextEl = doc.getFirstTitle();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    test_getFirstParagraph: (() => {
      const structuredTextEl = doc.getFirstParagraph();
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    test_getImageView: (() => {
      const imageView = doc.getImageView('foo', 'foo');
      return !imageView ? null : imageViewTest(imageView);
    })(),
    test_getAllImageViews: doc.getAllImageViews('foo', 'foo').map(imageViewTest),
    test_getTimestamp: (() => {
      const timestamp = doc.getTimestamp('foo');
      return !timestamp ? null : (timestamp : Date);
    })(),
    test_getDate: (() => {
      const date = doc.getDate('foo');
      return !date ? null : (date : Date);
    })(),
    test_getBoolean: (() => {
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
    test_getStructuredText: (() => {
      const structuredTextEl = doc.getStructuredText('foo');
      return !structuredTextEl ? null : structuredTextElTest(structuredTextEl);
    })(),
    test_getLink: (() => {
      const linkEl = doc.getLink('foo');
      return !linkEl ? null : linkElTest(linkEl);
    })(),
    test_getNumber: (() => {
      const num = doc.getNumber('foo');
      return !num ? null : (num : number);
    })(),
    test_getColor: (() => {
      const color = doc.getColor('foo');
      return !color ? null : (color : string);
    })(),
    test_getGeoPoint: (() => {
      const geoPointEl = doc.getGeoPoint('foo');
      return !geoPointEl ? null : geoPointElTest(geoPointEl);
    })(),
    test_getGroup: (() => {
      const groupEl = doc.getGroup('foo');
      return !groupEl ? null : groupElTest(groupEl);
    })(),
    test_getHtml: (doc.getHtml('foo', doc => doc.id) : string),
    test_linkedDocuments: doc.linkedDocuments().map(linkedDocumentTest),
    test_getSliceZone: (() => {
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
      Predicates.at('foo', 1),
      Predicates.at('foo', 'bar'),
      Predicates.not('foo', 1),
      Predicates.not('foo', 'bar'),
      Predicates.missing('foo'),
      Predicates.has('foo'),
      Predicates.any('foo', ['bar', 1]),
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
      Predicates.at('foo', null)
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
