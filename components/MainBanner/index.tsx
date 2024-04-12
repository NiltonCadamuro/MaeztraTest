import Slider from "../Slider";
import MainBannerCard from "./Card";
import { MainBannerCardProps } from "./Card/types";

const MainBanner = ({ items }: {
  items: MainBannerCardProps[];
}) => {
  return (
    <section className="w-full aspect-[9/8] lg:aspect-[16/5]">
      <Slider
        sliderName='main-banner'
        slidesPerView={1}
        spaceBetween={0}
        dots
        arrow
      >
        {items.map((item, index) => (
          <MainBannerCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            imageMobile={item.imageMobile}
            link={item.link}
          />
        ))}
      </Slider>
    </section>
  );
}

export default MainBanner;