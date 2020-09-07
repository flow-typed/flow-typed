import indentString from 'indent-string';

const a: string = indentString('Unicorns\nRainbows', 4);
//=> '    Unicorns'
//=> '    Rainbows'

const b: string = indentString('Unicorns\nRainbows', 4, '♥');
//=> '♥♥♥♥Unicorns'
//=> '♥♥♥♥Rainbows'

// $FlowExpectedError
indentString(42);

// $FlowExpectedError
(indentString('Unicorns\nRainbows', 4): number);
