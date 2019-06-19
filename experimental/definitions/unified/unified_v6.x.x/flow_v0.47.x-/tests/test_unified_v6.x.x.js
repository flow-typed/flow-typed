/* @flow */

import unified from 'unified'

var process = unified()
  .use('markdown')
  .use(['format'])
  .use({settings: {position: false}})
  .use(['html', ['html', {}]])
  .data('property', 10)
  .freeze()
  .run({type: 'orthogonal'}, 'file', (err) => {});

var node = unified().parse('File contents');
var string_node = unified().stringify(node);

unified().process('Document').then((output) => {})
unified().process('Document', (output) => {})

// $ExpectError
unified().process('Document', 'done')

// $ExpectError
unified().data([],[])
