'use client';

import { Button, Header } from 'ui';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

export default function Page() {
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };

  useEffect(() => {
    // TODO: Fetch POST to the server for saving user data
  }, [user]);

  return (
    <>
      <Header text='Web' />
      <Button onClick={login} content={'Login'} />
      <div onClick={() => auth.signOut()}>
        {user ? `Welcome ${user.displayName}` : ''}
      </div>
    </>
  );
}
