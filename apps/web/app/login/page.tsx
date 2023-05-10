'use client';

import { Button } from 'ui';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <>
      <p>TEST</p>
      <Button onClick={() => signIn('google')} content='signIn' />
    </>
  );
};

export default SignIn;
