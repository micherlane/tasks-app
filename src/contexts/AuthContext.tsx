import React, { createContext, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";
import { useNavigate } from "react-router-dom";

type User = {
  username: string
}

interface AuthContextType {
  user: User | null
  signin: (user: User) => void
  signout: () => void
  isAuthenticated: boolean
}

const defaultValue = {} as AuthContextType

const AuthContext = createContext<AuthContextType>(defaultValue)

interface AuthProviderProps {
  children: React.ReactNode
}

// AuthProvider encapsula o AuthContextProvider
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage({ keyName: "user", defaultValue: null});

  const signin = (user: User) => { setUser(user); }

  const signout = () => { setUser(null); }

  const value = useMemo(() => ({
    user, signin, signout, isAuthenticated: user !== null
  }), [user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const authContext = useContext(AuthContext)

  if (!authContext)
    throw new Error('useAuth fora do AuthProvider!')

  return authContext
}