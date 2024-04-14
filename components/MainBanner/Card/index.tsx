import Image from "next/image";
import { MainBannerCardProps } from "./types";
import { montserrat } from "@/app/fonts";

const MainBannerCard = ({ title, description, image, imageMobile, link }: MainBannerCardProps) => {
  return (
    <div className="flex flex-col relative w-full aspect-[9/8] lg:aspect-[16/5]">
      <Image
        className="block lg:hidden absolute z-0 top-0 left-0 w-full aspect-[9/8] lg:aspect-[16/5]"
        src={imageMobile}
        alt="Imagem do banner principal"
        width={360}
        height={320}
        loading="eager"
        quality={100}
        priority
      />
      <Image
        className={`hidden lg:block absolute z-0 top-0 left-0 w-full aspect-[9/8] lg:aspect-[16/5] h-full`}
        src={image}
        alt="Imagem do banner principal"
        width={1920}
        height={600}
        loading="eager"
        priority
      />
      <div className="z-10 container w-full h-full xl:pt-[151px] lg:pt-[91px] lg:pl-[162px] px-[63px] lg:px-0 lg:mb-4 flex items-center">
        <div className="w-full max-w-[471px] lg:h-full">
          <h1 className={`${montserrat.className} text-textSecondary text-[30px] leading-[37px] lg:text-[40px] lg:leading-[49px] font-bold pr-[11px] lg:pr-0`}>{title}</h1>
          <p className={`${montserrat.className} text-textSecondary text-sm leading-[17px] lg:text-xl lg:leading-6 font-normal mt-6 lg:mt-10 mb-4 lg:mb-8`}>{description}</p>
          <a href={link} className={`${montserrat.className} bg-surfaceSecondary text-textSecondary font-bold text-sm lg:text-base rounded-[4px] lg:rounded-[10px] h-7 lg:h-12 w-full max-w-[76px] lg:max-w-[128px] flex items-center justify-center`}>
            Conferir
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainBannerCard;