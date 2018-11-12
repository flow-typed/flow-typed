// @flow

import { describe, it } from 'flow-typed-test'
import { type $Option, option } from 'zipkin'

describe('Option', () => {
    it('constructors should construct Option', () => {
        const o1: $Option<number> = option.None
        const o2: $Option<number> = new option.Some(1)
    })

    it('should have expected .type', () => {
        const o1: $Option<number> = option.None
        const o2: $Option<number> = new option.Some(1)

        const t1: 'None' = option.None.type
        const t2: 'Some' = (new option.Some(1)).type
        const t3: 'None' | 'Some' = o1.type
        const t4: 'None' | 'Some' = o2.type
    })

    it('should have expected .present', () => {
        const o1: $Option<number> = option.None
        const o2: $Option<number> = new option.Some(1)

        const p1: false = option.None.present
        const p2: true = (new option.Some(1)).present
        const p3: boolean = o1.present
        const p4: boolean = o2.present
    })

    describe('map', () => {
        it('should return expected type', () => {
            const f = (x: number): string => x.toFixed(2)

            const o1: $Option<number> = option.None
            const o2: $Option<number> = new option.Some(1)

            const o3: $Option<string> = o1.map(f)
            const o4: $Option<string> = o2.map(f)
        })
    })

    describe('ifPresent', () => {
        it('should provide value, and return void', () => {
            const f = (x: number): number => x

            const o1: $Option<number> = option.None
            const o2: $Option<number> = new option.Some(1)

            const v1: void = o1.ifPresent(f)
            const v2: void = o2.ifPresent(f)
       })
    })

    describe('flatMap', () => {
        it('should flatten', () => {
            const f = (x: number): $Option<string> => option.None
            const g = (x: number): $Option<string> => new option.Some(x.toFixed(2))

            const o1: $Option<number> = option.None
            const o2: $Option<number> = new option.Some(1)

            const o5: $Option<string> = o1.flatMap(f)
            const o6: $Option<string> = o1.flatMap(g)
            const o7: $Option<string> = o2.flatMap(f)
            const o8: $Option<string> = o2.flatMap(g)
        })
    })

    describe('getOrElse', () => {
        it('should return value type', () => {
            const o1: $Option<number> = option.None
            const o2: $Option<number> = new option.Some(1)

            const v3: number = o1.getOrElse(2)
            const v4: number = o1.getOrElse(() => 2)
            const v5: number = o2.getOrElse(2)
            const v6: number = o2.getOrElse(() => 2)
        })
    })

    describe('equals', () => {
        it('should return boolean', () => {
            const o1: $Option<number> = option.None
            const o2: $Option<number> = new option.Some(1)

            const b1: boolean = o1.equals(o2)
            const b2: boolean = option.None.equals(o2)
            const b3: boolean = new option.Some(3).equals(o2)
        })
    })

    describe('toString', () => {
        it('should return string', () => {
            const o1: $Option<number> = option.None
            const o2: $Option<number> = new option.Some(1)

            const s1: string = option.None.toString()
            const s2: string = new option.Some(4).toString()
        })
    })

    describe('isOptional', () => {
        it('should return boolean', () => {
            const o1: $Option<number> = option.None
            const o2: $Option<number> = new option.Some(1)

            const b4: boolean = option.isOptional(1)
            const b5: boolean = option.isOptional(option.None)
            const b6: boolean = option.isOptional(new option.Some(1))
        })
    })
})

describe('verifyIsOptional', () => {
    it('should accept Option and non-Option and return void', () => {
        const v1: void = option.verifyIsOptional(1)
        const v2: void = option.verifyIsOptional(option.None)
        const v3: void = option.verifyIsOptional(new option.Some(1))
   })
})

describe('verifyIsNotOptional', () => {
    it('should accept Option and non-Option and return void', () => {
        const v1: void = option.verifyIsNotOptional(1)
        const v2: void = option.verifyIsNotOptional(option.None)
        const v3: void = option.verifyIsNotOptional(new option.Some(1))
    })
})

describe('fromNullable', () => {
    it('should return expected Option type', () => {
        const n1: $Option<number> = option.fromNullable(1)
        const n2: $Option<number> = option.fromNullable(null)
        const n3: $Option<number> = option.fromNullable(undefined)
    })
})
