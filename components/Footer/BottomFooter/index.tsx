import { openSans } from "@/app/fonts";
import Image from "next/image";

const BottomFooter = () => {
  return (
    <div className="w-full bg-surfaceTertiary h-[233px] lg:h-[85px] px-5 pt-6 lg:pt-0">
      <div className="container flex flex-col lg:flex-row lg:justify-between h-full items-center gap-8 lg:gap-[12rem]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:w-full max-w-[953px] gap-8 lg:gap-28 items-center">
          <div className="flex gap-6 lg:gap-[22px]">
            <a href="/facebook" target="_blank">
              <Image
                className=""
                src="/maeztra-test/facebook.svg"
                alt="Facebook"
                width={32}
                height={32}
                loading="lazy"
              />
            </a>
            <a href="/linkedin" target="_blank">
              <Image
                className=""
                src="/maeztra-test/linkedin.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                loading="lazy"
              />
            </a>
            <a href="/instagram" target="_blank">
              <Image
                className=""
                src="/maeztra-test/instagram.svg"
                alt="Instagram"
                width={32}
                height={32}
                loading="lazy"
              />
            </a>
            <a
              href="/youtube"
              target="_blank"
              className="w-[32px] h-[32px] flex justify-center items-center"
            >
              <Image
                className=""
                src="/maeztra-test/youtube.svg"
                alt="YouTube"
                width={32}
                height={22}
                loading="lazy"
              />
            </a>
          </div>
          <div className="flex gap-6 lg:gap-[22px]">
            <Image
              className=""
              src="/maeztra-test/payment-flags/visa.svg"
              alt="Visa"
              width={32}
              height={25}
              loading="lazy"
            />
            <Image
              className=""
              src="/maeztra-test/payment-flags/mastercard.svg"
              alt="Mastercard"
              width={32}
              height={25}
              loading="lazy"
            />
            <Image
              className=""
              src="/maeztra-test/payment-flags/visa.svg"
              alt="Visa"
              width={32}
              height={25}
              loading="lazy"
            />
            <Image
              className=""
              src="/maeztra-test/payment-flags/mastercard.svg"
              alt="Mastercard"
              width={32}
              height={25}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex gap-5 w-full max-w-[207px] lg:h-full lg:pt-[19px] lg:pb-[17px]">
          <div className="flex flex-col gap-[7px]">
            <span
              className={`${openSans.className} text-[10px] text-textSecondary leading-4 font-normal opacity-60 lg:opacity-70`}
            >
              Powered by
            </span>
            <Image
              className="opacity-60 lg:opacity-100"
              src="/maeztra-test/vtex-logo.png"
              alt="VTEX"
              width={68}
              height={25}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <span
              className={`${openSans.className} text-[10px] text-textSecondary leading-4 font-normal opacity-60 lg:opacity-70`}
            >
              Developed by
            </span>
            <Image
              className="opacity-60 lg:opacity-100"
              src="/maeztra-test/logo-maeztra-footer.png"
              alt="Maeztra"
              width={119}
              height={29}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
