import { create } from "zustand";

interface SessionDataState {
  sessionData: any;
  setSessionData: (data: any) => void;
}

const useSessionDataStore = create<SessionDataState>()((set) => ({
  sessionData: null,
  setSessionData: (data) => set(() => ({ sessionData: data })),
}));

export {
  useSessionDataStore,
};