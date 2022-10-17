import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { signIn as apiSignIn } from '../api/account';

interface UserContext {
  user: {
    name: string;
    email: string;
  };
  loggedIn: boolean;
  signIn: (user: string, password: string, callback: (success: boolean) => void) => void;
  signOut: () => void;
}

const LoginUserContext = createContext({} as UserContext);

export function useLoginContext() {
  return useContext(LoginUserContext);
}

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);

  // check if user is logged in on load
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const json = JSON.parse(user);
        setUser(json);
        setLoggedIn(true);
      } catch (error) {
        // not logged in
      }
    }
  }, []);

  // updates each time when cartItems updates
  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [loggedIn, user]);

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
