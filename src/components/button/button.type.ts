import { ReactNode } from "react";

export type Variant = "primary" | "secondary" | "ghost" | "link" | "outline";

export type TButtonProps = {
  variant: Variant;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};
