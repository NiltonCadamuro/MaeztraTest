const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={`${className} w-full text-center text-base leading-[24px] text-textPrimary font-bold`}
  >
    {children}
  </h3>
);

export default SubTitle;
