import { FC } from "react";
import { TIconProps } from "./icon.type";

const IconMenu: FC<TIconProps> = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 10.5C8 10.2239 8.22386 10 8.5 10H23.5C23.7761 10 24 10.2239 24 10.5C24 10.7761 23.7761 11 23.5 11H8.5C8.22386 11 8 10.7761 8 10.5ZM8 15.5C8 15.2239 8.22386 15 8.5 15H23.5C23.7761 15 24 15.2239 24 15.5C24 15.7761 23.7761 16 23.5 16H8.5C8.22386 16 8 15.7761 8 15.5ZM8.5 20C8.22386 20 8 20.2239 8 20.5C8 20.7761 8.22386 21 8.5 21H23.5C23.7761 21 24 20.7761 24 20.5C24 20.2239 23.7761 20 23.5 20H8.5Z"
        fill="#424242"
      />
    </svg>
  );
};

export default IconMenu;
