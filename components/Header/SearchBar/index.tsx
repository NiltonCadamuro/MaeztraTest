"use client";

import Image from "next/image";
import { useState } from "react";

const SearchBar = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <>
      <div className="block lg:hidden">
        <div onClick={() => setSearchOpen(true)} className="w-8 h-8 flex items-center justify-center">
          <Image
            className=""
            src="/header/search-icon.svg"
            alt="Buscar"
            width={24}
            height={24}
            loading="eager"
            priority
          />
        </div>
        <div className={`${searchOpen ? "right-0" : "-right-full"} w-screen h-screen fixed top-0 transition-all backdrop-brightness-50 flex justify-end`}>
          <div className="max-w-[90%] w-full h-full bg-surfacePrimary px-4">
            <div className="py-5">
              <Image
                className=""
                src="/logo.png"
                alt="Maeztra"
                width={147}
                height={18}
                loading="eager"
                priority
              />
            </div>
            <div onClick={() => setSearchOpen(false)} className="absolute right-4 top-4">
              <Image
                className=""
                src="/header/X.svg"
                alt="Fechar"
                width={24}
                height={24}
                loading="eager"
                priority
              />
            </div>
            <div className="flex items-center h-10 max-w-[791px] w-full rounded-[10px] bg-surfaceSearchBar pl-6">
              <input
                type="text"
                className="w-full h-10 text-xs leading-[18px] text-textPrimary placeholder:text-textPrimary bg-transparent outline-none"
                placeholder="O Que Você Busca?"
              />
              <button className="bg-surfaceSecondary text-textSecondary font-normal text-sm rounded-lg h-10 px-6 w-full max-w-[119px]">
                Buscar
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="lg:flex hidden items-center h-10 max-w-[791px] w-full rounded-[10px] bg-surfaceSearchBar pl-6">
        <input
          type="text"
          className="w-full h-10 text-xs leading-[18px] text-textPrimary placeholder:text-textPrimary bg-transparent outline-none"
          placeholder="O Que Você Busca?"
        />
        <button className="bg-surfaceSecondary text-textSecondary font-normal text-sm rounded-lg h-10 px-6 w-full max-w-[119px]">
          Buscar
        </button>
      </div>
    </>

  );
};

export default SearchBar;