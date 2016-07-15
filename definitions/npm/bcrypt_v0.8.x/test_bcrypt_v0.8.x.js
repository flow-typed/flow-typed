// @flow

import bcrypt from 'bcrypt';

let num: number = 10;
let str: string = 'password';
let bool: boolean = false;

str = bcrypt.genSaltSync();
str = bcrypt.genSaltSync(num);

bcrypt.genSalt((err: Error, salt: string): void => {
  str = salt;
});
bcrypt.genSalt(num, (err: Error, salt: string): void => {
  str = salt;
});
// $ExpectError
bcrypt.genSalt(str, (err: Error, salt: string): void => {
  str = salt;
});

str = bcrypt.hashSync(str, str);
str = bcrypt.hashSync(str, num);

bcrypt.hash(str, str, (err: Error, encrypted: string): void => {
  str = encrypted;
});
bcrypt.hash(str, num, (err: Error, encrypted: string): void => {
  str = encrypted;
});

bool = bcrypt.compareSync(str, str);
bcrypt.compare(str, str, (err: Error, same: boolean): void => {
  bool = same;
});
// $ExpectError
bcrypt.compare(str, str);

num = bcrypt.getRounds(str);
