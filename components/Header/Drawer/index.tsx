"use client";

import Image from "next/image";
import { useState } from "react";
import Menu from "../Menu";

const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <div className="block lg:hidden">
        <div onClick={() => setDrawerOpen(true)} className="w-8 h-8 flex items-center justify-center">
          <Image
            className=""
            src="/header/drawer.svg"
            alt="Menu"
            width={32}
            height={32}
            loading="eager"
            priority
          />
        </div>
        <div className={`${drawerOpen ? "left-0" : "-left-full"} w-screen h-screen fixed top-0 transition-all backdrop-brightness-50 z-30`}>
          <div className="max-w-[90%] w-full h-full bg-surfacePrimary px-4 relative">
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
            <div onClick={() => setDrawerOpen(false)} className="absolute right-4 top-4">
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
            <a href="#minha-conta" className="flex gap-2 py-3">
              <Image
                className=""
                src="/header/myaccount-icon.svg"
                alt="Minha Conta"
                width={16}
                height={16}
                loading="eager"
                priority
              />
              <span className="text-textPrimary text-sm leading-[21px]">Minha Conta</span>
            </a>
            <a href="#wishlist" className="flex gap-2 py-3">
              <Image
                className=""
                src="/header/wishlist-icon.svg"
                alt="Minha Conta"
                width={16}
                height={16}
                loading="eager"
                priority
              />
              <span className="text-textPrimary text-sm leading-[21px]">Minha Conta</span>
            </a>
            <div className="mt-2">
              <Menu items={[
                {
                  title: "Novidades",
                  url: "/novidades",
                  color: "#FAA500",
                  bold: true,
                  icon: "/header/novidades-icon.svg",
                },
                {
                  title: "Vestidos",
                  url: "/vestidos",
                },
                {
                  title: "Roupas",
                  url: "/roupas",
                },
                {
                  title: "Sapatos",
                  url: "/sapatos",
                },
                {
                  title: "Lingerie",
                  url: "/lingerie",
                },
                {
                  title: "Acessórios",
                  url: "/acessorios",
                },
                {
                  title: "OUTLET",
                  url: "/outlet",
                },
              ]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;