"use client";

import React from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth } from "../config/firebase";

interface AuthCtxType {
  user: User | null | false;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthCtx = createContext({} as AuthCtxType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null | false>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
    }),
    [user]
  );

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};

export const useSession = () => {
  const { user } = useContext(AuthCtx);

  const isLoading = user === null;

  return { user, isLoading };
};
