import supportsColor from 'supports-color';

if (supportsColor) {
  console.log('Terminal supports color');

  if (supportsColor.hasBasic) {
    const level: number = supportsColor.level;
    console.log('Terminal has basic color support', level);
  }

  if (supportsColor.has256) {
    console.log('Terminal supports 256 colors');
  }

  if (supportsColor.has16m) {
    console.log('Terminal supports 16 million colors (truecolor)');
  }
}
