// @flow
import rm from "rmdir-sync";

const fileToRead: string = "/path/foo.txt";

rm(fileToRead);

// $ExpectError
rm();

// $ExpectError
rm(1234);

// $ExpectError
rm(() => {});

// $ExpectError
rm(true);

// $ExpectError
rm(fileToRead, () => {});

// $ExpectError
const response: string = rm(fileToRead);
