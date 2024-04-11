import Image from "next/image";

const Minecart = () => {

  return (
    <>
      <a href="#cart" className="hidden lg:flex gap-2 border border-borderPrimary rounded-lg h-[46px] items-center pl-[17px] pr-[14px]">
        <Image
          className=""
          src="/header/minicart-icon.svg"
          alt="Meu Carrinho"
          width={14}
          height={16}
          loading="eager"
          priority
        />
        <span className="text-textPrimary text-sm leading-[21px]">Meu Carrinho</span>
      </a>
      <a href="#cart" className="block lg:hidden w-8 h-8">
        <Image
          className=""
          src="/header/minicart-icon-mobile.svg"
          alt="Meu Carrinho"
          width={32}
          height={32}
          loading="eager"
          priority
        />
      </a>
    </>
  );
}

export default Minecart;