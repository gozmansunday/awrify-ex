import { Song } from "@/interfaces/interface";
import { create } from "zustand";

interface UserDataState {
  userData: any;
  setUserData: (data: any) => void;
}

const useUserDataStore = create<UserDataState>()((set) => ({
  userData: null,
  setUserData: (data) => set(() => ({ userData: data })),
}));

interface SongsState {
  songs: Song[];
  setSongs: (songsData: Song[]) => void;
}

const useSongsStore = create<SongsState>()((set) => ({
  songs: [],
  setSongs: (songsData) => set(() => ({ songs: songsData })),
}));

export {
  useUserDataStore,
  useSongsStore,
};