// @flow

import { type $Option, option } from 'zipkin'

const o1: $Option<number> = option.None
const o2: $Option<number> = new option.Some(1)

const t1: 'None' = option.None.type 
const t2: 'Some' = (new option.Some(1)).type
const t3: 'None' | 'Some' = o1.type
const t4: 'None' | 'Some' = o2.type

const p1: false = option.None.present
const p2: true = (new option.Some(1)).present
const p3: boolean = o1.present
const p4: boolean = o2.present

const o3: $Option<string> = o1.map(x => x.toFixed(2))
const o4: $Option<string> = o2.map(x => x.toFixed(2))

const v1: void = o1.ifPresent(x => x)
const v2: void = o2.ifPresent(x => x)

const o5: $Option<string> = o1.flatMap(x => option.None)
const o6: $Option<string> = o1.flatMap(x => new option.Some(x.toFixed(2)))
const o7: $Option<string> = o2.flatMap(x => option.None)
const o8: $Option<string> = o2.flatMap(x => new option.Some(x.toFixed(2)))

const v3: number = o1.getOrElse(2)
const v4: number = o1.getOrElse(() => 2)
const v5: number = o2.getOrElse(2)
const v6: number = o2.getOrElse(() => 2)

const b1: boolean = o1.equals(o2)
const b2: boolean = option.None.equals(o2) 
const b3: boolean = new option.Some(3).equals(o2) 

const s1: string = option.None.toString()
const s2: string = new option.Some(4).toString()

const b4: boolean = option.isOptional(1)
const b5: boolean = option.isOptional(option.None)
const b6: boolean = option.isOptional(new option.Some(1))

option.verifyIsOptional(1)
option.verifyIsOptional(option.None)
option.verifyIsOptional(new option.Some(1))
option.verifyIsNotOptional(1)
option.verifyIsNotOptional(option.None)
option.verifyIsNotOptional(new option.Some(1))

const n1: $Option<number> = option.fromNullable(1) 
const n2: $Option<number> = option.fromNullable(null) 
const n3: $Option<number> = option.fromNullable(undefined) 
