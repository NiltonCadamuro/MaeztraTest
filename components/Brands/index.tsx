import Image from "next/image";
import Title from "../Title";

const Brands = () => {
  const brands = [
    "/brands/comma.png",
    "/brands/melissa.png",
    "/brands/forever21.png",
    "/brands/zara.png",
    "/brands/ann-taylor.png",
  ];
  return (
    <section className="">
      <div className="">
        <Title>Marcas Parceiras</Title>
        <div className="flex gap-[15px] overflow-x-auto overflow-y-hidden no-scroll-bar pt-6 pb-10 lg:pb-20 px-[31px] lg:px-4 max-w-[1630px] mx-auto w-full">
          {brands.map((brand, index) => (
            <div className="w-[308px] min-w-[289px] lg:min-w-[unset] h-fit lg:min-h-[64px] box-border rounded shadow-brands lg:shadow-transparent bg-white" key={index}>
              <Image
                className="lg:max-h-[64px] min-h-[62px] object-cover aspect-[149/31] lg:aspect-[77/16]"
                src={brand}
                alt="logo da marca"
                width={308}
                height={64}
                loading="eager"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
