'use client';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from 'react';

import { Button, Header } from 'ui';

const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your credentials',
  projectId: 'your credentials',
  storageBucket: 'your credentials',
  messagingSenderId: 'your credentials',
  appId: 'your credentials',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signIn = () => auth.signInWithPopup(provider);
const signOut = () => auth.signOut();

export default function Page() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <Header text='Web' />
      <Button />
    </>
  );
}
