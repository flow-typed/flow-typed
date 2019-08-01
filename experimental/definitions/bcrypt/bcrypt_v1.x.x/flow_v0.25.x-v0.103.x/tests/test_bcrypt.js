// @flow

import bcrypt from 'bcrypt';

let num = 10;
let str = 'password';
let bool = false;

str = bcrypt.genSaltSync();
str = bcrypt.genSaltSync(num);

bcrypt.genSalt((err, salt) => {
  str = salt;
});
bcrypt.genSalt(num, (err, salt) => {
  str = salt;
});
(bcrypt.genSalt(): Promise<string>);
(bcrypt.genSalt(num): Promise<string>);


str = bcrypt.hashSync(str, str);
str = bcrypt.hashSync(str, num);

bcrypt.hash(str, str, (err, encrypted) => {
  str = encrypted;
});
bcrypt.hash(str, num, (err, encrypted) => {
  str = encrypted;
});
(bcrypt.hash(str, str): Promise<string>);
(bcrypt.hash(str, num): Promise<string>);

bool = bcrypt.compareSync(str, str);
bcrypt.compare(str, str, (err, same) => {
  bool = same;
});
(bcrypt.compare(str, str): Promise<bool>);
// $ExpectError
bcrypt.compare(str, num);

num = bcrypt.getRounds(str);
