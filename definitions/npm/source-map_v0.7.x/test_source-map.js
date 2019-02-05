import {
  SourceMapConsumer,
  SourceMapGenerator,
  BasicSourceMapConsumer,
} from 'source-map';
import { describe, it } from 'flow-typed-test';

const rawSourceMap = {
  version: 3,
  file: 'min.js',
  names: ['bar', 'baz', 'n'],
  sources: ['one.js', 'two.js'],
  sourceRoot: 'http://example.com/www/js/',
  mappings:
    'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA',
};

describe('source-map', () => {
  describe('SourceMapConsumer', () => {
    it('should be class', async () => {
      const hello: BasicSourceMapConsumer = await new SourceMapConsumer(
        rawSourceMap
      );
      hello.originalPositionFor({ line: 1, column: 3 });
      hello.generatedPositionFor({
        source: '',
        line: 1,
        column: 2,
      });
      hello.allGeneratedPositionsFor({
        source: '',
        line: 1,
        column: 2,
      });
      const ok: boolean = hello.hasContentsOfAllSources();
      hello.sourceContentFor('ok');
      hello.eachMapping(mapping => {
        mapping.source;
        mapping.generatedLine;
        mapping.generatedColumn;
        mapping.originalLine;
        mapping.originalColumn;
        mapping.name;
      });
      hello.destroy();
    });
  });

  describe('SourceMapGenerator', () => {
    it('should be class', async () => {
      const data = await new SourceMapConsumer(rawSourceMap);
      const hello = new SourceMapGenerator();
      hello.addMapping({
        generated: {
          line: 4,
          column: 3,
        },
        original: {
          line: 1,
          column: 2,
        },
        source: '',
      });
      hello.setSourceContent('hello', 'test');
      hello.applySourceMap(data);
      hello.toString();
      hello.toJSON();
    });
  });
});
