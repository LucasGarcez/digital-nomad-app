import AsyncStorage from "@react-native-async-storage/async-storage";

import { SplashScreen, useRouter } from "expo-router";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthUser } from "./Auth";

type AuthState = {
  isSignedIn: boolean;
  isReady: boolean;
  signIn: (user: AuthUser) => void;
  signOut: () => void;
};

SplashScreen.preventAutoHideAsync();

export const AuthContext = createContext<AuthState>({
  isSignedIn: false,
  isReady: false,
  signIn: () => {},
  signOut: () => {},
});

const AUTH_STATE_KEY = "authState";

export function AuthProvider({ children }: PropsWithChildren) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  async function storeAuthState(newState: {
    isSignedIn: boolean;
    authUser: AuthUser | null;
  }) {
    try {
      await AsyncStorage.setItem(AUTH_STATE_KEY, JSON.stringify(newState));
    } catch (error) {
      console.error(error);
    }
  }

  function signIn(authUser: AuthUser) {
    setIsSignedIn(true);
    storeAuthState({ isSignedIn: true, authUser });
    router.replace("/");
  }

  function signOut() {
    setIsSignedIn(false);
    storeAuthState({ isSignedIn: false, authUser: null });
  }

  useEffect(() => {
    async function loadAuthState() {
      try {
        // simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 300));
        const authState = await AsyncStorage.getItem(AUTH_STATE_KEY);
        if (authState) {
          setIsSignedIn(JSON.parse(authState).isSignedIn);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsReady(true);
      }
    }
    loadAuthState();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <AuthContext.Provider value={{ isSignedIn, isReady, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthStore() {
  return useContext(AuthContext);
}
