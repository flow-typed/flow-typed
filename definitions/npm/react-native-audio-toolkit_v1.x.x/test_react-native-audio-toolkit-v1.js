import {Player, Recorder} from 'react-native-audio-toolkit';

// $FlowExpectedError
new Player();

new Player('sound.mp3');
new Player('sound.mp3', {autoDestroy: false});
new Player('sound.mp3', {continuesToPlayInBackground: true});

// $FlowExpectedError
new Recorder();

new Recorder('sound.mp3');
new Recorder('sound.mp3', {quality: 'max'});
