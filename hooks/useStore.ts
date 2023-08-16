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

interface AllSongsState {
  allSongs: Song[];
  setAllSongs: (allSongsData: Song[]) => void;
}

const useAllSongsStore = create<AllSongsState>()((set) => ({
  allSongs: [],
  setAllSongs: (allSongsData) => set(() => ({ allSongs: allSongsData })),
}));

interface UserSongsState {
  userSongs: Song[];
  setUserSongs: (userSongsData: Song[]) => void;
}

const useUserSongsStore = create<UserSongsState>()((set) => ({
  userSongs: [],
  setUserSongs: (userSongsData) => set(() => ({ userSongs: userSongsData })),
}));

interface SearchedSongsState {
  searchedSongs: Song[];
  setSearchedSongs: (searchedSongsData: Song[]) => void;
}

const useSearchedSongsStore = create<SearchedSongsState>()((set) => ({
  searchedSongs: [],
  setSearchedSongs: (searchedSongsData) => set(() => ({ searchedSongs: searchedSongsData })),
}));

export {
  useUserDataStore,
  useAllSongsStore,
  useUserSongsStore,
  useSearchedSongsStore
};