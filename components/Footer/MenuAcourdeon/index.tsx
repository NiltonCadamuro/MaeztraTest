"use client";

import { useState } from "react";
import { MenuAcourdeonProps, MenuItem } from "./types";

const MenuAcourdeon = ({ title, items }: MenuAcourdeonProps) => {
  const [height, setHeight] = useState<number>(30);

  return (
    <div
      style={{ height: `${height}px` }}
      className="w-full lg:max-w-[146px] overflow-hidden lg:!h-fit transition-all"
    >
      <div
        onClick={() => setHeight(height === 30 ? items.length * 42 + 30 : 30)}
        className="flex justify-between items-center"
      >
        <p className="text-textPrimary font-bold text-base leading-[18px]">
          {title}
        </p>
        <span className="text-textPrimary font-bold text-base leading-[18px] lg:hidden">
          {height !== 30 ? "-" : "+"}
        </span>
      </div>
      {items && (
        <div className="flex flex-col gap-6 mt-6">
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
