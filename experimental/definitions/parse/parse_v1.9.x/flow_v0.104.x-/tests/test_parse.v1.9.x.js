// @flow
import Parse from 'parse/node'

Parse.initialize('appid');
Parse.initialize('appid', 'jskey');

Parse.masterKey = 'masterkey';
Parse.masterKey = null;
Parse.serverURL = 'http://localhost:8080';

const parseObject = new Parse.Object('Test')
parseObject.get('username');
parseObject.destroy();

class ES6TestObject extends Parse.Object {
  constructor() {
    super("ES6TestObject");
  }
}

Parse.Object.registerSubclass("ES6TestObject", ES6TestObject);

async () => {
  const testObjectQuery = new Parse.Query(ES6TestObject);
  const testObjects: Array<ES6TestObject> = await testObjectQuery.find();
};

const usernameFor = async (sessionToken: string): Promise<?string> => {
  const user = await Parse.User.become(sessionToken);
  const username = user.getUsername();
  await Parse.User.logOut();
  return username;
};

// $ExpectError
parseObject.get(false)
