import {Player, Recorder} from 'react-native-audio-toolkit';

// $ExpectError
new Player();

new Player('sound.mp3');
new Player('sound.mp3', {autoDestroy: false});
new Player('sound.mp3', {continuesToPlayInBackground: true});

// $ExpectError
new Recorder();

new Recorder('sound.mp3');
new Recorder('sound.mp3', {quality: 'max'});
