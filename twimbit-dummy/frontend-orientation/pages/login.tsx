import { useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';

export default function LoginPage() {
  const { openSignIn } = useClerk();

  useEffect(() => {
      openSignIn();
  }, []);

  return null;
}
