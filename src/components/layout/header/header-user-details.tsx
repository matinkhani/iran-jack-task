import { STRINGS } from "../../../constants/strings";

const HeaderUserDetails = () => {
  return (
    <div className="order-1 md:order-1 flex items-center gap-2 px-4 flex-shrink-0">
      <img src="/images/avatar.png" className="rounded-full h-8 w-8" />
      <h1 className="text-[#242424] text-2xl font-bold">{STRINGS.userName}</h1>
    </div>
  );
};

export default HeaderUserDetails;
