import { TopBarHeaderProps } from "./types";

const TopBarHeader = ({ text }: TopBarHeaderProps) => {
  return (
    <div className="w-full flex justify-center items-center bg-surfaceTertiary h-6">
      <span className="text-textSecondary text-[10px] lg:text-xs leading-[18px]">
        {text}
      </span>
    </div>
  );
};

export default TopBarHeader;
