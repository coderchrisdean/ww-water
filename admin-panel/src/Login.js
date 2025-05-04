import React from 'react';
import { SignIn } from '@clerk/clerk-react';

export default function Login() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
}
