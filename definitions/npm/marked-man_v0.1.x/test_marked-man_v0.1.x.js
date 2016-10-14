// @flow

import markedMan from 'marked-man'

markedMan.setOptions({
  format: 'html',
  name: '',
  date: new Date,
  section: '',
  version: '',
  manual: '',
  gfm: true,
  breaks: true,
  sanitize: true,
  ronn: true
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
// $ExpectError
markedMan('', { tables: false })

// $ExpectError
markedMan('up', 'top')
// $ExpectError
const y: string = markedMan(23);

