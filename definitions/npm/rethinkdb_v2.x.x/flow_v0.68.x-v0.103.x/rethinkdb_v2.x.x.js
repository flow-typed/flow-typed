declare module "rethinkdb" {

  declare export class Connection {}

  declare class Op<T> {
    branch<TTrue, TFalse> (trueAction: Op<TTrue> | TTrue, falseAction: Op<TFalse> | TFalse): Op<TTrue | TFalse>;

    run (conn: Connection): Promise<T>;
  }

  declare class ErrorControlStructure {}

  declare type Predicate<T> = $Shape<T> | T => mixed;

  declare type SliceOptions = {|
    leftBound?: 'open' | 'closed',
    rightBound?: 'open' | 'closed'
  |}

  declare class Cursor<T> {
    toArray (): Promise<T[]>;
  }

  declare class SequenceOp<T> {
    contains (value: T | Predicate<T>): Op<bool>;

    filter (Predicate<T>, options?: { default: boolean | ErrorControlStructure }): SequenceOp<T>;

    slice (startOffset: number, options?: SliceOptions): SequenceOp<T>;

    slice (startOffset: number, endOffset: number, options?: SliceOptions): SequenceOp<T>;

    count (filter?: T | Predicate<T>): Op<number>;

    getField<TProperty> (key: $Keys<T>): SequenceOp<TProperty>;

    eqJoin<TRDoc> (leftField: $Keys<T>, rightTable: TableOp<TRDoc, any, any>): SequenceOp<{| left: T, right: TRDoc |}>;

    eqJoin<TRDoc> (func: T => mixed, rightTable: TableOp<TRDoc, any, any>): SequenceOp<{| left: T, right: TRDoc |}>;

    run (conn: Connection): Promise<Cursor<T>>;

  }

  declare type ConflictResolutionFunc<TPrimaryKey, TDoc> = ((id: TPrimaryKey, oldDoc: TDoc, newDoc: TDoc) => TDoc);

  declare type Durability = 'soft' | 'hard';

  declare type Change<TNewVal, TOldVal> = {| new_val: TNewVal, old_val: TOldVal |}

  declare type ChangeSet<TNewVal, TOldVal> = Array<Change<TNewVal, TOldVal>>

  declare type InsertOptions<TPrimaryKey, TDoc> = {|
    durability?: Durability,
    returnChanges?: false,
    conflict?: 'error' | 'replace' | 'update' | ConflictResolutionFunc<TPrimaryKey, TDoc>
  |};

  declare type InsertOptionsWithChanges<TPrimaryKey, TDoc> = {|
    durability?: Durability,
    returnChanges: true | 'always',
    conflict?: 'error' | 'replace' | 'update' | ConflictResolutionFunc<TPrimaryKey, TDoc>
  |};

  declare type InsertResult = {|
    inserted: number,
    replaced: number,
    unchanged: number,
    errors: number,
    deleted: 0,
    skipped: 0,
    first_error?: string,
    generated_keys?: string[],
    warnings?: string,
  |};

  declare type InsertResultWithChanges<TDoc> = {|
    ...InsertResult,
    changes: ChangeSet<TDoc, null>
  |};

  declare export class TableOp<TDoc, TPrimaryKey, TInsertDoc=TDoc> extends SequenceOp<TDoc> {
    insert (obj: (TInsertDoc | TInsertDoc[] | TDoc | TDoc[]), options?: InsertOptions<TPrimaryKey, TDoc>): Op<InsertResult>;

    insert (obj: (TInsertDoc | TInsertDoc[] | TDoc | TDoc[]), options: InsertOptionsWithChanges<TPrimaryKey, TDoc>): Op<InsertResultWithChanges<TDoc>>;

    get (key: TPrimaryKey): SingleRowSelectionOp<TDoc>;

  }

  declare type TableConfig = {||};
  declare type DatabaseConfig = {||};

  declare type TableCreateOptions = {|
    primaryKey?: string,
    durability?: Durability,
    shards?: number,
    replicas?: number | { [string]: number },
    primaryReplicaTag?: string
  |};

  declare type SSLOptions = {|
    ca: Array<Buffer>
  |}

  declare type ConnectOptions = {|
    host?: string,
    port?: string,
    db?: string,
    user?: string,
    password?: string,
    timeout?: string,
    ssl?: ?SSLOptions
  |}

  declare type DeleteOptions = {|
    durability?: Durability,
    returnChanges?: false
  |};

  declare type DeleteOptionsWithChanges = {|
    durability?: Durability,
    returnChanges: true | 'always'
  |};

  declare type DeleteResult = {|
    deleted: number,
    skipped: number,
    errors: number,
    first_error?: string,
    inserted: 0,
    replaced: 0,
    unchanged: 0
  |};

  declare type DeleteResultWithChanges<TDoc> = {|
    ...DeleteResult,
    changes: ChangeSet<null, TDoc>
  |};

  declare type UpdateOptions = {|
    durability?: Durability,
    nonAtomic?: boolean,
    returnChanges?: false
  |};

  declare type UpdateOptionsWithChanges = {|
    durability?: Durability,
    nonAtomic?: boolean,
    returnChanges: true | 'always'
  |};

  declare type UpdateResult = {|
    deleted: 0,
    skipped: number,
    errors: number,
    first_error?: string,
    inserted: 0,
    replaced: number,
    unchanged: number
  |};

  declare type UpdateResultWithChanges<TDoc> = {|
    ...UpdateResult,
    changes: ChangeSet<TDoc, TDoc>
  |};

  declare class SingleRowSelectionOp<TDoc> extends Op<?TDoc> {
    delete (options?: DeleteOptions): Op<DeleteResult>;

    delete (options: DeleteOptionsWithChanges): Op<DeleteResultWithChanges<TDoc>>;

    update (object: $Shape<TDoc>): Op<UpdateResult>;

    update (object: $Shape<TDoc>, options: UpdateOptions): Op<UpdateResult>;

    update (object: $Shape<TDoc>, options: UpdateOptionsWithChanges): Op<UpdateResultWithChanges<TDoc>>;
  }

  declare class R {
    tableCreate (tableName: string, options?: TableCreateOptions): Op<{ tables_created: 1, config_changes: ChangeSet<TableConfig, null> }>;
    dbList (): SequenceOp<string>;
    tableList (): Op<string[]>;
    branch<TTest, TTrue, TFalse> (test: Op<TTest>, trueAction: Op<TTrue> | TTrue, falseAction: Op<TFalse> | TFalse): Op<TTrue | TFalse>;
    connect (options?: ConnectOptions | string): Promise<Connection>;
    dbCreate (dbName: string): Op<{ dbs_created: 1, config_changes: [{ old_val: null, new_val: DatabaseConfig }] }>;
    table (tableName: string, options?: { readMode?: 'single' | 'majority' | 'outdated', identifierFormat?: 'name' | 'uuid' }): TableOp<any, any, any>;
    error (): ErrorControlStructure;
  }

  declare export default R
}
