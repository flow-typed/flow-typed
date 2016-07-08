import indentString from 'indent-string';

const a: string = indentString('Unicorns\nRainbows', 4);
//=> '    Unicorns'
//=> '    Rainbows'

const b: string = indentString('Unicorns\nRainbows', 4, '♥');
//=> '♥♥♥♥Unicorns'
//=> '♥♥♥♥Rainbows'
