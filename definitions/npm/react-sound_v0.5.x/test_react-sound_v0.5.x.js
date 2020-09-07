import Sound from 'react-sound';

// $FlowExpectedError
let error = <Sound/>;

// $FlowExpectedError
let error2 = <Sound url="http://example.com/example.mp3"/>;

// $FlowExpectedError
let error3 = <Sound playStatus={Sound.status.PLAYING}/>;

let success = <Sound url="http://example.com/example.mp3" playStatus={Sound.status.PLAYING}/>;
