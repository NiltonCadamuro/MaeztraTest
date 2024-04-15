import BottomFooter from "./BottomFooter";
import MenuAcourdeon from "./MenuAcourdeon";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer>
      <Newsletter />
      <div className="bg-surfacePrimary px-[31px] w-full pt-[37px] lg:pt-10 min-h-[182px] lg:h-[291px]">
        <div className="w-full max-w-[952px] mx-auto flex flex-col lg:flex-row">
          <MenuAcourdeon
            title="Informações"
            items={[
              { label: "Quem Somos", url: "/quem-somos" },
              { label: "Prazo de Envio", url: "/prazo-de-envio" },
              { label: "Trocas e Devoluções", url: "/trocas-e-devolucoes" },
              { label: "Promoções e Cupons", url: "/promocoes-e-cupons" },
            ]}
          />
          <div className="flex flex-col lg:flex-row w-full lg:justify-end lg:gap-[212px]">
            <MenuAcourdeon
              title="Minha Conta"
              items={[
                { label: "Minha Conta", url: "/minha-conta" },
                { label: "Meus Pedidos", url: "/meus-pedidos" },
                { label: "Cadastre-se", url: "/cadastre-se" },
              ]}
            />
            <MenuAcourdeon
              title="Onde nos Encontrar"
              items={[
                { label: "Lojas", url: "/lojas" },
                { label: "Endereço", url: "/Endereço" },
              ]}
            />
          </div>
        </div>
      </div>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
