// @flow

import Dropzone from "dropzone";

(new Dropzone(): Dropzone);
(new Dropzone().disable(): void);
(new Dropzone().files: Array<File>);

// $ExpectError
(new Dropzone().files: number);
