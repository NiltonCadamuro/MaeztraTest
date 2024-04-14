"use client";

import Image from "next/image";
import { Product } from "./types";
import { useState } from "react";

const ProductSummary = (product: Product) => {
  const [skuSelected, setSkuSelected] = useState<string>(product.skus[0].id);

  return (
    <div className="w-full ProductSummary">
      <div className="max-w-[308px]">
      <Image
        className=""
        src={product.image}
        alt={`Imagem do produto ${product.name}`}
        width={308}
        height={381}
        loading="eager"
        quality={100}
        priority
      />
      </div>
      <div className="px-[27px] pb-4 max-w-[308px]">
        <div className="flex gap-2 my-2">
          {product.skus.map((sku) => (
            <div key={sku.id} onClick={() => setSkuSelected(sku.id)}>
              <div style={{ backgroundColor: sku.color, width: 27, height: 27 }} className={`${skuSelected === sku.id && "border border-borderSecondary"} rounded cursor-pointer`}></div>
            </div>
          ))}
        </div>
        <p className="font-bold text-xl leading-[30px] text-textPrimary">{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(product.price)
        }</p>
        <h3 className="text-textPrimary lg:text-textTertiary text-base mt-[2px] mb-2">{product.name}</h3>
        <p className="text-textPrimary lg:text-textTertiary text-xs leading-[18px] pr-[5px]">{product.description}</p>
        <a href={product.link} className="mt-2 w-full flex justify-center items-center h-[35px] rounded text-textSecondary bg-surfaceSecondary text-base leading-[35px] outline-none">Adicionar</a>
      </div>
    </div>
  );
}

export default ProductSummary;