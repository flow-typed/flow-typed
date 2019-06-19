// @flow

import firebase from 'firebase/app';

const app: firebase.app.App = firebase.initializeApp({});

const auth: firebase.auth.Auth = firebase.auth(app);
const db: firebase.database.Database = firebase.database();
const ref: firebase.database.Reference = db.ref('test');

// $ExpectError number. This type is incompatible
const ref2 = db.ref(100);

const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      let user = result.user;
      // $ExpectError
      firebase.auth().logOut();
      firebase.auth().signOut();
    })
    .catch((error) => {
      const errorCode = error.code;
    });

firebase.auth().getRedirectResult().then((result) => {
  if (result.credential) {
    firebase.auth().signOut();
  }
})

const userId = 100;
firebase.database().ref('users/' + userId).set({
  username: "test"
});
firebase.database().ref('test').set(null);

// $ExpectError update should receive an object
firebase.database().ref('test').update("test");

const userRef = firebase.database().ref('users/' + userId);
userRef.on('value', (snap) => {
  const value = snap.val();
});

firebase.database().ref('users/' + userId).once('value').then((snap) => {
  const value = snap.val();
});
