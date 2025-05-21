'use client';

import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LogoutPage() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]); // Added logout to dependency array

  return <p className="p-4 text-center">Logging out...</p>;
}