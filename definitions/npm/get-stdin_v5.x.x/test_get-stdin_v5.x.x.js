import getStdin from 'get-stdin';

getStdin().then((str: string) => {});
getStdin.buffer().then((str: Buffer) => {});

// $FlowExpectedError
(getStdin(): number);

// $FlowExpectedError
(getStdin.buffer(): number);
