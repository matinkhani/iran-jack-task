import { FC } from "react";
import { TIconProps } from "./icon.type";

const IconVanArsdel: FC<TIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2_44529)">
        <path
          d="M4.19304 18.2978H6.96104L3.76801 6.5H1L4.19304 18.2978Z"
          fill="currentColor"
        />
        <path
          d="M9.72981 18.2978H6.96085L10.1548 6.5H12.9228L9.72981 18.2978Z"
          fill="currentColor"
        />
        <path
          d="M13.8452 18.2978H11.0772L14.2712 6.5H17.0392L13.8452 18.2978Z"
          fill="currentColor"
        />
        <path
          d="M20.2322 18.2978H23.0002L19.8072 6.5H17.0392L20.2322 18.2978Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_44529">
          <path
            d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H20C22.2091 0.5 24 2.29086 24 4.5V20.5C24 22.7091 22.2091 24.5 20 24.5H4C1.79086 24.5 0 22.7091 0 20.5V4.5Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconVanArsdel;
