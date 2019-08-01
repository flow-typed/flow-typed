// @flow
import mime from 'mime';
import mimeLite from 'mime/lite'
import Mime from 'mime/Mime';

(mime.define({
  'text/asciidoc': ['adoc', 'asciidoc'],
  'text/markdown': ['md'],
}): void);
// $ExpectError
mime.define([['text/foo', 'txt']]);

(mime.getExtension('text/asciidoc'): ?string);
// $ExpectError
mime.getExtension(['text/foo']);

(mime.getType('README.adoc'): ?string);
// $ExpectError
mime.getType(66);

(new Mime(): Mime);
(new Mime({ 'text/asciidoc': ['adoc'], 'text/markdown': ['md'] }): Mime);
(new Mime({ 'text/asciidoc': ['adoc'] }, { 'text/markdown': ['md'] }): Mime);
// $ExpectError
new Mime(['text/foo']);

(new Mime().define({ 'text/asciidoc': ['adoc'] }): void);
(new Mime().getExtension('text/asciidoc'): ?string);
(new Mime().getType('README.adoc'): ?string);
