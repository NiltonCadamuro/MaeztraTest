import Image from "next/image";
import { BusinessInformationCardProps } from "./types";

const BusinessInformationCard = ({ title, content, icon }: BusinessInformationCardProps) => {
    return (
        <div className="w-[308px] min-w-[289px] lg:min-w-[unset] min-h-[64px] box-border rounded flex gap-[21px] lg:gap-[22px] justify-between bg-surfaceInfos pl-[26px] pr-[19px] lg:px-[26px]">
              <Image
                className=""
                src={icon}
                alt="icone de informação"
                width={32}
                height={32}
                loading="eager"
                priority
              />
              <div className="flex flex-col w-full max-w-[200px] justify-center">
                <h4 className="font-bold text-sm leading-[21px] text-textPrimary">{title}</h4>
                <p className="text-xs leading-[18px] text-textTertiary">{content}</p>
              </div>
            </div>
    );
}

export default BusinessInformationCard;