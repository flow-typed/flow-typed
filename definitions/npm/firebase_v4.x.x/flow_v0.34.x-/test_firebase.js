// @flow

import * as firebase from 'firebase';
import app from 'firebase/app';
import auth from 'firebase/auth';
import database from 'firebase/database';

// #1
const a1: firebase.app.App = firebase.initializeApp({
  apiKey: 'apiKey',
  databaseURL: 'databaseURL',
  projectId: '42',
});

// #2
// $ExpectError
const a2: firebase.app.App = firebase.initializeApp({
  storageBucker: 'storageBucket',
  projectId: '42',
});

// #3
const a3: app.App = app('DEFAULT');

// #4
firebase.auth()
  .createUserWithEmailAndPassword('email', 'password')
  .then()
  .catch()

// #5
firebase.auth()
  .onAuthStateChanged(user => {
    if (user) {
      (user.displayName);
      (user.email);
      (user.emailVerified);
      (user.photoURL);
      (user.isAnonymous);
      (user.uid);
      (user.providerData);
      // $ExpectError
      (user.foobar);
    }
  });

// #6
firebase.auth()
  .currentUser
  .linkAndRetrieveDataWithCredential({
    providerId: 'providerId',
  })
  .then(userCredential => {
    (userCredential.user);
    // $ExpectError
    (userCredential.foobar);
  })

// #7
const provider = new firebase.auth.GithubAuthProvider();
firebase.auth()
  .currentUser
  .linkWithPopup(provider)
  .then(result => {
    (result.credential);
    (result.additionalUserInfo);
    (result.operationType);
    (result.user);
    // $ExpectError
    (result.foobar);
  });

// #8
const provider2 = new firebase.auth.EmailAuthProvider();
// $ExpectError
firebase.auth()
  .currentUser
  .linkWithPopup(provider2)
  .then(result => {
    (result.credential);
    (result.additionalUserInfo);
    (result.operationType);
    (result.user);
    // $ExpectError
    (result.foobar);
  });

// #9
const prevUser = firebase.auth().currentUser;
const credential = { providerId: 'providerId' };
firebase.auth()
  .signInWithCredential(credential)
  .then(user => user.delete().then(() => prevUser.linkWithCredential(credential)))
  .then(() => firebase.auth().signInWithCredential(credential))

// #10
firebase.database().ref('users/42').set({username: 'foobar'});

// #11
firebase.database().ref('users/42').on('value', snp => {
  (snp.val());
});

// #12
// $ExpectError
firebase.database().ref('users/42').on('foo', snp => {
  (snp.val());
});

// #13
firebase.database()
  .ref('users/42')
  .orderByKey()
  .limitToLast(17)
  .once('child_added')
  .then(snp => snp.forEach(_ => true))

// #14
// $ExpectError
firebase.database().ref('users/42').orderByKey().limitToLast('foo')
