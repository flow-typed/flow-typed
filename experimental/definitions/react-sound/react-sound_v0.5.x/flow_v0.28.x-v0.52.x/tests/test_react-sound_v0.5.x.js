import Sound from 'react-sound';

// $ExpectError
let error = <Sound/>;

// $ExpectError
let error = <Sound url="http://example.com/example.mp3"/>;

// $ExpectError
let error = <Sound playStatus={Sound.status.PLAYING}/>;

let success = <Sound url="http://example.com/example.mp3" playStatus={Sound.status.PLAYING}/>;
