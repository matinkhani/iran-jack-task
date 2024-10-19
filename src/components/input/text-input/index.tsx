import { FC } from "react";
import { TInputIconProps, TTextInputProps } from "./text-input.type";

const Icon: FC<TInputIconProps> = ({ className, icon, where }) => (
  <span
    className={`absolute top-1/2 transform -translate-y-[50%] ${
      where === "start" ? "left-2" : "right-2"
    } ${className}`}
  >
    {icon}
  </span>
);

const TextInput: FC<TTextInputProps> = ({
  name,
  placeholder,
  startIcon,
  endIcon,
}) => {
  return (
    <div className="relative w-[200px] h-8 flex items-center rounded border-2 border-gray-300 border-b-gray-500">
      {startIcon && <Icon where="start" icon={startIcon} />}
      <input
        type="text"
        className={`outline-none w-full text-sm placeholder:text-[#707070] ${
          endIcon ? "ml-3" : startIcon ? "ml-8" : "ml-3"
        }`}
        placeholder={placeholder}
        name={name}
      />
      {endIcon && <Icon where="end" icon={endIcon} />}
    </div>
  );
};

export default TextInput;
