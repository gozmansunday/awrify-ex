import Wrapper from "@/components/Wrapper";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SiteLayout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <Wrapper>
        {children}
      </Wrapper>
    </div>
  );
};

export default SiteLayout;