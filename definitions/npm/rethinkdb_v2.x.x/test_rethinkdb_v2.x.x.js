// @flow
import r, { type TableOp } from 'rethinkdb';
import { it, describe } from 'flow-typed-test';

describe('rethinkdb', () => {
  type FooTable = {|
    foo: boolean,
    bar?: number,
    id: string
  |}
  type FooTableInsert = {|
    foo: boolean,
    bar?: number,
  |}
  type PrimaryKey = string

  const table: TableOp<FooTable, PrimaryKey, FooTableInsert> = r.table('foobar')
  const connectionP = r.connect('foobar')
  describe('insert', () => {
    it('should allow insertion of right types', () => {
      table.insert({foo: true})
      table.insert({foo: true, id: 'bar'})
      // $ExpectError
      table.insert({foo: true, id: 'bar', baz: true})
    })
    it('should return changes with appropriate options', async () => {
      const res = await table.insert({foo: true, id: 'bar'}).run(await connectionP)
      const i: number = res.inserted
      // $ExpectError
      const a0: Array<*> = res.changes

      const res2 = await table.insert({foo: true, id: 'bar'}, {returnChanges: false}).run(await connectionP)
      const i2: number = res2.inserted
      // $ExpectError
      res2.changes

      const res3 = await table.insert({foo: true, id: 'bar'}, {returnChanges: true}).run(await connectionP)
      const i3: number = res3.inserted
      const a3: Array<*> = res3.changes

      const res4 = await table.insert({foo: true, id: 'bar'}, {returnChanges: 'always'}).run(await connectionP)
      const i4: number = res4.inserted
      const a4: Array<*> = res4.changes
    })
  })
  describe('update', () => {
    it('should allow update of right types', () => {
      table.get('lal').update({foo: true})
      table.get('lal').update({foo: true, id: 'bar'})
      // $ExpectError
      table.get('lal').update({foo: true, id: 'bar', baz: true})
    })
    it('should return changes with appropriate options', async () => {
      const res = await table.get('lal').update({foo: true, id: 'bar'}).run(await connectionP)
      const i: number = res.replaced
      // $ExpectError
      res.changes
      const res2 = await table.get('lal').update({foo: true, id: 'bar'}, {returnChanges: false}).run(await connectionP)
      const i2: number = res2.replaced
      // $ExpectError
      res2.changes

      const res3 = await table.get('lal').update({foo: true, id: 'bar'}, {returnChanges: true}).run(await connectionP)
      const i3: number = res3.replaced
      const a3: Array<*> = res3.changes

      const res4 = await table.get('lal').update({foo: true, id: 'bar'}, {returnChanges: 'always'}).run(await connectionP)
      const i4: number = res4.replaced
      const a4: Array<*> = res4.changes
    })
  })
  describe('delete', () => {
    it('should allow deletion', () => {
      table.get('lal').delete()
    })
    it('should return changes with appropriate options', async () => {
      const res = await table.get('lal').delete().run(await connectionP)
      const i: number = res.deleted
      // $ExpectError
      res.changes
      const res2 = await table.get('lal').delete({returnChanges: false}).run(await connectionP)
      const i2: number = res2.deleted
      // $ExpectError
      res2.changes

      const res3 = await table.get('lal').delete({returnChanges: true}).run(await connectionP)
      const i3: number = res3.deleted
      const a3: Array<*> = res3.changes

      const res4 = await table.get('lal').delete({returnChanges: 'always'}).run(await connectionP)
      const i4: number = res4.deleted
      const a4: Array<*> = res4.changes
    })
  })
  describe('getField', () => {
    it('should only allow getting key of object', () => {
      table.getField('id')
      table.getField('bar')
      // $ExpectError
      table.getField('baz')
    })
  })
  describe('count', () => {
    it('should return number', async () => {
      const n: number = await table.count().run(await connectionP)
    })
    it('should take predicate', async () => {
      table.count({bar: 1}).run(await connectionP)
      // $ExpectError
      table.count({baz: 1}).run(await connectionP)
      table.count((a) => a.foo).run(await connectionP)
      // $ExpectError
      table.count((a) => a.baz).run(await connectionP)
    })
  })
})