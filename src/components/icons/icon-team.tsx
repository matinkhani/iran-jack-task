import { FC } from "react";
import { TIconProps } from "./icon.type";

const IconTeam: FC<TIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2_44516)">
        <path
          d="M14.754 10.5C15.7205 10.5 16.504 11.2835 16.504 12.25V16.999C16.504 19.4848 14.4888 21.5 12.003 21.5C9.51712 21.5 7.50193 19.4848 7.50193 16.999V12.25C7.50193 11.2835 8.28543 10.5 9.25193 10.5H14.754ZM14.754 12H9.25193C9.11386 12 9.00193 12.1119 9.00193 12.25V16.999C9.00193 18.6564 10.3455 20 12.003 20C13.6604 20 15.004 18.6564 15.004 16.999V12.25C15.004 12.1119 14.8921 12 14.754 12ZM3.75 10.5L7.13128 10.4991C6.78791 10.9145 6.56424 11.4325 6.51312 12.0002L3.75 12C3.61193 12 3.5 12.1119 3.5 12.25V15.4988C3.5 16.8802 4.61984 18 6.00124 18C6.20123 18 6.39574 17.9765 6.58216 17.9322C6.66687 18.4361 6.82156 18.9167 7.03487 19.364C6.70577 19.453 6.35899 19.5 6.00124 19.5C3.79142 19.5 2 17.7086 2 15.4988V12.25C2 11.2835 2.7835 10.5 3.75 10.5ZM16.8747 10.4991L20.25 10.5C21.2165 10.5 22 11.2835 22 12.25V15.5C22 17.7091 20.2091 19.5 18 19.5C17.6436 19.5 17.298 19.4534 16.9691 19.3659C17.184 18.9177 17.3388 18.4371 17.425 17.9331C17.6092 17.977 17.8019 18 18 18C19.3807 18 20.5 16.8807 20.5 15.5V12.25C20.5 12.1119 20.3881 12 20.25 12L17.4928 12.0002C17.4417 11.4325 17.218 10.9145 16.8747 10.4991ZM12 3.5C13.6569 3.5 15 4.84315 15 6.5C15 8.15685 13.6569 9.5 12 9.5C10.3431 9.5 9 8.15685 9 6.5C9 4.84315 10.3431 3.5 12 3.5ZM18.5 4.5C19.8807 4.5 21 5.61929 21 7C21 8.38071 19.8807 9.5 18.5 9.5C17.1193 9.5 16 8.38071 16 7C16 5.61929 17.1193 4.5 18.5 4.5ZM5.5 4.5C6.88071 4.5 8 5.61929 8 7C8 8.38071 6.88071 9.5 5.5 9.5C4.11929 9.5 3 8.38071 3 7C3 5.61929 4.11929 4.5 5.5 4.5ZM12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5ZM18.5 6C17.9477 6 17.5 6.44772 17.5 7C17.5 7.55228 17.9477 8 18.5 8C19.0523 8 19.5 7.55228 19.5 7C19.5 6.44772 19.0523 6 18.5 6ZM5.5 6C4.94772 6 4.5 6.44772 4.5 7C4.5 7.55228 4.94772 8 5.5 8C6.05228 8 6.5 7.55228 6.5 7C6.5 6.44772 6.05228 6 5.5 6Z"
          fill="#616161"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_44516">
          <path
            d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H20C22.2091 0.5 24 2.29086 24 4.5V20.5C24 22.7091 22.2091 24.5 20 24.5H4C1.79086 24.5 0 22.7091 0 20.5V4.5Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconTeam;
