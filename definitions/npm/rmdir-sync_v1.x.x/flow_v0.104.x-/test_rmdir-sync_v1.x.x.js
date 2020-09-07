// @flow
import rm from "rmdir-sync";

const fileToRead: string = "/path/foo.txt";

rm(fileToRead);

// $FlowExpectedError
rm();

// $FlowExpectedError
rm(1234);

// $FlowExpectedError
rm(() => {});

// $FlowExpectedError
rm(true);

// $FlowExpectedError
rm(fileToRead, () => {});

// $FlowExpectedError
const response: string = rm(fileToRead);
