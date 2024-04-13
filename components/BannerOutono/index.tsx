import Image from "next/image";

const BannerOutono = () => {
    return (
        <div className="px-[31px] lg:px-4 mt-[7px] mb-10 lg:mt-16 lg:mb-20">
<div className="flex flex-col lg:flex-row gap-6 justify-between lg:items-center container">
            <div className="w-full lg:max-w-[420px]">
                <h3 className="text-textTertiary font-bold text-2xl leading-[37px] mb-4">Lorem ipsum </h3>
                <p className="block lg:hidden text-textTertiary text-sm leading-[21.5px] pr-[29px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .
                </p>
                <p className="hidden lg:block text-textTertiary text-sm leading-[21.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
                </p>
            </div>
            <div className="w-full max-w-[1114px]">
            <Image
                className="block lg:hidden aspect-[289/184] w-full"
                src="/banner-outono-mobile.png"
                alt="Banner outono"
                width={289}
                height={184}
                loading="lazy"
              />
              <Image
                className="hidden lg:block aspect-[557/240] w-full"
                src="/banner-outono.png"
                alt="Banner outono"
                width={1114}
                height={480}
                loading="lazy"
              />
            </div>
        </div>
        </div>
        
    )
}

export default BannerOutono;