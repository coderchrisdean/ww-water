import React from 'react';
import { SignUp } from '@clerk/clerk-react';

export default function ClerkSignUp() {
  return <SignUp path="/sign-up" routing="path" />;
}
