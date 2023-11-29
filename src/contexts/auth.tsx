import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { ASYNC_IS_LOGGED } from "../constants/storage.constant";


interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface AuthContextProps {
  signed: boolean;
  user: User | null;
  loadingAuth: boolean;
  signUp: (email: string, password: string, nome: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage(): Promise<void> {
      const storageUser = await AsyncStorage.getItem('@finToken');

      if (storageUser) {
        try {
          const response = await api.get('/me', {
            headers: {
              'Authorization': `Bearer ${storageUser}`,
            },
          });

          api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
          setUser(response.data);
          setLoading(false);
        } catch {
          setUser(null);
          setLoading(false);
        }
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  async function signUp(email: string, password: string, nome: string): Promise<void> {
    setLoadingAuth(true);
    try {
      const response = await api.post('/users', {
        name: nome,
        password: password,
        email: email,
      });

      setLoadingAuth(false);
      navigation.goBack();
    } catch (err) {
      console.log("ERRO AO CADASTRAR", err);
      setLoadingAuth(false);
    }
  }

  async function signIn(email: string, password: string): Promise<void> {
    setLoadingAuth(true);

    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });

      const { id, name, token } = response.data;

      const data: User = {
        id,
        name,
        email,
        password,
      };

      await AsyncStorage.setItem('@finToken', token);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      setUser(data);
      setLoadingAuth(false);
    } catch (err) {
      console.log("ERRO AO LOGAR ", err);
      setLoadingAuth(false);
    }
  }

  async function signOut(): Promise<void> {
    await AsyncStorage.clear()
      .then(() => {
        setUser(null);
      });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
