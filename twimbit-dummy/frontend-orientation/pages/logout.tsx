import { useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';

export default function LogoutPage() {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try{
      await signOut();
    }catch(error){
      console.error(error)
    }
  }

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
}
