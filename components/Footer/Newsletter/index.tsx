const Newsletter = () => {
  return (
    <div className="w-full px-[31px] h-[120px] flex lg:items-center bg-surfacePrimary border-t-2 border-b-2 border-borderFooter">
      <div className="w-full max-w-[952px] mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        <p className="text-textTertiary font-bold text-2xl leading-[38px] mt-[22px] lg:mt-0 mb-2 lg:mb-0">
          Recebe Nossa Newsletter
        </p>
        <div className="flex gap-[15px] lg:gap-0 items-center h-[26px] lg:h-10 max-w-[630px] w-full lg:rounded-[4px] lg:bg-white lg:pl-6 lg:border lg:border-borderSecondary lg:border-r-0">
          <input
            type="email"
            className="w-full py-[2px] lg:py-0 lg:h-10 text-sm text-textPrimary placeholder:text-textPrimary bg-white lg:bg-transparent outline-none pl-6 lg:pl-0 border border-borderSecondary lg:border-none rounded-[4px]"
            placeholder="Digite seu e-mail"
          />
          <button className="bg-surfaceSecondary text-textSecondary font-bold text-sm lg:text-base rounded-[4px] h-[26px] lg:h-10 w-full max-w-[79px] lg:max-w-[131px]">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
