import { FC } from "react";
import { TButtonProps } from "./button.type";
import classNames from "classnames";
import { ButtonVariants } from "./button.variants";

const Button: FC<TButtonProps> = ({
  children,
  onClick,
  variant,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "py-1 px-3 rounded-sm",
        ButtonVariants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
