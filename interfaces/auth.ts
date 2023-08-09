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