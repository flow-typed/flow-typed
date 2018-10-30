// @flow
import { describe, it } from 'flow-typed-test';
import {normalize, schema, denormalize, type Schema} from 'normalizr';

describe('schema', () => {
  describe('Entity', () => {
    it('should obtain right arguments in constructor', () => {
      // $ExpectError not enough arguments. There MUST be key argument in constructor
      (new schema.Entity());

      new schema.Entity('entity');

      // $ExpectError wrong second argument. There MUST be definition schema
      (new schema.Entity('entity', 'foo'));
      // $ExpectError wrong second argument. There MUST be definition schema
      (new schema.Entity('entity', null));

      (new schema.Entity('entity', {}));

      (new schema.Entity('entity', {}, {}));
      (new schema.Entity('entity', {}, {
        idAttribute: 'id'
      }));
      (new schema.Entity('entity', {}, {
        idAttribute: (value, parent, key) => 'foo'
      }));

      // $ExpectError wrong third argument. `idAttribute` MUST be string or function
      (new schema.Entity('entity', {}, {
        idAttribute: {}
      }));

      // $ExpectError wrong third argument. `mergeStrategy` MUST be function
      (new schema.Entity('entity', {}, {
        mergeStrategy: {}
      }));

      (new schema.Entity('entity', {}, {
        mergeStrategy: (entityA, entityB) => Object.assign(entityA, entityB)
      }));

      // $ExpectError wrong third argument. `processStrategy` MUST be function
      (new schema.Entity('entity', {}, {
        processStrategy: {}
      }));

      (new schema.Entity('entity', {}, {
        processStrategy: (parent, key, value) => ({})
      }));
    });

    it('constructor should produce right value', () => {
      const entitySchema: schema.Entity = new schema.Entity('entity');
      const common: Schema = entitySchema;
      const key: string = entitySchema.key;

      // $ExpectError string. Argument MUST be Schema
      entitySchema.define('foo')

      entitySchema.define(common);
    });
  });

  describe('Array', () => {
    it('should obtain right arguments in constructor', () => {
      // $ExpectError wrong first argument. There MUST be Schema
      (new schema.Array('foo'));

      const entitySchema = new schema.Entity('entity');
      (new schema.Array(entitySchema));

      const userSchema = new schema.Entity('users');
      const adminSchema = new schema.Entity('admins');

      (new schema.Array(
        {
          admins: adminSchema,
          users: userSchema
        }, 
        // $ExpectError wrong second argument. There MUST be string or function
        {}
      ));

      (new schema.Array(
        {
          admins: adminSchema,
          users: userSchema
        }, 
        (input, parent, key) => `${input.type}s`
      ));

      (new schema.Array(
        {
          admins: adminSchema,
          users: userSchema
        }, 
        'type'
      ));
    });

    it('constructor should produce right value', () => {
      const entitySchema = new schema.Entity('entity');
      const arraySchema: schema.Array = new schema.Array(entitySchema)
      const common: Schema = arraySchema;

      // $ExpectError string. Argument MUST be Schema
      arraySchema.define('foo')

      arraySchema.define(common);
    });
  });

  describe('Object', () => {
    it('should obtain right arguments in constructor', () => {
      (new schema.Object({}));
      (new schema.Object({
        entity: new schema.Entity('entity'),
        array: [new schema.Entity('entity')]
      }));

      // $ExpectError string. Argument MUST be a object 
      (new schema.Object('foo'));

      // $ExpectError string. Argument MUST be a object with schema as values
      (new schema.Object({foo: 'foo'}));
    });

    it('constructor should produce right value', () => {
      const entitySchema = new schema.Entity('entity');
      const objectSchema: schema.Object = new schema.Object({entity: entitySchema})
      const common: Schema = objectSchema;

      // $ExpectError string. Argument MUST be Schema
      objectSchema.define('foo')

      objectSchema.define(common);
    });
  });

  describe('Union', () => {
    it('should obtain right arguments in constructor', () => {
      const entitySchema = new schema.Entity('entity');
      const uniounEntity = {entity: entitySchema};

      // $ExpectError wrong first argument. There MUST be Schema
      (new schema.Union('foo'));
      // $ExpectError second argument. There MUST be second argument
      (new schema.Union(uniounEntity));
      // $ExpectError wrong second argument. There MUST be string or function
      (new schema.Union(uniounEntity, {}));

      (new schema.Union(uniounEntity, 'type'));
      (new schema.Union(uniounEntity, () => 'type'));
    });

    it('constructor should produce right value', () => {
      const userSchema = new schema.Entity('users');
      const adminSchema = new schema.Entity('admins');
      const uniounSchema: schema.Union = new schema.Union(
        {users: userSchema, admins: adminSchema},
        'type'
      ); 
      const common: Schema = uniounSchema;

      // $ExpectError string. Argument MUST be Schema
      uniounSchema.define('foo')

      uniounSchema.define(common);
    });
  });

  describe('Values', () => {
    it('should obtain right arguments in constructor', () => {
      const entitySchema = new schema.Entity('entity');
      const valuesEntity = {entity: entitySchema};

      // $ExpectError wrong first argument. There MUST be Schema
      (new schema.Values('foo'));
      // $ExpectError wrong second argument. There MUST be string or function
      (new schema.Values(valuesEntity, {}));

      (new schema.Values(valuesEntity, 'type'));
      (new schema.Values(valuesEntity, () => 'type'));
    });

    it('constructor should produce right value', () => {
      const userSchema = new schema.Entity('users');
      const adminSchema = new schema.Entity('admins');
      const valuesSchema: schema.Values = new schema.Values(
        {users: userSchema, admins: adminSchema},
        'type'
      ); 
      const common: Schema = valuesSchema;

      // $ExpectError string. Argument MUST be Schema
      valuesSchema.define('foo')

      valuesSchema.define(common);
    });
  });

  it('shorthands', () => {
    const entitySchema = new schema.Entity('entity');

    const objectSchema: Schema = {some: entitySchema, thing: entitySchema};
    const arraySchema: Schema = [entitySchema];

    // $ExpectError Unsupported unfortunaly - need casting
    const actualObjectSchema: schema.Object = {some: entitySchema, thing: entitySchema};

    // $ExpectError Unsupported unfortunaly - need casting
    const actualArraySchema: schema.Array = [entitySchema];
  });

  describe('normalize', () => {
    it('requires two arguments', () => {
      const entitySchema = new schema.Entity('entity');

      // $ExpectError string. First argument MUST be Array or Object
      (normalize('{}', entitySchema));

      // $ExpectError There must be second argument
      (normalize({}));

      (normalize({}, entitySchema));
    });

    it('returns object with `result` and `entities`', () => {
      const entitySchema = [new schema.Entity('entity')];

      // $ExpectError foo. `normalize` does not return property `foo`
      const {foo} = normalize([], entitySchema);
      const {result, entities} = normalize([], entitySchema);
    });
  });

  describe('denormalize', () => {
    it('requires three arguments', () => {
      const entitySchema = new schema.Entity('entity');

      // $ExpectError There must be arguments
      (denormalize());

      // $ExpectError There must be second argument
      (denormalize({}));

      // $ExpectError number. Second argument must be Schema
      (denormalize({}, 42));

      (denormalize({}, entitySchema, {}));
    });
  });
});
