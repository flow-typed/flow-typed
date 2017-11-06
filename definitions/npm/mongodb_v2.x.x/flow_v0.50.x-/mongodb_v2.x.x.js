declare class MongoDB$ObjectID {
  constructor(s?: string | number): this;

  generationTime: number;

  // Creates an ObjectID from a hex string representation of an ObjectID.
  // hexString – create a ObjectID from a passed in 24 byte hexstring.
  static createFromHexString(hexString: string): MongoDB$ObjectID;
  // Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
  // time – an integer number representing a number of seconds.
  static createFromTime(time: number): MongoDB$ObjectID;
  // Checks if a value is a valid bson ObjectId
  // id - Value to be checked
  static isValid(id: string | number): boolean;
  //Compares the equality of this ObjectID with otherID.
  equals(otherID: MongoDB$ObjectID): boolean;
  // Generate a 12 byte id string used in ObjectID's
  // time - optional parameter allowing to pass in a second based timestamp
  generate(time?: number): string;
  // Returns the generation date (accurate up to the second) that this ID was generated.
  getTimestamp(): Date;
  // Returns the ObjectID id as a 24 byte hex string representation
  toHexString(): string;
}

declare module "mongodb" {
  declare module.exports: {
    ObjectId: MongoDB$ObjectID
  };
}
