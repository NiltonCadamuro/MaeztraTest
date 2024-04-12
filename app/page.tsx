import MainBanner from "@/components/MainBanner";

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
    </main>
  );
}
