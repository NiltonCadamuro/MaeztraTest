import Image from "next/image";
import { MenuItem, MenuProps } from "./types";

const Menu = ({ items }: MenuProps) => {
  return (
    <nav className="flex flex-col lg:flex-row lg:gap-[15px] w-full h-full lg:pl-[162px]">
      {items.map((item: MenuItem, index: number) => (
        <a
          key={index}
          href={item.url}
          className="flex lg:justify-center items-center gap-2 max-w-[unset] lg:max-w-[146px] w-full border-b border-textPrimary lg:border-none py-2 pl-5 lg:pl-0 lg:py-0 group"
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt={`Icone de item do menu ${item.title}`}
              width={16}
              height={16}
              loading="eager"
              priority
            />
          )}
          <span
            style={item.color ? { color: item.color } : {}}
            className={`${item.bold ? "font-bold" : "font-normal"} text-textPrimary group-hover:text-textSpecial text-sm leading-[21px]`}
          >
            {item.title}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Menu;
