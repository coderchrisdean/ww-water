import React from 'react';
import { UserButton } from '@clerk/clerk-react';

export default function Profile() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
