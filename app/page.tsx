import BannerOutono from "@/components/BannerOutono";
import Brands from "@/components/Brands";
import BusinessInformation from "@/components/BusinessInformation";
import MainBanner from "@/components/MainBanner";
import NewsletterModal from "@/components/NewsletterModal";
import Shelf from "@/components/Shelf";

export default function Home() {
  return (
    <main className="w-full">
      <NewsletterModal />
      <MainBanner
        items={[
          {
            title: "Promoções de Outono",
            description:
              "Confiras os melhores looks para combinar com você nesse Outono",
            image: "/fullbanner.png",
            imageMobile: "/fullbanner-mobile.png",
            link: "/link-1",
          },
          {
            title: "Promoções de Outono",
            description:
              "Confiras os melhores looks para combinar com você nesse Outono 2",
            image: "/fullbanner.png",
            imageMobile: "/fullbanner-mobile.png",
            link: "/link-2",
          },
          {
            title: "Promoções de Outono",
            description:
              "Confiras os melhores looks para combinar com você nesse Outono 3",
            image: "/fullbanner.png",
            imageMobile: "/fullbanner-mobile.png",
            link: "/link-3",
          },
          {
            title: "Promoções de Outono",
            description:
              "Confiras os melhores looks para combinar com você nesse Outono 3",
            image: "/fullbanner.png",
            imageMobile: "/fullbanner-mobile.png",
            link: "/link-3",
          },
        ]}
      />
      <BusinessInformation />
      <Brands />
      <Shelf />
      <BannerOutono />
    </main>
  );
}
