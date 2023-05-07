'use client';

import { Button, Header } from 'ui';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function Page() {
  const googleAuth = new GoogleAuthProvider();

  return (
    <>
      <Header text='Web' />
      <Button />
    </>
  );
}
