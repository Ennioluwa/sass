import { FC, ReactNode } from "react";

interface LandingLayoutProps {
  children: ReactNode;
}

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
