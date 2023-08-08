import { create } from "zustand";

interface SessionDataState {
  sessionData: any;
  setSessionData: (data: any) => void;
}

const useSessionDataStore = create<SessionDataState>()((set) => ({
  sessionData: "",
  setSessionData: (data) => set(() => ({ sessionData: data })),
}));

interface LoggedInState {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

const useLoggedInStore = create<LoggedInState>()((set) => ({
  loggedIn: false,
  setLoggedIn: (loggedIn) => set((state) => ({ loggedIn: loggedIn })),
}))

export {
  useSessionDataStore,
  useLoggedInStore,
};