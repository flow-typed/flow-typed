// @flow

import markedMan from 'marked-man'

markedMan.setOptions({
  highlight: function (code, lang: string, callback) {
    callback(null, 'TROLOLO');
  }
});

markedMan.setOptions({
  highlight: (code): string => {
    return 'Stubby stub.';
  }
});

markedMan.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  smartLists: true,
  smartypants: false,
  format: 'roff',
  name: '',
  date: new Date,
  section: '',
  version: '',
  manual: '',
  ronn: false
});

// $ExpectError
markedMan.setOptions([ 'yoloism', true ])

markedMan('', (err, content) => {
  if (err) throw err;
});

// $ExpectError
markedMan(24, function (err, content) {
  if (err) throw err;
  console.log(content);
});

const x: string = markedMan('');
markedMan('', { tables: false })

// $ExpectError
markedMan('up', 'top')
// $ExpectError
const y: string = markedMan(23);

const renderer = new markedMan.Renderer();

renderer.heading = (text, level) => text + (level * 10).toString()
renderer.tablecell = (content, alignment) => alignment ? content + alignment : content

