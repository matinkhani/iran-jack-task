import classNames from "classnames";
import { FC, useId, useState } from "react";
import { CheckboxVariants } from "./checkbox.variants";
import { TCheckboxProps } from "./checkbox.type";

const CheckBox: FC<TCheckboxProps> = ({ variant, className, lable }) => {
  const [isChecked, setIsChecked] = useState(false);
  const uniqueId = useId();

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={uniqueId}
        checked={isChecked}
        onChange={handleToggle}
        className="hidden"
      />
      <label
        htmlFor={uniqueId}
        className={classNames(
          "flex items-center gap-2 py-1 px-3 cursor-pointer rounded-md",
          CheckboxVariants[variant],
          className
        )}
      >
        <span
          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
            isChecked
              ? variant === "secondary"
                ? "bg-black"
                : "border-white"
              : "border-gray-400"
          }`}
        >
          {isChecked && <span className="w-2 h-2 bg-white rounded-full" />}
        </span>
        <span>{lable}</span>
      </label>
    </div>
  );
};

export default CheckBox;
