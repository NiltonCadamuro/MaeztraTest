import SubTitle from "../SubTitle";
import BusinessInformationCard from "./Card/BusinessInformationCard";

const BusinessInformation = () => {
  const infos = [
    {
      title: "Produtos importados",
      content: "Produto de Alta Qualidade",
      icon: "/infos/world.svg",
    },
    {
      title: "Estoque no Brazil",
      content: "Produtos mais perto de você!",
      icon: "/infos/warehouse.svg",
    },
    {
      title: "Trocas Garantidas",
      content: "Trocas em até 48 horas, vejas as regras",
      icon: "/infos/delivery.svg",
    },
    {
      title: "Ganhe 5% off",
      content: "Pagando à vista no Cartão",
      icon: "/infos/cupom.svg",
    },
    {
      title: "Frete Grátis",
      content: "Em compras acima de R$ 499,00",
      icon: "/infos/delivery-truck.svg",
    },
  ];

  return (
    <div>
      <SubTitle className="mt-6">Por que comprar na Maeztra?</SubTitle>
      <div>
        <div className="flex gap-[15px] overflow-x-auto overflow-y-hidden no-scroll-bar pt-[21px] pb-10 lg:pb-[74px] px-[31px] lg:px-4 max-w-[1630px] mx-auto w-full">
          {infos.map((info, index) => (
            <BusinessInformationCard
              title={info.title}
              content={info.content}
              icon={info.icon}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
