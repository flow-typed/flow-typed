import getStdin from 'get-stdin';

getStdin().then((str: string) => {});
getStdin.buffer().then((str: Buffer) => {});
