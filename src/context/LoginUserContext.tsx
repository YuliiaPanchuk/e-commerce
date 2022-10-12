import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { signIn as apiSignIn } from '../api/account';

interface LoginUserProps {
  children: ReactNode;
}

interface LoginUserContextProps {
  user: {
    name: string;
    email: string;
  };
  loggedIn: boolean;
  signIn: (user: string, password: string, callback: (success: boolean) => void) => void;
  signOut: () => void;
}

const LoginUserContext = createContext({} as LoginUserContextProps);

export function useLoginContext() {
  return useContext(LoginUserContext);
}

export function LoginUserProvider({ children }: LoginUserProps) {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const signIn = useCallback(
    (user: string, password: string, callback: (success: boolean) => void) => {
      apiSignIn(user, password).then((e) => {
        if (e.success) {
          setUser({ name: user, email: e.email });
          setLoggedIn(true);
        } else {
          alert(e.text);
          setLoggedIn(false);
        }
        callback(e.success);
      });
    },
    [],
  );

  const signOut = useCallback(() => {
    setLoggedIn(false);
    setUser({ name: '', email: '' });
  }, []);

  return (
    <LoginUserContext.Provider
      value={{
        user,
        loggedIn,
        signIn,
        signOut,
      }}
    >
      {children}
    </LoginUserContext.Provider>
  );
}
