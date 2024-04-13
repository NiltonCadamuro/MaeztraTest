import MainBanner from "@/components/MainBanner";
import ProductSummary from "@/components/Shelf/ProductSummary";

export default function Home() {
  return (
    <main className="w-full">
      <MainBanner items={[
        {
          title: "Promoções de Outono",
          description: "Confiras os melhores looks para combinar com você nesse Outono",
          image: "/fullbanner.png",
          imageMobile: "/fullbanner-mobile.png",
          link: "/link-1",
        },
        {
          title: "Promoções de Outono",
          description: "Confiras os melhores looks para combinar com você nesse Outono 2",
          image: "/fullbanner.png",
          imageMobile: "/fullbanner-mobile.png",
          link: "/link-2",
        },
        {
          title: "Promoções de Outono",
          description: "Confiras os melhores looks para combinar com você nesse Outono 3",
          image: "/fullbanner.png",
          imageMobile: "/fullbanner-mobile.png",
          link: "/link-3",
        },
        {
          title: "Promoções de Outono",
          description: "Confiras os melhores looks para combinar com você nesse Outono 3",
          image: "/fullbanner.png",
          imageMobile: "/fullbanner-mobile.png",
          link: "/link-3",
        },
      ]}
      />
      <ProductSummary product={
        {
          image: "/products/product-1.png",
          name: "Faux Suede Mini Skirt",
          description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
          price: 500,
          link: "/product-1",
          skus: [
            {
              id: "laranja",
              color: "#DEAC71",
            },
            {
              id: "rosa",
              color: "#D37164",
            },
            {
              id: "azul",
              color: "#6497D3",
            },
            {
              id: "roxo",
              color: "#3C3B79",
            }
          ],
        }
      }

      />
    </main>
  );
}
