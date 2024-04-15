"use client";

import { lato } from "@/app/fonts";
import Image from "next/image";
import { use, useEffect, useState } from "react";

const NewsletterModal = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className={`${open ? 'flex animate-fadeIn' : 'hidden'} fixed inset-0 bg-black bg-opacity-70 z-50 justify-center lg:items-center px-[31px]`}>
      <div className="w-full max-w-[848px] mx-auto mt-[85px] lg:mt-0">
        <div className="flex justify-end lg:mb-[6px]">
          <button onClick={() => setOpen(false)} className={`${lato.className} text-textSecondary text-xs leading-5`}>FECHAR</button>
        </div>
        <div className="bg-surfaceModal w-full flex">
          <div className="hidden lg:w-1/2 lg:block">
            <Image
              className=""
              src="/bg-newsletter.png"
              alt="imagem da newsletter modal"
              width={426}
              height={531}
              loading="eager"
              priority
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-[322px] flex flex-col items-center pt-10 lg:pt-0 pb-[24px] lg:pb-[43px] px-5">
              <Image
                className=""
                src="/newsletter-mail-icon.svg"
                alt="imagem da newsletter modal"
                width={28}
                height={30}
                loading="eager"
                priority
              />
              <p className="text-xs leading-5 text-center text-textNewsletterPrimary my-[13px] uppercase">Bem Vindo à MAEZTRA</p>
              <p className="text-base lg:text-xl leading-[23px] text-center text-textNewsletterSecondary max-w-[260px] px-4 lg:px-0">Receba em Primeira mão <strong>desconto e ofertas exclusivas</strong></p>
              <input
                type="email"
                className="w-full h-10 text-xs leading-[20px] text-textNewsletterSecondary placeholder:text-textNewsletterSecondary bg-transparent border border-borderNewsletter outline-none rounded-[10px] mt-[25px] mb-3 px-[13px]"
                placeholder="Digite seu e-mail"
              />
              <button className="bg-surfaceSecondary rounded-lg h-10 px-6 w-full flex justify-center items-center gap-2">
                <span className="text-textSecondary font-bold text-xs leading-5">ENVIAR</span>
                <Image
                  className=""
                  src="/icon-send-newsletter.svg"
                  alt="imagem da newsletter modal"
                  width={12}
                  height={20}
                  loading="eager"
                  priority
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterModal;