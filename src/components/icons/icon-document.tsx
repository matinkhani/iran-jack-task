import { FC } from "react";
import { TIconProps } from "./icon.type";

const IconDocument: FC<TIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 2.5C4.89543 2.5 4 3.39543 4 4.5V20.5C4 21.6046 4.89543 22.5 6 22.5H18C19.1046 22.5 20 21.6046 20 20.5V10.3278C20 9.79733 19.7893 9.28863 19.4142 8.91355L13.5864 3.08579C13.2114 2.71071 12.7027 2.5 12.1722 2.5H6ZM5.5 4.5C5.5 4.22386 5.72386 4 6 4H12V8.5C12 9.60457 12.8954 10.5 14 10.5H18.5V20.5C18.5 20.7761 18.2761 21 18 21H6C5.72386 21 5.5 20.7761 5.5 20.5V4.5ZM17.3793 9H14C13.7239 9 13.5 8.77614 13.5 8.5V5.12066L17.3793 9Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconDocument;
