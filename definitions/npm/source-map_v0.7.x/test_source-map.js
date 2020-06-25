import {
  SourceMapConsumer,
  SourceMapGenerator,
  BasicSourceMapConsumer,
  IndexedSourceMapConsumer,
  SourceNode,
  type RawSourceMap,
  type MappingItem,
  type MappedPosition,
  type NullableMappedPosition,
  type NullablePosition,
  type CodeWithSourceMap,
} from 'source-map';
import { describe, it } from 'flow-typed-test';

const testMap = {
  version: 3,
  file: 'min.js',
  names: ['bar', 'baz', 'n'],
  sources: ['one.js', 'two.js'],
  sourceRoot: '/the/root',
  mappings:
    'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA',
};
const testMapNoSourceRoot = {
  version: 3,
  file: 'min.js',
  names: ['bar', 'baz', 'n'],
  sources: ['one.js', 'two.js'],
  mappings:
    'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA',
};
const indexedTestMap = {
  version: 3,
  file: 'min.js',
  sections: [
    {
      offset: {
        line: 0,
        column: 0,
      },
      map: {
        version: 3,
        sources: ['one.js'],
        sourcesContent: [
          ' ONE.foo = function (bar) {\n' + '   return baz(bar);\n' + ' };',
        ],
        names: ['bar', 'baz'],
        mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID',
        file: 'min.js',
        sourceRoot: '/the/root',
      },
    },
    {
      offset: {
        line: 1,
        column: 0,
      },
      map: {
        version: 3,
        sources: ['two.js'],
        sourcesContent: [
          ' TWO.inc = function (n) {\n' + '   return n + 1;\n' + ' };',
        ],
        names: ['n'],
        mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOA',
        file: 'min.js',
        sourceRoot: '/the/root',
      },
    },
  ],
};
const testMapWithSourcesContent = {
  version: 3,
  file: 'min.js',
  names: ['bar', 'baz', 'n'],
  sources: ['one.js', 'two.js'],
  sourcesContent: [
    ' ONE.foo = function (bar) {\n' + '   return baz(bar);\n' + ' };',
    ' TWO.inc = function (n) {\n' + '   return n + 1;\n' + ' };',
  ],
  sourceRoot: '/the/root',
  mappings:
    'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA',
};
describe('source-map', () => {
  describe('SourceMapConsumer', () => {
    it('should be class', async () => {
      const hello: BasicSourceMapConsumer = await new SourceMapConsumer(
        testMap
      );
      hello.computeColumnSpans();
      const position: NullableMappedPosition = hello.originalPositionFor({
        line: 1,
        column: 3,
      });
      const positionGen: NullablePosition = hello.generatedPositionFor({
        source: '',
        line: 1,
        column: 2,
      });
      const allPositions: NullablePosition[] = hello.allGeneratedPositionsFor({
        source: '',
        line: 1,
        column: 2,
      });
      const ok: boolean = hello.hasContentsOfAllSources();
      const str: string | null = hello.sourceContentFor('ok');
      hello.eachMapping(mapping => {
        const mappingItem: MappingItem = mapping;
      });
      hello.destroy();
    });

    it('should take indexed map', async () => {
      const hello: IndexedSourceMapConsumer = await new SourceMapConsumer(
        indexedTestMap
      );
    });

    it('should take map without source root', async () => {
      const hello: BasicSourceMapConsumer = await new SourceMapConsumer(
        testMapNoSourceRoot
      );
    });

    it('should take map with source contents', async () => {
      const hello: BasicSourceMapConsumer = await new SourceMapConsumer(
        testMapWithSourcesContent
      );
    });

    it('.fromSourceMap', async () => {
      const smg = new SourceMapGenerator({
        sourceRoot: 'http://example.com/',
        file: 'foo.js',
      });
      const smc: BasicSourceMapConsumer = await SourceMapConsumer.fromSourceMap(
        smg
      );
    });

    it('.with', async () => {
      const six = await SourceMapConsumer.with(testMap, null, async function(
        consumer
      ) {
        const typed:
          | BasicSourceMapConsumer
          | IndexedSourceMapConsumer = consumer;
      });
    });
  });

  describe('SourceMapGenerator', () => {
    it('should be class', async () => {
      const data = await new SourceMapConsumer(testMap);
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
      const str: string = hello.toString();
      const map: RawSourceMap = hello.toJSON();
    });
  });

  describe('SourceNode', () => {
    it('should construct', () => {
      const node: SourceNode = new SourceNode();
      const node2: SourceNode = new SourceNode(null, null, null);
      const node3: SourceNode = new SourceNode(1, 0, 'foo.js');
      const node4: SourceNode = new SourceNode(1, 0, 'foo.js', ['someCall()']);
      const node5: SourceNode = new SourceNode(1, 0, 'foo.js', [
        new SourceNode(),
      ]);
      const node6: SourceNode = new SourceNode(
        1,
        0,
        'foo.js',
        new SourceNode(null, null, null)
      );
      const node7: SourceNode = new SourceNode(
        1,
        0,
        'foo.js',
        ['someCall()'],
        'bar'
      );
    });

    it('should .add', () => {
      const node: SourceNode = new SourceNode();
      node.add('function noop() {}');
      node.add(new SourceNode(null, null, null));
      node.add([
        'function foo() {',
        new SourceNode(null, null, null, 'return 10;'),
        '}',
      ]);
      // $FlowExpectedError
      node.add({});
      // $FlowExpectedError
      node.add(function() {});
    });

    it('should .prepend', () => {
      const node: SourceNode = new SourceNode();
      node.prepend('function noop() {}');
      node.prepend(new SourceNode(null, null, null));
      node.prepend([
        'function foo() {',
        new SourceNode(null, null, null, 'return 10;'),
        '}',
      ]);
      //$FlowExpectedError
      node.prepend({});
      //$FlowExpectedError
      node.prepend(function() {});
    });

    it('should .toString', () => {
      const str: string = new SourceNode(null, null, null, ['a', 'b', 'c', 'd'])
        .join(', ')
        .toString();
    });

    it('should .walk', () => {
      const node = new SourceNode(null, null, null, [
        '(function () {\n',
        '  ',
        new SourceNode(1, 0, 'a.js', ['someCall()']),
        ';\n',
        '  ',
        new SourceNode(2, 0, 'b.js', ['if (foo) bar()']),
        ';\n',
        '}());',
      ]);
      node.walk((chunk, mapping) => {
        const str: string = chunk;
        const mappedPosition: MappedPosition = mapping;
      });
    });

    it('should .walkSourceContent', () => {
      const aNode = new SourceNode(1, 1, 'a.js', 'a');
      aNode.setSourceContent('a.js', 'someContent');
      const node = new SourceNode(null, null, null, [
        '(function () {\n',
        '  ',
        aNode,
        '  ',
        new SourceNode(1, 1, 'b.js', 'b'),
        '}());',
      ]);
      node.setSourceContent('b.js', 'otherContent');
      node.walkSourceContents(function(sourceFile, sourceContent) {
        const file: string = sourceFile;
        const content: string = sourceContent;
      });
    });

    it('should .replaceRight', () => {
      const node = new SourceNode(null, null, null, 'hello world');
      node.replaceRight(/world/, 'universe');
      node.replaceRight('test', 'universe');
      //$FlowExpectedError
      node.replaceRight('test', function() {});
    });

    it('should .toStringWithSourceMap', async () => {
      const node = new SourceNode(null, null, null, [
        '(function () {' + '\n',
        '  ',
        new SourceNode(1, 0, 'a.js', 'someCall', 'originalCall'),
        new SourceNode(1, 8, 'a.js', '()'),
        ';' + '\n',
        '  ',
        new SourceNode(2, 0, 'b.js', ['if (foo) bar()']),
        ';' + '\n',
        '}());',
      ]);
      const result: CodeWithSourceMap = node.toStringWithSourceMap({
        file: 'foo.js',
      });
      const map = await new SourceMapConsumer(result.map.toString());
    });

    it('should .fromStringWithSourceMap', async () => {
      const map = await new SourceMapConsumer(testMap);
      const node: SourceNode = SourceNode.fromStringWithSourceMap('test', map);
      const result: CodeWithSourceMap = node.toStringWithSourceMap({
        file: 'min.js',
      });
    });
  });
});
