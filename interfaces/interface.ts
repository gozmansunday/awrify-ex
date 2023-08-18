import { Provider } from "@supabase/supabase-js";

export interface SignUpInfo {
  name: string;
  email: string;
  password: string;
};

export interface LogInInfo {
  email: string;
  password: string;
};

export interface GoogleDataProps {
  provider: Provider;
  url: string;
}

export interface Song {
  id: number;
  user_id: string;
  title: string;
  author: string;
  song_path: string;
  image_path: string;
}