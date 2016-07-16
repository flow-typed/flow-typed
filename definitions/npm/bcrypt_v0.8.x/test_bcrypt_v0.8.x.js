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
// $ExpectError
bcrypt.genSalt(str, (err, salt) => {
  str = salt;
});

str = bcrypt.hashSync(str, str);
str = bcrypt.hashSync(str, num);

bcrypt.hash(str, str, (err, encrypted) => {
  str = encrypted;
});
bcrypt.hash(str, num, (err, encrypted) => {
  str = encrypted;
});

bool = bcrypt.compareSync(str, str);
bcrypt.compare(str, str, (err, same) => {
  bool = same;
});
// $ExpectError
bcrypt.compare(str, str);

num = bcrypt.getRounds(str);
