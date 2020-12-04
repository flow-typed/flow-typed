//@flow
import type {TypeOf, Validation, AnyArrayType} from 'io-ts';
import * as t from 'io-ts';

//Null type
type Null = TypeOf<typeof t.nullType>;
(null: Null);
// $FlowExpectedError
(1: Null)

//Undefined type
type Undefined = TypeOf<typeof t.undefined>;
(undefined: Undefined);
// $FlowExpectedError
(1: Undefined);

//String Type
const {string: stringType} = t;
type String = TypeOf<typeof stringType>;
("hi": String);
// $FlowExpectedError
(true: String);

//Number Type
const {number: numberType} = t;
type Number = TypeOf<typeof numberType>;
(1: Number);
// $FlowExpectedError
(true: Number);

//Boolean Type
const {boolean: booleanType} = t;
type Boolean = TypeOf<typeof booleanType>;
(true: Boolean);
// $FlowExpectedError
(1: Boolean);

//AnyArray Type
type AnyArray = TypeOf<typeof t.arrayType>;
([1, 'hi']: AnyArray);
// $FlowExpectedError
(1: AnyArray);

//MixedDictionary Type
type Dictionary = TypeOf<typeof t.Dictionary>;
({hi: 1, hello: true}: Dictionary);
// $FlowExpectedError
(true: Dictionary);

//Object Type
type ObjectType = TypeOf<typeof t.object>
({}: ObjectType);
// $FlowExpectedError
(true: ObjectType);

//Function Type
type Func = TypeOf<typeof t.Function>;
(function() {}: Func);
// $FlowExpectedError
(true: Func);

//Literal Type
const One = t.literal((1: 1));
type OneT = TypeOf<typeof One>;
(1: OneT);
// $FlowExpectedError
(2: OneT);

//Keys of Object Union
const Keys = t.keyof({a: 1, b: 2});
type KeysT = TypeOf<typeof Keys>;
('a': KeysT);
// $FlowExpectedError
('c': KeysT);

//Array<A> type
const NumArray = t.array(t.number);
type NumArrayT = TypeOf<typeof NumArray>;
([1,2]: NumArrayT);
// $FlowExpectedError
(['hi', 'hello']: NumArrayT);

//Interface type
const ClassesT = t.type({math: t.string, completed: t.boolean});
type Classes = TypeOf<typeof ClassesT>;
({math: '104', completed: true, extra: []}: Classes);
// $FlowExpectedError
({math: '104', extra: []}: Classes);
// $FlowExpectedError
({math: '104', completed: 'not valid', extra: []}: Classes);

//Partial Type
const MaybeClassesT = t.partial({...ClassesT.props});
type MaybeClasses = TypeOf<typeof MaybeClassesT>;
({math: '104', completed: true, extra: []}: MaybeClasses);
({math: '104', extra: []}: MaybeClasses);
// $FlowExpectedError
({math: '104', completed: 'not valid', extra: []}: MaybeClasses);

//Dictionary<K,V> Type
const NumToStringT = t.dictionary(t.number, t.string);
type NumToString = TypeOf<typeof NumToStringT>;
const dict: NumToString = {};
dict[1] = 'hi';
// $FlowExpectedError
dict[true] = 'hi';
// $FlowExpectedError
dict[1] = true;

//Union Type
const StringOrBoolT = t.union([t.string, t.boolean]);
type NumOrString = TypeOf<typeof StringOrBoolT>;
(true: NumOrString);
('hi': NumOrString);
// $FlowExpectedError
(1: NumOrString);

const NumOrStringOrBoolT = t.union([t.string, t.boolean, t.number]);
type NumOrStringOrBool = TypeOf<typeof NumOrStringOrBoolT>;
(true: NumOrStringOrBool);
('hi': NumOrStringOrBool);
(1: NumOrStringOrBool);
// $FlowExpectedError
({}: NumOrStringOrBool);

//Intersection Type
const HasNameT = t.type({name: t.string});
const HasDateT = t.type({date: t.string});
const HasBothT = t.intersection<typeof HasNameT, typeof HasDateT>([HasNameT, HasDateT]);
type HasBoth = TypeOf<typeof HasBothT>;
({name: 'hi', date: 'hi'}: HasBoth);
// $FlowExpectedError
({name: 'hi'}: HasBoth);

//Tuple type
const NumThenBoolT = t.tuple<typeof numberType, typeof booleanType>([t.number, t.boolean]);
type NumThenBool = TypeOf<typeof NumThenBoolT>;
([1, true]: NumThenBool);
// $FlowExpectedError
([true, 1]: NumThenBool);

//ReadOnlyArray Type
const ReadOnlyNumsT = t.readonlyArray(t.number);
type ReadOnlyNums = TypeOf<typeof ReadOnlyNumsT>;
const a: ReadOnlyNums = [1,2,3];
// $FlowExpectedError
a.push(1);

//Strict Type
const OnlyNameT = t.strict({name: t.string});
type OnlyName = TypeOf<typeof OnlyNameT>;
({name: 'hi'}: OnlyName);
// $FlowExpectedError
({}: OnlyName);
// $FlowExpectedError
({name: 'hi', name2: 'hi'}: OnlyName);
// $FlowExpectedError
({name: 1}: OnlyName);

//Exact Type
const NameAndAddressT = t.type({name: t.string, address: t.string});
const OnlyNameAndAddressT = t.exact(NameAndAddressT);
type OnlyNameAndAddress = TypeOf<typeof OnlyNameAndAddressT>;
({name: 'hi', address: 'hi'}: OnlyNameAndAddress);
// $FlowExpectedError
({name: 1, address: 'hi'}: OnlyNameAndAddress);
// $FlowExpectedError
({name: 'hi', address: 'hi', extra: 'hi'}: OnlyNameAndAddress);

//Readonly Type
const ReadOnlyNameAndAddressT = t.readonly(NameAndAddressT);
type ReadOnlyNameAndAddress = TypeOf<typeof ReadOnlyNameAndAddressT>;
const readOnlyData: ReadOnlyNameAndAddress = {name: 'hi', address: 'hi'};
// $FlowExpectedError
readOnlyData.name = 'change name';

// Either validation
(stringType.validate('a', t.getDefaultContext(stringType)).fold(() => 'ko', () => 'ok'): string);
// $FlowExpectedError
(stringType.validate('a', t.getDefaultContext(stringType)).fold(() => 'ko', () => 'ok'): number);

//Check Type class methods;
const PersonT = t.type({name: t.string, age: t.number})
const check: bool = PersonT.is({name: "test1"})
const p1 = PersonT.decode(JSON.parse('{"name":"Giulio","age":43}'));
(p1: Validation<TypeOf<typeof PersonT>>);
// $FlowExpectedError
(p1: Validation<TypeOf<typeof NameAndAddressT>>);

//Existing Integer type
type Integer = TypeOf<typeof t.Integer>;
// $FlowExpectedError Flow cannot refine this type via static typchecking. Only way to create Int is to decode it from a number
(1: Integer);
// $FlowExpectedError
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
