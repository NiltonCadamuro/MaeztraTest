import Image from "next/image";
import TopBarHeader from "./TopBarHeader";
import SearchBar from "./SearchBar";
import Minecart from "./Minicart";
import Drawer from "./Drawer";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="bg-surfaceHeader sticky z-50">
      <TopBarHeader text="Acompanhe as melhores promoções disponíveis aqui na Maeztra." />
      <div className="px-4 shadow-header">
        <div className="container flex justify-between h-[88px] gap-[31px] lg:gap-5">
          <div className="flex justify-between gap-5 items-center w-full max-w-[1031px] overflow-hidden">
            <div className="flex items-center gap-5">
              <Drawer />
              <Image
                className="max-w-[100px] lg:max-w-[unset]"
                src="/logo.png"
                alt="Maeztra"
                width={147}
                height={18}
                loading="eager"
                priority
              />
            </div>
            <SearchBar />
          </div>
          <div className="flex items-center justify-between lg:w-full max-w-[422px] gap-1">
            <div className="hidden lg:flex items-center justify-between w-full max-w-[240px] gap-1">
              <a href="#minha-conta" className="flex gap-2">
                <Image
                  className=""
                  src="/header/myaccount-icon.svg"
                  alt="Minha Conta"
                  width={14}
                  height={16}
                  loading="eager"
                  priority
                />
                <span className="text-textPrimary text-sm leading-[21px]">
                  Minha Conta
                </span>
              </a>
              <a href="#wishlist" className="flex gap-2">
                <Image
                  className=""
                  src="/header/wishlist-icon.svg"
                  alt="Minha Conta"
                  width={18}
                  height={16}
                  loading="eager"
                  priority
                />
                <span className="text-textPrimary text-sm leading-[21px]">
                  Minha Conta
                </span>
              </a>
            </div>
            <div>
              <Minecart />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex h-[48px] items-start justify-center container">
        <Menu
          items={[
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
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
