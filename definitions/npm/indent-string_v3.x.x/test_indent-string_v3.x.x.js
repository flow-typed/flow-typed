import indentString from 'indent-string';

const a: string = indentString('Unicorns\nRainbows', 4);
//=> '    Unicorns'
//=> '    Rainbows'

const b: string = indentString('Unicorns\nRainbows', 4, '♥');
//=> '♥♥♥♥Unicorns'
//=> '♥♥♥♥Rainbows'

// $ExpectError
indentString(42);

// $ExpectError
(indentString('Unicorns\nRainbows', 4): number);
