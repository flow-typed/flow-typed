declare class NormalizrSchema {
  define(nestedSchema: Object): void;
}

declare module "redux-entitize" {
  declare type SchemaMapType = {
    [schemaName: string]: NormalizrSchema
  };

  //eslint-disable-next-line flowtype/no-weak-types
  declare type EntityType = any;

  declare type SchemaEntitiesMapType = {
    [id: string]: EntityType
  };

  declare type StateType = {
    [schema: string]: SchemaEntitiesMapType
  };

  declare type UpdateEntityActionType = {
    type: "redux-entitize/UPDATE_ENTITY",
    payload: {
      data: EntityType,
      schema: string
    }
  };

  declare type UpdateEntitiesActionType = {
    type: "redux-entitize/UPDATE_ENTITIES",
    payload: {
      data: EntityType[],
      schema: string
    }
  };

  // eslint-disable-next-line flowtype/no-weak-types
  declare type ReducerType = (state: StateType, action: Object) => StateType;

  // Reducer factory
  declare function createEntitiesReducer(schemas: SchemaMapType): ReducerType;

  // Action creators
  declare function updateEntityAction(schema: string, data: EntityType): UpdateEntityActionType;
  declare function updateEntitiesAction(schema: string, data: EntityType[]): UpdateEntitiesActionType;

  // Selectors
  declare function selectEntity(state: { entities: StateType }, schema: string, id: string): ?EntityType;
  declare function selectEntities(state: { entities: StateType }, schema: string, ids?: string[]): EntityType[];
}
