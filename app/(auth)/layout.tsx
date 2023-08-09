import AuthHeader from "@/components/AuthHeader";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-h-[100dvh] bg-darkest flex flex-col md:bg-dark">
      <AuthHeader />
      {children}
    </div>
  );
};

export default AuthLayout;