//@flow
import type {TypeOf, Validation, AnyArrayType} from 'io-ts';
import * as t from 'io-ts';

//Null type
type Null = TypeOf<typeof t.nullType>;
(null: Null);
// $ExpectError
(1: Null)

//Undefined type
type Undefined = TypeOf<typeof t.undefined>;
(undefined: Undefined);
// $ExpectError
(1: Undefined);

//String Type
const {string: stringType} = t;
type String = TypeOf<typeof stringType>;
("hi": String);
// $ExpectError
(true: String);

//Number Type
const {number: numberType} = t;
type Number = TypeOf<typeof numberType>;
(1: Number);
// $ExpectError
(true: Number);

//Boolean Type
const {boolean: booleanType} = t;
type Boolean = TypeOf<typeof booleanType>;
(true: Boolean);
// $ExpectError
(1: Boolean);

//AnyArray Type
type AnyArray = TypeOf<typeof t.arrayType>;
([1, 'hi']: AnyArray);
// $ExpectError
(1: AnyArray);

//MixedDictionary Type
type Dictionary = TypeOf<typeof t.Dictionary>;
({hi: 1, hello: true}: Dictionary);
// $ExpectError
(true: Dictionary);

//Object Type
type ObjectType = TypeOf<typeof t.object>
({}: ObjectType);
// $ExpectError
(true: ObjectType);

//Function Type
type Func = TypeOf<typeof t.Function>;
(function() {}: Func);
// $ExpectError
(true: Func);

//Literal Type
const One = t.literal((1: 1));
type OneT = TypeOf<typeof One>;
(1: OneT);
// $ExpectError
(2: OneT);

//Keys of Object Union
const Keys = t.keyof({a: 1, b: 2});
type KeysT = TypeOf<typeof Keys>;
('a': KeysT);
// $ExpectError
('c': KeysT);

//Array<A> type
const NumArray = t.array(t.number);
type NumArrayT = TypeOf<typeof NumArray>;
([1,2]: NumArrayT);
// $ExpectError
(['hi', 'hello']: NumArrayT);

//Interface type
const ClassesT = t.type({math: t.string, completed: t.boolean});
type Classes = TypeOf<typeof ClassesT>;
({math: '104', completed: true, extra: []}: Classes);
// $ExpectError
({math: '104', extra: []}: Classes);
// $ExpectError
({math: '104', completed: 'not valid', extra: []}: Classes);

//Partial Type
const MaybeClassesT = t.partial({...ClassesT.props});
type MaybeClasses = TypeOf<typeof MaybeClassesT>;
({math: '104', completed: true, extra: []}: MaybeClasses);
({math: '104', extra: []}: MaybeClasses);
// $ExpectError
({math: '104', completed: 'not valid', extra: []}: MaybeClasses);

//Dictionary<K,V> Type
const NumToStringT = t.dictionary(t.number, t.string);
type NumToString = TypeOf<typeof NumToStringT>;
const dict: NumToString = {};
dict[1] = 'hi';
// $ExpectError
dict[true] = 'hi';
// $ExpectError
dict[1] = true;

//Union Type
const StringOrBoolT = t.union([t.string, t.boolean]);
type NumOrString = TypeOf<typeof StringOrBoolT>;
(true: NumOrString);
('hi': NumOrString);
// $ExpectError
(1: NumOrString);

const NumOrStringOrBoolT = t.union([t.string, t.boolean, t.number]);
type NumOrStringOrBool = TypeOf<typeof NumOrStringOrBoolT>;
(true: NumOrStringOrBool);
('hi': NumOrStringOrBool);
(1: NumOrStringOrBool);
// $ExpectError
({}: NumOrStringOrBool);

//Intersection Type
const HasNameT = t.type({name: t.string});
const HasDateT = t.type({date: t.string});
const HasBothT = t.intersection<typeof HasNameT, typeof HasDateT>([HasNameT, HasDateT]);
type HasBoth = TypeOf<typeof HasBothT>;
({name: 'hi', date: 'hi'}: HasBoth);
// $ExpectError
({name: 'hi'}: HasBoth);

//Tuple type
const NumThenBoolT = t.tuple<typeof numberType, typeof booleanType>([t.number, t.boolean]);
type NumThenBool = TypeOf<typeof NumThenBoolT>;
([1, true]: NumThenBool);
// $ExpectError
([true, 1]: NumThenBool);

//ReadOnlyArray Type
const ReadOnlyNumsT = t.readonlyArray(t.number);
type ReadOnlyNums = TypeOf<typeof ReadOnlyNumsT>;
const a: ReadOnlyNums = [1,2,3];
// $ExpectError
a.push(1);

//Strict Type
const OnlyNameT = t.strict({name: t.string});
type OnlyName = TypeOf<typeof OnlyNameT>;
({name: 'hi'}: OnlyName);
// $ExpectError
({}: OnlyName);
// $ExpectError
({name: 'hi', name2: 'hi'}: OnlyName);
// $ExpectError
({name: 1}: OnlyName);

//Exact Type
const NameAndAddressT = t.type({name: t.string, address: t.string});
const OnlyNameAndAddressT = t.exact(NameAndAddressT);
type OnlyNameAndAddress = TypeOf<typeof OnlyNameAndAddressT>;
({name: 'hi', address: 'hi'}: OnlyNameAndAddress);
// $ExpectError
({name: 1, address: 'hi'}: OnlyNameAndAddress);
// $ExpectError
({name: 'hi', address: 'hi', extra: 'hi'}: OnlyNameAndAddress);

//Readonly Type
const ReadOnlyNameAndAddressT = t.readonly(NameAndAddressT);
type ReadOnlyNameAndAddress = TypeOf<typeof ReadOnlyNameAndAddressT>;
const readOnlyData: ReadOnlyNameAndAddress = {name: 'hi', address: 'hi'};
// $ExpectError
readOnlyData.name = 'change name';

// Either validation
(stringType.validate('a', t.getDefaultContext(stringType)).fold(() => 'ko', () => 'ok'): string);
// $ExpectError
(stringType.validate('a', t.getDefaultContext(stringType)).fold(() => 'ko', () => 'ok'): number);

//Check Type class methods;
const PersonT = t.type({name: t.string, age: t.number})
const check: bool = PersonT.is({name: "test1"})
const p1 = PersonT.decode(JSON.parse('{"name":"Giulio","age":43}'));
(p1: Validation<TypeOf<typeof PersonT>>);
// $ExpectError
(p1: Validation<TypeOf<typeof NameAndAddressT>>);

//Existing Integer type
type Integer = TypeOf<typeof t.Integer>;
// $ExpectError Flow cannot refine this type via static typchecking. Only way to create Int is to decode it from a number
(1: Integer);
// $ExpectError
(1.1: Integer);
const Int1: Validation<Integer> = t.Integer.decode(1);
const hasValidationErrs: Validation<Integer> = t.Integer.decode(1.1);
if (Int1._tag === 'Right') {
  const Int1Val: Integer = Int1.value;
}

//Making a refinment type, not will validate any array still inside this file but value will
//have to be decoded when this runtime type is imported from another file;
export opaque type NotEmptyArr: AnyArray =  AnyArray;
export const NotEmptyArrType = t.refinement<AnyArray, NotEmptyArr>(t.arrayType, v => v.length > 0);
const HasOne: Validation<NotEmptyArr> = NotEmptyArrType.decode([1]);
const hasValidationErrsToo: Validation<NotEmptyArr> = NotEmptyArrType.decode([]);
