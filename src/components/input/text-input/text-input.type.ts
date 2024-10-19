import { ReactNode } from "react";

export type TTextInputProps = {
  name: string;
  placeholder: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
};

export type TInputIconProps = {
  icon: ReactNode;
  where: "start" | "end";
  className?: string;
};
