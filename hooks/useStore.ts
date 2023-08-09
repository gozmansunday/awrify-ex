import { create } from "zustand";

interface UserDataState {
  userData: any;
  setUserData: (data: any) => void;
}

const useUserDataStore = create<UserDataState>()((set) => ({
  userData: null,
  setUserData: (data) => set(() => ({ userData: data })),
}));

export {
  useUserDataStore,
};