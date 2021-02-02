// @flow

import marked from 'marked'

marked.setOptions({
  highlight: function (code, lang: string, callback) {
    callback(null, 'TROLOLO');
  }
});

marked.setOptions({
  highlight: (code): string => {
    return 'Stubby stub.';
  }
});

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

// $FlowExpectedError
marked.setOptions([ 'yoloism', true ])

marked('', (err: ?Error, content: ?string): void => {
  if (err) throw err;
});

// $FlowExpectedError
marked(24, function (err, content) {
  if (err) throw err;
  console.log(content);
});

const x: string = marked('');
marked('', { tables: false })

// $FlowExpectedError
marked('up', 'top')
// $FlowExpectedError
const y: string = marked(23);

const renderer = new marked.Renderer();

renderer.heading = (text, level) => text + (level * 10).toString()
renderer.tablecell = (content, alignment) => alignment ? content + alignment : content

// $FlowExpectedError
renderer.heading = (n) => n * 42

marked.parser(marked.lexer('Much markdowwwn!', { pedantic: true }));
marked.lexer('test')

// $FlowExpectedError
marked.parser('');
// $FlowExpectedError
marked.lexer(false)

const lexer = new marked.Lexer({ lolz: true });
const tokens = lexer.lex('yoloista');
marked.parser(tokens);

// $FlowExpectedError
const lexr = new marked.Lexer([ 'lol' ]);

lexer.rules.xyz = /(mysuperfancyregex)?/

