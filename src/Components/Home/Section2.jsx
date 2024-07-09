const Section2 = () => {
    return (
        <section className="mt-20 px-4 md:pl-[57px] md:pr-[45px] text-white">
            <h2 className="font-w3 text-3xl md:text-[55px] md:leading-[66.56px] text-center ">
                Our Trendy plants
            </h2>
            <div className="glass px-4 py-10 md:px-[33px] md:py-[125px] mt-[82px] md:mt-[130px] border-2 border-[#FFFFFF45] flex backdrop-blur-[25px] rounded-[35px] md:rounded-[100px] ">
                <div className="hidden md:block flex-[1]"></div>
                <div className="flex-[1] space-y-6">
                    <h3 className="font-f1 font-w3 text-2xl md:text-[38px] md:leading-[45.99px]">
                        For Small Decs Ai Plat
                    </h3>

                    <p className="font-f1 font-w3 text-sm md:text-[20px] md:leading-[24.2px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                    <p className="font-f1 font-w3 text-2xl md:text-[38px] md:leading-[45.99px]">
                        Rs. 599/-
                    </p>
                    <div className="flex items-center gap-8">
                        <button className="w-[105px] md:w-[217px] text-lg md:text-[28px] flex items-center justify-center leading-[33.89px] h-10 md:h-[64px] text-white border rounded-md md:rounded-[12px]">
                            Explore
                        </button>
                        <button className="w-10 md:w-[64px] text-[28px] flex items-center justify-center leading-[33.89px] h-10 md:h-[64px] text-white border rounded-[8px] md:rounded-[12px]">
                            <img
                                src="/bag.png"
                                alt="cart"
                                className="w-6 md:w-[34px] h-6 md:h-[34px]"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="glass px-4 md:px-[122px]  py-10 md:py-[125px] mt-[90px] md:mt-[130px] border-2 border-[rgba(255,255,255,0.27)] flex backdrop-blur-[25px] rounded-[35px] md:rounded-[100px] ">
                <div className="flex-[1] space-y-6">
                    <h3 className="font-f1 font-w3 text-2xl md:text-[38px] md:leading-[45.99px]">
                        For Fresh Decs Ai Plat
                    </h3>

                    <p className="font-f1 font-w3 text-sm md:text-[20px] md:leading-[24.2px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                    <p className="font-f1 font-w3 text-2xl md:text-[38px] leading-[45.99px]">
                        Rs. 599/-
                    </p>
                    <div className="flex items-center gap-8">
                        <button className="w-[105px] md:w-[217px] text-lg md:text-[28px] flex items-center justify-center leading-[33.89px] h-10 md:h-[64px] text-white border rounded-md md:rounded-[12px]">
                            Explore
                        </button>
                        <button className="w-10 md:w-[64px] text-[28px] flex items-center justify-center leading-[33.89px] h-10 md:h-[64px] text-white border rounded-[8px] md:rounded-[12px]">
                            <img
                                src="/bag.png"
                                alt="cart"
                                className="w-6 md:w-[34px] h-6 md:h-[34px]"
                            />
                        </button>
                    </div>
                </div>
                <div className="hidden md:block flex-[1]"></div>

            </div>
        </section>
    );
};

export default Section2;
