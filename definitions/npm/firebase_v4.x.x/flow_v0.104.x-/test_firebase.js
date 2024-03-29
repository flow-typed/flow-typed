// @flow

import firebase from "firebase";
import "firebase/firestore";
import app from "firebase/app";
import auth from "firebase/auth";
import database from "firebase/database";

// #1
const a1: firebase.app.App = firebase.initializeApp({
  apiKey: "apiKey",
  databaseURL: "databaseURL",
  projectId: "42"
});

// #2
// $FlowExpectedError[prop-missing]
const a2: firebase.app.App = firebase.initializeApp({
  storageBucker: "storageBucket",
  projectId: "42"
});

// #3
const a3: app.App = app("DEFAULT");

// #4
firebase
  .auth()
  .createUserWithEmailAndPassword("email", "password")
  .then()
  .catch();

// #5
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    user.displayName;
    user.email;
    user.emailVerified;
    user.photoURL;
    user.isAnonymous;
    user.uid;
    user.providerData;
    // $FlowExpectedError[prop-missing]
    user.foobar;
  }
});

// #6
firebase
  .auth()
  .currentUser.linkAndRetrieveDataWithCredential({
    providerId: "providerId"
  })
  .then(userCredential => {
    userCredential.user;
    // $FlowExpectedError[prop-missing]
    userCredential.foobar;
  });

// #7
const provider = new firebase.auth.GithubAuthProvider();
firebase
  .auth()
  .currentUser.linkWithPopup(provider)
  .then(result => {
    result.credential;
    result.additionalUserInfo;
    result.operationType;
    result.user;
    // $FlowExpectedError[prop-missing]
    result.foobar;
  });

// #8
const provider2 = new firebase.auth.EmailAuthProvider();
firebase
  .auth()
  .currentUser // $FlowExpectedError[incompatible-call]
  .linkWithPopup(provider2)
  .then(result => {
    result.credential;
    result.additionalUserInfo;
    result.operationType;
    result.user;
    // $FlowExpectedError[prop-missing]
    result.foobar;
  });

// #9
const prevUser = firebase.auth().currentUser;
const credential = { providerId: "providerId" };
firebase
  .auth()
  .signInWithCredential(credential)
  .then(user =>
    user.delete().then(() => prevUser.linkWithCredential(credential))
  )
  .then(() => firebase.auth().signInWithCredential(credential));

// #10
firebase
  .database()
  .ref("users/42")
  .set({ username: "foobar" });

// #11
firebase
  .database()
  .ref("users/42")
  .on("value", snp => {
    snp.val();
  });

// #12
firebase
  .database()
  .ref("users/42") // $FlowExpectedError[incompatible-call]
  .on("foo", snp => {
    snp.val();
  });

// #13
firebase
  .database()
  .ref("users/42")
  .orderByKey()
  .limitToLast(17)
  .once("child_added")
  .then(snp => snp.forEach(_ => true));

// #14
firebase
  .database()
  .ref("users/42")
  .orderByKey() // $FlowExpectedError[incompatible-call]
  .limitToLast("foo");

// #15
firebase
  .storage()
  .ref()
  .child("foo")
  .child("bar");

// #17
firebase
  .storage()
  .ref("/foo")
  .getMetadata()
  .then(metadata => {
    (metadata.bucket: string);
    // $FlowExpectedError[prop-missing]
    metadata.foo;
  })
  .catch();

// #18
firebase
  .storage()
  .ref("/foo")
  .put(new File(["foo"], "foo.txt"))
  .then(snp => {
    (snp.bytesTransferred: number);
    // $FlowExpectedError[prop-missing]
    snp.foo;
  })
  .catch();

// #19
firebase
  .storage()
  .ref("/foo") // $FlowExpectedError[incompatible-call]
  .put("foobar");

// #20
const task = firebase
  .storage()
  .ref("/foo")
  .put(new File(["foo"], "foo.txt"));
const subscribe = task.on("state_changed");
const unsubscribe = subscribe(snp => {
  (snp.bytesTransferred: number);
  // $FlowExpectedError[prop-missing]
  snp.foo;
});
(unsubscribe(): void);

// #21
firebase
  .storage()
  .ref("/foo")
  .put(new File(["foo"], "foo.txt"))
  .on("state_changed", snp => {
    (snp.bytesTransferred: number);
    // $FlowExpectedError[prop-missing]
    snp.foo;
  })();

// #22
firebase
  .storage()
  .ref("/foo")
  .put(new File(["foo"], "foo.txt"))
  .on("state_changed", {
    next: snp => {
      (snp.bytesTransferred: number);
      // $FlowExpectedError[prop-missing]
      snp.foo;
    }
  })();

// #23
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
firebase.auth().setPersistence('local');

// $FlowExpectedError[prop-missing]
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.FOO);
// $FlowExpectedError[incompatible-call]
firebase.auth().setPersistence('foo');

firebase
  .firestore()
  .doc("/foo/bar")
  .get()
  .then(snapshot => {
    (snapshot.id: string);
    // $FlowExpectedError[prop-missing]
    snapshot.foo;
  })
  .catch();

// #24
firebase
  .firestore()
  .doc("/foo/bar")
  .get()
  .then(snapshot => {
    (snapshot.id: string);
    // $FlowExpectedError[prop-missing]
    snapshot.foo;
    // $FlowExpectedError[prop-missing]
    snapshot.forEach((snapshot) => {});
  })
  .catch();

// #25
(firebase.firestore().doc("/foo/bar").id: string);

// #26
// $FlowExpectedError[prop-missing]
firebase.firestore().doc("/foo/bar").limit(4);

// #27
firebase
  .firestore()
  .collection("/foo/bar")
  .get()
  .then(snapshots => {
    snapshots.forEach(snapshot => { (snapshot.id: string) });
    // $FlowExpectedError[prop-missing]
    snapshots.foo;
  })
  .catch();

// #28
firebase
  .firestore()
  .collection("/foo")
  .limit(4)
  .endAt({ foo: 4 })
  .endBefore({ bar: 5 })
  .startAt({ foo: 1 })
  .startAfter({ bar: 2 })
  .orderBy(new firebase.firestore.FieldPath("foo", "bar"), "asc")
  .get()
  .then(snapshots => {
    snapshots.forEach(snapshot => { (snapshot.id: string) });
    // $FlowExpectedError[prop-missing]
    snapshots.foo;
  })
  .catch();
