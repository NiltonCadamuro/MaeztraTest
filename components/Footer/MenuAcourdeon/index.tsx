"use client";

import { useState } from "react";
import { MenuAcourdeonProps, MenuItem } from "./types";

const MenuAcourdeon = ({ title, items }: MenuAcourdeonProps) => {
  const [height, setHeight] = useState<number>(32);

  return (
    <div
      style={{ height: `${height}px` }}
      className="w-full lg:max-w-[146px] overflow-hidden lg:!h-fit transition-all"
    >
      <div
        onClick={() => setHeight(height === 32 ? items.length * 30 + 32 : 32)}
        className="flex justify-between items-center"
      >
        <p className="text-textPrimary font-bold text-base leading-[18px]">
          {title}
        </p>
        <span className="text-textPrimary font-bold text-base leading-[18px] lg:hidden">
          {height !== 32 ? "-" : "+"}
        </span>
      </div>
      {items && (
        <div className="flex flex-col gap-[10px] mt-[10px] lg:gap-6 lg:mt-6">
          {items.map((item: MenuItem, index: number) => (
            <a
              key={index}
              href={item.url}
              className="text-textPrimary text-xs leading-[18px]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuAcourdeon;
