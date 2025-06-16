import { useStorage } from "@/src/infra/storage/StorageProvider";
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
  authUser: AuthUser | null;
  isReady: boolean;
  signIn: (user: AuthUser) => void;
  signOut: () => void;
};

SplashScreen.preventAutoHideAsync();

export const AuthContext = createContext<AuthState>({
  authUser: null,
  isReady: false,
  signIn: () => {},
  signOut: () => {},
});

const AUTH_KEY = "AUTH_KEY";

export function AuthProvider({ children }: PropsWithChildren) {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [isReady, setIsReady] = useState(false);
  const { storage } = useStorage();

  const router = useRouter();

  async function signIn(_authUser: AuthUser) {
    await storage.setItem(AUTH_KEY, _authUser);
    setAuthUser(_authUser);

    router.replace("/");
  }

  async function signOut() {
    await storage.removeItem(AUTH_KEY);
    setAuthUser(null);
  }

  useEffect(() => {
    async function loadAuthState() {
      try {
        // simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 300));

        const _authUser = await storage.getItem<AuthUser | null>(AUTH_KEY);
        setAuthUser(_authUser);
      } catch (error) {
        console.error(error);
      } finally {
        setIsReady(true);
      }
    }
    loadAuthState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <AuthContext.Provider value={{ authUser, isReady, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthStore() {
  return useContext(AuthContext);
}
