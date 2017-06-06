// @flow
import KoaRouter from 'koa-router';

const A: KoaRouter = new KoaRouter();
A.get('foo', 'bar', () => {});
(A.url('foo', {}): string)
