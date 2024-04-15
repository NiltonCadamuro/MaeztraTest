const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1
    className={`${className} w-full text-center text-2xl lg:text-[32px] leading-[37px] lg:leading-[49px] text-textPrimary font-bold`}
  >
    {children}
  </h1>
);

export default Title;
