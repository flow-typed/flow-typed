// @flow
import Dropzone from 'dropzone';

// $ExpectError we need a url!
const A: Dropzone = new Dropzone('selector', {

});
A.destroy();
