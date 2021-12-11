import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => (
  <h1 className="text-4xl">{children}</h1>
);
