// @flow

import fs from 'fs';
import { describe, it } from 'flow-typed-test';
import StreamZip from 'note-stream-zip';

describe('StreamZip', () => {
    beforeEach(() => {
        fs.writeFile('archive.zip');
    });

    it('opens a zip file', async () => {
        const zip = new StreamZip({file: 'archive.zip'})
        expect(zip.name).toBe('archive.zip');
    });

    it('validates the zip object', async () => {
        const zip = new StreamZip({file: 'archive.zip'})
        expect(zip.name).toBe('archive.zip');
        expect(zip.isDirectory).toBe(false);
        expect(zip.isFile).toBe(true);
        expect(zip.encrypted).toBe(false);
        expect(zip.flags).toBe(null);
    });
});
