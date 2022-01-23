// @flow

import { describe, it } from 'flow-typed-test';
import StreamZip from 'node-stream-zip';

describe('StreamZip', () => {
    const zip = new StreamZip({file: 'archive.zip'});

    it('streams a zip file', () => {
        zip.stream('path/inside/zip.txt', (error, stream) => {});
    });

    it('read as a file buffer', () => {
        zip.entryDataSync('path/inside/zip.txt');
    });

    it('opens an entry', () => {
        zip.openEntry('path/inside/zip.txt', (error, entry) => {}, true);
    });

    it('extract to disc', () => {
        zip.extract('path/inside/zip.txt', './extracted.txt', (error, stream) => {});
    });

    it('list entries', () => {
        zip.entriesCount;
        zip.entries();
    });

    it('extract everything', () => {
        zip.extract(null, './extracted', () => {});
    });

    it('closes the stream', () => {
        zip.close();
        zip.close((err) => {});
    })

    it('listens to events', () => {
        zip.on('error', (error) => {});
        zip.on('entry', (entry) => {});
        zip.on('ready', () => {});
        zip.on('extract', (entry, outPath) => {});
    });
});

describe('StreamZip.async', () => {
    const zip = new StreamZip.async({file: 'archive.zip'});

    it('streams a zip file', async () => {
        await zip.stream('path/inside/zip.txt');
        // $FlowExpectedError[extra-arg]
        zip.stream('path/inside/zip.txt', (error, stream) => {});
    });

    it('read as a file buffer', async () => {
        const buf: Buffer = await zip.entryData('path/inside/zip.txt');
        // $FlowExpectedError[prop-missing]
        zip.openEntry('path/inside/zip.txt', (error, entry) => {}, true);
    });

    it('opens an entry', () => {
        // $FlowExpectedError[prop-missing]
        zip.openEntry('path/inside/zip.txt', (error, entry) => {}, true);
    });

    it('extract to disc', async () => {
        const num: ?number = await zip.extract('path/inside/zip.txt', './extracted.txt');
         // $FlowExpectedError[extra-arg]
        zip.extract('path/inside/zip.txt', './extracted.txt', (error, stream) => {});
    });

    it('list entries', async () => {
        zip.entriesCount;
        await zip.entries();
    });

    it('closes the stream', async () => {
        await zip.close();
        // $FlowExpectedError[extra-arg]
        await zip.close((err) => {});
    })

    it('listens to events', () => {
        zip.on('entry', (entry) => {});
        zip.on('extract', (entry, outPath) => {});
        // $FlowExpectedError[incompatible-call]
        zip.on('error', (error) => {});
        // $FlowExpectedError[incompatible-call]
        zip.on('ready', () => {});
    });
});
